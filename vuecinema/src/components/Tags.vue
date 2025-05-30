<template>
    <div class="tags-box p-l-8 p-r-8 l-h-28 c-white brd-4 c-p">
        <span class="w-100">{{ name }}</span>
    </div>
</template>

<script>
export default {
    name: 'Tags',
    props: ['Name'],
    watch: {
        Name: {
            handler(newVal) {
                this.name = newVal
            },
            immediate: true,
            deep: true
        }
    },
    data() {
        return {
            name: ''
        }
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.tags-box {
    background-color: #cacaca55;
}

.tags-box:hover {
    opacity: 0.8;
}
</style>
