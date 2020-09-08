<template>
  <section class="mt-5 mb-5">
      <h1 class="mb-5" :class="{'text-right': titleRight}">
          {{title}}
      </h1>
      <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    titleRight: {
      type: Boolean,
      default() { return false; },
    },
  },
};
</script>

<style>

</style>
