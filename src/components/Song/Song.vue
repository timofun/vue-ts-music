<template>
  <div class="song-container">
    <div class="left">
      <span class="name">{{song.name}}</span>
      <span class="desc" v-if="song.album">{{song.artists[0].name}} - {{song.album.name}}</span>
      <span class="desc" v-if="song.al">{{song.ar[0].name}} - {{song.al.name}}</span>
    </div>
    <div class="right">
      <img src="./images/more.png" alt="">
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class Song extends Vue {
    @Prop({default: {}}) public song: object;

    public get allname() {
      return 'computed ';
    }

    public created(): void {
      console.log('created');
    }

    public mounted(): void {
      console.log('mounted');
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
  .song-container
    display: flex;
    padding: 0.22rem 0.16rem;
    .left
      display: flex;
      flex: 1;
      flex-direction: column;
      .name
        margin-bottom: 0.1rem;
        font-size: $font-size-medium;
        font-weight: bold;
        color: $color-text;
      .desc
        font-size: $font-size-small;
        color: $color-text;
    .right
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 0.8rem;
      img
        width 0.32rem
        height 0.32rem

</style>
