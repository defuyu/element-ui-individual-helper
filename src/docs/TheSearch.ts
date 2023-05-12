import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'row', description: '默认展示几行', type: 'Number', value: '-', default: '2' },
  { name: 'formConfig', description: 'json配置', type: 'Array', value: '-', default: '' },
  { name: 'labelWidth', description: 'label的宽度，需要加上px', type: 'String', value: '-', default: '' },
  { name: 'disabledKey', description: '禁止修改的key的集合，因为有些默认值需要展示，但是不能修改', type: 'Array', value: '-', default: '' },
  { name: 'storeKey', description: '用来保存搜索值的唯一key', type: 'String', value: '-', default: '' },
  { name: 'options', description: '外部传递的枚举值的对象,一般都是从接口获取', type: 'Object', value: '-', default: "options:{list1:[{label:'',value:''}],list2:[{label:'',value:''}]}" }
]

export const events: DocumentEvent[] = [
  { name: 'search', description: '点击搜索按钮时触发的事件', parameter: 'Function(Object)' },
  { name: 'reset', description: '点击重置按钮时触发的事件', parameter: 'Function(Object)' },
  { name: 'change', description: '子属性触发的时候的事件', parameter: 'Function(Key) 回调是变化值的key' }
]

export const document: ElDocument = { attributes, events }

export default document
