<template>
    <div class="c-p hover-box-color">
        <div class="card-box" :style="{ 'background-image': 'url(' + require(`@/assets/imgs/movies/` + Image) + ')' }">
            <div class="flex-c flex-jc-sb c-white f-12 h-px-220">
                <div class="w-px-max-100 p-t-8 p-l-8">
                    <div class="brd-4 h-px-32 l-h-32" style="background-color: var(--el-color-success)">
                        <span>豆瓣评分:</span><span>{{ Score }}</span
                        ><span>分</span>
                    </div>
                </div>
                <div class="h-px-32 l-h-32 text-right p-r-8" style="background-color: #00000050">
                    <span>{{ Rate }}</span>
                </div>
            </div>
        </div>
        <div class="m-t-8 no-warp-1 w-px-max-150">
            <span>{{ Name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['id', 'image', 'name', 'score', 'rate'],
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
        }
    },
    data() {
        return {
            Id: '1',
            Image: 'movie-01.jpg',
            Name: 'PendingTrain8点23分明天和你',
            Score: '4.5',
            Rate: '更新至08集'
        }
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.card-box {
    width: 150px;
    height: 220px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 150px 220px;
    transition: background-size 0.3s;
    -webkit-transition: background-size 0.3s; /* Safari */
}

.card-box:hover {
    opacity: 0.8;
    background-size: 170px 240px;
}
</style>
