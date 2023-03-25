<template>
  <el-card class="box-card" >
    <template #header>
      <div class="card-header">
        <nav class="card-title">登录</nav>
      </div>
    </template>
    <el-form
        :model="form"
        label-width="120px"
        label-position="top"
    >
      <el-form-item label="用户名/邮箱:">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-form-item label="">
        <el-checkbox v-model="checked2">记住密码</el-checkbox>
      </el-form-item>
      <div class="login-foot">
        <el-button type="primary" @click="onSubmit" size="large" class="login">登录</el-button>
        <el-button @click="carousel.next()" size="large" class="register">注册</el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from 'vue'
import axios from "@/api/axios";

// do not use same name with ref
const form = reactive({
  username: '',
  password: '',
})
function onSubmit(){
  axios.post('/login', {username:form.username, password:form.password}).then(res => {
    alert("登陆成功")
  })

}
defineProps(['carousel'])
</script>

<style scoped>
.box-card{
  width: 600px;
  height: 400px;
  margin: 50px auto;
  padding: 18px;
}
.card-title{
  margin: 15px  0;
  text-align: center;
  font-size: 26px;
}
el-input{
  width: 180px;
}
.login-foot{
  text-align: center;
  margin-top: 20px;
}
.login{
  margin-right: 20px;
  width: 100px;
}
.register{
  margin-left: 20px;
  width: 100px;
}
</style>