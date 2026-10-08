// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorEventManager'
// - Resolved require(211398) to 'chat-error-event-manager'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'o' to 'userBanReleaseCmdPlugin'
// - Resolved require(683666) to 'user-ban-release-cmd-plugin'
// - Updated imported property 'M' to 'userBanReleaseCmd' (module 683666)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'l' to 'chatEventEmitter' (module 211398)
// - Updated imported property 'w' to 'chatErrorCodes' (module 211398)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 296760
         */
module.exports = function (module, exports, require) {
  var chatErrorEventManager = require("chat-error-event-manager") /*id: 211398*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var userBanReleaseCmdPlugin = require("user-ban-release-cmd-plugin") /*id: 683666*/;
  function s(e, t, n) {
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
  class a {
    constructor() {
      s(this, "pluginIdentifier", userBanReleaseCmdPlugin.userBanReleaseCmd);
      s(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          var n;
          var s;
          let {
            conversation_id: a
          } = e.data.data || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: UserBanRelease",
            meta: {
              conversation_id: a,
              index: e.data.data.index,
              error: (n = e.data.data) === null || n === undefined ? undefined : n.ext?.err_msg
            }
          });
          chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.USER_BAN_RELEASE, (s = e.data.data) === null || s === undefined ? undefined : s.ext?.err_msg);
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    UserBanReleaseMessageCmdLPlugin: function () {
      return a;
    }
  });
}