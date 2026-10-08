// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'i' to 'mapPrototypeHasCheck'
// - Resolved require(282428) to 'map-prototype-has-check'
// - Renamed variable 'a' to 'mapPrototypeUtils'
// - Resolved require(522979) to 'map-prototype-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 307907
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var mapPrototypeHasCheck = require("map-prototype-has-check") /*id: 282428*/;
  var mapPrototypeUtils = require("map-prototype-utils") /*id: 522979*/;
  var u = TypeError;
  var c = mapPrototypeUtils.get;
  var f = mapPrototypeUtils.has;
  var s = mapPrototypeUtils.set;
  polyfillPropertyDefiner({
    target: "Map",
    proto: true,
    real: true,
    forced: true
  }, {
    update: function (t, r) {
      var e = mapPrototypeHasCheck(this);
      var n = arguments.length;
      functionValidator(r);
      var a = f(e, t);
      if (!a && n < 3) {
        throw new u("Updating absent value");
      }
      var l = a ? c(e, t) : functionValidator(n > 2 ? arguments[2] : undefined)(t, e);
      s(e, t, r(l, t, e));
      return e;
    }
  });
}