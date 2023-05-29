<template>
    <div :class="blockClassname">
        <div class="container-xxl">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <p class="lead"><Contenteditable v-model="block.data.intro"></Contenteditable></p>
                    <h2><Contenteditable v-model="block.data.headline"></Contenteditable></h2>
                </div>
                <div class="col-12 col-lg-6">
                    <p class="services-slogan"><Contenteditable v-model="block.data.short_text"></Contenteditable></p>
                </div>
            </div>
            <div class="services-collection">
                <div class="row">
                    <div
                        class="col-12 col-sm-12 col-md-6 col-lg-4"
                        v-for="service in services.collection"
                        :key="service.id"
                    >
                        <div class="service-item">
                            <div class="service-icon">
                                <FontIcon v-model="service.icon"></FontIcon>
                            </div>
                            <h3><Contenteditable v-model="service.title"></Contenteditable></h3>
                            <p class="mb-3"><Contenteditable v-model="service.content"></Contenteditable></p>
                            <div class="mb-3">
                                <input type="email" class="form-control form-control-sm" placeholder="Link address" v-model="service.link" />
                                <div class="form-text">Left empty if element should not be linked.</div>
                            </div>
                            <Actions actions="moveBackward,moveForward,remove" :collection="services" :item="service"></Actions>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                        <Actions actions="add" :collection="services"></Actions>
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

const Contenteditable = extensions.editor('Contenteditable');
const FontIcon = extensions.editor('FontIcon');
const Collection = extensions.editor('Collection');
const Actions = extensions.editor('Collection.Actions');

const services = new Collection(block, 'services', {
    icon: 'far fa-money-bill-alt',
    title: 'Sed tempus libero id magna mattis',
    content: 'Sed interdum augue sed laoreet malesuada. Phasellus tellus arcu, aliquam quis.',
    link: null,
});

const blockClassname = computed(() => {
    return 'block block-services ' + block.config.bgColor + ' ' + block.config.padding;
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.OurServices.Editor' }
</script>
