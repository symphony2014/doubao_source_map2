// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 675728
         */
module.exports = function (module, exports, require) {
  var n = require("core-js-wks-access") /*id: 349338*/("iterator");
  var o = false;
  try {
    var i = 0;
    var a = {
      next: function () {
        return {
          done: !!i++
        };
      },
      return: function () {
        o = true;
      }
    };
    a[n] = function () {
      return this;
    };
    Array.from(a, function () {
      throw 2;
    });
  } catch (t) {}
  module.exports = function (t, r) {
    try {
      if (!r && !o) {
        return false;
      }
    } catch (t) {
      return false;
    }
    var e = false;
    try {
      var i = {
        [n]: function () {
          return {
            next: function () {
              return {
                done: e = true
              };
            }
          };
        }
      };
      t(i);
    } catch (t) {}
    return e;
  };
}