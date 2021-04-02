<template>
  <div class="space3">
    <label for="test" class="block mb-1">{{ label }}</label>
    <input
      :id="id"
      type="text"
      :name="name"
      :value="value"
      class="rounded-lg p-1 border border-primary-main focus:outline-none w-24 md:w-32"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: 'Input',
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  emits: ['update:value'],
};
</script>
