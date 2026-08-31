#!/usr/bin/env python3
"""Shrink a screen-recording GIF for the projects section.

    python3 scripts/optimize-gif.py in.gif src/assets/projects/out.gif [--width 480] [--step 2]

Pillow does the resampling (LANCZOS) and quantises every frame against one
palette with dithering OFF, then gifsicle does the inter-frame optimisation.
The order matters: letting gifsicle resize instead dithers flat backgrounds
into visible yellow-green noise, and giving each frame its own adaptive palette
defeats gifsicle's frame differencing and the file gets larger, not smaller.

--step drops frames (2 = every other one) and stretches each remaining frame's
delay to match, so the animation keeps its original running time.

gifsicle is not a dependency of this project; install it however you like, e.g.
`npm i gifsicle` in a scratch folder, and pass GIFSICLE=/path/to/gifsicle.
"""
import argparse
import os
import shutil
import subprocess
import sys
import tempfile

from PIL import Image, ImageSequence

parser = argparse.ArgumentParser()
parser.add_argument('source')
parser.add_argument('destination')
parser.add_argument('--width', type=int, default=480)
parser.add_argument('--step', type=int, default=2, help='keep every Nth frame')
parser.add_argument('--colors', type=int, default=64)
parser.add_argument('--lossy', type=int, default=30)
args = parser.parse_args()

gifsicle = os.environ.get('GIFSICLE') or shutil.which('gifsicle')
if not gifsicle:
    sys.exit('gifsicle not found — install it or set GIFSICLE=/path/to/gifsicle')

source = Image.open(args.source)
delay = (source.info.get('duration') or 20) * args.step


def scaled(frame):
    rgb = frame.convert('RGB')
    return rgb.resize((args.width, round(rgb.height * args.width / rgb.width)), Image.LANCZOS)


# Build the palette from a frame in the middle: the opening frames of a screen
# recording are often near-empty and give a palette that misses most of the UI.
source.seek(source.n_frames // 2)
palette = scaled(source).quantize(colors=args.colors, dither=Image.NONE)

source.seek(0)
frames = [
    scaled(frame).quantize(palette=palette, dither=Image.NONE)
    for index, frame in enumerate(ImageSequence.Iterator(source))
    if index % args.step == 0
]

with tempfile.NamedTemporaryFile(suffix='.gif', delete=False) as handle:
    intermediate = handle.name
frames[0].save(intermediate, save_all=True, append_images=frames[1:], duration=delay, loop=0)

subprocess.run([gifsicle, intermediate, '-O3', f'--lossy={args.lossy}', '-o', args.destination], check=True)
os.unlink(intermediate)

before = os.path.getsize(args.source) / 1e6
after = os.path.getsize(args.destination) / 1e6
print(f'{len(frames)} frames at {args.width}px — {before:.2f} MB → {after:.2f} MB')
