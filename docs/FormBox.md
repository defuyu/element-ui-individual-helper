# FormBox

## Basic
::: warning tips
 表单组件，
:::


 ```js
//  在项目的main.js 全局注册

import { FormBox,FormItem } from '@components'
Vue.component(FormBox.name, FormBox)
Vue.component(FormItem.name, FormItem)

 ```


```html
<form-box v-model="params" label-width="145px" row="3">
    <form-item label="文本输入" prop="text2"></form-item>
    <form-item label="文本输入必填" prop="text" required></form-item>
    <form-item label="文本输入禁用" prop="text1" disabled></form-item>
    <form-item label="单选下拉框" prop="selectVal" use="select" :options="[]"></form-item>
    <form-item label="多选下拉框" prop="multipleSelectVal" use="select" enu-key="ADJUST_INTEREST_TYPE" multiple required></form-item>
    <form-item label="数字" prop="number" use="number" required></form-item>
    <form-item label="日期" prop="date" use="date"></form-item>
    <form-item label="日期区间" prop="applyDate" use="daterange" :range-key="['applyStartDate', 'applyEndDate']"></form-item>
    <form-item label="时间区间" prop="applyTimes" use="datetimerange" :range-key="['applyStartTime', 'applyEndTime']"></form-item>
    <form-item label="数字区间" prop="applyNums" use="numberRange"  :range-key="['startNum', 'endNum']"></form-item>
</form-box>
```

## FormBox Attributes 

| 参数            | 说明                                                         | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------------------------ | ------- | ------ | ------ |
| value / v-model | FormItem的值会根据类型自己去初始化，也可以写初始化的默认值，如param:{name:'troye'} | Object  |        | {}     |
| labelWidth      | 宽度                                                         | String  |        | 120px  |
| readOnly        | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 readOnly 属性不再生效 | Boolean |        | false  |
| row             | 展示需要几列                                                 | Number  |        | 2      |
| rules           | 表单校验规则                                                 | Object  |        |        |
| emptyStr        | 空值处理                                                     | String  |        | "--"   |
| labelWidth      | label列的宽度                                                | String  |        | 100px  |
| borderless      | 无背景色表单样式                                             | Boolean |        | false  |



## FormBox Methods

| 参数          | 说明                                                         | 类型                                          |
| ------------- | ------------------------------------------------------------ | --------------------------------------------- |
| checkForm     | 表单校验                                                     | 返回一个promise                               |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object)) |
| validateField | 点对部分表单字段进行校验的方法                               | Function(props: array                         |
| reset         | 点击重置按钮时触发的事件，不需要写重置params的代码，组件内部已经处理，如果需要触发其他事件时才需要写 | Function()                                    |

