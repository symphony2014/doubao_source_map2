// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(21227) to 'symbol-well-known-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 559695
         */
module.exports = function (module, exports, require) {
  var r = require("symbol-well-known-registry") /*id: 21227*/("iterator");
  var T = false;
  try {
    var n = 0;
    var o = {
      next: function () {
        return {
          done: !!n++
        };
      },
      return: function () {
        T = true;
      }
    };
    o[r] = function () {
      return this;
    };
    Array.from(o, function () {
      throw 2;
    });
  } catch (t) {}
  module.exports = function (t, e) {
    try {
      if (!e && !T) {
        return false;
      }
    } catch (t) {
      return false;
    }
    var Q = false;
    try {
      var n = {
        [r]: function () {
          return {
            next: function () {
              return {
                done: Q = true
              };
            }
          };
        }
      };
      t(n);
    } catch (t) {}
    return Q;
  };
}