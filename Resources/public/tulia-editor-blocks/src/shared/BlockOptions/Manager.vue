<template>
    <Select v-model="block.data.bgColor" :label="translator.trans('Background color', 'TuliaLisa')" :choices="options.bgColor"></Select>
    <Select v-model="block.data.padding" :label="translator.trans('Margins', 'TuliaLisa')" :choices="options.padding"></Select>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const translator = inject('translator');

const Select = props.block.control('Select');

const options = {
    bgColor: {
        '': translator.trans('White', 'TuliaLisa'),
        'block-bg-lightgray': translator.trans('Gray', 'TuliaLisa'),
        'block-bg-dark': translator.trans('Dark', 'TuliaLisa'),
    },
    padding: {
        '': translator.trans('Default margin', 'TuliaLisa'),
        'block-no-padding': translator.trans('No margin', 'TuliaLisa'),
        'block-padding-top': translator.trans('Margin on top', 'TuliaLisa'),
        'block-padding-bottom': translator.trans('Margin on bottom', 'TuliaLisa'),
    }
};
</script>
