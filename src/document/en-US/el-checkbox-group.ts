import { ElDocument } from 'typings/document'
import { DocumentAttribute } from 'typings/attribute'
import { DocumentEvent } from 'typings/event'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'array', value: '—', default: '—' },
  { name: 'size', description: 'size of checkbox buttons or bordered checkboxes', type: 'string', value: 'medium / small / mini', default: '—' },
  { name: 'disabled', description: 'whether the nesting checkboxes are disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'min', description: 'minimum number of checkbox checked', type: 'number', value: '—', default: '—' },
  { name: 'max', description: 'maximum number of checkbox checked', type: 'number', value: '—', default: '—' },
  { name: 'text-color', description: 'font color when button is active', type: 'string', value: '—', default: '#ffffff' },
  { name: 'fill', description: 'border and background color when button is active', type: 'string', value: '—', default: '#409EFF' }
]

export const events: DocumentEvent[] = [{ name: 'change', description: 'triggers when the binding value changes', parameter: 'the updated value' }]

export const document: ElDocument = { attributes, events }

export default document