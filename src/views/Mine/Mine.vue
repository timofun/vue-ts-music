<template>
  <div class='mine-container'>
    我的
  </div>
</template>

<script lang='ts'>
  import {Component, Prop, Vue, Emit, Watch} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class Mine extends Vue {

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
