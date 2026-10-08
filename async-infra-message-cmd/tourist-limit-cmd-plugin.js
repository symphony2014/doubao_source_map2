// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'setGuestThreadLimit'
// - Resolved require(345143) to 'set-guest-thread-limit'
// - Renamed variable 'r' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'o' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 's' to 'chatTouristLimitSymbol'
// - Resolved require(178423) to 'chat-tourist-limit-symbol'
// - Updated imported property 'KF' to 'messageType' (module 292449)
// - Updated imported property 'u' to 'touristLimitSymbol' (module 178423)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'l' to 'setGuestThreadLimit' (module 345143)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 975795
         */
module.exports = function (module, exports, require) {
  var setGuestThreadLimit = require("set-guest-thread-limit") /*id: 345143*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatTouristLimitSymbol = require("chat-tourist-limit-symbol") /*id: 178423*/;
  function a(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
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
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let l = e => e.cmd_type === messagingConstants.messageType.TouristReachThreadLimit ? e.conversation_id || "0" : e.conversation_id;
  class c {
    constructor() {
      a(this, "pluginIdentifier", chatTouristLimitSymbol.touristLimitSymbol);
      a(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let t = l(e.data.data);
          if (!t) {
            loggerServiceCore.defaultLogger.persist.warning({
              message: "Cmd: TouristReachThreadLimit: invalid conversation_id"
            });
            return;
          }
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: TouristReachThreadLimit",
            meta: {
              conversation_id: t
            }
          });
          setGuestThreadLimit.setGuestThreadLimit(true);
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    TouristReachThreadLimitMessageCmdPlugin: function () {
      return c;
    }
  });
}