(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage-apphome-module"],{

/***/ "./src/app/homepage/apphome.module.ts":
/*!********************************************!*\
  !*** ./src/app/homepage/apphome.module.ts ***!
  \********************************************/
/*! exports provided: ApphomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApphomePageModule", function() { return ApphomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apphome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apphome.page */ "./src/app/homepage/apphome.page.ts");







var routes = [
    {
        path: '',
        component: _apphome_page__WEBPACK_IMPORTED_MODULE_6__["ApphomePage"]
    }
];
var ApphomePageModule = /** @class */ (function () {
    function ApphomePageModule() {
    }
    ApphomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_apphome_page__WEBPACK_IMPORTED_MODULE_6__["ApphomePage"]]
        })
    ], ApphomePageModule);
    return ApphomePageModule;
}());



/***/ }),

/***/ "./src/app/homepage/apphome.page.html":
/*!********************************************!*\
  !*** ./src/app/homepage/apphome.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" slot=\"icon-only\" (click)=\"logout()\">\n              <ion-icon name=\"log-out\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      <ion-title>\n        Home\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <img src=\"https://www.pictorem.com/collection/900_Jaeda-DeWalt_smr-flower-5.jpg\" style=\"width:100%; height:100%;\" alt=\"Logo\">\n  </ion-content>"

/***/ }),

/***/ "./src/app/homepage/apphome.page.scss":
/*!********************************************!*\
  !*** ./src/app/homepage/apphome.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25pa2FyYWovRGVza3RvcC9zd2VuMzI1L3N3ZW4zMjUtYTEvc3JjL2FwcC9ob21lcGFnZS9hcHBob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2FwcGhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICBmb250LXNpemU6IDNlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/apphome.page.ts":
/*!******************************************!*\
  !*** ./src/app/homepage/apphome.page.ts ***!
  \******************************************/
/*! exports provided: ApphomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApphomePage", function() { return ApphomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);




var ApphomePage = /** @class */ (function () {
    function ApphomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ApphomePage.prototype.ngOnInit = function () {
    };
    ApphomePage.prototype.logout = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut().then(function () {
            console.log('signedout');
            _this.navCtrl.navigateForward('/loggedout');
            // this.navCtrl.navigateRoot('');
        }).catch(function (err) {
            console.log(err);
        });
    };
    ApphomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apphome',
            template: __webpack_require__(/*! ./apphome.page.html */ "./src/app/homepage/apphome.page.html"),
            styles: [__webpack_require__(/*! ./apphome.page.scss */ "./src/app/homepage/apphome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ApphomePage);
    return ApphomePage;
}());



/***/ })

}]);
//# sourceMappingURL=homepage-apphome-module.js.map