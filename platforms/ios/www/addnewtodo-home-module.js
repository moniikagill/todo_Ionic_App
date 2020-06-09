(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addnewtodo-home-module"],{

/***/ "./src/app/addnewtodo/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/addnewtodo/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/addnewtodo/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/addnewtodo/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/addnewtodo/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n     <ion-title>Add new Todo</ion-title><ion-buttons slot=\"end\">\n         <ion-button fill=\"clear\" slot=\"icon-only\" (click)=\"goback()\">\n           <ion-icon name=\"arrow-back\"></ion-icon>\n         </ion-button>\n       </ion-buttons>\n     </ion-toolbar>\n     </ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input placeholder=\"Enter\" [(ngModel)]=\"TitleName\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input placeholder=\"Description\" [(ngModel)]=\"TaskDescription\"></ion-input>\n        </ion-item>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <ion-button (click)=\"CreateRecord()\" [disabled]=\"!TitleName || !TaskDescription\">\n          <ion-icon size=\"small\" slot=\"icon-only\" name=\"add\"></ion-icon>\n          &nbsp;Create Record\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/addnewtodo/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/addnewtodo/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZG5ld3RvZG8vaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/addnewtodo/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/addnewtodo/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crud.service */ "./src/app/crud.service.ts");






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, db, crudService, firestore) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.crudService = crudService;
        this.firestore = firestore;
        this.todos = [];
        this.userId = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.CreateRecord = function () {
        var _this = this;
        var record = {};
        record['Title'] = this.TitleName;
        record['Description'] = this.TaskDescription;
        this.createnewTask(record).then(function (resp) {
            _this.TitleName = "";
            _this.TaskDescription = undefined;
            console.log(resp);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.createnewTask = function (record) {
        return this.db.collection('tests').doc('subtest').collection(this.userId).add(record);
    };
    HomePage.prototype.addnewTodo = function () {
        this.navCtrl.navigateForward(['/add-newtodo']);
    };
    HomePage.prototype.goback = function () {
        this.navCtrl.navigateForward(['/edittodo']);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/addnewtodo/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/addnewtodo/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=addnewtodo-home-module.js.map