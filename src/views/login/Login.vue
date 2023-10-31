<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login-container">
      <div class="login-card">
        <div class="login-title">管理员登录</div>
        <!-- 登录表单 -->
        <el-form
          status-icon
          :model="loginForm"
          :rules="rules"
          ref="ruleForm"
          class="login-form"
        >
          <!-- 用户名输入框 -->
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="用户名"
              @keyup.enter.native="login"
            />
          </el-form-item>
          <!-- 密码输入框 -->
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              show-password
              placeholder="密码"
              @keyup.enter.native="login"
            />
          </el-form-item>
        </el-form>
        <!-- 登录按钮 -->
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </template>

<script setup>
import { reactive, ref } from 'vue'
const ruleForm = ref()
const loginForm = reactive({
    username: '',
    password: ''
})
const rules = {
    username: [{ required: true, message: '用户名不能为空', trigger: 'blur'}],
    password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
}
const login = () => {
    ruleForm.value.validate().then(() => {
        localStorage.setItem('accessToken', '1234')
    })
}
</script>

<style scoped>
  .login-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: url(@/assets/image/login_bg1920.png);
    background-size: cover;
  }
  .login-card {
    position: absolute;
    top: 30%;
    bottom: 0;
    right: 10%;
    width: 350px;
  }
  .login-title {
    color: #303133;
    font-weight: bold;
    font-size: 1rem;
  }
  .login-form {
    margin-top: 1.2rem;
  }
  .login-card button {
    margin-top: 1rem;
    width: 100%;
  }
</style>