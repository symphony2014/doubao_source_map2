// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 761088
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
  exports.CommonMlabeledtrMixin = exports.CommonMtrMixin = undefined;
  exports.CommonMtrMixin = function (t) {
    return function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      r(e, t);
      Object.defineProperty(e.prototype, "fixesPWidth", {
        get: function () {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "numCells", {
        get: function () {
          return this.childNodes.length;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "labeled", {
        get: function () {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "tableCells", {
        get: function () {
          return this.childNodes;
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.getChild = function (t) {
        return this.childNodes[t];
      };
      e.prototype.getChildBBoxes = function () {
        return this.childNodes.map(function (t) {
          return t.getBBox();
        });
      };
      e.prototype.stretchChildren = function (t = null) {
        var e;
        var Q;
        var r;
        var n;
        var o;
        var i;
        var a = [];
        var u = this.labeled ? this.childNodes.slice(1) : this.childNodes;
        try {
          var s = T(u);
          var l = s.next();
          for (; !l.done; l = s.next()) {
            var c = l.value;
            var p = c.childNodes[0];
            if (p.canStretch(1)) {
              a.push(p);
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
        var h = a.length;
        var f = this.childNodes.length;
        if (h && f > 1) {
          if (t === null) {
            var d = 0;
            var D = 0;
            var L = h > 1 && h === f;
            try {
              var m = T(u);
              var y = m.next();
              for (; !y.done; y = m.next()) {
                var c = y.value;
                var p = c.childNodes[0];
                var H = p.stretch.dir === 0;
                if (L || H) {
                  var v = p.getBBox(H);
                  var g = v.h;
                  var b = v.d;
                  if (g > d) {
                    d = g;
                  }
                  if (b > D) {
                    D = b;
                  }
                }
              }
            } catch (t) {
              r = {
                error: t
              };
            } finally {
              try {
                if (y && !y.done && (n = m.return)) {
                  n.call(m);
                }
              } finally {
                if (r) {
                  throw r.error;
                }
              }
            }
            t = [d, D];
          }
          try {
            var E = T(a);
            var C = E.next();
            for (; !C.done; C = E.next()) {
              var p = C.value;
              p.coreMO().getStretchedVariant(t);
            }
          } catch (t) {
            o = {
              error: t
            };
          } finally {
            try {
              if (C && !C.done && (i = E.return)) {
                i.call(E);
              }
            } finally {
              if (o) {
                throw o.error;
              }
            }
          }
        }
      };
      return e;
    }(t);
  };
  exports.CommonMlabeledtrMixin = function (t) {
    return function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      r(e, t);
      Object.defineProperty(e.prototype, "numCells", {
        get: function () {
          return Math.max(0, this.childNodes.length - 1);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "labeled", {
        get: function () {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(e.prototype, "tableCells", {
        get: function () {
          return this.childNodes.slice(1);
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.getChild = function (t) {
        return this.childNodes[t + 1];
      };
      e.prototype.getChildBBoxes = function () {
        return this.childNodes.slice(1).map(function (t) {
          return t.getBBox();
        });
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}