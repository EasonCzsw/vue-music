<template>
    <div class="video_1">
        <div class="video_c">
            <ul>
                <li v-for="item in msg" :key="item.id">
                    <video :src="item.url" :poster="item.img" controls="controls" :ref="item.name" :alt='item.id'>
                    </video>
                    <img :ref="item.name1" src="../../assets/icon_4yazeyvv5s5/xiayishou-.png" @click="play(item.id, $event)">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: [],
                id: [10910304,10910403,10894457,10895135,10895136]
            }
        },
        created() {
            this.getMsg();
        },
        methods: {
            getMsg() {
                for (var i in this.id) {
                    this.$http.get('https://bird.ioliu.cn/v1/?url=http://music.163.com/api/mv/detail?id='+ this.id[i] +'&type=mp4', {}, {
                    headers: {
                    },
                    emulateJSON: true
                    }).then(function (res) {
                        this.msg.push({
                            url: res.body.data.brs["480"],
                            img: res.body.data.cover,
                            name: 'video',
                            id: res.body.data.id,
                            name1: 'img'
                        });
                    })
                }
            },
            play(id, $event) {
                this.$nextTick(()=> {
                    for (let z in this.$refs.video) {
                        if (this.$refs.video[z].attributes.alt.value == id) {
                            this.$refs.video[z].play();
                            $event.currentTarget.style.display = "none";
                        } else {
                            this.$refs.video[z].pause();
                        }
                    }
                });
            }
        },
    }
</script>
<style>
    .video_c {
        position: relative;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 100px;
        padding: 0 10px;
    }
    .video_c ul li {
        position: relative;
    }
    .video_c ul li > img {
        position: absolute;
        width: 30px;
        height: 30px;
        margin-left: -55%;
        margin-top: 25%;
        border-radius: 50%;
        background-color: #fff;
    }
    .video_c video {
        width: 100%;
        height: 200px;
        object-fit: fill;
        border-radius: 10px;
    }
</style>