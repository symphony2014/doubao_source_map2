// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'mapPrototypeHasCheck'
// - Resolved require(282428) to 'map-prototype-has-check'
// - Renamed variable 'i' to 'mapPrototypeUtils'
// - Resolved require(522979) to 'map-prototype-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 424584
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var mapPrototypeHasCheck = require("map-prototype-has-check") /*id: 282428*/;
  var mapPrototypeUtils = require("map-prototype-utils") /*id: 522979*/;
  var a = mapPrototypeUtils.get;
  var u = mapPrototypeUtils.has;
  var c = mapPrototypeUtils.set;
  polyfillPropertyDefiner({
    target: "Map",
    proto: true,
    real: true,
    forced: true
  }, {
    emplace: function (t, r) {
      var e;
      var n;
      var i = mapPrototypeHasCheck(this);
      if (u(i, t)) {
        e = a(i, t);
        if ("update" in r) {
          e = r.update(e, t, i);
          c(i, t, e);
        }
        return e;
      } else {
        n = r.insert(t, i);
        c(i, t, n);
        return n;
      }
    }
  });
}