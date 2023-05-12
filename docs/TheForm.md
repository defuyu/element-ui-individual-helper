# TheForm

## Basic

::: warning tips
 动态的表单组件
:::

 ```js
import { TheForm } from '@components'
Vue.component(TheForm.name, TheForm)
 ```

```html
    <the-form ref="searchForm"
                v-model="formParams"
                :form-config="tableConfig"
                label-width="110px"
                border
                :readonly="way==='show'"
                :options="formOptions"
                :extra-val="exVal"
                @close="dialogVisible=false"
                @success="submit">
        <template #prop>
            这里是谋一个属性的插槽
        </template>
    </the-form>
```

#### 

## TheForm Attributes 

| 参数            | 说明                                                      | 类型             | 可选值 | 默认值                                                       |
| --------------- | --------------------------------------------------------- | ---------------- | ------ | ------------------------------------------------------------ |
| formConfig      | json配置                                                  | Array            |        |                                                              |
| labelWidth      | label的宽度，需要加上px                                   | String           |        |                                                              |
| columnNum       | 一行展示几列                                              | Number           |        | 2                                                            |
| border          | 是否需要边框，                                            | Boolean          |        | false                                                        |
| readonly        | 是否是只读，提交按钮也会隐藏，                            | Boolean          |        | false                                                        |
| extraVal        | 额外的值。用来配置禁用以及必填，显示/隐藏的规则           | Object           |        |                                                              |
| needSubmit      | 是否需要提交按钮，如果不需要则使用$refs.name.submitFun()  | Boolean          |        | false                                                        |
| needReset       | 是否需要重置按钮                                          | Boolean          |        | false                                                        |
| disabledKey     | 禁止修改的key的集合，因为有些默认值需要展示，但是不能修改 | Array            |        |                                                              |
| storeKey        | 用来保存搜索值的唯一key                                   | String           |        |                                                              |
| options         | 外部传递的枚举值的对象,一般都是从接口获取                 | Object           |        | options:{list1:[{label:'',value:''}],list2:[{label:'',value:''}]} |
| validationRules | 表单的验证规则                                            | Object           |        | {}                                                           |
| @success        | 表单成功之后触发的事件                                    | Function(Object) |        |                                                              |
| @close          | 点击取消按钮时触发的事件                                  | Function(Object) |        |                                                              |

## TheForm Events

| 参数      | 说明                     | 回调参数 |
| --------- | ------------------------ | -------- |
| submitFun | 点击提交按钮时触发的事件 |          |

