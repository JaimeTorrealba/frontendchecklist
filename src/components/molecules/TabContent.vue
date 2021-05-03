<template>
  <div class="unselected_tab" :class="{ 'selected_tab ': isValue(elementActive.title) }">
    <span v-for="check in elementActive" :key="check.title" :id="check.title">
      <Checkbox :task="check" />
    </span>
  </div>
</template>
<script>
import Checkbox from '../atoms/Checkbox';
export default {
  components: {
    Checkbox,
  },
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
