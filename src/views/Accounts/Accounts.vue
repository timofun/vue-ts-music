<template>
  <div class='accounts-container'>
    帐号
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import {Component, Prop, Vue, Emit, Watch} from 'vue-property-decorator';
import DemoMixin from '@/common/js/mixin.ts';

@Component({
  components: {
  },
  mixins: [DemoMixin],
})
export default class Accounts extends Vue {

  public get allname() {
    return 'computed ';
  }

  public beforeCreate(): void {
    console.log('beforeCreate');
  }

  public created(): void {
    console.log('created');
  }

  public beforeMount(): void {
    console.log('beforeMount');
  }

  public mounted(): void {
    console.log('mounted');
  }

  public beforeUpdate(): void {
    console.log('beforeUpdate');
  }

  public updated(): void {
    console.log('updated');
  }

  public beforeDestroy(): void {
    console.log('beforeDestroy');
  }

  public destroyed(): void {
    console.log('destroyed');
  }

  @Emit('reset')
  public resetCount() {
    return '';
  }

  public beforeRouteEnter(to: any, from: any, next: any): void {
    console.log('Accountse');
    next();
  }

  public beforeRouteUpdate(to: any, from: any, next: any): void {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    console.log('Accountse');
    // 可以访问组件实例 `this`
  }

  public beforeRouteLeave(to: any, from: any, next: any): void {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('Accountse');
  }

  @Watch('$route')
  private onRoute(to: any) {
    console.log('Accounts', to);
    if (to) {
      console.log('Accounts');
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='stylus'>

</style>
