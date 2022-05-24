
import commonFormItem from "./components/common-form-item/index.js"
import baseButtons from "./components/base-button/index.js"

const components=[commonFormItem,baseButtons]

function install(Vue){
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}

if(typeof window !=='undefined' && window.Vue){
    install(window.Vue)
}


export default{
    install,
    commonFormItem,
    baseButtons
}

export {
    commonFormItem,
    baseButtons
}