<template>
    <div class="bg-content">
        <div class="flex-r flex-jc-c flex-ac-t">
            <div class="w-px-max-1380 w-100">
                <div class="p-20 bg-black-blue-light" style="min-height: calc(100vh - 138px)">
                    <Content :Title="this.$route.query.title" :IsShow="false">
                        <template #content>
                            <div class="w-100 m-b-20">
                                <div v-for="(item, index) in movies" :key="index">
                                    <CardLineLarge
                                        :index="index + (this.page - 1) * this.page_size"
                                        :id="item.id"
                                        :image="item.image"
                                        :name="item.name"
                                        :score="item.score"
                                        :rate="item.rate"
                                        :tag="item.tag"
                                        :info="item.info"
                                        @click="routerInfoEvent(item)"
                                    />
                                    <Divider v-if="index + 1 != movies.length" />
                                </div>
                                <div class="w-100 flex-r flex-jc-c flex-ai-c m-t-40" v-if="movies.length > 0">
                                    <Pagination :total="this.allmovies.length" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
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
import { mapState } from 'vuex'
import { util } from '@/assets/js/index'

export default {
    name: 'History',
    data() {
        return {
            title: '',
            movies: [],
            allmovies: [], // 二次页面存储，用于页面切换

            is_show_sub: 1,

            page_size: 5,
            page: 1
        }
    },
    computed: {
        ...mapState({
            history: (state) => state.movie.history
        })
    },
    methods: {
        routerInfoEvent(data) {
            this.$router.push({ path: '/info', query: { id: data.id, flag: this.$route.query.flag } }).catch((error) => error)
        },

        handleSizeChange(data) {
            this.page_size = data
            this.page = 1
            let lastpage = Math.ceil(this.allmovies.length / this.page_size)
            if (this.page - lastpage < 0) {
                this.movies = this.allmovies.slice((this.page - 1) * this.page_size, this.page_size * this.page)
            } else {
                // 异步兼容
                setTimeout(() => {
                    this.movies = this.allmovies.slice((this.page - lastpage) * this.page_size, this.page_size * this.page)
                }, 1)
            }
        },
        handleCurrentChange(data) {
            this.page = data
            let lastpage = Math.ceil(this.allmovies.length / this.page_size)
            if (this.page - lastpage <= 0) {
                this.movies = this.allmovies.slice((this.page - 1) * this.page_size, this.page_size * this.page)
            }
        }
    },
    created() {
        let routerinfo = this.$route.query
        if (routerinfo.title == '观看记录') {
            this.movies = this.history
            this.allmovies = this.history
        }

        this.handleCurrentChange(1)
    }
}
</script>

<style lang="scss">
body {
    background-color: #111319cc;
}
</style>
