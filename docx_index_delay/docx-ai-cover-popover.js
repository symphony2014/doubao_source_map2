// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e_' to 'dialogConfirmComponent'
// - Resolved require(103822) to 'dialog-confirm-component'
// - Renamed variable 'ed' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'em' to 'debounceUtilWrapper'
// - Resolved require(213804) to 'debounce-util-wrapper'
// - Renamed variable 'eD' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'eh' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'eC' to 'reactReduxCore'
// - Resolved require(509563) to 'react-redux-core'
// - Renamed variable 'ef' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 'ey' to 'storeCoverActionsMap'
// - Resolved require(535604) to 'store-cover-actions-map'
// - Renamed variable 'ek' to 'docxSelectorsExport'
// - Resolved require(254026) to 'docx-selectors-export'
// - Renamed variable 'eM' to 'docsAiMenuLauncher'
// - Resolved require(265287) to 'docs-ai-menu-launcher'
// - Renamed variable 'eg' to 'screenWidthObserverHook'
// - Resolved require(741639) to 'screen-width-observer-hook'
// - Renamed variable 'ev' to 'reduxStoreInitializer'
// - Resolved require(75100) to 'redux-store-initializer'
// - Renamed variable 'ex' to 'docxCaptionConfig'
// - Resolved require(338988) to 'docx-caption-config'
// - Renamed variable 'eA' to 'aiCoverImageService'
// - Resolved require(190345) to 'ai-cover-image-service'
// - Renamed variable 'eb' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'cG' to 'getAiImageRequestState' (module 254026)
// - Updated imported property 'yj' to 'getStopTaskId' (module 254026)
// - Updated imported property 'd' to 'useScreenWidthObserver' (module 741639)
// - Updated imported property 'E8' to 'maxCaptionLines' (module 338988)
// - Updated imported property 'Z' to 'createDebounce' (module 213804)
// - Updated imported property 'K' to 'launchDocsAiMenu' (module 265287)
// - Updated imported property 'b' to 'aiCoverImageService' (module 190345)
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'ZP' to 'reduxStore' (module 75100)
// - Updated imported property 'MK' to 'setAiImageState' (module 535604)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 211358
         */
module.exports = function (module, exports, require) {
  function o(e) {
    if (e == null) {
      return window;
    }
    if (e.toString() !== "[object Window]") {
      var i = e.ownerDocument;
      return i && i.defaultView || window;
    }
    return e;
  }
  function a(e) {
    var i = o(e).Element;
    return e instanceof i || e instanceof Element;
  }
  function n(e) {
    var i = o(e).HTMLElement;
    return e instanceof i || e instanceof HTMLElement;
  }
  function s(e) {
    if (typeof ShadowRoot == "undefined") {
      return false;
    }
    var i = o(e).ShadowRoot;
    return e instanceof i || e instanceof ShadowRoot;
  }
  var u;
  var l;
  var c;
  var _;
  var d;
  var p = Math.max;
  var m = Math.min;
  var D = Math.round;
  function h() {
    var e = navigator.userAgentData;
    if (e != null && e.brands && Array.isArray(e.brands)) {
      return e.brands.map(function (e) {
        return e.brand + "/" + e.version;
      }).join(" ");
    } else {
      return navigator.userAgent;
    }
  }
  function C() {
    return !/^((?!chrome|android).)*safari/i.test(h());
  }
  function f(e, i = false, r = false) {
    var s = e.getBoundingClientRect();
    var u = 1;
    var l = 1;
    if (i && n(e)) {
      u = e.offsetWidth > 0 && D(s.width) / e.offsetWidth || 1;
      l = e.offsetHeight > 0 && D(s.height) / e.offsetHeight || 1;
    }
    var c = (a(e) ? o(e) : window).visualViewport;
    var _ = !C() && r;
    var d = (s.left + (_ && c ? c.offsetLeft : 0)) / u;
    var p = (s.top + (_ && c ? c.offsetTop : 0)) / l;
    var m = s.width / u;
    var h = s.height / l;
    return {
      width: m,
      height: h,
      top: p,
      right: d + m,
      bottom: p + h,
      left: d,
      x: d,
      y: p
    };
  }
  function y(e) {
    var i = o(e);
    return {
      scrollLeft: i.pageXOffset,
      scrollTop: i.pageYOffset
    };
  }
  function k(e) {
    if (e) {
      return (e.nodeName || "").toLowerCase();
    } else {
      return null;
    }
  }
  function M(e) {
    return ((a(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function g(e) {
    return f(M(e)).left + y(e).scrollLeft;
  }
  function v(e) {
    return o(e).getComputedStyle(e);
  }
  function x(e) {
    var i = v(e);
    var r = i.overflow;
    var o = i.overflowX;
    var a = i.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + a + o);
  }
  function A(e) {
    var i = f(e);
    var r = e.offsetWidth;
    var o = e.offsetHeight;
    if (Math.abs(i.width - r) <= 1) {
      r = i.width;
    }
    if (Math.abs(i.height - o) <= 1) {
      o = i.height;
    }
    return {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: r,
      height: o
    };
  }
  function b(e) {
    if (k(e) === "html") {
      return e;
    } else {
      return e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || M(e);
    }
  }
  function L(e, i = []) {
    var r;
    var a = function e(i) {
      if (["html", "body", "#document"].indexOf(k(i)) >= 0) {
        return i.ownerDocument.body;
      } else if (n(i) && x(i)) {
        return i;
      } else {
        return e(b(i));
      }
    }(e);
    var s = a === ((r = e.ownerDocument) == null ? undefined : r.body);
    var u = o(a);
    var l = s ? [u].concat(u.visualViewport || [], x(a) ? a : []) : a;
    var c = i.concat(l);
    if (s) {
      return c;
    } else {
      return c.concat(L(b(l)));
    }
  }
  function F(e) {
    if (n(e) && v(e).position !== "fixed") {
      return e.offsetParent;
    } else {
      return null;
    }
  }
  function E(e) {
    var i = o(e);
    var r = F(e);
    while (r && ["table", "td", "th"].indexOf(k(r)) >= 0 && v(r).position === "static") {
      r = F(r);
    }
    if (r && (k(r) === "html" || k(r) === "body" && v(r).position === "static")) {
      return i;
    } else {
      return r || function (e) {
        var i = /firefox/i.test(h());
        if (/Trident/i.test(h()) && n(e) && v(e).position === "fixed") {
          return null;
        }
        var r = b(e);
        for (s(r) && (r = r.host); n(r) && ["html", "body"].indexOf(k(r)) < 0;) {
          var o = v(r);
          if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || i && o.willChange === "filter" || i && o.filter && o.filter !== "none") {
            return r;
          }
          r = r.parentNode;
        }
        return null;
      }(e) || i;
    }
  }
  var T = "bottom";
  var I = "right";
  var S = "left";
  var w = "auto";
  var N = ["top", T, I, S];
  var R = "start";
  var P = "viewport";
  var B = "popper";
  var O = N.reduce(function (e, i) {
    return e.concat([i + "-" + R, i + "-end"]);
  }, []);
  var j = [].concat(N, [w]).reduce(function (e, i) {
    return e.concat([i, i + "-" + R, i + "-end"]);
  }, []);
  var Z = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
  var W = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function z() {
    var e = arguments.length;
    var i = Array(e);
    var r = 0;
    for (; r < e; r++) {
      i[r] = arguments[r];
    }
    return !i.some(function (e) {
      return !e || typeof e.getBoundingClientRect != "function";
    });
  }
  var $ = {
    passive: true
  };
  function U(e) {
    return e.split("-")[0];
  }
  function H(e) {
    return e.split("-")[1];
  }
  function V(e) {
    if (["top", "bottom"].indexOf(e) >= 0) {
      return "x";
    } else {
      return "y";
    }
  }
  function q(e) {
    var i;
    var r = e.reference;
    var o = e.element;
    var a = e.placement;
    var n = a ? U(a) : null;
    var s = a ? H(a) : null;
    var u = r.x + r.width / 2 - o.width / 2;
    var l = r.y + r.height / 2 - o.height / 2;
    switch (n) {
      case "top":
        i = {
          x: u,
          y: r.y - o.height
        };
        break;
      case T:
        i = {
          x: u,
          y: r.y + r.height
        };
        break;
      case I:
        i = {
          x: r.x + r.width,
          y: l
        };
        break;
      case S:
        i = {
          x: r.x - o.width,
          y: l
        };
        break;
      default:
        i = {
          x: r.x,
          y: r.y
        };
    }
    var c = n ? V(n) : null;
    if (c != null) {
      var _ = c === "y" ? "height" : "width";
      switch (s) {
        case R:
          i[c] = i[c] - (r[_] / 2 - o[_] / 2);
          break;
        case "end":
          i[c] = i[c] + (r[_] / 2 - o[_] / 2);
      }
    }
    return i;
  }
  var G = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Q(e) {
    var i;
    var r;
    var a;
    var n;
    var s;
    var u;
    var l;
    var c = e.popper;
    var _ = e.popperRect;
    var d = e.placement;
    var p = e.variation;
    var m = e.offsets;
    var h = e.position;
    var C = e.gpuAcceleration;
    var f = e.adaptive;
    var y = e.roundOffsets;
    var k = e.isFixed;
    var g = m.x;
    var x = g === undefined ? 0 : g;
    var A = m.y;
    var b = A === undefined ? 0 : A;
    var L = typeof y == "function" ? y({
      x: x,
      y: b
    }) : {
      x: x,
      y: b
    };
    x = L.x;
    b = L.y;
    var F = m.hasOwnProperty("x");
    var w = m.hasOwnProperty("y");
    var N = S;
    var R = "top";
    var P = window;
    if (f) {
      var B = E(c);
      var O = "clientHeight";
      var j = "clientWidth";
      if (B === o(c) && v(B = M(c)).position !== "static" && h === "absolute") {
        O = "scrollHeight";
        j = "scrollWidth";
      }
      if (d === "top" || (d === S || d === I) && p === "end") {
        R = T;
        b -= (k && B === P && P.visualViewport ? P.visualViewport.height : B[O]) - _.height;
        b *= C ? 1 : -1;
      }
      if (d === S || (d === "top" || d === T) && p === "end") {
        N = I;
        x -= (k && B === P && P.visualViewport ? P.visualViewport.width : B[j]) - _.width;
        x *= C ? 1 : -1;
      }
    }
    var Z = Object.assign({
      position: h
    }, f && G);
    var W = y === true ? (i = {
      x: x,
      y: b
    }, r = o(c), a = i.x, n = i.y, {
      x: D(a * (s = r.devicePixelRatio || 1)) / s || 0,
      y: D(n * s) / s || 0
    }) : {
      x: x,
      y: b
    };
    x = W.x;
    b = W.y;
    if (C) {
      return Object.assign({}, Z, ((l = {})[R] = w ? "0" : "", l[N] = F ? "0" : "", l.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + b + "px)" : "translate3d(" + x + "px, " + b + "px, 0)", l));
    } else {
      return Object.assign({}, Z, ((u = {})[R] = w ? b + "px" : "", u[N] = F ? x + "px" : "", u.transform = "", u));
    }
  }
  var J = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function X(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return J[e];
    });
  }
  var K = {
    start: "end",
    end: "start"
  };
  function Y(e) {
    return e.replace(/start|end/g, function (e) {
      return K[e];
    });
  }
  function ee(e, i) {
    var r = i.getRootNode && i.getRootNode();
    if (e.contains(i)) {
      return true;
    }
    if (r && s(r)) {
      var o = i;
      do {
        if (o && e.isSameNode(o)) {
          return true;
        }
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function et(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function ei(e, i, r) {
    var n;
    var s;
    var u;
    var l;
    var c;
    var _;
    var d;
    var m;
    var D;
    var h;
    if (i === P) {
      return et(function (e, i) {
        var r = o(e);
        var a = M(e);
        var n = r.visualViewport;
        var s = a.clientWidth;
        var u = a.clientHeight;
        var l = 0;
        var c = 0;
        if (n) {
          s = n.width;
          u = n.height;
          var _ = C();
          if (_ || !_ && i === "fixed") {
            l = n.offsetLeft;
            c = n.offsetTop;
          }
        }
        return {
          width: s,
          height: u,
          x: l + g(e),
          y: c
        };
      }(e, r));
    } else if (a(i)) {
      (n = f(i, false, r === "fixed")).top = n.top + i.clientTop;
      n.left = n.left + i.clientLeft;
      n.bottom = n.top + i.clientHeight;
      n.right = n.left + i.clientWidth;
      n.width = i.clientWidth;
      n.height = i.clientHeight;
      n.x = n.left;
      n.y = n.top;
      return n;
    } else {
      return et((s = M(e), l = M(s), c = y(s), _ = (u = s.ownerDocument) == null ? undefined : u.body, d = p(l.scrollWidth, l.clientWidth, _ ? _.scrollWidth : 0, _ ? _.clientWidth : 0), m = p(l.scrollHeight, l.clientHeight, _ ? _.scrollHeight : 0, _ ? _.clientHeight : 0), D = -c.scrollLeft + g(s), h = -c.scrollTop, v(_ || l).direction === "rtl" && (D += p(l.clientWidth, _ ? _.clientWidth : 0) - d), {
        width: d,
        height: m,
        x: D,
        y: h
      }));
    }
  }
  function er() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function eo(e) {
    return Object.assign({}, er(), e);
  }
  function ea(e, i) {
    return i.reduce(function (i, r) {
      i[r] = e;
      return i;
    }, {});
  }
  function en(e, i = {}) {
    var r;
    var o;
    var s;
    var u;
    var l;
    var c;
    var _;
    var d;
    var D = i;
    var h = D.placement;
    var C = h === undefined ? e.placement : h;
    var y = D.strategy;
    var g = y === undefined ? e.strategy : y;
    var x = D.boundary;
    var A = D.rootBoundary;
    var F = D.elementContext;
    var S = F === undefined ? B : F;
    var w = D.altBoundary;
    var R = D.padding;
    var O = R === undefined ? 0 : R;
    var j = eo(typeof O != "number" ? O : ea(O, N));
    var Z = e.rects.popper;
    var W = e.elements[w !== undefined && w ? S === B ? "reference" : B : S];
    r = a(W) ? W : W.contextElement || M(e.elements.popper);
    o = x === undefined ? "clippingParents" : x;
    s = A === undefined ? P : A;
    _ = (c = [].concat(o === "clippingParents" ? (u = L(b(r)), a(l = ["absolute", "fixed"].indexOf(v(r).position) >= 0 && n(r) ? E(r) : r) ? u.filter(function (e) {
      return a(e) && ee(e, l) && k(e) !== "body";
    }) : []) : [].concat(o), [s]))[0];
    (d = c.reduce(function (e, i) {
      var o = ei(r, i, g);
      e.top = p(o.top, e.top);
      e.right = m(o.right, e.right);
      e.bottom = m(o.bottom, e.bottom);
      e.left = p(o.left, e.left);
      return e;
    }, ei(r, _, g))).width = d.right - d.left;
    d.height = d.bottom - d.top;
    d.x = d.left;
    d.y = d.top;
    var z = d;
    var $ = f(e.elements.reference);
    var U = q({
      reference: $,
      element: Z,
      strategy: "absolute",
      placement: C
    });
    var H = et(Object.assign({}, Z, U));
    var V = S === B ? H : $;
    var G = {
      top: z.top - V.top + j.top,
      bottom: V.bottom - z.bottom + j.bottom,
      left: z.left - V.left + j.left,
      right: V.right - z.right + j.right
    };
    var Q = e.modifiersData.offset;
    if (S === B && Q) {
      var J = Q[C];
      Object.keys(G).forEach(function (e) {
        var i = [I, T].indexOf(e) >= 0 ? 1 : -1;
        var r = ["top", T].indexOf(e) >= 0 ? "y" : "x";
        G[e] += J[r] * i;
      });
    }
    return G;
  }
  function es(e, i, r) {
    return p(e, m(i, r));
  }
  function eu(e, i, r = {
    x: 0,
    y: 0
  }) {
    return {
      top: e.top - i.height - r.y,
      right: e.right - i.width + r.x,
      bottom: e.bottom - i.height + r.y,
      left: e.left - i.width - r.x
    };
  }
  function el(e) {
    return ["top", I, T, S].some(function (i) {
      return e[i] >= 0;
    });
  }
  c = (l = (u = {
    defaultModifiers: [{
      name: "eventListeners",
      enabled: true,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var i = e.state;
        var r = e.instance;
        var a = e.options;
        var n = a.scroll;
        var s = n === undefined || n;
        var u = a.resize;
        var l = u === undefined || u;
        var c = o(i.elements.popper);
        var _ = [].concat(i.scrollParents.reference, i.scrollParents.popper);
        if (s) {
          _.forEach(function (e) {
            e.addEventListener("scroll", r.update, $);
          });
        }
        if (l) {
          c.addEventListener("resize", r.update, $);
        }
        return function () {
          if (s) {
            _.forEach(function (e) {
              e.removeEventListener("scroll", r.update, $);
            });
          }
          if (l) {
            c.removeEventListener("resize", r.update, $);
          }
        };
      },
      data: {}
    }, {
      name: "popperOffsets",
      enabled: true,
      phase: "read",
      fn: function (e) {
        var i = e.state;
        var r = e.name;
        i.modifiersData[r] = q({
          reference: i.rects.reference,
          element: i.rects.popper,
          strategy: "absolute",
          placement: i.placement
        });
      },
      data: {}
    }, {
      name: "computeStyles",
      enabled: true,
      phase: "beforeWrite",
      fn: function (e) {
        var i = e.state;
        var r = e.options;
        var o = r.gpuAcceleration;
        var a = r.adaptive;
        var n = r.roundOffsets;
        var s = n === undefined || n;
        var u = {
          placement: U(i.placement),
          variation: H(i.placement),
          popper: i.elements.popper,
          popperRect: i.rects.popper,
          gpuAcceleration: o === undefined || o,
          isFixed: i.options.strategy === "fixed"
        };
        if (i.modifiersData.popperOffsets != null) {
          i.styles.popper = Object.assign({}, i.styles.popper, Q(Object.assign({}, u, {
            offsets: i.modifiersData.popperOffsets,
            position: i.options.strategy,
            adaptive: a === undefined || a,
            roundOffsets: s
          })));
        }
        if (i.modifiersData.arrow != null) {
          i.styles.arrow = Object.assign({}, i.styles.arrow, Q(Object.assign({}, u, {
            offsets: i.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets: s
          })));
        }
        i.attributes.popper = Object.assign({}, i.attributes.popper, {
          "data-popper-placement": i.placement
        });
      },
      data: {}
    }, {
      name: "applyStyles",
      enabled: true,
      phase: "write",
      fn: function (e) {
        var i = e.state;
        Object.keys(i.elements).forEach(function (e) {
          var r = i.styles[e] || {};
          var o = i.attributes[e] || {};
          var a = i.elements[e];
          if (n(a) && k(a)) {
            Object.assign(a.style, r);
            Object.keys(o).forEach(function (e) {
              var i = o[e];
              if (i === false) {
                a.removeAttribute(e);
              } else {
                a.setAttribute(e, i === true ? "" : i);
              }
            });
          }
        });
      },
      effect: function (e) {
        var i = e.state;
        var r = {
          popper: {
            position: i.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(i.elements.popper.style, r.popper);
        i.styles = r;
        if (i.elements.arrow) {
          Object.assign(i.elements.arrow.style, r.arrow);
        }
        return function () {
          Object.keys(i.elements).forEach(function (e) {
            var o = i.elements[e];
            var a = i.attributes[e] || {};
            var s = Object.keys(i.styles.hasOwnProperty(e) ? i.styles[e] : r[e]).reduce(function (e, i) {
              e[i] = "";
              return e;
            }, {});
            if (n(o) && k(o)) {
              Object.assign(o.style, s);
              Object.keys(a).forEach(function (e) {
                o.removeAttribute(e);
              });
            }
          });
        };
      },
      requires: ["computeStyles"]
    }, {
      name: "offset",
      enabled: true,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var i = e.state;
        var r = e.options;
        var o = e.name;
        var a = r.offset;
        var n = a === undefined ? [0, 0] : a;
        var s = j.reduce(function (e, r) {
          var o;
          var a;
          var s;
          var u;
          var l;
          var c;
          o = i.rects;
          s = [S, "top"].indexOf(a = U(r)) >= 0 ? -1 : 1;
          l = (u = typeof n == "function" ? n(Object.assign({}, o, {
            placement: r
          })) : n)[0];
          c = u[1];
          l = l || 0;
          c = (c || 0) * s;
          e[r] = [S, I].indexOf(a) >= 0 ? {
            x: c,
            y: l
          } : {
            x: l,
            y: c
          };
          return e;
        }, {});
        var u = s[i.placement];
        var l = u.x;
        var c = u.y;
        if (i.modifiersData.popperOffsets != null) {
          i.modifiersData.popperOffsets.x += l;
          i.modifiersData.popperOffsets.y += c;
        }
        i.modifiersData[o] = s;
      }
    }, {
      name: "flip",
      enabled: true,
      phase: "main",
      fn: function (e) {
        var i = e.state;
        var r = e.options;
        var o = e.name;
        if (!i.modifiersData[o]._skip) {
          var a = r.mainAxis;
          var n = a === undefined || a;
          var s = r.altAxis;
          var u = s === undefined || s;
          var l = r.fallbackPlacements;
          var c = r.padding;
          var _ = r.boundary;
          var d = r.rootBoundary;
          var p = r.altBoundary;
          var m = r.flipVariations;
          var D = m === undefined || m;
          var h = r.allowedAutoPlacements;
          var C = i.options.placement;
          var f = U(C) === C;
          var y = l || (f || !D ? [X(C)] : function (e) {
            if (U(e) === w) {
              return [];
            }
            var i = X(e);
            return [Y(e), i, Y(i)];
          }(C));
          var k = [C].concat(y).reduce(function (e, r) {
            var o;
            var a;
            var n;
            var s;
            var u;
            var l;
            var p;
            var m;
            var C;
            var f;
            var y;
            var k;
            return e.concat(U(r) === w ? (a = (o = {
              placement: r,
              boundary: _,
              rootBoundary: d,
              padding: c,
              flipVariations: D,
              allowedAutoPlacements: h
            }).placement, n = o.boundary, s = o.rootBoundary, u = o.padding, l = o.flipVariations, m = (p = o.allowedAutoPlacements) === undefined ? j : p, (y = (f = (C = H(a)) ? l ? O : O.filter(function (e) {
              return H(e) === C;
            }) : N).filter(function (e) {
              return m.indexOf(e) >= 0;
            })).length === 0 && (y = f), Object.keys(k = y.reduce(function (e, r) {
              e[r] = en(i, {
                placement: r,
                boundary: n,
                rootBoundary: s,
                padding: u
              })[U(r)];
              return e;
            }, {})).sort(function (e, i) {
              return k[e] - k[i];
            })) : r);
          }, []);
          var M = i.rects.reference;
          var g = i.rects.popper;
          var v = new Map();
          var x = true;
          var A = k[0];
          var b = 0;
          for (; b < k.length; b++) {
            var L = k[b];
            var F = U(L);
            var E = H(L) === R;
            var P = ["top", T].indexOf(F) >= 0;
            var B = P ? "width" : "height";
            var Z = en(i, {
              placement: L,
              boundary: _,
              rootBoundary: d,
              altBoundary: p,
              padding: c
            });
            var W = P ? E ? I : S : E ? T : "top";
            if (M[B] > g[B]) {
              W = X(W);
            }
            var z = X(W);
            var $ = [];
            if (n) {
              $.push(Z[F] <= 0);
            }
            if (u) {
              $.push(Z[W] <= 0, Z[z] <= 0);
            }
            if ($.every(function (e) {
              return e;
            })) {
              A = L;
              x = false;
              break;
            }
            v.set(L, $);
          }
          if (x) {
            var V = D ? 3 : 1;
            function q(e) {
              var i = k.find(function (i) {
                var r = v.get(i);
                if (r) {
                  return r.slice(0, e).every(function (e) {
                    return e;
                  });
                }
              });
              if (i) {
                A = i;
                return "break";
              }
            }
            var G = V;
            for (; G > 0 && q(G) !== "break"; G--);
          }
          if (i.placement !== A) {
            i.modifiersData[o]._skip = true;
            i.placement = A;
            i.reset = true;
          }
        }
      },
      requiresIfExists: ["offset"],
      data: {
        _skip: false
      }
    }, {
      name: "preventOverflow",
      enabled: true,
      phase: "main",
      fn: function (e) {
        var i = e.state;
        var r = e.options;
        var o = e.name;
        var a = r.mainAxis;
        var n = r.altAxis;
        var s = r.boundary;
        var u = r.rootBoundary;
        var l = r.altBoundary;
        var c = r.padding;
        var _ = r.tether;
        var d = _ === undefined || _;
        var D = r.tetherOffset;
        var h = D === undefined ? 0 : D;
        var C = en(i, {
          boundary: s,
          rootBoundary: u,
          padding: c,
          altBoundary: l
        });
        var f = U(i.placement);
        var y = H(i.placement);
        var k = !y;
        var M = V(f);
        var g = M === "x" ? "y" : "x";
        var v = i.modifiersData.popperOffsets;
        var x = i.rects.reference;
        var b = i.rects.popper;
        var L = typeof h == "function" ? h(Object.assign({}, i.rects, {
          placement: i.placement
        })) : h;
        var F = typeof L == "number" ? {
          mainAxis: L,
          altAxis: L
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, L);
        var w = i.modifiersData.offset ? i.modifiersData.offset[i.placement] : null;
        var N = {
          x: 0,
          y: 0
        };
        if (v) {
          if (a === undefined || a) {
            var B = M === "y" ? "top" : S;
            var O = M === "y" ? T : I;
            var j = M === "y" ? "height" : "width";
            var Z = v[M];
            var W = Z + C[B];
            var z = Z - C[O];
            var $ = d ? -b[j] / 2 : 0;
            var q = y === R ? x[j] : b[j];
            var G = y === R ? -b[j] : -x[j];
            var Q = i.elements.arrow;
            var J = d && Q ? A(Q) : {
              width: 0,
              height: 0
            };
            var X = i.modifiersData["arrow#persistent"] ? i.modifiersData["arrow#persistent"].padding : er();
            var K = X[B];
            var Y = X[O];
            var ee = es(0, x[j], J[j]);
            var et = k ? x[j] / 2 - $ - ee - K - F.mainAxis : q - ee - K - F.mainAxis;
            var ei = k ? -x[j] / 2 + $ + ee + Y + F.mainAxis : G + ee + Y + F.mainAxis;
            var eo = i.elements.arrow && E(i.elements.arrow);
            var ea = eo ? M === "y" ? eo.clientTop || 0 : eo.clientLeft || 0 : 0;
            var eu = (w == null ? undefined : w[M]) ?? 0;
            var el = es(d ? m(W, Z + et - eu - ea) : W, Z, d ? p(z, Z + ei - eu) : z);
            v[M] = el;
            N[M] = el - Z;
          }
          if (n !== undefined && n) {
            var ec;
            var ed = M === "x" ? "top" : S;
            var ep = M === "x" ? T : I;
            var em = v[g];
            var eD = g === "y" ? "height" : "width";
            var eh = em + C[ed];
            var eC = em - C[ep];
            var ef = ["top", S].indexOf(f) !== -1;
            var ey = (w == null ? undefined : w[g]) ?? 0;
            var ek = ef ? eh : em - x[eD] - b[eD] - ey + F.altAxis;
            var eM = ef ? em + x[eD] + b[eD] - ey - F.altAxis : eC;
            var eg = d && ef ? (ec = es(ek, em, eM)) > eM ? eM : ec : es(d ? ek : eh, em, d ? eM : eC);
            v[g] = eg;
            N[g] = eg - em;
          }
          i.modifiersData[o] = N;
        }
      },
      requiresIfExists: ["offset"]
    }, {
      name: "arrow",
      enabled: true,
      phase: "main",
      fn: function (e) {
        var i;
        var r;
        var o = e.state;
        var a = e.name;
        var n = e.options;
        var s = o.elements.arrow;
        var u = o.modifiersData.popperOffsets;
        var l = U(o.placement);
        var c = V(l);
        var _ = [S, I].indexOf(l) >= 0 ? "height" : "width";
        if (s && u) {
          var d = eo(typeof (i = typeof (i = n.padding) == "function" ? i(Object.assign({}, o.rects, {
            placement: o.placement
          })) : i) != "number" ? i : ea(i, N));
          var p = A(s);
          var m = c === "y" ? "top" : S;
          var D = c === "y" ? T : I;
          var h = o.rects.reference[_] + o.rects.reference[c] - u[c] - o.rects.popper[_];
          var C = u[c] - o.rects.reference[c];
          var f = E(s);
          var y = f ? c === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0;
          var k = d[m];
          var M = y - p[_] - d[D];
          var g = y / 2 - p[_] / 2 + (h / 2 - C / 2);
          var v = es(k, g, M);
          o.modifiersData[a] = ((r = {})[c] = v, r.centerOffset = v - g, r);
        }
      },
      effect: function (e) {
        var i = e.state;
        var r = e.options.element;
        var o = r === undefined ? "[data-popper-arrow]" : r;
        if (o != null && (typeof o != "string" || (o = i.elements.popper.querySelector(o))) && ee(i.elements.popper, o)) {
          i.elements.arrow = o;
        }
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    }, {
      name: "hide",
      enabled: true,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var i = e.state;
        var r = e.name;
        var o = i.rects.reference;
        var a = i.rects.popper;
        var n = i.modifiersData.preventOverflow;
        var s = en(i, {
          elementContext: "reference"
        });
        var u = en(i, {
          altBoundary: true
        });
        var l = eu(s, o);
        var c = eu(u, a, n);
        var _ = el(l);
        var d = el(c);
        i.modifiersData[r] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: _,
          hasPopperEscaped: d
        };
        i.attributes.popper = Object.assign({}, i.attributes.popper, {
          "data-popper-reference-hidden": _,
          "data-popper-escaped": d
        });
      }
    }]
  }).defaultModifiers) === undefined ? [] : l;
  d = (_ = u.defaultOptions) === undefined ? W : _;
  function ec(e, i, r = d) {
    var s;
    var u;
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, W, d),
      modifiersData: {},
      elements: {
        reference: e,
        popper: i
      },
      attributes: {},
      styles: {}
    };
    var _ = [];
    var p = false;
    var m = {
      state: l,
      setOptions: function (r) {
        var o;
        var n;
        var s;
        var u;
        var p;
        var D;
        var C = typeof r == "function" ? r(l.options) : r;
        h();
        l.options = Object.assign({}, d, l.options, C);
        l.scrollParents = {
          reference: a(e) ? L(e) : e.contextElement ? L(e.contextElement) : [],
          popper: L(i)
        };
        n = Object.keys(o = [].concat(c, l.options.modifiers).reduce(function (e, i) {
          var r = e[i.name];
          e[i.name] = r ? Object.assign({}, r, i, {
            options: Object.assign({}, r.options, i.options),
            data: Object.assign({}, r.data, i.data)
          }) : i;
          return e;
        }, {})).map(function (e) {
          return o[e];
        });
        s = new Map();
        u = new Set();
        p = [];
        n.forEach(function (e) {
          s.set(e.name, e);
        });
        n.forEach(function (e) {
          if (!u.has(e.name)) {
            (function e(i) {
              u.add(i.name);
              [].concat(i.requires || [], i.requiresIfExists || []).forEach(function (i) {
                if (!u.has(i)) {
                  var r = s.get(i);
                  if (r) {
                    e(r);
                  }
                }
              });
              p.push(i);
            })(e);
          }
        });
        D = p;
        var f = Z.reduce(function (e, i) {
          return e.concat(D.filter(function (e) {
            return e.phase === i;
          }));
        }, []);
        l.orderedModifiers = f.filter(function (e) {
          return e.enabled;
        });
        l.orderedModifiers.forEach(function (e) {
          var i = e.name;
          var r = e.options;
          var o = e.effect;
          if (typeof o == "function") {
            var a = o({
              state: l,
              name: i,
              instance: m,
              options: r === undefined ? {} : r
            });
            _.push(a || function () {});
          }
        });
        return m.update();
      },
      forceUpdate: function () {
        if (!p) {
          var e;
          var i;
          var r;
          var a;
          var s;
          var u;
          var c;
          var _;
          var d;
          var h;
          var C;
          var v = l.elements;
          var b = v.reference;
          var L = v.popper;
          if (z(b, L)) {
            l.rects = {
              reference: (e = E(L), i = l.options.strategy === "fixed", r = n(e), c = n(e) && (s = D((a = e.getBoundingClientRect()).width) / e.offsetWidth || 1, u = D(a.height) / e.offsetHeight || 1, s !== 1 || u !== 1), _ = M(e), d = f(b, c, i), h = {
                scrollLeft: 0,
                scrollTop: 0
              }, C = {
                x: 0,
                y: 0
              }, (r || !r && !i) && ((k(e) !== "body" || x(_)) && (h = function (e) {
                if (e !== o(e) && n(e)) {
                  return {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                  };
                } else {
                  return y(e);
                }
              }(e)), n(e) ? (C = f(e, true), C.x += e.clientLeft, C.y += e.clientTop) : _ && (C.x = g(_))), {
                x: d.left + h.scrollLeft - C.x,
                y: d.top + h.scrollTop - C.y,
                width: d.width,
                height: d.height
              }),
              popper: A(L)
            };
            l.reset = false;
            l.placement = l.options.placement;
            l.orderedModifiers.forEach(function (e) {
              return l.modifiersData[e.name] = Object.assign({}, e.data);
            });
            for (var F = 0; F < l.orderedModifiers.length; F++) {
              if (l.reset === true) {
                l.reset = false;
                F = -1;
                continue;
              }
              var T = l.orderedModifiers[F];
              var I = T.fn;
              var S = T.options;
              var w = S === undefined ? {} : S;
              var N = T.name;
              if (typeof I == "function") {
                l = I({
                  state: l,
                  options: w,
                  name: N,
                  instance: m
                }) || l;
              }
            }
          }
        }
      },
      update: (s = function () {
        return new Promise(function (e) {
          m.forceUpdate();
          e(l);
        });
      }, function () {
        u ||= new Promise(function (e) {
          Promise.resolve().then(function () {
            u = undefined;
            e(s());
          });
        });
        return u;
      }),
      destroy: function () {
        h();
        p = true;
      }
    };
    if (!z(e, i)) {
      return m;
    }
    function h() {
      _.forEach(function (e) {
        return e();
      });
      _ = [];
    }
    m.setOptions(r).then(function (e) {
      if (!p && r.onFirstUpdate) {
        r.onFirstUpdate(e);
      }
    });
    return m;
  }
  var dialogConfirmComponent = require("dialog-confirm-component") /*id: 103822*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var ep = classnamesUtils;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var storeCoverActionsMap = require("store-cover-actions-map") /*id: 535604*/;
  var docxSelectorsExport = require("docx-selectors-export") /*id: 254026*/;
  var docsAiMenuLauncher = require("docs-ai-menu-launcher") /*id: 265287*/;
  var screenWidthObserverHook = require("screen-width-observer-hook") /*id: 741639*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docxCaptionConfig = require("docx-caption-config") /*id: 338988*/;
  var aiCoverImageService = require("ai-cover-image-service") /*id: 190345*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let eL = "cover-setting-panel-header-remove";
  let eF = ["cover-panel-popover-content-wrapper", "ud__dialog__content", "ud__dialog__wrap"];
  var eE = e => {
    let i = reactCoreLibraryReexport.useRef(null);
    let r = reactCoreLibraryReexport.useRef(null);
    let o = reactReduxCore.useSelector(docxSelectorsExport.getAiImageRequestState);
    let a = reactReduxCore.useSelector(docxSelectorsExport.getStopTaskId);
    let n = reactCoreLibraryReexport.useRef();
    let {
      trigger: s,
      extend: u,
      children: l,
      ignoreClass: c,
      onClose: _
    } = e;
    let {
      isNarrowScreen: d
    } = screenWidthObserverHook.useScreenWidthObserver();
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (s && u && r.current) {
        i.current = ec(s, r.current, {
          placement: d ? "bottom-end" : "bottom",
          modifiers: [{
            name: "offset",
            options: {
              offset: [0, docxCaptionConfig.maxCaptionLines]
            }
          }, {
            name: "preventOverflow",
            options: {
              padding: !d * 56,
              mainAxis: !d
            }
          }, {
            name: "flip",
            options: {
              padding: 5,
              boundary: document.querySelector("#mainBox")
            }
          }, {
            name: "computeStyles",
            options: {
              gpuAcceleration: false
            }
          }]
        });
      } else {
        i.current = null;
      }
      return () => {
        if (i.current) {
          i.current.destroy();
          i.current = null;
        }
      };
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        let i = e.target;
        if (i.classList.contains(eL) && o) {
          return true;
        }
        let r = c.concat(eF);
        while (i) {
          for (let e of r) {
            if (i.classList.contains(e)) {
              return false;
            }
          }
          i = i.parentElement;
        }
        return true;
      };
      let i = debounceUtilWrapper.createDebounce(i => {
        if (e(i) && o) {
          if (n.current) {
            var r;
            var s;
            if ((r = (s = n.current).destroy) !== null && r !== undefined) {
              r.call(s);
            }
            return;
          }
          if (c.includes("doc-cover-toolbar")) {
            n.current = dialogConfirmComponent.Dialog.confirm({
              title: t("LarkCCM_Docs_MyAi_Quit_Title"),
              content: t("LarkCCM_Docs_MyAi_Custom_Quit_Text", {
                AiNickname: docsAiMenuLauncher.launchDocsAiMenu()
              }),
              okText: t("LarkCCM_Docs_MyAi_Cancel_Button"),
              cancelText: t("LarkCCM_Docs_MyAi_Quit_Button"),
              maskClosable: false,
              onOk: () => {
                n.current = undefined;
              },
              onCancel: () => {
                aiCoverImageService.aiCoverImageService.fetchAICoverListStop(a);
                if (browserEnvironmentDetectionUtils.browserDetector.isSafari) {
                  window.requestAnimationFrame(() => {
                    if (_ != null) {
                      _();
                    }
                  });
                } else if (_ != null) {
                  _();
                }
                reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.setAiImageState(false));
              },
              onAfterClose() {
                n.current = undefined;
              }
            });
          }
          return;
        }
        if (e(i)) {
          if (browserEnvironmentDetectionUtils.browserDetector.isSafari) {
            window.requestAnimationFrame(() => {
              if (_) {
                _();
              }
            });
          } else if (_) {
            _();
          }
        }
      }, 500, {
        trailing: false
      });
      window.addEventListener("mousedown", i, true);
      return () => {
        window.removeEventListener("mousedown", i, true);
      };
    }, [_, c, o]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = async e => {
        let {
          code: i
        } = e;
        if (i === "Escape" && u && (i !== "Escape" || !o)) {
          e.stopPropagation();
          if (_) {
            _();
          }
        }
      };
      window.addEventListener("keydown", e, true);
      return () => {
        window.removeEventListener("keydown", e, true);
      };
    }, [u, _, o]);
    let p = document.querySelector("#mainBox");
    let m = reactCoreLibraryReexport.useMemo(() => ep("cover-panel-popover-content-wrapper", {
      collapse: !u,
      "narrow-mode": d
    }), [u, d]);
    if (p) {
      return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx("div", {
        className: u ? "overlay-mask" : "",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          ref: r,
          className: m,
          children: l
        })
      }), p);
    } else {
      return null;
    }
  };
  require.r(exports);
  require.d(exports, {
    coverSettingRemove: function () {
      return eL;
    },
    default: function () {
      return eE;
    }
  });
}