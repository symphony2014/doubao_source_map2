// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'checkCollectionMatch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 394199
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    var n = -1;
    var r = e == null ? 0 : e.length;
    while (++n < r) {
      if (!t(e[n], n, e)) {
        return false;
      }
    }
    return true;
  }
  var objectForeachUtil_1_1 = require("object-foreach-util_1_1") /*id: 617264*/;
  function i(e, t) {
    var n = true;
    objectForeachUtil_1_1.objectForEach(e, function (e, r, o) {
      return n = !!t(e, r, o);
    });
    return n;
  }
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var verifyPropertyMatch = require("verify-property-match") /*id: 874949*/;
  function c(e, t, n) {
    var o = arrayIsArrayUtil.isArray(e) ? r : i;
    if (n && verifyPropertyMatch.checkPropertyValue(e, t, n)) {
      t = undefined;
    }
    return o(e, objectMatcherFactory.createMatcher(t, 3));
  }
  require.d(exports, {
    checkCollectionMatch: function () {
      return c;
    }
  });
}