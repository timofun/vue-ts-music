<template>
  <transition name="move">
    <div class="song-list-detail-container">
      <header-cmp title="歌单"></header-cmp>
      <scroll :data="songlist" class="scroll" v-if="songlist">
        <div>
          <div class="header-container">
            <div class="bg">
              <img :src="songlist.coverImgUrl" alt="">
            </div>
            <div class="info-container">
              <div class="avatar">
                <img :src="songlist.coverImgUrl" alt="">
              </div>
              <div class="desc">
                <span class="name">{{songlist.name}}</span>
                <div class="creator" v-if="songlist.creator">
                  <img :src="songlist.creator.avatarUrl" alt="">
                  <span class="nickname">{{songlist.creator.nickname}}</span>
                </div>
              </div>
            </div>
            <div class="btn-container">
              <div class="btn-item">
                <img src="./images/comment.png" alt="">
                <span>{{songlist.commentCount}}</span>
              </div>
              <div class="btn-item">
                <img src="./images/share.png" alt="">
                <span>{{songlist.shareCount}}</span>
              </div>
            </div>
          </div>
          <div class="songs-content">
            <div class="item" v-for="(track, index) in songlist.tracks" :key="track.id">
              <span class="index">{{index + 1}}</span>
              <song :song="track" class="song"></song>
            </div>
          </div>
        </div>
      </scroll>
      <loading v-if="finished"></loading>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import { getPlaylistDetail } from '@/api/api.ts';
import HeaderCmp from '@/components/Header/Header.vue'
import Song from '@/components/Song/Song.vue'
import Scroll from '@/components/Scroll/Scroll.vue'
import Loading from '@/components/Loading/Loading.vue'
import { STATE_OK } from '@/utils/constant.ts'

@Component({
  components: {
    HeaderCmp,
    Song,
    Scroll,
    Loading,
  },
})
export default class SongListDetail extends Vue {
  private finished: boolean;
  private songlist: object;

  public created(): void {
    const id = this.$route.query.id
    this._getPlaylistDetail(id)
  }

  public mounted(): void {
    console.log('SongListDetail-mounted')
  }

  public activated(): void {
    const id = this.$route.query.id
    this._getPlaylistDetail(id)
  }

  public _getPlaylistDetail(id: any) {
    getPlaylistDetail(id).then((res) => {
      if (res.status === STATE_OK) {
        this.songlist = res.data.playlist
        this.finished = false
      }
    })
  }

  private data() {
    return {
      songlist: {},
      finished: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import "~common/css/variable.styl"
  @import "~common/css/mixin.styl"

  .move-enter-active, .move-leave-active
    enter-active()

  .move-enter, .move-leave-active
    leave-active()

  .song-list-detail-container
    position fixed
    top: 0
    bottom 0
    width 100%
    background-color $color-theme
    z-index 100
    .scroll
      position fixed
      top: 1rem
      bottom 0
      width 100%
      .header-container
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 4.5rem;
        .bg
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          filter: blur(20px);
          img
            width 100%
            height 100%
        .info-container
          position: relative;
          padding: 0.4rem 0.25rem;
          .avatar
            display: inline-block;
            img
              width: 2.55rem;
              height: 2.55rem;
              border-radius: 0.1rem;
          .desc
            display: inline-block;
            vertical-align: top;
            padding: 0.25rem 0 0.25rem 0.25rem;
            .name
              display: -webkit-box;
              word-break: break-all;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 4.1rem;
              margin-bottom: 0.45rem;
              font-size: $font-size-medium-x;
              color: #c1c0c1;
            .creator
              display flex
              align-items center
              img
                width: 0.56rem;
                height: 0.56rem;
                border-radius: 50%;
              .nickname
                display: inline-block;
                margin-left: 0.15rem;
                color: #c1c0c1;
                font-size: $font-size-small;

        .btn-container
          display flex
          .btn-item
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img
              width: 0.42rem;
              height: 0.42rem;
            span
              font-size: $font-size-small-s;
              color: #ffffff;
      .songs-content
        .item
          display: flex;
          .index
            display: flex;
            align-items: center;
            justify-content: center;
            width: 0.7rem;
            font-size: $font-size-medium;
            font-weight blod
            color: $color-text;
          .song
            flex 1


</style>
