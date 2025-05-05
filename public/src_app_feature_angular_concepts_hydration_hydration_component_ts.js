"use strict";
(self["webpackChunktailwind"] = self["webpackChunktailwind"] || []).push([["src_app_feature_angular_concepts_hydration_hydration_component_ts"],{

/***/ 9562:
/*!***************************************************************************!*\
  !*** ./src/app/feature/angular/concepts/hydration/hydration.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HydrationComponent": () => (/* binding */ HydrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-highlightjs */ 7101);
/* harmony import */ var src_app_utils_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/services/unsubscribe.service */ 7369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);







const _c0 = ["notesRef"];
const _c1 = ["bestRef"];
const _c2 = ["prosConsRef"];
const _c3 = ["topicsRef"];
function HydrationComponent_div_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function HydrationComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HydrationComponent_div_21_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6);
  }
}
function HydrationComponent_div_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function HydrationComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HydrationComponent_div_22_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r8);
  }
}
function HydrationComponent_div_23_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function HydrationComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HydrationComponent_div_23_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r10);
  }
}
function HydrationComponent_div_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function HydrationComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HydrationComponent_div_24_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4);
  }
}
const _c4 = function () {
  return ["typescript"];
};
function HydrationComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "What is Hydration?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 16)(3, "li")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Server-to-Client Transition");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, ": Hydration connects server-rendered HTML with client-side JavaScript, making static content interactive. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Improved Initial Load Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, ": Users see content immediately while interactivity is progressively added. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "DOM Reuse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ": Angular reuses existing DOM nodes rather than recreating them, reducing layout shifts and improving performance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "State Preservation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ": Application state from server rendering is preserved during client-side hydration. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br")(20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Angular 19 Hydration Enhancements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ol", 17)(24, "li")(25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Selective Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ul", 18)(29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Fine-grained control over which components are hydrated and when.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Ability to set hydration modes ('full', 'lazy', 'none') at the component level.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Priority-based hydration for critical UI elements.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Signal-Aware Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ul", 18)(40, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Intelligent hydration based on signal usage in components.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Only parts of components that use signals are hydrated, reducing processing overhead.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Better integration with Angular's reactivity system.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li")(47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Performance Optimizations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ul", 18)(51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "More efficient DOM node matching algorithms for faster hydration.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Reduced memory footprint during the hydration process.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Improved metrics and debugging tools for hydration performance.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li")(58, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Advanced Hydration Strategies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ul", 18)(62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Custom hydration strategy API for tailored hydration behavior.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Event-based and visibility-based hydration triggers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Progressive hydration patterns for complex applications.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li")(69, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Developer Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ul", 18)(73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Enhanced debugging tools for hydration in Angular DevTools.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Clear error messages for hydration mismatches.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Simplified configuration with sensible defaults.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "br")(80, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Basic Hydration Setup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HydrationComponent_ng_template_25_Template_button_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](86);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r16.hidden = !_r16.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 20, 21)(87, "div", 22)(88, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "br")(97, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Custom Hydration Strategy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HydrationComponent_ng_template_25_Template_button_click_100_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](103);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r17.hidden = !_r17.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 20, 25)(104, "div", 22)(105, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "br")(114, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Component-Level Hydration Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HydrationComponent_ng_template_25_Template_button_click_117_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](120);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r18.hidden = !_r18.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span", 20, 26)(121, "div", 22)(122, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "br")(131, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Angular 19 Hydration Enhancements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HydrationComponent_ng_template_25_Template_button_click_134_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](137);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r19.hidden = !_r19.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "span", 20, 27)(138, "div", 22)(139, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "br")(148, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Hydration Performance Optimization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HydrationComponent_ng_template_25_Template_button_click_151_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](154);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r20.hidden = !_r20.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "span", 20, 28)(155, "div", 22)(156, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "br")(165, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Hydration Performance Comparison");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "table", 29)(169, "thead")(170, "tr", 30)(171, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Technique");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Time to Interactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Bundle Size Impact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Memory Usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "tbody")(180, "tr", 32)(181, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "No Hydration (CSR only)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Slow (blank until JS loads)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "No additional impact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "High (rebuilds entire DOM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "tr", 34)(190, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Full Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Medium (visible but delayed interactivity)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Medium increase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Medium (reuses DOM but processes all components)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "tr", 32)(199, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Partial Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Fast (critical UI interactive quickly)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Small increase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Low (processes only what's needed)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "tr", 35)(208, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Signal-Aware Hydration (Angular 19)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Very Fast (optimized for interactive elements)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Minimal increase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Very Low (targeted hydration based on signals)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r5.basicHydrationCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r5.customHydrationStrategyCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r5.componentLevelHydrationCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r5.v19HydrationEnhancementsCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r5.hydrationPerformanceCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c4));
  }
}
function HydrationComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 36)(1, "li")(2, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Implement Selective Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 18)(5, "li")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Analyze Component Interactivity Needs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ": Categorize components as static (no hydration), interactive (full hydration), or conditionally interactive (lazy hydration). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Prioritize Above-the-Fold Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ": Set higher hydration priority for components visible in the initial viewport. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Use Appropriate Hydration Modes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ": Apply the right hydration mode (full, lazy, none) based on component needs using the hydration option in @Component. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Optimize State Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul", 18)(21, "li")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Minimize Serialized State");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ": Only transfer essential state needed for hydration to reduce payload size. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Use TransferState API");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, ": Leverage Angular's TransferState to efficiently pass data from server to client. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Structure Data for Efficient Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, ": Organize application state in a way that allows for partial hydration of only needed segments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li")(34, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Leverage Signal-Aware Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ul", 18)(37, "li")(38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Use Signals for Interactive State");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, ": Prefer signals for state that requires immediate hydration. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Isolate Signal Dependencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, ": Structure components to isolate signal-dependent parts for more efficient hydration. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li")(46, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Combine with Reactive Patterns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, ": Integrate signal-based reactivity with hydration for optimal performance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li")(50, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Monitor and Debug Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ul", 18)(53, "li")(54, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Use Angular DevTools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, ": Enable hydration debugging in Angular DevTools to visualize hydration status and performance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li")(58, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Track Hydration Metrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, ": Implement metrics collection to measure hydration times and component counts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li")(62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Test on Actual Devices");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, ": Verify hydration performance on representative devices, especially lower-powered mobile devices. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li")(66, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Implement Progressive Enhancement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ul", 18)(69, "li")(70, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Design for Non-Hydrated State");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, ": Ensure content is usable even before hydration completes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li")(74, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Add Visual Indicators");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, ": Provide subtle indicators for elements that will become interactive after hydration. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li")(78, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Handle Hydration Failures Gracefully");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, ": Implement fallback strategies for cases where hydration fails or is delayed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function HydrationComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Pros: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ol", 38)(4, "li")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Improved User Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 18)(8, "li")(9, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Faster Initial Content Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ": Users see content immediately while interactivity is progressively added. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Reduced Content Shifting");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ": By reusing server-rendered DOM, hydration minimizes layout shifts during loading. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Smoother Transition to Interactivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, ": Angular 19 enables seamless transition from static content to interactive application. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Enhanced Performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ul", 18)(24, "li")(25, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Optimized Bundle Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, ": Selective hydration allows smaller initial JavaScript bundles focused on critical functionality. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li")(29, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Reduced CPU Usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, ": Signal-aware hydration minimizes unnecessary component processing, reducing CPU load. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Lower Memory Consumption");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ": Reusing DOM nodes and selective hydration reduces memory usage compared to full client-side rendering. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Better SEO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ul", 18)(40, "li")(41, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Search Engine Visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, ": Server-rendered content is more reliably indexed by search engines. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Improved Social Media Sharing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, ": Ensures properly rendered content for social media platform crawlers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li")(49, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Accessible to More Crawlers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, ": Content is available to crawlers that may not execute JavaScript. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li")(53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Developer Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ul", 18)(56, "li")(57, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Fine-Grained Hydration Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, ": Angular 19 offers unprecedented control over what gets hydrated and when. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li")(61, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Customizable Strategies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, ": The ability to implement custom hydration strategies tailored to application needs. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li")(65, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Better Debugging Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, ": Angular DevTools integration provides visibility into the hydration process. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "br")(69, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Cons: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ol", 38)(74, "li")(75, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Increased Complexity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ul", 18)(78, "li")(79, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "More Complex Architecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, ": Requires server-side rendering setup in addition to client-side application. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li")(83, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Hydration Strategy Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, ": Developers need to carefully plan which components to hydrate and when. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li")(87, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Learning Curve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, ": New concepts and APIs to learn for effective implementation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li")(91, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Potential Hydration Mismatches");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "ul", 18)(94, "li")(95, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Server/Client Consistency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, ": Code must ensure server and client rendering produce identical output to avoid hydration errors. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li")(99, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Dynamic Content Challenges");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, ": Content that depends on client-specific factors can cause hydration mismatches. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li")(103, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Error Handling Complexity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, ": Debugging hydration errors can be more challenging than standard rendering issues. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li")(107, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Development and Testing Overhead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "ul", 18)(110, "li")(111, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Dual-Environment Testing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, ": Applications must be tested in both server and client environments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li")(115, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Development Setup Complexity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, ": Local development environment must support server-side rendering. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li")(119, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "More Edge Cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, ": More scenarios to test, including various hydration paths and progressive enhancement. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li")(123, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Resource Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "ul", 18)(126, "li")(127, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Server Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, ": Server-side rendering requires more server CPU and memory than serving static files. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "li")(131, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Initial Setup Investment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, ": More upfront development time to configure SSR and hydration correctly. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "li")(135, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Deployment Complexity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, ": Deployment pipelines need to account for both server and client builds. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function HydrationComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 38)(1, "li")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Server-Side Rendering (SSR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 18)(5, "li")(6, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ": The process of rendering application HTML on the server before sending it to the client. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Relation to Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ": Hydration builds upon server-rendered content, making it interactive after it's displayed to the user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Partial Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 18)(17, "li")(18, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ": Selectively hydrating only parts of an application that need interactivity, rather than the entire application. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Relation to Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ": An optimization technique that applies hydration strategically to improve performance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Islands Architecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ul", 18)(29, "li")(30, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, ": A design pattern where interactive \"islands\" exist within largely static content. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li")(34, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Relation to Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, ": Selective hydration enables islands architecture by allowing specific components to be hydrated independently. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li")(38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Progressive Enhancement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ul", 18)(41, "li")(42, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, ": Building applications that work without JavaScript, then enhancing with JavaScript when available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li")(46, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Relation to Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, ": Hydration is a form of progressive enhancement, starting with static content and adding interactivity. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li")(50, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Signal-Based Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ul", 18)(53, "li")(54, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, ": Components built using Angular's signals reactivity system. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li")(58, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Relation to Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, ": Signal-aware hydration optimizes the hydration process for components using signals. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li")(62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Deferrable Views");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ul", 18)(65, "li")(66, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, ": Angular's feature for lazy-loading content based on various triggers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li")(70, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Relation to Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, ": Can be combined with hydration strategies for optimal loading and interactivity patterns. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li")(74, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Performance Metrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ul", 18)(77, "li")(78, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, ": Measurements like Time to First Contentful Paint (FCP) and Time to Interactive (TTI). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li")(82, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Relation to Hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, ": Hydration strategies significantly impact these metrics, especially TTI. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class HydrationComponent extends src_app_utils_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeService {
  constructor(http) {
    super();
    this.http = http;
    this.selectedTab = 1;
    // Code examples for hydration
    this.basicHydrationCode = `// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration() // Enable application-wide hydration
  ]
};`;
    this.customHydrationStrategyCode = `// custom-hydration-strategy.ts
import { HydrationFeature, HydrationStrategy } from '@angular/core';

export class PrioritizedHydrationStrategy implements HydrationStrategy {
  // Determine if a component should be hydrated
  shouldHydrate(componentId: string, descriptor: any): boolean {
    // Check component priority markers from the descriptor
    if (descriptor?.priority === 'critical') {
      return true; // Always hydrate critical components
    }

    // Delay non-critical components
    if (descriptor?.priority === 'low') {
      return false; // Don't hydrate initially
    }

    return true; // Default to hydrate
  }

  // Called when the strategy decides not to hydrate a component initially
  scheduleHydration(componentId: string, descriptor: any): void {
    if (descriptor?.priority === 'low') {
      // Schedule low-priority hydration after a delay or on user interaction
      setTimeout(() => {
        // Trigger hydration for this component
        this.hydrateComponent(componentId);
      }, 3000); // Delay by 3 seconds
    }
  }

  // Abstract method - would be implemented by Angular
  private hydrateComponent(id: string): void {
    // Angular's internal method to trigger hydration for a specific component
  }
}

// In your app.config.ts
import { provideHydrationFeatures } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideClientHydration(
      provideHydrationFeatures([
        { strategy: PrioritizedHydrationStrategy }
      ])
    )
  ]
};`;
    this.componentLevelHydrationCode = `// In Angular 19, you can control hydration at the component level
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-static-content',
  standalone: true,
  template: \`
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  \`,
  // This component doesn't need interactivity, so disable hydration
  hydration: { mode: 'none' }
})
export class StaticContentComponent {
  title = 'About Our Company';
  description = 'We provide solutions for modern web applications.';
}

@Component({
  selector: 'app-interactive-widget',
  standalone: true,
  template: \`
    <div class="widget">
      <button (click)="increment()">Clicks: {{ count() }}</button>
    </div>
  \`,
  // This component needs immediate interactivity
  hydration: { mode: 'full' }
})
export class InteractiveWidgetComponent {
  count = signal(0);

  increment() {
    this.count.update(v => v + 1);
  }
}

@Component({
  selector: 'app-lazy-content',
  standalone: true,
  template: \`
    <div class="lazy-section">
      <div *ngFor="let item of items">
        <h3>{{ item.title }}</h3>
        <button (click)="selectItem(item)">Select</button>
      </div>
    </div>
  \`,
  // This component will be hydrated when it becomes visible
  hydration: { mode: 'lazy' }
})
export class LazyContentComponent {
  items = [...]; // Some data

  selectItem(item: any) {
    console.log('Selected:', item);
  }
}`;
    this.v19HydrationEnhancementsCode = `// Angular 19 Hydration Enhancements
import { Component, signal } from '@angular/core';

// 1. Fine-grained hydration strategies
@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: \`
    <!-- Critical UI that needs immediate hydration -->
    <app-header hydration="immediate"></app-header>

    <!-- Content can be hydrated when visible -->
    <app-content hydration="visible"></app-content>

    <!-- Static content never needs hydration -->
    <app-footer hydration="none"></app-footer>
  \`
})
export class DashboardComponent {}

// 2. Signal-based selective hydration
@Component({
  selector: 'app-signal-aware',
  standalone: true,
  template: \`
    <!-- Only this part gets hydrated since it uses signals -->
    <div>Count: {{ count() }}</div>

    <!-- This content doesn't depend on signals and won't be hydrated -->
    <div>Static content</div>
  \`,
  // New in Angular 19: Smart signal-aware hydration
  hydration: {
    mode: 'smart',
    signalAware: true
  }
})
export class SignalAwareComponent {
  count = signal(0);
}

// 3. Hydration debugging enhancements
// In your main.ts
import { enableDebugTools } from '@angular/platform-browser';

if (environment.development) {
  enableDebugTools(appRef.components[0], {
    hydration: true // Enable hydration debugging
  });
}

// 4. Automatic hydration optimization with tree-shaking
@Component({
  // Angular 19 automatically optimizes the hydration process
  // by including only the necessary code for hydration
  hydration: {
    optimizeBundles: true
  }
})
export class OptimizedComponent {}`;
    this.hydrationPerformanceCode = `// 1. Measuring hydration performance
import { Component, OnInit } from '@angular/core';
import { HydrationMetrics } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`<div>App Root</div>\`
})
export class AppComponent implements OnInit {
  constructor(private metrics: HydrationMetrics) {}

  ngOnInit() {
    // Log hydration performance metrics
    this.metrics.getHydrationStats().then(stats => {
      console.log('Time to hydrate:', stats.totalTime);
      console.log('Components hydrated:', stats.componentCount);
      console.log('DOM nodes reused:', stats.nodesReused);
      console.log('DOM nodes recreated:', stats.nodesCreated);
    });
  }
}

// 2. Optimizing hydration performance
@Component({
  selector: 'app-optimized',
  template: \`<div>Optimized Component</div>\`,
  // New in Angular 19: Hydration optimization settings
  hydration: {
    // Skip hydration for parts that match server-rendered content
    skipUnchanged: true,
    // Only preserve DOM nodes that have event listeners
    preserveInteractive: true,
    // Set hydration priority (higher numbers are hydrated first)
    priority: 10
  }
})
export class OptimizedComponent {}`;
  }
  ngOnInit() {
    // Nothing to do here
  }
}
HydrationComponent.ɵfac = function HydrationComponent_Factory(t) {
  return new (t || HydrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
HydrationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HydrationComponent,
  selectors: [["app-hydration"]],
  viewQuery: function HydrationComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.notesRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bestRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.prosConsRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.topicsRef = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 33,
  vars: 12,
  consts: [[1, "p-4", "text-sm"], [1, "heading-1", "mb-2"], [1, "text-content"], [1, "text-zinc-50", "tw-font-medium"], [1, "flex", "flex-col"], [1, "flex", "border-b", "border-gray-200"], [1, "text-sky-400", "hover:text-rose-400", "font-semibold", "py-2", "px-4", "border-b-2", "border-transparent", "hover:border-gray-500", "focus:outline-none", 3, "click"], [1, "p-4"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["notesRef", ""], ["bestRef", ""], ["prosConsRef", ""], ["topicsRef", ""], [4, "ngTemplateOutlet"], [1, "list-disc", "pl-4", "text-sm"], [1, "list-decimal", "pl-4", "text-sm"], [1, "list-disc", "pl-4"], [1, "border", "border-rose-400", "rounded-md", "px-1", "text-sky-400", 3, "click"], ["hidden", "", "copyToClipboard", ""], ["code1", ""], [1, "flex", "flex-row", "justify-between", "items-center", "bg-gray-900", "px-4", "py-2", "relative", "top-5"], [1, "copy-button-wrapper", "bg-gray-700"], [3, "highlight", "languages"], ["code2", ""], ["code3", ""], ["code4", ""], ["code5", ""], [1, "w-full", "border-collapse", "rounded-lg", "overflow-hidden", "shadow-md"], [1, "bg-gray-800", "text-gray-100"], [1, "py-3", "px-4", "text-left"], [1, "border-b", "border-gray-700", "bg-gray-900", "hover:bg-gray-800", "transition-colors"], [1, "py-3", "px-4"], [1, "border-b", "border-gray-700", "bg-gray-950", "hover:bg-gray-800", "transition-colors"], [1, "bg-gray-950", "hover:bg-gray-800", "transition-colors"], [1, "list-decimal", "px-4", "text-sm"], [1, "text-sky-400"], [1, "list-decimal", "px-10", "text-sm"]],
  template: function HydrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Hydration ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "p")(5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hydration");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " in Angular 19 is the process of attaching event listeners and initializing JavaScript functionality to server-rendered HTML. This technique allows users to see content quickly while making the page interactive as Angular processes the application. Angular 19 features significant enhancements to hydration with fine-grained control, performance improvements, and integration with signals. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HydrationComponent_Template_button_click_11_listener() {
        return ctx.selectedTab = 1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Notes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HydrationComponent_Template_button_click_13_listener() {
        return ctx.selectedTab = 2;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Best Practices ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HydrationComponent_Template_button_click_15_listener() {
        return ctx.selectedTab = 3;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Pros and Cons ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HydrationComponent_Template_button_click_17_listener() {
        return ctx.selectedTab = 4;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Related Topics ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HydrationComponent_div_21_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HydrationComponent_div_22_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HydrationComponent_div_23_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HydrationComponent_div_24_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HydrationComponent_ng_template_25_Template, 216, 15, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HydrationComponent_ng_template_27_Template, 81, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HydrationComponent_ng_template_29_Template, 138, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, HydrationComponent_ng_template_31_Template, 85, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.selectedTab);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchDefault, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__.HighlightModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__.Highlight],
  styles: ["p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hbmd1bGFyL2NvbmNlcHRzL2h5ZHJhdGlvbi9oeWRyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_feature_angular_concepts_hydration_hydration_component_ts.js.map