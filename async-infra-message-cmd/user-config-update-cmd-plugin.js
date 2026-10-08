// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatRuntimeFeatureConfig'
// - Resolved require(89004) to 'chat-runtime-feature-config'
// - Renamed variable 'r' to 'chatRuntimeFeatureEnums'
// - Resolved require(121421) to 'chat-runtime-feature-enums'
// - Renamed variable 'o' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 's' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'userConfigUpdateSymbol'
// - Resolved require(624648) to 'user-config-update-symbol'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'pL' to 'setFeatureConfig' (module 89004)
// - Updated imported property '_m' to 'ChatRuntimeStatus' (module 121421)
// - Updated imported property 'r' to 'userConfigUpdateSymbol' (module 624648)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 6694
         */
module.exports = function (module, exports, require) {
  var chatRuntimeFeatureConfig = require("chat-runtime-feature-config") /*id: 89004*/;
  var chatRuntimeFeatureEnums = require("chat-runtime-feature-enums") /*id: 121421*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var userConfigUpdateSymbol = require("user-config-update-symbol") /*id: 624648*/;
  class l {
    handleCmd(e) {
      if (e.data.version === "1.0") {
        let {
          conversation_id: n = ""
        } = e.data.data || {};
        loggerServiceCore.defaultLogger.persist.info({
          message: "Cmd: UserConfigUpdate",
          meta: {
            conversation_id: n
          }
        });
        let a = safeJsonUtils.safeParse(e.data.data.ext?.user_config_objects, {});
        chatRuntimeFeatureConfig.setFeatureConfig({
          reason: chatRuntimeFeatureEnums.ChatRuntimeStatus.Notified,
          objects: a
        }, true);
      }
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = userConfigUpdateSymbol.userConfigUpdateSymbol;
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
    UserConfigUpdateMessageCmdPlugin: function () {
      return l;
    }
  });
}