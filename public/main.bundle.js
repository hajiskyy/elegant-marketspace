webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages class=\"fixed-top\"></flash-messages>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_Forms__ = __webpack_require__("./node_modules/@angular/Forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_brand_service__ = __webpack_require__("./src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_signup_signup_component__ = __webpack_require__("./src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_bsignup_bsignup_component__ = __webpack_require__("./src/app/components/bsignup/bsignup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_cart_cart_component__ = __webpack_require__("./src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_shop_shop_component__ = __webpack_require__("./src/app/components/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_pagenotfound_pagenotfound_component__ = __webpack_require__("./src/app/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_addproducts_addproducts_component__ = __webpack_require__("./src/app/components/addproducts/addproducts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_viewproducts_viewproducts_component__ = __webpack_require__("./src/app/components/viewproducts/viewproducts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_orders_orders_component__ = __webpack_require__("./src/app/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_brands_brands_component__ = __webpack_require__("./src/app/components/brands/brands.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_view_brand_products_view_brand_products_component__ = __webpack_require__("./src/app/components/view-brand-products/view-brand-products.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_11__components_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'bsignup', component: __WEBPACK_IMPORTED_MODULE_12__components_bsignup_bsignup_component__["a" /* BsignupComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_14__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_15__components_cart_cart_component__["a" /* CartComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_16__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_17__components_shop_shop_component__["a" /* ShopComponent */] },
    { path: 'addproducts', component: __WEBPACK_IMPORTED_MODULE_20__components_addproducts_addproducts_component__["a" /* AddproductsComponent */] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_21__components_viewproducts_viewproducts_component__["a" /* ViewproductsComponent */] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_23__components_orders_orders_component__["a" /* OrdersComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_24__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'brand/:brand', component: __WEBPACK_IMPORTED_MODULE_26__components_view_brand_products_view_brand_products_component__["a" /* ViewBrandProductsComponent */] },
    { path: 'brands', component: __WEBPACK_IMPORTED_MODULE_25__components_brands_brands_component__["a" /* BrandsComponent */] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_bsignup_bsignup_component__["a" /* BsignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_shop_shop_component__["a" /* ShopComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_addproducts_addproducts_component__["a" /* AddproductsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_viewproducts_viewproducts_component__["a" /* ViewproductsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_brands_brands_component__["a" /* BrandsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_view_brand_products_view_brand_products_component__["a" /* ViewBrandProductsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_Forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_7__services_brand_service__["a" /* BrandService */], __WEBPACK_IMPORTED_MODULE_19__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_22__services_orders_service__["a" /* OrdersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron mt-5 text-primary\">\n    <h1 class=\"display-4\">WHO ARE WE</h1>\n    <p class=\"lead\">Elegante is an ecommerce web marketspace that allows for cutomers to registr thier unique brands and sell their products online. registering would mean that a customer must provide important information like address, cerificates, email and also blah blah blah. at this point i'm ust writing stuff that doesnt really mean anything haha</p>\n    <hr class=\"my-4\">\n    <p>Elegante is an ecommerce web marketspace that allows for cutomers to registr thier unique brands and sell their products online. registering would mean that a customer must provide important information like address, cerificates, email and also blah blah blah. at this point i'm ust writing stuff that doesnt really mean anything haha.</p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary \" href=\"/shop\" >Start Shopping Now!</a>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/addproducts/addproducts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/addproducts/addproducts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center mt-5 bg-light\">\n    <h6 class=\"mt-3\">Enter New Product details</h6>\n    <div class=\"col-md-12 mx-auto\">\n      <form action=\"#\" method=\"post\" (submit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label class=\"custom-file-label\" for=\"logo\">{{filename}}</label>\n          <input type=\"file\" class=\"custom-file-input\" name=\"file\" (change)=\"onChangeFile($event)\" id=\"logo\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Enter Product Name</label>\n          <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" id=\"name\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">Enter Description</label>\n          <input type=\"text\" name=\"description\" [(ngModel)]=\"description\" id=\"description\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"category\">category</label>\n          <select name=\"sort\" class=\"custom-select\" (change)=\"onCategoryChange($event)\">\n            <option value=\"scarf\" selected>Scarfs</option>\n            <option value=\"abaya\">Abayas</option>\n            <option value=\"bag\">Bags</option>\n            <option value=\"glasses\">Glasses</option>\n            <option value=\"accessories\">Accessories</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"price\">Price</label>\n          <input type=\"number\" name=\"price\" [(ngModel)]=\"price\" id=\"price\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"availablity\">Available?</label>\n          <select name=\"availablity\" class=\"custom-select\" (change)=\"onAvailabilityChange($event)\">\n            <option value=\"yes\" selected>Yes</option>\n            <option value=\"No\">No</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"discount\">discount percentage</label>\n          <input type=\"number\" name=\"discount\" [(ngModel)]=\"discount\" id=\"\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" value=\"ADD\" class=\"btn btn-primary\">\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/addproducts/addproducts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddproductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddproductsComponent = /** @class */ (function () {
    function AddproductsComponent(prodcutService, flash, router, userService) {
        this.prodcutService = prodcutService;
        this.flash = flash;
        this.router = router;
        this.userService = userService;
    }
    AddproductsComponent.prototype.ngOnInit = function () {
        this.availability = 'true';
        this.category = "scarf";
        this.filename = "Choose File";
    };
    AddproductsComponent.prototype.onCategoryChange = function (e) {
        this.category = e.target.value;
    };
    AddproductsComponent.prototype.onAvailabilityChange = function (e) {
        if (e.target.value == "yes") {
            this.availability = 'true';
        }
        else {
            this.availability = 'false';
        }
    };
    AddproductsComponent.prototype.onChangeFile = function (e) {
        this.file = e.target.files[0];
        this.filename = this.file.name;
    };
    AddproductsComponent.prototype.validateName = function (name) {
        if (name === undefined) {
            return false;
        }
        else {
            var re = /^[^\\\/&]*$/;
            return re.test(name);
        }
    };
    AddproductsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.validateName(this.name)) {
            if (this.validateName(this.description)) {
                var fd = new FormData();
                fd.append('name', this.name);
                fd.append('description', this.description);
                fd.append('price', this.price);
                fd.append('discount', this.discount);
                fd.append('category', this.category);
                fd.append('availability', this.availability);
                fd.append('brand', this.userService.getbrand());
                fd.append('file', this.file);
                this.prodcutService.addProduct(fd).subscribe(function (res) {
                    if (res.success) {
                        _this.flash.show('Product Added', { cssClass: 'alert-success', timeout: 3000 });
                        _this.router.navigate(['dashboard']);
                    }
                    else {
                        _this.flash.show('Somehting went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                });
            }
            else {
                this.flash.show('invalid desrciption', { cssClass: 'alert-danger', timeout: 3000 });
            }
        }
        else {
            this.flash.show('Invalid name', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    AddproductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addproducts',
            template: __webpack_require__("./src/app/components/addproducts/addproducts.component.html"),
            styles: [__webpack_require__("./src/app/components/addproducts/addproducts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], AddproductsComponent);
    return AddproductsComponent;
}());



/***/ }),

/***/ "./src/app/components/brands/brands.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/brands/brands.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!brands\">\n  <h3 class=\"text-center my-3\">No Brand Available</h3>\n</div>\n<div class=\"container\" *ngIf=\"brands\">\n  <h3 class=\"text-center my-3\">Brands</h3>\n  <div class=\"row\">\n    <div class=\"col-md-4 mx-3\" *ngFor=\"let brand of brands\">\n      <div class=\"card\">\n        <img src=\"{{brand.imgUrl}}\" alt=\"\" class=\"card-img-top\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-primary\">{{brand.brandName}}</h5>\n          <a href=\"#\" (click)=\"brandStore(brand.brandName, $event)\">Go to Store >></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/brands/brands.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_brand_service__ = __webpack_require__("./src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandsComponent = /** @class */ (function () {
    function BrandsComponent(brandServe, router) {
        this.brandServe = brandServe;
        this.router = router;
    }
    BrandsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get brands from brand servive
        this.brandServe.getBrands().subscribe(function (res) {
            _this.brands = res.brands;
        });
    };
    BrandsComponent.prototype.brandStore = function (brand, e) {
        e.preventDefault();
        this.router.navigate(['brand', brand]);
    };
    BrandsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__("./src/app/components/brands/brands.component.html"),
            styles: [__webpack_require__("./src/app/components/brands/brands.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], BrandsComponent);
    return BrandsComponent;
}());



/***/ }),

/***/ "./src/app/components/bsignup/bsignup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bsignup/bsignup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br><br>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-12 col-sm-12 col-md-8 bg-light\">\n      <br>\n      <h3 class=\"text-center\">REGISTER BRAND</h3>\n      <form action=\"#\" method=\"post\" (submit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Enter E-mail</label>\n          <input type=\"email\" name=\"email\" id=\"email\"  class=\"form-control\" [(ngModel)]=\"email\" validate>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"FirstName\">FirstName</label>\n          <input type=\"text\" [(ngModel)]=\"ownerFirstName\" name=\"ownerFirstName\"  id=\"FirstName\"  class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"LastName\">LastName</label>\n          <input type=\"text\" [(ngModel)]=\"ownerLastName\"  name=\"OwnerLastName\" id=\"LastName\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Enter Password</label>\n          <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" class=\"form-control\" validate>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password2\">Confirm Password</label>\n            <input type=\"password\" (keyup)=\"checkPassword()\" [(ngModel)]=\"password2\" name=\"password2\" id=\"password2\" class=\"form-control\" validate>\n          </div>\n        <div class=\"form-group\">\n          <label for=\"Brand\">Brand</label>\n          <input type=\"text\" [(ngModel)]=\"brandName\" name=\"brandName\" id=\"brand\" class=\"form-control\" validate>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phone\">Company Phone Number</label>\n          <input type=\"tel\" [(ngModel)]=\"phone\" name=\"phone\" id=\"phone\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"file\" class=\"custom-file-input\" name=\"file\" (change)=\"changeFile($event)\" id=\"logo\">\n          <label class=\"custom-file-label\" for=\"logo\">{{filename}}</label>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Company Address\">Company address</label>\n          <input type=\"text\" name=\"address\" id=\"address\" [(ngModel)]=\"address\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"weburl\">Company Web adress</label>\n          <input type=\"text\" name=\"url\" id=\"weburl\" [(ngModel)]=\"url\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" value=\"REGISTER\" class=\"btn btn-primary\">\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/bsignup/bsignup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_brand_service__ = __webpack_require__("./src/app/services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BsignupComponent = /** @class */ (function () {
    function BsignupComponent(brandService, router, flash) {
        this.brandService = brandService;
        this.router = router;
        this.flash = flash;
    }
    BsignupComponent.prototype.ngOnInit = function () {
        this.filename = "Choose file";
    };
    BsignupComponent.prototype.changeFile = function (e) {
        this.file = e.target.files[0];
        this.filename = this.file.name;
    };
    BsignupComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    BsignupComponent.prototype.checkPassword = function () {
        if (this.password !== this.password2) {
            this.flash.show('passwords do not match', { cssClass: 'alert-danger', timeout: 1000 });
        }
        else {
            this.flash.show('passwords match', { cssClass: 'alert-success', timeout: 1000 });
        }
    };
    BsignupComponent.prototype.validateName = function (name) {
        if (name === undefined) {
            return false;
        }
        else {
            var re = /^[^\\\/&]*$/;
            return re.test(name);
        }
    };
    BsignupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.password !== this.password2 || this.password === undefined) {
            this.flash.show('Check Passwords', { cssClass: 'alert-danger', timeout: 800 });
        }
        else {
            if (this.validateEmail(this.email)) {
                if (this.validateName(this.ownerFirstName) && this.validateName(this.ownerLastName)) {
                    if (this.validateName(this.brandName)) {
                        var fd = new FormData();
                        fd.append('ownerFirstName', this.ownerFirstName);
                        fd.append('ownerLastName', this.ownerLastName);
                        fd.append('brandName', this.brandName);
                        fd.append('description', this.description);
                        fd.append('email', this.email);
                        fd.append('password', this.password);
                        fd.append('address', this.address);
                        fd.append('phone', this.phone);
                        fd.append('url', this.url),
                            fd.append('file', this.file, this.file.name);
                        this.brandService.registerBrand(fd).subscribe(function (res) {
                            if (res.success) {
                                _this.flash.show(res.msg, { cssClass: 'alert-success', timeout: 2000 });
                                _this.router.navigate(['login']);
                            }
                            else {
                                _this.flash.show('Somehting went wrong', { cssClass: 'alert-danger', timeout: 2000 });
                            }
                        });
                    }
                    else {
                        this.flash.show('invalid Brand Name', { cssClass: 'alert-danger', timeout: 1500 });
                    }
                }
                else {
                    this.flash.show('Invalid Names', { cssClass: 'alert-danger', timeout: 1500 });
                }
            }
            else {
                this.flash.show('Invalid Email', { cssClass: 'alert-danger', timeout: 1500 });
            }
        }
    };
    BsignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bsignup',
            template: __webpack_require__("./src/app/components/bsignup/bsignup.component.html"),
            styles: [__webpack_require__("./src/app/components/bsignup/bsignup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_brand_service__["a" /* BrandService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], BsignupComponent);
    return BsignupComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/cart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"alert {{className}} fixed-top\">{{msg}}</div>\n  <div class=\"container\" *ngIf=\"cart.length === 0;\">\n    <h5 class=\"text-center my-3\">No Items in cart</h5>\n  </div>\n  <div class=\"container\" *ngIf=\"cart.length > 0;\">\n    <ul class=\"list-unstyled mt-5 mx-3 bg-light\" *ngFor=\"let item of cart\">\n      <li class=\"media\">\n        <img class=\"mr-3\" src=\"{{item.product.imageUrl}}\" style=\"max-width: 13rem;\">\n        <div class=\"media-body\">\n          <h5 class=\"my-3 \">Price:\n            <span class=\"text-success\">{{item.product.price | currency}}</span>\n          </h5>\n          <p class=\"card-text\">{{item.product.description}}</p>\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">Made By:\n              <a href=\"#\" class=\"card-link\">{{item.product.brand}}</a>\n            </li>\n            <li class=\"list-group-item\">Category :\n              <a href=\"#\" class=\"card-link\">{{item.product.category}}</a>\n            </li>\n            <li class=\"list-group-item\">\n              Quantity:\n              <p>\n                <a href=\"#\" (click)=\"minusQuantity(item,$event)\">\n                  <i class=\"fa fa-minus\"></i>\n                </a>\n                {{item.quantity}}\n                <a href=\"#\" (click)=\"addQuantity(item,$event)\">\n                  <i class=\"fa fa-plus\"></i>\n                </a>\n              </p>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\" (click)=\"removeItem(item, $event)\">\n                <span class=\"badge badge-primary badge-pill\">remove item</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n\n    <div class=\"center-block\">\n      <button class=\"btn btn-outline-danger my-3 mx-2\" (click)=\"removeAll()\">Clear Cart</button>\n      <h5 class=\"text-center my-3\">TOTAL: {{total | currency}}</h5>\n      <button class=\"btn btn-lg btn-success btn-block my-3 mx-2\" (click)=\"placeOrder()\">PLACE ORDER</button>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartComponent = /** @class */ (function () {
    function CartComponent(prodService, flash, orderServe, user, router) {
        this.prodService = prodService;
        this.flash = flash;
        this.orderServe = orderServe;
        this.user = user;
        this.router = router;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.total = 0; //start total at zero
        // get cart items from cart
        this.getCart();
        this.gettotal(this.cart); // get initial total
        // init order array
        this.order = [];
    };
    // calculate total
    CartComponent.prototype.gettotal = function (cart) {
        var _this = this;
        cart.forEach(function (item) {
            _this.total += item.product.price * item.quantity;
        });
    };
    CartComponent.prototype.setCart = function () {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    };
    CartComponent.prototype.getCart = function () {
        this.cart = this.cart = JSON.parse(localStorage.getItem('cart'));
    };
    // add quantity
    CartComponent.prototype.addQuantity = function (cart, e) {
        e.preventDefault();
        this.cart.forEach(function (item) {
            if (cart.id === item.id) {
                ++item.quantity;
            }
        });
        this.total = 0; // reset total
        this.setCart();
        this.getCart();
        this.gettotal(this.cart); // calculate total
    };
    // minus quantity
    CartComponent.prototype.minusQuantity = function (cart, e) {
        e.preventDefault();
        this.cart.forEach(function (item) {
            if (cart.id === item.id) {
                if (item.quantity >= 2) {
                    --item.quantity;
                }
            }
        });
        this.total = 0; // Reset total
        this.setCart();
        this.getCart();
        this.gettotal(this.cart); // calculate total
    };
    // Remove Item 
    CartComponent.prototype.removeItem = function (cart, e) {
        var _this = this;
        e.preventDefault();
        this.getCart();
        this.cart.forEach(function (cart, index) {
            if (cart.id === cart.id) {
                _this.cart.splice(index, 1);
            }
        });
        // update cart
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.total = 0; // Reset total
        // get cart again
        this.getCart();
        this.gettotal(this.cart); // calculate total
        //display notification
        this.flash.show('Item removed', { cssClass: 'alert-info', timeout: 3000 });
    };
    // Remove all items
    CartComponent.prototype.removeAll = function () {
        if (confirm('Are you sure?')) {
            // clear cart
            localStorage.removeItem('cart');
            this.cart = [];
            // reset total
            this.total = 0;
            //display notification
            this.flash.show('All items removed', { cssClass: 'alert-success', timeout: 3000 });
        }
    };
    CartComponent.prototype.placeOrder = function () {
        var _this = this;
        if (!this.user.auth().buyer) {
            this.flash.show('Log in to Place order', { cssClass: 'alert-info', timeout: 2000 });
            this.router.navigate(['login']);
        }
        else {
            // init order
            var order_1;
            order_1 = {
                quantity: 1,
                brandName: "",
                product: "",
                user: ""
            };
            //update cart
            this.getCart();
            var user_1 = JSON.parse(localStorage.getItem('user'));
            //loop and add needed cart info to order
            this.cart.forEach(function (item) {
                order_1 = {
                    quantity: item.quantity,
                    brandName: item.product.brand,
                    product: item.product._id,
                    user: user_1._id
                };
                _this.order.push(order_1);
            });
            this.orderServe.placeOrder(this.order).subscribe(function (res) {
                if (res.success) {
                    _this.flash.show(res.msg, { cssClass: 'alert-success', timeout: 3000 });
                    localStorage.removeItem('cart');
                    _this.cart = [];
                    _this.order = [];
                }
                else {
                    _this.flash.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_orders_service__["a" /* OrdersService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br><br>\n  <div class=\"row justify-content-center mt-3\">\n    <div class=\"col-12 col-sm-12 col-md-8 bg-light\">\n      <br>\n      <h3 class=\"text-center\">Contact Us</h3>\n      <br>\n      <form action=\"#\" method=\"post\">\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"namel\" id=\"name\" placeholder=\"Name\" class=\"form-control\" validate>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control\" validate>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"phone\" id=\"phone\" placeholder=\"Mobile Number\" class=\"form-control\" validate>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" class=\"form-control\" validate>\n        </div>\n        <div class=\"form-group\">\n          <textarea name=\"message\" id=\"message\" maxlength=\"150\" rows=\"10\" class=\"form-control\" placeholder=\"Message\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" value=\"Send\" class=\"btn btn-primary\">\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h4 class=\"text-center my-3\">All Products</h4>\n        <ul class=\"list-group my-5 text-primary\" *ngFor=\"let product of products\">\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              <h5>Name:</h5>\n              <span>{{product.name}}</span></li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              <h5>Category:</h5>\n               <span>{{product.category}}</span></li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              <h5>Price:</h5>\n              <span>{{product.price}}</span></li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\"> \n              <h5>Discount: </h5>\n              <span>{{product.discount}}</span></li>\n        </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(productServive, userService) {
        this.productServive = productServive;
        this.userService = userService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // implement brand login service
        this.brand = this.userService.getbrand();
        this.productServive.getProductsByBrand(this.brand).subscribe(function (products) {
            _this.products = products;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#image1{\r\n  background-image: url('showcase.41adec315851a988c54e.jpeg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  height: 700px;\r\n}\r\n#image2{\r\n  background-image: url('blossom.e8130f1b8a3304efb400.jpeg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  height: 700px;\r\n}\r\n#image3{\r\n  background-image: url('showcase3.90f3734092da8b39f97f.jpeg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  height: 700px;\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  #image1,#image2,#image3 { height: 400px;}\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselControls\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\" id=\"image1\">\n      <div class=\"carousel-caption d-none d-md-block\">\n          <h2 class=\"text-white\">Élégant.</h2>\n          <p>THE JOY OF DRESSING IS AN ART</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\" id=\"image2\">\n      <div class=\"carousel-caption\">\n        <h2 class=\"text-white\">Modest.</h2>\n        <blockquote class=\"blockquote text-center text-white\">\n          <p class=\"mb-0\">\"Modesty is the highest Elegance\"</p>\n          <footer class=\"blockquote-footer text-white\">CoCo Chanel</footer>\n        </blockquote>\n      </div>\n    </div>\n    <div class=\"carousel-item\" id=\"image3\">\n      <div class=\"carousel-caption\">\n        <h2 class=\"text-white\"> Beautiful</h2>\n        <p>Lorem ipsum dolor sit amet.</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<div class=\"container\">\n  <div class=\"row text-center\">\n    <div class=\"overflow-hidden col-12 p-lg-5 py-5\">\n      <h1 class=\"display-6 font-weight-normal\">Visit Our Store</h1>\n      <p class=\"lead font-weight-normal\">We've Got really exciting clothes and accessories for ya! </p>\n      <a class=\"btn btn-outline-primary\" href=\"/shop\">Shop now!</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <img src=\"../../../assets/img/sunglass3.jpeg\" alt=\"\" class=\"img-fluid\">\n    </div>\n    <div class=\"col\">\n      <img src=\"../../../assets/img/beach2.jpg\" alt=\"\" class=\"img-fluid\">\n    </div>\n  </div>\n  <div class=\"row text-center\">\n    <div class=\" overflow-hidden col-12 p-lg-5 mx-auto my-5 py-5\">\n      <h1 class=\"diplay-6\">Got a Brand?</h1>\n      <p class=\"lead font-weight-normal mx-3\"> Do you have a brand worth selling to customers? Go on to add your products now! but first you gotta... </p>\n      <a class=\"btn btn-outline-primary\" href=\"/bsignup\">Register here</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <img src=\"../../../assets/img/showcase2.jpeg\" alt=\"\" class=\"img-fluid\">\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <!-- footer -->\n  <footer class=\"container py-5\">\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-md-7 py-4\">\n        <h4>About</h4>\n        <p class=\"text-muted\">Get you clothes and accessories from over 400+ brand from around the world. If you wish to become apart of our brands collection. Feel free register and...</p>\n        <a href=\"/about\">Read More..</a>\n      </div>\n      <div class=\"col-sm-4 offset-md-1 py-4\">\n        <h4>Contact</h4>\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"#\">Follow on Twitter</a>\n          </li>\n          <li>\n            <a href=\"#\">Like on Facebook</a>\n          </li>\n          <li>\n            <a href=\"#\">Email us</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br><br>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-12 col-sm-12 col-md-8 bg-light\">\n      <br>\n      <h3 class=\"text-center\">Sign in</h3>\n      <form action=\"#\" method=\"post\" (submit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Enter E-mail</label>\n          <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"email\" class=\"form-control\" validate>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Enter Password</label>\n          <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" class=\"form-control\" validate>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" value=\"Sign in\" class=\"btn btn-primary\">\n        </div>\n      </form>\n      <span><p>Don't have an account? Sign up <a routerLink=\"/signup\">here</a> </p></span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, flash) {
        this.userService = userService;
        this.router = router;
        this.flash = flash;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var login = {
            email: this.email,
            password: this.password
        };
        this.userService.login(login).subscribe(function (res) {
            if (res.success) {
                if (res.user.hasBrand) {
                    _this.userService.loggedIn("seller");
                    _this.userService.setbrand(res.brand);
                    _this.flash.show('You are now logged in', { cssClass: 'alert-success', timeout: 2000 });
                    _this.router.navigate(['dashboard']);
                }
                else {
                    _this.userService.loggedIn("buyer");
                    localStorage.setItem('user', JSON.stringify(res.user));
                    _this.flash.show('You are now logged in', { cssClass: 'alert-success', timeout: 2000 });
                    _this.router.navigate(['shop']);
                }
            }
            else {
                _this.flash.show(res.msg, { cssClass: 'alert-danger', timeout: 2000 });
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand ml-5\" routerLink=\"/\">\n      <h1>Élégante</h1>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\n      <ul class=\"navbar-nav ml-5 mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">About</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!status.auth().seller\">\n          <a class=\"nav-link\" routerLink=\"/shop\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Shop</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/brands\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Brands</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!status.auth().seller\">\n          <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Contact</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" *ngIf=\"!status.auth().seller && !status.auth().buyer\">\n          <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Sign in</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"status.auth().seller || status.auth().buyer\">\n          <a class=\"nav-link\" (click)=\"onLogOut()\">Log out</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!status.auth().seller\">\n          <a class=\"nav-link\" routerLink=\"/cart\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <i class=\"fa fa-shopping-cart\" style=\"font-size:20px;\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"status.auth().seller\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Dashboard</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"status.auth().seller\">\n          <a class=\"nav-link\" routerLink=\"/addproducts\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Add Product</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"status.auth().seller\">\n          <a class=\"nav-link\" routerLink=\"/orders\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Orders</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(status) {
        this.status = status;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogOut = function () {
        this.status.logOut();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/orders/orders.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h3 class=\"text-center my-3\">Orders</h3>\n      <ul class=\"list-group text-primary\" *ngFor=\"let item of order\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <h6>Quantity</h6>\n          <span>{{item.quantity}}</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <h6>Product Name</h6>\n          <span>{{item.product.name}}</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <h6>Price</h6>\n          <span>{{item.product.price}}</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <h6>Category</h6>\n          <span>{{item.product.category}}</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n          <h6>Discount</h6>\n          <span>{{item.product.discount}}</span>\n        </li>\n        <li class=\"list-group-item\">\n          <ul class=\"list-group\">\n            <h6>Customer Details</h6>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">Email <span>{{item.user.email}}</span></li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              First Name: <span>{{item.user.FirstName}}</span></li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              Last Name: <span>{{item.user.LastName}}</span></li>\n          </ul>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("./src/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(orderService, userService) {
        this.orderService = orderService;
        this.userService = userService;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brand = this.userService.getbrand();
        this.orderService.getOrder(this.brand).subscribe(function (data) {
            _this.order = data;
        });
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__("./src/app/components/orders/orders.component.html"),
            styles: [__webpack_require__("./src/app/components/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("./src/app/components/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__("./src/app/components/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/shop.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row justify-content-center mb-3\">\n    <div class=\"col-12 col-sm-12 col-md-8\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"sort\">Sort By Category</label>\n          <select name=\"sort\" class=\"custom-select\" (change)=\"onSortChange($event)\">\n            <option value=\"\" selected>All</option>\n            <option value=\"scarf\">Scarfs</option>\n            <option value=\"abaya\">Abayas</option>\n          </select>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"row justify-content-center mb-3\">\n    <div class=\"col-md-4 col-sm-4 col-md-4\" *ngFor=\"let prod of products\">\n      <div class=\"card mb-4 box-shadow\" >\n        <img src=\"{{prod.imageUrl}}\" (mouseover)=\"imageHover($event)\" (click)=\"viewProduct(prod._id)\" alt=\"\" class=\"card-img-top\" style=\"display: block;\" style=\"max-width: 13rem;\">\n        <div class=\"card-body\">\n          <strong>\n            <h4 class=\"card-title text-success\">{{prod.price | currency}}</h4>\n          </strong>\n          <p class=\"card-text\">{{prod.description}}</p>\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">Made By:\n              <a href=\"#\" class=\"card-link\">{{prod.brand}}</a>\n            </li>\n            <li class=\"list-group-item\">Category :\n              <a href=\"#\" class=\"card-link\">{{prod.category}}</a>\n            </li>\n            <li class=\"list-group-item\">\n              <a href=\"#\" (click)=\"addToCart(prod, $event)\" class=\"card-link\">\n                <i class=\"fa fa-cart-plus\" style=\"font-size:25px;\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShopComponent = /** @class */ (function () {
    function ShopComponent(prodService, flash, router) {
        this.prodService = prodService;
        this.flash = flash;
        this.router = router;
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.setProducts();
        this.className = "";
        this.msg = "";
    };
    ShopComponent.prototype.setProducts = function () {
        var _this = this;
        this.prodService.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    ShopComponent.prototype.onSortChange = function (event) {
        var _this = this;
        if (event.target.value === "") {
            this.ngOnInit();
        }
        else {
            this.prodService.sortProducts(event.target.value).subscribe(function (products) {
                _this.products = products;
            });
        }
    };
    ShopComponent.prototype.addToCart = function (product, e) {
        e.preventDefault();
        this.prodService.addToCart(product);
        this.flash.show('Added to Cart', { cssClass: 'alert-info', timeout: 3000 });
    };
    ShopComponent.prototype.viewProduct = function (id) {
        this.router.navigate(['product', id]);
    };
    ShopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__("./src/app/components/shop/shop.component.html"),
            styles: [__webpack_require__("./src/app/components/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <br>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-12 col-sm-12 col-md-8 bg-light\">\n      <br>\n      <h3 class=\"text-center\">Sign up</h3>\n      <form action=\"#\" method=\"post\" (submit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"fname\">First Name</label>\n          <input type=\"text\" name=\"FirstName\" id=\"fname\" [(ngModel)]=\"FirstName\" class=\"form-control\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lname\">Last Name</label>\n          <input type=\"text\" name=\"LastName\" id=\"lname\" [(ngModel)]=\"LastName\" class=\"form-control\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Enter E-mail</label>\n          <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"email\" class=\"form-control\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\"> Enter Password</label>\n          <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" class=\"form-control\"\n           required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password2\">Confirm Password</label>\n          <input type=\"password\" name=\"password2\" [(ngModel)]=\"password2\" (keyup)=\"checkPassword()\" id=\"password2\" class=\"form-control\" required>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" value=\"Sign up\" class=\"btn btn-primary\">\n        </div>\n      </form>\n      <span>\n        <p>Got a brand? register it\n          <a  routerLink=\"/bsignup\">here</a>\n        </p>\n      </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router, flash) {
        this.userService = userService;
        this.router = router;
        this.flash = flash;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    SignupComponent.prototype.checkPassword = function () {
        if (this.password !== this.password2) {
            this.flash.show('passwords do not match', { cssClass: 'alert-danger', timeout: 1000 });
        }
        else {
            this.flash.show('passwords match', { cssClass: 'alert-success', timeout: 1000 });
        }
    };
    SignupComponent.prototype.validateName = function (name) {
        if (name === undefined) {
            return false;
        }
        else {
            var re = /^[^\\\/&]*$/;
            return re.test(name);
        }
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.password !== this.password2 || this.password === undefined) {
            this.flash.show('Check Passwords', { cssClass: 'alert-danger', timeout: 1500 });
        }
        else {
            if (this.validateEmail(this.email)) {
                if (this.validateName(this.FirstName) && this.validateName(this.LastName)) {
                    var user = {
                        FirstName: this.FirstName,
                        LastName: this.LastName,
                        password: this.password,
                        email: this.email
                    };
                    this.userService.registerUser(user).subscribe(function (res) {
                        if (res.success) {
                            _this.flash.show('You are now Registered and can now log in', { cssClass: 'alert-success', timeout: 3000 });
                            _this.router.navigate(['login']);
                        }
                        else {
                            _this.flash.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                        }
                    });
                }
                else {
                    this.flash.show('Invalid Names', { cssClass: 'alert-danger', timeout: 1500 });
                }
            }
            else {
                this.flash.show('Invalid Email', { cssClass: 'alert-danger', timeout: 1500 });
            }
        }
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/view-brand-products/view-brand-products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/view-brand-products/view-brand-products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n    <div class=\"row justify-content-center mb-3\">\n      <div class=\"col-12 col-sm-12 col-md-8\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"sort\">Sort By Category</label>\n            <select name=\"sort\" class=\"custom-select\" (change)=\"onSortChange($event)\">\n              <option value=\"\" selected>All</option>\n              <option value=\"scarf\">Scarfs</option>\n              <option value=\"abaya\">Abayas</option>\n            </select>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"row justify-content-center mb-3\">\n      <div class=\"col-md-4 col-sm-4 col-md-4\" *ngFor=\"let prod of products\">\n        <div class=\"card mb-4 box-shadow\" (click)=\"viewProduct(prod._id)\">\n          <img src=\"{{prod.imageUrl}}\" alt=\"\" class=\"card-img-top\" style=\"display: block;\">\n          <div class=\"card-body\">\n            <strong>\n              <h4 class=\"card-title text-success\">{{prod.price | currency}}</h4>\n            </strong>\n            <p class=\"card-text\">{{prod.description}}</p>\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">Made By:\n                <a href=\"#\" class=\"card-link\">{{prod.brand}}</a>\n              </li>\n              <li class=\"list-group-item\">Category :\n                <a href=\"#\" class=\"card-link\">{{prod.category}}</a>\n              </li>\n              <li class=\"list-group-item\">\n                <a href=\"#\" (click)=\"addToCart(prod, $event)\" class=\"card-link\">\n                  <i class=\"fa fa-cart-plus\" style=\"font-size:25px;\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/view-brand-products/view-brand-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBrandProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewBrandProductsComponent = /** @class */ (function () {
    function ViewBrandProductsComponent(activated, router, prodServe) {
        this.activated = activated;
        this.router = router;
        this.prodServe = prodServe;
    }
    ViewBrandProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activated.params.subscribe(function (param) {
            _this.param = param.brand;
        });
        this.prodServe.getProductsByBrand(this.param).subscribe(function (products) {
            _this.products = products;
        });
    };
    ViewBrandProductsComponent.prototype.viewProduct = function (id) {
        this.router.navigate(['product', id]);
    };
    ViewBrandProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-view-brand-products',
            template: __webpack_require__("./src/app/components/view-brand-products/view-brand-products.component.html"),
            styles: [__webpack_require__("./src/app/components/view-brand-products/view-brand-products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]])
    ], ViewBrandProductsComponent);
    return ViewBrandProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/viewproducts/viewproducts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/viewproducts/viewproducts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"list-unstyled my-5\" *ngIf=\"loaded\">\n    <li class=\"media\">\n      <img class=\"mr-3\" style=\"max-width: 18rem;\" src=\"{{product.imageUrl}}\">\n      <div class=\"media-body\">\n        <ul class=\"list-group text-primary list-group-flush\">\n          <li class=\"list-group-item\">\n            <h4 class=\"text-success\">{{product.price | currency}}</h4>\n          </li>\n          <li class=\"list-group-item\">\n            Product Name:\n            <h4>{{product.name}}</h4>\n          </li>\n          <li class=\"list-group-item\">Desc:\n            <h4>{{product.description}}</h4>\n          </li>\n          <li class=\"list-group-item\">Brand:\n            <h4>{{product.brand}}</h4>\n          </li>\n          <li class=\"list-group-item\">\n            <a href=\"#\" (click)=\"addToCart($event)\" class=\"card-link\">\n              <i class=\"fa fa-cart-plus\" style=\"font-size:25px;\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </li>\n  </ul>\n  <a href=\"#\" (click)=\"addLike($event)\">\n    <i class=\"fa fa-thumbs-up\" style=\"font-size:40px;\"></i>\n  </a>\n  <span>{{this.total}}</span>\n\n  <div class=\"row my-3\">\n    <div class=\"col-md-12\">\n      <form (submit)=\"onComment($event)\">\n        <div class=\"form-group\">\n          <label for=\"comment\">Add A Comment</label>\n          <input type=\"text\" [(ngModel)]=\"comment\" placeholder=\"What do you think?\" class=\"form-control\" id=\"comment\" name=\"comment\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" value=\"Comment\" class=\"btn btn-primary btn-block\">\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"row my-5\" *ngIf=\"hasComment\">\n    <div class=\"col-md-12\">\n      <h4 class=\"text-center text-primary my-5\">Comments</h4>\n      <ul class=\"list-group  my-2 text-primary\" *ngFor=\"let rating of ratings\">\n        <li class=\"list-group-item\" *ngIf=\"rating.comments != null\">\n          <p>\n            <strong>{{rating.user.FirstName}} {{rating.user.LastName}}</strong>\n          </p>\n          <ul class=\"list-group my-2 list-group-flush\">\n            <li class=\"list-group-item\" >\n              {{rating.comments}}\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"!hasComment\">\n    <h6 class=\"text-center text-primary my-5\">No Comments Yet</h6>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/viewproducts/viewproducts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewproductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewproductsComponent = /** @class */ (function () {
    function ViewproductsComponent(actived, router, prodServe, flash, user) {
        this.actived = actived;
        this.router = router;
        this.prodServe = prodServe;
        this.flash = flash;
        this.user = user;
    }
    ViewproductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.total = 0;
        this.like = 0;
        this.loaded = false;
        this.actived.params.subscribe(function (param) {
            _this.id = param.id;
            _this.prodServe.getProductById(_this.id).subscribe(function (product) {
                _this.product = product;
                _this.loaded = true;
            });
        });
        this.hasComment = false;
        this.prodServe.getProductRating(this.id).subscribe(function (res) {
            if (res.success) {
                _this.ratings = res.rating;
                _this.ratings.forEach(function (rating) {
                    _this.total += rating.likes;
                    if (rating.comments) {
                        _this.hasComment = true;
                    }
                });
            }
            else {
                console.log(res.msg);
            }
        });
    };
    ViewproductsComponent.prototype.addToCart = function (e) {
        e.preventDefault();
        this.prodServe.addToCart(this.product);
        this.flash.show('Added to Cart', { cssClass: 'alert-info', timeout: 3000 });
    };
    ViewproductsComponent.prototype.addLike = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this.user.auth().buyer) {
            this.flash.show('Log in to add a like', { cssClass: 'alert-info', timeout: 3000 });
            this.router.navigate(['login']);
        }
        else {
            this.rating = {
                likes: 1,
                comments: null,
                product: this.id,
                user: JSON.parse(localStorage.getItem('user'))._id
            };
            this.prodServe.addRating(this.rating).subscribe(function (res) {
                _this.flash.show(res.msg, { cssClass: 'alert-info', timeout: 2000 });
            });
        }
    };
    ViewproductsComponent.prototype.onComment = function (e) {
        var _this = this;
        e.preventDefault();
        if (!this.user.auth().buyer) {
            this.flash.show('Log in to add a comment', { cssClass: 'alert-info', timeout: 3000 });
            this.router.navigate(['login']);
        }
        else {
            this.rating = {
                likes: 0,
                comments: this.comment,
                product: this.id,
                user: JSON.parse(localStorage.getItem('user'))._id
            };
            this.prodServe.addRating(this.rating).subscribe(function (res) {
                _this.flash.show(res.msg, { cssClass: 'alert-info', timeout: 2000 });
                _this.comment = "";
            });
        }
    };
    ViewproductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewproducts',
            template: __webpack_require__("./src/app/components/viewproducts/viewproducts.component.html"),
            styles: [__webpack_require__("./src/app/components/viewproducts/viewproducts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], ViewproductsComponent);
    return ViewproductsComponent;
}());



/***/ }),

/***/ "./src/app/services/brand.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandService = /** @class */ (function () {
    function BrandService(http) {
        this.http = http;
    }
    BrandService.prototype.registerBrand = function (brand) {
        return this.http.post('/brand/addbrand', brand);
    };
    BrandService.prototype.getBrands = function () {
        return this.http.get('/brand/getbrands');
    };
    BrandService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BrandService);
    return BrandService;
}());



/***/ }),

/***/ "./src/app/services/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersService = /** @class */ (function () {
    function OrdersService(http) {
        this.http = http;
    }
    OrdersService.prototype.getOrder = function (brand) {
        // let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get("/order/getorders/" + brand);
    };
    OrdersService.prototype.placeOrder = function (order) {
        // let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post('/order/place', order);
    };
    OrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.products = [];
        this.sorted = [];
    }
    ProductsService.prototype.getProducts = function () {
        // let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get('/products/getproducts');
    };
    ProductsService.prototype.sortProducts = function (sort) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.get("/products/getproductsCategory/" + sort, { headers: headers });
    };
    ProductsService.prototype.getProductsByBrand = function (brand) {
        // let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get("/products/getproductsBrand/" + brand);
    };
    ProductsService.prototype.addToCart = function (product) {
        var cart = [];
        if (JSON.parse(localStorage.getItem('cart')) !== null) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        var newCart;
        newCart = {
            id: product._id,
            quantity: 1,
            product: product
        };
        cart.push(newCart);
        localStorage.setItem('cart', JSON.stringify(cart));
    };
    ProductsService.prototype.getProductById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.get("/products/getproduct/" + id, { headers: headers });
    };
    ProductsService.prototype.getProductRating = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this.http.post("/rating/" + product, { headers: headers });
    };
    ProductsService.prototype.addProduct = function (product) {
        return this.http.post('/products/addproduct', product);
    };
    ProductsService.prototype.addRating = function (rating) {
        return this.http.post('/rating/add', rating);
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
    }
    UserService.prototype.registerUser = function (user) {
        return this.http.post('/user/register', user);
    };
    UserService.prototype.login = function (user) {
        return this.http.post('/user/login', user);
    };
    UserService.prototype.logOut = function () {
        this.loggedIn("out");
        localStorage.clear();
        this.router.navigate(['home']);
    };
    UserService.prototype.setbrand = function (brand) {
        localStorage.setItem('brand', brand);
    };
    UserService.prototype.getbrand = function () {
        return localStorage.getItem('brand');
    };
    UserService.prototype.loggedIn = function (user) {
        if (user === "buyer") {
            localStorage.setItem('logged', 'buyer');
        }
        else if (user === "seller") {
            localStorage.setItem('logged', 'seller');
        }
    };
    UserService.prototype.auth = function () {
        var buyer;
        var seller;
        var logged = localStorage.getItem('logged');
        if (logged === "buyer") {
            return {
                buyer: true,
                seller: false
            };
        }
        else if (logged === "seller") {
            return {
                buyer: false,
                seller: true
            };
        }
        else {
            return {
                buyer: false,
                seller: false
            };
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map