// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'mathRangeMapPolyfill'
// - Resolved require(128504) to 'math-range-map-polyfill'
// - Renamed variable 'i' to 'mathFroundPolyfill'
// - Resolved require(87671) to 'math-fround-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 615185
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var mathRangeMapPolyfill = require("math-range-map-polyfill") /*id: 128504*/;
  var mathFroundPolyfill = require("math-fround-polyfill") /*id: 87671*/;
  polyfillPropertyDefiner({
    target: "Math",
    stat: true,
    forced: true
  }, {
    fscale: function (t, r, e, n, a) {
      return mathFroundPolyfill(mathRangeMapPolyfill(t, r, e, n, a));
    }
  });
}