<template>
    <div :class="blockClassname">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <p :class="{ 'lead': true, 'text-center': block.data.headline_justify === 'center', 'text-end': block.data.headline_justify === 'right' }">{{ block.data.intro }}</p>
                    <h2 :class="{ 'text-center': block.data.headline_justify === 'center', 'text-end': block.data.headline_justify === 'right' }">{{ block.data.headline }}</h2>
                    <div class="text-wrapper" v-html="block.data.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defineProps, inject, computed } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').render(props);

const blockClassname = computed(() => {
    return 'block block-text ' + block.data.bgColor + ' ' + block.data.padding;
});
</script>
