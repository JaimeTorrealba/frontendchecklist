<template>
  <DefaultLayout class="border-r-4 border-main-lighter">
    <div>
      <h2 class="text-3xl mx-auto font-semibold text-gray-800 dark:text-white">Projects</h2>
      <nav>
        <Link id="Home" href="/" label="Home" />
        <span v-for="elem in Projects" :key="elem.id">
          <Link
            :id="elem.tables.name"
            :href="'/Projects/' + elem.tables.name"
            :label="elem.tables.name"
          />
        </span>
      </nav>
    </div>

    <div class="flex items-center">
      <Button
        id="add"
        label="New Project"
        tailwind="Button bg-primary-main focus:outline-none hover:bg-primary-dark normal_button"
        @click="showModal = true"
      />
    </div>
    <NewProjectModal v-if="showModal" @close="showModal = false" />
  </DefaultLayout>
</template>
<script>
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import DefaultLayout from '../layouts/DefaultLayout';
import NewProjectModal from '../modules/NewProjectModal';
import { mapState } from 'vuex';
export default {
  name: 'TheSidebar',
  components: {
    Button,
    Link,
    DefaultLayout,
    NewProjectModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapState(['Projects']),
  },
};
</script>
