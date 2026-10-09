// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'iteratorFindUtil'
// - Resolved require(563696) to 'iterator-find-util'
// - Renamed variable 'i' to 'mapPrototypeUtils'
// - Resolved require(522979) to 'map-prototype-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 606678
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var iteratorFindUtil = require("iterator-find-util") /*id: 563696*/;
  var mapPrototypeUtils = require("map-prototype-utils") /*id: 522979*/;
  var a = mapPrototypeUtils.Map;
  var u = mapPrototypeUtils.proto;
  var c = functionBindFallback(u.forEach);
  var f = functionBindFallback(u.entries);
  var s = f(new a()).next;
  module.exports = function (t, r, e) {
    if (e) {
      return iteratorFindUtil({
        iterator: f(t),
        next: s
      }, function (t) {
        return r(t[1], t[0]);
      });
    } else {
      return c(t, r);
    }
  };
}