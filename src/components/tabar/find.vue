<template>
    <div class="find">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in scollImgList" :key="item.url">
                <img :src="item.url">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格布局 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/Recommend">
                    <img class="tabImg" src="../../assets/icon_4yazeyvv5s5/shoucang-.png">
                    <div class="mui-media-body">每日推荐</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/McList">
                    <img class="tabImg" src="../../assets/icon_4yazeyvv5s5/yinleliebiao-.png">
                    <div class="mui-media-body">歌单</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/ranking-list">
                    <img class="tabImg" src="../../assets/icon_4yazeyvv5s5//paihangbang-.png">
                    <div class="mui-media-body">排行榜</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/radio">
                    <img class="tabImg" src="../../assets/icon_4yazeyvv5s5/xinhao-.png">
                    <div class="mui-media-body">电台</div>
                </router-link>
            </li>
        </ul> 
        <!-- 推荐歌单 -->
        <div class="mui-content">
            <p class="mui-content-p1">推荐歌单</p>
            <p class="mui-content-p2">为你精细挑选</p>
            <router-link type="button" to="/McList">
                <input class="mui-content-btn" type="button" value="查看更多">
            </router-link>
            <div class="mui-scoll">
                <ul>
                    <li v-for="item in music_list" 
                    :key="item.id" style="float: left;">
                        <router-link :to="{ 
                            path: index + '/' + item.id,
                            query:{
                                name: item.name,
                                alname: item.artists[0].name,
                                alblurPicUrl: item.album.blurPicUrl
                            } 
                        }">
                            <img :src='item.album.picUrl'>
                            <p>{{ item.name }}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 场景推荐 -->
        <div class="mui-content">
            <p class="mui-content-p1">场景推荐</p>
            <p class="mui-content-p2">星期一 冲鸭</p>
            <router-link type="button" to="/McList">
                <input class="mui-content-btn" type="button" value="查看更多">
            </router-link>
            <div class="mui-scoll">
                <ul>
                    <li v-for="item in music_list1" 
                    :key="item.id" style="float: left;">
                        <router-link :to="{ 
                            path: index + '/' + item.id,
                            query:{
                                name: item.name,
                                alname: item.artists[0].name,
                                alblurPicUrl: item.album.blurPicUrl 
                            } 
                        }">
                            <img :src='item.album.picUrl'>
                            <p>{{ item.name }}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 云村精选 -->
        <div class="mui-content">
            <p class="mui-content-p1">云村精选</p>
            <p class="mui-content-p2">一首歌回到中学时代</p>
            <router-link type="button" to="/McList">
                <input class="mui-content-btn" type="button" value="查看更多">
            </router-link>
            <div lass="mui-scoll-f">
                <div class="mui-scoll">
                    <ul>
                        <li v-for="item in music_list2" 
                        :key="item.id" style="float: left;">
                            <router-link :to="{ 
                                path: index + '/' + item.id,
                                query:{
                                    name: item.name,
                                    alname: item.artists[0].name,
                                    alblurPicUrl: item.album.blurPicUrl 
                                } 
                            }">
                                <img :src='item.album.picUrl'>
                                <p>{{ item.name }}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 电台推荐 -->
        <div class="mui-content">
            <p class="mui-content-p1">电台推荐</p>
            <p class="mui-content-p2">用声音陪伴失眠的你</p>
            <router-link type="button" to="/McList">
                <input class="mui-content-btn" type="button" value="查看更多">
            </router-link>
            <div class="mui-scoll">
                <ul>
                    <li v-for="item in music_list3" 
                    :key="item.id" style="float: left;">
                        <router-link :to="{ 
                            path: index + '/' + item.id,
                            query:{
                                name: item.name,
                                alname: item.album.name,
                                alblurPicUrl: item.album.blurPicUrl 
                            } 
                        }">
                            <img :src='item.album.picUrl'>
                            <p>{{ item.name }}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // require 解析本地路径传入v-for
                scollImgList:[
                    { url: require('../../assets/SCimg/1.jpg') },
                    { url: require('../../assets/SCimg/2.jpg') },
                    { url: require('../../assets/SCimg/3.jpg') },
                    { url: require('../../assets/SCimg/4.jpg') },
                    { url: require('../../assets/SCimg/5.jpg') },
                    { url: require('../../assets/SCimg/6.jpg') },
                    { url: require('../../assets/SCimg/7.jpg') },
                    { url: require('../../assets/SCimg/8.jpg') }
                ],
                // 推荐歌单
                music_list: [],
                // 场景推荐
                music_list1: [],
                // 云村精选
                music_list2: [],
                // 电台推荐
                music_list3: [],
                index: '/cd',
            }
        },
        mounted() {
        },
        created() {
            this.getMusic_list();
            this.getMusic_list1();
            this.getMusic_list2();
            this.getMusic_list3();
        },
        methods: {
            getMusic_list() {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://music.163.com/api/playlist/detail?id=2557908184', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                    this.music_list = res.body.result.tracks.slice(0, 8);
                }, function (error) {
                console.log(error)
                })
            },
            getMusic_list1() {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://music.163.com/api/playlist/detail?id=19723756', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                this.music_list1 = res.body.result.tracks.slice(0, 8);
                }, function (error) {
                console.log(error)
                })
            },
            getMusic_list2() {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://music.163.com/api/playlist/detail?id=3778678', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                this.music_list2 = res.body.result.tracks.slice(0, 8);
                }, function (error) {
                console.log(error)
                })
            },
            getMusic_list3() {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://music.163.com/api/playlist/detail?id=3779629', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                this.music_list3 = res.body.result.tracks.slice(0, 8);
                }, function (error) {
                console.log(error)
                })
            },

        }
    }
</script>

<style scoped>
    * {
        touch-action: pan-y;
    }
    .find {
        height: 100%;
        padding-bottom: 50px;
        /* background-color: blue; */
    }
</style>