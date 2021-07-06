<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </van-swipe-item>

  </van-swipe>
</template>

<script>
    export default {
        data() {
            return {}
        },
      props:{
         banners:{
           type:[],
           default(){
             return []
           }
         }
      }

    }
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }

  .my-swipe .van-swipe-item img {
    width: 100%;
  }
</style>
