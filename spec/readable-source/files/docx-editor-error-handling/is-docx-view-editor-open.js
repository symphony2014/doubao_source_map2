// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'isDocxViewEditorOpen'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 763739
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  function o(e) {
    return objectPathGetDefault.getObjectPathDefault(e, "docx.viewEditors.isOpen", false);
  }
  require.d(exports, {
    isDocxViewEditorOpen: function () {
      return o;
    }
  });
}