// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'l' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'i' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'a' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'd' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// - Renamed variable 'r' to 'detectBindSupport'
// - Resolved require(412787) to 'detect-bind-support'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 586622
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var detectBindSupport = require("detect-bind-support") /*id: 412787*/;
  var o = Function;
  var B = functionBindFallback([].concat);
  var R = functionBindFallback([].join);
  var c = {};
  function s(U, n, F) {
    if (!objectHasOwnPolyfill_1(c, n)) {
      var Q = [];
      var l = 0;
      for (; l < n; l++) {
        Q[l] = "a[" + l + "]";
      }
      c[n] = o("C,a", "return new C(" + R(Q, ",") + ")");
    }
    return c[n](U, F);
  }
  module.exports = detectBindSupport ? o.bind : function (U) {
    var n = functionValidator(this);
    var F = n.prototype;
    var Q = arraySlicePolyfill_2(arguments, 1);
    function a() {
      var F = B(Q, arraySlicePolyfill_2(arguments));
      if (this instanceof a) {
        return s(n, F.length, F);
      } else {
        return n.apply(U, F);
      }
    }
    if (isObjectOrFunctionCheck(F)) {
      a.prototype = F;
    }
    return a;
  };
}