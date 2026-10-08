// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 'n' to 'draftMessageManager'
// - Resolved require(513014) to 'draft-message-manager'
// - Renamed variable 'o' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'km' to 'deleteDraftEntry' (module 513014)
// - Updated imported property 'cS' to 'filterReplyLinks' (module 513014)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 918912
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var draftMessageManager = require("draft-message-manager") /*id: 513014*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  class a {
    constructor() {
      var e;
      var t;
      var r;
      e = "handleReceivingMessageError";
      t = e => {
        loggerServiceCore.defaultLogger.persist.warning({
          message: "illegal_prompt",
          meta: {
            message_id: e.message_id,
            reply_id: e.reply_id
          }
        });
        let {
          conversation_id: t,
          reply_id: r,
          message_id: a
        } = e;
        if (t && r && a) {
          chatMessageStoreUpdater.updateChatMessages({
            conversationId: t,
            immerUpdate: e => {
              let t = draftMessageManager.deleteDraftEntry(e, {
                isLocalMessage: false,
                messageId: r
              });
              if (~t) {
                e.draftMessageLinks.splice(t, 1);
              }
              let i = draftMessageManager.deleteDraftEntry(e, {
                isLocalMessage: false,
                messageId: a
              });
              if (~i) {
                e.draftMessageLinks.splice(i, 1);
              }
              draftMessageManager.filterReplyLinks(e, r);
            }
          });
        }
      };
      if ((e = typeof (r = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, t || "default");
          if (typeof i != "object") {
            return i;
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
  require.r(exports);
  require.d(exports, {
    MessageIllegalMessageErrorPlugin: function () {
      return a;
    }
  });
}