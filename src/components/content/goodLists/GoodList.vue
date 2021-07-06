<template>
    <div class="goodlist">
      <good-list-item v-for="(item,id) in goods" :key="id" :good-item="item" />
    </div>
</template>

<script>
  import GoodListItem  from './GoodListItem'
    export default {
        data() {
            return {}
        },
      components:{
        GoodListItem
      },
      props:{
          goods:{
            type:Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
.goodlist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
