<script setup>
import github from '@/assets/svg/github.svg'
import email from '@/assets/svg/email.svg'
import flag from '@/assets/svg/flag.svg'
import eyes from '@/assets/svg/eyes.svg'
</script>

<template>
  <div class="block">
    <div class="block__container">
      <h2 class="block__title">About Me</h2>
      <p class="block__subtitle">
        Hi, I am Nickolay Lozov, a front-end developer from
        <component style="height: 0.8em; width: 1em" :is="flag" /> Ukraine.
      </p>
      <p class="block__subtitle">
        I love coding and my goal is to create something beatifull, that people would love to use.
      </p>
      <p class="block__subtitle" style="display: flex">
        Looking for a work to do
        <component style="height: 1em; width: 1em; margin-left: 0.3em" :is="eyes" />
      </p>
    </div>
    <div class="block__container block__image-wrapper">
      <img src="/img/Photo.jpg" alt="" class="block__image" />
    </div>
    <div class="block__container">
      <h2 class="block__title">Contact Me</h2>
      <p class="block__subtitle">
        Find me on
        <a class="block__link" target="_blank" href="https://github.com/netherguy4"
          ><component style="height: 1em; width: 1em" :is="github" /> GitHub</a
        >
        or drop me a line:
        <a class="block__link" href="mailto:tidalnether@gmail.com"
          ><component style="height: 1em; width: 1em" :is="email" /> tidalnether@gmail.com</a
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2em;
  align-items: center;
  &__container {
    display: flex;
    flex-direction: column;
    padding: 0 0.5em;
  }
  &__image-wrapper {
    position: relative;
    padding: 0 0 100%;
    min-width: 300px;
  }
  &__title {
    font-size: 2em;
    margin: 0 0 0.6em 0;
  }
  &__subtitle {
    margin: 0 0 0.3em 0;
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 2em;
  }
  &__link {
    color: black;
    border-bottom: 1px solid black;
  }
}
</style>
