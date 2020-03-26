<template>
    <div class="List1">
        <img :src="img" alt="">
        <ul>
            <li v-for="item in list" :key="item.name" @click="clickList1(
                item.id,
                item.name)">
                <p>{{ item.name }}</p>
                <span></span>
            </li>
        </ul>
    </div>
</template>

<script>
    // 公共js组件
    import vueEvent from "../../../JS/vueEvent.js";

    export default {
        data() {
            return {
                img: '',
                name: '',
                list: '',
                songUrl: '',
            }
        },
        created() {
            this.getList();
        },
        methods: {
            getList() {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://music.163.com/api/playlist/detail?id=19723756', {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                    this.list = res.body.result.tracks;
                    this.img = this.list[0].artists[0].img1v1Url;
                }, function (error) {
                    console.log(error)
                })
            },
            clickList1(id, name) {
                this.name = name;
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://autumnfish.cn/song/url?id=' + id, {}, {
                    headers: {
                    },
                    emulateJSON: true
                }).then(function (res) {
                    this.songUrl = res.body.data[0].url;
                    vueEvent.$emit('List1', {
                        a: this.songUrl,
                        b: this.name,
                        c: this.img,
                        d: 1
                    })
                });
            }
        },
    }
</script>

<style>
    .List1 {
        margin-top: 50px;
        margin-bottom: 100px;
    }
    .List1 > img {
        height: 200px;
        width: 100%;
    }
    .List1 ul {
        text-align: left;
        padding-left: 10px;
        padding-right: 10px;
    }
    .List1 ul li p {
        display: inline-block;
        height: 30px;
        line-height: 30px;
    }
    .List1 ul li span {
        float: right;
        width: 30px;
        height: 30px;
        background-image: url('../../assets/icon_4yazeyvv5s5/xiayishou-.png');
        background-size: 100%;
    }
</style>