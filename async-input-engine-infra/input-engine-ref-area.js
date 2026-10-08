// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'i' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'a' to 'chatInputRefContentUi'
// - Resolved require(917632) to 'chat-input-ref-content-ui'
// - Renamed variable 'o' to 'chatRefContentSelectors'
// - Resolved require(434690) to 'chat-ref-content-selectors'
// - Renamed variable 's' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'u' to 'aiSpaceQuoteUtils'
// - Resolved require(577173) to 'ai-space-quote-utils'
// - Renamed variable 'l' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'UC' to 'useRefContent' (module 434690)
// - Updated imported property 'f2' to 'referenceAreaPluginHook' (module 232752)
// - Updated imported property 'LA' to 'subscribeUploadStore' (module 793484)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// - Updated imported property 'N' to 'formatQuoteInfo' (module 577173)
// - Updated imported property 'Mr' to 'ChatInputRefContent' (module 917632)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-engine-infra.27de6beb.js
         * chunkId: 63727
         * moduleId: 731253
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatInputRefContentUi = require("chat-input-ref-content-ui") /*id: 917632*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      chatId: n,
      referenceConfig: f,
      trackParams: p,
      isDisabled: h,
      ...m
    } = e;
    let g = chatRefContentSelectors.useRefContent(n);
    let v = (g == null ? undefined : g.refContents) || [];
    let {
      plugin: y
    } = chatPluginIocManager.referenceAreaPluginHook(f === true ? "" : f || "");
    let w = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: n,
      skillType: m.skill?.skill_type
    });
    let b = !isEmptyUtil.isEmpty(w) || isEmptyUtil.isEmpty(v) || h;
    let C = useLatestCallbackHook_1.useLatestCallback(e => teaAnalyticsEventTracker.trackEvent("input_bar_edit", {
      action: "cancel_quote",
      ...p,
      ...aiSpaceQuoteUtils.formatQuoteInfo(e)
    }));
    if (b) {
      return null;
    } else if (f === true) {
      if (v.length > 0) {
        return reactJsxRuntimeCoreReexport.jsx(chatInputRefContentUi.ChatInputRefContent, {
          refContents: v,
          removeRefContentEvent: C
        });
      } else {
        return null;
      }
    } else if (f && y) {
      return reactJsxRuntimeCoreReexport.jsx(y.Content, {
        chatId: n,
        ...m
      });
    } else {
      return null;
    }
  };
  require.r(exports);
  require.d(exports, {
    InputEngineReferenceArea: function () {
      return f;
    }
  });
}