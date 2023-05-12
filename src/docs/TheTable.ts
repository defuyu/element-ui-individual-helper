import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentScopedSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'columns', description: 'table的json配置', type: 'Array', value: '', default: '' },
  { name: 'pages', description: '分页参数暴露的对象 ，需要配合.sync使用', type: 'Object', value: '', default: 'pageParams: {page: 1,size: 10,total: 0}' },
  { name: 'tableData', description: 'table的数据', type: 'Array', value: '', default: '' },
  { name: 'btnWidth', description: '最后操作按钮的宽度', type: 'String', value: '', default: '120px' },
  { name: 'reserveSelection', description: '是否需要记住分页的勾选', type: 'Boolean', value: '', default: 'true' },
  { name: 'selectkey', description: '默认是id，配合needSelect使用', type: 'Boolean', value: '', default: 'id' },
  { name: 'needSelect', description: '是否需要多选', type: 'Boolean', value: '', default: 'true' },
  { name: 'needSingleSelect', description: '是否需要单选', type: 'Boolean', value: '', default: 'false' },
  {
    name: 'selectable',
    description: 'Function 的返回值用来决定这一行的 CheckBox 是否可以勾选。仅对 type=selection 的列有效，使用方法同el-table的selectable',
    type: 'Function',
    value: '',
    default: ''
  },
  { name: 'hasPage', description: '是否需要显示分页', type: 'Boolean', value: '', default: 'True' },
  { name: 'pageFix', description: '分页是否需要固定在页面底部', type: 'Boolean', value: '', default: 'true' },
  { name: 'options', description: '外部传递的枚举值的对象,一般都是从接口获取', type: 'Object', value: '', default: "options:{key1:[{label:'',value:''}],key2:[{label:'',value:''}]}" },
  { name: 'storeKey', description: '用来保存搜索值的唯一key', type: 'String', value: '', default: '' },
  { name: '@pageChange', description: 'page，size变化的时候触发的事件', type: 'Function', value: '', default: '' }
]

export const methods: DocumentMethod[] = [
  { name: 'getKeys', description: '获取勾选的项目的key值集合', parameter: 'Function(Object)' },
  { name: 'getRows', description: '获取勾选的项目的rows集合', parameter: 'Function(Object)' }
]

export const scopedSlots: DocumentScopedSlot[] = [
  { name: 'selectHandler', description: '表格头部作用域插槽，可获取到多选的keys，和rows，keys是selectkey的集合数组，rows是整个行的数据的集合数组' },
  { name: 'handler', description: '尾部操作栏作用域插槽 。固定在右侧 ，可以获取到该行的 scope值和index的值' }
]

export const document: ElDocument = { attributes, methods, scopedSlots }

export default document
