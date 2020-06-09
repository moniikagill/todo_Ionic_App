(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timer-timer-module"],{

/***/ "./node_modules/ng-circle-progress/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ng-circle-progress/index.js ***!
  \**************************************************/
/*! exports provided: NgCircleProgressModule, CircleProgressOptions, CircleProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function() { return NgCircleProgressModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function() { return CircleProgressOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function() { return CircleProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

var CircleProgressOptions = /** @class */ (function () {
    function CircleProgressOptions() {
        this.class = '';
        this.backgroundGradient = false;
        this.backgroundColor = 'transparent';
        this.backgroundGradientStopColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsFontWeight = 'normal';
        this.unitsColor = '#444444';
        this.outerStrokeGradient = false;
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeGradientStopColor = 'transparent';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.titleFontWeight = 'normal';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.subtitleFontWeight = 'normal';
        this.imageSrc = undefined;
        this.imageHeight = undefined;
        this.imageWidth = undefined;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
        this.showZeroOuterStroke = true;
        this.lazy = true;
    }
    return CircleProgressOptions;
}());
/**
 * \@dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351
 */
var CircleProgressComponent = /** @class */ (function () {
    function CircleProgressComponent(defaultOptions, elRef, document) {
        var _this = this;
        this.elRef = elRef;
        this.document = document;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // <svg> of component
        this.svgElement = null;
        // whether <svg> is in viewport
        this.isInViewport = false;
        // event for notifying viewport change caused by scrolling or resizing
        this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;
        this.render = function () {
            _this.applyOptions();
            if (_this.options.lazy) {
                // Draw svg if it doesn't exist
                // Draw svg if it doesn't exist
                _this.svgElement === null && _this.draw(_this._lastPercent);
                // Draw it only when it's in the viewport
                if (_this.isInViewport) {
                    // Draw it at the latest position when I am in.
                    if (_this.options.animation && _this.options.animationDuration > 0) {
                        _this.animate(_this._lastPercent, _this.options.percent);
                    }
                    else {
                        _this.draw(_this.options.percent);
                    }
                    _this._lastPercent = _this.options.percent;
                }
            }
            else {
                if (_this.options.animation && _this.options.animationDuration > 0) {
                    _this.animate(_this._lastPercent, _this.options.percent);
                }
                else {
                    _this.draw(_this.options.percent);
                }
                _this._lastPercent = _this.options.percent;
            }
        };
        this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
            var /** @type {?} */ angleInRadius = angleInDegrees * Math.PI / 180;
            var /** @type {?} */ x = centerX + Math.sin(angleInRadius) * radius;
            var /** @type {?} */ y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = function (percent) {
            // make percent reasonable
            percent = (percent === undefined) ? _this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            var /** @type {?} */ circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            var /** @type {?} */ boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;
            if (_this.options.showBackground) {
                boxSize += (_this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            var /** @type {?} */ centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            var /** @type {?} */ startPoint = { x: centre.x, y: centre.y - _this.options.radius };
            // get the end point of the arc
            var /** @type {?} */ endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 * (_this.options.clockwise ?
                circlePercent :
                (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (_this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            var /** @type {?} */ largeArcFlag, /** @type {?} */ sweepFlag;
            if (circlePercent > 50) {
                _a = _this.options.clockwise ? [1, 1] : [1, 0], largeArcFlag = _a[0], sweepFlag = _a[1];
            }
            else {
                _b = _this.options.clockwise ? [0, 1] : [0, 0], largeArcFlag = _b[0], sweepFlag = _b[1];
            }
            // percent may not equal the actual percent
            var /** @type {?} */ titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
            var /** @type {?} */ titleTextPercent = titlePercent > _this.options.maxPercent ?
                _this.options.maxPercent.toFixed(_this.options.toFixed) + "+" : titlePercent.toFixed(_this.options.toFixed);
            var /** @type {?} */ subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent;
            // get title object
            var /** @type {?} */ title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.titleColor,
                fontSize: _this.options.titleFontSize,
                fontWeight: _this.options.titleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function') {
                var /** @type {?} */ formatted = _this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = formatted.slice();
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (_this.options.title instanceof Array) {
                        title.texts = _this.options.title.slice();
                    }
                    else {
                        title.texts.push(_this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            var /** @type {?} */ subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.subtitleColor,
                fontSize: _this.options.subtitleFontSize,
                fontWeight: _this.options.subtitleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function') {
                var /** @type {?} */ formatted = _this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = formatted.slice();
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.subtitle instanceof Array) {
                    subtitle.texts = _this.options.subtitle.slice();
                }
                else {
                    subtitle.texts.push(_this.options.subtitle.toString());
                }
            }
            // get units object
            var /** @type {?} */ units = {
                text: "" + _this.options.units,
                fontSize: _this.options.unitsFontSize,
                fontWeight: _this.options.unitsFontWeight,
                color: _this.options.unitsColor
            };
            // get total count of text lines to be shown
            var /** @type {?} */ rowCount = 0, /** @type {?} */ rowNum = 1;
            _this.options.showTitle && (rowCount += title.texts.length);
            _this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (_this.options.showTitle) {
                for (var _i = 0, _c = title.texts; _i < _c.length; _i++) {
                    var span = _c[_i];
                    title.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // calc dy for each tspan for subtitle
            if (_this.options.showSubtitle) {
                for (var _d = 0, _e = subtitle.texts; _d < _e.length; _d++) {
                    var span = _e[_d];
                    subtitle.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // create ID for gradient element
            if (null === _this._gradientUUID) {
                _this._gradientUUID = _this.uuid();
            }
            // Bring it all together
            // Bring it all together
            _this.svg = {
                viewBox: "0 0 " + boxSize + " " + boxSize,
                // Set both width and height to '100%' if it's responsive
                width: _this.options.responsive ? '100%' : boxSize,
                height: _this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
                    fill: _this.options.backgroundColor,
                    fillOpacity: _this.options.backgroundOpacity,
                    stroke: _this.options.backgroundStroke,
                    strokeWidth: _this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: "M " + startPoint.x + " " + startPoint.y + "\n        A " + _this.options.radius + " " + _this.options.radius + " 0 " + largeArcFlag + " " + sweepFlag + " " + endPoint.x + " " + endPoint.y,
                    stroke: _this.options.outerStrokeColor,
                    strokeWidth: _this.options.outerStrokeWidth,
                    strokeLinecap: _this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 - _this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: _this.options.innerStrokeColor,
                    strokeWidth: _this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
                image: {
                    x: centre.x - _this.options.imageWidth / 2,
                    y: centre.y - _this.options.imageHeight / 2,
                    src: _this.options.imageSrc,
                    width: _this.options.imageWidth,
                    height: _this.options.imageHeight,
                },
                outerLinearGradient: {
                    id: 'outer-linear-' + _this._gradientUUID,
                    colorStop1: _this.options.outerStrokeColor,
                    colorStop2: _this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : _this.options.outerStrokeGradientStopColor,
                },
                radialGradient: {
                    id: 'radial-' + _this._gradientUUID,
                    colorStop1: _this.options.backgroundColor,
                    colorStop2: _this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : _this.options.backgroundGradientStopColor,
                }
            };
            var _a, _b;
        };
        this.getAnimationParameters = function (previousPercent, currentPercent) {
            var /** @type {?} */ MIN_INTERVAL = 10;
            var /** @type {?} */ times, /** @type {?} */ step, /** @type {?} */ interval;
            var /** @type {?} */ fromPercent = _this.options.startFromZero ? 0 : (previousPercent < 0 ? 0 : previousPercent);
            var /** @type {?} */ toPercent = currentPercent < 0 ? 0 : _this.min(currentPercent, _this.options.maxPercent);
            var /** @type {?} */ delta = Math.abs(Math.round(toPercent - fromPercent));
            if (delta >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(delta / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = delta;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(_this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = _this.options.animationDuration / interval;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && delta > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(delta / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = function (previousPercent, currentPercent) {
            if (_this._timerSubscription && !_this._timerSubscription.closed) {
                _this._timerSubscription.unsubscribe();
            }
            var /** @type {?} */ fromPercent = _this.options.startFromZero ? 0 : previousPercent;
            var /** @type {?} */ toPercent = currentPercent;
            var _a = _this.getAnimationParameters(fromPercent, toPercent), step = _a.step, interval = _a.interval;
            var /** @type {?} */ count = fromPercent;
            if (fromPercent < toPercent) {
                _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(function () {
                    count += step;
                    if (count <= toPercent) {
                        if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                            _this.draw(toPercent);
                            _this._timerSubscription.unsubscribe();
                        }
                        else {
                            _this.draw(count);
                        }
                    }
                    else {
                        _this.draw(toPercent);
                        _this._timerSubscription.unsubscribe();
                    }
                });
            }
            else {
                _this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(function () {
                    count -= step;
                    if (count >= toPercent) {
                        if (!_this.options.animateTitle && !_this.options.animateSubtitle && toPercent >= 100) {
                            _this.draw(toPercent);
                            _this._timerSubscription.unsubscribe();
                        }
                        else {
                            _this.draw(count);
                        }
                    }
                    else {
                        _this.draw(toPercent);
                        _this._timerSubscription.unsubscribe();
                    }
                });
            }
        };
        this.emitClickEvent = function (event) {
            if (_this.options.renderOnClick) {
                _this.animate(0, _this.options.percent);
            }
            _this.onClick.emit(event);
        };
        this.applyOptions = function () {
            // the options of <circle-progress> may change already
            for (var _i = 0, _a = Object.keys(_this.options); _i < _a.length; _i++) {
                var name_1 = _a[_i];
                if (_this.hasOwnProperty(name_1) && _this[name_1] !== undefined) {
                    _this.options[name_1] = _this[name_1];
                }
                else if (_this.templateOptions && _this.templateOptions[name_1] !== undefined) {
                    _this.options[name_1] = _this.templateOptions[name_1];
                }
            }
            // make sure key options valid
            // make sure key options valid
            _this.options.radius = Math.abs(+_this.options.radius);
            _this.options.space = +_this.options.space;
            _this.options.percent = +_this.options.percent > 0 ? +_this.options.percent : 0;
            _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
            _this.options.animationDuration = Math.abs(_this.options.animationDuration);
            _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
            _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
            _this.options.backgroundPadding = +_this.options.backgroundPadding;
        };
        this.getRelativeY = function (rowNum, rowCount) {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            var /** @type {?} */ initialOffset = -0.18, /** @type {?} */ offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = function (a, b) {
            return a < b ? a : b;
        };
        this.max = function (a, b) {
            return a > b ? a : b;
        };
        this.uuid = function () {
            // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
            var /** @type {?} */ dt = new Date().getTime();
            var /** @type {?} */ uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var /** @type {?} */ r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        this.findSvgElement = function () {
            if (this.svgElement === null) {
                var /** @type {?} */ tags = this.elRef.nativeElement.getElementsByTagName('svg');
                if (tags.length > 0) {
                    this.svgElement = tags[0];
                }
            }
        };
        this.checkViewport = function () {
            _this.findSvgElement();
            var /** @type {?} */ previousValue = _this.isInViewport;
            _this.isInViewport = _this.isElementInViewport(_this.svgElement);
            if (previousValue !== _this.isInViewport) {
                _this.onViewportChanged.emit({ oldValue: previousValue, newValue: _this.isInViewport });
            }
        };
        this.onScroll = function (event) {
            _this.checkViewport();
        };
        this.loadEventsForLazyMode = function () {
            if (_this.options.lazy) {
                _this.document.addEventListener('scroll', _this.onScroll, true);
                _this.window.addEventListener('resize', _this.onScroll, true);
                if (_this._viewportChangedSubscriber === null) {
                    _this._viewportChangedSubscriber = _this.onViewportChanged.subscribe(function (_a) {
                        var oldValue = _a.oldValue, newValue = _a.newValue;
                        newValue ? _this.render() : null;
                    });
                }
                // svgElement must be created in DOM before being checked.
                // Is there a better way to check the existence of svgElemnt?
                var /** @type {?} */ _timer_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 50).subscribe(function () {
                    _this.svgElement === null ? _this.checkViewport() : _timer_1.unsubscribe();
                });
            }
        };
        this.unloadEventsForLazyMode = function () {
            // Remove event listeners
            // Remove event listeners
            _this.document.removeEventListener('scroll', _this.onScroll, true);
            _this.window.removeEventListener('resize', _this.onScroll, true);
            // Unsubscribe onViewportChanged
            if (_this._viewportChangedSubscriber !== null) {
                _this._viewportChangedSubscriber.unsubscribe();
                _this._viewportChangedSubscriber = null;
            }
        };
        this.document = document;
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    /**
     * @return {?}
     */
    CircleProgressComponent.prototype.isDrawing = /**
     * @return {?}
     */
    function () {
        return (this._timerSubscription && !this._timerSubscription.closed);
    };
    /**
     * @param {?} el
     * @return {?}
     */
    CircleProgressComponent.prototype.isElementInViewport = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        // Return false if el has not been created in page.
        if (el === null || el === undefined)
            return false;
        // Check if the element is out of view due to a container scrolling
        var /** @type {?} */ rect = el.getBoundingClientRect(), /** @type {?} */ parent = el.parentNode, /** @type {?} */ parentRect;
        do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom)
                return false;
            if (rect.bottom <= parentRect.top)
                return false;
            if (rect.left >= parentRect.right)
                return false;
            if (rect.right <= parentRect.left)
                return false;
            parent = parent.parentNode;
        } while (parent != this.document.body);
        // Check its within the document viewport
        if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight))
            return false;
        if (rect.bottom <= 0)
            return false;
        if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth))
            return false;
        if (rect.right <= 0)
            return false;
        return true;
    };
    /**
     * @return {?}
     */
    CircleProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loadEventsForLazyMode();
    };
    /**
     * @return {?}
     */
    CircleProgressComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unloadEventsForLazyMode();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CircleProgressComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.render();
        if ('lazy' in changes) {
            changes["lazy"].currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
        }
    };
    CircleProgressComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'circle-progress',
                    template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\"\n             [attr.viewBox]=\"svg.viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n             [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n            <defs>\n                <linearGradient *ngIf=\"options.outerStrokeGradient\" [attr.id]=\"svg.outerLinearGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop1\"  [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </linearGradient>\n                <radialGradient *ngIf=\"options.backgroundGradient\" [attr.id]=\"svg.radialGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.radialGradient.colorStop1\" [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.radialGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </radialGradient>\n            </defs>\n            <ng-container *ngIf=\"options.showBackground\">\n                <circle *ngIf=\"!options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        [attr.fill]=\"svg.backgroundCircle.fill\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n                <circle *ngIf=\"options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        attr.fill=\"url(#{{svg.radialGradient.id}})\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n            </ng-container>            \n            <circle *ngIf=\"options.showInnerStroke\"\n                    [attr.cx]=\"svg.circle.cx\"\n                    [attr.cy]=\"svg.circle.cy\"\n                    [attr.r]=\"svg.circle.r\"\n                    [attr.fill]=\"svg.circle.fill\"\n                    [attr.stroke]=\"svg.circle.stroke\"\n                    [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n            <ng-container *ngIf=\"+options.percent!==0 || options.showZeroOuterStroke\">\n                <path *ngIf=\"!options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        [attr.stroke]=\"svg.path.stroke\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n                <path *ngIf=\"options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        attr.stroke=\"url(#{{svg.outerLinearGradient.id}})\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n            </ng-container>\n            <text *ngIf=\"!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)\"\n                  alignment-baseline=\"baseline\"\n                  [attr.x]=\"svg.circle.cx\"\n                  [attr.y]=\"svg.circle.cy\"\n                  [attr.text-anchor]=\"svg.title.textAnchor\">\n                <ng-container *ngIf=\"options.showTitle\">\n                    <tspan *ngFor=\"let tspan of svg.title.tspans\"\n                           [attr.x]=\"svg.title.x\"\n                           [attr.y]=\"svg.title.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.title.fontSize\"\n                           [attr.font-weight]=\"svg.title.fontWeight\"\n                           [attr.fill]=\"svg.title.color\">{{tspan.span}}</tspan>\n                </ng-container>\n                <tspan *ngIf=\"options.showUnits\"\n                       [attr.font-size]=\"svg.units.fontSize\"\n                       [attr.font-weight]=\"svg.units.fontWeight\"\n                       [attr.fill]=\"svg.units.color\">{{svg.units.text}}</tspan>\n                <ng-container *ngIf=\"options.showSubtitle\">\n                    <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n                           [attr.x]=\"svg.subtitle.x\"\n                           [attr.y]=\"svg.subtitle.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.subtitle.fontSize\"\n                           [attr.font-weight]=\"svg.subtitle.fontWeight\"\n                           [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}</tspan>\n                </ng-container>\n            </text>\n            <image *ngIf=\"options.showImage\" preserveAspectRatio=\"none\" \n                [attr.height]=\"svg.image.height\"\n                [attr.width]=\"svg.image.width\"\n                [attr.xlink:href]=\"svg.image.src\"\n                [attr.x]=\"svg.image.x\"\n                [attr.y]=\"svg.image.y\"\n            />\n        </svg>\n    "
                },] },
    ];
    /** @nocollapse */
    CircleProgressComponent.ctorParameters = function () { return [
        { type: CircleProgressOptions },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    CircleProgressComponent.propDecorators = {
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundGradient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundGradientStopColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        space: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        percent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        toFixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxPercent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        renderOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        units: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        unitsFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        unitsFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        unitsColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outerStrokeGradient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outerStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outerStrokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outerStrokeGradientStopColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outerStrokeLinecap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        innerStrokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        innerStrokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        titleFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitleFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitleColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitleFontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        subtitleFontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageSrc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animateTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animateSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showUnits: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showBackground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showInnerStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clockwise: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        responsive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        startFromZero: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showZeroOuterStroke: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        lazy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        templateOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['options',] }]
    };
    return CircleProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgCircleProgressModule = /** @class */ (function () {
    function NgCircleProgressModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    NgCircleProgressModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: NgCircleProgressModule,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    };
    NgCircleProgressModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                    ],
                    declarations: [
                        CircleProgressComponent,
                    ],
                    exports: [
                        CircleProgressComponent,
                    ]
                },] },
    ];
    return NgCircleProgressModule;
}());




/***/ }),

/***/ "./src/app/timer/timer.module.ts":
/*!***************************************!*\
  !*** ./src/app/timer/timer.module.ts ***!
  \***************************************/
/*! exports provided: TimerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerPageModule", function() { return TimerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer.page */ "./src/app/timer/timer.page.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");







// Import ng-circle-progress

var routes = [
    {
        path: '',
        component: _timer_page__WEBPACK_IMPORTED_MODULE_6__["TimerPage"]
    }
];
var TimerPageModule = /** @class */ (function () {
    function TimerPageModule() {
    }
    TimerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300,
                    animation: false,
                    responsive: true,
                    renderOnClick: true,
                    lazy: false
                })
            ],
            declarations: [_timer_page__WEBPACK_IMPORTED_MODULE_6__["TimerPage"]]
        })
    ], TimerPageModule);
    return TimerPageModule;
}());



/***/ }),

/***/ "./src/app/timer/timer.page.html":
/*!***************************************!*\
  !*** ./src/app/timer/timer.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n <ion-toolbar>\n    <ion-title>Timer</ion-title><ion-buttons slot=\"end\">\n        <ion-button fill=\"clear\" slot=\"icon-only\" (click)=\"goback()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    </ion-header>\n<ion-content padding>\n    <ion-item class=\"top\" color=\"secondary\">\n      <ion-label>Timer Duration</ion-label>\n      <ion-datetime #myPicker display-format=\"mm:ss\" placeholder=\"Pick it\" [(ngModel)]=\"fullTime\" (ionChange)=\"updateMyDate(myPicker.value)\"></ion-datetime>\n      \n</ion-item>\n<circle-progress (click)=\"startTimer()\"\n\n[percent]=\"percent\"\n[maxPercent]=\"100\"\n[radius]=\"radius\"\n[showTitle]=\"false\"  \n[showSubtitle]=\"true\"\n[subtitle]=\"remainingTime\"\n[subtitleFontSize]=\"40\"\n[showUnits]=\"false\"\n[outerStrokeWidth]=\"16\"\n[outerStrokeColor]=\"'#8000FF'\"\n[showZeroOuterStroke]=\"false\"\n[backgroundStroke]=\"'#33003F'\"\n[backgroundStrokeWidth]=\"3\"\n[outerStrokeGradient]=\"true\"\n[outerStrokeGradientStopColor]=\"'#FF00CB'\"\n[showInnerStroke]=\"false\"\n>\n</circle-progress>\n\n<p>{{elapsed.h}}:{{elapsed.m}}:{{elapsed.s}}</p>\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ng-container *ngIf=\"timer == false; else running\">\n    <ion-fab-button color=\"secondary\" (click)=\"startTimer()\">\n        <ion-icon name=\"play\"></ion-icon>\n      </ion-fab-button>\n  </ng-container> \n  <ng-template #running>\n      <ion-fab-button color=\"secondary\" (click)=\"stopTimer()\">\n          <ion-icon name=\"square\"></ion-icon>\n        </ion-fab-button>\n  </ng-template>\n</ion-fab>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/timer/timer.page.scss":
/*!***************************************!*\
  !*** ./src/app/timer/timer.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 3em;\n  color: #565656;\n  width: 100%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb25pa2FyYWovRGVza3RvcC9zd2VuMzI1L3N3ZW4zMjUtYTEvc3JjL2FwcC90aW1lci90aW1lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RpbWVyL3RpbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGNvbG9yOiAjNTY1NjU2O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/timer/timer.page.ts":
/*!*************************************!*\
  !*** ./src/app/timer/timer.page.ts ***!
  \*************************************/
/*! exports provided: TimerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerPage", function() { return TimerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TimerPage = /** @class */ (function () {
    function TimerPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.elapsed = {
            h: '00',
            m: '00',
            s: '00'
        };
        this.progress = 0;
        this.overallProgress = 0;
        this.percent = 0;
        this.radius = 100;
        this.minutes = 1;
        this.seconds = 10;
        this.timer = false;
        this.overallTimer = false;
        this.fullTime = '00:02:00';
        this.countDownTimer = false;
        this.timeLeft = {
            m: '00',
            s: '00'
        };
        this.remainingTime = this.timeLeft.m + ":" + this.timeLeft.s;
    }
    TimerPage.prototype.ngOnInit = function () {
    };
    TimerPage.prototype.goback = function () {
        this.navCtrl.navigateForward(['/apphome']);
    };
    TimerPage.prototype.touchMe = function () {
        console.log('touched');
    };
    TimerPage.prototype.startTimer = function () {
        var _this = this;
        if (this.timer) {
            clearInterval(this.timer);
            clearInterval(this.countDownTimer);
        }
        if (!this.overallTimer) {
            this.progressTimer();
        }
        this.timer = false;
        this.percent = 0;
        this.progress = 0;
        var timeSplit = this.fullTime.split(':');
        this.minutes = timeSplit[1];
        this.seconds = timeSplit[2];
        var totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);
        var secondsLeft = totalSeconds;
        var forwardingTimer = function () {
            if (_this.percent == _this.radius)
                clearInterval(_this.timer);
            _this.percent = Math.floor((_this.progress / totalSeconds) * 100);
            ++_this.progress;
        };
        var backTimer = function () {
            if (secondsLeft >= 0) {
                _this.timeLeft.m = Math.floor(secondsLeft / 60);
                _this.timeLeft.s = secondsLeft - (60 * _this.timeLeft.m);
                _this.remainingTime = _this.pad(_this.timeLeft.m, 2) + ":" + _this.pad(_this.timeLeft.s, 2);
                secondsLeft--;
            }
        };
        // run once when clicked
        forwardingTimer();
        backTimer();
        // timers start 1 second later
        this.countDownTimer = setInterval(backTimer, 1000);
        this.timer = setInterval(forwardingTimer, 1000);
    };
    TimerPage.prototype.stopTimer = function () {
        clearInterval(this.countDownTimer);
        clearInterval(this.timer);
        clearInterval(this.overallTimer);
        this.timer = false;
        this.percent = 0;
        this.progress = 0;
        this.countDownTimer = false;
        this.overallTimer = false;
        this.elapsed = {
            h: '00',
            m: '00',
            s: '00'
        };
        this.timeLeft = {
            m: '00',
            s: '00'
        };
        this.remainingTime = this.pad(this.timeLeft.m, 2) + ":" + this.pad(this.timeLeft.s, 2);
    };
    TimerPage.prototype.progressTimer = function () {
        var _this = this;
        var ctdownDate = new Date();
        this.overallTimer = setInterval(function () {
            var now = new Date().getTime();
            //  distance between now an the count down date
            var dist = now - ctdownDate.getTime();
            // calculating time for hours, minutes and seconds
            _this.elapsed.h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            _this.elapsed.m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
            _this.elapsed.s = Math.floor((dist % (1000 * 60)) / 1000);
            _this.elapsed.h = _this.pad(_this.elapsed.h, 2);
            _this.elapsed.m = _this.pad(_this.elapsed.m, 2);
            _this.elapsed.s = _this.pad(_this.elapsed.s, 2);
        }, 1000);
    };
    TimerPage.prototype.pad = function (num, size) {
        var x = num + '';
        while (x.length < size) {
            x = '0' + x;
        }
        return x;
    };
    TimerPage.prototype.updateMyDate = function ($event) {
        console.log($event.split(':'));
    };
    TimerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.page.html */ "./src/app/timer/timer.page.html"),
            styles: [__webpack_require__(/*! ./timer.page.scss */ "./src/app/timer/timer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], TimerPage);
    return TimerPage;
}());



/***/ })

}]);
//# sourceMappingURL=timer-timer-module.js.map