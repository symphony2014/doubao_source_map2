// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'eT' to 'withEditor'
// - Renamed export 'rU' to 'editorContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 955597
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i = reactCoreLibraryReexport.createContext(null);
  function u(t) {
    return reactCoreLibraryReexport.forwardRef(function (e, r) {
      return reactCoreLibraryReexport.createElement(i.Consumer, null, function (i) {
        return i && reactCoreLibraryReexport.createElement(t, typescriptRuntimeHelpers_1.assign({}, e, {
          editor: i,
          ref: r
        }));
      });
    });
  }
  require.d(exports, {
    withEditor: function () {
      return u;
    },
    editorContext: function () {
      return i;
    }
  });
}