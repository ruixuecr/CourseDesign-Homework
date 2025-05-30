<template>
    <div class="pagination-box">
        <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[5, 10, 20, 50, 100]"
            :small="true"
            :background="true"
            layout="total, sizes, prev, pager, next, jumper"
            :total="Total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['total'],
    watch: {
        total: {
            handler(newVal) {
                this.Total = newVal
            },
            immediate: true,
            deep: true
        }
    },
    data() {
        return {
            pageSize: 5,
            currentPage: 1,

            Total: 0
        }
    },
    methods: {
        handleSizeChange(data) {
            this.$emit('size-change', data)
        },
        handleCurrentChange(data) {
            this.$emit('current-change', data)
        }
    }
}
</script>

<style scoped lang="scss">
.pagination-box :deep(.el-pagination__total),
.pagination-box :deep(.el-pagination__goto),
.pagination-box :deep(.el-pagination__classifier) {
    color: var(--el-color-warning);
}
</style>
