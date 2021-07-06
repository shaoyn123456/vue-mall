<template>
  <div class="category_list">
    <div class="category_list_item" v-for="item in recommend" :key="item.id">
      <a :href='item.link'>
        <img :src="item.image" alt="">
        <p class="title">{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      recommend: {
        type: [],
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .category_list {
    display: flex;
    margin-top: 10px;
    border-bottom: 10px solid #cccccc4d;
    padding: 0 5px 15px 0;
  }

  .category_list_item {
    margin-right: 8px;
  }

  .category_list_item .title {
    font-size: 12px;
    text-align: center;
    margin-top: 3px;
  }

  .category_list_item:last-child {
    margin-right: 0;
  }

  .category_list_item img {
    width: 100%;
  }
</style>
