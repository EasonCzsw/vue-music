<template>
    <div class="me"> 
        <div class="me_Top">
            <!-- 头像区域 -->
            <div class="userImg">
                <img src="../../assets/user_img.jpg" alt="">
                <div class="userText">
                    <span style="margin-left: 0; font-size: 18px;">登录名</span>
                    <div class="userBr userSty">黑胶vip<span class="userSty" style="margin-left: 5px; color: white;">Lv.7</span></div>
                </div>
            </div>
            <span class="userVip">开通黑胶vip > </span>
            <!-- 操作按钮 -->
            <div class="userBtn">
                <ul>
                    <li v-for="item in icoImg" :key="item.url">
                        <a href="javascript:;">
                            <img :src='item.url' alt="">
                            <p>{{ item.text }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="me_Main">
            <!-- 我的音乐 -->
            <div class="myMusic">
                <h4>我的音乐</h4>
                <div class="mui-scoll">
                    <ul>
                        <li>
                            <router-link to="/Recommend">
                                <img src='../../assets/JJ.jpg'>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 最近播放 -->
            <div class="myHistory">
                <h4>最近播放</h4>
                <div class="mui-scoll">
                    <ul>
                        <li>
                            <router-link to="/Recommend">
                                <img src='../../assets/JJ.jpg'>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 创建歌单 -->
            <div class="createList">
                <h4>创建歌单</h4>
                <div class="mui-scoll">
                    <ul>
                        <li>
                            <router-link to="/Recommend">
                                <img src='../../assets/JJ.jpg'>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                icoImg: [
                    {
                        url: require('../../assets/icon_4yazeyvv5s5/yinlegedan-.png'),
                        text: '本地音乐'
                    },
                    {
                        url: require('../../assets/icon_4yazeyvv5s5/xiazai-.png'),
                        text: '下载管理'
                    },
                    {
                        url: require('../../assets/icon_4yazeyvv5s5/xinhao-.png'),
                        text: '我的电台'
                    },
                    {
                        url: require('../../assets/icon_4yazeyvv5s5/shoucang-.png'),
                        text: '我的收藏'
                    }
                ]
            }
        },
        mounted() {
        },
    }
</script>

<style>
    .me {
        height: 100%;
    }
    .me_Main ul {
        width: 100%;
        text-align: left;
    }
</style>