// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 683182
         */
module.exports = function (module, exports, require) {
  var Q;
  var r = this && this.__extends || (Q = function (t, e) {
    return (Q = Object.setPrototypeOf || {
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
    function r() {
      this.constructor = t;
    }
    Q(t, e);
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
  });
  var T = this && this.__values || function (t) {
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
  exports.CommonTextNodeMixin = undefined;
  exports.CommonTextNodeMixin = function (t) {
    return function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      r(e, t);
      e.prototype.computeBBox = function (t, e = false) {
        var Q;
        var r;
        var o = this.parent.variant;
        var i = this.node.getText();
        if (o === "-explicitFont") {
          var a = this.jax.getFontData(this.parent.styles);
          var u = this.jax.measureText(i, o, a);
          var s = u.w;
          var l = u.h;
          var c = u.d;
          t.h = l;
          t.d = c;
          t.w = s;
        } else {
          var p = this.remappedText(i, o);
          t.empty();
          try {
            var h = T(p);
            var f = h.next();
            for (; !f.done; f = h.next()) {
              var d = f.value;
              var D = n(this.getVariantChar(o, d), 4);
              var l = D[0];
              var c = D[1];
              var s = D[2];
              var L = D[3];
              if (L.unknown) {
                var m = this.jax.measureText(String.fromCodePoint(d), o);
                s = m.w;
                l = m.h;
                c = m.d;
              }
              t.w += s;
              if (l > t.h) {
                t.h = l;
              }
              if (c > t.d) {
                t.d = c;
              }
              t.ic = L.ic || 0;
              t.sk = L.sk || 0;
              t.dx = L.dx || 0;
            }
          } catch (t) {
            Q = {
              error: t
            };
          } finally {
            try {
              if (f && !f.done && (r = h.return)) {
                r.call(h);
              }
            } finally {
              if (Q) {
                throw Q.error;
              }
            }
          }
          if (p.length > 1) {
            t.sk = 0;
          }
          t.clean();
        }
      };
      e.prototype.remappedText = function (t, e) {
        var Q = this.parent.stretch.c;
        if (Q) {
          return [Q];
        } else {
          return this.parent.remapChars(this.unicodeChars(t, e));
        }
      };
      e.prototype.getStyles = function () {};
      e.prototype.getVariant = function () {};
      e.prototype.getScale = function () {};
      e.prototype.getSpace = function () {};
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}