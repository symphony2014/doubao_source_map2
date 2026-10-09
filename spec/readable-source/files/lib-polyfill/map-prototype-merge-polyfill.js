// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'mapPrototypeHasCheck'
// - Resolved require(282428) to 'map-prototype-has-check'
// - Renamed variable 'i' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Resolved require(522979) to 'map-prototype-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 295380
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var mapPrototypeHasCheck = require("map-prototype-has-check") /*id: 282428*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var a = require("map-prototype-utils") /*id: 522979*/.set;
  polyfillPropertyDefiner({
    target: "Map",
    proto: true,
    real: true,
    arity: 1,
    forced: true
  }, {
    merge: function (t) {
      var r = mapPrototypeHasCheck(this);
      var e = arguments.length;
      var n = 0;
      while (n < e) {
        iteratorForEachHelper(arguments[n++], function (t, e) {
          a(r, t, e);
        }, {
          AS_ENTRIES: true
        });
      }
      return r;
    }
  });
}