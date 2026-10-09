// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'i' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'a' to 'argumentLengthValidator_1'
// - Resolved require(798037) to 'argument-length-validator_1'
// - Renamed variable 'u' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'c' to 'urlSearchParamsPolyfillCheck'
// - Resolved require(677599) to 'url-search-params-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 377499
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var argumentLengthValidator_1 = require("argument-length-validator_1") /*id: 798037*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var urlSearchParamsPolyfillCheck = require("url-search-params-polyfill-check") /*id: 677599*/;
  var f = globalPolyfillAccess("URL");
  var s = urlSearchParamsPolyfillCheck && tryCatchFunctionWrapper(function () {
    f.canParse();
  });
  var l = tryCatchFunctionWrapper(function () {
    return f.canParse.length !== 1;
  });
  polyfillPropertyDefiner({
    target: "URL",
    stat: true,
    forced: !s || l
  }, {
    canParse: function (t) {
      var r = argumentLengthValidator_1(arguments.length, 1);
      var e = symbolToStringConverter_1(t);
      var n = r < 2 || arguments[1] === undefined ? undefined : symbolToStringConverter_1(arguments[1]);
      try {
        new f(e, n);
        return true;
      } catch (t) {
        return false;
      }
    }
  });
}