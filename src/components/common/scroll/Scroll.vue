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
        name: "Scroll",
        props: {
         probeType: {
             type: Number,
             default: 0,
         },
         pullUpLoad: {
            type: Boolean,
            default: false,
         }
        },
        data() {
            return {
                scroll : null,
            }
        },
        mounted() {
            // 1.创建BScroll对象
           this.scroll = new BScroll(this.$refs.wrapper,{
            // 无论是否设置click:true，button都可以点击  必须设置click:true,div才能监听点击
              click: true,
              probeType: this.probeType,
              pullUpLoad: this.pullUpLoad,
           })
            // 2.监听滚动的位置
            this.scroll.on('scroll',(position) => {
                // console.log(position);
                this.$emit('scroll',position)
            })

            // 3.监听上拉
            this.scroll.on('pullingUp', () => {
                // console.log('上拉');
                this.$emit('pullingUp')
            })

           this.scroll.scrollTo(0,0)
        },
        methods: {
            scrollTo( x, y, time=300) {
              this.scroll.scrollTo( x, y, time)
            },
            finishPullUp() {
                this.scroll.finishPullUp()
            }
        }
    }
</script>

<style scoped>

</style>
