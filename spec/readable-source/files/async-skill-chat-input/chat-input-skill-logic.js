// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'getChatInputConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 174117
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  let c = e => {
    let {
      chatId: t,
      activeSkill: n,
      refContents: c,
      attachmentStates: d
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let f = reactCoreLibraryReexport.useMemo(() => (d == null ? undefined : d.length) ? d.every(e => fileTypeDetectionUtils.isSpreadsheetOrCsv(e.fileName)) : !!(c == null ? undefined : c.length) && !!c.every(e => e.type === "attachment" && fileTypeDetectionUtils.isSpreadsheetOrCsv(e.fileName)), [d, c]);
    return {
      getPlaceholder: () => {
        if ((n == null ? undefined : n.skill_type) === chatAppEnums.SkillType.CodeInterpreter || f) {
          return p("skill_dataAnalysis_input_placeholder");
        }
      },
      getPresetPrompts: () => {
        if (f) {
          return [chatInputAiFeatureConstants.AiFeatureType.SummarizeData, chatInputAiFeatureConstants.AiFeatureType.GenerateCharts];
        }
      },
      onAfterSubmit: () => {
        if ((n == null ? undefined : n.skill_type) === chatAppEnums.SkillType.CodeInterpreter || f) {
          chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap(t || "", chatAppEnums.SkillType.CodeInterpreter, chatStatusActionTypes.chatActionTypes.AfterSkill);
        }
      }
    };
  };
  require.d(exports, {
    getChatInputConfig: function () {
      return c;
    }
  });
}