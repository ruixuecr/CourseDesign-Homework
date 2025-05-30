<template>
    <div class="c-p hover-box-color card-model-box">
        <div class="flex-r flex-jc-l flex-ai-t flex-col-no flex-gap-20">
            <div>
                <el-image style="width: 120px; height: 80px" :src="require('@/assets/imgs/movies/' + Image)" fit="cover" />
            </div>
            <div class="f-14 text-left l-h-32">
                <div class="flex-r flex-jc-l flex-ai-t flex-col flex-gap-20">
                    <div class="w-px-max-280 no-warp-1 f-18">
                        <span>{{ Name }}</span>
                    </div>
                </div>
                <div class="flex-r flex-jc-l flex-ai-t flex-col flex-gap-10 m-b-8 m-t-8">
                    <div class="w-px-max-100" style="color: var(--el-color-warning)">
                        <span>{{ Score }}</span>
                        <span> 分</span>
                    </div>
                    <Tags :Name="Rate" style="font-size: 12px; line-height: 32px" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardModel',
    props: ['id', 'image', 'name', 'score', 'rate', 'tag', 'info'],
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
        },
        info: {
            handler(newVal) {
                this.Info = newVal
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
            Tag: ['最新', '1080P', '2023', '偶像', '爱情'],
            Info: {
                auth: '晓文',
                roles: ['金东旭', '秦基周', '徐智慧', '李知贤', '郑嘉熙'],
                blurb: '开往市中心的一节电车突然驶向未来世界，偶然乘坐同一辆电车的互不相识的乘客们突然被卷入前所未闻的事件中，在信号不通而且没有水和食物的极限状况下努力生活，想要回到原来的世界。山田裕贵饰演男主角人气发型师萱岛直哉。赤楚卫二饰演的是与主人公同乘一辆电车的白浜优斗，是一名正直热血、有男子气概的年轻消防员。'
            }
        }
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.card-model-box:hover {
    background-color: #00000050;
}
</style>
