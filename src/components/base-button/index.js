import baseButtons from "./index.vue"

baseButtons.install=function(Vue){
    Vue.component(baseButtons.name,baseButtons)
}

export default baseButtons