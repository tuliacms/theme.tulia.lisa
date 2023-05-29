<template>
    <div :class="blockClassname">
        <div class="services-collection">
            <div class="container-xxl">
                <div class="row">
                    <div
                        v-for="service in services.collection"
                        :key="service.id"
                        class="col-12 col-lg-4 service-column"
                    >
                        <div class="service-item">
                            <div class="service-icon">
                                <FontIcon v-model="service.icon"></FontIcon>
                            </div>
                            <h3><Contenteditable v-model="service.title"></Contenteditable></h3>
                            <p><Contenteditable v-model="service.content"></Contenteditable></p>
                            <Actions actions="moveBackward,moveForward,remove" :collection="services" :item="service"></Actions>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 service-column">
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
    title: 'Sed tempus libero',
    content: 'Sed augue sed laoreet malesuada. Phasellus tellus arcu, aliquam interdum quis.',
});
const blockClassname = computed(() => {
    return 'block block-services-light ' + block.config.bgColor + ' ' + block.config.padding;
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.ServicesLight.Editor' }
</script>
