<template>
    <div class="video">
        <ul>
            <li v-for="item in text" :key="item.t">
                <router-link :to="'/video/video' + item.v">
                    {{ item.t }}
                </router-link>
            </li>
        </ul>
            <transition>
				<router-view></router-view>
			</transition>
    </div>
</template>
<script>
        export default {
            data() {
                return {
                    text: [
                        {
                            t: '推荐',
                            v: '1'
                        },
                        {
                            t: 'LOOK直播',
                            v: '2'
                        },
                        {
                            t: '醉赤壁',
                            v: '3'
                        },
                        {
                            t: '现场',
                            v: '4'
                        },
                        {
                            t: '舞蹈',
                            v: '5'
                        },
                        {
                            t: '生活',
                            v: '6'
                        },
                        // {
                        //     t: '最佳饭制',
                        //     v: '7'
                        // },
                        // {
                        //     t: '翻唱',
                        //     v: '8'
                        // },
                        // {
                        //     t: '听BGM',
                        //     v: '9'
                        // },
                        // {
                        //     t: '游戏',
                        //     v: '10'
                        // },
                        // {
                        //     t: '音乐的力量',
                        //     v: '11'
                        // },
                        // {
                        //     t: 'MV',
                        //     v: '12'
                        // },
                        // {
                        //     t: 'ACG音乐',
                        //     v: '13'
                        // }
                    ],
                }
            },
            created() {

            },
            methods: {
            },
        }
</script>
<style>
    .video {
        width: 100%;
        height: 100%;
        margin-top: 50px;
        touch-action: none;
    }
    .video-style {
        height: 35px!important;
    }
</style>