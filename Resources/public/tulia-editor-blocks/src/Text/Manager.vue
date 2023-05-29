<template>
    <BlockOptions :block="block"></BlockOptions>
    <Select v-model="block.config.headline_justify" :choices="choices" :label="translator.trans('Headline align', 'TuliaLisa')"></Select>
</template>

<script setup>
import { defineProps, inject, onMounted } from "vue";
const BlockOptions = require('./../shared/BlockOptions/Manager.vue').default;
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const translator = inject('translator');
const controls = inject('controls.registry');
const sectionConfigurator = inject('configurator.section');

const Select = controls.manager('Select');
const choices = {
    left: translator.trans('Left', 'TuliaLisa'),
    center: translator.trans('Center', 'TuliaLisa'),
    right: translator.trans('Right', 'TuliaLisa'),
};
onMounted(() => {
    sectionConfigurator
        .ofBlock(block)
        .fullWidthNoPadding();
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.Text.Manager' }
</script>
