<template>
    <div class="login-box flex-c flex-jc-c" style="height: 100vh">
        <div class="w-100 flex-r flex-jc-c flex-ai-c flex-col" :class="'flex-jc-' + flexwidth" style="position: absolute">
            <div class="w-px-max-500 w-px-min-120 w-100">
                <div class="h-px-440 brd-32 model-box bg-white c-333 p-60">
                    <SignIn v-if="modelactive == 'model-denglu'" :class="modelclass">
                        <template v-slot:remark>
                            <div class="f-12"><span>没有账号，准备创建一个账号么？</span><span class="model-button-a" @click="clickZhuceSwitch">立即注册</span></div>
                        </template>
                    </SignIn>
                    <Register v-else v-on:success="successEvent" :class="modelclass">
                        <template v-slot:remark>
                            <div class="f-12"><span>想起来了，已经创建过账号？</span><span class="model-button-a" @click="clickDengluSwitch">立即登录</span></div>
                        </template>
                    </Register>
                </div>
                <div class="f-12 c-gray l-h-32 m-t-12">
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'animate.css'

export default {
    data() {
        return {
            buttons: { l: '左侧', c: '居中', r: '右侧' },

            flexwidth: 'c', // 控制-模块的位置 c中间 l左侧 r右侧
            modelactive: 'model-denglu',
            modelclass: ''
        }
    },
    methods: {
        successEvent() {
            this.clickDengluSwitch()
        },

        clickDengluSwitch() {
            this.modelclass = 'model-out'
            setTimeout(() => {
                this.modelactive = 'model-denglu'
                this.modelclass = 'model-in'
            }, 800)
        },

        clickZhuceSwitch() {
            this.modelclass = 'model-out'
            setTimeout(() => {
                this.modelactive = 'model-zhuce'
                this.modelclass = 'model-in'
            }, 800)
        }
    }
}
</script>
<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#505050, #202020);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #1a1c1ffa;

    .model-box {
        border: 2px solid var(--el-color-primary);

        .model-button-a {
            color: var(--el-color-primary);
        }
        .model-button-a:hover {
            cursor: pointer;
            color: var(--el-color-warning);
        }
    }

    .model-in {
        animation: zoomIn;
        animation-duration: 1s;
    }

    .model-out {
        animation: zoomOut;
        animation-duration: 1s;
    }
}
</style>
