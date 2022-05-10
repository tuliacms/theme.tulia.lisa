<template>
    <div class="block block-services-light">
        <div class="services-collection">
            <div class="row">
                <div
                    v-for="(service, key) in block.data.services"
                    :key="key"
                    class="col-12 col-lg-4 service-column"
                >
                    <div class="service-item">
                        <div class="service-icon">
                            <FontIcon v-model="service.icon"></FontIcon>
                        </div>
                        <h3><Contenteditable v-model="service.title"></Contenteditable></h3>
                        <p><Contenteditable v-model="service.content"></Contenteditable></p>
                        <button type="button" class="tued-btn" @click="block.data.services.splice(key, 1)">{{ translator.trans('removeItem') }}</button>
                    </div>
                </div>
                <div class="col-12 col-lg-4 service-column">
                    <button type="button" class="tued-btn" @click="addNewItem()">{{ translator.trans('addItem') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { defineProps, inject } = require('vue');
const props = defineProps(['block']);
const block = inject('blocks.instance').editor(props);
const translator = inject('translator');

const Contenteditable = block.extension('Contenteditable');
const FontIcon = block.extension('FontIcon');

const addNewItem = () => {
    block.data.services.push({
        icon: 'far fa-money-bill-alt',
        title: 'Sed tempus libero',
        content: 'Sed augue sed laoreet malesuada. Phasellus tellus arcu, aliquam interdum quis.',
    });
};
</script>
