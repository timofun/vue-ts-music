<template>
  <div class="title-type-container">
    {{text}} >
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class TitleType extends Vue {
    @Prop({default: ''}) public text: string
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .title-type-container
    padding-left 0.14rem
    font-size 0.3rem
    font-weight: bold;
</style>
