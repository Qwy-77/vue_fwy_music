<template>
  <div class="PersonalizedItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PersonalizedItem",
};
</script>

<style  scoped>
.PersonalizedItem {
  width: 132px;
  height: 130px;
}
</style>