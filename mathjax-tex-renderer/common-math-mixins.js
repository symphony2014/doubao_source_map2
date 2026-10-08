// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 316598
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
  exports.CommonMsubsupMixin = exports.CommonMsupMixin = exports.CommonMsubMixin = undefined;
  exports.CommonMsubMixin = function (t) {
    var e;
    (e = function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      r(e, t);
      Object.defineProperty(e.prototype, "scriptChild", {
        get: function () {
          return this.childNodes[this.node.sub];
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.getOffset = function () {
        return [0, -this.getV()];
      };
      return e;
    }(t)).useIC = false;
    return e;
  };
  exports.CommonMsupMixin = function (t) {
    return function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      r(e, t);
      Object.defineProperty(e.prototype, "scriptChild", {
        get: function () {
          return this.childNodes[this.node.sup];
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.getOffset = function () {
        return [this.getAdjustedIc() - (this.baseRemoveIc ? 0 : this.baseIc), this.getU()];
      };
      return e;
    }(t);
  };
  exports.CommonMsubsupMixin = function (t) {
    var e;
    (e = function (t) {
      function e() {
        var e = t !== null && t.apply(this, arguments) || this;
        e.UVQ = null;
        return e;
      }
      r(e, t);
      Object.defineProperty(e.prototype, "subChild", {
        get: function () {
          return this.childNodes[this.node.sub];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "supChild", {
        get: function () {
          return this.childNodes[this.node.sup];
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.computeBBox = function (t, e = false) {
        var Q = this.baseChild.getOuterBBox();
        var r = T([this.subChild.getOuterBBox(), this.supChild.getOuterBBox()], 2);
        var n = r[0];
        var o = r[1];
        t.empty();
        t.append(Q);
        var i = this.getBaseWidth();
        var a = this.getAdjustedIc();
        var u = T(this.getUVQ(), 2);
        var s = u[0];
        var l = u[1];
        t.combine(n, i, l);
        t.combine(o, i + a, s);
        t.w += this.font.params.scriptspace;
        t.clean();
        this.setChildPWidths(e);
      };
      e.prototype.getUVQ = function (t = this.subChild.getOuterBBox(), e = this.supChild.getOuterBBox()) {
        var Q = this.baseCore.getOuterBBox();
        if (this.UVQ) {
          return this.UVQ;
        }
        var r = this.font.params;
        var n = r.rule_thickness * 3;
        var o = this.length2em(this.node.attributes.get("subscriptshift"), r.sub2);
        var i = this.baseCharZero(Q.d * this.baseScale + r.sub_drop * t.rscale);
        var a = T([this.getU(), Math.max(i, o)], 2);
        var u = a[0];
        var s = a[1];
        var l = u - e.d * e.rscale - (t.h * t.rscale - s);
        if (l < n) {
          s += n - l;
          var c = r.x_height * 0.8 - (u - e.d * e.rscale);
          if (c > 0) {
            u += c;
            s -= c;
          }
        }
        u = Math.max(this.length2em(this.node.attributes.get("superscriptshift"), u), u);
        s = Math.max(this.length2em(this.node.attributes.get("subscriptshift"), s), s);
        l = u - e.d * e.rscale - (t.h * t.rscale - s);
        this.UVQ = [u, -s, l];
        return this.UVQ;
      };
      return e;
    }(t)).useIC = false;
    return e;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}