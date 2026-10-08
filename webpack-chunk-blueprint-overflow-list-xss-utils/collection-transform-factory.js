// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'collectionTransform'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 905142
         */
module.exports = function (module, exports, require) {
  function r(e, t, n, r) {
    var i = -1;
    var o = e == null ? 0 : e.length;
    while (++i < o) {
      var a = e[i];
      t(r, a, n(a), e);
    }
    return r;
  }
  var objectForeachUtil_1_1 = require("object-foreach-util_1_1") /*id: 617264*/;
  function o(e, t, n, r) {
    objectForeachUtil_1_1.objectForEach(e, function (e, i, o) {
      t(r, e, n(e), o);
    });
    return r;
  }
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  function u(e, t) {
    return function (n, i) {
      var u = arrayIsArrayUtil.isArray(n) ? r : o;
      var c = t ? t() : {};
      return u(n, e, objectMatcherFactory.createMatcher(i, 2), c);
    };
  }
  require.d(exports, {
    collectionTransform: function () {
      return u;
    }
  });
}