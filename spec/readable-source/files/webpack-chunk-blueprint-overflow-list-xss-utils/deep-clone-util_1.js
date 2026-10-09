// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'cloneDeep'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 793497
         */
module.exports = function (module, exports, require) {
  var mapCacheImplementation_1 = require("map-cache-implementation_1") /*id: 215370*/;
  var safePropertySet = require("safe-property-set") /*id: 252243*/;
  var isEqualUtil = require("is-equal-util") /*id: 18380*/;
  function a(e, t, n) {
    if (n !== undefined && !isEqualUtil.isEqual(e[t], n) || n === undefined && !(t in e)) {
      safePropertySet.safeSetProperty(e, t, n);
    }
  }
  var objectForeachUtil_1 = require("object-foreach-util_1") /*id: 240439*/;
  var bufferCloneUtil = require("buffer-clone-util") /*id: 456819*/;
  var typedArrayCloneUtil = require("typed-array-clone-util") /*id: 989356*/;
  var arrayCopyUtil = require("array-copy-util") /*id: 996367*/;
  var objectPrototypeCreator = require("object-prototype-creator") /*id: 245962*/;
  var isArgumentsUtil = require("is-arguments-util") /*id: 13977*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var arrayLikeObjectCheck = require("array-like-object-check") /*id: 443422*/;
  var bufferIsBufferUtil = require("buffer-is-buffer-util") /*id: 375215*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  var isTypedArrayUtil = require("is-typed-array-util") /*id: 557455*/;
  function _(e, t) {
    if ((t !== "constructor" || typeof e[t] != "function") && t != "__proto__") {
      return e[t];
    }
  }
  var safePropertyAssign = require("safe-property-assign") /*id: 182115*/;
  var getOwnKeysUtil_1 = require("get-own-keys-util_1") /*id: 144417*/;
  function S(e, t, n, r, i, o, s) {
    var S = _(e, n);
    var x = _(t, n);
    var k = s.get(x);
    if (k) {
      a(e, n, k);
      return;
    }
    var O = o ? o(S, x, n + "", e, t, s) : undefined;
    var A = O === undefined;
    if (A) {
      var T = arrayIsArrayUtil.isArray(x);
      var R = !T && bufferIsBufferUtil.isBufferCheck(x);
      var C = !T && !R && isTypedArrayUtil.isTypedArray(x);
      O = x;
      if (T || R || C) {
        if (arrayIsArrayUtil.isArray(S)) {
          O = S;
        } else if (arrayLikeObjectCheck.isArrayLikeObject(S)) {
          O = arrayCopyUtil.copyArray(S);
        } else if (R) {
          A = false;
          O = bufferCloneUtil.cloneBuffer(x, true);
        } else if (C) {
          A = false;
          O = typedArrayCloneUtil.cloneTypedArray(x, true);
        } else {
          O = [];
        }
      } else if (isPlainObjectUtil.isPlainObject(x) || isArgumentsUtil.isArguments(x)) {
        O = S;
        if (isArgumentsUtil.isArguments(S)) {
          O = safePropertyAssign.safePropAssign(S, getOwnKeysUtil_1.getOwnKeys(S));
        } else if (!isObjectOrFunction_1_1.isObjectOrFunction(S) || isFunctionUtil_1.isFunction(S)) {
          O = objectPrototypeCreator.createObject(x);
        }
      } else {
        A = false;
      }
    }
    if (A) {
      s.set(x, O);
      i(O, x, r, o, s);
      s.delete(x);
    }
    a(e, n, O);
  }
  var x = function e(t, n, i, o, u) {
    if (t !== n) {
      objectForeachUtil_1.createForEach(n, function (s, c) {
        u ||= new mapCacheImplementation_1.MapCache();
        if (isObjectOrFunction_1_1.isObjectOrFunction(s)) {
          S(t, n, c, i, e, o, u);
        } else {
          var l = o ? o(_(t, c), s, c + "", t, n, u) : undefined;
          if (l === undefined) {
            l = s;
          }
          a(t, c, l);
        }
      }, getOwnKeysUtil_1.getOwnKeys);
    }
  };
  require.d(exports, {
    cloneDeep: function () {
      return x;
    }
  });
}