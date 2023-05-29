<template>
    <BlockOptions :block="block"></BlockOptions>
</template>

<script setup>
import { defineProps, inject, onMounted } from "vue";
const BlockOptions = require('./../shared/BlockOptions/Manager.vue').default;
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const sectionConfigurator = inject('configurator.section');

onMounted(() => {
    sectionConfigurator
        .ofBlock(block)
        .fullWidthNoPadding();
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.CompanyInNumbers.Manager' }
</script>
