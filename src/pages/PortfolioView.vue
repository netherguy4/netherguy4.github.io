<script setup>
import PortfolioProject from '../components/PortfolioProject.vue'
import projects from '@/assets/data/projects.json'
</script>

<template>
  <ul class="projects">
    <PortfolioProject
      class="projects__project"
      v-for="project in projects"
      :key="project.title"
      :name="project.name"
      :language="project.language"
      :description="project.description"
      :web-url="project.webUrl"
      :git-url="project.gitUrl"
    />
  </ul>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  &__project {
    padding: 0.5em;
    // border-radius: 1em;
    border-top: 1px solid #cdcdcd;
    // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    &:first-child {
      border-top: none;
    }
  }
}
</style>
