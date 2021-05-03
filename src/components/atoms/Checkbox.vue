<template>
  <label class="ml-3">
    {{ task.title }}
    <div class="border space3 rounded-lg">
      <input type="checkbox" class="mr-3 checked:bg-blue-600 checked:border-transparent" />
      {{ task.description }} {{ task.link }}
    </div>
  </label>
</template>
<script>
export default {
  props: {
    task: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
