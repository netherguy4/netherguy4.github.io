<script setup>
import closeButton from '@/assets/svg/close-button.svg'
import fullscreenButton from '@/assets/svg/fullscreen-button.svg'
import minimizeButton from '@/assets/svg/minimize-button.svg'
import about from '@/assets/svg/about.svg'
import portfolio from '@/assets/svg/portfolio.svg'
import 'animate.css'
</script>

<template>
  <div class="explorer">
    <div class="explorer__head">
      <div class="explorer__folders">
        <router-link to="Portfolio" active-class="_active" class="explorer__folder">
          <component :is="portfolio" />
          Portfolio</router-link
        >
        <router-link to="About" active-class="_active" class="explorer__folder">
          <component :is="about" />
          About</router-link
        >
      </div>
      <div class="explorer__buttons">
        <button class="explorer__button">
          <Component :is="minimizeButton" />
        </button>
        <button class="explorer__button">
          <Component :is="fullscreenButton" />
        </button>
        <button class="explorer__button">
          <Component :is="closeButton" />
        </button>
      </div>
    </div>
    <div class="explorer__container">
      <router-view v-slot="{ Component, route }">
        <transition
          :enter-active-class="route.meta.enterClass"
          :leave-active-class="route.meta.leaveClass"
        >
          <component class="explorer__content" :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.explorer {
  visibility: hidden;
  font-family: Roboto, serif;
  background: #fff;
  overflow: hidden;
  color: rgb(33, 33, 33);
  &__head {
    display: flex;
    background: rgb(205, 205, 205);
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 0.5em 0.5em 0 0;
    font-size: 1.25em;
    container-type: normal;
  }
  &__folders {
    display: flex;
    gap: 0.5em;
    margin: 0.5em 0.5em 0;
  }
  &__folder {
    user-select: none;
    font-size: 1em;
    padding: 0.4em 0.7em 0.2em;
    border-radius: 0.5em 0.5em 0 0;
    color: rgb(101, 101, 101);
    transition: $trTime;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3em;
    &._active {
      background: #fff;
      color: rgb(33, 33, 33);
      & > svg {
        fill: rgb(33, 33, 33);
      }
    }
    & > svg {
      transition: $trTime;
      fill: rgb(101, 101, 101);
      height: 1em;
      width: 1em;
    }
  }
  &__buttons {
    height: 1.35em;
    display: flex;
    @media (max-width: toem(380)) {
      display: none;
    }
  }
  &__button {
    transition: $activeTime;
    width: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    @include hover {
      transition: $hoverTime;
      background: rgb(101, 101, 101);
    }
    &:last-child {
      @include hover {
        background: red;
      }
    }
    & > svg {
      fill: rgb(33, 33, 33);
      height: 70%;
      width: auto;
      top: 0;
      left: 0;
    }
    &:nth-child(2) > svg {
      height: 50%;
    }
  }
  &__container {
    height: calc(100vh - 6em - toem(42));
    position: relative;
  }
  &__content {
    height: calc(100vh - 6em - toem(42));
    // min-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1em 0.5em;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
<style lang="scss">
:root {
  --animate-duration: 600ms;
  // --animate-delay: 0.9s;
}
</style>
