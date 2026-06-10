import type { AxiosInstance } from 'axios'

export const useApi = (): AxiosInstance => {
  return useNuxtApp().$api
}
