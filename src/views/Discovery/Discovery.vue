<template>
  <div class='discovery-container'>
    <div class="header-container">
      <div class="search-container">
        <div class="search-box">
          <img src="./images/search.png" alt="">
          <span>搜索你想听的歌曲吧~</span>
        </div>
        <div class="play-box">
          <img src="./images/pause.png" alt="">
        </div>
      </div>
      <div class="tab-container">
        <div class="tab-item">
          <span class="text active">个性推荐</span>
          <span class="line active"></span>
        </div>
        <div class="tab-item">
          <span class="text">主播电台</span>
          <span class="line"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import {Component, Prop, Vue, Emit} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class Discovery extends Vue {

    public get allname() {
      return 'computed';
    }

    public created(): void {
      console.log('created');
    }

    public mounted(): void {
      console.log('mounted');
    }

    @Emit('reset')
    public resetCount() {
      return '';
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  @import "~common/css/variable.styl"
  .discovery-container
    position: fixed;
    top: 0;
    bottom 1rem
    width: 100%;
    .header-container
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 99;
      .search-container
        display: flex;
        height: 1rem;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .search-box
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border-radius: 0.5rem;
          background-color: #2B2B2D;
          height: 0.55rem;
          width: 5.55rem;
          color: #999999;
          img
            margin-right: 0.1rem;
            width: 0.28rem;
            height: 0.28rem;
          span
            font-size 0.24rem
        .play-box
          position: absolute;
          display: flex;
          align-items: center;
          right: 0.30rem;
          img
            width 0.44rem
            height 0.44rem


      .tab-container
        display: flex;
        margin: 0.22rem 0;
        .tab-item
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: $font-size-small;
          font-weight: bold;
          color: $color-text;
          .text
            color $color-text
            &.active
              color $color-text-them
          .line
            margin-top: 0.10rem;
            width: 0.56rem;
            height: 0.05rem;
            border-radius: 0.15rem;
            background-color: $color-theme;
            &.active
              background-color: $color-text-them
</style>
