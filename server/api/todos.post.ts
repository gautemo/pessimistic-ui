import { sleep } from "../sleep"

const storage = useStorage('db')

export default defineEventHandler(async (event) => {
  const userId = getHeader(event, 'user-id')
  const body = await readBody<{todo: string}>(event)
  await sleep(2000)
  const saved = await storage.getItem(`${userId}:todos`) as string[] | null
  const todos = saved ? [...saved, body.todo] : [body.todo]
  await storage.setItem(`${userId}:todos`, todos)
  return todos
})