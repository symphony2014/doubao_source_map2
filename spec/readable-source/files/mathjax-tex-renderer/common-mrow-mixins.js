// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'cssBoundingBoxClass'
// - Resolved require(761002) to 'css-bounding-box-class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 50783
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var n = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var o = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  var i = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.CommonInferredMrowMixin = exports.CommonMrowMixin = undefined;
  var cssBoundingBoxClass = require("css-bounding-box-class") /*id: 761002*/;
  exports.CommonMrowMixin = function (t) {
    return function (t) {
      function e() {
        var e;
        var Q;
        var r = [];
        var T = 0;
        for (; T < arguments.length; T++) {
          r[T] = arguments[T];
        }
        var u = t.apply(this, o([], n(r), false)) || this;
        u.stretchChildren();
        try {
          var s = i(u.childNodes);
          var l = s.next();
          for (; !l.done; l = s.next()) {
            if (l.value.bbox.pwidth) {
              u.bbox.pwidth = cssBoundingBoxClass.BBox.fullWidth;
              break;
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (l && !l.done && (Q = s.return)) {
              Q.call(s);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        return u;
      }
      T(e, t);
      Object.defineProperty(e.prototype, "fixesPWidth", {
        get: function () {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.stretchChildren = function () {
        var t;
        var e;
        var Q;
        var r;
        var T;
        var n;
        var o = [];
        try {
          var a = i(this.childNodes);
          var u = a.next();
          for (; !u.done; u = a.next()) {
            var s = u.value;
            if (s.canStretch(1)) {
              o.push(s);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (u && !u.done && (e = a.return)) {
              e.call(a);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        var l = o.length;
        var c = this.childNodes.length;
        if (l && c > 1) {
          var p = 0;
          var h = 0;
          var f = l > 1 && l === c;
          try {
            var d = i(this.childNodes);
            var D = d.next();
            for (; !D.done; D = d.next()) {
              var s = D.value;
              var L = s.stretch.dir === 0;
              if (f || L) {
                var m = s.getOuterBBox(L);
                var y = m.h;
                var H = m.d;
                var v = m.rscale;
                y *= v;
                H *= v;
                if (y > p) {
                  p = y;
                }
                if (H > h) {
                  h = H;
                }
              }
            }
          } catch (t) {
            Q = {
              error: t
            };
          } finally {
            try {
              if (D && !D.done && (r = d.return)) {
                r.call(d);
              }
            } finally {
              if (Q) {
                throw Q.error;
              }
            }
          }
          try {
            var g = i(o);
            var b = g.next();
            for (; !b.done; b = g.next()) {
              var s = b.value;
              s.coreMO().getStretchedVariant([p, h]);
            }
          } catch (t) {
            T = {
              error: t
            };
          } finally {
            try {
              if (b && !b.done && (n = g.return)) {
                n.call(g);
              }
            } finally {
              if (T) {
                throw T.error;
              }
            }
          }
        }
      };
      return e;
    }(t);
  };
  exports.CommonInferredMrowMixin = function (t) {
    return function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      T(e, t);
      e.prototype.getScale = function () {
        this.bbox.scale = this.parent.bbox.scale;
        this.bbox.rscale = 1;
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}