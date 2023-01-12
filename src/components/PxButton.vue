<template>
  <button
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
    v-on:click="buttonClick"
  >
    <beat-loader :loading="isLoading" :color="'#68D391'" :size="'8px'" />
    <p v-show="!isLoading">
      <slot></slot>
    </p>
  </button>
</template>

<script>
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
export default {
  name: "PxButton",
  components: {
    BeatLoader,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    buttonClick() {
      this.$emit("click");
    },
  },
};
</script>
