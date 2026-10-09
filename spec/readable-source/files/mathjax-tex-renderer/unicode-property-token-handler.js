// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'arraySliceMethodResolver_2'
// - Resolved require(752782) to 'array-slice-method-resolver_2'
// - Renamed variable 'T' to 'arrayFromPolyfillStubReexport'
// - Resolved require(342514) to 'array-from-polyfill-stub-reexport'
// - Renamed variable 'n' to 'symbolPolyfillSetup_1'
// - Resolved require(651798) to 'symbol-polyfill-setup_1'
// - Renamed variable 'o' to 'webidlIteratorPolyfillReexport_3'
// - Resolved require(92619) to 'webidl-iterator-polyfill-reexport_3'
// - Renamed variable 'i' to 'arrayIsArrayPolyfill_5'
// - Resolved require(219564) to 'array-is-array-polyfill_5'
// - Renamed variable 'a' to 'objectDefinePropertyWrapper_1'
// - Resolved require(753422) to 'object-define-property-wrapper_1'
// - Renamed variable 'u' to 'esModuleInteropHelper'
// - Resolved require(231208) to 'es-module-interop-helper'
// - Resolved require(108502) to 'array-iterator-converter'
// - Resolved require(699923) to 'get-array-foreach-strategy'
// - Resolved require(362642) to 'array-concat-method-resolver'
// - Resolved require(868014) to 'array-indexof-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 506984
         */
module.exports = function (module, exports, require) {
  var arraySliceMethodResolver_2 = require("array-slice-method-resolver_2") /*id: 752782*/;
  var arrayFromPolyfillStubReexport = require("array-from-polyfill-stub-reexport") /*id: 342514*/;
  var symbolPolyfillSetup_1 = require("symbol-polyfill-setup_1") /*id: 651798*/;
  var webidlIteratorPolyfillReexport_3 = require("webidl-iterator-polyfill-reexport_3") /*id: 92619*/;
  var arrayIsArrayPolyfill_5 = require("array-is-array-polyfill_5") /*id: 219564*/;
  var objectDefinePropertyWrapper_1 = require("object-define-property-wrapper_1") /*id: 753422*/;
  var esModuleInteropHelper = require("es-module-interop-helper") /*id: 231208*/;
  objectDefinePropertyWrapper_1(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var s = esModuleInteropHelper(require("array-iterator-converter") /*id: 108502*/);
  var l = esModuleInteropHelper(require("get-array-foreach-strategy") /*id: 699923*/);
  var c = esModuleInteropHelper(require("array-concat-method-resolver") /*id: 362642*/);
  var p = esModuleInteropHelper(require("array-indexof-polyfill-check") /*id: 868014*/);
  function h(t, e) {
    if (e == null || e > t.length) {
      e = t.length;
    }
    var Q = 0;
    var r = Array(e);
    for (; Q < e; Q++) {
      r[Q] = t[Q];
    }
    return r;
  }
  exports.default = function (t) {
    var e = {};
    var Q = {};
    var a = t._dec;
    var u = t._hex;
    var f = t._pad4;
    function d(t) {
      return t.replace(/[- _]+/g, "").toLowerCase();
    }
    function D(t) {
      var e = /^\\[xu](.+)/.exec(t);
      if (e) {
        return a(e[1]);
      } else {
        return t.charCodeAt(+(t[0] === "\\"));
      }
    }
    t.addToken(/\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/, function (r, T, n) {
      var o;
      var i;
      var a;
      var h;
      var L;
      var m;
      var y;
      var H;
      var v;
      var g;
      var b;
      var E;
      var C = s.default(r, 6);
      var V = C[0];
      var M = C[1];
      var F = C[2];
      var x = C[3];
      var O = C[4];
      var A = C[5];
      var _ = M === "P" || !!F;
      var S = p.default(n).call(n, "A") !== -1;
      var w = d(A || O);
      var B = e[w];
      if (M === "P" && F) {
        throw SyntaxError("Invalid double negation " + V);
      }
      if (!e.hasOwnProperty(w) || x && (!Q[x] || !Q[x][w])) {
        throw SyntaxError("Unknown Unicode token " + V);
      }
      if (B.inverseOf) {
        w = d(B.inverseOf);
        if (!e.hasOwnProperty(w)) {
          throw ReferenceError(c.default(o = `${"Unicode token missing data " + V} -> `).call(o, B.inverseOf));
        }
        B = e[w];
        _ = !_;
      }
      if (!B.bmp && !S) {
        throw SyntaxError("Astral mode required for Unicode token " + V);
      }
      if (S) {
        if (T === "class") {
          throw SyntaxError("Astral mode does not support Unicode tokens within character classes");
        }
        i = w;
        h = (a = _) ? "a!" : "a=";
        return e[i][h] ||= (y = e[i], H = "", y.bmp && !y.isBmpLast && (H = c.default(L = `[${y.bmp}]`).call(L, y.astral ? "|" : "")), y.astral && (H += y.astral), y.isBmpLast && y.bmp && (H += c.default(m = `${y.astral ? "|" : ""}[`).call(m, y.bmp, "]")), a ? `(?:(?!${H})(?:[�-�][�-�]|[\0-￿]))` : `(?:${H})`);
      }
      if (T === "class") {
        if (_) {
          return e[v = w]["b!"] || (e[v]["b!"] = (g = e[v].bmp, b = "", E = -1, l.default(t).call(t, g, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, function (t) {
            var e = D(t[1]);
            if (e > E + 1) {
              b += `\\u${f(u(E + 1))}`;
              if (e > E + 2) {
                b += `-\\u${f(u(e - 1))}`;
              }
            }
            E = D(t[2] || t[1]);
          }), E < 65535 && (b += `\\u${f(u(E + 1))}`, E < 65534 && (b += "-\\uFFFF")), b));
        } else {
          return B.bmp;
        }
      } else {
        return `${(_ ? "[^" : "[") + B.bmp}]`;
      }
    }, {
      scope: "all",
      optionalFlags: "A",
      leadChar: "\\"
    });
    t.addUnicodeData = function (a, u) {
      if (u) {
        Q[u] = {};
      }
      var s;
      var l = function (t, e) {
        var Q = symbolPolyfillSetup_1 !== undefined && webidlIteratorPolyfillReexport_3(t) || t["@@iterator"];
        if (!Q) {
          if (arrayIsArrayPolyfill_5(t) || (Q = function (t, e) {
            if (t) {
              if (typeof t == "string") {
                return h(t, undefined);
              }
              var Q;
              var n = arraySliceMethodResolver_2(Q = Object.prototype.toString.call(t)).call(Q, 8, -1);
              if (n === "Object" && t.constructor) {
                n = t.constructor.name;
              }
              if (n === "Map" || n === "Set") {
                return arrayFromPolyfillStubReexport(t);
              }
              if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                return h(t, e);
              }
            }
          }(t))) {
            if (Q) {
              t = Q;
            }
            var a = 0;
            function u() {}
            return {
              s: u,
              n: function () {
                if (a >= t.length) {
                  return {
                    done: true
                  };
                } else {
                  return {
                    done: false,
                    value: t[a++]
                  };
                }
              },
              e: function (t) {
                throw t;
              },
              f: u
            };
          }
          throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var s;
        var l = true;
        var c = false;
        return {
          s: function () {
            Q = Q.call(t);
          },
          n: function () {
            var t = Q.next();
            l = t.done;
            return t;
          },
          e: function (t) {
            c = true;
            s = t;
          },
          f: function () {
            try {
              if (!l && Q.return != null) {
                Q.return();
              }
            } finally {
              if (c) {
                throw s;
              }
            }
          }
        };
      }(a);
      try {
        for (l.s(); !(s = l.n()).done;) {
          var c = s.value;
          if (!c.name) {
            throw Error("Unicode token requires name");
          }
          if (!c.inverseOf && !c.bmp && !c.astral) {
            throw Error("Unicode token has no character data " + c.name);
          }
          var p = d(c.name);
          e[p] = c;
          if (u) {
            Q[u][p] = true;
          }
          if (c.alias) {
            var f = d(c.alias);
            e[f] = c;
            if (u) {
              Q[u][f] = true;
            }
          }
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
      t.cache.flush("patterns");
    };
    t._getUnicodeProperty = function (t) {
      return e[d(t)];
    };
  };
  module.exports = exports.default;
}