<template>
  <div id='app' @touchmove.prevent>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <footer-nav></footer-nav>
    <player></player>
  </div>
</template>
<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';
import FooterNav from '@/components/Footer/Footer.vue';
import Player from '@/views/Player/Player.vue';

@Component({
  components: {
    FooterNav,
    Player,
  },
})
export default class App extends Vue {
}
</script>
<style lang='stylus'>
  @import "~common/css/index"
  @import '~common/css/variable'
  #app
    position fixed
    height 100%
    width 100%
    bottom 0
    left 0
    background-color $color-theme
</style>
