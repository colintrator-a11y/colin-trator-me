/**
 * Every image in src/assets/projects/ becomes an entry here, keyed by its file
 * name — so adding a project means dropping the file in that folder and naming
 * it in `media` below. Vite hashes the emitted files, so replacing an image
 * cannot leave visitors on a cached old one.
 */
const files = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,gif,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const projectMedia = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop(), url]),
)
