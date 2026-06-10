import { API_ENDPOINTS } from '~/utils/api'
import type { GetBusinessesPayload } from '~/types/business'

export class BizhareRepository {
  private config = useRuntimeConfig()

  private get baseUrl() {
    return this.config.apiBizhare
  }

  async getCategories() {
    return $fetch(
      `${this.baseUrl}${API_ENDPOINTS.BUSINESS_CATEGORY}`
    )
  }

  async getBusinesses(
    payload: GetBusinessesPayload
  ) {
    return $fetch(
      `${this.baseUrl}${API_ENDPOINTS.BUSINESS_LIST}`,
      {
        method: 'POST',
        body: payload
      }
    )
  }
}

export const bizhareRepository = new BizhareRepository()
