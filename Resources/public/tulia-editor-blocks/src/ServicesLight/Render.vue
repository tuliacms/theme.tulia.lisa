<template>
    <div :class="blockClassname">
        <div class="services-collection">
            <div class="container-xxl">
                <div class="row">
                    <div
                        v-for="(service, key) in block.data.services"
                        :key="key"
                        class="col-12 col-lg-4 service-column"
                    >
                        <div class="service-item">
                            <div class="service-icon">
                                <i :class="service.icon"></i>
                            </div>
                            <h3>{{ service.title }}</h3>
                            <p>{{ service.content }}</p>
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

const blockClassname = computed(() => {
    return 'block block-services-light ' + block.config.bgColor + ' ' + block.config.padding;
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.ServicesLight.Render' }
</script>
