<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/all'
import { TextPlugin } from 'gsap/TextPlugin'
// import Lenis from 'lenis'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(Draggable)

// *Scroll smoothing and triggers ----------------------------------------------------------------------------------------------

// const lenis = new Lenis({
//   lerp: 0.05,
// })
// lenis.on('scroll', ScrollTrigger.update)
// provide('lenis', lenis)

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000) // Convert time from seconds to milliseconds
// })
// gsap.ticker.lagSmoothing(0)

// * ---------------------------------------------------------------------------------------------------------------------------

// import HintButton from './components/HintButton.vue'
import TextAnimation from './components/TextAnimation.vue'
import ExplorerWindow from './components/ExplorerWindow.vue'

onMounted(() => {
  Draggable.create('.explorer', {
    bounds: '#app',
    cursor: 'move',
    dragClickables: false,
    trigger: '.explorer__head',
    // onDragStart: () => lenis.stop(),
    // onDragEnd: () => lenis.start(),
  })
  let tl = gsap.timeline({
    // paused: true,
    // scrollTrigger: {
    //   trigger: '.main__text-animation',
    //   start: 'top top',
    //   end: '+=3000px top',
    //   // pin: '.main',
    //   pin: true,
    //   scrub: 0.5,
    //   // markers: true,
    // },
  })
  tl.timeScale(3)
  // gsap.to('#hint>svg', {
  //   keyframes: {
  //     yPercent: [-100, 0],
  //     autoAlpha: [0, 1, 0],
  //     ease: 'none',
  //   },
  //   stagger: 0.25,
  //   ease: 'power2.inOut',
  //   duration: 1.5,
  //   repeat: -1,
  // })
  tl.from('.main__text-animation', {
    autoAlpha: 0,
    yPercent: -100,
    ease: 'power2.in',
    duration: 0.75,
  })
  // !Login animation
  let section = document.getElementById('loginAnimation')
  let welcome = section.querySelector('.animation__welcome-text')
  let entries = section.querySelectorAll('.animation__text')
  entries.forEach((entry, index) => {
    let cursor = entry.querySelector('.cursor')
    let text = entry.querySelector('.animated-text')
    gsap.to(
      cursor,
      {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.Out',
      },
      0,
    )
    tl.to(entry, {
      opacity: 1,
    })
    tl.from(
      text,
      {
        text: '',
        duration: 0.75,
      },
      '>0.25',
    )
    tl.set(cursor, {
      display: 'none',
    })
  })
  tl.to(welcome, { opacity: 1, duration: 0.1 }, '>0.5')
  // !Search animation
  section = document.getElementById('searchAnimation')
  entries = section.querySelectorAll('.animation__text')
  entries.forEach((entry, index) => {
    let cursor = entry.querySelector('.cursor')
    let text = entry.querySelector('.animated-text')
    gsap.to(
      cursor,
      {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.Out',
      },
      0,
    )
    tl.to(entry, {
      opacity: 1,
    })
    tl.from(
      text,
      {
        text: '',
        duration: 0.75,
      },
      '>0.25',
    )
    tl.set(cursor, {
      display: 'none',
    })
  })
  tl.to('.main__text-animation', { autoAlpha: 0, yPercent: -100, ease: 'power2', duration: 0.75 })
  // !Explorer animation
  tl.to(
    '.explorer',
    {
      ease: 'power2.in',
      duration: 0.75,
      autoAlpha: 1,
    },
    '>-0.35',
  )
  // let exp = gsap.timeline({
  //   defaults: { ease: 'power2.in' },
  //   // scrollTrigger: {
  //   //   trigger: '.main__text-animation',
  //   //   start: 'top top',
  //   //   toggleActions: 'play play play reverse',
  //   //   // markers: true,
  //   // },
  //   paused: true,
  // })
  // exp.to('#app', { background: '#f9f9f9', duration: 0.25 })
  // exp.set('#hint', { display: 'none' }, '<')
})
</script>

<template>
  <!-- <HintButton /> -->
  <main class="main">
    <TextAnimation class="main__text-animation" />
    <div class="main__container">
      <ExplorerWindow class="main__content" />
    </div>
  </main>
  <div class="pre" style="display: none">
    <img src="/img/Diamaint.jpg" alt="" /><img src="/img/Molecule.jpg" alt="" /><img
      src="/img/Photo.jpg"
      alt=""
    /><img src="/img/Portfolio.jpg" alt="" /><img src="/img/VueSneakers.jpg" alt="" /><img
      src="/img/YouMeal.jpg"
      alt=""
    />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Silkscreen;
  display: flex;
  flex-direction: column;
  // min-height: 310vh;
  // min-height: calc(3000px + 100vh + toem(154));
  // background: #c9c9c9;
  overflow-x: hidden;
  font-size: 0.7em;
  @media (min-width: $M) {
    font-size: 1em;
  }
}
// body {
//   @media (hover: hover) {
//     overflow: hidden;
//   }
// }
.main {
  color: green;
  flex: 1 1 auto;
  &__text-animation {
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    position: fixed;
    // will-change: auto;
  }
  &__container {
    height: 100%;
    max-width: 800px;
    // width: 100%;
    // height: 100%;
    margin: 0 auto;
  }
  &__content {
    border: rgb(47, 47, 47);
    border-radius: 0.5em;
    margin: 3em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  }
}
</style>
