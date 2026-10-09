// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatPasteHandler'
// - Resolved require(226734) to 'chat-paste-handler'
// - Renamed variable 'i' to 'chatInputFileUpload'
// - Resolved require(850654) to 'chat-input-file-upload'
// - Renamed variable 'o' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'u' to 'useChatUploadHook' (module 226734)
// - Updated imported property 'O' to 'handlePasteUpload' (module 226734)
// - Updated imported property 'K' to 'ChatInputUpload' (module 850654)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 6431.d8eea964.js
         * chunkId: 6431
         * moduleId: 155754
         */
module.exports = function (module, exports, require) {
  var chatPasteHandler = require("chat-paste-handler") /*id: 226734*/;
  var chatInputFileUpload = require("chat-input-file-upload") /*id: 850654*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      className: t,
      enableUpload: n,
      onAfterSendMessage: s,
      disabled: l,
      isToolButtonSmall: c,
      isOverflow: u,
      reportParams: d,
      enablePasteAndDropUpload: p,
      trackParams: h
    } = e;
    let {
      uploadFiles: f,
      ultraLongTextGuideCanActive: m,
      hideUltraLongTextGuide: g,
      enableCodeSkillRelate: v
    } = chatPasteHandler.useChatUploadHook({
      enableUpload: n,
      onAfterSendMessage: s
    });
    chatPasteHandler.handlePasteUpload({
      enableUpload: p,
      onAfterSendMessage: s
    });
    return reactJsxRuntimeCoreReexport.jsx(chatInputFileUpload.ChatInputUpload, {
      className: t,
      onSubmitFiles: f,
      isToolButtonSmall: c,
      isOverflow: u,
      disabled: l,
      ultraLongTextGuideCanActive: m,
      hideUltraLongTextGuide: g,
      enableCodeSkillRelate: v,
      reportParams: d,
      enableDropUpload: p,
      onClick: () => teaAnalyticsEventTracker.trackEvent("click_upload_entrance", {
        ...h
      }),
      disableTooltip: true,
      useV3: true
    });
  };
  require.r(exports);
  require.d(exports, {
    GuestGenericFileUploadButton: function () {
      return s;
    }
  });
}