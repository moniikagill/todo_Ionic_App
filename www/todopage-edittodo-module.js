(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todopage-edittodo-module"],{

/***/ "./src/app/todopage/edittodo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/todopage/edittodo.module.ts ***!
  \*********************************************/
/*! exports provided: EdittodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdittodoPageModule", function() { return EdittodoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edittodo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edittodo.page */ "./src/app/todopage/edittodo.page.ts");







var routes = [
    {
        path: '',
        component: _edittodo_page__WEBPACK_IMPORTED_MODULE_6__["EdittodoPage"]
    }
];
var EdittodoPageModule = /** @class */ (function () {
    function EdittodoPageModule() {
    }
    EdittodoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edittodo_page__WEBPACK_IMPORTED_MODULE_6__["EdittodoPage"]]
        })
    ], EdittodoPageModule);
    return EdittodoPageModule;
}());



/***/ }),

/***/ "./src/app/todopage/edittodo.page.html":
/*!*********************************************!*\
  !*** ./src/app/todopage/edittodo.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n       <ion-title>ToDo</ion-title><ion-buttons slot=\"end\">\n           <ion-button fill=\"clear\" slot=\"icon-only\" (click)=\"goback()\">\n             <ion-icon name=\"arrow-back\"></ion-icon>\n           </ion-button>\n         </ion-buttons>\n       </ion-toolbar>\n       </ion-header>\n   \n  <ion-content padding>\n    <ion-card *ngFor=\"let item of tests\">\n      <span *ngIf=\"!item.isEdit; else elseBlock\">\n        <ion-card-header>\n          <ion-card-title>{{item.TitleName}} </ion-card-title>\n          <ion-card-subtitle>{{item.TaskDescription}} </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n   \n          <ion-button shape=\"round\" color=\"secondary\" size=\"small\" (click)=\"EditRecord(item)\">\n            <ion-icon size=\"small\" slot=\"icon-only\" name=\"create\"></ion-icon>\n   \n          </ion-button>\n          <ion-button shape=\"round\" color=\"danger\" size=\"small\" (click)=\"RemoveRecord(item.id)\">\n            <ion-icon size=\"small\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n   \n          </ion-button>\n        </ion-card-content>\n      </span>\n      <ng-template #elseBlock>\n        <ion-card-header>\n          <ion-card-title>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  Edit\n                </ion-col>\n                <ion-col>\n                  <ion-button fill=\"clear\" color=\"medium\" size=\"small\" (click)=\"item.isEdit = false\">\n                    Cancel\n                  </ion-button>\n                </ion-col>\n                <ion-col>\n                  <ion-button fill=\"outline\" color=\"success\" size=\"small\" (click)=\"updateRecord(item)\">\n                    Update\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-label><strong>Title</strong></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"item.TitleName\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label><strong>Description</strong></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"item.TaskDescription\"></ion-input>\n          </ion-item>\n          \n        </ion-card-content>\n      </ng-template>\n    </ion-card>\n   <!--  floating action button -->\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\" (click)=\"addnewTodo()\">\n    <ion-fab-button color=\"danger\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  </ion-content>"

/***/ }),

/***/ "./src/app/todopage/edittodo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/todopage/edittodo.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9wYWdlL2VkaXR0b2RvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/todopage/edittodo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/todopage/edittodo.page.ts ***!
  \*******************************************/
/*! exports provided: EdittodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdittodoPage", function() { return EdittodoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var EdittodoPage = /** @class */ (function () {
    function EdittodoPage(navCtrl, toastCtrl, db, firestore) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.firestore = firestore;
        this.todos = [];
        this.userId = firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
    }
    EdittodoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.readTasks().subscribe(function (data) {
            _this.tests = data.map(function (e) {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    TitleName: e.payload.doc.data()['Title'],
                    TaskDescription: e.payload.doc.data()['Description'],
                };
            });
            console.log(_this.tests);
        });
    };
    EdittodoPage.prototype.RemoveRecord = function (rowID) {
        this.deleteTask(rowID);
    };
    EdittodoPage.prototype.EditRecord = function (record) {
        record.isEdit = true;
        record.EditTitleName = record.TitleName;
        record.EditTaskDescription = record.TaskDescription;
    };
    EdittodoPage.prototype.updateRecord = function (recordRow) {
        var record = {};
        record['Title'] = recordRow.TitleName;
        record['Description'] = recordRow.TaskDescription;
        this.updateTask(recordRow.id, record);
        recordRow.isEdit = false;
    };
    EdittodoPage.prototype.readTasks = function () {
        return this.db.collection('tests').doc('subtest').collection(this.userId).snapshotChanges();
    };
    EdittodoPage.prototype.updateTask = function (recordID, record) {
        this.db.collection('tests').doc('subtest').collection(this.userId).doc(recordID).update(record);
    };
    EdittodoPage.prototype.deleteTask = function (record_id) {
        this.db.collection('tests').doc('subtest').collection(this.userId).doc(record_id).delete();
    };
    EdittodoPage.prototype.goback = function () {
        this.navCtrl.navigateForward(['/apphome']);
    };
    EdittodoPage.prototype.addnewTodo = function () {
        this.navCtrl.navigateForward(['/home']);
    };
    EdittodoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edittodo',
            template: __webpack_require__(/*! ./edittodo.page.html */ "./src/app/todopage/edittodo.page.html"),
            styles: [__webpack_require__(/*! ./edittodo.page.scss */ "./src/app/todopage/edittodo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], EdittodoPage);
    return EdittodoPage;
}());



/***/ })

}]);
//# sourceMappingURL=todopage-edittodo-module.js.map