// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'createObservable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 706734
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  function o(e) {
    var n = e;
    var r = new Set();
    return {
      set: function (e) {
        if (n !== e) {
          n = e;
          r.forEach(function (e) {
            return e(n);
          });
        }
      },
      get: function () {
        return n;
      },
      subscribe: function (e) {
        if (r.has(e)) {
          return emptyExportFunction.emptyFunction;
        } else {
          r.add(e);
          return function () {
            r.delete(e);
          };
        }
      }
    };
  }
  require.d(exports, {
    createObservable: function () {
      return o;
    }
  });
}