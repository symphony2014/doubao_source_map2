// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'a' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'u' to 'runtimeEnvironmentDetector_1'
// - Resolved require(279839) to 'runtime-environment-detector_1'
// - Renamed variable 'c' to 'userAgentStringExtractor'
// - Resolved require(856124) to 'user-agent-string-extractor'
// - Renamed variable 'f' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// - Renamed variable 's' to 'argumentLengthValidator_1'
// - Resolved require(798037) to 'argument-length-validator_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 376492
         */
module.exports = function (module, exports, require) {
  var n;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var runtimeEnvironmentDetector_1 = require("runtime-environment-detector_1") /*id: 279839*/;
  var userAgentStringExtractor = require("user-agent-string-extractor") /*id: 856124*/;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var argumentLengthValidator_1 = require("argument-length-validator_1") /*id: 798037*/;
  var l = globalObjectPolyfill.Function;
  var v = /MSIE .\./.test(userAgentStringExtractor) || runtimeEnvironmentDetector_1 === "BUN" && ((n = globalObjectPolyfill.Bun.version.split(".")).length < 3 || n[0] === "0" && (n[1] < 3 || n[1] === "3" && n[2] === "0"));
  module.exports = function (t, r) {
    var e = r ? 2 : 1;
    if (v) {
      return function (n, o) {
        var u = argumentLengthValidator_1(arguments.length, 1) > e;
        var c = isFunctionPolyfill(n) ? n : l(n);
        var v = u ? arraySlicePolyfill_2(arguments, e) : [];
        var p = u ? function () {
          reflectApplyPolyfill_1(c, this, v);
        } : c;
        if (r) {
          return t(p, o);
        } else {
          return t(p);
        }
      };
    } else {
      return t;
    }
  };
}