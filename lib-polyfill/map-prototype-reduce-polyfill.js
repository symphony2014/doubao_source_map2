// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'i' to 'mapPrototypeHasCheck'
// - Resolved require(282428) to 'map-prototype-has-check'
// - Renamed variable 'a' to 'mapIteratorFindUtil'
// - Resolved require(606678) to 'map-iterator-find-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 802790
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var mapPrototypeHasCheck = require("map-prototype-has-check") /*id: 282428*/;
  var mapIteratorFindUtil = require("map-iterator-find-util") /*id: 606678*/;
  var u = TypeError;
  polyfillPropertyDefiner({
    target: "Map",
    proto: true,
    real: true,
    forced: true
  }, {
    reduce: function (t) {
      var r = mapPrototypeHasCheck(this);
      var e = arguments.length < 2;
      var n = e ? undefined : arguments[1];
      functionValidator(t);
      mapIteratorFindUtil(r, function (o, i) {
        if (e) {
          e = false;
          n = o;
        } else {
          n = t(n, o, i, r);
        }
      });
      if (e) {
        throw new u("Reduce of empty map with no initial value");
      }
      return n;
    }
  });
}