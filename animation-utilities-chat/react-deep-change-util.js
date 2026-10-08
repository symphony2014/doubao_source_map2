// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'createDeepChangeCb'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 7994
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualCheckUtil = require("deep-equal-check-util") /*id: 974619*/;
  function s(e) {
    return function (t, n) {
      var s = reactCoreLibraryReexport.useRef();
      var a = reactCoreLibraryReexport.useRef(0);
      if (n === undefined || !deepEqualCheckUtil.checkDeepEqual(n, s.current)) {
        s.current = n;
        a.current += 1;
      }
      e(t, [a.current]);
    };
  }
  require.d(exports, {
    createDeepChangeCb: function () {
      return s;
    }
  });
}