// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'numberAssertUtil'
// - Resolved require(962479) to 'number-assert-util'
// - Renamed variable 'i' to 'assertNotNanUtil'
// - Resolved require(102592) to 'assert-not-nan-util'
// - Renamed variable 'a' to 'objectIsPolyfill'
// - Resolved require(859314) to 'object-is-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 608207
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var numberAssertUtil = require("number-assert-util") /*id: 962479*/;
  var assertNotNanUtil = require("assert-not-nan-util") /*id: 102592*/;
  var objectIsPolyfill = require("object-is-polyfill") /*id: 859314*/;
  var u = RangeError;
  var c = Math.min;
  var f = Math.max;
  polyfillPropertyDefiner({
    target: "Math",
    stat: true,
    forced: true
  }, {
    clamp: function (t, r, e) {
      numberAssertUtil(t);
      assertNotNanUtil(numberAssertUtil(r));
      assertNotNanUtil(numberAssertUtil(e));
      if (objectIsPolyfill(r, 0) && objectIsPolyfill(e, -0) || r > e) {
        throw new u("`min` should be smaller than `max`");
      }
      return c(e, f(r, t));
    }
  });
}