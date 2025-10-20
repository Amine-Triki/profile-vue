<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    router
  >
    <el-menu-item index="/">
      <img style="width: 100px" src="/amine96.png" alt="Logo" />
    </el-menu-item>
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/skills">Skills</el-menu-item>
    <el-menu-item index="/projects">Projects</el-menu-item>
    <el-menu-item index="/contact">Contact</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeIndex = ref('/')

// تحديث activeIndex تلقائيًا
watch(
  () => route.path,
  (newPath) => {
    activeIndex.value = newPath
  },
  { immediate: true },
)
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
