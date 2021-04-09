<template>
  <div class="grid grid-cols-6">
    <Sidebar />
    <div class="col-span-5">
      <DefaultLayout>
        <div>
          <h1 class="h1">{{ this.$route.params.id }}</h1>
          <Tabs />
        </div>
        <Footer />
      </DefaultLayout>
    </div>
  </div>
</template>
<script>
import Footer from '../components/organism/theFooter';
import Sidebar from '../components/organism/theSidebar';
import Tabs from '../components/organism/theTabs';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default {
  components: {
    Footer,
    Sidebar,
    DefaultLayout,
    Tabs,
  },
};
</script>
<style lang="css" scoped></style>
