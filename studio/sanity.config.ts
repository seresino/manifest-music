import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {myStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'studio',

  projectId: '6t8mgkgb',
  dataset: 'roster',

  plugins: [
    structureTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
