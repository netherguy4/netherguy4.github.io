<script setup></script>

<template>
  <div class="animation">
    <section id="loginAnimation">
      <p class="animation__text">
        > Username: <span class="animated-text">Netherguy4</span><span class="cursor"></span>
      </p>
      <p class="animation__text">
        > Password: <span class="animated-text">********</span><span class="cursor"></span>
      </p>
      <p class="animation__welcome-text">> Welcome back, Netherguy4!</p>
    </section>
    <section id="searchAnimation">
      <p class="animation__text">
        Netherguy4 > <span class="animated-text">cd Vue_Developer</span><span class="cursor"></span>
      </p>
      <p class="animation__text">
        Netherguy4/Vue_Developer > <span class="animated-text">dir</span
        ><span class="cursor"></span>
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.animation {
  &__text,
  &__welcome-text {
    opacity: 0;
    font-size: 1em;
    user-select: none;
  }
}
#loginAnimation {
  font-size: 1.1em;
}
.cursor {
  display: inline-block;
  opacity: 0;
  height: 0.65em;
  width: 0.15em;
  margin: 0 0 0 0.3em;
  background: green;
}
</style>
