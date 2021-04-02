<template>
  <div class="grid grid-cols-6">
    <theSidebar />
    <div class="col-span-5">
      <DefaultLayout>
        <div>
          <h1 class="text-5xl m-3">Front-end CheckList</h1>
          <Checkbox />
          {{ Projects }}
        </div>
        <theFooter />
      </DefaultLayout>
    </div>
  </div>
</template>
<script>
import theFooter from '../components/organism/theFooter';
import theSidebar from '../components/organism/theSidebar';
import Checkbox from '../components/atoms/Checkbox';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { mapState } from 'vuex';

export default {
  components: {
    theFooter,
    theSidebar,
    Checkbox,
    DefaultLayout,
  },
  data() {
    return {
      test: '',
    };
  },
  computed: {
    ...mapState(['Projects']),
  },
};
</script>
<style lang="css" scoped></style>
