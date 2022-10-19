<template>
    <Select v-model="block.data.bgColor" label="Background color" :choices="options.bgColor"></Select>
    <Select v-model="block.data.padding" label="Margins" :choices="options.padding"></Select>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const translator = inject('translator');

const Select = props.block.control('Select');

const options = {
    bgColor: {
        '': 'White',
        'block-bg-lightgray': 'Gray',
        'block-bg-dark': 'Dark',
    },
    padding: {
        '': 'Default margin',
        'block-no-padding': 'No margin',
        'block-padding-top': 'Margin on top',
        'block-padding-bottom': 'Margin on bottom',
    }
};
</script>
