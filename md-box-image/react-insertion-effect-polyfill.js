// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'useInsertionEffect'
// - Renamed export 'j' to 'layoutEffectShim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 299969
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var o = !!(r ||= require.t(reactCoreLibraryReexport, 2)).useInsertionEffect && (r ||= require.t(reactCoreLibraryReexport, 2)).useInsertionEffect;
  var a = o || function (e) {
    return e();
  };
  var s = o || reactCoreLibraryReexport.useLayoutEffect;
  require.d(exports, {
    useInsertionEffect: function () {
      return a;
    },
    layoutEffectShim: function () {
      return s;
    }
  });
}