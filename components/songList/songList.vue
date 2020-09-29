<!-- 歌单 -->
<template>
	<view>
		<!-- 整体 -->
		<view class="song-list">
			<!-- 图片 -->
			<view class="img-bg" 
			:style="{background:`url(${imgUrl})`,backgroundSize:'cover'}">
			<view class="count">
				<u-icon name="play-right" color="#fff" size="20"></u-icon>
				<text>{{playCount%10000}}万</text>
			</view>
			</view>
			<!-- 文字模块 -->
			<view class="recommend-content">
				{{name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			imgUrl:{
				type:String,
				default:'//p3.music.126.net/Q7ylOqSKZxG63_3sARpgkg==/109951165340879562.jpg?param=200y200'
			},
			playCount:{
				type:[String,Number],
				default:'10'
			},
			name:{
				type:String,
				default:'歌单名'
			}
		}
	}
</script>

<style lang="scss">
.song-list{
	width: 210rpx;
	height: 270rpx;
	margin: 0 10rpx 0 10rpx ;
	display: flex;
	flex-direction: column;
	align-items: center;
	.img-bg{
		width: 210rpx;
		height: 210rpx;
		border-radius: 15rpx;
		position: relative;
	}
	.recommend-content{
		width: 200rpx;
		height: 70rpx;
		white-space: normal;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #333;
		font-size: 20rpx;
	}
	.count{
		display: flex;
		position: absolute;
		bottom: 5rpx;
		right: 5rpx;
		color: white;
		font-size: 15rpx;
	}
}
</style>
