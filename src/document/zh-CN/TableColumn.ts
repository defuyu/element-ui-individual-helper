import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'label', description: '展示的标签名', type: 'Number，String', value: '', default: '' },
  { name: 'prop', description: '属性名', type: 'Number，String', value: '', default: '' },
  { name: 'enuKey', description: 'prop的在统一枚举值里面的枚举key （isAcc属性仅仅供账务系统使用）', type: 'Array', value: '', default: '' },
  { name: 'isMoeny', description: '格式化金额使用', type: 'Boolean', value: '', default: 'false' },
  { name: 'moneyPrefix', description: '金额前缀', type: 'String', value: '', default: '' },
  { name: 'isAccount', description: '格式化银行账户号使用', type: 'Boolean', value: '', default: 'false' },
  { name: 'isHiddenAccount', description: '格式化银行账户号使用，加上***', type: 'Boolean', value: '', default: 'false' },
  { name: 'options', description: "如果item的值是一个枚举值。枚举值没有在统一接口返回，需要自定义枚举值列表。[{label:'',value:''}]", type: 'Array', value: '', default: '[]' },
  { name: 'emptyStr', description: '空字符串占位，该属性优先级大于TheBasicTable提供emptyStr属性', type: 'String', value: '', default: '""' },
  { name: 'formatter', description: '用来格式化内容', type: 'Function(row, column, cellValue, index)', value: '', default: '' },
  { name: 'type', description: '特定类型用于格式化值', type: 'String', value: 'date/dateTime/percentage/money', default: '' },
  { name: 'use', description: '对标e l-table-column的type属性下的列的类型', type: 'String', value: 'indexColumn/expendColumn', default: '' }
]

export const document: ElDocument = { attributes }

export default document
