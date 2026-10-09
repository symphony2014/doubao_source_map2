// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 470335
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
  exports.CommonMrootMixin = undefined;
  exports.CommonMrootMixin = function (t) {
    return function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      r(e, t);
      Object.defineProperty(e.prototype, "surd", {
        get: function () {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "root", {
        get: function () {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.combineRootBBox = function (t, e, Q) {
        var r = this.childNodes[this.root].getOuterBBox();
        var T = this.getRootDimens(e, Q)[1];
        t.combine(r, 0, T);
      };
      e.prototype.getRootDimens = function (t, e) {
        var Q = this.childNodes[this.surd];
        var r = this.childNodes[this.root].getOuterBBox();
        var T = (Q.size < 0 ? 0.5 : 0.6) * t.w;
        var n = r.w;
        var o = r.rscale;
        var i = Math.max(n, T / o);
        var a = Math.max(0, i - n);
        return [i * o - T, this.rootHeight(r, t, Q.size, e), a];
      };
      e.prototype.rootHeight = function (t, e, Q, r) {
        var T = e.h + e.d;
        return (Q < 0 ? 1.9 : T * 0.55) - (T - r) + Math.max(0, t.d * t.rscale);
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}