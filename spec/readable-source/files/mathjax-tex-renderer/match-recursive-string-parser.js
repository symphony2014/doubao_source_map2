// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'objectDefinePropertyWrapper_1'
// - Resolved require(753422) to 'object-define-property-wrapper_1'
// - Renamed variable 'T' to 'esModuleInteropHelper'
// - Resolved require(231208) to 'es-module-interop-helper'
// - Resolved require(868014) to 'array-indexof-polyfill-check'
// - Resolved require(362642) to 'array-concat-method-resolver'
// - Resolved require(752782) to 'array-slice-method-resolver_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 801123
         */
module.exports = function (module, exports, require) {
  var objectDefinePropertyWrapper_1 = require("object-define-property-wrapper_1") /*id: 753422*/;
  var esModuleInteropHelper = require("es-module-interop-helper") /*id: 231208*/;
  objectDefinePropertyWrapper_1(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var n = esModuleInteropHelper(require("array-indexof-polyfill-check") /*id: 868014*/);
  var o = esModuleInteropHelper(require("array-concat-method-resolver") /*id: 362642*/);
  var i = esModuleInteropHelper(require("array-slice-method-resolver_2") /*id: 752782*/);
  exports.default = function (t) {
    function e(t, e, Q, r) {
      return {
        name: t,
        value: e,
        start: Q,
        end: r
      };
    }
    t.matchRecursive = function (Q, r, T, a, u) {
      a = a || "";
      u = u || {};
      var s = n.default(a).call(a, "g") !== -1;
      var l = n.default(a).call(a, "y") !== -1;
      var c = a.replace(/y/g, "");
      r = t(r, c);
      T = t(T, c);
      var p = u.escapeChar;
      if (p) {
        if (p.length > 1) {
          throw Error("Cannot use more than one escape character");
        }
        p = t.escape(p);
        v = new RegExp(o.default(g = o.default(b = `(?:${p}[\\S\\s]|(?:(?!`).call(b, t.union([r, T], "", {
          conjunction: "or"
        }).source, ")[^")).call(g, p, "])+)+"), a.replace(t._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, ""));
      }
      var h = 0;
      var f = 0;
      var d = 0;
      var D = 0;
      var L = u.valueNames;
      var m = [];
      while (true) {
        if (p) {
          d += (t.exec(Q, v, d, "sticky") || [""])[0].length;
        }
        V = t.exec(Q, r, d);
        M = t.exec(Q, T, d);
        if (V && M) {
          if (V.index <= M.index) {
            M = null;
          } else {
            V = null;
          }
        }
        if (V || M) {
          d = (f = (V || M).index) + (V || M)[0].length;
        } else if (!h) {
          break;
        }
        if (l && !h && f > D) {
          break;
        }
        if (V) {
          if (!h) {
            E = f;
            C = d;
          }
          h += 1;
        } else if (M && h) {
          if (!(h -= 1) && (L ? (L[0] && E > D && m.push(e(L[0], i.default(Q).call(Q, D, E), D, E)), L[1] && m.push(e(L[1], i.default(Q).call(Q, E, C), E, C)), L[2] && m.push(e(L[2], i.default(Q).call(Q, C, f), C, f)), L[3] && m.push(e(L[3], i.default(Q).call(Q, f, d), f, d))) : m.push(i.default(Q).call(Q, C, f)), D = d, !s)) {
            break;
          }
        } else {
          var y = u.unbalanced || "error";
          if (y === "skip" || y === "skip-lazy") {
            if (M) {
              M = null;
            } else {
              if (y === "skip") {
                var H = t.exec(Q, r, E, "sticky")[0].length;
                d = E + (H || 1);
              } else {
                d = E + 1;
              }
              h = 0;
            }
          } else if (y === "error") {
            var v;
            var g;
            var b;
            var E;
            var C;
            var V;
            var M;
            var F;
            var x = M ? "right" : "left";
            var O = M ? f : E;
            throw Error(o.default(F = `Unbalanced ${x} delimiter found in string at position `).call(F, O));
          } else {
            throw Error(`Unsupported value for unbalanced: ${y}`);
          }
        }
        if (f === d) {
          d += 1;
        }
      }
      if (s && m.length > 0 && !l && L && L[0] && Q.length > D) {
        m.push(e(L[0], i.default(Q).call(Q, D), D, Q.length));
      }
      return m;
    };
  };
  module.exports = exports.default;
}