// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'createState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 840764
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  function i(t) {
    var e = t;
    var n = new Set();
    return {
      set: function (t) {
        if (e !== t) {
          e = t;
          n.forEach(function (t) {
            return t(e);
          });
        }
      },
      get: function () {
        return e;
      },
      subscribe: function (t) {
        if (n.has(t)) {
          return emptyExportFunction.emptyFunction;
        } else {
          n.add(t);
          return function () {
            n.delete(t);
          };
        }
      }
    };
  }
  require.d(exports, {
    createState: function () {
      return i;
    }
  });
}