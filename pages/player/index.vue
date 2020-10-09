<template>
  <view>
    <view class="bg-img"
          :style="{backgroundImage:`url(${songInfo.al.picUrl})`}" />
    <view class="content" :style="{height:screenHeight+'rpx'}">
    	<!-- 头部 标题栏-->
    	<view class="head"
    	      :style="{marginTop:IsApp?navbarTop:''}">
    	  <!-- 返回键 -->
    	  <view class="back-icon">
    	    <u-icon name="arrow-left"
    	            :size="iconSize" />
    	  </view>
    	  <!-- 歌名和歌手 -->
    	  <view class="song-songer">
    	    <!-- 歌名 -->
    	    <view class="f-center">
    	      {{songInfo.al.name}}
    	    </view>
    	    <!-- 歌手 -->
    	    <view class="f-center songer">
    	      {{songInfo.ar[0].name}}
    	    </view>
    	  </view>
    	  <!-- 分享 -->
    	  <view class="back-icon">
    	    <u-icon name="share"
    	            :size="iconSize" />
    	  </view>
    	</view>
    	<!-- 歌词海报 -->
    	<view class="post f-center">
    	<view class="">
    		<view class="post-img" :style="{backgroundImage:`url(${songInfo.al.picUrl})`,backgroundSize:'cover'}">
    			
    		</view>
    	</view>
    	</view>
    	<!-- 控制栏 -->
    	<view class="control">
			<!-- 更多 -->
    	<view class="more">
			<u-icon name="thumb-up" :size="iconSize"></u-icon>
			<u-icon name="chat" :size="iconSize"></u-icon>
			<u-icon name="wifi" :size="iconSize"></u-icon>
			<u-icon name="more-dot-fill" :size="iconSize"></u-icon>
    	</view>
		<!-- 进度条 -->
		<view class="progress">
				<view class="left">
					00:00
				</view>
				<view>
					<u-slider  block-width="20"/>
				</view>
				<view class="right">
					00:00
				</view>
		</view>
		<!-- 控制按钮 -->
		<view class="control-btn">
			<u-icon name="reload" size="60"></u-icon>
			<u-icon name="rewind-left" size="60"></u-icon>
			<u-icon name="play-circle" size="150" @click="play"></u-icon>
			<u-icon name="rewind-right" size="60"></u-icon>
			<u-icon name="order" size="60"></u-icon>
		</view>
    	</view>
    </view>
        <audio :src="songUrl"
             :autoplay="true"
             controls v-show="false"
			 id="audio"
			 ></audio>
			 <!-- <audio :src="" :poster="" :name="" :author="" :action="" controls></audio> -->
  </view>
</template>

<script>
import { recommend } from "@/api/index/recommend.js";
let api = new recommend();
export default {
  data () {
    return {
      songUrl: '',
      songInfo: {
        al: { picUrl: '' },
        ar: ['']
      },
	  iconSize:55,
      IsApp: false, // 设备环境变量
      navbarTop: 0, // 功能栏上边距,
	  screenHeight:0
    };
  },
  async created () {
    await this.init()
	// console.log(this.songUrl)
	this.play()
  },
  methods: {
    init () {
      this.getSongUrl()
      this.getMusicDetail()
    },
    getSongUrl () {
      api.getSongUrl(this.$store.state.songsListIds[0]).then(res => {
        this.songUrl = res.data[0].url
        // console.log(res.data[0])
      })
    },

    getMusicDetail () {
      api.getMusicDetail(this.$store.state.songsListIds[0]).then(res => {
        // this.songInfo = res.songs[0].al; 
        // console.log(res.songs[0].al)
        this.songInfo = res.songs[0]
        // console.log(res.songs[0])
      })
    },
    getMusicLyric () {
      api.getMusicLyric(this.musicId).then(res => {
        // this.lyric = res.lrc.lyric        
      })
    },
	play(){
		
	}

  },
  mounted () {
    // 判断当前环境是否为app
    this.IsApp = !this.$system === 'devtools'
	this.screenHeight =750 / uni.getSystemInfoSync().windowWidth*(uni.getSystemInfoSync().windowHeight)
    // 获取功能栏上边距
	// console.log(this.screenHeight)
    // this.navbarTop = 750 / uni.getSystemInfoSync().windowWidth * this.$globalData.StatusBar
    // this.chartsSize = 750 / uni.getSystemInfoSync().windowWidth * (uni.getSystemInfoSync().windowHeight - 50)

  }
}	
</script>

<style lang="scss">
.bg-img {
  position: fixed;
  left: 0;
  right: 0;
  top: -50px;
  height: 100%;
  background-color: #161824;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  transform-origin: center top;
  transform: scale(1.5);
  transition: opacity 0.3s linear;
  z-index: -100;
  filter: blur(16px) brightness(50%);
}
.content{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.head {
  width: 750rpx;
  margin-top: 20rpx;
  padding: 0 10rpx 0 10rpx;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .songer {
    font-size: 20rpx;
    height: 50rpx;
  }
}
.post{
	width: 100%;
	height: 1000rpx;
	.post-img{
		width: 500rpx;
		height: 500rpx;
		border-radius: 50%;
	}
}
.control{
	width: 100%;
	height: 500rpx;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	// background-color: white;
	.more{
		display: flex;
		justify-content: space-around;
	}
	.progress{	
		padding: 0 125rpx 0 125rpx;
		// height: 50rpx;
		position: relative;
		.left{
			position: absolute;
			left: 20rpx;
			top: -16rpx;
			display: flex;
		}
		.right{
			position: absolute;
			right: 20rpx;
			top: -16rpx;
		}
	}
	.control-btn{
		display: flex;
		justify-content: space-around;
	}
}
</style>
