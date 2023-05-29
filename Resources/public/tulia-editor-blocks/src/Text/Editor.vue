<template>
    <div :class="blockClassname">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <p :class="{ 'lead': true, 'text-center': block.config.headline_justify === 'center', 'text-end': block.config.headline_justify === 'right' }"><Contenteditable v-model="block.data.intro"></Contenteditable></p>
                    <h2 :class="{ 'text-center': block.config.headline_justify === 'center', 'text-end': block.config.headline_justify === 'right' }"><Contenteditable v-model="block.data.headline"></Contenteditable></h2>
                    <WysiwygEditor v-model="block.data.content" class="text-wrapper"></WysiwygEditor>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defineProps, inject, computed } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const extensions = inject('extensions.registry');

const WysiwygEditor = extensions.editor('WysiwygEditor');
const Contenteditable = extensions.editor('Contenteditable');

const blockClassname = computed(() => {
    return 'block block-text ' + block.config.bgColor + ' ' + block.config.padding;
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.Text.Editor' }
</script>
