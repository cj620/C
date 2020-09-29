<template>
	<view>
		<u-navbar :is-back="false" :background="{background: '#d64139'}" :border-bottom="false">
					<view class="slot-wrap search-line">
						       <u-search placeholder="搜索"
						                  input-align="center"
						                  :show-action="false"
										  height="50"
										  :style="{width:'550rpx'}"></u-search>
					</view>
				</u-navbar>
				<audio :src="songUrl"  controls></audio>
				
	</view>
</template>

<script>
	import { recommend } from "@/api/index/recommend.js";
	let api = new recommend();
	export default {
		data() {
			return {
				songId:'',
				songUrl:''
			};
		},
		onLoad(options) {
			this.songId=options.songId
			this.init()
		},
		methods:{
			init(){
				this.getSongUrl()
			},
			getSongUrl(){
				api.getSongUrl(this.songId).then(res=>{
					this.songUrl=res.data[0].url
				})
			}
			
		}
	}	
</script>

<style lang="scss">

</style>
