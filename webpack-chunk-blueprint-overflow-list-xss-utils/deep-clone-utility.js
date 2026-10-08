// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'deepClone'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 319011
         */
module.exports = function (module, exports, require) {
  var mapCacheImplementation_1 = require("map-cache-implementation_1") /*id: 215370*/;
  var arrayEachUtil = require("array-each-util") /*id: 42571*/;
  var safePropertySetter = require("safe-property-setter") /*id: 859066*/;
  var safePropertyAssign = require("safe-property-assign") /*id: 182115*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var getOwnKeysUtil_1 = require("get-own-keys-util_1") /*id: 144417*/;
  var bufferCloneUtil = require("buffer-clone-util") /*id: 456819*/;
  var arrayCopyUtil = require("array-copy-util") /*id: 996367*/;
  var enumerableSymbolsUtil = require("enumerable-symbols-util") /*id: 705042*/;
  var getPrototypeSymbolsUtil = require("get-prototype-symbols-util") /*id: 951213*/;
  var normalizeArrayData = require("normalize-array-data") /*id: 833159*/;
  var objectKeysNormalizer = require("object-keys-normalizer") /*id: 585390*/;
  var nativeBaseGetTagFix = require("native-base-get-tag-fix") /*id: 360094*/;
  var v = Object.prototype.hasOwnProperty;
  function m(e) {
    var t = e.length;
    var n = new e.constructor(t);
    if (t && typeof e[0] == "string" && v.call(e, "index")) {
      n.index = e.index;
      n.input = e.input;
    }
    return n;
  }
  var uint8ArrayClone = require("uint8-array-clone") /*id: 201549*/;
  function b(e, t) {
    var n = t ? uint8ArrayClone.cloneTypedArray(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var _ = /\w*$/;
  function w(e) {
    var t = new e.constructor(e.source, _.exec(e));
    t.lastIndex = e.lastIndex;
    return t;
  }
  var globalSymbolExport = require("global-symbol-export") /*id: 378602*/;
  var S = globalSymbolExport.globalSymbol ? globalSymbolExport.globalSymbol.prototype : undefined;
  var x = S ? S.valueOf : undefined;
  var typedArrayCloneUtil = require("typed-array-clone-util") /*id: 989356*/;
  function O(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case "[object ArrayBuffer]":
        return uint8ArrayClone.cloneTypedArray(e);
      case "[object Boolean]":
      case "[object Date]":
        return new r(+e);
      case "[object DataView]":
        return b(e, n);
      case "[object Float32Array]":
      case "[object Float64Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object Int32Array]":
      case "[object Uint8Array]":
      case "[object Uint8ClampedArray]":
      case "[object Uint16Array]":
      case "[object Uint32Array]":
        return typedArrayCloneUtil.cloneTypedArray(e, n);
      case "[object Map]":
      case "[object Set]":
        return new r();
      case "[object Number]":
      case "[object String]":
        return new r(e);
      case "[object RegExp]":
        return w(e);
      case "[object Symbol]":
        if (x) {
          return Object(x.call(e));
        } else {
          return {};
        }
    }
  }
  var objectPrototypeCreator = require("object-prototype-creator") /*id: 245962*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var bufferIsBufferUtil = require("buffer-is-buffer-util") /*id: 375215*/;
  var mapTypeCheckUtil = require("map-type-check-util") /*id: 329788*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isSetValidator = require("is-set-validator") /*id: 138262*/;
  var D = "[object Arguments]";
  var j = "[object Function]";
  var I = "[object Object]";
  var N = {};
  N[D] = N["[object Array]"] = N["[object ArrayBuffer]"] = N["[object DataView]"] = N["[object Boolean]"] = N["[object Date]"] = N["[object Float32Array]"] = N["[object Float64Array]"] = N["[object Int8Array]"] = N["[object Int16Array]"] = N["[object Int32Array]"] = N["[object Map]"] = N["[object Number]"] = N[I] = N["[object RegExp]"] = N["[object Set]"] = N["[object String]"] = N["[object Symbol]"] = N["[object Uint8Array]"] = N["[object Uint8ClampedArray]"] = N["[object Uint16Array]"] = N["[object Uint32Array]"] = true;
  N["[object Error]"] = N[j] = N["[object WeakMap]"] = false;
  var L = function e(t, n, v, y, b, _) {
    var w;
    var E = n & 1;
    var S = n & 2;
    var x = n & 4;
    if (v) {
      w = b ? v(t, y, b, _) : v(t);
    }
    if (w !== undefined) {
      return w;
    }
    if (!isObjectOrFunction_1_1.isObjectOrFunction(t)) {
      return t;
    }
    var k = arrayIsArrayUtil.isArray(t);
    if (k) {
      w = m(t);
      if (!E) {
        return arrayCopyUtil.copyArray(t, w);
      }
    } else {
      var L;
      var B;
      var Z;
      var U;
      var z = nativeBaseGetTagFix.getBaseGetTag(t);
      var F = z == j || z == "[object GeneratorFunction]";
      if (bufferIsBufferUtil.isBufferCheck(t)) {
        return bufferCloneUtil.cloneBuffer(t, E);
      }
      if (z == I || z == D || F && !b) {
        w = S || F ? {} : objectPrototypeCreator.createObject(t);
        if (!E) {
          if (S) {
            B = (L = w) && safePropertyAssign.safePropAssign(t, getOwnKeysUtil_1.getOwnKeys(t), L);
            return safePropertyAssign.safePropAssign(t, getPrototypeSymbolsUtil.getPrototypeSymbols(t), B);
          } else {
            U = (Z = w) && safePropertyAssign.safePropAssign(t, getOwnKeys.getOwnKeys(t), Z);
            return safePropertyAssign.safePropAssign(t, enumerableSymbolsUtil.getOwnEnumSymbols(t), U);
          }
        }
      } else {
        if (!N[z]) {
          if (b) {
            return t;
          } else {
            return {};
          }
        }
        w = O(t, z, E);
      }
    }
    _ ||= new mapCacheImplementation_1.MapCache();
    var H = _.get(t);
    if (H) {
      return H;
    }
    _.set(t, w);
    if (isSetValidator.isSet(t)) {
      t.forEach(function (r) {
        w.add(e(r, n, v, r, t, _));
      });
    } else if (mapTypeCheckUtil.isMap(t)) {
      t.forEach(function (r, i) {
        w.set(i, e(r, n, v, i, t, _));
      });
    }
    var G = x ? S ? objectKeysNormalizer.normalizeObjectKeys : normalizeArrayData.normalizeArrayData : S ? getOwnKeysUtil_1.getOwnKeys : getOwnKeys.getOwnKeys;
    var V = k ? undefined : G(t);
    arrayEachUtil.arrayEach(V || t, function (r, i) {
      if (V) {
        r = t[i = r];
      }
      safePropertySetter.setPropertyValue(w, i, e(r, n, v, i, t, _));
    });
    return w;
  };
  require.d(exports, {
    deepClone: function () {
      return L;
    }
  });
}