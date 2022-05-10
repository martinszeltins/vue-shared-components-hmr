<template>
    <div>This component comes from a shared repo</div>

    <MySharedComponent msg="Message Prop!" />
</template>

<script setup>
    import MySharedComponent from 'shared/src/components/MySharedComponent.vue'
</script>
