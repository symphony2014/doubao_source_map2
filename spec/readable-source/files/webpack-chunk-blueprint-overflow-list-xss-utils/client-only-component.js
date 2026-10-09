// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'ClientOnly'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 25732
         */
module.exports = function (module, exports, require) {
  var arraySlicePolyfill_1_1 = require("array-slice-polyfill_1_1") /*id: 240168*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function o(e) {
    var t = arraySlicePolyfill_1_1.slicedToArray(reactCoreLibraryReexport.useState(false), 2);
    var n = t[0];
    var o = t[1];
    reactCoreLibraryReexport.useEffect(function () {
      o(true);
    }, []);
    var a = e || {};
    var s = a.children;
    var u = a.fallback;
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, n ? s : u === undefined ? null : u);
  }
  require.d(exports, {
    ClientOnly: function () {
      return o;
    }
  });
}