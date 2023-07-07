<script setup>

import { useTasksStore } from '../stores/tasks';
import { ref } from 'vue';

const Tasks = useTasksStore();

const text = ref('');
const input = ref(null);

const key = ref(Tasks.currentKey || 0);
const state = ref('add');

function addTask() {
  Tasks.addItem(key.value, text.value);
  key.value++;
  text.value = '';
  return true;
}


function beforeEdit(newText, ukey) {
  input.value.focus();
  state.value = 'edit';
  text.value = newText;
  key.value = ukey;
  // Tasks.editTask(newText, ukey);
}

function edit(newText, qkey) {
  Tasks.editTask(newText, qkey);
  text.value = '';
  do {
    key.value++;
  } while(key.value === Tasks.tasks[key.value].key);
  
}

</script>

<template>
  <div class="tasks">
    <h1 class="tasks__title">Список задач ({{ Tasks.getCount }})</h1>
    <div class="tasks__inner">
      
      <ul v-if="Tasks.getCount > 0" class="tasks__list">
        <li v-for="task,i in Tasks.tasks" :key="i" class="task flex items-center">
          <span class="task__text">{{ task.text }}</span>
          <button class="task__btn" @click="Tasks.removeTask(task.key)">Удалить</button>
          <button class="task__btn task__btn_edit" @click="beforeEdit(task.text, task.key)">Изменить</button>
        </li>
      </ul>
      <form class="tasks__form form flex-col" @submit.prevent>
        <span v-if="Tasks.errorMsg.length" class="error">{{ Tasks.errorMsg }}</span>
        <input type="text" class="form__input" v-model="text" ref="input">

        <button class="form__btn" v-if="state === 'add'" @click="addTask">Добавить</button>
        <div v-else-if="state === 'edit'">
          <button class="form__btn" @click="edit(text, key)">Изменить</button>
          <button class="form__btn" @click="state ='add'"> Отмена</button>
        </div>
        
      </form>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.tasks
  &__title
    margin-block: 20px
  &__inner
    @media screen and (min-width: 768px)
      display: flex
      justify-content: space-between
      align-items: flex-start
    
.form
  position: fixed
  bottom: 40px
  left: 50%
  transform: translateX(-50%)
  gap: 15px
  padding: 25px
  border-radius: 10px
  background-color: #42413e
  @media screen and (min-width: 768px)
      position: static
      transform: translateX(0)
  &__input, &__btn
    height: 35px
    border-radius: 5px
  &__btn
    font-size: 18px
    letter-spacing: 1px
    background-color: #5cd6a3
    color: #FFF
    width: 100%
    margin-block: 10px
  &__input
    border: none
    color: #FFF
    background-color: #73706a
    padding-inline: 5px
    &:focus
      outline: none
.task
  gap: 10px
  margin-block: 15px
  list-style: disc
  &__btn
    color: #fff
    background-color: #b83243
    padding: 5px
    border-radius: 5px
    &_edit
      background-color: #b0bd22
.error
  color: #e61c35
  font-weight: bold
</style>
