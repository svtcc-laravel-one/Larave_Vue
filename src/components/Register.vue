<template>
  <el-card class="box-card" >
    <template #header>
      <div class="card-header">
        <nav class="card-title">注册</nav>
      </div>
    </template>
    <el-form
        :model="form"
        label-width="120px"
        label-position="top"
    >
      <el-form-item label="用户名/邮箱:">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="确认密码:">
        <el-input v-model="form.name"/>
      </el-form-item>
      <div class="login-foot">
        <el-button type="primary" @click="onSubmit" size="large" class="login">注册</el-button>
        <el-button size="large" class="register" @click="carousel.next()">返回登录</el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from 'vue'


const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
defineProps(['carousel'])
</script>

<style scoped>
.box-card{
  width: 600px;
  height: 500px;
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