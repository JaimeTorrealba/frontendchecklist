<template>
  <li
    class="Tab"
    :id="tabName"
    @click="$emit('setValue', tabName)"
    :class="{ 'font-semibold': isValue(tabName) }"
  >
    {{ tabName }}
  </li>
</template>
<script>
export default {
  name: 'Tab',
  props: {
    tabName: {
      type: String,
      required: true,
    },
    isValue: {
      type: Function,
      required: true,
    },
  },

  emits: ['setValue'],
};
</script>
<style lang="postcss" scoped>
.Tab {
  @apply py-2 px-6 bg-info-lighter rounded-t-lg hover:bg-info-light;
}
</style>
