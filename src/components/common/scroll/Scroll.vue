<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">

      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }

    },

    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType:this.probeType,
        click: true,
        pullUpLoad:this.pullUpLoad
      })
      //  监听滚动事件
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll',position)
      })
    //  上拉加载事件
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })

    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }

    },
    updated() {

    }
  }
</script>

<style scoped>

</style>
