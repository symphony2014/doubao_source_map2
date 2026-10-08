// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'useRunPreviewConfig'
// - Renamed export 't' to 'previewLanguages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 650100
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let i = ["python", "c", "cpp", "java", "javascript", "go", "rust", "php", "csharp", "bash", "r", "typescript"];
  let r = ["html"];
  let o = () => ({
    showRun: reactCoreLibraryReexport.useCallback(e => e ? r.includes(e) ? "preview" : i.includes(e) ? "run" : null : null, [])
  });
  require.d(exports, {
    useRunPreviewConfig: function () {
      return o;
    },
    previewLanguages: function () {
      return r;
    }
  });
}