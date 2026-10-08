// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'checkObjectMatch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 941914
         */
module.exports = function (module, exports, require) {
  var arraySomeUtil = require("array-some-util") /*id: 312664*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var objectForeachUtil_1_1 = require("object-foreach-util_1_1") /*id: 617264*/;
  function a(e, t) {
    var n;
    objectForeachUtil_1_1.objectForEach(e, function (e, i, r) {
      return !(n = t(e, i, r));
    });
    return !!n;
  }
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var verifyPropertyMatch = require("verify-property-match") /*id: 874949*/;
  function u(e, t, n) {
    var s = arrayIsArrayUtil.isArray(e) ? arraySomeUtil.arraySome : a;
    if (n && verifyPropertyMatch.checkPropertyValue(e, t, n)) {
      t = undefined;
    }
    return s(e, objectMatcherFactory.createMatcher(t, 3));
  }
  require.d(exports, {
    checkObjectMatch: function () {
      return u;
    }
  });
}