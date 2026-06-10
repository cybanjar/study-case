import { bizhareRepository } from '~/server/repositories/bizhare.repository'

export default defineEventHandler(
  async () => {
    return await bizhareRepository.getCategories()
  }
)
