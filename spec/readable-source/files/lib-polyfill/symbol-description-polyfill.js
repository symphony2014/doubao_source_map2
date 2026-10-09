// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'i' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'a' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'u' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'c' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'f' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Renamed variable 's' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'l' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 'v' to 'objectDefaultsAssign'
// - Resolved require(210693) to 'object-defaults-assign'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 432539
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var objectDefaultsAssign = require("object-defaults-assign") /*id: 210693*/;
  var p = globalObjectPolyfill.Symbol;
  var h = p && p.prototype;
  if (es5PropertyDescriptorCheck && isFunctionPolyfill(p) && (!("description" in h) || p().description !== undefined)) {
    var d = {};
    function y() {
      var t = arguments.length < 1 || arguments[0] === undefined ? undefined : symbolToStringConverter_1(arguments[0]);
      var r = isPrototypeOfPolyfill(h, this) ? new p(t) : t === undefined ? p() : p(t);
      if (t === "") {
        d[r] = true;
      }
      return r;
    }
    objectDefaultsAssign(y, p);
    y.prototype = h;
    h.constructor = y;
    var g = String(p("description detection")) === "Symbol(description detection)";
    var b = functionBindFallback(h.valueOf);
    var w = functionBindFallback(h.toString);
    var m = /^Symbol\((.*)\)[^)]+$/;
    var x = functionBindFallback("".replace);
    var A = functionBindFallback("".slice);
    objectDefinePropertyPolyfill(h, "description", {
      configurable: true,
      get: function () {
        var t = b(this);
        if (objectHasOwnPolyfill_1(d, t)) {
          return "";
        }
        var r = w(t);
        var e = g ? A(r, 7, -1) : x(r, m, "$1");
        if (e === "") {
          return undefined;
        } else {
          return e;
        }
      }
    });
    polyfillPropertyDefiner({
      global: true,
      constructor: true,
      forced: true
    }, {
      Symbol: y
    });
  }
}