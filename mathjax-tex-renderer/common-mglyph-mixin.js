// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 875807
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
  var n = this && this.__spreadArray || function (t, e, Q) {
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
  exports.CommonMglyphMixin = undefined;
  exports.CommonMglyphMixin = function (t) {
    return function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, n([], T(e), false)) || this;
        r.getParameters();
        return r;
      }
      r(e, t);
      e.prototype.getParameters = function () {
        var t = this.node.attributes.getList("width", "height", "valign", "src", "index");
        var e = t.width;
        var Q = t.height;
        var r = t.valign;
        var T = t.src;
        var n = t.index;
        if (T) {
          this.width = e === "auto" ? 1 : this.length2em(e);
          this.height = Q === "auto" ? 1 : this.length2em(Q);
          this.valign = this.length2em(r || "0");
        } else {
          var o = String.fromCodePoint(parseInt(n));
          var i = this.node.factory;
          this.charWrapper = this.wrap(i.create("text").setText(o));
          this.charWrapper.parent = this;
        }
      };
      e.prototype.computeBBox = function (t, e = false) {
        if (this.charWrapper) {
          t.updateFrom(this.charWrapper.getBBox());
        } else {
          t.w = this.width;
          t.h = this.height + this.valign;
          t.d = -this.valign;
        }
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}