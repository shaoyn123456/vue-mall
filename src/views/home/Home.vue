<template>
  <div id="home">
    <!--导航组件-->
    <nav-bar class="nav-bar">
      <div slot="center" class="center">
        购物街
      </div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentSroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <banner :banners="banners"></banner>
      <recommend :recommend="recommend"></recommend>
      <featrue-view></featrue-view>
      <tab-control class="tabControl" :titles="['流行','新款','经典']" @tabClick="tabClick"></tab-control>
      <good-list :goods="goods[this.currentType].list"></good-list>

    </scroll>
    <back-top @click.native="backtop" v-show="isShow"></back-top>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import Banner from './childcoms/Banner'
  import Recommend from './childcoms/Recommend'
  import FeatrueView from './childcoms/FeatureView'
  import TabControl from 'components/content/tabControl/Tabcontrol'
  import GoodList from 'components/content/goodLists/GoodList'
  import BackTop from 'components/content/backtop/Backtop'
  import Scroll from 'components/common/scroll/Scroll'
  import {getHomeMultidata, goodListsdata} from 'network/home'

  export default {
    data() {
      return {
        banners: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        scroll:null,
        isShow:false
      }
    },
    components: {
      NavBar,
      Banner,
      Recommend,
      FeatrueView,
      TabControl,
      GoodList,
      BackTop,
      Scroll,
    },
    created() {
      this.getHomeMultidata();
      this.goodListsdata('pop');
      this.goodListsdata('new');
      this.goodListsdata('sell');
    },
    mounted(){

    },
    methods: {
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break
          case 1:
            this.currentType = 'new';
            break
          case 2:
            this.currentType = 'sell';
            break

        }

      },
      backtop(){
        this.$refs.scroll.scrollTo(0,0,300)
      },
      contentSroll(position){
        this.isShow = (-position.y) > 1000
      },
      loadMore(){
        // console.log('loadMore');
        this.goodListsdata(this.currentType)
        // refresh：其实就是重新计算一下内容的高度和宽度，也许也会计算外框的高度和宽度，
        // 因为dom结构发生了变化了，所以宽高要从新计算
        // 以为整个插件基本上都是在计算一些距离差值，所以肯定需要从新计算的；
        this.$refs.scroll.scroll.refresh()
      },
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          let imgList = res.data.data.banner.list;
          let categoryList = res.data.data.recommend.list;
          this.banners = imgList
          this.recommend = categoryList
        })
      },
      //  获取列表数据
      goodListsdata(type) {
        const page = this.goods[type].page + 1;
        goodListsdata(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp()
        })
      },



    }


  }

</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .nav-bar {
    background-color: #ff699c;
    color: #fff;
  }
  .tabControl{
    position: sticky;
    top: 40px;
    background-color: #fff;
    line-height: 44px;
    z-index: 9;

  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }


</style>
