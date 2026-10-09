// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createFindValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 143834
         */
module.exports = function (module, exports, require) {
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var isArrayLikeUtil = require("is-array-like-util") /*id: 391276*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  exports.createFindValue = function (e) {
    return function (t, n, a) {
      var s = Object(t);
      if (!isArrayLikeUtil.isArrayLike(t)) {
        var u = objectMatcherFactory.createMatcher(n, 3);
        t = getOwnKeys.getOwnKeys(t);
        n = function (e) {
          return u(s[e], e, s);
        };
      }
      var c = e(t, n, a);
      if (c > -1) {
        return s[u ? t[c] : c];
      } else {
        return undefined;
      }
    };
  };
}