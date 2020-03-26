<template>
    <div class="discuss">
        <div class="discuss_top">
            <div class="discuss_text">
                <p class="discuss_text_p1">云村热评榜</p>
                <p>今天的热评榜已更新，来围观吧！</p>
            </div>
            <div class="discuss_time">
                <p class="discuss_time_p1">{{ showMonth }}.</p>
                <p class="discuss_time_p2">{{ showDay }}</p>
            </div>
        </div>
        <div class="discuss_main">
            <ul>
                <li v-for='item in scollImgList' :key="item.url">
                    <a href="javascript:;">
                        <img :src="item.url" alt="">
                        <p class="discuss_main_p">热评榜
                            <span>2013赞</span>
                        </p>

                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>    
<script>
    export default {
        data() {
            return {
                showMonth: '',
                showDay: '',
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
            }
        },
        created() {
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
            }
        },
    }

</script>
<style>
    .discuss {
        padding-top: 10px;
        padding-bottom: 50px;
    }
    .discuss_top {
        height: 80px;
        width: 90%;
        border-radius: 10px;
        margin: 0 auto;
        background-color: rgb(31, 18, 3);
    }
    .discuss_text {
        display: inline-block;
        text-align: left;
        margin-left: 5px;
    }
    .discuss_text p {
        margin-bottom: 0;
        height: 20px;
        line-height: 60px;
    }
    .discuss_text_p1 {
        font-size: 18px;
        font-weight: bold;
        color: white;
    }

    .discuss_time {
        display: inline-block;
        width: 60px;
        height: 60px;
        margin-right: 5px;
        vertical-align: middle;
    }
    .discuss_time p {
        margin-bottom: 3px;
    }
    .discuss_time_p1 {
        font-size: 18px;
        color: white;
    }
    .discuss_time_p2 {
        font-size: 28px;
        color: white;
    }

    .discuss_main {
        width: 90%;
        margin: 0 auto;
        margin-top: 10px;
    }
    .discuss_main li {
        margin-bottom: 10px;
    }
    .discuss_main img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .discuss_main_p {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: left;
        font-size: 16px; 
        color: black;
        padding-left: 10px;
        margin-top: -5px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: #fff;
    }
    .discuss_main_p span {
        font-size: 12px; 
        color: gray; 
        float: right;
        margin-right: 10px;
    }
</style>