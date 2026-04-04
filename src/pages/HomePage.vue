<script setup lang="ts">
import 'animate.css'
import { ref, onMounted } from 'vue'

type CvResponse = {
  cv: {
    en: {
      download: string
      preview: string
    }
  }
}

const cvData = ref<CvResponse | null>(null)

onMounted(async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/Amine-Triki/projects-data/main/cv.json',
  )
  cvData.value = (await res.json()) as CvResponse
})
</script>

<template>
  <div class="main">
    <div>
      <p>Hello, I am</p>
      <h1>Amine Triki</h1>
      <p>I am Junior front-end developer</p>
      <p>
        Based in Tunisia; I create elegant and responsive sites, easy to use and built with best
        practices. I use HTML, CSS, JavaScript (React); I am a WordPress designer.
      </p>

      <div class="action-buttons">
        <a :href="cvData?.cv.en.download" target="_blank" rel="noopener noreferrer">
          <el-button type="warning" class="action-btn">⬇️ Download Resume</el-button>
        </a>
        <a :href="cvData?.cv.en.preview" target="_blank" rel="noopener noreferrer">
          <el-button type="primary" class="action-btn" plain>👁️ Preview</el-button>
        </a>
      </div>
      <div class="social-icons">
        <a
          href="https://github.com/Amine-Triki"
          target="_blank"
          rel="noopener noreferrer"
          class="animate__animated animate__bounceIn"
        >
          <i-ant-design-github-filled class="icon" />
        </a>

        <a
          href="https://facebook.com/amine.triki.1998"
          target="_blank"
          rel="noopener noreferrer"
          class="animate__animated animate__bounceIn animate__delay-1s"
        >
          <i-ri-facebook-box-fill class="icon" />
        </a>

        <a
          href="https://www.youtube.com/@aminetrikitv"
          target="_blank"
          rel="noopener noreferrer"
          class="animate__animated animate__bounceIn animate__delay-2s"
        >
          <i-ri-youtube-fill class="icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/amine-triki-tn/"
          target="_blank"
          rel="noopener noreferrer"
          class="animate__animated animate__bounceIn animate__delay-3s"
        >
          <i-ri-linkedin-box-fill class="icon" />
        </a>
      </div>
    </div>
    <div>
      <img src="/amine triki.webp" alt="Amine Triki" />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  max-width: 900px;
  flex-wrap: wrap;
  margin: auto;
  div {
    flex: 1;
  }
  img {
    width: 350px;
  }
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.action-btn {
  min-width: 170px;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.icon {
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-icons a:nth-child(1) .icon {
  color: #333; /* GitHub */
}

.social-icons a:nth-child(2) .icon {
  color: #1877f2; /* Facebook */
}

.social-icons a:nth-child(3) .icon {
  color: #ff0000; /* YouTube */
}

.social-icons a:nth-child(4) .icon {
  color: #0a66c2; /* LinkedIn */
}

/* عند المرور */
.icon:hover {
  transform: scale(1.3) rotate(8deg);
}
</style>
