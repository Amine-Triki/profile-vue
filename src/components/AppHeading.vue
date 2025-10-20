<template>
  <div class="heading">
    <h2 class="heading-title">{{ title }}</h2>

    <!-- الخط المتحرك -->
    <div class="line-wobble"></div>

    <p class="heading-subtitle">{{ subTitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subTitle: string
}>()
</script>

<style scoped>
.heading {
  text-align: center;
  margin: 60px 0;
}

.heading-title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 12px;
}

/* محاكاة LineWobble */
.line-wobble {
  width: 80px;
  height: 5px;
  margin: 0 auto 12px auto;
  background: linear-gradient(90deg, #000 0%, #666 100%);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}

.line-wobble::before {
  content: '';
  position: absolute;
  top: 0;
  left: -40%;
  width: 40%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
  animation: wobble 1.75s linear infinite;
}

@keyframes wobble {
  0% {
    left: -40%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: -40%;
  }
}

.heading-subtitle {
  font-size: 16px;
  color: #666;
  margin-top: 8px;
}
</style>
