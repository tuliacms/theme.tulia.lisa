<template>
    <BlockOptions :block="block"></BlockOptions>
    <Select v-model="block.config.headline_justify" :choices="choices" :label="translator.trans('Headline align', 'TuliaLisa')"></Select>
    <FormSelect v-model="block.config.form_id" :label="translator.trans('Form', 'TuliaLisa')"></FormSelect>
</template>
<script setup>
import { defineProps, inject, onMounted } from "vue";
const BlockOptions = require('./../shared/BlockOptions/Manager.vue').default;
const props = defineProps(['block']);
const structure = inject('structure');
const translator = inject('translator');
const controls = inject('controls.registry');
const sectionConfigurator = inject('configurator.section');
const block = structure.block(props.block);

const Select = controls.manager('Select');
const FormSelect = controls.manager('FormSelect');
const choices = {
    left: 'Left',
    center: 'Center',
    right: 'Right',
};

onMounted(() => {
    sectionConfigurator
        .ofBlock(block)
        .fullWidthNoPadding();
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.ContactForm.Manager' }
</script>
