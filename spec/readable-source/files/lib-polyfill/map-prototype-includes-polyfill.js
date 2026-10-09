// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'strictEqualPolyfill'
// - Resolved require(379557) to 'strict-equal-polyfill'
// - Renamed variable 'i' to 'mapPrototypeHasCheck'
// - Resolved require(282428) to 'map-prototype-has-check'
// - Renamed variable 'a' to 'mapIteratorFindUtil'
// - Resolved require(606678) to 'map-iterator-find-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 890678
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var strictEqualPolyfill = require("strict-equal-polyfill") /*id: 379557*/;
  var mapPrototypeHasCheck = require("map-prototype-has-check") /*id: 282428*/;
  var mapIteratorFindUtil = require("map-iterator-find-util") /*id: 606678*/;
  polyfillPropertyDefiner({
    target: "Map",
    proto: true,
    real: true,
    forced: true
  }, {
    includes: function (t) {
      return mapIteratorFindUtil(mapPrototypeHasCheck(this), function (r) {
        if (strictEqualPolyfill(r, t)) {
          return true;
        }
      }, true) === true;
    }
  });
}