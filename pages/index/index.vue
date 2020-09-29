<template>
  <view class="content">
    <!-- 头部部分 -->
	<u-navbar :is-back="false" :background="{background: '#d64139'}" :border-bottom="false">
				<view class="slot-wrap search-line">
					       <u-search placeholder="搜索"
					                  input-align="center"
					                  :show-action="false"
									  height="50"
									  :style="{width:'550rpx'}"></u-search>
				</view>
			</u-navbar>
    <view class="search f-center">
		<!-- 搜索 -->
    </view>
	<!-- 轮播图 -->
    <view class="swiper">
		<!-- 背景 -->
		<view class="swiper-bg">
			
		</view>
		<!-- 图片 -->
      <view class="wrap">
        <u-swiper :list="bannerList"
				  border-radius="40"
				  height="280"></u-swiper>
      </view>
    </view>
	<!-- 选项tab -->
	<view>
		<scroll-view scroll-x class="swiper-content">
				<view v-for="item in tabList" class="dd" >
					<iconTab :titleName="item"/>
				</view>
		</scroll-view>
	</view>
	<!-- 歌单推荐 -->
	<view class="song-list-recommend">
		<view class="title">
			华语精选站
		</view>
		<view class="more">
			<u-button size="mini" shape="circle">查看更多</u-button>
		</view>
	</view>
	<!-- 歌单轮播 -->
	<view >
		<scroll-view scroll-x class="swiper-content">
			<view class="dd" v-for="item in cPlayList">
				<songList  :imgUrl="item.coverImgUrl" :name="item.name" :playCount="item.playCount"/>
			</view>
		</scroll-view>
	</view>
	
	<!-- 歌曲推荐 -->
	<view class="song-recommend">
		<view class="title">
			欧美流行
		</view>
		<view class="more">
			<u-button size="mini" shape="circle">播放全部</u-button>
		</view>
	</view>
	<view >
		<scroll-view scroll-x class="swiper-content">
			<tabBox class="dd" :songs="osongs.slice(0,3)" />
			<tabBox class="dd" :songs="osongs.slice(3,6)"/>
			<tabBox class="dd" :songs="osongs.slice(6,9)"/>	
			<tabBox class="dd" :songs="osongs.slice(9,12)"/>
		</scroll-view>
	</view>
	
	<!-- KPOP推荐 -->
	<view class="song-recommend">
		<view class="title">
			百听不厌的KPOP
		</view>
		<view class="more">
			<u-button size="mini" shape="circle">查看更多</u-button>
		</view>
	</view>
	<view >
		<scroll-view scroll-x class="swiper-content">
				<view class="dd" v-for="item in hPlayList">
					<songList  :imgUrl="item.coverImgUrl" :name="item.name" :playCount="item.playCount"/>
				</view>
		</scroll-view>
	</view>
  </view>
</template>

<script>
	import iconTab from '@/components/iconTab/iconTab'
	import songList from '@/components/songList/songList'
	import songCell from '@/components/songCell/songCell'
	import tabBox from './components/tabBox/tabBox'
	import { recommend } from "@/api/index/recommend.js";
	let api = new recommend();
export default {
  data () {
    return {
      title: 'Hello',
	  tabList:['每日推荐','歌单','排行榜','歌手','直播','数字专辑'],
	  bannerList:[],
	  cPlayList:[],
	  oPlayList:[],
	  osongs:[],
	  hPlayList:[]
    }
  },
  created () {
	  this.init()
  },
  methods: {
	  // 初始化
	  init(){
		 this.getBanners ()
		 this.getPlaylists()
	  },
	  getBanners(){
		api.getBanners(2).then(res=>{
				  console.log(res.banners)
				  res.banners.map(x=>{
					 this.bannerList.push(x.pic)
				  })
		})  
	  },
	  getPlaylists(){
		  api.getPlaylists('华语',6).then(res=>{
			  this.cPlayList = res.playlists
		  })
		  api.getPlaylists('欧美',1).then(res=>{
		  			 api.getPlaylistTrackId(res.playlists[0].id).then(res=>{
						 const ids = res.playlist.trackIds.map(x=>{
							 return x.id
						 })
						 api.getTrack(ids.slice(0,12)).then(res=>{
							 console.log(res.songs)
							 this.osongs = res.songs
						 })
					 })
		  })
		  api.getPlaylists('韩语',6).then(res=>{
		  			  this.hPlayList = res.playlists
		  })
	  },
	  

  },
  components:{
	  iconTab,
	  songList,
	  tabBox,
	  songCell
  }
}
</script>

<style lang="scss" scoped>
.content {
	// 搜索
  .search {
    background-color: $basic-color;
  }
  .search-line{
	  margin: 0 auto;
  }
  // 轮播图
  .swiper{
	  position: relative;
	  .wrap {
	    padding: 0 25rpx 0 25rpx;
	  }
	  .swiper-bg{
		  width: 750rpx;
		  height: 100rpx;
		  background-color: $basic-color;
		  position: absolute;
					top: 0;
	  }
  }
  .dd{
	  display:inline-block
  }
  // tab轮播
  .swiper-content{
	  margin: 30rpx 0 20rpx 20rpx;
	  white-space: nowrap;
  }
	// 歌单推荐
	.song-list-recommend{
		display: flex;
		justify-content: space-between;
		margin: 0 25rpx 0 25rpx;
		.title{
			font-size: 37rpx;
		}
	}
	.song-recommend{
		display: flex;
		justify-content: space-between;
		margin: 50rpx 25rpx 0 25rpx;
		.title{
			font-size: 37rpx;
		}
	}
}
</style>
