import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'params', description: "SearchItem的值会根据类型自己去初始化，也可以写初始化的默认值，如param:{name:'troye'}", type: 'Object', value: '', default: '{}' },
  { name: 'labelWidth', description: '宽度', type: 'String', value: '', default: '120px' },
  { name: 'storeKey', description: '用来保存搜索值的唯一key', type: 'String', value: '', default: '' }
]

export const methods: DocumentMethod[] = [
  { name: 'search', description: '点击搜索按钮时触发的事件', parameter: 'Function(Object)' },
  { name: 'reset', description: '点击重置按钮时触发的事件，不需要写重置params的代码，组件内部已经处理，如果需要触发其他事件时才需要写', parameter: 'Function()' }
]

export const document: ElDocument = { attributes, methods }

export default document
