// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'arraybufferSupportCheck'
// - Resolved require(296482) to 'arraybuffer-support-check'
// - Renamed variable 'u' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'c' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'f' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 's' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'l' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'v' to 'objectTypeDetectorPolyfill'
// - Resolved require(549562) to 'object-type-detector-polyfill'
// - Renamed variable 'p' to 'safeStringConverter'
// - Resolved require(871818) to 'safe-string-converter'
// - Renamed variable 'h' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'd' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'y' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 'g' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Renamed variable 'b' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// - Renamed variable 'w' to 'setPrototypeOfPolyfill'
// - Resolved require(411942) to 'set-prototype-of-polyfill'
// - Renamed variable 'm' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'x' to 'symbolDescriptionGenerator'
// - Resolved require(556893) to 'symbol-description-generator'
// - Renamed variable 'A' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 357134
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var i;
  var arraybufferSupportCheck = require("arraybuffer-support-check") /*id: 296482*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var objectTypeDetectorPolyfill = require("object-type-detector-polyfill") /*id: 549562*/;
  var safeStringConverter = require("safe-string-converter") /*id: 871818*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var setPrototypeOfPolyfill = require("set-prototype-of-polyfill") /*id: 411942*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var symbolDescriptionGenerator = require("symbol-description-generator") /*id: 556893*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var E = objectStateManager.enforce;
  var S = objectStateManager.get;
  var O = globalObjectPolyfill.Int8Array;
  var R = O && O.prototype;
  var I = globalObjectPolyfill.Uint8ClampedArray;
  var T = I && I.prototype;
  var k = O && getPrototypeOfPolyfill_1(O);
  var M = R && getPrototypeOfPolyfill_1(R);
  var j = Object.prototype;
  var D = globalObjectPolyfill.TypeError;
  var P = coreJsWksAccess("toStringTag");
  var _ = symbolDescriptionGenerator("TYPED_ARRAY_TAG");
  var C = "TypedArrayConstructor";
  var N = arraybufferSupportCheck && !!setPrototypeOfPolyfill && objectTypeDetectorPolyfill(globalObjectPolyfill.opera) !== "Opera";
  var U = false;
  var F = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };
  var B = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };
  function L(t) {
    var r = getPrototypeOfPolyfill_1(t);
    if (isObjectOrFunctionCheck(r)) {
      var e = S(r);
      if (e && objectHasOwnPolyfill_1(e, C)) {
        return e[C];
      } else {
        return L(r);
      }
    }
  }
  function z(t) {
    if (!isObjectOrFunctionCheck(t)) {
      return false;
    }
    var r = objectTypeDetectorPolyfill(t);
    return objectHasOwnPolyfill_1(F, r) || objectHasOwnPolyfill_1(B, r);
  }
  for (n in F) {
    if (i = (o = globalObjectPolyfill[n]) && o.prototype) {
      E(i)[C] = o;
    } else {
      N = false;
    }
  }
  for (n in B) {
    if (i = (o = globalObjectPolyfill[n]) && o.prototype) {
      E(i)[C] = o;
    }
  }
  if ((!N || !isFunctionPolyfill(k) || k === Function.prototype) && (k = function () {
    throw new D("Incorrect invocation");
  }, N)) {
    for (n in F) {
      if (globalObjectPolyfill[n]) {
        setPrototypeOfPolyfill(globalObjectPolyfill[n], k);
      }
    }
  }
  if ((!N || !M || M === j) && (M = k.prototype, N)) {
    for (n in F) {
      if (globalObjectPolyfill[n]) {
        setPrototypeOfPolyfill(globalObjectPolyfill[n].prototype, M);
      }
    }
  }
  if (N && getPrototypeOfPolyfill_1(T) !== M) {
    setPrototypeOfPolyfill(T, M);
  }
  if (es5PropertyDescriptorCheck && !objectHasOwnPolyfill_1(M, P)) {
    U = true;
    objectDefinePropertyPolyfill(M, P, {
      configurable: true,
      get: function () {
        if (isObjectOrFunctionCheck(this)) {
          return this[_];
        } else {
          return undefined;
        }
      }
    });
    for (n in F) {
      if (globalObjectPolyfill[n]) {
        definePropertyHelper_1(globalObjectPolyfill[n], _, n);
      }
    }
  }
  module.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: N,
    TYPED_ARRAY_TAG: U && _,
    aTypedArray: function (t) {
      if (z(t)) {
        return t;
      }
      throw new D("Target is not a typed array");
    },
    aTypedArrayConstructor: function (t) {
      if (isFunctionPolyfill(t) && (!setPrototypeOfPolyfill || isPrototypeOfPolyfill(k, t))) {
        return t;
      }
      throw new D(safeStringConverter(t) + " is not a typed array constructor");
    },
    exportTypedArrayMethod: function (t, r, e, n) {
      if (es5PropertyDescriptorCheck) {
        if (e) {
          for (var o in F) {
            var i = globalObjectPolyfill[o];
            if (i && objectHasOwnPolyfill_1(i.prototype, t)) {
              try {
                delete i.prototype[t];
              } catch (e) {
                try {
                  i.prototype[t] = r;
                } catch (t) {}
              }
            }
          }
        }
        if (!M[t] || e) {
          definePropertyHelper_1_1(M, t, e ? r : N && R[t] || r, n);
        }
      }
    },
    exportTypedArrayStaticMethod: function (t, r, e) {
      var n;
      var o;
      if (es5PropertyDescriptorCheck) {
        if (setPrototypeOfPolyfill) {
          if (e) {
            for (n in F) {
              if ((o = globalObjectPolyfill[n]) && objectHasOwnPolyfill_1(o, t)) {
                try {
                  delete o[t];
                } catch (t) {}
              }
            }
          }
          if (k[t] && !e) {
            return;
          }
          try {
            return definePropertyHelper_1_1(k, t, e ? r : N && k[t] || r);
          } catch (t) {}
        }
        for (n in F) {
          if ((o = globalObjectPolyfill[n]) && (!o[t] || e)) {
            definePropertyHelper_1_1(o, t, r);
          }
        }
      }
    },
    getTypedArrayConstructor: L,
    isView: function (t) {
      if (!isObjectOrFunctionCheck(t)) {
        return false;
      }
      var r = objectTypeDetectorPolyfill(t);
      return r === "DataView" || objectHasOwnPolyfill_1(F, r) || objectHasOwnPolyfill_1(B, r);
    },
    isTypedArray: z,
    TypedArray: k,
    TypedArrayPrototype: M
  };
}