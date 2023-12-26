<script setup lang="ts">
defineProps<{
  isDialogOpen: boolean;
}>()

defineEmits(['close-dialog'])
</script>

<template>
  <div v-if="isDialogOpen" class="dialog" @click="$emit('close-dialog')">
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