<template>
  <button :id="id" class="Button" :class="variant">
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
    variant: {
      type: String,
      required: false,
      default: 'Primary',
    },
  },
};
</script>
<style lang="css" scoped>
.Button {
  @apply p-1 m-1 border rounded-lg shadow-lg focus:outline-none w-full;
}
.Primary {
  @apply text-base-white bg-primary-main hover:bg-primary-dark;
}
.Warning {
  @apply text-base-white bg-warning-darker hover:bg-warning-dark;
}
.Success {
  @apply text-base-white bg-success-main hover:bg-success-dark;
}
</style>
