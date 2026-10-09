// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JE' to 'ThirdPlatformError'
// - Renamed export '$k' to 'GoogleAuth'
// - Renamed export 'l0' to 'LineAuth'
// - Renamed export 'qp' to 'ThirdPlatformManager'
// - Renamed export 'xM' to 'AppleAuth'
// - Renamed export 'mi' to 'ThirdPlatformClasses'
// - Renamed export 'cO' to 'BaseThirdPlatform'
// - Renamed export 'Ud' to 'AwemeAuth'
// - Renamed export 'T2' to 'FacebookAuth'
// - Renamed export 'OL' to 'ThirdPlatformConfigError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5550.70936565.js
         * chunkId: 5550
         * moduleId: 678527
         */
module.exports = function (module, exports, require) {
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var csrfTokenManager = require("csrf-token-manager") /*id: 458659*/;
  var applePayErrorClasses = require("apple-pay-error-classes") /*id: 950762*/;
  var authRedirectUtils = require("auth-redirect-utils") /*id: 241827*/;
  function u(e, t, r) {
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
  class d extends Error {}
  class p extends Error {}
  class h {
    get config() {
      if (!this._config) {
        throw Error("BaseThirdPlatform is not initialized");
      }
      return this._config;
    }
    constructor(e) {
      u(this, "cookieService", undefined);
      u(this, "sdkScriptUrl", undefined);
      u(this, "getRedirectUrl", undefined);
      u(this, "platform", undefined);
      u(this, "scriptLoaded", false);
      u(this, "_config", undefined);
      u(this, "loadSDKScript", async () => {
        if (!this.scriptLoaded && this.sdkScriptUrl) {
          try {
            await infraUtilFunctions.loadScriptAsync(this.sdkScriptUrl, {
              timeout: 2000
            });
            this.scriptLoaded = true;
          } catch (e) {
            loggerServiceCore.defaultLogger.error({
              eventName: `fail_to_load_${this.platform}_auth_js`,
              error: e instanceof Error ? e : Error(String(e))
            });
          }
        }
      });
      u(this, "oauth2Redirect", async (e, t) => {
        let r = (await this.getRedirectUrl()) || this.config.redirectUrl;
        if (!r) {
          throw new p();
        }
        authRedirectUtils.executeRedirect(r, e, t);
      });
      u(this, "sdkAuth", undefined);
      u(this, "redirectAuth", undefined);
      u(this, "auth", async e => {
        let {
          oauth2Config: t,
          sdkOnly: r,
          forceRedirect: n = false
        } = e;
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "third_party_auth_start",
          meta: {
            platform: this.platform
          }
        });
        let i = eventReportingService.createEventReporter({
          logger: loggerServiceCore.defaultLogger,
          eventName: "third_party_auth_complete",
          meta: {
            platform: this.platform
          }
        });
        let a = null;
        if (n) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "oauth2_redirect_when_force_redirect",
            meta: {
              platform: this.platform,
              oauth2Config: t
            }
          });
        } else {
          try {
            await this.loadSDKScript();
            let e = await this.sdkAuth();
            i.success({
              meta: {
                from: "sdk"
              }
            });
            return e;
          } catch (e) {
            a = e;
            if (applePayErrorClasses.isUserCanceledError(e)) {
              i.error({
                reason: "cancel"
              });
              throw e;
            }
            if (r) {
              throw e;
            }
            loggerServiceCore.defaultLogger.persist.info({
              eventName: "oauth2_redirect_when_sdk_failed",
              meta: {
                platform: this.platform,
                oauth2Config: t,
                error: e
              }
            });
          }
        }
        await this.redirectAuth({
          ...t,
          csrfToken: await this.cookieService.getCsrfTokenWithCreation()
        }, a);
        if (!authRedirectUtils.isPopupAutoLogin(t.redirectMethod)) {
          return new Promise((e, t) => {
            setTimeout(() => {
              i.error({
                reason: "timeout"
              });
              t(Error("long time no redirect, may be blocked by browser"));
            }, 3000);
          });
        }
      });
      this._config = e;
      this.cookieService = new csrfTokenManager.CsrfTokenManager();
    }
  }
  function f(e, t, r) {
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
  class g extends h {
    constructor(...e) {
      super(...e);
      f(this, "getRedirectUrl", () => Promise.resolve("https://access.line.me/oauth2/v2.1/authorize"));
      f(this, "sdkScriptUrl", null);
      f(this, "platform", "line");
      f(this, "sdkAuth", () => {
        throw new d();
      });
      f(this, "redirectAuth", e => {
        let {
          type: t,
          navigatePath: r = location.pathname,
          extra: n,
          scope: i = "openid profile",
          redirectMethod: o,
          csrfToken: s,
          customThirdOpenRedirectFn: a
        } = e;
        let {
          clientId: l,
          callbackUrl: c
        } = this.config;
        return this.oauth2Redirect({
          client_id: l,
          redirect_uri: c,
          response_type: "code",
          scope: i,
          state: {
            entry: "",
            ...n,
            platform: "line",
            navigatePath: r,
            type: t,
            method: o,
            csrfToken: s
          }
        }, {
          extraParameter: {},
          redirectMethod: o,
          customThirdOpenRedirectFn: a
        });
      });
    }
  }
  function m(e, t, r) {
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
  class y extends h {
    constructor(...e) {
      super(...e);
      m(this, "getRedirectUrl", () => Promise.resolve("https://accounts.google.com/o/oauth2/v2/auth"));
      m(this, "sdkScriptUrl", "https://accounts.google.com/gsi/client");
      m(this, "platform", "google");
      m(this, "sdkAuth", async () => new Promise((e, t) => {
        let {
          clientId: r,
          platformId: n
        } = this.config;
        if (r && n) {
          if (typeof google == "undefined") {
            return t(Error("Google module is not loaded when initialize"));
          } else {
            google.accounts.id.initialize({
              client_id: r,
              callback: t => {
                let {
                  credential: r,
                  select_by: i
                } = t;
                loggerServiceCore.defaultLogger.persist.info({
                  eventName: "google_accounts_callback",
                  meta: {
                    select_by: i
                  }
                });
                e({
                  platform_app_id: n,
                  access_token_secret: r
                });
              }
            });
            google.accounts.id.prompt(e => {
              let r = e.getSkippedReason();
              let n = e.isSkippedMoment() && r === "unknown_reason";
              if (e.isDisplayMoment() && e.isNotDisplayed() || n) {
                return t(Error("Google popup is banned."));
              } else if (e.isSkippedMoment()) {
                return t(new applePayErrorClasses.UserCanceledError());
              } else {
                return undefined;
              }
            });
            return;
          }
        } else {
          return t(Error("google is not abled"));
        }
      }));
      m(this, "redirectAuth", async e => {
        let {
          type: t,
          navigatePath: r = location.pathname,
          extra: n,
          scope: i = "email profile",
          redirectMethod: s,
          csrfToken: a,
          customThirdOpenRedirectFn: l
        } = e;
        let {
          clientId: c,
          callbackUrl: u
        } = this.config;
        if (!c) {
          loggerServiceCore.defaultLogger.warning("google is not abled");
          return;
        }
        return this.oauth2Redirect({
          client_id: c,
          redirect_uri: u,
          response_type: "token",
          scope: i,
          state: {
            ...{
              entry: "",
              ...n
            },
            platform: "google",
            navigatePath: r,
            type: t,
            method: s,
            csrfToken: a
          }
        }, {
          redirectMethod: s,
          customThirdOpenRedirectFn: l
        });
      });
    }
  }
  function b(e, t, r) {
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
  class v extends h {
    constructor(...e) {
      super(...e);
      b(this, "getRedirectUrl", () => Promise.resolve(null));
      b(this, "sdkScriptUrl", "https://connect.facebook.net/en_US/sdk.js");
      b(this, "platform", "facebook");
      b(this, "sdkAuth", async () => {
        let {
          clientId: e,
          platformId: t
        } = this.config;
        return new Promise((r, n) => {
          if (!e || !t) {
            return n(Error("Facebook is not abled"));
          }
          if (typeof FB == "undefined") {
            return n(Error("Facebook module is not loaded when initialize"));
          }
          let i = (e, o) => {
            if (e.status === "connected") {
              let {
                accessToken: n,
                userID: i
              } = e.authResponse;
              r({
                openid: i,
                platform_app_id: t,
                access_token: n
              });
            } else {
              if (!o) {
                return n(new applePayErrorClasses.UserCanceledError());
              }
              FB.login(e => {
                i(e, false);
              });
            }
          };
          FB.init({
            appId: e,
            xfbml: true,
            version: "v18.0"
          });
          FB.getLoginStatus(e => {
            i(e, true);
          });
        });
      });
      b(this, "redirectAuth", e => {
        let {
          type: t,
          navigatePath: r = location.pathname,
          extra: n,
          scope: i = "",
          redirectMethod: o,
          csrfToken: s,
          customThirdOpenRedirectFn: a
        } = e;
        let {
          clientId: l,
          callbackUrl: c
        } = this.config;
        return this.oauth2Redirect({
          client_id: l,
          redirect_uri: c,
          response_type: "",
          scope: i,
          state: {
            ...{
              entry: "",
              ...n
            },
            platform: "facebook",
            navigatePath: r,
            type: t,
            method: o,
            csrfToken: s
          }
        }, {
          redirectMethod: o,
          customThirdOpenRedirectFn: a
        });
      });
    }
  }
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  function w(e, t, r) {
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
  class O extends h {
    constructor(...e) {
      super(...e);
      w(this, "getRedirectUrl", () => Promise.resolve("https://open.douyin.com/platform/oauth/connect"));
      w(this, "sdkScriptUrl", null);
      w(this, "platform", "aweme_v2");
      w(this, "sdkAuth", () => {
        throw new d();
      });
      w(this, "redirectAuth", e => {
        let {
          type: t,
          navigatePath: r = location.pathname,
          scope: n = "user_info,mobile",
          optionalScope: i = "mobile,1",
          extra: o,
          redirectMethod: s,
          csrfToken: a,
          customThirdOpenRedirectFn: l
        } = e;
        let {
          clientId: c,
          callbackUrl: u
        } = this.config;
        let d = {};
        let p = userAgentDeviceDetector.isWeChat() || userAgentDeviceDetector.isLarkUserAgent();
        if (userAgentDeviceDetector.isMobileOrIOS() && !p) {
          d.is_call_app = 1;
        }
        return this.oauth2Redirect({
          client_id: c,
          redirect_uri: u,
          response_type: "code",
          scope: n,
          state: {
            ...{
              entry: "",
              ...o
            },
            platform: "aweme_v2",
            navigatePath: r,
            type: t,
            method: s,
            timestamp: Date.now(),
            csrfToken: a
          },
          ...d
        }, {
          extraParameter: {
            client_key: c,
            optionalScope: i
          },
          redirectMethod: s,
          customThirdOpenRedirectFn: l
        });
      });
    }
  }
  function E(e) {
    this.message = e;
  }
  E.prototype = Error();
  E.prototype.name = "InvalidCharacterError";
  var C = typeof window != "undefined" && window.atob && window.atob.bind(window) || function (e) {
    var t = String(e).replace(/=+$/, "");
    if (t.length % 4 == 1) {
      throw new E("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    var r;
    var n;
    var i = 0;
    var o = 0;
    var s = "";
    for (; n = t.charAt(o++); ~n && (r = i % 4 ? r * 64 + n : n, i++ % 4) && (s += String.fromCharCode(r >> (i * -2 & 6) & 255))) {
      n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
    }
    return s;
  };
  function P(e) {
    this.message = e;
  }
  P.prototype = Error();
  P.prototype.name = "InvalidTokenError";
  function S(e, t) {
    if (typeof e != "string") {
      throw new P("Invalid token specified");
    }
    var r = +((t = t || {}).header !== true);
    try {
      return JSON.parse(function (e) {
        var t;
        var r = e.replace(/-/g, "+").replace(/_/g, "/");
        switch (r.length % 4) {
          case 0:
            break;
          case 2:
            r += "==";
            break;
          case 3:
            r += "=";
            break;
          default:
            throw "Illegal base64url string!";
        }
        try {
          t = r;
          return decodeURIComponent(C(t).replace(/(.)/g, function (e, t) {
            var r = t.charCodeAt(0).toString(16).toUpperCase();
            if (r.length < 2) {
              r = "0" + r;
            }
            return "%" + r;
          }));
        } catch (e) {
          return C(r);
        }
      }(e.split(".")[r]));
    } catch (e) {
      throw new P("Invalid token specified: " + e.message);
    }
  }
  function T(e, t, r) {
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
  class x extends h {
    constructor(...e) {
      super(...e);
      T(this, "sdkScriptUrl", "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js");
      T(this, "getRedirectUrl", () => Promise.resolve("https://appleid.apple.com/auth/authorize"));
      T(this, "initialed", false);
      T(this, "platform", "apple");
      T(this, "constructExtraData", async e => {
        let {
          encryptParams: t
        } = await Promise.all([require.e("passport-auth-sdk") /*id: 23931*/, require.e("empty-placeholder-chunk") /*id: 63181*/]).then(require.bind(require, "account-sdk-passport-core-reexport") /*id: 936610*/);
        let n = "";
        try {
          if (e) {
            let r = S(e);
            n = t({
              json_str: JSON.stringify({
                email: r == null ? undefined : r.email
              })
            }, ["json_str"])?.json_str;
          }
        } catch (t) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "apple_id_token_decode_failed",
            error: t,
            meta: {
              id_token: e
            }
          });
        }
        return n;
      });
      T(this, "sdkAuth", async () => {
        if (!AppleID) {
          throw Error("Apple module is not loaded when initialize");
        }
        let {
          clientId: e,
          platformId: t,
          callbackUrl: r
        } = this.config;
        if (!this.initialed) {
          AppleID.auth.init({
            clientId: e,
            scope: "email",
            redirectURI: r,
            usePopup: true
          });
          this.initialed = true;
        }
        try {
          let e = await AppleID.auth.signIn();
          if (!e) {
            alert("AppleID.auth.signIn return undefined when not use popup");
            throw Error("AppleID.auth.signIn return undefined when not use popup");
          }
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "apple_auth_callback"
          });
          let {
            authorization: {
              code: r,
              id_token: n
            }
          } = e;
          return {
            platform_app_id: t,
            code: r,
            extra_params: {
              extra_data: this.constructExtraData(n),
              mix_mode: 1
            }
          };
        } catch (e) {
          if ((e == null ? undefined : e.error) === "popup_closed_by_user" || (e == null ? undefined : e.error) === "user_cancelled_authorize" || (e == null ? undefined : e.error) === "user_trigger_new_signin_flow") {
            throw new applePayErrorClasses.UserCanceledError({
              appleError: e
            });
          }
          if ((e == null ? undefined : e.error) === "popup_blocked_by_browser") {
            throw new applePayErrorClasses.BlockedByBrowserError({
              appleError: e
            });
          }
          throw e;
        }
      });
      T(this, "redirectAuth", async (e, t) => {
        if (applePayErrorClasses.isBlockedByBrowserError(t)) {
          return;
        }
        let {
          type: r,
          navigatePath: n = location.pathname,
          extra: i,
          scope: o = "",
          redirectMethod: s,
          csrfToken: a,
          customThirdOpenRedirectFn: c
        } = e;
        let {
          clientId: u,
          callbackUrl: d
        } = this.config;
        return this.oauth2Redirect({
          client_id: u,
          redirect_uri: d,
          response_type: "code id_token",
          scope: o,
          state: {
            ...{
              entry: "",
              ...i
            },
            platform: "apple",
            navigatePath: n,
            type: r,
            method: s,
            csrfToken: a
          }
        }, {
          extraParameter: {
            response_mode: "fragment"
          },
          redirectMethod: s,
          customThirdOpenRedirectFn: c
        });
      });
    }
  }
  let N = {
    apple: x,
    aweme_v2: O,
    facebook: v,
    google: y,
    line: g
  };
  class j {
    async getThirdPlatform(e) {
      return Promise.resolve(this.getThirdPlatformSync(e));
    }
    getThirdPlatformSync(e) {
      return this.thirdPlatforms.find(t => t.platform === e);
    }
    thirdPartyAuth(e, t) {
      let n = this.getThirdPlatformSync(e);
      if (!n) {
        throw Error("Not support platform to thirdPartyAuth");
      }
      return n.auth({
        ...t,
        forceRedirect: t.forceRedirect ?? e === "google"
      });
    }
    constructor({
      thirdPlatformConfig: e
    }) {
      var t;
      var r;
      var i;
      r = [];
      if ((t = typeof (i = function (e, t) {
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
      }(t = "thirdPlatforms", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = r;
      }
      this.thirdPlatforms = getOwnKeys.getOwnKeys(e).filter(t => e[t]).map(t => {
        let r = e[t];
        if (r) {
          return new N[t](r);
        } else {
          return null;
        }
      }).filter(Boolean);
    }
  }
  require.d(exports, {
    ThirdPlatformError: function () {
      return d;
    },
    GoogleAuth: function () {
      return y;
    },
    LineAuth: function () {
      return g;
    },
    ThirdPlatformManager: function () {
      return j;
    },
    AppleAuth: function () {
      return x;
    },
    ThirdPlatformClasses: function () {
      return N;
    },
    BaseThirdPlatform: function () {
      return h;
    },
    AwemeAuth: function () {
      return O;
    },
    FacebookAuth: function () {
      return v;
    },
    ThirdPlatformConfigError: function () {
      return p;
    }
  });
}