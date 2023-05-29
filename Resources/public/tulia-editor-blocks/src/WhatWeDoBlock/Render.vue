<template>
    <div :class="blockClassname">
        <div class="container-xxl">
            <div class="row">
                <div class="col-12 col-lg-6 order-lg-1">
                    <div class="block-content">
                        <p class="lead">{{ block.data.intro }}</p>
                        <h2>{{ block.data.headline }}</h2>
                        <ul>
                            <li
                                v-for="(item, key) in block.data.content_list"
                                :key="key"
                            >
                                <strong>{{ item.lead }}</strong>
                                <br />
                                {{ item.paragraph }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-lg-6 order-lg-0 block-images">
                    <div class="block-image block-image-main" :style="{ backgroundImage: imageAbove.backgroundImage }"></div>
                    <div class="block-image block-image-sub" :style="{ backgroundImage: imageUnder.backgroundImage }"></div>
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
const BackgroundImage = extensions.render('BackgroundImage');
const imageAbove = BackgroundImage.of(block, () => block.data.image_above);
const imageUnder = BackgroundImage.of(block, () => block.data.image_under);

const blockClassname = computed(() => {
    return 'block block-what-we-do ' + block.config.bgColor + ' ' + block.config.margin;
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.WhatWeDoBlock.Render' }
</script>
