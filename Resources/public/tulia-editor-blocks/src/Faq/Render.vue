<template>
    <div :class="blockClassname">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <p class="lead" v-if="block.data.intro">{{ block.data.intro }}</p>
                    <h2 v-if="block.data.headline"></h2>
                    <div class="accordion">
                        <div class="accordion-item" v-for="entry in block.data.entries" :key="entry.id">
                            <div class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + entryId(entry)">{{ entry.question }}</button>
                            </div>
                            <div :id="entryId(entry)" class="accordion-collapse collapse">
                                <div class="accordion-body">{{ entry.answer }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defineProps, inject, onMounted, computed } = require('vue');
const _ = require('lodash');
const props = defineProps(['block']);
const block = inject('blocks.instance').render(props);

let blockId = null;
const entryId = entry => {
    return 'accordion-entry-' + blockId + entry.id;
};
const blockClassname = computed(() => {
    return 'block block-faq ' + block.data.bgColor + ' ' + block.data.padding;
});
onMounted(() => {
    blockId = _.uniqueId();
});
</script>
