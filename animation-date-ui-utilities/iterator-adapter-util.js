// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createIterator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 528920
         */
module.exports = function (module, exports, require) {
  var sliceIterableUtil = require("slice-iterable-util") /*id: 681006*/;
  function r(e, t) {
    var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (!n) {
      if (Array.isArray(e) || (n = sliceIterableUtil.sliceIterable(e)) || t && e && typeof e.length == "number") {
        if (n) {
          e = n;
        }
        var r = 0;
        function i() {}
        return {
          s: i,
          n: function () {
            if (r >= e.length) {
              return {
                done: true
              };
            } else {
              return {
                done: false,
                value: e[r++]
              };
            }
          },
          e: function (e) {
            throw e;
          },
          f: i
        };
      }
      throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o;
    var s = true;
    var l = false;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        s = e.done;
        return e;
      },
      e: function (e) {
        l = true;
        o = e;
      },
      f: function () {
        try {
          if (!s && n.return != null) {
            n.return();
          }
        } finally {
          if (l) {
            throw o;
          }
        }
      }
    };
  }
  require.d(exports, {
    createIterator: function () {
      return r;
    }
  });
}