<template>
    <Select v-model="block.data.headline_justify" :choices="choices" label="Headline align"></Select>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').manager(props);

const Select = block.control('Select');
const choices = {
    left: 'Left',
    center: 'Center',
    right: 'Right',
};
</script>
