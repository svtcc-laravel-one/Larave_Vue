<template>
  <el-carousel ref="carousel" height="500px" :autoplay="false" arrow="never">
    <el-carousel-item>
      <Login :carousel="$refs.carousel"/>
    </el-carousel-item>
    <el-carousel-item>
      <Register  :carousel="$refs.carousel"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

  export  default{
    components: {Login,Register},

  }
</script>

<style>

</style>
