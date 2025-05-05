"use strict";
(self["webpackChunktailwind"] = self["webpackChunktailwind"] || []).push([["src_app_feature_angular_concepts_cli_cli_component_ts"],{

/***/ 781:
/*!***************************************************************!*\
  !*** ./src/app/feature/angular/concepts/cli/cli.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CliComponent": () => (/* binding */ CliComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ 7101);
/* harmony import */ var src_app_utils_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/services/unsubscribe.service */ 7369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






const _c0 = ["basicCommandsCodeEl"];
const _c1 = ["v19CommandsCodeEl"];
const _c2 = ["workspaceConfigCodeEl"];
const _c3 = ["customBuildersCodeEl"];
const _c4 = function () {
  return ["bash"];
};
const _c5 = function () {
  return ["json"];
};
const _c6 = function () {
  return ["typescript"];
};
function CliComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Core CLI Commands and Functionality");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 9)(4, "li")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Basic CLI Commands");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 10)(8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "The CLI provides essential commands for the entire development lifecycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Most commands have shorthand versions (e.g., ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "ng g c");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "ng generate component");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Commands accept options that customize their behavior");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CliComponent_div_20_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r4.hidden = !_r4.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 12, 13)(24, "div", 14)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "bash");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Workspace Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ul", 10)(36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "The CLI uses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "angular.json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " to store project configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "This file defines project structure, build options, and CLI defaults");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "It contains configurations for different environments (development, production)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Schematics configuration for code generation is stored here");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CliComponent_div_20_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](50);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r5.hidden = !_r5.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 12, 17)(51, "div", 14)(52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Schematics & Builders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ul", 10)(63, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "The CLI uses schematics to generate and modify code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Builders execute processes like build, test, and serve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Both can be customized or extended for specific project needs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Third-party libraries can provide additional schematics and builders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CliComponent_div_20_Template_button_click_71_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](74);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r6.hidden = !_r6.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 12, 18)(75, "div", 14)(76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "br")(84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Angular 19 CLI Enhancements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "ul", 9)(88, "li")(89, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "New CLI Features in Angular 19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "ul", 10)(92, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Enhanced support for standalone applications and components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Improved server-side rendering (SSR) and hydration integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Advanced build optimization for smaller bundle sizes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "New performance profiling and analytics tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Streamlined migration paths from older Angular versions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CliComponent_div_20_Template_button_click_102_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](105);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r7.hidden = !_r7.hidden);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 12, 19)(106, "div", 14)(107, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "bash");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li")(115, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Build Performance Improvements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "ul", 10)(118, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Enhanced Webpack 5 integration with smarter chunking strategies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Improved cache invalidation for faster incremental builds");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Better tree-shaking to reduce bundle sizes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "More efficient code generation during builds");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "New optimization options for production deployments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li")(129, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Developer Experience Updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "ul", 10)(132, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "More informative error messages with actionable suggestions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Enhanced auto-completion in CLI commands");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Interactive prompts for common CLI operations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Better integration with modern bundlers and tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Improved telemetry with opt-in analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "br")(143, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Key CLI Commands in Angular 19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "table", 20)(147, "thead")(148, "tr", 21)(149, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Command");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Angular 19 Enhancements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "tbody")(156, "tr", 23)(157, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "ng new");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Create a new Angular application");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Improved standalone and SSR templates, new minimal option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "tr", 25)(164, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "ng generate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Generate components, services, etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Enhanced schematic options for standalone, signals support");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "tr", 23)(171, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "ng build");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Build the application");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Improved bundling, new performance profiler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "tr", 25)(178, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "ng serve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Run development server");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Enhanced hydration and SSR development support");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "tr", 23)(185, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "ng test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Run unit tests");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Better error reporting, faster test execution");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "tr", 25)(192, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "ng update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Update Angular dependencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Enhanced dependency analysis, smoother migrations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "tr", 23)(199, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "ng add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Add new capabilities to your project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Extended package ecosystem, better integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.basicCommandsCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.workspaceConfigCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.customBuildersCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx_r0.v19CommandsCode)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c4));
  }
}
function CliComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ol", 26)(2, "li")(3, "strong", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Optimize Project Structure for CLI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 10)(6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Follow the standard directory structure created by the CLI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Keep related files (component, styles, tests) together");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Use feature modules or standalone components for organization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Consider using library projects for shared code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Create a sensible naming convention for generated files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "strong", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Customize Angular Workspace Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 10)(20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Configure default schematic options in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "angular.json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Set up suitable budget thresholds for bundle sizes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Configure environment-specific build options");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Create custom builder configurations for specific needs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Use project-specific configuration when working in a monorepo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "strong", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Leverage CLI Generation Capabilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ul", 10)(36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "ng generate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " consistently for components, services, etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Take advantage of the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "--dry-run");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " flag to preview changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Utilize schematic options to customize code generation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Consider creating custom schematics for project-specific patterns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Use Angular 19's signal input options when generating components");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li")(53, "strong", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Optimize Build and Development Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ul", 10)(56, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Use production builds with proper optimization flags");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Leverage Angular 19's improved build caching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Activate SSR and hydration for better user experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Monitor bundle sizes with budgets and analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Configure CDN paths and differential loading appropriately");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li")(67, "strong", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Maintain Environment Consistency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ul", 10)(70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Lock Angular CLI version in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "package.json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " for team consistency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Document project-specific CLI commands in README");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Consider using npm/yarn scripts to wrap CLI commands");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Set up CI/CD pipelines using CLI commands for builds and tests");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Keep workspace and dependencies up to date with regular updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
}
function CliComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 28)(2, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Advantages of the Angular CLI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 30)(5, "li")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Standardized Workflow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ": Provides consistent patterns for team development");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Automation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ": Reduces manual work with code generation and build process automation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Optimization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ": Advanced build optimization for production deployments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Scaffolding");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ": Quick creation of components and other Angular artifacts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Testing Integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ": Built-in tools for unit and end-to-end testing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Update Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, ": Simplified dependency updates and migration paths");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, ": Centralized workspace configuration in a single file");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Challenges with the Angular CLI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ul", 30)(36, "li")(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Learning Curve");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, ": Many commands and options to understand");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li")(41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Configuration Complexity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, ": Advanced customization can be challenging");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Build Times");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, ": Large projects may still have lengthy build times despite optimizations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li")(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Limited Flexibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, ": Some customizations require ejecting or complex workarounds");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li")(53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Versioning Constraints");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, ": CLI version must align with Angular framework version");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Integration Challenges");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, ": Some third-party tools may require additional configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li")(61, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Developer Machine Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, ": Resource-intensive tasks may strain less powerful systems");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Angular 19 CLI Improvements Over Previous Versions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "table", 31)(67, "thead")(68, "tr", 21)(69, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Feature");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Before Angular 19");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Angular 19 Improvements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tbody")(76, "tr", 32)(77, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Build Performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Slower incremental builds, less efficient caching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Up to 30% faster builds with improved caching mechanisms");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "tr", 33)(84, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Bundle Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Basic tree-shaking and optimization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Enhanced tree-shaking with standalone component optimization");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "tr", 32)(91, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "SSR Integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Complex setup with manual configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Streamlined SSR and hydration with simple CLI flags");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "tr", 33)(98, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Error Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Often cryptic errors with limited context");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Detailed error messages with actionable suggestions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "tr", 32)(105, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Dependency Updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Basic update mechanism with some migration paths");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Comprehensive dependency analysis and smarter migrations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
}
function CliComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 28)(2, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Related Angular Concepts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 30)(5, "li")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Angular Workspace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ": The environment configured by the CLI for development");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Schematics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ": The templating system used by the CLI for code generation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Builders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ": Tools that perform operations like build, serve, and test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Angular DevKit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ": The underlying libraries powering the Angular CLI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Webpack");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ": The bundler integrated with the CLI for optimized builds");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "CLI FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul", 30)(28, "li")(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Q: How do I update to Angular 19 CLI?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " A: Use the command ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "ng update @angular/cli @angular/core");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " to update both the CLI and core framework to version 19. The CLI will automatically handle dependency updates and run necessary migrations. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Q: How can I reduce bundle sizes in Angular 19?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " A: The Angular 19 CLI provides several optimization techniques: use standalone components, enable build optimization with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "--configuration production");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, ", implement lazy loading for routes, use the new ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "--minimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " flag for new projects, and leverage the budgets feature to monitor bundle sizes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Q: What's the best way to configure the CLI for a team project?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " A: Establish standardized configuration in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "angular.json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, ", set up defaults for schematics, create npm scripts for common CLI commands, document CLI usage in the project README, and consider creating custom schematics for project-specific patterns. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li")(56, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Q: How do I enable SSR and hydration in Angular 19?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " A: For new projects, use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "ng new my-app --ssr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, ". For existing projects, run ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "ng add @angular/ssr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ". To enable hydration during development, use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "ng serve --hydration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, ". For partial hydration, configure components with the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "hydration: 'manual'");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " option. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li")(73, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Q: Can I create a library with Angular 19 CLI?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " A: Yes, use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "ng generate library my-lib");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " to create a library project within your workspace. Angular 19 enhances library support with standalone component compatibility, improved tree-shaking, and better API documentation generation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Useful Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "ul", 10)(83, "li")(84, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Angular CLI Documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li")(87, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Workspace Configuration Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "li")(90, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Schematics Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li")(93, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Standalone Components Guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li")(96, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Angular CLI GitHub Repository");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
}
class CliComponent extends src_app_utils_services_unsubscribe_service__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeService {
  constructor() {
    super(...arguments);
    this.selectedTab = 1;
    // Code examples
    this.basicCommandsCode = `# Creating a new application
ng new my-app

# Generating components
ng generate component my-component
ng g c my-component --standalone # shorthand with standalone flag

# Generating services
ng generate service my-service
ng g s my-service --skip-tests # shorthand with flag

# Building for production
ng build --configuration production

# Running the development server
ng serve

# Running unit tests
ng test

# Running end-to-end tests
ng e2e

# Linting the project
ng lint`;
    this.v19CommandsCode = `# Creating a new Angular 19 app with latest features
ng new my-app --standalone --ssr --inline-critical-css

# Generating a signal-based component
ng generate component my-component --standalone --change-detection=OnPush

# Creating a library with the new CLI library generator
ng generate library my-lib --standalone

# Using the new partial hydration options
ng serve --hydration --partial-hydration

# Enhanced ng update with dependency analysis
ng update --analyze-dependencies

# Using the new build performance profiler
ng build --profile

# Creating a new app with the new minimal bundle size option
ng new my-app --minimal

# Analyzing bundle sizes with the enhanced stats command
ng build --stats-json && ng analytics`;
    this.workspaceConfigCode = `// angular.json configuration for CLI options
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "my-app": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "standalone": true,
          "changeDetection": "OnPush"
        },
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.scss"],
            "scripts": [],
            "optimization": false,
            "sourceMap": true,
            "namedChunks": true,
            "extractLicenses": false,
            "buildOptimizer": false
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all",
              "optimization": true,
              "sourceMap": false,
              "namedChunks": false,
              "extractLicenses": true,
              "buildOptimizer": true
            }
          }
        }
      }
    }
  }
}`;
    this.customBuildersCode = `// Custom builder implementation for Angular 19
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';

interface Options extends JsonObject {
  command: string;
  args: string[];
}

export default createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>(async (resolve) => {
    context.logger.info(\`Executing custom command: \${options.command}\`);

    try {
      // Implementation of custom build steps
      const { spawn } = require('child_process');
      const child = spawn(options.command, options.args, { shell: true });

      child.stdout.on('data', (data: Buffer) => {
        context.logger.info(data.toString());
      });

      child.stderr.on('data', (data: Buffer) => {
        context.logger.error(data.toString());
      });

      child.on('close', (code: number) => {
        resolve({ success: code === 0 });
      });
    } catch (error) {
      context.logger.error('Error during command execution: ' + error);
      resolve({ success: false });
    }
  });
});

// Usage in angular.json
/*
"architect": {
  "custom": {
    "builder": "./builders:custom",
    "options": {
      "command": "echo",
      "args": ["Hello from custom builder"]
    }
  }
}
*/`;
  }
  ngOnInit() {
    // Any initialization code if needed
  }
}
CliComponent.ɵfac = /*@__PURE__*/function () {
  let ɵCliComponent_BaseFactory;
  return function CliComponent_Factory(t) {
    return (ɵCliComponent_BaseFactory || (ɵCliComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CliComponent)))(t || CliComponent);
  };
}();
CliComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CliComponent,
  selectors: [["app-cli"]],
  viewQuery: function CliComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.basicCommandsCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.v19CommandsCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.workspaceConfigCodeEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customBuildersCodeEl = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 24,
  vars: 12,
  consts: [[1, "p-4", "text-sm"], [1, "heading-1", "mb-2"], [1, "text-content"], [1, "text-zinc-50", "tw-font-medium"], [1, "flex", "flex-col"], [1, "flex", "border-b", "border-gray-200"], [1, "text-sky-400", "hover:text-rose-400", "font-semibold", "py-2", "px-4", "border-b-2", "border-transparent", "hover:border-gray-500", "focus:outline-none", 3, "click"], [1, "p-4"], [4, "ngIf"], [1, "list-disc", "pl-4", "text-sm"], [1, "list-disc", "pl-4"], [1, "border", "border-rose-400", "rounded-md", "px-1", "text-sky-400", 3, "click"], ["hidden", "", "copyToClipboard", ""], ["basicCommandsCodeEl", ""], [1, "flex", "flex-row", "justify-between", "items-center", "bg-gray-900", "px-4", "py-2", "relative", "top-5"], [1, "copy-button-wrapper", "bg-gray-700"], [3, "highlight", "languages"], ["workspaceConfigCodeEl", ""], ["customBuildersCodeEl", ""], ["v19CommandsCodeEl", ""], [1, "w-full", "border-collapse", "rounded-lg", "overflow-hidden", "shadow-md"], [1, "bg-gray-800", "text-gray-100"], [1, "py-3", "px-4", "text-left"], [1, "border-b", "border-gray-700", "bg-gray-900", "hover:bg-gray-800", "transition-colors"], [1, "py-3", "px-4"], [1, "border-b", "border-gray-700", "bg-gray-950", "hover:bg-gray-800", "transition-colors"], [1, "list-decimal", "pl-4", "text-sm"], [1, "text-sky-400"], [1, "text-sm"], [1, "font-semibold", "text-sky-400", "mb-2"], [1, "list-disc", "pl-4", "mb-6"], [1, "w-full", "border-collapse", "rounded-lg", "overflow-hidden", "shadow-md", "mb-4"], [1, "border-b", "border-gray-700", "bg-gray-900"], [1, "border-b", "border-gray-700", "bg-gray-950"], ["href", "https://angular.dev/tools/cli/overview", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/workspace-config", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/tools/cli/schematics", 1, "text-sky-400", "hover:underline"], ["href", "https://angular.dev/guide/standalone-components", 1, "text-sky-400", "hover:underline"], ["href", "https://github.com/angular/angular-cli", 1, "text-sky-400", "hover:underline"]],
  template: function CliComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Command-Line Interface (CLI) in Angular ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "p")(5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Angular CLI");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " is a powerful command-line tool that streamlines Angular development workflows. It provides commands for creating projects, generating code, building, testing, and deploying applications. In Angular 19, the CLI has received significant enhancements for developer experience, performance optimization, and integration with Angular's latest features like standalone components, SSR, and hydration. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CliComponent_Template_button_click_11_listener() {
        return ctx.selectedTab = 1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Notes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CliComponent_Template_button_click_13_listener() {
        return ctx.selectedTab = 2;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Best Practices ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CliComponent_Template_button_click_15_listener() {
        return ctx.selectedTab = 3;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Pros and Cons ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CliComponent_Template_button_click_17_listener() {
        return ctx.selectedTab = 4;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Related Topics ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CliComponent_div_20_Template, 205, 12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CliComponent_div_21_Template, 83, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CliComponent_div_22_Template, 111, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CliComponent_div_23_Template, 98, 0, "div", 8);
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
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9hbmd1bGFyL2NvbmNlcHRzL2NsaS9jbGkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsaW5nIGZvciB0aGUgQ0xJIGNvbXBvbmVudCAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ })

}]);
//# sourceMappingURL=src_app_feature_angular_concepts_cli_cli_component_ts.js.map