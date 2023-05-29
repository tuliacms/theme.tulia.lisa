<template>
    <div class="text-muted text-uppercase">
        {{ translator.trans('noEditOptionsForThisElement') }}
    </div>
</template>

<script setup>
import { defineProps, inject, onMounted } from "vue";
const props = defineProps(['block']);
const block = inject('structure').block(props.block);
const translator = inject('translator');
const sectionConfigurator = inject('configurator.section');

onMounted(() => {
    sectionConfigurator
        .ofBlock(block)
        .fullWidthNoPadding();
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.CallToAction.Manager' }
</script>
