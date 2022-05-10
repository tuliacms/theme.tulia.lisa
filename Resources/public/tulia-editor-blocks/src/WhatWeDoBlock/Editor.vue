<template>
    <div class="block block-what-we-do">
        <div class="container-xxl">
            <div class="row">
                <div class="col-12 col-lg-6 order-lg-1">
                    <div class="block-content">
                        <p class="lead"><Contenteditable v-model="block.data.intro"></Contenteditable></p>
                        <h2><Contenteditable v-model="block.data.headline"></Contenteditable></h2>
                        <WysiwygEditor v-model="block.data.content"></WysiwygEditor>
                        <ul>
                            <li
                                v-for="(item, key) in block.data.content_list"
                                :key="key"
                            >
                                <strong class="mb-2 d-block"><Contenteditable v-model="item.lead"></Contenteditable></strong>
                                <Contenteditable v-model="item.paragraph"></Contenteditable>
                                <button type="button" class="tued-btn" @click="block.data.content_list.splice(key, 1)">{{ translator.trans('removeItem') }}</button>
                            </li>
                            <li>
                                <button type="button" class="tued-btn" @click="addItem()">{{ translator.trans('addItem') }}</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-lg-6 order-lg-0 block-images">
                    <ImageEditor
                        class="block-image block-image-main"
                        v-model="block.data.image_above"
                        placement="above"
                    ></ImageEditor>
                    <ImageEditor
                        class="block-image block-image-sub"
                        v-model="block.data.image_under"
                        placement="under"
                    ></ImageEditor>
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
const ImageEditor = block.extension('BackgroundImage');
const WysiwygEditor = block.extension('WysiwygEditor');
const Contenteditable = block.extension('Contenteditable');

const addItem = () => {
    block.data.content_list.push({
        lead: 'Mauris tincidunt convallis',
        paragraph: 'Nunc ut dictum quam. Mauris tincidunt convallis lectus sed lacinia.',
    });
};
</script>
