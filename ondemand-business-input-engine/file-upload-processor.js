// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'hp' to 'isValidUploadItem'
// - Renamed export 'hv' to 'filterFilesBySize'
// - Renamed export 'jS' to 'convertToFileObjects'
// - Renamed export 'zm' to 'prepareUploadItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 203782
         */
module.exports = function (module, exports, require) {
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let p = e => {
    let {
      type: t,
      file: l
    } = e ?? {};
    return (t === "file" || t === "image") && !!l;
  };
  let _ = e => typeof e[0] == "string";
  let v = e => _(e) ? e.map(e => new File([new Blob([e])], `${e.slice(0, 6)}.txt`, {
    type: "plain/txt"
  })) : e;
  let g = e => {
    let {
      files: t,
      uploadFileMaxSize: l,
      onSizeError: i
    } = e;
    return t.filter(e => !(e.size > Number(l)) || (i == null || i(e.size), false));
  };
  let h = e => {
    let {
      files: t,
      ctx: l,
      uploadId: p,
      preCount: _ = 0
    } = e;
    let {
      currentChatViewConfig: v
    } = chatStoreManager.getStore("chatViewCoreStore").getState();
    let {
      chatType: g,
      chatId: h = ""
    } = v ?? {};
    let f = chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState());
    let b = chatConversationBotId.getConversationBotId(h) || f || "";
    let w = l.uploadFrom || skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON;
    let y = chatAppEnums.SkillType.AIPPTSlides;
    let C = chatAppEnums.SkillType.AIPPTSlides.toString();
    return collectionMapMatcher.mapWithMatcher(t, e => ({
      file: e,
      type: aiSpaceQuoteUtils.isImageBlob(e) ? "image" : "file",
      ctx: {
        conversationId: h,
        chatType: (g === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", h)) || "other_default",
        skillType: y,
        skillId: C,
        uploadFrom: w,
        botId: b,
        uploadWay: l.uploadWay,
        from: l.from,
        uploadCollectionWay: t.length + _ > 1 ? "multi" : "single",
        uploadId: p
      }
    }));
  };
  require.d(exports, {
    isValidUploadItem: function () {
      return v;
    },
    filterFilesBySize: function () {
      return g;
    },
    convertToFileObjects: function () {
      return p;
    },
    prepareUploadItems: function () {
      return h;
    }
  });
}