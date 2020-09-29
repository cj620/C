<template>
	<view>
		<view >
			<view v-for="item in songs">
				<songCell :imgUrl="item.al.picUrl" :songName="item.name" :songer="item.ar[0].name" :songId="item.id"/>
			</view>
		</view>
	</view>
</template>

<script>
	import songCell from '@/components/songCell/songCell'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			songCell
		},
		props:{
			songs:{
				type:[Object,Array],
				default:''
			}
		}
	}
</script>

<style lang="scss">

</style>
