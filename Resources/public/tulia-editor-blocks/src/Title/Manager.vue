<template>
    <Select v-model="block.config.headline_justify" :choices="choices" :label="translator.trans('Headline align', 'TuliaLisa')"></Select>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const translator = inject('translator');
const controls = inject('controls.registry');

const Select = controls.manager('Select');
const choices = {
    left: translator.trans('Left', 'TuliaLisa'),
    center: translator.trans('Center', 'TuliaLisa'),
    right: translator.trans('Right', 'TuliaLisa'),
};
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.Title.Manager' }
</script>
