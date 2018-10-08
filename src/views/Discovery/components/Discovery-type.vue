<template>
  <div class="discovery-type-container">
    <div @click="handleClickType(text)" class="circle">
      <img :src="imgUrl" alt="">
    </div>
    <span class="text">{{text}}</span>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class DiscoveryType extends Vue {
    @Prop({default: ''}) public imgUrl: string;
    @Prop({default: ''}) public text: string;

    @Emit('handleClickType')
    public handleClickType(text: any) {
      return text;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~common/css/variable.styl"
  .discovery-type-container
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex 1;
    .circle
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.13rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #444446;
      img
        width 0.5rem
        height 0.5rem
    .text
      font-size: $font-size-small-s;
      font-weight: bold;
      color: $color-text;

</style>
