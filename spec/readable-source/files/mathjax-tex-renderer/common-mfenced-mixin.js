// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 484096
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
  var o = this && this.__values || function (t) {
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
  exports.CommonMfencedMixin = undefined;
  exports.CommonMfencedMixin = function (t) {
    return function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, n([], T(e), false)) || this;
        r.mrow = null;
        r.createMrow();
        r.addMrowChildren();
        return r;
      }
      r(e, t);
      e.prototype.createMrow = function () {
        var t = this.node.factory.create("inferredMrow");
        t.inheritAttributesFrom(this.node);
        this.mrow = this.wrap(t);
        this.mrow.parent = this;
      };
      e.prototype.addMrowChildren = function () {
        var t;
        var e;
        var Q = this.node;
        var r = this.mrow;
        this.addMo(Q.open);
        if (this.childNodes.length) {
          r.childNodes.push(this.childNodes[0]);
        }
        var T = 0;
        try {
          var n = o(this.childNodes.slice(1));
          var i = n.next();
          for (; !i.done; i = n.next()) {
            var a = i.value;
            this.addMo(Q.separators[T++]);
            r.childNodes.push(a);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (i && !i.done && (e = n.return)) {
              e.call(n);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        this.addMo(Q.close);
        r.stretchChildren();
      };
      e.prototype.addMo = function (t) {
        if (t) {
          var e = this.wrap(t);
          this.mrow.childNodes.push(e);
          e.parent = this.mrow;
        }
      };
      e.prototype.computeBBox = function (t, e = false) {
        t.updateFrom(this.mrow.getOuterBBox());
        this.setChildPWidths(e);
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}