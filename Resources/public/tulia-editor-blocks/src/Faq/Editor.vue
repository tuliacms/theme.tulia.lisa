<template>
    <div class="accordion mb-4">
        <div class="accordion-item" v-for="entry in entries.collection" :key="entry.id">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button"><Contenteditable v-model="entry.question"></Contenteditable></button>
            </h2>
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
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').editor(props);

const Collection = block.extension('Collection');
const Actions = block.extension('Collection.Actions');
const Contenteditable = block.extension('Contenteditable');

const entries = new Collection(block.data.entries, {
    question: 'Morbi  convallis mattis vel bibendum orci?',
    answer: 'Vestibulum efficitur malesuada. Quisque non pretium enim. Suspendisse potenti.',
});
</script>
