// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mu' to 'useTranslationLlmShardingFlag'
// - Renamed export 'zB' to 'useTranslationSlmShardingFlag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 264348
         */
module.exports = function (module, exports, require) {
  require("browser-environment-detection-utils") /*id: 744607*/;
  require("url-query-parameter-manipulator") /*id: 551064*/;
  require("user-environment-utils") /*id: 107339*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  function i() {
    return boolDefaultGetterUtil.getDefaultBool("knowledge.docx.translation_llm_sharding", false);
  }
  function l() {
    return boolDefaultGetterUtil.getDefaultBool("knowledge.docx.translation_slm_sharding", false);
  }
  require("doc-component-feature-flags") /*id: 475581*/;
  require.d(exports, {
    useTranslationLlmShardingFlag: function () {
      return i;
    },
    useTranslationSlmShardingFlag: function () {
      return l;
    }
  });
}