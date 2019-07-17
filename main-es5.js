(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/carousel/fesm5/hmurrar-carousel.js":
/*!******************************************************************************************!*\
  !*** C:/Users/hmurrar/WebstormProjects/carousel/dist/carousel/fesm5/hmurrar-carousel.js ***!
  \******************************************************************************************/
/*! exports provided: CarouselComponent, CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        // outputs
        this.scrollEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // is mouse down
        this.isMouseDown = false;
    }
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var carouselChildren = this.carousel.nativeElement.children;
        try {
            for (var carouselChildren_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(carouselChildren), carouselChildren_1_1 = carouselChildren_1.next(); !carouselChildren_1_1.done; carouselChildren_1_1 = carouselChildren_1.next()) {
                var child = carouselChildren_1_1.value;
                child.style['scroll-snap-align'] = 'center';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (carouselChildren_1_1 && !carouselChildren_1_1.done && (_a = carouselChildren_1.return)) _a.call(carouselChildren_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * handles mouse down event
     * @param event: MouseEvent
     */
    /**
     * handles mouse down event
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.onMouseDown = /**
     * handles mouse down event
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var carousel = this.carousel.nativeElement;
        this.isMouseDown = true;
        this.startX = event.pageX - carousel.offsetLeft;
        this.scrollLeft = carousel.scrollLeft;
    };
    /**
     * handles mouse up event
     */
    /**
     * handles mouse up event
     * @return {?}
     */
    CarouselComponent.prototype.onMouseUp = /**
     * handles mouse up event
     * @return {?}
     */
    function () {
        this.isMouseDown = false;
    };
    /**
     * handle mouse move
     * @param event: MouseEvent
     */
    /**
     * handle mouse move
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.onMouseMove = /**
     * handle mouse move
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // if mouse is now clicked while moving
        if (!this.isMouseDown) {
            // exit
            return;
        }
        /** @type {?} */
        var carousel = this.carousel.nativeElement;
        event.preventDefault();
        /** @type {?} */
        var x = event.pageX - carousel.offsetLeft;
        /** @type {?} */
        var walk = (x - this.startX) * 0.75;
        carousel.scrollLeft = this.scrollLeft - walk;
    };
    /**
     * emit true once the scroll of
     * the carousel reaches 70% of its whole width
     */
    /**
     * emit true once the scroll of
     * the carousel reaches 70% of its whole width
     * @return {?}
     */
    CarouselComponent.prototype.onScroll = /**
     * emit true once the scroll of
     * the carousel reaches 70% of its whole width
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollLeft = this.carousel.nativeElement.scrollLeft;
        /** @type {?} */
        var scrollWidth = this.carousel.nativeElement.scrollWidth;
        if (scrollLeft >= scrollWidth * 0.70) {
            this.scrollEnd.emit(true);
        }
    };
    CarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'pnm-carousel',
                    template: "<div #carousel\r\n     (scroll)=\"onScroll()\"\r\n     (mouseup)=\"onMouseUp()\"\r\n     (mousedown)=\"onMouseDown($event)\"\r\n     (mousemove)=\"onMouseMove($event)\"\r\n     class=\"Carousel\">\r\n  <ng-container *ngFor=\"let item of items\">\r\n    <ng-container [ngTemplateOutlet]=\"carouselItemTemplate\"\r\n                  [ngTemplateOutletContext]=\"{ $implicit: item }\">\r\n    </ng-container>\r\n  </ng-container>\r\n</div>\r\n",
                    styles: [":host{display:block}.Carousel{display:flex;flex-wrap:nowrap;padding:15px;overflow-y:hidden;white-space:nowrap;overflow-x:auto;cursor:-webkit-grab;cursor:grab;-ms-overflow-style:none;scrollbar-width:none;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.Carousel::-webkit-scrollbar{display:none}"]
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return []; };
    CarouselComponent.propDecorators = {
        carouselItemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['carouselItem', { static: true },] }],
        carousel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['carousel', { static: true },] }],
        scrollEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return CarouselComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        CarouselComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [CarouselComponent]
                },] }
    ];
    return CarouselModule;
}());


//# sourceMappingURL=hmurrar-carousel.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!*******************************************************************************************************!*\
  !*** C:/Users/hmurrar/WebstormProjects/carousel/node_modules/raw-loader!./src/app/app.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <pnm-carousel [items]=\"cards\"\n                (scrollEnd)=\"onCarouselScrollEnd($event)\">\n    <ng-template #carouselItem\n                 let-item>\n      <div class=\"Carousel__Item card\">\n        {{item}}\n      </div>\n    </ng-template>\n  </pnm-carousel>\n</div>\n"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  position: relative;\r\n  display: block;\r\n  width: 210px;\r\n  min-width: 210px;\r\n  height: 250px;\r\n  margin-right: 18px;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  transition: all .250s;\r\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Nhcm91c2VsLWV4YW1wbGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDJFQUEyRTtFQUMzRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InByb2plY3RzL2Nhcm91c2VsLWV4YW1wbGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDIxMHB4O1xyXG4gIG1pbi13aWR0aDogMjEwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4yNTBzO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsIDAsIDAsIC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgLjE1KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    }
    AppComponent.prototype.onCarouselScrollEnd = function (event) {
        console.log(event);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! carousel */ "../../dist/carousel/fesm5/hmurrar-carousel.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hmurrar\WebstormProjects\carousel\projects\carousel-example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map