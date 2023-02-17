<template>
    <Select v-model="block.data.headline_justify" :choices="choices" :label="translator.trans('Headline align', 'TuliaLisa')"></Select>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').manager(props);
const translator = inject('translator');

const Select = block.control('Select');
const choices = {
    left: translator.trans('Left', 'TuliaLisa'),
    center: translator.trans('Center', 'TuliaLisa'),
    right: translator.trans('Right', 'TuliaLisa'),
};
</script>
