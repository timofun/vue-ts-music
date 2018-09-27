<template>
  <div class='singer-container'>
    歌手
  </div>
</template>

<script lang='ts'>
  import {Component, Prop, Vue, Emit} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class Singer extends Vue {

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
