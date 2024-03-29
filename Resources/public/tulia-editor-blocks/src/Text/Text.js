const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lisa',
    framework: 'bootstrap-5',
    code: 'Text',
    name: 'Text',
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
                    content: '<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3><p>Nam feugiat convallis elit eget auctor. Praesent mi nisi, tempus at varius ac, fringilla eu neque. Maecenas vitae massa dapibus, mollis elit eu, condimentum magna. Cras non justo et dui sagittis viverra non non est. Donec scelerisque interdum neque, ac semper mi fermentum et. Quisque porta dolor quis efficitur venenatis. Morbi mattis mattis magna, vel euismod sapien blandit non. Integer eu eleifend diam. Nam ullamcorper sem sed enim iaculis posuere.</p>',
                };
            },
        },
        config: {
            state: () => {
                return {
                    bgColor: '',
                    padding: '',
                    headline_justify: 'left',
                };
            },
        },
    },
};
