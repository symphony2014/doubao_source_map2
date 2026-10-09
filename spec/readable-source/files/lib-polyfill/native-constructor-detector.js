// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'a' to 'objectTypeDetectorPolyfill'
// - Resolved require(549562) to 'object-type-detector-polyfill'
// - Renamed variable 'u' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'c' to 'coreJsInspectSource'
// - Resolved require(291102) to 'core-js-inspect-source'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 876384
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var objectTypeDetectorPolyfill = require("object-type-detector-polyfill") /*id: 549562*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var coreJsInspectSource = require("core-js-inspect-source") /*id: 291102*/;
  function f() {}
  var s = globalPolyfillAccess("Reflect", "construct");
  var l = /^\s*(?:class|function)\b/;
  var v = functionBindFallback(l.exec);
  var p = !l.test(f);
  function h(t) {
    if (!isFunctionPolyfill(t)) {
      return false;
    }
    try {
      s(f, [], t);
      return true;
    } catch (t) {
      return false;
    }
  }
  function d(t) {
    if (!isFunctionPolyfill(t)) {
      return false;
    }
    switch (objectTypeDetectorPolyfill(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return p || !!v(l, coreJsInspectSource(t));
    } catch (t) {
      return true;
    }
  }
  d.sham = true;
  module.exports = !s || tryCatchFunctionWrapper(function () {
    var t;
    return h(h.call) || !h(Object) || !h(function () {
      t = true;
    }) || t;
  }) ? d : h;
}