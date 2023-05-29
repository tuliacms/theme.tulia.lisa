const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lisa',
    framework: 'bootstrap-5',
    code: 'Faq',
    name: 'Faq',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    store: {
        data: {
            state: () => {
                return {
                    intro: 'Frequently Asked Questions',
                    headline: '',
                    entries: [
                        {
                            id: '1',
                            question: 'Morbi sagittis tortor dapibus elit accumsan?',
                            answer: 'Phasellus lobortis tortor pretium, sodales magna at, ullamcorper lorem. Duis porttitor convallis mattis.',
                        },
                        {
                            id: '2',
                            question: 'Morbi pulvinar lobortis rhoncus. Fusce vel sapien sed tellus convallis mattis vel bibendum orci?',
                            answer: 'Vestibulum feugiat, lectus viverra vulputate fermentum, ex magna sollicitudin libero, et efficitur urna mi id dolor. Sed sagittis nec tellus nec malesuada. Quisque non pretium enim. Suspendisse potenti.',
                        },
                    ],
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
