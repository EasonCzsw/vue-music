<template>
    <div>
        <div class="music_List" v-show="isShow">
            <ul>
                <div class="top">
                    <h3>当前播放
                        <span>({{ this.A }})</span>
                    </h3>
                    <p @click="click1(songUrl2)">随机播放</p>
                    <p @click="nextMusic">下一首</p>
                </div>
                <li class='alt' v-for="item in msg" :key="item.id" @click="click(item.id, item.name, item.album.artist.img1v1Url)">
                    {{item.name}}-----演唱者:{{item.artists[0].name}}
                </li>
            </ul>
        </div>
        <div class="music_left">
            <img :src="this.imgUrl" alt="">
            <span class="text">{{ this.name | ellipsis}}</span>
        </div>
        <div class="music_right">
            <a @click="player">
                <img :src="this.playerImg" alt="" class="palyerImg">
            </a>
            <a @click="showMenu">
                <img src="../../assets/icon_4yazeyvv5s5/yinleliebiao-.png" alt="">
            </a>
        </div>
        <audio :src="this.songUrl" ref="mp3" controls="controls" style="width: 0;" autoplay loop></audio>
    </div>
</template>

<script>
    // 公共js组件
    import vueEvent from "../../../JS/vueEvent.js";
    const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
    export default {
        data() {
            return {
                msg: [],
                songUrl: '',
                songUrl1: [],
                songUrl2: [],
                isShow: false,
                A: '',
                name: '',
                imgUrl: '',
                num: 0,
                playerImg: "/img/xiayishou-.72254b34.png"
            }
        },
        filters: {
            ellipsis(value) {
                if (!value) return '';
                if (value.length > 10) {
                    return value.slice(0, 10) + '...'
                }
                return value;
            }
        },
        created() {
            this.getList();
            this.method();
            this.news1();
            this.news2();
            this.List1();
            this.List2();
            this.List3();
            this.List4();
            this.searchList();
        },
        methods: {
            method() {
                vueEvent.$on('news', data =>{
                    this.songUrl = data.a;
                    this.name = data.b;
                    this.imgUrl = data.c;
                    this.num = data.d;
                    this.player();
                });
            },
            news1() {
                vueEvent.$on('news1', data =>{
                    this.songUrl = data.a;
                    this.name = data.b;
                    this.imgUrl = data.c;
                    this.num = data.d;
                    this.player();
                });
            },
            news2() {
                vueEvent.$on('news2', data =>{
                    this.songUrl = data.a;
                    this.name = data.b;
                    this.imgUrl = data.c;
                    this.num = data.d;
                    this.player();
                });
            },
            List1() {
                vueEvent.$on('List1', data => {
                    this.songUrl = data.a;
                    this.name = data.b;
                    this.imgUrl = data.c;
                    this.num = data.d;
                    this.player();
                });
            },
            List2() {
                vueEvent.$on('List2', data => {
                    this.songUrl = data.a;
                    this.name = data.b;
                    this.imgUrl = data.c;
                    this.num = data.d;
                    this.player();
                });
            },
            List3() {
                vueEvent.$on('List3', data => {
                    this.songUrl = data.a;
                    this.name = data.b;
                    this.imgUrl = data.c;
                    this.num = data.d;
                    this.player();
                });
            },
            List4() {
                vueEvent.$on('List4', data => {
                    this.songUrl = data.a;
                    this.name = data.b;
                    this.imgUrl = data.c;
                    this.num = data.d;
                    this.player();
                });
            },
            searchList() {
                vueEvent.$on('searchList', data => {
                    this.songUrl = data.a;
                    this.name = data.b;
                    this.imgUrl = '';
                    this.num = data.d;
                    this.player();
                });
            },
            getList() {
                this.$http.get(API_PROXY + 'https://autumnfish.cn/search?keywords=林俊杰', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                this.msg = res.body.result.songs;
                this.A = this.msg.length;
                // 循环列表数据
                for (let i in (this.msg)) {
                    this.songUrl1.push({
                        a: this.msg[i].id,
                        b: this.msg[i].name
                    });
                }
                for (let m in (this.songUrl1))
                    this.$http.get(API_PROXY + 'https://autumnfish.cn/song/url?id=' + this.songUrl1[m].a, {}, {
                    headers: {
                    },
                    emulateJSON: true
                    }).then(function(res) {
                        this.songUrl2.push({
                            a: res.body.data[0].url,
                            b: this.songUrl1[m].b
                        });
                    })
                }, function (error) {
                console.log(error)
                })
            },
            click(id, name, imgUrl) {
                this.name = name;
                this.imgUrl = imgUrl;
                this.$http.get(API_PROXY + 'https://autumnfish.cn/song/url?id=' + id, {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                    this.songUrl = res.body.data[0].url;
                    this.num = 1;
                    this.player();
                }, function (error) {
                    console.log(error)
                })
            },
            click1(b) {
                var audio = this.$refs.mp3;
                var src = this.songUrl2.shift();
                this.songUrl = src.a;
                this.songUrl2.push(src);
                this.name = src.b;
                this.num = 1;
                this.imgUrl = "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg";
                this.player();
                audio.addEventListener('ended',function() {
                    console.log('下一首');
                    src = b.shift();
                    this.src = src.a;
                    b.push(src);
                }
                ,false)
            },
            nextMusic() {
                var src = this.songUrl2.shift();
                this.songUrl = src.a;
                this.songUrl2.push(src);
                this.name = src.b;
                this.imgUrl = "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg";
            },
            player() {
                var audio = this.$refs.mp3;
                console.log(this.num);
                if (this.num == 0) {    
                    audio.pause();
                    this.num = 1;
                    this.playerImg = "/img/xiayishou-.72254b34.png";
                } else if (this.num == 1) {
                    audio.play();
                    this.num = 0;
                    this.playerImg = "data:image/png;base64,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";
                }
            },
            showMenu() {
                if (this.isShow == false) {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
			},
        },
    }
</script>

<style>
    .music_left {
        float: left;
        height: 60px;
        line-height: 60px;
        margin-left: 10px;
    }
    .music_left img {
        width: 50px;
        height: 50px;
        vertical-align: middle;
        border-radius: 50%;
    }
    .music_left .text {
        margin-left: 5px;
        width: 200px;
    }
    .music_right {
        float: right;
        height: 60px;
        line-height: 60px;
        margin-right: 10px;
    }
    .music_right img {
        width: 30px;
        height: 30px;
        margin-left: 20px;
        vertical-align: middle;
    }
    .music_List {
        position: absolute; 
        width: 100%;
        height: 500px;
        padding: 10px 0;
        bottom: 80px; 
        border-radius: 20px;
        background-color: #fff;
        overflow: scroll;
    }
    .music_List li {
        height: 25px;
        padding: 20px 10px;
        text-align: left;
    }
    .music_List .top {
        text-align: left;
        height: 50px;
        width: 100%;
        padding-left: 10px;
    }
    .music_List .top span {
        font-size: 18px;
    }
    .music_List .top h3 {
        display: inline-block;
    }
    .music_List .top p {
        display: inline-block;
        float: right;
        margin-right: 10px;
        font-size: 12px;
        color: red;
    }
</style>