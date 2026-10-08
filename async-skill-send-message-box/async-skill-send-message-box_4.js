// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'SearchSkillRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 713858
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let u = () => chatFgStoreHooks.getSourceValue("enable_send_search_text_prefix", {
    defaultValue: true,
    source: chatStorageKeys.chatStorageKeys.tea
  });
  var searchSkillTypes = require("search-skill-types") /*id: 248215*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = {
    ai_search: "search_about",
    deep_search: "deepsearch",
    academic_search: "skill_search_AcademicSearch"
  };
  let f = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let c = (t == null ? undefined : t.content_type) === aiAssistantSkillTypes.SamanthaTypes.SamanthaSearchEngineInput;
    let d = u() && !c;
    let f = reactCoreLibraryReexport.useMemo(() => messageContentTypeAndStatusChecker.lcM(t) ? searchSkillTypes.searchSkillTypes.DeepSearch : messageContentTypeAndStatusChecker.qOw(t) ? searchSkillTypes.searchSkillTypes.AcademicSearch : searchSkillTypes.searchSkillTypes.AISearch, []);
    let g = messageContentTypeAndStatusChecker.G7Q(t) ? messageContentUtils.formatMessage(t, false, n("chat_unsupported_message_type")) : "";
    return reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
      text: d ? `${n(m[f])}\u{FF1A}${g}` : g
    });
  };
  require.d(exports, {
    SearchSkillRenderer: function () {
      return f;
    }
  });
}