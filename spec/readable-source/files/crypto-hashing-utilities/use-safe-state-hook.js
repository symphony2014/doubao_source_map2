// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useSafeState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 154306
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(e) {
    var t = reactCoreLibraryReexport.useRef(false);
    var n = reactCoreLibraryReexport.useState(e);
    var i = iterableToArrayUtil_1_1.iterableToArray(n, 2);
    var u = i[0];
    var a = i[1];
    reactCoreLibraryReexport.useEffect(function () {
      t.current = false;
      return function () {
        t.current = true;
      };
    }, []);
    return [u, function (e, n) {
      if (!n || !t.current) {
        a(e);
      }
    }];
  }
  require.d(exports, {
    useSafeState: function () {
      return i;
    }
  });
}