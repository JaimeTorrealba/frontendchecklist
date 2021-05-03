<template v-if="project">
  <div>
    <ul class="flex cursor-pointer">
      <span v-for="(task, index) in project" :key="index">
        <Tab :isValue="isActive" @setValue="setActive" :tabName="task.title" />
      </span>
    </ul>
    <div v-for="(task, index) in project" :key="index">
      <TabContent :isValue="isActive" :elementActive="task" />
    </div>
  </div>
</template>
<script>
import TabContent from '../molecules/TabContent';
import Tab from '../atoms/Tab';
import { getProjectByName } from '../../utils/db';

export default {
  components: {
    Tab,
    TabContent,
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  data() {
    return {
      activeItem: 'home',
      project: null,
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    async fetchData() {
      const load = await getProjectByName(this.$route.params.id);
      this.project = load.checkList;
    },
  },
};
</script>
<style lang="css" scoped>
.selected_tab {
  display: block !important;
}
.unselected_tab {
  display: none;
}
</style>
