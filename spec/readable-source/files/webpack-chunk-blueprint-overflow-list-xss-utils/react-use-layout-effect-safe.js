// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'useLayoutEffect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 245652
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var o = globalThis?.document ? reactCoreLibraryReexport.useLayoutEffect : () => {};
  require.d(exports, {
    useLayoutEffect: function () {
      return o;
    }
  });
}