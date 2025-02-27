<script setup>
defineProps({
  name: String,
  language: String,
  description: String,
  webUrl: String,
  gitUrl: String,
})
import web from '@/assets/svg/web.svg'
import github from '@/assets/svg/github.svg'
</script>

<template>
  <li class="card">
    <figure class="card__container">
      <img :src="`./img/${name}.jpg`" :alt="name" class="card__image" />
      <figcaption class="card__caption">
        <h3 class="card__title">
          {{ name }}<span class="card__language"> | {{ language }}</span>
        </h3>
        <p class="card__description">{{ description }}</p>
        <div class="card__links">
          <a
            target="_blank"
            :href="webUrl ? webUrl : `https://netherguy4.github.io/${name}/`"
            class="card__link"
          >
            <component :is="web" />
            Website</a
          >
          <a
            target="_blank"
            :href="gitUrl ? gitUrl : `https://github.com/netherguy4/${name}/`"
            class="card__link"
          >
            <component :is="github" />
            Github</a
          >
        </div>
      </figcaption>
    </figure>
  </li>
</template>

<style lang="scss" scoped>
.card {
  &__container {
    display: flex;
    min-height: 12em;
    flex-wrap: wrap;
  }
  &__image {
    width: 30%;
    min-width: 200px;
    align-self: center;
    height: 100%;
    border-radius: 1em;
    border: 1px solid #fff;
    transition: $trTime 0.1s ease-in-out;
  }
  &:hover .card__image {
    @media (min-width: $M) {
      border: 1px solid #cdcdcd;
      transition: $hoverTime ease-in-out;
      border-radius: 0 1em 0 1em;
      width: 50%;
    }
  }
  &__caption {
    flex: 1 0 200px;
    display: flex;
    padding: 1em;
    flex-direction: column;
    gap: 0.1em;
  }
  &__title {
    font-size: 1.5em;
    margin: 0 0 0.3em 0;
  }
  &__language {
    font-size: 0.8em;
    color: #656565;
    // margin: 0 0 0 1em;
  }
  &__description {
    flex: 1 1 auto;
    margin: 0 0 0.3em 0;
  }
  &__links {
    display: flex;
    gap: 2em;
    padding: 0 1em;
    justify-content: flex-end;
  }
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3em;
    border-radius: 0.5em;
    background: #cdcdcd;
    border: #cdcdcd solid 1px;
    padding: 0.5em;
    color: #212121;
    transition: $trTime;
    @include hover {
      background: #fff;
      transition: $hoverTime;
    }
    & svg {
      height: 1em;
      width: 1em;
    }
  }
}
</style>
