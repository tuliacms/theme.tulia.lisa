<template>
    <TaxonomySelect v-model="block.data.taxonomy" label="Category of nodes"></TaxonomySelect>
    <Input v-model="block.data.number_of_nodes" label="Number of nodes"></Input>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').manager(props);

const TaxonomySelect = block.control('TaxonomySelect');
const Input = block.control('Input');
</script>
