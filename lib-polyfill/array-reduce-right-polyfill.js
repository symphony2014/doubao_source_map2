// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(20634) to 'array-reduce-polyfill-implementation'
// - Renamed variable 'i' to 'safeArrayMethodCheck_1'
// - Resolved require(811572) to 'safe-array-method-check_1'
// - Renamed variable 'a' to 'chromeV8VersionPolyfill'
// - Resolved require(45469) to 'chrome-v8-version-polyfill'
// - Resolved require(705753) to 'node-environment-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 169309
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var o = require("array-reduce-polyfill-implementation") /*id: 20634*/.right;
  var safeArrayMethodCheck_1 = require("safe-array-method-check_1") /*id: 811572*/;
  var chromeV8VersionPolyfill = require("chrome-v8-version-polyfill") /*id: 45469*/;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    forced: !require("node-environment-check") /*id: 705753*/ && chromeV8VersionPolyfill > 79 && chromeV8VersionPolyfill < 83 || !safeArrayMethodCheck_1("reduceRight")
  }, {
    reduceRight: function (t) {
      return o(this, t, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
}