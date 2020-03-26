<template>
    <div class="CD">
        <div class="CD_top">
            <div class="goBack" @click="$router.back(-1)">返回</div>
            <h3>{{ this.name }}
                <p>{{ this.alname }}</p>
            </h3>
            <img :src="this.alblurPicUrl" alt="">
        </div>
        <div class="CD_bottom">
            <ul>
                <li v-for="item in showList" :key='item.name' 
                @click="click(
                    item.id, 
                    item.name)"
                >
                    <p>{{ item.name }}</p>
                    <TJimgMic></TJimgMic>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    // 公共js组件
    import vueEvent from "../../../JS/vueEvent.js";
    // 引入组件
    import TJimgMic from "../../components/module/TJimgMic.vue";
    export default {
        data() {
            return {
                alname: '',
                alblurPicUrl: '',
                showList: [],
                name: '',
                songUrl: '',
                img: ''
            }
        },
        created() {
            this.method();
        },
        methods: {
            method() {
                this.name = this.$route.query.name;
                this.alname = this.$route.query.alname;
                this.alblurPicUrl = this.$route.query.alblurPicUrl;
                this.showlist(this.alname);
            },
            showlist(a) {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://autumnfish.cn/search?keywords=' + a, {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                this.showList = res.body.result.songs;
                }, function (error) {
                console.log(error)
                })
            },
            click(id, name) {
                this.name = name;
                this.img = this.alblurPicUrl;
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://autumnfish.cn/song/url?id=' + id, {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                    this.songUrl = res.body.data[0].url;
                    this.name = name;
                    vueEvent.$emit('news2', {
                        a:this.songUrl, 
                        b:this.name,
                        c:this.img,
                        d:1 
                    });
                }, function (error) {
                    console.log(error)
                })
            },
        },
        components: {
            TJimgMic: TJimgMic,
        }
    }
    
</script>

<style> 
    .CD {
        margin-top: 50px;
    }
    .CD_top {
        width: 100%;
        height: 80%;
        padding: 10px;
        background-color:rgb(1, 114, 114, 0.5);
    }
    .CD_top h3 {
        text-align: left;
        color: white;
    }
    .CD_top img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid rgb(1, 114, 114, 0.3);
    }
    .CD_top p {
        color: white;
    }
    .CD_bottom {
        width: 100%;
        height: 20%;
        text-align: left;
        padding: 20px 10px;
    }
    .CD_bottom p {
        display: inline-block;
        width: 200px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 0;
        font-size: 16px;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .CD_bottom .TJimgMic {
        margin-right: 20px;
        margin-top: 0px;
    }
    .CD_top .goBack {
        position: relative;
    }
</style>