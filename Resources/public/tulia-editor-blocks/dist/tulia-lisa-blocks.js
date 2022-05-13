/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./src/CallToAction/Editor.vue":
/*!*************************************!*\
  !*** ./src/CallToAction/Editor.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_684a11a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=684a11a4 */ "./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_684a11a4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/CallToAction/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);

const Contenteditable = block.extension('Contenteditable');
const FontIcon = block.extension('FontIcon');

const __returned__ = { defineProps, inject, props, block, Contenteditable, FontIcon }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/CallToAction/Manager.vue":
/*!**************************************!*\
  !*** ./src/CallToAction/Manager.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_3dc428f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=3dc428f4 */ "./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_3dc428f4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/CallToAction/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);

block.on('created', () => {
    block.expectsFullWidthSection();
});

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/CallToAction/Render.vue":
/*!*************************************!*\
  !*** ./src/CallToAction/Render.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_0c3af54d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=0c3af54d */ "./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_0c3af54d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/CallToAction/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/CompanyInNumbers/Editor.vue":
/*!*****************************************!*\
  !*** ./src/CompanyInNumbers/Editor.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_4ecbf42b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=4ecbf42b */ "./src/CompanyInNumbers/Editor.vue?vue&type=template&id=4ecbf42b");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/CompanyInNumbers/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_4ecbf42b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/CompanyInNumbers/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Editor.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);
const translator = inject('translator');

const Contenteditable = block.extension('Contenteditable');
const Collection = block.extension('Collection');
const Actions = block.extension('Collection.Actions');

const numbers = new Collection(block.data.numbers, {
    number: 120,
    label: 'Realisations',
    suffix: null,
});

const __returned__ = { defineProps, inject, props, block, translator, Contenteditable, Collection, Actions, numbers }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/CompanyInNumbers/Manager.vue":
/*!******************************************!*\
  !*** ./src/CompanyInNumbers/Manager.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_6a4f4c42__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=6a4f4c42 */ "./src/CompanyInNumbers/Manager.vue?vue&type=template&id=6a4f4c42");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/CompanyInNumbers/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_6a4f4c42__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/CompanyInNumbers/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Manager.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);

block.on('created', () => {
    block.expectsFullWidthSection();
});

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/CompanyInNumbers/Render.vue":
/*!*****************************************!*\
  !*** ./src/CompanyInNumbers/Render.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_1a865058__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=1a865058 */ "./src/CompanyInNumbers/Render.vue?vue&type=template&id=1a865058");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/CompanyInNumbers/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_1a865058__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/CompanyInNumbers/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Render.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Render.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/ContactForm/Editor.vue":
/*!************************************!*\
  !*** ./src/ContactForm/Editor.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_6b3c78b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=6b3c78b1 */ "./src/ContactForm/Editor.vue?vue&type=template&id=6b3c78b1");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/ContactForm/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_6b3c78b1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/ContactForm/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Editor.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);

const WysiwygEditor = block.extension('WysiwygEditor');
const Contenteditable = block.extension('Contenteditable');

const __returned__ = { defineProps, inject, props, block, WysiwygEditor, Contenteditable }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/ContactForm/Manager.vue":
/*!*************************************!*\
  !*** ./src/ContactForm/Manager.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_3c786619__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=3c786619 */ "./src/ContactForm/Manager.vue?vue&type=template&id=3c786619");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/ContactForm/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_3c786619__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/ContactForm/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Manager.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);

const Select = block.control('Select');
const FormSelect = block.control('FormSelect');
const choices = {
    left: 'Left',
    center: 'Center',
    right: 'Right',
};

block.on('created', () => {
    block.expectsFullWidthSection();
});

const __returned__ = { defineProps, inject, props, block, Select, FormSelect, choices }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/ContactForm/Render.vue":
/*!************************************!*\
  !*** ./src/ContactForm/Render.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_0f2d5c5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=0f2d5c5a */ "./src/ContactForm/Render.vue?vue&type=template&id=0f2d5c5a");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/ContactForm/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_0f2d5c5a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/ContactForm/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Render.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Render.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/NodesList/Editor.vue":
/*!**********************************!*\
  !*** ./src/NodesList/Editor.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_dcc8cbb4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=dcc8cbb4 */ "./src/NodesList/Editor.vue?vue&type=template&id=dcc8cbb4");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/NodesList/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_dcc8cbb4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/NodesList/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Editor.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject, computed } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);

const Contenteditable = block.extension('Contenteditable');
const FontIcon = block.extension('FontIcon');
const nodesNumber = computed(() => {
    let number = parseInt(block.data.number_of_nodes);
    number = number ? number : 3;
    return number >= 12 ? 12 : number;
});

const __returned__ = { defineProps, inject, computed, props, block, Contenteditable, FontIcon, nodesNumber }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/NodesList/Manager.vue":
/*!***********************************!*\
  !*** ./src/NodesList/Manager.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_3c051978__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=3c051978 */ "./src/NodesList/Manager.vue?vue&type=template&id=3c051978");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/NodesList/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_3c051978__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/NodesList/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Manager.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);

const TaxonomySelect = block.control('TaxonomySelect');
const Input = block.control('Input');

const __returned__ = { defineProps, inject, props, block, TaxonomySelect, Input }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/NodesList/Render.vue":
/*!**********************************!*\
  !*** ./src/NodesList/Render.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_358c7dcf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=358c7dcf */ "./src/NodesList/Render.vue?vue&type=template&id=358c7dcf");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/NodesList/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_358c7dcf__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/NodesList/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Render.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Render.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);
const DynamicBlock = block.extension('DynamicBlock');

const __returned__ = { defineProps, inject, props, block, DynamicBlock }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/OurServices/Editor.vue":
/*!************************************!*\
  !*** ./src/OurServices/Editor.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_74239e2b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=74239e2b */ "./src/OurServices/Editor.vue?vue&type=template&id=74239e2b");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/OurServices/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_74239e2b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/OurServices/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Editor.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);
const translator = inject('translator');

const Contenteditable = block.extension('Contenteditable');
const FontIcon = block.extension('FontIcon');
const Collection = block.extension('Collection');
const Actions = block.extension('Collection.Actions');

const services = new Collection(block.data.services, {
    icon: 'far fa-money-bill-alt',
    title: 'Sed tempus libero id magna mattis',
    content: 'Sed interdum augue sed laoreet malesuada. Phasellus tellus arcu, aliquam quis.',
    link: null,
});

const __returned__ = { defineProps, inject, props, block, translator, Contenteditable, FontIcon, Collection, Actions, services }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/OurServices/Manager.vue":
/*!*************************************!*\
  !*** ./src/OurServices/Manager.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_5075efdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=5075efdf */ "./src/OurServices/Manager.vue?vue&type=template&id=5075efdf");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/OurServices/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_5075efdf__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/OurServices/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Manager.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);

block.on('created', () => {
    block.expectsFullWidthSection();
});

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/OurServices/Render.vue":
/*!************************************!*\
  !*** ./src/OurServices/Render.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_181481d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=181481d4 */ "./src/OurServices/Render.vue?vue&type=template&id=181481d4");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/OurServices/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_181481d4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/OurServices/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Render.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Render.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/ServicesLight/Editor.vue":
/*!**************************************!*\
  !*** ./src/ServicesLight/Editor.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_9a36e4c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=9a36e4c6 */ "./src/ServicesLight/Editor.vue?vue&type=template&id=9a36e4c6");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/ServicesLight/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_9a36e4c6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/ServicesLight/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Editor.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);
const translator = inject('translator');

const Contenteditable = block.extension('Contenteditable');
const FontIcon = block.extension('FontIcon');
const Collection = block.extension('Collection');
const Actions = block.extension('Collection.Actions');

const services = new Collection(block.data.services, {
    icon: 'far fa-money-bill-alt',
    title: 'Sed tempus libero',
    content: 'Sed augue sed laoreet malesuada. Phasellus tellus arcu, aliquam interdum quis.',
});

const __returned__ = { defineProps, inject, props, block, translator, Contenteditable, FontIcon, Collection, Actions, services }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/ServicesLight/Manager.vue":
/*!***************************************!*\
  !*** ./src/ServicesLight/Manager.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_2c5a22a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=2c5a22a6 */ "./src/ServicesLight/Manager.vue?vue&type=template&id=2c5a22a6");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/ServicesLight/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_2c5a22a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/ServicesLight/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Manager.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/ServicesLight/Render.vue":
/*!**************************************!*\
  !*** ./src/ServicesLight/Render.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_56d57146__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=56d57146 */ "./src/ServicesLight/Render.vue?vue&type=template&id=56d57146");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/ServicesLight/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_56d57146__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/ServicesLight/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Render.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Render.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/Text/Editor.vue":
/*!*****************************!*\
  !*** ./src/Text/Editor.vue ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_9441a474__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=9441a474 */ "./src/Text/Editor.vue?vue&type=template&id=9441a474");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/Text/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_9441a474__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Text/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Editor.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);

const WysiwygEditor = block.extension('WysiwygEditor');
const Contenteditable = block.extension('Contenteditable');

const __returned__ = { defineProps, inject, props, block, WysiwygEditor, Contenteditable }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/Text/Manager.vue":
/*!******************************!*\
  !*** ./src/Text/Manager.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_462c53a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=462c53a4 */ "./src/Text/Manager.vue?vue&type=template&id=462c53a4");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/Text/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_462c53a4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Text/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Manager.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);

const Select = block.control('Select');
const choices = {
    left: 'Left',
    center: 'Center',
    right: 'Right',
};

const __returned__ = { defineProps, inject, props, block, Select, choices }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/Text/Render.vue":
/*!*****************************!*\
  !*** ./src/Text/Render.vue ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_59d0116f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=59d0116f */ "./src/Text/Render.vue?vue&type=template&id=59d0116f");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/Text/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_59d0116f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Text/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Render.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Render.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/WhatWeDoBlock/Editor.vue":
/*!**************************************!*\
  !*** ./src/WhatWeDoBlock/Editor.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_de2b6f76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=de2b6f76 */ "./src/WhatWeDoBlock/Editor.vue?vue&type=template&id=de2b6f76");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/WhatWeDoBlock/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_de2b6f76__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/WhatWeDoBlock/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Editor.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);

const translator = inject('translator');
const ImageEditor = block.extension('BackgroundImage');
const WysiwygEditor = block.extension('WysiwygEditor');
const Contenteditable = block.extension('Contenteditable');
const Collection = block.extension('Collection');
const Actions = block.extension('Collection.Actions');

const contentList = new Collection(block.data.content_list, {
    lead: 'Mauris tincidunt convallis',
    paragraph: 'Nunc ut dictum quam. Mauris tincidunt convallis lectus sed lacinia.',
});

const __returned__ = { defineProps, inject, props, block, translator, ImageEditor, WysiwygEditor, Contenteditable, Collection, Actions, contentList }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/WhatWeDoBlock/Manager.vue":
/*!***************************************!*\
  !*** ./src/WhatWeDoBlock/Manager.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_66f6edf6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=66f6edf6 */ "./src/WhatWeDoBlock/Manager.vue?vue&type=template&id=66f6edf6");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/WhatWeDoBlock/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_66f6edf6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/WhatWeDoBlock/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Manager.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/WhatWeDoBlock/Render.vue":
/*!**************************************!*\
  !*** ./src/WhatWeDoBlock/Render.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_34db2bee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=34db2bee */ "./src/WhatWeDoBlock/Render.vue?vue&type=template&id=34db2bee");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/WhatWeDoBlock/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_extension_theme_Tulia_Lisa_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_34db2bee__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/WhatWeDoBlock/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Render.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Render.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);

const BackgroundImage = block.extension('BackgroundImage');
const imageAbove = new BackgroundImage(block, block.data.image_above, 'above');
const imageUnder = new BackgroundImage(block, block.data.image_under, 'under');

const __returned__ = { defineProps, inject, props, block, BackgroundImage, imageAbove, imageUnder }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************!*\
  !*** ./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************!*\
  !*** ./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/CompanyInNumbers/Editor.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./src/CompanyInNumbers/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/CompanyInNumbers/Manager.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/CompanyInNumbers/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/CompanyInNumbers/Render.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./src/CompanyInNumbers/Render.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/ContactForm/Editor.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************!*\
  !*** ./src/ContactForm/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/ContactForm/Manager.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************!*\
  !*** ./src/ContactForm/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/ContactForm/Render.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************!*\
  !*** ./src/ContactForm/Render.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/NodesList/Editor.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************!*\
  !*** ./src/NodesList/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/NodesList/Manager.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************!*\
  !*** ./src/NodesList/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/NodesList/Render.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************!*\
  !*** ./src/NodesList/Render.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/OurServices/Editor.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************!*\
  !*** ./src/OurServices/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/OurServices/Manager.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************!*\
  !*** ./src/OurServices/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/OurServices/Render.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************!*\
  !*** ./src/OurServices/Render.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/ServicesLight/Editor.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./src/ServicesLight/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/ServicesLight/Manager.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************!*\
  !*** ./src/ServicesLight/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/ServicesLight/Render.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./src/ServicesLight/Render.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Text/Editor.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************!*\
  !*** ./src/Text/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Text/Manager.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************!*\
  !*** ./src/Text/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Text/Render.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************!*\
  !*** ./src/Text/Render.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/WhatWeDoBlock/Editor.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./src/WhatWeDoBlock/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/WhatWeDoBlock/Manager.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************!*\
  !*** ./src/WhatWeDoBlock/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/WhatWeDoBlock/Render.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./src/WhatWeDoBlock/Render.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4":
/*!*******************************************************************!*\
  !*** ./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_684a11a4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_684a11a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=684a11a4 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4");


/***/ }),

/***/ "./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4":
/*!********************************************************************!*\
  !*** ./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_3dc428f4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_3dc428f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=3dc428f4 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4");


/***/ }),

/***/ "./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d":
/*!*******************************************************************!*\
  !*** ./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_0c3af54d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_0c3af54d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=0c3af54d */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d");


/***/ }),

/***/ "./src/CompanyInNumbers/Editor.vue?vue&type=template&id=4ecbf42b":
/*!***********************************************************************!*\
  !*** ./src/CompanyInNumbers/Editor.vue?vue&type=template&id=4ecbf42b ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_4ecbf42b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_4ecbf42b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=4ecbf42b */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Editor.vue?vue&type=template&id=4ecbf42b");


/***/ }),

/***/ "./src/CompanyInNumbers/Manager.vue?vue&type=template&id=6a4f4c42":
/*!************************************************************************!*\
  !*** ./src/CompanyInNumbers/Manager.vue?vue&type=template&id=6a4f4c42 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_6a4f4c42__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_6a4f4c42__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=6a4f4c42 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Manager.vue?vue&type=template&id=6a4f4c42");


/***/ }),

/***/ "./src/CompanyInNumbers/Render.vue?vue&type=template&id=1a865058":
/*!***********************************************************************!*\
  !*** ./src/CompanyInNumbers/Render.vue?vue&type=template&id=1a865058 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_1a865058__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_1a865058__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=1a865058 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Render.vue?vue&type=template&id=1a865058");


/***/ }),

/***/ "./src/ContactForm/Editor.vue?vue&type=template&id=6b3c78b1":
/*!******************************************************************!*\
  !*** ./src/ContactForm/Editor.vue?vue&type=template&id=6b3c78b1 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_6b3c78b1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_6b3c78b1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=6b3c78b1 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Editor.vue?vue&type=template&id=6b3c78b1");


/***/ }),

/***/ "./src/ContactForm/Manager.vue?vue&type=template&id=3c786619":
/*!*******************************************************************!*\
  !*** ./src/ContactForm/Manager.vue?vue&type=template&id=3c786619 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_3c786619__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_3c786619__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=3c786619 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Manager.vue?vue&type=template&id=3c786619");


/***/ }),

/***/ "./src/ContactForm/Render.vue?vue&type=template&id=0f2d5c5a":
/*!******************************************************************!*\
  !*** ./src/ContactForm/Render.vue?vue&type=template&id=0f2d5c5a ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_0f2d5c5a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_0f2d5c5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=0f2d5c5a */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Render.vue?vue&type=template&id=0f2d5c5a");


/***/ }),

/***/ "./src/NodesList/Editor.vue?vue&type=template&id=dcc8cbb4":
/*!****************************************************************!*\
  !*** ./src/NodesList/Editor.vue?vue&type=template&id=dcc8cbb4 ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_dcc8cbb4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_dcc8cbb4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=dcc8cbb4 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Editor.vue?vue&type=template&id=dcc8cbb4");


/***/ }),

/***/ "./src/NodesList/Manager.vue?vue&type=template&id=3c051978":
/*!*****************************************************************!*\
  !*** ./src/NodesList/Manager.vue?vue&type=template&id=3c051978 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_3c051978__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_3c051978__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=3c051978 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Manager.vue?vue&type=template&id=3c051978");


/***/ }),

/***/ "./src/NodesList/Render.vue?vue&type=template&id=358c7dcf":
/*!****************************************************************!*\
  !*** ./src/NodesList/Render.vue?vue&type=template&id=358c7dcf ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_358c7dcf__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_358c7dcf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=358c7dcf */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Render.vue?vue&type=template&id=358c7dcf");


/***/ }),

/***/ "./src/OurServices/Editor.vue?vue&type=template&id=74239e2b":
/*!******************************************************************!*\
  !*** ./src/OurServices/Editor.vue?vue&type=template&id=74239e2b ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_74239e2b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_74239e2b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=74239e2b */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Editor.vue?vue&type=template&id=74239e2b");


/***/ }),

/***/ "./src/OurServices/Manager.vue?vue&type=template&id=5075efdf":
/*!*******************************************************************!*\
  !*** ./src/OurServices/Manager.vue?vue&type=template&id=5075efdf ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_5075efdf__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_5075efdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=5075efdf */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Manager.vue?vue&type=template&id=5075efdf");


/***/ }),

/***/ "./src/OurServices/Render.vue?vue&type=template&id=181481d4":
/*!******************************************************************!*\
  !*** ./src/OurServices/Render.vue?vue&type=template&id=181481d4 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_181481d4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_181481d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=181481d4 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Render.vue?vue&type=template&id=181481d4");


/***/ }),

/***/ "./src/ServicesLight/Editor.vue?vue&type=template&id=9a36e4c6":
/*!********************************************************************!*\
  !*** ./src/ServicesLight/Editor.vue?vue&type=template&id=9a36e4c6 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_9a36e4c6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_9a36e4c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=9a36e4c6 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Editor.vue?vue&type=template&id=9a36e4c6");


/***/ }),

/***/ "./src/ServicesLight/Manager.vue?vue&type=template&id=2c5a22a6":
/*!*********************************************************************!*\
  !*** ./src/ServicesLight/Manager.vue?vue&type=template&id=2c5a22a6 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_2c5a22a6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_2c5a22a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=2c5a22a6 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Manager.vue?vue&type=template&id=2c5a22a6");


/***/ }),

/***/ "./src/ServicesLight/Render.vue?vue&type=template&id=56d57146":
/*!********************************************************************!*\
  !*** ./src/ServicesLight/Render.vue?vue&type=template&id=56d57146 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_56d57146__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_56d57146__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=56d57146 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Render.vue?vue&type=template&id=56d57146");


/***/ }),

/***/ "./src/Text/Editor.vue?vue&type=template&id=9441a474":
/*!***********************************************************!*\
  !*** ./src/Text/Editor.vue?vue&type=template&id=9441a474 ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_9441a474__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_9441a474__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=9441a474 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Editor.vue?vue&type=template&id=9441a474");


/***/ }),

/***/ "./src/Text/Manager.vue?vue&type=template&id=462c53a4":
/*!************************************************************!*\
  !*** ./src/Text/Manager.vue?vue&type=template&id=462c53a4 ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_462c53a4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_462c53a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=462c53a4 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Manager.vue?vue&type=template&id=462c53a4");


/***/ }),

/***/ "./src/Text/Render.vue?vue&type=template&id=59d0116f":
/*!***********************************************************!*\
  !*** ./src/Text/Render.vue?vue&type=template&id=59d0116f ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_59d0116f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_59d0116f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=59d0116f */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Render.vue?vue&type=template&id=59d0116f");


/***/ }),

/***/ "./src/WhatWeDoBlock/Editor.vue?vue&type=template&id=de2b6f76":
/*!********************************************************************!*\
  !*** ./src/WhatWeDoBlock/Editor.vue?vue&type=template&id=de2b6f76 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_de2b6f76__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_de2b6f76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=de2b6f76 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Editor.vue?vue&type=template&id=de2b6f76");


/***/ }),

/***/ "./src/WhatWeDoBlock/Manager.vue?vue&type=template&id=66f6edf6":
/*!*********************************************************************!*\
  !*** ./src/WhatWeDoBlock/Manager.vue?vue&type=template&id=66f6edf6 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_66f6edf6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_66f6edf6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=66f6edf6 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Manager.vue?vue&type=template&id=66f6edf6");


/***/ }),

/***/ "./src/WhatWeDoBlock/Render.vue?vue&type=template&id=34db2bee":
/*!********************************************************************!*\
  !*** ./src/WhatWeDoBlock/Render.vue?vue&type=template&id=34db2bee ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_34db2bee__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_34db2bee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=34db2bee */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Render.vue?vue&type=template&id=34db2bee");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4 ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-call-to-action" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col" }
const _hoisted_5 = { class: "block-inner" }
const _hoisted_6 = { class: "block-text" }
const _hoisted_7 = { class: "block-button" }
const _hoisted_8 = { class: "btn btn-primary btn-lg btn-inversed btn-icon-right" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontIcon"], {
                class: "block-icon",
                modelValue: $setup.block.data.bgIcon,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.bgIcon) = $event))
              }, null, 8 /* PROPS */, ["modelValue"]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                modelValue: $setup.block.data.content,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.content) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                  modelValue: $setup.block.data.btn.label,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.block.data.btn.label) = $event))
                }, null, 8 /* PROPS */, ["modelValue"]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontIcon"], {
                  class: "btn-icon",
                  modelValue: $setup.block.data.btn.icon,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.block.data.btn.icon) = $event))
                }, null, 8 /* PROPS */, ["modelValue"])
              ])
            ])
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4 ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-call-to-action" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col" }
const _hoisted_5 = { class: "block-inner" }
const _hoisted_6 = { class: "block-text" }
const _hoisted_7 = { class: "block-button" }
const _hoisted_8 = {
  href: "#",
  class: "btn btn-primary btn-lg btn-inversed btn-icon-right"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`block-icon ` + $setup.block.data.bgIcon)
              }, null, 2 /* CLASS */),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.content), 1 /* TEXT */)
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_8, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.btn.label) + " ", 1 /* TEXT */),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`btn-icon ` + $setup.block.data.btn.icon)
                }, null, 2 /* CLASS */)
              ])
            ])
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Editor.vue?vue&type=template&id=4ecbf42b":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Editor.vue?vue&type=template&id=4ecbf42b ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-bg-lightgray block-company-in-numbers" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col" }
const _hoisted_5 = { class: "lead" }
const _hoisted_6 = { class: "block-numbers row" }
const _hoisted_7 = { class: "block-number-item-inner" }
const _hoisted_8 = { class: "block-number" }
const _hoisted_9 = { class: "block-number-counter" }
const _hoisted_10 = { class: "block-number-label" }
const _hoisted_11 = { class: "block-number-item col-12 col-sm-6 col-xl-3" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
              modelValue: $setup.block.data.intro,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.intro) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
              modelValue: $setup.block.data.headline,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.headline) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.numbers.collection, (number) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: number.id,
                class: "block-number-item col-12 col-sm-6 col-xl-3"
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                        modelValue: number.number,
                        "onUpdate:modelValue": $event => ((number.number) = $event)
                      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                    {% if number.number_label_after is defined and number.number_label_after is not empty %}\n                                    <span class=\"block-number-after\">{{ number.number_label_after|default|raw }}</span>\n                                    {% endif %}")
                  ]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                      modelValue: number.label,
                      "onUpdate:modelValue": $event => ((number.label) = $event)
                    }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
                    actions: "moveBackward,moveForward,remove",
                    collection: $setup.numbers,
                    item: number
                  }, null, 8 /* PROPS */, ["collection", "item"])
                ])
              ]))
            }), 128 /* KEYED_FRAGMENT */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
                actions: "add",
                collection: $setup.numbers
              }, null, 8 /* PROPS */, ["collection"])
            ])
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Manager.vue?vue&type=template&id=6a4f4c42":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Manager.vue?vue&type=template&id=6a4f4c42 ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Render.vue?vue&type=template&id=1a865058":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CompanyInNumbers/Render.vue?vue&type=template&id=1a865058 ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-bg-lightgray block-company-in-numbers" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col" }
const _hoisted_5 = { class: "lead" }
const _hoisted_6 = { class: "block-numbers row" }
const _hoisted_7 = { class: "block-number-item-inner" }
const _hoisted_8 = { class: "block-number" }
const _hoisted_9 = { class: "block-number-counter" }
const _hoisted_10 = {
  key: 0,
  class: "block-number-after"
}
const _hoisted_11 = { class: "block-number-label" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.intro), 1 /* TEXT */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.headline), 1 /* TEXT */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.block.data.numbers, (number) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: number.id,
                class: "block-number-item col-12 col-sm-6 col-xl-3"
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(number.number), 1 /* TEXT */),
                    (number.suffix)
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(number.suffix), 1 /* TEXT */))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                  ]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(number.label), 1 /* TEXT */)
                ])
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Editor.vue?vue&type=template&id=6b3c78b1":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Editor.vue?vue&type=template&id=6b3c78b1 ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-bg-lightgray block-contact" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col" }
const _hoisted_5 = { class: "tulia-container-max-width" }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "card" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "card-body" }, " Here will be rendered form. ")
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ 'lead': true, 'text-center': $setup.block.data.headline_justify === 'center', 'text-end': $setup.block.data.headline_justify === 'right' })
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                modelValue: $setup.block.data.intro,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.intro) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ], 2 /* CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ 'text-center': $setup.block.data.headline_justify === 'center', 'text-end': $setup.block.data.headline_justify === 'right' })
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                modelValue: $setup.block.data.headline,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.headline) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ], 2 /* CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["WysiwygEditor"], {
              modelValue: $setup.block.data.content,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.block.data.content) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            _hoisted_6
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Manager.vue?vue&type=template&id=3c786619":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Manager.vue?vue&type=template&id=3c786619 ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Select"], {
      modelValue: $setup.block.data.headline_justify,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.headline_justify) = $event)),
      choices: $setup.choices,
      label: "Headline align"
    }, null, 8 /* PROPS */, ["modelValue"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FormSelect"], {
      modelValue: $setup.block.data.form_id,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.form_id) = $event)),
      label: "Form"
    }, null, 8 /* PROPS */, ["modelValue"])
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Render.vue?vue&type=template&id=0f2d5c5a":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ContactForm/Render.vue?vue&type=template&id=0f2d5c5a ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-bg-lightgray block-contact" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col" }
const _hoisted_5 = { class: "tulia-container-max-width" }
const _hoisted_6 = ["innerHTML"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ 'lead': true, 'text-center': $setup.block.data.headline_justify === 'center', 'text-end': $setup.block.data.headline_justify === 'right' })
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.intro), 3 /* TEXT, CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ 'text-center': $setup.block.data.headline_justify === 'center', 'text-end': $setup.block.data.headline_justify === 'right' })
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.headline), 3 /* TEXT, CLASS */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              innerHTML: $setup.block.data.content
            }, null, 8 /* PROPS */, _hoisted_6),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" [contact_form id=\"" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.form_id) + "\"] ", 1 /* TEXT */)
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Editor.vue?vue&type=template&id=dcc8cbb4":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Editor.vue?vue&type=template&id=dcc8cbb4 ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-nodes" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col" }
const _hoisted_5 = { class: "btn btn-primary btn-lg btn-icon-right block-news-read-more-btn d-none d-md-block" }
const _hoisted_6 = { class: "lead" }
const _hoisted_7 = { class: "row" }
const _hoisted_8 = { class: "block-node-item" }
const _hoisted_9 = { class: "block-node-image" }
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "block-node-date" }, "06:33, 22 June 2021", -1 /* HOISTED */)
const _hoisted_11 = { class: "block-node-info" }
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "block-node-title" }, "Cras quis justo condimentum, aliquam diam vel", -1 /* HOISTED */)
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", { class: "block-node-description" }, "Suspendisse cursus leo a erat pharetra facilisis. Ut viverra bibendum leo, ut interdum purus fermentum eu. Quisque sit amet convallis risus. Nullam porta dapibus arcu, ut congue ipsum egestas eget.", -1 /* HOISTED */)
const _hoisted_14 = { class: "block-node-read-more" }
const _hoisted_15 = { class: "row d-md-none" }
const _hoisted_16 = { class: "col text-center" }
const _hoisted_17 = { class: "btn btn-primary btn-lg btn-icon-right block-news-read-more-btn" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
              modelValue: $setup.block.data.taxonomy_readmore,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.taxonomy_readmore) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontIcon"], {
              class: "btn-icon",
              modelValue: $setup.block.data.taxonomy_icon,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.taxonomy_icon) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
              modelValue: $setup.block.data.intro,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.block.data.intro) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
              modelValue: $setup.block.data.headline,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.block.data.headline) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ])
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.nodesNumber, (item) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            class: "col-12 col-md-4",
            key: item
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                  src: "https://picsum.photos/id/237/500/250",
                  alt: "",
                  onLoad: _cache[4] || (_cache[4] = $event => (_ctx.$emit('updated')))
                }, null, 32 /* HYDRATE_EVENTS */),
                _hoisted_10
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
                _hoisted_12,
                _hoisted_13,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                    modelValue: $setup.block.data.node_readmore,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.block.data.node_readmore) = $event))
                  }, null, 8 /* PROPS */, ["modelValue"])
                ])
              ])
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                modelValue: $setup.block.data.taxonomy_readmore,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($setup.block.data.taxonomy_readmore) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontIcon"], {
              modelValue: $setup.block.data.taxonomy_icon,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($setup.block.data.taxonomy_icon) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Manager.vue?vue&type=template&id=3c051978":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Manager.vue?vue&type=template&id=3c051978 ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TaxonomySelect"], {
      modelValue: $setup.block.data.taxonomy,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.taxonomy) = $event)),
      label: "Category of nodes"
    }, null, 8 /* PROPS */, ["modelValue"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Input"], {
      modelValue: $setup.block.data.number_of_nodes,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.number_of_nodes) = $event)),
      label: "Number of nodes"
    }, null, 8 /* PROPS */, ["modelValue"])
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Render.vue?vue&type=template&id=358c7dcf":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/NodesList/Render.vue?vue&type=template&id=358c7dcf ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["DynamicBlock"], {
    type: "theme_lisa_nodes_from_taxonomy",
    data: $setup.block.data
  }, null, 8 /* PROPS */, ["data"]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Editor.vue?vue&type=template&id=74239e2b":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Editor.vue?vue&type=template&id=74239e2b ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-services block-bg-dark" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col-12 col-lg-6" }
const _hoisted_5 = { class: "lead" }
const _hoisted_6 = { class: "col-12 col-lg-6" }
const _hoisted_7 = { class: "services-slogan" }
const _hoisted_8 = { class: "services-collection" }
const _hoisted_9 = { class: "row" }
const _hoisted_10 = { class: "service-item" }
const _hoisted_11 = { class: "service-icon" }
const _hoisted_12 = { class: "mb-3" }
const _hoisted_13 = { class: "mb-3" }
const _hoisted_14 = ["onUpdate:modelValue"]
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "form-text" }, "Left empty if element should not be linked.", -1 /* HOISTED */)
const _hoisted_16 = { class: "col-12 col-sm-12 col-md-6 col-lg-4" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
              modelValue: $setup.block.data.intro,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.intro) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
              modelValue: $setup.block.data.headline,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.headline) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
              modelValue: $setup.block.data.short_text,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.block.data.short_text) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ])
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.services.collection, (service) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              class: "col-12 col-sm-12 col-md-6 col-lg-4",
              key: service.id
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontIcon"], {
                    modelValue: service.icon,
                    "onUpdate:modelValue": $event => ((service.icon) = $event)
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                    modelValue: service.title,
                    "onUpdate:modelValue": $event => ((service.title) = $event)
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                    modelValue: service.content,
                    "onUpdate:modelValue": $event => ((service.content) = $event)
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                    type: "email",
                    class: "form-control form-control-sm",
                    placeholder: "Link address",
                    "onUpdate:modelValue": $event => ((service.link) = $event)
                  }, null, 8 /* PROPS */, _hoisted_14), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, service.link]
                  ]),
                  _hoisted_15
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
                  actions: "moveBackward,moveForward,remove",
                  collection: $setup.services,
                  item: service
                }, null, 8 /* PROPS */, ["collection", "item"])
              ])
            ]))
          }), 128 /* KEYED_FRAGMENT */)),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
              actions: "add",
              collection: $setup.services
            }, null, 8 /* PROPS */, ["collection"])
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Manager.vue?vue&type=template&id=5075efdf":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Manager.vue?vue&type=template&id=5075efdf ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Render.vue?vue&type=template&id=181481d4":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/OurServices/Render.vue?vue&type=template&id=181481d4 ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-services block-bg-dark" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col-12 col-lg-6" }
const _hoisted_5 = { class: "lead" }
const _hoisted_6 = { class: "col-12 col-lg-6" }
const _hoisted_7 = { class: "services-slogan" }
const _hoisted_8 = { class: "services-collection" }
const _hoisted_9 = { class: "row" }
const _hoisted_10 = ["href"]
const _hoisted_11 = { class: "service-icon" }
const _hoisted_12 = { class: "mb-3" }
const _hoisted_13 = {
  key: 1,
  class: "service-item service-item-hoverable"
}
const _hoisted_14 = { class: "service-icon" }
const _hoisted_15 = { class: "mb-3" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.intro), 1 /* TEXT */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.headline), 1 /* TEXT */)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.short_text), 1 /* TEXT */)
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.block.data.services, (service, key) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              class: "col-12 col-sm-12 col-md-6 col-lg-4",
              key: key
            }, [
              (service.link)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
                    key: 0,
                    href: service.link,
                    class: "service-item service-item-hoverable"
                  }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(service.icon)
                      }, null, 2 /* CLASS */)
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(service.title), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(service.content), 1 /* TEXT */)
                  ], 8 /* PROPS */, _hoisted_10))
                : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(service.icon)
                      }, null, 2 /* CLASS */)
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(service.title), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(service.content), 1 /* TEXT */)
                  ]))
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Editor.vue?vue&type=template&id=9a36e4c6":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Editor.vue?vue&type=template&id=9a36e4c6 ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-services-light" }
const _hoisted_2 = { class: "services-collection" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "service-item" }
const _hoisted_5 = { class: "service-icon" }
const _hoisted_6 = { class: "col-12 col-lg-4 service-column" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.services.collection, (service) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: service.id,
            class: "col-12 col-lg-4 service-column"
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontIcon"], {
                  modelValue: service.icon,
                  "onUpdate:modelValue": $event => ((service.icon) = $event)
                }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                  modelValue: service.title,
                  "onUpdate:modelValue": $event => ((service.title) = $event)
                }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                  modelValue: service.content,
                  "onUpdate:modelValue": $event => ((service.content) = $event)
                }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
                actions: "moveBackward,moveForward,remove",
                collection: $setup.services,
                item: service
              }, null, 8 /* PROPS */, ["collection", "item"])
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
            actions: "add",
            collection: $setup.services
          }, null, 8 /* PROPS */, ["collection"])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Manager.vue?vue&type=template&id=2c5a22a6":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Manager.vue?vue&type=template&id=2c5a22a6 ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Render.vue?vue&type=template&id=56d57146":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/ServicesLight/Render.vue?vue&type=template&id=56d57146 ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-services-light" }
const _hoisted_2 = { class: "services-collection" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "service-item" }
const _hoisted_5 = { class: "service-icon" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.block.data.services, (service, key) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: key,
            class: "col-12 col-lg-4 service-column"
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(service.icon)
                }, null, 2 /* CLASS */)
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(service.title), 1 /* TEXT */),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(service.content), 1 /* TEXT */)
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Editor.vue?vue&type=template&id=9441a474":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Editor.vue?vue&type=template&id=9441a474 ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-text" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ 'lead': true, 'text-center': $setup.block.data.headline_justify === 'center', 'text-end': $setup.block.data.headline_justify === 'right' })
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
              modelValue: $setup.block.data.intro,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.intro) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ], 2 /* CLASS */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ 'text-center': $setup.block.data.headline_justify === 'center', 'text-end': $setup.block.data.headline_justify === 'right' })
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
              modelValue: $setup.block.data.headline,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.headline) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ], 2 /* CLASS */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["WysiwygEditor"], {
            modelValue: $setup.block.data.content,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.block.data.content) = $event))
          }, null, 8 /* PROPS */, ["modelValue"])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Manager.vue?vue&type=template&id=462c53a4":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Manager.vue?vue&type=template&id=462c53a4 ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Select"], {
    modelValue: $setup.block.data.headline_justify,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.headline_justify) = $event)),
    choices: $setup.choices,
    label: "Headline align"
  }, null, 8 /* PROPS */, ["modelValue"]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Render.vue?vue&type=template&id=59d0116f":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Text/Render.vue?vue&type=template&id=59d0116f ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-text" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col" }
const _hoisted_5 = ["innerHTML"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ 'lead': true, 'text-center': $setup.block.data.headline_justify === 'center', 'text-end': $setup.block.data.headline_justify === 'right' })
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.intro), 3 /* TEXT, CLASS */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({ 'text-center': $setup.block.data.headline_justify === 'center', 'text-end': $setup.block.data.headline_justify === 'right' })
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.headline), 3 /* TEXT, CLASS */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            innerHTML: $setup.block.data.content
          }, null, 8 /* PROPS */, _hoisted_5)
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Editor.vue?vue&type=template&id=de2b6f76":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Editor.vue?vue&type=template&id=de2b6f76 ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-what-we-do" }
const _hoisted_2 = { class: "container-xxl" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col-12 col-lg-6 order-lg-1" }
const _hoisted_5 = { class: "block-content" }
const _hoisted_6 = { class: "lead" }
const _hoisted_7 = { class: "mb-2 d-block" }
const _hoisted_8 = { class: "col-12 col-lg-6 order-lg-0 block-images" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                modelValue: $setup.block.data.intro,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.intro) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                modelValue: $setup.block.data.headline,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.headline) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["WysiwygEditor"], {
              modelValue: $setup.block.data.content,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.block.data.content) = $event))
            }, null, 8 /* PROPS */, ["modelValue"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.contentList.collection, (item) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                  key: item.id
                }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", _hoisted_7, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                      modelValue: item.lead,
                      "onUpdate:modelValue": $event => ((item.lead) = $event)
                    }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                    modelValue: item.paragraph,
                    "onUpdate:modelValue": $event => ((item.paragraph) = $event)
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
                    actions: "moveUp,moveDown,remove",
                    collection: $setup.contentList,
                    item: item
                  }, null, 8 /* PROPS */, ["collection", "item"])
                ]))
              }), 128 /* KEYED_FRAGMENT */)),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
                  actions: "add",
                  collection: $setup.contentList
                }, null, 8 /* PROPS */, ["collection"])
              ])
            ])
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ImageEditor"], {
            class: "block-image block-image-main",
            modelValue: $setup.block.data.image_above,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.block.data.image_above) = $event)),
            placement: "above"
          }, null, 8 /* PROPS */, ["modelValue"]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ImageEditor"], {
            class: "block-image block-image-sub",
            modelValue: $setup.block.data.image_under,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.block.data.image_under) = $event)),
            placement: "under"
          }, null, 8 /* PROPS */, ["modelValue"])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Manager.vue?vue&type=template&id=66f6edf6":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Manager.vue?vue&type=template&id=66f6edf6 ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Render.vue?vue&type=template&id=34db2bee":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/WhatWeDoBlock/Render.vue?vue&type=template&id=34db2bee ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block block-what-we-do" }
const _hoisted_2 = { class: "row" }
const _hoisted_3 = { class: "col-12 col-lg-6 order-lg-1" }
const _hoisted_4 = { class: "block-content" }
const _hoisted_5 = { class: "lead" }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)
const _hoisted_7 = { class: "col-12 col-lg-6 order-lg-0 block-images" }
const _hoisted_8 = ["id"]
const _hoisted_9 = ["id"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.intro), 1 /* TEXT */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.headline), 1 /* TEXT */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.block.data.content_list, (item, key) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", { key: key }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.lead), 1 /* TEXT */),
                _hoisted_6,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.paragraph), 1 /* TEXT */)
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          class: "block-image block-image-main",
          id: $setup.imageAbove.id
        }, null, 8 /* PROPS */, _hoisted_8),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          class: "block-image block-image-sub",
          id: $setup.imageUnder.id
        }, null, 8 /* PROPS */, _hoisted_9)
      ])
    ])
  ]))
}

/***/ }),

/***/ "./src/CallToAction/CallToAction.js":
/*!******************************************!*\
  !*** ./src/CallToAction/CallToAction.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/CallToAction/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/CallToAction/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/CallToAction/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    code: 'CallToAction',
    name: 'Call to action',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABuCAMAAAA5xf5aAAAAwFBMVEU+V7b////+/+9Yjuh+a7dhm+xJadLc/v9/xPn++vP9++j759pCVse4lbtTWLZJZr1qYLaGx/pEYclMWrfp/f/a9f/+//b53dZyY7by/v/C9/6z6P1qpe1LbsRndL2QgLzt9Pj99eizxeXq3eNMcdhWb71nWbbOqsSrk8FYZLfN/P+P0vyDtOniwMqggbjH7/vK2O/Mw9ip0vZUgN710dH27Omeqdtsktpbfcy2pcvCnsB0tvS+ttGXlch7peTdz9dgfLyOAAADPElEQVR42u2ba1faQBCGZ02hYLVRLqGpQCCIAgoiCuL9//+rzmRN94RcKoeGc5q+zxeyJCT77MzOLh9CAAAAAAAAAAAAAAAAAAAAIH9sv6eKQc+3aSt8VRx82oqixFzo0VaoIgF1qEMd6lCHOtSLA9ShDnWoQx3q/5Z6dTCfz3sqnYKqV1+6FNC5bqoUiql+O6bf1K5dlUgR1asjHfD1ekiClRz4v6k+eOVH2Q8LFeHgC1lKHVP5q9qFe6L2J81nQawD3+WLxP+uma+680gflNxM9b5XP93C2RkNS1upH4eBNilgubmqXxLV3ubzW4/a2VFv1Wkb9YMfJOp9359/Nj2o7UY7RpU81b99p/KNzvtmDuqfpvrFBNmkQbmZo/oT0ZVpVR+71HnrndBzRF0PkXD0k+twl6jzYDolX9gPNzOy9B1kaeqxiXDFv5PQLV/HRGspJ4d88/cuN842g167URH6J0Sn+ak7M6pNjLlHRDZ16lTZVF92pRYO1xNH5mSdO3pmRk9+VBuTJcHTZytecPlwodVbY25JRks2BEdiuhGCUsJctHJTF8FzU8Kn3LmGGshopya8XOOqwZjuGuGUkVLc96TvkqS8Hi9XzTDhRV0GpHwWVK4rua885DI6kQ88ObdBi7hz+1F3ZroxzVL/uOaSjiTs5ogdS5yjYZwi6i3tKWeDJzb4+ILakcrAd5GtnB5QZySzZnDBKbmfhBdbLZmmbq65D6Mkl0xCVRZ9TlCf6tFxPLbWN+ApbxJcN2moi0nYZPk6N3Mvc7urH+6mfkGMUTfN/SxumQmvJbITXoQsNzvh06K+V3WzpbnWW5rMMiez02r8qcw9mTLn8ZjGy1yKujNLVOeH7GkjGy5ucXVhJD2bOPJhxxc3W9RFMqASjCmrRhe3kpuizuOSpG419vb3pfo45C3Ne3Sum97V6XySuqXhBDdbGukyF+zaIralSVFX90nqFRWneH9a+ycxddn1xCmeuppG1NODXkB19T6WQE/08iCHyeZFVFfV29Vq8VF/Viu/oRIppPomUIc61KEOdahDHepQh7oqElCHOtShjjee8J7bf/52IwAAAAAAAAAAAAAAAAAAwC78Al1Rc4Jb1Vv+AAAAAElFTkSuQmCC',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        content: 'Vivamus non sapien eu nibh semper dignissim a non purus.',
        bgIcon: 'fas fa-credit-card',
        btn: {
            icon: 'fas fa-headphones',
            label: 'Call to Action'
        }
    }
});


/***/ }),

/***/ "./src/CompanyInNumbers/CompanyInNumbers.js":
/*!**************************************************!*\
  !*** ./src/CompanyInNumbers/CompanyInNumbers.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/CompanyInNumbers/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/CompanyInNumbers/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/CompanyInNumbers/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    code: 'CompanyInNumbers',
    name: 'Company in numbers',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABuCAMAAAA5xf5aAAAAn1BMVEXz8/Pr6+uMmtDS1uRAWbjl5ORugcatra8FBAi7w97l5+zb3+eirtdMZLwRDQvLy8xZb7+XlpivuduUotK/vb2SjYpiaHjDyuGenqLM0uOppaR6cWUnKC7g3dp2iMiJjJgUFx/T0tG8wcm2trigmpWHf3czMjUtJh+EhYhcXWJhdsFARE0gGhRTTkeAkcu5s6yzqZpoX1NJQjhzdX1MUVv4X291AAAEp0lEQVR42uzFwQ3AQAgDQaK8QH7BA6X/RuM67na8kgMAAAAAAAAAAJxkM99OX6dbZVZcoiUXGs3XrVnFNcqzKp97Aj87ddMqJwyFAfi4kBymcEIhBhkT4mdiiDJ+/f/f1jhz2zt00XZVvJBnYzi+B3wXJkmSr6DwksM74b2Bv7vv8KGP8YHBu5nB9VU4O2rh04JqU7d/WKx/hlYswUl4RwaujyRoksMB81gcmwHY6jjN/RR4H2ZbKK83r47bw4aYCLMSMTSbszq33slndWqdLAKs5lwZlQcKzt+EVexhvRydbeF6NBrIJ78qcLJC0wI4G8dFzVwYsJhshYLCHY21jGLiu5OrelD7rI6+wiZWV5uaZFWDlQOWFCridPRktmNQPfqOZKnhgqaQP3BcVf78+GjFNheVgtkOtXZyQUE70O48nIlskw1OAV7Vy+VVXTs8t12sDtO+YEtGT9KFwsQz9H4a4YIWIgzfClT4Ub2xSDUjReZX9VpRW6HFV3WYkf1WHQTJHhV9Vq8dtQPZ46xu5+mavz4vWQZwFx1vOjjlrORxKqDpMsE107TfW8hYJ86E4NmsIIpvmdbnLhcQx/AMMHg0mt0YjysgSh7P8dHB15TTCO+2+oqX1n+RQ5IkSZIkSZIkSZIkf5b9aLdsehsHgTAs8ARkMAofsbBdhSiNI0U+OIf9//9tx7SbSHtYATm0q/JUwulhPPPoBZJ8dsWlyAu1r7Z93Rx5ofSL2pJvoE6+izr5ueo19Z+oXlP/ieo19See+rgy1klCRIfP9Bk83fD4YWVrUzC/cBRxBerSxTnbwKgsSl1SAHxFA5ppWAlZgS3QJc/QgdJaWzIqFZSS+epSAb6A5atbBWwzBx2AiZLUWxWiqRVEaCAN6gumMtR9fFIYcQpXor4WbXixhKjOlCQWbFHqY/sIWSt8S0uIQw8iEtVb7zFspQkuDMvy1ce2KTjrngDbygMuQMvO+kO9BRqt0ccSaVM3PIAeSUxAL4JYkauuAKArOOuxZ7NZCxVKUn+qe7XIh7qgzKepd6MF9lC3jIpMdTZ6Dc3r6uWpj0rLTSVueE9kmz4Dg+eGbzNTjyfEgi1Uf2748tSl0g0+RnBRJXUGKT/uiBVkrEUy1f3HjVGoTpiKBkU3fGCwhJYsuIbgUZuu4JJncLA6Bo54WJwu+nLDQgpa5KrLEEAFRywwp7QsSb1lGy0J8emJpHpxJD11t+ili+/RbCQFqdug9SpJtjrboFi/6NDU3/D1N3xNvab+L/N+2CH3/bZyXDfSZziczR6L9udYlzb/jt+Pn312fzh8PtPaHg3H2lh2PuOnwtTfbn1/6g3vJ3P6xU+zuc08Xf1skH6YrtP1xvtjWnT309WYW499etPz64wTmBv+mffrlNT2sCcGuQ63fppv06kw9ek+8KnnF27mYeYD/nMwGTuvPw/cXPaGD9OxP6epH9/nw9BjkZguE3+bhsuFTxd+5wfznpj6Zeazwephz4f9VfynZ/1Qb/h6w9fUa+o19Zr6a+rt2GQz2lg6+iaftilv277W9m+ko9k48VHb0XzsV7WtVCqVSqVSqVQqlUqlUqlUKl/Nb5x/fk+IfI5JAAAAAElFTkSuQmCC',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        intro: 'Our history',
        headline: 'Our Company In Numbers',
        numbers: [{
            id: '1',
            number: 120,
            label: 'Realisations',
            suffix: null,
        },{
            id: '2',
            number: 50,
            label: 'Workers',
            suffix: null,
        },{
            id: '3',
            number: 5,
            label: 'Years experience',
            suffix: null,
        },{
            id: '4',
            number: 10,
            label: 'Countries',
            suffix: null,
        }]
    }
});


/***/ }),

/***/ "./src/ContactForm/ContactForm.js":
/*!****************************************!*\
  !*** ./src/ContactForm/ContactForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/ContactForm/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/ContactForm/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/ContactForm/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    code: 'ContactForm',
    name: 'Contact form',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        intro: 'Any questions?',
        headline: 'Contact us',
        headline_justify: 'left',
        content: null,
        form_id: null
    }
});


/***/ }),

/***/ "./src/NodesList/NodesList.js":
/*!************************************!*\
  !*** ./src/NodesList/NodesList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/NodesList/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/NodesList/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/NodesList/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    code: 'NodesList',
    name: 'Nodes list',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        intro: 'Recent news',
        headline: 'Read What We Do Recent',
        taxonomy: null,
        number_of_nodes: 3,
        node_readmore: 'Read more',
        taxonomy_readmore: 'Read more',
        taxonomy_icon: 'fas fa-chevron-right',
    }
});


/***/ }),

/***/ "./src/OurServices/OurServices.js":
/*!****************************************!*\
  !*** ./src/OurServices/OurServices.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/OurServices/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/OurServices/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/OurServices/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    code: 'OurServices',
    name: 'Our services',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABuCAMAAAA5xf5aAAAAb1BMVEUyMjI9PT1NTE1dXl1WVVVmZmd4dnOAgIH///9ubm+empb49/SkoqKIiIhwbGaTjISAfHe6trKxr62VlJWNj5LJwbejqK91eYJscXqEipOytr3Y083W3Onl6fHK0NqUmqTe3d3Dxcrw8/nt6eStp5+halufAAAHk0lEQVR42uyYi27qMAxAbSdtvQYorWgL9EEf/P83XicBdidt0q7UTuySM2o7ThbtrBmdgEAgEAgEAoHA/wD6CwWJkiW8Bjo5qe1W1WpTbw9RlqjDdgc/AJFL+N6wJb6P30f0sfnprfsC9PEL9Sw5HFKl0iJJ9SY+vW3iAn4AEiNEkkRov0DbiBLBjsjPSrJLEcGt8gl9bRfKpPYnVWoE30QX6bFUS3qmk+yctUvOyWcbkJzpfeSXgp+QGsnPgW/4IWgJ+NgDQLL2F9rOc6k/3lYQXPaX60m41/cS/urfV7rCxlt6zN2D66Nf8kzugRcHv6gfrZW4ZPAXNGib9DmC4xWgisfrx2fNOQM8EyQpeKgacy3tYVcNu3/SRfvSIIHQ69mCUACb7n/5mmxeAexLl25Bs3JVl0NrtIzaEm4QZ1Z9xosUbQoIlnZIe6OPnNac0n2bb+DfjP0jSRA70pJ8H10H3Lxt03rqeGYTg4S95kjkxNBoNtllhnY2hupp7sqWeQ9Qc9SaUhl1MHMEoKWneMOOXW9K7Bqjv6Muel6dHN5WdB8g3B7MLoKwhnrN8dkkJq6M4sYoANEZ56rprtA2R5O1jerKiFMEwGk0BzM2yhRjY9ftgMz1wPsTJ5VJp6RrIoTvgPRh9KG/Pl5d6xOrSoTURdQHpw49p9qwgrakKetKkhenIFy4gZZTxUWyt7+JXF84rlkdOapMttVdCr8E7Jk57mZTUDtPhea4b9AZErQzePXKDKaEzsTuPGRQscLRDLkMT2w4B68eTcOw+z3qQFprESJrJYUG1Hg7duQvQtAkGRWCQH4S9G2obMN/G0r9VP8zBgKBQCAQCAQCgUAgEPh14FI893a45uf76MKzbge4sjq+rvoL3/UXVg8H/gm3C+qfNPDOMgc+Six7XEwdE1pJHbtysyk2m7Zc5mft0zEvmnOJy2yHSFO2lnpDcDorqJdSj85Znas+W2a7Y6MnE62kfhX7Sw5QLHPge/YYWkbdGLvZkNMK6qVYVxlQvtBd54GZh24h9Wg+GC7e9Cp3ndO3ZBO/jc0y6vWgmnTcX664yHa0o6lc6x3+D/vmtts2DARR7szsEiQoWbJUX/ISFMj/f2PpJDUatHXdxA+9eCws1rS0mgNRKz5Y8SreaEmzn8dk22a36vD4rPtz/Y7+x6Hf1/B/YLk7+n3CfztgOMUe3grEOe3b1V7Pf8M6iynp/ej2NcN374RA9lL/Vfpd9G0gkFvaeTDnEkGwMC15F5g4lSk5hk3a59Dk+1wmy+WC13VsmZmRPXlPzPLs5VEZkylOP/TP7D3iKnR8wrZkN8+ZxYgc5tHjGJGWwkxy66ezBBkcfw/dd23I0dJxqPtpWR+4HWvOadm2Yc6PUR91rGWTluXQ1OpDPWyiXZjwa3Bz5O4pL6kenzq/z8u6q4caqeZWWi1D1EV1DbsKvT21+VjHlo+xMf+8j3ndlE3F0LqlVoZNnesRe85L7aXtt9APgw0YxiQfKHJebS2ZiWU/2erwKdEGJhIafP08ou98wSv7ZitGMXFQ9zKEF8fGkLDx3ZTHowp7Jfp19w/pA9ZR9JySwyINpKccieR2zGP4YLbOh8k9PtTmmC6J+lBfgttN25z5Bd/XopsZbtLhmYw827nEcj066T3YS3oePJ/T3tvhT/0rx9yyB27wNFoy87YwfEJuzpJDaWbW8DiV8UCbRp844dpyNilzWbKPh7ngVPowGeB9kGybCOby9F70ZZcbaj3EZhhvgP6IVmttsRy20eq6jaipHtmqT33cEEs9tpKvLYdhie2yPFT043Kb2rI7MD307tZ1jLp96sbfiw4BRQRV7AYTHgVy9QgUwQkoCcVkpJAMgMOuv+phbgBFCAXuECwxOaDRSiOK8b9cyOJPWMje1/D/I/p/fNX/RnR7k38nw4+PumbC24URO8er0O0nHvARdAcVRjmpQsiNhAgySSJdfFYxUXSKEFmkH3slCRIJxeCE90CTQ6QbvEggaZQL8hEUL6Hjxdhp8yQC5DceCH82KIA08KTkIsypX6ODFE0Q+WxKxq4QmUAIEkmIMgAUQbFLsh97BSkhkQYRkgOmwlMOoySeMkB65gBwCd341RhkQhe7QJAvvimBeEUHntFFEnjvvW73Dv9PtzmYvf3+Zie7UOJyX7K3Q3ahxV2JbvaNJZyyD6IzHARUZEguhAEJBGAJheiiaOiiXbGGf72RnTAJcAAGgEYJAmQpKJkkMxN0kv0M3SBQggFGygB+aecMViOGYSBqzZsJ+JL//9xCCik5lE0hsElX7yJj8NiDkNDJUakGgWAFyyqXNiWM6rT1cuIAoYwmUCzSFoCZaeQk8DpNFjgAlkEEKkCRVbFhAGERLhyQ0K9yIDQtSwJiktjDiidWYgIpw2JYY11V67XHd9R6/eGNqp7h39Hhj+tjpzyE03LHs/viltYNVhhGoSwImhITlyEKBp2Uk7E1LcUSfMdJ3cj63uGzMZhZkYmJgASNQFYWsM9aTzDZRzaxQGJuZP1HT6/065/W+v3kusMfdi5jPCzrV/K0rG/c8YKnWe+sf6b167hSrn9YbJqmaZqmaZrn8gXDvkkCstSeewAAAABJRU5ErkJggg==',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        intro: 'Our Services',
        headline: 'Look What We Offer',
        short_text: 'Ded nec finibus nulla. Fusce rhoncus dui eu nunc molestie, eget aliquet ligula mollis.',
        services: [{
            id: '1',
            icon: 'far fa-money-bill-alt',
            title: 'Sed tempus libero id magna mattis',
            content: 'Sed interdum augue sed laoreet malesuada. Phasellus tellus arcu, aliquam quis.',
            link: null,
        },{
            id: '2',
            icon: 'fas fa-shuttle-van',
            title: 'Proin ac dolor egestas',
            content: 'Nunc ut quam. Mauris tincidunt convallis sed lacinia. Mauris viverra volutpat.',
            link: null,
        },{
            id: '3',
            icon: 'fas fa-fighter-jet',
            title: 'Mauris viverra ligula quis',
            content: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque iaculis.',
            link: null,
        }]
    }
});


/***/ }),

/***/ "./src/ServicesLight/ServicesLight.js":
/*!********************************************!*\
  !*** ./src/ServicesLight/ServicesLight.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/ServicesLight/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/ServicesLight/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/ServicesLight/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    code: 'ServicesLight',
    name: 'Services Light',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        services: [{
            id: '1',
            icon: 'far fa-money-bill-alt',
            title: 'Sed tempus libero',
            content: 'Sed augue sed laoreet malesuada. Phasellus tellus arcu, aliquam interdum quis.',
        },{
            id: '2',
            icon: 'fas fa-shuttle-van',
            title: 'Proin ac dolor egestas',
            content: 'Nunc ut quam. Mauris tincidunt convallis sed lacinia. Mauris viverra volutpat.',
        },{
            id: '3',
            icon: 'fas fa-fighter-jet',
            title: 'Mauris viverra ligula quis',
            content: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque iaculis.',
        }]
    }
});


/***/ }),

/***/ "./src/Text/Text.js":
/*!**************************!*\
  !*** ./src/Text/Text.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/Text/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/Text/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/Text/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    code: 'Text',
    name: 'Text',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        intro: 'What we do?',
        headline: 'See what we do',
        headline_justify: 'left',
        content: '<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3><p>Nam feugiat convallis elit eget auctor. Praesent mi nisi, tempus at varius ac, fringilla eu neque. Maecenas vitae massa dapibus, mollis elit eu, condimentum magna. Cras non justo et dui sagittis viverra non non est. Donec scelerisque interdum neque, ac semper mi fermentum et. Quisque porta dolor quis efficitur venenatis. Morbi mattis mattis magna, vel euismod sapien blandit non. Integer eu eleifend diam. Nam ullamcorper sem sed enim iaculis posuere.</p>'
    }
});


/***/ }),

/***/ "./src/WhatWeDoBlock/WhatWeDoBlock.js":
/*!********************************************!*\
  !*** ./src/WhatWeDoBlock/WhatWeDoBlock.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/WhatWeDoBlock/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/WhatWeDoBlock/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/WhatWeDoBlock/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    code: 'tulia-lisa-whatwedoblock',
    name: 'What we do',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
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
        },]
    }
});


/***/ }),

/***/ "TuliaEditor":
/*!******************************!*\
  !*** external "TuliaEditor" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["TuliaEditor"];

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = window["Vue"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
const TuliaEditor = __webpack_require__(/*! TuliaEditor */ "TuliaEditor");

TuliaEditor.block((__webpack_require__(/*! ./WhatWeDoBlock/WhatWeDoBlock.js */ "./src/WhatWeDoBlock/WhatWeDoBlock.js")["default"]));
TuliaEditor.block((__webpack_require__(/*! ./OurServices/OurServices.js */ "./src/OurServices/OurServices.js")["default"]));
TuliaEditor.block((__webpack_require__(/*! ./CallToAction/CallToAction.js */ "./src/CallToAction/CallToAction.js")["default"]));
TuliaEditor.block((__webpack_require__(/*! ./ServicesLight/ServicesLight.js */ "./src/ServicesLight/ServicesLight.js")["default"]));
TuliaEditor.block((__webpack_require__(/*! ./CompanyInNumbers/CompanyInNumbers.js */ "./src/CompanyInNumbers/CompanyInNumbers.js")["default"]));
TuliaEditor.block((__webpack_require__(/*! ./NodesList/NodesList.js */ "./src/NodesList/NodesList.js")["default"]));
TuliaEditor.block((__webpack_require__(/*! ./Text/Text.js */ "./src/Text/Text.js")["default"]));
TuliaEditor.block((__webpack_require__(/*! ./ContactForm/ContactForm.js */ "./src/ContactForm/ContactForm.js")["default"]));

})();

window.TuliaLisaThemeBlocks = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=tulia-lisa-blocks.js.map