<template>
    <BlockOptions :block="block"></BlockOptions>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const BlockOptions = require('./../shared/BlockOptions/Manager.vue').default;
const props = defineProps(['block']);
const block = inject('blocks.instance').manager(props);

block.on('created', () => {
    block.expectsFullWidthSection();
});
</script>
