// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Panzoom'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: hsir-render.1da2d47c.js
         * chunkId: 27677
         * moduleId: 615113
         */
module.exports = function (module, exports, require) {
  var r;
  function o() {
    return (o = Object.assign || function (t) {
      var e;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var o in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  if (typeof SuppressedError == "function") {
    SuppressedError;
  }
  if (typeof window != "undefined") {
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }
    if (typeof window.CustomEvent != "function") {
      window.CustomEvent = function (t, e) {
        e = e || {
          bubbles: false,
          cancelable: false,
          detail: null
        };
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail);
        return n;
      };
    }
  }
  var i = typeof document != "undefined" && !!document.documentMode;
  var a = ["webkit", "moz", "ms"];
  var l = {};
  function s(t) {
    if (l[t]) {
      return l[t];
    }
    var e = r ||= document.createElement("div").style;
    if (t in e) {
      return l[t] = t;
    }
    var n = t[0].toUpperCase() + t.slice(1);
    var o = a.length;
    while (o--) {
      var i = `${a[o]}${n}`;
      if (i in e) {
        return l[t] = i;
      }
    }
  }
  function u(t, e) {
    return parseFloat(e[s(t)]) || 0;
  }
  function c(t, e, n = window.getComputedStyle(t)) {
    var r = e === "border" ? "Width" : "";
    return {
      left: u(`${e}Left${r}`, n),
      right: u(`${e}Right${r}`, n),
      top: u(`${e}Top${r}`, n),
      bottom: u(`${e}Bottom${r}`, n)
    };
  }
  function h(t, e, n) {
    t.style[s(e)] = n;
  }
  function d(t) {
    var e = t.parentNode;
    var n = window.getComputedStyle(t);
    var r = window.getComputedStyle(e);
    var o = t.getBoundingClientRect();
    var i = e.getBoundingClientRect();
    return {
      elem: {
        style: n,
        width: o.width,
        height: o.height,
        top: o.top,
        bottom: o.bottom,
        left: o.left,
        right: o.right,
        margin: c(t, "margin", n),
        border: c(t, "border", n)
      },
      parent: {
        style: r,
        width: i.width,
        height: i.height,
        top: i.top,
        bottom: i.bottom,
        left: i.left,
        right: i.right,
        padding: c(e, "padding", r),
        border: c(e, "border", r)
      }
    };
  }
  var f = {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup mouseleave"
  };
  function p(t, e, n, r) {
    f[t].split(" ").forEach(function (t) {
      e.addEventListener(t, n, r);
    });
  }
  function m(t, e, n) {
    f[t].split(" ").forEach(function (t) {
      e.removeEventListener(t, n);
    });
  }
  function g(t, e) {
    for (var n = t.length; n--;) {
      if (t[n].pointerId === e.pointerId) {
        return n;
      }
    }
    return -1;
  }
  function v(t, e) {
    var n;
    if (e.touches) {
      n = 0;
      var r = 0;
      var o = e.touches;
      for (; r < o.length; r++) {
        var i = o[r];
        i.pointerId = n++;
        v(t, i);
      }
      return;
    }
    if ((n = g(t, e)) > -1) {
      t.splice(n, 1);
    }
    t.push(e);
  }
  function x(t) {
    var e;
    var n = (t = t.slice(0)).pop();
    while (e = t.pop()) {
      n = {
        clientX: (e.clientX - n.clientX) / 2 + n.clientX,
        clientY: (e.clientY - n.clientY) / 2 + n.clientY
      };
    }
    return n;
  }
  function w(t) {
    if (t.length < 2) {
      return 0;
    }
    var e = t[0];
    var n = t[1];
    return Math.sqrt(Math.pow(Math.abs(n.clientX - e.clientX), 2) + Math.pow(Math.abs(n.clientY - e.clientY), 2));
  }
  if (typeof window != "undefined") {
    if (typeof window.PointerEvent == "function") {
      f = {
        down: "pointerdown",
        move: "pointermove",
        up: "pointerup pointerleave pointercancel"
      };
    } else if (typeof window.TouchEvent == "function") {
      f = {
        down: "touchstart",
        move: "touchmove",
        up: "touchend touchcancel"
      };
    }
  }
  var b = /^http:[\w\.\/]+svg$/;
  var $ = {
    animate: false,
    canvas: false,
    cursor: "move",
    disablePan: false,
    disableZoom: false,
    disableXAxis: false,
    disableYAxis: false,
    duration: 200,
    easing: "ease-in-out",
    exclude: [],
    excludeClass: "panzoom-exclude",
    handleStartEvent: function (t) {
      t.preventDefault();
      t.stopPropagation();
    },
    maxScale: 4,
    minScale: 0.125,
    overflow: "hidden",
    panOnlyWhenZoomed: false,
    pinchAndPan: false,
    relative: false,
    setTransform: function (t, e, n) {
      var r = e.x;
      var o = e.y;
      var a = e.scale;
      var l = e.isSVG;
      h(t, "transform", `scale(${a}) translate(${r}px, ${o}px)`);
      if (l && i) {
        var s = window.getComputedStyle(t).getPropertyValue("transform");
        t.setAttribute("transform", s);
      }
    },
    startX: 0,
    startY: 0,
    startScale: 1,
    step: 0.3,
    touchAction: "none"
  };
  function y(t, e) {
    if (!t) {
      throw Error("Panzoom requires an element as an argument");
    }
    if (t.nodeType !== 1) {
      throw Error("Panzoom requires an element with a nodeType of 1");
    }
    if (!function (t) {
      for (var e = t; e && e.parentNode;) {
        if (e.parentNode === document) {
          return true;
        }
        e = e.parentNode instanceof ShadowRoot ? e.parentNode.host : e.parentNode;
      }
      return false;
    }(t)) {
      throw Error("Panzoom should be called on elements that have been attached to the DOM");
    }
    e = o(o({}, $), e);
    var n;
    var r;
    var i;
    var a;
    var l;
    var u;
    var c = b.test(t.namespaceURI) && t.nodeName.toLowerCase() !== "svg";
    var y = t.parentNode;
    y.style.overflow = e.overflow;
    y.style.userSelect = "none";
    y.style.touchAction = e.touchAction;
    (e.canvas ? y : t).style.cursor = e.cursor;
    t.style.userSelect = "none";
    t.style.touchAction = e.touchAction;
    h(t, "transformOrigin", typeof e.origin == "string" ? e.origin : c ? "0 0" : "50% 50%");
    var M = 0;
    var _ = 0;
    var E = 1;
    var S = false;
    function k(e, n, r) {
      if (!r.silent) {
        var o = new CustomEvent(e, {
          detail: n
        });
        t.dispatchEvent(o);
      }
    }
    function N(e, n, r) {
      var o = {
        x: M,
        y: _,
        scale: E,
        isSVG: c,
        originalEvent: r
      };
      requestAnimationFrame(function () {
        if (typeof n.animate == "boolean") {
          if (n.animate) {
            var r;
            r = s("transform");
            h(t, "transition", `${r} ${n.duration}ms ${n.easing}`);
          } else {
            h(t, "transition", "none");
          }
        }
        n.setTransform(t, o, n);
        k(e, o, n);
        k("panzoomchange", o, n);
      });
      return o;
    }
    function L(n, r, i, a) {
      var l = o(o({}, e), a);
      var s = {
        x: M,
        y: _,
        opts: l
      };
      if (!l.force && (l.disablePan || l.panOnlyWhenZoomed && E === l.startScale)) {
        return s;
      }
      n = parseFloat(n);
      r = parseFloat(r);
      if (!l.disableXAxis) {
        s.x = (l.relative ? M : 0) + n;
      }
      if (!l.disableYAxis) {
        s.y = (l.relative ? _ : 0) + r;
      }
      if (l.contain) {
        var u = d(t);
        var c = u.elem.width / E;
        var h = u.elem.height / E;
        var f = c * i;
        var p = h * i;
        var m = (f - c) / 2;
        var g = (p - h) / 2;
        if (l.contain === "inside") {
          var v = (-u.elem.margin.left - u.parent.padding.left + m) / i;
          var x = (u.parent.width - f - u.parent.padding.left - u.elem.margin.left - u.parent.border.left - u.parent.border.right + m) / i;
          s.x = Math.max(Math.min(s.x, x), v);
          var w = (-u.elem.margin.top - u.parent.padding.top + g) / i;
          var b = (u.parent.height - p - u.parent.padding.top - u.elem.margin.top - u.parent.border.top - u.parent.border.bottom + g) / i;
          s.y = Math.max(Math.min(s.y, b), w);
        } else if (l.contain === "outside") {
          var v = (-(f - u.parent.width) - u.parent.padding.left - u.parent.border.left - u.parent.border.right + m) / i;
          var x = (m - u.parent.padding.left) / i;
          s.x = Math.max(Math.min(s.x, x), v);
          var w = (-(p - u.parent.height) - u.parent.padding.top - u.parent.border.top - u.parent.border.bottom + g) / i;
          var b = (g - u.parent.padding.top) / i;
          s.y = Math.max(Math.min(s.y, b), w);
        }
      }
      if (l.roundPixels) {
        s.x = Math.round(s.x);
        s.y = Math.round(s.y);
      }
      return s;
    }
    function P(n, r) {
      var i = o(o({}, e), r);
      var a = {
        scale: E,
        opts: i
      };
      if (!i.force && i.disableZoom) {
        return a;
      }
      var l = e.minScale;
      var s = e.maxScale;
      if (i.contain) {
        var u = d(t);
        var c = u.elem.width / E;
        var h = u.elem.height / E;
        if (c > 1 && h > 1) {
          var f = u.parent.width - u.parent.border.left - u.parent.border.right;
          var p = u.parent.height - u.parent.border.top - u.parent.border.bottom;
          var m = f / c;
          var g = p / h;
          if (e.contain === "inside") {
            s = Math.min(s, m, g);
          } else if (e.contain === "outside") {
            l = Math.max(l, m, g);
          }
        }
      }
      a.scale = Math.min(Math.max(n, l), s);
      return a;
    }
    function A(t, e, n, r) {
      var o = L(t, e, E, n);
      if (M !== o.x || _ !== o.y) {
        M = o.x;
        _ = o.y;
        return N("panzoompan", o.opts, r);
      } else {
        return {
          x: M,
          y: _,
          scale: E,
          isSVG: c,
          originalEvent: r
        };
      }
    }
    function C(t, e, n) {
      var r = P(t, e);
      var o = r.opts;
      if (o.force || !o.disableZoom) {
        t = r.scale;
        var i = M;
        var a = _;
        if (o.focal) {
          var l = o.focal;
          i = (l.x / t - l.x / E + M * t) / t;
          a = (l.y / t - l.y / E + _ * t) / t;
        }
        var s = L(i, a, t, {
          relative: false,
          force: true
        });
        M = s.x;
        _ = s.y;
        E = t;
        return N("panzoomzoom", o, n);
      }
    }
    function R(t, n) {
      var r = o(o(o({}, e), {
        animate: true
      }), n);
      return C(E * Math.exp((t ? 1 : -1) * r.step), r);
    }
    function F(e, n, r, i) {
      var a = d(t);
      var l = {
        width: a.parent.width - a.parent.padding.left - a.parent.padding.right - a.parent.border.left - a.parent.border.right,
        height: a.parent.height - a.parent.padding.top - a.parent.padding.bottom - a.parent.border.top - a.parent.border.bottom
      };
      var s = n.clientX - a.parent.left - a.parent.padding.left - a.parent.border.left - a.elem.margin.left;
      var u = n.clientY - a.parent.top - a.parent.padding.top - a.parent.border.top - a.elem.margin.top;
      if (!c) {
        s -= a.elem.width / E / 2;
        u -= a.elem.height / E / 2;
      }
      var h = {
        x: s / l.width * (l.width * e),
        y: u / l.height * (l.height * e)
      };
      return C(e, o(o({}, r), {
        animate: false,
        focal: h
      }), i);
    }
    C(e.startScale, {
      animate: false,
      force: true
    });
    setTimeout(function () {
      A(e.startX, e.startY, {
        animate: false,
        force: true
      });
    });
    var j = [];
    function z(t) {
      if (!function (t, e) {
        var n;
        var r;
        var o = t;
        for (; o != null; o = o.parentNode) {
          n = o;
          r = e.excludeClass;
          if (n.nodeType === 1 && ` ${(n.getAttribute("class") || "").trim()} `.indexOf(` ${r} `) > -1 || e.exclude.indexOf(o) > -1) {
            return true;
          }
        }
        return false;
      }(t.target, e)) {
        v(j, t);
        S = true;
        e.handleStartEvent(t);
        n = M;
        r = _;
        k("panzoomstart", {
          x: M,
          y: _,
          scale: E,
          isSVG: c,
          originalEvent: t
        }, e);
        var o = x(j);
        i = o.clientX;
        a = o.clientY;
        l = E;
        u = w(j);
      }
    }
    function W(t) {
      if (S && n !== undefined && r !== undefined && i !== undefined && a !== undefined) {
        v(j, t);
        var o = x(j);
        var s = j.length > 1;
        var c = E;
        if (s) {
          if (u === 0) {
            u = w(j);
          }
          F(c = P((w(j) - u) * e.step / 80 + l).scale, o, {
            animate: false
          }, t);
        }
        if (!s || e.pinchAndPan) {
          A(n + (o.clientX - i) / c, r + (o.clientY - a) / c, {
            animate: false
          }, t);
        }
      }
    }
    function O(t) {
      if (j.length === 1) {
        k("panzoomend", {
          x: M,
          y: _,
          scale: E,
          isSVG: c,
          originalEvent: t
        }, e);
      }
      (function (t, e) {
        if (e.touches) {
          while (t.length) {
            t.pop();
          }
          return;
        }
        var n = g(t, e);
        if (n > -1) {
          t.splice(n, 1);
        }
      })(j, t);
      if (S) {
        S = false;
        n = r = i = a = undefined;
      }
    }
    var H = false;
    function B() {
      if (!H) {
        H = true;
        p("down", e.canvas ? y : t, z);
        p("move", document, W, {
          passive: true
        });
        p("up", document, O, {
          passive: true
        });
      }
    }
    if (!e.noBind) {
      B();
    }
    return {
      bind: B,
      destroy: function () {
        H = false;
        m("down", e.canvas ? y : t, z);
        m("move", document, W);
        m("up", document, O);
      },
      eventNames: f,
      getPan: function () {
        return {
          x: M,
          y: _
        };
      },
      getScale: function () {
        return E;
      },
      getOptions: function () {
        return function (t) {
          var e = {};
          for (var n in t) {
            if (t.hasOwnProperty(n)) {
              e[n] = t[n];
            }
          }
          return e;
        }(e);
      },
      handleDown: z,
      handleMove: W,
      handleUp: O,
      pan: A,
      reset: function (t) {
        var n = o(o(o({}, e), {
          animate: true,
          force: true
        }), t);
        E = P(n.startScale, n).scale;
        var r = L(n.startX, n.startY, E, n);
        M = r.x;
        _ = r.y;
        return N("panzoomreset", n);
      },
      resetStyle: function () {
        y.style.overflow = "";
        y.style.userSelect = "";
        y.style.touchAction = "";
        y.style.cursor = "";
        t.style.cursor = "";
        t.style.userSelect = "";
        t.style.touchAction = "";
        h(t, "transformOrigin", "");
      },
      setOptions: function (n = {}) {
        for (var r in n) {
          if (n.hasOwnProperty(r)) {
            e[r] = n[r];
          }
        }
        if (n.hasOwnProperty("cursor") || n.hasOwnProperty("canvas")) {
          y.style.cursor = t.style.cursor = "";
          (e.canvas ? y : t).style.cursor = e.cursor;
        }
        if (n.hasOwnProperty("overflow")) {
          y.style.overflow = n.overflow;
        }
        if (n.hasOwnProperty("touchAction")) {
          y.style.touchAction = n.touchAction;
          t.style.touchAction = n.touchAction;
        }
      },
      setStyle: function (e, n) {
        return h(t, e, n);
      },
      zoom: C,
      zoomIn: function (t) {
        return R(true, t);
      },
      zoomOut: function (t) {
        return R(false, t);
      },
      zoomToPoint: F,
      zoomWithWheel: function (t, n) {
        t.preventDefault();
        var r = o(o(o({}, e), n), {
          animate: false
        });
        var i = t.deltaY === 0 && t.deltaX ? t.deltaX : t.deltaY;
        return F(P(E * Math.exp((i < 0 ? 1 : -1) * r.step / 3), r).scale, t, r, t);
      }
    };
  }
  y.defaultOptions = $;
  require.d(exports, {
    Panzoom: function () {
      return y;
    }
  });
}