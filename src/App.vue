<template>
	<div id="appContainer">
		<header id="header" class="mui-bar mui-bar-nav mui-bar-new">
			<div class="headerIcon">
				<a class="mui-icon mui-icon-bars mui-pull-left" @click="showMenu">
				</a>
				<router-link to="/search" class="mui-icon mui-icon-search mui-pull-right"></router-link>
			</div>
			<ul>
				<router-link class="mui-tab-item-ll" to="/me">
					<li @click="style2">我的</li>
				</router-link>
				<router-link class="mui-tab-item-ll" to="/find">
					<li @click="style2">发现</li>
				</router-link>
				<router-link class="mui-tab-item-ll" to="/YC">
					<li @click="style" :class="activeClass == true?'mui-tab-item-ll router-link-exact-active li-active':''">云村</li>
				</router-link>
				<router-link class="mui-tab-item-ll" to="/video">
					<li @click="style2">视频</li>
				</router-link>
			</ul>
		</header>
		<transition mode="out-in">
			<div class="menu" v-show="isShow">
				<div class="menu_top">
					<div class="menu_card">
						<h3 style="padding-left: 10px;padding-top: 20px; color: white; display: inline-block;">黑胶VIP
							<p style="margin-top: 5px; color: white;">已过期133天</p>
						</h3>
						<span class="menu_vip">会员中心</span>
						<div class="menu_card_bottom">
							<h5>《歌手》1-4集现场歌曲合集
								<p>错过了节目 也不能错过音乐</p>
							</h5>
							<span class="menu_card_bottom_span">
								<img src="./assets/user_img.jpg" alt="">
								<span> > </span>
							</span>
						</div>
					</div>
				</div>
				<div class="menu_main">
					<div class="menu_user">
						<img src="./assets/user_img.jpg" alt="">
						<span class="DL">登录名</span>
						<span class="QD">
							<a>
								<span class="mui-icon-extra mui-icon-extra-gold"></span>
								签到
							</a>
						</span>
					</div>
					<div class="menu_ico">
						<ul>
							<li>
								<a id="icon-email">
									<span class="mui-icon mui-icon-email"></span>
								</a>
								<p>我的消息</p>
							</li>
							<li>
								<a id="icon-person"><span class="mui-icon mui-icon-person"></span></a>
								<p>我的好友</p>
							</li>
							<li>
								<a id="icon-home"><span class="mui-icon mui-icon-home"></span></a>
								<p>个人主页</p>
							</li>
							<li>
								<a id="icon-star"><span class="mui-icon mui-icon-star"></span></a>
								<p>个性装扮</p>
							</li>
						</ul>
					</div>
					<div class="menu_ul">
						<ul class="menu_ul1">
							<hr>
							<li>
								<a href="javascript:;">
									<a><span class="mui-icon mui-icon-arrowright"></span></a>
									创作者中心
								</a>
							</li>
							<hr>
						</ul>
						<ul class="menu_ul2">
							<li v-for="item in menu_msg" :key="item.text">
								<a href="javascript:;">
									<a><span class="mui-icon mui-icon-arrowright"></span></a>
									{{ item.text }}</a>
							</li>
						</ul>
						<hr>
						<ul class="menu_ul2">
							<li v-for="item in menu_msg1" :key="item.text">
								<a href="javascript:;">
									<a><span class="mui-icon mui-icon-arrowright"></span></a>
									{{ item.text }}</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="menu_bottom">
					<ul>
						<li>
							<a href="JavaScript:;">
								<a><span class="mui-icon-extra mui-icon-extra-lamp"></span></a>
								夜间模式</a>
						</li>
						<li>
							<a href="JavaScript:;">
								<a id="icon-gear"><span class="mui-icon mui-icon-gear"></span></a>
								设置</a>
						</li>
						<li>
							<a href="JavaScript:;">
								<a><span class="mui-icon mui-icon-closeempty"></span></a>
								退出</a>
						</li>
					</ul>
				</div>
			</div>
		</transition>
		<main @click="hideMenu">
			<transition>
				<router-view></router-view>
			</transition>
		</main>
		<footer>
			<Music></Music>
		</footer>
	</div>
</template>

<script>
	import Music from "./components/module/music.vue";

	export default {
		data() {
			return {
				activeClass: false,
				isShow: false,
				menu_msg: [
					{
						text: '听歌识曲'
					},
					{
						text: '演出'
					},
					{
						text: '商城'
					},
					{
						text: '附近的人'
					},
					{
						text: '游戏推荐'
					},
					{
						text: '口袋彩铃'
					}
				],
				menu_msg1: [
					{
						text: '我的订单'
					},
					{
						text: '定时停止播放'
					},
					{
						text: '扫一扫'
					},
					{
						text: '音乐闹钟'
					},
					{
						text: '音乐云盘'
					},
					{
						text: '在线听歌免流量'
					},
					{
						text: '优惠券'
					},
					// {
					// 	text: '青少年模式'
					// }
				]
			}
		},
		methods: {
			showMenu() {
				this.isShow = true
			},
			hideMenu() {
				this.isShow = false
			},
			style() {
				this.activeClass = true;
			},
			style2() {
				this.activeClass = false;
			}
		},
		components: {
            Music: Music,
        }
	}
</script>

<style>
	#appContainer {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: black;
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

	.blue {color: #2175bc;}
</style>
