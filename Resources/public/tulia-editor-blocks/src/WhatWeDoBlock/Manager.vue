<template>
    <BlockOptions :block="block"></BlockOptions>
</template>

<script setup>
const BlockOptions = require('./../shared/BlockOptions/Manager.vue').default;
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').manager(props);

block.on('created', () => {
    block.expectsFullWidthSection();
});
</script>
