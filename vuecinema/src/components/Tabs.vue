<template>
    <div>
        <div class="demo-tabs flex-r flex-jc-l flex-ai-c flex-col-no flex-gap-40">
            <div v-for="(item, index) in tabs" :key="index" @click="handleClick(item)" class="c-p p-b-12 tabs-box" :class="activeName == item ? 'is-active' : ''">
                <span>{{ '线路' + item }}</span>
            </div>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    props: ['Tabs', 'ActiveName'],
    watch: {
        Tabs: {
            handler(newVal) {
                this.tabs = newVal ? newVal : ['线路1']
            },
            deep: true,
            immediate: true
        },
        ActiveName: {
            handler(newVal) {
                this.activeName = newVal ? newVal : '线路1'
            },
            deep: true,
            immediate: true
        }
    },
    data() {
        return {
            activeName: '线路1',
            tabs: ['线路1', '线路2', '线路3']
        }
    },
    methods: {
        handleClick(data) {
            this.activeName = data
            this.$emit('tabs-change', data)
        }
    }
}
</script>

<style scoped lang="scss">
.demo-tabs {
    width: 100%;
    color: #fff;
    border-bottom: 1px solid #666666fa;
}

.tabs-box {
    border-bottom: 4px solid #1a1c1ffa;

    transition: border-bottom 0.3s;
    -webkit-transition: border-bottom 0.3s; /* Safari */
}

.tabs-box:hover {
    color: var(--el-color-info);
}
.is-active {
    color: var(--el-color-warning);
    border-bottom: 4px solid var(--el-color-warning);
}
</style>
