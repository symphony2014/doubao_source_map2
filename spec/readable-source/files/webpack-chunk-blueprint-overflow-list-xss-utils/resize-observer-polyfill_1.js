// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ResizeObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 767395
         */
module.exports = function (module, exports, require) {
  var r = function () {
    if (typeof Map != "undefined") {
      return Map;
    }
    function e(e, t) {
      var n = -1;
      e.some(function (e, r) {
        return e[0] === t && (n = r, true);
      });
      return n;
    }
    return function () {
      function t() {
        this.__entries__ = [];
      }
      Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      t.prototype.get = function (t) {
        var n = e(this.__entries__, t);
        var r = this.__entries__[n];
        return r && r[1];
      };
      t.prototype.set = function (t, n) {
        var r = e(this.__entries__, t);
        if (~r) {
          this.__entries__[r][1] = n;
        } else {
          this.__entries__.push([t, n]);
        }
      };
      t.prototype.delete = function (t) {
        var n = this.__entries__;
        var r = e(n, t);
        if (~r) {
          n.splice(r, 1);
        }
      };
      t.prototype.has = function (t) {
        return !!~e(this.__entries__, t);
      };
      t.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      t.prototype.forEach = function (e, t = null) {
        var n = 0;
        var r = this.__entries__;
        for (; n < r.length; n++) {
          var i = r[n];
          e.call(t, i[1], i[0]);
        }
      };
      return t;
    }();
  }();
  var i = typeof window != "undefined" && typeof document != "undefined" && window.document === document;
  var o = require.g !== undefined && require.g.Math === Math ? require.g : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")();
  var a = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(o) : function (e) {
    return setTimeout(function () {
      return e(Date.now());
    }, 1000 / 60);
  };
  var s = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
  var u = typeof MutationObserver != "undefined";
  var c = function () {
    function e() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = function (e, t) {
        var n = false;
        var r = false;
        var i = 0;
        function o() {
          if (n) {
            n = false;
            e();
          }
          if (r) {
            u();
          }
        }
        function s() {
          a(o);
        }
        function u() {
          var e = Date.now();
          if (n) {
            if (e - i < 2) {
              return;
            }
            r = true;
          } else {
            n = true;
            r = false;
            setTimeout(s, 20);
          }
          i = e;
        }
        return u;
      }(this.refresh.bind(this), 0);
    }
    e.prototype.addObserver = function (e) {
      if (!~this.observers_.indexOf(e)) {
        this.observers_.push(e);
      }
      if (!this.connected_) {
        this.connect_();
      }
    };
    e.prototype.removeObserver = function (e) {
      var t = this.observers_;
      var n = t.indexOf(e);
      if (~n) {
        t.splice(n, 1);
      }
      if (!t.length && this.connected_) {
        this.disconnect_();
      }
    };
    e.prototype.refresh = function () {
      if (this.updateObservers_()) {
        this.refresh();
      }
    };
    e.prototype.updateObservers_ = function () {
      var e = this.observers_.filter(function (e) {
        e.gatherActive();
        return e.hasActive();
      });
      e.forEach(function (e) {
        return e.broadcastActive();
      });
      return e.length > 0;
    };
    e.prototype.connect_ = function () {
      if (i && !this.connected_) {
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (u) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener("DOMSubtreeModified", this.refresh);
          this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
      }
    };
    e.prototype.disconnect_ = function () {
      if (i && this.connected_) {
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
          document.removeEventListener("DOMSubtreeModified", this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      }
    };
    e.prototype.onTransitionEnd_ = function (e) {
      var t = e.propertyName;
      var n = t === undefined ? "" : t;
      if (s.some(function (e) {
        return !!~n.indexOf(e);
      })) {
        this.refresh();
      }
    };
    e.getInstance = function () {
      this.instance_ ||= new e();
      return this.instance_;
    };
    e.instance_ = null;
    return e;
  }();
  function l(e, t) {
    var n = 0;
    var r = Object.keys(t);
    for (; n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return e;
  }
  function f(e) {
    return e && e.ownerDocument && e.ownerDocument.defaultView || o;
  }
  var h = v(0, 0, 0, 0);
  function d(e) {
    return parseFloat(e) || 0;
  }
  function p(e) {
    var t = [];
    var n = 1;
    for (; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    return t.reduce(function (t, n) {
      return t + d(e["border-" + n + "-width"]);
    }, 0);
  }
  var g = typeof SVGGraphicsElement != "undefined" ? function (e) {
    return e instanceof f(e).SVGGraphicsElement;
  } : function (e) {
    return e instanceof f(e).SVGElement && typeof e.getBBox == "function";
  };
  function v(e, t, n, r) {
    return {
      x: e,
      y: t,
      width: n,
      height: r
    };
  }
  var m = function () {
    function e(e) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = v(0, 0, 0, 0);
      this.target = e;
    }
    e.prototype.isActive = function () {
      var e = function (e) {
        if (!i) {
          return h;
        }
        if (g(e)) {
          var t;
          return v(0, 0, (t = e.getBBox()).width, t.height);
        }
        return function (e) {
          var t;
          var n = e.clientWidth;
          var r = e.clientHeight;
          if (!n && !r) {
            return h;
          }
          var i = f(e).getComputedStyle(e);
          var o = function (e) {
            var t = {};
            var n = 0;
            var r = ["top", "right", "bottom", "left"];
            for (; n < r.length; n++) {
              var i = r[n];
              var o = e["padding-" + i];
              t[i] = d(o);
            }
            return t;
          }(i);
          var a = o.left + o.right;
          var s = o.top + o.bottom;
          var u = d(i.width);
          var c = d(i.height);
          if (i.boxSizing === "border-box") {
            if (Math.round(u + a) !== n) {
              u -= p(i, "left", "right") + a;
            }
            if (Math.round(c + s) !== r) {
              c -= p(i, "top", "bottom") + s;
            }
          }
          if ((t = e) !== f(t).document.documentElement) {
            var l = Math.round(u + a) - n;
            var g = Math.round(c + s) - r;
            if (Math.abs(l) !== 1) {
              u -= l;
            }
            if (Math.abs(g) !== 1) {
              c -= g;
            }
          }
          return v(o.left, o.top, u, c);
        }(e);
      }(this.target);
      this.contentRect_ = e;
      return e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    };
    e.prototype.broadcastRect = function () {
      var e = this.contentRect_;
      this.broadcastWidth = e.width;
      this.broadcastHeight = e.height;
      return e;
    };
    return e;
  }();
  function y(e, t) {
    var n;
    var r;
    var i;
    var o;
    var a;
    n = t.x;
    r = t.y;
    i = t.width;
    o = t.height;
    l(a = Object.create((typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object).prototype), {
      x: n,
      y: r,
      width: i,
      height: o,
      top: r,
      right: n + i,
      bottom: o + r,
      left: n
    });
    var s = a;
    l(this, {
      target: e,
      contentRect: s
    });
  }
  var b = function () {
    function e(e, t, n) {
      this.activeObservations_ = [];
      this.observations_ = new r();
      if (typeof e != "function") {
        throw TypeError("The callback provided as parameter 1 is not a function.");
      }
      this.callback_ = e;
      this.controller_ = t;
      this.callbackCtx_ = n;
    }
    e.prototype.observe = function (e) {
      if (!arguments.length) {
        throw TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element != "undefined" && Element instanceof Object) {
        if (!(e instanceof f(e).Element)) {
          throw TypeError("parameter 1 is not of type \"Element\".");
        }
        var t = this.observations_;
        if (!t.has(e)) {
          t.set(e, new m(e));
          this.controller_.addObserver(this);
          this.controller_.refresh();
        }
      }
    };
    e.prototype.unobserve = function (e) {
      if (!arguments.length) {
        throw TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element != "undefined" && Element instanceof Object) {
        if (!(e instanceof f(e).Element)) {
          throw TypeError("parameter 1 is not of type \"Element\".");
        }
        var t = this.observations_;
        if (t.has(e)) {
          t.delete(e);
          if (!t.size) {
            this.controller_.removeObserver(this);
          }
        }
      }
    };
    e.prototype.disconnect = function () {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    e.prototype.gatherActive = function () {
      var e = this;
      this.clearActive();
      this.observations_.forEach(function (t) {
        if (t.isActive()) {
          e.activeObservations_.push(t);
        }
      });
    };
    e.prototype.broadcastActive = function () {
      if (this.hasActive()) {
        var e = this.callbackCtx_;
        var t = this.activeObservations_.map(function (e) {
          return new y(e.target, e.broadcastRect());
        });
        this.callback_.call(e, t, e);
        this.clearActive();
      }
    };
    e.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    };
    e.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    };
    return e;
  }();
  var _ = typeof WeakMap != "undefined" ? new WeakMap() : new r();
  var w = function e(t) {
    if (!(this instanceof e)) {
      throw TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw TypeError("1 argument required, but only 0 present.");
    }
    var n = new b(t, c.getInstance(), this);
    _.set(this, n);
  };
  ["observe", "unobserve", "disconnect"].forEach(function (e) {
    w.prototype[e] = function () {
      var t;
      return (t = _.get(this))[e].apply(t, arguments);
    };
  });
  var E = o.ResizeObserver !== undefined ? o.ResizeObserver : w;
  exports.ResizeObserver = E;
}