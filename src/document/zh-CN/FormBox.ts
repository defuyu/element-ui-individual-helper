import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: "FormItem的值会根据类型自己去初始化，也可以写初始化的默认值，如param:{name:'troye'}", type: 'Object', value: '', default: '{}' },
  { name: 'labelWidth', description: '宽度', type: 'String', value: '', default: '120px' },
  { name: 'readOnly', description: '是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 readOnly 属性不再生效', type: 'Boolean', value: '', default: 'false' },
  { name: 'row', description: '展示需要几列', type: 'Number', value: '', default: '2' },
  { name: 'rules', description: '表单校验规则', type: 'Object', value: '', default: '' },
  { name: 'emptyStr', description: '空值处理', type: 'String', value: '', default: '"--"' },
  { name: 'labelWidth', description: 'label列的宽度', type: 'String', value: '', default: '100px' },
  { name: 'borderless', description: '无背景色表单样式', type: 'Boolean', value: '', default: 'false' }
]

export const methods: DocumentMethod[] = [
  { name: 'checkForm', description: '表单校验', parameter: '返回一个promise' },
  {
    name: 'validate',
    description: '对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise',
    parameter: 'Function(callback: Function(boolean, object))'
  },
  { name: 'validateField', description: '点对部分表单字段进行校验的方法', parameter: 'Function(props: array' },
  { name: 'reset', description: '点击重置按钮时触发的事件，不需要写重置params的代码，组件内部已经处理，如果需要触发其他事件时才需要写', parameter: 'Function()' }
]

export const document: ElDocument = { attributes, methods }

export default document
