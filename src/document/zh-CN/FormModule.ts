import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'row', description: '展示需要几列', type: 'Number', value: '', default: '2' },
  { name: 'label', description: '展示的标签名', type: 'Number，String', value: '', default: '2' },
  { name: 'prop', description: '属性名', type: 'Number，String', value: '', default: '2' },
  { name: 'align', description: '文本展示对齐方式', type: 'String', value: 'left，center，right', default: '' },
  { name: 'required', description: '是否展示必填*', type: 'Boolean', value: '', default: 'false' },
  { name: 'tips', description: 'label前面的小问号的展示内容', type: 'String', value: '', default: '' },
  { name: 'cover', description: 'item占用几列 ，如果 FormModule的 row为2，需要占用整行，则cover=2', type: 'Number', value: '', default: 'false' },
  { name: 'enuKey', description: '如果item的值是一个枚举值，enuKey为统一枚举值接口返回的key  （isAcc属性仅仅供账务系统使用）', type: 'Number，String。', value: '', default: '' },
  { name: 'options', description: '如果item的值是一个枚举值。枚举值没有在统一接口返回，需要自定义枚举值列表', type: 'Array', value: '', default: "[{label:'',value:''}]" },
  { name: 'formatter', description: '格式化显示item值的方法', type: 'Function', value: '', default: 'function(row, val, key){}' },
  { name: 'isMoeny', description: '格式化金额使用', type: 'Boolean', value: '', default: 'false' },
  { name: 'isAccount', description: '格式化银行账户号使用', type: 'Boolean', value: '', default: 'false' },
  { name: 'isHiddenAccount', description: '格式化银行账户号使用，加上***', type: 'Boolean', value: '', default: 'false' }
]

export const document: ElDocument = { attributes }

export default document
