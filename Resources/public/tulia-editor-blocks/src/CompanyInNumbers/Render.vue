<template>
    <div :class="blockClassname">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <p class="lead">{{ block.data.intro }}</p>
                    <h2>{{ block.data.headline }}</h2>
                    <div class="block-numbers row">
                        <div
                            v-for="number in block.data.numbers"
                            :key="number.id"
                            class="block-number-item col-12 col-sm-6 col-xl-3"
                        >
                            <div class="block-number-item-inner">
                                <div class="block-number">
                                    <span class="block-number-counter">{{ number.number }}</span>
                                    <span class="block-number-after" v-if="number.suffix">{{ number.suffix }}</span>
                                </div>
                                <div class="block-number-label">{{ number.label }}</div>
                            </div>
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
    return 'block block-company-in-numbers ' + block.config.bgColor + ' ' + block.config.padding;
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.CompanyInNumbers.Render' }
</script>
