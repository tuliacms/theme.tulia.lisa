<template>
    <DynamicBlock type="theme_lisa_nodes_from_taxonomy" :data="data"></DynamicBlock>
</template>

<script setup>
const { defineProps, inject, computed } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const extensions = inject('extensions.registry');
const DynamicBlock = extensions.render('DynamicBlock');

const data = computed(() => {
    return {
        intro: block.data.intro,
        headline: block.data.headline,
        node_readmore: block.data.node_readmore,
        term_readmore: block.data.term_readmore,
        term_icon: block.data.term_icon,
        term: block.config.term,
        number_of_nodes: block.config.number_of_nodes,
    };
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.NodesList.Render' }
</script>
