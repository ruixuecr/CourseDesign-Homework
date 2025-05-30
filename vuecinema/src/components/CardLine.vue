<template>
    <div class="c-p hover-box-color cardline-box f-18 p-l-4 p-r-4">
        <div class="flex-r flex-jc-sb flex-ai-c flex-col flex-gap-20 h-px-40 l-h-40">
            <div class="w-px-max-60 text-left f-b" style="font-style: italic" :style="{ color: [1, 2, 3].indexOf(Index + 1) > -1 ? 'var(--el-color-warning)' : '' }">
                <span>{{ Index + 1 }}</span>
            </div>
            <div class="w-px-max-280 no-warp-1 text-left f-14" style="flex: 1">
                <span>{{ Name }}</span>
            </div>
            <div class="w-px-max-100 text-right f-14" style="color: var(--el-color-warning)">
                <span>{{ Score }}</span>
                <span> 分</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardLine',
    props: ['index', 'id', 'image', 'name', 'score', 'rate', 'tag'],
    watch: {
        index: {
            handler(newVal) {
                this.Index = newVal
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
            Score: '豆瓣评分:4.5分',
            Rate: '更新至08集',
            Tag: ['最新', '1080P', '2023', '偶像', '爱情']
        }
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.cardline-box:hover {
    background-color: rgb(54, 54, 54);
}
</style>
