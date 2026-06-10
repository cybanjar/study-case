export interface BusinessCategory {
  paramCode: string
  paramName: string
}

export interface Business {
  id: string
  businessName: string
  logoUrl?: string
  businessCategoryName?: string
  businessCategoryId?: string

}

export interface BusinessResponse {
  content: Business[]
  totalPages: number
  totalElements: number
  page: number
}
