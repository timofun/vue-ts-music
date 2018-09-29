<template>
  <transition name="move">
    <div class="search-component-container">
      <div class="header">
        <div class="search-box">
          <img class="search-icon" src="./image/search.png" alt="">
          <input class="input-box" type="text" placeholder='搜索你最爱的歌曲吧~' v-model="searchKey" @keyup.enter="handleSearch"/>
          <img class="cancel-icon" src="./image/cancel.png" alt="" @click="handleDel">
        </div>
        <span class="cancel-text" @click="handleCancel">取消</span>
      </div>
      <div class="history-content" v-if="!finished">
        历史
      </div>
      <div class="song-list-content" v-if="finished">
        歌曲
      </div>
      <loading v-if="finished"></loading>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import Loading from '@/components/Loading/Loading.vue'

@Component({
  components: {
    Loading,
  },
})
export default class Search extends Vue {

  public get allname() {
    return 'computed ';
  }
  private finished: boolean;
  private searchKey: any;

  public created(): void {
    console.log('created');
  }

  public mounted(): void {
    console.log('mounted');
  }

  public handleSearch(): void {
    this.finished = true
  }

  public handleDel(): void {
    this.finished = false
    this.searchKey = ''
  }

  @Emit('searchCancel')
  public handleCancel(): void {
    console.log('取消')
  }

  @Watch('', {immediate: true, deep: true})
  public onWatch(val: string, oldVal: string) {
    console.log('watch new modelData=' + val, 'old=', oldVal);
  }

  private data() {
    return {
      finished: false,
      searchKey: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~common/css/variable.styl"
  @import "~common/css/mixin.styl"

  .move-enter-active, .move-leave-active
    enter-active()

  .move-enter, .move-leave-active
    leave-active()

  .search-component-container
    position fixed
    top: 0
    bottom 1rem
    width 100%
    .header
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 1rem;
      align-items: center;
      .search-box
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        width: 6.38rem;
        height: 0.55rem;
        background-color: $color-input;
        border-radius: 0.5rem;
        margin-left: 0.22rem;
        .search-icon
          width: 0.28rem;
          height: 0.28rem;
          margin-left: 0.24rem;
          margin-right: 0.16rem;
        .input-box
          display: inline-block;
          height: 0.34rem;
          width: 5.15rem;
          border-top-right-radius: 0.15rem;
          border-bottom-right-radius: 0.15rem;
          font-size: $font-size-medium;
          color: $color-input-text;
        .cancel-icon
          width: 0.28rem;
          height: 0.28rem;
      .cancel-text
        line-height: 0.3rem;
        width: 0.9rem;
        text-align: center;
        display: inline-block;
        border: none;
        color: $color-input-text;
        font-size: $font-size-medium;

</style>
