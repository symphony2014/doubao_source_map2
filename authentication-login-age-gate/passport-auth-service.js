// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'PassportService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5550.70936565.js
         * chunkId: 5550
         * moduleId: 143666
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var errorHandlingUtilities = require("error-handling-utilities") /*id: 264039*/;
  let h = () => ({
    [errorHandlingUtilities.ErrorCode.ALREADY_BIND_CONFLICT]: {
      content: undefined
    },
    [errorHandlingUtilities.ErrorCode.TARGET_BIND_CONFLICT]: {
      content: undefined
    },
    [errorHandlingUtilities.ErrorCode.PHONE_ALREADY_REGISTERED]: {
      content: i18nTranslationUtils.i18nextTranslate("phone_number_binding_conflict"),
      type: "warning"
    },
    [errorHandlingUtilities.ErrorCode.PHONE_BIND_CONFLICT]: {
      content: i18nTranslationUtils.i18nextTranslate("phone_number_binding_conflict"),
      type: "warning"
    },
    [errorHandlingUtilities.ErrorCode.LAST_PASSPORT]: {
      content: i18nTranslationUtils.i18nextTranslate("unbind_failure_only"),
      type: "warning"
    },
    [errorHandlingUtilities.ErrorCode.DOUBAO_NON_CN_MOBILE_REGISTRY_BAN]: {
      content: i18nTranslationUtils.i18nextTranslate("web_phoneNumber_msg_registerUnsupported_cn"),
      type: "warning"
    },
    [errorHandlingUtilities.ErrorCode.DOUBAO_APPLE_REGISTRY_BAN]: {
      content: i18nTranslationUtils.i18nextTranslate("pc_login_toast_phoneNo_cn"),
      type: "warning"
    },
    [errorHandlingUtilities.ErrorCode.DOUYIN_ACCOUNT_SECONDARY_BLOCKED]: {
      content: i18nTranslationUtils.i18nextTranslate("account_risk_modal_toast_link"),
      type: "warning"
    },
    [errorHandlingUtilities.ErrorCode.AUTH_VERIFY_FAIL]: {
      content: i18nTranslationUtils.i18nextTranslate("account_confirm_toast_notMatch"),
      type: "warning"
    }
  });
  var eventEmitterWrapper = require("event-emitter-wrapper") /*id: 126875*/;
  var errorUtilsAndEnums = require("error-utils-and-enums") /*id: 352461*/;
  let m = {
    isOversea: false,
    appKey: "2094abfcccefaeaffd24c622475fba10",
    isBoe: false,
    region: "cn"
  };
  function y(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class b extends eventEmitterWrapper.EventEmitterWrapper {
    getPassportSDK() {
      return this.createPassportSDK();
    }
    async getEncryptParams() {
      if (!this.encryptParams) {
        await this.createPassportSDK();
      }
      return this.encryptParams;
    }
    async createPassportSDK() {
      if (!this._passportSDK) {
        var e;
        let {
          WebInterfaceSdk: n,
          encryptParams: i
        } = await Promise.all([require.e("passport-auth-sdk") /*id: 23931*/, require.e("empty-placeholder-chunk") /*id: 63181*/]).then(require.bind(require, "account-sdk-passport-core-reexport") /*id: 936610*/);
        let o = (await ((e = this.getGeneralSDKParams) === null || e === undefined ? undefined : e.call(this))) ?? Promise.resolve({});
        this._passportSDK = new n({
          ...m,
          ...this.passinSDKConfig,
          ...o,
          generalParams: o,
          aid: uniParamsManager.uniParamsManager.getParam("aid")
        });
        this.encryptParams = i;
      }
      return this._passportSDK;
    }
    async passportExceptionWrapper(e) {
      try {
        let t = await e;
        if (errorHandlingUtilities.isErrorMessage(t)) {
          throw errorHandlingUtilities.ApiError.from(t);
        }
        return t;
      } catch (e) {
        if (errorHandlingUtilities.isValidError(e)) {
          throw new errorHandlingUtilities.ApiError(e.error_code, e.description, e);
        }
        throw e;
      }
    }
    async passportServiceWrapper(e, t) {
      let {
        successText: r,
        successEventName: n,
        errorText: o,
        errorEventName: s,
        errorContext: a,
        disableDefaultErrorText: l = false
      } = t;
      try {
        let t = await this.passportExceptionWrapper(e);
        if (r) {
          samanthaToastFactory.toastInstance.success({
            content: r,
            showClose: false
          });
        }
        if (n) {
          loggerServiceCore.defaultLogger.persist.info({
            message: n,
            eventName: n,
            meta: a
          });
        }
        return t;
      } catch (r) {
        if (errorUtilsAndEnums.isSysError(r) || errorHandlingUtilities.isCloseCaptcha(r) || errorUtilsAndEnums.isAppError(r)) {
          throw r;
        }
        if (s) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: s,
            error: r,
            meta: a
          });
        }
        let e = o;
        let t = "error";
        if (errorHandlingUtilities.isApiError(r)) {
          var c;
          let n = (c = r.code) === null || c === undefined ? undefined : c.toString();
          let o = Object.entries(h()).find(e => {
            let [t] = e;
            return t === n;
          });
          if (isNullishCheck.isNil(o)) {
            e = r.description;
          } else {
            e = o[1].content;
            t = o[1].type ?? "error";
          }
        }
        if (l) {
          e = undefined;
        }
        if (e) {
          let r = {
            content: e,
            showClose: false,
            id: String(e)
          };
          if (t === "warning") {
            samanthaToastFactory.toastInstance.warning(r);
          } else {
            samanthaToastFactory.toastInstance.error(r);
          }
        }
        throw r;
      }
    }
    triggerAfterLogout() {
      this.emit("afterLogout");
    }
    async sendCodeInApp(e) {
      let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let {
        type: n
      } = r;
      let a = await this.createPassportSDK();
      let l = await this.getEncryptParams();
      return this.passportServiceWrapper(a.request({
        url: "/passport/mobile/send_code/v1/",
        method: "POST",
        params: l(objectExcludeFilterUtil.filterObjectExclude({
          type: n,
          mix_mode: 1,
          is6Digits: 1
        }, isNullishCheck.isNil), ["type"])
      }), {
        successText: i18nTranslationUtils.i18nextTranslate("verification_code_sent"),
        successEventName: "send_code_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "send_code_error",
        errorContext: {
          type: n,
          country_code: e.split(" ")?.[0],
          account: `${e.slice(0, e.length - 3)}***`
        }
      });
    }
    async sendCode(e) {
      let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let {
        type: n
      } = r;
      let a = await this.createPassportSDK();
      return this.passportServiceWrapper(a.login.sendCode({
        mobile: e,
        registerOnly: false,
        extra_params: objectExcludeFilterUtil.filterObjectExclude({
          type: n,
          mix_mode: 1,
          is6Digits: 1
        }, isNullishCheck.isNil)
      }), {
        successText: i18nTranslationUtils.i18nextTranslate("verification_code_sent"),
        successEventName: "send_code_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "send_code_error",
        errorContext: {
          type: n,
          country_code: e.split(" ")?.[0],
          account: `${e.slice(0, e.length - 3)}***`
        }
      });
    }
    async _smsLogin(e, t, r) {
      let n = await this.createPassportSDK();
      return await this.passportExceptionWrapper(n.login.smsLogin({
        mobile: e,
        code: t,
        login_only: false
      }));
    }
    async smsLogin(e, t, r) {
      return this.passportServiceWrapper(this._smsLogin(e, t, r), {
        successEventName: "sms_login_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "sms_login_error",
        errorContext: {
          country_code: e.split(" ")?.[0]
        }
      });
    }
    async _authLogin(e, t, r) {
      let n;
      let i = await this.createPassportSDK();
      return await (n = e.profile_key, this.passportExceptionWrapper(i.login.authLogin({
        ...e,
        profile_key: n,
        login_only: false
      })));
    }
    authLogin(e, t = {}) {
      let {
        showError: r = true,
        platform: n,
        ageGateDisplayScene: i
      } = t;
      return this.passportServiceWrapper(this._authLogin(e, n, i), {
        successEventName: "auth_login_success",
        errorText: r ? i18nTranslationUtils.i18nextTranslate("log_in_internet_error") : undefined,
        errorEventName: "auth_login_error",
        errorContext: {
          platform: n
        }
      });
    }
    async bindWithMobileLogin(e, t) {
      let r = {
        ...e,
        platform_app_id: e.platformAppId,
        need_mobile: e.needMobile,
        check_mobile: e.checkMobile,
        change_bind: e.changeBind,
        access_token: e.accessToken
      };
      let n = await this.createPassportSDK();
      return this.passportServiceWrapper(n.request({
        url: "/passport/web/auth/bind_with_mobile_login/",
        method: "POST",
        data: r
      }), {
        successEventName: "bind_with_mobile_login_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "bind_with_mobile_login_error",
        disableDefaultErrorText: t == null ? undefined : t.disableDefaultErrorText,
        errorContext: {
          platform: e.platform
        }
      });
    }
    async _checkLogin() {
      return (await this.createPassportSDK()).login.checkLogin({});
    }
    async checkLogin() {
      return this.passportServiceWrapper(this._checkLogin(), {
        successEventName: "check_login_success",
        errorEventName: "check_login_error",
        disableDefaultErrorText: true
      });
    }
    async userCheck() {
      let e = await this.createPassportSDK();
      return this.passportServiceWrapper(e.request({
        url: "/passport/cancel/user_check/",
        method: "POST"
      }), {
        successEventName: "user_check_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "user_check_error"
      });
    }
    async validateCode(e) {
      let t = await this.createPassportSDK();
      return this.passportServiceWrapper(t.password.validateMobile({
        code: e
      }), {
        successEventName: "validate_code_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "validate_code_failed"
      });
    }
    async validateCodeInApp(e, t) {
      let r = await this.createPassportSDK();
      let n = await this.getEncryptParams();
      return this.passportServiceWrapper(r.request({
        url: "/passport/mobile/validate_code",
        method: "POST",
        data: n({
          type: t,
          code: e,
          mix_mode: 1
        }, ["type", "code"])
      }), {
        successEventName: "validate_code_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "validate_code_failed"
      });
    }
    async cancelConfirm(e, t, r) {
      let n = await this.createPassportSDK();
      return this.passportServiceWrapper(n.cancel.confirm(objectExcludeFilterUtil.filterObjectExclude({
        value_ticket: t,
        token: e,
        cancel_ticket: r
      }, isNullishCheck.isNil)), {
        successEventName: "cancel_confirm_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "cancel_confirm_error"
      });
    }
    async cancelConfirmInApp(e, t, r) {
      let n = await this.createPassportSDK();
      return this.passportServiceWrapper(n.request({
        url: "/passport/cancel/confirm/",
        method: "POST",
        params: {
          token: e,
          value_ticket: t,
          cancel_ticket: r
        }
      }), {
        successEventName: "cancel_confirm_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "cancel_confirm_error"
      });
    }
    async cancelCheck(e) {
      let t = await this.createPassportSDK();
      return this.passportServiceWrapper(t.cancel.checkIfPass({
        value_ticket: e
      }), {
        successEventName: "cancel_confirm_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "cancel_confirm_error"
      });
    }
    async cancelCheckInApp(e) {
      let t = await this.createPassportSDK();
      return this.passportServiceWrapper(t.request({
        url: "/passport/cancel/check/",
        method: "POST",
        data: {
          value_ticket: e
        }
      }), {
        successEventName: "cancel_confirm_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "cancel_confirm_error"
      });
    }
    async authorize(e) {
      let {
        code: t,
        accessToken: r,
        accessTokenSecret: n,
        platform: i,
        platformAppId: o,
        redirectUri: a
      } = e;
      let l = await this.createPassportSDK();
      return this.passportServiceWrapper(l.request({
        url: "/passport/web/auth/authorize/",
        method: "POST",
        data: {
          code: t,
          access_token: r,
          access_token_secret: n,
          platform: i,
          platform_app_id: o,
          redirect_uri: a
        }
      }), {
        successEventName: "authorize_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "authorize_error",
        errorContext: {
          platform: i
        }
      });
    }
    async authorizeInApp(e) {
      let {
        code: t,
        accessToken: r,
        accessTokenSecret: n,
        platform: i,
        platformAppId: o,
        redirectUri: a
      } = e;
      let l = await this.createPassportSDK();
      return this.passportServiceWrapper(l.request({
        url: "/passport/auth/authorize/",
        method: "POST",
        data: {
          code: t,
          access_token: r,
          access_token_secret: n,
          platform: i,
          platform_app_id: o,
          redirect_uri: a
        }
      }), {
        successEventName: "authorize_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "authorize_error",
        errorContext: {
          platform: i
        }
      });
    }
    async authVerifyInApp(e, t) {
      let {
        platform: r,
        platformAppId: n
      } = e;
      let i = await this.createPassportSDK();
      return this.passportServiceWrapper(i.request({
        url: "/passport/auth/verify/",
        method: "POST",
        params: t,
        data: {
          ...e,
          platform_app_id: n
        }
      }), {
        successEventName: "auth_verify_success",
        errorEventName: "auth_verify_error",
        disableDefaultErrorText: true,
        errorContext: {
          platform: r,
          platformAppId: n
        }
      });
    }
    async logout() {
      let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let {
        navigate: i,
        reason: o,
        trackMeta: c,
        loginRoute: u,
        state: p
      } = r;
      let h = await this.createPassportSDK();
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "logout_start",
        meta: {
          reason: o,
          ...c
        }
      });
      let f = u ?? this.logoutRoute ?? "/";
      let g = (this.logoutBaseRoute ?? "") + f;
      await this.passportServiceWrapper(h.login.logout({
        next: g,
        need_redirect: 0
      }), {
        successEventName: "logout_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "logout_error"
      });
      chatUserInfoActions.clearUserInfo();
      if (!location.search.includes("from_logout=1")) {
        if (i) {
          i(urlParamUtils.mergeUrlParams(f, {
            from_logout: "1"
          }), {
            state: p
          });
        } else {
          location.href = xssContentSanitizer.sanitizeUrl(urlParamUtils.mergeUrlParams(f, {
            from_logout: "1",
            ...p
          }), null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x-$*1wa%0xWjFaR%01ZW1OdFR-WmpNbFo1Wkcxc2FscFRPW*Ra$0%1Nlkw-z$l$1JET1hCaWJWSnNa$%0xT%dNe$Jub*FNM$o2"
          });
        }
      }
      this.emit("afterLogout");
    }
    async authBind(e) {
      let t = await this.createPassportSDK();
      return this.passportServiceWrapper(t.bind.bindAuth({
        ...e,
        access_token: e.accessToken,
        access_token_secret: e.accessTokenSecret,
        platform_app_id: e.platformAppId,
        extra_params: e.extraParams
      }), {
        successEventName: "auth_bind_success",
        errorText: i18nTranslationUtils.i18nextTranslate("bind_failure"),
        errorEventName: "auth_bind_error",
        errorContext: {
          platformAppId: e.platformAppId
        }
      });
    }
    async authUnbind(e) {
      let t = await this.createPassportSDK();
      return this.passportServiceWrapper(t.bind.unbindAuth({
        ...e
      }), {
        successText: i18nTranslationUtils.i18nextTranslate("unbind_success"),
        successEventName: "auth_unbind_success",
        errorText: i18nTranslationUtils.i18nextTranslate("unbind_failure"),
        errorEventName: "auth_unbind_error",
        errorContext: {
          platform: e.platform
        }
      });
    }
    async sendCodeToOldMobile(e) {
      var r;
      let n = await this.createPassportSDK();
      return this.passportServiceWrapper(n.rebind.sendCodeToOldMobile({
        ...e,
        use_bind_mobile: e == null ? undefined : e.useBindMobile,
        extra_params: {
          is6Digits: 1
        }
      }), {
        successText: i18nTranslationUtils.i18nextTranslate("verification_code_sent"),
        successEventName: "send_code_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "send_code_error",
        errorContext: {
          country_code: e == null ? undefined : (r = e.mobile) === null || r === undefined ? undefined : r.split(" ")?.[0],
          type: 22
        }
      });
    }
    async validateOldMobile(e) {
      let t = await this.createPassportSDK();
      return this.passportServiceWrapper(t.rebind.validateOldMobile({
        ...e,
        use_bind_mobile: e.useBindMobile
      }), {
        successEventName: "validate_old_mobile_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "validate_old_mobile_error"
      });
    }
    async sendCodeToNewMobile(e) {
      let r = await this.createPassportSDK();
      return this.passportServiceWrapper(r.rebind.sendCodeToNewMobile({
        ...e,
        old_mobile: e.oldMobile,
        extra_params: {
          is6Digits: 1
        }
      }), {
        successText: i18nTranslationUtils.i18nextTranslate("verification_code_sent"),
        successEventName: "send_code_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "send_code_error",
        errorContext: {
          country_code: e.mobile.split(" ")?.[0],
          type: 20
        }
      });
    }
    async rebindMobile(e) {
      let r = await this.createPassportSDK();
      return this.passportServiceWrapper(r.rebind.rebindMobile({
        ...e,
        kick_other: e.kickOther
      }), {
        successText: i18nTranslationUtils.i18nextTranslate("change_phone_success"),
        successEventName: "rebind_mobile_success",
        errorText: i18nTranslationUtils.i18nextTranslate("change_phone_failure"),
        errorEventName: "rebind_mobile_error",
        errorContext: {
          country_code: e.mobile.split(" ")?.[0]
        }
      });
    }
    async bindSendCode(e) {
      let r = await this.createPassportSDK();
      return this.passportServiceWrapper(r.bind.sendCode({
        ...e,
        unbind_exist: e.unbindExist,
        extra_params: {
          is6Digits: 1
        }
      }), {
        successText: i18nTranslationUtils.i18nextTranslate("verification_code_sent"),
        successEventName: "send_code_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "send_code_error",
        errorContext: {
          country_code: e.mobile.split(" ")?.[0],
          type: 17
        }
      });
    }
    async bindMobile(e) {
      let r = await this.createPassportSDK();
      return this.passportServiceWrapper(r.bind.bindMobile({
        ...e,
        unbind_exist: e.unbindExist
      }), {
        successEventName: "bind_mobile_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "bind_mobile_error",
        errorContext: {
          country_code: e.mobile.split(" ")?.[0]
        }
      });
    }
    async authLoginAutoBindMobile(e, t) {
      if (isNullishCheck.isNil(e.code) && isNullishCheck.isNil(e.access_token) || isNullishCheck.isNil(t)) {
        throw Error("Unexcepted error: code, access_token or platform is undefined");
      }
      let r = null;
      try {
        r = await this.bindWithMobileLogin({
          code: e.code,
          accessToken: e.access_token,
          platformAppId: e.platform_app_id,
          platform: t
        }, {
          disableDefaultErrorText: true
        });
      } catch (o) {
        let i = errorHandlingUtilities.isApiError(o);
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "bindWithMobileLogin_catch",
          error: o,
          meta: {
            isPassportErr: i,
            raw: i ? o.raw : undefined,
            code: i ? o.code : undefined
          }
        });
        if (i && o.raw?.profile_key) {
          r = await this.authLogin({
            profile_key: o.raw.profile_key,
            platform_app_id: e.platform_app_id
          }, {
            showError: false,
            platform: t,
            ageGateDisplayScene: errorUtilsAndEnums.UiTypeEnum.dialog
          });
        } else {
          throw o;
        }
      }
      if (isNullishCheck.isNil(r)) {
        throw Error("Unexcepted error: userInfo is null");
      }
      return r;
    }
    async ticketLogin(e) {
      let {
        biz_ticket: t,
        client_id: r,
        biz_scene: n,
        code_verifier: i
      } = e;
      let o = await this.createPassportSDK();
      return this.passportServiceWrapper(o.request({
        url: "/passport/user/ticket_login/",
        method: "POST",
        data: {
          biz_ticket: t,
          client_id: r,
          biz_scene: n,
          code_verifier: i
        }
      }), {});
    }
    async uploadAvatar(e) {
      let {
        avatar: t
      } = e;
      let r = await this.createPassportSDK();
      return this.passportServiceWrapper(r.user.uploadAvatar({
        avatar: t
      }), {
        successEventName: "upload_avatar_success",
        errorEventName: "upload_avatar_error"
      });
    }
    async getQrcode() {
      let e = await this.createPassportSDK();
      return this.passportServiceWrapper(e.qrcodeLogin.getQrcode({
        next: "https://www.doubao.com"
      }), {
        successEventName: "get_qrcode_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "get_qrcode_error"
      });
    }
    async checkQrconnect(e) {
      let t = await this.createPassportSDK();
      return await this.passportServiceWrapper(t.qrcodeLogin.checkQrconnect({
        next: "https://www.doubao.com",
        token: e
      }), {
        successEventName: "check_qrconnect_success",
        errorText: i18nTranslationUtils.i18nextTranslate("log_in_internet_error"),
        errorEventName: "check_qrconnect_error"
      });
    }
    async userBizAuth(e) {
      let t = await this.createPassportSDK();
      return this.passportServiceWrapper(t.request({
        url: "/passport/user/biz_auth/",
        method: "POST",
        data: e
      }), {});
    }
    async getOAuthCode(e) {
      let {
        client_key: t,
        redirect_uri: r
      } = e;
      let n = await this.createPassportSDK();
      return this.passportServiceWrapper(n.request({
        url: "/passport/open/web/auth/",
        method: "POST",
        data: {
          client_key: t,
          redirect_uri: r,
          scope: "user_info",
          device_platform: "web",
          source: "web",
          response_type: "code",
          aid: uniParamsManager.uniParamsManager.getParam("aid")
        }
      }), {});
    }
    async anonymityUserBizAuth(e) {
      let t = await this.createPassportSDK();
      return this.passportServiceWrapper(t.request({
        url: "/passport/anonymity_user/biz_auth/",
        method: "POST",
        data: e
      }), {});
    }
    async checkLarkAuth(e) {
      let {
        lark_user_id: t,
        lark_tenant_id: r
      } = e;
      let n = await this.createPassportSDK();
      return this.passportServiceWrapper(n.request({
        url: "/passport/flow/lark_user/check/",
        method: "POST",
        data: {
          lark_user_id: t,
          lark_tenant_id: r
        }
      }), {
        successEventName: "check_lark_auth_success",
        errorEventName: "check_lark_auth_error"
      });
    }
    async getDeviceList(e) {
      let {
        need_group_app_id: t,
        need_check_session_login_status: r,
        include_web: n
      } = e;
      let i = await this.createPassportSDK();
      return this.passportServiceWrapper(i.request({
        url: "/passport/safe/login_device/list/",
        method: "POST",
        data: {
          need_group_app_id: t,
          need_check_session_login_status: r,
          include_web: n
        }
      }), {
        successEventName: "get_device_list_success",
        errorEventName: "get_device_list_error"
      });
    }
    async deleteDeviceList(e) {
      let t = await this.createPassportSDK();
      return this.passportServiceWrapper(t.request({
        url: "/passport/safe/login_device/del/",
        method: "POST",
        data: e
      }), {
        successEventName: "del_device_list_success",
        errorEventName: "del_device_list_error"
      });
    }
    async verifyAccount(e) {
      let {
        password: t,
        account: r = "",
        isInDoubao: n = false
      } = e;
      let i = await this.createPassportSDK();
      if (n) {
        return i.request({
          url: "/passport/account/verify/",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            account: r,
            password: t
          }
        });
      } else {
        return i.verify.accountVerify({
          account: r,
          password: t
        });
      }
    }
    constructor(e) {
      super();
      y(this, "_passportSDK", undefined);
      y(this, "ageGate", undefined);
      y(this, "logoutBaseRoute", undefined);
      y(this, "logoutRoute", undefined);
      y(this, "passinSDKConfig", undefined);
      y(this, "getGeneralSDKParams", undefined);
      y(this, "encryptParams", (e, t) => e);
      let {
        logoutBaseRoute: t,
        logoutRoute: r,
        ageGate: n,
        passinSDKConfig: i,
        getGeneralSDKParams: o
      } = e;
      this.logoutBaseRoute = t;
      this.logoutRoute = r;
      this.ageGate = n;
      this.passinSDKConfig = i;
      this.getGeneralSDKParams = o;
    }
  }
  require.d(exports, {
    PassportService: function () {
      return b;
    }
  });
}