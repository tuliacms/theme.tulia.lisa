<template>
    <Select v-model="block.config.bgColor" :label="translator.trans('Background color', 'TuliaLisa')" :choices="options.bgColor"></Select>
    <Select v-model="block.config.padding" :label="translator.trans('Margins', 'TuliaLisa')" :choices="options.padding"></Select>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const translator = inject('translator');
const controls = inject('controls.registry');

const Select = controls.manager('Select');

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
<script>
export default { name: 'TuliaLisaTheme.Shared.BlockOptions.Manager' }
</script>
