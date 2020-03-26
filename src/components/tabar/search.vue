<template>
    <div class="search">
        <div class="searchTop">
            <div class="goback" @click="$router.back(-1)">返回</div>
            <div class="bottomBorder">
                <input type="text" v-model="msg" @keyup="getList(msg)">
            </div>
            <div class="micList">*</div>
        </div>
        <div class="searchBottom">
            <ul>
                <li v-for="item in songUrl1" :key="item.a" @click="click(item.a, item.b)">
                    {{ item.b }}
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
                msg: '',
                showMsg: '',
                songUrl1: [],
                songUrl2: [],
                songUrl: '',
                A: ''
            }
        },
        created() {
        },
        methods: {
            getList(msg) {
                this.songUrl1 = [];
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://autumnfish.cn/search?keywords=' + msg, {}, {
                    headers: {

                    },
                    emulateJSON: true
                }).then(function(res) {
                    this.showMsg = res.body.result.songs;
                    this.A = this.showMsg.length;
                    for (let i in (this.showMsg)) {
                        this.songUrl1.push({
                            a: this.showMsg[i].id,
                            b: this.showMsg[i].name
                        });
                    }
                }, function (error) {
                    console.log(error)
                });
            },
            click(id, name) {
                this.$http.get('https://bird.ioliu.cn/v1/?url=https://autumnfish.cn/song/url?id=' + id, {}, {
                headers: {
                },
                emulateJSON: true
                }).then(function (res) {
                    this.songUrl = res.body.data[0].url;
                    this.name = name;
                    vueEvent.$emit('searchList', {
                        a:this.songUrl, 
                        b:this.name,
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
    .search {
        margin-top: 50px;
    }
    .searchTop {
        width: 100%;
        height: 40px;
    }
    .searchTop div {
        display: inline-block;
    }
    .searchTop .goback {
        float: left;
        margin-left: 10px;
        width: 40px;
        height: 40px;
        line-height: 40px;
    }
    .searchTop .micList {
        float: right;
        margin-right: 10px;
        width: 40px;
        height: 40px;
        line-height: 40px;
    }
    .searchTop .bottomBorder {
        width: auto;
    }
    .searchTop .bottomBorder input {
        border: none;
        border-bottom: 1px solid black;
    }
    .searchBottom {
        width: 100%;
        height: 100%;
    }
    .searchBottom ul li {
        text-align: left;
        width: 60%;
        height: 40px;
        line-height: 40px;
        margin-left: 20px;
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>