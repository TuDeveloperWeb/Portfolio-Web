<!-- src/components/SvgIcon.vue -->
<template>
  <div class="svg-icon-wrapper" v-html="processedSvg" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  svg: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 60
  },
  color: {
    type: String,
    default: '#c084fc'
  },
  hoverColor: {
    type: String,
    default: '#a855f7'
  }
});

const processedSvg = computed(() => {
  return props.svg
    .replace(/<svg/, `<svg class="svg-icon" style="width:${props.size}px;height:${props.size}px;"`)
    .replace(/fill="[^"]*"/g, `fill="${props.color}"`);
});
</script>

<style scoped>
.svg-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  :deep(.svg-icon) {
    display: block;
    width: v-bind('props.size + "px"');
    height: v-bind('props.size + "px"');
    
    
    path {
      fill: v-bind('props.color');
    }
  }

    &:hover :deep(.svg-icon) path {
    fill: v-bind('props.hoverColor'); /* Color al hacer hover */
  }
}
</style>