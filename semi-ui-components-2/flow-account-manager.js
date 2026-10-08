// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'passportAuthService'
// - Resolved require(143666) to 'passport-auth-service'
// - Renamed variable 'i' to 'thirdPartyAuthPlatforms'
// - Resolved require(678527) to 'third-party-auth-platforms'
// - Renamed variable 'o' to 'csrfTokenManager'
// - Resolved require(458659) to 'csrf-token-manager'
// - Renamed variable 's' to 'ageGateVerificationManager'
// - Resolved require(974394) to 'age-gate-verification-manager'
// - Updated imported property 'A' to 'AgeGateManager' (module 974394)
// - Updated imported property 'A' to 'PassportService' (module 143666)
// - Updated imported property 'qp' to 'ThirdPlatformManager' (module 678527)
// - Updated imported property 'Z' to 'CsrfTokenManager' (module 458659)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5550.70936565.js
         * chunkId: 5550
         * moduleId: 158256
         */
module.exports = function (module, exports, require) {
  var passportAuthService = require("passport-auth-service") /*id: 143666*/;
  var thirdPartyAuthPlatforms = require("third-party-auth-platforms") /*id: 678527*/;
  var csrfTokenManager = require("csrf-token-manager") /*id: 458659*/;
  var ageGateVerificationManager = require("age-gate-verification-manager") /*id: 974394*/;
  function a(e, t, r) {
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
  class l {
    get ageGate() {
      this.ageGateIns ||= new ageGateVerificationManager.AgeGateManager();
      return this.ageGateIns;
    }
    get passportApi() {
      this.passportApiIns ||= new passportAuthService.PassportService({
        ageGate: this.ageGate,
        ...this.passportConfig
      });
      return this.passportApiIns;
    }
    get third() {
      this.thirdIns ||= new thirdPartyAuthPlatforms.ThirdPlatformManager({
        thirdPlatformConfig: this.thirdPlatformConfig
      });
      return this.thirdIns;
    }
    get cookie() {
      this.cookieIns ||= new csrfTokenManager.CsrfTokenManager();
      return this.cookieIns;
    }
    constructor({
      logoutBaseRoute: e,
      logoutRoute: t,
      passportSDKConfig: r,
      thirdPlatformConfig: n,
      getGeneralSDKParams: i
    }) {
      a(this, "passportApiIns", undefined);
      a(this, "ageGateIns", undefined);
      a(this, "thirdIns", undefined);
      a(this, "cookieIns", undefined);
      a(this, "thirdPlatformConfig", undefined);
      a(this, "passportConfig", undefined);
      this.thirdPlatformConfig = n;
      this.passportConfig = {
        logoutBaseRoute: e,
        logoutRoute: t,
        passinSDKConfig: r,
        getGeneralSDKParams: i
      };
    }
  }
  require.r(exports);
  require.d(exports, {
    FlowAccount: function () {
      return l;
    }
  });
}