const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lisa',
    framework: 'bootstrap-5',
    code: 'Title',
    name: 'Title',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    intro: 'What we do?',
                    headline: 'See what we do',
                };
            },
        },
        config: {
            state: () => {
                return {
                    headline_justify: 'left',
                };
            },
        },
    },
};
