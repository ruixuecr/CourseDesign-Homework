<template>
    <div class="c-p hover-box-color">
        <div class="card-box" :style="{ 'background-image': 'url(' + require(`@/assets/imgs/movies/` + Image) + ')' }">
            <div class="flex-c flex-jc-sb c-white f-12 h-px-120">
                <div class="flex-r flex-jc-sb flex-ai-c flex-col flex-gap-20 p-8">
                    <div class="w-px-max-100">
                        <div class="brd-4 h-px-32 l-h-32 p-l-8 p-r-8" style="background-color: var(--el-color-success)">
                            <span>豆瓣评分:</span><span>{{ Score }}</span
                            ><span>分</span>
                        </div>
                    </div>
                    <div class="w-px-max-100" v-if="Tag.length > 0">
                        <div class="brd-4 h-px-32 l-h-32 p-l-8 p-r-8" style="background-color: var(--el-color-danger)">
                            <span>{{ Tag[0] }}</span>
                        </div>
                    </div>
                </div>
                <div class="h-px-32 l-h-32 bg-primary text-right p-r-8" style="background-color: #00000050">
                    <span>{{ Rate }}</span>
                </div>
            </div>
        </div>
        <div class="m-t-8 no-warp-1 w-px-max-320">
            <span>{{ Name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardMini',
    props: ['id', 'image', 'name', 'score', 'rate', 'tag'],
    watch: {
        id: {
            handler(newVal) {
                this.Id = newVal
            },
            immediate: true,
            deep: true
        },
        image: {
            handler(newVal) {
                this.Image = newVal
            },
            immediate: true,
            deep: true
        },
        name: {
            handler(newVal) {
                this.Name = newVal
            },
            immediate: true,
            deep: true
        },
        score: {
            handler(newVal) {
                this.Score = newVal
            },
            immediate: true,
            deep: true
        },
        rate: {
            handler(newVal) {
                this.Rate = newVal
            },
            immediate: true,
            deep: true
        },
        tag: {
            handler(newVal) {
                this.Tag = newVal
            },
            immediate: true,
            deep: true
        }
    },
    data() {
        return {
            Id: '1',
            Image: 'movie-01.jpg',
            Name: 'PendingTrain8点23分明天和你',
            Score: '4.5',
            Rate: '更新至08集',
            Tag: ['最新', '1080P', '2023', '偶像', '爱情']
        }
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.card-box {
    width: 320px;
    height: 120px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 320px 120px;
    transition: background-size 0.3s;
    -webkit-transition: background-size 0.3s; /* Safari */
}

.card-box:hover {
    opacity: 0.8;
    background-size: 340px 130px;
}
</style>
