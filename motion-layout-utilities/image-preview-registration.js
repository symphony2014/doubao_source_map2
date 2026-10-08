// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'oO' to 'usePreviewRegister'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 188570
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var imagePreviewContext = require("image-preview-context") /*id: 61163*/;
  function s() {
    let t = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    let e = reactCoreLibraryReexport.useContext(imagePreviewContext.previewContext);
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
    usePreviewRegister: function () {
      return s;
    }
  });
}