import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance
} from 'axios'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const api: AxiosInstance = axios.create({
    baseURL: config.public.apiBizhare,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  api.interceptors.request.use(
    (config) => {
      return config
    },
    error => Promise.reject(error)
  )

  api.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      api
    }
  }
})
