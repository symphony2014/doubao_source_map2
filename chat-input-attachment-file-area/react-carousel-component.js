// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'Carousel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18848.031095ef.js
         * chunkId: 18848
         * moduleId: 464116
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arrayChunk = require("array-chunk") /*id: 554639*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var arrowLeftIconComponent = require("arrow-left-icon-component") /*id: 901793*/;
  var rtlChevronRightIcon = require("rtl-chevron-right-icon") /*id: 946692*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      children: t,
      className: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "carousel-item",
      className: s("carousel-item-RtH0tm", i, "carousel-item"),
      children: t
    });
  };
  var h = {
    carousel: "carousel-Bpr0fm",
    arrow: "arrow-ETPwYD",
    large: "large-_rru2x",
    medium: "medium-HySdVP",
    small: "small-j54zXw",
    "left-arrow": "left-arrow-zylR9I",
    leftArrow: "left-arrow-zylR9I",
    "right-arrow": "right-arrow-apab3k",
    rightArrow: "right-arrow-apab3k",
    "no-border": "no-border-fvQ3oY",
    noBorder: "no-border-fvQ3oY",
    "carousel-content": "carousel-content-excXaO",
    carouselContent: "carousel-content-excXaO",
    left: "left-KHoFX5",
    right: "right-olWVfh",
    "carousel-row": "carousel-row-ssUUv6",
    carouselRow: "carousel-row-ssUUv6"
  };
  let p = e => {
    let {
      enableArrowBorder: t,
      enableArrowShalldow: i,
      className: n,
      onClick: r,
      arrowSize: o = "small"
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s(h["arrow-container"], {
        [h.left]: i
      }, "arrow-container-left", h[o], {
        [h["no-border"]]: !t
      }),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: r,
        className: s(n, h["left-arrow"], h.arrow, h[o], "left-arrow", {
          [h["no-border"]]: !t
        }),
        children: reactJsxRuntimeCoreReexport.jsx(arrowLeftIconComponent.ArrowLeftIcon, {
          style: {
            transform: "scaleX(-1)"
          }
        })
      })
    });
  };
  let f = e => {
    let {
      enableArrowBorder: t,
      enableArrowShalldow: i,
      className: n,
      onClick: r,
      arrowSize: o = "small"
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s(h["arrow-container"], {
        [h.right]: i
      }, "arrow-container-right", h[o], {
        [h["no-border"]]: !t
      }),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: r,
        className: s(n, h["right-arrow"], h.arrow, h[o], "right-arrow", {
          [h["no-border"]]: !t
        }),
        children: reactJsxRuntimeCoreReexport.jsx(rtlChevronRightIcon.ChevronRightIcon, {})
      })
    });
  };
  let m = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      rows: i = 1,
      column: o,
      className: a,
      contentClassName: c,
      itemClassName: m,
      leftArrowClassName: g,
      rightArrowClassName: v,
      carouselRowClassName: _,
      children: w,
      enableArrowShalldow: S = true,
      scrollStep: b = 0.5,
      enableArrowBorder: R = true,
      onScroll: y,
      reportEvent: T,
      arrowSize: k = "small",
      customUpdateArrowVisible: E,
      onScrollRight: P
    } = e;
    let x = reactCoreLibraryReexport.useRef(null);
    let [O, C] = reactCoreLibraryReexport.useState(false);
    let [N, L] = reactCoreLibraryReexport.useState(false);
    let [I, A] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      itemsContainerRef: x
    }));
    if (!w) {
      return null;
    }
    let D = reactCoreLibraryReexport.Children.map(w, (e, t) => reactJsxRuntimeCoreReexport.jsx(d, {
      className: m,
      children: e
    }, t));
    let j = arrayChunk.arrayChunk(D, o ?? Math.ceil(((D == null ? undefined : D.length) || 0) / i));
    let $ = Array.from(Array(i).fill(null)).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
      className: s(h["carousel-row"], "carousel-row", _),
      children: j[t]
    }, t));
    let {
      run: M
    } = useDebouncedCallbackHook_1.useDebouncedCallback(e => T == null ? undefined : T.slideReport(e), {
      wait: 100,
      leading: false,
      trailing: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      var t;
      let i = () => {
        if (typeof E == "function") {
          let {
            shouldShowArrowLeft: e,
            shouldShowArrowRight: t
          } = E();
          C(e);
          L(t);
        } else {
          n();
        }
      };
      let n = () => {
        let s = Math.ceil((x == null ? undefined : x.current?.scrollLeft) ?? 0);
        let l = Math.abs(((x == null ? undefined : x.current?.scrollWidth) ?? 0) - ((x == null ? undefined : x.current?.clientWidth) ?? 0) - s) > 2;
        C(s > 0);
        L(l);
      };
      let r = () => {
        if (y != null) {
          y();
        }
        i();
        let n = Math.ceil((x == null ? undefined : x.current?.scrollLeft) ?? 0);
        let r = "left";
        if (n > I) {
          r = "right";
          if (P != null) {
            P();
          }
        }
        M(r);
        A(n);
      };
      i();
      if (x != null && (e = x.current) !== null && e !== undefined) {
        e.addEventListener("scroll", r);
      }
      if ((t = window) !== null && t !== undefined) {
        t.addEventListener("resize", i);
      }
      return () => {
        var e;
        var t;
        if (x != null && (e = x.current) !== null && e !== undefined) {
          e.removeEventListener("scroll", r);
        }
        if ((t = window) !== null && t !== undefined) {
          t.removeEventListener("resize", i);
        }
      };
    }, [w]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s(h.carousel, "carousel", a),
      children: [O && reactJsxRuntimeCoreReexport.jsx(p, {
        onClick: () => {
          var i;
          var n;
          if ((x == null ? undefined : x.current?.scrollLeft) !== undefined && (x == null ? undefined : x.current?.clientWidth)) {
            if ((i = (n = x.current).scrollTo) !== null && i !== undefined) {
              i.call(n, {
                left: Math.max(x.current.scrollLeft - x.current.clientWidth * b, 0),
                behavior: "smooth"
              });
            }
          }
        },
        enableArrowBorder: R,
        enableArrowShalldow: S,
        className: g,
        arrowSize: k
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: s(h["carousel-content"], "carousel-content", {
          [h.left]: O,
          [h.right]: N
        }, c),
        "data-left": O,
        "data-right": N,
        ref: x,
        children: $
      }), N && reactJsxRuntimeCoreReexport.jsx(f, {
        onClick: () => {
          var o;
          var s;
          let c = (x == null ? undefined : x.current?.clientWidth) ?? 0;
          if ((x == null ? undefined : x.current?.scrollLeft) !== undefined && c) {
            let e = ((x == null ? undefined : x.current?.scrollWidth) ?? 0) - ((x == null ? undefined : x.current?.clientWidth) ?? 0);
            if ((o = (s = x.current).scrollTo) !== null && o !== undefined) {
              o.call(s, {
                left: Math.min(x.current.scrollLeft + c * b, e),
                behavior: "smooth"
              });
            }
            if (P != null) {
              P();
            }
          }
        },
        enableArrowBorder: R,
        enableArrowShalldow: S,
        className: v,
        arrowSize: k
      })]
    });
  });
  require.d(exports, {
    Carousel: function () {
      return m;
    }
  });
}