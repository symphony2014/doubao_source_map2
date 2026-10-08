// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'getEditorPluginList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 339280
         */
module.exports = function (module, exports, require) {
  var editorPluginListBuilder = require("editor-plugin-list-builder") /*id: 980558*/;
  var autoCapitalizationPlugin = require("auto-capitalization-plugin") /*id: 782204*/;
  function l(e) {
    return [...editorPluginListBuilder.getEditorPluginList(), ...autoCapitalizationPlugin.getDocxTranslation(e)];
  }
  require.d(exports, {
    getEditorPluginList: function () {
      return l;
    }
  });
}