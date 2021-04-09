<template>
  <div class="unselected_tab" :class="{ 'selected_tab ': isValue(elementActive.title) }">
    <p v-for="check in elementActive" :key="check.title" :id="check.title">
      {{ check.title }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    isValue: {
      type: Function,
      required: true,
    },
    elementActive: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="css" scoped></style>
