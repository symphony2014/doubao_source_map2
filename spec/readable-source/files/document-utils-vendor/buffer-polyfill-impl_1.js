// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(989572) to 'buffer-polyfill-impl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 230335
         */
module.exports = function (module, exports, require) {
  var n = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  var i = function () {
    "use strict";

    var e;
    var t;
    var r;
    function i(e, t) {
      return t != null && e instanceof t;
    }
    try {
      e = Map;
    } catch (t) {
      e = function () {};
    }
    try {
      t = Set;
    } catch (e) {
      t = function () {};
    }
    try {
      r = Promise;
    } catch (e) {
      r = function () {};
    }
    function o(a, l, u, c, h) {
      if (typeof l == "object") {
        u = l.depth;
        c = l.prototype;
        h = l.includeNonEnumerable;
        l = l.circular;
      }
      var d = [];
      var f = [];
      var A = n !== undefined;
      if (l === undefined) {
        l = true;
      }
      if (u === undefined) {
        u = Infinity;
      }
      return function a(u, g) {
        if (u === null) {
          return null;
        }
        if (g === 0 || typeof u != "object") {
          return u;
        }
        if (i(u, e)) {
          p = new e();
        } else if (i(u, t)) {
          p = new t();
        } else if (i(u, r)) {
          p = new r(function (e, t) {
            u.then(function (t) {
              e(a(t, g - 1));
            }, function (e) {
              t(a(e, g - 1));
            });
          });
        } else if (o.__isArray(u)) {
          p = [];
        } else if (o.__isRegExp(u)) {
          p = new RegExp(u.source, s(u));
          if (u.lastIndex) {
            p.lastIndex = u.lastIndex;
          }
        } else if (o.__isDate(u)) {
          p = new Date(u.getTime());
        } else {
          if (A && n.isBuffer(u)) {
            p = n.allocUnsafe ? n.allocUnsafe(u.length) : new n(u.length);
            u.copy(p);
            return p;
          }
          if (i(u, Error)) {
            p = Object.create(u);
          } else if (c === undefined) {
            p = Object.create(m = Object.getPrototypeOf(u));
          } else {
            p = Object.create(c);
            m = c;
          }
        }
        if (l) {
          var p;
          var m;
          var y;
          var v = d.indexOf(u);
          if (v != -1) {
            return f[v];
          }
          d.push(u);
          f.push(p);
        }
        if (i(u, e)) {
          u.forEach(function (e, t) {
            var r = a(t, g - 1);
            var n = a(e, g - 1);
            p.set(r, n);
          });
        }
        if (i(u, t)) {
          u.forEach(function (e) {
            var t = a(e, g - 1);
            p.add(t);
          });
        }
        for (var b in u) {
          if (m) {
            y = Object.getOwnPropertyDescriptor(m, b);
          }
          if (!y || y.set != null) {
            p[b] = a(u[b], g - 1);
          }
        }
        if (Object.getOwnPropertySymbols) {
          var w = Object.getOwnPropertySymbols(u);
          var b = 0;
          for (; b < w.length; b++) {
            var C = w[b];
            var E = Object.getOwnPropertyDescriptor(u, C);
            if (!E || E.enumerable || h) {
              p[C] = a(u[C], g - 1);
              if (!E.enumerable) {
                Object.defineProperty(p, C, {
                  enumerable: false
                });
              }
            }
          }
        }
        if (h) {
          var I = Object.getOwnPropertyNames(u);
          var b = 0;
          for (; b < I.length; b++) {
            var B = I[b];
            var E = Object.getOwnPropertyDescriptor(u, B);
            if (!E || !E.enumerable) {
              p[B] = a(u[B], g - 1);
              Object.defineProperty(p, B, {
                enumerable: false
              });
            }
          }
        }
        return p;
      }(a, u);
    }
    function a(e) {
      return Object.prototype.toString.call(e);
    }
    function s(e) {
      var t = "";
      if (e.global) {
        t += "g";
      }
      if (e.ignoreCase) {
        t += "i";
      }
      if (e.multiline) {
        t += "m";
      }
      return t;
    }
    o.clonePrototype = function (e) {
      if (e === null) {
        return null;
      }
      function t() {}
      t.prototype = e;
      return new t();
    };
    o.__objToStr = a;
    o.__isDate = function (e) {
      return typeof e == "object" && a(e) === "[object Date]";
    };
    o.__isArray = function (e) {
      return typeof e == "object" && a(e) === "[object Array]";
    };
    o.__isRegExp = function (e) {
      return typeof e == "object" && a(e) === "[object RegExp]";
    };
    o.__getRegExpFlags = s;
    return o;
  }();
  module.exports &&= i;
}