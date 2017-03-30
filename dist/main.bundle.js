webpackJsonp([2,5],{

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(506);


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_RX__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_RX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_RX__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = (function () {
    function EventService() {
    }
    EventService.prototype.getEvents = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_RX__["Subject"]();
        setTimeout(function () { subject.next(EVENTS); subject.complete(); }, 100);
        return subject;
    };
    EventService.prototype.getEvent = function (id) {
        return EVENTS.find(function (event) { return event.id === id; });
    };
    EventService.prototype.saveEvent = function (event) {
        event.id = 999;
        event.session = [];
        EVENTS.push(event);
    };
    EventService.prototype.updateEvent = function (event) {
        var index = EVENTS.findIndex(function (x) { return x.id = event.id; });
        EVENTS[index] = event;
    };
    EventService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], EventService);
    return EventService;
}());
var EVENTS = [
    {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        },
        sessions: [
            {
                id: 1,
                name: "Using Angular 4 Pipes",
                presenter: "Peter Bacon Darwin",
                duration: 1,
                level: "Intermediate",
                abstract: "Learn all about the new pipes in Angular 4, both \n          how to write them, and how to get the new AI CLI to write \n          them for you. Given by the famous PBD, president of Angular \n          University (formerly Oxford University)",
                voters: ['bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 2,
                name: "Getting the most out of your dev team",
                presenter: "Jeff Cross",
                duration: 1,
                level: "Intermediate",
                abstract: "We all know that our dev teams work hard, but with \n          the right management they can be even more productive, without \n          overworking them. In this session I'll show you how to get the \n          best results from the talent you already have on staff.",
                voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 3,
                name: "Angular 4 Performance Metrics",
                presenter: "Rob Wormald",
                duration: 2,
                level: "Advanced",
                abstract: "Angular 4 Performance is hot. In this session, we'll see \n          how Angular gets such great performance by preloading data on \n          your users devices before they even hit your site using the \n          new predictive algorithms and thought reading software \n          built into Angular 4.",
                voters: []
            },
            {
                id: 4,
                name: "Angular 5 Look Ahead",
                presenter: "Brad Green",
                duration: 2,
                level: "Advanced",
                abstract: "Even though Angular 5 is still 6 years away, we all want \n          to know all about it so that we can spend endless hours in meetings \n          debating if we should use Angular 4 or not. This talk will look at \n          Angular 6 even though no code has yet been written for it. We'll \n          look at what it might do, and how to convince your manager to \n          hold off on any new apps until it's released",
                voters: []
            },
            {
                id: 5,
                name: "Basics of Angular 4",
                presenter: "John Papa",
                duration: 2,
                level: "Beginner",
                abstract: "It's time to learn the basics of Angular 4. This talk \n          will give you everything you need to know about Angular 4 to \n          get started with it today and be building UI's for your self \n          driving cars and butler-bots in no time.",
                voters: ['bradgreen', 'igorminar']
            }
        ]
    },
    {
        id: 2,
        name: 'ng-nl',
        date: new Date('4/15/2037'),
        time: '9:00 am',
        price: 950.00,
        imageUrl: '/app/assets/images/ng-nl.png',
        onlineUrl: 'http://ng-nl.org/',
        sessions: [
            {
                id: 1,
                name: "Testing Angular 4 Workshop",
                presenter: "Pascal Precht & Christoph Bergdorf",
                duration: 4,
                level: "Beginner",
                abstract: "In this 6 hour workshop you will learn not only how to test Angular 4, \n          you will also learn how to make the most of your team's efforts. Other topics\n          will be convincing your manager that testing is a good idea, and using the new\n          protractor tool for end to end testing.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "Angular 4 and Firebase",
                presenter: "David East",
                duration: 3,
                level: "Intermediate",
                abstract: "In this workshop, David East will show you how to use Angular with the new\n          ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            },
            {
                id: 3,
                name: "Reading the Angular 4 Source",
                presenter: "Patrick Stapleton",
                duration: 2,
                level: "Intermediate",
                abstract: "Angular 4's source code may be over 25 million lines of code, but it's really \n          a lot easier to read and understand then you may think. Patrick Stapleton will talk\n          about his secretes for keeping up with the changes, and navigating around the code.",
                voters: ['martinfowler']
            },
            {
                id: 4,
                name: "Hail to the Lukas",
                presenter: "Lukas Ruebbelke",
                duration: 1,
                level: "Beginner",
                abstract: "In this session, Lukas will present the \n          secret to being awesome, and how he became the President \n          of the United States through his amazing programming skills, \n          showing how you too can be success with just attitude.",
                voters: ['bradgreen']
            },
        ]
    },
    {
        id: 3,
        name: 'ng-conf 2037',
        date: new Date('5/4/2037'),
        time: '9:00 am',
        price: 759.00,
        imageUrl: '/app/assets/images/ng-conf.png',
        location: {
            address: 'The Palatial America Hotel',
            city: 'Salt Lake City',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "How Elm Powers Angular 4",
                presenter: "Murphy Randle",
                duration: 2,
                level: "Intermediate",
                abstract: "We all know that Angular is written in Elm, but did you\n          know how the source code is really written? In this exciting look\n          into the internals of Angular 4, we'll see exactly how Elm powers\n          the framework, and what you can do to take advantage of this knowledge.",
                voters: ['bradgreen', 'martinfowler', 'igorminar']
            },
            {
                id: 2,
                name: "Angular and React together",
                presenter: "Jamison Dance",
                duration: 2,
                level: "Intermediate",
                abstract: "React v449.6 has just been released. Let's see how to use \n          this new version with Angular to create even more impressive applications.",
                voters: ['bradgreen', 'martinfowler']
            },
            {
                id: 3,
                name: "Redux Woes",
                presenter: "Rob Wormald",
                duration: 1,
                level: "Intermediate",
                abstract: "Everyone is using Redux for everything from Angular to React to \n          Excel macros, but you're still having trouble grasping it? We'll take a look\n          at how farmers use Redux when harvesting grain as a great introduction to \n          this game changing technology.",
                voters: ['bradgreen', 'martinfowler', 'johnpapa']
            },
            {
                id: 4,
                name: "ng-wat again!!",
                presenter: "Shai Reznik",
                duration: 1,
                level: "Beginner",
                abstract: "Let's take a look at some of the stranger pieces of Angular 4,\n          including neural net nets, Android in Androids, and using pipes with actual pipes.",
                voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
            },
            {
                id: 5,
                name: "Dressed for Success",
                presenter: "Ward Bell",
                duration: 2,
                level: "Beginner",
                abstract: "Being a developer in 2037 is about more than just writing bug-free code. \n          You also have to look the part. In this amazing expose, Ward will talk you through\n          how to pick out the right clothes to make your coworkers and boss not only\n          respect you, but also want to be your buddy.",
                voters: ['bradgreen', 'martinfowler']
            },
            {
                id: 6,
                name: "These aren't the directives you're looking for",
                presenter: "John Papa",
                duration: 2,
                level: "Intermediate",
                abstract: "Coinciding with the release of Star Wars Episode 18, this talk will show how\n          to use directives in your Angular 4 development while drawing lessons from the new movie,\n          featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.",
                voters: ['bradgreen', 'martinfowler']
            },
        ]
    },
    {
        id: 4,
        name: 'UN Angular Summit',
        date: new Date('6/10/2037'),
        time: '8:00 am',
        price: 800.00,
        imageUrl: '/app/assets/images/basic-shield.png',
        location: {
            address: 'The UN Angular Center',
            city: 'New York',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "Diversity in Tech",
                presenter: "Sir Dave Smith",
                duration: 2,
                level: "Beginner",
                abstract: "Yes, we all work with cyborgs and androids and Martians, but \n          we probably don't realize that sometimes our internal biases can make it difficult for\n          these well-designed coworkers to really feel at home coding alongside us. This talk will\n          look at things we can do to recognize our biases and counteract them.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "World Peace and Angular",
                presenter: "US Secretary of State Zach Galifianakis",
                duration: 2,
                level: "Beginner",
                abstract: "Angular has been used in most of the major peace brokering that has\n          happened in the last decade, but there is still much we can do to remove all\n          war from the world, and Angular will be a key part of that effort.",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            },
            {
                id: 3,
                name: "Using Angular with Androids",
                presenter: "Dan Wahlin",
                duration: 3,
                level: "Advanced",
                abstract: "Androids may do everything for us now, allowing us to spend all day playing \n          the latest Destiny DLC, but we can still improve the massages they give and the handmade\n          brie they make using Angular 4. This session will show you how.",
                voters: ['igorminar', 'johnpapa']
            },
        ]
    },
    {
        id: 5,
        name: 'ng-vegas',
        date: new Date('2/10/2037'),
        time: '9:00 am',
        price: 400.00,
        imageUrl: '/app/assets/images/ng-vegas.png',
        location: {
            address: 'The Excalibur',
            city: 'Las Vegas',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "Gambling with Angular",
                presenter: "John Papa",
                duration: 1,
                level: "Intermediate",
                abstract: "No, this talk isn't about slot machines. We all know that \n          Angular is used in most waiter-bots and coke vending machines, but\n          did you know that was also used to write the core engine in the majority\n          of voting machines? This talk will look at how all presidential elections\n          are now determined by Angular code.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "Angular 4 in 60ish Minutes",
                presenter: "Dan Wahlin",
                duration: 2,
                level: "Beginner",
                abstract: "Get the skinny on Angular 4 for anyone new to this great new technology.\n          Dan Wahlin will show you how you can get started with Angular in 60ish minutes, \n          guaranteed!",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            }
        ]
    }
];
//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_service__ = __webpack_require__(119);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__event_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_list_resolver_service__ = __webpack_require__(688);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__event_list_resolver_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_route_activator_service__ = __webpack_require__(689);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__event_route_activator_service__["a"]; });
/**
 * Created by wajid on 24/03/2017.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.loginUser = function (userName, password) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa'
        };
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.updateCurrentUser = function (firstName, lastName) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(679);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__ = __webpack_require__(685);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_list_event_list_component__ = __webpack_require__(683);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__event_list_event_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_thumbnail_event_thumbnail_component__ = __webpack_require__(684);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__event_thumbnail_event_thumbnail_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__404_404_component__ = __webpack_require__(678);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__404_404_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_event_create_event_component__ = __webpack_require__(680);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__create_event_create_event_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_details_event_details_component__ = __webpack_require__(682);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__event_details_event_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_session_create_session_component__ = __webpack_require__(681);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__create_session_create_session_component__["a"]; });
/**
 * Created by wajid on 17/03/2017.
 */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/userModule/user.module": [
		1031,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 505;


/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(691);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_index__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_index__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__userModule_auth_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_session_list_session_list_component__ = __webpack_require__(686);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export checkDirtyState */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_index__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_index__["b" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_index__["c" /* EventListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_index__["d" /* EventThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_index__["e" /* Error404Component */],
                __WEBPACK_IMPORTED_MODULE_6__components_index__["f" /* CreateEventComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_index__["g" /* EventDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_index__["h" /* CreateSessionComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_session_list_session_list_component__["a" /* SessionListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["FlexLayoutModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_index__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["b" /* EventRouteActivatorService */],
                __WEBPACK_IMPORTED_MODULE_8__services_index__["c" /* EventListResolverService */],
                __WEBPACK_IMPORTED_MODULE_10__userModule_auth_service__["a" /* AuthService */],
                {
                    provide: 'canDeactivateCreateEvent',
                    useValue: checkDirtyState
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_index__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
function checkDirtyState(component) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            template: __webpack_require__(766),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [])
    ], Error404Component);
    return Error404Component;
}());
//# sourceMappingURL=404.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app',
            template: __webpack_require__(767),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateEventComponent = (function () {
    function CreateEventComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isDirty = true;
    }
    CreateEventComponent.prototype.ngOnInit = function () {
    };
    CreateEventComponent.prototype.saveEvent = function (formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    };
    CreateEventComponent.prototype.cancel = function () {
        this.router.navigate(['/events']);
    };
    CreateEventComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            template: __webpack_require__(768),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */]) === 'function' && _b) || Object])
    ], CreateEventComponent);
    return CreateEventComponent;
    var _a, _b;
}());
//# sourceMappingURL=create-event.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_restricted_words_validator__ = __webpack_require__(690);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSessionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateSessionComponent = (function () {
    function CreateSessionComponent() {
        this.saveNewSession = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* EventEmitter */]();
        this.cancelAddSession = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* EventEmitter */]();
    }
    CreateSessionComponent.prototype.ngOnInit = function () {
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.presenter = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.duration = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.level = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.abstract = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(400), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_restricted_words_validator__["a" /* restrictedWords */])(['foo', 'bar'])]);
        this.newSessionForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    };
    CreateSessionComponent.prototype.saveSession = function (formValues) {
        var session = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    };
    CreateSessionComponent.prototype.cancel = function () {
        this.cancelAddSession.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], CreateSessionComponent.prototype, "saveNewSession", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', Object)
    ], CreateSessionComponent.prototype, "cancelAddSession", void 0);
    CreateSessionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'create-session',
            template: __webpack_require__(769),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [])
    ], CreateSessionComponent);
    return CreateSessionComponent;
}());
//# sourceMappingURL=create-session.component.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailsComponent = (function () {
    function EventDetailsComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    };
    EventDetailsComponent.prototype.addSession = function () {
        this.addMode = true;
    };
    EventDetailsComponent.prototype.saveNewSession = function (session) {
        var nextId = Math.max.apply(null, this.event.sessions.map(function (s) { return s.id; }));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    };
    EventDetailsComponent.prototype.cancelAddSession = function () {
        this.addMode = false;
    };
    EventDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            template: __webpack_require__(770),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], EventDetailsComponent);
    return EventDetailsComponent;
    var _a, _b;
}());
//# sourceMappingURL=event-details.component.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventListComponent = (function () {
    function EventListComponent(eventService, snackBar, route) {
        this.eventService = eventService;
        this.snackBar = snackBar;
        this.route = route;
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.events = this.route.snapshot.data['events'];
    };
    EventListComponent.prototype.handleThumbnailClick = function (eventName) {
        this.snackBar.open(eventName, "OK", {
            duration: 2000,
        });
    };
    EventListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            template: __webpack_require__(771),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EventListComponent);
    return EventListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=event-list.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_event_model__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_event_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_event_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventThumbnailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
    }
    EventThumbnailComponent.prototype.ngOnInit = function () {
    };
    EventThumbnailComponent.prototype.getStartTimeStyle = function () {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' };
        return {};
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_event_model__["IEvent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_event_model__["IEvent"]) === 'function' && _a) || Object)
    ], EventThumbnailComponent.prototype, "event", void 0);
    EventThumbnailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'event-thumbnail',
            template: __webpack_require__(772),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [])
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
    var _a;
}());
//# sourceMappingURL=event-thumbnail.component.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userModule_auth_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = (function () {
    function NavBarComponent(auth) {
        this.auth = auth;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'nav-bar',
            template: __webpack_require__(773),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__userModule_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__userModule_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavBarComponent);
    return NavBarComponent;
    var _a;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionListComponent = (function () {
    function SessionListComponent() {
    }
    SessionListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(), 
        __metadata('design:type', Array)
    ], SessionListComponent.prototype, "sessions", void 0);
    SessionListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'session-list',
            template: __webpack_require__(774),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [])
    ], SessionListComponent);
    return SessionListComponent;
}());
//# sourceMappingURL=session-list.component.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(272);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });


var appRoutes = [
    { path: 'events/new', component: __WEBPACK_IMPORTED_MODULE_0__components_index__["f" /* CreateEventComponent */], canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_0__components_index__["c" /* EventListComponent */], resolve: { events: __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* EventListResolverService */] } },
    { path: 'events/:id', component: __WEBPACK_IMPORTED_MODULE_0__components_index__["g" /* EventDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* EventRouteActivatorService */]] },
    { path: 'events/session/new', component: __WEBPACK_IMPORTED_MODULE_0__components_index__["h" /* CreateSessionComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_0__components_index__["e" /* Error404Component */] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/userModule/user.module#UserModule' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_service__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListResolverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventListResolverService = (function () {
    function EventListResolverService(eventService) {
        this.eventService = eventService;
    }
    EventListResolverService.prototype.resolve = function () {
        return this.eventService.getEvents().map(function (events) { return events; });
    };
    EventListResolverService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */]) === 'function' && _a) || Object])
    ], EventListResolverService);
    return EventListResolverService;
    var _a;
}());
//# sourceMappingURL=event-list-resolver.service.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_service__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventRouteActivatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventRouteActivatorService = (function () {
    function EventRouteActivatorService(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    EventRouteActivatorService.prototype.canActivate = function (route) {
        var eventExists = !!this.eventService.getEvent(+route.params['id']);
        if (!eventExists)
            this.router.navigate(['/404']);
        return eventExists;
    };
    EventRouteActivatorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], EventRouteActivatorService);
    return EventRouteActivatorService;
    var _a, _b;
}());
//# sourceMappingURL=event-route-activator.service.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = restrictedWords;
function restrictedWords(words) {
    return function (control) {
        if (!words)
            return null;
        var invalidWords = words
            .map(function (w) { return control.value.includes(w) ? w : null; })
            .filter(function (w) { return w != null; });
        return invalidWords && invalidWords.length > 0
            ? { 'restrictedWords': invalidWords.join(', ') }
            : null;
    };
}
//# sourceMappingURL=restricted-words.validator.js.map

/***/ }),

/***/ 691:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

//# sourceMappingURL=event.model.js.map

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".fill-remaining-space {\n  /*This fills the remaining space, by using flexbox.\r\n Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n#searchForm {\n  margin-right: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".errorMessage {\r\n  margin-top:150px;\r\n  font-size: 170px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "em {float:right; color:#E05C65; padding-left:10px;}\r\n.error input {background-color:#E3C3C5;}\r\n.error ::-webkit-input-placeholder { color: #999; }\r\n.error :-moz-placeholder { color: #999; }\r\n.error ::-moz-placeholder {color: #999; }\r\n.error :ms-input-placeholder { color: #999; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "em {float:right; color:#E05C65; padding-left:10px;}\r\n.error input, .error select, .error textarea {background-color:#E3C3C5;}\r\n.error ::-webkit-input-placeholder { color: #999; }\r\n.error :-moz-placeholder { color: #999; }\r\n.error ::-moz-placeholder {color: #999; }\r\n.error :ms-input-placeholder { color: #999; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".container { padding-left:20px; padding-right:20px; }\r\n.event-image { height: 100px; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".thumbnail { min-height: 210px; }\r\n.pad-left { margin-left: 10px; }\r\n.well div { color: #bbb; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"errorMessage\">404'd</h1>\n"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<h1>New Event</h1>\n<hr>\n<div class=\"col-md-6\">\n  <form #newEventForm=\"ngForm\" (ngSubmit)=\"saveEvent(newEventForm.value)\" autocomplete=\"off\" novalidate>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.name?.invalid && newEventForm.controls.name?.touched}\">\n      <label for=\"eventName\">Event Name:</label>\n      <em *ngIf=\"newEventForm.controls.name?.invalid && (newEventForm.controls.name?.touched)\">Required</em>\n      <input (ngModel)=\"name\" name=\"name\" required id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name of your event...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.date?.invalid && newEventForm.controls.date?.touched}\">\n      <label for=\"eventDate\">Event Date:</label>\n      <em *ngIf=\"newEventForm.controls.date?.invalid && (newEventForm.controls.date?.touched)\">Required</em>\n      <input (ngModel)=\"date\" name=\"date\" required id=\"eventDate\" type=\"text\" class=\"form-control\" placeholder=\"format (mm/dd/yyyy)...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.time?.invalid && newEventForm.controls.time?.touched}\">\n      <label for=\"eventTime\">Event Time:</label>\n      <em *ngIf=\"newEventForm.controls.time?.invalid && (newEventForm.controls.time?.touched)\">Required</em>\n      <input (ngModel)=\"time\" name=\"time\" required id=\"eventTime\" type=\"text\" class=\"form-control\" placeholder=\"start and end time...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.price?.invalid && newEventForm.controls.price?.touched}\">\n      <label for=\"eventPrice\">Event Price:</label>\n      <em *ngIf=\"newEventForm.controls.price?.invalid && (newEventForm.controls.price?.touched)\">Required</em>\n      <input (ngModel)=\"price\" name=\"price\" required id=\"eventPrice\" type=\"text\" type=\"number\" class=\"form-control\" placeholder=\"event price...\" />\n    </div>\n\n    <div ngModelGroup=\"location\">\n      <div class=\"form-group\">\n        <label for=\"address\">Event Location:</label>\n        <input (ngModel)=\"address\" name=\"address\" id=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address of event...\" />\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <input (ngModel)=\"city\" name=\"city\" id=\"city\" type=\"text\" class=\"form-control\" placeholder=\"City...\" />\n        </div>\n        <div class=\"col-md-6\" >\n          <input (ngModel)=\"country\" name=\"country\" id=\"country\" type=\"text\" class=\"form-control\" placeholder=\"Country...\" />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"onlineUrl\">Online Url:</label>\n      <input (ngModel)=\"onlineUrl\" name=\"onlineUrl\" id=\"onlineUrl\" type=\"text\" class=\"form-control\" placeholder=\"Online Url...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched}\">\n      <label for=\"imageUrl\">Image:</label>\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched && newEventForm.controls.imageUrl?.errors.required\">Required</em>\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched  && newEventForm.controls.imageUrl?.errors.pattern\">Must be a png or jpg url</em>\n      <input (ngModel)=\"imageUrl\" name=\"imageUrl\" required pattern=\".*\\/.*.(png|jpg)\" id=\"imageUrl\" type=\"text\" class=\"form-control\" placeholder=\"url of image...\" />\n      <img [src]=\"newEventForm.controls.imageUrl.value\" *ngIf=\"newEventForm.controls.imageUrl?.valid\" />\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n    <button type=\"button\" [disabled]=\"newEventForm.invalid\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <h3>Create Session</h3>\n</div>\n<div class=\"col-md-6\">\n  <form [formGroup]=\"newSessionForm\" (ngSubmit)=\"saveSession(newSessionForm.value)\" autocomplete=\"off\">\n    <div class=\"form-group\" [ngClass]=\"{'error': name.invalid && name.dirty }\">\n      <label for=\"sessionName\">Session Name:</label>\n      <em *ngIf=\"name.invalid && name.dirty\">Required</em>\n      <input formControlName=\"name\" id=\"sessionName\" type=\"text\" class=\"form-control\" placeholder=\"session name...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': presenter.invalid && presenter.dirty }\">\n      <label for=\"eventDate\">Presenter:</label>\n      <em *ngIf=\"presenter.invalid && presenter.dirty\">Required</em>\n      <input formControlName=\"presenter\" id=\"presenter\" type=\"text\" class=\"form-control\" placeholder=\"presenter...\" />\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': duration.invalid && duration.dirty }\">\n      <label for=\"duration\">Duration:</label>\n      <em *ngIf=\"duration.invalid && duration.dirty\">Required</em>\n      <select formControlName=\"duration\" class=\"form-control\">\n        <option value=\"\">select duration...</option>\n        <option value=\"1\">Half Hour</option>\n        <option value=\"2\">1 Hour</option>\n        <option value=\"3\">Half Day</option>\n        <option value=\"4\">Full Day</option>\n      </select>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': level.invalid && level.dirty }\">\n      <label for=\"level\">Level:</label>\n      <em *ngIf=\"level.invalid && level.dirty\">Required</em>\n      <select formControlName=\"level\" class=\"form-control\">\n        <option value=\"\">select level...</option>\n        <option value=\"Beginner\">Beginner</option>\n        <option value=\"Intermediate\">Intermediate</option>\n        <option value=\"Advanced\">Advanced</option>\n      </select>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'error': abstract.invalid && abstract.dirty }\">\n      <label for=\"abstract\">Abstract:</label>\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.required\">Required</em>\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.maxLength\">Cannot exceed 400 characters</em>\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.restrictedWords\">Restricted words found: {{abstract.errors.restrictedWords}}</em>\n      <textarea formControlName=\"abstract\" id=\"abstract\" rows=3 class=\"form-control\" placeholder=\"abstract...\"></textarea>\n    </div>\n    <button type=\"submit\" [disabled]=\"newSessionForm.invalid\"  class=\"btn btn-primary\">Save</button>\n    <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img [src]=\"event?.imageUrl\" [alt]=\"event?.name\" class=\"event-image\">\n\n  <div class=\"row\">\n    <div class=\"col-md-11\">\n      <h2>{{event?.name}} </h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div><strong>Date:</strong> {{event?.date}}</div>\n      <div><strong>Time:</strong> {{event?.time}}</div>\n      <div><strong>Price:</strong> ${{event?.price}}</div>\n    </div>\n    <div class=\"col-md-6\">\n      <address>\n        <strong>Address:</strong><br />\n        {{event?.location?.address}}<br />\n        {{event?.location?.city}}, {{event?.location?.country}}\n      </address>\n    </div>\n  </div>\n\n  <hr>\n\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <h3 style=\"margin:0\">Sessions</h3>\n    </div>\n\n    <div class=\"col-md-2\">\n      <a (click)=\"addSession()\">Add Session</a>\n    </div>\n  </div>\n\n  <session-list *ngIf=\"!addMode\" [sessions]=\"event?.sessions\"></session-list>\n  <create-session *ngIf=\"addMode\" (saveNewSession)=\"saveNewSession($event)\" (cancelAddSession)=\"cancelAddSession()\"></create-session>\n\n</div>\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Upcoming Angular 2 Events</h1>\n  <hr/>\n  <div class=\"row\">\n    <div *ngFor=\"let event of events\" class=\"col-md-5\">\n      <event-thumbnail (click)=\"handleThumbnailClick(event.name)\" [event]=\"event\"></event-thumbnail>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<div [routerLink]=\"['/events', event.id]\" class=\"well hoverwell thumbnail\">\n  <h2>{{event?.name}}</h2>\n  <div>Date: {{event?.date}}</div>\n  <div [ngStyle]=\"getStartTimeStyle()\" [ngSwitch]=\"event?.time\">\n    Time: {{event?.time}}\n    <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n    <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n    <span *ngSwitchDefault>(Normal Start)</span>\n  </div>\n  <div>Price: \\${{event?.price}}</div>\n  <div *ngIf=\"event?.location\">\n    <span>Location: {{event?.location?.address}}</span>\n    <span class=\"pad-left\">{{event?.location?.city}}, {{event?.location?.country}}</span>\n  </div>\n  <div *ngIf=\"event?.onlineUrl\">\n    Online URL: {{event?.onlineUrl}}\n  </div>\n</div>\n"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n\n  <a md-button [routerLink]=\"['']\">\n    <md-icon>home</md-icon>\n    ngEvents</a>\n\n  <form id=\"searchForm\" class=\"mat-right\">\n    <input mdInput placeholder=\"Search...\" value=\"\">\n    <a md-button >Search</a>\n  </form>\n\n  <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\n    <a md-button [routerLink]=\"['/events']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">All Events</a>\n    <a md-button [routerLink]=\"['/events/new']\" routerLinkActive=\"active\">Create Event</a>\n\n  </div>\n  <span class=\"fill-remaining-space\"></span>\n  <div>\n    <a md-button *ngIf=\"!auth.isAuthenticated()\" [routerLink]=\"['user/login']\">Login</a>\n    <a md-button *ngIf=\"auth.isAuthenticated()\" [routerLink]=\"['user/profile']\">Welcome {{auth.currentUser.firstName}}</a>\n  </div>\n\n\n  <button md-button [md-menu-trigger-for]=\"menu\" fxHide=\"false\" fxHide.gt-sm>\n    <md-icon>menu</md-icon>\n  </button>\n\n</md-toolbar>\n<md-menu x-position=\"before\" #menu=\"mdMenu\">\n  <a md-button [routerLink]=\"['/events']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">All Events</a>\n  <a md-button [routerLink]=\"['/events/new']\" routerLinkActive=\"active\">Create Event</a>\n  <!--<button md-menu-item>Help</button>-->\n</md-menu>\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let session of sessions\">\n  <div class=\"col-md-10\">\n    <div class=\"well\">\n      <h4>{{session.name}}</h4>\n      <h6>{{session.presenter}}</h6>\n      <span>Duration: {{session.duration}}</span><br />\n      <span>Level: {{session.level}}</span>\n      <p>{{session.abstract}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ })

},[1028]);
//# sourceMappingURL=main.bundle.js.map