<template>
    <div class="follow">
        <div class="mui-content">
            <div id="slider" class="mui-slider mui-fullscreen">
                <div id="sliderSegmentedControl" class="mui-mewHeight mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a class="mui-control-item mui-newStyle">
                            <p>#</p>
                        </a>
                        <a class="mui-control-item mui-newStyle" v-for="item in imgList" :key="item.url">
                            <img :src='item.url'>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="cmt-container">
            <textarea maxlength="120" placeholder="请输入要评论的内容" v-model="msg" style="border-radius: 20px;"></textarea>
            <button class="cmt-button" type="primary" size="large" @click="postComment()">发表评论</button>
            <div class="cmt-list">
                <div class="cmt-item" v-for="(item, i) in nameslist" :key="item.id">
                    <div class="cmt-title" style="color: lightskyblue;">
                        第{{ i + 1 }}楼用户：{{ i + 1 }}
                        <span style="float: right; color: black;"> 时间：{{ showTime }} </span>
                    </div>
                    <div class="cmt-body">
                        {{ item.body }}
                    </div>
                </div>
            </div>
            <button class="cmt-button" type="danger" size="large" @click="getMsg()" plain>加载更多</button>
        </div>
    </div>
</template>
<script>
    import { Toast } from "mint-ui";
    import mui from "../../mui/mui-master/examples/nativeTab/js/mui.min.js";
    export default {
        data() {
            return {
                imgList: [
                    {
                        url: require('../../assets/TJimg/1.png'),
                        text: "[VIP专享] 一周新歌推荐"
                    },{
                        url: require('../../assets/TJimg/2.png'),
                        text: "节奏控 | 电子苏打，耳朵想喝气泡水"
                    },{
                        url: require('../../assets/TJimg/3.png'),
                        text: "寄给2020年未来女朋友甜甜的歌单"
                    },{
                        url: require('../../assets/TJimg/4.png'),
                        text: "寂寞难耐 - 张婉清"
                    },
                    {
                        url: require('../../assets/TJimg/5.png'),
                        text: "调高你的调调！车载DJ音乐低音炮强节奏版"
                    },
                    {
                        url: require('../../assets/TJimg/6.png'),
                        text: "第258期：你不必逞强，做自己就好"
                    },
                    {
                        url: require('../../assets/TJimg/7.png'),
                        text: "中国风精选 · 惟有饮者留其名"
                    },
                    {
                        url: require('../../assets/TJimg/8.png'),
                        text: "第一次爱的人 长版本"
                    }
                
                ],
                nameslist: [],
                showTime: '',
                msg: '',
                userId: 1
            }
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005
            })
        },
        created() {
            this.getNames();
            this.getTime();
        },
        methods: {
            getTime() {
                var time = new Date(); 
                var year = time.getFullYear();    //获取当前年份   
                var mon = time.getMonth()+1;      //获取当前月份   
                var da = time.getDate();          //获取当前日   
                var day = time.getDay();          //获取当前星期几   
                var h = time.getHours();          //获取小时   
                var m = time.getMinutes();        //获取分钟   
                var s = time.getSeconds();  
                this.showTime = year+'.'+mon+'.'+da+'.'+'周'+day+' '+h+':'+m+':'+s;
            },
            getNames() {
                this.$http.get("http://jsonplaceholder.typicode.com/posts?userId=" + this.userId).then((result)=> {
                    this.nameslist = this.nameslist.concat(result.body);
                });
            },
            getMsg() {
                this.userId++;
                this.getNames();
            },
            postComment() {
                if (this.msg.trim().length === 0) {
                    return Toast('评论不为空!');
                }
                this.$http.post("https://jsonplaceholder.typicode.com/posts", {
                    aid: this.nameslist.length+1,
                    body: this.msg.trim()
                }).then((res)=> {
                    this.nameslist.concat(this.nameslist.unshift(res.data));
                    this.nameslist.id = this.nameslist.aid;
                });
            },
        },
    }
</script>
<style>
    .follow {
        padding-bottom: 80px;
    }
    .mui-newStyle {
        border-radius: 50%;
        width: 60px!important;
        height: 60px;
        padding: 0!important;
        margin-left: 20px;
    }
    .mui-newStyle img {
        width: 100%;
        height: 100%;
    }
    .mui-newStyle p {
        font-size: 16px;
        color: white;
        height: 60px;
        line-height: 60px;
        background-color: rgb(135, 22, 187);
    }
    .mui-mewHeight {
        height: 80px!important;
    }
    .cmt-item {
        text-align: left;
        margin-bottom: 10px;
        margin-top: 10px;
        border-bottom: 0.5px solid grey;
        background-color: white;
    }
    .cmt-body {
        color: grey;
    }
    .cmt-button {
        border-radius: 5px;
        color: white;
        box-shadow: 2px 2px 5px grey;
        background-color: lightblue;
    }
</style>