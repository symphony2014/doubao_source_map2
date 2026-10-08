// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'isFilePlayable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 153933
         */
module.exports = function (module, exports, require) {
  var fileExtensionTypes = require("file-extension-types") /*id: 940496*/;
  var docFileUtilsSymbol = require("doc-file-utils-symbol") /*id: 696345*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var aiWritingConstants = require("ai-writing-constants") /*id: 151614*/;
  function a(e) {
    if (!e) {
      return false;
    }
    let {
      title: i = "",
      play_info: n
    } = e || {};
    let a = n == null ? undefined : n.playable_status;
    let c = diContainerInstance.diContainer.get(docFileUtilsSymbol.docFileUtilsSymbol).getFileExt(i);
    let d = fileExtensionTypes.videoFormats.includes(c);
    let h = a === aiWritingConstants.reviewStatus.Available;
    return d || h;
  }
  require.d(exports, {
    isFilePlayable: function () {
      return a;
    }
  });
}