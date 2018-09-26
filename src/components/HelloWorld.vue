<template>
  <div class="hello">
    <p @click="getName">{{name}}</p>
    <p>{{propB}}</p>
    <button @click="addToCount(5)" style="padding: 20px"></button>
    <button @click="resetCount()" style="padding: 20px"></button>
    <div>
      <input v-focus v-model="modelData">
      <div>{{modelData | capitalize}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Emit, Watch} from 'vue-property-decorator';
import {capitalize} from '@/filter/index';
import {focus} from '@/directive/index';

@Component({
  filters: {capitalize},
  directives: {focus},
})
export default class HelloWorld extends Vue {
  @Prop({default: 'default value'}) public propB?: string;
  @Prop([String, Boolean]) public propC?: string | boolean;
  @Prop() private msg?: string;
  private name: string = 'xiaoli';
  private modelData: any = 'aaaaa';
  private count: number = 0;
  public get allname() {
    return 'computed ' + this.name;
  }

  public created(): void {
    console.log('created');
  }

  public mounted(): void {
    console.log('mounted');
  }

  @Emit()
  public addToCount(n: number) {
    this.count += n;
    return this.count;
  }

  @Emit('reset')
  public resetCount() {
    return this.count++;
  }

  public getName() {
    console.log(11111);
    return this.name;
  }

  public clickFunc(): void {
    console.log(this.name);
  }

  @Watch('modelData', {immediate: true, deep: true})
  public onChildChanged(val: string, oldVal: string) {
    console.log('watch new modelData=' + val, 'old=', oldVal);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  h3
    margin 40px 0 0

  ul
    list-style-type none
    padding 0

  li
    display inline-block
    margin 0 10px

  a
    color #42b983
</style>
