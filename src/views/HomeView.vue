<template>
  <div class="home">
    <h1 class="home__title text-center">Таск-менеджер для задач</h1>
    <span class="home__subtitle text-center">Тестовое задание для Quick Deal</span>
    <p class="home__text">Кандидат: Халимов Ильсур</p>
    <p class="home__text">Стек технологий:</p>
    <ul class="home__list list">
      <li class="list__item">
       <a href="https://vuejs.org/" class="list__link link" target="_blank">Vue</a>
      </li>
      <li class="list__item">
        <a href="https://router.vuejs.org/" class="list__link link" target="_blank">vue-router</a>
      </li>
      <li class="list__item">
        <a href="https://pinia.vuejs.org/" class="list__link link" target="_blank">Pinia</a>
      </li>
      <li class="list__item">
        <a href="https://sass-lang.com/" class="list__link link" target="_blank">Sass</a>
      </li>
      <li class="list__item">
        <a href="https://vitejs.dev/" class="list__link link" target="_blank">Vite</a>
      </li>
    </ul>
  </div>
  
</template>

<style lang="sass" scoped>
.home
  &__title
    margin-block: 20px
  &__subtitle
    margin-block: 10px
    font-size: 20px
  &__text
    margin-block-end: 15px
.list
  &__item
    margin-block-end: 5px
  &__link
    width: fit-content
</style>