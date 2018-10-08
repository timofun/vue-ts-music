<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <div class='slider-item'
           v-for="(item, index) in imglist"
           :key="index"
      >
        <a>
          <img :src="item.picUrl">
        </a>
      </div>
    </div>
    <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"
            :key="index"></span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { addClass } from 'common/js/dom.ts';
  import BScroll from 'better-scroll';

  @Component()
  export default class Slider extends Vue {
    @Prop({default: []}) public imglist?: any[];
    @Prop({default: true}) private loop: boolean;
    @Prop({default: true}) private autoPlay: boolean;
    @Prop({default: 3000}) private interval: number;
    private dots: any = [];
    private currentPageIndex: number = 0;
    private slider: any
    private resizeTimer: any
    private children: any
    private timer: any
    private $refs: {
      slider: HTMLDivElement,
      sliderGroup: HTMLDivElement,
    }

    public mounted() {
      setTimeout(() => {
        this._setSliderWidth(true)
        this._initDots()
        this._initSlider()

        if (this.autoPlay) {
          this._play()
        }
      }, 1000)

      window.addEventListener('resize', () => {
        if (!this.slider || !this.slider.enabled) {
          return
        }
        clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(() => {
          if (this.slider.isInTransition) {
            this._onScrollEnd()
          } else {
            if (this.autoPlay) {
              this._play()
            }
          }
          this.refresh()
        }, 60)
      })
    }

    public activated() {
      if (!this.slider || !this.slider.enabled) {
        return
      }
      this.slider.enable()
      const pageIndex = this.slider.getCurrentPage().pageX
      this.slider.goToPage(pageIndex, 0, 0)
      this.currentPageIndex = pageIndex
      if (this.autoPlay) {
        this._play()
      }
    }

    private deactivated() {
      this.slider.disable()
      clearTimeout(this.timer)
    }

    private beforeDestroy() {
      this.slider.disable()
      clearTimeout(this.timer)
    }

    private refresh() {
      if (this.slider) {
        this._setSliderWidth(true)
        this.slider.refresh()
      }
    }

    private _setSliderWidth(isResize: boolean) {
      // console.log('this.$refs.sliderGroup', this.$refs.sliderGroup.children)
      this.children = this.$refs.sliderGroup.children
      // console.log('width', this.children.length)

      let width = 0
      const sliderWidth = this.$refs.slider.clientWidth

      for (const i of this.children) {
        const child = i
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }

      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    }

    private _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400,
        },
      })

      this.slider.on('scrollEnd', this._onScrollEnd)

      this.slider.on('touchend', () => {
        if (this.autoPlay) {
          this._play()
        }
      })

      this.slider.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearTimeout(this.timer)
        }
      })
    }

    private _onScrollEnd() {
      this.children = this.$refs.sliderGroup.children
      const pageIndex = this.slider.getCurrentPage().pageX
      const child = this.children[pageIndex]
      addClass(child, 'slider-item-active')
      this.currentPageIndex = pageIndex
      if (this.autoPlay) {
        this._play()
      }
    }

    private _initDots() {
      // console.log(this.children.length)
      this.dots = new Array(this.children.length)
    }

    private _play() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.slider.next()
      }, this.interval)

    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/css/variable"

  .slider
    min-height: 1px
    height 100%
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      height 100%
      .slider-item
        display inline-block
        box-sizing: border-box
        overflow: hidden
        text-align: center
        height 100%
        transform: scale(1)
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
          height 100%
        img
          display: block
          width: 100%
          height 100%
          padding: 0.1rem;
          border-radius 0.2rem;
          box-sizing: border-box;
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      transform: translateZ(1px)
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>
