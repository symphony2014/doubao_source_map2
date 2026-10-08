// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'createChatMessageUpdaterFactory'
// - Resolved require(388719) to 'create-chat-message-updater-factory'
// - Renamed variable 'r' to 'chatMessageUtils_2_1'
// - Resolved require(296060) to 'chat-message-utils_2_1'
// - Renamed variable 'o' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 's' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'l' to 'fixRegenerateCmdPlugin'
// - Resolved require(814395) to 'fix-regenerate-cmd-plugin'
// - Updated imported property 'd' to 'fixRegenCmdPlugin' (module 814395)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'I' to 'createChatMessageUpdater' (module 388719)
// - Updated imported property 'Wi' to 'getMessageGetter' (module 296060)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 451120
         */
module.exports = function (module, exports, require) {
  var createChatMessageUpdaterFactory = require("create-chat-message-updater-factory") /*id: 388719*/;
  var chatMessageUtils_2_1 = require("chat-message-utils_2_1") /*id: 296060*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var fixRegenerateCmdPlugin = require("fix-regenerate-cmd-plugin") /*id: 814395*/;
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
  class c {
    constructor() {
      a(this, "pluginIdentifier", fixRegenerateCmdPlugin.fixRegenCmdPlugin);
      a(this, "handleCmd", e => {
        if (e.data.version === "2.0") {
          let {
            conversation_id: t = "",
            regen_root_id: n = "",
            group_index: l = "1"
          } = e.data.data.fix_regenerate_msg_notify || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: FixRegenerateMessage",
            meta: {
              conversation_id: t,
              regen_root_id: n,
              group_index: l
            }
          });
          createChatMessageUpdaterFactory.createChatMessageUpdater(t)(e => {
            let i = e.draftMessageMap;
            let s = e.draftMessageLinks;
            let a = i[n]?.reply_id || "";
            let c = chatMessageUtils_2_1.getMessageGetter({
              messageMap: e.draftMessageMap,
              localMessageMap: e.draftLocalMessageMap
            });
            s.filter(e => {
              return c(e)?.reply_id === a;
            }).map(e => c(e)).filter(e => e !== undefined).forEach((e, t) => {
              if (t === Number(l) - 1) {
                e.status = chatMessageTypes.PushMessageStatus.Available;
              } else {
                e.status = chatMessageTypes.PushMessageStatus.InVisible;
              }
            });
          });
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    FixRegenerateMessageCmdPlugin: function () {
      return c;
    }
  });
}