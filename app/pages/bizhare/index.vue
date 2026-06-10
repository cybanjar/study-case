<script setup lang="ts">
import { refDebounced } from '@vueuse/core'
import { businessService } from '~/services/business.service'
import { categoryService } from '~/services/category.service'

definePageMeta({
  layout: 'blank'
})

const page = ref(1)
const size = ref(12)
const search = ref('')
const selectedCategories = ref<string[]>([])
const isFilterOpen = ref(false)
const debouncedSearch = refDebounced(search, 500)

const {
  data,
  isLoading
} = useQuery({
  key: () => ['businesses', page.value, size.value, debouncedSearch.value, selectedCategories.value],
  query: () => businessService.getBusinesses({
    page: page.value,
    size: size.value,
    businessName: debouncedSearch.value,
    listCategory: selectedCategories.value
  })
})

const {
  data: categories
} = useQuery({
  key: () => ['business-categories'],
  query: () => categoryService.getCategories()
})

watch(
  [debouncedSearch, selectedCategories],
  () => {
    page.value = 1
  }
)
</script>

<template>
  <ClientOnly>
    <UContainer class="py-8">
      <div
        class="mb-6 flex gap-3"
      >
        <div class="flex-1">
          <BusinessSearch
            v-model="search"
          />
        </div>

        <UButton
          icon="i-lucide-filter"
          @click="isFilterOpen = true"
        >
          Kategori
        </UButton>
      </div>

      <BusinessFilterModal
        v-model:open="isFilterOpen"
        v-model:selected="selectedCategories"
        :categories="categories ?? []"
      />

      <USkeleton
        v-if="isLoading"
        class="h-96"
      />

      <BusinessGrid
        v-else
        :items="data?.content ?? []"
      />

      <div
        v-if="!isLoading"
        class="mt-8 flex justify-center"
      >
        <BusinessPagination
          v-model="page"
          :total-pages="data?.totalPages ?? 1"
        />
      </div>
    </UContainer>
  </ClientOnly>
</template>
