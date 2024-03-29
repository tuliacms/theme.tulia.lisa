const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lisa',
    framework: 'bootstrap-5',
    code: 'tulia-lisa-whatwedoblock',
    name: 'What we do',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    intro: 'What we do',
                    headline: 'Mauris viverra ligula quis sollicitudin volutpat',
                    image_under: {
                        id: null,
                        filename: null
                    },
                    image_above: {
                        id: null,
                        filename: null
                    },
                    content_list: [{
                        id: '1',
                        lead: 'Phasellus tellus arcu',
                        paragraph: 'Sed interdum augue sed laoreet malesuada. Phasellus tellus arcu, aliquam quis sollicitudin eu.',
                    },{
                        id: '2',
                        lead: 'Mauris tincidunt convallis',
                        paragraph: 'Nunc ut dictum quam. Mauris tincidunt convallis lectus sed lacinia.',
                    }],
                };
            },
        },
        config: {
            state: () => {
                return {
                    bgColor: '',
                    padding: '',
                };
            },
        },
    },
};
