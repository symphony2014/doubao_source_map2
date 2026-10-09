// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qz' to 'isUpdateTimeDefault'
// - Renamed export 'k' to 'isUpdateTimeTitle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 340835
         */
module.exports = function (module, exports, require) {
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  function i() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.update_time_under_title", false);
  }
  function l() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.update_time_by_default.new_doc", false);
  }
  require.d(exports, {
    isUpdateTimeDefault: function () {
      return l;
    },
    isUpdateTimeTitle: function () {
      return i;
    }
  });
}