<template>
    <div class="rankingList">
        <div class="goBack" @click="$router.back(-1)">返回</div>
        <img src="../../assets/Me_img.jpg" alt="">
        <router-link to="/ranking-list/list1">
            <div class="rankingList_main" @click="List1()">
                <h3>飙升榜</h3>
                <img class="rankingList_img" :src="img" alt="">
                <div class="rankingList_div">
                    <ul>
                        <li v-for="item in musicList" :key="item.name">{{ item.name | ellipsis }}</li>
                    </ul>
                </div>
            </div>
        </router-link>
        <router-link to="/ranking-list/list2">
            <div class="rankingList_main">
                <h3>新歌榜</h3>
                <img class="rankingList_img" :src="img" alt="">
                <div class="rankingList_div">
                    <ul>
                        <li v-for="item in musicList1" :key="item.name">{{ item.name | ellipsis }}</li>
                    </ul>
                </div>
            </div>
        </router-link>
        <router-link to="/ranking-list/list3">
            <div class="rankingList_main">
                <h3>热歌榜</h3>
                <img class="rankingList_img" :src="img" alt="">
                <div class="rankingList_div">
                    <ul>
                        <li v-for="item in musicList2" :key="item.name">{{ item.name | ellipsis }}</li>
                    </ul>
                </div>
            </div>
        </router-link>
        <router-link to="/ranking-list/list4">
            <div class="rankingList_main">
                <h3>抖音榜</h3>
                <img class="rankingList_img" :src="img" alt="">
                <div class="rankingList_div">
                    <ul>
                        <li v-for="item in musicList3" :key="item.name">{{ item.name | ellipsis }}</li>
                    </ul>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                img: '',
                // 飙升榜
                musicList: '',
                // 新歌榜
                musicList1: '',
                // 热歌榜
                musicList2: '',
                // 抖音榜
                musicList3: ''
            }
        },
        filters: {
            ellipsis(value) {
                if (!value) return '';
                if (value.length > 15) {
                    return value.slice(0, 15) + '...'
                }
                return value;
            }
        },
        created() {
            this.getMusicList();
            this.getMusicList1();
            this.getMusicList2();
            this.getMusicList3();
        },
        methods: {
            getMusicList() {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://music.163.com/api/playlist/detail?id=19723756', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                    this.musicList = res.body.result.tracks.splice(0,3);
                    this.img = this.musicList[0].artists[0].img1v1Url;
                }, function (error) {
                    console.log(error)
                })
            },
            getMusicList1() {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://music.163.com/api/playlist/detail?id=3779629', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                    this.musicList1 = res.body.result.tracks.splice(0,3);
                }, function (error) {
                    console.log(error)
                })
            },
            getMusicList2() {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://music.163.com/api/playlist/detail?id=3778678', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                    this.musicList2 = res.body.result.tracks.splice(0,3);
                }, function (error) {
                    console.log(error)
                })
            },
            getMusicList3() {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://music.163.com/api/playlist/detail?id=2250011882', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                    this.musicList3 = res.body.result.tracks.splice(0,3);
                }, function (error) {
                    console.log(error)
                })
            }
        },
    }
</script>
<style>
    .rankingList {
        margin-top: 50px;
        text-align: left;
        padding-bottom: 100px;
    }
    .rankingList a {
        color: #000;
    }
    .rankingList > img {
        width: 100%;
    }
    .rankingList_main {
        padding-left: 10px;  
    } 
    .rankingList_img {
        width: 120px;
        height: 120px;
        border-radius: 5px;
    }
    .rankingList_div {
        display: inline-block;
        vertical-align: top;
        height: 120px;
    }
    .rankingList_div li {
        margin-left: 10px;
        height: 40px;
        line-height: 40px;
    }
    .rankingList .goBack {
        position: absolute;
        margin-left: 20px;
        margin-top: 10px;
        color: black;
    }
</style>