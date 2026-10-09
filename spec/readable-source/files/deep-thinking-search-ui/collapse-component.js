// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'Collapse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55821.62d46e89.js
         * chunkId: 55821
         * moduleId: 542405
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var r = {
    "collapse-wrapper": "collapse-wrapper-K8DEfQ",
    collapseWrapper: "collapse-wrapper-K8DEfQ",
    "collapse-wrapper-in-update": "collapse-wrapper-in-update-qpiNdm",
    collapseWrapperInUpdate: "collapse-wrapper-in-update-qpiNdm",
    "collapse-wrapper-border": "collapse-wrapper-border-Rkwhvz",
    collapseWrapperBorder: "collapse-wrapper-border-Rkwhvz",
    "collapse-button-mask-top": "collapse-button-mask-top-STZvyT",
    collapseButtonMaskTop: "collapse-button-mask-top-STZvyT",
    "collapse-collapse-button": "collapse-collapse-button-BLR92e",
    collapseCollapseButton: "collapse-collapse-button-BLR92e",
    "collapse-collapse-button-title": "collapse-collapse-button-title-EDPUHN",
    collapseCollapseButtonTitle: "collapse-collapse-button-title-EDPUHN",
    "collapse-button-suffix": "collapse-button-suffix-czkI3o",
    collapseButtonSuffix: "collapse-button-suffix-czkI3o",
    "collapse-button-suffix-hover": "collapse-button-suffix-hover-rEz4Ll",
    collapseButtonSuffixHover: "collapse-button-suffix-hover-rEz4Ll",
    "collapse-button-suffix-icon": "collapse-button-suffix-icon-fYfPHX",
    collapseButtonSuffixIcon: "collapse-button-suffix-icon-fYfPHX",
    "collapse-quota-block": "collapse-quota-block-XD7BD3",
    collapseQuotaBlock: "collapse-quota-block-XD7BD3",
    "collapse-quota-block-before": "collapse-quota-block-before-FDypjs",
    collapseQuotaBlockBefore: "collapse-quota-block-before-FDypjs",
    "collapse-quota-block-inner": "collapse-quota-block-inner-iyafAF",
    collapseQuotaBlockInner: "collapse-quota-block-inner-iyafAF",
    "collapse-quota-block-inner-default-expand": "collapse-quota-block-inner-default-expand-bW3QTA",
    collapseQuotaBlockInnerDefaultExpand: "collapse-quota-block-inner-default-expand-bW3QTA",
    "collapse-quota-block-inner-default-collapsed": "collapse-quota-block-inner-default-collapsed-YbXGnc",
    collapseQuotaBlockInnerDefaultCollapsed: "collapse-quota-block-inner-default-collapsed-YbXGnc",
    "scroll-content": "scroll-content-mK_B2t",
    scrollContent: "scroll-content-mK_B2t",
    "scroll-view": "scroll-view-aeO5BC",
    scrollView: "scroll-view-aeO5BC",
    "scroll-view-in-update": "scroll-view-in-update-l9wI2k",
    scrollViewInUpdate: "scroll-view-in-update-l9wI2k",
    "half-card": "half-card-ZemtzO",
    halfCard: "half-card-ZemtzO",
    "half-card-mask": "half-card-mask-gbwBRA",
    halfCardMask: "half-card-mask-gbwBRA",
    stick: "stick-Cc2Lic",
    "stick-divide": "stick-divide-NH6nA6",
    stickDivide: "stick-divide-NH6nA6",
    "stick-bg": "stick-bg-VqJ0xq",
    stickBg: "stick-bg-VqJ0xq",
    "collapse-footer": "collapse-footer-cs8vQW",
    collapseFooter: "collapse-footer-cs8vQW",
    "collapse-footer-icon": "collapse-footer-icon-bj9fLU",
    collapseFooterIcon: "collapse-footer-icon-bj9fLU",
    "collapse-footer-title": "collapse-footer-title-GiuELs",
    collapseFooterTitle: "collapse-footer-title-GiuELs",
    container: "container-ZdJroW",
    input: "input-zrJxn6",
    flash: "flash-ybn5pe",
    "skeleton-loading": "skeleton-loading-qtj8oV",
    skeletonLoading: "skeleton-loading-qtj8oV"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = () => reactJsxRuntimeCoreReexport.jsxs("div", {
    className: "flex flex-col gap-8 flex-1 mt-12",
    children: [reactJsxRuntimeCoreReexport.jsx("div", {
      className: o(r.input, r.flash, "w-full h-16")
    }), reactJsxRuntimeCoreReexport.jsx("div", {
      className: o(r.input, r.flash, "w-2/3 h-16")
    })]
  });
  var rtlFileDocumentIcon = require("rtl-file-document-icon") /*id: 900958*/;
  var rtlExitIcon = require("rtl-exit-icon") /*id: 569004*/;
  require("tooltip-component-exports") /*id: 341865*/;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var m = dayjsDateLibrary;
  let h = e => {
    let t;
    let {
      startTime: l = 0,
      duration: i = 1713307246000,
      isFinished: a
    } = e;
    let [o, s] = reactCoreLibraryReexport.useState("00:00");
    let r = 0;
    let u = l;
    let d = e => {
      let t = Math.floor(e % 3600000 / 60000);
      let l = Math.floor(e % 60000 / 1000);
      return `${String(t).padStart(2, "0")}:${String(l).padStart(2, "0")}`;
    };
    let g = () => {
      r = Date.now() - u;
      t = setInterval(() => {
        s(d(u = Date.now() - r));
      }, 10);
    };
    reactCoreLibraryReexport.useMemo(() => {
      if (a && t) {
        clearInterval(t);
      }
    }, [a]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!a) {
        g();
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("span", {
      className: "text-s-color-text-quaternary s-font-xs",
      children: a ? m(i).format("mm:ss") : o
    });
  };
  let f = e => {
    let {
      children: t,
      className: l,
      style: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("light-AFWuUT", l),
      style: i,
      children: t
    });
  };
  let M = e => {
    let {
      text: t,
      theme: l,
      isFinished: i,
      titleClassName: n
    } = e;
    let a = l === "default" && !i;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: a ? reactJsxRuntimeCoreReexport.jsx(f, {
        className: "py-10",
        children: t
      }) : reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "z-10 flex flex-col items-start justify-center gap-2 py-10",
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: n || r["collapse-collapse-button-title"],
          children: t
        }), l === "deep-research" && reactJsxRuntimeCoreReexport.jsx(h, {
          isFinished: i
        })]
      })
    });
  };
  let N = rtlFileDocumentIcon.FileDocumentIcon;
  let v = rtlExitIcon.RtlExitIcon;
  let _ = e => {
    let {
      isExpand: t,
      onClick: l,
      isFinished: n,
      text: a,
      wrapperInView: s,
      useDivider: u,
      titleClassName: d,
      theme: g = "default",
      isCanvasMode: p = false,
      isSelectMode: m = false,
      tooltip: h
    } = e;
    let [f, _] = reactIntersectionObserver_1.useInView({
      triggerOnce: false,
      initialInView: false,
      threshold: 1
    });
    let x = s && !m;
    let j = s && u && _;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: f,
        className: o(r["collapse-collapse-button"], {
          [r.stick]: x,
          [r["stick-divide"]]: j,
          [r["stick-bg"]]: x,
          "after:!bg-s-color-bg-secondary": s && p
        }),
        "data-testid": "collapse_button",
        onClick: l,
        children: [reactJsxRuntimeCoreReexport.jsx(M, {
          text: a,
          theme: g,
          isFinished: n,
          titleClassName: d
        }), function (e = false) {
          let t = r["collapse-button-suffix-icon"];
          return reactJsxRuntimeCoreReexport.jsx("div", {
            className: o(r["collapse-button-suffix"], {
              [r["collapse-button-suffix-hover"]]: e
            }, false),
            children: reactJsxRuntimeCoreReexport.jsx(e ? N : v, {
              className: t
            })
          });
        }(t)]
      })
    });
  };
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlInfoIcon = require("rtl-info-icon") /*id: 853560*/;
  let A = e => {
    let {
      title: t,
      btnTitle: l,
      onClick: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r["collapse-footer"],
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex gap-4 items-center flex-1",
        children: [reactJsxRuntimeCoreReexport.jsx(rtlInfoIcon.RtlInfoIcon, {
          className: r["collapse-footer-icon"]
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: r["collapse-footer-title"],
          children: t
        })]
      }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        onClick: i,
        children: l
      })]
    });
  };
  var reactTransitionComponent = require("react-transition-component") /*id: 888866*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  let D = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      isFinished: l = true,
      isExpand: i = false,
      expandStatusInUpdate: a = false,
      children: s,
      defaultExpand: u
    } = e;
    let [d, g] = reactCoreLibraryReexport.useState(false);
    let [p, m] = reactCoreLibraryReexport.useState(!l * 216);
    let [h, f] = reactCoreLibraryReexport.useState(0);
    let [M, N] = reactCoreLibraryReexport.useState(false);
    let v = reactCoreLibraryReexport.useRef(null);
    let _ = reactCoreLibraryReexport.useRef(null);
    let x = !d && !l && M;
    let j = () => {
      var e;
      let t = v == null ? undefined : (e = v.current) === null || e === undefined ? undefined : e.getBoundingClientRect();
      if (t == null ? undefined : t.bottom) {
        f(t.top < 0 ? t.bottom - 90 : t.height);
      }
    };
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      updateScrollHeight: j
    }), []);
    reactCoreLibraryReexport.useMemo(() => {
      if (l) {
        g(false);
        m(0);
      }
    }, [l]);
    reactCoreLibraryReexport.useMemo(() => {
      if (!l) {
        m(!!a * 216);
        g(!a);
        if (a) {
          f(216);
        }
      }
    }, [a]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!d && !l) {
        var e;
        if (_ != null && (e = _.current) !== null && e !== undefined) {
          e.scrollToBottom();
        }
      }
    }, [d]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(r["scroll-content"], {
        [r["half-card"]]: !l,
        [r["half-card-mask"]]: x
      }),
      "data-showed": i ? "show" : "disappear",
      children: [reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
        ref: _,
        showScrollbar: !l,
        onScroll: () => {
          if (!M) {
            N(true);
          }
        },
        bottomAttaching: true,
        className: o(r["scroll-view"], {
          [r["scroll-view-in-update"]]: !l && !d
        }),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: o(r["collapse-quota-block"], {
            [r["collapse-quota-block-before"]]: !l && !d
          }),
          "data-testid": "collapse_quota_block",
          ref: v,
          children: reactJsxRuntimeCoreReexport.jsx(reactTransitionComponent.Transition, {
            in: i || d,
            addEndListener: (e, t) => {
              e.addEventListener("transitionend", t, false);
            },
            onEnter: e => {
              e.style.height = `${p}`;
              e.style.display = "block";
            },
            onEntering: e => {
              e.style.height = "fit-content";
            },
            onEntered: e => {
              f(e.offsetHeight);
              e.style.height = "auto";
            },
            onExit: e => {
              e.style.display = "block";
              e.style.height = `${h > 0 ? h : e.offsetHeight}px`;
              e.offsetHeight;
            },
            onExiting: e => {
              e.style.height = `${p}`;
            },
            onExited: e => {
              e.style.display = "none";
              e.style.height = "auto";
            },
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: o([r["collapse-quota-block-inner"], u ? r["collapse-quota-block-inner-default-expand"] : r["collapse-quota-block-inner-default-collapsed"]]),
              "data-testid": i ? "think_block_expand" : "think_block_collapse",
              children: s
            })
          })
        })
      }), x && reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          position: "absolute",
          height: "35px",
          bottom: 0,
          right: 1,
          width: "100%",
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, var(--s-color-bg-primary) 35px, rgba(0, 0, 0, 1) 100%)"
        }
      })]
    });
  });
  let k = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      children: l,
      isExpand: i,
      isSelectMode: a,
      classname: u
    } = e;
    let [d, g] = reactCoreLibraryReexport.useState(false);
    let [p, m] = reactCoreLibraryReexport.useState(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        if (p) {
          clearTimeout(p);
        }
        g(true);
      } else {
        m(setTimeout(() => {
          g(false);
        }, 500));
      }
      loggerServiceCore.defaultLogger.persist.success({
        eventName: `on_deep_thinking_collapse_${i ? "1" : "0"}`
      });
    }, [i]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: t,
      className: o(r["collapse-wrapper"], u, {
        [r["collapse-wrapper-border"]]: i && !a,
        "!bg-s-color-bg-body !cursor-default": d
      }),
      children: l
    });
  });
  let w = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      defaultExpand: l = false,
      isSelectMode: a = false,
      isFinished: s = false,
      isCanvasMode: d = false,
      useDivider: g = false,
      loading: p = false,
      collapseButtonText: m = "",
      theme: h = "default",
      showFooter: f = false,
      wrapperStyles: M = {},
      collapseWrapperCls: N,
      footerTitle: v,
      footerBtnTitle: x,
      onFooterBtnClick: j,
      collapseheaderTitleCls: I,
      children: y,
      onCollapseButtonClick: w,
      tooltip: S
    } = e;
    let [b, T] = reactCoreLibraryReexport.useState(l);
    let [z, L] = reactCoreLibraryReexport.useState(false);
    let O = reactCoreLibraryReexport.useRef(null);
    let E = reactCoreLibraryReexport.useRef(null);
    let C = s ? b : z;
    let R = f && C;
    let [B, U] = reactIntersectionObserver_1.useInView({
      triggerOnce: false,
      initialInView: false
    });
    let [$, Q] = reactIntersectionObserver_1.useInView({
      triggerOnce: false,
      initialInView: false
    });
    let W = reactCoreLibraryReexport.useCallback(e => {
      O.current = e;
      $(e);
    }, [$]);
    let Z = () => {
      var e;
      var t;
      let l = O == null ? undefined : (e = O.current) === null || e === undefined ? undefined : e.getBoundingClientRect();
      if ((l == null ? undefined : l.top) && l.top < 56) {
        if (O != null && (t = O.current) !== null && t !== undefined) {
          t.scrollIntoView();
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (s && !z) {
        T(false);
      }
    }, [s]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: W,
      className: o(r.container, r[`theme-${h}`], {
        "!transition-none": b
      }, "z-0 isolate relative"),
      style: {
        ...M
      },
      "data-expand": b ? "true" : "false",
      children: reactJsxRuntimeCoreReexport.jsxs(k, {
        ref: t,
        isExpand: b,
        isSelectMode: a,
        classname: N,
        children: [reactJsxRuntimeCoreReexport.jsx(_, {
          isCanvasMode: d,
          isSelectMode: a,
          isFinished: s,
          useDivider: g,
          theme: h,
          isExpand: C,
          text: m,
          titleClassName: I,
          wrapperInView: (Q || U) && b,
          onClick: () => {
            if (!s) {
              L(!z);
              return;
            }
            if (b) {
              var e;
              if (E != null && (e = E.current) !== null && e !== undefined) {
                e.updateScrollHeight();
              }
              Z();
            }
            T(!b);
            if (w != null) {
              w(!b);
            }
            if (b) {
              Z();
            }
          },
          tooltip: S
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          ref: B,
          children: reactJsxRuntimeCoreReexport.jsx(D, {
            ref: E,
            isExpand: b,
            expandStatusInUpdate: !z,
            defaultExpand: l,
            isFinished: s,
            children: p ? reactJsxRuntimeCoreReexport.jsx(u, {}) : y
          })
        }), R && reactJsxRuntimeCoreReexport.jsx(A, {
          title: v,
          btnTitle: x,
          onClick: j
        })]
      })
    });
  });
  require.d(exports, {
    Collapse: function () {
      return w;
    }
  });
}