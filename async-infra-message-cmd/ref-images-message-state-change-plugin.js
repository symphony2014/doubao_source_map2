// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectValuesHelper'
// - Resolved require(506581) to 'object-values-helper'
// - Renamed variable 'r' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 'o' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 's' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'a' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'l' to 'refImagesMessageSymbol'
// - Resolved require(774441) to 'ref-images-message-symbol'
// - Updated imported property 'G' to 'refImagesMsgSymbol' (module 774441)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'm9' to 'reviewState' (module 292449)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'Z' to 'getObjectValues' (module 506581)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 580246
         */
module.exports = function (module, exports, require) {
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var refImagesMessageSymbol = require("ref-images-message-symbol") /*id: 774441*/;
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
      c(this, "pluginIdentifier", refImagesMessageSymbol.refImagesMsgSymbol);
      c(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let {
            conversation_id: t,
            local_message_id: n,
            ext: l
          } = e.data.data;
          let {
            review_not_pass_ref_images: c
          } = safeJsonUtils.safeParse(l == null ? undefined : l.body, {});
          if (t && n && (c == null ? undefined : c.length)) {
            c.forEach(e => {
              chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(t => {
                if (t != null) {
                  t.updateAttachmentReviewState(e, messagingConstants.reviewState.ReviewState_NotCompliant);
                }
              });
            });
            chatMessageStoreUpdater.updateChatMessages({
              conversationId: t,
              immerUpdate: e => {
                let {
                  draftMessageMap: t
                } = e;
                let r = objectValuesHelper.getObjectValues(t).find(e => e.local_message_id === n);
                if (r == null ? undefined : r.attachments) {
                  let e = r.attachments;
                  c.forEach(t => {
                    let n = e == null ? undefined : e.find(e => e.identifier === t);
                    if (n) {
                      n.file_review_state = messagingConstants.reviewState.ReviewState_NotCompliant;
                    }
                  });
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
    RefImagesMessageStateChangeMessageCmdPlugin: function () {
      return u;
    }
  });
}