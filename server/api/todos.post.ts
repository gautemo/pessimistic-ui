import { sleep } from "../sleep"

export default defineEventHandler(async (event) => {
  const userId = getHeader(event, 'user-id')
  const body = await readBody<{todo: string}>(event)
  await sleep(2000)
  const saved = await useStorage(userId).getItem('todos') as string[] | null
  const todos = saved ? [...saved, body.todo] : [body.todo]
  await useStorage(userId).setItem('todos', todos)
  return todos
})