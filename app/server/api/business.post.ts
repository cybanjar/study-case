import { bizhareRepository } from '~/server/repositories/bizhare.repository'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  return await bizhareRepository.getBusinesses(body)
})
