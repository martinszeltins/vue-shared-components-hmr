<template>
    <div class="m-4">
        <div>This component comes from a shared repo:</div>

        <div class="space-x-4">
            <MySharedComponent msg="Message Prop!" />
            <MySharedComponent msg="Different prop :)" />
        </div>

        <p class="font-semibold mt-4">Shared service:</p>
        <p>Mouse position is at: {{ x }}, {{ y }}</p>

        <p class="font-semibold mt-4">Shared image:</p>
        <img :src="sharedImage" alt="Shared image" width="100" height="100" />
    </div>
</template>

<script setup>
    import sharedImage from 'shared/src/assets/dolphin.png'
    import { useMouse } from 'shared/src/services/useMouse.js'
    import MySharedComponent from 'shared/src/components/MySharedComponent.vue'

    const { x, y } = useMouse()
</script>
