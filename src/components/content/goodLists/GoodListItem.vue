<template>
    <div class="goodlistitem">
      <img :src="goodItem.show.img" alt="">
      <div class="duc_con">
        <div class="title">{{goodItem.title}}</div>
        <div class="price_con">
          <span class="price">{{goodItem.price}}</span>
          <span class="Collection">{{goodItem.cfav}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
      props:{
          goodItem:{
            type:Object,
            default(){
              return {}
          }

        }
      }
    }
</script>

<style scoped>
  .goodlistitem{
    width: 45%;
  }
  .goodlistitem img{
    width: 100%;
    border-radius: 4px;
  }
  .goodlistitem .title{
    word-break:keep-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }

  .duc_con{
    font-size: 14px;
    padding: 10px;
  }
  .price_con{
    text-align: center;
    padding-top: 5px;
    display: flex;
    justify-content: center;
  }
  .price_con .price{
    color: red;
  }
  .Collection{
    position: relative;
    left: 17px;
  }
  .Collection:before{
    display: block;
    content: "";
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    position: absolute;
    left: -15px;
    top: 0;
  }

</style>
