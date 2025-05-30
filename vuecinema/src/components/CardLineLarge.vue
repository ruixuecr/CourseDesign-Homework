<template>
    <div class="c-p hover-box-color cardline-box f-18 p-20">
        <div class="flex-r flex-jc-sb flex-ai-c flex-col flex-gap-40">
            <div class="flex-r flex-jc-l flex-ai-c flex-col flex-gap-40 w-px-min-320" style="flex: 1">
                <div class="w-px-min-80 text-left f-b f-60" style="font-style: italic" :style="{ color: [1, 2, 3].indexOf(Index + 1) > -1 ? 'var(--el-color-warning)' : '' }">
                    <span>{{ Index + 1 < 10 ? '0' + (index + 1).toString() : index + 1 }}</span>
                </div>
                <div class="flex-r flex-jc-l flex-ai-t flex-col-no flex-gap-40" style="flex: 1">
                    <div>
                        <el-image style="width: 120px; height: 140px" :src="require('@/assets/imgs/movies/' + Image)" fit="cover" />
                    </div>
                    <div class="f-14 text-left l-h-32">
                        <div class="flex-r flex-jc-l flex-ai-t flex-col flex-gap-20 h-px-max-35 no-warp-1">
                            <div class="w-px-max-280 no-warp-1 f-18">
                                <span>{{ Name }}</span>
                            </div>
                            <div class="w-px-max-100" style="color: var(--el-color-warning)">
                                <span>{{ Score }}</span>
                                <span> 分</span>
                            </div>
                        </div>
                        <div class="no-warp-2 h-px-max-80">
                            <div class="flex-r flex-jc-l flex-ai-t flex-col flex-gap-10 m-b-8 m-t-8">
                                <Tags :Name="Rate" />
                                <Tags :Name="item" v-for="(item, index) in Tag" :key="index" />
                            </div>
                        </div>
                        <div class="no-warp-2">
                            <span>{{ Info.blurb }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="c-666">
                <el-icon size="40" class="hover-box-color"><VideoPlay /></el-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardLineLarge',
    props: ['index', 'id', 'image', 'name', 'score', 'rate', 'tag', 'info'],
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
.cardline-box:hover {
    background-color: rgb(54, 54, 54);
}
</style>
