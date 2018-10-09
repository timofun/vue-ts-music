<template>
  <div class="player-container">
    <transition name="normal"
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
                @after-leave="afterLeave"
    >
      <div></div>
    </transition>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
  import animations from 'create-keyframe-animation';

  @Component({
    components: {},
  })
  export default class Player extends Vue {

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
  @import "~common/css/variable"
  @import "~common/css/mixin"
  .player-container
    .normal-player
      position: fixed
      left: 0
      right: 0
      top: 0
      bottom: 0
      z-index: 150
      background: $color-theme
    &.normal-enter-active, &.normal-leave-active
      transition: all 0.4s
      .top, .bottom
        transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
    &.normal-enter, &.normal-leave-to
      opacity: 0
      .top
        transform: translate3d(0, -100px, 0)
      .bottom
        transform: translate3d(0, 100px, 0)
</style>
