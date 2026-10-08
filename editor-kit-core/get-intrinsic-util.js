// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'objectWrapper'
// - Resolved require(861088) to 'object-wrapper'
// - Renamed variable 'i' to 'builtinErrorReference'
// - Resolved require(345677) to 'builtin-error-reference'
// - Renamed variable 'u' to 'builtinEvalError'
// - Resolved require(469612) to 'builtin-eval-error'
// - Renamed variable 'a' to 'rangeErrorWrapper'
// - Resolved require(822084) to 'range-error-wrapper'
// - Renamed variable 's' to 'referenceErrorExport'
// - Resolved require(459084) to 'reference-error-export'
// - Renamed variable 'c' to 'syntaxErrorAlias'
// - Resolved require(309667) to 'syntax-error-alias'
// - Renamed variable 'f' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'l' to 'uriError'
// - Resolved require(290530) to 'uri-error'
// - Renamed variable 'p' to 'mathAbsoluteValue'
// - Resolved require(846141) to 'math-absolute-value'
// - Renamed variable 'd' to 'mathFloorUtil'
// - Resolved require(847614) to 'math-floor-util'
// - Renamed variable 'h' to 'mathMaxUtil'
// - Resolved require(304833) to 'math-max-util'
// - Renamed variable 'y' to 'mathMinUtil'
// - Resolved require(305565) to 'math-min-util'
// - Renamed variable 'b' to 'mathPowerFunction'
// - Resolved require(990895) to 'math-power-function'
// - Renamed variable 'g' to 'mathRoundUtil'
// - Resolved require(490981) to 'math-round-util'
// - Renamed variable 'v' to 'numberSignUtil'
// - Resolved require(398736) to 'number-sign-util'
// - Renamed variable 'w' to 'safeObjectPropertyDescriptor'
// - Resolved require(467842) to 'safe-object-property-descriptor'
// - Renamed variable 'A' to 'definePropertyCheck'
// - Resolved require(594896) to 'define-property-check'
// - Resolved require(237121) to 'symbol-support-check_1'
// - Renamed variable 'P' to 'getPrototypeOfUtil'
// - Resolved require(112917) to 'get-prototype-of-util'
// - Renamed variable 'E' to 'objectGetPrototypeOf'
// - Resolved require(755536) to 'object-get-prototype-of'
// - Renamed variable '_' to 'reflectGetPrototypeUtil'
// - Resolved require(375043) to 'reflect-get-prototype-util'
// - Renamed variable 'j' to 'functionApplyNative'
// - Resolved require(282780) to 'function-apply-native'
// - Renamed variable 'k' to 'functionCallPolyfill'
// - Resolved require(218287) to 'function-call-polyfill'
// - Renamed variable 'C' to 'functionBindPolyfill_1'
// - Resolved require(633877) to 'function-bind-polyfill_1'
// - Renamed variable 'L' to 'boundHasOwnPropertyUtil'
// - Resolved require(495924) to 'bound-has-own-property-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 120433
         */
module.exports = function (module, exports, require) {
  var n;
  var objectWrapper = require("object-wrapper") /*id: 861088*/;
  var builtinErrorReference = require("builtin-error-reference") /*id: 345677*/;
  var builtinEvalError = require("builtin-eval-error") /*id: 469612*/;
  var rangeErrorWrapper = require("range-error-wrapper") /*id: 822084*/;
  var referenceErrorExport = require("reference-error-export") /*id: 459084*/;
  var syntaxErrorAlias = require("syntax-error-alias") /*id: 309667*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var uriError = require("uri-error") /*id: 290530*/;
  var mathAbsoluteValue = require("math-absolute-value") /*id: 846141*/;
  var mathFloorUtil = require("math-floor-util") /*id: 847614*/;
  var mathMaxUtil = require("math-max-util") /*id: 304833*/;
  var mathMinUtil = require("math-min-util") /*id: 305565*/;
  var mathPowerFunction = require("math-power-function") /*id: 990895*/;
  var mathRoundUtil = require("math-round-util") /*id: 490981*/;
  var numberSignUtil = require("number-sign-util") /*id: 398736*/;
  var m = Function;
  function S(t) {
    try {
      return m("\"use strict\"; return (" + t + ").constructor;")();
    } catch (t) {}
  }
  var safeObjectPropertyDescriptor = require("safe-object-property-descriptor") /*id: 467842*/;
  var definePropertyCheck = require("define-property-check") /*id: 594896*/;
  function x() {
    throw new typeErrorConstructor();
  }
  var O = safeObjectPropertyDescriptor ? function () {
    try {
      arguments.callee;
      return x;
    } catch (t) {
      try {
        return safeObjectPropertyDescriptor(arguments, "callee").get;
      } catch (t) {
        return x;
      }
    }
  }() : x;
  var M = require("symbol-support-check_1") /*id: 237121*/();
  var getPrototypeOfUtil = require("get-prototype-of-util") /*id: 112917*/;
  var objectGetPrototypeOf = require("object-get-prototype-of") /*id: 755536*/;
  var reflectGetPrototypeUtil = require("reflect-get-prototype-util") /*id: 375043*/;
  var functionApplyNative = require("function-apply-native") /*id: 282780*/;
  var functionCallPolyfill = require("function-call-polyfill") /*id: 218287*/;
  var T = {};
  var F = typeof Uint8Array != "undefined" && getPrototypeOfUtil ? getPrototypeOfUtil(Uint8Array) : n;
  var R = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError == "undefined" ? n : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? n : ArrayBuffer,
    "%ArrayIteratorPrototype%": M && getPrototypeOfUtil ? getPrototypeOfUtil([][Symbol.iterator]()) : n,
    "%AsyncFromSyncIteratorPrototype%": n,
    "%AsyncFunction%": T,
    "%AsyncGenerator%": T,
    "%AsyncGeneratorFunction%": T,
    "%AsyncIteratorPrototype%": T,
    "%Atomics%": typeof Atomics == "undefined" ? n : Atomics,
    "%BigInt%": typeof BigInt == "undefined" ? n : BigInt,
    "%BigInt64Array%": typeof BigInt64Array == "undefined" ? n : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array == "undefined" ? n : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView == "undefined" ? n : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": builtinErrorReference,
    "%eval%": eval,
    "%EvalError%": builtinEvalError,
    "%Float16Array%": typeof Float16Array == "undefined" ? n : Float16Array,
    "%Float32Array%": typeof Float32Array == "undefined" ? n : Float32Array,
    "%Float64Array%": typeof Float64Array == "undefined" ? n : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? n : FinalizationRegistry,
    "%Function%": m,
    "%GeneratorFunction%": T,
    "%Int8Array%": typeof Int8Array == "undefined" ? n : Int8Array,
    "%Int16Array%": typeof Int16Array == "undefined" ? n : Int16Array,
    "%Int32Array%": typeof Int32Array == "undefined" ? n : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": M && getPrototypeOfUtil ? getPrototypeOfUtil(getPrototypeOfUtil([][Symbol.iterator]())) : n,
    "%JSON%": typeof JSON == "object" ? JSON : n,
    "%Map%": typeof Map == "undefined" ? n : Map,
    "%MapIteratorPrototype%": typeof Map != "undefined" && M && getPrototypeOfUtil ? getPrototypeOfUtil(new Map()[Symbol.iterator]()) : n,
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": objectWrapper,
    "%Object.getOwnPropertyDescriptor%": safeObjectPropertyDescriptor,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise == "undefined" ? n : Promise,
    "%Proxy%": typeof Proxy == "undefined" ? n : Proxy,
    "%RangeError%": rangeErrorWrapper,
    "%ReferenceError%": referenceErrorExport,
    "%Reflect%": typeof Reflect == "undefined" ? n : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set == "undefined" ? n : Set,
    "%SetIteratorPrototype%": typeof Set != "undefined" && M && getPrototypeOfUtil ? getPrototypeOfUtil(new Set()[Symbol.iterator]()) : n,
    "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? n : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": M && getPrototypeOfUtil ? getPrototypeOfUtil(""[Symbol.iterator]()) : n,
    "%Symbol%": M ? Symbol : n,
    "%SyntaxError%": syntaxErrorAlias,
    "%ThrowTypeError%": O,
    "%TypedArray%": F,
    "%TypeError%": typeErrorConstructor,
    "%Uint8Array%": typeof Uint8Array == "undefined" ? n : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? n : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array == "undefined" ? n : Uint16Array,
    "%Uint32Array%": typeof Uint32Array == "undefined" ? n : Uint32Array,
    "%URIError%": uriError,
    "%WeakMap%": typeof WeakMap == "undefined" ? n : WeakMap,
    "%WeakRef%": typeof WeakRef == "undefined" ? n : WeakRef,
    "%WeakSet%": typeof WeakSet == "undefined" ? n : WeakSet,
    "%Function.prototype.call%": functionCallPolyfill,
    "%Function.prototype.apply%": functionApplyNative,
    "%Object.defineProperty%": definePropertyCheck,
    "%Object.getPrototypeOf%": objectGetPrototypeOf,
    "%Math.abs%": mathAbsoluteValue,
    "%Math.floor%": mathFloorUtil,
    "%Math.max%": mathMaxUtil,
    "%Math.min%": mathMinUtil,
    "%Math.pow%": mathPowerFunction,
    "%Math.round%": mathRoundUtil,
    "%Math.sign%": numberSignUtil,
    "%Reflect.getPrototypeOf%": reflectGetPrototypeUtil
  };
  if (getPrototypeOfUtil) {
    try {
      null.error;
    } catch (t) {
      var I = getPrototypeOfUtil(getPrototypeOfUtil(t));
      R["%Error.prototype%"] = I;
    }
  }
  var N = function t(e) {
    var r;
    if (e === "%AsyncFunction%") {
      r = S("async function () {}");
    } else if (e === "%GeneratorFunction%") {
      r = S("function* () {}");
    } else if (e === "%AsyncGeneratorFunction%") {
      r = S("async function* () {}");
    } else if (e === "%AsyncGenerator%") {
      var n = t("%AsyncGeneratorFunction%");
      if (n) {
        r = n.prototype;
      }
    } else if (e === "%AsyncIteratorPrototype%") {
      var o = t("%AsyncGenerator%");
      if (o && getPrototypeOfUtil) {
        r = getPrototypeOfUtil(o.prototype);
      }
    }
    R[e] = r;
    return r;
  };
  var B = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var functionBindPolyfill_1 = require("function-bind-polyfill_1") /*id: 633877*/;
  var boundHasOwnPropertyUtil = require("bound-has-own-property-util") /*id: 495924*/;
  var D = functionBindPolyfill_1.call(functionCallPolyfill, Array.prototype.concat);
  var z = functionBindPolyfill_1.call(functionApplyNative, Array.prototype.splice);
  var W = functionBindPolyfill_1.call(functionCallPolyfill, String.prototype.replace);
  var U = functionBindPolyfill_1.call(functionCallPolyfill, String.prototype.slice);
  var H = functionBindPolyfill_1.call(functionCallPolyfill, RegExp.prototype.exec);
  var G = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var $ = /\\(\\)?/g;
  function V(t) {
    var e = U(t, 0, 1);
    var r = U(t, -1);
    if (e === "%" && r !== "%") {
      throw new syntaxErrorAlias("invalid intrinsic syntax, expected closing `%`");
    }
    if (r === "%" && e !== "%") {
      throw new syntaxErrorAlias("invalid intrinsic syntax, expected opening `%`");
    }
    var n = [];
    W(t, G, function (t, e, r, o) {
      n[n.length] = r ? W(o, $, "$1") : e || t;
    });
    return n;
  }
  function q(t, e) {
    var r;
    var n = t;
    if (boundHasOwnPropertyUtil(B, n)) {
      n = "%" + (r = B[n])[0] + "%";
    }
    if (boundHasOwnPropertyUtil(R, n)) {
      var o = R[n];
      if (o === T) {
        o = N(n);
      }
      if (o === undefined && !e) {
        throw new typeErrorConstructor("intrinsic " + t + " exists, but is not available. Please file an issue!");
      }
      return {
        alias: r,
        name: n,
        value: o
      };
    }
    throw new syntaxErrorAlias("intrinsic " + t + " does not exist!");
  }
  module.exports = function (t, e) {
    if (typeof t != "string" || t.length === 0) {
      throw new typeErrorConstructor("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof e != "boolean") {
      throw new typeErrorConstructor("\"allowMissing\" argument must be a boolean");
    }
    if (H(/^%?[^%]*%?$/, t) === null) {
      throw new syntaxErrorAlias("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var r = V(t);
    var n = r.length > 0 ? r[0] : "";
    var o = q("%" + n + "%", e);
    var i = o.name;
    var u = o.value;
    var a = false;
    var s = o.alias;
    if (s) {
      n = s[0];
      z(r, D([0, 1], s));
    }
    var l = 1;
    var p = true;
    for (; l < r.length; l += 1) {
      var d = r[l];
      var h = U(d, 0, 1);
      var y = U(d, -1);
      if ((h === "\"" || h === "'" || h === "`" || y === "\"" || y === "'" || y === "`") && h !== y) {
        throw new syntaxErrorAlias("property names with quotes must have matching quotes");
      }
      if (d === "constructor" || !p) {
        a = true;
      }
      n += "." + d;
      if (boundHasOwnPropertyUtil(R, i = "%" + n + "%")) {
        u = R[i];
      } else if (u != null) {
        if (!(d in u)) {
          if (!e) {
            throw new typeErrorConstructor("base intrinsic for " + t + " exists, but the property is not available.");
          }
          return;
        }
        if (safeObjectPropertyDescriptor && l + 1 >= r.length) {
          var b = safeObjectPropertyDescriptor(u, d);
          u = (p = !!b) && "get" in b && !("originalValue" in b.get) ? b.get : u[d];
        } else {
          p = boundHasOwnPropertyUtil(u, d);
          u = u[d];
        }
        if (p && !a) {
          R[i] = u;
        }
      }
    }
    return u;
  };
}