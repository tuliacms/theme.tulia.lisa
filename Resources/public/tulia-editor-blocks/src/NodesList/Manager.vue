<template>
    <TaxonomySelect v-model="block.config.term" :label="translator.trans('Category of nodes', 'TuliaLisa')"></TaxonomySelect>
    <Input v-model="block.config.number_of_nodes" :label="translator.trans('Number of nodes', 'TuliaLisa')"></Input>
</template>

<script setup>
import { defineProps, inject, onMounted } from "vue";
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const translator = inject('translator');
const controls = inject('controls.registry');
const sectionConfigurator = inject('configurator.section');

const TaxonomySelect = controls.manager('TaxonomySelect');
const Input = controls.manager('Input.Text');

onMounted(() => {
    sectionConfigurator
        .ofBlock(block)
        .fullWidthNoPadding();
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.NodesList.Manager' }
</script>
