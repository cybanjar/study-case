import type {
  BusinessResponse, GetBusinessesPayload
} from '~/types/business'
import type { ApiResponse } from '~/types/api'

export const businessService = {
  async getBusinesses(
    payload: GetBusinessesPayload
  ): Promise<BusinessResponse> {
    const { data } = await useApi().post<ApiResponse<BusinessResponse>>('/business/parent/all', payload)

    return data?.data
  }
}
