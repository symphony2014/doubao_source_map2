// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'isDocxApplyChanges'
// - Renamed export 'u' to 'getDefaultTrue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 822361
         */
module.exports = function (module, exports, require) {
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  function i() {
    return true;
  }
  function l() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.client_vars_apply_changes", false);
  }
  require.d(exports, {
    isDocxApplyChanges: function () {
      return l;
    },
    getDefaultTrue: function () {
      return i;
    }
  });
}