// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'isTranslateEditMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 293309
         */
module.exports = function (module, exports, require) {
  var docTranslateEdit = require("doc-translate-edit") /*id: 543514*/;
  let o = e => {
    let n = e.config.get("translated");
    let i = e.config.get("translatedWithOriginal");
    return docTranslateEdit.isDocTranslateEdit() && n && i;
  };
  require.d(exports, {
    isTranslateEditMode: function () {
      return o;
    }
  });
}