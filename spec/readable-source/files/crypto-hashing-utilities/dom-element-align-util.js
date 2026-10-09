// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E3' to 'alignElement'
// - Renamed export 'zy' to 'alignToEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 984082
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      n.push.apply(n, r);
    }
    return n;
  }
  function o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] ?? {};
      if (t % 2) {
        r(Object(n), true).forEach(function (t) {
          var r;
          var o;
          var i;
          r = e;
          o = t;
          i = n[t];
          if (o in r) {
            Object.defineProperty(r, o, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            r[o] = i;
          }
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        r(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
    return e;
  }
  function i(e) {
    return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  var u;
  var a;
  var c = {
    Webkit: "-webkit-",
    Moz: "-moz-",
    ms: "-ms-",
    O: "-o-"
  };
  function s() {
    if (u !== undefined) {
      return u;
    }
    u = "";
    var e = document.createElement("p").style;
    for (var t in c) {
      if (t + "Transform" in e) {
        u = t;
      }
    }
    return u;
  }
  function l() {
    if (s()) {
      return `${s()}TransitionProperty`;
    } else {
      return "transitionProperty";
    }
  }
  function f() {
    if (s()) {
      return `${s()}Transform`;
    } else {
      return "transform";
    }
  }
  function p(e, t) {
    var n = l();
    if (n) {
      e.style[n] = t;
      if (n !== "transitionProperty") {
        e.style.transitionProperty = t;
      }
    }
  }
  function d(e, t) {
    var n = f();
    if (n) {
      e.style[n] = t;
      if (n !== "transform") {
        e.style.transform = t;
      }
    }
  }
  var h = /matrix\((.*)\)/;
  var v = /matrix3d\((.*)\)/;
  var m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
  function g(e) {
    var t = e.style.display;
    e.style.display = "none";
    e.offsetHeight;
    e.style.display = t;
  }
  function y(e, t, n) {
    var r = n;
    if (i(t) === "object") {
      for (var o in t) {
        if (t.hasOwnProperty(o)) {
          y(e, o, t[o]);
        }
      }
      return;
    }
    if (r !== undefined) {
      if (typeof r == "number") {
        r = `${r}px`;
      }
      e.style[t] = r;
      return;
    }
    return a(e, t);
  }
  function w(e, t) {
    var n = e[`page${t ? "Y" : "X"}Offset`];
    var r = `scroll${t ? "Top" : "Left"}`;
    if (typeof n != "number") {
      var o = e.document;
      if (typeof (n = o.documentElement[r]) != "number") {
        n = o.body[r];
      }
    }
    return n;
  }
  function b(e) {
    var t;
    var n;
    var r;
    var o;
    var i;
    var u;
    i = (o = e.ownerDocument).body;
    u = o && o.documentElement;
    n = Math.floor((t = e.getBoundingClientRect()).left);
    r = Math.floor(t.top);
    var a = {
      left: n -= u.clientLeft || i.clientLeft || 0,
      top: r -= u.clientTop || i.clientTop || 0
    };
    var c = e.ownerDocument;
    var s = c.defaultView || c.parentWindow;
    a.left += w(s);
    a.top += w(s, true);
    return a;
  }
  function x(e) {
    return e != null && e == e.window;
  }
  function E(e) {
    if (x(e)) {
      return e.document;
    } else if (e.nodeType === 9) {
      return e;
    } else {
      return e.ownerDocument;
    }
  }
  var k = RegExp(`^(${m})(?!px)[a-z%]+\$`, "i");
  var Z = /^(top|right|bottom|left)$/;
  var C = "currentStyle";
  var T = "runtimeStyle";
  var P = "left";
  function M(e, t) {
    if (e === "left") {
      if (t.useCssRight) {
        return "right";
      } else {
        return e;
      }
    } else if (t.useCssBottom) {
      return "bottom";
    } else {
      return e;
    }
  }
  function O(e) {
    if (e === "left") {
      return "right";
    } else if (e === "right") {
      return "left";
    } else if (e === "top") {
      return "bottom";
    } else if (e === "bottom") {
      return "top";
    } else {
      return undefined;
    }
  }
  function S(e, t, n) {
    if (y(e, "position") === "static") {
      e.style.position = "relative";
    }
    var r = -999;
    var o = -999;
    var i = M("left", n);
    var u = M("top", n);
    var a = O(i);
    var c = O(u);
    if (i !== "left") {
      r = 999;
    }
    if (u !== "top") {
      o = 999;
    }
    var s = "";
    var f = b(e);
    if ("left" in t || "top" in t) {
      s = e.style.transitionProperty || e.style[l()] || "";
      p(e, "none");
    }
    if ("left" in t) {
      e.style[a] = "";
      e.style[i] = `${r}px`;
    }
    if ("top" in t) {
      e.style[c] = "";
      e.style[u] = `${o}px`;
    }
    g(e);
    var d = b(e);
    var h = {};
    for (var v in t) {
      if (t.hasOwnProperty(v)) {
        var m = M(v, n);
        var w = v === "left" ? r : o;
        var x = f[v] - d[v];
        if (m === v) {
          h[m] = w + x;
        } else {
          h[m] = w - x;
        }
      }
    }
    y(e, h);
    g(e);
    if ("left" in t || "top" in t) {
      p(e, s);
    }
    var E = {};
    for (var k in t) {
      if (t.hasOwnProperty(k)) {
        var Z = M(k, n);
        var C = t[k] - f[k];
        if (k === Z) {
          E[Z] = h[Z] + C;
        } else {
          E[Z] = h[Z] - C;
        }
      }
    }
    y(e, E);
  }
  function L(e, t) {
    for (var n = 0; n < e.length; n++) {
      t(e[n]);
    }
  }
  function D(e) {
    return a(e, "boxSizing") === "border-box";
  }
  if (typeof window != "undefined") {
    a = window.getComputedStyle ? function (e, t, n) {
      var r = n;
      var o = "";
      var i = E(e);
      if (r = r || i.defaultView.getComputedStyle(e, null)) {
        o = r.getPropertyValue(t) || r[t];
      }
      return o;
    } : function (e, t) {
      var n = e[C] && e[C][t];
      if (k.test(n) && !Z.test(t)) {
        var r = e.style;
        var o = r[P];
        var i = e[T][P];
        e[T][P] = e[C][P];
        r[P] = t === "fontSize" ? "1em" : n || 0;
        n = r.pixelLeft + "px";
        r[P] = o;
        e[T][P] = i;
      }
      if (n === "") {
        return "auto";
      } else {
        return n;
      }
    };
  }
  var R = ["margin", "border", "padding"];
  function N(e, t, n) {
    var r;
    var o;
    var i;
    var u = 0;
    for (o = 0; o < t.length; o++) {
      if (r = t[o]) {
        for (i = 0; i < n.length; i++) {
          var c = undefined;
          c = r === "border" ? `${r}${n[i]}Width` : r + n[i];
          u += parseFloat(a(e, c)) || 0;
        }
      }
    }
    return u;
  }
  var A = {
    getParent: function (e) {
      var t = e;
      do {
        t = t.nodeType === 11 && t.host ? t.host : t.parentNode;
      } while (t && t.nodeType !== 1 && t.nodeType !== 9);
      return t;
    }
  };
  function j(e, t, n) {
    var r = n;
    if (x(e)) {
      if (t === "width") {
        return A.viewportWidth(e);
      } else {
        return A.viewportHeight(e);
      }
    }
    if (e.nodeType === 9) {
      if (t === "width") {
        return A.docWidth(e);
      } else {
        return A.docHeight(e);
      }
    }
    var o = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
    var i = t === "width" ? Math.floor(e.getBoundingClientRect().width) : Math.floor(e.getBoundingClientRect().height);
    var u = D(e);
    var c = 0;
    if (i == null || i <= 0) {
      i = undefined;
      if ((c = a(e, t)) == null || Number(c) < 0) {
        c = e.style[t] || 0;
      }
      c = Math.floor(parseFloat(c)) || 0;
    }
    if (r === undefined) {
      r = u ? 1 : -1;
    }
    var s = i !== undefined || u;
    var l = i || c;
    if (r === -1) {
      if (s) {
        return l - N(e, ["border", "padding"], o);
      } else {
        return c;
      }
    } else if (s) {
      if (r === 1) {
        return l;
      } else {
        return l + (r === 2 ? -N(e, ["border"], o) : N(e, ["margin"], o));
      }
    } else {
      return c + N(e, R.slice(r), o);
    }
  }
  L(["Width", "Height"], function (e) {
    A[`doc${e}`] = function (t) {
      var n = t.document;
      return Math.max(n.documentElement[`scroll${e}`], n.body[`scroll${e}`], A[`viewport${e}`](n));
    };
    A[`viewport${e}`] = function (t) {
      var n = `client${e}`;
      var r = t.document;
      var o = r.body;
      var i = r.documentElement[n];
      return r.compatMode === "CSS1Compat" && i || o && o[n] || i;
    };
  });
  var _ = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  };
  function H() {
    var e;
    var t = arguments.length;
    var n = Array(t);
    var r = 0;
    for (; r < t; r++) {
      n[r] = arguments[r];
    }
    var o = n[0];
    if (o.offsetWidth !== 0) {
      e = j.apply(undefined, n);
    } else {
      (function (e, t, n) {
        var r;
        var o = {};
        var i = e.style;
        for (r in t) {
          if (t.hasOwnProperty(r)) {
            o[r] = i[r];
            i[r] = t[r];
          }
        }
        n.call(e);
        for (r in t) {
          if (t.hasOwnProperty(r)) {
            i[r] = o[r];
          }
        }
      })(o, _, function () {
        e = j.apply(undefined, n);
      });
    }
    return e;
  }
  function V(e, t) {
    for (var n in t) {
      if (t.hasOwnProperty(n)) {
        e[n] = t[n];
      }
    }
    return e;
  }
  L(["width", "height"], function (e) {
    var t = e.charAt(0).toUpperCase() + e.slice(1);
    A[`outer${t}`] = function (t, n) {
      return t && H(t, e, +!n);
    };
    var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
    A[e] = function (t, r) {
      var o = r;
      if (o !== undefined) {
        if (t) {
          if (D(t)) {
            o += N(t, ["padding", "border"], n);
          }
          return y(t, e, o);
        } else {
          return undefined;
        }
      } else {
        return t && H(t, e, -1);
      }
    };
  });
  var I = {
    getWindow: function (e) {
      if (e && e.document && e.setTimeout) {
        return e;
      }
      var t = e.ownerDocument || e;
      return t.defaultView || t.parentWindow;
    },
    getDocument: E,
    offset: function (e, t, n) {
      if (t === undefined) {
        return b(e);
      }
      (function (e, t, n) {
        if (n.ignoreShake) {
          var r;
          var o;
          var i;
          var u = b(e);
          var a = u.left.toFixed(0);
          var c = u.top.toFixed(0);
          var s = t.left.toFixed(0);
          var l = t.top.toFixed(0);
          if (a === s && c === l) {
            return;
          }
        }
        if (n.useCssRight || n.useCssBottom) {
          S(e, t, n);
        } else if (n.useCssTransform && f() in document.body.style) {
          r = b(e);
          i = {
            x: (o = function (e) {
              var t = window.getComputedStyle(e, null);
              var n = t.getPropertyValue("transform") || t.getPropertyValue(f());
              if (n && n !== "none") {
                var r = n.replace(/[^0-9\-.,]/g, "").split(",");
                return {
                  x: parseFloat(r[12] || r[4], 0),
                  y: parseFloat(r[13] || r[5], 0)
                };
              }
              return {
                x: 0,
                y: 0
              };
            }(e)).x,
            y: o.y
          };
          if ("left" in t) {
            i.x = o.x + t.left - r.left;
          }
          if ("top" in t) {
            i.y = o.y + t.top - r.top;
          }
          (function (e, t) {
            var n = window.getComputedStyle(e, null);
            var r = n.getPropertyValue("transform") || n.getPropertyValue(f());
            if (r && r !== "none") {
              var o;
              var i = r.match(h);
              if (i) {
                (o = (i = i[1]).split(",").map(function (e) {
                  return parseFloat(e, 10);
                }))[4] = t.x;
                o[5] = t.y;
                d(e, `matrix(${o.join(",")})`);
              } else {
                (o = r.match(v)[1].split(",").map(function (e) {
                  return parseFloat(e, 10);
                }))[12] = t.x;
                o[13] = t.y;
                d(e, `matrix3d(${o.join(",")})`);
              }
            } else {
              d(e, `translateX(${t.x}px) translateY(${t.y}px) translateZ(0)`);
            }
          })(e, i);
        } else {
          S(e, t, n);
        }
      })(e, t, n || {});
    },
    isWindow: x,
    each: L,
    css: y,
    clone: function (e) {
      var t;
      var n = {};
      for (t in e) {
        if (e.hasOwnProperty(t)) {
          n[t] = e[t];
        }
      }
      if (e.overflow) {
        for (t in e) {
          if (e.hasOwnProperty(t)) {
            n.overflow[t] = e.overflow[t];
          }
        }
      }
      return n;
    },
    mix: V,
    getWindowScrollLeft: function (e) {
      return w(e);
    },
    getWindowScrollTop: function (e) {
      return w(e, true);
    },
    merge: function () {
      var e = {};
      var t = 0;
      for (; t < arguments.length; t++) {
        I.mix(e, t < 0 || arguments.length <= t ? undefined : arguments[t]);
      }
      return e;
    },
    viewportWidth: 0,
    viewportHeight: 0
  };
  V(I, A);
  var W = I.getParent;
  function F(e) {
    if (I.isWindow(e) || e.nodeType === 9) {
      return null;
    }
    var t;
    var n = I.getDocument(e).body;
    var r = I.css(e, "position");
    if (r !== "fixed" && r !== "absolute") {
      if (e.nodeName.toLowerCase() === "html") {
        return null;
      } else {
        return W(e);
      }
    }
    for (t = W(e); t && t !== n && t.nodeType !== 9; t = W(t)) {
      if ((r = I.css(t, "position")) !== "static") {
        return t;
      }
    }
    return null;
  }
  var B = I.getParent;
  function z(e, t) {
    var n = {
      left: 0,
      right: Infinity,
      top: 0,
      bottom: Infinity
    };
    var r = F(e);
    var o = I.getDocument(e);
    var i = o.defaultView || o.parentWindow;
    var u = o.body;
    var a = o.documentElement;
    while (r) {
      if ((navigator.userAgent.indexOf("MSIE") === -1 || r.clientWidth !== 0) && r !== u && r !== a && I.css(r, "overflow") !== "visible") {
        var c = I.offset(r);
        c.left += r.clientLeft;
        c.top += r.clientTop;
        n.top = Math.max(n.top, c.top);
        n.right = Math.min(n.right, c.left + r.clientWidth);
        n.bottom = Math.min(n.bottom, c.top + r.clientHeight);
        n.left = Math.max(n.left, c.left);
      } else if (r === u || r === a) {
        break;
      }
      r = F(r);
    }
    var s = null;
    if (!I.isWindow(e) && e.nodeType !== 9) {
      s = e.style.position;
      if (I.css(e, "position") === "absolute") {
        e.style.position = "fixed";
      }
    }
    var l = I.getWindowScrollLeft(i);
    var f = I.getWindowScrollTop(i);
    var p = I.viewportWidth(i);
    var d = I.viewportHeight(i);
    var h = a.scrollWidth;
    var v = a.scrollHeight;
    var m = window.getComputedStyle(u);
    if (m.overflowX === "hidden") {
      h = i.innerWidth;
    }
    if (m.overflowY === "hidden") {
      v = i.innerHeight;
    }
    if (e.style) {
      e.style.position = s;
    }
    if (t || function (e) {
      if (I.isWindow(e) || e.nodeType === 9) {
        return false;
      }
      var t = I.getDocument(e);
      var n = t.body;
      var r = null;
      for (r = B(e); r && r !== n && r !== t; r = B(r)) {
        if (I.css(r, "position") === "fixed") {
          return true;
        }
      }
      return false;
    }(e)) {
      n.left = Math.max(n.left, l);
      n.top = Math.max(n.top, f);
      n.right = Math.min(n.right, l + p);
      n.bottom = Math.min(n.bottom, f + d);
    } else {
      var g = Math.max(h, l + p);
      n.right = Math.min(n.right, g);
      var y = Math.max(v, f + d);
      n.bottom = Math.min(n.bottom, y);
    }
    if (n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left) {
      return n;
    } else {
      return null;
    }
  }
  function Y(e) {
    if (I.isWindow(e) || e.nodeType === 9) {
      var t;
      var n;
      var r;
      var o = I.getWindow(e);
      t = {
        left: I.getWindowScrollLeft(o),
        top: I.getWindowScrollTop(o)
      };
      n = I.viewportWidth(o);
      r = I.viewportHeight(o);
    } else {
      t = I.offset(e);
      n = I.outerWidth(e);
      r = I.outerHeight(e);
    }
    t.width = n;
    t.height = r;
    return t;
  }
  function X(e, t) {
    var n = t.charAt(0);
    var r = t.charAt(1);
    var o = e.width;
    var i = e.height;
    var u = e.left;
    var a = e.top;
    if (n === "c") {
      a += i / 2;
    } else if (n === "b") {
      a += i;
    }
    if (r === "c") {
      u += o / 2;
    } else if (r === "r") {
      u += o;
    }
    return {
      left: u,
      top: a
    };
  }
  function U(e, t, n, r, o) {
    var i = X(t, n[1]);
    var u = X(e, n[0]);
    var a = [u.left - i.left, u.top - i.top];
    return {
      left: Math.round(e.left - a[0] + r[0] - o[0]),
      top: Math.round(e.top - a[1] + r[1] - o[1])
    };
  }
  function q(e, t, n) {
    return e.left < n.left || e.left + t.width > n.right;
  }
  function G(e, t, n) {
    return e.top < n.top || e.top + t.height > n.bottom;
  }
  function K(e, t, n) {
    var r = [];
    I.each(e, function (e) {
      r.push(e.replace(t, function (e) {
        return n[e];
      }));
    });
    return r;
  }
  function Q(e, t) {
    e[t] = -e[t];
    return e;
  }
  function $(e, t) {
    var n;
    return (/%$/.test(e) ? parseInt(e.substring(0, e.length - 1), 10) / 100 * t : parseInt(e, 10)) || 0;
  }
  function J(e, t) {
    e[0] = $(e[0], t.width);
    e[1] = $(e[1], t.height);
  }
  function ee(e, t, n, r) {
    var o = n.points;
    var i = n.offset || [0, 0];
    var u = n.targetOffset || [0, 0];
    var a = n.overflow;
    var c = n.source || e;
    i = [].concat(i);
    u = [].concat(u);
    var s = {};
    var l = 0;
    var f = z(c, !!(a = a || {}).alwaysByViewport);
    var p = Y(c);
    J(i, p);
    J(u, t);
    var d = U(p, t, o, i, u);
    var h = I.merge(p, d);
    if (f && (a.adjustX || a.adjustY) && r) {
      if (a.adjustX && q(d, p, f)) {
        var v;
        var m;
        var g;
        var y;
        var w = K(o, /[lr]/gi, {
          l: "r",
          r: "l"
        });
        var b = Q(i, 0);
        var x = Q(u, 0);
        if (!((y = U(p, t, w, b, x)).left > f.right) && !(y.left + p.width < f.left)) {
          l = 1;
          o = w;
          i = b;
          u = x;
        }
      }
      if (a.adjustY && G(d, p, f)) {
        var E;
        var k = K(o, /[tb]/gi, {
          t: "b",
          b: "t"
        });
        var Z = Q(i, 1);
        var C = Q(u, 1);
        if (!((E = U(p, t, k, Z, C)).top > f.bottom) && !(E.top + p.height < f.top)) {
          l = 1;
          o = k;
          i = Z;
          u = C;
        }
      }
      if (l) {
        d = U(p, t, o, i, u);
        I.mix(h, d);
      }
      var T = q(d, p, f);
      var P = G(d, p, f);
      if (T || P) {
        var M = o;
        if (T) {
          M = K(o, /[lr]/gi, {
            l: "r",
            r: "l"
          });
        }
        if (P) {
          M = K(o, /[tb]/gi, {
            t: "b",
            b: "t"
          });
        }
        o = M;
        i = n.offset || [0, 0];
        u = n.targetOffset || [0, 0];
      }
      s.adjustX = a.adjustX && T;
      s.adjustY = a.adjustY && P;
      if (s.adjustX || s.adjustY) {
        v = d;
        m = I.clone(v);
        g = {
          width: p.width,
          height: p.height
        };
        if (s.adjustX && m.left < f.left) {
          m.left = f.left;
        }
        if (s.resizeWidth && m.left >= f.left && m.left + g.width > f.right) {
          g.width -= m.left + g.width - f.right;
        }
        if (s.adjustX && m.left + g.width > f.right) {
          m.left = Math.max(f.right - g.width, f.left);
        }
        if (s.adjustY && m.top < f.top) {
          m.top = f.top;
        }
        if (s.resizeHeight && m.top >= f.top && m.top + g.height > f.bottom) {
          g.height -= m.top + g.height - f.bottom;
        }
        if (s.adjustY && m.top + g.height > f.bottom) {
          m.top = Math.max(f.bottom - g.height, f.top);
        }
        h = I.mix(m, g);
      }
    }
    if (h.width !== p.width) {
      I.css(c, "width", I.width(c) + h.width - p.width);
    }
    if (h.height !== p.height) {
      I.css(c, "height", I.height(c) + h.height - p.height);
    }
    I.offset(c, {
      left: h.left,
      top: h.top
    }, {
      useCssRight: n.useCssRight,
      useCssBottom: n.useCssBottom,
      useCssTransform: n.useCssTransform,
      ignoreShake: n.ignoreShake
    });
    return {
      points: o,
      offset: i,
      targetOffset: u,
      overflow: s
    };
  }
  function et(e, t, n) {
    var r;
    var o;
    var i = n.target || t;
    var u = Y(i);
    r = z(i, n.overflow && n.overflow.alwaysByViewport);
    o = Y(i);
    var a = !!r && !(o.left + o.width <= r.left) && !(o.top + o.height <= r.top) && !(o.left >= r.right) && !(o.top >= r.bottom);
    return ee(e, u, n, a);
  }
  function en(e, t, n) {
    var r;
    var i;
    var u = I.getDocument(e);
    var a = u.defaultView || u.parentWindow;
    var c = I.getWindowScrollLeft(a);
    var s = I.getWindowScrollTop(a);
    var l = I.viewportWidth(a);
    var f = I.viewportHeight(a);
    var p = {
      left: r = "pageX" in t ? t.pageX : c + t.clientX,
      top: i = "pageY" in t ? t.pageY : s + t.clientY,
      width: 0,
      height: 0
    };
    var d = [n.points[0], "cc"];
    return ee(e, p, o(o({}, n), {}, {
      points: d
    }), r >= 0 && r <= c + l && i >= 0 && i <= s + f);
  }
  et.__getOffsetParent = F;
  et.__getVisibleRectForElement = z;
  require.d(exports, {
    alignElement: function () {
      return et;
    },
    alignToEvent: function () {
      return en;
    }
  });
}