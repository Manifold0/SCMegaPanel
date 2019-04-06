webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-table {\r\n    height: 100%;\r\n    table-layout: fixed;\r\n    width: 100%;\r\n    padding-top: calc(env(safe-area-inset-top) + 5px);\r\n    padding-right: calc(env(safe-area-inset-right) + 5px);\r\n    padding-bottom: calc(env(safe-area-inset-bottom) + 5px);\r\n    padding-left: calc(env(safe-area-inset-left) + 5px);\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n}\r\n\r\ntd {\r\n    border-radius: 10px;\r\n}\r\n\r\ntr {\r\n    height: calc(100% / 6);\r\n    width: calc(100% / 8);\r\n}\r\n\r\n.button-label {\r\n    position: relative;\r\n    height: 30%;\r\n}\r\n\r\n.button-image {\r\n    width: 100%;\r\n    -o-object-fit: scale-down;\r\n       object-fit: scale-down;\r\n}\r\n\r\n.background-img {\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: 50% 50%;\r\n    height: 100%;\r\n    max-height: 100%; \r\n    margin: 0 auto;\r\n}\r\n\r\n.button-text {\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n    text-overflow: clip;\r\n    word-wrap: break-word;\r\n    word-break: break-word; \r\n    font-family: panelfont;\r\n    font-size: 1.5vw;\r\n}\r\n\r\n.panel-button {\r\n    padding: 1%;\r\n    height: 99%;\r\n    text-align: center;\r\n    border-radius: 8px;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n}\r\n\r\n.panel-button:active {\r\n    -webkit-box-shadow: inset -2px 3px 82px -12px rgba(79,78,79,1);\r\n    box-shadow: inset -2px 3px 82px -12px rgba(79,78,79,1);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"color: white;\" *ngIf=\"error != null\">{{error}}</div>\n<table class=\"main-table\" \n    [style.backgroundColor]=\"currentView.backgroundColor || 'black'\"\n    [style.backgroundImage]=\"'url(' + currentView.backgroundImage + ')'\"\n    [style.backgroundSize]=\"currentView.backgroundImageStretch\">\n    <tr *ngFor=\"let row of counter(currentView.gridHeight)\">\n        <ng-container *ngFor=\"let col of counter(currentView.gridWidth)\">\n            <td [attr.colspan]=\"lookupDictItem(col, row) && lookupDictItem(col, row).bottomRight.x - lookupDictItem(col, row).topLeft.x + 1\" \n                [attr.rowspan]=\"lookupDictItem(col, row) && lookupDictItem(col, row).bottomRight.y - lookupDictItem(col, row).topLeft.y + 1\" \n                *ngIf=\"(lookupDictItem(col, row) && lookupDictItem(col, row).type != 'occupied') || lookupDictItem(col, row)  == null\">\n                <div (click)=\"buttonPressed(lookupDictItem(col, row))\" \n                    [style.backgroundColor]=\"lookupDictItem(col, row).backgroundColor\" \n                    [style.backgroundImage]=\"'url(' + lookupDictItem(col, row).backgroundImage + ')'\"\n                    [style.backgroundSize]=\"lookupDictItem(col, row).buttonImageStretch\"\n                    class=\"panel-button\"\n                    *ngIf=\"lookupDictItem(col, row) && lookupDictItem(col, row).type == 0\">\n                    <div *ngIf=\"lookupDictItem(col, row).buttonImage\"  \n                        [style.width]=\"(lookupDictItem(col, row).buttonText == null || lookupDictItem(col, row).buttonText == '') || (!lookupDictItem(col, row).isHorizontal) ? '100%' : '50%'\" \n                        [style.height]=\"(!lookupDictItem(col, row).isHorizontal && (lookupDictItem(col, row).buttonText != null && lookupDictItem(col, row).buttonText != '')) ? '50%' : '100%'\" \n                        [style.float]=\"lookupDictItem(col, row).isHorizontal ? 'left' : null\"\n                        [style.paddingTop]=\"(!lookupDictItem(col, row).isHorizontal && (lookupDictItem(col, row).buttonText != null && lookupDictItem(col, row).buttonText != '')) ? '5%' : null\"\n                        [style.paddingLeft]=\"lookupDictItem(col, row).isHorizontal && (lookupDictItem(col, row).buttonText != null && lookupDictItem(col, row).buttonText != '') ? '5%' : null\">\n                            <div class=\"background-img\" \n                                [style.backgroundImage]=\"'url(' + lookupDictItem(col, row).buttonImage + ')'\">\n                            </div>\n                    </div>\n                    <div *ngIf=\"(lookupDictItem(col, row).buttonText != null && lookupDictItem(col, row).buttonText != '')\" \n                        [style.height]=\"!lookupDictItem(col, row).isHorizontal && lookupDictItem(col, row).buttonImage  ? '50%' : '95%'\" \n                        [style.display]=\"lookupDictItem(col, row).isHorizontal && lookupDictItem(col, row).buttonImage ? 'inline' : null\"\n                        [style.width]=\"lookupDictItem(col, row).buttonImage == null || (!lookupDictItem(col, row).isHorizontal) ? '100%' : '50%'\" \n                        class=\"button-label\">\n                        <div style=\"display: table; height: 100%; overflow: hidden; margin: 0 auto;\">\n                            <div style=\"display: table-cell; vertical-align: middle; text-align: center\">\n                                <div>\n                                    <div class=\"button-text\" [style.color]=\"lookupDictItem(col, row).fontColor\">{{lookupDictItem(col, row).buttonText}}</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </ng-container>\n    </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_fetcher_config_fetcher_service__ = __webpack_require__("../../../../../src/app/services/config-fetcher/config-fetcher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(configFetcher) {
        var _this = this;
        this.configFetcher = configFetcher;
        this.lookupDictionary = {};
        this.currentView = {};
        this.config = {};
        this.error = null;
        configFetcher.getPanelConfig().then(function (x) {
            _this.config = x;
            try {
                var defaultView = x.views.filter(function (x) { return x.isDefaultView; })[0];
                _this.initializeView(defaultView);
            }
            catch (e) {
                _this.error = e;
            }
        }).catch(function (error) {
            _this.error = error;
        });
    }
    AppComponent.prototype.initializeView = function (view) {
        this.currentView = view;
        this.initializeLookupDictionary(view.panelElements);
    };
    AppComponent.prototype.initializeLookupDictionary = function (panelConfig) {
        var _this = this;
        this.lookupDictionary = {};
        panelConfig.forEach(function (element) {
            _this.fillLookupTable(element);
            var xDistance = element.bottomRight.x - element.topLeft.x;
            var yDistance = element.bottomRight.y - element.topLeft.y;
            element.isHorizontal = xDistance > yDistance;
        });
    };
    AppComponent.prototype.fillLookupTable = function (element) {
        var topLeftKey = this.getLookupKey(element.topLeft.x, element.topLeft.y);
        for (var x = element.topLeft.x; x <= element.bottomRight.x; x++) {
            for (var y = element.topLeft.y; y <= element.bottomRight.y; y++) {
                var key = this.getLookupKey(x, y);
                if (key === topLeftKey)
                    this.lookupDictionary[key] = element;
                if (key !== topLeftKey)
                    this.lookupDictionary[key] = { type: "occupied" };
            }
        }
    };
    AppComponent.prototype.lookupDictItem = function (col, row) {
        var key = this.getLookupKey(col, row);
        return this.lookupDictionary[key];
    };
    AppComponent.prototype.getLookupKey = function (x, y) {
        var key = x + "," + y;
        return key;
    };
    AppComponent.prototype.counter = function (i) {
        var foo = [];
        for (var x = 0; x < i; x++) {
            foo.push(x);
        }
        return foo;
    };
    AppComponent.prototype.buttonPressed = function (element) {
        try {
            if (element.redirectsToView) {
                var filteredViews = this.config.views.filter(function (x) { return x.viewId == element.redirectsToView; });
                if (filteredViews.count === 0)
                    return;
                var nextView = filteredViews[0];
                this.initializeView(nextView);
            }
            window.location.href = 'panelsapp://' + element.buttonId;
        }
        catch (e) {
            this.error = e;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_config_fetcher_config_fetcher_service__["a" /* ConfigFetcherService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_fetcher_config_fetcher_service__ = __webpack_require__("../../../../../src/app/services/config-fetcher/config-fetcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_config_fetcher_config_fetcher_service__["a" /* ConfigFetcherService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/config-fetcher/config-fetcher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigFetcherService; });
/* unused harmony export PanelConfig */
/* unused harmony export PanelView */
/* unused harmony export PanelElement */
/* unused harmony export Point */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigFetcherService = (function () {
    function ConfigFetcherService(http) {
        this.http = http;
    }
    ConfigFetcherService.prototype.getPanelConfig = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get("./assets/panel-config.json").subscribe(function (data) {
                try {
                    resolve(data.json());
                }
                catch (error) {
                    reject(error);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    ConfigFetcherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ConfigFetcherService);
    return ConfigFetcherService;
}());

var PanelConfig = (function () {
    function PanelConfig() {
    }
    return PanelConfig;
}());

var PanelView = (function () {
    function PanelView() {
    }
    return PanelView;
}());

var PanelElement = (function () {
    function PanelElement() {
    }
    return PanelElement;
}());

var Point = (function () {
    function Point() {
    }
    return Point;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map