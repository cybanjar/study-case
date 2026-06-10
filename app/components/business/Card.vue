<script setup lang="ts">
import type { Business } from '~/types/business'

defineProps<{
  business: Business
}>()
</script>

<template>
  <UCard
    class="h-full transition hover:shadow-lg"
  >
    <div class="space-y-4">
      <img
        :src="business.logoUrl"
        :alt="business.businessName"
        class="h-28 w-full rounded object-contain"
      >

      <div>
        <h3
          class="line-clamp-2 font-semibold"
        >
          {{ business.businessName }}
        </h3>

        <p
          class="text-sm text-gray-500"
        >
          {{ business.businessCategoryName }}
        </p>
      </div>
    </div>
  </UCard>
</template>
