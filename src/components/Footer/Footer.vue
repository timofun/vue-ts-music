<template>
  <div class='footer-container'>
    <router-link tag='div' class='tab-item' to='/discovery'>
      <img src="./images/discover_active.png" alt="" v-if="currentRouter === 'discovery'">
      <img src="./images/discover.png" alt="" v-else="true">
      <span class='tab-link'>发现</span>
    </router-link>
    <router-link tag='div' class='tab-item' to='/video'>
      <img src="./images/video_active.png" alt="" v-if="currentRouter === 'video'">
      <img src="./images/video.png" alt="" v-else="true">
      <span class='tab-link'>视频</span>
    </router-link>
    <router-link tag='div' class='tab-item' to='/mine'>
      <img src="./images/mine_active.png" alt="" v-if="currentRouter === 'mine'">
      <img src="./images/mine.png" alt="" v-else="true">
      <span class='tab-link'>我的</span>
    </router-link>
    <router-link tag='div' class='tab-item' to='/singer'>
      <img src="./images/singer_active.png" alt="" v-if="currentRouter === 'singer'">
      <img src="./images/singer.png" alt="" v-else="true">
      <span class='tab-link'>歌手</span>
    </router-link>
    <router-link tag='div' class='tab-item' to='/accounts'>
      <img src="./images/accounts_active.png" alt="" v-if="currentRouter === 'accounts'">
      <img src="./images/accounts.png" alt="" v-else="true">
      <span class='tab-link'>帐号</span>
    </router-link>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class Footer extends Vue {
    private currentRouter: string = 'discovery';

    @Watch('$route')
    private onRoute(to: any) {
      console.log(to);
      if (to) {
        this.currentRouter = to.name;
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  @import '~common/css/variable'
  .footer-container
    display: flex
    position fixed
    bottom 0
    left 0
    width 100%
    height 0.9rem
    font-size $font-size-medium-x
    .tab-item
      display flex
      flex 1
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img
        width 0.44rem
        margin-bottom 0.05rem
      .tab-link
        font-size 0.12rem
      &.router-link-active
        .tab-link
          color: $color-text-them
</style>
