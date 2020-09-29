<template>
	<view>
		<boxContent />
	</view>
</template>

<script>
	import tabBox from '../tabBox/tabBox'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			tabBox
		},
		props:{
			songLists:{
				type:[Array,Object],
				default:[]
			}
		}
	}
</script>

<style lang="scss">

</style>
