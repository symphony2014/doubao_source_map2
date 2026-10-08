// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Sn' to 'processChatAttachments'
// - Renamed export 'hp' to 'normalizeFileInputs'
// - Renamed export 'i3' to 'filterValidFiles'
// - Renamed export 'jS' to 'isFileObject'
// - Renamed export 'zm' to 'prepareFileUploadContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 670926
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatMessageBuilders = require("chat-message-builders") /*id: 502721*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  let m = e => {
    let t = objectPathGetDefault.getObjectPathDefault(e, "type");
    let i = objectPathGetDefault.getObjectPathDefault(e, "file");
    return t === "file" && !!i;
  };
  let g = e => typeof e[0] == "string";
  let y = e => g(e) ? e.map(e => new File([new Blob([e])], `${e.slice(0, 6)}.txt`, {
    type: "plain/txt"
  })) : e;
  let h = e => {
    let {
      files: t,
      uploadFileMaxSize: i,
      onTypeError: n,
      onSizeError: r
    } = e;
    return t.filter(e => {
      let t = getFileExtension.getFileExtension(e.name);
      if (fileTypeDetectionUtils.isPdfFile(t) || fileTypeDetectionUtils.isDocumentFile(t) || fileTypeDetectionUtils.isTextFile(t)) {
        return !(e.size > Number(i)) || (r == null || r(e.size), false);
      } else {
        if (n != null) {
          n(t);
        }
        return false;
      }
    });
  };
  let S = e => {
    let {
      files: t,
      ctx: i,
      uploadId: n,
      preCount: u = 0
    } = e;
    let {
      currentChatViewConfig: f
    } = chatStoreManager.getStore("chatViewCoreStore").getState();
    let {
      chatType: v,
      chatId: m = ""
    } = f ?? {};
    let g = chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState());
    let y = chatConversationBotId.getConversationBotId(m) || g || "";
    let h = i.uploadFrom || skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON;
    let S = chatAppEnums.SkillType.WriteAssistant;
    let k = chatAppEnums.SkillType.WriteAssistant.toString();
    return collectionMapMatcher.mapWithMatcher(t, e => ({
      file: e,
      type: "file",
      ctx: {
        conversationId: m,
        chatType: (v === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", m)) || "other_default",
        skillType: S,
        skillId: k,
        uploadFrom: h,
        botId: y,
        uploadWay: i.uploadWay,
        from: i.from,
        uploadCollectionWay: t.length + u > 1 ? "multi" : "single",
        uploadId: n
      }
    }));
  };
  let k = e => {
    let {
      text: t,
      attachments: i,
      attachmentKeys: n,
      attachmentStates: r,
      reportParams: a
    } = e;
    return chatMessageBuilders.processAttachments({
      text: t,
      attachments: i,
      attachmentKeys: n,
      attachmentStates: r
    }, {
      upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
      scene: "chat_action_bar",
      ...a
    });
  };
  require.d(exports, {
    processChatAttachments: function () {
      return k;
    },
    normalizeFileInputs: function () {
      return y;
    },
    filterValidFiles: function () {
      return h;
    },
    isFileObject: function () {
      return m;
    },
    prepareFileUploadContext: function () {
      return S;
    }
  });
}