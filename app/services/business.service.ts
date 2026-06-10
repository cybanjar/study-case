import type {
  BusinessResponse
} from '~/types/business'
import type { ApiResponse } from '~/types/api'

interface GetBusinessesPayload {
  page: number
  size: number
  businessName?: string
  listCategory?: string[]
}

export const businessService = {
  async getBusinesses(
    payload: GetBusinessesPayload
  ): Promise<BusinessResponse> {
    const { data } = await useApi().post<ApiResponse<BusinessResponse>>('/business/parent/all', payload)

    return data?.data
  }
}
