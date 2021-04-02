<template>
  <div>
    <a
      :id="id"
      class="mx-2 font-semibold hover:underline"
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ label }}
    </a>
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
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
