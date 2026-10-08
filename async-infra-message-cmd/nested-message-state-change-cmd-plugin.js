// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'collectionIncludesUtil'
// - Resolved require(517430) to 'collection-includes-util'
// - Renamed variable 'r' to 'objectValuesHelper'
// - Resolved require(506581) to 'object-values-helper'
// - Renamed variable 'o' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 's' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'a' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'l' to 'chatSkillPinTypeDeterminer'
// - Resolved require(926482) to 'chat-skill-pin-type-determiner'
// - Renamed variable 'c' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'u' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'd' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'p' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'h' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'f' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'g' to 'nestedMsgStateChangePlugin'
// - Resolved require(962066) to 'nested-msg-state-change-plugin'
// - Updated imported property 'Z' to 'nestedMsgStateCmd' (module 962066)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'includes' (module 517430)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'Z' to 'getObjectValues' (module 506581)
// - Updated imported property 'yT' to 'determineSkillPinType' (module 926482)
// - Updated imported property 'lC' to 'getConversationBotInfo' (module 926482)
// - Updated imported property 'JB' to 'getFileCategory' (module 393072)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 283527
         */
module.exports = function (module, exports, require) {
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
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
  var nestedMsgStateChangePlugin = require("nested-msg-state-change-plugin") /*id: 962066*/;
  function m(e, t, n) {
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
  class v {
    constructor() {
      m(this, "pluginIdentifier", nestedMsgStateChangePlugin.nestedMsgStateCmd);
      m(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let {
            ext: n
          } = e.data.data;
          let {
            conversation_id: g,
            local_message_id: m,
            update_entity_state_list: v = []
          } = safeJsonUtils.safeParse(n == null ? undefined : n.body, {});
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: NestedMessageStateChange",
            meta: {
              conversation_id: g,
              update_entity_state_list: v,
              local_message_id: m
            }
          });
          if (!g || !m || !(v == null ? undefined : v.length)) {
            return;
          }
          v.forEach(e => {
            let t = e.identifier;
            if (collectionIncludesUtil.includes(e.update_fields, 2)) {
              chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(n => {
                if (n != null) {
                  n.updateAttachmentParseState(t, e.parse_state);
                }
              });
            }
            if (collectionIncludesUtil.includes(e.update_fields, 1)) {
              chatIocServiceLoaderHook.loadServiceAsync("attachmentUploadStoreService").then(n => {
                if (n != null) {
                  n.updateAttachmentReviewState(t, e.review_state);
                }
              });
            }
          });
          let b = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId;
          if (b) {
            chatMessageStoreUpdater.updateChatMessages({
              conversationId: b,
              immerUpdate: e => {
                let {
                  draftMessageMap: t,
                  draftMessageLinks: n
                } = e;
                let o = n.find(e => e.messageKey === m);
                if (o) {
                  o.messageKey = `${o.messageId}_invalid`;
                }
                let s = objectValuesHelper.getObjectValues(t).find(e => e.local_message_id === m);
                v.forEach(e => {
                  var t;
                  let r = s == null ? undefined : (t = s.attachments) === null || t === undefined ? undefined : t.find(t => {
                    return (t.identifier || s.local_info?.local_key) === e.identifier;
                  });
                  if (r) {
                    if (collectionIncludesUtil.includes(e.update_fields, 2)) {
                      r.file_parse_state = e.parse_state;
                      teaAnalyticsEventTracker.trackEvent("upload_parse_status", {
                        status: 0,
                        error_code: "parse_failed",
                        conversation_id: g,
                        chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", g, chatSkillPinTypeDeterminer.getConversationBotInfo(g).botInfo),
                        skill_name: chatAppEnums.SkillType.ReadPDF.toString(),
                        skill_id: "6",
                        upload_id: s == null ? undefined : s.local_message_id,
                        upload_collection_way: ((s == null ? undefined : s.attachments?.length) || 0) > 1 ? "multi" : "single",
                        upload_type: fileTypeDetectionUtils.getFileCategory(r.name || "") === "Image" ? "pic" : "pdf",
                        upload_file_type: fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(r.name || "")),
                        upload_file_size: String(r.size)
                      });
                    }
                    if (collectionIncludesUtil.includes(e.update_fields, 1)) {
                      r.file_review_state = e.review_state;
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
    NestedMessageStateChangeMessageCmdPlugin: function () {
      return v;
    }
  });
}