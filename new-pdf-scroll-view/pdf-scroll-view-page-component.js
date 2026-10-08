// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'PdfScrollViewPage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 506905
         */
module.exports = function (module, exports, require) {
  var pdfThumbnailComponent = require("pdf-thumbnail-component") /*id: 826504*/;
  var pdfPageComponent = require("pdf-page-component") /*id: 75002*/;
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var scrollIntoViewWrapper = require("scroll-into-view-wrapper") /*id: 180637*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var pdfClipboardInteractionUtils = require("pdf-clipboard-interaction-utils") /*id: 904499*/;
  var throttledStringifyUtil = require("throttled-stringify-util") /*id: 677768*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var pdfSelectionUtils = require("pdf-selection-utils") /*id: 168631*/;
  let w = e => {
    let {
      enabled: t = true,
      containerRef: n,
      pageRef: r,
      page: a
    } = e;
    let [l, o] = reactCoreLibraryReexport.useState();
    let c = useLatestRef_1.useLatestRef(l);
    let u = reactCoreLibraryReexport.useRef();
    let d = () => {
      if (!r.current) {
        return;
      }
      let e = pdfSelectionUtils.getSelectionData({
        target: r.current,
        page: a
      });
      if (!deepEqualUtil_1.deepEqual(c.current, e)) {
        c.current = e;
        o(e);
      }
    };
    let h = () => {
      clearTimeout(u.current);
      u.current = throttledStringifyUtil.throttledStringify(d);
    };
    let p = () => {
      d();
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = n.current;
      if (e && t) {
        if ("ontouchend" in window) {
          e.addEventListener("selectionchange", h);
        }
        e.addEventListener("pointerup", h);
        e.addEventListener("keydown", h);
        e.addEventListener("keyup", h);
        e.addEventListener("resize", p);
        e.addEventListener("wheel", p);
        e.addEventListener("scroll", p);
        return () => {
          clearTimeout(u.current);
          e.removeEventListener("selectionchange", h);
          e.removeEventListener("pointerup", h);
          e.removeEventListener("resize", p);
          e.removeEventListener("wheel", p);
          e.removeEventListener("scroll", p);
          e.removeEventListener("keydown", h);
          e.removeEventListener("keyup", h);
        };
      }
    }, [t]);
    return {
      selection: l,
      selectionRef: c,
      refresh: d,
      clear: () => {
        c.current = undefined;
        o(undefined);
      }
    };
  };
  var pdfTranslateLoading = require("pdf-translate-loading") /*id: 914189*/;
  var selectionHoverToolbar = require("selection-hover-toolbar") /*id: 74626*/;
  var skeletonLoadingComponent = require("skeleton-loading-component") /*id: 437338*/;
  var spaceWrapperComponent = require("space-wrapper-component") /*id: 546179*/;
  var extractTextTooltipContainer = require("extract-text-tooltip-container") /*id: 17207*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var reactContextProviderHook = require("react-context-provider-hook") /*id: 719110*/;
  var R = {
    container: "container-hpwQKL",
    rounded: "rounded-iKglqn",
    "page-wrapper": "page-wrapper-bneSBt",
    page: "page-opanod",
    highlight: "highlight-pEPSAU",
    border: "border-TF4j77",
    "image-preview": "image-preview-BBB0Hn",
    overlay: "overlay-WlHZF8",
    "popover-anchor": "popover-anchor-CvtU3g"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let $ = e => {
    let {
      className: t,
      style: n,
      children: u,
      toolbarBoundary: v,
      pageNumber: x,
      highlights: b,
      aspectRatio: $,
      overlays: k,
      scrollInView: P = false,
      forceLoading: Z = false,
      isThumbnail: M = false,
      rounded: L = true,
      startCropping: F,
      onEnter: I,
      onLeave: A,
      onEnterOrLeave: W,
      onSelectionChange: O,
      onPreviewImage: B,
      getPopupContainer: z,
      onPdfLoaded: H,
      pdfLanguageNativeName: D,
      popoverToolbarConfig: V = {},
      ...X
    } = e;
    let {
      blocks: U,
      toolbarActions: q,
      enableAskAIWithImage: Q
    } = V;
    let Y = translationContextProvider.useTranslation();
    let G = reactContextProviderHook.useContextValue();
    let J = reactCoreLibraryReexport.useRef(null);
    let K = reactCoreLibraryReexport.useRef(null);
    let ee = reactCoreLibraryReexport.useRef();
    let [et, en] = reactCoreLibraryReexport.useState();
    let {
      selection: er,
      selectionRef: ea,
      refresh: el,
      clear: ei
    } = w({
      containerRef: J,
      pageRef: K,
      enabled: !!O && !F,
      page: x
    });
    let eo = reactCoreLibraryReexport.useMemo(() => k == null ? undefined : k.some(e => e.loading), [k]);
    let {
      width: es
    } = resizeObserverHooks.useResizeObserver({
      ref: J
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (O != null) {
        O(er);
      }
    }, [er]);
    reactCoreLibraryReexport.useEffect(() => {
      el();
      en(undefined);
    }, [es]);
    reactCoreLibraryReexport.useEffect(() => {
      en(undefined);
    }, [er]);
    reactCoreLibraryReexport.useEffect(() => {
      if (F) {
        en(undefined);
        ei();
      }
    }, [F]);
    let ec = e => {
      let {
        area: n,
        showBorder: r = false,
        scrollIntoView: a = false,
        children: l
      } = e;
      let {
        onViewImage: i
      } = (et == null ? undefined : et.toolbarConfig) ?? {};
      return reactJsxRuntimeCoreReexport.jsx(scrollIntoViewWrapper.ScrollIntoViewWrap, {
        enabled: a,
        className: d(R.highlight, {
          [R.border]: r,
          [R["image-preview"]]: !!i
        }),
        style: {
          left: `${n[0] * 100}%`,
          top: `${n[1] * 100}%`,
          width: `${(n[2] - n[0]) * 100}%`,
          height: `${(n[3] - n[1]) * 100}%`
        },
        onClick: () => {
          let e = i == null ? undefined : i();
          if (B && e) {
            B(e);
          }
        },
        options: {
          block: "center"
        },
        children: l
      });
    };
    let eu = e => {
      let {
        area: t,
        content: n,
        overlayClassName: r
      } = e;
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: d(R.overlay, r),
        style: {
          left: `${t[0] * 100}%`,
          top: `${t[1] * 100}%`,
          width: `${(t[2] - t[0]) * 100}%`,
          height: `${(t[3] - t[1]) * 100}%`
        },
        children: n
      });
    };
    let [ed, eh] = reactCoreLibraryReexport.useState();
    let ep = reactCoreLibraryReexport.useRef(null);
    let ef = function (e = false) {
      if (F || !et) {
        return;
      }
      let {
        x: t,
        y: n,
        width: r,
        height: a,
        toolbarConfig: l,
        highlightConfig: i
      } = et;
      if (!i) {
        return;
      }
      if (!l) {
        if (i) {
          return ec(i);
        } else {
          return undefined;
        }
      }
      let {
        onCopy: o,
        onExplain: s,
        onExtract: c,
        onSearch: u,
        onTranslate: d,
        onCopyImage: h,
        onViewImage: p,
        onCopyExtractedText: f,
        onAskAI: m
      } = l;
      let x = !!c && !!ed && !!f;
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: ec({
          ...i,
          scrollIntoView: e,
          children: reactJsxRuntimeCoreReexport.jsx(selectionHoverToolbar.SelectionHoverToolbar, {
            visible: true,
            customContent: c && ed && f ? reactJsxRuntimeCoreReexport.jsx(extractTextTooltipContainer.ExtractTextTooltip, {
              ref: ep,
              extractedText: ed,
              onClickCopyButton: () => {
                f();
                en(undefined);
                eh(undefined);
                samanthaToastFactory.toastInstance.success(Y("toast_copy_success"));
              }
            }) : null,
            pdfLanguageNativeName: D,
            popoverContentRef: ep,
            showArrow: x,
            getPopupContainer: z,
            boundary: v,
            onVisibleChange: e => {
              if (!e) {
                en(undefined);
                eh(undefined);
              }
            },
            onClickOutSide: () => {
              eh(undefined);
            },
            onCopy: o && (() => {
              var e;
              var t;
              o();
              samanthaToastFactory.toastInstance.success({
                content: Y("toast_copy_success"),
                showClose: false
              });
              en(undefined);
              if ((e = G.onClickPopoverToolbar) !== null && e !== undefined) {
                e.call(G, {
                  button: "copy"
                });
              }
              if ((t = G.onCopy) !== null && t !== undefined) {
                t.call(G);
              }
            }),
            onExplain: s && (() => {
              var e;
              s();
              en(undefined);
              if ((e = G.onClickPopoverToolbar) !== null && e !== undefined) {
                e.call(G, {
                  button: "explain"
                });
              }
            }),
            onExtract: c && (() => {
              var e;
              let t = c();
              if (t) {
                eh(t);
              }
              if ((e = G.onClickPopoverToolbar) !== null && e !== undefined) {
                e.call(G, {
                  button: "extract"
                });
              }
            }),
            onCopyImage: h && (async () => {
              var e;
              var t;
              await h();
              samanthaToastFactory.toastInstance.success({
                content: Y("toast_copy_success"),
                showClose: false
              });
              en(undefined);
              if ((e = G.onClickPopoverToolbar) !== null && e !== undefined) {
                e.call(G, {
                  button: "copy"
                });
              }
              if ((t = G.onCopy) !== null && t !== undefined) {
                t.call(G);
              }
            }),
            onViewImage: p && (() => {
              let e = p();
              if (e) {
                if (B != null) {
                  B(e);
                }
              }
            }),
            onAskAI: m && (() => {
              var e;
              m();
              en(undefined);
              if ((e = G.onClickPopoverToolbar) !== null && e !== undefined) {
                e.call(G, {
                  button: "ask_ai"
                });
              }
            }),
            onSearch: u && (() => {
              var e;
              u();
              en(undefined);
              if ((e = G.onClickPopoverToolbar) !== null && e !== undefined) {
                e.call(G, {
                  button: "search"
                });
              }
            }),
            onTranslate: d && function () {
              var e;
              var t = arguments.length;
              var n = Array(t);
              var r = 0;
              for (; r < t; r++) {
                n[r] = arguments[r];
              }
              d(...n);
              en(undefined);
              if ((e = G.onClickPopoverToolbar) !== null && e !== undefined) {
                e.call(G, {
                  button: "translate"
                });
              }
            },
            onMouseMove: e => {
              e.stopPropagation();
              eg.cancel();
            },
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: R["popover-anchor"]
            })
          }, JSON.stringify([t, n, r, a, x]))
        })
      });
    };
    let eg = reactCoreLibraryReexport.useCallback(debounceUtilWrapper.createDebounce(e => {
      let {
        clientX: t,
        clientY: n
      } = e;
      if (ea == null ? undefined : ea.current) {
        en(undefined);
        return;
      }
      if (!K.current) {
        return;
      }
      let {
        left: r,
        top: a,
        width: l,
        height: i
      } = K.current.getBoundingClientRect();
      let o = t - r;
      let c = n - a;
      if (ee.current) {
        let {
          x: e,
          y: t
        } = ee.current;
        if (Math.abs(o - e) > 4 || Math.abs(c - t) > 4) {
          el();
        }
      }
      if (!(U == null ? undefined : U.length) || er) {
        return;
      }
      let u = {
        x: o,
        y: c,
        width: l,
        height: i,
        page: x,
        eventType: "hover"
      };
      let d = pdfClipboardInteractionUtils.getToolbarConfig({
        blocks: U,
        event: u,
        actions: q,
        enableAskAIWithImage: Q
      });
      let h = d == null ? undefined : d.highlightConfig;
      en(e => deepEqualUtil_1.deepEqual(e == null ? undefined : e.highlightConfig, h) ? e : d ? {
        ...d,
        ...u
      } : undefined);
    }, 300, {
      leading: false,
      trailing: true
    }), [U, er, K.current]);
    let em = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (H != null) {
        H(x);
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(scrollIntoViewWrapper.ScrollIntoViewWrap, {
      ref: J,
      enabled: P,
      children: e => reactJsxRuntimeCoreReexport.jsx(spaceWrapperComponent.SpaceWrapper, {
        className: t,
        containerClassName: d(R.container, {
          [R.rounded]: L
        }),
        style: n,
        ref: e,
        scale: $ ? 1 / $ : undefined,
        children: reactJsxRuntimeCoreReexport.jsx(reactIntersectionObserver.InView, {
          "data-testid": "container_inner_page",
          className: R["page-wrapper"],
          onChange: e => {
            try {
              if (e) {
                if (I != null) {
                  I();
                }
              } else if (A != null) {
                A();
              }
            } finally {
              if (W != null) {
                W(e);
              }
            }
          },
          onMouseDown: e => {
            let {
              clientX: t,
              clientY: n,
              target: r
            } = e;
            if (!U || er || !K.current || !(r instanceof HTMLElement) || !K.current.contains(r)) {
              return;
            }
            let {
              left: a,
              top: l
            } = K.current.getBoundingClientRect();
            ee.current = {
              x: t - a,
              y: n - l
            };
          },
          onMouseUp: () => {
            ee.current = undefined;
          },
          onMouseMove: eg,
          onMouseLeave: eg,
          children: Z ? reactJsxRuntimeCoreReexport.jsx(skeletonLoadingComponent.SkeletonLoading, {
            type: "loading"
          }) : M ? reactJsxRuntimeCoreReexport.jsx(pdfThumbnailComponent.PdfThumbnail, {
            className: R.page,
            pageNumber: x,
            width: es,
            inputRef: K,
            onItemClick: emptyExportFunction.emptyFunction,
            ...X
          }) : reactJsxRuntimeCoreReexport.jsxs(pdfPageComponent.PdfPage, {
            className: R.page,
            pageNumber: x,
            width: es,
            loading: null,
            inputRef: K,
            onRenderSuccess: em,
            ...X,
            children: [eo ? reactJsxRuntimeCoreReexport.jsx(pdfTranslateLoading.PdfTranslateLoading, {}) : null, k == null ? undefined : k.map((e, t) => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
              children: eu(e)
            }, t)), b == null ? undefined : b.map((e, t) => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
              children: ec(e)
            }, t)), ef(), u]
          })
        })
      })
    });
  };
  require.d(exports, {
    PdfScrollViewPage: function () {
      return $;
    }
  });
}