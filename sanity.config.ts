import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {defaultDocumentNodeResolver, myStructure} from './src/deskStructure'
import {visionTool} from '@sanity/vision'

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
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
