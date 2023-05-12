# FormModule

## Basic

::: warning tips
 布局组件，用于类容展示
:::


 ```js
import { FormModule,FormModuleItem } from '@components'
Vue.component(FormModule.name, FormModule)
Vue.component(FormModuleItem.name, FormModuleItem)
 ```

```html
<!-- row 默认值2 表示占用几行 -->
<!-- model 绑定的对象 -->
 <form-module row="2" :model="detailInfo">
     <!-- required 会展示必填的红色* -->
     <!-- cover 表示占用几列 ，不能操作父级的row -->
     <form-module-item label="标题"   prop="propName" cover='2' required></form-module-item>

     <!-- enuKey 为本地枚举值的key -->
     <form-module-item label="业务类型"  prop="dataType" enuKey="DATATYPE"></form-module-item>

     <!-- options 表示dataType的枚举值 -->
     <form-module-item label="业务类型"  prop="dataType" :options="[{label:'代理收付款',value:0}]"></form-module-item>

    <!-- formatter(row, val, key) {
        //row是detailInfo这个对象的值，val是detailInfo.dataType的值。key是prop的值
        return val
    } -->
     <form-module-item label="业务类型"  prop="dataType" :formatter="formatterFun"></form-module-item>

    <!-- is-moeny 为true，格式化金额 -->
     <form-module-item label="金额" prop="moeny" is-moeny></form-module-item>

     <!-- is-account 为true，格式化银行卡账号 -->
     <form-module-item label="银行账号" prop="bankNum" is-account></form-module-item>
     <form-module-item label="退回原因" prop="echoComments"></form-module-item>
     <form-module-item label="其他用法" :value="aaa.name"></form-module-item>
     <!-- :value 可以展示不是detailInfo下的prop属性 -->
</form-module>


```


## FormModule Attributes 

| 参数 | 说明         | 类型   | 可选值 | 默认值 |
| ---- | ------------ | ------ | ------ | ------ |
| row  | 展示需要几列 | Number |        | 2      |

## FormModuleItem Attributes 

| 参数            | 说明                                                         | 类型             | 可选值              | 默认值                    |
| --------------- | ------------------------------------------------------------ | ---------------- | ------------------- | ------------------------- |
| label           | 展示的标签名                                                 | Number，String   |                     | 2                         |
| prop            | 属性名                                                       | Number，String   |                     | 2                         |
| align           | 文本展示对齐方式                                             | String           | left，center，right |                           |
| required        | 是否展示必填*                                                | Boolean          |                     | false                     |
| tips            | label前面的小问号的展示内容                                  | String           |                     |                           |
| cover           | item占用几列 ，如果 FormModule的 row为2，需要占用整行，则cover=2 | Number           |                     | false                     |
| enuKey          | 如果item的值是一个枚举值，enuKey为统一枚举值接口返回的key  （isAcc属性仅仅供账务系统使用） | Number，String。 |                     |                           |
| options         | 如果item的值是一个枚举值。枚举值没有在统一接口返回，需要自定义枚举值列表 | Array            |                     | [{label:'',value:''}]     |
| formatter       | 格式化显示item值的方法                                       | Function         |                     | function(row, val, key){} |
| isMoeny         | 格式化金额使用                                               | Boolean          |                     | false                     |
| isAccount       | 格式化银行账户号使用                                         | Boolean          |                     | false                     |
| isHiddenAccount | 格式化银行账户号使用，加上***                                | Boolean          |                     | false                     |
