// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'BreakButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 695683
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var addButtonWithTooltip = require("add-button-with-tooltip") /*id: 538250*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var codingSkillChatInputStyles = require("coding-skill-chat-input-styles") /*id: 314845*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      onClick: t,
      visible: n = true,
      small: i = false
    } = e;
    let d = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(addButtonWithTooltip.AddButton, {
      onClick: t,
      className: a(codingSkillChatInputStyles.chatInputStyles["break-btn"], {
        "!hidden": !n,
        [codingSkillChatInputStyles.chatInputStyles["break-btn-small"]]: i
      }),
      tooltipContent: d("input_box_stop_generating_tooltip"),
      "data-testid": "chat_input_local_break_button"
    });
  };
  require.d(exports, {
    BreakButton: function () {
      return d;
    }
  });
}