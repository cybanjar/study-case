<script setup lang="ts">
import type { BusinessCategory } from '~/types/business'

defineProps<{
  categories: BusinessCategory[]
}>()

const open = defineModel<boolean>('open', {
  required: true
})

const selected = defineModel<string[]>('selected', {
  required: true
})

function toggleCategory(
  value: string,
  checked: boolean | 'indeterminate'
) {
  if (checked === true) {
    if (!selected.value.includes(value)) {
      selected.value = [...selected.value, value]
    }
    return
  }

  selected.value = selected.value.filter(
    item => item !== value
  )
}
</script>

<template>
  <UModal
    v-model:open="open"
    t
  >
    <template #content>
      <div class="p-6">
        <h2 class="mb-4 text-xl font-semibold">
          Filter Kategori
        </h2>

        <div class="space-y-3">
          <UCheckbox
            v-for="item in categories"
            :key="item.paramCode"
            :label="item.paramName"
            :model-value="selected.includes(item.paramCode)"
            @update:model-value="
              toggleCategory(
                item.paramCode,
                $event
              )
            "
          />
        </div>
      </div>
    </template>
  </UModal>
</template>
