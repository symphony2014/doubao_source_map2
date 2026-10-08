// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'i' to 'mapPrototypeHasCheck'
// - Resolved require(282428) to 'map-prototype-has-check'
// - Renamed variable 'a' to 'mapPrototypeUtils'
// - Resolved require(522979) to 'map-prototype-utils'
// - Renamed variable 'u' to 'mapIteratorFindUtil'
// - Resolved require(606678) to 'map-iterator-find-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 309492
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var mapPrototypeHasCheck = require("map-prototype-has-check") /*id: 282428*/;
  var mapPrototypeUtils = require("map-prototype-utils") /*id: 522979*/;
  var mapIteratorFindUtil = require("map-iterator-find-util") /*id: 606678*/;
  var c = mapPrototypeUtils.Map;
  var f = mapPrototypeUtils.set;
  polyfillPropertyDefiner({
    target: "Map",
    proto: true,
    real: true,
    forced: true
  }, {
    mapValues: function (t) {
      var r = mapPrototypeHasCheck(this);
      var e = safeFunctionBind(t, arguments.length > 1 ? arguments[1] : undefined);
      var n = new c();
      mapIteratorFindUtil(r, function (t, o) {
        f(n, o, e(t, o, r));
      });
      return n;
    }
  });
}