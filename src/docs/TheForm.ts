import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'formConfig', description: 'json配置', type: 'Array', value: '', default: '' },
  { name: 'labelWidth', description: 'label的宽度，需要加上px', type: 'String', value: '', default: '' },
  { name: 'columnNum', description: '一行展示几列', type: 'Number', value: '', default: '2' },
  { name: 'border', description: '是否需要边框，', type: 'Boolean', value: '', default: 'false' },
  { name: 'readonly', description: '是否是只读，提交按钮也会隐藏，', type: 'Boolean', value: '', default: 'false' },
  { name: 'extraVal', description: '额外的值。用来配置禁用以及必填，显示/隐藏的规则', type: 'Object', value: '', default: '' },
  { name: 'needSubmit', description: '是否需要提交按钮，如果不需要则使用$refs.name.submitFun()', type: 'Boolean', value: '', default: 'false' },
  { name: 'needReset', description: '是否需要重置按钮', type: 'Boolean', value: '', default: 'false' },
  { name: 'disabledKey', description: '禁止修改的key的集合，因为有些默认值需要展示，但是不能修改', type: 'Array', value: '', default: '' },
  { name: 'storeKey', description: '用来保存搜索值的唯一key', type: 'String', value: '', default: '' },
  { name: 'options', description: '外部传递的枚举值的对象,一般都是从接口获取', type: 'Object', value: '', default: "options:{list1:[{label:'',value:''}],list2:[{label:'',value:''}]}" },
  { name: 'validationRules', description: '表单的验证规则', type: 'Object', value: '', default: '{}' },
  { name: '@success', description: '表单成功之后触发的事件', type: 'Function(Object)', value: '', default: '' },
  { name: '@close', description: '点击取消按钮时触发的事件', type: 'Function(Object)', value: '', default: '' }
]

export const events: DocumentEvent[] = [{ name: 'submitFun', description: '点击提交按钮时触发的事件', parameter: '' }]

export const document: ElDocument = { attributes, events }

export default document
