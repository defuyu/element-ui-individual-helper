import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentScopedSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'label', description: '标签名', type: 'Number,String', value: '', default: '' },
  { name: 'prop', description: '对应item的字段名', type: 'string', value: '', default: '' },
  { name: 'use', description: '搜索的类型，见下表的类型列表, 注意备注。来源于统一枚举值的Key', type: 'string', value: '', default: '' },
  { name: 'enuKey', description: '适用于type=select', type: 'string', value: '', default: '' },
  { name: 'options', description: "适用于type=select，格式：[{label:'',value:''}]", type: 'Array', value: '', default: '[]' },
  { name: 'isAcc', description: '仅仅适用于账务系统：适用于type=select', type: 'Boolean', value: '', default: 'false' },
  { name: 'required', description: '有的需求是需要有一个必填的搜索条件时使用', type: 'Boolean', value: '', default: 'false' },
  { name: 'disabled', description: '是否需要禁用', type: 'Boolean', value: '', default: 'false' },
  { name: 'readOnly', description: '是否是只读', type: 'Boolean', value: '', default: 'false' },
  { name: 'readItem', description: '是否在整个表单禁用的情况下显示表单/插槽的内容', type: 'Boolean', value: '', default: 'false' },
  { name: 'cover', description: 'item占用几列 ，如果 FormModule的 row为2，需要占用整行，则cover=2', type: 'Number', value: '', default: 'false' },
  { name: 'isHidden', description: '是否隐藏表单元素，但是位置存在', type: 'Boolean', value: '', default: 'false' },
  { name: 'tips', description: '提示语', type: 'String，Number', value: '', default: '' },
  { name: 'isAccount', description: '用于只读页面的账号的格式化', type: 'Boolean', value: '', default: 'false' },
  { name: 'isMoeny', description: '用于只读页面的金额格式化使用', type: 'Boolean', value: '', default: 'false' },
  { name: 'moneyPrefix', description: '金额前缀', type: 'String', value: '', default: '' },
  {
    name: 'valueFormat',
    description: '当use为date/datetime/daterange/datetimerange时生效，use=datetimerange/datetime时返回yyyy-MM-dd HH:MM:SS，否则返回yyyy-MM-dd',
    type: 'String',
    value: '',
    default: '"yyyy-MM-dd HH:MM:SS"/"yyyy-MM-dd"'
  },
  { name: 'formItemAttrs', description: 'e l-form-item的属性v-bind', type: 'Object', value: '', default: '' },
  { name: 'use类型', description: '说明', type: '类型', value: '可选值', default: '默认值' },
  { name: 'input', description: '文本输入框类型', type: '', value: '', default: '' },
  { name: 'textarea', description: '文本域输入框', type: '', value: '', default: '' },
  { name: 'radio', description: '单选框', type: '', value: '', default: '' },
  { name: 'select', description: "下拉框类型，如果需要多选，增加multiple属性，返回的值为jion(',')后返回的值", type: '', value: '', default: '' },
  { name: 'number', description: '输入数字类型', type: '', value: '', default: '' },
  { name: 'money', description: '输入金额类型', type: '', value: '', default: '' },
  { name: 'cascader', description: 'cascader类型，options需要传入', type: '', value: '', default: '' },
  { name: 'date', description: '日期选择类型', type: '', value: '', default: '' },
  { name: 'daterange', description: "日期区间选择类型，需要增加rangeKey 属性 ['start','end']", type: '', value: '', default: '' },
  { name: 'datetimerange', description: "时间区间选择类型，需要增加rangeKey 属性 ['start','end']", type: '', value: '', default: '' },
  { name: 'numberRange', description: "数字区间选择类型，需要增加rangeKey 属性 ['start','end']", type: '', value: '', default: '' }
]

export const scopedSlots: DocumentScopedSlot[] = [{ name: 'button', description: '用来在输入框后面增加一个按钮的插槽，' }]

export const document: ElDocument = { attributes, scopedSlots }

export default document
