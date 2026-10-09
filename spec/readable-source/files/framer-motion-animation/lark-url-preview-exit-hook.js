// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'oO' to 'useExitPreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 963313
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var larkUrlPreviewContext = require("lark-url-preview-context") /*id: 445669*/;
  function s() {
    let t = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    let e = reactCoreLibraryReexport.useContext(larkUrlPreviewContext.previewContext);
    if (e === null) {
      return [true, null];
    }
    let {
      isPresent: i,
      onExitComplete: s,
      register: o
    } = e;
    let a = reactCoreLibraryReexport.useId();
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        return o(a);
      }
    }, [t]);
    let l = reactCoreLibraryReexport.useCallback(() => t && s && s(a), [a, s, t]);
    if (!i && s) {
      return [false, l];
    } else {
      return [true];
    }
  }
  require.d(exports, {
    useExitPreview: function () {
      return s;
    }
  });
}