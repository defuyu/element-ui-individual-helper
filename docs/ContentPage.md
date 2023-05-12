# ContentPage
## Basic
::: warning tips
 布局组件，用于每个页面的root容器，搭配TheBlock使用
:::

 ```js
//  在项目的main.js 全局注册

import { ContentPage,TheBlock } from '@components'
Vue.component(ContentPage.name, ContentPage)
Vue.component(TheBlock.name, TheBlock)
 ```



```html
<template>
    <content-page ref="contentPageRef" 
                  title="转让审批" 
                  show-record
                  :data-key="$route.query.dataKey" 
                  data-type="AGENT_ACCOUNT_UPDATE">
        <template #button>
            <!-- 这里是审批按钮的插槽 -->
            <el-button size="small" type="blue" @click="submitAction('approved')">提交</el-button>
            <el-button size="small" type="danger" @click="submitAction('reject')">退回</el-button>
        </template>

        <template #action>
            <el-radio label="approved">同意</el-radio>
            <el-radio label="reject">拒接</el-radio>
        </template>

        <template #hander>
            <!-- 这里是操作按钮的插槽 -->
            <el-button size="small" type="blue" @click="submitAction('approved')">提交</el-button>
            <el-button size="small" type="danger" @click="submitAction('reject')">退回</el-button>
        </template>

        <the-block title="申请详情">
            <!-- 然后这里是内容 -->
        </the-block>

        <the-block title="申请详情">
            <!-- 然后这里是内容 -->
        </the-block>

    </content-page>
 </template>

```

 ```js
submitAction(){
    this.$refs.contentPageRef.open(
       (val, callback,fileList) => {
           // val 就是填写意见的值，
           // callback() 执行则关闭弹框，一般在请求完审批提交结果成功之后调用,
           // fileList  上传文件的值
       },
       { 
           val: '有初始化的就传，没有就不传',
           title: '这里是弹框的标题，默认值是「 审批意见 」',
           isNeedFile:'是否需要上传附件',
           fileList:'需要展示的上传附件的地方')
       }
 ```

## ContentPage Attributes 

| 参数             | 说明                                 | 类型          | 可选值 | 默认值                  |
| ---------------- | ------------------------------------ | ------------- | ------ | ----------------------- |
| title            | 页面显示的title                      | String,Number | -      | $route.meta.title       |
| showRecord       | 是否展示审批记录                     | Boolean       | -      | false                   |
| showAudit        | 是否展示审批操作                     | Boolean       | -      | false                   |
| showBack         | 是否展示返回按钮                     | Boolean       | -      | false                   |
| dataKey          | 工作流数据的dataKey                  | String        | -      |                         |
| dataType         | 工作流数据的dataType                 | String        | -      |                         |
| breadList        | 自定义面包屑数据                     | Array         | -      | 格式同$route.meta.paths |
| isFile           | 是否需要展示文件上传                 | Boolean       | -      | 默认false               |
| hiddenBreadcrumb | 是否隐藏头部的面包屑                 | Boolean       | -      | 默认false               |
| noPaddingbottom  | 设置padding-bottom为0 （默认有80px） | Boolean       | -      | 默认false               |

## ContentPage Methods

| 方法名      | 说明                                                         | 参数                                                         |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| open()      | 在页面调用this.$refs.contentPageRef.open(callback,{title:'审批意见',val:''})触发审批意见弹框的弹出 | Function(callback,{title:'审批意见',val:'',isNeedFile:true}) |
| setInit()   | 在页面调用 this.$refs.contentPageRef.setInit({remark,fileList}))) | 被退回的流程，需要初始化审批意见}                            |
| submitFun() | 返回一个promise 在页面调用 this.$refs.contentPageRef.submitFun().then(res=>{})) | res返回的是一个对象{ action,remark,fileList}                 |
| getValue()  | 在页面调用let result= this.$refs.contentPageRef.getValue()   | 返回的是一个对象{ action,remark,fileList}                    |

## ContentPage Scoped Slot
| slot name | 说明           |
| --------- | -------------- |
| button    | 页面的审批按钮 |
| hander    | 页面的操作按钮 |
| action    | 审批意见类型   |