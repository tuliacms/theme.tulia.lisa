<template>
    <div class="accordion mb-4">
        <div class="accordion-item" v-for="entry in block.data.entries" :key="entry.id">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + entryId(entry)">{{ entry.question }}</button>
            </h2>
            <div :id="entryId(entry)" class="accordion-collapse collapse">
                <div class="accordion-body">{{ entry.answer }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defineProps, inject, onMounted } = require('vue');
const _ = require('lodash');
const props = defineProps(['block']);
const block = inject('blocks.instance').render(props);

let blockId = null;
const entryId = entry => {
    return 'accordion-entry-' + blockId + entry.id;
};
onMounted(() => {
    blockId = _.uniqueId();
});
</script>
