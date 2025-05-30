<template>
    <router-view :key="$route.fullPath" />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333;
}

:root {
    --el-color-primary: #16161a !important;
}

/*全局控制-滑动条*/
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #1d212b;
}

::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb {
    border-radius: 999px;
    border: 2px solid transparent;
}

::-webkit-scrollbar-track {
    border-radius: 999px;
    border: 2px solid transparent;
}

::-webkit-scrollbar-thumb {
    min-height: 50px;
    background-clip: content-box;
    box-shadow: 0 0 0 5px #474747 inset;
}

::-webkit-scrollbar-corner {
    background: transparent;
}
</style>
