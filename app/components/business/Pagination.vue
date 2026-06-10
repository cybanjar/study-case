<script setup lang="ts">
const page = defineModel<number>({
  required: true
})

defineProps<{
  totalPages: number
}>()
</script>

<template>
  <UPagination
    v-model:page="page"
    :items-per-page="12"
    :total="totalPages * 12"
  />
</template>
