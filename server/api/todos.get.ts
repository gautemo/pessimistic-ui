import { sleep } from "../sleep"

export default defineEventHandler(async (event) => {
  const userId = getHeader(event, 'user-id')
  await sleep(2000)
  const saved = await useStorage().getItem(`${userId}:todos`)
  return saved ?? []
})