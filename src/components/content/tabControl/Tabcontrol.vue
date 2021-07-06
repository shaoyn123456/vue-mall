<template>
  <div class="control">
    <div class="control-item"
         v-for="(item,index) in titles"
         :key="item.id"
         :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: [],
        default() {
          return []
        }
      }

    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)

      }
    }
  }
</script>

<style scoped>
  .control {
    display: flex;
    height: 44px;

  }

  .control-item {
    flex: 1;
    text-align: center;
  }

  .active span{
    color: red;
    border-bottom:2px solid red;
    padding: 0 3px 5px;

  }

</style>
