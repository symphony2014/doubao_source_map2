// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'useAiSpaceFileUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 742247
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var codingChatFileUpload = require("coding-chat-file-upload") /*id: 208950*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var getFileUrlsCache = require("get-file-urls-cache") /*id: 109992*/;
  function m() {
    let [e] = reactCoreLibraryReexport.useState(Date.now());
    let {
      chatId: t,
      chatType: n
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId,
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil_1.isDeepEqual);
    let m = chatStoreManager.useStoreSelector("chatInputStore", e => t ? e.activeSkillTypeMap[t] : undefined);
    let {
      addAttachmentDirectly: g
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: t ?? "",
      skillType: m
    });
    let v = codingChatFileUpload.useFileUpload(true, true);
    return async (i, r) => {
      if (!(i == null ? undefined : i.length)) {
        return;
      }
      let a = i.map(e => {
        let t = e == null ? undefined : e.nodeType;
        let n = "";
        switch (t) {
          case businessLayoutConstants.ItemType.File:
            n = "file";
            break;
          case businessLayoutConstants.ItemType.Image:
            n = "image";
            break;
          case businessLayoutConstants.ItemType.Link:
            n = "link";
            break;
          case businessLayoutConstants.ItemType.UnKnown:
          default:
            n = "";
        }
        if (n && (e == null ? undefined : e.key)) {
          return {
            type: n,
            ...e
          };
        }
      }).filter(Boolean);
      let l = attachmentUploadStoreHooks.processUploadAttachment({
        chatId: t ?? ""
      });
      let _ = {
        conversation_id: t,
        conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), t) || 1,
        module_actionid: e,
        chat_type: n,
        skill_name: skillTypeMappings.getSkillName(m),
        skill_id: String(m),
        duration: "0",
        upload_way: "input_ai_space",
        upload_collection_way: a.length + l.length > 1 ? "multi" : "single",
        collection_id: "",
        upload_token_length: "",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_DRIVE
      };
      let b = {};
      let y = [];
      let w = false;
      a.forEach(e => {
        if (!e) {
          return;
        }
        let {
          id: t,
          type: n,
          size: i,
          name: r
        } = e;
        b[t] = e;
        if (n && n !== "link") {
          let e = {
            size: i ? Number(i) : 0,
            name: r,
            type: n,
            id: t
          };
          y.push(e);
        } else if (n === "link") {
          w = true;
        }
      });
      let x = (await v(y, l, {
        trackParams: _,
        hasLink: w
      })).map(e => e.id);
      let C = a.filter(e => {
        return (e == null ? undefined : e.nodeType) === businessLayoutConstants.ItemType.Link || !!x.includes((e == null ? undefined : e.id) ?? "");
      });
      if (!(C == null ? undefined : C.length)) {
        return;
      }
      let k = C.filter(e => (e == null ? undefined : e.type) === "image").map(e => e == null ? undefined : e.key).filter(Boolean);
      let S = await getFileUrlsCache.getFileUrls(k, "image");
      C.forEach(e => {
        if (e) {
          g({
            type: e == null ? undefined : e.type,
            fileName: e == null ? undefined : e.name,
            from: "ai-space",
            fileKey: e == null ? undefined : e.key,
            size: (e == null ? undefined : e.size) ? Number(e == null ? undefined : e.size) : 0,
            blobUrl: (e == null ? undefined : e.key) && (e == null ? undefined : e.type) === "image" ? S == null ? undefined : S[e == null ? undefined : e.key] : undefined,
            url: (e == null ? undefined : e.type) === "link" ? e == null ? undefined : e.key : undefined
          });
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            ..._,
            upload_type: e == null ? undefined : e.type,
            status: 1,
            collection_id: e == null ? undefined : e.key
          });
        }
      });
      if (r != null) {
        r();
      }
    };
  }
  require.d(exports, {
    useAiSpaceFileUpload: function () {
      return m;
    }
  });
}