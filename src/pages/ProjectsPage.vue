<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { ElCard, ElTabs, ElTabPane, ElIcon } from 'element-plus'
import { Loading } from '@element-plus/icons-vue'

interface Project {
  category: string
  title: string
  description: string
  link: string
  github?: string
  imageSrc: string
}

const activeCategory = ref('all')
const projects = ref<Project[]>([])
const loading = ref(true)

const categories = [
  { key: 'all', label: 'All works' },
  { key: 'JavaScript', label: 'JavaScript' },
  { key: 'Wordpress', label: 'Wordpress' },
  { key: 'React', label: 'React' },
  { key: 'NextJs', label: 'NextJs' },
]

onMounted(async () => {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/Amine-Triki/projects-data/main/projects.json',
    )
    const data = await response.json()
    projects.value = data
  } catch (error) {
    console.error('Error loading projects:', error)
  } finally {
    loading.value = false
  }
})

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value
  }
  return projects.value.filter((project) => project.category === activeCategory.value)
})
</script>

<template>
  <main class="main-container">
    <div class="container">
      <div class="header">
        <h2 class="title">My Projects</h2>
        <p class="subtitle">What I build</p>
      </div>

      <div v-if="loading" class="loading-container">
        <el-icon class="is-loading" :size="40">
          <Loading />
        </el-icon>
      </div>

      <div v-else>
        <el-tabs v-model="activeCategory" class="tabs-container" type="border-card">
          <el-tab-pane
            v-for="category in categories"
            :key="category.key"
            :label="category.label"
            :name="category.key"
          />
        </el-tabs>

        <div class="projects-grid">
          <el-card
            v-for="(project, index) in filteredProjects"
            :key="index"
            shadow="hover"
            class="project-card"
          >
            <template #default>
              <div class="card-content">
                <img :src="project.imageSrc" :alt="project.title" class="project-image" />
                <div class="card-body">
                  <h5 class="project-title">{{ project.title }}</h5>
                  <p class="project-description">{{ project.description }}</p>
                  <div class="buttons-container">
                    <a
                      v-if="project.github"
                      :href="project.github"
                      target="_blank"
                      rel="noreferrer"
                      class="btn btn-github"
                    >
                      Github
                    </a>
                    <a
                      v-if="project.link"
                      :href="project.link"
                      target="_blank"
                      rel="noreferrer"
                      class="btn btn-preview"
                    >
                      Preview
                    </a>
                  </div>
                </div>
              </div>
            </template>
          </el-card>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-container {
  padding: 2.5rem 0;
}

.container {
  margin: 0 auto;
  padding: 0 1rem;
}

.header {
  text-align: center;
  margin-bottom: 2.5rem;
  margin: auto;
}

.title {
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.subtitle {
  color: #6b7280;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.is-loading {
  animation: rotating 2s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.tabs-container {
  margin-bottom: 2.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1280px) {
  .projects-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.project-card {
  height: 100%;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.project-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.buttons-container {
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.8;
}

.btn-github {
  background-color: #ffc0cb;
  color: black;
}

.btn-preview {
  background-color: #bfecff;
  color: black;
}

:deep(.el-tabs__item) {
  font-weight: 500;
}

:deep(.el-tabs__item.is-active) {
  font-weight: 700;
}
</style>
