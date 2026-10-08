// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cp' to 'hideMiddleware'
// - Renamed export 'Jv' to 'convertRectToViewport'
// - Renamed export 'Me' to 'observePosition'
// - Renamed export 'RR' to 'flipMiddleware'
// - Renamed export 'cv' to 'offsetMiddleware'
// - Renamed export 'dp' to 'sizeMiddleware'
// - Renamed export 'dr' to 'innerMiddleware'
// - Renamed export 'oo' to 'computePosition'
// - Renamed export 'uY' to 'shiftMiddleware'
// - Renamed export 'x7' to 'arrowMiddleware'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 541179
         */
module.exports = function (module, exports, require) {
  var floatingUiPositionUtils = require("floating-ui-position-utils") /*id: 857700*/;
  var floatingUiPositionMiddleware = require("floating-ui-position-middleware") /*id: 491393*/;
  var domLayoutUtils = require("dom-layout-utils") /*id: 229971*/;
  function a(e) {
    let t = domLayoutUtils.getComputedStyle(e);
    let n = parseFloat(t.width) || 0;
    let i = parseFloat(t.height) || 0;
    let a = domLayoutUtils.isHTMLElement(e);
    let s = a ? e.offsetWidth : n;
    let u = a ? e.offsetHeight : i;
    let c = floatingUiPositionUtils.round(n) !== s || floatingUiPositionUtils.round(i) !== u;
    if (c) {
      n = s;
      i = u;
    }
    return {
      width: n,
      height: i,
      $: c
    };
  }
  function s(e) {
    if (domLayoutUtils.isElement(e)) {
      return e;
    } else {
      return e.contextElement;
    }
  }
  function u(e) {
    let t = s(e);
    if (!domLayoutUtils.isHTMLElement(t)) {
      return floatingUiPositionUtils.getExpandableObject(1);
    }
    let n = t.getBoundingClientRect();
    let {
      width: i,
      height: u,
      $: c
    } = a(t);
    let l = (c ? floatingUiPositionUtils.round(n.width) : n.width) / i;
    let f = (c ? floatingUiPositionUtils.round(n.height) : n.height) / u;
    if (!l || !Number.isFinite(l)) {
      l = 1;
    }
    if (!f || !Number.isFinite(f)) {
      f = 1;
    }
    return {
      x: l,
      y: f
    };
  }
  let c = floatingUiPositionUtils.getExpandableObject(0);
  function l(e) {
    let t = domLayoutUtils.getWindow(e);
    if (domLayoutUtils.supportsBackdrop() && t.visualViewport) {
      return {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
      };
    } else {
      return c;
    }
  }
  function f(e, t, n, i) {
    var a;
    if (t === undefined) {
      t = false;
    }
    if (n === undefined) {
      n = false;
    }
    let c = e.getBoundingClientRect();
    let f = s(e);
    let h = floatingUiPositionUtils.getExpandableObject(1);
    if (t) {
      if (i) {
        if (domLayoutUtils.isElement(i)) {
          h = u(i);
        }
      } else {
        h = u(e);
      }
    }
    let d = ((a = n) === undefined && (a = false), i && (!a || i === domLayoutUtils.getWindow(f)) && a) ? l(f) : floatingUiPositionUtils.getExpandableObject(0);
    let p = (c.left + d.x) / h.x;
    let g = (c.top + d.y) / h.y;
    let v = c.width / h.x;
    let m = c.height / h.y;
    if (f) {
      let e = domLayoutUtils.getWindow(f);
      let t = i && domLayoutUtils.isElement(i) ? domLayoutUtils.getWindow(i) : i;
      let n = e;
      let r = domLayoutUtils.getFrameElement(n);
      while (r && i && t !== n) {
        let e = u(r);
        let t = r.getBoundingClientRect();
        let i = domLayoutUtils.getComputedStyle(r);
        let a = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x;
        let s = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
        p *= e.x;
        g *= e.y;
        v *= e.x;
        m *= e.y;
        p += a;
        g += s;
        n = domLayoutUtils.getWindow(r);
        r = domLayoutUtils.getFrameElement(n);
      }
    }
    return floatingUiPositionUtils.getRectFromObject({
      width: v,
      height: m,
      x: p,
      y: g
    });
  }
  function h(e, t) {
    let n = domLayoutUtils.getScrollPos(e).scrollLeft;
    if (t) {
      return t.left + n;
    } else {
      return f(domLayoutUtils.getDocumentElement(e)).left + n;
    }
  }
  function d(e, t, n = false) {
    let r = e.getBoundingClientRect();
    return {
      x: r.left + t.scrollLeft - (n ? 0 : h(e, r)),
      y: r.top + t.scrollTop
    };
  }
  function p(e, t, n) {
    let i;
    if (t === "viewport") {
      i = function (e, t) {
        let n = domLayoutUtils.getWindow(e);
        let r = domLayoutUtils.getDocumentElement(e);
        let i = n.visualViewport;
        let a = r.clientWidth;
        let s = r.clientHeight;
        let u = 0;
        let c = 0;
        if (i) {
          a = i.width;
          s = i.height;
          let e = domLayoutUtils.supportsBackdrop();
          if (!e || e && t === "fixed") {
            u = i.offsetLeft;
            c = i.offsetTop;
          }
        }
        return {
          width: a,
          height: s,
          x: u,
          y: c
        };
      }(e, n);
    } else if (t === "document") {
      i = function (e) {
        let t = domLayoutUtils.getDocumentElement(e);
        let n = domLayoutUtils.getScrollPos(e);
        let i = e.ownerDocument.body;
        let a = floatingUiPositionUtils.max(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth);
        let s = floatingUiPositionUtils.max(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
        let u = -n.scrollLeft + h(e);
        let c = -n.scrollTop;
        if (domLayoutUtils.getComputedStyle(i).direction === "rtl") {
          u += floatingUiPositionUtils.max(t.clientWidth, i.clientWidth) - a;
        }
        return {
          width: a,
          height: s,
          x: u,
          y: c
        };
      }(domLayoutUtils.getDocumentElement(e));
    } else if (domLayoutUtils.isElement(t)) {
      i = function (e, t) {
        let n = f(e, true, t === "fixed");
        let i = n.top + e.clientTop;
        let a = n.left + e.clientLeft;
        let s = domLayoutUtils.isHTMLElement(e) ? u(e) : floatingUiPositionUtils.getExpandableObject(1);
        let c = e.clientWidth * s.x;
        let l = e.clientHeight * s.y;
        return {
          width: c,
          height: l,
          x: a * s.x,
          y: i * s.y
        };
      }(t, n);
    } else {
      let n = l(e);
      i = {
        x: t.x - n.x,
        y: t.y - n.y,
        width: t.width,
        height: t.height
      };
    }
    return floatingUiPositionUtils.getRectFromObject(i);
  }
  function g(e) {
    return domLayoutUtils.getComputedStyle(e).position === "static";
  }
  function v(e, t) {
    if (!domLayoutUtils.isHTMLElement(e) || domLayoutUtils.getComputedStyle(e).position === "fixed") {
      return null;
    }
    if (t) {
      return t(e);
    }
    let n = e.offsetParent;
    if (domLayoutUtils.getDocumentElement(e) === n) {
      n = n.ownerDocument.body;
    }
    return n;
  }
  function m(e, t) {
    let n = domLayoutUtils.getWindow(e);
    if (domLayoutUtils.isPopoverOpen(e)) {
      return n;
    }
    if (!domLayoutUtils.isHTMLElement(e)) {
      let t = domLayoutUtils.getParentNode(e);
      while (t && !domLayoutUtils.isDocumentElement(t)) {
        if (domLayoutUtils.isElement(t) && !g(t)) {
          return t;
        }
        t = domLayoutUtils.getParentNode(t);
      }
      return n;
    }
    let r = v(e, t);
    while (r && domLayoutUtils.isTableElement(r) && g(r)) {
      r = v(r, t);
    }
    if (r && domLayoutUtils.isDocumentElement(r) && g(r) && !domLayoutUtils.hasLayoutEffects(r)) {
      return n;
    } else {
      return r || domLayoutUtils.getContainingBlock(e) || n;
    }
  }
  let y = async function (e) {
    let t = this.getOffsetParent || m;
    let n = this.getDimensions;
    let i = await n(e.floating);
    return {
      reference: function (e, t, n) {
        let i = domLayoutUtils.isHTMLElement(t);
        let a = domLayoutUtils.getDocumentElement(t);
        let s = n === "fixed";
        let u = f(e, true, s, t);
        let c = {
          scrollLeft: 0,
          scrollTop: 0
        };
        let l = floatingUiPositionUtils.getExpandableObject(0);
        if (i || !i && !s) {
          if (domLayoutUtils.getNodeName(t) !== "body" || domLayoutUtils.isScrollable(a)) {
            c = domLayoutUtils.getScrollPos(t);
          }
          if (i) {
            let e = f(t, true, s, t);
            l.x = e.x + t.clientLeft;
            l.y = e.y + t.clientTop;
          } else if (a) {
            l.x = h(a);
          }
        }
        let p = !a || i || s ? floatingUiPositionUtils.getExpandableObject(0) : d(a, c);
        return {
          x: u.left + c.scrollLeft - l.x - p.x,
          y: u.top + c.scrollTop - l.y - p.y,
          width: u.width,
          height: u.height
        };
      }(e.reference, await t(e.floating), e.strategy),
      floating: {
        x: 0,
        y: 0,
        width: i.width,
        height: i.height
      }
    };
  };
  let b = {
    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
      let {
        elements: t,
        rect: n,
        offsetParent: i,
        strategy: a
      } = e;
      let s = a === "fixed";
      let c = domLayoutUtils.getDocumentElement(i);
      let l = !!t && domLayoutUtils.isPopoverOpen(t.floating);
      if (i === c || l && s) {
        return n;
      }
      let h = {
        scrollLeft: 0,
        scrollTop: 0
      };
      let p = floatingUiPositionUtils.getExpandableObject(1);
      let g = floatingUiPositionUtils.getExpandableObject(0);
      let v = domLayoutUtils.isHTMLElement(i);
      if ((v || !v && !s) && ((domLayoutUtils.getNodeName(i) !== "body" || domLayoutUtils.isScrollable(c)) && (h = domLayoutUtils.getScrollPos(i)), domLayoutUtils.isHTMLElement(i))) {
        let e = f(i);
        p = u(i);
        g.x = e.x + i.clientLeft;
        g.y = e.y + i.clientTop;
      }
      let m = !c || v || s ? floatingUiPositionUtils.getExpandableObject(0) : d(c, h, true);
      return {
        width: n.width * p.x,
        height: n.height * p.y,
        x: n.x * p.x - h.scrollLeft * p.x + g.x + m.x,
        y: n.y * p.y - h.scrollTop * p.y + g.y + m.y
      };
    },
    getDocumentElement: domLayoutUtils.getDocumentElement,
    getClippingRect: function (e) {
      let {
        element: t,
        boundary: n,
        rootBoundary: i,
        strategy: a
      } = e;
      let s = [...(n === "clippingAncestors" ? domLayoutUtils.isPopoverOpen(t) ? [] : function (e, t) {
        let n = t.get(e);
        if (n) {
          return n;
        }
        let r = domLayoutUtils.getScrollParents(e, [], false).filter(e => domLayoutUtils.isElement(e) && domLayoutUtils.getNodeName(e) !== "body");
        let i = null;
        let a = domLayoutUtils.getComputedStyle(e).position === "fixed";
        let s = a ? domLayoutUtils.getParentNode(e) : e;
        while (domLayoutUtils.isElement(s) && !domLayoutUtils.isDocumentElement(s)) {
          let t = domLayoutUtils.getComputedStyle(s);
          let n = domLayoutUtils.hasLayoutEffects(s);
          if (!n && t.position === "fixed") {
            i = null;
          }
          if (a ? !n && !i : !n && t.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || domLayoutUtils.isScrollable(s) && !n && function e(t, n) {
            let r = domLayoutUtils.getParentNode(t);
            return r !== n && !!domLayoutUtils.isElement(r) && !domLayoutUtils.isDocumentElement(r) && (domLayoutUtils.getComputedStyle(r).position === "fixed" || e(r, n));
          }(e, s)) {
            r = r.filter(e => e !== s);
          } else {
            i = t;
          }
          s = domLayoutUtils.getParentNode(s);
        }
        t.set(e, r);
        return r;
      }(t, this._c) : [].concat(n)), i];
      let u = s[0];
      let c = s.reduce((e, n) => {
        let i = p(t, n, a);
        e.top = floatingUiPositionUtils.max(i.top, e.top);
        e.right = floatingUiPositionUtils.min(i.right, e.right);
        e.bottom = floatingUiPositionUtils.min(i.bottom, e.bottom);
        e.left = floatingUiPositionUtils.max(i.left, e.left);
        return e;
      }, p(t, u, a));
      return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
      };
    },
    getOffsetParent: m,
    getElementRects: y,
    getClientRects: function (e) {
      return Array.from(e.getClientRects());
    },
    getDimensions: function (e) {
      let {
        width: t,
        height: n
      } = a(e);
      return {
        width: t,
        height: n
      };
    },
    getScale: u,
    isElement: domLayoutUtils.isElement,
    isRTL: function (e) {
      return domLayoutUtils.getComputedStyle(e).direction === "rtl";
    }
  };
  function _(e, t, n, i) {
    let a;
    if (i === undefined) {
      i = {};
    }
    let {
      ancestorScroll: u = true,
      ancestorResize: c = true,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: d = false
    } = i;
    let p = s(e);
    let g = u || c ? [...(p ? domLayoutUtils.getScrollParents(p) : []), ...domLayoutUtils.getScrollParents(t)] : [];
    g.forEach(e => {
      if (u) {
        e.addEventListener("scroll", n, {
          passive: true
        });
      }
      if (c) {
        e.addEventListener("resize", n);
      }
    });
    let v = p && h ? function (e, t) {
      let n;
      let i = null;
      let a = domLayoutUtils.getDocumentElement(e);
      function s() {
        var e;
        clearTimeout(n);
        if ((e = i) != null) {
          e.disconnect();
        }
        i = null;
      }
      (function o(u = false, c = 1) {
        s();
        let {
          left: l,
          top: f,
          width: h,
          height: d
        } = e.getBoundingClientRect();
        if (!u) {
          t();
        }
        if (!h || !d) {
          return;
        }
        let p = floatingUiPositionUtils.floor(f);
        let g = floatingUiPositionUtils.floor(a.clientWidth - (l + h));
        let v = {
          rootMargin: -p + "px " + -g + "px " + -floatingUiPositionUtils.floor(a.clientHeight - (f + d)) + "px " + -floatingUiPositionUtils.floor(l) + "px",
          threshold: floatingUiPositionUtils.max(0, floatingUiPositionUtils.min(1, c)) || 1
        };
        let m = true;
        function y(e) {
          let t = e[0].intersectionRatio;
          if (t !== c) {
            if (!m) {
              return o();
            }
            if (t) {
              o(false, t);
            } else {
              n = setTimeout(() => {
                o(false, 1e-7);
              }, 1000);
            }
          }
          m = false;
        }
        try {
          i = new IntersectionObserver(y, {
            ...v,
            root: a.ownerDocument
          });
        } catch (e) {
          i = new IntersectionObserver(y, v);
        }
        i.observe(e);
      })(true);
      return s;
    }(p, n) : null;
    let m = -1;
    let y = null;
    if (l) {
      y = new ResizeObserver(e => {
        let [r] = e;
        if (r && r.target === p && y) {
          y.unobserve(t);
          cancelAnimationFrame(m);
          m = requestAnimationFrame(() => {
            var e;
            if ((e = y) != null) {
              e.observe(t);
            }
          });
        }
        n();
      });
      if (p && !d) {
        y.observe(p);
      }
      y.observe(t);
    }
    let b = d ? f(e) : null;
    if (d) {
      (function t() {
        let r = f(e);
        if (b && (r.x !== b.x || r.y !== b.y || r.width !== b.width || r.height !== b.height)) {
          n();
        }
        b = r;
        a = requestAnimationFrame(t);
      })();
    }
    n();
    return () => {
      var e;
      g.forEach(e => {
        if (u) {
          e.removeEventListener("scroll", n);
        }
        if (c) {
          e.removeEventListener("resize", n);
        }
      });
      if (v != null) {
        v();
      }
      if ((e = y) != null) {
        e.disconnect();
      }
      y = null;
      if (d) {
        cancelAnimationFrame(a);
      }
    };
  }
  let w = floatingUiPositionMiddleware.offsetMiddleware;
  let E = floatingUiPositionMiddleware.shiftMiddleware;
  let S = floatingUiPositionMiddleware.flipMiddleware;
  let x = floatingUiPositionMiddleware.sizeMiddleware;
  let k = floatingUiPositionMiddleware.hideMiddleware;
  let O = floatingUiPositionMiddleware.arrowMiddleware;
  let A = floatingUiPositionMiddleware.innerMiddleware;
  let T = (e, t, n) => {
    let r = new Map();
    let o = {
      platform: b,
      ...n
    };
    let a = {
      ...o.platform,
      _c: r
    };
    return floatingUiPositionMiddleware.computePosition(e, t, {
      ...o,
      platform: a
    });
  };
  require.d(exports, {
    hideMiddleware: function () {
      return k;
    },
    convertRectToViewport: function () {
      return b;
    },
    observePosition: function () {
      return _;
    },
    flipMiddleware: function () {
      return S;
    },
    offsetMiddleware: function () {
      return w;
    },
    sizeMiddleware: function () {
      return x;
    },
    innerMiddleware: function () {
      return A;
    },
    computePosition: function () {
      return T;
    },
    shiftMiddleware: function () {
      return E;
    },
    arrowMiddleware: function () {
      return O;
    }
  });
}