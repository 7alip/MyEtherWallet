<template>
  <div class="border-block pa-3">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.border-block {
  border: 1px solid var(--v-inputBorder-base);
  border-radius: 5px;
}
</style>
