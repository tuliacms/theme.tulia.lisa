<template>
    <div class="block block-title">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <p :class="{ 'lead': true, 'text-center': block.data.headline_justify === 'center', 'text-end': block.data.headline_justify === 'right' }"><Contenteditable v-model="block.data.intro"></Contenteditable></p>
                    <h2 :class="{ 'mb-0': true, 'text-center': block.data.headline_justify === 'center', 'text-end': block.data.headline_justify === 'right' }"><Contenteditable v-model="block.data.headline"></Contenteditable></h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').editor(props);

const WysiwygEditor = block.extension('WysiwygEditor');
const Contenteditable = block.extension('Contenteditable');
</script>
