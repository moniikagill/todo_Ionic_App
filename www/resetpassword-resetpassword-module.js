(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"],{

/***/ "./src/app/resetpassword/resetpassword.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.module.ts ***!
  \*******************************************************/
/*! exports provided: ResetpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function() { return ResetpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpassword.page */ "./src/app/resetpassword/resetpassword.page.ts");







var routes = [
    {
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordPage"]
    }
];
var ResetpasswordPageModule = /** @class */ (function () {
    function ResetpasswordPageModule() {
    }
    ResetpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordPage"]]
        })
    ], ResetpasswordPageModule);
    return ResetpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/resetpassword/resetpassword.page.html":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n     <ion-title>Reset your Password</ion-title><ion-buttons slot=\"start\">\n         <ion-button fill=\"clear\" slot=\"icon-only\" (click)=\"goback()\">\n           <ion-icon name=\"arrow-back\"></ion-icon>\n         </ion-button>\n       </ion-buttons>\n     </ion-toolbar>\n     </ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item class=\"vert-space\">\n      <h1 class=\"center\">Enter your email</h1>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Email</ion-label>\n      <ion-input type=\"email\" placeholder =\"student@email.com\" [(ngModel)]=\"this.email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-button  fill=\"clear\" color=\"secondary\"  (click)=\"resetPassword()\">\n        Reset Password\n      </ion-button>\n</ion-item>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.ts ***!
  \*****************************************************/
/*! exports provided: ResetpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPage", function() { return ResetpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



// import the toast controller for the pop-up message

var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(toastCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
    }
    ResetpasswordPage.prototype.ngOnInit = function () {
    };
    ResetpasswordPage.prototype.resetPassword = function () {
        this.toastCtrl.create({
            message: 'Password reset email has been sent!',
            position: 'top',
            duration: 1500
        }).then(function (toast) {
            toast.present();
        });
        return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().sendPasswordResetEmail(this.email);
    };
    ResetpasswordPage.prototype.goback = function () {
        this.navCtrl.navigateForward(['/login']);
    };
    ResetpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__(/*! ./resetpassword.page.html */ "./src/app/resetpassword/resetpassword.page.html"),
            styles: [__webpack_require__(/*! ./resetpassword.page.scss */ "./src/app/resetpassword/resetpassword.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=resetpassword-resetpassword-module.js.map