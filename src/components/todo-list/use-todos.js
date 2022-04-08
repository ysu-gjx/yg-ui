import {
  ref,
  computed
} from 'vue'

export default function () {
  let title = ref('')
  const todos = ref([
    {title: 'study vue', done: false}
  ])

  const active = computed(() => {
    return todos.value.filter((todo) => !todo.done).length
  })
  const all = computed(() => todos.value.length)
  const allDone = computed({
    get: function () {
      return active.value === 0
    },
    set: function (value) {
      todos.value.forEach((todo) => {
        todo.done = value
      })
    }
  })

  function addTodo() {
    todos.value.push({title: title.value, done: false})

    title.value = ''
  }

  function clear () {
    todos.value = todos.value.filter(v => !v.done)
  }

  return {
    title,
    todos,
    active,
    all,
    allDone,
    addTodo,
    clear
  }
}