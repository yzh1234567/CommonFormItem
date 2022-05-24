import commonFormItem from "./index.vue"

commonFormItem.install=function(Vue){
    Vue.component(commonFormItem.name,commonFormItem)
}

export default commonFormItem