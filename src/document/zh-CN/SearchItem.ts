import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'label', description: '标签名', type: 'Number,String', value: '', default: '' },
  { name: 'prop', description: '对应item的字段名', type: 'string', value: '', default: '' },
  { name: 'type', description: '搜索的类型，见下表的类型列表, 注意备注，来源于统一枚举值的Key', type: 'string', value: '', default: '' },
  { name: 'enuKey', description: '适用于type=select', type: 'string', value: '', default: '' },
  { name: 'options', description: "适用于type=select，格式：[{label:'',value:''}]", type: 'Array', value: '', default: '' },
  { name: 'isAcc', description: '仅仅适用于账务系统：适用于type=select', type: 'Boolean', value: '', default: 'false' },
  { name: 'required', description: '有的需求是需要有一个必填的搜索条件时使用', type: 'Boolean', value: '', default: 'false' },
  { name: 'disabled', description: '有的需求是需要有默认值且不可以更改，在点击重置按钮的时候，值不会被重置', type: 'Boolean', value: '', default: 'false' },
  { name: 'type类型', description: '说明', type: '类型', value: '可选值', default: '默认值' },
  { name: 'input', description: '文本输入框类型', type: '', value: '', default: '' },
  { name: 'select', description: "下拉框类型，如果需要多选，增加multiple属性，返回的值为jion(',')后返回的值", type: '', value: '', default: '' },
  { name: 'number', description: '输入数字类型', type: '', value: '', default: '' },
  { name: 'cascader', description: 'cascader类型，options需要传入', type: '', value: '', default: '' },
  { name: 'date', description: '日期选择类型', type: '', value: '', default: '' },
  { name: 'daterange', description: "日期区间选择类型，需要增加rangeKey 属性 ['start','end']", type: '', value: '', default: '' },
  { name: 'datetimerange', description: "时间区间选择类型，需要增加rangeKey 属性 ['start','end']", type: '', value: '', default: '' },
  { name: 'numberRange', description: "数字区间选择类型，需要增加rangeKey 属性 ['start','end']", type: '', value: '', default: '' }
]

export const document: ElDocument = { attributes }

export default document
