<script>
export default {
  name:'baseButtons',
  props:{
    operation:{
      type:Object,
      default(){
        return {
          btns:[]
        }
      }
    }
  },
  data(){
    return {
    }
  },
  render(){
    return this.renderData()
  },
  methods:{
    renderData(){
      let { containAtts , btns } = this.desconstruct()
      if(!Array.isArray(btns)){
        return (
          <div>btns必须是数组</div>
        )
      }
      return (
        <div {...containAtts}>
            {
              btns.map((item,index)=>{
                 let tag = item.tag||'span';
                 let attrs = {
                    ...item,
                    attrs: { ...item },
                  }
                  let text = item.text||'搜索'
                 return (
                   <tag key={index} {...attrs}>{text}</tag>
                 )
              })
            }
        </div>
      )
    },
    desconstruct(){
      let { operation } = this
      console.log(this,'234sffsf')
      let containAtts = {} 
      let btns = []
      for ( let key in operation){
        if(key === 'btns') {
          btns = operation[key]
        }else {
          containAtts[key] = operation[key]
        }
      }
      return { containAtts , btns }
    }
  }
}
</script>