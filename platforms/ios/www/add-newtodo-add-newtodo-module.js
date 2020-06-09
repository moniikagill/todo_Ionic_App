(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-newtodo-add-newtodo-module"],{

/***/ "./src/app/add-newtodo/add-newtodo.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-newtodo/add-newtodo.module.ts ***!
  \***************************************************/
/*! exports provided: AddNewtodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewtodoPageModule", function() { return AddNewtodoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_newtodo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-newtodo.page */ "./src/app/add-newtodo/add-newtodo.page.ts");







var routes = [
    {
        path: '',
        component: _add_newtodo_page__WEBPACK_IMPORTED_MODULE_6__["AddNewtodoPage"]
    }
];
var AddNewtodoPageModule = /** @class */ (function () {
    function AddNewtodoPageModule() {
    }
    AddNewtodoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_newtodo_page__WEBPACK_IMPORTED_MODULE_6__["AddNewtodoPage"]]
        })
    ], AddNewtodoPageModule);
    return AddNewtodoPageModule;
}());



/***/ }),

/***/ "./src/app/add-newtodo/add-newtodo.page.html":
/*!***************************************************!*\
  !*** ./src/app/add-newtodo/add-newtodo.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n        <ion-buttons slot=\"start\">\n        <ion-back-button icon=\"arrow-back\"></ion-back-button></ion-buttons>\n    <ion-title>Add a new task</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">ToDo Title</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"todotitle\"></ion-input>\n    </ion-item>\n    <ion-item>\n    <ion-label position=\"stacked\">Task Description</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"tododescription\"></ion-input>\n    </ion-item> \n    <ion-item>\n        <ion-label position=\"stacked\">Date</ion-label>\n        <ion-datetime min=\"2019\" dispaly-format=\"MM/DD/YYYY\" [(ngModel)]=\"tododate\"></ion-datetime>\n        </ion-item>\n  </ion-list>\n<ion-button expand=\"block\" shape=\"round\" color=\"secondary\" (click)=\"addtodo()\">Add this task</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-newtodo/add-newtodo.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-newtodo/add-newtodo.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1uZXd0b2RvL2FkZC1uZXd0b2RvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/add-newtodo/add-newtodo.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-newtodo/add-newtodo.page.ts ***!
  \*************************************************/
/*! exports provided: AddNewtodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewtodoPage", function() { return AddNewtodoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


// importing firebase

// importing the toast controller

var AddNewtodoPage = /** @class */ (function () {
    function AddNewtodoPage(toastCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        // assigning the correct uid to the correct user
        this.todoowner = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
    }
    AddNewtodoPage.prototype.ngOnInit = function () {
    };
    AddNewtodoPage.prototype.addtodo = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('todos').add({
            title: this.todotitle,
            description: this.tododescription,
            date: new Date(this.tododate),
            owner: this.todoowner,
            status: 'incomplete',
            created: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.serverTimestamp()
        }).then(function (docRef) {
            _this.toastCtrl.create({
                message: 'Your task has been added!',
                duration: 3000
            }).then(function (toast) {
                toast.present();
                _this.navCtrl.back();
            });
        }).catch(function (err) {
            _this.toastCtrl.create({
                message: err.message,
                duration: 3000
            }).then(function (toast) {
                toast.present();
            });
        });
    };
    AddNewtodoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-newtodo',
            template: __webpack_require__(/*! ./add-newtodo.page.html */ "./src/app/add-newtodo/add-newtodo.page.html"),
            styles: [__webpack_require__(/*! ./add-newtodo.page.scss */ "./src/app/add-newtodo/add-newtodo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], AddNewtodoPage);
    return AddNewtodoPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-newtodo-add-newtodo-module.js.map