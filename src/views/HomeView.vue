<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68D391'" size="100px" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable.vue";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
import api from "@/api";
export default {
  name: "HomeView",
  components: { PxAssetsTable, BounceLoader },
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
