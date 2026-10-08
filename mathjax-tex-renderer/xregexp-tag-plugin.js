// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'objectDefinePropertyWrapper_1'
// - Resolved require(753422) to 'object-define-property-wrapper_1'
// - Renamed variable 'T' to 'esModuleInteropHelper'
// - Resolved require(231208) to 'es-module-interop-helper'
// - Resolved require(840130) to 'array-reduce-method-reexport'
// - Resolved require(523166) to 'array-map-resolver-wrapper'
// - Resolved require(868014) to 'array-indexof-polyfill-check'
// - Resolved require(362642) to 'array-concat-method-resolver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 774309
         */
module.exports = function (module, exports, require) {
  var objectDefinePropertyWrapper_1 = require("object-define-property-wrapper_1") /*id: 753422*/;
  var esModuleInteropHelper = require("es-module-interop-helper") /*id: 231208*/;
  objectDefinePropertyWrapper_1(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var n = esModuleInteropHelper(require("array-reduce-method-reexport") /*id: 840130*/);
  var o = esModuleInteropHelper(require("array-map-resolver-wrapper") /*id: 523166*/);
  var i = esModuleInteropHelper(require("array-indexof-polyfill-check") /*id: 868014*/);
  var a = esModuleInteropHelper(require("array-concat-method-resolver") /*id: 362642*/);
  exports.default = function (t) {
    var e = "xregexp";
    var Q = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
    var r = t.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, Q], "g", {
      conjunction: "or"
    });
    function T(Q, r) {
      var T = r ? "x" : "";
      if (t.isRegExp(Q)) {
        if (Q[e] && Q[e].captureNames) {
          return Q;
        } else {
          return t(Q.source, T);
        }
      } else {
        return t(Q, T);
      }
    }
    function u(e) {
      if (e instanceof RegExp) {
        return e;
      } else {
        return t.escape(e);
      }
    }
    function s(t, e, Q) {
      t[`subpattern${Q}`] = e;
      return t;
    }
    function l(t, e, Q) {
      return t + (e < Q.length - 1 ? `{{subpattern${e}}}` : "");
    }
    t.tag = function (e) {
      return function (Q) {
        var r;
        var T;
        var i = arguments.length;
        var a = Array(i > 1 ? i - 1 : 0);
        var c = 1;
        for (; c < i; c++) {
          a[c - 1] = arguments[c];
        }
        var p = n.default(r = o.default(a).call(a, u)).call(r, s, {});
        var h = o.default(T = Q.raw).call(T, l).join("");
        return t.build(h, p, e);
      };
    };
    t.build = function (n, o, u) {
      u = u || "";
      var s;
      var l = i.default(u).call(u, "x") !== -1;
      var c = /^\(\?([\w$]+)\)/.exec(n);
      if (c) {
        u = t._clipDuplicates(u + c[1]);
      }
      var p = {};
      for (var h in o) {
        if (o.hasOwnProperty(h)) {
          var f = T(o[h], l);
          p[h] = {
            pattern: function (t) {
              var e = /^(?:\(\?:\))*\^/;
              var Q = /\$(?:\(\?:\))*$/;
              if (e.test(t) && Q.test(t) && Q.test(t.replace(/\\[\s\S]/g, ""))) {
                return t.replace(e, "").replace(Q, "");
              } else {
                return t;
              }
            }(f.source),
            names: f[e].captureNames || []
          };
        }
      }
      var d = T(n, l);
      var D = 0;
      var L = 0;
      var m = [0];
      var y = d[e].captureNames || [];
      return t(d.source.replace(r, function (t, e, r, T, n) {
        var o = e || r;
        if (o) {
          if (!p.hasOwnProperty(o)) {
            throw ReferenceError(`Undefined property ${t}`);
          }
          if (e) {
            i = y[L];
            m[++L] = ++D;
            u = `(?<${i || o}>`;
          } else {
            u = "(?:";
          }
          s = D;
          var i;
          var u;
          var l;
          var c;
          var h = p[o].pattern.replace(Q, function (t, e, Q) {
            if (e) {
              i = p[o].names[D - s];
              ++D;
              if (i) {
                return `(?<${i}>`;
              }
            } else if (Q) {
              l = +Q - 1;
              if (p[o].names[l]) {
                return `\\k<${p[o].names[l]}>`;
              } else {
                return `\\${+Q + s}`;
              }
            }
            return t;
          });
          return a.default(c = `${u}`).call(c, h, ")");
        }
        if (T) {
          i = y[L];
          m[++L] = ++D;
          if (i) {
            return `(?<${i}>`;
          }
        } else if (n) {
          if (y[l = +n - 1]) {
            return `\\k<${y[l]}>`;
          } else {
            return `\\${m[+n]}`;
          }
        }
        return t;
      }), u);
    };
  };
  module.exports = exports.default;
}