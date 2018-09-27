import {Vue, Component} from 'vue-property-decorator';

/** * mixins */
@Component
export default class DemoMixin extends Vue {

  public created(): void {
    const aaa: any = 1;
    console.log('DemoMixin-created', aaa);
  }
}
