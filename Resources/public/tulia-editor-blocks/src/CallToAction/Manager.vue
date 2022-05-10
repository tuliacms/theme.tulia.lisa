<template></template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').manager(props);

block.on('created', () => {
    block.getParent().getParent().getParent().data.containerWidth = 'full-width-no-padding';
});
</script>
