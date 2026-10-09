// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'propertyDescriptorAccessorBinder'
// - Resolved require(618551) to 'property-descriptor-accessor-binder'
// - Renamed variable 'a' to 'mathTruncSafeValidate'
// - Resolved require(120156) to 'math-trunc-safe-validate'
// - Renamed variable 'u' to 'arraybufferDetachValidator'
// - Resolved require(203147) to 'arraybuffer-detach-validator'
// - Renamed variable 'c' to 'arraybufferByteLengthGetter'
// - Resolved require(317712) to 'arraybuffer-byte-length-getter'
// - Renamed variable 'f' to 'structuredCloneTransferPolyfill'
// - Resolved require(427401) to 'structured-clone-transfer-polyfill'
// - Renamed variable 's' to 'structuredCloneSupportCheck'
// - Resolved require(451243) to 'structured-clone-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 999464
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var propertyDescriptorAccessorBinder = require("property-descriptor-accessor-binder") /*id: 618551*/;
  var mathTruncSafeValidate = require("math-trunc-safe-validate") /*id: 120156*/;
  var arraybufferDetachValidator = require("arraybuffer-detach-validator") /*id: 203147*/;
  var arraybufferByteLengthGetter = require("arraybuffer-byte-length-getter") /*id: 317712*/;
  var structuredCloneTransferPolyfill = require("structured-clone-transfer-polyfill") /*id: 427401*/;
  var structuredCloneSupportCheck = require("structured-clone-support-check") /*id: 451243*/;
  var l = globalObjectPolyfill.structuredClone;
  var v = globalObjectPolyfill.ArrayBuffer;
  var p = globalObjectPolyfill.DataView;
  var h = Math.min;
  var d = v.prototype;
  var y = p.prototype;
  var g = functionBindFallback(d.slice);
  var b = propertyDescriptorAccessorBinder(d, "resizable", "get");
  var w = propertyDescriptorAccessorBinder(d, "maxByteLength", "get");
  var m = functionBindFallback(y.getInt8);
  var x = functionBindFallback(y.setInt8);
  module.exports = (structuredCloneSupportCheck || structuredCloneTransferPolyfill) && function (t, r, e) {
    var n;
    var o = arraybufferByteLengthGetter(t);
    var i = r === undefined ? o : mathTruncSafeValidate(r);
    var d = !b || !b(t);
    arraybufferDetachValidator(t);
    if (structuredCloneSupportCheck && (t = l(t, {
      transfer: [t]
    }), o === i && (e || d))) {
      return t;
    }
    if (o >= i && (!e || d)) {
      n = g(t, 0, i);
    } else {
      n = new v(i, e && !d && w ? {
        maxByteLength: w(t)
      } : undefined);
      var y = new p(t);
      var A = new p(n);
      var E = h(i, o);
      var S = 0;
      for (; S < E; S++) {
        x(A, S, m(y, S));
      }
    }
    if (!structuredCloneSupportCheck) {
      structuredCloneTransferPolyfill(t);
    }
    return n;
  };
}