<template>
    <div>
        <el-carousel :interval="5000" :type="set_ability.type" :height="set_ability.height">
            <el-carousel-item v-for="(item, index) in carousels" :key="index">
                <div class="carousel-item-box" :style="{ 'background-image': 'url(' + require(`@/assets/imgs/movies/` + item.bg_imgs) + ')' }">
                    <div class="h-100 describe-box" :style="{ 'flex-direction': !set_ability.model.site ? 'column' : set_ability.model.site }">
                        <div v-if="item.describe" :style="{ width: set_ability.model.with, height: set_ability.model.height, 'background-color': set_ability.model.bg_color }">
                            <div
                                class="flex-r flex-jc-sb flex-col-no flex-grap-40 p-0-4 p-t-20 p-b-20"
                                :class="set_ability.model.site == 'column-reverse' ? 'flex-ai-fe' : 'flex-ai-fs'"
                            >
                                <div :class="'text-' + set_ability.text.site" :style="{ color: set_ability.text.c_color }">
                                    <div class="m-b-20 f-22 c-p c-p-text" @click="clickEvent(item)">
                                        <span class="v-a-middle">{{ item.describe.text.title }}</span>
                                        <el-icon class="v-a-middle right-box"><Right /></el-icon>
                                    </div>
                                    <div class="l-h-24 f-14 p-r-20" :style="{ color: item.describe.text.c_color + 'dd' }">
                                        <span>{{ item.describe.text.sub_title }}</span>
                                    </div>
                                </div>
                                <div>
                                    <el-button type="warning" size="large" @click="clickEvent(item)">{{ item.describe.btn.name }}</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import 'animate.css'

export default {
    name: 'Carousel',
    props: ['CarouselsInfo'],
    watch: {
        CarouselsInfo: {
            handler(newVal) {
                this.carousels = newVal
            },
            deep: true,
            immediate: true
        }
    },
    data() {
        return {
            set_ability: {
                type: '',
                height: '400px',
                model: {
                    site: 'column-reverse', //描述文本位置：顶部(默认):column，底部:column-reverse
                    with: '100%', //描述文本宽度
                    height: '', //描述文本高度
                    bg_color: '#00000080' //描述文本背景颜色，建议用: 透明度80
                },
                text: {
                    site: 'left', //文字位置: left,center,right
                    c_color: '#ffffff' //文字颜色
                }
            },
            carousels: [
                {
                    id: '1',
                    bg_imgs: 'lateral-01.jpg',
                    describe: {
                        text: {
                            title: '通往夏天的隧道离别的出口', //主描述标题等
                            sub_title: '轻小说#通往夏天的隧道、离别的出口#剧场版动画化决定！本作曾获得「这本轻小说真厉害」2020年度文库部门第9名。' //附描述文本等，文字颜色是title的0.8透明度
                        },
                        btn: {
                            name: '了解更多'
                        }
                    }
                }
            ]
        }
    },
    methods: {
        clickEvent(data) {
            this.$emit('click-carousel', data)
        }
    }
}
</script>
<style lang="scss" scoped>
.carousel-item-box {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover; // 1:100% 100% 2:cover 3:contain

    .describe-box {
        display: flex;

        .c-p-text:hover {
            opacity: 0.8;
        }

        .right-box {
            margin-left: 12px;
            transition: margin-left 0.5s;
            -webkit-transition: margin-left 0.5s; /* Safari */
        }

        .c-p-text:hover .right-box {
            margin-left: 20px;
        }
    }
}
</style>
