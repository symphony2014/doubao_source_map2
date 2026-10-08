// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'setPrototypeCheck'
// - Resolved require(754725) to 'set-prototype-check'
// - Renamed variable 'a' to 'setFindPolyfillUtil'
// - Resolved require(581853) to 'set-find-polyfill-util'
// - Renamed variable 'u' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 882708
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var setPrototypeCheck = require("set-prototype-check") /*id: 754725*/;
  var setFindPolyfillUtil = require("set-find-polyfill-util") /*id: 581853*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var c = functionBindFallback([].join);
  var f = functionBindFallback([].push);
  polyfillPropertyDefiner({
    target: "Set",
    proto: true,
    real: true,
    forced: true
  }, {
    join: function (t) {
      var r = setPrototypeCheck(this);
      var e = t === undefined ? "," : symbolToStringConverter_1(t);
      var n = [];
      setFindPolyfillUtil(r, function (t) {
        f(n, t);
      });
      return c(n, e);
    }
  });
}