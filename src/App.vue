<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import TasksView from './views/TasksView.vue';
</script>

<template>
  <div>

  
  <header class="header">
    <nav class="navbar">
      <ul class="navbar__list flex justify-center">
        <li class="navbar__item">
          <RouterLink to="/" class="navbar__link link">Главная</RouterLink>
        </li>
        <li class="navbar__item">
          <RouterLink to="/tasks" class="navbar__link link">Задачи</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main class="main">
    <RouterView v-slot="{Component}">
      <Transition name="fade">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </RouterView>
  </main>
</div>
</template>

<style lang="sass" scoped>
.header
  padding-block: 20px

.main
  padding-inline: 20px
.navbar
  &__list
    gap: 30px
.fade-enter-active,
.fade-leave-active
  transition: opacity .4s, transform .4s
  position: relative
  min-height: 90vh


.fade-enter-from,
.fade-leave-to
  opacity: 0
  transform: translateX(-30%)

</style>
