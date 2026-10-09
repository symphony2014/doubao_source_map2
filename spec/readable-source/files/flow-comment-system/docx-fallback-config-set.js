// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'setFallbackConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 865092
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var fallbackConfigKey = require("fallback-config-key") /*id: 24347*/;
  function l(e, i) {
    docxEditorCore.runWithDataset(n => {
      let o = n.get(fallbackConfigKey.fallbackConfigKey);
      if (!o) {
        o = new Map();
        n.set(fallbackConfigKey.fallbackConfigKey, o);
      }
      o.set(e, i);
    });
  }
  require.d(exports, {
    setFallbackConfig: function () {
      return l;
    }
  });
}