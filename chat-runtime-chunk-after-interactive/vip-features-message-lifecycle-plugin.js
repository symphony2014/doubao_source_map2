// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'r' to 'vipFeatureConfHook'
// - Resolved require(534257) to 'vip-feature-conf-hook'
// - Renamed variable 'o' to 'vipFeaturesLifecycleSymbol'
// - Resolved require(131328) to 'vip-features-lifecycle-symbol'
// - Updated imported property 'x' to 'useVipFeatureConf' (module 534257)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'S' to 'vipLifecycleSym' (module 131328)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 880430
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var vipFeatureConfHook = require("vip-feature-conf-hook") /*id: 534257*/;
  var vipFeaturesLifecycleSymbol = require("vip-features-lifecycle-symbol") /*id: 131328*/;
  let s = (e, t) => {
    let n = e ? vipFeatureConfHook.useVipFeatureConf.getState().vipFeatureConf[e] : undefined;
    if (n) {
      loggerServiceCore.defaultLogger.persist.info({
        message: `VIP_FEATURE: set vip_feature_conf to conversation_${e}/message_${t.message_id} ext`
      });
      t.ext = t.ext || {};
      t.ext.vip_feature_conf = JSON.stringify(n);
    }
  };
  class l {
    beforeMessageSending(e, t) {
      let {
        conversation_id: n
      } = t;
      s(n, t);
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = vipFeaturesLifecycleSymbol.vipLifecycleSym;
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
    VipFeaturesMessageLifeCyclePlugin: function () {
      return l;
    }
  });
}