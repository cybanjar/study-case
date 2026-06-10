<script setup lang="ts">
const keyword = defineModel<string>({
  required: true
})
</script>

<template>
  <UInput
    v-model="keyword"
    icon="i-lucide-search"
    placeholder="Cari nama bisnis"
    size="lg"
    class="w-full"
  />
</template>
