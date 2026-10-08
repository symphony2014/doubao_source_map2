// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'collectionIncludesUtil'
// - Resolved require(517430) to 'collection-includes-util'
// - Renamed variable 'r' to 'objectValuesHelper'
// - Resolved require(506581) to 'object-values-helper'
// - Renamed variable 'o' to 'safeArrayFlattenUtil'
// - Resolved require(79349) to 'safe-array-flatten-util'
// - Renamed variable 'a' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'l' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 'c' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'u' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'd' to 'chatSkillPinTypeDeterminer'
// - Resolved require(926482) to 'chat-skill-pin-type-determiner'
// - Renamed variable 'p' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'h' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'f' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'g' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'm' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'v' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'b' to 'blockMessageStatePlugin'
// - Resolved require(238192) to 'block-message-state-plugin'
// - Updated imported property 'q' to 'blockMessageStateId' (module 238192)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'includes' (module 517430)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'Z' to 'getObjectValues' (module 506581)
// - Updated imported property 'Z' to 'safeFlattenArray' (module 79349)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'yT' to 'determineSkillPinType' (module 926482)
// - Updated imported property 'lC' to 'getConversationBotInfo' (module 926482)
// - Updated imported property 'JB' to 'getFileCategory' (module 393072)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 653215
         */
module.exports = function (module, exports, require) {
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var s = {
    ReviewState: 1,
    ParseState: 2
  };
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var blockMessageStatePlugin = require("block-message-state-plugin") /*id: 238192*/;
  function y(e, t, n) {
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
  class _ {
    constructor() {
      y(this, "pluginIdentifier", blockMessageStatePlugin.blockMessageStateId);
      y(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let {
            ext: n
          } = e.data.data;
          let {
            conversation_id: b,
            local_message_id: y,
            update_entity_state_list: _ = []
          } = safeJsonUtils.safeParse(n == null ? undefined : n.body, {});
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: BlockMessageStateChange",
            meta: {
              conversation_id: b,
              update_entity_state_list: _,
              local_message_id: y
            }
          });
          if (!b || !y || !(_ == null ? undefined : _.length)) {
            return;
          }
          _.forEach(e => {
            let t = e.identifier;
            if (collectionIncludesUtil.includes(e.update_fields, s.ParseState)) {
              chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(n => {
                if (n != null) {
                  n.updateAttachmentParseState(t, e.parse_state);
                }
              });
            }
            if (collectionIncludesUtil.includes(e.update_fields, s.ReviewState)) {
              chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(n => {
                if (n != null) {
                  n.updateAttachmentReviewState(t, e.review_state);
                }
              });
            }
          });
          let w = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId;
          if (w) {
            chatMessageStoreUpdater.updateChatMessages({
              conversationId: w,
              immerUpdate: e => {
                let {
                  draftMessageMap: t,
                  draftMessageLinks: n
                } = e;
                let l = n.find(e => e.messageKey === y);
                if (l) {
                  l.messageKey = `${l.messageId}_invalid`;
                }
                let c = objectValuesHelper.getObjectValues(t).find(e => e.local_message_id === y);
                _.forEach(e => {
                  var t;
                  let f = safeArrayFlattenUtil.safeFlattenArray(c == null ? undefined : (t = c.content_blocks_v2) === null || t === undefined ? undefined : t.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT).map(e => {
                    var n;
                    if ((n = e.content) === null || n === undefined) {
                      return undefined;
                    } else {
                      return n.attachment_block?.attachments;
                    }
                  })).find(t => (t == null ? undefined : t.identifier) === e.identifier);
                  if (f) {
                    if (collectionIncludesUtil.includes(e.update_fields, s.ParseState)) {
                      f.parse_state = e.parse_state;
                      teaAnalyticsEventTracker.trackEvent("upload_parse_status", {
                        status: 0,
                        error_code: "parse_failed",
                        conversation_id: b,
                        chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", b, chatSkillPinTypeDeterminer.getConversationBotInfo(b).botInfo),
                        skill_name: chatAppEnums.SkillType.ReadPDF.toString(),
                        skill_id: "6",
                        upload_id: c == null ? undefined : c.local_message_id,
                        upload_collection_way: ((c == null ? undefined : c.attachments?.length) || 0) > 1 ? "multi" : "single",
                        upload_type: fileTypeDetectionUtils.getFileCategory(f.file?.name || "") === "Image" ? "pic" : "pdf",
                        upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(f.file?.name || "")),
                        upload_file_size: String(f.file?.size)
                      });
                    }
                    if (collectionIncludesUtil.includes(e.update_fields, s.ReviewState)) {
                      f.review_state = e.review_state;
                    }
                  }
                });
              }
            });
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    BlockMessageStateChangeMessageCmdPlugin: function () {
      return _;
    }
  });
}