<template>
    <div :class="blockClassname">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="tulia-container-max-width">
                        <p v-if="block.data.intro" :class="{ 'lead': true, 'text-center': block.config.headline_justify === 'center', 'text-end': block.config.headline_justify === 'right' }">{{ block.data.intro }}</p>
                        <h2 v-if="block.data.headline" :class="{ 'text-center': block.config.headline_justify === 'center', 'text-end': block.config.headline_justify === 'right' }">{{ block.data.headline }}</h2>
                        <div v-if="block.data.content" v-html="block.data.content"></div>

                        <div class="tued-dynamic-block">[contact_form id="{{ block.config.form_id }}"]</div>
                    </div>
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
    return 'block block-contact ' + block.config.bgColor + ' ' + block.config.padding;
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.ContactForm.Render' }
</script>
