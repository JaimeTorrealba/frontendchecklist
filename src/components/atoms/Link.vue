<template>
  <div>
    <router-link
      :id="id"
      class="flex items-center space3 hover:bg-info-darker hover:text-base-white rounded-lg"
      :to="href"
    >
      <span class="mx-auto">{{ label }}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: false,
      default: '/',
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
