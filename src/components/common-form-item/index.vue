<script>
export default {
  name: "commonFormItem",
  props: {
    data: {
      type: Object,
      default() {
        return {
          name: "",
          placeholder: "请选择",
          value: "",
          options: [],
          type: "text",
        }
      },
    },
    form: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  render() {
    return this.renderItem(this.data)
  },
  methods: {
    productValue(e) {
      this.form[this.data.name] = e
    },
    renderItem(element) {
      let slots = element.slots
      let attrs = this.depCopy(element,['on','slots','scopedSlots','nativeOn','slot'])
      let ele =  this.depCopy(element,['slots'])
      let renderObj = {
        ...ele,
        attrs: { ...attrs },
      }
      let tag = element.tag || "input"
      let childTag = element.childTag
      let options = element.options
      let type = element.type
      if(childTag&&options&&Array.isArray(options)){
        if(type ==='select'){
            return (
                <tag {...renderObj} vModel={this.form[element.name]}>
                  {
                    slots?this.productSlots(slots):
                    element.options.map((e, index) => {
                    let attrs = {
                      ...e,
                      attrs: { ...e },
                    }
                    return (
                      <childTag
                        {...attrs}
                        label={e.label}
                        value={e.value}
                        key={index}
                      ></childTag>
                    )
                  })
                  }
                </tag>
              )
        }
        if(['checkbox','radio'].includes(type)){
            return (
                <tag {...renderObj} vModel={this.form[element.name]}>
                  {
                    slots?this.productSlots(slots):
                    element.options.map((e, index) => {
                    let attrs = {
                      ...e,
                      attrs: { ...e },
                    }
                    return (
                      <childTag
                        {...attrs}
                        label={e.value}
                        key={index}
                      >{e.label}</childTag>
                    )
                  })
                }
                </tag>
              )
        }
      }
      return (
        <tag
          {...renderObj}
          vModel={this.form[element.name]}
        >
        {slots&&this.productSlots(slots)}
        </tag>
      )
    },
    productSlots(slots){
         return Object.keys(slots).map((key,index)=>{
            return (
              <div slot={key} key={index}>
               {slots[key]()}
              </div>
            )
          })
    },
    depCopy(obj,arr=[]){
       if(!Array.isArray(arr)){
        arr = []
       }
       let attrs = {}
       for(let key in obj){
         if(!arr.includes(key)){
          attrs[key] = obj[key]
         }
       }
       return attrs
    }
  },
}
</script>
