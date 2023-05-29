<template>
    <div :class="blockClassname">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <p class="lead"><Contenteditable v-model="block.data.intro"></Contenteditable></p>
                    <h2><Contenteditable v-model="block.data.headline"></Contenteditable></h2>
                    <div class="accordion">
                        <div class="accordion-item" v-for="entry in entries.collection" :key="entry.id">
                            <div class="accordion-header">
                                <button class="accordion-button" type="button"><Contenteditable v-model="entry.question"></Contenteditable></button>
                            </div>
                            <div class="accordion-collapse collapse show">
                                <div class="accordion-body">
                                    <Contenteditable v-model="entry.answer"></Contenteditable>
                                    <br />
                                    <Actions actions="moveUp,moveDown,remove" :collection="entries" :item="entry"></Actions>
                                </div>
                            </div>
                        </div>
                        <Actions actions="add" :collection="entries"></Actions>
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
const extensions = inject('extensions.registry');

const Collection = extensions.editor('Collection');
const Actions = extensions.editor('Collection.Actions');
const Contenteditable = extensions.editor('Contenteditable');

const entries = new Collection(block, 'entries', {
    question: 'Morbi  convallis mattis vel bibendum orci?',
    answer: 'Vestibulum efficitur malesuada. Quisque non pretium enim. Suspendisse potenti.',
});

const blockClassname = computed(() => {
    return 'block block-faq ' + block.config.bgColor + ' ' + block.config.padding;
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.Faq.Editor' }
</script>
