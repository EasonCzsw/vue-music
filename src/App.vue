<template>
	<div id="appContainer">
		<header id="header" class="mui-bar mui-bar-nav mui-bar-new">
			<div class="headerIcon">
				<a class="mui-icon mui-icon-bars mui-pull-left" @click="showMenu">
				</a>
				<transition mode="out-in">
					<div class="menu" v-show="isShow">
						个人列表设置
					</div>
				</transition>
				<a class="mui-icon mui-icon-search mui-pull-right"></a>
			</div>
			<ul>
				<router-link class="mui-tab-item-ll" to="/me">
					<li>我的</li>
				</router-link>
				<router-link class="mui-tab-item-ll" to="/find">
					<li>发现</li>
				</router-link>
				<router-link class="mui-tab-item-ll" to="/YC">
					<li>云村</li>
				</router-link>
				<router-link class="mui-tab-item-ll" to="/video">
					<li>视频</li>
				</router-link>
			</ul>
		</header>
		<main @click="hideMenu">
			<transition>
				<router-view></router-view>
			</transition>
			<transition name="other">
				<router-view name="other"></router-view>
			</transition>
			<transition name="other">
				<router-view name="others"></router-view>
			</transition>
		</main>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
			}
		},
		methods: {
			showMenu() {
				this.isShow = true
			},
			hideMenu() {
				this.isShow = false
			}
		},
	}
</script>

<style>
	#appContainer {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: black;
		padding-top: 48px;
		margin: 0;
		font-weight: bold;
		font-size: 15px;
		/* 动画 */
		overflow-x: hidden;
	}
	.mui-bar {
		height: 48px!important;
	}
	.mui-bar-new {
		background-color: white!important;
		box-shadow: none!important;
		-webkit-box-shadow: none!important;
	}

	/* 动画 */
	.v-enter {
		opacity: 0;
		transform: translateX(-100%)
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active {
		transition: all 0.5s ease;
	}

	.other-enter {
		opacity: 0;
		transform: translateX(100%)
	}
	.other-leave-to {
		opacity: 0;
		transform: translateX(100%);
		position: absolute;
	}
	.other-enter-active,
	.other-leave-active {
		transition: all 0.5s ease;
	}

	/* 为了配合使用muiscroll 修改类名:mui-tab-item-ll */
	.mui-bar-tab .mui-tab-item-ll.mui-active {
		color: #007aff;
	}
	.mui-bar-tab .mui-tab-item-ll {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}
	.mui-bar-tab .mui-tab-item-ll .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item-ll .mui-icon~.mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
