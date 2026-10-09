// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'a' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'u' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Resolved require(968072) to 'function-name-property-check'
// - Renamed variable 'f' to 'coreJsInspectSource'
// - Resolved require(291102) to 'core-js-inspect-source'
// - Renamed variable 's' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 525314
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var c = require("function-name-property-check") /*id: 968072*/.CONFIGURABLE;
  var coreJsInspectSource = require("core-js-inspect-source") /*id: 291102*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var l = objectStateManager.enforce;
  var v = objectStateManager.get;
  var p = String;
  var h = Object.defineProperty;
  var d = functionBindFallback("".slice);
  var y = functionBindFallback("".replace);
  var g = functionBindFallback([].join);
  var b = es5PropertyDescriptorCheck && !tryCatchFunctionWrapper(function () {
    return h(function () {}, "length", {
      value: 8
    }).length !== 8;
  });
  var w = String(String).split("String");
  var m = module.exports = function (t, r, e) {
    if (d(p(r), 0, 7) === "Symbol(") {
      r = "[" + y(p(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
    }
    if (e && e.getter) {
      r = "get " + r;
    }
    if (e && e.setter) {
      r = "set " + r;
    }
    if (!objectHasOwnPolyfill_1(t, "name") || c && t.name !== r) {
      if (es5PropertyDescriptorCheck) {
        h(t, "name", {
          value: r,
          configurable: true
        });
      } else {
        t.name = r;
      }
    }
    if (b && e && objectHasOwnPolyfill_1(e, "arity") && t.length !== e.arity) {
      h(t, "length", {
        value: e.arity
      });
    }
    try {
      if (e && objectHasOwnPolyfill_1(e, "constructor") && e.constructor) {
        if (es5PropertyDescriptorCheck) {
          h(t, "prototype", {
            writable: false
          });
        }
      } else {
        t.prototype &&= undefined;
      }
    } catch (t) {}
    var n = l(t);
    if (!objectHasOwnPolyfill_1(n, "source")) {
      n.source = g(w, typeof r == "string" ? r : "");
    }
    return t;
  };
  Function.prototype.toString = m(function () {
    return isFunctionPolyfill(this) && v(this).source || coreJsInspectSource(this);
  }, "toString");
}