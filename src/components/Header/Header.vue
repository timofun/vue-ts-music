<template>
  <div class="header-container">
    <div class="back" @click="back()">
      <img src="./images/back.png" alt="">
    </div>
    <div class="title">
      {{title}}
    </div>
    <div class="playing">
      <img src="./images/player.png" alt="">
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class Header extends Vue {
    @Prop({default: ''}) public title: string

    public back(): void {
      this.$router.back()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~common/css/variable.styl"
  .header-container
    position: fixed;
    width: 100%;
    display flex
    height 1rem
    background-color $color-theme
    z-index 101
    .back
      display flex
      align-items: center;
      justify-content: center;
      flex 0 0 1.07rem
      img
        height 0.41rem
    .title
      display flex
      align-items: center;
      justify-content: center;
      flex 1
      color #ffffff
      font-size $font-size-medium-x
      font-weight bold
    .playing
      display flex
      align-items: center;
      justify-content: center;
      flex 0 0 1.07rem
      img
        height 0.41rem
</style>
