// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'safeArrayFlattenUtil'
// - Resolved require(79349) to 'safe-array-flatten-util'
// - Renamed variable 'r' to 'commerceCreditConfigChecker'
// - Resolved require(908741) to 'commerce-credit-config-checker'
// - Renamed variable 'a' to 'creditMsgLifecycleSymbol'
// - Resolved require(19652) to 'credit-msg-lifecycle-symbol'
// - Updated imported property 'Z' to 'safeFlattenArray' (module 79349)
// - Updated imported property 'Y' to 'isCreditEnabled' (module 908741)
// - Updated imported property 'b' to 'creditMsgLifecycle' (module 19652)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 463031
         */
module.exports = function (module, exports, require) {
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var commerceCreditConfigChecker = require("commerce-credit-config-checker") /*id: 908741*/;
  var creditMsgLifecycleSymbol = require("credit-msg-lifecycle-symbol") /*id: 19652*/;
  class o {
    processMessageBefore(e, t) {
      return safeArrayFlattenUtil.safeFlattenArray(t.map(e => ({
        ...e,
        extraExt: {
          ...e.extraExt,
          commerce_credit_config_enable: commerceCreditConfigChecker.isCreditEnabled() ? "1" : "0"
        }
      })));
    }
    beforeMessageSending(e, t) {
      let {
        ext: n
      } = t;
      if (n) {
        Object.assign(n, {
          commerce_credit_config_enable: commerceCreditConfigChecker.isCreditEnabled() ? "1" : "0"
        });
      } else {
        t.ext = {
          commerce_credit_config_enable: commerceCreditConfigChecker.isCreditEnabled() ? "1" : "0"
        };
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = creditMsgLifecycleSymbol.creditMsgLifecycle;
      if ((e = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? n : n + "") in this) {
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
  require.r(exports);
  require.d(exports, {
    CreditMessageLifeCyclePlugin: function () {
      return o;
    }
  });
}