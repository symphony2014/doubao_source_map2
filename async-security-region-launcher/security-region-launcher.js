// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Renamed variable 'n' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'o' to 'securityConstants'
// - Resolved require(223264) to 'security-constants'
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// - Updated imported property 'DM' to 'regionRestrictedPaths' (module 223264)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-security-region-launcher.4b3a9755.js
         * chunkId: 4877
         * moduleId: 829508
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var securityConstants = require("security-constants") /*id: 223264*/;
  let u = e => {
    let {
      userSetting: r
    } = e;
    if (r.code === chatErrorCodes.chatErrorCodes.COUNTRY_RESTRICTED) {
      return !location.pathname.includes(securityConstants.regionRestrictedPaths.REGION_RESTRICTED) && (loggerServiceCore.defaultLogger.persist.warning({
        message: "security-region",
        meta: {
          error_code: r == null ? undefined : r.code
        }
      }), true);
    } else {
      return r.code === chatErrorCodes.chatErrorCodes.DOUBAO_REGION_BAN && (loggerServiceCore.defaultLogger.persist.warning({
        message: "security-region",
        meta: {
          error_code: r == null ? undefined : r.code
        }
      }), true);
    }
  };
  class a {
    constructor() {
      var e;
      var r;
      var t;
      e = "onEnter";
      r = (e, r) => {
        var i;
        if (typeof window == "undefined" || !("matches" in e) || r) {
          return;
        }
        let {
          userSetting: n
        } = (i = e.matches) === null || i === undefined ? undefined : i[0]?.data;
        u({
          userSetting: n
        });
      };
      if ((e = typeof (t = function (e, r) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var t = e[Symbol.toPrimitive];
        if (t !== undefined) {
          var i = t.call(e, r || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = r;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    SecurityRegionLauncher: function () {
      return a;
    }
  });
}