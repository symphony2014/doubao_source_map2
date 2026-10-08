// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'a' to 'coreJsInspectSource'
// - Resolved require(291102) to 'core-js-inspect-source'
// - Renamed variable 'u' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'c' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 623370
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var coreJsInspectSource = require("core-js-inspect-source") /*id: 291102*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var f = Object.getOwnPropertyDescriptor;
  var s = /^\s*class\b/;
  var l = functionBindFallback(s.exec);
  function v(t) {
    try {
      if (!es5PropertyDescriptorCheck || !l(s, coreJsInspectSource(t))) {
        return false;
      }
    } catch (t) {}
    var r = f(t, "prototype");
    return !!r && objectHasOwnPolyfill_1(r, "writable") && !r.writable;
  }
  polyfillPropertyDefiner({
    target: "Function",
    stat: true,
    sham: true,
    forced: true
  }, {
    isCallable: function (t) {
      return isFunctionPolyfill(t) && !v(t);
    }
  });
}