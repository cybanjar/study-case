<script setup lang="ts">
import type { Business } from '~/types/business'

defineProps<{
  items: Business[]
}>()
</script>

<template>
  <div
    class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"
  >
    <BusinessCard
      v-for="item in items"
      :key="item.id"
      :business="item"
    />
  </div>
</template>
