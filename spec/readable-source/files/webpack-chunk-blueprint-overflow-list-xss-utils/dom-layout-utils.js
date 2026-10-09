// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dx' to 'getComputedStyle'
// - Renamed export 'Jj' to 'getWindow'
// - Renamed export 'Kx' to 'getScrollParents'
// - Renamed export 'Lw' to 'getScrollPos'
// - Renamed export 'Ow' to 'getParentNode'
// - Renamed export 'Pf' to 'supportsBackdrop'
// - Renamed export 'Py' to 'isDocumentElement'
// - Renamed export 'Re' to 'isHTMLElement'
// - Renamed export 'Ze' to 'isTableElement'
// - Renamed export 'ao' to 'isScrollable'
// - Renamed export 'gQ' to 'getContainingBlock'
// - Renamed export 'hT' to 'hasLayoutEffects'
// - Renamed export 'kK' to 'isElement'
// - Renamed export 'tF' to 'getDocumentElement'
// - Renamed export 'tR' to 'isPopoverOpen'
// - Renamed export 'wK' to 'getFrameElement'
// - Renamed export 'wk' to 'getNodeName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 229971
         */
module.exports = function (module, exports, require) {
  function r() {
    return typeof window != "undefined";
  }
  function i(e) {
    if (s(e)) {
      return (e.nodeName || "").toLowerCase();
    } else {
      return "#document";
    }
  }
  function o(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? undefined : t.defaultView) || window;
  }
  function a(e) {
    var t;
    if ((t = (s(e) ? e.ownerDocument : e.document) || window.document) == null) {
      return undefined;
    } else {
      return t.documentElement;
    }
  }
  function s(e) {
    return !!r() && (e instanceof Node || e instanceof o(e).Node);
  }
  function u(e) {
    return !!r() && (e instanceof Element || e instanceof o(e).Element);
  }
  function c(e) {
    return !!r() && (e instanceof HTMLElement || e instanceof o(e).HTMLElement);
  }
  function l(e) {
    return !!r() && typeof ShadowRoot != "undefined" && (e instanceof ShadowRoot || e instanceof o(e).ShadowRoot);
  }
  function f(e) {
    let {
      overflow: t,
      overflowX: n,
      overflowY: r,
      display: i
    } = y(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
  }
  function h(e) {
    return ["table", "td", "th"].includes(i(e));
  }
  function d(e) {
    return [":popover-open", ":modal"].some(t => {
      try {
        return e.matches(t);
      } catch (e) {
        return false;
      }
    });
  }
  function p(e) {
    let t = v();
    let n = u(e) ? y(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || !!n.containerType && n.containerType !== "normal" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e));
  }
  function g(e) {
    let t = _(e);
    while (c(t) && !m(t)) {
      if (p(t)) {
        return t;
      }
      if (d(t)) {
        break;
      }
      t = _(t);
    }
    return null;
  }
  function v() {
    return typeof CSS != "undefined" && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  function m(e) {
    return ["html", "body", "#document"].includes(i(e));
  }
  function y(e) {
    return o(e).getComputedStyle(e);
  }
  function b(e) {
    if (u(e)) {
      return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
      };
    } else {
      return {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
      };
    }
  }
  function _(e) {
    if (i(e) === "html") {
      return e;
    }
    let t = e.assignedSlot || e.parentNode || l(e) && e.host || a(e);
    if (l(t)) {
      return t.host;
    } else {
      return t;
    }
  }
  function w(e) {
    if (e.parent && Object.getPrototypeOf(e.parent)) {
      return e.frameElement;
    } else {
      return null;
    }
  }
  require.d(exports, {
    getComputedStyle: function () {
      return y;
    },
    getWindow: function () {
      return o;
    },
    getScrollParents: function () {
      return function e(t, n, r) {
        var i;
        if (n === undefined) {
          n = [];
        }
        if (r === undefined) {
          r = true;
        }
        let a = function e(t) {
          let n = _(t);
          if (m(n)) {
            if (t.ownerDocument) {
              return t.ownerDocument.body;
            } else {
              return t.body;
            }
          } else if (c(n) && f(n)) {
            return n;
          } else {
            return e(n);
          }
        }(t);
        let s = a === ((i = t.ownerDocument) == null ? undefined : i.body);
        let u = o(a);
        if (s) {
          let t = w(u);
          return n.concat(u, u.visualViewport || [], f(a) ? a : [], t && r ? e(t) : []);
        }
        return n.concat(a, e(a, [], r));
      };
    },
    getScrollPos: function () {
      return b;
    },
    getParentNode: function () {
      return _;
    },
    supportsBackdrop: function () {
      return v;
    },
    isDocumentElement: function () {
      return m;
    },
    isHTMLElement: function () {
      return c;
    },
    isTableElement: function () {
      return h;
    },
    isScrollable: function () {
      return f;
    },
    getContainingBlock: function () {
      return g;
    },
    hasLayoutEffects: function () {
      return p;
    },
    isElement: function () {
      return u;
    },
    getDocumentElement: function () {
      return a;
    },
    isPopoverOpen: function () {
      return d;
    },
    getFrameElement: function () {
      return w;
    },
    getNodeName: function () {
      return i;
    }
  });
}