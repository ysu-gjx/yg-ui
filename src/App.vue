<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useMouse } from './utils/mouse'

const { x, y } = useMouse()
</script>

<template>
  <div>
    <router-link to="/">go home</router-link>
    <router-link to="/about">go about</router-link>
  </div>
  <div>
    {{x}} --- {{ y }}
  </div>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
