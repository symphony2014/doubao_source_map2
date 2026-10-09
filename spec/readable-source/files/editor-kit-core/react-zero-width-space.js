// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'ZeroWidthSpace'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 285939
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i = reactCoreLibraryReexport.forwardRef(function (t, e) {
    return reactCoreLibraryReexport.createElement("span", typescriptRuntimeHelpers_1.assign({
      ref: e,
      "data-zero-space": true
    }, t), "​");
  });
  require.d(exports, {
    ZeroWidthSpace: function () {
      return i;
    }
  });
}