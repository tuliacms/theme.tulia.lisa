<template>
    <div :class="blockClassname">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <p :class="{ 'lead': true, 'text-center': block.config.headline_justify === 'center', 'text-end': block.config.headline_justify === 'right' }">{{ block.data.intro }}</p>
                    <h2 :class="{ 'text-center': block.config.headline_justify === 'center', 'text-end': block.config.headline_justify === 'right' }">{{ block.data.headline }}</h2>
                    <div class="text-wrapper" v-html="block.data.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defineProps, inject, computed } = require('vue');
const props = defineProps(['block']);
const block = inject('structure').block(props.block);

const blockClassname = computed(() => {
    return 'block block-text ' + block.config.bgColor + ' ' + block.config.padding;
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.Text.Render' }
</script>
