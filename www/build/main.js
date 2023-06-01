webpackJsonp([5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DbserviceProvider = /** @class */ (function () {
    function DbserviceProvider(http, constant, http1, storage) {
        this.http = http;
        this.constant = constant;
        this.http1 = http1;
        this.storage = storage;
        this.token_value = "";
        this.karigar_id = '';
        this.karigar_status = '';
        this.karigar_info = '';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        console.log('Hello DbserviceProvider Provider');
        this.token();
    }
    DbserviceProvider.prototype.set_token_value = function (value) {
        this.token_data = value;
    };
    DbserviceProvider.prototype.get_token_data = function () {
        return this.token_data;
    };
    DbserviceProvider.prototype.token = function () {
        var _this = this;
        console.log('token');
        this.storage.get('token').then(function (val) {
            _this.token_value = val;
            _this.tokenInfo = _this.getDecodedAccessToken(_this.token_value);
            if (_this.tokenInfo) {
                _this.karigar_id = _this.tokenInfo.sub;
                console.log(_this.karigar_id);
            }
        });
    };
    DbserviceProvider.prototype.get_rqst = function (fn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        headers = headers.set('Token', 'Bearer ' + this.token_value);
        return this.http.get(this.constant.rootUrl + fn, { headers: headers });
    };
    DbserviceProvider.prototype.post_rqst = function (request_data, fn) {
        this.token_value = this.get_token_data();
        this.tokenInfo = this.getDecodedAccessToken(this.token_value); // decode token
        if (this.tokenInfo) {
            this.karigar_id = this.tokenInfo.sub;
            console.log(this.karigar_id);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        headers = headers.set('Token', 'Bearer ' + this.token_value);
        return this.http.post(this.constant.rootUrl + fn, JSON.stringify(request_data), { headers: headers });
    };
    DbserviceProvider.prototype.fileData = function (request_data, fn) {
        this.headers.append('Content-Type', undefined);
        return this.http.post(this.constant.rootUrl + fn, request_data, { headers: this.headers });
    };
    DbserviceProvider.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    DbserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], DbserviceProvider);
    return DbserviceProvider;
}());

//# sourceMappingURL=dbservice.js.map

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConstantProvider = /** @class */ (function () {
    function ConstantProvider(http) {
        this.http = http;
        // live url
        this.rootUrl = 'https://crm.cronicagroup.com/dd_api/';
        this.server_url = this.rootUrl + 'index.php/app/';
        this.upload_url = 'https://crm.cronicagroup.com/dd_api/app/uploads/';
        // public rootUrl: string = 'https://apps.abacusdesk.com/crystal_switch/dd_api/';  
        // public server_url: string = this.rootUrl + 'index.php/app/';
        // public upload_url: string ='https://apps.abacusdesk.com/crystal_switch/dd_api/app/uploads/';
        this.backButton = 0;
        console.log('Hello ConstantProvider Provider');
    }
    ConstantProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], ConstantProvider);
    return ConstantProvider;
}());

//# sourceMappingURL=constant.js.map

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scane_pages_scan_scan__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offer_list_offer_list__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__points_point_list_point_list__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offers_offers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gift_gallery_gift_list_gift_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_profile_view_profile__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_push__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scane_pages_coupan_code_coupan_code__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__terms_terms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__aboutus_modal_aboutus_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__compass_compass__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__furniture_ideas_furniture_ideas__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__products_products__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__working_site_working_site__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__feedback_feedback__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__news_news__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__video_video__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__contact_contact__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__faq_faq__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__transaction_transaction__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__advance_text_advance_text__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_social_sharing__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__notification_notification__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__language_language__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__arrival_product_arrival_product__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__offer_product_offer_product__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__main_category_main_category__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















// import { AboutPage } from '../about/about';
















var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, service, loadingCtrl, storage, barcodeScanner, alertCtrl, modalCtrl, push, translate, constant, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.push = push;
        this.translate = translate;
        this.constant = constant;
        this.socialSharing = socialSharing;
        this.offer_list = [];
        this.karigar_detail = {};
        this.last_point = '';
        this.today_point = '';
        this.appbanner = {};
        this.qr_code = '';
        this.testRadioOpen = '';
        this.value = '';
        this.coupon_value = '';
        this.uploadUrl = '';
        this.tokenInfo = {};
        this.lang = "";
        this.active = false;
        this.offer_detail = {};
        this.language = [];
        this.sharepoint = 0;
        this.notify_cn = 0;
        this.qr_count = 0;
        this.qr_limit = 0;
        console.log(this.navParams);
        this.presentLoading();
        this.notification();
        this.lang = this.navParams.get("lang");
        console.log('====================================');
        console.log(this.lang);
        console.log('====================================');
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.uploadUrl = this.constant.upload_url;
        console.log('ionViewDidLoad HomePage');
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        this.getData();
        // this.get_user_lang();
        this.getofferBannerList();
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getData();
        refresher.complete();
    };
    HomePage.prototype.getData = function () {
        var _this = this;
        console.log("Check");
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/karigarHome')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.language = r['language'];
            _this.karigar_detail = r['karigar'];
            _this.appbanner = r['appbanner'];
            console.log(_this.appbanner);
            console.log(_this.karigar_detail.status);
            if (_this.karigar_detail.user_type != 3) {
                _this.offer_detail = r['offer'];
                _this.last_point = r['last_point'];
                _this.notify_cn = r['notifications'];
                _this.today_point = r['today_point'];
                _this.total_balance_point = parseInt(_this.karigar_detail.balance_point) + parseInt(_this.karigar_detail.referal_point_balance);
                _this.sharepoint = r['points']['owner_ref_point'];
            }
        });
    };
    HomePage.prototype.getofferBannerList = function () {
        var _this = this;
        console.log(this.service.karigar_id);
        console.log('offerbanner');
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/offerList')
            .subscribe(function (r) {
            console.log(r);
            _this.offer_list = r['offer'];
            console.log(_this.offer_list);
        });
    };
    HomePage.prototype.scan_tips = function () {
        console.log('====================================');
        console.log(this.karigar_detail.payment_number);
        console.log('====================================');
        // if(this.karigar_detail.payment_number == ""){
        //     this.translate.get("Alert")
        //     .subscribe(resp=>{
        //         this.alert = resp;
        //     })
        //     this.translate.get('Cancel')
        //     .subscribe(resp=>{
        //         this.cancl = resp;
        //     })
        //     this.translate.get('Add patym number')
        //     .subscribe(resp=>{
        //         this.update_text = resp;
        //     })
        // this.translate.get("To scan your coupon you must add paytm number to your profile")
        // .subscribe((resp)=>{
        //     let paytmNumberAlert = this.alertCtrl.create({
        //         title: this.alert,
        //         message: resp+'!',
        //         buttons: [
        //             {text: this.cancl, },
        //             {text: this.update_text,
        //                 handler: () => {
        //                     let contactModal = this.modalCtrl.create(ProfileEditModalPage, {"user_detail":this.karigar_detail});
        //                     contactModal.present();
        //                 } 
        //             }
        //         ]
        //     });
        //     paytmNumberAlert.present();
        // });
        // return
        // }
        this.scan();
    };
    HomePage.prototype.scanCoupon = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Coupon');
        alert.addInput({
            type: 'radio',
            label: 'Coupon Scan',
            value: 'scan',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Enter Coupon Code',
            value: 'code',
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.testRadioOpen = false;
                // this.testRadioResult = data;
                _this.value = data;
                console.log("redio val =====>", _this.value);
                if (_this.value == 'scan') {
                    _this.scan();
                }
                else if (_this.value == 'code') {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__scane_pages_coupan_code_coupan_code__["a" /* CoupanCodePage */]);
                }
            }
        });
        alert.present();
    };
    // Scan funcation old funcation 
    // scan()
    // {
    //     if( this.karigar_detail.manual_permission==1)
    //     {
    //         this.navCtrl.push(CoupanCodePage)
    //     }
    //     else
    //     {
    //         console.log('else Funcation');
    //         this.service.post_rqst({'karigar_id':this.service.karigar_id},"app_karigar/get_qr_permission")
    //         .subscribe(resp=>{
    //             console.log(resp);
    //             this.qr_count = resp['karigar_daily_count'];
    //             this.qr_limit = resp['qr_limit'];
    //             console.log(this.qr_count);
    //             console.log(this.qr_limit);
    //             if(parseInt(this.qr_count) <= parseInt(this.qr_limit) )
    //             {
    //                 const options:BarcodeScannerOptions =  { 
    //                     prompt : ""
    //                 };
    //                 this.barcodeScanner.scan(options).then(resp => {
    //                     console.log(resp);
    //                     this.qr_code=resp.text;
    //                     console.log( this.qr_code);
    //                     if(resp.text != '')
    //                     {
    //                         this.service.post_rqst({'karigar_id':this.service.karigar_id,'qr_code':this.qr_code},'app_karigar/karigarCoupon')
    //                         .subscribe((r:any)=>
    //                         {
    //                             console.log(r);
    //                             if(r['status'] == 'INVALID'){
    //                                 this.translate.get("Invalid Coupon Code")
    //                                 .subscribe(resp=>{
    //                                     this.showAlert(resp);
    //                                 })
    //                                 return;
    //                             }
    //                             else if(r['status'] == 'NOTAUTHORISED'){
    //                                 this.translate.get("Coupon not authorised")
    //                                 .subscribe(resp=>{
    //                                     this.showAlert(resp);
    //                                 })
    //                                 return;
    //                             }
    //                             else if(r['status'] == 'USED'){
    //                                 this.translate.get("Coupon Already Used")
    //                                 .subscribe(resp=>{
    //                                     this.showAlert(resp);
    //                                 })
    //                                 return;
    //                             }
    //                             else if(r['status'] == 'UNASSIGNED OFFER'){
    //                                 this.translate.get("Your Account Under Verification")
    //                                 .subscribe(resp=>{
    //                                     this.showAlert(resp);
    //                                 })
    //                                 return;
    //                             }
    //                             this.translate.get("points has been added into your wallet")
    //                             .subscribe(resp=>{
    //                                 this.showSuccess( r['coupon_value'] +resp)
    //                             })
    //                             this.getData();
    //                         });
    //                     }
    //                     else{
    //                         console.log('not scanned anything');
    //                     }
    //                 });
    //             }
    //             else
    //             {
    //                 this.translate.get("You have exceed the daily QR scan limit")
    //                 .subscribe(resp=>{
    //                     this.showAlert(resp);
    //                 })
    //             }
    //         })
    //     }
    // }
    HomePage.prototype.scan = function () {
        var _this = this;
        if (this.karigar_detail.manual_permission == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__scane_pages_coupan_code_coupan_code__["a" /* CoupanCodePage */]);
        }
        else {
            console.log('else Funcation');
            this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, "app_karigar/get_qr_permission")
                .subscribe(function (resp) {
                console.log(resp);
                _this.qr_count = resp['karigar_daily_count'];
                _this.qr_limit = resp['qr_limit'];
                console.log(_this.qr_count);
                console.log(_this.qr_limit);
                if (parseInt(_this.qr_count) <= parseInt(_this.qr_limit)) {
                    var options = {
                        prompt: ""
                    };
                    _this.barcodeScanner.scan(options).then(function (resp) {
                        console.log(resp);
                        _this.qr_code = resp.text;
                        console.log(_this.qr_code);
                        if (resp.text != '') {
                            _this.service.post_rqst({ 'karigar_id': _this.service.karigar_id, 'qr_code': _this.qr_code }, 'app_karigar/karigarCoupon')
                                .subscribe(function (r) {
                                console.log(r);
                                if (r['status'] == 'INVALID') {
                                    _this.translate.get("Invalid Coupon Code")
                                        .subscribe(function (resp) {
                                        _this.showAlert(resp);
                                    });
                                    return;
                                }
                                else if (r['status'] == 'NOTAUTHORISED') {
                                    _this.translate.get("Coupon not authorised")
                                        .subscribe(function (resp) {
                                        _this.showAlert(resp);
                                    });
                                    return;
                                }
                                else if (r['status'] == 'USED') {
                                    _this.translate.get("Coupon Already Used")
                                        .subscribe(function (resp) {
                                        _this.showAlert(resp);
                                    });
                                    return;
                                }
                                else if (r['status'] == 'UNASSIGNED OFFER') {
                                    _this.translate.get("Your Account Under Verification")
                                        .subscribe(function (resp) {
                                        _this.showAlert(resp);
                                    });
                                    return;
                                }
                                else if (r['status'] == 'NO-OFFER') {
                                    _this.translate.get("No Offer On This Coupon")
                                        .subscribe(function (resp) {
                                        _this.showAlert(resp);
                                    });
                                    return;
                                }
                                else if (r['status'] == 'VALID') {
                                    _this.translate.get(" Point has been add your wallet")
                                        .subscribe(function (resp) {
                                        _this.showSuccess(r['coupon_value'] + resp);
                                    });
                                    return;
                                }
                                // if(r['result'].status == 'SUCCESS'){
                                //     this.translate.get(" rupees has been transfer into your paytm wallet")
                                //     .subscribe(resp=>{
                                //         this.showSuccess( r['coupon_value'] + resp);
                                //     })
                                // }
                                // else if(r['result'].status == 'PENDING'){
                                //     r['result'].statusMessage;
                                //     this.translate.get("Request InProcess, Check Paytm Wallet After Some Time!")
                                //     .subscribe(resp=>{
                                //         this.showAlert(resp);
                                //     })
                                // }
                                // this.getData();
                            });
                        }
                        else {
                            console.log('not scanned anything');
                        }
                    });
                }
                else {
                    _this.translate.get("You have exceed the daily QR scan limit")
                        .subscribe(function (resp) {
                        _this.showAlert(resp);
                    });
                }
            });
        }
    };
    HomePage.prototype.EnterCouponCode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__scane_pages_coupan_code_coupan_code__["a" /* CoupanCodePage */]);
    };
    HomePage.prototype.viewProfiePic = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": this.karigar_detail.profile, type: "base_64" }).present();
    };
    HomePage.prototype.viewProfie = function () {
        console.log(this.lang);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__profile_profile__["a" /* ProfilePage */], { 'lang': this.lang });
    };
    HomePage.prototype.goOnScanePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__scane_pages_scan_scan__["a" /* ScanPage */]);
    };
    HomePage.prototype.goOnOffersListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__offer_list_offer_list__["a" /* OfferListPage */]);
    };
    HomePage.prototype.goOnOffersPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__offers_offers__["a" /* OffersPage */], { 'id': id });
    };
    HomePage.prototype.goOnPointeListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__points_point_list_point_list__["a" /* PointListPage */]);
    };
    HomePage.prototype.goOnWorkingSitePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_22__working_site_working_site__["a" /* WorkingSitePage */]);
    };
    HomePage.prototype.gotoCompass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__compass_compass__["a" /* CompassPage */]);
    };
    HomePage.prototype.goOntermsPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__terms_terms__["a" /* TermsPage */], { 'id': id });
    };
    HomePage.prototype.goOnFeedbackPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_23__feedback_feedback__["a" /* FeedbackPage */]);
    };
    HomePage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    HomePage.prototype.goOnGiftListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__gift_gallery_gift_list_gift_list__["a" /* GiftListPage */], { 'mode': 'home' });
    };
    HomePage.prototype.goOnFurniturePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__furniture_ideas_furniture_ideas__["a" /* FurnitureIdeasPage */]);
    };
    HomePage.prototype.goOnProductsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_21__products_products__["a" /* ProductsPage */]);
    };
    HomePage.prototype.goOnCategoryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_35__main_category_main_category__["a" /* MainCategoryPage */]);
    };
    HomePage.prototype.goOnArrivalProductsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_33__arrival_product_arrival_product__["a" /* ArrivalProductPage */]);
    };
    HomePage.prototype.goOnOfferProductsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_34__offer_product_offer_product__["a" /* OfferProductPage */]);
    };
    HomePage.prototype.viewDetail = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": this.lang != 'en' ? this.offer_detail.hin_term_image : this.offer_detail.term_image }).present();
    };
    HomePage.prototype.gotoHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_28__transaction_transaction__["a" /* TransactionPage */]);
    };
    HomePage.prototype.goOnGiftGallary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__gift_gallery_gift_list_gift_list__["a" /* GiftListPage */]);
    };
    HomePage.prototype.goOnNewsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_24__news_news__["a" /* NewsPage */]);
    };
    HomePage.prototype.goOnVideoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_25__video_video__["a" /* VideoPage */]);
    };
    HomePage.prototype.goOnContactPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_26__contact_contact__["a" /* ContactPage */]);
    };
    HomePage.prototype.goOnfaqPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_27__faq_faq__["a" /* FaqPage */]);
    };
    HomePage.prototype.goOnAdvanceTextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_29__advance_text_advance_text__["a" /* AdvanceTextPage */]);
    };
    HomePage.prototype.gotoNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_31__notification_notification__["a" /* NotificationPage */]);
    };
    HomePage.prototype.gotoChangeLang = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_32__language_language__["a" /* LanguagePage */], { "come_from": "homepage" });
    };
    HomePage.prototype.share = function () {
        console.log("share and earn");
        // let image = "https://play-lh.googleusercontent.com/FEDtMP_dyMgM8rJtp4MFdp60g0fLuBYNbu3pBNsNH52knTsG1yDuNs56CFYu_X3XqYk=s180-rw";
        var image = "";
        var app_url = "https://apps.apple.com/us/app/crystal-switch-gears/id6447564116";
        this.socialSharing.share("Hey there join me (" + this.karigar_detail.full_name + "-" + this.karigar_detail.mobile_no + ") on crystalswitchgears , a Electrician & Retailer app. Enter my code *" + this.karigar_detail.referral_code + "* to earn points back in your wallet!", "Reffral", image, app_url)
            .then(function (resp) {
            console.log(resp);
        }).catch(function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.showAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.notification = function () {
        var _this = this;
        console.log("notification called");
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        var options = {
            android: {
                senderID: '893824522432',
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'true'
            },
            windows: {},
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) {
            console.log('Device registered', registration);
            _this.service.post_rqst({ 'id': _this.service.karigar_id, 'registration_id': registration.registrationId }, 'app_karigar/update_token').subscribe(function (r) {
                console.log(r);
                console.log("tokken saved");
            });
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    HomePage.prototype.openModal = function () {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__aboutus_modal_aboutus_modal__["a" /* AboutusModalPage */]);
        contactModal.present();
        return;
    };
    HomePage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                console.log(_this.lang);
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                console.log(_this.lang);
                _this.translate.use(_this.lang);
            });
        });
    };
    HomePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_16_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/home/home.html"*/'<ion-header>\n    <ion-toolbar class="ios-coustom-height">\n        <ion-title class="coustom-header-ios">\n            <div class="company-logo">\n                <img src="assets/imgs/logo.png">\n            </div>\n        </ion-title>\n        <ion-buttons end (click)="share()" *ngIf="karigar_detail.user_type!=3">\n            <button ion-button icon-only class="share-text">\n                <ion-icon name="share" color="primary" ></ion-icon> {{\'Share App and Get Points\' | translate}}\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content >\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="{{\'Pull to refresh\' | translate}}" refreshingSpinner="circles" refreshingText="{{\'Refreshing...\'| translate}}">\n        </ion-refresher-content>\n    </ion-refresher>\n    \n    <div class="slide-image">\n        <ion-slides *ngIf="appbanner.length && appbanner.length>1 " [initialSlide]="0" pager autoplay="1000" speed="1000" loop="true">\n            <ion-slide *ngFor="let row of appbanner">\n                <img [src]="uploadUrl+row.banner">\n            </ion-slide>\n        </ion-slides>\n        <div *ngIf="appbanner.length==1">\n            <img [src]="uploadUrl+appbanner[0].banner">\n        </div>\n        <div *ngIf="appbanner.length == 0">\n            <img src="../../assets/imgs/appbanner.png">\n        </div>\n    </div>\n    \n    <!-- <div class="pr-grid">\n        <div class="le-ft" (click)="viewProfiePic()">\n            <img src="{{karigar_detail.profile}}">\n        </div>\n        <div class="ri-ght">\n            <div class="align-ri">\n                <h1>{{karigar_detail.full_name | titlecase}}</h1>\n                <p>{{karigar_detail.city | titlecase}}\n                    <span *ngIf="karigar_detail.status ==\'Pending\'">\n                        <i class="material-icons" >hourglass_full</i>{{\'Pending For Verification\' | translate}}\n                    </span>\n                    <span *ngIf="karigar_detail.status ==\'Verified\'">\n                        <i class="material-icons" >check_circle</i>{{\'Verified\' | translate}}\n                    </span>\n                    <span *ngIf="karigar_detail.status ==\'Suspect\'">\n                        <i class="material-icons" >info</i>{{\'Suspected\' | translate}}\n                    </span>\n                    <span *ngIf="karigar_detail.status ==\'Reject\'">\n                        <i class="material-icons" >cancel</i>{{\'Rejected\' | translate}}\n                    </span>\n                </p>\n            </div>\n        </div>\n    </div> -->\n    \n    <div class="home-grid" [ngClass]="{\'list-view\': active}">\n\n        <div class="profile-container">\n            <div class="profile-thumbnail" (click)="viewProfiePic()">\n                <img src="{{karigar_detail.profile}}">\n            </div>\n            <div class="profie-content">\n                <h2>Welcome,</h2>\n                <h1>{{karigar_detail.full_name | titlecase}}</h1>\n                <h3>+91 {{karigar_detail.mobile_no}}</h3>\n                <span *ngIf="karigar_detail.status ==\'Pending\'" style="color: #ffd402;">\n                    <i class="material-icons" >hourglass_full</i>{{\'Pending\' | translate}}\n                </span>\n                <span *ngIf="karigar_detail.status ==\'Verified\'" style="color: #a5cd05;">\n                    <i class="material-icons" >check_circle</i>{{\'Verified\' | translate}}\n                </span>\n                <span *ngIf="karigar_detail.status ==\'Suspect\'" style="color: #06d6eb;">\n                    <i class="material-icons" >info</i>{{\'Suspected\' | translate}}\n                </span>\n                <span *ngIf="karigar_detail.status ==\'Reject\'" style="color: #e74a40;">\n                    <i class="material-icons" >cancel</i>{{\'Rejected\' | translate}}\n                </span>\n            </div>\n            <div class="share-app-btn">\n                <button class="grid-indication" [ngClass]="{\'active\': active}" (click)="active =! active;"><i class="material-icons">drag_indicator</i></button>\n            </div>\n        </div>\n\n        <div class="count-info" *ngIf="karigar_detail.user_type!=3">\n            <div class="left-count">\n                <p>{{\'LAST 7 DAYS\' | translate}}</p>\n                <h1>{{last_point}}</h1>\n                <p>{{\'POINTS\' | translate}}</p>\n            </div>\n            <div class="left-count">\n                <p>{{\'TOTAL\' | translate}}</p>\n                <h1>{{total_balance_point}}</h1>\n                <p>{{\'POINTS\' | translate}}</p>\n            </div>\n        </div>\n        <ul>\n\n            <li (click)="goOnOffersListPage()" *ngIf="karigar_detail.user_type!=3 && karigar_detail.status ==\'Verified\'">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/offer.svg">\n                </div>\n                <p>{{\'Offers\' | translate}}</p>\n            </li>\n            <li (click)="scanCoupon()" *ngIf="karigar_detail.user_type!=3 && karigar_detail.status ==\'Verified\'">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/scane.svg">\n                </div>\n                <p>{{\'Scan\' | translate}}</p>\n            </li>\n\n\n            <li (click)="EnterCouponCode()" *ngIf="karigar_detail.user_type!=3 && karigar_detail.status ==\'Verified\'">\n                <div class="img-view">\n                    <img src="assets/imgs/scan.svg">\n                </div>\n                <p>{{\'Enter Coupon Code\' | translate}}</p>\n            </li>\n\n            <li (click)="goOnPointeListPage()" *ngIf="karigar_detail.user_type!=3 && karigar_detail.status ==\'Verified\'">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/payment.svg">\n                </div>\n                <p>{{\'Scan History\' | translate}}</p>\n            </li>\n            \n            <li (click)="goOnCategoryPage()" *ngIf="karigar_detail.status ==\'Verified\'">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/product.svg">\n                </div>\n                <p>{{\'Digital catalogues\' | translate}}</p>\n            </li>\n            <li (click)="goOnGiftGallary()" *ngIf="karigar_detail.user_type!=3 && karigar_detail.status ==\'Verified\'">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/gift.svg">\n                </div>\n                <p>{{\'Gift Gallery\' | translate}}</p>\n            </li>\n            <li (click)="goOnArrivalProductsPage()" *ngIf="karigar_detail.status ==\'Verified\'">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/new-arrivals.svg">\n                </div>\n                <p>{{\'New Arrivals\' | translate}}</p>\n            </li>\n\n            <li (click)="goOnVideoPage()">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/video-call.svg">\n                </div>\n                <p>{{\'Videos\' | translate}}</p>\n            </li>\n          \n            <li (click)="gotoNotification()"> \n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/notify.svg">\n                    <span *ngIf="notify_cn" class="custom-point notification-count">{{notify_cn}}</span>\n                </div>\n                <p>{{\'Notification\' | translate}}</p>\n            </li>\n            <li (click)="gotoHistory()" *ngIf="karigar_detail.user_type!=3 && karigar_detail.status ==\'Verified\'">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/history.svg">\n                </div>\n                <p>{{\'Gift Tracker\' | translate}}</p>\n            </li>\n            <li (click)="goOnfaqPage()">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/faq.svg">\n                </div>\n                <p>{{\'FAQ\' | translate}}</p>\n            </li>\n            <li (click)="goOnContactPage()">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/contact.svg">\n                </div>\n                <p>{{\'Contact Us\' | translate}}</p>\n            </li>\n            <li (click)="goOnFeedbackPage()" *ngIf="karigar_detail.user_type!=3">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/feedback.svg">\n                </div>\n                <p>{{\'Chat with us\' | translate}}</p>\n            </li>\n            <li (click)="gotoChangeLang()">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/language_icon.svg">\n                </div>\n                <p>{{\'Change Language\' | translate}}</p>\n            </li>\n\n            <li (click)="viewProfie()">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/profile.png">\n                </div>\n                <p>{{\'My Profile\' | translate}}</p>\n            </li>\n            <li (click)="goOnAdvanceTextPage()">\n                <div class="img-view">\n                    <img src="assets/imgs/home-icon/company.svg">\n                </div>\n                <p>{{\'About Us\' | translate}}</p>\n            </li>\n        </ul>\n    </div>\n    \n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_18__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_30__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_constant_constant__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewProfilePage = /** @class */ (function () {
    function ViewProfilePage(navCtrl, navParams, viewCtrl, storage, db, translate, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.db = db;
        this.translate = translate;
        this.constant = constant;
        this.lang = '';
        this.tokenInfo = {};
        this.profile_pic = '';
        this.type = '';
        this.uploadUrl = '';
    }
    ViewProfilePage.prototype.ionViewDidLoad = function () {
        this.uploadUrl = this.constant.upload_url;
        this.get_user_lang();
        this.profile_pic = this.navParams.get("Image");
        this.type = this.navParams.get("type");
    };
    ViewProfilePage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ViewProfilePage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.setDefaultLang(_this.lang);
                _this.translate.use(_this.lang);
            });
        });
    };
    ViewProfilePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ViewProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-profile',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/view-profile/view-profile.html"*/'\n\n\n<ion-header>\n  <ion-navbar (click)="closeModal()">\n      <ion-title ><i class="material-icons" style="padding-top: 6px;">arrow_back</i></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background: #000;">\n  <div class="modal-center">\n    <div class="cs-model-body">\n      <!-- <div class="heading-section">\n        <p></p>\n        <a (click)="closeModal()" class="cs-close"><i class="material-icons">clear</i></a>	\n      </div> -->\n      <div class="img-radius flat-img">\n        <pinch-zoom *ngIf="type != \'base_64\'" class="pinch-big_zoom">\n          <img  [src]="uploadUrl+profile_pic">\n        </pinch-zoom>\n        <pinch-zoom *ngIf="type == \'base_64\'" class="zoom-img">\n          <img  [src]="profile_pic">\n        </pinch-zoom>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/view-profile/view-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_constant_constant__["a" /* ConstantProvider */]])
    ], ViewProfilePage);
    return ViewProfilePage;
}());

//# sourceMappingURL=view-profile.js.map

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { TabsPage } from '../tabs/tabs';





var AboutusModalPage = /** @class */ (function () {
    function AboutusModalPage(navCtrl, navParams, viewCtrl, platform, db, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.db = db;
        this.storage = storage;
        this.translate = translate;
        this.tokenInfo = {};
        this.lang = '';
        console.log(this.navParams);
        this.lang = this.navParams.get("lang");
        console.log('====================================');
        console.log(this.lang);
        console.log('====================================');
    }
    AboutusModalPage.prototype.ionViewDidLoad = function () {
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        console.log(this.translate.get("if you any question"));
        this.translate.get("if you any question")
            .subscribe(function (resp) {
            console.log(resp);
        });
        // this.get_user_lang();    
    };
    AboutusModalPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    AboutusModalPage.prototype.exitapp = function () {
        console.log('exit');
        this.platform.exitApp();
    };
    AboutusModalPage.prototype.gotoHomePage = function () {
        // this.navCtrl.setRoot(TabsPage,{index:'0'});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    // get_user_lang()
    // {
    //     this.storage.get("token")
    //     .then(resp=>{
    //         this.tokenInfo = this.getDecodedAccessToken(resp );
    //         this.db.post_rqst({"login_id":this.tokenInfo.sub},"app_karigar/get_user_lang")
    //         .subscribe(resp=>{
    //             console.log(resp);
    //             this.lang = resp['language'];
    //             if(this.lang == "")
    //             {
    //                 this.lang = "en";
    //             }
    //             this.translate.use(this.lang);
    //         })
    //     })
    // }
    AboutusModalPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_4_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], AboutusModalPage.prototype, "nav", void 0);
    AboutusModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus-modal',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/aboutus-modal/aboutus-modal.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>aboutus-modal</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="main-modal">\n        <div class="modal-box">\n            <h1>{{\'crystalswitchgears\' | translate}}</h1>\n            <h2>{{\'Your request to access the crystalswitchgears is under review. You will be able to log in as soon as the overseeing dealer acknowledges your application.\' | translate}}</h2>\n            <p>{{\'Meanwhile, you can contact us\' | translate}} <a href="tel:1800-121-5113">1800-121-5113</a> {{\'or mail us\' | translate}} <span> <a href="mailto:info@crystalswitchgear.com">info@crystalswitchgear.com</a>\n            </span> {{\'if you any question\' | translate}}.</p>\n            <div class="modal-cls" (click)="gotoHomePage()">\n                <i class="material-icons">cancel</i>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/aboutus-modal/aboutus-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], AboutusModalPage);
    return AboutusModalPage;
}());

//# sourceMappingURL=aboutus-modal.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_section_mobile_login_mobile_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LanguagePage = /** @class */ (function () {
    function LanguagePage(navCtrl, navParams, db, storage, translate, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.storage = storage;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.come_from = "";
        this.karigar_id = "";
        this.lang = 'en';
        this.inputs = [];
        this.tokenInfo = {};
        this.karigar_detail = {};
        this.chs_lng = "";
        this.no = "";
        this.yes = "";
        this.sure = "";
    }
    LanguagePage.prototype.ionViewDidLoad = function () {
        // commented
        // this.presentLoading();
        // this.change_language();
        var _this = this;
        this.change_language();
        this.storage.get('token')
            .then(function (resp) {
            console.log(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__(resp));
            var tokendata = __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(resp);
            console.log(tokendata);
            _this.karigar_id = tokendata.sub;
            _this.get_user_lang();
        });
        this.come_from = this.navParams.get("come_from");
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        console.log('ionViewDidLoad LanguagePage');
    };
    LanguagePage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    LanguagePage.prototype.change_language = function () {
        var _this = this;
        this.inputs = [];
        this.db.get_rqst("app_karigar/get_languages")
            .subscribe(function (resp) {
            console.log(resp);
            _this.inputs = resp;
            _this.loading.dismiss();
            console.log(_this.inputs);
        });
    };
    LanguagePage.prototype.continue = function () {
        console.log(this.lang);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_section_mobile_login_mobile_login__["a" /* MobileLoginPage */], { "lang": this.lang });
    };
    LanguagePage.prototype.set_lang = function () {
        console.log(this.lang);
        this.translate.use(this.lang);
        console.log(this.lang);
    };
    LanguagePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    LanguagePage.prototype.update_lang = function () {
        var _this = this;
        this.translate.get("Change Language")
            .subscribe(function (resp) {
            _this.chs_lng = resp;
        });
        this.translate.get("No")
            .subscribe(function (resp) {
            _this.no = resp;
        });
        this.translate.get("Yes")
            .subscribe(function (resp) {
            _this.yes = resp;
        });
        this.translate.get("Do you want to change the language?")
            .subscribe(function (resp) {
            _this.chs_lng = resp;
        });
        var updateAlert = this.alertCtrl.create({
            title: this.chs_lng,
            message: this.sure,
            buttons: [
                {
                    text: this.no,
                },
                {
                    text: this.yes,
                    handler: function () {
                        _this.karigar_detail.language = _this.lang;
                        _this.karigar_detail.id = _this.karigar_id;
                        _this.db.post_rqst({ "data": _this.karigar_detail }, "app_karigar/update_language")
                            .subscribe(function (resp) {
                            console.log(resp);
                            //   this.navCtrl.push(SelectRegistrationTypePage,{"lang":this.lang});
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                        });
                    }
                }
            ]
        });
        updateAlert.present();
    };
    LanguagePage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.karigar_id }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    LanguagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-language',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/language/language.html"*/'\n<ion-header no-border>\n  <ion-toolbar class="ios-coustom-height-one" color="white">\n    <ion-title class="coustom-header-ios">\n      <div class="logo no-margin" >\n        <img src="assets/imgs/logo.png">\n      </div>\n    </ion-title>\n  </ion-toolbar>  \n</ion-header>\n\n<ion-content padding>\n  <div class="heading line mt18 mb16">\n    <p class="font16">भाषा चुनिए / Choose Your Language</p>\n  </div>\n  <ion-list radio-group class="mt15" name="lang" [(ngModel)]="lang">\n    <ion-item>\n      <ion-label>अंग्रेज़ी  (English)</ion-label>\n      <ion-radio (click)="set_lang()" checked="{{\'en\' == lang}}" value="en"></ion-radio>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label>हिंदी (Hindi)</ion-label>\n      <ion-radio (click)="set_lang()" checked="{{\'hin\' == lang}}" value="hin"></ion-radio>\n    </ion-item>\n    \n  </ion-list>\n</ion-content>\n<ion-footer>\n  <button ion-button class="cs-btn no-margin" *ngIf="lang!=\'\'" (click)="karigar_id ? update_lang() : continue()">{{\'Continue\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/language/language.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LanguagePage);
    return LanguagePage;
}());

//# sourceMappingURL=language.js.map

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_terms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gift_gallery_gift_detail_gift_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_constant_constant__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OffersPage = /** @class */ (function () {
    function OffersPage(navCtrl, navParams, service, loadingCtrl, app, modalCtrl, storage, translate, db, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.constant = constant;
        this.offer_id = '';
        this.offer_detail = {};
        this.gift_list = '';
        this.balance_point = '';
        this.offer_balance = '';
        this.tokenInfo = {};
        this.lang = '';
        this.filter = {};
        this.uploadUrl = '';
        this.flag = '';
    }
    OffersPage.prototype.ionViewDidLoad = function () {
        this.uploadUrl = this.constant.upload_url;
        console.log('ionViewDidLoad OffersPage');
        this.presentLoading();
        this.offer_id = this.navParams.get('id');
        console.log(this.offer_id);
        this.getofferDetail(this.offer_id);
        this.get_user_lang();
    };
    OffersPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getofferDetail(this.offer_id);
        refresher.complete();
    };
    OffersPage.prototype.goOntermsPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__terms_terms__["a" /* TermsPage */], { 'id': id });
    };
    OffersPage.prototype.goOnGiftDetail = function (id) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__gift_gallery_gift_detail_gift_detail__["a" /* GiftDetailPage */], { 'id': id });
    };
    OffersPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    OffersPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_8_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    OffersPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.filter.limit = this.gift_list.length;
        this.service.post_rqst({ 'filter': this.filter, 'offer_id': this.offer_id, 'karigar_id': this.service.karigar_id }, 'app_karigar/offerDetail')
            .subscribe(function (r) {
            console.log(r);
            if (r == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.gift_list = _this.gift_list.concat(r['gift']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    OffersPage.prototype.getofferDetail = function (offer_id) {
        var _this = this;
        this.filter.limit = 0;
        console.log(offer_id);
        this.service.post_rqst({ 'filter': this.filter, 'offer_id': offer_id, 'karigar_id': this.service.karigar_id }, 'app_karigar/offerDetail')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.offer_detail = r['offer'];
            _this.gift_list = r['gift'];
            var referral_per = r['referral_percentage'];
            var referral_per_amt = ((r['karigar'].referal_point_balance * referral_per.one_time_percentage) / 100);
            _this.balance_point = parseInt(r['karigar'].balance_point);
            // this.offer_balance=parseInt(r['gift'][0].offer_balance ) + (referral_per_amt);
            _this.offer_balance = _this.balance_point + (referral_per_amt);
            console.log(_this.offer_balance);
            // for gift active class
            for (var i = 0; i < _this.gift_list.length; i++) {
                _this.gift_list[i].coupon_points = parseInt(_this.gift_list[i].coupon_points);
                _this.gift_list[i].offer_balance = _this.offer_balance;
                console.log(_this.gift_list[i].offer_balance);
                console.log(_this.gift_list[i].coupon_points);
            }
            // end
        });
    };
    OffersPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    OffersPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                this.navCtrl.popToRoot();
            }
        }
    };
    OffersPage.prototype.viewDetail = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": this.lang != 'en' ? this.offer_detail.hin_term_image : this.offer_detail.term_image }).present();
    };
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offers',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/offers/offers.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{offer_detail.title | titlecase}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="{{\'Pull to refresh\' | translate}}" refreshingSpinner="circles" refreshingText="{{\'Refreshing...\' | translate}}">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <!-- <div class="fix"></div> -->\n    <div class="bg-banner">\n        <img src="{{offer_detail.offer_banner}}">\n    </div>\n    <div class="content-padding">\n        <div class="offer">\n            <div class="offer-detail">\n                <h1>{{lang != \'en\' ? offer_detail.hin_title :offer_detail.title| titlecase}}\n                </h1>\n                <p><span>{{\'Balance Points\' | translate}} : </span>{{offer_balance || 0}}</p>\n                <p><span>{{\'Valid Upto\' | translate}} :</span> {{offer_detail.end_date | date:\'d MMMM y\'}}</p>\n            </div>\n            <!-- <div class="terms" *ngIf="offer_detail.term_image!=\'\' || offer_detail.hin_term_image!=\'\'"  (click)="viewDetail()">\n                <a>{{\'A D Detail\' | translate}}</a>\n            </div> -->\n            <div class="terms" (click)="goOntermsPage(offer_detail.id)">\n                <a>{{\'Description / Terms & Condition\' | translate}}</a>   \n            </div>\n            \n\n        </div>\n    </div>\n\n    <div class="listing mt0">\n        <!-- <div class="profile-detail point-detail" *ngIf="offer_detail.term_image!=\'\' || offer_detail.hin_term_image!=\'\'" (click)="viewDetail()">\n            <div class="deflex">\n                <ul>\n                    <li class="refcode">\n                        <h1>{{\'A D Detail\' | translate}}</h1>\n                        <i class="material-icons">arrow_right_alt</i>\n                    </li>\n                </ul>\n            </div>\n        </div> -->\n        <button ion-item [ngClass]="{\'verified\' : list.coupon_points <= offer_balance}" *ngFor="let list of gift_list;let i=index" (click)="goOnGiftDetail(list.id)">\n            <div class="head-detail">\n                <div class="head">\n                    <h1>{{list.coupon_points}}</h1>\n                    <p>{{\'Points\' | translate}}</p>\n                </div>\n                <div class="detail">\n                    <h1>{{lang !=\'en\' ? list.hin_gift_title : list.gift_title | titlecase}}</h1>\n                </div>\n            </div>  \n            <div class="product-img">\n                <img src="{{list.image}}">\n            </div>\n        </button>\n        <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)" *ngIf="flag!=1">\n            <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/offers/offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_constant_constant__["a" /* ConstantProvider */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoupanCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoupanCodePage = /** @class */ (function () {
    function CoupanCodePage(navCtrl, modalCtrl, navParams, service, alertCtrl, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.qr_code = '';
        this.data = {};
        this.flag = '';
    }
    CoupanCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoupanCodePage');
    };
    CoupanCodePage.prototype.submit = function (data) {
        var _this = this;
        this.flag = 1;
        console.log(data);
        this.qr_code = data;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'qr_code': this.qr_code }, 'app_karigar/karigarCoupon').subscribe(function (r) {
            console.log(r);
            if (r['status'] == 'BLANK') {
                _this.showAlert("This Coupon Code doesn't contain any Value");
                return;
            }
            else if (r['status'] == 'INVALID') {
                _this.showAlert("Invalid Coupon Code");
                return;
            }
            else if (r['status'] == 'REQUIRED') {
                _this.showAlert("Please Enter Coupon Code");
                return;
            }
            else if (r['status'] == 'USED') {
                _this.showAlert("Coupon Already Used");
                return;
            }
            else if (r['status'] == 'UNASSIGNED OFFER') {
                _this.showAlert("Your Account Under Verification");
                return;
            }
            else if (r['status'] == 'VALID') {
                var productData = void 0;
                productData = r['productdetail'];
                // if(productData.image != ''){
                //   this.presentCancelPolicyModal(r['productdetail']);
                // }
                _this.showSuccess(r['coupon_value'] + ' ' + "POINTS have been added into your wallet");
            }
            // this.showSuccess( r['coupon_value'] +" points has been added into your wallet")
            // this.navCtrl.setRoot(TabsPage,{index:'0'});
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        });
    };
    // presentCancelPolicyModal(data) {
    //   console.log(data);
    //   let contactModal = this.modalCtrl.create(SuccessModalPage,{'data':data});
    //   contactModal.present();
    //   console.log('otp');
    // }
    CoupanCodePage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (resp) {
            console.log(resp);
            _this.qr_code = resp.text;
            console.log(_this.qr_code);
            if (resp.text != '') {
                _this.service.post_rqst({ 'karigar_id': _this.service.karigar_id, 'qr_code': _this.qr_code }, 'app_karigar/karigarCoupon').subscribe(function (r) {
                    console.log(r);
                    if (r['status'] == 'INVALID') {
                        _this.showAlert("Invalid Coupon Code");
                        return;
                    }
                    else if (r['status'] == 'USED') {
                        _this.showAlert("Coupon Already Used");
                        return;
                    }
                    else if (r['status'] == 'UNASSIGNED OFFER') {
                        _this.showAlert("Invalid Coupon Code");
                        return;
                    }
                    else if (r['status'] == 'REQUIRED') {
                        _this.showAlert("Please Enter the coupon code ");
                        return;
                    }
                    _this.showSuccess(r['coupon_value'] + ' ' + " Points has been added into your wallet");
                    //show the value 
                    // this.navCtrl.setRoot(TabsPage,{index:'0'});
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                });
            }
            else {
                console.log('not scanned anything');
            }
        });
    };
    CoupanCodePage.prototype.showAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    CoupanCodePage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    CoupanCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coupan-code',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/scane-pages/coupan-code/coupan-code.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'Enter Coupon Code\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="bg-margin">\n    <div class="paragraph mt15">\n      <p>{{\'Please enter coupon code here, to get your points\' | translate}}</p>\n    </div>\n    <div class="nrml-input">\n      <input type="text" placeholder="{{\'Coupon Code\' | translate}}" [(ngModel)]="data.code" #code="ngModel" name="code">\n    </div>\n    <div class="coupon-error" *ngIf="!data.code && flag==1">\n      <p>{{\'Required\' | translate}}</p>\n    </div>\n    <button class="cs-btn btn-radius-four" (click)="submit(data.code)"><span>{{\'Submit\' | translate}}</span></button>\n    <!-- mt50 -->\n    <div class="scane-img" >\n      <img src="assets/imgs/scane.png" (click)="scan()">\n      <p>{{\'Tap on scan icon to scan your coupon\' | translate}}</p>\n    </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/scane-pages/coupan-code/coupan-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], CoupanCodePage);
    return CoupanCodePage;
}());

//# sourceMappingURL=coupan-code.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipping_detail_shipping_detail__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chating_chating__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feedback_feedback__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TransactionPage = /** @class */ (function () {
    function TransactionPage(navCtrl, navParams, service, loadingCtrl, app, alertCtrl, modalCtrl, storage, translate, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.transaction_detail = [];
        this.balance_point = '';
        this.filter = {};
        this.tokenInfo = {};
        this.lang = '';
        this.flag = '';
        // this.presentLoading();
    }
    TransactionPage.prototype.ionViewWillEnter = function () {
        this.get_user_lang();
        console.log('ionViewDidLoad TransactionPage');
        this.getTransactionDetail();
    };
    TransactionPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getTransactionDetail();
        refresher.complete();
    };
    TransactionPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    TransactionPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    TransactionPage.prototype.goOnShippingPage = function (id, gift_id) {
        console.log('shipping');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__shipping_detail_shipping_detail__["a" /* ShippingDetailPage */], { 'id': id, 'gift_id': gift_id });
    };
    TransactionPage.prototype.goOnChatingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chating_chating__["a" /* ChatingPage */]);
    };
    TransactionPage.prototype.getTransactionDetail = function () {
        var _this = this;
        this.presentLoading();
        this.filter.limit = 0;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'filter': this.filter }, 'app_karigar/transaction')
            .subscribe(function (r) {
            console.log(r);
            if (r) {
                _this.loading.dismiss();
                _this.transaction_detail = r['transaction'];
                _this.balance_point = r['karigar'].balance_point;
                _this.total_balance_point = parseInt(r['karigar'].balance_point) + parseInt(r['karigar'].referal_point_balance);
            }
        });
    };
    TransactionPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    TransactionPage.prototype.recvConfirmation = function (gift_id) {
        var _this = this;
        // let ReceiveModal = this.modalCtrl.create(ReceiveRemarkModalPage,{'gift_id':gift_id});
        // ReceiveModal.present();
        this.service.post_rqst({ 'id': gift_id, 'karigar_id': this.service.karigar_id }, 'app_karigar/redeemReceiveStatus').subscribe(function (r) {
            console.log(r);
            // this.navCtrl.setRoot(TabsPage,{index:'3'});
            //   this.navCtrl.push(TransactionPage);
            _this.showSuccess('Thank you for your feedback!');
            _this.getTransactionDetail();
            // this.getTransactionDetail()
        });
        // alert.present();
    };
    TransactionPage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            // title:'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    TransactionPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.transaction_detail.length;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'filter': this.filter }, 'app_karigar/transaction')
            .subscribe(function (r) {
            console.log(r);
            if (r['transaction'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.transaction_detail = _this.transaction_detail.concat(r['transaction']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    TransactionPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    TransactionPage.prototype.helpChat = function (reqId) {
        console.log('====================================');
        console.log(reqId);
        console.log('====================================');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__feedback_feedback__["a" /* FeedbackPage */], { 'code': "My Redeem Gift Request ID is - " + reqId + " I want to know the status of my request" });
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/transaction/transaction.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Gift Tracker\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content  pullingIcon="arrow-dropdown"\n        pullingText="{{\'Pull to refresh\' | translate}}"\n        refreshingSpinner="circles"\n        refreshingText="{{\'Refreshing...\' | translate}}">\n    </ion-refresher-content>\n</ion-refresher>\n\n<div class="top-nav nav-adjust">\n    <p>{{\'Balance Points\' | translate}}</p>\n    <h1>{{total_balance_point}}</h1>\n</div>\n<div class="transaction-list"  >\n    <div class="his-listing" *ngFor="let list of transaction_detail; let i=index">\n        <button ion-item class="main-list" (click)=" goOnShippingPage(list.id,list.offer_gift_id) " >\n            <div class="tr-content">\n                <div class="inner">\n                    <div class="tr-cicle" *ngIf="list.gift_status==\'Pending\'">\n                        <i class="material-icons">watch_later</i>\n                    </div>\n                    <div class="tr-cicle tr-cicle1" *ngIf="list.gift_status==\'Reject\'">\n                        <i class="material-icons reject">cancel</i>\n                    </div>\n                    <div class="tr-cicle tr-cicle2" *ngIf="list.gift_status==\'Approved\'">\n                        <i class="material-icons" >thumb_up</i>\n                    </div>\n                    <div class="tr-tags">\n                        <h2>{{\'Request\' | translate}} <ng-container>{{list.gift_status!=\'Pending\' ? list.gift_status: \'Sent\'}}</ng-container></h2>\n                        <h1 style="white-space:normal">{{list.gift_title | titlecase}}</h1>\n                        <p> {{\'Req Id\' | translate}} : {{list.invoice_id }}</p>\n                        <span *ngIf="list.gift_status==\'Reject\' && receive_status != \'\'">{{list.reject_reason | titlecase}}</span>\n                    </div>\n                </div>			\n                <div class="tr-points"  >\n                    <h2>{{list.coupon_points}}</h2>\n                    <p>{{\'Points\' | translate}}</p>\n                    <span class="refund" *ngIf="list.gift_status==\'Reject\' && receive_status != \'\'">{{\'Refunded\' | translate}}</span>\n                </div>\n            </div>\n        </button>\n        <div class="tr-status" *ngIf="list.gift_status==\'Pending\'">\n            <div class="tag">\n                <h1>{{list.date_created |date:\'d MMMM y\'}}</h1>\n            </div>\n            <div class="pending">\n                <p>{{list.gift_status}}</p>\n            </div>\n        </div>\n        <div class="tr-status" *ngIf="list.gift_status==\'Reject\'" >\n            <div class="tag">\n                <h1>{{list.date_created |date:\'d MMMM y\'}}</h1>\n            </div>\n            <div class="reject">\n                <p>Rejected</p>\n            </div>\n        </div>\n        <div class="tr-status" *ngIf="list.receive_status==\'Received\'" >\n            <p class="green">{{\'Complete\' | translate}}</p>\n        </div>\n        <div class="tr-status" *ngIf="list.gift_status==\'Approved\'">\n            <div class="tag">\n                <h1>{{list.date_created |date:\'d MMMM y\'}}</h1>\n            </div>\n            <div class="approved">\n                <p>{{list.gift_status}}</p>\n            </div>\n        </div> \n       \n        <div class="tr-status" *ngIf="list.receive_status==\'Shipped\'" >\n            <div class="tag btn-received">\n                <p>Have you received the product? \n                    <span class="yes_btn" (click)="recvConfirmation(list.id)">yes</span>\n                </p>\n                <!-- <button (click)="recvConfirmation(list.id)">{{\'Receive\' | translate}}</button> -->\n            </div>\n            <!-- <div class="transfer" >\n                <p>Receive</p>\n            </div> -->\n        </div>\n        \n        <div class="tr-status"  *ngIf="list.receive_status==\'Received\'">\n            <div class="tag">\n                <h1>{{\'Receive on\' | translate}} : {{list.received_date | date:\'d MMMM y\'}}</h1>\n            </div>\n            <div class="received">\n                <p>{{\'Receive\' | translate}}</p>\n            </div>\n        </div>\n        \n        <div class="chatus"  *ngIf="list.receive_status!=\'Received\'">\n            <button ion-button icon-start  clear outline (click)="helpChat(list.invoice_id)">\n                <ion-icon name="chatboxes"></ion-icon>\n                Have any query? Chat with us!\n            </button>\n        </div>\n    </div>\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n        <ion-infinite-scroll-content\n        loadingSpinner="bubbles"\n        loadingText="{{\'Loading more data...\' | translate}}">\n    </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n<div class="h100"></div>\n</div>		\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/transaction/transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams, service, alertCtrl, app, storage, translate, contsn, actionSheetController, camera, loadingCtrl, transfer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.storage = storage;
        this.translate = translate;
        this.contsn = contsn;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.data = {};
        this.rootPage = '';
        this.feedbackdata = [];
        this.tokenInfo = {};
        this.lang = '';
        this.ok = "";
        this.upload_url = "";
        this.formdata = new FormData();
        this.timeLeft = 20;
        this.cam = "";
        this.gal = "";
        this.cancl = "";
        this.upl_file = "";
        this.save_succ = "";
        this.image = "";
        this.startTimer();
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.translate.get('Cancel')
            .subscribe(function (resp) {
            _this.cancl = resp;
        });
        console.log('ionViewDidLoad FeedbackPage');
        this.get_user_lang();
        this.Feedbackdata();
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.upload_url = this.contsn.upload_url;
    };
    FeedbackPage.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                _this.timeLeft = 20;
                _this.Feedbackdata();
            }
        }, 1000);
    };
    FeedbackPage.prototype.download = function (data) {
        window.open(data, '_self');
    };
    FeedbackPage.prototype.scroll = function () {
        var messagesContent = this.content;
        console.log(messagesContent.getContentDimensions());
        console.log(messagesContent.getContentDimensions().contentHeight);
        messagesContent.scrollToBottom(1000);
        // messagesContent.scrollTo(0, messagesContent.getContentDimensions().contentHeight, 700);
    };
    FeedbackPage.prototype.submitFeedback = function () {
        var _this = this;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'feedback': this.data.feedback }, 'app_karigar/feedback')
            .subscribe(function (r) {
            console.log(r);
            _this.Feedbackdata();
            _this.data.feedback = '';
        });
    };
    FeedbackPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.Feedbackdata();
        refresher.complete();
    };
    FeedbackPage.prototype.showSuccess = function (text) {
        var _this = this;
        this.translate.get("ThankYou")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    FeedbackPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    FeedbackPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_2_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    FeedbackPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    FeedbackPage.prototype.Feedbackdata = function () {
        var _this = this;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/feedback_data')
            .subscribe(function (r) {
            console.log(r);
            _this.feedbackdata = r.feedback;
            _this.scroll();
        });
    };
    FeedbackPage.prototype.open_camera = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Select An Option",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takePhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    FeedbackPage.prototype.takePhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.image);
            _this.save_picture();
        });
    };
    FeedbackPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.image = 'data:image/jpeg;base64,' + imageData;
            _this.formdata.append("image", _this.image);
            console.log(_this.image);
            _this.save_picture();
        });
    };
    FeedbackPage.prototype.save_picture = function () {
        var _this = this;
        var updateAlert = this.alertCtrl.create({
            title: 'Are you sure ?',
            message: 'You want to send this!',
            buttons: [
                { text: this.cancl, },
                { text: this.ok,
                    handler: function () {
                        var loader = _this.loadingCtrl.create({
                            content: "Uploading..."
                        });
                        loader.present();
                        var fileTransfer = _this.transfer.create();
                        var random = Math.floor(Math.random() * 100);
                        var options = {
                            fileKey: 'photo',
                            fileName: "myImage_" + random + ".jpg",
                            chunkedMode: false,
                            mimeType: "image/jpeg",
                        };
                        fileTransfer.upload(_this.image, _this.contsn.rootUrl + 'user_attact?id=' + _this.service.karigar_id, options)
                            .then(function (data) {
                            console.log(data);
                            loader.dismiss();
                            _this.Feedbackdata();
                        });
                    }
                }
            ]
        });
        updateAlert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollElement'),
        __metadata("design:type", Object)
    ], FeedbackPage.prototype, "content", void 0);
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/feedback/feedback.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title >{{\'Chat with us\' | translate}}</ion-title>\n        \n    </ion-navbar>\n</ion-header>\n\n<ion-content padding #scrollElement>\n    \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content  pullingIcon="arrow-dropdown"\n        pullingText="{{\'Pull to refresh\' | translate}}"\n        refreshingSpinner="circles"\n        refreshingText="{{\'Refreshing...\' | translate}}">\n    </ion-refresher-content>\n</ion-refresher>\n\n<div class="chat">\n    <ul>\n        <ng-container *ngFor="let row of feedbackdata">\n            <li class="me" *ngIf="row.feedback || row.attach_feedback">\n                <div class="entete">\n                    <h3>{{row.date_created == \'0000-00-00 00:00:00\' ? \'\' : row.date_created | date:\'d MMM h:m a\'}}</h3>\n                    <span class="status blue"></span>\n                </div>\n                \n                <div *ngIf="row.feedback" class="message">\n                    {{row.feedback}}\n                </div>\n                <div *ngIf="row.attach_feedback" class="message img-type" (click)="download(upload_url+row.attach_feedback)">\n                    <img src="{{upload_url+row.attach_feedback}}">\n                </div>\n            </li>\n            <li class="you" *ngIf="row.reply || row.attach_reply">\n                <div class="entete">\n                    <span class="status green"></span>\n                    <h3>{{row.reply_date == \'0000-00-00 00:00:00\' ? \'\' : row.reply_date | date:\'d MMM h:m a\'}}</h3>\n                </div>\n                \n                <div *ngIf="row.reply" class="message">\n                    {{row.reply}}\n                </div>\n                <div *ngIf="row.attach_reply" class="message img-type" (click)="download(upload_url+row.attach_reply)">\n                    <img src="{{upload_url+row.attach_reply}}">\n                </div>\n            </li>\n        </ng-container>\n    </ul>\n</div>\n\n</ion-content>\n\n<ion-footer>\n    <div class="chat-message" >\n        <textarea type="text" placeholder="{{\'Write something\' | translate}}" name="feedback" #feedback="ngModel" [(ngModel)]="data.feedback">{{\'Write something\' | translate}}</textarea>\n        <a class="attachment" (click)="open_camera()"><i class="material-icons">attach_file</i></a>\n        <a class="send-btn" (click)="submitFeedback()"><i class="material-icons">send</i></a>\n    </div>\n</ion-footer>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/feedback/feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),
/* 68 */,
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_otp__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__language_language__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { LanguagePageModule } from '../../language/language.module';
// import { LanguagePage } from '../../language/language';
// import * as jwt_decode from "jwt-decode";
var MobileLoginPage = /** @class */ (function () {
    function MobileLoginPage(navCtrl, navParams, service, alertCtrl, db, translate, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.otp = '';
        this.lang = 'en';
        this.maxtime = 30;
        this.maxTime = 0;
        this.hidevalue = false;
        this.lang = this.navParams.get("lang");
    }
    MobileLoginPage.prototype.ionViewDidLoad = function () {
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
    };
    MobileLoginPage.prototype.StartTimer = function () {
        var _this = this;
        this.timer = setTimeout(function (x) {
            if (_this.maxtime <= 0) { }
            _this.maxTime -= 1;
            if (_this.maxTime > 0) {
                _this.hidevalue = true;
                _this.StartTimer();
            }
            else {
                _this.maxtime = 30;
                _this.hidevalue = false;
            }
        }, 1000);
    };
    MobileLoginPage.prototype.submit = function () {
        var _this = this;
        this.maxTime = 30;
        this.StartTimer();
        console.log(this.data);
        this.service.post_rqst({ 'mobile_no': this.data.mobile_no }, 'app_karigar/karigarLoginOtp')
            .subscribe(function (r) {
            console.log(r);
            if (r['status'] == "SUCCESS") {
                _this.otp = r['otp'];
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__otp_otp__["a" /* OtpPage */], { 'otp': _this.otp, 'mobile_no': _this.data.mobile_no, "lang": _this.lang });
            }
            if (r['status'] == 'REQUIRED MOBILE NO') {
                _this.RequiredAlert("Please enter Mobile No to continue.");
                return false;
            }
        });
    };
    MobileLoginPage.prototype.showAlert = function (text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Register',
                    cssClass: 'close-action-sheet',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registration_registration__["a" /* RegistrationPage */], { 'mobile_no': _this.data.mobile_no });
                    }
                }]
        });
        alert.present();
    };
    MobileLoginPage.prototype.RequiredAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    MobileLoginPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    MobileLoginPage.prototype.languageBack = function () {
        console.log(this.lang);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__language_language__["a" /* LanguagePage */]);
    };
    MobileLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mobile-login',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/login-section/mobile-login/mobile-login.html"*/'\n<ion-header no-border>\n    <ion-toolbar class="ios-coustom-height-one" color="white">\n        <ion-title  class="coustom-header-ios">\n        <ion-buttons class="back-btns" (click)="languageBack()">\n            <button ion-button icon-only>\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        \n     \n            <div class="logo no-margin" >\n                <img src="assets/imgs/logo.png" >\n            </div>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form #f="ngForm" class="hp100">\n      <div class="center-block">\n        <div class="mobile-login">\n            <div class="text">\n                <p>{{\'Enter your mobile number to get started\' | translate}}!</p>\n            </div>\n            <div class="input-section">\n                <div class="input-adjust">\n                    <input type="tel" name="" placeholder="{{\'Mobile number\' | translate}}" name="mobile_no" #mobile_no="ngModel" [(ngModel)]="data.mobile_no" [ngClass]="{\'is-invalid\':f.submitted && mobile_no?.invalid}" required min="0" maxlength="10" minlength="10">\n                    <div class="fixed-number">\n                        <p>+91</p>\n                    </div>\n                </div>\n                <i class="material-icons">local_phone</i>\n            </div>\n            <div *ngIf="data.mobile_no!=\'\'">\n                <div class="otp-error" *ngIf="!mobile_no.valid && mobile_no.touched">\n                    <p>{{\'Enter valid Mobile No.\' | translate}} </p>\n                </div>\n            </div>\n            <div class="login-btn">\n                <button (click)="f.valid && submit()" [disabled]="hidevalue">{{\'Continue\' | translate}} {{maxTime ? \'(\'+maxTime+\')\' : \'\'}}</button>\n            </div>\n        </div>\n      </div>\n    </form>\n    \n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/login-section/mobile-login/mobile-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], MobileLoginPage);
    return MobileLoginPage;
}());

//# sourceMappingURL=mobile-login.js.map

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gift_gallery_gift_list_gift_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_home_main_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transaction_transaction__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_section_mobile_login_mobile_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dbservice_dbservice__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TabsPage = /** @class */ (function () {
    function TabsPage(storage, navParams, translate, db) {
        var _this = this;
        this.storage = storage;
        this.navParams = navParams;
        this.translate = translate;
        this.db = db;
        this.index = '';
        this.tokenInfo = {};
        this.lang = "";
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__gift_gallery_gift_list_gift_list__["a" /* GiftListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__main_home_main_home__["a" /* MainHomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__transaction_transaction__["a" /* TransactionPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        this.index = this.navParams.get('index');
        storage.get('token_value').then(function (val) {
            console.log(val);
            if (val == '') {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__login_section_mobile_login_mobile_login__["a" /* MobileLoginPage */];
            }
            else {
                _this.rootPage = TabsPage_1;
            }
        });
        this.get_user_lang();
    }
    TabsPage_1 = TabsPage;
    TabsPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    TabsPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_10_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], TabsPage.prototype, "nav", void 0);
    TabsPage = TabsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex= {{index}}>\n  <ion-tab [root]="tab1Root" tabTitle="{{\'HOME\' | translate}}" tabIcon="tab-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="{{\'GIFT GALLERY\' | translate}}" tabIcon="tab-gift"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="center-tab"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="{{\'HISTORY\' | translate}}" tabIcon="tab-history"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="{{\'PROFILE\' | translate}}" tabIcon="tab-profile"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_11__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], TabsPage);
    return TabsPage;
    var TabsPage_1;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gift_detail_gift_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GiftListPage = /** @class */ (function () {
    function GiftListPage(navCtrl, navParams, service, loadingCtrl, app, storage, translate, db, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.constant = constant;
        this.filter = {};
        this.id = '';
        this.gift_list = [];
        this.balance_point = '';
        this.mode = '';
        this.tokenInfo = {};
        this.lang = '';
        this.uploadUrl = '';
        this.total_balance_point = 0;
        this.flag = '';
        this.mode = this.navParams.get('mode');
        if (this.mode) {
            this.mode = this.mode;
            console.log(this.mode);
        }
        else {
            this.mode = '';
            console.log(this.mode);
        }
    }
    GiftListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GiftListPage');
        this.uploadUrl = this.constant.upload_url;
        this.get_user_lang();
        this.presentLoading();
    };
    GiftListPage.prototype.ionViewWillEnter = function () {
        this.get_user_lang();
        this.getGiftList('');
    };
    GiftListPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    GiftListPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    GiftListPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getGiftList('');
        refresher.complete();
    };
    GiftListPage.prototype.goOnGiftDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gift_detail_gift_detail__["a" /* GiftDetailPage */], { 'id': id });
    };
    GiftListPage.prototype.getGiftList = function (search) {
        var _this = this;
        this.filter.limit = 0;
        this.filter.search = search;
        this.filter.redeemable = this.mode;
        console.log(this.filter.search);
        this.service.post_rqst({ 'filter': this.filter, 'karigar_id': this.service.karigar_id }, 'app_karigar/giftList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.gift_list = r['gift'];
            _this.balance_point = parseInt(r['karigar'].balance_point);
            _this.total_balance_point = parseInt(r['karigar'].balance_point) + parseInt(r['karigar'].referal_point_balance);
            var referral_per = r['referral_point_per'].one_time_percentage;
            var referral_amount = ((r['karigar'].referal_point_balance * referral_per) / 100);
            // var offer_balance = this.balance_point;
            // for gift active class
            for (var i = 0; i < _this.gift_list.length; i++) {
                _this.gift_list[i].coupon_points = parseInt(_this.gift_list[i].coupon_points);
                // this.gift_list[i].offer_balance = parseInt( this.gift_list[i].offer_balance) + (referral_amount);
                _this.gift_list[i].offer_balance = _this.balance_point + (referral_amount);
            }
            // end
        });
    };
    GiftListPage.prototype.intVal = function (arsg) {
        return parseInt(arsg);
    };
    GiftListPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    GiftListPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.filter.limit = this.gift_list.length;
        this.service.post_rqst({ 'filter': this.filter, 'karigar_id': this.service.karigar_id }, 'app_karigar/giftList')
            .subscribe(function (r) {
            console.log(r);
            if (r == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.gift_list = _this.gift_list.concat(r['gift']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    GiftListPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    GiftListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gift-list',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/gift-gallery/gift-list/gift-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Gift Gallery\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="{{\'Pull to refresh\' | translate}}" refreshingSpinner="circles" refreshingText="{{\'Refreshing...\' | translate}}">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <div class="fix">\n        <div class="top-nav">\n            <p>{{\'Balance Points\' | translate}}</p>\n            <h1>{{total_balance_point}}</h1>\n        </div>\n        <div class="search mt16">\n            <ion-searchbar type=\'text\' placeholder="{{\'Search\' | translate}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" (ngModelChange)="getGiftList(filter.search)"></ion-searchbar>\n        </div>\n    </div>\n    <div class="listing ">\n        <button ion-item [ngClass]="{\'verified\' : intVal(list.coupon_points) <= intVal(list.offer_balance)  }" *ngFor="let list of gift_list; let i=index" (click)="goOnGiftDetail(list.id)">\n        <div class="head-detail" >\n            <div class="head">\n                <h1>{{list.coupon_points}}</h1>\n                <p>{{\'Points\' | translate}}</p>\n            </div>\n            <div class="detail">\n                <h1>{{lang !=\'en\' ? list.hin_gift_title : list.gift_title | titlecase}}</h1>\n                <!-- <p><span>{{\'Offer Points\' | translate}}:</span>{{list.offer_balance  || 0  }}</p> -->\n                <p>{{lang != \'en\' ? list.hin_title : list.title | titlecase}} | {{list.end_date | date:\'d MMMM y\'}}</p>\n            </div>\n        </div>  \n        <div class="product-img">\n            <img src="{{list.image}}">\n        </div>\n    </button>\n        <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)" *ngIf="flag!=1">\n            <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/gift-gallery/gift-list/gift-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__["a" /* ConstantProvider */]])
    ], GiftListPage);
    return GiftListPage;
}());

//# sourceMappingURL=gift-list.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancelpolicy_modal_cancelpolicy_modal__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offers_offers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GiftDetailPage = /** @class */ (function () {
    function GiftDetailPage(navCtrl, navParams, modalCtrl, service, loadingCtrl, app, storage, translate, db, constant, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.constant = constant;
        this.toastCtrl = toastCtrl;
        this.gift_id = '';
        this.gift_detail = {};
        this.balance_point = '';
        this.star = '';
        this.rating_star = '';
        this.offer_balance = '';
        this.karigar_detail = {};
        this.tokenInfo = {};
        this.lang = '';
        this.uploadUrl = '';
        this.mobile_no = 0;
    }
    GiftDetailPage.prototype.ionViewDidLoad = function () {
        this.uploadUrl = this.constant.upload_url;
        console.log('ionViewDidLoad GiftDetailPage');
        this.gift_id = this.navParams.get('id');
        this.getGiftDetail(this.gift_id);
        this.presentLoading();
        this.get_user_lang();
    };
    GiftDetailPage.prototype.presentCancelPolicyModal = function () {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cancelpolicy_modal_cancelpolicy_modal__["a" /* CancelpolicyModalPage */], { 'karigar_id': this.service.karigar_id, 'gift_id': this.gift_id, "mobile_no": this.mobile_no });
        contactModal.present();
        console.log('otp');
    };
    GiftDetailPage.prototype.goOnOfferDetailPage = function (offer_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__offers_offers__["a" /* OffersPage */], { 'id': offer_id });
    };
    GiftDetailPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    GiftDetailPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    GiftDetailPage.prototype.getGiftDetail = function (gift_id) {
        var _this = this;
        console.log(gift_id);
        this.service.post_rqst({ 'gift_id': gift_id, 'karigar_id': this.service.karigar_id, 'id': '' }, 'app_karigar/giftDetail')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.gift_detail = r['gift'];
            _this.mobile_no = r['karigar'].mobile_no;
            _this.rating_star = parseInt(r['gift'].rating);
            console.log(_this.gift_detail);
            _this.gift_detail.coupon_points = parseInt(_this.gift_detail.coupon_points);
            if (r['gift_star']) {
                _this.star = parseInt(r['gift_star'].star);
                console.log(_this.star);
            }
            var referal_point_per = r['referral_point_per'].one_time_percentage;
            var referral_amount = ((r['karigar'].referal_point_balance * referal_point_per) / 100);
            _this.offer_balance = parseInt(r['karigar'].balance_point) + (referral_amount);
            console.log(_this.offer_balance);
            console.log(_this.gift_detail.coupon_points);
            if (_this.offer_balance < _this.gift_detail.coupon_points) {
                var toast = _this.toastCtrl.create({
                    message: "You have insufficient points!",
                    duration: 3000
                });
                toast.present();
            }
        });
    };
    GiftDetailPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    GiftDetailPage.prototype.rating = function (star) {
        var _this = this;
        this.presentLoading();
        console.log(star);
        this.service.post_rqst({ 'star': star, 'gift_id': this.gift_id, 'karigar_id': this.service.karigar_id, 'offer_id': this.gift_detail.offer_id }, 'app_karigar/giftRating').subscribe(function (r) {
            console.log(r);
            if (r) {
                _this.getGiftDetail(_this.gift_id);
            }
        });
    };
    GiftDetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    GiftDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gift-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/gift-gallery/gift-detail/gift-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Gift Gallery\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="top-nav nav-adjust">\n        <p>{{gift_detail.title | titlecase}} {{\'Offer Points\' | translate}}</p>\n        <h1>{{offer_balance || 0}}</h1>\n    </div>\n    <div class="margin-padding pb0">\n        <div class="phone">\n            <div class="phone-head">\n                <h1>{{lang !=\'en\' ? gift_detail.hin_gift_title : gift_detail.gift_title | titlecase}}</h1>\n                <p>{{gift_detail.coupon_points}} {{\'Points\' | translate}}</p>\n\n            </div>\n            <div class="phone-img">\n                <img src="{{gift_detail.image}}">\n            </div>\n        </div>\n        <div class="detail-list">\n            <div class="detail">\n                <div class="img-section">\n                    <img src="{{gift_detail.offer_banner}}">\n                </div>\n                <div class="info" (click)="goOnOfferDetailPage(gift_detail.offer_id)">\n                    <h1>{{lang !=\'en\' ? gift_detail.hin_title : gift_detail.title | titlecase}}</h1>\n                    <p><span>{{\'Valid Upto\' | translate}} :</span> {{gift_detail.end_date | date:\'d MMMM y\'}}</p>\n                </div>\n            </div>\n            <div class="product-icon">\n                <i class="material-icons">keyboard_arrow_right</i>\n            </div>\n        </div>\n        <div class="rating">\n            <i class="material-icons" [ngClass]="{\'active\':rating_star>=1}">star_rate</i>\n            <i class="material-icons" [ngClass]="{\'active\':rating_star>=2}">star_rate</i>\n            <i class="material-icons" [ngClass]="{\'active\':rating_star>=3}">star_rate</i>\n            <i class="material-icons" [ngClass]="{\'active\':rating_star>=4}">star_rate</i>\n            <i class="material-icons" [ngClass]="{\'active\':rating_star>=5}">star_rate</i>\n            <p>{{rating_star}} {{\'Star\' | translate}} - {{gift_detail.votes}} {{\'Votes\' | translate}} </p>\n        </div>\n        <div class="lorem-text">\n            <p>\n                <Strong>{{\'Specification\' | translate}} : <div [innerHTML]="lang !=\'en\' ? gift_detail.hin_gift_specification : gift_detail.gift_specification"></div> </Strong>\n            </p>\n        </div>\n        <button ion-item class="cs-btn btn-radius mb0" (click)="presentCancelPolicyModal()" *ngIf="offer_balance >= gift_detail.coupon_points">{{\'Send Redeem Request\' | translate}}</button>\n        <div class="h32"></div>\n    </div>\n    <div class="fix-item">\n        <p>{{\'Rate a Gift\' | translate}}</p>\n        <i class="material-icons" [ngClass]="{\'active\':star>=1}" (click)="rating(\'1\')">star_rate</i>\n        <i class="material-icons" [ngClass]="{\'active\':star>=2}" (click)="rating(\'2\')">star_rate</i>\n        <i class="material-icons" [ngClass]="{\'active\':star>=3}" (click)="rating(\'3\')">star_rate</i>\n        <i class="material-icons" [ngClass]="{\'active\':star>=4}" (click)="rating(\'4\')">star_rate</i>\n        <i class="material-icons" [ngClass]="{\'active\':star>=5}" (click)="rating(\'5\')">star_rate</i>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/gift-gallery/gift-detail/gift-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], GiftDetailPage);
    return GiftDetailPage;
}());

//# sourceMappingURL=gift-detail.js.map

/***/ }),
/* 104 */,
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams, service, loadingCtrl, storage, translate, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.offer_id = '';
        this.terms_detail = {};
        this.tokenInfo = {};
        this.lang = '';
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
        this.offer_id = this.navParams.get('id');
        this.getTermsDetail(this.offer_id);
        this.get_user_lang();
        this.presentLoading();
    };
    TermsPage.prototype.getTermsDetail = function (offer_id) {
        var _this = this;
        console.log(offer_id);
        this.service.post_rqst({ 'offer_id': offer_id, 'karigar_id': 22 }, 'app_karigar/offerTermCondition').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.terms_detail = r['offer'];
        });
    };
    TermsPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    TermsPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    TermsPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/terms/terms.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'Description / Terms & Condition\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="fix">\n		<div class="bg-banner">\n			 <img src="{{terms_detail.offer_banner}}">\n		</div>\n	</div>\n	<div class="terms-text"  *ngIf="terms_detail.description != \'\'">\n	<h6>{{\'Description\'}}</h6>	\n		<p [innerHTML]="terms_detail.description"></p>\n	</div>\n	<div class="terms-text"  *ngIf="terms_detail.terms != \'\'">\n		<h6>{{\'Terms & Condition\'}}</h6>	\n			<p [innerHTML]="terms_detail.terms"></p>\n		</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__language_language__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_edit_modal_profile_edit_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { MobileLoginPage } from '../login-section/mobile-login/mobile-login';


// import { LanguagePage } from '../language/language';




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, app, app_version, navParams, service, loadingCtrl, storage, events, actionSheetController, camera, alertCtrl, modalCtrl, db, translate, platform, socialSharing) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.app_version = app_version;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.events = events;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.translate = translate;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.karigar_detail = {};
        this.edit = '';
        this.edit1 = '';
        this.edit2 = '';
        this.lang = '';
        this.tokenInfo = {};
        this.version = '';
        this.appVersion = '';
        // logout()
        // {
        //     this.storage.set('token','');
        //     this.service.karigar_info='';
        //     this.storage.get("token")
        //     .then(resp=>{
        //         console.log(resp);
        //     })
        //     this.platform.exitApp();
        // }
        this.title = "";
        this.no = "";
        this.yes = "";
        this.content = "";
        this.cam = "";
        this.gal = "";
        this.cancl = "";
        this.ok = "";
        this.upl_file = "";
        this.save_succ = "";
        this.language = [];
        this.data = {};
        this.flag = true;
        console.log(this.navParams);
        this.lang = this.navParams.get("lang");
        this.check_version();
        console.log('====================================');
        console.log(this.lang);
        console.log('====================================');
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
    }
    ProfilePage.prototype.check_version = function () {
        var _this = this;
        this.app_version.getVersionNumber()
            .then(function (resp) {
            console.log(resp);
            _this.version = resp;
        });
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.translate.get("Logout")
            .subscribe(function (resp) {
            _this.title = resp;
        });
        this.translate.get("No")
            .subscribe(function (resp) {
            _this.no = resp;
        });
        this.translate.get("Yes")
            .subscribe(function (resp) {
            _this.yes = resp;
        });
        this.translate.get("Are you sure you want Logout?")
            .subscribe(function (resp) {
            _this.content = resp;
        });
        var alert = this.alertCtrl.create({
            title: this.title,
            message: this.content,
            buttons: [
                {
                    text: this.no,
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.d.('Action Cancelled!')
                    }
                },
                {
                    text: this.yes,
                    handler: function () {
                        _this.storage.set('token', '');
                        _this.service.karigar_info = '';
                        _this.storage.get("token")
                            .then(function (resp) {
                            console.log(resp);
                        });
                        var alert2 = _this.alertCtrl.create({
                            title: 'Success!',
                            subTitle: 'Logout Successfully',
                            buttons: [{
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        });
                        alert2.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__language_language__["a" /* LanguagePage */]);
                        // this.app.getRootNav().setRoot(SelectRegistrationTypePage);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilePage');
        // this.get_user_lang();
        this.presentLoading();
        this.translate.get("Camera")
            .subscribe(function (resp) {
            _this.cam = resp;
        });
        this.translate.get("Gallery")
            .subscribe(function (resp) {
            _this.gal = resp;
        });
        this.translate.get("Cancel")
            .subscribe(function (resp) {
            _this.cancl = resp;
        });
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.translate.get("Upload File")
            .subscribe(function (resp) {
            _this.upl_file = resp;
        });
        this.translate.get("Registered Successfully")
            .subscribe(function (resp) {
            _this.save_succ = resp;
        });
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.getKarigarDetail();
    };
    ProfilePage.prototype.getKarigarDetail = function () {
        var _this = this;
        console.log('karigar');
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/profile')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.karigar_detail = r['karigar'];
            _this.language = r['language'];
        });
    };
    ProfilePage.prototype.update_lang = function () {
        var _this = this;
        console.log(this.karigar_detail);
        this.db.post_rqst({ "data": this.karigar_detail }, "app_karigar/update_language")
            .subscribe(function (resp) {
            console.log(resp);
            _this.getKarigarDetail();
            _this.translate.use(_this.karigar_detail.language);
        });
    };
    ProfilePage.prototype.deleteAccount = function () {
        var _this = this;
        this.translate.get("Alert!")
            .subscribe(function (resp) {
            _this.title = resp;
        });
        this.translate.get("No")
            .subscribe(function (resp) {
            _this.no = resp;
        });
        this.translate.get("Yes")
            .subscribe(function (resp) {
            _this.yes = resp;
        });
        this.translate.get("Are you sure you want permanent delete account?")
            .subscribe(function (resp) {
            _this.content = resp;
        });
        var alert = this.alertCtrl.create({
            title: this.title,
            message: this.content,
            buttons: [
                {
                    text: this.no,
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.d.('Action Cancelled!')
                    }
                },
                {
                    text: this.yes,
                    handler: function () {
                        _this.db.post_rqst({ 'id': _this.karigar_detail.id }, 'app_master/delete_karigar_app')
                            .subscribe(function (resp) {
                            if (resp.status == 'success') {
                                _this.storage.set('token', '');
                                _this.service.karigar_info = '';
                                _this.storage.get("token")
                                    .then(function (resp) {
                                    console.log(resp);
                                });
                                var alert2 = _this.alertCtrl.create({
                                    title: 'Success!',
                                    subTitle: 'Delete Successfully',
                                    buttons: [{
                                            text: 'Ok',
                                            handler: function () {
                                                console.log('Cancel clicked');
                                            }
                                        }]
                                });
                                alert2.present();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__language_language__["a" /* LanguagePage */]);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.openeditprofile = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Profile photo",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        _this.getImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                    }
                }]
        });
        actionsheet.present();
    };
    ProfilePage.prototype.takePhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400,
            cameraDirection: 1,
            correctOrientation: true
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.karigar_detail.profile = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.karigar_detail.profile);
            if (_this.karigar_detail.profile) {
                _this.uploadImage(_this.karigar_detail.profile);
            }
        }, function (err) {
        });
    };
    ProfilePage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.karigar_detail.profile = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.karigar_detail.profile);
            if (_this.karigar_detail.profile) {
                _this.uploadImage(_this.karigar_detail.profile);
            }
        }, function (err) {
        });
    };
    ProfilePage.prototype.uploadImage = function (profile) {
        var _this = this;
        console.log(profile);
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'profile': profile }, 'app_karigar/updateProfilePic')
            .subscribe(function (r) {
            console.log(r);
            _this.showSuccess("Profile Photo Updated");
        });
    };
    ProfilePage.prototype.viewProfiePic = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": this.karigar_detail.profile, "type": "base_64" }).present();
    };
    ProfilePage.prototype.showSuccess = function (text) {
        var _this = this;
        this.translate.get("Success")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    ProfilePage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get('Please wait...')
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    ProfilePage.prototype.editDealer = function () {
        var _this = this;
        console.log(this.karigar_detail);
        this.service.post_rqst({ 'karigar_detail': this.karigar_detail }, 'app_karigar/editKarigarDealer')
            .subscribe(function (result) {
            console.log(result);
            _this.edit = '';
            _this.translate.get("Dealer Information Updated")
                .subscribe(function (resp) {
                _this.showSuccess(resp);
                return;
            });
        });
    };
    ProfilePage.prototype.MobileNumber = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ProfilePage.prototype.showAlert = function (text) {
        var _this = this;
        this.translate.get("Alert")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    // get_user_lang()
    // {
    //     this.storage.get("token")
    //     .then(resp=>{
    //         this.tokenInfo = this.getDecodedAccessToken(resp );
    //         this.db.post_rqst({"login_id":this.tokenInfo.sub},"app_karigar/get_user_lang")
    //         .subscribe(resp=>{
    //             console.log(resp);
    //             this.lang = resp['language'];
    //             this.translate.setDefaultLang(this.lang)
    //             if(this.lang == "")
    //             {
    //                 this.lang = "en";
    //             }
    //             this.translate.use(this.lang);
    //         })
    //     })
    // }
    ProfilePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ProfilePage.prototype.share_code = function () {
        var image = "";
        var app_url = "https://apps.apple.com/us/app/crystal-switch-gears/id6447564116";
        this.socialSharing.share("Hey there join me (" + this.karigar_detail.full_name + "-" + this.karigar_detail.mobile_no + ") on crystalswitchgears, a Electrician & Retailer app. Enter my code *" + this.karigar_detail.referral_code + "* to earn points back in your wallet!", "Reffral", image, app_url)
            .then(function (resp) {
            console.log(resp);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.onUploadChange = function (evt) {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: this.upl_file,
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takeDocPhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getDocImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }]
        });
        actionsheet.present();
    };
    ProfilePage.prototype.takeDocPhoto = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400,
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.karigar_detail.document_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.karigar_detail.document_image);
            if (_this.karigar_detail.document_image) {
                _this.uploadDocImage(_this.karigar_detail.document_image, _this.karigar_detail.document_no);
            }
        }, function (err) {
        });
    };
    ProfilePage.prototype.getDocImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.karigar_detail.document_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.karigar_detail.document_image);
            if (_this.karigar_detail.document_image) {
                _this.uploadDocImage(_this.karigar_detail.document_image, _this.karigar_detail.document_no);
            }
        }, function (err) {
        });
    };
    ProfilePage.prototype.uploadDocImage = function (doc_image, doc_num) {
        var _this = this;
        console.log(doc_image);
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'doc_image': doc_image, 'doc_no': doc_num }, 'app_karigar/updateDocumnet')
            .subscribe(function (r) {
            _this.edit1 = '';
            _this.showSuccess("Document Updated");
        });
    };
    // onCardChange(evt: any) {
    //     let actionsheet = this.actionSheetController.create({
    //         title:this.upl_file,
    //         cssClass: 'cs-actionsheet',
    //         buttons:[{
    //             cssClass: 'sheet-m',
    //             text: this.cam,
    //             icon:'camera',
    //             handler: () => {
    //                 console.log("Camera Clicked");
    //                 this.takeCardPhoto();
    //             }
    //         },
    //         {
    //             cssClass: 'sheet-m1',
    //             text: this.gal,
    //             icon:'image',
    //             handler: () => {
    //                 console.log("Gallery Clicked");
    //                 this.getCardImage();
    //             }
    //         },
    //         {
    //             cssClass: 'cs-cancel',
    //             text: this.cancl,
    //             role: 'cancel',
    //             handler: () => {
    //                 console.log('Cancel clicked');
    //             }
    //         }]
    //     });
    //     actionsheet.present();
    // }
    ProfilePage.prototype.takeCardPhoto = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400,
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.karigar_detail.visiting_card = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.karigar_detail.visiting_card);
            if (_this.karigar_detail.visiting_card) {
                // this.onUploadCard(this.karigar_detail.visiting_card);
            }
        }, function (err) {
        });
    };
    // getCardImage()
    // {
    //     const options: CameraOptions = {
    //         quality: 70,
    //         destinationType: this.camera.DestinationType.DATA_URL,
    //         sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //         saveToPhotoAlbum:false
    //     }
    //     this.camera.getPicture(options).then((imageData) => {
    //         this.karigar_detail.visiting_card = 'data:image/jpeg;base64,' + imageData;
    //         console.log(this.karigar_detail.visiting_card);
    //         if(this.karigar_detail.visiting_card)
    //         {
    //             this.onUploadCard(this.karigar_detail.visiting_card);
    //         }
    //     }, (err) => {
    //     });
    // }
    // onUploadCard(doc_image)
    // {
    //     console.log(doc_image);
    //     this.service.post_rqst( {'karigar_id': this.service.karigar_id,'visiting_card':doc_image},'app_karigar/updateVisitingCard')
    //     .subscribe((r) =>
    //     {
    //         this.edit2='';
    //         this.showSuccess("visiting Card Updated")   
    //     });
    // }
    ProfilePage.prototype.profileEdit = function () {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__profile_edit_modal_profile_edit_modal__["a" /* ProfileEditModalPage */], { "user_detail": this.karigar_detail });
        contactModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], ProfilePage.prototype, "nav", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Profile\' | translate}}</ion-title>\n        <div class="header-icons">\n            <button ion-button class="cs-hdr-icons mr16" (click)="logout()">\n                <i class="material-icons">power_settings_new</i>\n            </button>\n        </div>\n    </ion-navbar>\n</ion-header>\n<ion-content padding class="main-backgroung">\n    <div class="pr-after">\n        <div class="profile-detail">\n            <div class="pr-align">\n                <div class="pr-circle">\n                    <img src="assets/imgs/man.svg" *ngIf="karigar_detail.profile ==\'\'">\n                    <img [src]="karigar_detail.profile" *ngIf="karigar_detail.profile" (click)="viewProfiePic()">\n                    <label> \n                        <i class="material-icons" (click)="openeditprofile()">camera_alt</i>\n                    </label>\n                </div>\n                <div class="pr-tags {{karigar_detail.status}}">\n                    <h2>{{!karigar_detail.first_name ? \'N/A\' : karigar_detail.first_name |titlecase}} {{karigar_detail.last_name |titlecase}}</h2>\n                    <div class="left-right mt10">\n                        <i class="material-icons" *ngIf="karigar_detail.status ==\'Verified\'">check_circle</i>\n                        <i class="material-icons" *ngIf="karigar_detail.status ==\'Pending\'">hourglass_full</i>\n                        <i class="material-icons" *ngIf="karigar_detail.status ==\'Suspect\'">info</i>\n                        <i class="material-icons" *ngIf="karigar_detail.status ==\'Reject\'">cancel</i>\n                        <p>{{karigar_detail.status==\'Pending\'? \'Pending For Verification\':karigar_detail.status}}</p>\n                    </div>\n                </div>\n                <a class="edit_profile" (click)="profileEdit()"><i class="material-icons">edit</i></a>\n            </div>\n            <!--             \n            <div class="heading line mt18 mb10">\n                <p>{{\'Change Language\' | translate}}</p>\n            </div>\n            <div class="radio-section">\n                <ion-list class="choose mt10 mb10" radio-group name="gender" radio-group name="language" [(ngModel)]="karigar_detail.language" > \n                    <ion-item *ngFor="let row of language">\n                        <ion-radio (click)="update_lang()" checked="{{row.prefix == karigar_detail.language}}" value="{{row.prefix}}"></ion-radio>\n                        <ion-label>{{karigar_detail.language != \'en\' ? row.hin_language_name : row.language_name}}</ion-label>\n                    </ion-item>\n                </ion-list>\n            </div>   -->\n            <div class="deflex mt0">\n                <ul>\n                    <li class="bdr-top wp100" *ngIf="karigar_detail.user_type!=1">\n                        <p>{{\'Company Name\' | translate}}</p>\n                        <h1>{{karigar_detail.company_name |titlecase}}</h1>\n                    </li>\n                    <li>\n                        <p>{{\'Mobile No\' | translate}}.</p>\n                        <h1><a href="tel:{{karigar_detail.mobile_no}}">+91 {{karigar_detail.mobile_no ? karigar_detail.mobile_no : \'N/A\'}}</a> </h1>\n                    </li>\n                    <li class="bdr-left">\n                        <p>{{\'Date of Birth\' | translate}}</p>\n                        <h1 *ngIf="karigar_detail.dob ==\'null\'">N/A</h1>\n                        <h1 *ngIf="karigar_detail.dob !=\'null\'">{{karigar_detail.dob| date:\'d MMM,y\'}} </h1>\n\n                    </li>\n                    <!-- <li class="bdr-top wp100">\n                        <p>{{\'Paytm Number\' | translate}}</p>\n                        <h1>{{karigar_detail.payment_number ? karigar_detail.payment_number : \'N/A\'}}</h1>\n                    </li> -->\n                    <li class="bdr-top wp100">\n                        <p>{{\'Address\' | translate}}</p>\n                        <h1>{{karigar_detail.address |titlecase}} {{!karigar_detail.state ? \'N/A\' :karigar_detail.state |titlecase}} {{!karigar_detail.district ? \'N/A\' : \', \'+karigar_detail.district |titlecase}} {{!karigar_detail.city ? \'N/A\' : \', \'+karigar_detail.city\n                            |titlecase}}\n                        </h1>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="heading line mt18 mb16">\n        <p>{{\'Document Information\' | translate}}</p>\n        <div class="little-edit">\n            <a *ngIf="edit1==\'\'"><i class="material-icons" (click)="onUploadChange();edit1 = \'1\' ">edit</i></a>\n            <a *ngIf="edit1==\'1\'"><i class="material-icons" (click)="uploadDocImage(karigar_detail.document_image,karigar_detail.document_no)">save</i></a>\n        </div>\n    </div>\n    <div class="adhar">\n        <img src="{{karigar_detail.document_image ? karigar_detail.document_image : \'assets/imgs/adhar.png\'}}">\n        <p>{{karigar_detail.document_type==\'Adharcard\'? \'Aadhaar card\' : (karigar_detail.document_type==\'PanCard\' ? \'Pan Card\' : \'Voter Card\') }}</p>\n        <h1>\n            <input class="dochidenumber" type="text" name="document_no " #document_no="ngModel" [(ngModel)]="karigar_detail.document_no" [readonly]="edit1 == \'1\'  ? false : true" required>\n        </h1>\n    </div>\n\n\n    <!-- <div class="heading line mt18 mb16">\n        <p>{{\'Visting Card\' | translate}}</p>\n        <div class="little-edit">\n            <a *ngIf="edit2==\'\'"><i class="material-icons" (click)="onCardChange();edit2 = \'1\' ">edit</i></a>\n            <a *ngIf="edit2==\'1\'"><i class="material-icons" (click)="onUploadCard(karigar_detail.visiting_card)">save</i></a>\n        </div>\n    </div>\n    <div class="adhar">\n        <img src="{{karigar_detail.visiting_card}}">\n    </div> -->\n    \n\n\n    <div class="heading line mt32" *ngIf="karigar_detail.user_type==1">\n        <p >{{\'Dealer Information\' | translate}}</p>\n        <!-- <p *ngIf="karigar_detail.user_type==2">{{\'Distributor Information\' | translate}}</p> -->\n        <div class="little-edit">\n            <a *ngIf="edit==\'\'"><i class="material-icons" (click)="edit = \'1\' ">edit</i></a>\n            <a *ngIf="edit==\'1\'"><i class="material-icons" (click)="editDealer()">save</i></a>\n        </div>\n    </div>\n    <div class="pr-after" *ngIf="karigar_detail.user_type==1">\n        <div class="profile-detail bdr-none p0">\n            <div class="deflex mt0">\n                <ul>\n                    <li class="wp100">\n                        <p>{{\'Counter Name\' | translate}}</p>\n                        <div [ngClass]="{\'active\' :edit == \'1\' } ">\n                            <input type="text" name="parent_counter_name " #parent_counter_name="ngModel" [(ngModel)]="karigar_detail.parent_counter_name " [readonly]="edit == \'1\'  ? false : true" required>\n                        </div>\n\n                    </li>\n                    <!-- <li class="bdr-top wp100">\n                        <p>{{\'Counter Address\' | translate}}</p>\n                        <div><input type="text" name="dealer_address " #dealer_address="ngModel" [(ngModel)]="karigar_detail.dealer_address " [readonly]="edit == \'1\'  ? false : true" required></div>\n                    </li> -->\n                    <li class="bdr-top">\n                        <p>{{\'Contact Person\' | translate}}</p>\n                        <div><input type="text" name="parent_counter_contact_person " #parent_counter_contact_person="ngModel" [(ngModel)]="karigar_detail.parent_counter_contact_person " [readonly]="edit == \'1\'  ? false : true" required></div>\n\n                    </li>\n                    <li class="bdr-top bdr-left">\n                        <p>{{\'Mobile No\' | translate}}.</p>\n                        <div><input type="tel" name="parent_counter_mobile " #parent_counter_mobile="ngModel" [(ngModel)]="karigar_detail.parent_counter_mobile" (keypress)="MobileNumber($event)" [readonly]="edit == \'1\'  ? false : true" maxlength="10" minlength="10"\n                                required></div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!-- <div class="heading line mt16">\n        <p>{{\'Sales Executive Information\' | translate}}</p>\n    </div>\n    <div class="pr-after">\n        <div class="profile-detail bdr-none p0 mb9">\n            <div class="deflex m0">\n                <ul>\n                    <li>\n                        <p>{{\'Name\' | translate}}</p>\n                        <h1>{{!karigar_detail.sales_name ? \'N/A\' : karigar_detail.sales_name |titlecase}}</h1>\n                    </li>\n                    <li class="bdr-left">\n                        <p>{{\'Mobile No\' | translate}}.</p>\n                        <h1><a href="tel:{{karigar_detail.sales_mobile}}">+91 {{karigar_detail.sales_mobile ? karigar_detail.sales_mobile : \'N/A\'}}</a></h1>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div> -->\n    <!-- <div class="heading line mt16" *ngIf="karigar_detail.user_type==2">\n        <p>{{\'Distributor Information\' | translate}}</p>\n    </div> -->\n    <!-- <div class="pr-after" *ngIf="karigar_detail.user_type==2">\n        <div class="profile-detail bdr-none p0 mb9">\n            <div class="deflex m0">\n                <ul>\n                    <li>\n                        <p>{{\'Compnay Name\' | translate}}</p>\n                        <h1>{{!karigar_detail.company_name ? \'N/A\' : karigar_detail.company_name |titlecase}}</h1>\n                    </li>\n                    <li class="bdr-left">\n                        <p>{{\'Mobile No\' | translate}}.</p>\n                        <h1>\n                            <a href="tel:{{karigar_detail.dr_mobile}}">+91 {{karigar_detail.parent_counter_mobile ? karigar_detail.parent_counter_mobile : \'N/A\'}}</a>\n                        </h1>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div> -->\n    <div class="heading line mt16" *ngIf="karigar_detail.referral_code" (click)="share_code()">\n        <p>{{\'Referral Code Information\' | translate}}</p>\n        <div class="little-edit">\n            <a><i class="material-icons">share</i></a>\n        </div>\n    </div>\n    <div class="pr-after" (click)="share_code()" *ngIf="karigar_detail.referral_code">\n        <div class="profile-detail bdr-none p0 mb9">\n            <div class="deflex m0">\n                <ul>\n                    <li class="refcode">\n                        <p>{{\'Referral Code\' | translate}}</p>\n                        <h1>{{karigar_detail.referral_code ? karigar_detail.referral_code : \'N/A\'}}</h1>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="pl16 pr16 mb24" *ngIf="appVersion.version != version">\n        <button class="capitalize" (click)="deleteAccount()" ion-button color="primary" block round>Permanent Delete Account</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aboutus_modal_aboutus_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams, service, alertCtrl, actionSheetController, camera, loadingCtrl, transfer, modalCtrl, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.translate = translate;
        this.data = {};
        this.state_list = [];
        this.district_list = [];
        this.city_list = [];
        this.pincode_list = [];
        this.selectedFile = [];
        this.file_name = [];
        this.karigar_id = '';
        this.formData = new FormData();
        this.profile_data = '';
        this.lang = '';
        this.cam = "";
        this.gal = "";
        this.cancl = "";
        this.ok = "";
        this.upl_file = "";
        this.save_succ = "";
        this.flag = true;
        this.getstatelist();
        this.data.gender = "male";
        this.data.user_type = '1';
        this.data.document_type = 'Adharcard';
        this.today_date = new Date().toISOString().slice(0, 10);
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RegistrationPage');
        this.data.mobile_no = this.navParams.get('mobile_no');
        this.lang = this.navParams.get('lang');
        console.log(this.lang);
        console.log(this.data.mobile_no);
        this.data.profile = '';
        this.data.document_image = '';
        this.data.visiting_card = '';
        console.log(this.data.profile);
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        this.translate.get("Camera")
            .subscribe(function (resp) {
            _this.cam = resp;
        });
        this.translate.get("Gallery")
            .subscribe(function (resp) {
            _this.gal = resp;
        });
        this.translate.get("Cancel")
            .subscribe(function (resp) {
            _this.cancl = resp;
        });
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.translate.get("Upload File")
            .subscribe(function (resp) {
            _this.upl_file = resp;
        });
        this.translate.get("Registered Successfully")
            .subscribe(function (resp) {
            _this.save_succ = resp;
        });
    };
    RegistrationPage.prototype.getstatelist = function () {
        var _this = this;
        this.service.get_rqst('app_master/getStates').subscribe(function (r) {
            console.log(r);
            _this.state_list = r['states'];
            _this.karigar_id = r['id'];
            console.log(_this.state_list);
        });
    };
    RegistrationPage.prototype.getDistrictList = function (state_name) {
        var _this = this;
        console.log(state_name);
        this.service.post_rqst({ 'state_name': state_name }, 'app_master/getDistrict')
            .subscribe(function (r) {
            console.log(r);
            _this.district_list = r['districts'];
            console.log(_this.state_list);
        });
    };
    RegistrationPage.prototype.getCityList = function (district_name) {
        var _this = this;
        console.log(district_name);
        this.service.post_rqst({ 'district_name': district_name }, 'app_master/getCity')
            .subscribe(function (r) {
            console.log(r);
            _this.city_list = r['cities'];
            _this.pincode_list = r['pins'];
            console.log(_this.pincode_list);
        });
    };
    RegistrationPage.prototype.getaddress = function (pincode) {
        var _this = this;
        if (this.data.pincode.length == '6') {
            this.service.post_rqst({ 'pincode': pincode }, 'app_karigar/getAddress')
                .subscribe(function (result) {
                console.log(result);
                var address = result.address;
                if (address != null) {
                    _this.data.state = result.address.state_name;
                    _this.getDistrictList(_this.data.state);
                    _this.data.district = result.address.district_name;
                    _this.data.city = result.address.city;
                    console.log(_this.data);
                }
            });
        }
    };
    RegistrationPage.prototype.scrollUp = function () {
        this.content.scrollToTop();
    };
    RegistrationPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        console.log('data');
        console.log(this.data);
        if (this.data.dealer_counter_name) {
            this.data.dealer_status = 'Active';
            console.log(this.data.dealer_status);
        }
        else {
            this.data.dealer_status = '';
        }
        this.data.lang = this.lang;
        this.data.karigar_type = 1;
        this.data.gender = 'male';
        console.log(this.data);
        this.service.post_rqst({ 'karigar': this.data }, 'app_karigar/addKarigar')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.karigar_id = r['id'];
            console.log(_this.karigar_id);
            if (r['status'] == "SUCCESS") {
                _this.showSuccess(_this.save_succ + "!");
                _this.service.post_rqst({ 'mobile_no': _this.data.mobile_no, 'mode': 'App' }, 'auth/login')
                    .subscribe(function (r) {
                    console.log(r);
                    if (r['status'] == 'NOT FOUND') {
                        return;
                    }
                    else if (r['status'] == 'ACCOUNT SUSPENDED') {
                        _this.translate.get("Your account has been suspended")
                            .subscribe(function (resp) {
                            _this.showAlert(resp);
                        });
                        return;
                    }
                    else if (r['status'] == 'SUCCESS') {
                        _this.storage.set('token', r['token']);
                        _this.service.karigar_id = r['user'].id;
                        _this.service.karigar_status = r['user'].status;
                        console.log(_this.service.karigar_id);
                        if (r['user'].status != 'Verified') {
                            var contactModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__aboutus_modal_aboutus_modal__["a" /* AboutusModalPage */]);
                            contactModal.present();
                            return;
                        }
                    }
                    // this.navCtrl.push(TabsPage);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                });
            }
            else if (r['status'] == "EXIST") {
                _this.translate.get("Already Registered")
                    .subscribe(function (resp) {
                    _this.showAlert(resp + "!");
                });
            }
        });
    };
    RegistrationPage.prototype.namecheck = function (event) {
        console.log("called");
        var pattern = /[A-Z\+\-\a-z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    RegistrationPage.prototype.caps_add = function (add) {
        this.data.address = add.replace(/\b\w/g, function (l) { return l.toUpperCase(); });
    };
    RegistrationPage.prototype.showSuccess = function (text) {
        var _this = this;
        this.translate.get("Success")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    RegistrationPage.prototype.showAlert = function (text) {
        var _this = this;
        this.translate.get("Alert")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    RegistrationPage.prototype.openeditprofile = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Profile photo",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takePhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    RegistrationPage.prototype.takePhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400,
            cameraDirection: 1,
            correctOrientation: true
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.data.profile = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.profile);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.data.profile = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.profile);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.onUploadChange = function (evt) {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: this.upl_file,
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takeDocPhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getDocImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    RegistrationPage.prototype.takeDocPhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.document_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.document_image);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.getDocImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.document_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.document_image);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.onUploadCard = function (evt) {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: this.upl_file,
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takeCardPhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getCardImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    RegistrationPage.prototype.takeCardPhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.visiting_card = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.visiting_card);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.getCardImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.visiting_card = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.visiting_card);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], RegistrationPage.prototype, "content", void 0);
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/login-section/registration/registration.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Registration\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="main-backgroung">\n    <form #f="ngForm" (ngSubmit)="f.form.valid ? submit() : scrollUp()">\n        \n        \n        <div class="ragistration-fields pt10">\n            <div class="heading line" style="margin: 0px 0px 10px -15px;">\n                <p>{{\'Choose Type\' | translate}}</p>\n            </div>\n            \n            <div class="radio-section">\n                <ion-list radio-group name="user_type" [(ngModel)]="data.user_type" #user_type="ngModel" required>\n                    <ion-item>\n                        <ion-radio value="1"></ion-radio>\n                        <ion-label>{{\'Electrician\' | translate}}</ion-label>\n                    </ion-item>\n                    \n                    <ion-item>\n                        <ion-label>{{\'Retailer\' | translate}}</ion-label>\n                        <ion-radio value="2"></ion-radio>\n                    </ion-item>\n                    \n                    <!-- <ion-item>\n                        <ion-label>{{\'Distributor\'}}</ion-label>\n                        <ion-radio value="3"></ion-radio>\n                    </ion-item> -->\n                </ion-list>\n            </div>\n        </div>\n        \n        <div class="heading line">\n            <p>{{\'Basic Information\' | translate}}</p>\n        </div>\n        <div class="ragistration-fields">\n            <div class="left-right align-in-center">\n                <div class="left-part">\n                    <p class="cls-circle" (click)="openeditprofile()">\n                        <i class="material-icons" *ngIf="data.profile == \'\'">camera_alt</i>\n                        <img [src]="data.profile" *ngIf="data.profile" required>\n                    </p>\n                </div>\n                <div class="right-part cs-form ml0">\n                    <ion-list>\n                        <!-- <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && Company_name?.invalid}" *ngIf="data.type==\'Retailer\' && data.type==\'Mechanic\'">\n                            <ion-label floating>{{\'Company Name\'}}*</ion-label>\n                            <ion-input type="text" name="Company_name" #Company_name="ngModel" [(ngModel)]="data.Company_name" (ngModelChange)="(data.Company_name!=null)?data.Company_name[0] = data.Company_name[0].toUpperCase():\'\'" (keypress)="namecheck($event)" required></ion-input>\n                        </ion-item> -->\n                        <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && first_name?.invalid}">\n                            <ion-label floating>{{\'First Name\' | translate}}*</ion-label>\n                            <ion-input type="text" name="first_name" #first_name="ngModel" [(ngModel)]="data.first_name" (ngModelChange)="(data.first_name!=null)?data.first_name[0] = data.first_name[0].toUpperCase():\'\'" (keypress)="namecheck($event)" required></ion-input>\n                        </ion-item>\n                        <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && last_name?.invalid}">\n                            <ion-label floating>{{\'Last Name  (optional)\' | translate}}</ion-label>\n                            <ion-input type="text" name="last_name" #last_name="ngModel" [(ngModel)]="data.last_name" (ngModelChange)="(data.last_name!=null)?data.last_name[0] = data.last_name[0].toUpperCase():\'\'" (keypress)="namecheck($event)" maxlength="10"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                </div>\n            </div>\n            <!--//////////////// importaint //////////////-->\n            \n            \n            \n            \n            <div class="cs-form">\n                <ion-list>\n                    <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && company_name?.invalid}" *ngIf="data.user_type==\'2\' || data.user_type==\'3\'">\n                        <ion-label floating>{{\'Company Name\' | translate}}.*</ion-label>\n                        <ion-input type="text" name="company_name" #company_name="ngModel" [(ngModel)]="data.company_name" required (keypress)="namecheck($event)"></ion-input>\n                    </ion-item>\n                    \n                    <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && mobile_no?.invalid}">\n                        <ion-label floating>{{\'Mobile No\' | translate}}.*</ion-label>\n                        <ion-input type="number" name="mobile_no" #mobile_no="ngModel" [(ngModel)]="data.mobile_no" required (keypress)="MobileNumber($event)" readonly></ion-input>\n                    </ion-item>\n\n                    <!-- <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && payment_number?.invalid}">\n                        <ion-label floating>{{\'Paytm Number\' | translate}}</ion-label>\n                        <ion-input type="tel" name="payment_number"  minlength="10" maxlength="10" #payment_number="ngModel" [(ngModel)]="data.payment_number"></ion-input>\n                    </ion-item> -->\n               \n                \n                <!--//////////////// importaint //////////////-->\n                \n                <ion-item class="cs-input" [ngClass]="{\'error\':(f.submitted && email?.invalid) || (f.submitted && !email.valid)}">\n                    <ion-label floating>{{\'Email ID (optional)\' | translate}}</ion-label>\n                    <ion-input type="text" type="text" name="email" #email="ngModel" [(ngModel)]="data.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"></ion-input>\n                </ion-item>\n                \n                <ion-item class="cs-date mb0" [ngClass]="{\'error\':f.submitted && dob?.invalid}">\n                    <ion-label>{{\'Date of Birth (optional)\' | translate}}</ion-label>\n                    <ion-datetime displayFormat="DD/MM/YYYY" max={{today_date}} type="text" name="dob" #dob="ngModel" [(ngModel)]="data.dob">\n                    </ion-datetime>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n    \n    <div class="heading line">\n        <p>{{\'Address Information\' | translate}}</p>\n    </div>\n    \n    <div class="ragistration-fields">\n        <div class="cs-form">\n            <ion-list>\n                <ion-item class="cs-input">\n                    <ion-label floating>{{\'Address (optional)\' | translate}}</ion-label>\n                    \n                    <ion-input type="text" name="address" #address="ngModel" [(ngModel)]="data.address" (ngModelChange)="caps_add(data.address)"></ion-input>\n                </ion-item>\n                \n                <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && pincode?.invalid}">\n                    <ion-label floating>{{\'Pincode\' | translate}}*</ion-label>\n                    <ion-input type="tel" name="pincode" [(ngModel)]="data.pincode" #pincode="ngModel" required maxlength="6" minlength="6" (input)="getaddress(data.pincode)"></ion-input>\n                </ion-item>\n                \n                \n                <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && state?.invalid}">\n                    <ion-label>{{\'State\' | translate}}*</ion-label>\n                    <ion-select name="state" [(ngModel)]="data.state" #state="ngModel" (ngModelChange)="getDistrictList(data.state)" required>\n                        <ion-option *ngFor="let row of state_list" value="{{row.state_name}}">{{row.state_name}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                \n                <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && state?.invalid}">\n                    <ion-label>{{\'District\' | translate}}*</ion-label>\n                    <ion-select name="district" [(ngModel)]="data.district" #district="ngModel" (ngModelChange)="getCityList(data.district)" required>\n                        <ion-option *ngFor="let row of district_list" value="{{row.district_name}}">{{row.district_name}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                \n                <ion-item class="cs-input mb0" [ngClass]="{\'error\':f.submitted && city?.invalid}">\n                    <ion-label floating>{{\'City\' | translate}}*</ion-label>\n                    <ion-input type="text" name="city" [(ngModel)]="data.city" #city="ngModel" required></ion-input>\n                </ion-item>\n                \n            </ion-list>\n        </div>\n    </div>\n    <!-- /////// Importaint //////////// -->\n    \n    <div class="heading line">\n        <p>{{\'Document Information\' | translate}}</p>\n    </div>\n    \n    <div class="ragistration-fields">\n        <div class="cs-form">\n            <ion-list>\n                <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && document_type?.invalid}">\n                    <ion-label>{{\'Select Document\' | translate}}</ion-label>\n                    <ion-select name="document_type" [(ngModel)]="data.document_type" #document_type="ngModel">\n                        <ion-option value="Adharcard">{{\'Aadhaar card\' | translate}}</ion-option>\n                        <ion-option value="PanCard">{{\'Pan Card\' | translate}}</ion-option>\n                        <ion-option value="VoterCard">{{\'Voter Card\' | translate}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                \n                \n                <div class="upload-document" (click)="onUploadChange()">\n                    <p *ngIf="data.document_image==\'\'"><i class="material-icons">add_circle</i><br>{{\'Upload Document\' | translate}}</p>\n                    <img *ngIf="data.document_image != \'\'" [src]="data.document_image" alt="" required>\n                </div>\n                \n                \n                \n                <ion-item class="cs-input mb0 mt10" *ngIf="data.document_type==\'Adharcard\'" [ngClass]="{\'error\':f.submitted && document_no?.invalid}">\n                    <ion-label floating>{{\'Aadhaar Number\' | translate}}*</ion-label>\n                    <ion-input type="tel" name="document_no" #document_no="ngModel" [(ngModel)]="data.document_no" maxlength="12" minlength="12" required></ion-input>\n                </ion-item>\n                \n                <ion-item class="cs-input mb0 mt10" *ngIf="data.document_type==\'PanCard\'" [ngClass]="{\'error\':f.submitted && document_no?.invalid}">\n                    <ion-label floating>{{\'Pan Card Number\' | translate}}*</ion-label>\n                    <ion-input type="text" name="document_no" #document_no="ngModel" [(ngModel)]="data.document_no" required></ion-input>\n                </ion-item>\n                \n                <ion-item class="cs-input mb0 mt10" *ngIf="data.document_type==\'VoterCard\'" [ngClass]="{\'error\':f.submitted && document_no?.invalid}">\n                    <ion-label floating>{{\'Voter Card Number\' | translate}}*</ion-label>\n                    <ion-input type="text" name="document_no" #document_no="ngModel" [(ngModel)]="data.document_no" required></ion-input>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n\n    <div class="heading line">\n        <p>{{\'Visting Card\' | translate}}</p>\n    </div>\n    \n    <div class="ragistration-fields">\n        <div class="cs-form">\n            <ion-list>\n                <div class="upload-document" (click)="onUploadCard()">\n                    <p *ngIf="data.visiting_card==\'\'"><i class="material-icons">add_circle</i><br>{{\'Upload Visting Card\' | translate}}</p>\n                    <img *ngIf="data.visiting_card != \'\'" [src]="data.visiting_card" alt="" required>\n                </div>\n            </ion-list>\n        </div>\n    </div>\n    \n    \n    <ng-container *ngIf="data.user_type==\'1\'">\n        <div class="heading line" >\n            <p >{{\'Retailer Information\' | translate}}</p>\n        </div>\n        \n        <!-- *ngIf="data.user_type!=\'3\'" -->\n        <div class="ragistration-fields">\n            <div class="cs-form">\n                <ion-list>\n                    <ion-item class="cs-input">\n                        <ion-label floating>{{\'Counter Name (optional)\' | translate}}</ion-label>\n                        <ion-input type="text" name="parent_counter_name " pattern="[a-zA-Z ]+" ng-pattern-restrict #parent_counter_name="ngModel" [(ngModel)]="data.parent_counter_name "></ion-input>\n                    </ion-item>\n                    \n                    <ion-item class="cs-input">\n                        <ion-label floating>{{\'Contact Person (optional)\' | translate}}</ion-label>\n                        <ion-input type="text" name="parent_counter_contact_person " #parent_counter_contact_person="ngModel" [(ngModel)]="data.parent_counter_contact_person"></ion-input>\n                    </ion-item>\n                    <ion-item class="cs-input mb0" [ngClass]="{\'error\':f.submitted && parent_counter_mobile?.invalid}">\n                        <ion-label floating>{{\'Mobile No (optional)\' | translate}}.</ion-label>\n                        <ion-input type="tel" name="parent_counter_mobile " #parent_counter_mobile="ngModel" [(ngModel)]="data.parent_counter_mobile" maxlength="10" minlength="10"></ion-input>\n                    </ion-item>\n                    <!-- <ion-item class="cs-input">\n                        <ion-label floating>{{\'Address\'}}</ion-label>\n                        <ion-input type="text" name="dealer_address " #dealer_address="ngModel" [(ngModel)]="data.dealer_address"></ion-input>\n                    </ion-item> -->\n                </ion-list>\n            </div>\n        </div>\n    </ng-container>\n    \n    \n    <div class="heading line">\n        <p>{{\'Referral Code\' | translate}}</p>\n    </div>\n    <div class="ragistration-fields">\n        <div class="cs-form">\n            <ion-list>\n                <ion-item class="cs-input mb0">\n                    <ion-label floating>{{\'Referral Code (optional)\' | translate}}</ion-label>\n                    <ion-input type="text" name="referral_code " #referral_code="ngModel" [(ngModel)]="data.referral_code "></ion-input>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n    <button ion-button class="cs-btn m0">{{\'Continue\' | translate}}</button>\n</form>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/login-section/registration/registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
* Generated class for the ProfileEditModalPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ProfileEditModalPage = /** @class */ (function () {
    function ProfileEditModalPage(navCtrl, navParams, viewCtrl, service, alertCtrl, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.data = {};
        this.state_list = [];
        this.district_list = [];
        this.city_list = [];
        this.pincode_list = [];
        this.selectedFile = [];
        this.file_name = [];
        this.karigar_id = '';
        this.formData = new FormData();
        this.profile_data = '';
        this.lang = '';
        this.getstatelist();
        this.today_date = new Date().toISOString().slice(0, 10);
        this.data = navParams.data.user_detail;
        this.data = navParams.data.user_detail;
        this.data.karigar_edit_id = navParams.data.user_detail.id;
        if (this.data.state) {
            this.getDistrictList(this.data.state);
        }
    }
    ProfileEditModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileEditModalPage');
    };
    ProfileEditModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfileEditModalPage.prototype.getstatelist = function () {
        var _this = this;
        this.service.get_rqst('app_master/getStates').subscribe(function (r) {
            console.log(r);
            _this.state_list = r['states'];
            _this.karigar_id = r['id'];
            console.log(_this.state_list);
        });
    };
    ProfileEditModalPage.prototype.getDistrictList = function (state_name) {
        var _this = this;
        console.log(state_name);
        this.service.post_rqst({ 'state_name': state_name }, 'app_master/getDistrict')
            .subscribe(function (r) {
            console.log(r);
            _this.district_list = r['districts'];
            console.log(_this.state_list);
        });
    };
    ProfileEditModalPage.prototype.getCityList = function (district_name) {
        var _this = this;
        console.log(district_name);
        this.service.post_rqst({ 'district_name': district_name }, 'app_master/getCity')
            .subscribe(function (r) {
            console.log(r);
            _this.city_list = r['cities'];
            _this.pincode_list = r['pins'];
            console.log(_this.pincode_list);
        });
    };
    ProfileEditModalPage.prototype.getaddress = function (pincode) {
        var _this = this;
        this.service.post_rqst({ 'pincode': pincode }, 'app_karigar/getAddress')
            .subscribe(function (result) {
            console.log(result);
            var address = result.address;
            if (address != null) {
                _this.data.state = result.address.state_name;
                _this.getDistrictList(_this.data.state);
                _this.data.district = result.address.district_name;
                _this.data.city = result.address.city;
                console.log(_this.data);
            }
        });
    };
    ProfileEditModalPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        console.log('data');
        console.log(this.data);
        if (this.data.dealer_counter_name) {
            this.data.dealer_status = 'Active';
            console.log(this.data.dealer_status);
        }
        else {
            this.data.dealer_status = '';
        }
        this.data.lang = this.lang;
        this.data.karigar_type = 1;
        this.data.gender = 'male';
        console.log(this.data);
        this.service.post_rqst({ 'karigar': this.data }, 'app_karigar/addKarigar')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.karigar_id = r['id'];
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        });
    };
    ProfileEditModalPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    ProfileEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-edit-modal',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/profile-edit-modal/profile-edit-modal.html"*/'<!--\n  Generated template for the ProfileEditModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'Profile Edit\' | translate}}</ion-title>\n    <div class="header-icons">\n        <button ion-button class="cs-hdr-icons mr16" (click)="dismiss()">\n            <i class="material-icons">clear</i>\n        </button>\n    </div>\n</ion-navbar>\n</ion-header>\n\n<ion-content class="main-backgroung">\n  <form #f="ngForm" (ngSubmit)="f.form.valid ? submit() : scrollUp()">\n      \n      \n     \n      <div class="heading line">\n          <p>{{\'Basic Information\' | translate}}</p>\n      </div>\n      <div class="ragistration-fields">\n          <div class="left-right align-in-center">\n              <div class="right-part cs-form ml0">\n                  <ion-list>\n                      <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && first_name?.invalid}">\n                          <ion-label floating>{{\'First Name\' | translate}}*</ion-label>\n                          <ion-input type="text" name="first_name" #first_name="ngModel" [(ngModel)]="data.first_name" (ngModelChange)="(data.first_name!=null)?data.first_name[0] = data.first_name[0].toUpperCase():\'\'" (keypress)="namecheck($event)" required></ion-input>\n                      </ion-item>\n                      <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && last_name?.invalid}">\n                          <ion-label floating>{{\'Last Name  (optional)\' | translate}}</ion-label>\n                          <ion-input type="text" name="last_name" #last_name="ngModel" [(ngModel)]="data.last_name" (ngModelChange)="(data.last_name!=null)?data.last_name[0] = data.last_name[0].toUpperCase():\'\'" (keypress)="namecheck($event)" maxlength="10"></ion-input>\n                      </ion-item>\n                  </ion-list>\n              </div>\n          </div>\n          \n          \n          <div class="cs-form">\n              <ion-list>\n                  <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && company_name?.invalid}" *ngIf="data.user_type==\'2\' || data.user_type==\'3\'">\n                      <ion-label floating>{{\'Company Name\' | translate}}.*</ion-label>\n                      <ion-input type="text" name="company_name" #company_name="ngModel" [(ngModel)]="data.company_name" required (keypress)="namecheck($event)"></ion-input>\n                  </ion-item>\n                  \n                  <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && mobile_no?.invalid}">\n                      <ion-label floating>{{\'Mobile No\' | translate}}.*</ion-label>\n                      <ion-input type="number" name="mobile_no" #mobile_no="ngModel" [(ngModel)]="data.mobile_no" required (keypress)="MobileNumber($event)" readonly></ion-input>\n                  </ion-item>\n\n                  <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && payment_number?.invalid}">\n                      <ion-label floating>{{\'Paytm Number\' | translate}}</ion-label>\n                      <ion-input type="tel" name="payment_number" maxlength="10" minlength="10" #payment_number="ngModel" [(ngModel)]="data.payment_number"></ion-input>\n                  </ion-item>\n             \n              \n              <!--//////////////// importaint //////////////-->\n              \n              <ion-item class="cs-input" [ngClass]="{\'error\':(f.submitted && email?.invalid) || (f.submitted && !email.valid)}">\n                  <ion-label floating>{{\'Email ID (optional)\' | translate}}</ion-label>\n                  <ion-input type="text" type="text" name="email" #email="ngModel" [(ngModel)]="data.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"></ion-input>\n              </ion-item>\n              \n              <ion-item class="cs-date mb0" [ngClass]="{\'error\':f.submitted && dob?.invalid}">\n                  <ion-label>{{\'Date of Birth (optional)\' | translate}}</ion-label>\n                  <ion-datetime displayFormat="DD/MM/YYYY" max={{today_date}} type="text" name="dob" #dob="ngModel" [(ngModel)]="data.dob" >\n                  </ion-datetime>\n              </ion-item>\n          </ion-list>\n      </div>\n  </div>\n  \n  <div class="heading line">\n      <p>{{\'Address Information\' | translate}}</p>\n  </div>\n  \n  <div class="ragistration-fields">\n      <div class="cs-form">\n          <ion-list>\n              <ion-item class="cs-input">\n                  <ion-label floating>{{\'Address (optional)\' | translate}}</ion-label>\n                  \n                  <ion-input type="text" name="address" #address="ngModel" [(ngModel)]="data.address"></ion-input>\n              </ion-item>\n              \n              <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && pincode?.invalid}">\n                  <ion-label floating>{{\'Pincode\' | translate}}*</ion-label>\n                  <ion-input type="tel" name="pincode" [(ngModel)]="data.pincode" #pincode="ngModel" required maxlength="6" minlength="6" (input)="getaddress(data.pincode)"></ion-input>\n              </ion-item>\n              \n              \n              <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && state?.invalid}">\n                  <ion-label>{{\'State\' | translate}}*</ion-label>\n                  <ion-select name="state" [(ngModel)]="data.state" #state="ngModel" (ngModelChange)="getDistrictList(data.state)" required>\n                      <ion-option *ngFor="let row of state_list" value="{{row.state_name}}">{{row.state_name}}</ion-option>\n                  </ion-select>\n              </ion-item>\n              \n              <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && state?.invalid}">\n                  <ion-label>{{\'District\' | translate}}*</ion-label>\n                 \n                  <ion-select name="district" [(ngModel)]="data.district" #district="ngModel" (ngModelChange)="getCityList(data.district)" required>\n                      <ion-option *ngFor="let row of district_list" value="{{row.district_name}}">{{row.district_name}}</ion-option>\n                  </ion-select>\n              </ion-item>\n              \n              <ion-item class="cs-input mb0" [ngClass]="{\'error\':f.submitted && city?.invalid}">\n                  <ion-label floating>{{\'City\' | translate}}*</ion-label>\n                  <ion-input type="text" name="city" [(ngModel)]="data.city" #city="ngModel" required></ion-input>\n              </ion-item>\n              \n          </ion-list>\n      </div>\n  </div>\n  <!-- /////// Importaint //////////// -->\n\n  \n  \n  <ng-container *ngIf="data.user_type==\'1\'">\n      <div class="heading line" >\n          <p >{{\'Retailer Information\' | translate}}</p>\n      </div>\n      \n      <!-- *ngIf="data.user_type!=\'3\'" -->\n      <div class="ragistration-fields">\n          <div class="cs-form">\n              <ion-list>\n                  <ion-item class="cs-input">\n                      <ion-label floating>{{\'Counter Name (optional)\' | translate}}</ion-label>\n                      <ion-input type="text" name="parent_counter_name " pattern="[a-zA-Z ]+" ng-pattern-restrict #parent_counter_name="ngModel" [(ngModel)]="data.parent_counter_name "></ion-input>\n                  </ion-item>\n                  \n                  <ion-item class="cs-input">\n                      <ion-label floating>{{\'Contact Person (optional)\' | translate}}</ion-label>\n                      <ion-input type="text" name="parent_counter_contact_person " #parent_counter_contact_person="ngModel" [(ngModel)]="data.parent_counter_contact_person"></ion-input>\n                  </ion-item>\n                  <ion-item class="cs-input mb0" [ngClass]="{\'error\':f.submitted && parent_counter_mobile?.invalid}">\n                      <ion-label floating>{{\'Mobile No (optional)\' | translate}}.</ion-label>\n                      <ion-input type="tel" name="parent_counter_mobile " #parent_counter_mobile="ngModel" [(ngModel)]="data.parent_counter_mobile" maxlength="10" minlength="10"></ion-input>\n                  </ion-item>\n                  <!-- <ion-item class="cs-input">\n                      <ion-label floating>{{\'Address\'}}</ion-label>\n                      <ion-input type="text" name="dealer_address " #dealer_address="ngModel" [(ngModel)]="data.dealer_address"></ion-input>\n                  </ion-item> -->\n              </ion-list>\n          </div>\n      </div>\n  </ng-container>\n  \n\n  <button ion-button class="cs-btn m0">{{\'Update\' | translate}}</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/profile-edit-modal/profile-edit-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], ProfileEditModalPage);
    return ProfileEditModalPage;
}());

//# sourceMappingURL=profile-edit-modal.js.map

/***/ }),
/* 109 */,
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceTextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus_modal_aboutus_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdvanceTextPage = /** @class */ (function () {
    function AdvanceTextPage(navCtrl, navParams, modalCtrl, service, loadingCtrl, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.translate = translate;
        this.profile_data = {};
        this.tokenInfo = {};
        this.lang = '';
    }
    AdvanceTextPage.prototype.ionViewDidLoad = function () {
        this.getCompanyprofile();
        this.get_user_lang();
        console.log('ionViewDidLoad AdvanceTextPage');
    };
    AdvanceTextPage.prototype.presentAboutModal = function () {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__aboutus_modal_aboutus_modal__["a" /* AboutusModalPage */]);
        contactModal.present();
    };
    AdvanceTextPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    AdvanceTextPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    AdvanceTextPage.prototype.getCompanyprofile = function () {
        var _this = this;
        this.presentLoading();
        this.service.post_rqst({}, 'app_karigar/companyProfile')
            .subscribe(function (response) {
            console.log(response);
            _this.loading.dismiss();
            _this.profile_data = response.getData;
        });
    };
    AdvanceTextPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    AdvanceTextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-advance-text',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/advance-text/advance-text.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'About Us\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div class="about-logo">\n        <img [src]="profile_data.profile_banner" alt="" >\n    </div>\n\n    <div class="policy-text" (click)="presentAboutModal()" padding [innerHTML]="profile_data.about">\n        <!-- <p>Advance Decorative Laminates has set a quality benchmark in the interior designing industry. It offers some of the finest grade compact and durable laminates in India. Incepted in 2016, the company is headquartered in Hapur and is a subsidiary of highly renowned Amba Group (established in 1991). </p> <p>Laminates are resilient and flexible products with unlimited potential in interior designing. However, it shares an invisible background. We work towards not only reinventing the way laminates are looked at, but also how they look.</p><p> Using vibrant colours and finishes, we try to give laminates a complete makeover like never before. We conceive laminates not just as an economical countertop, but also an unparalleled design element that can add character to any décor. Our textured, feature rich, luxuriously designed laminates can enhance the visual appeal of your space. They are not just products, but application based collections which meet varying needs of architects, interior designers as well as consumers. Our laminates can also be customized to complement the colour and theme of your interior.</p>\n		<p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p> -->\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/advance-text/advance-text.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], AdvanceTextPage);
    return AdvanceTextPage;
}());

//# sourceMappingURL=advance-text.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams, app, service, storage, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.service = service;
        this.storage = storage;
        this.translate = translate;
        this.tokenInfo = {};
        this.lang = '';
        this.karigar_id = "";
        this.data_list = [];
        this.flag = '';
        this.get_user_lang();
        this.storage.get('token')
            .then(function (resp) {
            console.log(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__(resp));
            var tokendata = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(resp);
            console.log(tokendata);
            _this.karigar_id = tokendata.sub;
            console.log(_this.karigar_id);
            _this.get_notification();
        });
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    NotificationPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    NotificationPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    NotificationPage.prototype.get_notification = function () {
        var _this = this;
        this.service.post_rqst({ "karigar_id": this.karigar_id, "limit": this.data_list.length }, "app_karigar/get_notification")
            .subscribe(function (resp) {
            console.log(resp);
            _this.data_list = resp['notification'];
        });
    };
    NotificationPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.service.post_rqst({ "karigar_id": this.karigar_id, "limit": this.data_list.length }, 'app_karigar/get_notification')
            .subscribe(function (resp) {
            console.log(resp);
            if (resp == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.data_list = _this.data_list.concat(resp['notification']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/notification/notification.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Notification\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="main-backgroung">\n    <div class="notification {{row.active ? \'active\' : \'\'}}" *ngFor="let row of data_list" [ngClass]="{\'disable\':row.read}" (click)="row.active=!row.active">\n        <h1>{{lang == \'en\' ? row.notification : row.hindi_notification}}</h1>\n        <p>{{row.date_created}}</p>\n    </div>\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, app, db, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.db = db;
        this.storage = storage;
        this.translate = translate;
        this.tokenInfo = {};
        this.lang = '';
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.go_to_map = function () {
        console.log('map');
        var destination = 30.88017897419047 + ',' + 75.91783102110726;
        var label = encodeURI('Mohan nagar, Sahibabad, Ghaziabad, U.P.');
        window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
    };
    ContactPage.prototype.ionViewDidLeave = function () {
        this.get_user_lang();
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    ContactPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    ContactPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/contact/contact.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>{{\'Contact Us\' | translate}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="nev-adjust">\n		<div class="background hp100">\n			<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13697.021535823458!2d75.915814!3d30.879516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc02eafe9007a1bee!2sCrystal%20Electric%20Co%20Private%20Limited!5e0!3m2!1sen!2sin!4v1640668569682!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>		</div>\n		\n		<div class="cs-nevigation">\n			<div class="map-main" >\n				<div class="map-content"  >\n					<div class="nevigation"  (click)="go_to_map()">\n						<i class="material-icons">near_me</i>\n					</div>\n					<div class="location brd-btm" >\n						<i class="material-icons">location_on</i>\n						<p>D-113, Phase-5, Focal point, Ludhiana - 141010 Punjab (India)</p>\n					</div>\n					<div class="location">\n						<i class="material-icons">phone</i>\n						<a href="tel:1800-121-5113">1800-121-5113</a>\n					</div>\n					<div class="location">\n						<i class="material-icons">email</i>\n						<a href="mailto: info@crystalswitchgear.com" target="_blank"></a>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VideoPage = /** @class */ (function () {
    function VideoPage(navCtrl, navParams, service, loadingCtrl, dom, app, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.dom = dom;
        this.app = app;
        this.storage = storage;
        this.translate = translate;
        this.filter = {};
        this.video_list = [];
        this.tokenInfo = {};
        this.lang = '';
        this.ok = "";
        this.flag = '';
    }
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
        this.get_user_lang();
        this.getVideoList();
        this.presentLoading();
    };
    VideoPage.prototype.getVideoList = function () {
        var _this = this;
        this.filter.limit = 0;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/videoList').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.video_list = r['video'];
            for (var i = 0; i < _this.video_list.length; i++) {
                _this.video_list[i].url = _this.dom.bypassSecurityTrustResourceUrl(_this.video_list[i].url);
            }
        });
    };
    VideoPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    VideoPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    VideoPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_4_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    VideoPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.video_list.length;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/videoList').subscribe(function (r) {
            console.log(r);
            if (r['video'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.video_list = _this.video_list.concat(r['video']);
                    for (var i = 0; i < _this.video_list.length; i++) {
                        _this.video_list[i].url = _this.dom.bypassSecurityTrustResourceUrl(_this.video_list[i].url);
                    }
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    VideoPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/video/video.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Videos\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <div class="pl16 pr16">\n        <div  class="video" *ngFor="let list of video_list;let i=index">\n            <iframe [src]="list.url" width="100%" height="180" rameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n            <div class="video-text">\n                {{lang != \'en\' ? list.hin_desc : list.desc}}\n            </div>\n        </div>\n    </div>\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n        <ion-infinite-scroll-content\n        loadingSpinner="bubbles"\n        loadingText="{{\'Loading more data...\' | translate}}">\n    </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/video/video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_detail_news_detail__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, service, loadingCtrl, app, translate, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.translate = translate;
        this.storage = storage;
        this.filter = {};
        this.news_list = '';
        this.lang = '';
        this.tokenInfo = {};
        this.flag = '';
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
        this.get_user_lang();
        this.getNewsList();
        this.presentLoading();
    };
    NewsPage.prototype.goOnNewsDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__news_detail_news_detail__["a" /* NewsDetailPage */], { 'id': id });
    };
    NewsPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    NewsPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    NewsPage.prototype.getNewsList = function () {
        var _this = this;
        this.filter.limit = 0;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/newsList').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.news_list = r['news'];
        });
    };
    NewsPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    NewsPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.news_list.length;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/newsList').subscribe(function (r) {
            console.log(r);
            if (r['news'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.news_list = _this.news_list.concat(r['news']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    NewsPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                this.navCtrl.popToRoot();
            }
        }
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/news/news.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Latest News\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="latest-news">\n        <div class="news-list" *ngFor="let list of news_list;let i=index" (click)="goOnNewsDetailPage(list.id)">\n            <div class="thumb"><img src={{list.image}} alt=""></div>\n            <div class="desc">\n                <div class="d-data">\n                    <p>{{list.source}}</p>\n                    <p><i class="material-icons">date_range</i> {{list.date_created | date:\'d MMMM y\'}}</p>\n                </div>\n\n                <div class="description">\n                    <p>{{lang !=\'en\' ? list.hin_title : list.title | lowercase |titlecase}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)" *ngIf="flag!=1">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_answer_faq_answer__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, navParams, db, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.storage = storage;
        this.translate = translate;
        this.tokenInfo = {};
        this.lang = '';
        this.question_list = [];
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        this.get_user_lang();
        this.get_question();
    };
    FaqPage.prototype.get_question = function () {
        var _this = this;
        this.db.post_rqst("", "app_karigar/getQuestions")
            .subscribe(function (resp) {
            console.log(resp);
            _this.question_list = resp['question_list'];
            _this.question_list.map(function (resp) {
                resp.active = false;
            });
        });
    };
    FaqPage.prototype.goOnfaqanswerPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__faq_answer_faq_answer__["a" /* FaqAnswerPage */], { data: data });
    };
    FaqPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    FaqPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/faq/faq.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'FAQ\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    \n    <div class="image-detail" *ngIf="question_list.length == 0">\n        <img src="assets/imgs/no_found.svg">\n    </div>\n    \n    <div class="clcsd">\n        <ul class="collapsible">\n            <li *ngFor="let row of question_list;let i=index" class="{{row.active ? \'active\' : \'\'}}">\n                <div class="collapsible-header" (click)="row.active = !row.active">\n                    <div class="counter">{{i+1}}</div>\n                    <div [innerHTML]="row.question"></div>\n                </div>\n                <div class="collapsible-body">\n                    <div [innerHTML]="row.answer"></div>\n                </div>\n            </li>\n        </ul> \n    </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_subdetail_product_subdetail__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(navCtrl, navParams, service, loadingCtrl, app, translate, storage, con) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.translate = translate;
        this.storage = storage;
        this.con = con;
        this.cat_id = '';
        this.filter = {};
        this.prod_list = [];
        this.prod_cat = '';
        this.lang = '';
        this.tokenInfo = {};
        this.upload_url = '';
    }
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        this.cat_id = this.navParams.get('id');
        console.log(this.cat_id);
        this.presentLoading();
        this.get_user_lang();
        this.getProductList(this.cat_id, '');
        this.upload_url = this.con.upload_url;
    };
    ProductDetailPage.prototype.goOnProductSubDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_subdetail_product_subdetail__["a" /* ProductSubdetailPage */], { 'id': id });
    };
    ProductDetailPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    ProductDetailPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ProductDetailPage.prototype.getProductList = function (id, search) {
        var _this = this;
        console.log(search);
        this.filter.search = search;
        this.filter.limit = 0;
        this.filter.id = id;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/productList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.prod_list = r['products'];
            _this.prod_cat = r['category_name'];
        });
    };
    ProductDetailPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    ProductDetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                this.navCtrl.popToRoot();
            }
        }
    };
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/product-detail/product-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <!-- For hindi -->\n        <!-- {{lang != \'en\' ? prod_cat.hin_category_name : prod_cat.category_name |titlecase}} -->\n        <ion-title>{{prod_cat.category_name |titlecase}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="fix" >\n        <div class="search">\n            <ion-searchbar type=\'text\' placeholder="{{\'Search\' | translate}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" (ngModelChange)="getProductList(cat_id,filter.search)"></ion-searchbar>\n        </div>\n    </div>\n    <div class="pr-list" (click)="goOnProductSubDetailPage(list.id)" *ngFor="let list of prod_list;let i=index">\n        <button ion-item>\n			<div class="main-bx">\n				<div class="bx-left">\n					<img src={{upload_url+list.image_name}}>\n                    <!-- <img src="assets/imgs/default-image.png" *ngIf="!list.image.length"> -->\n				</div>\n				<div class="bx-right">\n					<!-- For Hindi -->\n					<!-- {{lang != \'en\' ? list.hin_product_name : list.product_name |titlecase}} -->\n					<h2>{{list.product_name |titlecase}}</h2>\n					<h2>Code : {{list.product_code |titlecase}}</h2>\n				</div>\n			</div>  \n			<i class="material-icons">trending_flat</i>\n		</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/product-detail/product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__["a" /* ConstantProvider */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());

//# sourceMappingURL=product-detail.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSubdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_profile_view_profile__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductSubdetailPage = /** @class */ (function () {
    function ProductSubdetailPage(navCtrl, navParams, service, loadingCtrl, app, translate, storage, modalCtrl, con) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.translate = translate;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.con = con;
        this.prod_id = '';
        this.prod_detail = {};
        this.assign_prod = [];
        this.prod_detail_image = {};
        this.lang = '';
        this.tokenInfo = {};
        this.upload_url = "";
        this.presentLoading();
    }
    ProductSubdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductSubdetailPage');
        this.prod_id = this.navParams.get('id');
        console.log(this.prod_id);
        this.get_user_lang();
        this.getProductDetail(this.prod_id);
        this.upload_url = this.con.upload_url;
    };
    ProductSubdetailPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    ProductSubdetailPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ProductSubdetailPage.prototype.getProductDetail = function (id) {
        var _this = this;
        console.log(id);
        this.service.post_rqst({ 'product_id': id }, 'app_master/productDetail')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.prod_detail = r['product'];
            _this.getRelatedProduct(_this.prod_detail['master_category_id']);
            // this.assign_prod=r['assigned_product_data'];
            console.log(_this.assign_prod);
            console.log(_this.prod_detail['image']);
            _this.prod_detail_image = _this.prod_detail['image'];
            console.log(_this.prod_detail_image[0].image_name);
            console.log(_this.prod_detail_image.length);
        });
    };
    ProductSubdetailPage.prototype.getRelatedProduct = function (id) {
        var _this = this;
        var data = { id: id, search: "", limit: 0 };
        this.service.post_rqst({ 'filter': data }, 'app_master/productList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            // this.prod_detail=r['product'];
            _this.assign_prod = r['products'];
            // console.log(this.assign_prod);
            // console.log(this.prod_detail['image']);
            // this.prod_detail_image=this.prod_detail['image'];
            // console.log(this.prod_detail_image[0].image_name);
            // console.log(this.prod_detail_image.length);
        });
    };
    ProductSubdetailPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    ProductSubdetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    ProductSubdetailPage.prototype.viewDetail = function (image) {
        console.log("clicked");
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": image }).present();
    };
    ProductSubdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-subdetail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/product-subdetail/product-subdetail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Product Detail\' | translate}} - {{prod_detail.category_name | titlecase}}</ion-title>\n        <!-- <h1>{{prod_detail.product_name | titlecase}}</h1> -->\n        <!-- <p *ngIf="prod_detail.desc!=\'\'"><strong>{{\'Description\' | translate}}</strong> : {{prod_detail.desc}}</p> -->\n        \n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    \n    <div class="slide-image h200">\n        <!-- zoom="true" -->\n        <ion-slides class="cs-slide" *ngIf="prod_detail.image && prod_detail.image.length>1" [initialSlide]="0" pager autoplay="1000" speed="1000" loop="true">\n            <ion-slide *ngFor="let row of prod_detail.image; let i=index" (click)="viewDetail(row.image_name)">\n                <div class="swiper-zoom-container">\n                    <img [src]="upload_url+row.image">\n                </div>\n            </ion-slide>\n        </ion-slides>\n        <div class="swiper-zoom-container" *ngIf="prod_detail.image && prod_detail.image.length==1">\n            <img [src]="upload_url+prod_detail_image[0].image_name">\n            <!-- <img src="assets/imgs/default-image.png" *ngIf="!list.image.length"> -->\n        </div>\n    </div>\n    \n    <!-- <div class="fix">\n        <div class="pr-img">\n            <ion-slides class="cs-slide"  pager autoplay="1000" speed="1000" loop="true" *ngIf="prod_detail.image && prod_detail.image.length" >\n                <ion-slide *ngFor="let row of prod_detail.image; let i=index" (click)="viewDetail(row.image_name)">\n                    <img [src]="upload_url+row.image_name">\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </div> -->\n    \n    <div class="pr-about">\n        <!-- For Hindi -->\n        <!-- <h1>{{lang !=\'en\' ? prod_detail.hin_product_name : prod_detail.product_name | titlecase}}</h1> -->\n        <h1 class="mb5">{{prod_detail.product_name | titlecase}}</h1>\n        <p *ngIf="prod_detail.desc!=\'\'"><strong>{{\'Description\' | translate}}</strong> : {{prod_detail.desc}}</p>\n        <p>Code : {{prod_detail.company_item_code}}</p>\n        <!-- <p>Price : {{prod_detail.mrp}}</p> -->\n        \n    </div>\n\n    <!-- <div class="heading line mt0 mb10">\n        <p>Related Products</p>\n    </div>\n    \n    <div class="carousel sm-label-font" *ngIf="assign_prod && assign_prod.length" >\n        \n        <div class="carousel-item" *ngFor="let row of assign_prod; let i=index"  (click)="getProductDetail(row.id)">\n            <div class="img-section">\n                <img [src]="upload_url+row.image_name">\n                <img src="assets/imgs/default-image.png" *ngIf="!row.image.length">\n            </div>\n            <label>{{row.product_name}}</label>\n            <label>{{row.product_code}}</label>\n            <label>{{row.mrp}}</label>\n        </div>\n    </div> -->\n    \n    \n    \n    <!-- <div class="slide-image h100" style="display: none;">\n        <ion-slides class="cs-slide" *ngIf="assign_prod && assign_prod.length">\n            <ion-slide *ngFor="let row of assign_prod; let i=index" >\n                <ng-container >\n                    <div class="swiper-zoom-container">\n                        <img [src]="upload_url+row[0].image_name">\n                    </div>\n                    <p>{{row[0].product_name}}</p>\n                    <p>{{row[0].product_code}}</p>\n                    <p>{{row[0].mrp}}</p>\n                </ng-container>\n            </ion-slide>\n        </ion-slides>\n    </div> -->\n    <!-- <div class="" *ngFor="let val of assign_prod">\n        {{val[0].product_code}}\n    </div> -->\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/product-subdetail/product-subdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__["a" /* ConstantProvider */]])
    ], ProductSubdetailPage);
    return ProductSubdetailPage;
}());

//# sourceMappingURL=product-subdetail.js.map

/***/ }),
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
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
webpackEmptyAsyncContext.id = 150;

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessModalPageModule", function() { return SuccessModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success_modal__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SuccessModalPageModule = /** @class */ (function () {
    function SuccessModalPageModule() {
    }
    SuccessModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__success_modal__["a" /* SuccessModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__success_modal__["a" /* SuccessModalPage */]),
            ],
        })
    ], SuccessModalPageModule);
    return SuccessModalPageModule;
}());

//# sourceMappingURL=success-modal.module.js.map

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus-modal/aboutus-modal.module": [
		195
	],
	"../pages/advance-text/advance-text.module": [
		230
	],
	"../pages/arrival-detail/arrival-detail.module": [
		231
	],
	"../pages/arrival-product/arrival-product.module": [
		232
	],
	"../pages/cancelation-policy/cancelation-policy.module": [
		233
	],
	"../pages/cancelpolicy-modal/cancelpolicy-modal.module": [
		234
	],
	"../pages/chating/chating.module": [
		235
	],
	"../pages/compass/compass.module": [
		236
	],
	"../pages/contact/contact.module": [
		237
	],
	"../pages/description-model/description-model.module": [
		238
	],
	"../pages/faq-answer/faq-answer.module": [
		239
	],
	"../pages/faq/faq.module": [
		240
	],
	"../pages/feedback/feedback.module": [
		241
	],
	"../pages/filter-product/filter-product.module": [
		242
	],
	"../pages/furniture-ideas/furniture-ideas.module": [
		243
	],
	"../pages/furniture-ideasdetail/furniture-ideasdetail.module": [
		244
	],
	"../pages/furniture-ideasshare/furniture-ideasshare.module": [
		245
	],
	"../pages/gift-gallery/gift-detail/gift-detail.module": [
		246
	],
	"../pages/gift-gallery/gift-list/gift-list.module": [
		247
	],
	"../pages/language/language.module": [
		404,
		4
	],
	"../pages/login-section/login-screen/login-screen.module": [
		405,
		3
	],
	"../pages/login-section/mobile-login/mobile-login.module": [
		248
	],
	"../pages/login-section/otp/otp.module": [
		406,
		2
	],
	"../pages/login-section/registration/registration.module": [
		407,
		1
	],
	"../pages/main-category/main-category.module": [
		249
	],
	"../pages/main-home/main-home.module": [
		250
	],
	"../pages/news-detail/news-detail.module": [
		251
	],
	"../pages/news/news.module": [
		252
	],
	"../pages/notification/notification.module": [
		253
	],
	"../pages/offer-list/offer-list.module": [
		254
	],
	"../pages/offer-product-detail/offer-product-detail.module": [
		255
	],
	"../pages/offer-product/offer-product.module": [
		256
	],
	"../pages/offers/offers.module": [
		257
	],
	"../pages/points/point-detail/point-detail.module": [
		258
	],
	"../pages/points/point-list/point-list.module": [
		259
	],
	"../pages/product-detail/product-detail.module": [
		260
	],
	"../pages/product-subdetail/product-subdetail.module": [
		261
	],
	"../pages/products/products.module": [
		262
	],
	"../pages/profile-edit-modal/profile-edit-modal.module": [
		263
	],
	"../pages/profile/profile.module": [
		264
	],
	"../pages/receive-remark-modal/receive-remark-modal.module": [
		265
	],
	"../pages/scane-pages/coupan-code/coupan-code.module": [
		266
	],
	"../pages/scane-pages/scan/scan.module": [
		267
	],
	"../pages/shipping-detail/shipping-detail.module": [
		268
	],
	"../pages/site-popover/site-popover.module": [
		408,
		0
	],
	"../pages/success-modal/success-modal.module": [
		151
	],
	"../pages/terms/terms.module": [
		269
	],
	"../pages/transaction/transaction.module": [
		270
	],
	"../pages/video/video.module": [
		271
	],
	"../pages/view-profile/view-profile.module": [
		272
	],
	"../pages/working-site/working-site.module": [
		274
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusModalPageModule", function() { return AboutusModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AboutusModalPageModule = /** @class */ (function () {
    function AboutusModalPageModule() {
    }
    AboutusModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aboutus_modal__["a" /* AboutusModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aboutus_modal__["a" /* AboutusModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], AboutusModalPageModule);
    return AboutusModalPageModule;
}());

//# sourceMappingURL=aboutus-modal.module.js.map

/***/ }),
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupan_code_coupan_code__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanPage = /** @class */ (function () {
    function ScanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ScanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScanPage');
    };
    ScanPage.prototype.goOnCoupanCodePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__coupan_code_coupan_code__["a" /* CoupanCodePage */]);
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/scane-pages/scan/scan.html"*/'<!--\n  Generated template for the ScanePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>scan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="scan-bg" (click)="goOnCoupanCodePage()">\n\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/scane-pages/scan/scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ScanPage);
    return ScanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelpolicyModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancelation_policy_cancelation_policy__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_transaction__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { TabsPage } from '../tabs/tabs';

var CancelpolicyModalPage = /** @class */ (function () {
    function CancelpolicyModalPage(navCtrl, navParams, viewCtrl, service, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.otp_value = '';
        this.karigar_id = '';
        this.otp = '';
        this.karigar_detail = {};
        this.gift_id = '';
        this.gift_detail = '';
        this.mobile_no = 0;
    }
    CancelpolicyModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancelpolicyModalPage');
        this.karigar_id = this.navParams.get('karigar_id');
        console.log(this.karigar_id);
        this.gift_id = this.navParams.get('gift_id');
        this.mobile_no = this.navParams.get('mobile_no');
        console.log(this.gift_id);
        this.getOtpDetail();
        this.presentLoading();
        console.log("mobile no===>", this.karigar_detail.mobile_no);
    };
    CancelpolicyModalPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    CancelpolicyModalPage.prototype.goOnCancelationPolicy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cancelation_policy_cancelation_policy__["a" /* CancelationPolicyPage */]);
    };
    CancelpolicyModalPage.prototype.getOtpDetail = function () {
        var _this = this;
        console.log('otp');
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'gift_id': this.gift_id, "mobile_no": this.mobile_no }, 'app_karigar/sendOtp')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.otp = r['otp'];
            console.log(_this.otp);
            _this.karigar_detail = r['karigar'];
            _this.gift_detail = r['gift'];
        });
    };
    // address()
    // {
    //     console.log(this.data);
    //     if(this.data.check1==true)
    //     {
    //         this.data.shipping_address=this.karigar_detail.address + ' ,'+this.karigar_detail.city + ' ,'+this.karigar_detail.district +' ,'+ this.karigar_detail.state +' ,'+ this.karigar_detail.pincode;
    //     }
    //     else{
    //         this.data.shipping_address='';
    //     }
    // }
    CancelpolicyModalPage.prototype.resendOtp = function () {
        var _this = this;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'gift_id': this.gift_id }, 'app_karigar/sendOtp')
            .subscribe(function (r) {
            console.log(r);
            _this.otp = r['otp'];
            console.log(_this.otp);
        });
    };
    CancelpolicyModalPage.prototype.otpvalidation = function () {
        this.otp_value = false;
        if (this.data.otp == this.otp) {
            this.otp_value = true;
        }
    };
    CancelpolicyModalPage.prototype.myNumber = function () {
        console.log(this.data);
        if (this.data.check1 == true) {
            this.data.payment_number = this.karigar_detail.mobile_no;
        }
        else {
            this.data.payment_number = '';
        }
    };
    CancelpolicyModalPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        console.log('data');
        console.log(this.data);
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, "gift_id": this.gift_id, 'offer_id': this.gift_detail.offer_id, 'payment_number': this.data.payment_number, "shipping_address": this.data.shipping_address }, 'app_karigar/redeemRequest')
            .subscribe(function (r) {
            _this.loading.dismiss();
            console.log(r);
            if (r['status'] == "SUCCESS") {
                // this.navCtrl.setRoot(TabsPage,{index:'3'});
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                _this.showSuccess("Redeem Request Sent Successfully");
            }
            else if (r['status'] == "EXIST") {
                _this.showAlert(" Already Redeemed!");
            }
        });
    };
    CancelpolicyModalPage.prototype.showAlert = function (text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    cssClass: 'close-action-sheet',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transaction_transaction__["a" /* TransactionPage */]);
                    }
                }]
        });
        alert.present();
    };
    CancelpolicyModalPage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    CancelpolicyModalPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    CancelpolicyModalPage.prototype.ionViewDidLeave = function () {
        console.log('leave');
        this.dismiss();
    };
    CancelpolicyModalPage.prototype.address = function () {
        console.log(this.data);
        if (this.data.check1 == true) {
            this.data.shipping_address = this.karigar_detail.address + ' ,' + this.karigar_detail.city + ' ,' + this.karigar_detail.district + ' ,' + this.karigar_detail.state + ' ,' + this.karigar_detail.pincode;
        }
        else {
            this.data.shipping_address = '';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], CancelpolicyModalPage.prototype, "nav", void 0);
    CancelpolicyModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cancelpolicy-modal',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/cancelpolicy-modal/cancelpolicy-modal.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>cancelpolicy-modal</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding class="popup-modal">\n\n    <div class="modal-center">\n        <div class="modal-content in-modal">\n            <form #f="ngForm">\n                <h1>{{\'Crystal Switch Gears\' | translate}} </h1>\n                <p class="highligt-error" *ngIf="karigar_detail.document_image == \'\' || karigar_detail.document_no == \'\'">* Your document details are missing !</p>\n\n                <p>{{\'Are you sure to redeem your\'| translate}} {{gift_detail.coupon_points}} {{\'points\' |translate}}?</p>\n\n                <div class="number-content">\n                    <p>{{\'Enter your 6 digit number that sent to\' | translate}} <span class="blue-color lineh24">+91 {{karigar_detail.mobile_no}}</span>\n                    </p>\n                </div>\n                <div class="input-section">\n                    <div class="input-adjust m0">\n                        <input class="pl16 radius-none" type="tel" name="otp" placeholder="{{\'Enter OTP\' | translate}}" #otp="ngModel" [(ngModel)]="data.otp" (ngModelChange)="otpvalidation()" required>\n                        <div class="otp-error" *ngIf="!otp_value && otp?.touched">\n                            <p>{{\'Wrong OTP value\' | translate}}</p>\n                        </div>\n                    </div>\n                    <div class="resend">\n                        <a (click)="resendOtp()">{{\'Resend\' | translate}}</a>\n                    </div>\n                </div>\n\n                <!-- <div class="check-bx">\n                    <ion-item>\n                        <ion-checkbox color="secondary" checked="true" name="check1" #check1="ngModel" [(ngModel)]="data.check1" (click)="myNumber()">\n                        </ion-checkbox>\n                    </ion-item>\n                    <p>{{\'Same as login number\' | translate}}</p>\n                </div> -->\n                <div class="check-bx mt0">\n                    <ion-item>\n                        <ion-checkbox color="secondary" checked="true" name="check1" #check1="ngModel" [(ngModel)]="data.check1" (click)="address()">\n                        </ion-checkbox>\n                    </ion-item>\n                    <p>{{\'Same as address\' | translate}}</p>\n                </div>\n                <div class="input-section">\n                    <div class="input-adjust m0 mt0">\n                        <textarea class="pl16 mt0"  name="shipping_address" placeholder="Address" #shipping_address="ngModel" [(ngModel)]="data.shipping_address"   required></textarea>\n                        <div class="otp-error" *ngIf="!shipping_address && otp?.shipping_address">\n                            <p>{{data.payment_type}} number required</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="input-section">\n                    <div class="input-adjust m0">\n                        <!-- <input class="pl16 radius-none" type="tel" name="payment_number" placeholder="Paytm Mobile Number" #payment_number="ngModel" [(ngModel)]="data.payment_number" minlength="10" maxlength="10"  required> -->\n                        <div class="otp-error" *ngIf="!payment_number && otp?.payment_number">\n                            <p>{{data.payment_type}} number required</p>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div class="input-section">\n                    <div class="input-adjust m0">\n                        <textarea class="pl16 radius-none" type="text" name="shipping_address" placeholder="{{\'Enter Shipping Address\' | translate}}" #shipping_address="ngModel" [(ngModel)]="data.shipping_address" required></textarea>\n                    </div>\n                </div> -->\n                <div class="check-bx">\n                    <ion-item>\n                        <ion-checkbox color="secondary" checked="true" name="check" #check="ngModel" [(ngModel)]="data.check" required></ion-checkbox>\n                    </ion-item>\n                    <p>{{\'I have read\' | translate}} <a (click)="goOnCancelationPolicy()">{{\'cancelation policy\' | translate}}</a></p>\n                </div>\n                <div class="footer-btn">\n                    <button class="outline-btn" (click)="dismiss()">{{\'No\' | translate}}</button>\n                    <button class="fill-btn" [disabled]="!data.check ||!data.otp ||!otp_value || karigar_detail.document_image == \'\' || karigar_detail.document_no == \'\' " (click)="f.form.valid && submit()">{{\'Yes\' | translate}}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/cancelpolicy-modal/cancelpolicy-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], CancelpolicyModalPage);
    return CancelpolicyModalPage;
}());

//# sourceMappingURL=cancelpolicy-modal.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelationPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CancelationPolicyPage = /** @class */ (function () {
    function CancelationPolicyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CancelationPolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancelationPolicyPage');
    };
    CancelationPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cancelation-policy',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/cancelation-policy/cancelation-policy.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cancelation policy</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="policy-text">\n		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>\n		<p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/cancelation-policy/cancelation-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], CancelationPolicyPage);
    return CancelationPolicyPage;
}());

//# sourceMappingURL=cancelation-policy.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feedback_feedback__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { InAppBrowser } from '@ionic-native/in-app-browser'


var ShippingDetailPage = /** @class */ (function () {
    function ShippingDetailPage(navCtrl, navParams, service, loadingCtrl, alertCtrl, app, constn) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.constn = constn;
        this.karigar_gift_id = '';
        this.shipped_detail = {};
        this.gift_detail = {};
        this.gift_id = '';
        this.receive_status = '';
        this.karigar_gift = {};
        this.edit = '';
        this.giftimg = [];
        this.upload_url = '';
    }
    ShippingDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShippingDetailPage');
        this.upload_url = this.constn.upload_url;
        this.karigar_gift_id = this.navParams.get('id');
        this.gift_id = this.navParams.get('gift_id');
        console.log(this.gift_id);
        this.getShippedDetail();
        this.getGiftDetail();
        this.presentLoading();
    };
    ShippingDetailPage.prototype.getShippedDetail = function () {
        var _this = this;
        this.service.post_rqst({ 'karigar_gift_id': this.karigar_gift_id }, 'app_karigar/shippedDetail').subscribe(function (r) {
            console.log(r);
            if (r['shipped'])
                _this.shipped_detail = r['shipped'];
        });
    };
    ShippingDetailPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    ShippingDetailPage.prototype.getGiftDetail = function () {
        var _this = this;
        console.log();
        this.service.post_rqst({ 'id': this.karigar_gift_id, 'gift_id': this.gift_id, 'karigar_id': this.service.karigar_id }, 'app_karigar/giftDetail').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.gift_detail = r['gift'];
            _this.giftimg = r['gift_images'];
            _this.karigar_gift = r['karigar_gift'];
            if (r['karigar_gift'] != null) {
                _this.receive_status = r['karigar_gift'].receive_status;
            }
            console.log(_this.receive_status);
            console.log(_this.gift_detail);
            _this.gift_detail.coupon_points = parseInt(_this.gift_detail.coupon_points);
        });
    };
    ShippingDetailPage.prototype.recvConfirmation = function (gift_id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation!',
            subTitle: 'Did you receive this gift?',
            cssClass: 'action-close',
            buttons: [{
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    cssClass: 'close-action-sheet',
                    handler: function () {
                        console.log(gift_id);
                        _this.service.post_rqst({ 'id': gift_id, 'karigar_id': _this.service.karigar_id }, 'app_karigar/redeemReceiveStatus').subscribe(function (r) {
                            console.log(r);
                            _this.showSuccess('You have receive gift successfully');
                            // this.navCtrl.setRoot(TabsPage,{index:'3'});
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        });
                    }
                }]
        });
        alert.present();
    };
    ShippingDetailPage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ShippingDetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    ShippingDetailPage.prototype.goto_link = function (url) {
        console.log(url);
        //  this.InAppBrowser.create(url);
    };
    ShippingDetailPage.prototype.editAddress = function () {
        var _this = this;
        this.service.post_rqst({ 'id': this.karigar_gift.id, 'shipping_address': this.karigar_gift.shipping_address }, 'app_karigar/editAddress').subscribe(function (result) {
            if (result['status'] = 'SUCCESS')
                _this.edit = '';
            _this.showSuccess("Shipping Address Updated !");
            _this.getGiftDetail();
        });
    };
    ShippingDetailPage.prototype.openChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__feedback_feedback__["a" /* FeedbackPage */]);
    };
    ShippingDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shipping-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/shipping-detail/shipping-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Gift Request Status\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="margin-padding">\n        <div class="phone">\n            <div class="phone-head">\n                <h1>{{gift_detail.gift_title}}</h1>\n            </div>\n            <img [src]="gift_detail.image">\n        </div>\n        <div class="specification mt10" *ngIf="gift_detail.gift_specification != \'\'">\n            <div><Strong>{{\'Specification\' | translate}} :</Strong> <div [innerHTML]="gift_detail.gift_specification"> </div></div>\n        </div>\n        <div class="specification mt10">\n            <div>{{\'Gift Status\' | translate}} :\n               <Strong class="{{karigar_gift.gift_status }}"> \n                    <span *ngIf="karigar_gift.gift_status != \'Reject\'">\n                    {{karigar_gift.gift_status}}\n                     \n                    </span>\n                   <span *ngIf="karigar_gift.gift_status == \'Reject\'">\n                     <!-- {{karigar_gift.gift_status}} -->\n                     Rejected\n                   </span>\n            </Strong>\n        </div>\n            <div class="mt5" *ngIf="karigar_gift.receive_status">{{\'Receive Status\' | translate}} : <Strong class="{{karigar_gift.gift_status}}"> {{karigar_gift.receive_status}}</Strong></div>\n        </div>\n        <div class="shipped-detail" >\n            <div *ngIf="shipped_detail.shipped_type">\n                <div class="content">\n                    <p>{{\'Shipped by\' | translate}}</p>\n                    <h1>{{shipped_detail.shipped_type}}</h1> \n                </div>\n                <div class="content" >\n                    <p>{{\'Estimate delivery Date\' | translate}}</p>\n                    <h1>{{shipped_detail.estimated_date}}</h1>\n                </div>\n                <div class="content">\n                    <p>{{\'Shipping information\' | translate}}</p>\n                    <h1 [innerHTML]="shipped_detail.shipping_information" (click)="goto_link(shipped_detail.shipping_information)" ></h1>\n                </div>\n            </div>\n        </div>\n        <div class="shipped-detail mt10" >\n            <div class="content edit-content">\n                <p>{{\'Shipping address\' | translate}}</p>\n                <a *ngIf="!shipped_detail.shipped_type && edit==\'\' && karigar_gift.gift_status==\'Pending\'" class="edit-field" (click)="edit=\'1\'">\n                    <i class="material-icons">create</i>\n                </a>\n                <h1 *ngIf="edit==\'\'">{{karigar_gift.shipping_address}}</h1>\n                <div *ngIf="edit==\'1\'">\n                    <textarea palceholder="Shipping address" name="shipping_address " #shipping_address ="ngModel" [(ngModel)]="karigar_gift.shipping_address" ></textarea>\n                    <button ion-item class="cs-btn btn-radius mb0 mt10" [disabled]="karigar_gift.shipping_address==\'\'" (click)="editAddress()">Save</button>\n                </div>\n            </div>\n        </div>\n        \n        <div class="chatus" *ngIf="karigar_gift.receive_status != \'Received\'">\n            {{\'Changed your mind? Write to us\' | translate}}\n            <a (click)="openChat()">{{\'Chat with us\' | translate}}</a>\n            {{\'to cancel this gift redeem request.\' | translate}}\n        </div>\n        \n        \n        <div class="fix-btn" *ngIf="receive_status == null">\n            <button ion-item class="cs-btn btn-radius mb0" (click)="recvConfirmation(gift_detail.id)">{{\'Click here if you recieve\' | translate}}</button>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    \n</ion-footer>\n<!-- {{gift_detail.gift_specification}} -->\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/shipping-detail/shipping-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__["a" /* ConstantProvider */]])
    ], ShippingDetailPage);
    return ShippingDetailPage;
}());

//# sourceMappingURL=shipping-detail.js.map

/***/ }),
/* 204 */,
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatingPage = /** @class */ (function () {
    function ChatingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatingPage');
    };
    ChatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chating',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/chating/chating.html"*/'<!--\n  Generated template for the ChatingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img src="assets/imgs/bill.jpg">\n            <div class="profile-text">\n                <h1>Trendy Trucks</h1>\n                <p>last seen today at 12:30</p>\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="main-backgroung">\n    <div class="chat-main">\n        <div class="cs-flexright">\n            <div class="chat other-chat">\n                <p>09:11 PM</p>\n                <div class="content">\n                    <span>Gastroenteritis means \n						inflammation of stomach as well \n					as the gastrointestinal tract.</span>\n                </div>\n            </div>\n        </div>\n        <div class="cs-flexleft">\n            <div class="chat">\n                <p>09:11 PM</p>\n                <div class="content">\n                    <span>Gastroenteritis means \n						inflammation of stomach as well \n					as the gastrointestinal tract.</span>\n                </div>\n            </div>\n        </div>\n        <div class="cs-flexright">\n            <div class="chat other-chat">\n                <p>09:11 PM</p>\n                <div class="content">\n                    <span>Gastroenteritis means \n						inflammation of stomach as well \n					as the gastrointestinal tract.</span>\n                </div>\n            </div>\n        </div>\n        <div class="cs-flexleft">\n            <div class="chat">\n                <p>09:11 PM</p>\n                <div class="content">\n                    <span>Gastroenteritis means \n						inflammation of stomach as well \n					as the gastrointestinal tract.</span>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</ion-content>\n<ion-footer>\n    <div class="say-something">\n        <ion-input type="text" placeholder="Say something…" value=""></ion-input>\n        <i class="material-icons">arrow_forward</i>\n    </div>\n</ion-footer>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/chating/chating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ChatingPage);
    return ChatingPage;
}());

//# sourceMappingURL=chating.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aboutus_modal_aboutus_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mobile_login_mobile_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__language_language__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, navParams, service, alertCtrl, modalCtrl, storage, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.karigar_detail = {};
        this.otp = '';
        this.lang = '';
        this.otp_value = '';
        this.data = {};
        this.mobile_no = '';
        this.tokan_value = '';
        this.tokenInfo = '';
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OtpPage');
        this.mobile_no = this.navParams.get('mobile_no');
        this.otp = this.navParams.get('otp');
        this.lang = this.navParams.get('lang');
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
    };
    OtpPage.prototype.otpvalidation = function () {
        this.otp_value = false;
        if (this.data.otp == this.otp) {
            this.otp_value = true;
        }
        console.log(this.otp);
        console.log(this.otp_value);
    };
    OtpPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        console.log('data');
        console.log(this.data);
        this.service.post_rqst({ 'mobile_no': this.mobile_no, 'mode': 'App', "lang": this.lang }, 'auth/login')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            if (r['status'] == 'NOT FOUND') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registration_registration__["a" /* RegistrationPage */], { 'mobile_no': _this.mobile_no, "lang": _this.lang });
                return;
            }
            else if (r['status'] == 'ACCOUNT SUSPENDED') {
                _this.translate.get("Your account has been suspended")
                    .subscribe(function (resp) {
                    _this.showAlert(resp);
                });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__mobile_login_mobile_login__["a" /* MobileLoginPage */]);
                return;
            }
            else if (r['status'] == 'SUCCESS') {
                _this.storage.set('token', r['token']);
                _this.service.karigar_id = r['user'].id;
                _this.service.karigar_status = r['user'].status;
                console.log(_this.service.karigar_id);
                if (r['user'].status != 'Verified') {
                    console.log(_this.lang);
                    var contactModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__aboutus_modal_aboutus_modal__["a" /* AboutusModalPage */], { "lang": _this.lang });
                    contactModal.present();
                    return;
                }
            }
            _this.storage.set('token', r['token']);
            _this.service.karigar_id = r['user'].id;
            console.log(_this.service.karigar_id);
            console.log(_this.lang);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */], { 'lang': _this.lang });
            console.log(_this.lang);
            // this.navCtrl.push(TabsPage);
        });
    };
    OtpPage.prototype.resendOtp = function () {
        var _this = this;
        this.service.post_rqst({ 'mobile_no': this.mobile_no }, 'app_karigar/karigarLoginOtp').subscribe(function (r) {
            if (r['status'] == "SUCCESS") {
                _this.translate.get("OTP has been send")
                    .subscribe(function (resp) {
                    _this.showSuccess(resp);
                    _this.otp = r['otp'];
                });
            }
        });
    };
    OtpPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_4_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    OtpPage.prototype.showAlert = function (text) {
        var _this = this;
        this.translate.get("Alert")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    OtpPage.prototype.showSuccess = function (text) {
        var _this = this;
        this.translate.get("Success")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    OtpPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: "",
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    OtpPage.prototype.languageBack = function () {
        console.log(this.lang);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__language_language__["a" /* LanguagePage */]);
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/login-section/otp/otp.html"*/'\n<ion-header no-border>\n    <ion-toolbar class="ios-coustom-height-one" color="white">\n		<ion-title  class="coustom-header-ios">\n        <ion-buttons class="back-btns" (click)="languageBack()">\n            <button ion-button icon-only>\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        \n       \n            <div class="logo no-margin" >\n                <img src="assets/imgs/logo.png">\n            </div>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n	<form  #f="ngForm" (ngSubmit)="f.form.valid && submit()" class="hp100">\n		<div class="center-block">\n		<div class="mobile-login">\n			<div class="text">\n				<p>{{\'Enter your 4 digit number that has been send to\' | translate}} <span class="blue-color lineh24">+91 {{mobile_no}}</span></p>\n			</div>\n			<div class="input-section">\n				<div class="input-adjust m16 mb0">\n					<input class="pl16 radius-none" type="tel" name="otp" placeholder="{{\'Enter OTP\' | translate}}" #otp="ngModel" [(ngModel)]="data.otp" (ngModelChange)="otpvalidation()" required>\n					<div class="otp-error" *ngIf="!otp_value && otp?.touched">\n						<p>{{\'Wrong OTP value\' | translate}}</p>\n					</div>\n				</div>\n				<div class="resend" >	\n					<a (click)="resendOtp()">{{\'Resend\' | translate}}</a>\n				</div>	\n			</div>\n			\n			<div class="login-btn" >\n				<button [disabled]="!otp_value">{{\'Continue\' | translate}}</button>\n			</div>\n			\n		</div>\n		</div>\n	</form>\n	\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/login-section/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advance_text_advance_text__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_video__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_news__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__faq_faq__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MainHomePage = /** @class */ (function () {
    function MainHomePage(navCtrl, navParams, storage, translate, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.items = [
            'Advance Decorative Laminates'
        ];
        this.tokenInfo = {};
        this.lang = '';
        this.inputs = [];
    }
    MainHomePage.prototype.ionViewDidLoad = function () {
        this.get_user_lang();
        console.log('ionViewDidLoad MainHomePage');
    };
    MainHomePage.prototype.goOnAdvanceTextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__advance_text_advance_text__["a" /* AdvanceTextPage */]);
    };
    MainHomePage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    MainHomePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_9_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    MainHomePage.prototype.goOnNotificationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */]);
    };
    MainHomePage.prototype.goOnContactPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
    };
    MainHomePage.prototype.goOnVideoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__video_video__["a" /* VideoPage */]);
    };
    MainHomePage.prototype.goOnNewsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__news_news__["a" /* NewsPage */]);
    };
    MainHomePage.prototype.goOnfaqPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__faq_faq__["a" /* FaqPage */]);
    };
    MainHomePage.prototype.goOnlanguage = function () {
        var _this = this;
        this.inputs = [];
        this.db.get_rqst("app_karigar/get_languages")
            .subscribe(function (resp) {
            console.log(resp);
            _this.inputs = resp;
            console.log(_this.inputs);
            for (var i = 0; i < _this.inputs.length; i++) {
                _this.inputs[i]['type'] = "radio";
                _this.inputs[i]['checked'] = _this.inputs[i]['value'] == _this.lang ? true : false;
            }
            console.log(_this.inputs);
            if (_this.inputs.length > 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Choose your Language',
                    inputs: _this.inputs,
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log(data);
                                _this.lang = data;
                                _this.db.post_rqst({ "login_id": _this.tokenInfo.sub, "lang": _this.lang }, "app_karigar/change_language")
                                    .subscribe(function (resp) {
                                    console.log(resp);
                                    _this.translate.use(_this.lang);
                                });
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    MainHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-home',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/main-home/main-home.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title></ion-title>\n    </ion-navbar>\n</ion-header>\n<div class="header-logo">\n    <img src="assets/imgs/logo.png">\n</div>\n\n<ion-content padding>\n    <div class="list-adjust">\n        <ion-list>\n            <button ion-item (click)="goOnAdvanceTextPage()">\n                {{\'Advance Decorative Laminates\' | translate}}<i class="material-icons">\n                    keyboard_arrow_right\n                </i>\n            </button>  \n            <button ion-item (click)="goOnNewsPage()">\n                {{\'Latest News\' | translate}}<i class="material-icons">\n                    keyboard_arrow_right\n                </i>\n            </button>  \n            <button ion-item (click)="goOnVideoPage()">\n                {{\'Videos\' | translate}}<i class="material-icons">\n                    keyboard_arrow_right\n                </i>\n            </button>  \n            <button ion-item (click)="goOnContactPage()">\n                {{\'Contact Us\' | translate}}<i class="material-icons">\n                    keyboard_arrow_right\n                </i>\n            </button>\n            <button ion-item (click)="goOnfaqPage()">\n                {{\'FAQ\' | translate}}\n                <i class="material-icons">keyboard_arrow_right</i>\n            </button>\n        </ion-list>\n    </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/main-home/main-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_10__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MainHomePage);
    return MainHomePage;
}());

//# sourceMappingURL=main-home.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsDetailPage = /** @class */ (function () {
    function NewsDetailPage(navCtrl, navParams, service, loadingCtrl, app, translate, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.translate = translate;
        this.storage = storage;
        this.news_id = '';
        this.news_detail = {};
        this.lang = '';
        this.tokenInfo = {};
    }
    NewsDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsDetailPage');
        this.news_id = this.navParams.get('id');
        this.get_user_lang();
        this.getNewsDetail(this.news_id);
        this.presentLoading();
    };
    NewsDetailPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    NewsDetailPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    NewsDetailPage.prototype.getNewsDetail = function (news_id) {
        var _this = this;
        this.service.post_rqst({ 'news_id': news_id }, 'app_master/newsDetail').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.news_detail = r['news'];
        });
    };
    NewsDetailPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    NewsDetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    NewsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/news-detail/news-detail.html"*/'\n<ion-header>\n	<ion-navbar>\n		<ion-title>{{\'News Detail\' | translate}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="fix">\n		<div class="pr-img">\n			<img src={{news_detail.image}}>\n		</div>\n	</div>\n	<div class="box">\n		<div class="date">\n			<span><i class="material-icons">date_range</i></span>\n			<p>{{news_detail.date_created |date:\'d MMM, y\'}}</p>\n		</div>\n		<div class="social">\n			<span><i class="material-icons">public</i></span>\n			<p>{{news_detail.source}}</p>\n		</div>\n	</div>\n	<div class="pr-about">\n		<h1>{{lang != \'en\' ? news_detail.hin_title : news_detail.title |titlecase}}</h1>\n		<p><strong>{{\'Description\' | translate}}</strong> : {{lang != \'en\' ? news_detail.hin_desc : news_detail.desc}}</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/news-detail/news-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], NewsDetailPage);
    return NewsDetailPage;
}());

//# sourceMappingURL=news-detail.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqAnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FaqAnswerPage = /** @class */ (function () {
    function FaqAnswerPage(navCtrl, navParams, db, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.storage = storage;
        this.translate = translate;
        this.tokenInfo = {};
        this.lang = '';
        this.data = {};
    }
    FaqAnswerPage.prototype.ionViewDidLoad = function () {
        this.data = this.navParams.get('data');
    };
    FaqAnswerPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    FaqAnswerPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    FaqAnswerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq-answer',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/faq-answer/faq-answer.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'FAQ Answer\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="faq-answer">\n        <div class="faq-top">\n            <img src="assets/imgs/question.png">\n            <p [innerHTML]="data.question"></p>\n        </div>\n        <div class="faq-bottom">\n            <img src="assets/imgs/ans.png">\n            <p [innerHTML]="data.answer"></p>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/faq-answer/faq-answer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], FaqAnswerPage);
    return FaqAnswerPage;
}());

//# sourceMappingURL=faq-answer.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offers_offers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OfferListPage = /** @class */ (function () {
    function OfferListPage(navCtrl, navParams, service, loadingCtrl, app, db, translate, storage, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.db = db;
        this.translate = translate;
        this.storage = storage;
        this.constant = constant;
        this.offer_list = [];
        this.filter = {};
        this.flag = '';
        this.lang = '';
        this.tokenInfo = {};
        this.uploadUrl = '';
        this.getofferList();
        this.presentLoading();
    }
    OfferListPage.prototype.ionViewDidLoad = function () {
        this.uploadUrl = this.constant.upload_url;
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        this.get_user_lang();
        console.log('ionViewDidLoad OfferListPage');
    };
    OfferListPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    OfferListPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    OfferListPage.prototype.goOnOffersPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__offers_offers__["a" /* OffersPage */], { 'id': id });
    };
    OfferListPage.prototype.getofferList = function () {
        var _this = this;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/offerList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.offer_list = r['offer'];
            console.log(_this.offer_list);
        });
    };
    OfferListPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    OfferListPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                this.navCtrl.popToRoot();
            }
        }
    };
    OfferListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-list',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/offer-list/offer-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title> {{\'My Offer\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="Product m16">\n        <button ion-item class="bg-product mb16" *ngFor="let list of offer_list;let i=index" (click)="goOnOffersPage(list.id)">\n            <div class="thumbnail">\n                <!-- <img src="{{uploadUrl}}{{list.offer_banner}}"> -->\n                <img src="{{list.offer_banner}}">\n\n            </div>\n            <div class="errow">\n                <div class="list-tags wthspan">\n                    <h1>{{lang != \'en\'? list.hin_title : list.title |titlecase}}</h1>\n                    <p>{{\'Valid Upto\' | translate}} : {{list.end_date | date:\'d MMMM y\'}}</p>\n                </div>\n                <i class="material-icons mr10">trending_flat</i>\n            </div>\n        </button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/offer-list/offer-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__["a" /* ConstantProvider */]])
    ], OfferListPage);
    return OfferListPage;
}());

//# sourceMappingURL=offer-list.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point_detail_point_detail__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PointListPage = /** @class */ (function () {
    function PointListPage(navCtrl, navParams, service, loadingCtrl, app, storage, translate, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.coupon_list = [];
        this.mypoint = "scan";
        this.karigar_point = {};
        this.filter = {};
        this.last_scanned_date = '';
        this.tokenInfo = {};
        this.lang = '';
        this.total_balance_point = 0;
        this.welcome_points = {};
        this.my_ref = {};
        this.ref_points = [];
        this.flag = '';
        console.log(this.db);
        console.log(this.db.karigar_info.status);
    }
    PointListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PointListPage');
        this.getCoupanHistory();
        this.presentLoading();
        this.get_user_lang();
    };
    PointListPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getCoupanHistory();
        refresher.complete();
    };
    PointListPage.prototype.goOnPointDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__point_detail_point_detail__["a" /* PointDetailPage */], { 'id': id });
    };
    PointListPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    PointListPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    PointListPage.prototype.getCoupanHistory = function () {
        var _this = this;
        console.log('coupan');
        this.filter.limit = 0;
        this.service.post_rqst({ 'filter': this.filter, 'karigar_id': this.service.karigar_id }, 'app_karigar/couponHistory').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.coupon_list = r['coupon'];
            _this.karigar_point = r['karigar'];
            _this.welcome_points = r['welcome_points'];
            _this.ref_points = r['ref_kar'];
            console.log('====================================');
            console.log(_this.ref_points);
            console.log('====================================');
            _this.total_balance_point = parseInt(_this.karigar_point.balance_point) + parseInt(_this.karigar_point.referal_point_balance);
            console.log(_this.total_balance_point);
        });
    };
    PointListPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    PointListPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.coupon_list.length;
        this.service.post_rqst({ 'filter': this.filter, 'karigar_id': this.service.karigar_id }, 'app_karigar/couponHistory').subscribe(function (r) {
            console.log(r);
            if (r['coupon'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.coupon_list = _this.coupon_list.concat(r['coupon']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    PointListPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    PointListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-point-list',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/points/point-list/point-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'My Points\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="{{\'Refreshing...\' | translate}}" refreshingSpinner="circles" refreshingText="{{\'Refreshing...\' | translate}}">\n        </ion-refresher-content>\n    </ion-refresher>\n    \n    <div class="top-nav nav-adjust-2">\n        <p>{{\'Balance Points\' | translate}}</p>\n        <h1>{{total_balance_point}}</h1>\n        <h2> {{\'Last updated\' | translate}} {{ (karigar_point.balance_update!=\'0000-00-00\') ? (karigar_point.balance_update | date:\'d MMMM y\') : (\'00-00-0000\') }}</h2>\n    </div>\n    \n    <!-- <ion-list >\n        <ion-item style="background: #f5f7ff;">\n            <div class="left-block">\n                <p>{{\'Welcome Point\' | translate}}</p>\n                <span>{{welcome_points.date_created | date:\'d MMMM y\'}}</span>\n            </div>\n            <div class="right-block">\n                <h2 style="font-size: 24px;">{{welcome_points.points}}</h2>\n            </div>\n        </ion-item>\n        <ion-item style="background: #f5f7ff;" *ngIf="my_ref != null">\n            <div class="left-block">\n                <p>{{\'Referral Point\' | translate}}</p>\n                <span>{{my_ref.date_created | date:\'d MMMM y\'}}</span>\n            </div>\n            <div class="right-block">\n                <h2 style="font-size: 24px;">{{my_ref.summary}}</h2>\n            </div>\n        </ion-item>\n    </ion-list> -->\n    \n    \n    \n    <ion-segment [(ngModel)]="mypoint">\n        <ion-segment-button value="scan">\n            {{\'Scan History\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="ref_earn">\n            {{\'Other Point\' | translate}}\n            \n        </ion-segment-button>\n    </ion-segment>\n    \n    \n    <div [ngSwitch]="mypoint">\n        <ion-list *ngSwitchCase="\'scan\'">\n            \n            <ion-item *ngIf="coupon_list.length == 0">\n                <div class="no-history">\n                    <img src="assets/imgs/history.png">\n                    <p>{{\'No History\' | translate}}</p>\n                </div>\n            </ion-item>\n            \n            <ion-item *ngFor="let list of coupon_list; let i=index">\n                <div class="left-block">\n                    <p>{{\'Scan Point\' | translate}}</p>\n                    <span><span>Coupon Code</span>{{list.coupon_code}}</span><br>\n                    <span *ngIf="list.scan_by_karigar_date != null">{{list.scan_by_karigar_date | date:\'d MMMM y - h:mm\'}}</span>\n                    <span *ngIf="list.scan_by_retailer_date != null">{{list.scan_by_retailer_date | date:\'d MMMM y -h:mm\'}}</span>\n                </div>\n                <div class="right-block" [ngClass]="{ \'Success\': list.status == \'SUCCESS\', \'Inprocess\': list.status == \'PENDING\',  \'Error\': list.status == \'Error\', \'FAILURE\': list.status == \'FAILURE\'}">\n                    <h2> {{list.coupon_value}}</h2>\n                    <span>{{list.status | titlecase}}</span>\n                </div>\n            </ion-item>\n        </ion-list>\n        \n        \n        <ion-list *ngSwitchCase="\'ref_earn\'">\n            <ion-item *ngIf="ref_points.length == 0">\n                <div class="no-history">\n                    <img src="assets/imgs/history.png">\n                    <p>{{\'No History\' | translate}}</p>\n                </div>\n            </ion-item>\n            <ion-item *ngFor="let row of ref_points;">\n                <div class="left-block">\n\n                    <p>{{row.summary}}</p>\n                    <span>{{row.date_created | date:\'d MMMM y\'}}</span>\n                </div>\n                <div class="right-block">\n                    <h2>{{row.points}}</h2>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)" *ngIf="flag!=1">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/points/point-list/point-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], PointListPage);
    return PointListPage;
}());

//# sourceMappingURL=point-list.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offers_offers__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PointDetailPage = /** @class */ (function () {
    function PointDetailPage(navCtrl, navParams, service, loadingCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.coupon_id = '';
        this.coupon_detail = '';
        this.offer_detail = {};
    }
    PointDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PointDetailPage');
        this.coupon_id = this.navParams.get('id');
        this.getCouponDetail(this.coupon_id);
        this.presentLoading();
    };
    PointDetailPage.prototype.getCouponDetail = function (coupon_id) {
        var _this = this;
        this.service.post_rqst({ 'coupon_id': coupon_id, 'karigar_id': this.service.karigar_id }, 'app_karigar/couponDetail').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.coupon_detail = r['coupon'];
            _this.offer_detail = r['offer_detail'];
        });
    };
    PointDetailPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    PointDetailPage.prototype.goOnOffersPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__offers_offers__["a" /* OffersPage */], { 'id': id });
    };
    PointDetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    PointDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-point-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/points/point-detail/point-detail.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Points Detail\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- <div class="Product no-margin">\n        <button ion-item class="bg-product mb16" (click)="goOnOffersPage(offer_detail.id)">\n            <div class="thumbnail" style="height: inherit;">\n                <img src="{{offer_detail.offer_banner}}">\n            </div>\n            <div class="errow">\n                <div class="list-tags wthspan">\n                    <h1>{{offer_detail.title}}</h1>\n                    <p>{{offer_detail.offer_code}}</p>\n                </div>\n                <i class="material-icons">trending_flat</i>\n            </div>\n        </button>\n    </div> -->\n    \n    <ion-list>\n        <ion-item>\n            <div class="left-block">\n                <p>{{\'QR Code Number\' | translate}}</p>\n            </div>\n            <div class="right-block">\n                <h2>{{coupon_detail.coupon_code}}</h2>\n            </div>\n        </ion-item>\n        <ion-item>\n            <div class="left-block">\n                <p>{{\'Scan Point\' | translate}}</p>\n                <span *ngIf="coupon_detail.scan_by_karigar_date != null">{{coupon_detail.scan_by_karigar_date | date:\'d MMMM y, h:mm a\'}}</span>\n                <span *ngIf="coupon_detail.scan_by_retailer_date != null">{{coupon_detail.scan_by_retailer_date | date:\'d MMMM y, h:mm a\'}}</span>\n            </div>\n            <div class="right-block" [ngClass]="{ \'Success\': coupon_detail.status == \'SUCCESS\', \'Inprocess\': coupon_detail.status == \'PENDING\',  \'Error\': coupon_detail.status == \'Error\', \'FAILURE\': coupon_detail.status == \'FAILURE\'}">\n                <h2>&#x20B9; {{coupon_detail.redeem_amount}}</h2>\n                <span>{{coupon_detail.status | titlecase}}</span>\n            </div>\n        </ion-item>\n        \n        <!-- <ion-item *ngIf="coupon_detail.transaction_date">\n            <div class="left-block">\n                <p>Receiving Date</p>\n            </div>\n            <div class="right-block">\n                <span>{{coupon_detail.transaction_date | date:\'d MMMM y, h:mm a\'}}</span>\n            </div>\n        </ion-item> -->\n        <ion-item *ngIf="coupon_detail.failure_reason">\n            <div class="left-block">\n                <p>{{\'Remark\' | translate}}</p>\n                <span>{{coupon_detail.failure_reason}}</span>\n            </div>\n        </ion-item>\n    </ion-list>\n    \n    \n    \n    <!-- <div class="detail-content">\n        <h1>Get Point</h1>\n        <p>{{coupon_detail.scan_date | date:\'d MMMM y\'}}</p>\n        <img src="assets/imgs/gift-1.svg">\n        <h2>{{coupon_detail.actual_coupon_point}} Point</h2>\n        <h3>{{coupon_detail.coupon_code}}</h3>\n        <p><strong>Product Code : </strong>{{coupon_detail.product_code ? coupon_detail.product_code : \'N/A\'}}</p>\n        <p><strong>Finish : </strong>{{coupon_detail.finish ? coupon_detail.finish : \'N/A\'}}</p>\n    </div> -->\n    \n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/points/point-detail/point-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], PointDetailPage);
    return PointDetailPage;
}());

//# sourceMappingURL=point-detail.js.map

/***/ }),
/* 213 */,
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device_orientation__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompassPage = /** @class */ (function () {
    function CompassPage(navCtrl, navParams, deviceOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deviceOrientation = deviceOrientation;
        this.location = 0;
        this.deg = 0;
    }
    CompassPage.prototype.ionViewDidLoad = function () {
        // this.get_cur_loc();
        console.log('ionViewDidLoad CompassPage');
    };
    CompassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compass',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/compass/compass.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title>compass</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="compass">\n        <div class="arrow"></div>\n        <div class="disc" [ngStyle]="{\'transform\': deg}"></div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/compass/compass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device_orientation__["a" /* DeviceOrientation */]])
    ], CompassPage);
    return CompassPage;
}());

//# sourceMappingURL=compass.js.map

/***/ }),
/* 215 */,
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FurnitureIdeasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furniture_ideasdetail_furniture_ideasdetail__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FurnitureIdeasPage = /** @class */ (function () {
    function FurnitureIdeasPage(navCtrl, navParams, db, loadingCtrl, translate, constn, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.constn = constn;
        this.storage = storage;
        this.upload_url = '';
        this.tokenInfo = {};
        this.lang = '';
        this.filter = {};
        this.flag = '';
        this.category_list = [];
        this.presentLoading();
    }
    FurnitureIdeasPage.prototype.ionViewDidLoad = function () {
        this.get_user_lang();
        console.log('ionViewDidLoad FurnitureIdeasPage');
        this.upload_url = this.constn.upload_url;
        this.get_category();
    };
    FurnitureIdeasPage.prototype.goOnfurnituredetailPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__furniture_ideasdetail_furniture_ideasdetail__["a" /* FurnitureIdeasdetailPage */], { data: data });
    };
    FurnitureIdeasPage.prototype.get_category = function () {
        var _this = this;
        this.filter.limit = 0;
        this.db.post_rqst({ 'filter': this.filter }, "app_karigar/get_furniture_cat")
            .subscribe(function (resp) {
            console.log(resp);
            _this.category_list = resp['category_list'];
            _this.loading.dismiss();
        });
    };
    FurnitureIdeasPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.category_list.length;
        this.db.post_rqst({ 'filter': this.filter }, 'app_karigar/get_furniture_cat')
            .subscribe(function (r) {
            console.log(r);
            if (r['category_list'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.category_list = _this.category_list.concat(r['category_list']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    FurnitureIdeasPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    FurnitureIdeasPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    FurnitureIdeasPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    FurnitureIdeasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-furniture-ideas',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/furniture-ideas/furniture-ideas.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Furniture Ideas\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="img-container" (click)="goOnfurnituredetailPage(row)" *ngFor="let row of category_list">\n        <img src="{{upload_url+row.image_name}}">\n        <div class="content-box">\n            <p>{{row.category}}</p>\n        </div>\n    </div>\n    \n    <div class="image-detail" *ngIf="category_list.length == 0">\n        <img src="assets/imgs/no_found.svg">\n    </div>\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/furniture-ideas/furniture-ideas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], FurnitureIdeasPage);
    return FurnitureIdeasPage;
}());

//# sourceMappingURL=furniture-ideas.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FurnitureIdeasdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furniture_ideasshare_furniture_ideasshare__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FurnitureIdeasdetailPage = /** @class */ (function () {
    function FurnitureIdeasdetailPage(navCtrl, navParams, db, loadingCtrl, translate, constn, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.constn = constn;
        this.storage = storage;
        this.data = {};
        this.upload_url = '';
        this.filter = {};
        this.flag = '';
        this.tokenInfo = {};
        this.lang = '';
        this.sub_cat_list = [];
        this.data = this.navParams.get("data");
        this.presentLoading();
    }
    FurnitureIdeasdetailPage.prototype.ionViewDidLoad = function () {
        this.upload_url = this.constn.upload_url;
        console.log('ionViewDidLoad FurnitureIdeasdetailPage');
        this.get_subFurniture_cat();
    };
    FurnitureIdeasdetailPage.prototype.goOnfurnituresharePage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__furniture_ideasshare_furniture_ideasshare__["a" /* FurnitureIdeassharePage */], { data: data, list: this.sub_cat_list });
    };
    FurnitureIdeasdetailPage.prototype.get_subFurniture_cat = function () {
        var _this = this;
        this.filter.limit = 0;
        this.db.post_rqst({ data: this.data, 'filter': this.filter }, "app_karigar/get_subfurniture_cat")
            .subscribe(function (resp) {
            console.log(resp);
            _this.sub_cat_list = resp['sub_cat_list'];
            _this.loading.dismiss();
        });
    };
    FurnitureIdeasdetailPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.sub_cat_list.length;
        this.db.post_rqst({ data: this.data, 'filter': this.filter }, 'app_karigar/get_subfurniture_cat')
            .subscribe(function (r) {
            console.log(r);
            if (r['sub_cat_list'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.sub_cat_list = _this.sub_cat_list.concat(r['sub_cat_list']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    FurnitureIdeasdetailPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    FurnitureIdeasdetailPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    FurnitureIdeasdetailPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    FurnitureIdeasdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-furniture-ideasdetail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/furniture-ideasdetail/furniture-ideasdetail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{data.category}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="furn-container" >\n        <div class="furn-imgs" *ngFor="let row of sub_cat_list;let i=index" (click)="goOnfurnituresharePage(i)">\n            <img src="{{upload_url+row.image_name}}">\n        </div>\n    </div>\n    \n    <div class="image-detail" *ngIf="sub_cat_list.length == 0">\n        <img src="assets/imgs/no_found.svg">\n    </div>\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/furniture-ideasdetail/furniture-ideasdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], FurnitureIdeasdetailPage);
    return FurnitureIdeasdetailPage;
}());

//# sourceMappingURL=furniture-ideasdetail.js.map

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FurnitureIdeassharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FurnitureIdeassharePage = /** @class */ (function () {
    function FurnitureIdeassharePage(navCtrl, navParams, socialShar, db, loadingCtrl, translate, constn, transfer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialShar = socialShar;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.constn = constn;
        this.transfer = transfer;
        this.file = file;
        this.data = {};
        this.image_list = [];
        this.upload_url = "";
        this.index = 0;
        this.index = this.navParams.get("data");
        this.image_list = this.navParams.get("list");
        console.log(this.index);
    }
    FurnitureIdeassharePage.prototype.download = function (name, fileUrl) {
        console.log("clicked");
        console.log(this.file.externalRootDirectory);
        console.log(this.file);
        window.open(fileUrl, '_system', 'location=yes');
        // const fileTransfer: FileTransferObject = this.transfer.create();
        // const url = 'http://www.example.com/file.pdf';
        // console.log("after url");
        // fileTransfer.download(fileUrl, this.file.externalRootDirectory+'DCIM/Camera/'+ name)
        // .then((entry) => {
        //     console.log(entry);
        //     console.log('download complete: ' + entry.toURL());
        //     // this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesn\'t exist'));
        // }, (error) => {
        //     // handle error
        // });
    };
    FurnitureIdeassharePage.prototype.ionViewDidLoad = function () {
        this.upload_url = this.constn.upload_url;
        console.log('ionViewDidLoad FurnitureIdeassharePage');
    };
    FurnitureIdeassharePage.prototype.share = function (image) {
        var _this = this;
        this.presentLoading();
        this.socialShar.share("", "", this.upload_url + image, "")
            .then(function (resp) {
            console.log(resp);
            _this.loading.dismiss();
        }).catch(function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    FurnitureIdeassharePage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    FurnitureIdeassharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-furniture-ideasshare',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/furniture-ideasshare/furniture-ideasshare.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{data.category}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content style="background: #000;">\n    <div class="slide-image">\n        <ion-slides [initialSlide]="index" paginationType="progress" loop="true" zoom="true">\n            <ion-slide *ngFor="let row of image_list; let i=index">\n                <div class="swiper-zoom-container">\n                    <img [src]="upload_url+row.image_name">\n                </div>\n                <div class="two-fields">\n                    <a (click)="share(row.image_name)">Share</a>\n                    <!-- <a target="_parent" href="{{upload_url+row.image_name}}">Download</a> -->\n                    <a (click)="download(row.image_name,upload_url+row.image_name)">Download</a>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/furniture-ideasshare/furniture-ideasshare.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
    ], FurnitureIdeassharePage);
    return FurnitureIdeassharePage;
}());

//# sourceMappingURL=furniture-ideasshare.js.map

/***/ }),
/* 219 */,
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__description_model_description_model__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_product_filter_product__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { ViewProfilePage } from '../view-profile/view-profile';


var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, service, con, loadingCtrl, app, modalCtrl, translate, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.con = con;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.storage = storage;
        this.prod_cat_list = [];
        this.filter = {};
        this.flag = '';
        this.cat_images = [];
        this.lang = '';
        this.tokenInfo = {};
        this.uploadUrl = "";
    }
    ProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
        this.cat_id = this.navParams.get('id');
        console.log(this.cat_id);
        this.get_user_lang();
        this.uploadUrl = this.con.upload_url;
    };
    ProductsPage.prototype.ionViewWillEnter = function () {
        this.getProductCategoryList();
        this.presentLoading();
    };
    ProductsPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    ProductsPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ProductsPage.prototype.goOnProductDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__["a" /* ProductDetailPage */], { 'id': id });
    };
    ProductsPage.prototype.getProductCategoryList = function () {
        var _this = this;
        console.log('catagorylist');
        this.filter.limit = 0;
        this.service.post_rqst({ 'filter': this.filter, 'category_id': this.cat_id }, 'app_master/categoryList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.prod_cat_list = r['categories'];
        });
    };
    ProductsPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.prod_cat_list.length;
        this.service.post_rqst({ 'filter': this.filter, 'category_id': this.cat_id }, 'app_master/categoryList')
            .subscribe(function (r) {
            console.log(r);
            if (r['categories'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.prod_cat_list = _this.prod_cat_list.concat(r['categories']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    ProductsPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    ProductsPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    ProductsPage.prototype.view_description = function (value, id) {
        console.log(value);
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__description_model_description_model__["a" /* DescriptionModelPage */], { 'description': value, 'id': id });
        contactModal.present();
        console.log('otp');
    };
    ProductsPage.prototype.getProductList = function (search) {
        var _this = this;
        console.log(search);
        this.filter.search = search;
        // this.filter.limit = 0;
        // this.filter.id=id;
        this.service.post_rqst({ 'filter': this.filter, 'category_id': this.cat_id }, 'app_master/categoryList')
            .subscribe(function (r) {
            console.log(r);
            _this.prod_cat_list = r['categories'];
            // this.new_arrival_prod_list=r['category_name'];
        });
    };
    ProductsPage.prototype.gotoProductFilterPage = function (search) {
        console.log("clicked View Products");
        console.log(search);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__filter_product_filter_product__["a" /* FilterProductPage */], { 'search': search });
        // this.filter.type=2;
        // this.service.post_rqst({'filter':search},'app_master/productList').subscribe(r=>{
        //     console.log(r);
        // })
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/products/products.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Sub Category\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="fix" >\n        <div class="search">\n            <ion-searchbar type=\'text\' placeholder="{{\'Search\'}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" \n            (ngModelChange)="getProductList(filter.search)"></ion-searchbar>\n        </div>\n        <!-- <div class="link-btn">\n            <a (click)="gotoProductFilterPage(filter.search)">View Product</a>\n        </div> -->\n    </div>\n    <div class="m16" >\n        <div  class="our-product" (click)="goOnProductDetailPage(list.id)" *ngFor="let list of prod_cat_list; let i=index">\n            <div class="thumbnail">\n                <ion-slides class="cs-slide" pager autoplay="1000" speed="1000" loop="true" *ngIf="list.image && list.image.length>2" >\n                    <ion-slide *ngFor="let image of list.image; let i=index">\n                        <img [src]="uploadUrl+image.image_name">\n                    </ion-slide>\n                </ion-slides>\n                <div >\n                    <img [src]="uploadUrl+list.image[0].image_name" *ngIf=" list.image.length==1">\n                    <img src="assets/imgs/default-image.png" *ngIf="!list.image.length">\n                </div>\n            </div>\n            \n            <div class="product-footer" (click)="goOnProductDetailPage(list.id)">\n                <p>{{list.category_name |titlecase}}</p>\n            </div>\n        </div>\n    </div>\n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n        <ion-infinite-scroll-content\n        loadingSpinner="bubbles"\n        loadingText="{{\'Loading more data...\' | translate}}">\n    </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/products/products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionModelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ViewProfilePage } from '../view-profile/view-profile';


var DescriptionModelPage = /** @class */ (function () {
    function DescriptionModelPage(navCtrl, navParams, loadingCtrl, viewCtrl, translate, storage, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.storage = storage;
        this.service = service;
        this.description = '';
        this.description_id = '';
        this.lang = '';
        this.tokenInfo = {};
    }
    DescriptionModelPage.prototype.ionViewDidLoad = function () {
        this.description = this.navParams.get('description');
        console.log(this.description);
        this.description_id = this.navParams.get('id');
        console.log(this.description_id);
        this.get_user_lang();
    };
    DescriptionModelPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    DescriptionModelPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    DescriptionModelPage.prototype.ionViewDidLeave = function () {
        console.log('leave');
    };
    DescriptionModelPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    DescriptionModelPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    DescriptionModelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-description-model',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/description-model/description-model.html"*/'\n\n<ion-content padding class="popup-modal" style="background: rgba(0, 0, 0, 0.5);">\n  \n  <div class="modal-center">\n    <!-- <div class="modal-body">\n      <div class="heading">\n        Description\n        <a (click)="dismiss()" class="close"><i class="material-icons">clear</i></a>	\n      </div>\n      <p>{{description}}</p>\n    </div>\n    \n     -->\n    <div class="modal-content in-modal">\n      <h1> {{\'Description\' | translate}}</h1>\n      <a (click)="dismiss()" class="close"><i class="material-icons">clear</i></a>	\n      <p [innerHTML]="description"></p>\n      \n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/description-model/description-model.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], DescriptionModelPage);
    return DescriptionModelPage;
}());

//# sourceMappingURL=description-model.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_subdetail_product_subdetail__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FilterProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterProductPage = /** @class */ (function () {
    function FilterProductPage(navCtrl, navParams, service, con, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.con = con;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.search = '';
        this.filter = {};
        this.upload_url = '';
        this.prod_list = [];
        this.presentLoading();
    }
    FilterProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterProductPage');
        this.search = this.navParams.get('search');
        console.log(this.search);
        this.upload_url = this.con.upload_url;
        this.filterProduct();
    };
    FilterProductPage.prototype.filterProduct = function () {
        var _this = this;
        console.log("Api called");
        this.filter.search = this.search;
        if (this.search != undefined) {
            this.service.post_rqst({ 'filter': this.filter }, 'app_master/searchList').subscribe(function (r) {
                console.log(r);
                _this.prod_list = r['products'];
                _this.loading.dismiss();
            });
        }
        else {
            this.loading.dismiss();
        }
    };
    FilterProductPage.prototype.goOnProductSubDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_subdetail_product_subdetail__["a" /* ProductSubdetailPage */], { 'id': id });
    };
    FilterProductPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    FilterProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter-product',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/filter-product/filter-product.html"*/'<!--\n  Generated template for the FilterProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Searched Product List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="image-detail" *ngIf="search==undefined">\n    <img src="assets/imgs/no_found.svg">\n  </div>\n  <div *ngIf="search!=\'\'">\n    <div class="pr-list" (click)="goOnProductSubDetailPage(list.id)" *ngFor="let list of prod_list;let i=index">\n      <button ion-item>\n    <div class="main-bx">\n      <div class="bx-left">\n        <img src={{upload_url+list.image_name}}>\n      </div>\n      <div class="bx-right">\n        <h2>{{list.product_name |titlecase}}</h2>\n        <h2>Code : {{list.product_code |titlecase}}</h2>\n      </div>\n    </div>  \n    <i class="material-icons">trending_flat</i>\n  </button>\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/filter-product/filter-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], FilterProductPage);
    return FilterProductPage;
}());

//# sourceMappingURL=filter-product.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkingSitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__site_popover_site_popover__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_profile_view_profile__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
* Generated class for the WorkingSitePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var WorkingSitePage = /** @class */ (function () {
    function WorkingSitePage(navCtrl, popoverCtrl, navParams, actionSheetController, translate, camera, db, storage, loadingCtrl, transfer, constant, modalCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.actionSheetController = actionSheetController;
        this.translate = translate;
        this.camera = camera;
        this.db = db;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.constant = constant;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.lang = "en";
        this.data = {};
        this.karigar_id = '';
        this.tokenInfo = {};
        this.formdata = new FormData();
        this.cam = "";
        this.gal = "";
        this.cancl = "";
        this.ok = "";
        this.upl_file = "";
        this.save_succ = "";
        this.image = '';
        this.image_list = [];
        this.inserted_id = '';
        this.delete_array = [];
        this.action = '';
        this.del_per = false;
        this.get_user_lang();
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        console.log(this.db.tokenInfo);
        this.storage.get('token')
            .then(function (resp) {
            console.log(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__(resp));
            var tokendata = __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(resp);
            _this.karigar_id = tokendata.sub;
            _this.get_siteImages();
        });
    }
    WorkingSitePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WorkingSitePage');
        this.translate.get("Camera")
            .subscribe(function (resp) {
            _this.cam = resp;
        });
        this.translate.get("Gallery")
            .subscribe(function (resp) {
            _this.gal = resp;
        });
        this.translate.get("Cancel")
            .subscribe(function (resp) {
            _this.cancl = resp;
        });
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.translate.get("Upload File")
            .subscribe(function (resp) {
            _this.upl_file = resp;
        });
        this.translate.get("Registered Successfully")
            .subscribe(function (resp) {
            _this.save_succ = resp;
        });
    };
    WorkingSitePage.prototype.get_siteImages = function () {
        var _this = this;
        this.presentLoading();
        this.db.post_rqst({ "karigar_id": this.karigar_id }, "app_karigar/get_site_pics")
            .subscribe(function (resp) {
            console.log(resp);
            _this.loading.dismiss();
            _this.image_list = resp['site_image'];
        });
    };
    WorkingSitePage.prototype.open_camera = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Select An Option",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takePhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    WorkingSitePage.prototype.takePhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 800,
            targetHeight: 700
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.image);
            _this.save_picture();
        });
    };
    WorkingSitePage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.image = 'data:image/jpeg;base64,' + imageData;
            _this.formdata.append("image", _this.image);
            console.log(_this.image);
            _this.save_picture();
        });
    };
    WorkingSitePage.prototype.save_picture = function () {
        var _this = this;
        this.db.post_rqst({ "karigar_id": this.karigar_id }, "app_karigar/saveSitePicture")
            .subscribe(function (resp) {
            console.log(resp);
            _this.inserted_id = resp['inserted_id'];
            _this.formdata.append("last_id", _this.inserted_id);
            if (_this.formdata) {
                var loader_1 = _this.loadingCtrl.create({
                    content: "Uploading..."
                });
                loader_1.present();
                var fileTransfer = _this.transfer.create();
                var random = Math.floor(Math.random() * 100);
                var options = {
                    fileKey: 'photo',
                    fileName: "myImage_" + random + ".jpg",
                    chunkedMode: false,
                    mimeType: "image/jpeg",
                };
                fileTransfer.upload(_this.image, _this.constant.rootUrl + 'woking_site_pics?id=' + _this.inserted_id, options)
                    .then(function (data) {
                    console.log(data);
                    loader_1.dismiss();
                    _this.get_siteImages();
                });
            }
        });
    };
    WorkingSitePage.prototype.ngOnInit = function () {
    };
    WorkingSitePage.prototype.filter_array = function (args) {
        var _this = this;
        this.delete_array = [];
        this.image_list.forEach(function (element) {
            console.log(element);
            element.site_images.forEach(function (row) {
                if (args == 'selectAll') {
                    row.checked = true;
                }
                if (args == 'delete') {
                    if (row.checked && row.checked == true) {
                        _this.delete_array.push(row);
                    }
                }
            });
        });
        if (args == 'selectAll') {
            this.del_per = true;
        }
    };
    WorkingSitePage.prototype.presentPopover = function () {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__site_popover_site_popover__["a" /* SitePopoverPage */], {
            data: this.action,
            delete: this.del_per
        });
        popover.present();
        popover.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                _this.action = data;
            }
            console.log(_this.action);
            if (_this.action == 'Select All') {
                _this.filter_array('selectAll');
            }
            if (_this.action == 'Deselect') {
                _this.action = '';
                _this.del_per = false;
            }
            if (_this.action == "Delete") {
                _this.filter_array('delete');
                console.log(_this.image_list);
                console.log(_this.delete_array);
                var updateAlert = _this.alertCtrl.create({
                    title: 'Delete',
                    message: 'Are you sure,want to delete this!',
                    buttons: [
                        {
                            text: 'No',
                            handler: function () {
                                _this.action = 'Select';
                            }
                        },
                        {
                            text: 'Yes',
                            handler: function () {
                                console.log(_this.delete_array);
                                _this.db.post_rqst({ "data": _this.delete_array }, "app_karigar/delete_site_pics")
                                    .subscribe(function (resp) {
                                    console.log(resp);
                                    _this.get_siteImages();
                                });
                            }
                        }
                    ]
                });
                updateAlert.present();
            }
        });
    };
    WorkingSitePage.prototype.viewDetail = function (image) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": image }).present();
    };
    WorkingSitePage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    WorkingSitePage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    WorkingSitePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    WorkingSitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-working-site',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/working-site/working-site.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'Working Site\' | translate}}</ion-title>\n        <div class="header-icons">\n            <button *ngIf="image_list.length > 0" ion-button class="cs-hdr-icons mr5" (click)="presentPopover()">\n                <i class="material-icons">more_vert</i>\n            </button>\n        </div>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="main-backgroung">\n    <div class="gal-div" *ngFor="let row of image_list">\n        <div class="border-section">\n            <p>{{row.date_created | date:\'d MMM y\'}}</p>\n        </div>\n        <div class="site-gallery">\n            <label *ngFor="let data of row.site_images;let i=index">\n                <div class="st-box" *ngIf="data.image_name">\n                    <img src="{{db.constant.upload_url+data.image_name}}" (click)="action == \'Select\' || action == \'Select All\' ? \'\' : viewDetail(data.image_name)">\n                    \n                    <input *ngIf="action == \'Select\' || action == \'Select All\'" type="checkbox" (click)="del_per = true" name="checked{{i}}" [(ngModel)]="data.checked">\n                    \n                    <a *ngIf="action == \'Select\' || action == \'Select All\'" class="zoom-image" (click)="viewDetail(data.image_name)"><i class="material-icons">zoom_out_map</i></a>\n                </div>\n            </label>\n        </div>\n    </div>\n    <ion-fab class="fab-btn" bottom right edge>\n        <button ion-fab mini (click)="open_camera()"><i class="material-icons">camera_alt</i></button>\n    </ion-fab>\n    \n    <div class="image-detail" *ngIf="image_list.length == 0">\n        <img src="assets/imgs/no_found.svg">\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/working-site/working-site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], WorkingSitePage);
    return WorkingSitePage;
}());

//# sourceMappingURL=working-site.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
* Generated class for the SitePopoverPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var SitePopoverPage = /** @class */ (function () {
    function SitePopoverPage(navCtrl, navParams, popoverCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.action = '';
        this.del_per = '';
    }
    SitePopoverPage.prototype.ionViewDidLoad = function () {
        this.action = this.navParams.get('data');
        this.del_per = this.navParams.get('delete');
        console.log(this.action);
        console.log(this.del_per);
        console.log('ionViewDidLoad SitePopoverPage');
    };
    SitePopoverPage.prototype.select_opt = function (args) {
        this.action = args;
        this.viewCtrl.dismiss(this.action);
    };
    SitePopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-site-popover',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/site-popover/site-popover.html"*/'<ion-content>\n  <div class="Selection-delete">\n    <p *ngIf="!action" (click)="select_opt(\'Select\')">Select</p>\n    <p *ngIf="action && !del_per" (click)="select_opt(\'Select All\')">Select All</p>\n    <p *ngIf="del_per" (click)="select_opt(\'Deselect\')">Deselect</p>\n    <p *ngIf="action && del_per" (click)="select_opt(\'Delete\')">Delete</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/site-popover/site-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], SitePopoverPage);
    return SitePopoverPage;
}());

//# sourceMappingURL=site-popover.js.map

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrivalProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__arrival_detail_arrival_detail__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ArrivalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArrivalProductPage = /** @class */ (function () {
    function ArrivalProductPage(navCtrl, navParams, service, translate, con) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translate = translate;
        this.con = con;
        this.new_arrival_prod_list = [];
        this.upload_url = '';
        this.filter = {};
        this.cat_id = '';
    }
    ArrivalProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArrivalProductPage');
        this.cat_id = this.navParams.get('id');
        console.log(this.cat_id);
        this.get_new_arrival_product();
        // this.getProductList(this.cat_id,'');
        this.upload_url = this.con.upload_url;
    };
    ArrivalProductPage.prototype.get_new_arrival_product = function () {
        var _this = this;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/newArrival')
            .subscribe(function (r) {
            console.log(r);
            _this.new_arrival_prod_list = r['products'];
            console.log(_this.new_arrival_prod_list);
        });
    };
    ArrivalProductPage.prototype.getProductList = function (search) {
        var _this = this;
        console.log(search);
        this.filter.search = search;
        // this.filter.limit = 0;
        // this.filter.id=id;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/newArrival')
            .subscribe(function (r) {
            console.log(r);
            _this.new_arrival_prod_list = r['products'];
            // this.new_arrival_prod_list=r['category_name'];
        });
    };
    ArrivalProductPage.prototype.goOnArrivalProductDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__arrival_detail_arrival_detail__["a" /* ArrivalDetailPage */], { 'id': id });
    };
    ArrivalProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-arrival-product',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/arrival-product/arrival-product.html"*/'<!--\n  Generated template for the ArrivalProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'New Arrival Products\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="fix" >\n      <div class="search">\n          <ion-searchbar type=\'text\' placeholder="{{\'Search\' | translate}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" \n          (ngModelChange)="getProductList(filter.search)"></ion-searchbar>\n      </div>\n  </div>\n  <div class="pr-list"  (click)="goOnArrivalProductDetailPage(list.id)" *ngFor="let list of new_arrival_prod_list;let i=index">\n      <button ion-item>\n    <div class="main-bx">\n      <div class="bx-left">\n        <img src={{upload_url+list.image_name}}>\n      </div>\n      <div class="bx-right">\n        <!-- For Hindi -->\n        <!-- {{lang != \'en\' ? list.hin_product_name : list.product_name |titlecase}} -->\n        <h2>{{list.product_name}}</h2>\n        <h2>{{list.product_code}}</h2>\n\n      </div>\n    </div>  \n    <i class="material-icons">trending_flat</i>\n  </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/arrival-product/arrival-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__["a" /* ConstantProvider */]])
    ], ArrivalProductPage);
    return ArrivalProductPage;
}());

//# sourceMappingURL=arrival-product.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrivalDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ArrivalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArrivalDetailPage = /** @class */ (function () {
    function ArrivalDetailPage(navCtrl, navParams, service, translate, con, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translate = translate;
        this.con = con;
        this.modalCtrl = modalCtrl;
        this.upload_url = "";
        this.arrival_prod_id = '';
        this.arrival_prod_detail = {};
    }
    ArrivalDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArrivalDetailPage');
        this.arrival_prod_id = this.navParams.get('id');
        console.log(this.arrival_prod_id);
        this.getArrivalProductDetail(this.arrival_prod_id);
        this.upload_url = this.con.upload_url;
    };
    ArrivalDetailPage.prototype.getArrivalProductDetail = function (id) {
        var _this = this;
        this.service.post_rqst({ 'product_id': id }, 'app_master/productDetail')
            .subscribe(function (r) {
            console.log(r);
            _this.arrival_prod_detail = r['product'];
            console.log(_this.arrival_prod_detail);
        });
    };
    ArrivalDetailPage.prototype.viewDetail = function (image) {
        console.log("clicked");
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": image }).present();
    };
    ArrivalDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-arrival-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/arrival-detail/arrival-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'New Arrival Product Details\'}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="slide-image h200">\n      <!-- <ion-slides class="cs-slide" *ngIf="arrival_prod_detail.image" [initialSlide]="0" pager autoplay="1000" speed="1000" loop="true">\n          <ion-slide *ngFor="let row of arrival_prod_detail.image; let i=index" (click)="viewDetail(row.image_name)">\n              <div class="swiper-zoom-container">\n                  <img [src]="upload_url+row.image_name">\n              </div>\n          </ion-slide>\n      </ion-slides> -->\n      <div class="swiper-zoom-container" *ngIf="arrival_prod_detail.image">\n        <img [src]="upload_url+arrival_prod_detail.image[0].image_name">\n      </div>\n  </div>\n\n  <div class="pr-about">\n      <h3>Category : {{arrival_prod_detail.category_name}}</h3>\n      <h1>Product: {{arrival_prod_detail.product_name | titlecase}}</h1>\n        <p *ngIf="arrival_prod_detail.desc!=\'\'"><strong>{{\'Description\'}}</strong> : {{arrival_prod_detail.desc}}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/arrival-detail/arrival-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], ArrivalDetailPage);
    return ArrivalDetailPage;
}());

//# sourceMappingURL=arrival-detail.js.map

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offer_product_detail_offer_product_detail__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the OfferProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferProductPage = /** @class */ (function () {
    function OfferProductPage(navCtrl, navParams, service, translate, con) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translate = translate;
        this.con = con;
        this.offer_prod_list = [];
        this.upload_url = '';
        this.filter = {};
    }
    OfferProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfferProductPage');
        this.get_offer_products();
        this.upload_url = this.con.upload_url;
    };
    OfferProductPage.prototype.get_offer_products = function () {
        var _this = this;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/offerProduct')
            .subscribe(function (r) {
            console.log(r);
            _this.offer_prod_list = r['products'];
            console.log(_this.offer_prod_list);
        });
    };
    OfferProductPage.prototype.goOnOfferProductDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offer_product_detail_offer_product_detail__["a" /* OfferProductDetailPage */], { 'id': id });
    };
    OfferProductPage.prototype.getProductList = function (search) {
        var _this = this;
        console.log(search);
        this.filter.search = search;
        // this.filter.limit = 0;
        // this.filter.id=id;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/offerProduct')
            .subscribe(function (r) {
            console.log(r);
            _this.offer_prod_list = r['products'];
            // this.new_arrival_prod_list=r['category_name'];
        });
    };
    OfferProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-product',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/offer-product/offer-product.html"*/'<!--\n  Generated template for the OfferProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'Offer Products\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="fix" >\n      <div class="search">\n          <ion-searchbar type=\'text\' placeholder="{{\'Search\' | translate}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" \n          (ngModelChange)="getProductList(filter.search)"></ion-searchbar>\n      </div>\n  </div>\n  <div class="pr-list"  (click)="goOnOfferProductDetailPage(list.id)" *ngFor="let list of offer_prod_list;let i=index">\n      <button ion-item>\n    <div class="main-bx">\n      <div class="bx-left">\n        <img src={{upload_url+list.image_name}}>\n      </div>\n      <div class="bx-right">\n        <!-- For Hindi -->\n        <!-- {{lang != \'en\' ? list.hin_product_name : list.product_name |titlecase}} -->\n        <h2>{{list.product_name}}</h2>\n        <h2>{{list.product_code}}</h2>\n\n      </div>\n    </div>  \n    <i class="material-icons">trending_flat</i>\n  </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/offer-product/offer-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */]])
    ], OfferProductPage);
    return OfferProductPage;
}());

//# sourceMappingURL=offer-product.js.map

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the OfferProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferProductDetailPage = /** @class */ (function () {
    function OfferProductDetailPage(navCtrl, navParams, service, translate, con, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translate = translate;
        this.con = con;
        this.modalCtrl = modalCtrl;
        this.offer_detail_prod_id = '';
        this.upload_url = "";
        this.offer_prod_detail = {};
    }
    OfferProductDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfferProductDetailPage');
        this.offer_detail_prod_id = this.navParams.get('id');
        console.log(this.offer_detail_prod_id);
        this.getOfferProductDetail(this.offer_detail_prod_id);
        this.upload_url = this.con.upload_url;
    };
    OfferProductDetailPage.prototype.getOfferProductDetail = function (id) {
        var _this = this;
        this.service.post_rqst({ 'product_id': id }, 'app_master/productDetail')
            .subscribe(function (r) {
            console.log(r);
            _this.offer_prod_detail = r['product'];
            console.log(_this.offer_prod_detail);
        });
    };
    OfferProductDetailPage.prototype.viewDetail = function (image) {
        console.log("clicked");
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": image }).present();
    };
    OfferProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-product-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/offer-product-detail/offer-product-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'Offer Product Details\'}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div class="slide-image h200">\n    <!-- <ion-slides class="cs-slide" *ngIf="offer_prod_detail.image" [initialSlide]="0" pager autoplay="1000" speed="1000" loop="true">\n      <ion-slide *ngFor="let row of offer_prod_detail.image; let i=index" (click)="viewDetail(row.image_name)">\n        <div class="swiper-zoom-container">\n          <img [src]="upload_url+row.image_name">\n        </div>\n      </ion-slide>\n    </ion-slides> -->\n    <div class="swiper-zoom-container" *ngIf="offer_prod_detail.image">\n      <img [src]="upload_url+offer_prod_detail.image[0].image_name">\n    </div>\n  </div>\n  \n  <div class="pr-about">\n    <h3>Category : {{offer_prod_detail.category_name}}</h3>\n    <h1>Product: {{offer_prod_detail.product_name | titlecase}}</h1>\n    <p *ngIf="offer_prod_detail.desc!=\'\'"><strong>{{\'Description\'}}</strong> : {{offer_prod_detail.desc}}</p>\n    <p>Code : {{offer_prod_detail.product_code}}</p>\n    <p>Price : {{offer_prod_detail.mrp}}</p>\n    <p>Karigar Point : {{offer_prod_detail.karigar_point}}</p>\n    <p>Retailer Point : {{offer_prod_detail.retailer_point}}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/offer-product-detail/offer-product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */]])
    ], OfferProductDetailPage);
    return OfferProductDetailPage;
}());

//# sourceMappingURL=offer-product-detail.js.map

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_detail_product_detail__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
* Generated class for the MainCategoryPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var MainCategoryPage = /** @class */ (function () {
    function MainCategoryPage(navCtrl, navParams, service, loadingCtrl, con, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.con = con;
        this.translate = translate;
        this.prod_cat_list = [];
        this.filter = {};
        this.flag = '';
        this.cat_images = [];
        this.lang = '';
        this.tokenInfo = {};
        this.uploadUrl = "";
        this.presentLoading();
        this.getProductCategoryList();
    }
    MainCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainCategoryPage');
        this.uploadUrl = this.con.upload_url;
    };
    MainCategoryPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    MainCategoryPage.prototype.getProductCategoryList = function () {
        var _this = this;
        console.log('catagorylist');
        this.filter.limit = 0;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/mainCategoryList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            // this.loading.dismiss();
            _this.prod_cat_list = r['categories'];
            _this.id = r['categories'];
            console.log(_this.id);
            for (var i = 0; i < _this.prod_cat_list.length; i++) {
                _this.cat_id = _this.prod_cat_list[i]['id'];
            }
        });
    };
    MainCategoryPage.prototype.getProductList = function (search) {
        var _this = this;
        console.log(search);
        this.filter.search = search;
        this.service.post_rqst({ 'filter': this.filter, 'category_id': this.cat_id }, 'app_master/categoryList')
            .subscribe(function (r) {
            console.log(r);
            _this.prod_cat_list = r['categories'];
        });
    };
    MainCategoryPage.prototype.goOnProductPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_detail_product_detail__["a" /* ProductDetailPage */], { 'id': id });
    };
    MainCategoryPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.prod_cat_list.length;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/mainCategoryList')
            .subscribe(function (r) {
            console.log(r);
            // if(r['products']=='')
            // {
            //     this.flag=1;
            // }
            // else
            // {
            setTimeout(function () {
                _this.prod_cat_list = _this.prod_cat_list.concat(r['categories']);
                console.log('Asyn operation has stop');
                infiniteScroll.complete();
            }, 1000);
            // }
        });
    };
    MainCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-category',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/main-category/main-category.html"*/'\n<ion-header>\n  <ion-navbar>\n      <ion-title>Category</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <div class="fix" >\n      <div class="search">\n          <ion-searchbar type=\'text\' placeholder="{{\'Search\'}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" \n          (ngModelChange)="getProductList(filter.search)"></ion-searchbar>\n          {{filter.search}}\n      </div>\n  </div> -->\n  <div class="m16" >\n      <div  class="our-product" *ngFor="let list of prod_cat_list; let i=index" (click)="goOnProductPage(list.id)">\n          <div class="thumbnail">\n              <!-- <ion-slides class="cs-slide" pager autoplay="1000" speed="1000" loop="true" *ngIf="list.image && list.image.length>2" >\n                  <ion-slide *ngFor="let image of list.image; let i=index">\n                      <img [src]="uploadUrl+image.image_name">\n                  </ion-slide>\n              </ion-slides> -->\n              <!-- *ngIf=" list.image.length==1" -->\n              <div >\n                <img [src]="uploadUrl+list.image[0].image_name" *ngIf=" list.image.length==1">\n                <img src="assets/imgs/default-image.png" *ngIf="!list.image.length">\n            </div>\n          </div>\n          <!-- (click)="goOnProductPage(list.id)" -->\n          <div class="product-footer">\n              <p>{{list.category_name |titlecase}}</p>\n          </div>\n      </div>\n  </div>\n\n  <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n      <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="{{\'Loading more data...\' | translate}}">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/main-category/main-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], MainCategoryPage);
    return MainCategoryPage;
}());

//# sourceMappingURL=main-category.js.map

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceTextPageModule", function() { return AdvanceTextPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advance_text__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AdvanceTextPageModule = /** @class */ (function () {
    function AdvanceTextPageModule() {
    }
    AdvanceTextPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__advance_text__["a" /* AdvanceTextPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__advance_text__["a" /* AdvanceTextPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], AdvanceTextPageModule);
    return AdvanceTextPageModule;
}());

//# sourceMappingURL=advance-text.module.js.map

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrivalDetailPageModule", function() { return ArrivalDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrival_detail__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArrivalDetailPageModule = /** @class */ (function () {
    function ArrivalDetailPageModule() {
    }
    ArrivalDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__arrival_detail__["a" /* ArrivalDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__arrival_detail__["a" /* ArrivalDetailPage */]),
            ],
        })
    ], ArrivalDetailPageModule);
    return ArrivalDetailPageModule;
}());

//# sourceMappingURL=arrival-detail.module.js.map

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrivalProductPageModule", function() { return ArrivalProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__arrival_product__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ArrivalProductPageModule = /** @class */ (function () {
    function ArrivalProductPageModule() {
    }
    ArrivalProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__arrival_product__["a" /* ArrivalProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__arrival_product__["a" /* ArrivalProductPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ArrivalProductPageModule);
    return ArrivalProductPageModule;
}());

//# sourceMappingURL=arrival-product.module.js.map

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelationPolicyPageModule", function() { return CancelationPolicyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancelation_policy__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CancelationPolicyPageModule = /** @class */ (function () {
    function CancelationPolicyPageModule() {
    }
    CancelationPolicyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cancelation_policy__["a" /* CancelationPolicyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cancelation_policy__["a" /* CancelationPolicyPage */]),
            ],
        })
    ], CancelationPolicyPageModule);
    return CancelationPolicyPageModule;
}());

//# sourceMappingURL=cancelation-policy.module.js.map

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelpolicyModalPageModule", function() { return CancelpolicyModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancelpolicy_modal__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var CancelpolicyModalPageModule = /** @class */ (function () {
    function CancelpolicyModalPageModule() {
    }
    CancelpolicyModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cancelpolicy_modal__["a" /* CancelpolicyModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cancelpolicy_modal__["a" /* CancelpolicyModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], CancelpolicyModalPageModule);
    return CancelpolicyModalPageModule;
}());

//# sourceMappingURL=cancelpolicy-modal.module.js.map

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatingPageModule", function() { return ChatingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chating__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatingPageModule = /** @class */ (function () {
    function ChatingPageModule() {
    }
    ChatingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chating__["a" /* ChatingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chating__["a" /* ChatingPage */]),
            ],
        })
    ], ChatingPageModule);
    return ChatingPageModule;
}());

//# sourceMappingURL=chating.module.js.map

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompassPageModule", function() { return CompassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compass__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompassPageModule = /** @class */ (function () {
    function CompassPageModule() {
    }
    CompassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__compass__["a" /* CompassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__compass__["a" /* CompassPage */]),
            ],
        })
    ], CompassPageModule);
    return CompassPageModule;
}());

//# sourceMappingURL=compass.module.js.map

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionModelPageModule", function() { return DescriptionModelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__description_model__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var DescriptionModelPageModule = /** @class */ (function () {
    function DescriptionModelPageModule() {
    }
    DescriptionModelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__description_model__["a" /* DescriptionModelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__description_model__["a" /* DescriptionModelPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], DescriptionModelPageModule);
    return DescriptionModelPageModule;
}());

//# sourceMappingURL=description-model.module.js.map

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqAnswerPageModule", function() { return FaqAnswerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_answer__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var FaqAnswerPageModule = /** @class */ (function () {
    function FaqAnswerPageModule() {
    }
    FaqAnswerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq_answer__["a" /* FaqAnswerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq_answer__["a" /* FaqAnswerPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], FaqAnswerPageModule);
    return FaqAnswerPageModule;
}());

//# sourceMappingURL=faq-answer.module.js.map

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], FaqPageModule);
    return FaqPageModule;
}());

//# sourceMappingURL=faq.module.js.map

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());

//# sourceMappingURL=feedback.module.js.map

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProductPageModule", function() { return FilterProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_product__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterProductPageModule = /** @class */ (function () {
    function FilterProductPageModule() {
    }
    FilterProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter_product__["a" /* FilterProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter_product__["a" /* FilterProductPage */]),
            ],
        })
    ], FilterProductPageModule);
    return FilterProductPageModule;
}());

//# sourceMappingURL=filter-product.module.js.map

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureIdeasPageModule", function() { return FurnitureIdeasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furniture_ideas__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var FurnitureIdeasPageModule = /** @class */ (function () {
    function FurnitureIdeasPageModule() {
    }
    FurnitureIdeasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__furniture_ideas__["a" /* FurnitureIdeasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__furniture_ideas__["a" /* FurnitureIdeasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], FurnitureIdeasPageModule);
    return FurnitureIdeasPageModule;
}());

//# sourceMappingURL=furniture-ideas.module.js.map

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureIdeasdetailPageModule", function() { return FurnitureIdeasdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furniture_ideasdetail__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var FurnitureIdeasdetailPageModule = /** @class */ (function () {
    function FurnitureIdeasdetailPageModule() {
    }
    FurnitureIdeasdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__furniture_ideasdetail__["a" /* FurnitureIdeasdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__furniture_ideasdetail__["a" /* FurnitureIdeasdetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], FurnitureIdeasdetailPageModule);
    return FurnitureIdeasdetailPageModule;
}());

//# sourceMappingURL=furniture-ideasdetail.module.js.map

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureIdeassharePageModule", function() { return FurnitureIdeassharePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furniture_ideasshare__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FurnitureIdeassharePageModule = /** @class */ (function () {
    function FurnitureIdeassharePageModule() {
    }
    FurnitureIdeassharePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__furniture_ideasshare__["a" /* FurnitureIdeassharePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__furniture_ideasshare__["a" /* FurnitureIdeassharePage */]),
            ],
        })
    ], FurnitureIdeassharePageModule);
    return FurnitureIdeassharePageModule;
}());

//# sourceMappingURL=furniture-ideasshare.module.js.map

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftDetailPageModule", function() { return GiftDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gift_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var GiftDetailPageModule = /** @class */ (function () {
    function GiftDetailPageModule() {
    }
    GiftDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gift_detail__["a" /* GiftDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gift_detail__["a" /* GiftDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], GiftDetailPageModule);
    return GiftDetailPageModule;
}());

//# sourceMappingURL=gift-detail.module.js.map

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftListPageModule", function() { return GiftListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gift_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var GiftListPageModule = /** @class */ (function () {
    function GiftListPageModule() {
    }
    GiftListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gift_list__["a" /* GiftListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gift_list__["a" /* GiftListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], GiftListPageModule);
    return GiftListPageModule;
}());

//# sourceMappingURL=gift-list.module.js.map

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLoginPageModule", function() { return MobileLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobile_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var MobileLoginPageModule = /** @class */ (function () {
    function MobileLoginPageModule() {
    }
    MobileLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mobile_login__["a" /* MobileLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mobile_login__["a" /* MobileLoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], MobileLoginPageModule);
    return MobileLoginPageModule;
}());

//# sourceMappingURL=mobile-login.module.js.map

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCategoryPageModule", function() { return MainCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_category__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var MainCategoryPageModule = /** @class */ (function () {
    function MainCategoryPageModule() {
    }
    MainCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_category__["a" /* MainCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main_category__["a" /* MainCategoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], MainCategoryPageModule);
    return MainCategoryPageModule;
}());

//# sourceMappingURL=main-category.module.js.map

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHomePageModule", function() { return MainHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var MainHomePageModule = /** @class */ (function () {
    function MainHomePageModule() {
    }
    MainHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_home__["a" /* MainHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main_home__["a" /* MainHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], MainHomePageModule);
    return MainHomePageModule;
}());

//# sourceMappingURL=main-home.module.js.map

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPageModule", function() { return NewsDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_detail__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var NewsDetailPageModule = /** @class */ (function () {
    function NewsDetailPageModule() {
    }
    NewsDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_detail__["a" /* NewsDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news_detail__["a" /* NewsDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], NewsDetailPageModule);
    return NewsDetailPageModule;
}());

//# sourceMappingURL=news-detail.module.js.map

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], NewsPageModule);
    return NewsPageModule;
}());

//# sourceMappingURL=news.module.js.map

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferListPageModule", function() { return OfferListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_list__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var OfferListPageModule = /** @class */ (function () {
    function OfferListPageModule() {
    }
    OfferListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer_list__["a" /* OfferListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer_list__["a" /* OfferListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], OfferListPageModule);
    return OfferListPageModule;
}());

//# sourceMappingURL=offer-list.module.js.map

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferProductDetailPageModule", function() { return OfferProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_product_detail__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfferProductDetailPageModule = /** @class */ (function () {
    function OfferProductDetailPageModule() {
    }
    OfferProductDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer_product_detail__["a" /* OfferProductDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer_product_detail__["a" /* OfferProductDetailPage */]),
            ],
        })
    ], OfferProductDetailPageModule);
    return OfferProductDetailPageModule;
}());

//# sourceMappingURL=offer-product-detail.module.js.map

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferProductPageModule", function() { return OfferProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_product__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var OfferProductPageModule = /** @class */ (function () {
    function OfferProductPageModule() {
    }
    OfferProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer_product__["a" /* OfferProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer_product__["a" /* OfferProductPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], OfferProductPageModule);
    return OfferProductPageModule;
}());

//# sourceMappingURL=offer-product.module.js.map

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var OffersPageModule = /** @class */ (function () {
    function OffersPageModule() {
    }
    OffersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offers__["a" /* OffersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offers__["a" /* OffersPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], OffersPageModule);
    return OffersPageModule;
}());

//# sourceMappingURL=offers.module.js.map

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointDetailPageModule", function() { return PointDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point_detail__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var PointDetailPageModule = /** @class */ (function () {
    function PointDetailPageModule() {
    }
    PointDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__point_detail__["a" /* PointDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__point_detail__["a" /* PointDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], PointDetailPageModule);
    return PointDetailPageModule;
}());

//# sourceMappingURL=point-detail.module.js.map

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointListPageModule", function() { return PointListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point_list__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var PointListPageModule = /** @class */ (function () {
    function PointListPageModule() {
    }
    PointListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__point_list__["a" /* PointListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__point_list__["a" /* PointListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], PointListPageModule);
    return PointListPageModule;
}());

//# sourceMappingURL=point-list.module.js.map

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());

//# sourceMappingURL=product-detail.module.js.map

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSubdetailPageModule", function() { return ProductSubdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_subdetail__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ProductSubdetailPageModule = /** @class */ (function () {
    function ProductSubdetailPageModule() {
    }
    ProductSubdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_subdetail__["a" /* ProductSubdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_subdetail__["a" /* ProductSubdetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ProductSubdetailPageModule);
    return ProductSubdetailPageModule;
}());

//# sourceMappingURL=product-subdetail.module.js.map

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());

//# sourceMappingURL=products.module.js.map

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditModalPageModule", function() { return ProfileEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_edit_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ProfileEditModalPageModule = /** @class */ (function () {
    function ProfileEditModalPageModule() {
    }
    ProfileEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_edit_modal__["a" /* ProfileEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_edit_modal__["a" /* ProfileEditModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ProfileEditModalPageModule);
    return ProfileEditModalPageModule;
}());

//# sourceMappingURL=profile-edit-modal.module.js.map

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveRemarkModalPageModule", function() { return ReceiveRemarkModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receive_remark_modal__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReceiveRemarkModalPageModule = /** @class */ (function () {
    function ReceiveRemarkModalPageModule() {
    }
    ReceiveRemarkModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__receive_remark_modal__["a" /* ReceiveRemarkModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__receive_remark_modal__["a" /* ReceiveRemarkModalPage */]),
            ],
        })
    ], ReceiveRemarkModalPageModule);
    return ReceiveRemarkModalPageModule;
}());

//# sourceMappingURL=receive-remark-modal.module.js.map

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupanCodePageModule", function() { return CoupanCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coupan_code__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var CoupanCodePageModule = /** @class */ (function () {
    function CoupanCodePageModule() {
    }
    CoupanCodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__coupan_code__["a" /* CoupanCodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__coupan_code__["a" /* CoupanCodePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], CoupanCodePageModule);
    return CoupanCodePageModule;
}());

//# sourceMappingURL=coupan-code.module.js.map

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scan__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScanPageModule = /** @class */ (function () {
    function ScanPageModule() {
    }
    ScanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__scan__["a" /* ScanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scan__["a" /* ScanPage */]),
            ],
        })
    ], ScanPageModule);
    return ScanPageModule;
}());

//# sourceMappingURL=scan.module.js.map

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingDetailPageModule", function() { return ShippingDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipping_detail__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ShippingDetailPageModule = /** @class */ (function () {
    function ShippingDetailPageModule() {
    }
    ShippingDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shipping_detail__["a" /* ShippingDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shipping_detail__["a" /* ShippingDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ShippingDetailPageModule);
    return ShippingDetailPageModule;
}());

//# sourceMappingURL=shipping-detail.module.js.map

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var TermsPageModule = /** @class */ (function () {
    function TermsPageModule() {
    }
    TermsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], TermsPageModule);
    return TermsPageModule;
}());

//# sourceMappingURL=terms.module.js.map

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var TransactionPageModule = /** @class */ (function () {
    function TransactionPageModule() {
    }
    TransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction__["a" /* TransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction__["a" /* TransactionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], TransactionPageModule);
    return TransactionPageModule;
}());

//# sourceMappingURL=transaction.module.js.map

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var VideoPageModule = /** @class */ (function () {
    function VideoPageModule() {
    }
    VideoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], VideoPageModule);
    return VideoPageModule;
}());

//# sourceMappingURL=video.module.js.map

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePageModule", function() { return ViewProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_profile__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pinch_zoom__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViewProfilePageModule = /** @class */ (function () {
    function ViewProfilePageModule() {
    }
    ViewProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_profile__["a" /* ViewProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ngx_pinch_zoom__["a" /* PinchZoomModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_profile__["a" /* ViewProfilePage */]),
            ],
        })
    ], ViewProfilePageModule);
    return ViewProfilePageModule;
}());

//# sourceMappingURL=view-profile.module.js.map

/***/ }),
/* 273 */,
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingSitePageModule", function() { return WorkingSitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__working_site__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var WorkingSitePageModule = /** @class */ (function () {
    function WorkingSitePageModule() {
    }
    WorkingSitePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__working_site__["a" /* WorkingSitePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__working_site__["a" /* WorkingSitePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], WorkingSitePageModule);
    return WorkingSitePageModule;
}());

//# sourceMappingURL=working-site.module.js.map

/***/ }),
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(335);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_success_modal_success_modal_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_section_otp_otp__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_section_registration_registration__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_section_login_screen_login_screen__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_pinch_zoom__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_scane_pages_coupan_code_coupan_code_module__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_scane_pages_scan_scan_module__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_gift_gallery_gift_detail_gift_detail_module__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_gift_gallery_gift_list_gift_list_module__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_offers_offers_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cancelpolicy_modal_cancelpolicy_modal_module__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cancelation_policy_cancelation_policy_module__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_points_point_list_point_list_module__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_points_point_detail_point_detail_module__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_main_home_main_home_module__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_products_products_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_terms_terms_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_advance_text_advance_text_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_product_detail_product_detail_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_product_subdetail_product_subdetail_module__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_transaction_transaction_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_shipping_detail_shipping_detail_module__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_notification_notification_module__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_contact_contact_module__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_video_video_module__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_news_news_module__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_news_detail_news_detail_module__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_feedback_feedback_module__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_chating_chating_module__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_aboutus_modal_aboutus_modal_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_common_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_offer_list_offer_list_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pipes_safe_safe__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_barcode_scanner__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_view_profile_view_profile_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_push__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_description_model_description_model_module__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_receive_remark_modal_receive_remark_modal_module__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_app_version__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ngx_translate_http_loader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_language_language__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_social_sharing__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_compass_compass_module__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_device_orientation__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_working_site_working_site_module__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_site_popover_site_popover__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_furniture_ideas_furniture_ideas_module__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_faq_faq_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_faq_answer_faq_answer_module__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_furniture_ideasdetail_furniture_ideasdetail_module__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_furniture_ideasshare_furniture_ideasshare_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_native_file_transfer__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ionic_native_file__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_login_section_mobile_login_mobile_login_module__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_arrival_product_arrival_product_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_arrival_detail_arrival_detail_module__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_offer_product_offer_product_module__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_offer_product_detail_offer_product_detail_module__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_filter_product_filter_product_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_main_category_main_category_module__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_profile_edit_modal_profile_edit_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_profile_edit_modal_profile_edit_modal_module__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__ionic_native_market__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















































// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'







// import { CompassPage } from '../pages/compass/compass';





















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_55__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_section_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_section_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_section_login_screen_login_screen__["a" /* LoginScreenPage */],
                __WEBPACK_IMPORTED_MODULE_47__pipes_safe_safe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_56__pages_language_language__["a" /* LanguagePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_site_popover_site_popover__["a" /* SitePopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aboutus-modal/aboutus-modal.module#AboutusModalPageModule', name: 'AboutusModalPage', segment: 'aboutus-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advance-text/advance-text.module#AdvanceTextPageModule', name: 'AdvanceTextPage', segment: 'advance-text', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/arrival-detail/arrival-detail.module#ArrivalDetailPageModule', name: 'ArrivalDetailPage', segment: 'arrival-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/arrival-product/arrival-product.module#ArrivalProductPageModule', name: 'ArrivalProductPage', segment: 'arrival-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cancelation-policy/cancelation-policy.module#CancelationPolicyPageModule', name: 'CancelationPolicyPage', segment: 'cancelation-policy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cancelpolicy-modal/cancelpolicy-modal.module#CancelpolicyModalPageModule', name: 'CancelpolicyModalPage', segment: 'cancelpolicy-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chating/chating.module#ChatingPageModule', name: 'ChatingPage', segment: 'chating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compass/compass.module#CompassPageModule', name: 'CompassPage', segment: 'compass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/description-model/description-model.module#DescriptionModelPageModule', name: 'DescriptionModelPage', segment: 'description-model', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq-answer/faq-answer.module#FaqAnswerPageModule', name: 'FaqAnswerPage', segment: 'faq-answer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-product/filter-product.module#FilterProductPageModule', name: 'FilterProductPage', segment: 'filter-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/furniture-ideas/furniture-ideas.module#FurnitureIdeasPageModule', name: 'FurnitureIdeasPage', segment: 'furniture-ideas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/furniture-ideasdetail/furniture-ideasdetail.module#FurnitureIdeasdetailPageModule', name: 'FurnitureIdeasdetailPage', segment: 'furniture-ideasdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/furniture-ideasshare/furniture-ideasshare.module#FurnitureIdeassharePageModule', name: 'FurnitureIdeassharePage', segment: 'furniture-ideasshare', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gift-gallery/gift-detail/gift-detail.module#GiftDetailPageModule', name: 'GiftDetailPage', segment: 'gift-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gift-gallery/gift-list/gift-list.module#GiftListPageModule', name: 'GiftListPage', segment: 'gift-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/language/language.module#LanguagePageModule', name: 'LanguagePage', segment: 'language', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-section/login-screen/login-screen.module#LoginScreenPageModule', name: 'LoginScreenPage', segment: 'login-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-section/mobile-login/mobile-login.module#MobileLoginPageModule', name: 'MobileLoginPage', segment: 'mobile-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-section/otp/otp.module#OtpPageModule', name: 'OtpPage', segment: 'otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-section/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-category/main-category.module#MainCategoryPageModule', name: 'MainCategoryPage', segment: 'main-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-home/main-home.module#MainHomePageModule', name: 'MainHomePage', segment: 'main-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-detail/news-detail.module#NewsDetailPageModule', name: 'NewsDetailPage', segment: 'news-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-list/offer-list.module#OfferListPageModule', name: 'OfferListPage', segment: 'offer-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-product-detail/offer-product-detail.module#OfferProductDetailPageModule', name: 'OfferProductDetailPage', segment: 'offer-product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-product/offer-product.module#OfferProductPageModule', name: 'OfferProductPage', segment: 'offer-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offers/offers.module#OffersPageModule', name: 'OffersPage', segment: 'offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/points/point-detail/point-detail.module#PointDetailPageModule', name: 'PointDetailPage', segment: 'point-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/points/point-list/point-list.module#PointListPageModule', name: 'PointListPage', segment: 'point-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-subdetail/product-subdetail.module#ProductSubdetailPageModule', name: 'ProductSubdetailPage', segment: 'product-subdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-edit-modal/profile-edit-modal.module#ProfileEditModalPageModule', name: 'ProfileEditModalPage', segment: 'profile-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receive-remark-modal/receive-remark-modal.module#ReceiveRemarkModalPageModule', name: 'ReceiveRemarkModalPage', segment: 'receive-remark-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scane-pages/coupan-code/coupan-code.module#CoupanCodePageModule', name: 'CoupanCodePage', segment: 'coupan-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scane-pages/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shipping-detail/shipping-detail.module#ShippingDetailPageModule', name: 'ShippingDetailPage', segment: 'shipping-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/site-popover/site-popover.module#SitePopoverPageModule', name: 'SitePopoverPage', segment: 'site-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/success-modal/success-modal.module#SuccessModalPageModule', name: 'SuccessModalPage', segment: 'success-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction/transaction.module#TransactionPageModule', name: 'TransactionPage', segment: 'transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-profile/view-profile.module#ViewProfilePageModule', name: 'ViewProfilePage', segment: 'view-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/working-site/working-site.module#WorkingSitePageModule', name: 'WorkingSitePage', segment: 'working-site', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__pages_scane_pages_scan_scan_module__["ScanPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_scane_pages_coupan_code_coupan_code_module__["CoupanCodePageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_gift_gallery_gift_detail_gift_detail_module__["GiftDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_gift_gallery_gift_list_gift_list_module__["GiftListPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_offers_offers_module__["OffersPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_cancelpolicy_modal_cancelpolicy_modal_module__["CancelpolicyModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_view_profile_view_profile_module__["ViewProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_cancelation_policy_cancelation_policy_module__["CancelationPolicyPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_points_point_list_point_list_module__["PointListPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_success_modal_success_modal_module__["SuccessModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_points_point_detail_point_detail_module__["PointDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_main_home_main_home_module__["MainHomePageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_products_products_module__["ProductsPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_terms_terms_module__["TermsPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_advance_text_advance_text_module__["AdvanceTextPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_product_detail_product_detail_module__["ProductDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_product_subdetail_product_subdetail_module__["ProductSubdetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_transaction_transaction_module__["TransactionPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_shipping_detail_shipping_detail_module__["ShippingDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_notification_notification_module__["NotificationPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_contact_contact_module__["ContactPageModule"],
                __WEBPACK_IMPORTED_MODULE_58__pages_compass_compass_module__["CompassPageModule"],
                // LanguagePageModule,
                __WEBPACK_IMPORTED_MODULE_34__pages_video_video_module__["VideoPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_news_news_module__["NewsPageModule"],
                __WEBPACK_IMPORTED_MODULE_12_ngx_pinch_zoom__["a" /* PinchZoomModule */],
                __WEBPACK_IMPORTED_MODULE_36__pages_news_detail_news_detail_module__["NewsDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_feedback_feedback_module__["FeedbackPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_chating_chating_module__["ChatingPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_43__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_39__pages_aboutus_modal_aboutus_modal_module__["AboutusModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_46__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_45__pages_offer_list_offer_list_module__["OfferListPageModule"],
                __WEBPACK_IMPORTED_MODULE_51__pages_description_model_description_model_module__["DescriptionModelPageModule"],
                __WEBPACK_IMPORTED_MODULE_52__pages_receive_remark_modal_receive_remark_modal_module__["ReceiveRemarkModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_60__pages_working_site_working_site_module__["WorkingSitePageModule"],
                __WEBPACK_IMPORTED_MODULE_62__pages_furniture_ideas_furniture_ideas_module__["FurnitureIdeasPageModule"],
                __WEBPACK_IMPORTED_MODULE_63__pages_faq_faq_module__["FaqPageModule"],
                __WEBPACK_IMPORTED_MODULE_64__pages_faq_answer_faq_answer_module__["FaqAnswerPageModule"],
                __WEBPACK_IMPORTED_MODULE_69__pages_login_section_mobile_login_mobile_login_module__["MobileLoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_65__pages_furniture_ideasdetail_furniture_ideasdetail_module__["FurnitureIdeasdetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_66__pages_furniture_ideasshare_furniture_ideasshare_module__["FurnitureIdeassharePageModule"],
                __WEBPACK_IMPORTED_MODULE_70__pages_arrival_product_arrival_product_module__["ArrivalProductPageModule"],
                __WEBPACK_IMPORTED_MODULE_71__pages_arrival_detail_arrival_detail_module__["ArrivalDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_72__pages_offer_product_offer_product_module__["OfferProductPageModule"],
                __WEBPACK_IMPORTED_MODULE_73__pages_offer_product_detail_offer_product_detail_module__["OfferProductDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_74__pages_filter_product_filter_product_module__["FilterProductPageModule"],
                __WEBPACK_IMPORTED_MODULE_75__pages_main_category_main_category_module__["MainCategoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_77__pages_profile_edit_modal_profile_edit_modal_module__["ProfileEditModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_54__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_54__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_41__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_section_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_section_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_section_login_screen_login_screen__["a" /* LoginScreenPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_language_language__["a" /* LanguagePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_site_popover_site_popover__["a" /* SitePopoverPage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_profile_edit_modal_profile_edit_modal__["a" /* ProfileEditModalPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_40__providers_dbservice_dbservice__["a" /* DbserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_42__providers_constant_constant__["a" /* ConstantProvider */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_67__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_78__ionic_native_market__["a" /* Market */],
                // InAppBrowser,
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_device_orientation__["a" /* DeviceOrientation */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_67__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_68__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiveRemarkModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { TabsPage } from '../tabs/tabs';

var ReceiveRemarkModalPage = /** @class */ (function () {
    function ReceiveRemarkModalPage(navCtrl, navParams, viewCtrl, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.data = {};
        this.gift_id = '';
    }
    ReceiveRemarkModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReceiveRemarkModalPage');
        this.gift_id = this.navParams.get('gift_id');
    };
    ReceiveRemarkModalPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    ReceiveRemarkModalPage.prototype.submit = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation!',
            subTitle: 'Did you receive this gift?',
            cssClass: 'action-close',
            buttons: [{
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    cssClass: 'close-action-sheet',
                    handler: function () {
                        // console.log(gift_id);
                        _this.service.post_rqst({ 'id': _this.gift_id, 'karigar_id': _this.service.karigar_id, 'remark': _this.data.receiving_remark }, 'app_karigar/redeemReceiveStatus').subscribe(function (r) {
                            console.log(r);
                            // this.navCtrl.setRoot(TabsPage,{index:'3'});
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                            _this.showSuccess('You have receive gift successfully');
                            // this.getTransactionDetail()
                        });
                    }
                }]
        });
        alert.present();
    };
    ReceiveRemarkModalPage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ReceiveRemarkModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receive-remark-modal',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/receive-remark-modal/receive-remark-modal.html"*/'\n<ion-content padding class="popup-modal">\n  <div class="modal-center">\n    <div class="modal-content in-modal">\n      <p>Receiving Remark</p>\n      \n      <div class="input-section">\n        <div class="input-adjust m0">\n          <textarea class="radius-none" type="text" placeholder="Enter Remark" name="receiving_remark"  #receiving_remark="ngModel" [(ngModel)]="data.receiving_remark"  required></textarea>\n        </div>\n      </div>\n      \n      <div class="footer-btn">\n        <button class="outline-btn" (click)="dismiss()">Cancel</button>	\n        <button class="fill-btn" [disabled]="!data.receiving_remark" (click)="submit()">Save</button>\n      </div>	\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/receive-remark-modal/receive-remark-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], ReceiveRemarkModalPage);
    return ReceiveRemarkModalPage;
}());

//# sourceMappingURL=receive-remark-modal.js.map

/***/ }),
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scane_pages_coupan_code_coupan_code__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
* Generated class for the SuccessModalPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var SuccessModalPage = /** @class */ (function () {
    function SuccessModalPage(navCtrl, service, navParams, alertCtrl, viewCtrl, con, barcodeScanner, translate) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.con = con;
        this.barcodeScanner = barcodeScanner;
        this.translate = translate;
        this.karigar_detail = {};
        this.sucessData = {};
        this.uploadUrl = "";
        this.value = '';
        this.testRadioOpen = '';
        this.testRadioResult = '';
        this.qr_count = 0;
        this.qr_limit = 0;
        this.qr_code = '';
        this.coupon_value = '';
        console.log(navCtrl);
        console.log(navParams);
        this.sucessData = navParams.data.data;
        this.uploadUrl = this.con.upload_url;
        console.log('sucees', this.sucessData);
        this.getData();
    }
    SuccessModalPage_1 = SuccessModalPage;
    SuccessModalPage.prototype.getData = function () {
        var _this = this;
        console.log("Check");
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/karigarHome')
            .subscribe(function (r) {
            console.log(r);
            _this.karigar_detail = r['karigar'];
        });
    };
    SuccessModalPage.prototype.showAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    SuccessModalPage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    SuccessModalPage.prototype.dismiss = function () {
        // this.viewCtrl.dismiss();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    SuccessModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuccessModalPage');
    };
    SuccessModalPage.prototype.scan = function () {
        var _this = this;
        if (this.karigar_detail.manual_permission == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__scane_pages_coupan_code_coupan_code__["a" /* CoupanCodePage */]);
        }
        else {
            this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, "app_karigar/get_qr_permission")
                .subscribe(function (resp) {
                console.log(resp);
                _this.qr_count = resp['karigar_daily_count'];
                _this.qr_limit = resp['qr_limit'];
                console.log(_this.qr_count);
                console.log(_this.qr_limit);
                if (parseInt(_this.qr_count) <= parseInt(_this.qr_limit)) {
                    var options = {
                        // prompt : "लैमिनेट शीट के स्टीकर को स्कैन करते समय, लाल रंग की लाइन को बारकोड स्टीकर की सभी लाइनों पर डालें स्कैन न होने पर संपर्क करें। कॉल करें- +91-9773897370"
                        prompt: ""
                    };
                    _this.barcodeScanner.scan(options).then(function (resp) {
                        console.log(resp);
                        _this.qr_code = resp.text;
                        console.log(_this.qr_code);
                        if (resp.text != '') {
                            _this.service.post_rqst({ 'karigar_id': _this.service.karigar_id, 'qr_code': _this.qr_code }, 'app_karigar/karigarCoupon')
                                .subscribe(function (r) {
                                console.log(r);
                                if (r['status'] == 'INVALID') {
                                    _this.translate.get("Invalid Coupon Code")
                                        .subscribe(function (resp) {
                                        _this.showAlert(resp);
                                    });
                                    return;
                                }
                                else if (r['status'] == 'USED') {
                                    _this.translate.get("Coupon Already Used")
                                        .subscribe(function (resp) {
                                        _this.showAlert(resp);
                                    });
                                    return;
                                }
                                else if (r['status'] == 'UNASSIGNED OFFER') {
                                    _this.translate.get("Your Account Under Verification")
                                        .subscribe(function (resp) {
                                        _this.showAlert(resp);
                                    });
                                    return;
                                }
                                else if (r['status'] == 'VALID') {
                                    var productData = void 0;
                                    productData = r['productdetail'];
                                    if (productData.image != '') {
                                        // this.presentCancelPolicyModal(r['productdetail']);
                                        console.log('image Path', _this.sucessData.image);
                                        _this.sucessData.image = productData.image;
                                        console.log('image Path', _this.sucessData.image);
                                        _this.navCtrl.push(SuccessModalPage_1);
                                    }
                                    else {
                                        _this.translate.get("POINTS have been added into your wallet")
                                            .subscribe(function (resp) {
                                            _this.showSuccess(r['coupon_value'] + '' + resp);
                                        });
                                    }
                                }
                                _this.getData();
                            });
                        }
                        else {
                            console.log('not scanned anything');
                        }
                    });
                }
                else {
                    _this.translate.get("You have exceed the daily QR scan limit")
                        .subscribe(function (resp) {
                        _this.showAlert(resp);
                    });
                }
            });
        }
    };
    SuccessModalPage = SuccessModalPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-success-modal',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/success-modal/success-modal.html"*/'\n<ion-content padding style="background-color: #000;">\n  <div class="success">\n    <img [src]="uploadUrl+ sucessData.image">\n  </div>\n</ion-content>\n<ion-footer>\n  <div class="flex-btn">\n    <button ion-button outline color="danger" (click)="dismiss()" >Cancel</button>\n    <button ion-button color="primary" (click)="scan()">Scan agian</button>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/success-modal/success-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], SuccessModalPage);
    return SuccessModalPage;
    var SuccessModalPage_1;
}());

//# sourceMappingURL=success-modal.js.map

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dbservice_dbservice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_aboutus_modal_aboutus_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_language_language__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_market__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// import {Push } from '@ionic-native/push';
// import { MobileLoginPage } from '../pages/login-section/mobile-login/mobile-login';


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, market, splashScreen, modalCtrl, storage, events, constant, app, toastCtrl, service, alertCtrl, app_version, translate) {
        var _this = this;
        this.platform = platform;
        this.market = market;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.events = events;
        this.constant = constant;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.app_version = app_version;
        this.translate = translate;
        this.tokenInfo = '';
        this.lang = 'en';
        this.version = '';
        this.db_app_version = '';
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        // uncomment for logout
        // this.storage.set('token','');
        storage.get('token').then(function (val) {
            if (val == '' || val == null || val == undefined) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_language_language__["a" /* LanguagePage */];
            }
            else if (val) {
                _this.tokenInfo = _this.getDecodedAccessToken(val);
                _this.service.post_rqst({ 'karigar_id': _this.tokenInfo.sub }, 'app_karigar/profile')
                    .subscribe(function (r) {
                    console.log(r);
                    console.log(r['karigar'].user_type);
                    if (r['status'] == "SUCCESS") {
                        _this.service.karigar_info = r['karigar'];
                        if (_this.service.karigar_info.del == '1') {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_language_language__["a" /* LanguagePage */];
                            _this.translate.get('Your Account has been suspended')
                                .subscribe(function (resp) {
                                _this.RequiredAlert(resp);
                            });
                            _this.storage.set('token', '');
                            _this.events.publish('data', '1', Date.now());
                            return;
                        }
                        else if (_this.service.karigar_info.status == 'Verified' || r['karigar'].user_type == 3) {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */];
                            // this.rootPage=TabsPage;
                        }
                        else if (_this.service.karigar_info.status != 'Verified' && (_this.service.karigar_info.status != 'Verified' && r['karigar'].user_type != 3)) {
                            var contactModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_aboutus_modal_aboutus_modal__["a" /* AboutusModalPage */]);
                            contactModal.present();
                            return;
                        }
                    }
                    else {
                        _this.storage.set('token', '');
                        _this.events.publish('data', '1', Date.now());
                        return;
                    }
                });
            }
        });
        events.subscribe('data', function (data) {
            if (data == 1) {
                storage.get('token')
                    .then(function (val) {
                    console.log(val);
                    if (val == '' || val == null || val == undefined) {
                        console.log('if');
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_language_language__["a" /* LanguagePage */]);
                    }
                    else {
                        console.log('else');
                        // this.nav.setRoot(TabsPage);
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]);
                    }
                });
            }
            console.log(data);
        });
        platform.ready().then(function () {
            statusBar.overlaysWebView(false);
            splashScreen.hide();
            statusBar.backgroundColorByHexString('#d71f15');
            _this.get_user_lang();
        });
        platform.registerBackButtonAction(function () {
            var overlayView = _this.app._appRoot._overlayPortal._views[0];
            if (overlayView && overlayView.dismiss) {
                overlayView.dismiss();
                return;
            }
            var nav = app.getActiveNav();
            var activeView = nav.getActive().name;
            console.log(activeView);
            console.log(nav.canGoBack());
            if (activeView == 'HomePage' || activeView == 'MobileLoginPage' || activeView == 'OtpPage') {
                if (_this.constant.backButton == 0) {
                    console.log('hello2');
                    _this.constant.backButton = 1;
                    var toast = _this.toastCtrl.create({
                        message: 'Press again to exit!',
                        duration: 2000
                    });
                    toast.present();
                    setTimeout(function () {
                        _this.constant.backButton = 0;
                    }, 2500);
                }
                else {
                    console.log('hello1');
                    _this.platform.exitApp();
                }
            }
            else if (nav.canGoBack()) {
                console.log('ok');
                nav.pop();
            }
            else if (activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') {
                nav.parent.select(0);
            }
            else if (nav.canGoBack() == false) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Alert!',
                    message: 'Are you sure you want Exit?',
                    buttons: [
                        {
                            text: 'Stay',
                            handler: function () {
                                console.log('Cancel clicked');
                                // this.d.('Action Cancelled!')
                            }
                        },
                        {
                            text: 'Exit',
                            handler: function () {
                                _this.platform.exitApp();
                            }
                        }
                    ]
                });
                alert_1.present();
                // this.platform.exitApp();
            }
            // else 
            // {
            //     this.platform.exitApp();
            // }            
        });
    }
    MyApp.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_8_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    MyApp.prototype.RequiredAlert = function (text) {
        var _this = this;
        this.translate.get("Alert")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    MyApp.prototype.check_version = function () {
        var _this = this;
        this.app_version.getVersionNumber()
            .then(function (resp) {
            console.log(resp);
            _this.version = resp;
            _this.service.post_rqst("", "app_karigar/get_version")
                .subscribe(function (resp) {
                console.log(resp);
                _this.db_app_version = resp.version.ios_version;
                console.log(_this.db_app_version);
                if (_this.version != _this.db_app_version) {
                    _this.translate.get("OK")
                        .subscribe(function (resp) {
                        _this.ok = resp;
                    });
                    _this.translate.get("Update Available")
                        .subscribe(function (resp) {
                        _this.avl_upd = resp;
                    });
                    _this.translate.get('Cancel')
                        .subscribe(function (resp) {
                        _this.cancl = resp;
                    });
                    _this.translate.get('Update Now')
                        .subscribe(function (resp) {
                        _this.upd_now = resp;
                    });
                    _this.translate.get("A newer version of this app is available for download. Please update it from AppStore")
                        .subscribe(function (resp) {
                        var updateAlert = _this.alertCtrl.create({
                            title: _this.avl_upd,
                            message: resp + '!',
                            buttons: [
                                { text: _this.cancl, },
                                { text: _this.upd_now,
                                    handler: function () {
                                        _this.market.open("id6447564116");
                                    }
                                }
                            ]
                        });
                        updateAlert.present();
                    });
                }
            });
        });
    };
    MyApp.prototype.get_user_lang = function () {
        this.check_version();
        // this.storage.get("token")
        // .then(resp=>{
        //     console.log(resp);
        //     this.tokenInfo = this.getDecodedAccessToken(resp );
        //     console.log(this.tokenInfo);
        //     this.service.post_rqst({"login_id":this.tokenInfo.sub},"app_karigar/get_user_lang")
        //     .subscribe(resp=>{
        //         console.log(resp);
        //         this.lang = resp['language'];
        //         this.translate.use(this.lang);                                          
        //         // commented
        //         this.check_version();
        //     })
        // })
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_market__["a" /* Market */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HomePage } from '../home/home';
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        setTimeout(function (resp) {
            _this.closeModel();
        }, 4000);
    }
    AboutPage.prototype.closeModel = function () {
        this.viewCtrl.dismiss();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/about/about.html"*/'<ion-content padding>\n      <div class="main-modal">\n            <div class="modal-box">\n                  <h1 style="margin-bottom: 16px !important;">{{\'Scan Tips\' | translate}}</h1>\n                  <img src="assets/imgs/scan-bar.png" alt="">\n                  <h2 style="margin: 0 !important;font-weight: 500;color: #ff0000;line-height: 24px;">{{\'Hold your phone according to the shown image while scanning the barcode\' | translate}}.</h2>\n                  <div class="modal-cls" (click)="closeModel()">\n                        <i class="material-icons">cancel</i>\n                  </div>\n            </div>\n      </div>	\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginScreenPage = /** @class */ (function () {
    function LoginScreenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginScreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginScreenPage');
    };
    LoginScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-screen',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/login-section/login-screen/login-screen.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>login-screen</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/crystal_app-main/src/pages/login-section/login-screen/login-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], LoginScreenPage);
    return LoginScreenPage;
}());

//# sourceMappingURL=login-screen.js.map

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'safe',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=safe.js.map

/***/ })
],[317]);
//# sourceMappingURL=main.js.map