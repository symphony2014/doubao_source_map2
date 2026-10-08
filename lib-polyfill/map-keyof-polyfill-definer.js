// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'mapPrototypeHasCheck'
// - Resolved require(282428) to 'map-prototype-has-check'
// - Renamed variable 'i' to 'mapIteratorFindUtil'
// - Resolved require(606678) to 'map-iterator-find-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 361086
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var mapPrototypeHasCheck = require("map-prototype-has-check") /*id: 282428*/;
  var mapIteratorFindUtil = require("map-iterator-find-util") /*id: 606678*/;
  polyfillPropertyDefiner({
    target: "Map",
    proto: true,
    real: true,
    forced: true
  }, {
    keyOf: function (t) {
      var r = mapIteratorFindUtil(mapPrototypeHasCheck(this), function (r, e) {
        if (r === t) {
          return {
            key: e
          };
        }
      }, true);
      return r && r.key;
    }
  });
}