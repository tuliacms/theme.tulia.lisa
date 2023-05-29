<template>
    <div class="block block-nodes">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="btn btn-primary btn-lg btn-icon-right block-news-read-more-btn d-none d-md-block">
                        <Contenteditable v-model="block.data.term_readmore"></Contenteditable>
                        <FontIcon class="btn-icon" v-model="block.data.term_icon"></FontIcon>
                    </div>
                    <p class="lead"><Contenteditable v-model="block.data.intro"></Contenteditable></p>
                    <h2><Contenteditable v-model="block.data.headline"></Contenteditable></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4" v-for="item in nodesNumber" :key="item">
                    <div class="block-node-item">
                        <div class="block-node-image">
                            <img src="https://picsum.photos/id/237/500/250" alt="" @load="$emit('updated')" />
                            <span class="block-node-date">06:33, 22 June 2021</span>
                        </div>
                        <div class="block-node-info">
                            <div class="block-node-title">Cras quis justo condimentum, aliquam diam vel</div>
                            <p class="block-node-description">Suspendisse cursus leo a erat pharetra facilisis. Ut viverra bibendum leo, ut interdum purus fermentum eu. Quisque sit amet convallis risus. Nullam porta dapibus arcu, ut congue ipsum egestas eget.</p>
                            <div class="block-node-read-more"><Contenteditable v-model="block.data.node_readmore"></Contenteditable></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-md-none">
                <div class="col text-center">
                    <div class="btn btn-primary btn-lg btn-icon-right block-news-read-more-btn">
                        <span><Contenteditable v-model="block.data.term_readmore"></Contenteditable></span>
                        <FontIcon v-model="block.data.term_icon"></FontIcon>
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
const extensions = inject('extensions.registry');

const Contenteditable = extensions.editor('Contenteditable');
const FontIcon = extensions.editor('FontIcon');
const nodesNumber = computed(() => {
    let number = parseInt(block.config.number_of_nodes);
    number = number ? number : 3;
    return number >= 12 ? 12 : number;
});
</script>
<script>
export default { name: 'TuliaLisaTheme.Block.NodesList.Editor' }
</script>
