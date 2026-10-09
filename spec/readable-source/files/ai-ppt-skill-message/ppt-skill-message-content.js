// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'r' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'o' to 'messageTextContentRenderer'
// - Resolved require(602492) to 'message-text-content-renderer'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'Y' to 'renderMessageText' (module 602492)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 846990
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      message: a
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let c = objectPathGetDefault.getObjectPathDefault(a == null ? undefined : a.content_obj, "action") === "gen_outline" ? `${s("skill_aippt_message_prefix")}\u{FF1A}${a == null ? undefined : a.content_obj?.text}` : a == null ? undefined : a.content_obj?.text;
    return reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
      text: c
    });
  };
  require.r(exports);
  require.d(exports, {
    MessageSendPptSkillContent: function () {
      return a;
    }
  });
}