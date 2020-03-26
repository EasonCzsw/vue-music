<template>
    <div class="McList" style="margin-top: 50px;">
        <div class="McList_top">
            <div class="goBack" @click="$router.back(-1)">返回</div>
            <div class="McList_time">
                <span class="McList_time_p2">{{ showDay }}/</span>
                <span class="McList_time_p1">{{ showMonth }}</span>
            </div>
            <p class="McList_text">歌单广场
                <span>vip</span>
            </p>
        </div>
        <ul>
            <li v-for='item in msg' :key='item.id'>
                <img src="../../assets/Eason.jpg" alt="" @click="playerM(item.id, item.name, item.album.artist.img1v1Url)">
                <p>{{ item.name }} <span>-{{ item.artists[0].name }}</span> </p>
            </li>
        </ul>
    </div>
</template>
<script>
    import vueEvent from "../../../JS/vueEvent.js";
    export default {
        data() {
            return {
                showMonth: '',
                showDay: '',
                msg: '',
                songUrl: '',
                name: '',
                url: ''
            }
        },
        created() {
            this.getMsg();
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
            getMsg() {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://autumnfish.cn/search?keywords=陈奕迅', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                this.msg = res.body.result.songs;
                }, function (error) {
                console.log(error)
                })
            },
            playerM(id, name, url) {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://autumnfish.cn/song/url?id=' + id, {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                    this.songUrl = res.body.data[0].url;
                    this.name = name;
                    this.url = url;
                    console.log(this.url);
                    vueEvent.$emit('news1', {
                        a: this.songUrl, 
                        b: this.name,
                        c: this.url,
                        d: 1 
                    });
                }, function (error) {
                    console.log(error)
                })
            }            
        },
    }
</script>

<style>
    .McList {
        width: 100%;
    }
    .McList_top {
        text-align: left;
        width: 90%;
        height: 200px;
        margin: 0 10px 10px 10px;
        background-image: url('../../assets/Eason4.jpg');
        background-size: 100% 100%;
        border-radius: 10px;
    }
    .McList_time {
        margin-left: 20px;
        margin-top: 130px;
        display: inline-block;
        width: 60px;
        margin-right: 5px;
        vertical-align: middle;
    }
    .McList_time_p1 {
        font-size: 18px;
        color: white;
    }
    .McList_time_p2 {
        font-size: 28px;
        color: white;
    }
    .McList_text {
        text-align: center;
        margin-left: 18px;
        padding: 5px 3px;
        font-size: 20px;
        width: 130px;
        border-radius: 10px;
        background-color: #fff;
    }
    .McList ul {
        text-align: left;
    }
    .McList ul li {
        float: left;
        width: 100px;
        margin: 0 10px;
    }
    .McList ul li img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
    }
    .McList ul li p {
        width: 100px;
        height: 40px;
        overflow: hidden;
    }
    .goBack {
        position: absolute;
        margin-left: 20px;
        margin-top: 10px;
        color: white;
    }
</style>