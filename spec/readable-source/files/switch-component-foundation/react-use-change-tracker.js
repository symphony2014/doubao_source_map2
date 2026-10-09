// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useChangeTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78560.192eef6a.js
         * chunkId: 78560
         * moduleId: 203550
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  exports.useChangeTracker = function (t, e) {
    var n = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(function () {
      var r;
      var i = (r = n.current) ? r.map(function (t, n) {
        if (Object.is(r[n], e == null ? undefined : e[n])) {
          return -1;
        } else {
          return n;
        }
      }).filter(function (t) {
        return t >= 0;
      }) : e ? e.map(function (t, e) {
        return e;
      }) : [];
      var o = n.current;
      n.current = e;
      return t(i, o, e);
    }, e);
  };
}