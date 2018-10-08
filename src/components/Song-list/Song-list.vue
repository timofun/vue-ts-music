<template>
  <div class="song-list-container">
    <div class="pic">
      <img class="bg" :src="songList.picUrl" alt="">
      <div class="play-count">
        <img src="./images/headphone.png" alt="">
        <span class="text">{{songList.playCount}}</span>
      </div>
    </div>
    <span class="desc">{{songList.name}}</span>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class SongList extends Vue {
    @Prop({default: {}}) public songList: any

    public get allname() {
      return 'computed ';
    }

    public created(): void {
      console.log('created');
    }

    public mounted(): void {
      console.log('mounted', this.songList);
    }

    @Emit('reset')
    public resetCount() {
      return 'reset';
    }


    @Watch('', {immediate: true, deep: true})
    public onWatch(val: string, oldVal: string) {
      console.log('watch new modelData=' + val, 'old=', oldVal);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~common/css/variable.styl"
  .song-list-container
    display: flex;
    flex-direction: column;
    width: 2.34rem;
    height: 3.04rem;
    margin: 0.18rem 0.06rem;
    box-sizing: border-box;
    .pic
      position: relative;
      width: 2.34rem;
      height: 2.34rem;
      margin-bottom 0.05rem
      .bg
        width: 100%;
        height: 100%;
        border-radius: 0.1rem;
      .play-count
        position: absolute;
        line-height: 0.2rem;
        top: 0;
        right: 0.08rem;
        img
          width: 0.2rem;
          height: 0.2rem;
          margin-right: 0.06rem;
        .text
          font-size: $font-size-small;
    .desc
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: $font-size-small;


</style>
