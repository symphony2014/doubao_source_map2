// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'getFeatureTooltip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 920454
         */
module.exports = function (module, exports, require) {
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  let i = docxFeatureFlags.isWEnabled() ? t("LarkCCM_Docs_Toolbar_Share_Tooltip") : t("LarkCCM_Docs_FwdSelectedText_Tooltip");
  if (docxFeatureFlags.isWEnabled()) {
    t("LarkCCM_Docs_Toolbar_SharingLmtReached_Toast");
  } else {
    t("LarkCCM_Docs_FwdSection_LimitReached_Toast");
  }
  require.d(exports, {
    getFeatureTooltip: function () {
      return i;
    }
  });
}