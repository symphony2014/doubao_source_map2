// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 308950
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
  var T = this && this.__read || function (t, e) {
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
  exports.CommonMpaddedMixin = undefined;
  exports.CommonMpaddedMixin = function (t) {
    return function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      r(e, t);
      e.prototype.getDimens = function () {
        var t = this.node.attributes.getList("width", "height", "depth", "lspace", "voffset");
        var e = this.childNodes[0].getBBox();
        var Q = e.w;
        var r = e.h;
        var T = e.d;
        var n = Q;
        var o = r;
        var i = T;
        var a = 0;
        var u = 0;
        var s = 0;
        if (t.width !== "") {
          Q = this.dimen(t.width, e, "w", 0);
        }
        if (t.height !== "") {
          r = this.dimen(t.height, e, "h", 0);
        }
        if (t.depth !== "") {
          T = this.dimen(t.depth, e, "d", 0);
        }
        if (t.voffset !== "") {
          u = this.dimen(t.voffset, e);
        }
        if (t.lspace !== "") {
          a = this.dimen(t.lspace, e);
        }
        var l = this.node.attributes.get("data-align");
        if (l) {
          s = this.getAlignX(Q, e, l);
        }
        return [o, i, n, r - o, T - i, Q - n, a, u, s];
      };
      e.prototype.dimen = function (t, e, Q = "", r = null) {
        var T = (t = String(t)).match(/width|height|depth/);
        var n = T ? e[T[0].charAt(0)] : Q ? e[Q] : 0;
        var o = this.length2em(t, n) || 0;
        if (t.match(/^[-+]/) && Q) {
          o += n;
        }
        if (r != null) {
          o = Math.max(r, o);
        }
        return o;
      };
      e.prototype.computeBBox = function (t, e = false) {
        var Q = T(this.getDimens(), 6);
        var r = Q[0];
        var n = Q[1];
        var o = Q[2];
        var i = Q[3];
        var a = Q[4];
        var u = Q[5];
        t.w = o + u;
        t.h = r + i;
        t.d = n + a;
        this.setChildPWidths(e, t.w);
      };
      e.prototype.getWrapWidth = function (t) {
        return this.getBBox().w;
      };
      e.prototype.getChildAlign = function (t) {
        return this.node.attributes.get("data-align") || "left";
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}