import { sleep } from "../sleep"

const storage = useStorage('db')

export default defineEventHandler(async (event) => {
  const userId = getHeader(event, 'user-id')
  await sleep(2000)
  const saved = await storage.getItem(`${userId}:todos`)
  return saved ?? []
})