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
    return this.renderItem(this.info)
  },
  methods: {
    productValue(e) {
      this.form[this.info.name] = e
    },
    renderItem(element) {
      let renderObj = {
        ...element,
        attrs: { ...element },
      }
      let tag = element.tag || "input"
      let childTag = element.childTag
      let options = element.options
      let type = element.type
      if(childTag&&options&&Array.isArray(options)){
        if(type ==='select'){
            return (
                <tag {...renderObj} vModel={this.form[element.name]}>
                  {element.options.map((e, index) => {
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
                  })}
                </tag>
              )
        }
        if(['checkbox','radio'].includes(type)){
            return (
                <tag {...renderObj} vModel={this.form[element.name]}>
                  {element.options.map((e, index) => {
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
                  })}
                </tag>
              )
        }
      }
       if ( ["el-radio-group",'el-radio'].includes(element.tag)) {
        return (
            <div>{
              element.options.map((e, index) => {
                let attrs ={
                  ...e,
                  attrs:{...e}
                }
                return element.block ? (
                  <el-col key={index}>
                    <el-radio {...attrs}  
                       label={e.value} 
                       vModel={this.form[element.name]} 
                      >
                      {e.label}
                    </el-radio>
                  </el-col>
                ) : (
                  <el-radio {...attrs}  
                       label={e.value} 
                       vModel={this.form[element.name]} 
                      >
                    {e.label}
                  </el-radio>
                )
              })
            }</div>
        )
      }
      return (
        <tag
          {...renderObj}
          vModel={this.form[element.name]}
        ></tag>
      )
    },
  },
}
</script>
