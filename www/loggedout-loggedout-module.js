(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loggedout-loggedout-module"],{

/***/ "./src/app/loggedout/loggedout.module.ts":
/*!***********************************************!*\
  !*** ./src/app/loggedout/loggedout.module.ts ***!
  \***********************************************/
/*! exports provided: LoggedoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedoutPageModule", function() { return LoggedoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loggedout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loggedout.page */ "./src/app/loggedout/loggedout.page.ts");







var routes = [
    {
        path: '',
        component: _loggedout_page__WEBPACK_IMPORTED_MODULE_6__["LoggedoutPage"]
    }
];
var LoggedoutPageModule = /** @class */ (function () {
    function LoggedoutPageModule() {
    }
    LoggedoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_loggedout_page__WEBPACK_IMPORTED_MODULE_6__["LoggedoutPage"]]
        })
    ], LoggedoutPageModule);
    return LoggedoutPageModule;
}());



/***/ }),

/***/ "./src/app/loggedout/loggedout.page.html":
/*!***********************************************!*\
  !*** ./src/app/loggedout/loggedout.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n      <ion-title>Logged out</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  \n    <ion-item class=\"vert-space\">\n        <h1 class=\"center\">You have logged out successfully\n      </h1>\n      </ion-item>\n    \n<ion-button expand=\"block\" color=\"secondary\" shape=\"round\" (click)=\"login()\">Log back in again?</ion-button>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/loggedout/loggedout.page.scss":
/*!***********************************************!*\
  !*** ./src/app/loggedout/loggedout.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2dlZG91dC9sb2dnZWRvdXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/loggedout/loggedout.page.ts":
/*!*********************************************!*\
  !*** ./src/app/loggedout/loggedout.page.ts ***!
  \*********************************************/
/*! exports provided: LoggedoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedoutPage", function() { return LoggedoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoggedoutPage = /** @class */ (function () {
    function LoggedoutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoggedoutPage.prototype.ngOnInit = function () {
    };
    LoggedoutPage.prototype.login = function () {
        this.navCtrl.navigateForward(['/login']);
    };
    LoggedoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loggedout',
            template: __webpack_require__(/*! ./loggedout.page.html */ "./src/app/loggedout/loggedout.page.html"),
            styles: [__webpack_require__(/*! ./loggedout.page.scss */ "./src/app/loggedout/loggedout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], LoggedoutPage);
    return LoggedoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=loggedout-loggedout-module.js.map