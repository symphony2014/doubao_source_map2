// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'getReminderProviders'
// - Renamed export 'x' to 'getFoldProviders'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 726329
         */
module.exports = function (module, exports, require) {
  var docxFoldProviderName = require("docx-fold-provider-name") /*id: 207215*/;
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("reminder-highlight");
  function l(e) {
    if (e.get("translated")) {
      return [];
    } else {
      return [docxFoldProviderName.foldProviderName];
    }
  }
  function s() {
    return [o];
  }
  require.d(exports, {
    getReminderProviders: function () {
      return s;
    },
    getFoldProviders: function () {
      return l;
    }
  });
}