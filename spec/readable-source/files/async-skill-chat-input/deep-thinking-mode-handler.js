// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'deepThinkingHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 349989
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var modeConstants = require("mode-constants") /*id: 701817*/;
  var deepThinkingModeLogic = require("deep-thinking-mode-logic") /*id: 202832*/;
  let s = {
    id: "deep-thinking:ext-use-deep-thinking",
    execute: e => {
      let t = chatStoreManager.getStoreState("deepThinkingControlStore");
      let {
        modeSelectValue: n
      } = e.content;
      let {
        abilityType: s
      } = e.content;
      if (n && n in [modeConstants.modeConstants.Off, modeConstants.modeConstants.On, modeConstants.modeConstants.Auto, modeConstants.modeConstants.Pro]) {
        let t = n !== modeConstants.modeConstants.Pro || isUndefinedCheck.isUndefined(s) ? n : modeConstants.modeConstants.On;
        e.content.extra = {
          ...e.content.extra,
          use_deep_think: t
        };
        e.content.reportParams = {
          ...e.content.reportParams,
          whether_use_deep_thinking: t === modeConstants.modeConstants.Pro ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_PRO : t === modeConstants.modeConstants.Auto ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_AUTO : t === modeConstants.modeConstants.On ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_YES : t === modeConstants.modeConstants.Off ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_NO : skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_NO_ENTRANCE
        };
        return Promise.resolve(e);
      }
      if (t.uiHasDeepThinkBtn) {
        let n = deepThinkingModeLogic.resolveThinkingMode(t, t.uiHasDeepThinkBtnDisabled);
        e.content.extra = {
          ...e.content.extra,
          use_deep_think: n
        };
        e.content.reportParams = {
          ...e.content.reportParams,
          whether_use_deep_thinking: n === modeConstants.modeConstants.Pro ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_PRO : n === modeConstants.modeConstants.Auto ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_AUTO : n === modeConstants.modeConstants.On ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_YES : n === modeConstants.modeConstants.Off ? skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_NO : skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_NO_ENTRANCE
        };
      }
      return Promise.resolve(e);
    }
  };
  require.d(exports, {
    deepThinkingHandler: function () {
      return s;
    }
  });
}