<template>
    <div class="text-left">
        <h1>创建一个账号</h1>
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
                <el-form-item label="确认密码" size="large" prop="ck_pass">
                    <el-input v-model="form.ck_pass" size="large" maxlength="20" type="password" show-password clearable placeholder="请再次输入密码">
                        <template #prefix>
                            <el-icon class="el-input__icon"><CircleCheck /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <slot name="cut"></slot>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="large" style="width: 100%" @click="onSubmit('form')">立即注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
    name: 'Register',
    data() {
        return {
            form: {
                name: '',
                pass: '',
                ck_pass: ''
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
                ],
                ck_pass: [
                    {
                        required: true,
                        validator: this.validatePass2,
                        trigger: 'change'
                    }
                ]
            }
        }
    },
    methods: {
        validatePass2(rule, value, callback) {
            if (value === '') {
                callback(new Error('确认密码不能为空'))
            } else if (value !== this.form.pass) {
                callback(new Error('2次输入的密码不同！请重新输入'))
            } else {
                callback()
            }
        },
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    ElMessage({
                        message: '注册成功！',
                        type: 'success',
                        duration: 1000,
                        onClose: () => {
                            this.$store.dispatch('movie/revise_login', { name: this.form.name, pass: this.form.pass, remember: false })
                            this.$emit('success', true)
                        }
                    })
                } else {
                    return false
                }
            })
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

.three-box {
    .divider-box {
        position: relative;
        text-align: center;
        overflow: hidden;
    }
    .divider-box::before,
    .divider-box::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 1px;
        position: absolute;
        background: #ffffff9d;
        top: 50%;
    }
    .divider-box::before {
        margin-left: -10px;
        transform: translateX(-100%);
    }
    .divider-box::after {
        margin-left: 10px;
    }
}
</style>
