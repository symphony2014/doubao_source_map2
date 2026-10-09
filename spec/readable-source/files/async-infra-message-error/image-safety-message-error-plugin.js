// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 'n' to 'draftMessageManager'
// - Resolved require(513014) to 'draft-message-manager'
// - Renamed variable 'o' to 'chatMessagingConstants'
// - Resolved require(375543) to 'chat-messaging-constants'
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'FL' to 'getAndRemoveDraft' (module 513014)
// - Updated imported property 'lf' to 'mockReplyMessageId' (module 375543)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 808167
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var draftMessageManager = require("draft-message-manager") /*id: 513014*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  class a {
    constructor() {
      var e;
      var t;
      var r;
      e = "handleSendingMessageError";
      t = e => {
        let {
          conversation_id: t,
          local_message_id: r
        } = e;
        if (t && r) {
          chatMessageStoreUpdater.updateChatMessages({
            conversationId: t,
            immerUpdate: function () {
              var t = arguments.length;
              var i = Array(t);
              var a = 0;
              for (; a < t; a++) {
                i[a] = arguments[a];
              }
              let [l] = i;
              let s = l.draftLocalMessageMap[r];
              s.ext = {
                ...s.ext,
                ...e.ext
              };
              draftMessageManager.getAndRemoveDraft(l, chatMessagingConstants.mockReplyMessageId);
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
    ImageSafetyMessageErrorPlugin: function () {
      return a;
    }
  });
}