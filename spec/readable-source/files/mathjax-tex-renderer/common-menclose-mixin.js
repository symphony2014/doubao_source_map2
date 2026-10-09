// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(527791) to 'common-arrow-border-utils'
// - Renamed variable 'c' to 'stringUtils_1'
// - Resolved require(769565) to 'string-utils_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 267009
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
  var n = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
    var T = Object.getOwnPropertyDescriptor(e, Q);
    if (!T || ("get" in T ? !e.__esModule : T.writable || T.configurable)) {
      T = {
        enumerable: true,
        get: function () {
          return e[Q];
        }
      };
    }
    Object.defineProperty(t, r, T);
  } : function (t, e, Q, r = Q) {
    t[r] = e[Q];
  });
  var o = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var i = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var Q in t) {
        if (Q !== "default" && Object.prototype.hasOwnProperty.call(t, Q)) {
          n(e, t, Q);
        }
      }
    }
    o(e, t);
    return e;
  };
  var a = this && this.__read || function (t, e) {
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
  var u = this && this.__spreadArray || function (t, e, Q) {
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
  var s = this && this.__values || function (t) {
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
  exports.CommonMencloseMixin = undefined;
  var l = i(require("common-arrow-border-utils") /*id: 527791*/);
  var stringUtils_1 = require("string-utils_1") /*id: 769565*/;
  exports.CommonMencloseMixin = function (t) {
    return function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, u([], a(e), false)) || this;
        r.notations = {};
        r.renderChild = null;
        r.msqrt = null;
        r.padding = l.PADDING;
        r.thickness = l.THICKNESS;
        r.arrowhead = {
          x: l.ARROWX,
          y: l.ARROWY,
          dx: l.ARROWDX
        };
        r.TRBL = [0, 0, 0, 0];
        r.getParameters();
        r.getNotations();
        r.removeRedundantNotations();
        r.initializeNotations();
        r.TRBL = r.getBBoxExtenders();
        return r;
      }
      T(e, t);
      e.prototype.getParameters = function () {
        var t = this.node.attributes;
        var e = t.get("data-padding");
        if (e !== undefined) {
          this.padding = this.length2em(e, l.PADDING);
        }
        var Q = t.get("data-thickness");
        if (Q !== undefined) {
          this.thickness = this.length2em(Q, l.THICKNESS);
        }
        var r = t.get("data-arrowhead");
        if (r !== undefined) {
          var T = a(stringUtils_1.split(r), 3);
          var n = T[0];
          var o = T[1];
          var i = T[2];
          this.arrowhead = {
            x: n ? parseFloat(n) : l.ARROWX,
            y: o ? parseFloat(o) : l.ARROWY,
            dx: i ? parseFloat(i) : l.ARROWDX
          };
        }
      };
      e.prototype.getNotations = function () {
        var t;
        var e;
        var Q = this.constructor.notations;
        try {
          var r = s(stringUtils_1.split(this.node.attributes.get("notation")));
          var T = r.next();
          for (; !T.done; T = r.next()) {
            var n = T.value;
            var o = Q.get(n);
            if (o) {
              this.notations[n] = o;
              if (o.renderChild) {
                this.renderChild = o.renderer;
              }
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (T && !T.done && (e = r.return)) {
              e.call(r);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      };
      e.prototype.removeRedundantNotations = function () {
        var t;
        var e;
        var Q;
        var r;
        try {
          var T = s(Object.keys(this.notations));
          var n = T.next();
          for (; !n.done; n = T.next()) {
            var o = n.value;
            if (this.notations[o]) {
              var i = this.notations[o].remove || "";
              try {
                Q = undefined;
                var a = s(i.split(/ /));
                var u = a.next();
                for (; !u.done; u = a.next()) {
                  var l = u.value;
                  delete this.notations[l];
                }
              } catch (t) {
                Q = {
                  error: t
                };
              } finally {
                try {
                  if (u && !u.done && (r = a.return)) {
                    r.call(a);
                  }
                } finally {
                  if (Q) {
                    throw Q.error;
                  }
                }
              }
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (n && !n.done && (e = T.return)) {
              e.call(T);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      };
      e.prototype.initializeNotations = function () {
        var t;
        var e;
        try {
          var Q = s(Object.keys(this.notations));
          var r = Q.next();
          for (; !r.done; r = Q.next()) {
            var T = r.value;
            var n = this.notations[T].init;
            if (n) {
              n(this);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (r && !r.done && (e = Q.return)) {
              e.call(Q);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      };
      e.prototype.computeBBox = function (t, e = false) {
        var Q = a(this.TRBL, 4);
        var r = Q[0];
        var T = Q[1];
        var n = Q[2];
        var o = Q[3];
        var i = this.childNodes[0].getBBox();
        t.combine(i, o, 0);
        t.h += r;
        t.d += n;
        t.w += T;
        this.setChildPWidths(e);
      };
      e.prototype.getBBoxExtenders = function () {
        var t;
        var e;
        var Q = [0, 0, 0, 0];
        try {
          var r = s(Object.keys(this.notations));
          var T = r.next();
          for (; !T.done; T = r.next()) {
            var n = T.value;
            this.maximizeEntries(Q, this.notations[n].bbox(this));
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (T && !T.done && (e = r.return)) {
              e.call(r);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        return Q;
      };
      e.prototype.getPadding = function () {
        var t;
        var e;
        var Q = this;
        var r = [0, 0, 0, 0];
        try {
          var T = s(Object.keys(this.notations));
          var n = T.next();
          for (; !n.done; n = T.next()) {
            var o = n.value;
            var i = this.notations[o].border;
            if (i) {
              this.maximizeEntries(r, i(this));
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (n && !n.done && (e = T.return)) {
              e.call(T);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        return [0, 1, 2, 3].map(function (t) {
          return Q.TRBL[t] - r[t];
        });
      };
      e.prototype.maximizeEntries = function (t, e) {
        for (var Q = 0; Q < t.length; Q++) {
          if (t[Q] < e[Q]) {
            t[Q] = e[Q];
          }
        }
      };
      e.prototype.getOffset = function (t) {
        var e = a(this.TRBL, 4);
        var Q = e[0];
        var r = e[1];
        var T = e[2];
        var n = e[3];
        var o = (t === "X" ? r - n : T - Q) / 2;
        if (Math.abs(o) > 0.001) {
          return o;
        } else {
          return 0;
        }
      };
      e.prototype.getArgMod = function (t, e) {
        return [Math.atan2(e, t), Math.sqrt(t * t + e * e)];
      };
      e.prototype.arrow = function (t, e, Q, r = "", T = 0) {
        return null;
      };
      e.prototype.arrowData = function () {
        var t = a([this.padding, this.thickness], 2);
        var e = t[0];
        var Q = t[1] * (this.arrowhead.x + Math.max(1, this.arrowhead.dx));
        var r = this.childNodes[0].getBBox();
        var T = r.h;
        var n = r.d;
        var o = r.w;
        var i = T + n;
        var u = Math.sqrt(i * i + o * o);
        var s = Math.max(e, Q * o / u);
        var l = Math.max(e, Q * i / u);
        var c = a(this.getArgMod(o + s * 2, i + l * 2), 2);
        return {
          a: c[0],
          W: c[1],
          x: s,
          y: l
        };
      };
      e.prototype.arrowAW = function () {
        var t = this.childNodes[0].getBBox();
        var e = t.h;
        var Q = t.d;
        var r = t.w;
        var T = a(this.TRBL, 4);
        var n = T[0];
        var o = T[1];
        var i = T[2];
        var u = T[3];
        return this.getArgMod(u + r + o, n + e + Q + i);
      };
      e.prototype.createMsqrt = function (t) {
        var e = this.node.factory.create("msqrt");
        e.inheritAttributesFrom(this.node);
        e.childNodes[0] = t.node;
        var Q = this.wrap(e);
        Q.parent = this;
        return Q;
      };
      e.prototype.sqrtTRBL = function () {
        var t = this.msqrt.getBBox();
        var e = this.msqrt.childNodes[0].getBBox();
        return [t.h - e.h, 0, t.d - e.d, t.w - e.w];
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}