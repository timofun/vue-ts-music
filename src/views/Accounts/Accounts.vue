<template>
  <div class='accounts-container'>
    帐号
  </div>
</template>

<script lang='ts'>
import {Component, Prop, Vue, Emit} from 'vue-property-decorator';
import DemoMixin from '@/common/js/mixin.ts';

@Component({
  components: {
  },
})
export default class Accounts extends DemoMixin {

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
    return '';
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='stylus'>

</style>
