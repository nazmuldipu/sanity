import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {defaultDocumentNodeResolver, myStructure} from './src/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Nazmul-sanity',

  projectId: 'u3z7hv6o',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
      defaultDocumentNode: defaultDocumentNodeResolver,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
