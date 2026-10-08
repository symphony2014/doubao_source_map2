// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'l' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'a' to 'arraybufferSupportCheck'
// - Resolved require(296482) to 'arraybuffer-support-check'
// - Renamed variable 'd' to 'functionNamePropertyCheck'
// - Resolved require(968072) to 'function-name-property-check'
// - Renamed variable 'r' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'o' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 'B' to 'definePropertiesHelper'
// - Resolved require(581987) to 'define-properties-helper'
// - Renamed variable 'R' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'c' to 'validatePrototypeInvocation'
// - Resolved require(376282) to 'validate-prototype-invocation'
// - Renamed variable 's' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'V' to 'clampSafeInteger'
// - Resolved require(279936) to 'clamp-safe-integer'
// - Renamed variable 'Z' to 'mathTruncSafeValidate'
// - Resolved require(120156) to 'math-trunc-safe-validate'
// - Renamed variable 'h' to 'mathFroundPolyfill'
// - Resolved require(87671) to 'math-fround-polyfill'
// - Renamed variable 'u' to 'ieee754FloatEncoder'
// - Resolved require(51324) to 'ieee754-float-encoder'
// - Renamed variable 'S' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// - Renamed variable 'J' to 'setPrototypeOfPolyfill'
// - Resolved require(411942) to 'set-prototype-of-polyfill'
// - Renamed variable 'm' to 'arrayFillUtil'
// - Resolved require(222053) to 'array-fill-util'
// - Renamed variable 'p' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// - Renamed variable 'W' to 'setPrototypeOfPolyfill_1'
// - Resolved require(579783) to 'set-prototype-of-polyfill_1'
// - Renamed variable 'E' to 'objectDefaultsAssign'
// - Resolved require(210693) to 'object-defaults-assign'
// - Renamed variable 'k' to 'setToStringTagUtil'
// - Resolved require(768336) to 'set-to-string-tag-util'
// - Renamed variable 'N' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 622500
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var arraybufferSupportCheck = require("arraybuffer-support-check") /*id: 296482*/;
  var functionNamePropertyCheck = require("function-name-property-check") /*id: 968072*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var definePropertiesHelper = require("define-properties-helper") /*id: 581987*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var validatePrototypeInvocation = require("validate-prototype-invocation") /*id: 376282*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var clampSafeInteger = require("clamp-safe-integer") /*id: 279936*/;
  var mathTruncSafeValidate = require("math-trunc-safe-validate") /*id: 120156*/;
  var mathFroundPolyfill = require("math-fround-polyfill") /*id: 87671*/;
  var ieee754FloatEncoder = require("ieee754-float-encoder") /*id: 51324*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var setPrototypeOfPolyfill = require("set-prototype-of-polyfill") /*id: 411942*/;
  var arrayFillUtil = require("array-fill-util") /*id: 222053*/;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var setPrototypeOfPolyfill_1 = require("set-prototype-of-polyfill_1") /*id: 579783*/;
  var objectDefaultsAssign = require("object-defaults-assign") /*id: 210693*/;
  var setToStringTagUtil = require("set-to-string-tag-util") /*id: 768336*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var y = functionNamePropertyCheck.PROPER;
  var b = functionNamePropertyCheck.CONFIGURABLE;
  var f = "ArrayBuffer";
  var T = "DataView";
  var v = "prototype";
  var C = "Wrong index";
  var X = objectStateManager.getterFor(f);
  var L = objectStateManager.getterFor(T);
  var G = objectStateManager.set;
  var g = globalObjectPolyfill[f];
  var D = g;
  var x = D && D[v];
  var I = globalObjectPolyfill[T];
  var M = I && I[v];
  var Y = Object.prototype;
  var K = globalObjectPolyfill.Array;
  var w = globalObjectPolyfill.RangeError;
  var H = functionBindFallback(arrayFillUtil);
  var P = functionBindFallback([].reverse);
  var j = ieee754FloatEncoder.pack;
  var z = ieee754FloatEncoder.unpack;
  function O(U) {
    return [U & 255];
  }
  function _(U) {
    return [U & 255, U >> 8 & 255];
  }
  function A(U) {
    return [U & 255, U >> 8 & 255, U >> 16 & 255, U >> 24 & 255];
  }
  function q(U) {
    return U[3] << 24 | U[2] << 16 | U[1] << 8 | U[0];
  }
  function $(U) {
    return j(mathFroundPolyfill(U), 23, 4);
  }
  function ee(U) {
    return j(U, 52, 8);
  }
  function et(U, n, F) {
    objectDefinePropertyPolyfill(U[v], n, {
      configurable: true,
      get: function () {
        return F(this)[n];
      }
    });
  }
  function eU(U, n, F, Q) {
    var l = L(U);
    var i = mathTruncSafeValidate(F);
    if (i + n > l.byteLength) {
      throw new w(C);
    }
    var a = l.bytes;
    var d = i + l.byteOffset;
    var r = arraySlicePolyfill_2(a, d, d + n);
    if (Q) {
      return r;
    } else {
      return P(r);
    }
  }
  function en(U, n, F, Q, l, i) {
    var a = L(U);
    var d = mathTruncSafeValidate(F);
    var r = Q(+l);
    var o = !!i;
    if (d + n > a.byteLength) {
      throw new w(C);
    }
    var B = a.bytes;
    var R = d + a.byteOffset;
    var c = 0;
    for (; c < n; c++) {
      B[R + c] = r[o ? c : n - c - 1];
    }
  }
  if (arraybufferSupportCheck) {
    var eF = y && g.name !== f;
    if (!tryCatchFunctionWrapper(function () {
      g(1);
    }) || !tryCatchFunctionWrapper(function () {
      new g(-1);
    }) || tryCatchFunctionWrapper(function () {
      new g();
      new g(1.5);
      new g(NaN);
      return g.length !== 1 || eF && !b;
    })) {
      (D = function (U) {
        validatePrototypeInvocation(this, x);
        return setPrototypeOfPolyfill_1(new g(mathTruncSafeValidate(U)), this, D);
      })[v] = x;
      x.constructor = D;
      objectDefaultsAssign(D, g);
    } else if (eF && b) {
      definePropertyHelper_1(g, "name", f);
    }
    if (setPrototypeOfPolyfill && getPrototypeOfPolyfill_1(M) !== Y) {
      setPrototypeOfPolyfill(M, Y);
    }
    var eQ = new I(new D(2));
    var el = functionBindFallback(M.setInt8);
    eQ.setInt8(0, 2147483648);
    eQ.setInt8(1, 2147483649);
    if (eQ.getInt8(0) || !eQ.getInt8(1)) {
      definePropertiesHelper(M, {
        setInt8: function (U, n) {
          el(this, U, n << 24 >> 24);
        },
        setUint8: function (U, n) {
          el(this, U, n << 24 >> 24);
        }
      }, {
        unsafe: true
      });
    }
  } else {
    x = (D = function (U) {
      validatePrototypeInvocation(this, x);
      var n = mathTruncSafeValidate(U);
      G(this, {
        type: f,
        bytes: H(K(n), 0),
        byteLength: n
      });
      if (!es5PropertyDescriptorCheck) {
        this.byteLength = n;
        this.detached = false;
      }
    })[v];
    M = (I = function (U, n, F) {
      validatePrototypeInvocation(this, M);
      validatePrototypeInvocation(U, x);
      var Q = X(U);
      var l = Q.byteLength;
      var a = mathTruncPolyfill_2(n);
      if (a < 0 || a > l) {
        throw new w("Wrong offset");
      }
      F = F === undefined ? l - a : clampSafeInteger(F);
      if (a + F > l) {
        throw new w("Wrong length");
      }
      G(this, {
        type: T,
        buffer: U,
        byteLength: F,
        byteOffset: a,
        bytes: Q.bytes
      });
      if (!es5PropertyDescriptorCheck) {
        this.buffer = U;
        this.byteLength = F;
        this.byteOffset = a;
      }
    })[v];
    if (es5PropertyDescriptorCheck) {
      et(D, "byteLength", X);
      et(I, "buffer", L);
      et(I, "byteLength", L);
      et(I, "byteOffset", L);
    }
    definePropertiesHelper(M, {
      getInt8: function (U) {
        return eU(this, 1, U)[0] << 24 >> 24;
      },
      getUint8: function (U) {
        return eU(this, 1, U)[0];
      },
      getInt16: function (U) {
        var n = eU(this, 2, U, arguments.length > 1 && arguments[1]);
        return (n[1] << 8 | n[0]) << 16 >> 16;
      },
      getUint16: function (U) {
        var n = eU(this, 2, U, arguments.length > 1 && arguments[1]);
        return n[1] << 8 | n[0];
      },
      getInt32: function (U) {
        return q(eU(this, 4, U, arguments.length > 1 && arguments[1]));
      },
      getUint32: function (U) {
        return q(eU(this, 4, U, arguments.length > 1 && arguments[1])) >>> 0;
      },
      getFloat32: function (U) {
        return z(eU(this, 4, U, arguments.length > 1 && arguments[1]), 23);
      },
      getFloat64: function (U) {
        return z(eU(this, 8, U, arguments.length > 1 && arguments[1]), 52);
      },
      setInt8: function (U, n) {
        en(this, 1, U, O, n);
      },
      setUint8: function (U, n) {
        en(this, 1, U, O, n);
      },
      setInt16: function (U, n) {
        en(this, 2, U, _, n, arguments.length > 2 && arguments[2]);
      },
      setUint16: function (U, n) {
        en(this, 2, U, _, n, arguments.length > 2 && arguments[2]);
      },
      setInt32: function (U, n) {
        en(this, 4, U, A, n, arguments.length > 2 && arguments[2]);
      },
      setUint32: function (U, n) {
        en(this, 4, U, A, n, arguments.length > 2 && arguments[2]);
      },
      setFloat32: function (U, n) {
        en(this, 4, U, $, n, arguments.length > 2 && arguments[2]);
      },
      setFloat64: function (U, n) {
        en(this, 8, U, ee, n, arguments.length > 2 && arguments[2]);
      }
    });
  }
  setToStringTagUtil(D, f);
  setToStringTagUtil(I, T);
  module.exports = {
    ArrayBuffer: D,
    DataView: I
  };
}