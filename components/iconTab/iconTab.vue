<template>
	<view>
		<view class="icon-tab ">	
			<view class="bg-icon f-center">
				<u-icon :name="name" :size="size" :color="color"/>
			</view>
			<view class="icon-title">
				{{titleName}}
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
			name:{
				type:String,
				default:'photo'
			},
			size:{
				type:[String,Number],
				default:60
			},
			color:{
				type:String,
				default:'white'
			},
			titleName:{
				type:String,
				default:'标题'
			}
		}
	}
</script>

<style lang="scss">
.icon-tab{
	width: 160rpx;
	height: 200rpx;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.bg-icon{
		width: 90rpx;
		height: 90rpx;
		background-color: $basic-color;
		border-radius: 50%;
		
	}
	.icon-title{
		color: #999;
		font-size: 27rpx;
		margin-top: 10rpx;
	}
}
</style>
