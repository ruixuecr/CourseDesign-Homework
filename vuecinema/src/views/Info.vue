<template>
    <div class="bg-content">
        <div class="flex-r flex-jc-c flex-ai-t p-20">
            <div class="w-px-max-1380 w-100">
                <div class="flex-r flex-jc-sb flex-ai-t flex-col flex-gap-20 c-white w-100 w-px-min-320">
                    <div style="flex: 1">
                        <div class="flex-r flex-jc-l flex-ai-t flex-col-no flex-gap-20">
                            <div class="line-box"></div>
                            <div>
                                <div class="text-left f-32 m-b-20 h-px-max-45 no-warp-1">
                                    <span>{{ movies_info.name }}</span>
                                </div>
                                <div class="flex-r flex-jc-l flex-ai-t flex-col flex-gap-10 h-px-max-80 no-warp-2">
                                    <Tags :Name="item" v-for="(item, index) in movies_info.tag" :key="index" />
                                </div>
                            </div>
                        </div>
                        <div class="text-left p-20 m-t-20 l-h-32 f-16 remark-box h-px-min-260">
                            <div>
                                <span class="remark-title">导演：</span><span>{{ movies_info.info.auth }}</span>
                            </div>
                            <div>
                                <span class="remark-title">主演：</span><span>{{ movies_info.info.roles.join('， ') }}</span>
                            </div>
                            <div>
                                <div :class="is_show_sub == 1 ? 'no-warp-5' : ''">
                                    <span class="remark-title">简介：</span>
                                    <span> {{ movies_info.info.blurb }}</span>
                                </div>
                                <div class="text-right remark-title c-p f-12">
                                    <span class="show-box" @click="showEvent(is_show_sub, 'is_show_sub')">{{ is_show_sub == 1 ? '展开' : '收起' }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-left m-t-20 m-b-20">
                            <el-button type="warning" size="large" icon="VideoPlay" @click="playVideoEvent(movies_info)">立即播放</el-button>
                        </div>
                    </div>
                    <div class="w-px-max-320">
                        <el-image style="width: 320px; height: 420px" :src="require('@/assets/imgs/movies/' + movies_info.image)" :fit="'cover'" />
                    </div>
                </div>
                <div class="m-t-20">
                    <Tabs :Tabs="Object.keys(movies_info.lines)" :ActiveName="activeName" @tabs-change="tabsChangeEvent">
                        <template v-slot:content>
                            <div class="content-slot flex-r flex-jc-l flex-ac-fs flex-col flex-gap-20 c-white p-20 remark-box h-px-min-80">
                                <div v-for="(item, index) in tabs_content" :key="index">
                                    <Tags :Name="'第 ' + index + ' 集'" :key="index" @click="playVideoEvent(movies_info, activeName, index)" />
                                </div>
                            </div>
                        </template>
                    </Tabs>
                </div>
                <div class="m-t-40">
                    <Content :Title="'为你推荐'" @more="(data) => moreEvent(data, 1)">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moviesjson from '@/assets/json/movies.json'

export default {
    name: 'Info',
    data() {
        return {
            movies: moviesjson,

            movies_info: {},

            tabs_content: {},
            activeName: '',

            is_show_sub: 1
        }
    },
    methods: {
        showEvent(data, keywords) {
            data == 1 ? (this[keywords] = 2) : (this[keywords] = 1)
        },
        moreEvent(data, flag) {
            this.$router.push({ path: '/morelist', query: { title: data, flag: flag } }).catch((error) => error)
        },
        routerInfoEvent(data) {
            this.$router.push({ path: '/info', query: { id: data.id } }).catch((error) => error)
        },
        // 立即播放&播放单集
        playVideoEvent(data, line = '0', num = '1') {
            this.$router.push({ path: '/videoview', query: { id: data.id, line: line, num: num } }).catch((error) => error)
        },
        tabsChangeEvent(data) {
            this.activeName = data
            this.tabs_content = this.movies_info.lines[data]
        }
    },
    created() {
        let routerinfo = this.$route.query
        if (routerinfo.id) {
            this.movies_info = this.movies.filter((n) => n.id == routerinfo.id)[0]

            this.activeName = '0'
            this.tabsChangeEvent(this.activeName)
        }
    }
}
</script>

<style lang="scss">
.footer-box {
    height: 40px;
    line-height: 40px;
    color: #ffffff;
}

.end-sum {
    gap: 40px;
}

.line-box {
    background-color: var(--el-color-warning);
    width: 4px;
    height: 100px;
}

.remark-box {
    background-color: #41414155;
}

.remark-title {
    color: #a9a9ac;
}

.show-box:hover {
    color: var(--el-color-warning);
}
</style>
