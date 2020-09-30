<template>
	<view>
    <audio :src="songUrl" autoplay controls></audio>
		<!-- 头部 -->
	</view>
</template>

<script>
	import { recommend } from "@/api/index/recommend.js";
	let api = new recommend();
	export default {
		data() {
			return {
				songUrl:''
			};
		},
		created() {
			this.init()
		},
		methods:{
			init(){
				this.getSongUrl()
			},
			getSongUrl(){
				api.getSongUrl(this.$store.state.songsListIds[0]).then(res=>{
					this.songUrl=res.data[0].url
					console.log(this.songUrl)
				})
			}
			
		}
	}	
</script>

<style lang="scss">

</style>
