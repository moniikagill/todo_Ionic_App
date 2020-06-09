(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shoppinglist-todo-module"],{

/***/ "./src/app/shoppinglist/todo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shoppinglist/todo.module.ts ***!
  \*********************************************/
/*! exports provided: TodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPageModule", function() { return TodoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo.page */ "./src/app/shoppinglist/todo.page.ts");







var routes = [
    {
        path: '',
        component: _todo_page__WEBPACK_IMPORTED_MODULE_6__["TodoPage"]
    }
];
var TodoPageModule = /** @class */ (function () {
    function TodoPageModule() {
    }
    TodoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_todo_page__WEBPACK_IMPORTED_MODULE_6__["TodoPage"]]
        })
    ], TodoPageModule);
    return TodoPageModule;
}());



/***/ }),

/***/ "./src/app/shoppinglist/todo.page.html":
/*!*********************************************!*\
  !*** ./src/app/shoppinglist/todo.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back\"></ion-back-button></ion-buttons>\n    <ion-title>Shopping list</ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" slot=\"icon-only\" (click)=\"logout()\">\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let todo of todos\">\n      <ion-item>\n        <ion-label>\n          <h2>{{todo.data().title}}</h2>\n          <h3>{{todo.data().description}}</h3>\n          <p *ngIf=\"todo.data().date\" [innerHTML]= \"getDate(todo.data().date)\"></p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options slide=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"markDone(todo)\">\n         <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-item-option>\n       </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  \n  <!--  floating action button -->\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" (click)=\"addnewTodo()\">\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shoppinglist/todo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/shoppinglist/todo.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nbGlzdC90b2RvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shoppinglist/todo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/shoppinglist/todo.page.ts ***!
  \*******************************************/
/*! exports provided: TodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPage", function() { return TodoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");


// navcontroller import

// retreive documents from firebase


;
// import { AngularFireAuth } from '@angular/fire/auth'; public afAuth: AngularFireAuth
var TodoPage = /** @class */ (function () {
    function TodoPage(navCtrl, toastCtrl, db) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.todos = [];
        this.eventSource = [];
        this.userId = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
        this.getTodoData();
    }
    TodoPage.prototype.ngOnInit = function () {
    };
    // to display dtae nicely on the todo list page
    TodoPage.prototype.getDate = function (timestamp) {
        var date = timestamp.toDate();
        return date.toLocaleDateString();
    };
    // get the data displays the data from firebase
    TodoPage.prototype.getTodoData = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('todos')
            .where('owner', '==', this.userId)
            .where('status', '==', 'incomplete') // only show the tasks that are not marked as completed
            .onSnapshot(function (querySnapshot) {
            _this.todos = querySnapshot.docs; // docs will display all the documents that match the owner
        });
    };
    TodoPage.prototype.addnewTodo = function () {
        this.navCtrl.navigateForward(['/add-newtodo']);
    };
    TodoPage.prototype.EditRecord = function (record) {
        record.isEdit = true;
        record.EditName = record.Title;
        record.EditDescription = record.Description;
        record.EditDate = record.Date;
    };
    TodoPage.prototype.updateDocument = function (collectionName, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .collection(collectionName)
                .doc(docID)
                .update(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    TodoPage.prototype.gettodoData2 = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('todos').get().then(function (queryDocumentSnapshot) {
            console.log(queryDocumentSnapshot.docs);
            _this.todos = queryDocumentSnapshot.docs;
        });
    };
    TodoPage.prototype.editTodo = function () {
        this.navCtrl.navigateForward('/edittodo');
    };
    TodoPage.prototype.markDone = function (document) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('todos').doc(document.id).set({
            status: 'completed'
        }, {
            merge: true
        }).then(function () {
            _this.toastCtrl.create({
                message: 'This item is marked as completed!',
                duration: 2000
            }).then(function (toast) {
                toast.present();
            });
        });
    };
    TodoPage.prototype.logout = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut().then(function () {
            console.log('signedout');
            _this.navCtrl.navigateForward('/loggedout');
            // this.navCtrl.navigateRoot('');
        }).catch(function (err) {
            console.log(err);
        });
    };
    TodoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.page.html */ "./src/app/shoppinglist/todo.page.html"),
            styles: [__webpack_require__(/*! ./todo.page.scss */ "./src/app/shoppinglist/todo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], TodoPage);
    return TodoPage;
}());



/***/ })

}]);
//# sourceMappingURL=shoppinglist-todo-module.js.map