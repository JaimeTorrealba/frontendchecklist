<template>
  <DefaultLayout class="border-r-4 border-main-lighter">
    <div>
      <h2 class="text-3xl mx-auto font-semibold text-gray-800 dark:text-white">Projects</h2>
      <nav>
        <Link id="Home" href="/" label="Home" />

        <span v-for="elem in reactiveTables" :key="elem.id">
          <Link :id="elem.name" :href="'/Projects/' + elem.name" :label="elem.name" />
        </span>
      </nav>
    </div>

    <div class="flex items-center">
      <Button id="add" label="New Project" variant="Primary" @click="showModal = true" />
    </div>
    <NewProjectModal v-if="showModal" @close="showModal = false" @reload="reload" />
  </DefaultLayout>
</template>
<script>
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import DefaultLayout from '../layouts/DefaultLayout';
import NewProjectModal from '../molecules/NewProjectModal';
import { getAllTables } from '../../utils/db';
export default {
  name: 'TheSidebar',
  components: {
    Button,
    Link,
    DefaultLayout,
    NewProjectModal,
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      showModal: false,
      projectNames: [],
    };
  },
  computed: {
    reactiveTables() {
      return this.projectNames;
    },
  },
  methods: {
    async fetchData() {
      this.projectNames = await getAllTables();
    },
    reload() {
      this.fetchData();
    },
  },
};
</script>
