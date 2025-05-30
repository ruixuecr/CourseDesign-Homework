<template>
    <div class="text-left">
        <h1>立即登录</h1>
        <div class="l-h-30 h-px-30 f-14">
            <span><slot name="remark"></slot></span>
        </div>
        <div class="m-t-32">
            <el-form :model="form" ref="form" :rules="rules" label-width="50px" class="form-box" label-position="top">
                <el-form-item label="账号" size="large" prop="name">
                    <el-input v-model="form.name" size="large" maxlength="20" clearable placeholder="请输入账号/手机号/邮箱">
                        <template #prefix>
                            <el-icon class="el-input__icon"><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="密码" size="large" prop="pass">
                    <el-input v-model="form.pass" size="large" maxlength="20" type="password" show-password clearable placeholder="请输入密码">
                        <template #prefix>
                            <el-icon class="el-input__icon"><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <slot name="cut"><el-checkbox v-model="form.remember" label="记住密码" style="color: var(--el-color-primary)" @change="changeCheckbox" /></slot>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="large" style="width: 100%" @click="onSubmit('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import { mapState } from 'vuex'

export default {
    name: 'SignIn',
    data() {
        return {
            form: {
                name: '',
                pass: '',
                remember: false
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: '账号不能为空',
                        trigger: 'change'
                    }
                ],
                pass: [
                    {
                        required: true,
                        message: '密码不能为空',
                        trigger: 'change'
                    }
                ]
            }
        }
    },
    computed: {
        ...mapState({
            logininfo: (state) => state.movie.login
        })
    },
    methods: {
        changeCheckbox(data) {
            this.form.remember = data
        },
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.form.name == this.logininfo.name && this.form.pass == this.logininfo.pass) {
                        this.$store.dispatch('movie/revise_login', { name: this.form.name, pass: this.form.pass, remember: this.form.remember })
                        // 存储窗口缓存
                        sessionStorage.setItem('username', this.form.name)
                        ElMessage({
                            message: '登录成功！',
                            type: 'success',
                            duration: 1000,
                            onClose: () => {
                                this.$router.push({ path: '/' }).catch((error) => error)
                            }
                        })
                    } else if (this.form.name == 'admin') {
                        this.$store.dispatch('movie/revise_login', { name: this.form.name, pass: this.form.pass, remember: this.form.remember })
                        // 存储窗口缓存
                        sessionStorage.setItem('username', this.form.name)
                        ElMessage({
                            message: '登录成功！',
                            type: 'success',
                            duration: 1000,
                            onClose: () => {
                                this.$router.push({ path: '/' }).catch((error) => error)
                            }
                        })
                    } else {
                        ElMessage({
                            message: '账号密码错误，请重试！【若账号是：admin ; 密码：随意写】【也可以注册账号登录】',
                            type: 'error',
                            duration: 5000
                        })
                    }
                } else {
                    return false
                }
            })
        }
    },
    mounted() {
        this.form = {
            name: this.logininfo.name,
            pass: this.logininfo.pass,
            remember: this.logininfo.remember
        }
    }
}
</script>

<style scoped lang="scss">
.form-box :deep(.el-form-item__label) {
    color: var(--el-color-primary);
}

.form-box :deep(.el-input__wrapper) {
    background-color: rgba(255, 255, 255, 0.1) !important;
}
.form-box :deep(.el-input__inner) {
    color: var(--el-color-primary);
}
</style>
