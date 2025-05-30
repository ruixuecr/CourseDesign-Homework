<template>
    <div class="bg-content">
        <div class="flex-r flex-jc-c flex-ac-t">
            <div class="w-px-max-1380 w-100">
                <div class="flex-r flex-jc-sb flex-ai-t flex-col m-t-20 m-b-20">
                    <div class="bg-black w-px-min-300 h-px-min-600 flex-c flex-jc-c" style="flex: 3">
                        <video controls style="width: 100%; height: 100%; object-fit: cover">
                            <source :src="require('@/assets/video/' + movies_info.lines[line][num])" type="video/mp4" />
                        </video>
                    </div>
                    <div class="bg-black-blue-light w-px-min-300 c-white" style="flex: 1">
                        <div class="f-24 f-b l-h-60 text-left p-l-20 no-warp-1 hover-box-color c-p" @click="routerInfoEvent(movies_info)">
                            <span>{{ movies_info.name }}</span>
                        </div>
                        <div class="flex-r flex-jc-sb flex-ai-c flex-col-no flex-gap-20 bg-black-blue-light">
                            <div style="flex: 1" class="tabs-bg-color" @click="showEvent(is_active, 'is_active')" :class="is_active == 1 ? 'is_active' : ''">
                                <div class="t-left-box tabs-bg-color l-h-40" :class="is_active == 1 ? 'is_active' : ''"><span>播放列表</span></div>
                            </div>
                            <div style="flex: 1" class="tabs-bg-color" @click="showEvent(is_active, 'is_active')" :class="is_active == 2 ? 'is_active' : ''">
                                <div class="t-right-box tabs-bg-color l-h-40" :class="is_active == 2 ? 'is_active' : ''"><span>精彩看点</span></div>
                            </div>
                        </div>
                        <div class="h-px-max-500 p-20" style="overflow-y: auto">
                            <div v-if="is_active == 1" class="flex-r flex-jc-l flex-ac-fs flex-col flex-gap-15 h-px-min-80">
                                <div
                                    v-for="(item, index) in movies_info.lines[line]"
                                    :key="index"
                                    class="w-px-min-85"
                                    :class="num == index ? 'is_active brd-4' : ''"
                                    style="flex: 1"
                                    @click="playVideoEvent(movies_info, line, index)"
                                >
                                    <Tags :Name="'第 ' + index + ' 集'" :key="index" />
                                </div>
                            </div>
                            <div v-if="is_active == 2" style="overflow-y: auto">
                                <div class="flex-c flex-jc-l flex-gap-20">
                                    <div v-for="(item, index) in movies" :key="index" style="flex: 1">
                                        <CardModel
                                            :id="item.id"
                                            :image="item.image"
                                            :name="item.name"
                                            :score="item.score"
                                            :rate="item.rate"
                                            :tag="item.tag"
                                            :info="item.info"
                                            @click="routerInfoEvent(item)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-r flex-jc-sb flex-ai-t flex-col flex-gap-20">
                    <div style="flex: 3" class="w-px-min-300">
                        <div class="c-white">
                            <div class="f-38 f-b l-h-60 text-left no-warp-1 m-b-12">
                                <span class="v-a-middle m-r-12 hover-box-color c-p" @click="routerInfoEvent(movies_info)">{{ movies_info.name }}</span>
                                <el-icon class="v-a-middle m-r-12" size="20"><ArrowRightBold /></el-icon>
                                <span class="v-a-middle c-gray">{{ '第' + this.num + '集' }}</span>
                            </div>
                            <div class="flex-r flex-jc-l flex-ai-t flex-col-no flex-gap-10 m-b-12">
                                <div class="brd-4 h-px-28 l-h-28 p-l-8 p-r-8" style="background-color: var(--el-color-success)">
                                    <span>豆瓣评分:</span>
                                    <span>{{ movies_info.score }}</span>
                                    <span>分</span>
                                </div>
                                <Tags :Name="item" v-for="(item, index) in movies_info.tag" :key="index" />
                            </div>
                            <div class="text-left l-h-24 f-14">
                                <div :class="is_show_sub == 1 ? 'no-warp-2' : ''">
                                    <span class="remark-title">简介：</span>
                                    <span>{{ movies_info.info.blurb }}</span>
                                </div>
                                <div class="text-right remark-title c-p f-12">
                                    <span class="show-box" @click="showEvent(is_show_sub, 'is_show_sub')">{{ is_show_sub == 1 ? '展开' : '收起' }}</span>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <Content :Title="'猜你喜欢'" @more="(data) => moreEvent(data, 1)">
                                <template #content>
                                    <div class="w-100 m-b-20">
                                        <div class="flex-r flex-jc-l flex-ac-fs flex-col flex-gap-20">
                                            <div v-for="(item, index) in movies" :key="index">
                                                <Card
                                                    v-if="index < 6"
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
                    <div style="flex: 1" class="w-px-min-300">
                        <Content :Title="'相关排行'" :MoreTitle="'查看排行'" @more="(data) => moreEvent(data, 1)">
                            <template #content>
                                <div class="w-100 m-b-20">
                                    <div v-for="(item, index) in movies" :key="index">
                                        <CardLine
                                            v-if="index < 12"
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
</template>

<script>
import moviesjson from '@/assets/json/movies.json'
import { mapState } from 'vuex'

export default {
    name: 'VideoView',
    data() {
        return {
            movies: moviesjson,

            movies_info: {},

            line: '',
            num: '',

            is_show_sub: 1,
            is_active: 1
        }
    },
    computed: {
        ...mapState({
            history: (state) => state.movie.history
        })
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
        // 播放单集
        playVideoEvent(data, line, num) {
            this.$router.push({ path: '/videoview', query: { id: data.id, line: line, num: num } }).catch((error) => error)
        }
    },
    created() {
        let routerinfo = this.$route.query
        if (routerinfo.id) {
            this.movies_info = this.movies.filter((n) => n.id == routerinfo.id)[0]

            this.line = routerinfo.line
            this.num = routerinfo.num

            // 存储观看记录-倒序插入
            this.history.unshift(this.movies_info)
            this.$store.dispatch('movie/revise_history', this.history)
        }
    }
}
</script>
<style lang="scss" scoped>
.t-left-box {
    width: 100%;
    height: 40px;
    transform: perspective(50px) rotateX(5deg);
    position: relative;
    left: 4px;
}

.t-right-box {
    width: 100%;
    height: 40px;
    transform: perspective(50px) rotateX(-5deg);
    position: relative;
    right: 4px;
}

.tabs-bg-color {
    background: #242938;
}

.tabs-bg-color:hover {
    cursor: pointer;
    background: #24293830;
}

.is_active {
    background: var(--el-color-warning) !important;
}

.remark-title {
    color: #a9a9ac;
}

.show-box:hover {
    color: var(--el-color-warning);
}
</style>
