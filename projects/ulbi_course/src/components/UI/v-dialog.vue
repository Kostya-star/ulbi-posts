<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>()

defineEmits(['update:model-value'])
</script>

<template>
  <div v-if="modelValue" class="dialog" @click="$emit('update:model-value', false)">
    <div class="dialog-content" @click.stop>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba($color: black, $alpha: .5);

  &-content {
    padding: 10px;
    background-color: white;
    min-width: 400px;
    border-radius: 5px;
  }
}
</style>