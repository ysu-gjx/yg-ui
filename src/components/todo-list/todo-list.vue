<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done">
        <span :class="{'done': todo.done}">
          {{ todo.title }}
        </span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选
      <input type="checkbox" v-model="allDone">
      <span>{{ active}} / {{ all }}</span>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import useTodos from './use-todos'

  const count = ref(0)
  const color = ref('red')

  const { title, todos, active, all, allDone, addTodo, clear} = useTodos()

  function add() {
    count.value++
    color.value = Math.random() < 0.5 ? 'red' : 'blue'
  }
</script>
<style scoped>
h1 {
  color: v-bind(color)
}
</style>
