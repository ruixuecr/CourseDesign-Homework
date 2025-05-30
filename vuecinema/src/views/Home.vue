<template>
    <div class="bg-content">
        <div class="flex-r flex-jc-c flex-ac-t">
            <div class="w-px-max-1380">
                <div>
                    <Carousel :CarouselsInfo="carousels" @click-carousel="routerInfoEvent" />
                </div>
                <div class="p-20 bg-black-blue-light">
                    <Content :Title="'热门影视'" @more="(data) => moreEvent(data, 1)">
                        <template #content>
                            <div class="w-100 m-b-20">
                                <div class="flex-r flex-jc-l flex-ac-fs flex-col flex-gap-20">
                                    <div v-for="(item, index) in movies" :key="index">
                                        <Card
                                            v-if="index < 8"
                                            :id="item.id"
                                            :image="item.image"
                                            :name="item.name"
                                            :score="item.score"
                                            :rate="item.rate"
                                            @click="routerInfoEvent(item)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Content>

                    <Content :Title="'最新电影'" @more="(data) => moreEvent(data, 2)">
                        <template #content>
                            <div class="w-100 m-b-20">
                                <div class="flex-r flex-jc-l flex-ac-fs flex-col flex-gap-20">
                                    <div v-for="(item, index) in movieslateral" :key="index">
                                        <CardMini
                                            v-if="index < 8"
                                            :id="item.id"
                                            :image="item.image"
                                            :name="item.name"
                                            :score="item.score"
                                            :rate="item.rate"
                                            :tag="item.tag"
                                            @click="routerInfoEvent(item)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Content>

                    <div class="flex-r flex-jc-sb flex-ai-t flex-col flex-gap-20">
                        <div style="flex: 1" class="w-px-min-320">
                            <Content :Title="'热门综艺'" @more="(data) => moreEvent(data, 1)">
                                <template #content>
                                    <div class="w-100 m-b-20">
                                        <div class="flex-r flex-jc-l flex-ac-fs flex-col flex-gap-20">
                                            <div v-for="(item, index) in movies" :key="index">
                                                <Card
                                                    v-if="index < 12"
                                                    :id="item.id"
                                                    :image="item.image"
                                                    :name="item.name"
                                                    :score="item.score"
                                                    :rate="item.rate"
                                                    @click="routerInfoEvent(item)"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </Content>
                        </div>
                        <div class="w-px-min-320">
                            <Content :Title="'TOP 100'" :MoreTitle="'查看完整榜单'" @more="(data) => moreEvent(data, 1)">
                                <template #content>
                                    <div class="w-100 m-b-20">
                                        <div v-for="(item, index) in movies" :key="index">
                                            <CardLine
                                                v-if="index < 13"
                                                :index="index"
                                                :id="item.id"
                                                :image="item.image"
                                                :name="item.name"
                                                :score="item.score"
                                                :rate="item.rate"
                                                @click="routerInfoEvent(item)"
                                            />
                                        </div>
                                    </div>
                                </template>
                            </Content>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { util } from '@/assets/js/index'

export default {
    name: 'Home',
    data() {
        return {
            movies: [],
            movieslateral: [],

            carousels: [
                {
                    id: '1',
                    bg_imgs: 'carouse-01.jpg',
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
            ],

            page_size: 12,
            page: 1
        }
    },
    methods: {
        moreEvent(data, flag) {
            this.$router.push({ path: '/morelist', query: { title: data, flag: flag } }).catch((error) => error)
        },
        routerInfoEvent(data) {
            this.$router.push({ path: '/info', query: { id: data.id } }).catch((error) => error)
        }
    },
    created() {
        // 获取轮播图-movies.json文件中lateral标识的横图-前4个
        let lateral_ids = util
            .getLateral()
            .map((n) => {
                return n.id
            })
            .filter((n) => n)

        this.carousels = util
            .getLateral()
            .map((n) => {
                if (lateral_ids.slice(0, 4).includes(n.id)) {
                    let data = {
                        id: n.id,
                        bg_imgs: n.image,
                        describe: {
                            text: {
                                title: n.name,
                                sub_title: n.info.blurb
                            },
                            btn: {
                                name: '了解更多'
                            }
                        }
                    }
                    return data
                }
            })
            .filter((n) => n)

        // 获取所有横图
        this.movieslateral = util.getLateral()

        // 获取所有的竖图
        this.movies = util.getPortrait()
    }
}
</script>

<style lang="scss">
.footer-box {
    height: 40px;
    line-height: 40px;
    color: #ffffff;
}
</style>
