"use strict";
(self["webpackChunktailwind"] = self["webpackChunktailwind"] || []).push([["src_app_feature_angular_concepts_class-field-decorator_class-field-decorator_component_ts"],{

/***/ 8505:
/*!***************************************************************************************************!*\
  !*** ./src/app/feature/angular/concepts/class-field-decorator/class-field-decorator.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassFieldDecoratorComponent": () => (/* binding */ ClassFieldDecoratorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 7101);
/* harmony import */ var src_app_utils_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/services/unsubscribe.service */ 7369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






const _c0 = ["inputCodeEl"];
const _c1 = ["outputCodeEl"];
const _c2 = ["viewChildCodeEl"];
const _c3 = ["hostBindingCodeEl"];
const _c4 = ["signalInputCodeEl"];
const _c5 = function () {
  return ["typescript"];
};
function ClassFieldDecoratorComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Core Angular Class Field Decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 9)(4, "li")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "@Input()");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ": Declares a property that can receive data from a parent component. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 10)(9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Enables component property binding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Can include aliases, required flag, and transform functions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Angular 19 introduces more robust typing and validation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassFieldDecoratorComponent_div_20_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "@Output()");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, ": Declares an event emitter property that a component can use to emit events. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ul", 10)(32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Uses EventEmitter to emit custom events to parent components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Can specify alias for clearer template binding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Facilitates component communication");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassFieldDecoratorComponent_div_20_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "@ViewChild() / @ViewChildren()");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, ": Provides access to child elements, components, or directives in templates. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ul", 10)(55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Queries the DOM for elements matching a selector");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Can target template reference variables, component types, or directives");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Supports static query option for early access in ngOnInit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassFieldDecoratorComponent_div_20_Template_button_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "@HostBinding() / @HostListener()");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, ": Binds properties and events of the host element. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ul", 10)(78, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "@HostBinding binds to properties, attributes, or classes of the host element");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "@HostListener subscribes to events on the host element");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Useful for directive implementation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassFieldDecoratorComponent_div_20_Template_button_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "br")(97, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Angular 19 Signal-Based Alternatives");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ul", 9)(101, "li")(102, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Signal-Based Inputs and Outputs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "ul", 10)(106, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "input() function replaces @Input() decorator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "output() function replaces @Output() decorator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "model() function provides two-way binding capability");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Improved type safety and runtime validation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Better tree-shaking and performance optimization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassFieldDecoratorComponent_div_20_Template_button_click_116_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](119);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r8.hidden = !_r8.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span", 12, 20)(120, "div", 14)(121, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li")(129, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Key Advantages of Signal-Based APIs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "ul", 10)(133, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Improved reactivity with direct signal integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Enhanced type checking with generics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "More intuitive API for transform functions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Simpler syntax for declaring required inputs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Better performance through optimization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "br")(144, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Other Important Class Field Decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "table", 21)(148, "thead")(149, "tr", 22)(150, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Decorator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Angular 19 Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "tbody")(157, "tr", 24)(158, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "@ContentChild / @ContentChildren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Access projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Supported, no signal alternative yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "tr", 26)(165, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "@Inject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Field-based DI token injection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Supported, functional inject() alternative available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "tr", 24)(172, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "@Optional");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Mark dependencies as optional");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "tr", 26)(179, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "@Self / @SkipSelf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Control injector hierarchy traversal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "tr", 24)(186, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "@Attribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Access host element attribute values");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Supported");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.inputCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.outputCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.viewChildCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.hostBindingCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.signalInputCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c5));
  }
}
function ClassFieldDecoratorComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ol", 27)(2, "li")(3, "strong", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Use Descriptive Property Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 10)(6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Choose clear, descriptive names for decorated properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Use camelCase for property names, following TypeScript conventions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "If using an alias, ensure it's intuitive for template consumers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Document complex properties with JSDoc comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "strong", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Prefer Signal-Based Inputs in Angular 19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ul", 10)(18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Use input() function instead of @Input() decorator for new components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Take advantage of improved type safety with generics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Implement transform functions for data sanitization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Use input.required<T>() for mandatory properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Consider model() for two-way binding scenarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li")(29, "strong", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Properly Type All Inputs and Outputs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ul", 10)(32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Always specify types for Input and Output properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Use generic types with EventEmitter: EventEmitter<T>");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Avoid the any type; use unknown if the type is truly dynamic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Consider using interface or type alias for complex data structures");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Use readonly arrays or objects when appropriate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li")(43, "strong", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Optimize ViewChild and ContentChild Queries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ul", 10)(46, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Specify the read option when querying for a specific token");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Be aware of timing differences between static and dynamic queries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Use @ViewChildren with QueryList for multiple elements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Remember that ContentChild queries elements projected from parent templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "strong", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Implement Change Detection Strategies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ul", 10)(60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Use OnPush change detection for improved performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Understand how inputs trigger change detection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Consider immutable data patterns for OnPush components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Use signal-based inputs for automatic fine-grained updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Be cautious with HostBinding in performance-critical components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Use ", "{", " static: true ", "}", " only when needed in ngOnInit");
  }
}
function ClassFieldDecoratorComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 29)(2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Advantages of Class Field Decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 31)(5, "li")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Declarative API");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ": Clearly identifies the purpose and behavior of properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Simplified Component Communication");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ": Easy to implement parent-child data flow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "DOM Integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ": Provides direct access to template elements and DOM events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Type Safety");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ": Works well with TypeScript's type system");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Template Integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ": Makes binding in templates intuitive and straightforward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Framework Integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, ": Ensures Angular can properly process components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Metadata Preservation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, ": Retains information through the build process");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Challenges with Class Field Decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ul", 31)(36, "li")(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "TypeScript Experimental Feature");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, ": Decorators are still technically experimental");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li")(41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Performance Overhead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, ": Traditional decorators add some runtime cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Debugging Complexity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, ": Errors in decorators can be harder to diagnose");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li")(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Change Detection Complexity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, ": Can trigger unnecessary renders if not careful");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li")(53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Timing Issues");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, ": ViewChild and ContentChild queries have specific lifecycle timing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Migration Effort");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, ": Moving to signal-based alternatives requires refactoring");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li")(61, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Testing Complexity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, ": Some decorators require special handling in tests");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Traditional vs. Angular 19 Signal-Based Patterns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "table", 32)(67, "thead")(68, "tr", 22)(69, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Traditional Pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Angular 19 Signal-Based Pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tbody")(74, "tr", 33)(75, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "@Input() name: string;");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "name = input<string>('');");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "tr", 34)(80, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "id = input.required<string>();");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "tr", 33)(85, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "tr", 34)(90, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "@Output() changed = new EventEmitter<T>();");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "changed = output<T>();");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "tr", 33)(95, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "@Input() value: T;");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "@Output() valueChange = new EventEmitter<T>();");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "value = model<T>(defaultValue);");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("@Input(", "{", " required: true ", "}", ") id!: string;");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("@Input(", "{", " transform: fn ", "}", ") value: T;");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("value = input<T>(defaultValue, ", "{", " transform: fn ", "}", ");");
  }
}
function ClassFieldDecoratorComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 29)(2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Related Angular Concepts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 31)(5, "li")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Component Communication");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ": How data flows between components in Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "TypeScript Decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ": The language feature that enables Angular's field decorators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Angular Signals");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ": The reactive primitive that powers modern input/output APIs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Change Detection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ": How decorated properties affect Angular's update cycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Component Lifecycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ": How ViewChild and ContentChild queries interact with lifecycle hooks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Class Field Decorator FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul", 31)(28, "li")(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Q: Should I use traditional decorators or signal-based APIs in Angular 19?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " A: For new components, prefer signal-based APIs (input(), output(), model()). They offer better performance, type safety, and integration with Angular's reactivity system. For existing components, consider migrating during major refactors. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li")(34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Q: When should I use ViewChild vs ContentChild?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " A: Use ViewChild to access elements defined in the component's own template. Use ContentChild to access elements projected into the component via ng-content. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Q: How do I handle required inputs in Angular 19?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li")(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Q: Can I transform input values in Angular 19?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li")(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Q: How do signal-based inputs affect change detection?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " A: Signal-based inputs integrate with Angular's fine-grained reactivity system, potentially reducing unnecessary re-renders and improving performance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Useful Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ul", 10)(56, "li")(57, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Angular Input Binding Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Angular Output Binding Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li")(63, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Component View Encapsulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li")(66, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Angular Signals Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li")(69, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "TypeScript Decorators Documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" A: With traditional decorators, use @Input(", "{", " required: true ", "}", "). With signal-based APIs, use input.required<T>(). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"](" A: Yes, both @Input(", "{", " transform: fn ", "}", ") and input(defaultValue, ", "{", " transform: fn ", "}", ") support transformation functions that process values before they reach the component. ");
  }
}
class ClassFieldDecoratorComponent extends src_app_utils_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeService {
  constructor() {
    super(...arguments);
    this.selectedTab = 1;
    // Code examples
    this.inputCode = `// Traditional @Input decorator
@Component({
  selector: 'app-user-profile',
  template: \`
    <div class="user-card">
      <h2>{{ name }}</h2>
      <div>Age: {{ age }}</div>
    </div>
  \`
})
export class UserProfileComponent {
  @Input() name: string = '';

  // Input with alias
  @Input('userAge') age: number = 0;

  // Required input (Angular 14+)
  @Input({ required: true }) userId!: string;

  // Transformed input (Angular 16+)
  @Input({ transform: (value: string) => value.toUpperCase() })
  description: string = '';
}`;
    this.outputCode = `@Component({
  selector: 'app-counter',
  template: \`
    <div>
      <h2>Count: {{ count }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="reset()">Reset</button>
    </div>
  \`
})
export class CounterComponent {
  count = 0;

  // Basic output
  @Output() countChanged = new EventEmitter<number>();

  // Output with alias
  @Output('resetEvent') resetTriggered = new EventEmitter<void>();

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  reset() {
    this.count = 0;
    this.resetTriggered.emit();
    this.countChanged.emit(this.count);
  }
}`;
    this.viewChildCode = `@Component({
  selector: 'app-tabbed-panel',
  template: \`
    <div>
      <div #tabHeader class="tab-header">
        <button *ngFor="let tab of tabs" (click)="selectTab(tab)">
          {{ tab.title }}
        </button>
      </div>
      <div class="tab-content">
        <ng-content></ng-content>
      </div>
    </div>
  \`
})
export class TabbedPanelComponent implements AfterViewInit {
  // Reference to a single element
  @ViewChild('tabHeader') tabHeader!: ElementRef;

  // Reference to a component
  @ViewChild(TabComponent) activeTab?: TabComponent;

  // Reference to a directive with specific read option
  @ViewChild('tabHeader', { read: ViewContainerRef })
  headerContainer!: ViewContainerRef;

  // Multiple elements with ViewChildren
  @ViewChildren(TabComponent) allTabs!: QueryList<TabComponent>;

  // Static option for immediate availability
  @ViewChild('staticContent', { static: true })
  staticContent!: ElementRef;

  ngAfterViewInit() {
    console.log('Tab header element:', this.tabHeader.nativeElement);
    this.allTabs.forEach(tab => console.log('Tab:', tab.title));
  }
}`;
    this.hostBindingCode = `@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // Color for the highlight, defaults to yellow
  @Input() highlightColor = 'yellow';

  // Bind to the style.backgroundColor property of the host element
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  // Bind to the class.active property of the host element
  @HostBinding('class.active') isActive = false;

  // Bind to the attr.aria-label property
  @HostBinding('attr.aria-label') ariaLabel = 'Highlighted element';

  // Listen for mouseenter event and apply highlighting
  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightColor;
    this.isActive = true;
  }

  // Listen for mouseleave event and remove highlighting
  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = '';
    this.isActive = false;
  }
}`;
    this.signalInputCode = `// Modern signal-based inputs (Angular 19)
@Component({
  selector: 'app-product-card',
  template: \`
    <div class="product">
      <h2>{{ name() }}</h2>
      <div>Price: {{ price() | currency }}</div>
      <div *ngIf="isOnSale()">ON SALE!</div>
      <button [disabled]="!inStock()" (click)="addToCart()">
        {{ inStock() ? 'Add to Cart' : 'Out of Stock' }}
      </button>
    </div>
  \`
})
export class ProductCardComponent {
  // Basic input signal
  name = input<string>('');

  // Input signal with transform function
  price = input<number>(0, {
    transform: (value: number) => Math.max(0, value)
  });

  // Required input signal
  id = input.required<string>();

  // Input signal with default value
  inStock = input<boolean>(true);

  // Model input (two-way bindable)
  quantity = model<number>(1);

  // Computed value based on input signals
  isOnSale = computed(() => {
    return this.price() < 50;
  });

  // Output signal
  addedToCart = output<{id: string, quantity: number}>();

  addToCart() {
    if (this.inStock()) {
      this.addedToCart.emit({
        id: this.id(),
        quantity: this.quantity()
      });
    }
  }
}`;
  }
  ngOnInit() {
    // Any initialization code if needed
  }
}
ClassFieldDecoratorComponent.ɵfac = /*@__PURE__*/function () {
  let ɵClassFieldDecoratorComponent_BaseFactory;
  return function ClassFieldDecoratorComponent_Factory(t) {
    return (ɵClassFieldDecoratorComponent_BaseFactory || (ɵClassFieldDecoratorComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ClassFieldDecoratorComponent)))(t || ClassFieldDecoratorComponent);
  };
}();
ClassFieldDecoratorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ClassFieldDecoratorComponent,
  selectors: [["app-class-field-decorator"]],
  viewQuery: function ClassFieldDecoratorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.outputCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.viewChildCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.hostBindingCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signalInputCodeEl = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 24,
  vars: 12,
  consts: [[1, "p-4", "text-sm"], [1, "heading-1", "mb-2"], [1, "text-content"], [1, "text-zinc-50", "tw-font-medium"], [1, "flex", "flex-col"], [1, "flex", "border-b", "border-gray-200"], [1, "text-sky-400", "hover:text-rose-400", "font-semibold", "py-2", "px-4", "border-b-2", "border-transparent", "hover:border-gray-500", "focus:outline-none", 3, "click"], [1, "p-4"], [4, "ngIf"], [1, "list-disc", "pl-4", "text-sm"], [1, "list-disc", "pl-4"], [1, "border", "border-rose-400", "rounded-md", "px-1", "text-sky-400", 3, "click"], ["hidden", "", "copyToClipboard", ""], ["inputCodeEl", ""], [1, "flex", "flex-row", "justify-between", "items-center", "bg-gray-900", "px-4", "py-2", "relative", "top-5"], [1, "copy-button-wrapper", "bg-gray-700"], [3, "highlight", "languages"], ["outputCodeEl", ""], ["viewChildCodeEl", ""], ["hostBindingCodeEl", ""], ["signalInputCodeEl", ""], [1, "w-full", "border-collapse", "rounded-lg", "overflow-hidden", "shadow-md"], [1, "bg-gray-800", "text-gray-100"], [1, "py-3", "px-4", "text-left"], [1, "border-b", "border-gray-700", "bg-gray-900", "hover:bg-gray-800", "transition-colors"], [1, "py-3", "px-4"], [1, "border-b", "border-gray-700", "bg-gray-950", "hover:bg-gray-800", "transition-colors"], [1, "list-decimal", "pl-4", "text-sm"], [1, "text-sky-400"], [1, "text-sm"], [1, "font-semibold", "text-sky-400", "mb-2"], [1, "list-disc", "pl-4", "mb-6"], [1, "w-full", "border-collapse", "rounded-lg", "overflow-hidden", "shadow-md", "mb-4"], [1, "border-b", "border-gray-700", "bg-gray-900"], [1, "border-b", "border-gray-700", "bg-gray-950"], ["href", "https://angular.dev/guide/components/inputs", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/components/outputs", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/components/view-encapsulation", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/signals", 1, "text-sky-400", "hover:underline"], ["href", "https://www.typescriptlang.org/docs/handbook/decorators.html", 1, "text-sky-400", "hover:underline"]],
  template: function ClassFieldDecoratorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Class Field Decorators in Angular ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "p")(5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Class Field Decorators");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " in Angular 19 are TypeScript decorators that add metadata to class properties and methods. These decorators enable Angular to understand how properties interact with components, templates, and the DOM, providing essential functionality like property binding, event handling, and DOM access. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassFieldDecoratorComponent_Template_button_click_11_listener() {
        return ctx.selectedTab = 1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Notes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassFieldDecoratorComponent_Template_button_click_13_listener() {
        return ctx.selectedTab = 2;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Best Practices ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassFieldDecoratorComponent_Template_button_click_15_listener() {
        return ctx.selectedTab = 3;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Pros and Cons ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClassFieldDecoratorComponent_Template_button_click_17_listener() {
        return ctx.selectedTab = 4;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Related Topics ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ClassFieldDecoratorComponent_div_20_Template, 192, 15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ClassFieldDecoratorComponent_div_21_Template, 70, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ClassFieldDecoratorComponent_div_22_Template, 101, 6, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ClassFieldDecoratorComponent_div_23_Template, 71, 6, "div", 8);
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
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hbmd1bGFyL2NvbmNlcHRzL2NsYXNzLWZpZWxkLWRlY29yYXRvci9jbGFzcy1maWVsZC1kZWNvcmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsaW5nIGZvciB0aGUgY2xhc3MtZmllbGQtZGVjb3JhdG9yIGNvbXBvbmVudCAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ })

}]);
//# sourceMappingURL=src_app_feature_angular_concepts_class-field-decorator_class-field-decorator_component_ts.js.map