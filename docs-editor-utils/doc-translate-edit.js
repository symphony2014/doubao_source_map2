// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'isDocTranslateEdit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 543514
         */
module.exports = function (module, exports, require) {
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  function i() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.doc.translate.edit", false);
  }
  require.d(exports, {
    isDocTranslateEdit: function () {
      return i;
    }
  });
}