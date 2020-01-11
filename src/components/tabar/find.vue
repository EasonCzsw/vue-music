<template>
    <div class="find">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../assets/轮播图img/109951164611417065.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/轮播图img/109951164613305818.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/轮播图img/109951164613475860.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/轮播图img/109951164613481790.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/轮播图img/109951164614593843.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/轮播图img/109951164613497188.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/轮播图img/109951164613501227.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/轮播图img/109951164613509523.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格布局 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img class="tabImg" src="../../assets/icon_4yazeyvv5s5/shoucang-.png">
                    <div class="mui-media-body">每日推荐</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img class="tabImg" src="../../assets/icon_4yazeyvv5s5/yinleliebiao-.png">
                    <div class="mui-media-body">歌单</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img class="tabImg" src="../../assets/icon_4yazeyvv5s5//paihangbang-.png">
                    <div class="mui-media-body">排行榜</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img class="tabImg" src="../../assets/icon_4yazeyvv5s5/xinhao-.png">
                    <div class="mui-media-body">电台</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img class="tabImg" src="../../assets/icon_4yazeyvv5s5/yinleshipinsheying-.png">
                    <div class="mui-media-body">直播</div>
                </a>
            </li>
        </ul> 
        <!-- 推荐歌单 -->
        <div class="mui-content">
            <p class="mui-content-p1">推荐歌单</p>
            <p class="mui-content-p2">为你精细挑选</p>
            <div id="slider" class="mui-slider mui-fullscreen">
                <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a class="mui-control-item" v-for="item in imgList" :key="item.url">
                            <img :src="'http://p2.music.126.net/' + item.url" >
                            <p>{{ item.text }}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import mui from "../../mui/mui-master/examples/nativeTab/js/mui.min.js";

    export default {
        data() {
            return {
                imgList: [
                {
                    url: "44OV4VB6g9rQR5rXhkzCIQ==/109951164616785247.jpg?param=100y100",
                    text: "[VIP专享] 一周新歌推荐"
                },{
                    url: "_W5H7shvq_TM48xhFbWpAQ==/109951164058410770.jpg?param=100y100",
                    text: "节奏控 | 电子苏打，耳朵想喝气泡水"
                },{
                    url: "X-oZE9E--kauT2tpUwijzQ==/109951164005968547.jpg?param=100y100",
                    text: "寄给2020年未来女朋友甜甜的歌单"
                },{
                    url: "87VK1l60Ow4ucuQxCd2XNg==/109951164615532873.jpg?param=100y100",
                    text: "寂寞难耐 - 张婉清"
                },
                {
                    url: "QwE2491nMB0ki3jrD1M_wg==/7960464187312922.jpg?param=100y100",
                    text: "调高你的调调！车载DJ音乐低音炮强节奏版"
                },
                {
                    url: "MU7rJ0yJiiKSy_KJeJjRzQ==/109951164615921818.jpg?param=100y100",
                    text: "第258期：你不必逞强，做自己就好"
                },
                {
                    url: "JgpIja4_FSwD7BEKv-kB1w==/109951164250732717.jpg?param=100y100",
                    text: "中国风精选 · 惟有饮者留其名"
                },
                {
                    url: "zElWRmaILfJy0arcnn4b1Q==/109951164607617042.jpg?param=100y100",
                    text: "第一次爱的人 长版本"
                },
                
            ]
            }
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005
            });
        },
    }
</script>

<style>
    * {
        touch-action: pan-y;
    }
    .find {
        height: 100%;
        /* background-color: blue; */
    }

    /* 轮播图 */
    .mint-swipe {
        width: 100%;
        height: 200px!important;
        background-color: white;
    }
    .mint-swipe-item img {
        width: 98%;
        height: 90%;
        margin-top: 9px;
        border-radius: 8px;
    }

    /* 九宫格 */
    .mui-table-view {
        background-color: #fff!important;
        border: none!important;
    }
    .mui-media-body {
        font-size: 13px!important;
    }
    .mui-grid-view.mui-grid-9 .mui-media {
        width: 20%;
        padding: 0!important;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none!important;
    }
    .tabImg {
        width: 50%;
    }

    /* 推荐歌单 */
    .mui-content {
        background-color: #fff!important;
    }
    .mui-content-p1 {
        font-size: 13px;
        text-align: left;
        margin: 0;
        margin-left: 10px;
    }
    .mui-content-p2 {
        font-size: 18px;
        text-align: left;
        margin: 0;
        margin-left: 10px;
        margin-bottom: 15px;
        color: black;
    }
    .mui-content > div {
        position: relative;
    }
    .mui-segmented-control.mui-scroll-wrapper {
        height: 140px!important;
    }
    .mui-control-item {
        display: table-cell!important;
        padding: 0 5px!important;
        line-height: 15px!important;
    }
    .mui-control-item > p {
        width: 100px;
        /* white-space: initial; */
        overflow: hidden;
        text-overflow: ellipsis
    }
    .mui-control-item > img {
        border-radius: 10px;
    }
</style>