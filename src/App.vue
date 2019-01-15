<template>
  <div class="app">
    <van-nav-bar title="标题" left-text="返回" fixed left-arrow @click="onClickRight"/>

    <button @click="btn">123</button>
    <button @click="btn2">456</button>

    <van-loading/>
    <van-loading color="white"/>

    <van-loading type="spinner"/>
    <van-loading type="spinner" color="white"/>
    <!--  -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "App",
  data: () => ({
    active: 0
  }),
  mounted() {
    // this.$dialog.confirm({
    //   message: "弹窗内容"
    // });
  },
  methods: {
    btn() {
      Toast("提示内容");
    },
    btn2() {
      // this.$dialog.confirm({
      //   message: "弹窗内容2"
      // });
    },
    onClickRight() {
      Toast("提示内容222");
    }
  }
};
</script>

<style>
.app {
  padding-top: 46px;
}
</style>
