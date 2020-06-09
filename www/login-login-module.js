(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"secondary\">\n        <ion-title>Log into your Account</ion-title>\n      </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n      <ion-item class=\"vert-space\">\n        <h1 class=\"center\">ToDo App</h1>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input type=\"email\" placeholder =\"student@email.com\" [(ngModel)]=\"this.email\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"stacked\">Password</ion-label>\n          <ion-input type=\"password\" placeholder =\"*********\" [(ngModel)]=\"this.password\"></ion-input>\n        </ion-item>\n    </ion-list>\n  <ion-button expand=\"block\" color=\"secondary\" shape=\"round\" (click)=\"login()\">Login</ion-button>\n  <ion-button fill=\"clear\" color=\"secondary\" (click)=\"signup()\">Don't have account? Signup Here</ion-button>\n  <ion-button  fill=\"clear\" color=\"secondary\"  (click)=\"resetPwd()\">\n    Forgot Password?\n  </ion-button>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vert-space {\n  margin-bottom: 75px;\n  margin-top: 75px;\n  --inner-border-width: 0px; }\n\n.center {\n  width: 100%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25pa2FyYWovRGVza3RvcC9zd2VuMzI1L3N3ZW4zMjUtYTEvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUFxQixFQUFBOztBQUd0QjtFQUNDLFdBQVc7RUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0LXNwYWNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xuICAgIG1hcmdpbi10b3A6IDc1cHg7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcbiAgIH1cbiAgIFxuICAgLmNlbnRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


// import firebase

// import the toast controller for the pop-up message

var LoginPage = /** @class */ (function () {
    function LoginPage(toastCtrl, navCtrl) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        // function to check if a user is currently logged in or not
        // onAuthStateChanged returns a user if user is not null
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // if user is logged in navigate the user to todo page of app
                _this.navCtrl.navigateForward(['/apphome']);
                //this.navCtrl.navigateForward(['/todo']);
            }
            else {
                // no user is logged in
            }
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(this.email, this.password).then(function (userObject) {
            console.log(userObject);
            // navigate the user to My todo page
            _this.toastCtrl.create({
                message: 'welcome to your Schedular',
                position: 'top',
                duration: 1000
            }).then(function (toast) {
                toast.present();
            });
            _this.email = '';
            _this.password = '';
            _this.navCtrl.navigateForward(['/apphome']);
        }).catch(function (err) {
            _this.toastCtrl.create({
                message: err.message,
                duration: 2000
            }).then(function (toast) {
                toast.present();
            });
        });
    };
    // need navigation controller for going to the signup page from login page
    LoginPage.prototype.signup = function () {
        this.navCtrl.navigateForward(['/signup']);
    };
    LoginPage.prototype.resetPwd = function () {
        this.navCtrl.navigateForward(['/resetpassword']);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map