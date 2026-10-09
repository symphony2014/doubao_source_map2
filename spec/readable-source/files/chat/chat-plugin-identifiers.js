// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fp' to 'stepCheckPluginId'
// - Renamed export 'T$' to 'editorModePluginId'
// - Renamed export 'jS' to 'uploadFilePluginId'
// - Renamed export 'x0' to 'onlineSearchKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 70617
         */
module.exports = function (module, exports, require) {
  let i = Symbol("writeOnlineSearchPluginIdentifier");
  let r = Symbol("writeUploadFilePluginIdentifier");
  let o = Symbol("writeEditorModePluginIdentifier");
  let a = Symbol("writeStepCheckPluginIdentifier");
  require.d(exports, {
    stepCheckPluginId: function () {
      return a;
    },
    editorModePluginId: function () {
      return o;
    },
    uploadFilePluginId: function () {
      return r;
    },
    onlineSearchKey: function () {
      return i;
    }
  });
}