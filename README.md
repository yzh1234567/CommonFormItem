# commonFormItem

## Props

<!-- @vuese:index:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|data|-|`Object`|`false`|{"name":"","placeholder":"请选择","value":"","options":[],"type":"text"}|
|form|-|`Object`|`false`|{}|

<!-- @vuese:index:props:end -->


## 例子

# import CommonFormItem from "common_form_item"

# Vue.use(CommonFormItem)

# 这样你的项目中可以使用一个CommonFormItem组件；这个组件是一个万能表单组件;不受不同项目组件库不同的影响;
# 这样你可以使用CommonFormItem组件封装成自己项目的需求

# <common-form-item :data='fields[0]||fields[1]' :form="form"></common-form-item>

```vue
<template>
  <div>
    <common-form :data='fields[0]||fields[1]' :form="form"></common-form>
  </div>
</template>

<script>
//  type为select\checkbox\radio时表示父子组件；一定要options与childTag有值;否则不会渲染
export default {
       data(){
           return {
               form:{
                 name:'',
                 sex:'',
                 channel:'',
                 sex:'',
               },
               fields:[
                 {
                    tag:'el-input',  //标签名称
                    options:[], //为下拉选择框\多选框\单选框准备
                    type:'text', //指明文本框是输入框、文本域、单选、多选、下拉选择框,可选择值text|textarea|select|checkbox|radio 和其他 原生 input 的 type 值
                    name:'name',
                    label:'姓名',
                    clearable:true,
                    placeholder:'请输入姓名',
                    maxlength:10,
                    'show-word-limit':true,
                    rules:[
                        {required:true,message:'请输入姓名',trigger:['change','blur']}
                    ], //规则验证
                    class:{
                        'my-input':true
                    },
                    style:{
                        width:'300px'
                    },
                    scopedSlots:{
                        heander:(props)=>{
                            return (
                                <span>天</span>
                            )
                        }
                    }, //作用域插槽写法 距离是该组件有一个header的作用域插槽
                    slots:{
                        suffix:()=>{
                            return (
                                <span>天</span>
                            )
                        }
                    }, //插槽写法
                    ...  //兼容element form表单元素的任意属性
                 },
                 {
                    options:[], //为下拉选择框准备
                    tag:'el-select',
                    type:'select',
                    name:'sex',
                    label:'性别',
                    childTag:'el-option',//针对复合元素才有该属性；指明子元素
                    clearable:true,
                    placeholder:'请输入姓名',
                    maxlength:10,
                    'show-word-limit':true,
                    rules:[
                        {required:true,message:'请输入姓名',trigger:['change','blur']}
                    ], //规则验证
                    class:{
                        'my-input':true
                    },
                    style:{
                        width:'300px'
                    },
                    on:{
                        click:this.click,//点击事件
                        change:this.change,//改变事件
                    }
                    ...  //兼容element form表单元素的任意属性
                 },
                 {
                    label:'渠道',
                    tag:'el-checkbox-group',
                    childTag:'el-checkbox',//针对复合元素才有该属性；指明子元素
                    type:'checkbox',
                    name:'channel',
                    placeholder:'请选择渠道',
                    options:[
                        {
                            label:'天猫',
                            value:1
                        },
                        {
                            label:'京东',
                            value:2
                        }
                    ],
                 },
                  {
                    label:'性别',
                    tag:'el-radio',// 由于elementui 的单选按钮组采用component内置标签写法;jxs在vue2.0无法识别；所以只能写成el-radio
                    childTag:'el-radio',//针对复合元素才有该属性；指明子元素
                    type:'radio',
                    name:'sex',
                    placeholder:'请选择性别',
                    options:[
                        {
                            label:'男',
                            value:1
                        },
                        {
                            label:'女',
                            value:2
                        }
                    ],
                 }
               ]
           }
       },
</script>
```
