// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'DeepThinkSuggestion'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 272303
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var suggestMessageList = require("suggest-message-list") /*id: 447868*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var deepThinkingSuggestedPromptHook = require("deep-thinking-suggested-prompt-hook") /*id: 34856*/;
  var s = {
    "fade-in-with-delay": "fade-in-with-delay-aUbWRc"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      message: n,
      className: i
    } = e;
    let d = i18nTranslationUtils.useTranslationWithFallback();
    let u = (n == null ? undefined : n.ext?.is_pro) !== "1";
    let {
      regenerateAction: {
        onRegenerateMessageClick: p
      }
    } = deepThinkingSuggestedPromptHook.useDeepThinkingSuggestedPrompt({
      message: n
    });
    if (u) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: l("mt-[-8px]", s["fade-in-with-delay"], i),
        children: reactJsxRuntimeCoreReexport.jsx(suggestMessageList.SuggestMessageItem, {
          onClick: () => p(),
          children: d("deepThink_message_sug_btn_skipThink_pc")
        })
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    DeepThinkSuggestion: function () {
      return d;
    }
  });
}