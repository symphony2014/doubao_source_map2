// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectValuesHelper'
// - Resolved require(506581) to 'object-values-helper'
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'o' to 'createChatMessageUpdaterFactory'
// - Resolved require(388719) to 'create-chat-message-updater-factory'
// - Renamed variable 's' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'l' to 'messageStatusChangeSymbol'
// - Resolved require(138810) to 'message-status-change-symbol'
// - Updated imported property 'S' to 'messageStatusChange' (module 138810)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'getObjectValues' (module 506581)
// - Updated imported property 'I' to 'createChatMessageUpdater' (module 388719)
// - Updated imported property 'rJ' to 'messageStatus' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 941786
         */
module.exports = function (module, exports, require) {
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var createChatMessageUpdaterFactory = require("create-chat-message-updater-factory") /*id: 388719*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var messageStatusChangeSymbol = require("message-status-change-symbol") /*id: 138810*/;
  function c(e, t, n) {
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
  class u {
    constructor() {
      c(this, "pluginIdentifier", messageStatusChangeSymbol.messageStatusChange);
      c(this, "handleCmd", e => {
        if (e.data.version === "2.0") {
          let {
            conversation_id: t = "",
            message_body_list: n
          } = e.data.data.update_msg_status_notify || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: MessageStatusChanged",
            meta: {
              conversation_id: t,
              message_body_list: n
            }
          });
          for (let e of objectValuesHelper.getObjectValues(n)) {
            createChatMessageUpdaterFactory.createChatMessageUpdater(t)(n => {
              let i = n.draftMessageMap;
              if ((e == null ? undefined : e.status) === chatConstantsEnum.messageStatus.MessageStatus_INVISIBLE || (e == null ? undefined : e.status) === chatConstantsEnum.messageStatus.MessageStatus_DELETED || (e == null ? undefined : e.status) === chatConstantsEnum.messageStatus.MessageStatus_NOT_EXIST || (e == null ? undefined : e.status) === chatConstantsEnum.messageStatus.MessageStatus_BEFOREEDIT || (e == null ? undefined : e.status) === chatConstantsEnum.messageStatus.MessageStatus_PLACE_HOLD) {
                loggerServiceCore.defaultLogger.persist.info({
                  message: "Cmd: MessageStatusChanged, Change Message Status To Hidden",
                  meta: {
                    conversation_id: t,
                    message_info: e
                  }
                });
                if (i[e.message_id]) {
                  i[e.message_id].status = chatMessageTypes.PushMessageStatus.InVisible;
                }
              }
            });
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    MessageStatusChangedMessageCmdPlugin: function () {
      return u;
    }
  });
}