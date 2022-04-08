<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done">
        <span :class="{'done': todo.done}">
          {{ todo.title }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  let title = ref('')
  let todos = ref([
    {title: 'study vue', done: false}
  ])

  function addTodo() {
    todos.value.push({title: title.value, done: false})

    title.value = ''
  }
</script>
<style scoped>
h1 {
  color: red
}
</style>
