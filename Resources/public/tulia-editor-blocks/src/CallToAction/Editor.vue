<template>
    <div class="block block-call-to-action">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="block-inner">
                        <div class="block-text">
                            <FontIcon class="block-icon" v-model="block.data.bgIcon"></FontIcon>
                            <Contenteditable v-model="block.data.content"></Contenteditable>
                        </div>
                        <div class="block-button">
                            <div class="btn btn-primary btn-lg btn-inversed btn-icon-right">
                                <Contenteditable v-model="block.data.btn.label"></Contenteditable>
                                <FontIcon class="btn-icon" v-model="block.data.btn.icon"></FontIcon>
                            </div>
                        </div>
                    </div>
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

const Contenteditable = extensions.editor('Contenteditable');
const FontIcon = extensions.editor('FontIcon');
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.CallToAction.Editor' }
</script>
