<template>
  <div class="scroll-container" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import BScroll from 'better-scroll'

@Component({
  components: {},
})
export default class VueTS extends Vue {
  @Prop({default: 1}) private probeType: number;
  @Prop({default: false}) private click: boolean;
  @Prop({default: false}) private listenScroll: boolean;
  @Prop({default: null}) private data?: any;
  @Prop({default: false}) private pullup: boolean;
  @Prop({default: false}) private beforeScroll: boolean;
  @Prop({default: 20}) private refreshDelay: number;
  @Prop({default: 'vertical'}) private direction: string;
  private scroll: any
  private DIRECTION_V: string = 'vertical'
  private DIRECTION_H: string = 'horizontal'
  private $refs: {
    wrapper: HTMLDivElement,
  }

  public created(): void {
    console.log('created');
  }

  public mounted(): void {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  }

  @Emit('scroll')
  public scrollFn(pos: any) {
    return pos;
  }

  @Emit('scrollToEnd')
  public scrollToEnd() {
    return 'scrollToEnd';
  }

  @Emit('beforeScroll')
  public beforeScrollStart() {
    return 'beforeScroll';
  }

  @Watch('data', {immediate: true, deep: true})
  public onWatch(val: string, oldVal: string) {
    setTimeout(() => {
      this.refresh()
    }, this.refreshDelay)
  }

  private _initScroll() {
    if (!this.$refs.wrapper) {
      return
    }
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: this.click,
      eventPassthrough: this.direction === this.DIRECTION_V ? this.DIRECTION_H : this.DIRECTION_V,
    })
    if (this.listenScroll) {
      this.scroll.on('scroll', (pos) => {
        this.scrollFn(pos)
      })
    }
    if (this.pullup) {
      this.scroll.on('scrollEnd', () => {
        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
          this.scrollToEnd()
        }
      })
    }
    if (this.beforeScroll) {
      this.scroll.on('beforeScrollStart', () => {
        this.beforeScrollStart()
      })
    }
  }

  private disable() {
    this.scroll && this.scroll.disable()
  }

  private enable() {
    this.scroll && this.scroll.enable()
  }

  private refresh() {
    this.scroll && this.scroll.refresh()
  }

  private scrollTo() {
    this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
  }

  private scrollToElement() {
    this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
