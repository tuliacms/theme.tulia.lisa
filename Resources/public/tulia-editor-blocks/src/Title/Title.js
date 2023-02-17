const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Tulia/Lisa',
    framework: 'bootstrap-5',
    code: 'Title',
    name: 'Title',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABkCAAAAACK63LSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAG/SURBVHja7du/K8RxHMfx18ePklKu82thwFEohSgZJOUGg3SuJGWRRTYSJvkRKRZsim6SQVcGcZTcRHHKRjFZKElhEMv3kD/g85HX6zl9vre8P48+3fczfc0HWEtxvQHRRRdddNFFF1100UUXXXTRRRdddNFFJ010xkRnTHTGRGdMdMZEZ0x0xkRnTHTGRGdMdMZEZ0x0xkRnTHTLLWWtf60XTOS/07dNshscPceBR9PkxuyVZm1S5SywH+utAHxYaetyqrZMD4wCr7HODgAoGHDthqv/+oKJYMqHuDF9yZ+iwfzM8rEHi5uwd+q/ax6fLupHtfc0uOwP5p3MRvbLCOhNVdOFE8mHjeXGqB/Y7A6fGVsb+CP3+qKJ+AGEexOH1ma6O/WfvZyXvF8BQACnLVz0e1wHvOWjtaF/g56L4jlvWUlGz6hPtGYDwO5djrWhDl9zWenft/jwW88TgIP2SZ+1+Q5PPbXhOFRe2wkACI3MlwZzL/eyt+xtyOXlttYWm4l667mdut3V26GLGnvjjT7dJ0x0xkRnTHTGRGdMdMZEZ0x0xkRnTHTGRGdMdMZEZ0x0xkRnTHTGRGeMmP4J68hGbzVHuX0AAAAASUVORK5CYII=',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        intro: 'What we do?',
        headline: 'See what we do',
        headline_justify: 'left',
    }
};
