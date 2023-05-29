<template>
    <div class="block block-title">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <p :class="{ 'lead': true, 'text-center': block.config.headline_justify === 'center', 'text-end': block.config.headline_justify === 'right' }"><Contenteditable v-model="block.data.intro"></Contenteditable></p>
                    <h2 :class="{ 'mb-0': true, 'text-center': block.config.headline_justify === 'center', 'text-end': block.config.headline_justify === 'right' }"><Contenteditable v-model="block.data.headline"></Contenteditable></h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const extensions = inject('extensions.registry');

const WysiwygEditor = extensions.editor('WysiwygEditor');
const Contenteditable = extensions.editor('Contenteditable');
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.Title.Editor' }
</script>
