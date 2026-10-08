// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'pf' to 'ScrollView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 683125
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var scrollbarThumbStyles = require("scrollbar-thumb-styles") /*id: 972537*/;
  (i = {}).Top = "top";
  i.Bottom = "bottom";
  i.Inner = "inner";
  let u = i;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  let p = () => window.navigator.userAgent;
  let m = e => {
    if (typeof window == "undefined") {
      return false;
    }
    let t = userAgentDeviceDetector.getChromeVersion(e);
    if (!t) {
      return true;
    }
    let {
      major: n
    } = t;
    return n >= 83;
  };
  var f = {
    "scroll-view": "scroll-view-OEiNXD",
    before: "before-r3g_KU",
    after: "after-JU9dJg",
    content: "content-Xv_Zw0",
    scrollable: "scrollable-Se7zNt",
    reverse: "reverse-ZzkEud",
    "disable-scroll": "disable-scroll-kmYrkh",
    "show-scrollbar": "show-scrollbar-UJ9EoW",
    "auto-show-scrollbar": "auto-show-scrollbar-oWvIcV",
    "children-wrapper": "children-wrapper-NkFi7R"
  };
  let g = e => {
    let {
      reverse: t,
      scrollStatusRef: n,
      onBeforeScroll: i,
      onAfterScroll: o
    } = e;
    let s = m(p());
    let l = reactCoreLibraryReexport.useRef(null);
    let a = reactCoreLibraryReexport.useRef(false);
    let c = reactCoreLibraryReexport.useRef(0);
    let d = () => {
      let {
        current: e
      } = l;
      if (!e) {
        throw Error("Not found ScrollView ref instance");
      }
      return e;
    };
    let g = e => {
      let n = d();
      if (t) {
        return n.scrollHeight - n.offsetHeight + e;
      } else {
        return e;
      }
    };
    let b = e => {
      let n = d();
      if (t) {
        return e - (n.scrollHeight - n.offsetHeight);
      } else {
        return e;
      }
    };
    let y = e => {
      let n = d();
      if (userAgentDeviceDetector.isWebKit()) {
        if (t) {
          return Math.max(e, n.offsetHeight - n.scrollHeight + 1);
        } else {
          return Math.min(e, n.scrollHeight - n.offsetHeight - 1);
        }
      } else {
        return e;
      }
    };
    let v = () => {
      let e = d();
      if (t && !s) {
        return e.scrollTop - (e.scrollHeight - e.offsetHeight);
      } else {
        return e.scrollTop;
      }
    };
    let w = (e, n) => {
      let r = d();
      let l = y(t && !s ? e + (r.scrollHeight - r.offsetHeight) : e);
      if (i != null) {
        i();
      }
      if (n) {
        r.scrollTo({
          top: l,
          ...n
        });
      } else {
        r.scrollTop = l;
      }
      if (o != null) {
        o();
      }
    };
    let _ = (e, t) => {
      if (!a.current) {
        w(b(e), t);
        return new Promise(e => {
          requestAnimationFrame(() => {
            e();
          });
        });
      }
    };
    let x = async () => {
      await _(0);
    };
    let k = async function (e = {}) {
      let {
        smooth: t = false
      } = e;
      let {
        scrollHeight: n,
        offsetHeight: i
      } = d();
      await _(g(n - i), {
        behavior: t ? "smooth" : undefined
      });
    };
    let E = () => {
      let {
        current: e
      } = l;
      if (!e) {
        return 0;
      }
      let {
        scrollHeight: n,
        offsetHeight: i
      } = e;
      let r = v();
      if (t) {
        return n - (i + -r);
      } else {
        return r;
      }
    };
    let C = () => {
      let {
        current: e
      } = l;
      if (e) {
        return e.scrollHeight - E() - e.offsetHeight;
      } else {
        return 0;
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      var t;
      if ((e = l.current) !== null && e !== undefined) {
        e.addEventListener("touchstart", () => {
          a.current = true;
        });
      }
      if ((t = l.current) !== null && t !== undefined) {
        t.addEventListener("touchend", () => {
          a.current = false;
        });
      }
    }, []);
    return {
      ref: l,
      controller: {
        scrollTo: _,
        scrollToTop: x,
        scrollToBottom: k,
        getScrollTop: E,
        getScrollBottom: C,
        refreshAnchor: () => {
          if (!(c.current > 0)) {
            if ((n == null ? undefined : n.current) === u.Top) {
              x();
            } else if ((n == null ? undefined : n.current) === u.Bottom) {
              k();
            }
          }
        },
        disableScroll: e => {
          var t;
          a.current = true;
          if ((t = l.current) !== null && t !== undefined) {
            t.classList.add(e || f["disable-scroll"]);
          }
          w(v() - 1);
        },
        enableScroll: e => {
          var t;
          a.current = false;
          if ((t = l.current) !== null && t !== undefined) {
            t.classList.remove(e || f["disable-scroll"]);
          }
        },
        isNearBottom: e => C() <= e,
        getContainerHeight: () => d().offsetHeight,
        getContainer: d,
        pauseScrollAnchoring: () => {
          c.current += 1;
          return () => {
            c.current = Math.max(0, c.current - 1);
          };
        },
        isScrollAnchoringPaused: () => c.current > 0
      }
    };
  };
  let b = e => {
    let {
      enable: t = true,
      controller: n
    } = e;
    return {
      handleResize: e => {
        let {
          current: {
            offsetHeight: i
          },
          previous: r
        } = e;
        let {
          offsetHeight: o
        } = r ?? {};
        if (t && i && o) {
          if (!(n.getScrollBottom() >= 10 + (i - o))) {
            n.scrollToBottom();
          }
        }
      }
    };
  };
  var scrollbarThumbHooks = require("scrollbar-thumb-hooks") /*id: 775173*/;
  var scrollViewContext = require("scroll-view-context") /*id: 611454*/;
  var resizeObserverWrapper = require("resize-observer-wrapper") /*id: 887176*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      style: n,
      className: i,
      children: a,
      scrollableClassName: h,
      childrenWrapperClassName: p,
      before: m,
      after: x,
      innerBefore: k,
      reverse: E = false,
      reachTopThreshold: C,
      onReachTop: O,
      onLeaveTop: j,
      reachBottomThreshold: P,
      onReachBottom: T,
      onLeaveBottom: S,
      onContentResize: N,
      showScrollbar: Z,
      autoShowScrollbar: R,
      onScroll: D,
      bottomAttaching: I = false,
      ...M
    } = e;
    let A = E ? u.Bottom : u.Top;
    let L = reactCoreLibraryReexport.useRef(A);
    let B = reactCoreLibraryReexport.useRef(false);
    let {
      ref: $,
      controller: F
    } = g({
      reverse: E,
      scrollStatusRef: L,
      onBeforeScroll: () => {
        B.current = true;
      }
    });
    let {
      getScrollTop: H,
      getScrollBottom: G
    } = F;
    let z = reactCoreLibraryReexport.useRef(false);
    let W = reactCoreLibraryReexport.useRef(false);
    let {
      onScroll: U
    } = scrollbarThumbHooks.useScrollVisibility({
      onVisibleChange: e => {
        if ($.current) {
          if (e) {
            $.current.classList.add(scrollbarThumbStyles.scrollbarThumbStyles["show-scrollbar-thumb"]);
          } else {
            $.current.classList.remove(scrollbarThumbStyles.scrollbarThumbStyles["show-scrollbar-thumb"]);
          }
        }
      }
    });
    reactCoreLibraryReexport.useImperativeHandle(t, () => F, [F]);
    let K = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(e => {
      L.current = e;
    }, 100), []);
    let V = e => {
      let t = B.current;
      B.current = false;
      if (!e.currentTarget) {
        return;
      }
      if (D != null) {
        D(e);
      }
      let {
        offsetHeight: n
      } = e.currentTarget;
      if (H() < (C ?? n)) {
        if (!z.current) {
          z.current = true;
          if (O != null) {
            O();
          }
        }
      } else if (z.current) {
        z.current = false;
        if (j != null) {
          j();
        }
      }
      if (G() < (P ?? n)) {
        if (!W.current) {
          W.current = true;
          if (T != null) {
            T();
          }
        }
      } else if (W.current) {
        W.current = false;
        if (S != null) {
          S();
        }
      }
      L.current = u.Inner;
      if (H() <= 0 && G() <= 0) {
        K(A);
      } else if (H() <= 0) {
        K(u.Top);
      } else if (G() <= 0) {
        K(u.Bottom);
      } else {
        K(u.Inner);
      }
      if (!t) {
        U();
      }
    };
    let {
      handleResize: q
    } = b({
      controller: F,
      enable: !E && I
    });
    let X = () => {
      let e = isFunctionUtil_1.isFunction(a) ? a(F) : a;
      if (E) {
        return e;
      } else {
        return reactJsxRuntimeCoreReexport.jsx(resizeObserverWrapper.ResizeObserverWrapper, {
          onResize: q,
          children: t => reactJsxRuntimeCoreReexport.jsx("div", {
            ref: t,
            className: c(f["children-wrapper"], "children-wrapper", p),
            children: e
          })
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(scrollViewContext.ScrollViewProvider, {
      containerRef: $,
      controller: F,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        "data-testid": "scroll_view",
        className: c(f["scroll-view"], i),
        style: n,
        children: [m && reactJsxRuntimeCoreReexport.jsx("div", {
          className: c(f.before),
          children: isFunctionUtil_1.isFunction(m) ? m == null ? undefined : m(F) : m
        }), reactJsxRuntimeCoreReexport.jsx(resizeObserverWrapper.ResizeObserverWrapper, {
          onResize: N,
          children: e => reactJsxRuntimeCoreReexport.jsx("div", {
            ref: e,
            className: c(f.content),
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              ref: $,
              className: c(f.scrollable, h, {
                [f.reverse]: E,
                [f["show-scrollbar"]]: Z,
                [f["auto-show-scrollbar"]]: R
              }),
              onScroll: V,
              ...throttledPathFilterStringify.throttledPathStr(M, "data-testid"),
              children: [X(), k && reactJsxRuntimeCoreReexport.jsx("div", {
                className: c(f.before),
                children: isFunctionUtil_1.isFunction(k) ? k == null ? undefined : k(F) : k
              })]
            })
          })
        }), x && reactJsxRuntimeCoreReexport.jsx("div", {
          className: c(f.after),
          children: isFunctionUtil_1.isFunction(x) ? x == null ? undefined : x(F) : x
        })]
      })
    });
  });
  require.d(exports, {
    ScrollView: function () {
      return x;
    }
  });
}