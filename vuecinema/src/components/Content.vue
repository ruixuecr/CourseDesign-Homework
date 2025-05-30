<template>
    <div class="c-white m-b-40">
        <div class="flex-r flex-jc-sb flex-ac-c flex-col flex-gap-40 m-b-20">
            <div class="f-28 f-b l-h-32 text-left">
                <span>{{ title }}</span>
            </div>
            <div v-if="is_show">
                <slot name="more">
                    <div class="l-h-32 c-p hover-box-color" @click="clickMoreEvent(title)">
                        <span class="v-a-middle">{{ more_title }} </span>
                        <el-icon class="v-a-middle"><ArrowRightBold /></el-icon>
                    </div>
                </slot>
            </div>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: ['Title', 'MoreTitle', 'IsShow'],
    watch: {
        Title: {
            handler(newVal) {
                this.title = newVal
            },
            deep: true,
            immediate: true
        },
        MoreTitle: {
            handler(newVal) {
                this.more_title = !newVal ? '更多' : newVal
            },
            deep: true,
            immediate: true
        },
        IsShow: {
            handler(newVal) {
                this.is_show = newVal || newVal != undefined ? newVal : true
            },
            deep: true,
            immediate: true
        }
    },
    data() {
        return {
            title: '热门影视',
            more_title: '更多',
            is_show: true
        }
    },
    methods: {
        clickMoreEvent(data) {
            this.$emit('more', data)
        }
    }
}
</script>

<style scoped lang="scss">
.demo-tabs {
    width: 100%;
}
</style>
