<script setup>
import { createSwapy } from 'swapy'
import { onMounted, onUnmounted, ref } from 'vue'

import PortfolioProject from '../components/PortfolioProject.vue'
import projects from '@/assets/data/projects.json'

const swapy = ref(null)
const container = ref()
onMounted(() => {
  // If container element is loaded
  if (container.value) {
    swapy.value = createSwapy(container.value, { autoScrollOnDrag: true })
  }
})

onUnmounted(() => {
  // Destroy the swapy instance on component destroy
  swapy.value?.destroy()
})
</script>

<template>
  <div ref="container">
    <div class="projects">
      <div
        class="slot"
        v-for="project in projects"
        :key="project.projectId"
        :data-swapy-slot="project.projectId"
      >
        <div :key="project.name" :data-swapy-item="project.name">
          <PortfolioProject
            class="projects__project"
            :name="project.name"
            :language="project.language"
            :description="project.description"
            :web-url="project.webUrl"
            :git-url="project.gitUrl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  & [data-swapy-slot] {
    border-top: 1px solid rgba(205, 205, 205, 0.5);
    &:first-child {
      border-top: none;
    }
  }
  &__project {
    will-change: transform;
    padding: 0.5em;
    // border-radius: 1em;
    // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }
  & [data-swapy-item] {
    transition: opacity $trTime;
    cursor: grab;
  }
  & [data-swapy-dragging] {
    cursor: grabbing;
    transition: opacity $hoverTime;
    opacity: 0.7;
  }
}
</style>
