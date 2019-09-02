(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"container p-4\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/game-form/game-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/game-form/game-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"col-md-4 offset-md-2\">\n    <div class=\"card-header\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <input type=\"text\" name=\"title\" [(ngModel)]=\"game.title\" placeholder=\"Título\"\n              class=\"form-control form-control-lg\" autofocus>\n          </div>\n          <div class=\"form-group\">\n            <textarea type=\"text\" name=\"description\" [(ngModel)]=\"game.description\" placeholder=\"Descripción\" rows=\"2\"\n              class=\"form-control form-control-lg\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"url\" name=\"image\" [(ngModel)]=\"game.image\" placeholder=\"Imágen\"\n              class=\"form-control form-control-lg\">\n          </div>\n        </form>\n        <button class=\"btn btn-success btn-block\" (click)=\"edit ? updateGame() : saveNewGame()\">\n          Guardar\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card card-body text-center\">\n      <img [src]=\"game.image == '' ? '/assets/imagen-no-disponible.jpg' : game.image\" class=\"card-img-top\">\n      <h3>{{game.id}} {{game.title == '' ? 'Título del juego' : game.title}}</h3>\n      <p>{{game.description == '' ? 'Descripción' : game.title}}</p>\n      <p>{{game.created_at | date: 'yyyy-MM-dd'}}</p>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/game-list/game-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/game-list/game-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let game of games\">\n    <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 20rem;\">\n      <div class=\"card-header d-flex justify-content-between align-items-center\">{{game.title}}\n          <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-trash\" aria-hidden=\"true\"\n            (click)=\"deleteGame(game.id)\"></i></button>\n      </div>\n      \n      <div class=\"card-body\">\n        <img [src]=\"game.image\" class=\"card-img\">\n        <p class=\"card-text\">{{game.description}}</p>\n      </div>\n      <a [routerLink]=\"['/games/edit', game.id]\" class=\"btn btn-info btn-block\">Editar</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Conectter Test</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/games\" routerLinkActive=\"btn-secondary\" [routerLinkActiveOptions]=\"{exact: true}\"><i class=\"fa fa-gamepad\" aria-hidden=\"true\"></i>Juegos</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/games/add\" routerLinkActive=\"btn-secondary\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Agregar Juego</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Escribe tu Juego\" aria-label=\"Search\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Buscar</button>\n      </form>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game-list/game-list.component */ "./src/app/components/game-list/game-list.component.ts");
/* harmony import */ var _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game-form/game-form.component */ "./src/app/components/game-form/game-form.component.ts");





const routes = [
    {
        path: '',
        redirectTo: '/games',
        pathMatch: 'full'
    },
    {
        path: 'games',
        component: _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_3__["GameListComponent"]
    },
    {
        path: 'games/add',
        component: _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_4__["GameFormComponent"]
    },
    {
        path: 'games/edit/:id',
        component: _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_4__["GameFormComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/game-form/game-form.component */ "./src/app/components/game-form/game-form.component.ts");
/* harmony import */ var _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game-list/game-list.component */ "./src/app/components/game-list/game-list.component.ts");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/games.service */ "./src/app/services/games.service.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
            _components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_8__["GameFormComponent"],
            _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_9__["GameListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [_services_games_service__WEBPACK_IMPORTED_MODULE_10__["GamesService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/game-form/game-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/game-form/game-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/game-form/game-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/game-form/game-form.component.ts ***!
  \*************************************************************/
/*! exports provided: GameFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFormComponent", function() { return GameFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GameFormComponent = class GameFormComponent {
    constructor(gamesService, router, activeRoute) {
        this.gamesService = gamesService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.classes = 'row';
        this.game = {
            title: '',
            description: '',
            image: '',
        };
        this.edit = false;
    }
    ngOnInit() {
        const params = this.activeRoute.snapshot.params;
        if (params.id) {
            this.gamesService.getGame(params.id)
                .subscribe(res => {
                console.log(res);
                this.game = res;
                this.edit = true;
            }, err => console.error(err));
        }
    }
    saveNewGame() {
        delete this.game.created_at;
        delete this.game.id;
        this.gamesService.saveGame(this.game)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['/games']);
        }, err => console.error(err));
    }
    updateGame() {
        delete this.game.created_at;
        this.gamesService.updateGame(this.game.id, this.game)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['/games']);
        }, err => console.error(err));
    }
};
GameFormComponent.ctorParameters = () => [
    { type: _services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GameFormComponent.prototype, "classes", void 0);
GameFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-form',
        template: __webpack_require__(/*! raw-loader!./game-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/game-form/game-form.component.html"),
        styles: [__webpack_require__(/*! ./game-form.component.css */ "./src/app/components/game-form/game-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], GameFormComponent);



/***/ }),

/***/ "./src/app/components/game-list/game-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/game-list/game-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1saXN0L2dhbWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/game-list/game-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/game-list/game-list.component.ts ***!
  \*************************************************************/
/*! exports provided: GameListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function() { return GameListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/games.service */ "./src/app/services/games.service.ts");



let GameListComponent = class GameListComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
        this.games = [];
    }
    ngOnInit() {
        this.getGames();
    }
    getGames() {
        this.gamesService.getGames().subscribe(res => {
            this.games = res;
        }, err => console.error(err));
    }
    deleteGame(id) {
        this.gamesService.deleteGame(id).subscribe(res => {
            console.log(res);
            this.getGames();
        }, err => console.log(err));
    }
};
GameListComponent.ctorParameters = () => [
    { type: _services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }
];
GameListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-list',
        template: __webpack_require__(/*! raw-loader!./game-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/game-list/game-list.component.html"),
        styles: [__webpack_require__(/*! ./game-list.component.css */ "./src/app/components/game-list/game-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]])
], GameListComponent);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavigationComponent);



/***/ }),

/***/ "./src/app/services/games.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/games.service.ts ***!
  \*******************************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GamesService = class GamesService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getGames() {
        return this.http.get(`${this.API_URI}/games`);
    }
    getGame(id) {
        return this.http.get(`${this.API_URI}/games/${id}`);
    }
    deleteGame(id) {
        return this.http.delete(`${this.API_URI}/games/${id}`);
    }
    saveGame(game) {
        return this.http.post(`${this.API_URI}/games`, game);
    }
    updateGame(id, updatedGame) {
        return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
    }
};
GamesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GamesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GamesService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/Angular/AngularMysqlCrud/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map