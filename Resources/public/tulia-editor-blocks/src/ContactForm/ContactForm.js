const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lisa',
    framework: 'bootstrap-5',
    code: 'ContactForm',
    name: 'Contact form',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    intro: 'Any questions?',
                    headline: 'Contact us',
                    content: null,
                };
            },
        },
        config: {
            state: () => {
                return {
                    headline_justify: 'left',
                    form_id: null,
                    bgColor: '',
                    padding: '',
                };
            },
        },
    },
};
