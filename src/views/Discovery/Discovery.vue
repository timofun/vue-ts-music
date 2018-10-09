<template>
  <div class='discovery-container'>
    <div class="header-container">
      <div class="search-container">
        <div class="search-box">
          <img src="./images/search.png" alt="">
          <span @click="handleSearch">搜索你想听的歌曲吧~</span>
        </div>
        <div class="play-box">
          <img src="./images/pause.png" alt="">
        </div>
      </div>
      <div class="tab-container">
        <div class="tab-item">
          <span class="text active">个性推荐</span>
          <span class="line active"></span>
        </div>
        <div class="tab-item">
          <span class="text">主播电台</span>
          <span class="line"></span>
        </div>
      </div>
    </div>
    <div class="scroll-wrapper">
      <scroll :data="recommendSonglists" class="scroll">
        <div>
          <div class="slider-wrapper">
            <div class="slider-content">
              <slider ref="slider" :imglist="imglist">
              </slider>
            </div>
          </div>
          <div class="type-cmp-container">
            <discovery-type-cmp :imgUrl="privateUrl" text="私人收藏" @handleClickType="_handleClickType"></discovery-type-cmp>
            <discovery-type-cmp :imgUrl="daily" text="每日推荐"></discovery-type-cmp>
            <discovery-type-cmp :imgUrl="songlist" text="歌单"></discovery-type-cmp>
            <discovery-type-cmp :imgUrl="rank" text="排行榜"></discovery-type-cmp>
          </div>
          <div class="song-list">
            <title-type text="推荐歌单"></title-type>
            <div class="song-list-item">
              <song-list :songList="recommendSonglists"
                         v-for="recommendSonglist in recommendSonglists"
                         :key="recommendSonglist.id"
                         :id="recommendSonglist.id"
                         :picUrl="recommendSonglist.picUrl"
                         :playCount="recommendSonglist.playCount"
                         :name="recommendSonglist.name"
                         @handleSonglistDetail="_handleSonglistDetail"
              >
              </song-list>
            </div>
          </div>
          <div class="song-list">
            <title-type text="精品歌单"></title-type>
            <div class="song-list-item">
              <song-list :songList="playlistHighqualitys"
                         v-for="playlistHighquality in playlistHighqualitys"
                         :key="playlistHighquality.id"
                         :id="playlistHighquality.id"
                         :picUrl="playlistHighquality.coverImgUrl"
                         playCount="0"
                         :name="playlistHighquality.name"
                         @handleSonglistDetail="_handleSonglistDetail"
              >
              </song-list>
            </div>
          </div>
        </div>
      </scroll>
    </div>
    <div class="search-cmp" v-if="showSearchCmp">
      <search-cmp @searchCancel="handleSearchCancel"></search-cmp>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { getBanner, getPersonalized, getPlaylistHighquality } from '@/api/api.ts';
import { STATE_OK } from '@/utils/constant.ts'
import Scroll from '@/components/Scroll/Scroll.vue'
import Slider from '@/components/Slider/Slider.vue'
import DiscoveryTypeCmp from './components/Discovery-type.vue'
import TitleType from '@/components/Title-type/Title-type.vue'
import SongList from '@/components/Song-list/Song-list.vue'
import SearchCmp from '@/components/Search/Search.vue'
import privateUrl from './images/private.png'
import daily from './images/date.png'
import songlist from './images/songlist.png'
import rank from './images/rank.png'

@Component({
  components: {
    Scroll,
    Slider,
    DiscoveryTypeCmp,
    TitleType,
    SongList,
    SearchCmp,
  },
})
export default class Discovery extends Vue {

  public get allname() {
    return 'computed';
  }
  public imglist: any = [];
  public recommendSonglists: any = []
  public playlistHighqualitys: any = []
  private showSearchCmp: boolean = false;
  private privateUrl: any;
  private daily: any;
  private songlist: any;
  private rank: any;
  private $refs: {
    slider: Slider,
  }

  constructor() {
    super()
    this.privateUrl = privateUrl
    this.daily = daily
    this.songlist = songlist
    this.rank = rank
  }

  public created(): void {
    this._getBanner()
    this._getPersonalized()
    this._getPlaylistHighquality()
  }

  public activated(): void {
    setTimeout(() => {
      this.$refs.slider && this.$refs.slider.enable()
    }, 20)
  }

  public mounted(): void {
    console.log('mounted');
  }

  public handleSearch(): void {
    this.showSearchCmp = true
    console.log('跳转搜索页')
  }

  public handleSearchCancel(): void {
    this.showSearchCmp = false
  }

  public _handleClickType(text: any): void {
    console.log('text', text)
  }

  public _handleSonglistDetail (id: any): void {
    this.$router.push({
      path: '/songListDetail',
      query: {
        id,
      },
    })
  }

  @Emit('reset')
  public resetCount() {
    return '';
  }

  private _getBanner() {
    getBanner().then((res) => {
      if (res.status === STATE_OK) {
        this.imglist = res.data.banners
      }
    })
  }

  private _getPersonalized() {
    getPersonalized().then((res) => {
      if (res.status === STATE_OK) {
        this.recommendSonglists = res.data.result
      }
    })
  }

  private _getPlaylistHighquality() {
    getPlaylistHighquality().then((res) => {
      if (res.status === STATE_OK) {
        this.playlistHighqualitys = res.data.playlists
      }
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  @import "~common/css/variable.styl"
  .discovery-container
    position: fixed;
    top: 0;
    bottom 1rem
    width: 100%;
    .header-container
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 99;
      background-color $color-theme
      .search-container
        display: flex;
        height: 1rem;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .search-box
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border-radius: 0.5rem;
          background-color: #2B2B2D;
          height: 0.55rem;
          width: 5.55rem;
          color: #999999;
          img
            margin-right: 0.1rem;
            width: 0.28rem;
            height: 0.28rem;
          span
            font-size $font-size-small
        .play-box
          position: absolute;
          display: flex;
          align-items: center;
          right: 0.30rem;
          img
            width 0.44rem
            height 0.44rem

      .tab-container
        display: flex;
        margin: 0.22rem 0;
        .tab-item
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: $font-size-small;
          font-weight: bold;
          color: $color-text;
          .text
            color $color-text
            &.active
              color $color-text-them
          .line
            margin-top: 0.10rem;
            width: 0.56rem;
            height: 0.05rem;
            border-radius: 0.15rem;
            background-color: $color-theme;
            &.active
              background-color: $color-text-them
    .scroll-wrapper
      position fixed
      top: 1.83rem
      bottom 1rem
      width 100%
      .scroll
        height 100%
        .slider-wrapper
          position: relative
          width: 100%
          height: 3.66rem
          margin-bottom 0.6rem
          overflow: hidden
          .slider-content
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
        .type-cmp-container
          display: flex;
          margin-bottom: 0.6rem;
        .song-list
          .song-list-item
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding 0 0.06rem
  .search-cmp
    position fixed
    top: 0
    bottom 1rem
    width 100%
    z-index 99
    background-color $color-theme

</style>
