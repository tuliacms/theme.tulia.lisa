<template>
    <Select v-model="block.data.headline_justify" :choices="choices" label="Headline align"></Select>
    <FormSelect v-model="block.data.form_id" label="Form"></FormSelect>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').manager(props);

const Select = block.control('Select');
const FormSelect = block.control('FormSelect');
const choices = {
    left: 'Left',
    center: 'Center',
    right: 'Right',
};

block.on('created', () => {
    block.expectsFullWidthSection();
});
</script>
