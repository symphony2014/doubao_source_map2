// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'createChatState'
// - Renamed export 'X' to 'initialChatState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 432677
         */
module.exports = function (module, exports, require) {
  var chatSuggestionState = require("chat-suggestion-state") /*id: 133368*/;
  let r = {
    sourceShareCreatorInfoMap: {}
  };
  let o = () => ({
    ...r
  });
  let a = {
    messageShowErrorHasReportedMap: {}
  };
  let l = () => ({
    ...a
  });
  let s = {
    messageMap: {},
    localMessageMap: {},
    messageLinkMap: {},
    messageListStatusMap: {},
    searchResultIsFinishedMap: {},
    sendMessagePromiseTasks: {},
    lastMessageMap: {},
    rateLimitConfig: {
      isLimited: false,
      limitExpired: undefined,
      limitTips: ""
    },
    musicAutoPlay: false
  };
  let u = () => ({
    ...s
  });
  let c = {
    messageFeedbackMap: {}
  };
  let d = () => ({
    ...c
  });
  let h = {
    pdfPreviewMap: {},
    linkPreviewMap: {}
  };
  let m = () => ({
    ...h
  });
  let g = {
    ...s,
    ...chatSuggestionState.suggestionState,
    ...c,
    ...r
  };
  let f = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return {
      ...chatSuggestionState.suggestionFactory(...t),
      ...u(...t),
      ...d(...t),
      ...m(...t),
      ...o(...t),
      ...l(...t)
    };
  };
  require.d(exports, {
    createChatState: function () {
      return f;
    },
    initialChatState: function () {
      return g;
    }
  });
}