<template>
  <view>
    <view class="song-cell">
      <!-- 图片 -->
      <view class="img"
            :style="{background:`url(${imgUrl})`,backgroundSize:'cover'}" />
      <!-- 歌名和作者 -->
      <view class="song-songer">
        <view class="song">
          {{songName}}
        </view>
        <view class="songer">
          {{songer}}
        </view>
      </view>
      <!-- 播放标志 -->
      <view class="f-center"
            @click="play">
        <u-icon name="play-right"
                color="#d64139"
                size="40"></u-icon>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props: {
    imgUrl: {
      type: String,
      default: '//p3.music.126.net/Q7ylOqSKZxG63_3sARpgkg==/109951165340879562.jpg?param=200y200'
    },
    songName: {
      type: String,
      default: ''
    },
    songer: {
      type: String,
      default: ''
    },
    songId: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    play () {
		// console.log(Array.from(new Set(this.$store.state.songsListIds)))
		this.$store.state.songsListIds=Array.from(new Set([this.songId,...this.$store.state.songsListIds]))
      uni.navigateTo({
        url: `/pages/player/index`
      })
    }
  }
}
</script>

<style lang="scss">
.song-cell {
  margin: 20rpx 0 20rpx 0;
  width: 670rpx;
  height: 125rpx;
  padding-right: 20rpx;
  display: flex;
  justify-content: space-between;
  .img {
    width: 125rpx;
    height: 125rpx;
    border-radius: 15rpx;
  }
  .song-songer {
    width: 450rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .song {
      font-size: 30rpx;
    }
    .songer {
      color: #999;
      font-size: 15rpx;
    }
  }
}
</style>
