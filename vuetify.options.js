// import recursiveReaddir from 'recursive-readdir'

// console.log('vuetify.options.js is being hit', process.client)

// const localComponents = {}
// recursiveReaddir('components', (err, items) => {
//   console.log('error: ', err);
//   console.log('components: ', items);
//   for (const item of items) {
//     localComponents[item.replace(/^(.*[\\/])/, '').slice(0, -4)] = item.replace('src', '')
//   }
// })

// export default {
//   loaderOptions: {
//     match: (_originalTag, { kebabTag, camelTag }) => {
//       const comp = localComponents[kebabTag]
//       if (comp) {
//         return [camelTag, `import ${camelTag} from '~/${comp}'`]
//       }
//     }
//   }
// }