"use strict";
(self["webpackChunktailwind"] = self["webpackChunktailwind"] || []).push([["src_app_feature_angular_concepts_content-projection_content-projection_component_ts"],{

/***/ 3992:
/*!*********************************************************************************************!*\
  !*** ./src/app/feature/angular/concepts/content-projection/content-projection.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentProjectionComponent": () => (/* binding */ ContentProjectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 7101);
/* harmony import */ var src_app_utils_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/services/unsubscribe.service */ 7369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);







const _c0 = ["notesTemplate"];
const _c1 = ["bestPracticesTemplate"];
const _c2 = ["prosConsTemplate"];
const _c3 = ["relatedTopicsTemplate"];
const _c4 = ["basicExampleEl"];
const _c5 = ["usageExampleEl"];
const _c6 = ["contentChildExampleEl"];
const _c7 = ["ngContainerExampleEl"];
function ContentProjectionComponent_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ContentProjectionComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentProjectionComponent_ng_container_21_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6);
  }
}
function ContentProjectionComponent_ng_container_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ContentProjectionComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentProjectionComponent_ng_container_22_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r8);
  }
}
function ContentProjectionComponent_ng_container_23_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ContentProjectionComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentProjectionComponent_ng_container_23_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r10);
  }
}
function ContentProjectionComponent_ng_container_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ContentProjectionComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContentProjectionComponent_ng_container_24_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4);
  }
}
const _c8 = function () {
  return ["typescript"];
};
const _c9 = function () {
  return ["html"];
};
function ContentProjectionComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Core Concepts of Content Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 16)(3, "li")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Basic Content Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 17)(7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "The ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "ng-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " element is the core mechanism for projecting content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Content between component tags is inserted at the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "ng-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Projected content maintains the context of its parent component");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Enables building reusable, customizable components with flexible layouts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentProjectionComponent_ng_template_25_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.toggleBasicExample());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 19, 20)(25, "div", 21)(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li")(34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Multi-slot Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ul", 17)(37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Multiple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "ng-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " elements can be used with the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " attribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "The ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " attribute takes CSS selectors to match specific content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Common selectors include element names, CSS classes, and attributes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Enables complex component layouts with multiple insertion points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentProjectionComponent_ng_template_25_Template_button_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.toggleUsageExample());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 19, 24)(58, "div", 21)(59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li")(67, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Accessing Projected Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ul", 17)(70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "The ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "@ContentChild");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "@ContentChildren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " decorators provide access to projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Content queries are initialized in the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "ngAfterContentInit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " lifecycle hook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "The ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "QueryList.changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " Observable tracks changes to projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Enables components to interact with their projected content programmatically");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentProjectionComponent_ng_template_25_Template_button_click_90_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.toggleContentChildExample());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 19, 25)(94, "div", 21)(95, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "br")(103, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Angular 19 Content Projection Enhancements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "ul", 16)(107, "li")(108, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Integration with Signal Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "ul", 17)(111, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Better performance with signal-based components and content projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "More efficient change detection for projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Signal-based content queries for reactive access to projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Improved developer experience when working with dynamic projections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "li")(120, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Deferred Content Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "ul", 17)(123, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Support for the new ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "@defer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, " block within projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Lazy-loading of heavy projected content for better performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Conditional loading strategies for projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Placeholder and loading states for deferred projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentProjectionComponent_ng_template_25_Template_button_click_134_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.toggleNgContainerExample());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "span", 19, 26)(138, "div", 21)(139, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "li")(147, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Server-Side Rendering Improvements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "ul", 17)(150, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Enhanced hydration support for projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Partial hydration options for content projections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Better serialization of projected content during SSR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Improved performance metrics for content projection in SSR applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "br")(159, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Content Projection Patterns in Angular 19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "table", 27)(163, "thead")(164, "tr", 28)(165, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Use Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "tbody")(172, "tr", 30)(173, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Single-slot Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Basic projection with a single ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "ng-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Simple container components, wrappers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "tr", 32)(182, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Multi-slot Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Multiple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "ng-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, " elements with selectors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Layout components, cards, panels");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "tr", 30)(192, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Conditional Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Projecting content based on conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Tabs, accordions, toggle panels");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "tr", 32)(199, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Deferred Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Lazy-loading projected content with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "@defer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Performance-critical components, heavy content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "tr", 30)(208, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Template Outlet Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Using ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "ngTemplateOutlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, " for dynamic projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Dynamic lists, configurable interfaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "tr", 32)(218, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Signal-based Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Projecting content with signal integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Reactive components, performance-optimized UIs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r5.showBasicExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r5.basicExample)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r5.showUsageExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r5.usageExample)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r5.showContentChildExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r5.contentChildExample)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r5.showNgContainerExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r5.ngContainerExample)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c9));
  }
}
function ContentProjectionComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 33)(1, "li")(2, "strong", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Design Clear Component APIs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 17)(5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Define clear projection slots with descriptive selectors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Document each projection slot and its purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Use consistent naming conventions for selectors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Consider providing default content for optional slots");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Maintain backward compatibility when updating projection APIs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "strong", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Optimize Performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 17)(19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Use OnPush change detection for components with content projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Leverage the new ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "@defer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " block for heavy projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Minimize DOM manipulation of projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Consider signal-based approaches for dynamic projections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "ng-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " to avoid unnecessary DOM elements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "strong", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Implement Smart Selectors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ul", 17)(39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Choose appropriate selector types (element, class, attribute)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Prefer attribute selectors for clearer intent (e.g., ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "[header]");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Avoid overly generic selectors that might match unintended content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Consider selector specificity for complex projection scenarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Document the expected structure for multi-slot projections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li")(53, "strong", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Handle Content Queries Properly");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ul", 17)(56, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Initialize content queries in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "ngAfterContentInit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Subscribe to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "QueryList.changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " to react to dynamic changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Unsubscribe from change observables in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "ngOnDestroy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "static: true");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " for content needed in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "ngOnInit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Consider using signal-based content queries for better reactivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li")(79, "strong", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Structure Component Hierarchies Thoughtfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "ul", 17)(82, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Design components with clear responsibilities and boundaries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Use content projection for UI composition, not just for reusability");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Create specialized projection components for complex UI patterns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Consider the depth of projection (avoid excessive nesting)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Manage context carefully between parent and projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function ContentProjectionComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35)(1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Advantages of Content Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 37)(4, "li")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Component Reusability");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ": Create highly reusable components with customizable content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "UI Composition");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ": Build complex interfaces through component composition");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Separation of Concerns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ": Cleanly separate component structure from content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Contextual Integrity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, ": Projected content retains access to its parent context");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Flexible Layout Patterns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, ": Implement advanced UI patterns like cards, tabs, and panels");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li")(25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Efficient DOM Structure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, ": Create clean DOM hierarchies without excessive nesting");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li")(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Enhanced Developer Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, ": More intuitive component APIs and usage patterns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Challenges with Content Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ul", 37)(35, "li")(36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Learning Curve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ": Understanding projection concepts can be challenging for beginners");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Debugging Complexity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, ": Issues in projected content can be harder to debug");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li")(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Style Encapsulation Boundaries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, ": Managing styles across projection boundaries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Change Detection Considerations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, ": Complex change detection interactions with projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li")(52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Performance Overhead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, ": Potential performance costs with deeply nested projections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li")(56, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Component API Design Challenges");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, ": Designing intuitive projection patterns requires care");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Template Constraints");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, ": Some limitations when combining with other Angular features");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Angular 19 Content Projection Improvements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "table", 38)(66, "thead")(67, "tr", 28)(68, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Feature");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Before Angular 19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Angular 19 Improvements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tbody")(75, "tr", 39)(76, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Zone-based change detection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Signal-based change detection for better performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "tr", 40)(83, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Lazy Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Requires manual implementation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Native support through @defer blocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "tr", 39)(90, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "SSR Integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Basic hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Enhanced with partial hydration support");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "tr", 40)(97, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Type Safety");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Limited component API type safety");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Improved type checking for projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "tr", 39)(104, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Content Queries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Observable-based content changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Signal-based content queries for reactivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Content Projection vs. Alternative Patterns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "table", 38)(113, "thead")(114, "tr", 28)(115, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Consideration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Content Projection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Property Binding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Dynamic Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "tbody")(124, "tr", 39)(125, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Flexibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "tr", 40)(134, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Complexity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "tr", 39)(143, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Good");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Excellent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Variable");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "tr", 40)(152, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Type Safety");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Low to Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "tr", 39)(161, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Use Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Layout components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Data-driven components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Highly dynamic UIs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
}
function ContentProjectionComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35)(1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Related Angular Concepts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 37)(4, "li")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Component Architecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ": Understanding component hierarchies and composition patterns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Template Syntax");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ": Angular's template language and directives");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Content Queries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ": Using ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "@ContentChild");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "@ContentChildren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " to access projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Change Detection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, ": How changes in projections affect detection strategy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Lifecycle Hooks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, ": Particularly ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "ngAfterContentInit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "ngAfterContentChecked");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "View Encapsulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ": Styling considerations for projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Defer Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, ": Integration with deferred loading for projected content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Content Projection FAQs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ul", 37)(46, "li")(47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Q: How does content projection work with Angular 19's signal-based components?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " A: Angular 19 introduces tight integration between signals and content projection. Signal-based components can project content more efficiently due to fine-grained reactivity. When using content projection with signals, change detection becomes more precise, as only the affected parts of the projected content update when signal values change. Additionally, content queries can now be signal-based, providing reactive access to projected content with better performance characteristics. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li")(52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Q: Can I use the new @defer block with content projection?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " A: Yes, Angular 19 fully supports using @defer blocks within projected content. This powerful combination allows for lazy-loading portions of projected content based on conditions like visibility, user interaction, or custom triggers. This is particularly useful for performance optimization when projecting heavy content into lightweight container components. The defer block respects the context of the parent component while still being rendered within the child component's structure. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Q: What's the best approach for styling projected content in Angular 19?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " A: Angular 19 maintains the same view encapsulation principles for projected content. The most effective approach is using the ::ng-deep combinator with :host selectors in the child component to target projected content while limiting the scope. Additionally, consider using CSS custom properties (variables) to allow child components to influence projected content styles without breaking encapsulation. For shared styling, consider utility classes that can be applied to both parent and child contexts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li")(62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Q: How do content projection and SSR work together in Angular 19?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " A: Angular 19 significantly improves the integration between content projection and server-side rendering. The new partial hydration features work seamlessly with projected content, allowing for more efficient client-side rehydration of server-rendered components. Components can now specify which parts of their projected content should be eagerly or lazily hydrated, leading to better performance metrics like First Contentful Paint and Time to Interactive for applications using extensive content projection. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li")(67, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Q: What are the performance considerations for content projection in Angular 19?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " A: Angular 19 addresses many previous performance concerns with content projection. The signal-based architecture provides more efficient change detection for projected content. Use OnPush change detection strategy for components with projection to minimize unnecessary checks. For complex projections, consider using the @defer block to lazy-load content. Be mindful of projection depth, as deeply nested projections can still impact performance. Finally, use the new DevTools profiling capabilities to identify potential bottlenecks in your projection architecture. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Useful Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ul", 17)(74, "li")(75, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Angular Content Projection Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li")(78, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Angular Defer Block Documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li")(81, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Angular Signals Documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li")(84, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Component Lifecycle Hooks Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li")(87, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Server-side Rendering in Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class ContentProjectionComponent {
  constructor(unsub) {
    this.unsub = unsub;
    this.selectedTab = 'notes';
    // Visibility state for code examples
    this.showBasicExample = false;
    this.showUsageExample = false;
    this.showContentChildExample = false;
    this.showNgContainerExample = false;
    // Code example strings for syntax highlighting
    this.basicExample = '';
    this.usageExample = '';
    this.contentChildExample = '';
    this.ngContainerExample = '';
  }
  ngOnInit() {
    this.initializeCodeExamples();
  }
  ngAfterViewInit() {
    // No need to update DOM element content as we're using the string variables directly
  }
  // Toggle methods for code examples
  toggleBasicExample() {
    this.showBasicExample = !this.showBasicExample;
  }
  toggleUsageExample() {
    this.showUsageExample = !this.showUsageExample;
  }
  toggleContentChildExample() {
    this.showContentChildExample = !this.showContentChildExample;
  }
  toggleNgContainerExample() {
    this.showNgContainerExample = !this.showNgContainerExample;
  }
  initializeCodeExamples() {
    this.basicExample = `// card.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  \`,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {}`;
    this.usageExample = `<!-- Using the card component -->
<app-card>
  <h2 card-header>Card Title</h2>
  <p>This is the main content of the card.</p>
  <p>You can add any elements here.</p>
  <div card-footer>
    <button>Action</button>
  </div>
</app-card>`;
    this.contentChildExample = `// Using ContentChild and ContentChildren
import { Component, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  template: \`
    <div class="tabs-header">
      <ul>
        <li *ngFor="let tab of tabs"
            [class.active]="tab.active"
            (click)="selectTab(tab)">
          {{ tab.title }}
        </li>
      </ul>
    </div>
    <div class="tabs-body">
      <ng-content></ng-content>
    </div>
  \`
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    // Set the first tab as active if none is active
    if (this.tabs.length && !this.tabs.find(tab => tab.active)) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(selectedTab: TabComponent) {
    this.tabs.forEach(tab => {
      tab.active = (tab === selectedTab);
    });
  }
}`;
    this.ngContainerExample = `<!-- Deferred content projection with @defer -->
<app-dashboard>
  <ng-container dashboard-main>
    <h2>Dashboard Overview</h2>

    @defer (on viewport) {
      <app-heavy-chart [data]="chartData"></app-heavy-chart>
    } @loading {
      <div class="loading-placeholder">Chart loading...</div>
    }
  </ng-container>

  <ng-container dashboard-sidebar>
    @defer (when sidebarVisible) {
      <app-sidebar-navigation [items]="navItems"></app-sidebar-navigation>
    }
  </ng-container>
</app-dashboard>`;
  }
}
ContentProjectionComponent.ɵfac = function ContentProjectionComponent_Factory(t) {
  return new (t || ContentProjectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeService));
};
ContentProjectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContentProjectionComponent,
  selectors: [["app-content-projection"]],
  viewQuery: function ContentProjectionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.notesTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bestPracticesTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.prosConsTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.relatedTopicsTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.basicExampleEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.usageExampleEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentChildExampleEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ngContainerExampleEl = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_utils_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 33,
  vars: 12,
  consts: [[1, "p-4", "text-sm"], [1, "heading-1", "mb-2"], [1, "text-content"], [1, "text-zinc-50", "tw-font-medium"], [1, "flex", "flex-col"], [1, "flex", "border-b", "border-gray-200"], [1, "text-sky-400", "hover:text-rose-400", "font-semibold", "py-2", "px-4", "border-b-2", "border-transparent", "hover:border-gray-500", "focus:outline-none", 3, "click"], [1, "p-4"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["notesTemplate", ""], ["bestPracticesTemplate", ""], ["prosConsTemplate", ""], ["relatedTopicsTemplate", ""], [4, "ngTemplateOutlet"], [1, "list-disc", "pl-4", "text-sm"], [1, "list-disc", "pl-4"], [1, "border", "border-rose-400", "rounded-md", "px-1", "text-sky-400", 3, "click"], [3, "hidden"], ["basicExampleEl", ""], [1, "flex", "flex-row", "justify-between", "items-center", "bg-gray-900", "px-4", "py-2", "relative", "top-5"], [1, "copy-button-wrapper", "bg-gray-700"], [3, "highlight", "languages"], ["usageExampleEl", ""], ["contentChildExampleEl", ""], ["ngContainerExampleEl", ""], [1, "w-full", "border-collapse", "rounded-lg", "overflow-hidden", "shadow-md"], [1, "bg-gray-800", "text-gray-100"], [1, "py-3", "px-4", "text-left"], [1, "border-b", "border-gray-700", "bg-gray-900", "hover:bg-gray-800", "transition-colors"], [1, "py-3", "px-4"], [1, "border-b", "border-gray-700", "bg-gray-950", "hover:bg-gray-800", "transition-colors"], [1, "list-decimal", "pl-4", "text-sm"], [1, "text-sky-400"], [1, "text-sm"], [1, "font-semibold", "text-sky-400", "mb-2"], [1, "list-disc", "pl-4", "mb-6"], [1, "w-full", "border-collapse", "rounded-lg", "overflow-hidden", "shadow-md", "mb-4"], [1, "border-b", "border-gray-700", "bg-gray-900"], [1, "border-b", "border-gray-700", "bg-gray-950"], ["href", "https://angular.dev/guide/components/content-projection", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/defer", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/signals", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/components/lifecycle", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/ssr", 1, "text-sky-400", "hover:underline"]],
  template: function ContentProjectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Content Projection in Angular ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "p")(5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Content Projection");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " is a powerful pattern in Angular that allows you to insert content from a parent component into specific locations in a child component. In Angular 19, content projection has been enhanced with improved performance, tighter integration with signals, better SSR support, and advanced lazy-loading capabilities through the new @defer block. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentProjectionComponent_Template_button_click_11_listener() {
        return ctx.selectedTab = "notes";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Notes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentProjectionComponent_Template_button_click_13_listener() {
        return ctx.selectedTab = "bestPractices";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Best Practices ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentProjectionComponent_Template_button_click_15_listener() {
        return ctx.selectedTab = "prosCons";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Pros and Cons ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContentProjectionComponent_Template_button_click_17_listener() {
        return ctx.selectedTab = "relatedTopics";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Related Topics ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ContentProjectionComponent_ng_container_21_Template, 2, 1, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ContentProjectionComponent_ng_container_22_Template, 2, 1, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ContentProjectionComponent_ng_container_23_Template, 2, 1, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ContentProjectionComponent_ng_container_24_Template, 2, 1, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ContentProjectionComponent_ng_template_25_Template, 224, 16, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ContentProjectionComponent_ng_template_27_Template, 92, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ContentProjectionComponent_ng_template_29_Template, 169, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ContentProjectionComponent_ng_template_31_Template, 89, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-rose-300", ctx.selectedTab === "notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-rose-300", ctx.selectedTab === "bestPractices");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-rose-300", ctx.selectedTab === "prosCons");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-rose-300", ctx.selectedTab === "relatedTopics");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.selectedTab);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bestPractices");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "prosCons");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "relatedTopics");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.HighlightModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight],
  styles: ["p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.code-example[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin: 25px 0;\n  padding: 20px;\n  border: 1px solid #eee;\n  border-radius: 5px;\n}\n\n.visual-diagram[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  padding: 15px;\n  background-color: #f8f9fa;\n  border-radius: 5px;\n}\n.visual-diagram[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n\n.projection-slot[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 10px 0;\n  border: 1px dashed #ccc;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n.projection-slot.header[_ngcontent-%COMP%] {\n  border-color: #0d6efd;\n  background-color: rgba(13, 110, 253, 0.1);\n}\n.projection-slot.default[_ngcontent-%COMP%] {\n  border-color: #198754;\n  background-color: rgba(25, 135, 84, 0.1);\n}\n.projection-slot.footer[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background-color: rgba(220, 53, 69, 0.1);\n}\n\ntable.comparison-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 20px 0;\n}\ntable.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px 12px;\n  text-align: left;\n}\ntable.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  font-weight: bold;\n}\ntable.comparison-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hbmd1bGFyL2NvbmNlcHRzL2NvbnRlbnQtcHJvamVjdGlvbi9jb250ZW50LXByb2plY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNFLHFCQUFBO0VBQ0EseUNBQUE7QUFBSjtBQUdFO0VBQ0UscUJBQUE7RUFDQSx3Q0FBQTtBQURKO0FBSUU7RUFDRSxxQkFBQTtFQUNBLHdDQUFBO0FBRko7O0FBTUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSEY7QUFLRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBSko7QUFPRTtFQUNFLHlCQUFBO0FBTEoiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5jb2RlLWV4YW1wbGUge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyNXB4IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnZpc3VhbC1kaWFncmFtIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5cbi5wcm9qZWN0aW9uLXNsb3Qge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAmLmhlYWRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDExMCwgMjUzLCAwLjEpO1xuICB9XG5cbiAgJi5kZWZhdWx0IHtcbiAgICBib3JkZXItY29sb3I6ICMxOTg3NTQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNSwgMTM1LCA4NCwgMC4xKTtcbiAgfVxuXG4gICYuZm9vdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcbiAgfVxufVxuXG50YWJsZS5jb21wYXJpc29uLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMjBweCAwO1xuXG4gIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_feature_angular_concepts_content-projection_content-projection_component_ts.js.map