// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ov' to 'isCodeBlockEnabled'
// - Renamed export 'Z' to 'isCodeBlockNewUi'
// - Renamed export 'kp' to 'isCodeBlockInlineFold'
// - Renamed export 'pC' to 'isCodeBlockBasic'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 888140
         */
module.exports = function (module, exports, require) {
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  function i() {
    return true;
  }
  function l() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.all.code_block_new_ui", false);
  }
  function c() {
    return true;
  }
  function u() {
    return boolDefaultGetterUtil.getDefaultBool("ccm.docx.all.code_block_inline_fold", false);
  }
  require.d(exports, {
    isCodeBlockEnabled: function () {
      return i;
    },
    isCodeBlockNewUi: function () {
      return l;
    },
    isCodeBlockInlineFold: function () {
      return u;
    },
    isCodeBlockBasic: function () {
      return c;
    }
  });
}