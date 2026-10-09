// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FQ' to 'getTrueConstant'
// - Renamed export 'Hy' to 'isFullScreenDefault'
// - Renamed export 'T5' to 'getTrueConstant_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 475875
         */
module.exports = function (module, exports, require) {
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  function i() {
    return true;
  }
  function c() {
    return true;
  }
  function l() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.css_full_screen_default_in_vc", false);
  }
  require.d(exports, {
    getTrueConstant: function () {
      return c;
    },
    isFullScreenDefault: function () {
      return l;
    },
    getTrueConstant_1: function () {
      return i;
    }
  });
}