// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C7' to 'isNewSummaryUI'
// - Renamed export 'm6' to 'isEditorSummaryEnabled'
// - Renamed export 'zv' to 'isMetadataSummaryEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 697646
         */
module.exports = function (module, exports, require) {
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  function u() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.metadata_summary", false);
  }
  function a() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.metadata_summary.for.editor", false);
  }
  function s() {
    let e = platformDocUtils.H8b();
    return objectPathGetDefault.getObjectPathDefault(e, ["summary_new_ui", "type"]) === "v1" || objectPathGetDefault.getObjectPathDefault(e, ["summary_new_ui"]) === "v1";
  }
  if (s() && browserEnvDetectionUtil.browserDetector.isMobile) {
    browserEnvDetectionUtil.browserDetector.isIPad;
  }
  if (s() && browserEnvDetectionUtil.browserDetector.isMobile) {
    browserEnvDetectionUtil.browserDetector.isIPad;
  }
  require.d(exports, {
    isNewSummaryUI: function () {
      return s;
    },
    isEditorSummaryEnabled: function () {
      return a;
    },
    isMetadataSummaryEnabled: function () {
      return u;
    }
  });
}