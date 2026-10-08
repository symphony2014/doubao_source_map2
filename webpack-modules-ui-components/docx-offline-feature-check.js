// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'isDocxOfflineFlag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 821237
         */
module.exports = function (module, exports, require) {
  var versionCompareUtil = require("version-compare-util") /*id: 147266*/;
  var docxOfflineStatusUtils = require("docx-offline-status-utils") /*id: 205871*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  let s = function () {
    let e = navigator.userAgent.match(/Lark\/(\d+\.\d+\.\d+[\w\-]*)/);
    if (e && e.length > 1) {
      return e[1];
    } else {
      return "0.0.0";
    }
  }();
  let a = docxOfflineStatusUtils.isDocxOfflineEnabled() && versionCompareUtil.compareVersions(s, "7.36.999") && boolDefaultGetterUtil.getDefaultBool("ccm.offline.file_enable", false);
  require.d(exports, {
    isDocxOfflineFlag: function () {
      return a;
    }
  });
}