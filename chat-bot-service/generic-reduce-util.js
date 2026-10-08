// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'genericReduce'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 900464
         */
module.exports = function (module, exports, require) {
  var arrayReduceUtil = require("array-reduce-util") /*id: 309228*/;
  var objectForeachUtil_1_1 = require("object-foreach-util_1_1") /*id: 617264*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  function i(t, e, r, n, o) {
    o(t, function (t, o, a) {
      r = n ? (n = false, t) : e(r, t, o, a);
    });
    return r;
  }
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  function u(t, e, r) {
    var u = arrayIsArrayUtil.isArray(t) ? arrayReduceUtil.arrayReduce : i;
    var l = arguments.length < 3;
    return u(t, objectMatcherFactory.createMatcher(e, 4), r, l, objectForeachUtil_1_1.objectForEach);
  }
  require.d(exports, {
    genericReduce: function () {
      return u;
    }
  });
}