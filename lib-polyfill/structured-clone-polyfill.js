// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Renamed variable 'o' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'i' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'a' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'u' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'c' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'f' to 'symbolDescriptionGenerator'
// - Resolved require(556893) to 'symbol-description-generator'
// - Renamed variable 's' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'l' to 'nativeConstructorDetector'
// - Resolved require(876384) to 'native-constructor-detector'
// - Renamed variable 'v' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'p' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'h' to 'isSymbolPolyfill'
// - Resolved require(362010) to 'is-symbol-polyfill'
// - Renamed variable 'd' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Renamed variable 'y' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'g' to 'objectTypeDetectorPolyfill'
// - Resolved require(549562) to 'object-type-detector-polyfill'
// - Renamed variable 'b' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'w' to 'es5DefinePropertyPolyfill'
// - Resolved require(864373) to 'es5-define-property-polyfill'
// - Renamed variable 'm' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'x' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'A' to 'argumentLengthValidator_1'
// - Resolved require(798037) to 'argument-length-validator_1'
// - Renamed variable 'E' to 'getRegexpFlags'
// - Resolved require(350472) to 'get-regexp-flags'
// - Renamed variable 'S' to 'mapPrototypeUtils'
// - Resolved require(522979) to 'map-prototype-utils'
// - Renamed variable 'O' to 'setPrototypeUtils'
// - Resolved require(192672) to 'set-prototype-utils'
// - Renamed variable 'R' to 'setFindPolyfillUtil'
// - Resolved require(581853) to 'set-find-polyfill-util'
// - Renamed variable 'I' to 'structuredCloneTransferPolyfill'
// - Resolved require(427401) to 'structured-clone-transfer-polyfill'
// - Renamed variable 'T' to 'errorStackDefinitionCheck'
// - Resolved require(446818) to 'error-stack-definition-check'
// - Renamed variable 'k' to 'structuredCloneSupportCheck'
// - Resolved require(451243) to 'structured-clone-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 966089
         */
module.exports = function (module, exports, require) {
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var symbolDescriptionGenerator = require("symbol-description-generator") /*id: 556893*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var nativeConstructorDetector = require("native-constructor-detector") /*id: 876384*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var isSymbolPolyfill = require("is-symbol-polyfill") /*id: 362010*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var objectTypeDetectorPolyfill = require("object-type-detector-polyfill") /*id: 549562*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var es5DefinePropertyPolyfill = require("es5-define-property-polyfill") /*id: 864373*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var argumentLengthValidator_1 = require("argument-length-validator_1") /*id: 798037*/;
  var getRegexpFlags = require("get-regexp-flags") /*id: 350472*/;
  var mapPrototypeUtils = require("map-prototype-utils") /*id: 522979*/;
  var setPrototypeUtils = require("set-prototype-utils") /*id: 192672*/;
  var setFindPolyfillUtil = require("set-find-polyfill-util") /*id: 581853*/;
  var structuredCloneTransferPolyfill = require("structured-clone-transfer-polyfill") /*id: 427401*/;
  var errorStackDefinitionCheck = require("error-stack-definition-check") /*id: 446818*/;
  var structuredCloneSupportCheck = require("structured-clone-support-check") /*id: 451243*/;
  var M = globalObjectPolyfill.Object;
  var j = globalObjectPolyfill.Array;
  var D = globalObjectPolyfill.Date;
  var P = globalObjectPolyfill.Error;
  var _ = globalObjectPolyfill.TypeError;
  var C = globalObjectPolyfill.PerformanceMark;
  var N = globalPolyfillAccess("DOMException");
  var U = mapPrototypeUtils.Map;
  var F = mapPrototypeUtils.has;
  var B = mapPrototypeUtils.get;
  var L = mapPrototypeUtils.set;
  var z = setPrototypeUtils.Set;
  var W = setPrototypeUtils.add;
  var V = setPrototypeUtils.has;
  var K = globalPolyfillAccess("Object", "keys");
  var H = functionBindFallback([].push);
  var G = functionBindFallback(true.valueOf);
  var J = functionBindFallback(1 .valueOf);
  var $ = functionBindFallback("".valueOf);
  var Y = functionBindFallback(D.prototype.getTime);
  var q = symbolDescriptionGenerator("structuredClone");
  var X = "DataCloneError";
  var Q = "Transferring";
  function Z(t) {
    return !tryCatchFunctionWrapper(function () {
      var r = new globalObjectPolyfill.Set([7]);
      var e = t(r);
      var n = t(M(7));
      return e === r || !e.has(7) || !isObjectOrFunctionCheck(n) || +n != 7;
    }) && t;
  }
  function tt(t, r) {
    return !tryCatchFunctionWrapper(function () {
      var e = new r();
      var n = t({
        a: e,
        b: e
      });
      return !n || n.a !== n.b || !(n.a instanceof r) || n.a.stack !== e.stack;
    });
  }
  var tr = globalObjectPolyfill.structuredClone;
  var te = libPolyfillCheck || !tt(tr, P) || !tt(tr, N) || !!tryCatchFunctionWrapper(function () {
    var t = tr(new globalObjectPolyfill.AggregateError([1], q, {
      cause: 3
    }));
    return t.name !== "AggregateError" || t.errors[0] !== 1 || t.message !== q || t.cause !== 3;
  });
  var tn = !tr && Z(function (t) {
    return new C(q, {
      detail: t
    }).detail;
  });
  var to = Z(tr) || tn;
  function ti(t) {
    throw new N("Uncloneable type: " + t, X);
  }
  function ta(t, r) {
    throw new N((r || "Cloning") + " of " + t + " cannot be properly polyfilled in this engine", X);
  }
  function tu(t, r) {
    if (!to) {
      ta(r);
    }
    return to(t);
  }
  function tc() {
    var t;
    try {
      t = new globalObjectPolyfill.DataTransfer();
    } catch (r) {
      try {
        t = new globalObjectPolyfill.ClipboardEvent("").clipboardData;
      } catch (t) {}
    }
    if (t && t.items && t.files) {
      return t;
    } else {
      return null;
    }
  }
  function tf(t, r, e) {
    if (F(r, t)) {
      return B(r, t);
    }
    if ((e || objectTypeDetectorPolyfill(t)) === "SharedArrayBuffer") {
      n = to ? to(t) : t;
    } else {
      var n;
      var o;
      var a;
      var u;
      var c;
      var f;
      var l = globalObjectPolyfill.DataView;
      if (!l && !isFunctionPolyfill(t.slice)) {
        ta("ArrayBuffer");
      }
      try {
        if (isFunctionPolyfill(t.slice) && !t.resizable) {
          n = t.slice(0);
        } else {
          f = 0;
          o = t.byteLength;
          a = "maxByteLength" in t ? {
            maxByteLength: t.maxByteLength
          } : undefined;
          n = new ArrayBuffer(o, a);
          u = new l(t);
          c = new l(n);
          for (; f < o; f++) {
            c.setUint8(f, u.getUint8(f));
          }
        }
      } catch (t) {
        throw new N("ArrayBuffer is detached", X);
      }
    }
    L(r, t, n);
    return n;
  }
  function ts(t, r, e, n, o) {
    var a = globalObjectPolyfill[r];
    if (!isObjectOrFunctionCheck(a)) {
      ta(r);
    }
    return new a(tf(t.buffer, o), e, n);
  }
  function tl(t, r) {
    if (isSymbolPolyfill(t)) {
      ti("Symbol");
    }
    if (!isObjectOrFunctionCheck(t)) {
      return t;
    }
    if (r) {
      if (F(r, t)) {
        return B(r, t);
      }
    } else {
      r = new U();
    }
    var e;
    var n;
    var o;
    var u;
    var c;
    var f;
    var l;
    var v;
    var d = objectTypeDetectorPolyfill(t);
    switch (d) {
      case "Array":
        o = j(getArrayLengthSafe(t));
        break;
      case "Object":
        o = {};
        break;
      case "Map":
        o = new U();
        break;
      case "Set":
        o = new z();
        break;
      case "RegExp":
        o = new RegExp(t.source, getRegexpFlags(t));
        break;
      case "Error":
        switch (n = t.name) {
          case "AggregateError":
            o = new (globalPolyfillAccess(n))([]);
            break;
          case "EvalError":
          case "RangeError":
          case "ReferenceError":
          case "SuppressedError":
          case "SyntaxError":
          case "TypeError":
          case "URIError":
            o = new (globalPolyfillAccess(n))();
            break;
          case "CompileError":
          case "LinkError":
          case "RuntimeError":
            o = new (globalPolyfillAccess("WebAssembly", n))();
            break;
          default:
            o = new P();
        }
        break;
      case "DOMException":
        o = new N(t.message, t.name);
        break;
      case "ArrayBuffer":
      case "SharedArrayBuffer":
        o = tf(t, r, d);
        break;
      case "DataView":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float16Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array":
        f = d === "DataView" ? t.byteLength : t.length;
        o = ts(t, d, t.byteOffset, f, r);
        break;
      case "DOMQuad":
        try {
          o = new DOMQuad(tl(t.p1, r), tl(t.p2, r), tl(t.p3, r), tl(t.p4, r));
        } catch (r) {
          o = tu(t, d);
        }
        break;
      case "File":
        if (to) {
          try {
            o = to(t);
            if (objectTypeDetectorPolyfill(o) !== d) {
              o = undefined;
            }
          } catch (t) {}
        }
        if (!o) {
          try {
            o = new File([t], t.name, t);
          } catch (t) {}
        }
        if (!o) {
          ta(d);
        }
        break;
      case "FileList":
        if (u = tc()) {
          c = 0;
          f = getArrayLengthSafe(t);
          for (; c < f; c++) {
            u.items.add(tl(t[c], r));
          }
          o = u.files;
        } else {
          o = tu(t, d);
        }
        break;
      case "ImageData":
        try {
          o = new ImageData(tl(t.data, r), t.width, t.height, {
            colorSpace: t.colorSpace
          });
        } catch (r) {
          o = tu(t, d);
        }
        break;
      default:
        if (to) {
          o = to(t);
        } else {
          switch (d) {
            case "BigInt":
              o = M(t.valueOf());
              break;
            case "Boolean":
              o = M(G(t));
              break;
            case "Number":
              o = M(J(t));
              break;
            case "String":
              o = M($(t));
              break;
            case "Date":
              o = new D(Y(t));
              break;
            case "Blob":
              try {
                o = t.slice(0, t.size, t.type);
              } catch (t) {
                ta(d);
              }
              break;
            case "DOMPoint":
            case "DOMPointReadOnly":
              e = globalObjectPolyfill[d];
              try {
                o = e.fromPoint ? e.fromPoint(t) : new e(t.x, t.y, t.z, t.w);
              } catch (t) {
                ta(d);
              }
              break;
            case "DOMRect":
            case "DOMRectReadOnly":
              e = globalObjectPolyfill[d];
              try {
                o = e.fromRect ? e.fromRect(t) : new e(t.x, t.y, t.width, t.height);
              } catch (t) {
                ta(d);
              }
              break;
            case "DOMMatrix":
            case "DOMMatrixReadOnly":
              e = globalObjectPolyfill[d];
              try {
                o = e.fromMatrix ? e.fromMatrix(t) : new e(t);
              } catch (t) {
                ta(d);
              }
              break;
            case "AudioData":
            case "VideoFrame":
              if (!isFunctionPolyfill(t.clone)) {
                ta(d);
              }
              try {
                o = t.clone();
              } catch (t) {
                ti(d);
              }
              break;
            case "CropTarget":
            case "CryptoKey":
            case "FileSystemDirectoryHandle":
            case "FileSystemFileHandle":
            case "FileSystemHandle":
            case "GPUCompilationInfo":
            case "GPUCompilationMessage":
            case "ImageBitmap":
            case "RTCCertificate":
            case "WebAssembly.Module":
              ta(d);
            default:
              ti(d);
          }
        }
    }
    L(r, t, o);
    switch (d) {
      case "Array":
      case "Object":
        c = 0;
        f = getArrayLengthSafe(l = K(t));
        for (; c < f; c++) {
          v = l[c];
          es5DefinePropertyPolyfill(o, v, tl(t[v], r));
        }
        break;
      case "Map":
        t.forEach(function (t, e) {
          L(o, tl(e, r), tl(t, r));
        });
        break;
      case "Set":
        t.forEach(function (t) {
          W(o, tl(t, r));
        });
        break;
      case "Error":
        definePropertyHelper_1(o, "message", tl(t.message, r));
        if (objectHasOwnPolyfill_1(t, "cause")) {
          definePropertyHelper_1(o, "cause", tl(t.cause, r));
        }
        if (n === "AggregateError") {
          o.errors = tl(t.errors, r);
        } else if (n === "SuppressedError") {
          o.error = tl(t.error, r);
          o.suppressed = tl(t.suppressed, r);
        }
      case "DOMException":
        if (errorStackDefinitionCheck) {
          definePropertyHelper_1(o, "stack", tl(t.stack, r));
        }
    }
    return o;
  }
  function tv(t, r) {
    if (!isObjectOrFunctionCheck(t)) {
      throw new _("Transfer option cannot be converted to a sequence");
    }
    var e;
    var n;
    var o;
    var a;
    var u;
    var c = [];
    iteratorForEachHelper(t, function (t) {
      H(c, requireObjectOrThrowTypeError_1(t));
    });
    var f = 0;
    var v = getArrayLengthSafe(c);
    var h = new z();
    while (f < v) {
      if ((n = objectTypeDetectorPolyfill(e = c[f++])) === "ArrayBuffer" ? V(h, e) : F(r, e)) {
        throw new N("Duplicate transferable", X);
      }
      if (n === "ArrayBuffer") {
        W(h, e);
        continue;
      }
      if (structuredCloneSupportCheck) {
        a = tr(e, {
          transfer: [e]
        });
      } else {
        switch (n) {
          case "ImageBitmap":
            if (!nativeConstructorDetector(o = globalObjectPolyfill.OffscreenCanvas)) {
              ta(n, Q);
            }
            try {
              (u = new o(e.width, e.height)).getContext("bitmaprenderer").transferFromImageBitmap(e);
              a = u.transferToImageBitmap();
            } catch (t) {}
            break;
          case "AudioData":
          case "VideoFrame":
            if (!isFunctionPolyfill(e.clone) || !isFunctionPolyfill(e.close)) {
              ta(n, Q);
            }
            try {
              a = e.clone();
              e.close();
            } catch (t) {}
            break;
          case "MediaSourceHandle":
          case "MessagePort":
          case "MIDIAccess":
          case "OffscreenCanvas":
          case "ReadableStream":
          case "RTCDataChannel":
          case "TransformStream":
          case "WebTransportReceiveStream":
          case "WebTransportSendStream":
          case "WritableStream":
            ta(n, Q);
        }
      }
      if (a === undefined) {
        throw new N("This object cannot be transferred: " + n, X);
      }
      L(r, e, a);
    }
    return h;
  }
  function tp(t) {
    setFindPolyfillUtil(t, function (t) {
      if (structuredCloneSupportCheck) {
        to(t, {
          transfer: [t]
        });
      } else if (isFunctionPolyfill(t.transfer)) {
        t.transfer();
      } else if (structuredCloneTransferPolyfill) {
        structuredCloneTransferPolyfill(t);
      } else {
        ta("ArrayBuffer", Q);
      }
    });
  }
  polyfillPropertyDefiner({
    global: true,
    enumerable: true,
    sham: !structuredCloneSupportCheck,
    forced: te
  }, {
    structuredClone: function (t) {
      var r;
      var e;
      var n = argumentLengthValidator_1(arguments.length, 1) > 1 && !isNullishCheck_1(arguments[1]) ? requireObjectOrThrowTypeError_1(arguments[1]) : undefined;
      var o = n ? n.transfer : undefined;
      if (o !== undefined) {
        e = tv(o, r = new U());
      }
      var i = tl(t, r);
      if (e) {
        tp(e);
      }
      return i;
    }
  });
}