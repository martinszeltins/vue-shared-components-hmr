<template>
  <div class="my-shared-component">
      <MySharedComponentButton />
      <p>Mouse position is at: {{ x }}, {{ y }}</p>
      <pre>msg prop: {{ props.msg }}</pre>
  </div>
</template>

<script setup>
    import { useMouse } from '../services/useMouse.js'
    import MySharedComponentButton from './MySharedComponentButton.vue'

    const props = defineProps({ msg: String })

    const { x, y } = useMouse()
</script>

<style scoped>
    .my-shared-component {
      border: 2px solid #00800052;
      display: inline-block;
      padding: 10px;
      background: #0080000f;
      border-radius: 10px;
    }
</style>
