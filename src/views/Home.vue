<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{num}}</p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @add-to-count="addToCount" @reset="reset"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private num: number = 0;
  public addToCount(n: number) {
    console.log(n);
    this.num = n;
  }

  public reset(c: number) {
    console.log('c', c);
  }
}
</script>
