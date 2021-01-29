<template>
  <div class="Personalized">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Personalized",
};
</script>

<style scoped>
.Personalized {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>