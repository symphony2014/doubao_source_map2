// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'do' to 'ResizeObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 129887
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var l = [];
  var a = "ResizeObserver loop completed with undelivered notifications.";
  function s() {
    var e;
    if (typeof ErrorEvent == "function") {
      e = new ErrorEvent("error", {
        message: a
      });
    } else {
      (e = document.createEvent("Event")).initEvent("error", false, false);
      e.message = a;
    }
    window.dispatchEvent(e);
  }
  (i = r ||= {}).BORDER_BOX = "border-box";
  i.CONTENT_BOX = "content-box";
  i.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
  function c(e) {
    return Object.freeze(e);
  }
  function d(e, t) {
    this.inlineSize = e;
    this.blockSize = t;
    c(this);
  }
  var u = function () {
    function e(e, t, n, i) {
      this.x = e;
      this.y = t;
      this.width = n;
      this.height = i;
      this.top = this.y;
      this.left = this.x;
      this.bottom = this.top + this.height;
      this.right = this.left + this.width;
      return c(this);
    }
    e.prototype.toJSON = function () {
      return {
        x: this.x,
        y: this.y,
        top: this.top,
        right: this.right,
        bottom: this.bottom,
        left: this.left,
        width: this.width,
        height: this.height
      };
    };
    e.fromRect = function (t) {
      return new e(t.x, t.y, t.width, t.height);
    };
    return e;
  }();
  function p(e) {
    return e instanceof SVGElement && "getBBox" in e;
  }
  function h(e) {
    if (p(e)) {
      var t = e.getBBox();
      var n = t.width;
      var i = t.height;
      return !n && !i;
    }
    var r = e.offsetWidth;
    var o = e.offsetHeight;
    return !r && !o && !e.getClientRects().length;
  }
  function m(e) {
    if (e instanceof Element) {
      return true;
    }
    var n = (e == null ? undefined : e.ownerDocument)?.defaultView;
    return !!n && !!(e instanceof n.Element);
  }
  function f(e) {
    switch (e.tagName) {
      case "INPUT":
        if (e.type !== "image") {
          break;
        }
      case "VIDEO":
      case "AUDIO":
      case "EMBED":
      case "OBJECT":
      case "CANVAS":
      case "IFRAME":
      case "IMG":
        return true;
    }
    return false;
  }
  var g = typeof window != "undefined" ? window : {};
  var v = new WeakMap();
  var b = /auto|scroll/;
  var y = /^tb|vertical/;
  var x = /msie|trident/i.test(g.navigator && g.navigator.userAgent);
  function w(e) {
    return parseFloat(e || "0");
  }
  function A(e = 0, t = 0, n = false) {
    return new d((n ? t : e) || 0, (n ? e : t) || 0);
  }
  var _ = c({
    devicePixelContentBoxSize: A(),
    borderBoxSize: A(),
    contentBoxSize: A(),
    contentRect: new u(0, 0, 0, 0)
  });
  function k(e, t = false) {
    if (v.has(e) && !t) {
      return v.get(e);
    }
    if (h(e)) {
      v.set(e, _);
      return _;
    }
    var n = getComputedStyle(e);
    var i = p(e) && e.ownerSVGElement && e.getBBox();
    var r = !x && n.boxSizing === "border-box";
    var o = y.test(n.writingMode || "");
    var l = !i && b.test(n.overflowY || "");
    var a = !i && b.test(n.overflowX || "");
    var s = i ? 0 : w(n.paddingTop);
    var d = i ? 0 : w(n.paddingRight);
    var m = i ? 0 : w(n.paddingBottom);
    var f = i ? 0 : w(n.paddingLeft);
    var g = i ? 0 : w(n.borderTopWidth);
    var k = i ? 0 : w(n.borderRightWidth);
    var S = i ? 0 : w(n.borderBottomWidth);
    var C = i ? 0 : w(n.borderLeftWidth);
    var $ = f + d;
    var E = s + m;
    var R = C + k;
    var T = g + S;
    var N = a ? e.offsetHeight - T - e.clientHeight : 0;
    var j = l ? e.offsetWidth - R - e.clientWidth : 0;
    var I = i ? i.width : w(n.width) - (r ? $ + R : 0) - j;
    var Z = i ? i.height : w(n.height) - (r ? E + T : 0) - N;
    var O = I + $ + j + R;
    var P = Z + E + N + T;
    var M = c({
      devicePixelContentBoxSize: A(Math.round(I * devicePixelRatio), Math.round(Z * devicePixelRatio), o),
      borderBoxSize: A(O, P, o),
      contentBoxSize: A(I, Z, o),
      contentRect: new u(f, s, I, Z)
    });
    v.set(e, M);
    return M;
  }
  function S(e, t, n) {
    var i = k(e, n);
    var o = i.borderBoxSize;
    var l = i.contentBoxSize;
    var a = i.devicePixelContentBoxSize;
    switch (t) {
      case r.DEVICE_PIXEL_CONTENT_BOX:
        return a;
      case r.BORDER_BOX:
        return o;
      default:
        return l;
    }
  }
  function C(e) {
    var t = k(e);
    this.target = e;
    this.contentRect = t.contentRect;
    this.borderBoxSize = c([t.borderBoxSize]);
    this.contentBoxSize = c([t.contentBoxSize]);
    this.devicePixelContentBoxSize = c([t.devicePixelContentBoxSize]);
  }
  function $(e) {
    if (h(e)) {
      return Infinity;
    }
    var t = 0;
    var n = e.parentNode;
    while (n) {
      t += 1;
      n = n.parentNode;
    }
    return t;
  }
  function E() {
    var e = Infinity;
    var t = [];
    l.forEach(function (n) {
      if (n.activeTargets.length !== 0) {
        var i = [];
        n.activeTargets.forEach(function (t) {
          var n = new C(t.target);
          var r = $(t.target);
          i.push(n);
          t.lastReportedSize = S(t.target, t.observedBox);
          if (r < e) {
            e = r;
          }
        });
        t.push(function () {
          n.callback.call(n.observer, i, n.observer);
        });
        n.activeTargets.splice(0, n.activeTargets.length);
      }
    });
    for (var n = 0; n < t.length; n++) {
      t[n]();
    }
    return e;
  }
  function R(e) {
    l.forEach(function (t) {
      t.activeTargets.splice(0, t.activeTargets.length);
      t.skippedTargets.splice(0, t.skippedTargets.length);
      t.observationTargets.forEach(function (n) {
        if (n.isActive()) {
          if ($(n.target) > e) {
            t.activeTargets.push(n);
          } else {
            t.skippedTargets.push(n);
          }
        }
      });
    });
  }
  function T() {
    var e = 0;
    for (R(0); l.some(function (e) {
      return e.activeTargets.length > 0;
    });) {
      R(e = E());
    }
    if (l.some(function (e) {
      return e.skippedTargets.length > 0;
    })) {
      s();
    }
    return e > 0;
  }
  var N = [];
  function j(e) {
    if (!o) {
      var t = 0;
      var n = document.createTextNode("");
      new MutationObserver(function () {
        return N.splice(0).forEach(function (e) {
          return e();
        });
      }).observe(n, {
        characterData: true
      });
      o = function () {
        n.textContent = `${t ? t-- : t++}`;
      };
    }
    N.push(e);
    o();
  }
  function I(e) {
    j(function () {
      requestAnimationFrame(e);
    });
  }
  var Z = 0;
  var O = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  };
  var P = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"];
  function M(e = 0) {
    return Date.now() + e;
  }
  var W = false;
  var F = new (function () {
    function e() {
      var e = this;
      this.stopped = true;
      this.listener = function () {
        return e.schedule();
      };
    }
    e.prototype.run = function (e) {
      var t = this;
      if (e === undefined) {
        e = 250;
      }
      if (!W) {
        W = true;
        var n = M(e);
        I(function () {
          var i = false;
          try {
            i = T();
          } finally {
            W = false;
            e = n - M();
            if (!Z) {
              return;
            }
            if (i) {
              t.run(1000);
            } else if (e > 0) {
              t.run(e);
            } else {
              t.start();
            }
          }
        });
      }
    };
    e.prototype.schedule = function () {
      this.stop();
      this.run();
    };
    e.prototype.observe = function () {
      var e = this;
      function t() {
        return e.observer && e.observer.observe(document.body, O);
      }
      if (document.body) {
        t();
      } else {
        g.addEventListener("DOMContentLoaded", t);
      }
    };
    e.prototype.start = function () {
      var e = this;
      if (this.stopped) {
        this.stopped = false;
        this.observer = new MutationObserver(this.listener);
        this.observe();
        P.forEach(function (t) {
          return g.addEventListener(t, e.listener, true);
        });
      }
    };
    e.prototype.stop = function () {
      var e = this;
      if (!this.stopped) {
        if (this.observer) {
          this.observer.disconnect();
        }
        P.forEach(function (t) {
          return g.removeEventListener(t, e.listener, true);
        });
        this.stopped = true;
      }
    };
    return e;
  }())();
  function L(e) {
    if (!Z && e > 0) {
      F.start();
    }
    if (!(Z += e)) {
      F.stop();
    }
  }
  var D = function () {
    function e(e, t) {
      this.target = e;
      this.observedBox = t || r.CONTENT_BOX;
      this.lastReportedSize = {
        inlineSize: 0,
        blockSize: 0
      };
    }
    e.prototype.isActive = function () {
      var e;
      var t = S(this.target, this.observedBox, true);
      if (!p(e = this.target) && !f(e) && getComputedStyle(e).display === "inline") {
        this.lastReportedSize = t;
      }
      return this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
    };
    return e;
  }();
  function z(e, t) {
    this.activeTargets = [];
    this.skippedTargets = [];
    this.observationTargets = [];
    this.observer = e;
    this.callback = t;
  }
  var B = new WeakMap();
  function X(e, t) {
    for (var n = 0; n < e.length; n += 1) {
      if (e[n].target === t) {
        return n;
      }
    }
    return -1;
  }
  var H = function () {
    function e() {}
    e.connect = function (e, t) {
      var n = new z(e, t);
      B.set(e, n);
    };
    e.observe = function (e, t, n) {
      var i = B.get(e);
      var r = i.observationTargets.length === 0;
      if (X(i.observationTargets, t) < 0) {
        if (r) {
          l.push(i);
        }
        i.observationTargets.push(new D(t, n && n.box));
        L(1);
        F.schedule();
      }
    };
    e.unobserve = function (e, t) {
      var n = B.get(e);
      var i = X(n.observationTargets, t);
      var r = n.observationTargets.length === 1;
      if (i >= 0) {
        if (r) {
          l.splice(l.indexOf(n), 1);
        }
        n.observationTargets.splice(i, 1);
        L(-1);
      }
    };
    e.disconnect = function (e) {
      var t = this;
      var n = B.get(e);
      n.observationTargets.slice().forEach(function (n) {
        return t.unobserve(e, n.target);
      });
      n.activeTargets.splice(0, n.activeTargets.length);
    };
    return e;
  }();
  var U = function () {
    function e(e) {
      if (arguments.length == 0) {
        throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
      }
      if (typeof e != "function") {
        throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
      }
      H.connect(this, e);
    }
    e.prototype.observe = function (e, t) {
      if (arguments.length == 0) {
        throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
      }
      if (!m(e)) {
        throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
      }
      H.observe(this, e, t);
    };
    e.prototype.unobserve = function (e) {
      if (arguments.length == 0) {
        throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
      }
      if (!m(e)) {
        throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
      }
      H.unobserve(this, e);
    };
    e.prototype.disconnect = function () {
      H.disconnect(this);
    };
    e.toString = function () {
      return "function ResizeObserver () { [polyfill code] }";
    };
    return e;
  }();
  require.d(exports, {
    ResizeObserver: function () {
      return U;
    }
  });
}