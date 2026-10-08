// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'isImageShowEnabled'
// - Renamed export 'n' to 'isImageEditEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 332375
         */
module.exports = function (module, exports, require) {
  var versionCompareUtil = require("version-compare-util") /*id: 147266*/;
  var docxOfflineStatusUtils = require("docx-offline-status-utils") /*id: 205871*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  let c = docxOfflineStatusUtils.getLarkVersion();
  let u = docxOfflineStatusUtils.isDocxOfflineEnabled() && versionCompareUtil.compareVersions(c, "7.26.999") && boolDefaultGetterUtil.getDefaultBool("offline.image_show_enable", false);
  let a = docxOfflineStatusUtils.isDocxOfflineEnabled() && versionCompareUtil.compareVersions(c, "7.26.999") && boolDefaultGetterUtil.getDefaultBool("offline.image_edit_enable", false);
  require.d(exports, {
    isImageShowEnabled: function () {
      return u;
    },
    isImageEditEnabled: function () {
      return a;
    }
  });
}