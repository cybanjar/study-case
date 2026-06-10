import type {
  BusinessCategory
} from '~/types/business'
import type { ApiResponse } from '~/types/api'

export const categoryService = {
  async getCategories(): Promise<
    BusinessCategory[]
  > {
    const { data } = await useApi().get<ApiResponse<BusinessCategory[]>>('/media/param/business/category')

    return data?.data || []
  }
}
