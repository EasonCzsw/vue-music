<template>
    <div class="Recommend">
        <div class="Recommend_top">
            <div class="goBack" @click="$router.back(-1)">返回</div>
            <div class="Recommend_time">
                <span class="Recommend_time_p2">{{ showDay }}/</span>
                <span class="Recommend_time_p1">{{ showMonth }}</span>
            </div>
            <p class="Recommend_text">
                历史日推
                <span>vip</span>
            </p>
        </div>
        <div class="Recommend_main">
            <ul>
                <li v-for="item in music_list" :key="item.id" @click="click(item.id, item.name, item.album.artist.img1v1Url)">
                    <img :src="item.album.artist.img1v1Url" alt="">
                    <p style="display: inline-block;">{{ item.name }} <br> <span>林俊杰</span></p>
                    <img class="Recommend_ico" src="../../assets/icon_4yazeyvv5s5/xiayishou-.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
     // 公共js
    import vueEvent from "../../../JS/vueEvent.js";
    export default {
        data() {
            return {
                showMonth: '',
                showDay: '',
                music_list: [],
                songUrl: '',
                name: '',
                img: ''
            }
        },
        created() {
            this.getMusic_list();
            this.getTime();
        },
        methods: {
            getTime() { 
                var time = new Date();
                var mon = time.toDateString().split(" ")[1];      //获取当前月份   
                var day = time.getDate();
                day = day < 10 ? ('0' + day) : day;          //获取当前日期
                this.showMonth = mon;     
                this.showDay = day;
            },
            getMusic_list() {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://autumnfish.cn/search?keywords=林俊杰', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                this.music_list = res.body.result.songs;
                }, function (error) {
                console.log(error)
                })
            },
            click(id, name, img){
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://autumnfish.cn/song/url?id=' + id, {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                    this.songUrl = res.body.data[0].url;
                    this.name = name;
                    this.img = img;
                    vueEvent.$emit('news', {
                        a:this.songUrl, 
                        b:this.name,
                        c:this.img,
                        d:1 
                    });
                }, function (error) {
                    console.log(error)
                })
            } 
        },
    }
</script>
<style>
    .Recommend {
        margin-top: 50px;
    }
    .Recommend_top {
        text-align: left;
        width: 100%;
        height: 200px;
        background-image: url('../../assets/JJ.jpg');
        background-size: 100% 100%;
    }
    .Recommend_time {
        margin-left: 20px;
        margin-top: 130px;
        display: inline-block;
        width: 60px;
        margin-right: 5px;
        vertical-align: middle;
    }
    .Recommend_time_p1 {
        font-size: 18px;
        color: white;
    }
    .Recommend_time_p2 {
        font-size: 28px;
        color: white;
    }
    .Recommend_text {
        text-align: center;
        margin-left: 18px;
        padding: 5px 3px;
        font-size: 20px;
        width: 130px;
        border-radius: 10px;
        background-color: #fff;
    }
    .Recommend_main {
        text-align: left;
        padding: 5px 10px;
        height: 500px;
        overflow: scroll;
    }
    .Recommend_main li {
        height: 60px;
    }
    .Recommend_main img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }
    .Recommend_main p {
        height: 20px;
        line-height: 20px;
        margin-left: 10px;
        vertical-align: unset;
    }
    .Recommend_main p span {
        font-size: 12px;
    }
    .Recommend_ico {
        width: 20px!important;
        height: 20px!important;
        margin-top: 10px;
        float: right;
    } 
    .goBack {
        position: absolute;
        margin-left: 20px;
        margin-top: 10px;
        color: white;
    }
</style>