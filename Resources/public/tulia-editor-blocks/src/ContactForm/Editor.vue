<template>
    <div :class="blockClassname">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="tulia-container-max-width">
                        <p :class="{ 'lead': true, 'text-center': block.config.headline_justify === 'center', 'text-end': block.config.headline_justify === 'right' }"><Contenteditable v-model="block.data.intro"></Contenteditable></p>
                        <h2 :class="{ 'text-center': block.config.headline_justify === 'center', 'text-end': block.config.headline_justify === 'right' }"><Contenteditable v-model="block.data.headline"></Contenteditable></h2>
                        <WysiwygEditor v-model="block.data.content"></WysiwygEditor>

                        <div class="card">
                            <div class="card-body">
                                {{ translator.trans('Here will be rendered form.', 'TuliaLisa') }}
                            </div>
                        </div>
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
const translator = inject('translator');
const extensions = inject('extensions.registry');

const WysiwygEditor = extensions.editor('WysiwygEditor');
const Contenteditable = extensions.editor('Contenteditable');

const blockClassname = computed(() => {
    return 'block block-contact ' + block.config.bgColor + ' ' + block.config.padding;
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.ContactForm.Editor' }
</script>
