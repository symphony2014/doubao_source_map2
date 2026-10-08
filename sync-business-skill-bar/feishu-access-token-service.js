// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'setIgnoreLoginFlag'
// - Renamed export 'C' to 'getFeishuAccessTokenService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: sync-business-skill-bar.f60693d1.js
         * chunkId: 30411
         * moduleId: 578645
         */
module.exports = function (module, exports, require) {
  let r;
  var dpopTokenGenerator = require("dpop-token-generator") /*id: 218459*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  function u(e, t) {
    if (!e) {
      return true;
    }
    let n = Math.floor(Date.now() / 1000);
    let r = e.expiresTime;
    return r && r - n < e.expiresIn - t;
  }
  function d(e, t) {
    if (!e) {
      return true;
    }
    let n = Math.floor(Date.now() / 1000);
    let r = e == null ? undefined : e.expiredTime;
    return r && r - n < e.expiresIn - t;
  }
  let p = e => e.message === "Network Error";
  let f = e => asyncRetryUtils.retryPromise(async () => {
    try {
      return await e();
    } catch (e) {
      if (p(e)) {
        throw e;
      }
      return null;
    }
  }, 5);
  let h = e => e ? `${e.slice(0, 10)}---${e.slice(e.length - 10, e.length)}` : "";
  let m = e => {
    let {
      accessToken: t,
      dpop: n,
      accessTokenTimeout: r,
      dPoPTimeout: i
    } = e;
    return {
      isAccessTokenExpired: u(t, r),
      accessToken: !!(t == null ? undefined : t.accessToken),
      isDpopExpired: d(n, i),
      dpop: !!(n == null ? undefined : n.dpopToken),
      asscessTokenStr: h(t == null ? undefined : t.accessToken),
      dpopStr: h(n == null ? undefined : n.dpopToken),
      dpopExpiredTime: n == null ? undefined : n.expiredTime,
      accessTokenExpiresTime: t == null ? undefined : t.expiresTime
    };
  };
  let g = e => {
    let {
      event: t,
      meta: n = {},
      dpop: r,
      accessToken: i,
      accessTokenTimeout: o,
      dPoPTimeout: a
    } = e;
    let l = m({
      accessToken: i,
      dpop: r,
      accessTokenTimeout: o,
      dPoPTimeout: a
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: t,
      meta: {
        ...l,
        ...n
      }
    });
  };
  function v(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class y {
    setAccessTokenRefreshTimer() {
      this.clearAccessTokenRefreshTimer();
      this.accessTokenRefreshTimer = setTimeout(() => {
        this.refreshAccessToken();
      }, this.accessTokenRefreshDuration * 1000);
    }
    clearAccessTokenRefreshTimer() {
      if (this.accessTokenRefreshTimer) {
        clearTimeout(this.accessTokenRefreshTimer);
        this.accessTokenRefreshTimer = null;
      }
    }
    clearDPoPRefreshTimer() {
      if (this.dpopTokenRefreshTimer) {
        clearTimeout(this.dpopTokenRefreshTimer);
        this.dpopTokenRefreshTimer = null;
      }
    }
    setDPoPTokenRefreshTimer() {
      this.clearDPoPRefreshTimer();
      this.dpopTokenRefreshTimer = setTimeout(() => {
        this.refreshDPoP();
      }, this.dPoPTimeout * 1000);
    }
    async refreshDPoP() {
      let e;
      if (this.refreshDPoPTask) {
        return this.refreshDPoPTask;
      }
      if (!this.passinGetDPoP) {
        let e = Error("AccessTokenService getDPoP is undefined");
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "access_token_refresh_dpop_error",
          error: e
        });
        throw e;
      }
      this.refreshDPoPTask = new Promise(t => e = t);
      this.clearDPoPRefreshTimer();
      let t = null;
      try {
        t = await this.passinGetDPoP();
      } catch (t) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "access_token_get_dpop_error",
          error: t instanceof Error ? t : Error(String(t))
        });
        if (e != null) {
          e(null);
        }
        this.refreshDPoPTask = null;
        return null;
      }
      this.setDPoP(t);
      this.setDPoPTokenRefreshTimer();
      if (e != null) {
        e(t);
      }
      this.refreshDPoPTask = null;
      return t;
    }
    async getDPoP() {
      if (d(this.dpop, this.dPoPTimeout)) {
        return this.refreshDPoP();
      } else {
        return this.dpop;
      }
    }
    setDPoP(e) {
      if (this.dpop?.dpopToken !== (e == null ? undefined : e.dpopToken)) {
        this.dpop = e;
        setTimeout(() => {
          this.triggerSubscribers();
        }, 0);
      }
    }
    async refreshAccessToken() {
      let i;
      if (this.refreshAccessTokenTask) {
        return this.refreshAccessTokenTask;
      }
      this.setAccessTokenRefreshTimer();
      if (!this.passinFetchAccessToken || !this.passinGetDPoP) {
        let e = Error("AccessTokenService fetcher is undefined");
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "access_token_refresh_token_error",
          error: e,
          meta: {
            passinFetchAccessToken: !!this.passinFetchAccessToken,
            passinGetDPoP: !!this.passinGetDPoP
          }
        });
        throw e;
      }
      this.refreshAccessTokenTask = new Promise(e => i = e);
      await this.refreshDPoP();
      let o = Date.now();
      let a = null;
      try {
        a = await f(() => {
          return this.passinFetchAccessToken(this.dpop?.dpopToken);
        });
      } catch (n) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "access_token_fetch_token_error",
          error: n instanceof Error ? n : Error(String(n)),
          meta: {
            dpopExpiredTime: this.dpop?.expiredTime || "",
            dpopExpiresIn: this.dpop?.expiresIn || ""
          }
        });
        if (i != null) {
          i(null);
        }
        return null;
      } finally {
        this.refreshAccessTokenTask = null;
      }
      if (a === null) {
        if (i != null) {
          i(null);
        }
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "access_token_fetch_token_error",
          error: Error("access token is null"),
          meta: {
            dpopExpiredTime: this.dpop?.expiredTime || "",
            dpopExpiresIn: this.dpop?.expiresIn || ""
          }
        });
        return null;
      } else {
        if (a.accessToken && a.expiresIn) {
          a.expiresTime = Math.floor(Date.now() / 1000) + a.expiresIn;
          this.setAccessToken(a);
        }
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "access_token_fetch_token_finish",
          meta: {
            duration: Date.now() - o,
            expired: a.expiresTime,
            expiresIn: a.expiresIn,
            accessTokenTimeout: this.accessTokenTimeout,
            accessToken: !!a.accessToken
          }
        });
        if (i != null) {
          i(a);
        }
        return a;
      }
    }
    async getAccessToken() {
      if (u(this.accessToken, this.accessTokenTimeout)) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "access_token_expired_refresh",
          meta: {
            expired: this.accessToken?.expiresTime || "",
            expiresIn: this.accessToken?.expiresIn || "",
            accessTokenTimeout: this.accessTokenTimeout
          }
        });
        return this.refreshAccessToken();
      }
      return this.accessToken;
    }
    setAccessToken(e) {
      if (this.accessToken?.accessToken !== (e == null ? undefined : e.accessToken)) {
        this.accessToken = e;
        setTimeout(() => {
          this.triggerSubscribers();
        }, 0);
      }
    }
    clearCache() {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "access_token_clear_cache"
      });
      this.setAccessToken(null);
      this.setDPoP(null);
      this.clearRefreshTimer();
      this.subscribers.clear();
    }
    clearRefreshTimer() {
      this.clearAccessTokenRefreshTimer();
      this.clearDPoPRefreshTimer();
    }
    onPageUnload() {
      if (typeof window != "undefined") {
        window.addEventListener("beforeunload", () => {
          this.clearCache();
        });
      }
    }
    onPageVisible() {
      if (typeof window == "undefined") {
        return;
      }
      let e = async () => {
        if (document.visibilityState === "visible") {
          await this.getAccessTokenAsync("visible");
        }
      };
      window.addEventListener("visibilitychange", e);
      window.addEventListener("beforeunload", () => {
        window.removeEventListener("visibilitychange", e);
      });
    }
    async triggerSubscribers() {
      if (this.dpop && !this.accessToken || this.subscribers.size === 0) {
        return;
      }
      let {
        accessToken: e,
        dpop: t,
        accessTokenOrigin: n,
        dpopOrigin: r
      } = await this.getAccessTokenAsync("subscribe");
      if (!e || !t) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "access_token_subscribe_error",
          meta: m({
            dpop: r ?? null,
            accessToken: n ?? null,
            accessTokenTimeout: this.accessTokenTimeout,
            dPoPTimeout: this.dPoPTimeout
          })
        });
      }
      this.subscribers.forEach(r => {
        r({
          Authorization: `${n == null ? undefined : n.tokenType} ${e}`,
          DPoP: t
        });
      });
    }
    async getAccessTokenAsync(e = "biz") {
      let t = null;
      let n = null;
      try {
        t = await this.getDPoP();
        n = await this.getAccessToken();
      } catch (t) {
        g({
          event: "access_token_getter_fail",
          meta: {
            from: e,
            pos: "getAccessTokenAsync",
            reason: "get accessToken failed",
            error: String(t)
          },
          accessTokenTimeout: this.accessTokenTimeout,
          dPoPTimeout: this.dPoPTimeout,
          dpop: null,
          accessToken: null
        });
        return {};
      }
      if (!n) {
        g({
          event: "access_token_getter_fail",
          meta: {
            from: e,
            pos: "getAccessTokenAsync",
            reason: "accessToken is nothing"
          },
          dpop: t,
          accessToken: n,
          accessTokenTimeout: this.accessTokenTimeout,
          dPoPTimeout: this.dPoPTimeout
        });
        return {};
      }
      let r = {
        accessToken: n.accessToken,
        dpop: t == null ? undefined : t.dpopToken,
        accessTokenOrigin: n,
        dpopOrigin: t || undefined
      };
      this.onPageEventOnce();
      return r;
    }
    async getAuthHeadersAsync() {
      let {
        dpop: e,
        accessToken: t,
        dpopOrigin: n,
        accessTokenOrigin: r
      } = await this.getAccessTokenAsync("auth_header");
      let i = e => {
        g({
          event: "access_token_getter_fail",
          meta: {
            from: "biz",
            pos: "getAuthHeadersAsync",
            reason: e
          },
          dpop: n ?? null,
          accessToken: r ?? null,
          accessTokenTimeout: this.accessTokenTimeout,
          dPoPTimeout: this.dPoPTimeout
        });
      };
      if (!e) {
        i("dpop is nothing");
      }
      if (r) {
        return {
          Authorization: r.tokenType && t ? `${r.tokenType} ${t}` : "",
          ...(e ? {
            DPoP: e
          } : {})
        };
      } else {
        i("accessToken is nothing");
        return {};
      }
    }
    subscribeTokenChange(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "access_token_subscribe"
      });
      let t = Symbol();
      this.subscribers.set(t, e);
      return () => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "access_token_unsubscribe"
        });
        this.subscribers.delete(t);
      };
    }
    triggerUserChanged() {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "access_token_trigger_user_changed"
      });
      this.clearCache();
    }
    constructor({
      getDPoP: e,
      fetchAccessToken: t,
      accessTokenTimeout: n,
      dpopTimeout: r,
      withFetch: i,
      accessTokenRefreshDuration: o
    }) {
      v(this, "refreshAccessTokenTask", null);
      v(this, "refreshDPoPTask", null);
      v(this, "accessToken", null);
      v(this, "dpop", null);
      v(this, "accessTokenRefreshTimer", null);
      v(this, "dpopTokenRefreshTimer", null);
      v(this, "accessTokenTimeout", 0);
      v(this, "accessTokenRefreshDuration", 0);
      v(this, "dPoPTimeout", 0);
      v(this, "subscribers", new Map());
      v(this, "passinGetDPoP", null);
      v(this, "passinFetchAccessToken", null);
      v(this, "onPageEventOnce", onceFunctionFactory.createOnce(() => {
        this.onPageUnload();
        this.onPageVisible();
      }));
      this.passinGetDPoP = e;
      this.passinFetchAccessToken = t;
      this.accessTokenTimeout = n;
      this.accessTokenRefreshDuration = o;
      this.dPoPTimeout = r;
      if (i) {
        this.getAccessTokenAsync("constructor");
      }
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "access_token_constructor",
        meta: {
          getDPoP: !!e,
          fetchAccessToken: !!t,
          accessTokenTimeout: n,
          dpopTimeout: r,
          withFetch: i
        }
      });
    }
  }
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let w = {
    info: function () {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      if (t.some(e => e === "[ServerClock] now,localNow:")) {
        let e = Number(t[4]);
        if (e > 3) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "access_token_get_feishu_dpop_delta",
            meta: {
              delta: e,
              localNow: t[2],
              now: t[6]
            }
          });
        }
      }
    },
    error: function () {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "access_token_get_feishu_dpop_error",
        meta: {
          msg: t.join(" ")
        }
      });
    },
    warn: emptyExportFunction.emptyFunction,
    debug: emptyExportFunction.emptyFunction
  };
  var asyncSkillCryptoUtils = require("async-skill-crypto-utils") /*id: 859863*/;
  var cookieUtils = require("cookie-utils") /*id: 535970*/;
  let T = "feishu_dpop_keypair";
  let _ = () => cookieUtils.getCookie(T);
  let C = async () => {
    if (r) {
      return r;
    }
    let e = _();
    if (e) {
      r = e;
      return e;
    }
    try {
      let e = await asyncSkillCryptoUtils.encryptKeyData();
      r = e;
      cookieUtils.setCookie(T, e, {
        domain: ".doubao.com"
      });
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "access_token_get_keypair_success"
      });
      return e;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "access_token_get_keypair_error",
        error: e instanceof Error ? e : Error(String(e))
      });
    }
  };
  let E = null;
  let P = async () => {
    try {
      let e = await C();
      let t = await dpopTokenGenerator.generateDpopToken({
        logger: w,
        keyPair: e,
        expiresIn: 15
      });
      return {
        dpopToken: t.dpopToken,
        expiresIn: t.expiresIn,
        expiredTime: t.expiredTime
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "access_token_generate_dpop_error",
        error: e instanceof Error ? e : Error(String(e))
      });
      throw e;
    }
  };
  let S = false;
  let $ = () => {
    S = true;
  };
  let j = async e => {
    let t = null;
    let n = async () => {
      if (S) {
        if (t) {
          clearTimeout(t);
        }
        return Promise.resolve("ignore login");
      }
      await userInfoStatusSelectors.waitForUserInfoLoaded();
      if (t) {
        clearTimeout(t);
      }
    };
    await Promise.race([new Promise(e => {
      t = setTimeout(() => {
        e("timeout done");
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "access_token_login_promise_timeout"
        });
      }, 5000);
    }), n()]);
    let r = userInfoStatusSelectors.selectUserInfoSuccess();
    let i = {
      client_id: "cli_a872ee858eae100e",
      client_type: "Lark",
      scope: "internal",
      d_pop: e
    };
    let l = await flowAccountModule.getFlowAccountAsync();
    let c = r ? await l.passportApi.userBizAuth(i) : await l.passportApi.anonymityUserBizAuth(i);
    return {
      accessToken: c.access_token,
      tokenType: c.auth_scheme,
      expiresIn: c.expires_in
    };
  };
  let N = e => typeof window == "undefined" ? null : ((e == null ? undefined : e.useExist) || E || (E = new y({
    getDPoP: P,
    fetchAccessToken: j,
    accessTokenTimeout: 518400,
    accessTokenRefreshDuration: 7200,
    dpopTimeout: 4,
    withFetch: false
  }), loggerServiceCore.defaultLogger.persist.info({
    eventName: "access_token_create_feishu_service"
  })), E);
  require.d(exports, {
    setIgnoreLoginFlag: function () {
      return $;
    },
    getFeishuAccessTokenService: function () {
      return N;
    }
  });
}