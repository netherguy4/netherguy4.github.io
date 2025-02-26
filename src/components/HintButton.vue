<script setup>
import { inject } from 'vue'
import arrow from '@/assets/svg/Arrow.svg'

const lenis = inject('lenis')
</script>

<template>
  <button @click="lenis.scrollTo('.explorer')" id="hint">
    <Component :is="arrow" />
    <Component :is="arrow" />
    <Component :is="arrow" />
  </button>
</template>

<style lang="scss" scoped>
#hint {
  position: fixed;
  z-index: 3;
  bottom: 3em;
  left: 50%;
  translate: -50% 0;
  height: 6em;
  width: 3em;
  & > svg {
    fill: green;
    position: absolute;
    height: 3em;
    width: 3em;
    bottom: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
  }
}
</style>
