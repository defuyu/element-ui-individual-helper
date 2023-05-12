import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentScopedSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'title', description: '页面显示的title', type: 'String,Number', value: '-', default: '$route.meta.title' },
  { name: 'showRecord', description: '是否展示审批记录', type: 'Boolean', value: '-', default: 'false' },
  { name: 'showAudit', description: '是否展示审批操作', type: 'Boolean', value: '-', default: 'false' },
  { name: 'showBack', description: '是否展示返回按钮', type: 'Boolean', value: '-', default: 'false' },
  { name: 'dataKey', description: '工作流数据的dataKey', type: 'String', value: '-', default: '' },
  { name: 'dataType', description: '工作流数据的dataType', type: 'String', value: '-', default: '' },
  { name: 'breadList', description: '自定义面包屑数据', type: 'Array', value: '-', default: '格式同$route.meta.paths' },
  { name: 'isFile', description: '是否需要展示文件上传', type: 'Boolean', value: '-', default: '默认false' },
  { name: 'hiddenBreadcrumb', description: '是否隐藏头部的面包屑', type: 'Boolean', value: '-', default: '默认false' },
  { name: 'noPaddingbottom', description: '设置padding-bottom为0 （默认有80px）', type: 'Boolean', value: '-', default: '默认false' }
]

export const methods: DocumentMethod[] = [
  {
    name: 'open()',
    description: "在页面调用this.$refs.contentPageRef.open(callback,{title:'审批意见',val:''})触发审批意见弹框的弹出",
    parameter: "Function(callback,{title:'审批意见',val:'',isNeedFile:true})"
  },
  { name: 'setInit()', description: '在页面调用 this.$refs.contentPageRef.setInit({remark,fileList})))', parameter: '被退回的流程，需要初始化审批意见}' },
  { name: 'submitFun()', description: '返回一个promise 在页面调用 this.$refs.contentPageRef.submitFun().then(res=>{}))', parameter: 'res返回的是一个对象{ action,remark,fileList}' },
  { name: 'getValue()', description: '在页面调用let result= this.$refs.contentPageRef.getValue()', parameter: '返回的是一个对象{ action,remark,fileList}' }
]

export const scopedSlots: DocumentScopedSlot[] = [
  { name: 'button', description: '页面的审批按钮' },
  { name: 'hander', description: '页面的操作按钮' },
  { name: 'action', description: '审批意见类型' }
]

export const document: ElDocument = { attributes, methods, scopedSlots }

export default document
