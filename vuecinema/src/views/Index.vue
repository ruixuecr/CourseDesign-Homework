<template>
    <div class="bg-content">
        <div>
            <el-affix :offset="0">
                <Header :active="now_path" />
            </el-affix>
        </div>
        <div>
            <router-view />
        </div>
        <div class="footer-box f-12 bg-primary-el">
            <Footer />
        </div>
        <!-- 回到顶部 -->
        <el-backtop :right="50" :bottom="50" />
    </div>
</template>

<script>
import moviesjson from '@/assets/json/movies.json'

export default {
    name: 'Index',
    data() {
        return {
            movies: moviesjson,

            now_path: ''
        }
    },
    watch: {
        // 监听路由变化
        $route(to) {
            this.now_path = to.path
        }
    },
    methods: {},
    created() {
        this.now_path = this.$route.path
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
