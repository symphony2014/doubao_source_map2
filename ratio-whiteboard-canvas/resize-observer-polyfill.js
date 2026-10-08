// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ResizeObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18653.6c0138b3.js
         * chunkId: 18653
         * moduleId: 412454
         */
module.exports = function (module, exports, require) {
  var r = function () {
    if (typeof Map != "undefined") {
      return Map;
    }
    function t(t, e) {
      var n = -1;
      t.some(function (t, r) {
        return t[0] === e && (n = r, true);
      });
      return n;
    }
    return function () {
      function e() {
        this.__entries__ = [];
      }
      var n = {
        size: {
          configurable: true
        }
      };
      n.size.get = function () {
        return this.__entries__.length;
      };
      e.prototype.get = function (e) {
        var n = t(this.__entries__, e);
        var r = this.__entries__[n];
        return r && r[1];
      };
      e.prototype.set = function (e, n) {
        var r = t(this.__entries__, e);
        if (~r) {
          this.__entries__[r][1] = n;
        } else {
          this.__entries__.push([e, n]);
        }
      };
      e.prototype.delete = function (e) {
        var n = this.__entries__;
        var r = t(n, e);
        if (~r) {
          n.splice(r, 1);
        }
      };
      e.prototype.has = function (e) {
        return !!~t(this.__entries__, e);
      };
      e.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      e.prototype.forEach = function (t, e = null) {
        var n = 0;
        var r = this.__entries__;
        for (; n < r.length; n += 1) {
          var o = r[n];
          t.call(e, o[1], o[0]);
        }
      };
      Object.defineProperties(e.prototype, n);
      return e;
    }();
  }();
  var o = typeof window != "undefined" && typeof document != "undefined" && window.document === document;
  var i = require.g !== undefined && require.g.Math === Math ? require.g : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")();
  var s = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(i) : function (t) {
    return setTimeout(function () {
      return t(Date.now());
    }, 1000 / 60);
  };
  function c(t, e) {
    var n = false;
    var r = false;
    var o = 0;
    function i() {
      if (n) {
        n = false;
        t();
      }
      if (r) {
        u();
      }
    }
    function c() {
      s(i);
    }
    function u() {
      var t = Date.now();
      if (n) {
        if (t - o < 2) {
          return;
        }
        r = true;
      } else {
        n = true;
        r = false;
        setTimeout(c, e);
      }
      o = t;
    }
    return u;
  }
  var u = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
  var a = typeof MutationObserver != "undefined";
  function l() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = c(this.refresh.bind(this), 20);
  }
  l.prototype.addObserver = function (t) {
    if (!~this.observers_.indexOf(t)) {
      this.observers_.push(t);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  l.prototype.removeObserver = function (t) {
    var e = this.observers_;
    var n = e.indexOf(t);
    if (~n) {
      e.splice(n, 1);
    }
    if (!e.length && this.connected_) {
      this.disconnect_();
    }
  };
  l.prototype.refresh = function () {
    if (this.updateObservers_()) {
      this.refresh();
    }
  };
  l.prototype.updateObservers_ = function () {
    var t = this.observers_.filter(function (t) {
      t.gatherActive();
      return t.hasActive();
    });
    t.forEach(function (t) {
      return t.broadcastActive();
    });
    return t.length > 0;
  };
  l.prototype.connect_ = function () {
    if (o && !this.connected_) {
      document.addEventListener("transitionend", this.onTransitionEnd_);
      window.addEventListener("resize", this.refresh);
      if (a) {
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
  l.prototype.disconnect_ = function () {
    if (o && this.connected_) {
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
  l.prototype.onTransitionEnd_ = function (t) {
    var e = t.propertyName;
    if (e === undefined) {
      e = "";
    }
    if (u.some(function (t) {
      return !!~e.indexOf(t);
    })) {
      this.refresh();
    }
  };
  l.getInstance = function () {
    this.instance_ ||= new l();
    return this.instance_;
  };
  l.instance_ = null;
  function p(t, e) {
    var n = 0;
    var r = Object.keys(e);
    for (; n < r.length; n += 1) {
      var o = r[n];
      Object.defineProperty(t, o, {
        value: e[o],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return t;
  }
  function h(t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView || i;
  }
  var f = m(0, 0, 0, 0);
  function d(t) {
    return parseFloat(t) || 0;
  }
  function v(t) {
    var e = [];
    var n = arguments.length - 1;
    while (n-- > 0) {
      e[n] = arguments[n + 1];
    }
    return e.reduce(function (e, n) {
      return e + d(t["border-" + n + "-width"]);
    }, 0);
  }
  var y = typeof SVGGraphicsElement != "undefined" ? function (t) {
    return t instanceof h(t).SVGGraphicsElement;
  } : function (t) {
    return t instanceof h(t).SVGElement && typeof t.getBBox == "function";
  };
  function m(t, e, n, r) {
    return {
      x: t,
      y: e,
      width: n,
      height: r
    };
  }
  function b(t) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = m(0, 0, 0, 0);
    this.target = t;
  }
  b.prototype.isActive = function () {
    var t = function (t) {
      if (!o) {
        return f;
      }
      if (y(t)) {
        var e;
        return m(0, 0, (e = t.getBBox()).width, e.height);
      }
      return function (t) {
        var e;
        var n = t.clientWidth;
        var r = t.clientHeight;
        if (!n && !r) {
          return f;
        }
        var o = h(t).getComputedStyle(t);
        var i = function (t) {
          var e = {};
          var n = 0;
          var r = ["top", "right", "bottom", "left"];
          for (; n < r.length; n += 1) {
            var o = r[n];
            var i = t["padding-" + o];
            e[o] = d(i);
          }
          return e;
        }(o);
        var s = i.left + i.right;
        var c = i.top + i.bottom;
        var u = d(o.width);
        var a = d(o.height);
        if (o.boxSizing === "border-box") {
          if (Math.round(u + s) !== n) {
            u -= v(o, "left", "right") + s;
          }
          if (Math.round(a + c) !== r) {
            a -= v(o, "top", "bottom") + c;
          }
        }
        if ((e = t) !== h(e).document.documentElement) {
          var l = Math.round(u + s) - n;
          var p = Math.round(a + c) - r;
          if (Math.abs(l) !== 1) {
            u -= l;
          }
          if (Math.abs(p) !== 1) {
            a -= p;
          }
        }
        return m(i.left, i.top, u, a);
      }(t);
    }(this.target);
    this.contentRect_ = t;
    return t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
  };
  b.prototype.broadcastRect = function () {
    var t = this.contentRect_;
    this.broadcastWidth = t.width;
    this.broadcastHeight = t.height;
    return t;
  };
  function _(t, e) {
    var n;
    var r;
    var o;
    var i;
    var s;
    n = e.x;
    r = e.y;
    o = e.width;
    i = e.height;
    p(s = Object.create((typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object).prototype), {
      x: n,
      y: r,
      width: o,
      height: i,
      top: r,
      right: n + o,
      bottom: i + r,
      left: n
    });
    var c = s;
    p(this, {
      target: t,
      contentRect: c
    });
  }
  function g(t, e, n) {
    this.activeObservations_ = [];
    this.observations_ = new r();
    if (typeof t != "function") {
      throw TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = t;
    this.controller_ = e;
    this.callbackCtx_ = n;
  }
  g.prototype.observe = function (t) {
    if (!arguments.length) {
      throw TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element != "undefined" && Element instanceof Object) {
      if (!(t instanceof h(t).Element)) {
        throw TypeError("parameter 1 is not of type \"Element\".");
      }
      var e = this.observations_;
      if (!e.has(t)) {
        e.set(t, new b(t));
        this.controller_.addObserver(this);
        this.controller_.refresh();
      }
    }
  };
  g.prototype.unobserve = function (t) {
    if (!arguments.length) {
      throw TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element != "undefined" && Element instanceof Object) {
      if (!(t instanceof h(t).Element)) {
        throw TypeError("parameter 1 is not of type \"Element\".");
      }
      var e = this.observations_;
      if (e.has(t)) {
        e.delete(t);
        if (!e.size) {
          this.controller_.removeObserver(this);
        }
      }
    }
  };
  g.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  g.prototype.gatherActive = function () {
    var t = this;
    this.clearActive();
    this.observations_.forEach(function (e) {
      if (e.isActive()) {
        t.activeObservations_.push(e);
      }
    });
  };
  g.prototype.broadcastActive = function () {
    if (this.hasActive()) {
      var t = this.callbackCtx_;
      var e = this.activeObservations_.map(function (t) {
        return new _(t.target, t.broadcastRect());
      });
      this.callback_.call(t, e, t);
      this.clearActive();
    }
  };
  g.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  g.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };
  var E = typeof WeakMap != "undefined" ? new WeakMap() : new r();
  function w(t) {
    if (!(this instanceof w)) {
      throw TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw TypeError("1 argument required, but only 0 present.");
    }
    var e = new g(t, l.getInstance(), this);
    E.set(this, e);
  }
  ["observe", "unobserve", "disconnect"].forEach(function (t) {
    w.prototype[t] = function () {
      var e;
      return (e = E.get(this))[t].apply(e, arguments);
    };
  });
  var O = i.ResizeObserver !== undefined ? i.ResizeObserver : w;
  exports.ResizeObserver = O;
}