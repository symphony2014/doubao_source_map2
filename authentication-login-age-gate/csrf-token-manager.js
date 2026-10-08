// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'csrfTokenKey'
// - Renamed export 'Z' to 'CsrfTokenManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5550.70936565.js
         * chunkId: 5550
         * moduleId: 458659
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var authRedirectUtils = require("auth-redirect-utils") /*id: 241827*/;
  let o = "oauth_token_v2";
  class s {
    async createCsrfToken() {
      let e = uuidGeneratorUtil.generateUuid();
      let t = typeof window != "undefined" ? function (e) {
        try {
          if (/^\d+\.\d+\.\d+\.\d+$/.test(e) || /^[\da-fA-F:]+$/.test(e)) {
            return;
          }
          let t = e.split(".");
          if (t.length <= 1) {
            return;
          }
          return t.slice(-2).join(".");
        } catch (e) {
          return;
        }
      }(window.location.hostname) : undefined;
      return await this.cookie.set(o, e, {
        domain: t
      });
    }
    async getCsrfToken() {
      return await this.cookie.get(o);
    }
    async getCsrfTokenWithCreation() {
      if (!(await this.getCsrfToken())) {
        await this.createCsrfToken();
      }
      return await this.getCsrfToken();
    }
    async checkCsrf(e) {
      if (!e) {
        return {
          result: false
        };
      }
      let t = await this.getCsrfToken();
      return {
        result: e === t,
        csrfToken: t
      };
    }
    constructor() {
      var e;
      var t;
      var r;
      e = "cookie";
      t = authRedirectUtils.authStorage;
      if ((e = typeof (r = function (e, t) {
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
      }(e, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.d(exports, {
    csrfTokenKey: function () {
      return o;
    },
    CsrfTokenManager: function () {
      return s;
    }
  });
}