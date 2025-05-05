"use strict";
(self["webpackChunktailwind"] = self["webpackChunktailwind"] || []).push([["src_app_feature_angular_concepts_class-decorator_class-decorator_component_ts"],{

/***/ 4906:
/*!***************************************************************************************!*\
  !*** ./src/app/feature/angular/concepts/class-decorator/class-decorator.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassDecoratorComponent": () => (/* binding */ ClassDecoratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 7101);
/* harmony import */ var src_app_utils_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/services/unsubscribe.service */ 7369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






const _c0 = ["componentCodeEl"];
const _c1 = ["directiveCodeEl"];
const _c2 = ["injectableCodeEl"];
const _c3 = ["pipeCodeEl"];
const _c4 = ["ngModuleCodeEl"];
const _c5 = ["customDecoratorCodeEl"];
const _c6 = function () {
  return ["typescript"];
};
function ClassDecoratorComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Core Angular Class Decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 9)(4, "li")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "@Component");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ": Defines a component, connecting a template, styles, and business logic. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 10)(9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Identifies a class as an Angular component");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Specifies metadata like the selector, template, styles, and change detection strategy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Since Angular 19, standalone components are the preferred approach");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassDecoratorComponent_div_20_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r4.hidden = !_r4.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 12, 13)(19, "div", 14)(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li")(28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "@Directive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, ": Creates a directive that adds behavior to DOM elements without a template. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ul", 10)(32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Marks a class as an Angular directive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Uses a CSS selector to target elements in templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "In Angular 19, standalone directives are fully supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassDecoratorComponent_div_20_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r5.hidden = !_r5.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 12, 17)(42, "div", 14)(43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "@Injectable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, ": Marks a class as available for dependency injection. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ul", 10)(55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Essential for services and other injectable classes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Configures provider scope and tree-shakability");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Angular 19 optimizes DI for better performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassDecoratorComponent_div_20_Template_button_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](64);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r6.hidden = !_r6.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 12, 18)(65, "div", 14)(66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li")(74, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "@Pipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, ": Defines a transformation function for template expressions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ul", 10)(78, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Marks a class as an Angular pipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Must implement the PipeTransform interface");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "In Angular 19, standalone pipes are the preferred approach");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassDecoratorComponent_div_20_Template_button_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](87);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r7.hidden = !_r7.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 12, 19)(88, "div", 14)(89, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li")(97, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "@NgModule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, ": Defines a module that encapsulates related components, directives, pipes, and services. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ul", 10)(101, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Less common in Angular 19 with standalone components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Still useful for organizing large applications and lazy loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Configures elements, imports, providers, and bootstrap components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassDecoratorComponent_div_20_Template_button_click_107_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](110);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r8.hidden = !_r8.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 12, 20)(111, "div", 14)(112, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "br")(120, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Angular 19 Class Decorator Enhancements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "ul", 9)(124, "li")(125, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Functional Pattern for Decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "ul", 10)(129, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Angular 19 emphasizes functional patterns for better tree-shaking");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "New signal-based components use functional alternatives to decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Example: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "input()");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, " function instead of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "@Input()");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " decorator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "li")(142, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Improved Type Safety");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "ul", 10)(146, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Enhanced type checking for decorator metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Better TypeScript integration with decorator factories");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "More accurate error messages for decorator-related issues");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "li")(153, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Performance Optimizations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "ul", 10)(157, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Reduced runtime overhead from decorator processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "More efficient metadata storage and retrieval");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Improved tree-shaking for unused decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "li")(164, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Custom Decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "ul", 10)(168, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Better support for creating custom class decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Simplified decorator composition patterns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Integration with Angular's dependency injection system");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassDecoratorComponent_div_20_Template_button_click_174_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](177);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r9.hidden = !_r9.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "span", 12, 21)(178, "div", 14)(179, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "br")(187, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Class Decorator Metadata Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "table", 22)(191, "thead")(192, "tr", 23)(193, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Decorator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Key Metadata Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Angular 19 Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "tbody")(200, "tr", 25)(201, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "@Component");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "selector, template, templateUrl, styles, styleUrls, changeDetection, standalone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Standalone is now default, signal-based alternatives available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "tr", 27)(208, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "@Injectable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "providedIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Enhanced provider scoping, optimized for DI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "tr", 25)(215, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "@Directive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "selector, standalone, host, providers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Standalone is recommended, improved host binding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "tr", 27)(222, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "@Pipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "name, pure, standalone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Standalone is default, better optimization for pure pipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "tr", 25)(229, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "@NgModule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "declarations, imports, exports, providers, bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Less prominent with standalone components, improved lazy loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.componentCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.directiveCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.injectableCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.pipeCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.ngModuleCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.customDecoratorCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c6));
  }
}
function ClassDecoratorComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ol", 28)(2, "li")(3, "strong", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Prefer Standalone Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 10)(6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Use standalone: true in @Component, @Directive, and @Pipe decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Directly import dependencies in the imports array");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Avoid NgModules when possible for simpler code organization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Take advantage of improved tree-shaking with standalone components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "strong", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Optimize @Injectable Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ul", 10)(18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Use providedIn: 'root' for singleton services across the application");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Use providedIn: 'platform' only for truly application-wide services");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Use providedIn: 'any' for multi-instance lazy-loaded modules");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Consider using providedIn: SomeModule for module-scoped services");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Use explicit providers arrays for component-level services");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li")(29, "strong", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Write Clean, Focused Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ul", 10)(32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Each component should have a single responsibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Keep templates and styles simple and maintainable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Use OnPush change detection strategy for better performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Prefer composition over inheritance for component reuse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Consider using signal-based components for optimal reactivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li")(43, "strong", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Make Decorators Readable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ul", 10)(46, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Use consistent formatting for decorator metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Organize properties alphabetically or by importance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Split complex decorators across multiple lines for readability");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Add comments for non-obvious decorator configurations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Consider extracting complex configuration to constants");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "strong", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Embrace Modern Patterns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ul", 10)(60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Consider signal-based alternatives to traditional decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Use functional patterns when appropriate for better tree-shaking");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Take advantage of type inference improvements in Angular 19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Use explicit typing for decorator metadata where needed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Consider custom decorators for cross-cutting concerns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
}
function ClassDecoratorComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 30)(2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Advantages of Class Decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 32)(5, "li")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Declarative Syntax");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ": Makes it clear what a class's role is in the Angular ecosystem");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Metadata Definition");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ": Provides a clean way to attach configuration to classes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Framework Integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ": Enables Angular to discover and process classes correctly");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Separation of Concerns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ": Keeps configuration separate from implementation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "IDE Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ": Modern editors provide excellent autocompletion and validation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Testability");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, ": Decorators make classes easier to mock and test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Code Organization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, ": Helps maintain a consistent structure across the codebase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Challenges with Class Decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ul", 32)(36, "li")(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "TypeScript Limitations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, ": Decorators are still technically experimental in TypeScript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li")(41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Learning Curve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, ": Understanding all decorator options requires time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Runtime Overhead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, ": Decorators add some processing cost during application startup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li")(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Debugging Complexity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, ": Errors in decorators can be harder to trace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li")(53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Limited Type Safety");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, ": Some decorator metadata isn't fully type-checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Code Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, ": Heavy use of decorators can increase bundle size");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li")(61, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Migration Challenges");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, ": Moving to new patterns requires refactoring");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Traditional vs. Modern Angular 19 Patterns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "table", 33)(67, "thead")(68, "tr", 23)(69, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Traditional Pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Angular 19 Modern Pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tbody")(74, "tr", 34)(75, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "@Component with NgModule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Standalone @Component with direct imports");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "tr", 35)(80, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "@Input() property decorator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "input() signal function");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "tr", 34)(85, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "@Output() with EventEmitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "output() signal function");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "tr", 35)(90, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Two-way binding with @Input/@Output");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "model() signal function");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "tr", 34)(95, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "@Injectable provided in array");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "@Injectable with providedIn configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function ClassDecoratorComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 30)(2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Related Angular Concepts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 32)(5, "li")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "TypeScript Decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ": The language feature that enables Angular decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Metadata Reflection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ": How Angular uses decorators to generate metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Dependency Injection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ": The system that leverages @Injectable decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Standalone Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ": Modern approach to component definition");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Signal-Based APIs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ": Functional alternatives to property decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Class Decorator FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul", 32)(28, "li")(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Q: When should I use NgModules vs. standalone components?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " A: In Angular 19, prefer standalone components for most use cases. NgModules are still useful for organizing large applications and legacy code. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li")(34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Q: What's the difference between providedIn: 'root' and providedIn: 'platform'?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " A: 'root' creates a singleton for the current application, while 'platform' creates a singleton shared across multiple Angular applications that might be running on the same page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Q: Should I migrate from property decorators to signal-based APIs?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " A: For new components, use signal-based APIs. For existing components, consider migrating during major refactors rather than all at once. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li")(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Q: Can I create my own custom class decorators?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " A: Yes, but they won't integrate with Angular's core functionality automatically. Custom decorators are useful for cross-cutting concerns like logging and validation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li")(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Q: How do decorators affect performance?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " A: Decorators add some overhead during application startup but have minimal impact on runtime performance. Angular 19 has optimized decorator processing considerably. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Useful Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ul", 10)(56, "li")(57, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Angular Component Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Angular Dependency Injection Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li")(63, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Directive Composition API");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li")(66, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Angular Signals Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li")(69, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "TypeScript Decorators Documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
}
class ClassDecoratorComponent extends src_app_utils_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeService {
  constructor() {
    super(...arguments);
    this.selectedTab = 1;
    // Code examples
    this.componentCode = `@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  \`,
  styles: [\`
    h1 { color: #336699; }
    p { font-size: 16px; }
  \`]
})
export class ExampleComponent {
  title = 'Example Component';
  description = 'This is a simple component using the @Component decorator';
}`;
    this.directiveCode = `@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() defaultColor = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}`;
    this.injectableCode = `@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = [];

  addItem(item: string): void {
    this.data.push(item);
  }

  getItems(): string[] {
    return [...this.data];
  }
}`;
    this.pipeCode = `@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 25, completeWords: boolean = false, ellipsis: string = '...'): string {
    if (!value) return '';

    if (value.length <= limit) {
      return value;
    }

    if (completeWords) {
      limit = value.substring(0, limit).lastIndexOf(' ');
    }

    return value.substring(0, limit) + ellipsis;
  }
}`;
    this.ngModuleCode = `@NgModule({
  declarations: [
    // Components, directives, and pipes that belong to this module
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    // Other modules this module depends on
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // Services and other providers
    AuthService,
    { provide: API_URL, useValue: 'https://api.example.com' }
  ],
  bootstrap: [AppComponent] // Root component to bootstrap
})
export class AppModule { }`;
    this.customDecoratorCode = `// Creating a custom class decorator
export function LogClass() {
  return function(target: any) {
    // Original constructor
    const original = target;

    // New constructor function
    const newConstructor: any = function(...args: any[]) {
      console.log(\`Creating instance of \${target.name}\`);
      return new original(...args);
    }

    // Copy prototype
    newConstructor.prototype = original.prototype;

    // Return modified constructor
    return newConstructor;
  };
}

// Using the custom decorator
@LogClass()
export class LoggedClass {
  constructor() {
    console.log('LoggedClass instance created');
  }

  doSomething() {
    console.log('Doing something');
  }
}`;
  }
  ngOnInit() {
    // Any initialization code if needed
  }
}
ClassDecoratorComponent.ɵfac = /*@__PURE__*/function () {
  let ɵClassDecoratorComponent_BaseFactory;
  return function ClassDecoratorComponent_Factory(t) {
    return (ɵClassDecoratorComponent_BaseFactory || (ɵClassDecoratorComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ClassDecoratorComponent)))(t || ClassDecoratorComponent);
  };
}();
ClassDecoratorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ClassDecoratorComponent,
  selectors: [["app-class-decorator"]],
  viewQuery: function ClassDecoratorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.componentCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.injectableCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pipeCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ngModuleCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customDecoratorCodeEl = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 24,
  vars: 12,
  consts: [[1, "p-4", "text-sm"], [1, "heading-1", "mb-2"], [1, "text-content"], [1, "text-zinc-50", "tw-font-medium"], [1, "flex", "flex-col"], [1, "flex", "border-b", "border-gray-200"], [1, "text-sky-400", "hover:text-rose-400", "font-semibold", "py-2", "px-4", "border-b-2", "border-transparent", "hover:border-gray-500", "focus:outline-none", 3, "click"], [1, "p-4"], [4, "ngIf"], [1, "list-disc", "pl-4", "text-sm"], [1, "list-disc", "pl-4"], [1, "border", "border-rose-400", "rounded-md", "px-1", "text-sky-400", 3, "click"], ["hidden", "", "copyToClipboard", ""], ["componentCodeEl", ""], [1, "flex", "flex-row", "justify-between", "items-center", "bg-gray-900", "px-4", "py-2", "relative", "top-5"], [1, "copy-button-wrapper", "bg-gray-700"], [3, "highlight", "languages"], ["directiveCodeEl", ""], ["injectableCodeEl", ""], ["pipeCodeEl", ""], ["ngModuleCodeEl", ""], ["customDecoratorCodeEl", ""], [1, "w-full", "border-collapse", "rounded-lg", "overflow-hidden", "shadow-md"], [1, "bg-gray-800", "text-gray-100"], [1, "py-3", "px-4", "text-left"], [1, "border-b", "border-gray-700", "bg-gray-900", "hover:bg-gray-800", "transition-colors"], [1, "py-3", "px-4"], [1, "border-b", "border-gray-700", "bg-gray-950", "hover:bg-gray-800", "transition-colors"], [1, "list-decimal", "pl-4", "text-sm"], [1, "text-sky-400"], [1, "text-sm"], [1, "font-semibold", "text-sky-400", "mb-2"], [1, "list-disc", "pl-4", "mb-6"], [1, "w-full", "border-collapse", "rounded-lg", "overflow-hidden", "shadow-md", "mb-4"], [1, "border-b", "border-gray-700", "bg-gray-900"], [1, "border-b", "border-gray-700", "bg-gray-950"], ["href", "https://angular.dev/guide/components", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/di/dependency-injection", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/directives/directive-composition-api", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/signals", 1, "text-sky-400", "hover:underline"], ["href", "https://www.typescriptlang.org/docs/handbook/decorators.html", 1, "text-sky-400", "hover:underline"]],
  template: function ClassDecoratorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Class Decorators in Angular ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "p")(5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Class Decorators");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " in Angular 19 are TypeScript decorators that add metadata to classes, enabling Angular to understand their intended role and behavior. These decorators are essential building blocks that define components, directives, services, and other core features of Angular applications. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassDecoratorComponent_Template_button_click_11_listener() {
        return ctx.selectedTab = 1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Notes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassDecoratorComponent_Template_button_click_13_listener() {
        return ctx.selectedTab = 2;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Best Practices ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassDecoratorComponent_Template_button_click_15_listener() {
        return ctx.selectedTab = 3;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Pros and Cons ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassDecoratorComponent_Template_button_click_17_listener() {
        return ctx.selectedTab = 4;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Related Topics ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ClassDecoratorComponent_div_20_Template, 235, 18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ClassDecoratorComponent_div_21_Template, 70, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ClassDecoratorComponent_div_22_Template, 99, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ClassDecoratorComponent_div_23_Template, 71, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-rose-300", ctx.selectedTab === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-rose-300", ctx.selectedTab === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-rose-300", ctx.selectedTab === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-rose-300", ctx.selectedTab === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedTab === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedTab === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedTab === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedTab === 4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.HighlightModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hbmd1bGFyL2NvbmNlcHRzL2NsYXNzLWRlY29yYXRvci9jbGFzcy1kZWNvcmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsaW5nIGZvciB0aGUgY2xhc3MtZGVjb3JhdG9yIGNvbXBvbmVudCAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ })

}]);
//# sourceMappingURL=src_app_feature_angular_concepts_class-decorator_class-decorator_component_ts.js.map