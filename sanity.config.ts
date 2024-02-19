import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {defaultDocumentNodeResolver, myStructure} from './src/deskStructure'
import {visionTool} from '@sanity/vision'
import {inlineSvgInput} from '@focus-reactive/sanity-plugin-inline-svg-input'

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
    inlineSvgInput(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
