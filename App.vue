<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		mounted: function () {
		  let _that = this
		  uni.getSystemInfo({
		    success: e => {
				  // StatusBar: 头顶状态栏高度
				  // CustomBar: 状态栏加标题栏高度
				  // ScreenHeight: 标题栏以下屏幕高度
		      _that.$globalData.StatusBar = e.statusBarHeight;
			  _that.$globalData.screenHeight = e.screenHeight;
			  _that.$globalData.windowWidth = e.windowWidth;
			  // console.log(e.statusBarHeight)
		      // let capsule = uni.getMenuButtonBoundingClientRect();
		      // if (capsule) {
		      //   _that.$globalData.Custom = capsule;
		      //   _that.$globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
		      // } else {
		      //   _that.$globalData.CustomBar = e.statusBarHeight + 50;
		      // }
		      // _that.$globalData.ScreenHeight = uni.getSystemInfoSync().windowHeight - _that.$globalData.CustomBar;
		    console.log(e)
			}
		  });
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
</style>
