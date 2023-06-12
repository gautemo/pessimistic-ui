<script setup lang="ts">
const userId = localStorage.getItem('user-id') ?? (Math.random() + 1).toString(36).substring(2)
localStorage.setItem('user-id', userId)

const { data, pending, error } = useFetch('/api/todos', {
  headers: {
    'user-id': userId
  }
})

const errors = ref<{todo: string, type: 'del' | 'add' }[]>([])

async function addTodo(event: Event) {
  const inputEl: HTMLInputElement = (event.target as any).elements.add
  const todo = inputEl.value
  if(document.activeElement === inputEl) {
    inputEl.blur()
  }
  errors.value.push({ todo, type: 'add'})
  const todos = await $fetch('/api/todos', {
    method: 'POST',
    headers: {
      'user-id': userId
    },
    body: {
      todo,
    }
  })
  data.value = todos
  errors.value = errors.value.filter(err => !(err.todo === todo && err.type === 'add'))
}
async function deleteTodo(todo: string) {
  errors.value.push({ todo, type: 'del'})
  const todos = await $fetch('/api/todos', {
    method: 'DELETE',
    headers: {
      'user-id': userId
    },
    body: {
      todo,
    }
  })
  data.value = todos
  errors.value = errors.value.filter(err => !(err.todo === todo && err.type === 'del'))
}

function removeError(remove: {todo: string, type: 'del' | 'add' }) {
  errors.value = errors.value.filter(err => !(err.todo === remove.todo && err.type === remove.type))
}
</script>

<template>
  <main>
    <h1>My pessimistic TODO list</h1>
    <p>Pessimistic UI pattern - assume the worst until proven successful</p>
    <form @submit.prevent="addTodo">
      <input type="text" name="add" placeholder="Buy ice cream">
      <button class="add">Add</button>
    </form>
    <div class="error" v-if="pending || error">
      Could not load todo list
    </div>
    <ul v-else>
      <li v-for="todo of data">
        <button @click="deleteTodo(todo)" class="del"><Remove /></button>
        <span>{{ todo }}</span>
      </li>
    </ul>
    <p>
      Optimistic UI and pessimistic UI is a pattern to avoid showing busy spinners in your UI and make your application feel like it's responding instantly to user interactions that change data on the server
    </p>
  </main>
  <aside>
    <div v-for="error of errors" class="error">
      <span>{{ `${error.type === 'add' ? 'Could not add' : 'Could not delete'} "${error.todo}"` }}</span>
      <button @click="removeError(error)" class="del">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15"><path fill="#000" fill-rule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z" clip-rule="evenodd"/></svg>
      </button>
    </div>
  </aside>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 85vw;
  margin: auto;
}

h1 {
  color: #1aadff;
}

p {
  font-style: italic;
  border-left: 2px solid #1aadff;
  padding: 1rem 0.5rem;
  width: 100%;
}

.error {
  background-color: #ff5f50;
  border: 1px solid #ff0000;
  color: black;
  border-radius: 5px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
}

aside {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
}

.del {
  background: none;
  border: none;
}

form {
  height: 2rem;
}

input {
  height: 100%;
  padding: 0.5rem;
  min-width: 50vw;
  box-sizing: border-box;
  border-radius: 5px 0 0 5px;
  border: 1px solid #7a7a7ab9;
}

.add {
  height: 100%;
  background-color: #1aadff;
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 0.5rem;
}
</style>