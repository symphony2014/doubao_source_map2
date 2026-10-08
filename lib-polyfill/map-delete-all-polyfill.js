// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'mapPrototypeHasCheck'
// - Resolved require(282428) to 'map-prototype-has-check'
// - Resolved require(522979) to 'map-prototype-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 909146
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var mapPrototypeHasCheck = require("map-prototype-has-check") /*id: 282428*/;
  var i = require("map-prototype-utils") /*id: 522979*/.remove;
  polyfillPropertyDefiner({
    target: "Map",
    proto: true,
    real: true,
    forced: true
  }, {
    deleteAll: function () {
      var t;
      var r = mapPrototypeHasCheck(this);
      var e = true;
      var n = 0;
      var a = arguments.length;
      for (; n < a; n++) {
        t = i(r, arguments[n]);
        e = e && t;
      }
      return !!e;
    }
  });
}