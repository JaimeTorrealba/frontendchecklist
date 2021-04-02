<template>
  <button :id="id" :class="tailwind">
    {{ label }}
  </button>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    tailwind: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="css" scoped></style>
