// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'cssBoundingBoxClass'
// - Resolved require(761002) to 'css-bounding-box-class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 645786
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
  exports.CommonMsqrtMixin = undefined;
  var cssBoundingBoxClass = require("css-bounding-box-class") /*id: 761002*/;
  exports.CommonMsqrtMixin = function (t) {
    return function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, o([], n(e), false)) || this;
        var T = r.createMo("√");
        T.canStretch(1);
        var i = r.childNodes[r.base].getOuterBBox();
        var a = i.h;
        var u = i.d;
        var s = r.font.params.rule_thickness;
        var l = r.node.attributes.get("displaystyle") ? r.font.params.x_height : s;
        r.surdH = a + u + s * 2 + l / 4;
        T.getStretchedVariant([r.surdH - u, u], true);
        return r;
      }
      T(e, t);
      Object.defineProperty(e.prototype, "base", {
        get: function () {
          return 0;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "surd", {
        get: function () {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "root", {
        get: function () {
          return null;
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.createMo = function (e) {
        var Q = t.prototype.createMo.call(this, e);
        this.childNodes.push(Q);
        return Q;
      };
      e.prototype.computeBBox = function (t, e = false) {
        var Q = this.childNodes[this.surd].getBBox();
        var r = new cssBoundingBoxClass.BBox(this.childNodes[this.base].getOuterBBox());
        var T = this.getPQ(Q)[1];
        var o = this.font.params.rule_thickness;
        var a = r.h + T + o;
        var u = n(this.getRootDimens(Q, a), 1)[0];
        t.h = a + o;
        this.combineRootBBox(t, Q, a);
        t.combine(Q, u, a - Q.h);
        t.combine(r, u + Q.w, 0);
        t.clean();
        this.setChildPWidths(e);
      };
      e.prototype.combineRootBBox = function (t, e, Q) {};
      e.prototype.getPQ = function (t) {
        var e = this.font.params.rule_thickness;
        var Q = this.node.attributes.get("displaystyle") ? this.font.params.x_height : e;
        var r = t.h + t.d > this.surdH ? (t.h + t.d - (this.surdH - e * 2 - Q / 2)) / 2 : e + Q / 4;
        return [Q, r];
      };
      e.prototype.getRootDimens = function (t, e) {
        return [0, 0, 0, 0];
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}