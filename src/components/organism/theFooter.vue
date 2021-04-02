<template>
  <div>
    <div class="w-full mx-auto bottom-0">
      <div
        class="flex justify-between items-center py-3 border-4 border-main-lighter rounded-lg md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <ExternalLink id="owner" href="#" label="Created By" />
        </div>
        <ExternalLink id="github" href="#" label="Github" />
        <ExternalLink id="webpage" href="#" label="WebPage" />
        <ExternalLink id="contactme" href="#" label="Contact me" />
      </div>
    </div>
  </div>
</template>
<script>
import ExternalLink from '../atoms/ExternalLink';

export default {
  name: 'TheFooter',
  components: {
    ExternalLink,
  },
};
</script>
