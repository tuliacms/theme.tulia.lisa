<template>
    <div class="block block-title">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <p v-if="block.data.intro" :class="{ 'lead': true, 'text-center': block.data.headline_justify === 'center', 'text-end': block.data.headline_justify === 'right' }">{{ block.data.intro }}</p>
                    <h2 v-if="block.data.headline" :class="{ 'mb-0': true, 'text-center': block.data.headline_justify === 'center', 'text-end': block.data.headline_justify === 'right' }">{{ block.data.headline }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').render(props);
</script>
