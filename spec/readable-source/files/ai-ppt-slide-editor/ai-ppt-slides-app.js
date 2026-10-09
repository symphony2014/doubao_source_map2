// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'slideSceneTypes'
// - Renamed export 'Z' to 'AiPptSlidesApp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 4760
         */
module.exports = function (module, exports, require) {
  let r;
  var n;
  var a;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var i18nLanguageStorageUtils = require("i18n-language-storage-utils") /*id: 92438*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var themeDetectionUtility = require("theme-detection-utility") /*id: 452866*/;
  var ccmSlidesPathConstants = require("ccm-slides-path-constants") /*id: 857641*/;
  let f = e => {
    let {
      selectBarConfig: t,
      docToken: i,
      version: r
    } = e;
    let n = reactCoreLibraryReexport.useMemo(() => {
      if (t) {
        return {
          imageReplace: {
            availableSubModeList: t == null ? undefined : t.imageReplace?.availableSubModeList,
            enabled: true,
            enabledSug: true
          }
        };
      } else {
        return null;
      }
    }, [t]);
    let a = reactCoreLibraryReexport.useMemo(() => {
      let e = {
        token: i,
        version: r,
        lark: userAgentDeviceDetector.isMobileCached() ? "1" : undefined,
        lang: i18nLanguageStorageUtils.getUserLanguage(),
        theme: themeDetectionUtility.getCurrentTheme(),
        select_bar: n ? encodeURIComponent(JSON.stringify(n)) : undefined
      };
      let t = new URLSearchParams();
      Object.keys(e).forEach(i => {
        let r = e[i];
        if (isStringTypeCheck.isString(r) || isBooleanUtil.isBoolean(r) || isNumberUtil.isNumber(r)) {
          t.append(i, String(r));
        }
      });
      return t;
    }, [i, r, n]);
    return `${ccmSlidesPathConstants.slidesPath}?${a.toString()}`;
  };
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var skeletonLoaderExport = require("skeleton-loader-export") /*id: 766114*/;
  var arrowLeftIcon_1 = require("arrow-left-icon_1") /*id: 490368*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = () => {
    let e = reactCoreLibraryReexport.useRef(null);
    let {
      width: t
    } = resizeObserverHooks.useResizeObserverEx({
      ref: e
    });
    let [i, r] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(t)) {
        r(206 / 366 * t);
      }
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `
        absolute top-0 left-0 flex-column flex size-full gap-12 overflow-hidden
        bg-s-color-bg-body p-12 select-none
      `,
      ref: e,
      children: Array(10).fill(0).map((e, t) => reactJsxRuntimeCoreReexport.jsx(skeletonLoaderExport.SkeletonLoader, {
        loading: true,
        active: true,
        className: "w-full",
        placeholder: reactJsxRuntimeCoreReexport.jsx(skeletonLoaderExport.SkeletonLoader, {
          style: {
            width: "100%",
            height: i,
            borderRadius: 4
          }
        })
      }, t))
    });
  };
  let y = () => {
    let e = reactCoreLibraryReexport.useRef(null);
    let [t, i] = reactCoreLibraryReexport.useState({
      width: 0,
      height: 0
    });
    let {
      height: r,
      width: n
    } = resizeObserverHooks.useResizeObserverEx({
      ref: e
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (isUndefinedCheck.isUndefined(n) || isUndefinedCheck.isUndefined(r)) {
        return;
      }
      let e = 960 / 540;
      let t = r - 120;
      let a = t;
      let l = Math.round(960 / 540 * t);
      if (l > n) {
        l = n;
      }
      a = Math.round(l / e);
      i({
        width: l,
        height: a
      });
    }, [r, n]);
    if (userAgentDeviceDetector.isMobileCached()) {
      return reactJsxRuntimeCoreReexport.jsx(S, {});
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o("absolute top-0 left-0 flex size-full select-none"),
        "data-testid": "ai-ppt-loading-skeleton",
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `
          h-[100%] w-196 border-r-[0.5px] border-dbx-line-7 bg-dbx-bg-float
        `,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex h-48 items-center justify-end pr-13",
            children: reactJsxRuntimeCoreReexport.jsx(arrowLeftIcon_1.ArrowLeftIcon, {
              width: 14,
              height: 14,
              color: "#8F959E"
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex flex-col gap-16 pl-32",
            children: Array(10).fill(0).map((e, t) => reactJsxRuntimeCoreReexport.jsx(skeletonLoaderExport.SkeletonLoader, {
              loading: true,
              active: true,
              placeholder: reactJsxRuntimeCoreReexport.jsx(skeletonLoaderExport.SkeletonLoader, {
                style: {
                  width: 146,
                  height: 83,
                  borderRadius: 6
                }
              })
            }, t))
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `
          flex-column flex h-[100%] min-w-0 flex-1 gap-25 bg-s-color-bg-base
          pr-20 pl-20
        `,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "flex h-[100%] w-[100%] flex-1 items-center justify-center",
            ref: e,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: o("skeleton-_8Fo1l", "rounded-[12px] bg-s-color-bg-body"),
              style: {
                height: t.height,
                width: t.width
              }
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "h-60 w-[100%] rounded-t-[8px] bg-s-color-bg-body"
          })]
        })]
      });
    }
  };
  var accessStatusConstants = require("access-status-constants") /*id: 76876*/;
  var selectionStoreHook = require("selection-store-hook") /*id: 977019*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  let $ = e => {
    let {
      contentHeight: t = 0,
      contentWidth: i = 0,
      selectionBounds: r,
      getPopupContainer: n
    } = e;
    let {
      selection: a
    } = selectionStoreHook.useSelectionStore();
    return reactCoreLibraryReexport.useMemo(() => {
      let {
        x: e,
        y: l,
        width: s,
        height: o
      } = r;
      let d = (a == null ? undefined : a.slidesContainerBounds) || n().getBoundingClientRect();
      let c = n().clientWidth - i - 24;
      let u = Math.round(Math.min(Math.max(e + s / 2 - i / 2, d.x + 24), c));
      let m = d.y + d.height - t;
      let g = l - 40 - 12 > d.y;
      return {
        left: u,
        top: Math.round(g ? l - t - 12 : Math.min(m, l + o + 12)),
        isSelectBarOnTop: g
      };
    }, [r, t, i, n, a]);
  };
  let j = function (e, t, i = "click", r) {
    let n = reactCoreLibraryReexport.useCallback(i => {
      if (e.length) {
        if (!e.some(e => {
          var t;
          let r = typeof e == "function" ? e() : e;
          return !!r && (!!r.contains(i.target) || !!((t = i.composedPath) === null || t === undefined ? undefined : t.call(i).includes(r)));
        })) {
          t(i);
        }
      }
    }, [t, e]);
    reactCoreLibraryReexport.useEffect(() => {
      document.addEventListener(i, n, r);
      return () => {
        document.removeEventListener(i, n, r);
      };
    }, [i, r, n]);
  };
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var semiTextareaComponent = require("semi-textarea-component") /*id: 252810*/;
  var rtlBackArrowIcon = require("rtl-back-arrow-icon") /*id: 176810*/;
  let N = e => {
    let {
      actionContainerRef: t,
      containerRef: i,
      placeholder: r = "",
      inputMeasureElementClassName: n,
      isColumnLayout: a = false,
      measureOpt: s
    } = e;
    let [o, d] = reactCoreLibraryReexport.useState(false);
    let c = reactCoreLibraryReexport.useRef(null);
    let [u, m] = reactCoreLibraryReexport.useState(null);
    let {
      width: g
    } = resizeObserverHooks.useResizeObserverEx({
      ref: i
    });
    let h = reactCoreLibraryReexport.useCallback(() => {
      if (!i.current || !t.current) {
        return null;
      }
      let e = i.current.offsetWidth;
      let r = t.current.offsetWidth;
      let {
        borderWidth: n = 0,
        padding: a = 0,
        gap: l = 0
      } = s || {};
      return e - r - n * 2 - a * 2 - l;
    }, [s]);
    let p = reactJsxRuntimeCoreReexport.jsx("span", {
      className: n,
      ref: c,
      children: r
    });
    let f = reactCoreLibraryReexport.useCallback(e => {
      if (c.current && !a && c.current) {
        c.current.innerText = e || r;
        d(!!u && !!(c.current.offsetWidth >= u));
      }
    }, [r, u, a]);
    reactCoreLibraryReexport.useEffect(() => {
      if (a) {
        return;
      }
      let e = h();
      m(e);
      d(!!c.current && !!e && !!(c.current.offsetWidth >= e));
    }, [g, a]);
    return {
      inputContentWidth: u,
      inputMeasureElement: p,
      onInputChange: f,
      isInputWrap: o
    };
  };
  let I = e => {
    let {
      placeholder: t,
      maxRows: i = 4,
      autoFocus: r = true,
      onValueChange: n,
      onSubmit: a
    } = e;
    let s = reactCoreLibraryReexport.useRef(null);
    let d = reactCoreLibraryReexport.useRef(null);
    let c = reactCoreLibraryReexport.useRef(null);
    let [u, m] = reactCoreLibraryReexport.useState("");
    let {
      inputMeasureElement: g,
      isInputWrap: h,
      onInputChange: p
    } = N({
      placeholder: t,
      containerRef: d,
      actionContainerRef: c,
      inputMeasureElementClassName: "textMeasure-Dj6a6B",
      measureOpt: {
        borderWidth: 1,
        padding: 14,
        gap: 8
      }
    });
    let f = e => {
      m("");
      if (a != null) {
        a(e);
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o("container-AWMHkb", {
        "isInputWrap-L4eXgX": h
      }),
      ref: d,
      children: [g, reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
        ref: s,
        autoFocus: r,
        className: "textarea-PK7rek",
        placeholder: t,
        rows: 1,
        value: u,
        onChange: e => {
          p(e);
          m(e);
          if (n != null) {
            n(e);
          }
        },
        onEnterPress: e => {
          if (!e.shiftKey) {
            e.preventDefault();
            if (u) {
              if (f != null) {
                f(u);
              }
            }
          }
        },
        autosize: {
          maxRows: i
        }
      }), reactJsxRuntimeCoreReexport.jsx("button", {
        className: o("btn-KNvERp", {
          "disabled-Yr3DbM": !u
        }),
        ref: c,
        onClick: () => u && (f == null ? undefined : f(u)),
        children: reactJsxRuntimeCoreReexport.jsx(rtlBackArrowIcon.rtlBackArrowIcon, {})
      })]
    });
  };
  let M = e => {
    let {
      sendIntelligentEditMessage: t,
      t: i
    } = e;
    let {
      reset: r
    } = selectionStoreHook.useSelectionStore();
    let n = async e => {
      try {
        await t({
          inputValue: e
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "[AI-PPT] intelligent_edit",
          error: e
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(I, {
      placeholder: i("slides_AIEdit_placeholder"),
      onSubmit: e => n(e).finally(() => r())
    });
  };
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var businessInputField = require("business-input-field") /*id: 324730*/;
  var aiPptImageModeDropdown = require("ai-ppt-image-mode-dropdown") /*id: 747913*/;
  let L = e => {
    let {
      requestSugList: r,
      mode: n,
      isUserInteracted: a,
      setDropdownVisible: s
    } = e;
    let [o, d] = reactCoreLibraryReexport.useState({});
    let c = reactCoreLibraryReexport.useRef(a);
    c.current = a;
    let u = reactCoreLibraryReexport.useRef(undefined);
    reactCoreLibraryReexport.useEffect(() => {
      if (u.current === n) {
        return;
      }
      u.current = n;
      let e = o[n];
      if (e) {
        s(e.fetchSugState !== "failed");
        return;
      }
      s(true);
      d(e => ({
        ...e,
        [n]: {
          ...e[n],
          fetchSugState: "loading"
        }
      }));
      r({
        mode: n,
        handleUpdate: e => {
          d(t => ({
            ...t,
            [n]: {
              ...t[n],
              sugList: e
            }
          }));
        },
        handleError: e => {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: `[AI-PPT] ${n} image sug request error`,
            error: e,
            meta: {
              mode: n
            }
          });
          d(e => ({
            ...e,
            [n]: {
              ...e[n],
              fetchSugState: "failed"
            }
          }));
          if (!c.current && u.current === n) {
            s(false);
          }
        },
        handleFinish: () => {
          d(e => ({
            ...e,
            [n]: {
              ...e[n],
              fetchSugState: "idle"
            }
          }));
        }
      });
    }, [n, o]);
    return {
      sugList: o[n]?.sugList || [],
      fetchSugState: o[n]?.fetchSugState || "loading"
    };
  };
  var downloadArrowIcon = require("download-arrow-icon") /*id: 259591*/;
  let H = e => {
    let {
      query: t,
      handleUserSubmitImage: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `
        flex size-24 flex-shrink-0 items-center justify-center rounded-full
        ${t ? `
              cursor-pointer bg-dbx-fill-highlight
              hover:bg-dbx-fill-highlight-hover
            ` : "cursor-not-allowed bg-dbx-fill-trans-20-disable"}
      `,
      onClick: () => i(t),
      children: reactJsxRuntimeCoreReexport.jsx(downloadArrowIcon.DownloadArrowIcon, {
        className: `
          size-16
          ${t ? "text-dbx-static-white" : "text-dbx-text-disable"}
        `
      })
    });
  };
  var skeletonLoaderComponent = require("skeleton-loader-component") /*id: 876073*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var searchIconComponent_1 = require("search-icon-component_1") /*id: 706927*/;
  var q = "hideScrollbar-vr4naH";
  let O = e => {
    let {
      searchSugs: t,
      onSugClick: i,
      selectedSugIndex: r,
      className: n,
      onSuggestedContentShow: a,
      onSuggestedContentClick: s,
      searchSugsFinished: d
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (d) {
        t.forEach((e, t) => {
          if (a != null) {
            a({
              content: e,
              position: t,
              mode: "search"
            });
          }
        });
      }
    }, [t, d]);
    let c = reactCoreLibraryReexport.useMemo(() => d ? t : [...t, ...Array(Math.max(0, 5 - t.length)).fill(undefined)], [t, d]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o(q, n, "flex-row flex h-34 flex-nowrap gap-8 overflow-x-auto pr-12 pl-12"),
      children: c.map((e, t) => {
        if (!e) {
          return reactJsxRuntimeCoreReexport.jsx(skeletonLoaderComponent.SkeletonLoader, {
            loading: true,
            active: true,
            className: `
                h-full
                ${t === 0 ? "w-114" : "w-80"}
                flex-shrink-0 rounded-full
              `
          }, t);
        }
        let n = t === r;
        return reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          onClick: () => {
            i(t);
            if (s != null) {
              s({
                content: e,
                position: t,
                mode: "search"
              });
            }
          },
          color: n ? "brand-outline" : "grey-outline",
          className: `
              h-full! rounded-full
              ${n ? `
                    bg-dbx-fill-highlight-trans-10-blank
                    outline-dbx-line-highlight
                    hover:bg-dbx-fill-highlight-trans-10-blank
                  ` : ""}
            `,
          leadingIcon: n && reactJsxRuntimeCoreReexport.jsx(searchIconComponent_1.SearchIcon, {
            className: "size-16"
          }),
          children: e
        }, t);
      })
    });
  };
  let J = new Map();
  let U = e => {
    let {
      requestSearchImage: t,
      isUserInteracted: i,
      sugList: r,
      fetchSugState: n
    } = e;
    let [a, s] = reactCoreLibraryReexport.useState([]);
    let [o, d] = reactCoreLibraryReexport.useState(false);
    let [c, u] = reactCoreLibraryReexport.useState(undefined);
    reactCoreLibraryReexport.useRef(i).current = i;
    let m = e => {
      try {
        if (e < 0 || e >= r.length) {
          throw Error("useSearchSug onSugClick index out of range");
        }
        let i = r[e];
        if (!i) {
          throw Error("useSearchSug onSugClick sug is undefined");
        }
        let n = J.get(i) || {
          sug: i,
          index: e,
          imageList: t(i)
        };
        J.set(i, n);
        u(n);
      } catch (t) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "[AI-PPT] search image sug requestSearchImage error",
          error: t,
          meta: {
            sugList: r,
            index: e
          }
        });
      }
    };
    let g = !!a.length;
    reactCoreLibraryReexport.useEffect(() => {
      if (g) {
        m(0);
      }
    }, [g]);
    reactCoreLibraryReexport.useEffect(() => {
      d(false);
      if (n === "idle") {
        s(r);
        d(true);
      } else if (r.length) {
        s(r.slice(0, r.length - 1));
      }
    }, [r, n]);
    reactCoreLibraryReexport.useEffect(() => () => {
      J.clear();
    }, []);
    return {
      selectedSugData: c,
      onSugClick: m,
      searchSugs: a,
      searchSugsFinished: o
    };
  };
  let X = e => {
    let {
      mode: t,
      isImageResEmpty: i,
      translations: r
    } = e;
    let n = reactCoreLibraryReexport.useMemo(() => t === "ai-generation" ? r.agent_PPT_image_gen_fail_retry : t === "search" ? i ? r.agent_PPT_image_searchWeb_noResult : r.agent_PPT_image_searchWeb_fail_retry : r.agent_PPT_image_aiEdit_fail, [t, r, i]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `
        flex h-140 w-full items-center justify-center text-dbx-text-tertiary
        s-font-small
      `,
      children: n
    });
  };
  let V = e => e === 0 ? [108, 156] : e === 1 ? [156, 156] : [78, 156];
  let K = e => {
    let {
      isUserInteracted: t,
      userSearchImageList: i,
      selectedSugData: r,
      pictureColumns: n = 3,
      userSearchState: a,
      sugState: s
    } = e;
    let [o, d] = reactCoreLibraryReexport.useState([]);
    let [c, u] = reactCoreLibraryReexport.useState("loading");
    let m = reactCoreLibraryReexport.useRef(r == null ? undefined : r.index);
    m.current = r == null ? undefined : r.index;
    let g = s === "failed";
    let h = t || g ? i : o;
    let p = t || g ? a : c;
    let f = p === "loading";
    let _ = !f && !h.length;
    reactCoreLibraryReexport.useEffect(() => {
      let e = r == null ? undefined : r.index;
      (async () => {
        try {
          d([]);
          u("loading");
          if (!r) {
            return;
          }
          let t = (await r.imageList) || [];
          if (e !== m.current) {
            return;
          }
          d(t);
          u("idle");
        } catch (t) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "[AI-PPT]fetchSearchSugImageList failed",
            error: t,
            meta: {
              selectedSugData: r
            }
          });
          if (e !== m.current) {
            return;
          }
          u("failed");
        }
      })();
    }, [r]);
    return {
      imageColumnsData: reactCoreLibraryReexport.useMemo(() => {
        if (f) {
          return Array.from({
            length: n
          }, (e, t) => V(t).map(e => ({
            imageUrl: "",
            skeletonHeight: e
          })));
        }
        let e = Array.from({
          length: n
        }, () => []);
        h.forEach((t, i) => {
          e[i % n].push({
            imageUrl: t
          });
        });
        return e;
      }, [h, f, n]),
      imageState: p,
      isFailed: p === "failed",
      isLoading: f,
      isImageResEmpty: _
    };
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var buttonComponent_1 = require("button-component_1") /*id: 893534*/;
  var chevronRightIcon_1 = require("chevron-right-icon_1") /*id: 839336*/;
  var rightOutlinedIcon = require("right-outlined-icon") /*id: 831095*/;
  let et = e => {
    let {
      srcList: t,
      selected: i,
      setSelected: r
    } = e;
    let n = t.indexOf(i);
    if (n < 0 || t.length < 2) {
      return null;
    }
    let a = n === t.length - 1;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [n !== 0 && reactJsxRuntimeCoreReexport.jsx(buttonComponent_1.Button, {
        className: "absolute top-[50%] left-24 translate-y-[-50%]",
        variant: "float",
        size: "sm",
        onClick: () => {
          if (n > 0) {
            r(t[n - 1]);
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(chevronRightIcon_1.ChevronRightIcon, {})
      }), !a && reactJsxRuntimeCoreReexport.jsx(buttonComponent_1.Button, {
        className: "absolute top-[50%] right-24 translate-y-[-50%]",
        variant: "float",
        size: "sm",
        onClick: () => {
          if (n < t.length - 1) {
            r(t[n + 1]);
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(rightOutlinedIcon.RightOutlinedIcon, {})
      })]
    });
  };
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  let er = e => {
    let {
      onClose: t,
      onReplace: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex h-48 w-full items-center justify-end gap-8 pr-12",
      children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        onClick: i,
        className: "h-32! rounded-8!",
        color: "brand-filled",
        size: "md2",
        children: "替换原图"
      }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        variant: "icon",
        size: "md",
        onClick: t,
        children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {})
      })]
    });
  };
  let en = e => {
    let {
      srcList: t,
      selected: i,
      onItemClick: r,
      className: n,
      onPreviewImgClick: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("flex h-60 items-end gap-4", n),
      children: t.map(e => reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: () => {
          r(e);
          if (a != null) {
            a(e);
          }
        },
        className: `
            cursor-pointer overflow-hidden rounded-8 transition-all duration-200
            ease-in-out
            ${i === e ? "size-60" : "size-50"}
          `,
        children: reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(e, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1hCa$-wWn$XbE14ZDJOdFZqSmhWM$l6$ERKT2RtSllRblpp-lZaM$pFaE5kb%Z-T$do-%1s$jBXbTA1Z*1SSFZubE1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
          }),
          alt: "",
          className: "size-full object-cover"
        })
      }, e))
    });
  };
  var spinnerLoadingExport = require("spinner-loading-export") /*id: 372882*/;
  let el = async e => new Promise((t, i) => {
    let r = new Image();
    r.src = xssContentSanitizer.sanitizeUrl(e, null, {
      logType: "js.href/src",
      reportOnly: "false",
      blackConfig: "{}",
      configMode: "merge",
      isCloseSSRReport: false,
      bid: "flow_web",
      region: "cn",
      urlLimit: "-1",
      htmlLimit: "-1",
      isSaveValidUrl: false,
      isRuntimeLog: false,
      isDOMParser: true,
      escapeRule: "escape-report",
      reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
      scmBranch: "release_train_samantha_2026-03-09_1120843696898",
      scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
      scmVersion: "1.0.4.168",
      webpackPluginVersion: "3.4.5",
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1hCa$-wWn$XbE14ZDJOdFZqSmhWM$l6$ERO$01HRlhlSHBN-mxKNldWaEtib$JZ$FQwPQ"
    });
    r.onload = () => {
      t({
        height: r.height,
        width: r.width
      });
    };
    r.onerror = e => {
      i(e);
    };
  });
  let es = e => {
    let {
      src: t
    } = e;
    let i = reactCoreLibraryReexport.useRef(new Map());
    let r = reactCoreLibraryReexport.useRef(null);
    let [n, a] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        try {
          a(undefined);
          let e = i.current.get(t) || (await el(t));
          i.current.set(t, e);
          let {
            width: n,
            height: l
          } = e;
          if (!r.current || !n || !l) {
            throw Error("image size is invalid");
          }
          let s = n / l;
          let o = r.current.clientHeight;
          let d = r.current.clientWidth - 160;
          a(o * s > d ? d / s : o);
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "image_preview_get_image_size_error",
            error: e,
            meta: {
              src: t
            }
          });
          a("100%");
        }
      })();
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `
        pointer-events-none mt-29 mb-38 flex w-full flex-1 items-center
        justify-center
      `,
      ref: r,
      children: isUndefinedCheck.isUndefined(n) ? reactJsxRuntimeCoreReexport.jsx(spinnerLoadingExport.Spinner, {
        color: "brand",
        className: "pointer-events-auto cursor-default"
      }) : reactJsxRuntimeCoreReexport.jsx("img", {
        style: {
          height: n,
          width: "auto"
        },
        className: "pointer-events-auto cursor-default",
        src: xssContentSanitizer.sanitizeUrl(t, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1hCa$-wWn$XbE14ZDJOdFZqSmhWM$l6$ERKT2RtSllRblpp-lZaM$pFaE5kb%Z-T$do-%1s$jBX$Ek1ZFdSSFZu$mtRemx3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
        }),
        alt: "imagePreview"
      })
    });
  };
  let eo = e => {
    let {
      srcList: t,
      defaultSelected: i,
      getPopupContainer: r,
      onSelectedChange: n,
      onReplace: a,
      onClose: s,
      onPreviewImgClick: o
    } = e;
    let [d, c] = reactCoreLibraryReexport.useState(i || t[0] || "");
    let u = e => {
      c(e);
      if (n != null) {
        n(e);
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (e.key === "Escape") {
          if (s != null) {
            s();
          }
        }
      };
      document.addEventListener("keydown", e);
      return () => {
        document.removeEventListener("keydown", e);
      };
    }, [s]);
    if (t.length) {
      return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `
          fixed top-0 left-0 z-[99999] flex-column flex size-full
          cursor-zoom-out items-center justify-between bg-dbx-neutral-1000-5
          pb-40 backdrop-blur-[80px]
        `,
          onClick: e => {
            if (e.target === e.currentTarget) {
              if (s != null) {
                s();
              }
            }
          },
          children: [reactJsxRuntimeCoreReexport.jsx(er, {
            onClose: s,
            onReplace: () => a == null ? undefined : a(d)
          }), reactJsxRuntimeCoreReexport.jsx(es, {
            src: xssContentSanitizer.sanitizeUrl(d, null, {
              logType: "js.href/src",
              reportOnly: "false",
              blackConfig: "{}",
              configMode: "merge",
              isCloseSSRReport: false,
              bid: "flow_web",
              region: "cn",
              urlLimit: "-1",
              htmlLimit: "-1",
              isSaveValidUrl: false,
              isRuntimeLog: false,
              isDOMParser: true,
              escapeRule: "escape-report",
              reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
              scmBranch: "release_train_samantha_2026-03-09_1120843696898",
              scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
              scmVersion: "1.0.4.168",
              webpackPluginVersion: "3.4.5",
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1hCa$-wWn$XbE14ZDJOdFZqSmhWM$l6$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ"
            })
          }), reactJsxRuntimeCoreReexport.jsx(en, {
            srcList: t,
            selected: d,
            onItemClick: u,
            onPreviewImgClick: o
          }), reactJsxRuntimeCoreReexport.jsx(et, {
            srcList: t,
            selected: d,
            setSelected: u
          })]
        })
      }), (r == null ? undefined : r()) || document.body);
    } else {
      return null;
    }
  };
  var reactSvgIcon_2 = require("react-svg-icon_2") /*id: 975719*/;
  var ec = {
    imageItemWithDepthWidthRatio: "imageItemWithDepthWidthRatio-eRuMqa",
    imageItem: "imageItem-i7DdlU",
    imageItemExpandBtn: "imageItemExpandBtn-_bcZeB"
  };
  let eu = e => {
    let {
      imageUrl: t,
      isLoading: i = false,
      skeletonHeight: r,
      depthWidthRatio: n,
      onClickImage: a,
      isActive: l,
      onClickExpandBtn: s
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(ec.imageItem, `
          relative w-full flex-shrink-0 cursor-pointer overflow-hidden rounded-8
          ${l ? `
                after:pointer-events-none after:absolute after:top-0
                after:left-0 after:box-border after:size-full after:rounded-8
                after:border-2 after:border-s-color-accents-blue
                after:content-[""]
              ` : ""}
        `, {
        [ec.imageItemWithDepthWidthRatio]: !isUndefinedCheck.isUndefined(n)
      }),
      style: isUndefinedCheck.isUndefined(n) ? {} : {
        "--ppt-image-replace-depth-width-ratio": `${Math.round(n * 100)}%`
      },
      onClick: () => {
        if (!i && a != null) {
          a();
        }
      },
      onDoubleClick: () => {
        if (!i && s != null) {
          s();
        }
      },
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: isUndefinedCheck.isUndefined(n) ? "" : "absolute top-0 left-0 size-full",
        children: i ? reactJsxRuntimeCoreReexport.jsx(skeletonLoaderExport.SkeletonLoader, {
          loading: true,
          active: true,
          style: {
            width: "100%",
            borderRadius: 8,
            height: isUndefinedCheck.isUndefined(n) ? r || 0 : "100%"
          }
        }) : reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(t, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1hCa$-wWn$XbE14Z$ZwW$FuTlpWMD$z$EZoQ2RtTklWbmRNTTFsN$RESk9kb%pZ%W5aaWJWWjFaRWhOZ*1*WE1Xa*FNbF-wWWtkc2$t%kRNWHBh$jNoc1d%TlNkb%5wT1dwa%1qRjNZakkx-kdKd$$ucE1NbXgw$1Zka2JFeFhlSEJqTTF*MllW-3hhRm95$lhSaFd*SnNZbE0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
          }),
          alt: "",
          className: `
              ${isUndefinedCheck.isUndefined(n) ? "h-auto w-full" : "size-full object-cover"}
              select-none
            `
        })
      }), !i && reactJsxRuntimeCoreReexport.jsx("div", {
        className: o(ec.imageItemExpandBtn, `
              absolute top-4 right-4 flex size-22 items-center justify-center
              rounded-4 bg-dbx-neutral-00-60
            `),
        onClick: () => {
          if (s != null) {
            s();
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(reactSvgIcon_2.SvgIcon, {
          className: "size-14 text-dbx-text-primary-0085"
        })
      })]
    });
  };
  let em = e => {
    let {
      imageColumnsData: t,
      isLoading: i,
      onClickImage: r,
      selected: n,
      imageDepthWidthRatio: a,
      className: s,
      getPopupContainer: d,
      onReplace: c,
      onPreviewBoardShow: u
    } = e;
    let m = reactCoreLibraryReexport.useRef(null);
    let [g, h] = reactCoreLibraryReexport.useState(false);
    let [p, f] = reactCoreLibraryReexport.useState("");
    reactCoreLibraryReexport.useEffect(() => {
      if (m.current) {
        m.current.scrollTop = 0;
      }
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!i && t.length) {
        if (u != null) {
          u("default");
        }
      }
    }, [i, t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (g) {
        if (u != null) {
          u("preview_detail");
        }
      }
    }, [g]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: m,
      className: o(s, `
          flex flex-nowrap gap-8
          ${i ? "overflow-y-hidden" : "overflow-y-auto"}
        `, q),
      children: [t.map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex-column flex w-0 flex-1 gap-8",
        children: e.map((e, t) => {
          let l = !!n && n === e.imageUrl;
          return reactJsxRuntimeCoreReexport.jsx(eu, {
            imageUrl: e.imageUrl,
            isLoading: i,
            depthWidthRatio: a,
            skeletonHeight: e.skeletonHeight,
            onClickImage: () => !l && (r == null ? undefined : r(e.imageUrl, "default")),
            isActive: l,
            onClickExpandBtn: () => {
              f(e.imageUrl);
              h(true);
            }
          }, t);
        })
      }, t)), g && reactJsxRuntimeCoreReexport.jsx(eo, {
        srcList: t.flatMap(e => e.map(e => e.imageUrl)),
        getPopupContainer: d,
        defaultSelected: p,
        onClose: () => h(false),
        onReplace: e => {
          if (c != null) {
            c(e, "preview_detail");
          }
        },
        onPreviewImgClick: e => r == null ? undefined : r(e, "preview_detail")
      })]
    });
  };
  let eg = e => {
    let {
      onCancel: t,
      onConfirm: i,
      submitDisabled: r,
      translations: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex items-center justify-end gap-8 p-12",
      children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        variant: "rectangle",
        color: "grey-outline",
        size: "sm",
        onClick: t,
        children: n.agent_PPT_image_btn_cancel
      }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        variant: "rectangle",
        color: "brand-filled",
        onClick: i,
        disabled: r,
        size: "sm",
        children: n.agent_PPT_image_btn_replace
      })]
    });
  };
  let eh = e => {
    let {
      imageList: i,
      onClickImage: r,
      pictureColumns: n = 3,
      selected: a,
      requestSearchImage: s,
      isUserInteracted: o,
      translations: d,
      searchingImageState: c,
      sugList: u,
      fetchSugState: m,
      setSelected: g,
      onCancel: h,
      onConfirm: p,
      getPopupContainer: f,
      onReplace: _,
      onSuggestedContentShow: v,
      onSuggestedContentClick: b,
      onPreviewBoardShow: w
    } = e;
    let {
      selectedSugData: S,
      onSugClick: y,
      searchSugs: R,
      searchSugsFinished: P
    } = U({
      requestSearchImage: e => s(e, "search", true),
      isUserInteracted: o,
      sugList: u,
      fetchSugState: m
    });
    let {
      imageColumnsData: C,
      isFailed: $,
      isLoading: j,
      isImageResEmpty: E
    } = K({
      isUserInteracted: o,
      userSearchImageList: i,
      selectedSugData: S,
      sugState: m,
      pictureColumns: n,
      userSearchState: c
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (g != null) {
        g("");
      }
    }, [o, S]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "pt-12",
      children: [!o && m !== "failed" && reactJsxRuntimeCoreReexport.jsx(O, {
        searchSugs: R,
        selectedSugIndex: (S == null ? undefined : S.index) ?? 0,
        searchSugsFinished: P,
        onSugClick: y,
        className: "mb-8",
        onSuggestedContentShow: v,
        onSuggestedContentClick: b
      }), $ || E ? reactJsxRuntimeCoreReexport.jsx(X, {
        mode: "search",
        isImageResEmpty: E,
        translations: d
      }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(em, {
          className: "h-190 pr-12 pl-12",
          imageColumnsData: C,
          isLoading: j,
          onClickImage: r,
          selected: a,
          getPopupContainer: f,
          onReplace: _,
          onPreviewBoardShow: w
        }), reactJsxRuntimeCoreReexport.jsx(eg, {
          onCancel: h,
          onConfirm: p,
          submitDisabled: !a,
          translations: d
        })]
      })]
    });
  };
  var useSmoothTextHook = require("use-smooth-text-hook") /*id: 899617*/;
  let ef = e => {
    let {
      sugList: t,
      sugState: i,
      mode: r
    } = e;
    let n = reactCoreLibraryReexport.useRef();
    let [a, s] = reactCoreLibraryReexport.useState([]);
    let [o, d] = reactCoreLibraryReexport.useState(0);
    let {
      text: c
    } = useSmoothTextHook.useSmoothText(t[o] || "");
    reactCoreLibraryReexport.useEffect(() => {
      if (!t.length || o >= t.length) {
        return;
      }
      let e = t.length > o + 1 || i === "idle";
      let r = t[o] || "";
      if (e && r && r === c) {
        d(o + 1);
      }
    }, [o, c, t, i]);
    reactCoreLibraryReexport.useEffect(() => {
      if (c) {
        s(e => {
          let t = [...e];
          t[o] = c;
          return t;
        });
      }
    }, [c, o]);
    reactCoreLibraryReexport.useEffect(() => {
      if (n.current !== r) {
        s(t);
        d(i === "idle" ? t.length : Math.max(0, t.length - 1));
        n.current = r;
      }
    }, [r, t, i]);
    return {
      smoothTextList: a
    };
  };
  let e_ = () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "flex-column flex items-start gap-22 pt-25 pr-20 pb-25 pl-20",
    children: [,,,].fill(0).map((e, t) => reactJsxRuntimeCoreReexport.jsx(skeletonLoaderComponent.SkeletonLoader, {
      loading: true,
      active: true,
      style: t === 2 ? {
        width: "65%"
      } : {},
      className: "h-20 w-full rounded-full!"
    }, t))
  });
  let ev = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M4.83537 10.2117C4.44485 9.82122 4.44485 9.1882 4.83537 8.79768L10.1264 3.50666C10.905 2.72827 12.173 2.7213 12.9565 3.50471L18.2495 8.79768C18.6398 9.18817 18.6398 9.82125 18.2495 10.2117C17.859 10.6022 17.2259 10.6021 16.8354 10.2117L12.5424 5.91877L12.5424 21.0047C12.5424 21.5569 12.0946 22.0046 11.5424 22.0047C10.9901 22.0047 10.5424 21.557 10.5424 21.0047L10.5424 5.91877L6.24944 10.2117C5.85896 10.6022 5.22591 10.6021 4.83537 10.2117Z",
      fill: "currentColor"
    })
  });
  let eb = e => {
    let {
      sug: t,
      onClickSug: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        flex cursor-pointer flex-nowrap items-start justify-between gap-8
        rounded-12 p-12
        hover:bg-dbx-fill-trans-10-hover
      `,
      onClick: () => {
        i();
      },
      children: [reactJsxRuntimeCoreReexport.jsx("span", {
        className: "text-dbx-text-primary s-font-small",
        children: t
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        className: "flex h-22 items-center",
        children: reactJsxRuntimeCoreReexport.jsx(ev, {
          className: "size-16 flex-shrink-0 text-dbx-text-disable"
        })
      })]
    });
  };
  let ew = e => {
    let {
      onClickSug: t,
      sugState: i,
      sugList: r,
      onSuggestedContentShow: n,
      onSuggestedContentClick: a,
      mode: s
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (i === "idle") {
        r.forEach((e, t) => {
          if (n != null) {
            n({
              content: e,
              position: t,
              mode: s
            });
          }
        });
      }
    }, [r, i, s]);
    let {
      smoothTextList: o
    } = ef({
      sugList: r,
      sugState: i,
      mode: s
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: o.length ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: "min-h-154 p-8",
        children: o.map((e, i) => reactJsxRuntimeCoreReexport.jsx(eb, {
          sug: e,
          onClickSug: () => {
            t(e);
            if (a != null) {
              a({
                content: e,
                position: i,
                mode: s
              });
            }
          }
        }, i))
      }) : reactJsxRuntimeCoreReexport.jsx(e_, {})
    });
  };
  let ex = e => {
    let {
      mode: t,
      imageList: i,
      onClickImage: r,
      selected: n,
      translations: a,
      state: s,
      imageDepthWidthRatio: o = 3 / 4,
      onCancel: d,
      onConfirm: c,
      getPopupContainer: u,
      onReplace: m,
      onPreviewBoardShow: g
    } = e;
    let h = s === "loading";
    let p = !h && !i.length;
    let f = o < 3 / 4 ? 2 : 3;
    let _ = reactCoreLibraryReexport.useMemo(() => {
      if (h) {
        return Array(f).fill([,,,].fill({
          imageUrl: ""
        }));
      }
      let e = Array.from({
        length: f
      }, () => []);
      i.forEach((t, i) => {
        e[i % f].push({
          imageUrl: t
        });
      });
      return e;
    }, [i, h, f, o]);
    if (s === "failed" || p) {
      return reactJsxRuntimeCoreReexport.jsx(X, {
        mode: t,
        isImageResEmpty: p,
        translations: a
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(em, {
          imageColumnsData: _,
          isLoading: h,
          onClickImage: r,
          selected: n,
          imageDepthWidthRatio: o,
          getPopupContainer: u,
          className: "max-h-244 p-12 pb-0",
          onReplace: m,
          onPreviewBoardShow: g
        }), reactJsxRuntimeCoreReexport.jsx(eg, {
          onCancel: d,
          onConfirm: c,
          submitDisabled: !n,
          translations: a
        })]
      });
    }
  };
  let eS = e => {
    let {
      imageList: t,
      mode: i,
      searchingImageState: r,
      sugList: n,
      fetchSugState: a,
      onClickImage: l,
      setQuery: s,
      isUserInteracted: o,
      selected: d,
      handleUserSubmitImage: c,
      translations: u,
      onCancel: m,
      onConfirm: g,
      imageDepthWidthRatio: h,
      getPopupContainer: p,
      onReplace: f,
      onSuggestedContentShow: _,
      onSuggestedContentClick: v,
      onPreviewBoardShow: b
    } = e;
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx(ex, {
        mode: i,
        imageList: t,
        onClickImage: l,
        selected: d,
        state: r,
        translations: u,
        onCancel: m,
        onConfirm: g,
        imageDepthWidthRatio: h,
        getPopupContainer: p,
        onReplace: f,
        onPreviewBoardShow: b
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(ew, {
        mode: i,
        onClickSug: e => {
          s(e);
          c(e, true);
        },
        onSuggestedContentShow: _,
        onSuggestedContentClick: v,
        sugList: n,
        sugState: a
      });
    }
  };
  let ey = e => {
    let {
      searchingImageState: t,
      sugList: i,
      fetchSugState: r,
      mode: n,
      imageList: a,
      onCancel: s,
      onConfirm: o,
      translations: d,
      onClickImage: c,
      requestSearchImage: u,
      setQuery: m,
      isUserInteracted: g,
      handleUserSubmitImage: h,
      genImageDepthWidthRatio: p,
      getPopupContainer: f,
      onSuggestedContentShow: _,
      onSuggestedContentClick: v,
      onPreviewBoardShow: b
    } = e;
    let [w, S] = reactCoreLibraryReexport.useState("");
    let y = (e, t) => {
      if (c != null) {
        c(w, e, t);
      }
      S(e);
    };
    reactCoreLibraryReexport.useEffect(() => {
      S("");
    }, [g, a]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `
        w-full rounded-10 border-dbx-line-10 bg-dbx-bg-float
        shadow-(--dbx-drop-shadow-md)
      `,
      children: n === "search" ? reactJsxRuntimeCoreReexport.jsx(eh, {
        imageList: a,
        onClickImage: y,
        setSelected: S,
        selected: w,
        requestSearchImage: u,
        isUserInteracted: g,
        translations: d,
        onCancel: s,
        onReplace: o,
        onConfirm: () => o == null ? undefined : o(w, "default"),
        searchingImageState: t,
        sugList: i,
        fetchSugState: r,
        getPopupContainer: f,
        onSuggestedContentShow: _,
        onSuggestedContentClick: v,
        onPreviewBoardShow: b
      }) : reactJsxRuntimeCoreReexport.jsx(eS, {
        imageList: a,
        mode: n,
        onClickImage: y,
        selected: w,
        isUserInteracted: g,
        setQuery: m,
        searchingImageState: t,
        sugList: i,
        fetchSugState: r,
        handleUserSubmitImage: h,
        translations: d,
        onCancel: s,
        onReplace: o,
        onConfirm: () => o == null ? undefined : o(w, "default"),
        imageDepthWidthRatio: p,
        getPopupContainer: f,
        onSuggestedContentShow: _,
        onSuggestedContentClick: v,
        onPreviewBoardShow: b
      })
    });
  };
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  let eP = e => {
    let {
      placement: t,
      containerRef: i
    } = e;
    let r = reactCoreLibraryReexport.useRef(null);
    let {
      height: n
    } = resizeObserverHooks.useResizeObserverEx({
      ref: r
    });
    let {
      height: a
    } = resizeObserverHooks.useResizeObserverEx({
      ref: i
    });
    let [s, o] = reactCoreLibraryReexport.useState({
      width: window.innerWidth,
      height: window.innerHeight
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = debounceUtilWrapper.createDebounce(() => {
        o({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, 200);
      window.addEventListener("resize", e);
      return () => {
        window.removeEventListener("resize", e);
      };
    }, []);
    let d = reactCoreLibraryReexport.useMemo(() => {
      if (!r.current || !i.current || isUndefinedCheck.isUndefined(n) || isUndefinedCheck.isUndefined(a)) {
        return;
      }
      let e = i.current.getBoundingClientRect();
      let l = -n - 4;
      let o = a + 4;
      let d = t === "top" ? l : o;
      if (t === "top") {
        if (d + e.top < 0 && (d = o) + e.top + n > s.height) {
          d = 0 - e.top;
        }
      } else if (d + e.top + n > s.height && (d = l) + e.top < 0) {
        d = s.height - n - e.top;
      }
      return {
        left: 0,
        top: d
      };
    }, [n, s, r.current, i.current, a]);
    return {
      contentRef: r,
      position: d
    };
  };
  let eC = e => {
    let {
      mode: t,
      translations: i,
      imageList: r,
      containerRef: n,
      placement: a,
      sugList: l,
      fetchSugState: s,
      searchingImageState: o,
      handleCancelSelectImage: d,
      handleReplaceImage: c,
      onClickImage: u,
      requestSearchImage: m,
      handleUserSubmitImage: g,
      setQuery: h,
      isUserInteracted: p,
      genImageDepthWidthRatio: f,
      getPopupContainer: _,
      onSuggestedContentShow: v,
      onSuggestedContentClick: b,
      onPreviewBoardShow: w
    } = e;
    let {
      contentRef: S,
      position: y
    } = eP({
      placement: a,
      containerRef: n
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "absolute w-full",
      ref: S,
      style: y ? {
        ...y,
        opacity: 1
      } : {
        opacity: 0
      },
      children: reactJsxRuntimeCoreReexport.jsx(ey, {
        mode: t,
        translations: i,
        imageList: r,
        searchingImageState: o,
        sugList: l,
        fetchSugState: s,
        onCancel: d,
        onConfirm: c,
        onClickImage: (e, i, r) => {
          if (u != null) {
            u(t, e, i, r);
          }
        },
        requestSearchImage: m,
        handleUserSubmitImage: g,
        setQuery: h,
        isUserInteracted: p,
        genImageDepthWidthRatio: f,
        getPopupContainer: _,
        onSuggestedContentShow: v,
        onSuggestedContentClick: b,
        onPreviewBoardShow: w
      })
    });
  };
  let e$ = e => {
    let {
      className: t,
      style: i,
      placement: r,
      getPopupContainer: n,
      requestSearchImage: a,
      translations: s,
      handleReplaceImage: d,
      defaultMode: c,
      availableModeList: u = ["ai-generation", "search", "ai-edit"],
      onPopupCancel: m,
      onPopupConfirm: g,
      onClickImage: h,
      onImageModeDropdownVisibleChange: p,
      onClickImageDropdownItem: f,
      imageModeSelectorClassName: _,
      requestSugList: v,
      genImageDepthWidthRatio: b,
      onSuggestedContentShow: w,
      onSuggestedContentClick: S,
      onPreviewBoardShow: y
    } = e;
    let [R, P] = reactCoreLibraryReexport.useState(c || "search");
    let [C, $] = reactCoreLibraryReexport.useState("");
    let [j, E] = reactCoreLibraryReexport.useState("idle");
    let [T, k] = reactCoreLibraryReexport.useState([]);
    let [N, I] = reactCoreLibraryReexport.useState(false);
    let M = reactCoreLibraryReexport.useRef(null);
    let W = reactCoreLibraryReexport.useRef(null);
    let [D, B] = reactCoreLibraryReexport.useState(false);
    let [z, A] = reactCoreLibraryReexport.useState(false);
    let {
      sugList: q,
      fetchSugState: O
    } = L({
      requestSugList: v,
      mode: R,
      isUserInteracted: D,
      setDropdownVisible: I
    });
    reactCoreLibraryReexport.useEffect(() => {
      setTimeout(() => {
        var e;
        if ((e = M.current) !== null && e !== undefined) {
          e.focus();
        }
      }, 0);
      B(false);
      A(false);
      $("");
      k([]);
      E("idle");
    }, [R]);
    let J = async (e, t) => {
      if (e) {
        A(!!t);
        B(true);
        E("loading");
        k([]);
        I(true);
        try {
          let i = await a(e, R, t);
          k(i);
          E("idle");
        } catch {
          k([]);
          E("failed");
        }
      }
    };
    let U = reactCoreLibraryReexport.useMemo(() => R === "ai-edit" ? s.agent_PPT_image_aiEdit_placeholder : R === "search" ? s.agent_PPT_image_searchWeb_desc : s.agent_PPT_image_generate_placeholder, [R, s]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(t, `
          flex h-40 w-450 max-w-[100%] items-center gap-8 rounded-[10px]
          border-[0.5px] border-dbx-line-10 bg-dbx-bg-float pr-8 pl-12
          shadow-(--dbx-drop-shadow-md)
        `),
      style: i,
      ref: W,
      children: [reactJsxRuntimeCoreReexport.jsx(aiPptImageModeDropdown.ImageModeDropdown, {
        className: _,
        mode: R,
        setMode: e => {
          P(e);
          if (f != null) {
            f(e, R);
          }
        },
        placement: r,
        getPopupContainer: n,
        translations: s,
        availableModeList: u,
        onImageModeDropdownVisibleChange: (e, t) => {
          if (p != null) {
            p(e, t);
          }
        }
      }), reactJsxRuntimeCoreReexport.jsx(businessInputField.BusinessInput, {
        classNames: {
          wrapper: "shrink-1 grow-1 basis-auto w-270 border-none !pl-2 !pr-2"
        },
        ref: M,
        placeholder: U,
        value: C,
        onChange: $,
        onEnterPress: () => J(C),
        autoFocus: true
      }), reactJsxRuntimeCoreReexport.jsx(H, {
        query: C,
        handleUserSubmitImage: J
      }), N && reactJsxRuntimeCoreReexport.jsx(eC, {
        containerRef: W,
        placement: r,
        mode: R,
        translations: s,
        imageList: T,
        searchingImageState: j,
        sugList: q,
        fetchSugState: O,
        handleCancelSelectImage: () => {
          I(false);
          if (m != null) {
            m(R, "default", z);
          }
        },
        handleReplaceImage: (e, t) => {
          I(false);
          if (d != null) {
            d(e);
          }
          if (g != null) {
            g(R, t, z);
          }
        },
        onClickImage: (e, t, i, r) => {
          if (h != null) {
            h(e, t, i, r, z);
          }
        },
        requestSearchImage: (e, t, i) => {
          A(!!i);
          return a(e, t, i);
        },
        handleUserSubmitImage: J,
        setQuery: $,
        isUserInteracted: D,
        genImageDepthWidthRatio: b,
        getPopupContainer: n,
        onSuggestedContentShow: w,
        onSuggestedContentClick: S,
        onPreviewBoardShow: e => y == null ? undefined : y(R, e, z)
      })]
    });
  };
  (n = {}).ReplaceImage = "ReplaceImage";
  n.LocalUploadImageItem = "LocalUploadImageItem";
  n.SearchImageItem = "SearchImageItem";
  n.GenerateImageItem = "GenerateImageItem";
  n.AIEditImageItem = "AIEditImageItem";
  n.AIEdit = "AIEdit";
  n.IntelligentEdit = "IntelligentEdit";
  let ej = n;
  ej.GenerateImageItem;
  ej.SearchImageItem;
  ej.LocalUploadImageItem;
  ej.ReplaceImage;
  ej.IntelligentEdit;
  ej.AIEdit;
  ej.AIEditImageItem;
  let eE = {
    "ai-generation": "generate_picture",
    search: "search_picture",
    upload: "switch_picture",
    "ai-edit": "doubao_edit_picture"
  };
  let eT = async (e, t) => {
    for (let e = 0; e < 10; e++) {
      t(e * 10);
      await new Promise(e => setTimeout(e, 200));
    }
    return "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/colorful.jpg";
  };
  let ek = (e, t) => {
    let i = Math.abs(Math.round(e));
    let r = Math.abs(Math.round(t));
    if (r === 0) {
      if (i === 0) {
        return "0:0";
      } else {
        return `${i}:0`;
      }
    }
    if (i === 0) {
      return "0:1";
    }
    let n = (e, t) => t === 0 ? Math.abs(e) : n(Math.abs(t), Math.abs(e) % Math.abs(t));
    let a = n(i, r);
    let l = i / a;
    let s = r / a;
    let o = Math.abs(s);
    return `${l * (s < 0 ? -1 : 1)}:${o}`;
  };
  let eN = e => {
    let {
      getPopupContainer: r,
      placement: n,
      slidesToken: a,
      config: l,
      trackSlidesEvent: s,
      getElementReportParams: o,
      t: d
    } = e;
    let {
      reset: c,
      selection: u
    } = selectionStoreHook.useSelectionStore();
    let {
      handleReplaceImage: m,
      requestImageSugList: g,
      requestSearchImages: h,
      requestAiGenImages: p
    } = l;
    return reactJsxRuntimeCoreReexport.jsx(e$, {
      placement: n,
      getPopupContainer: r,
      defaultMode: u == null ? undefined : u.imageReplaceMode,
      onSuggestedContentShow: e => {
        let {
          position: t,
          content: i,
          mode: r
        } = e;
        s({
          eventName: "aippt_picture_single_suggested_content_show",
          slideParams: {
            position: t.toString(),
            content: i,
            enter_method: eE[r]
          }
        });
      },
      onSuggestedContentClick: e => {
        let {
          position: t,
          content: i,
          mode: r
        } = e;
        s({
          eventName: "aippt_picture_suggested_content_click",
          slideParams: {
            position: t.toString(),
            content: i,
            enter_method: eE[r]
          }
        });
      },
      requestSugList: e => {
        let {
          mode: t,
          handleUpdate: i,
          handleError: r,
          handleFinish: n
        } = e;
        return g({
          mode: t,
          slidesToken: a,
          handleUpdate: i,
          handleError: r,
          handleFinish: n
        });
      },
      translations: {
        agent_PPT_image_searchWeb: d("slides_toolbar_replaceImage_search"),
        agent_PPT_image_searchWeb_desc: d("slides_searchImage_placeholder"),
        agent_PPT_image_btn_replace: d("slides_image_btn_replace"),
        agent_PPT_image_btn_cancel: d("slides_genImage_btn_cancel"),
        agent_PPT_image_generate: d("slides_toolbar_replaceImage_gen"),
        agent_PPT_image_generate_placeholder: d("slides_genImage_placeholder"),
        agent_PPT_image_localUpload: d("slides_toolbar_replaceImage_upload"),
        agent_PPT_image_upload_clickDrag: d("slides_uploadImage_clickDrag"),
        agent_PPT_image_upload_btn_reupload: d("slides_uploadImage_btn_reupload"),
        agent_PPT_image_gen_fail_retry: d("slides_genImage_genFail"),
        agent_PPT_image_searchWeb_fail_retry: d("slides_searchImage_searchFail"),
        agent_PPT_image_searchWeb_noResult: d("slides_searchImage_noResult"),
        agent_PPT_image_aiEdit: d("slides_editor_toolbar_image_edit_cn"),
        agent_PPT_image_aiEdit_placeholder: d("slides_editor_toolbar_image_edit_placeholder"),
        agent_PPT_image_aiEdit_fail: d("slides_toast_editImageFail")
      },
      requestSearchImage: (e, t, i) => {
        s({
          eventName: "aippt_picture_query_send",
          slideParams: {
            enter_method: eE[t],
            is_suggested_content: i ? "1" : "0"
          }
        });
        if (t === "search") {
          return h(e);
        }
        let {
          selectionBounds: r
        } = selectionStoreHook.useSelectionStore.getState().selection || {};
        return p(e, (r == null ? undefined : r.width) && (r == null ? undefined : r.height) ? ek(r.width, r.height) : undefined, t === "ai-edit");
      },
      genImageDepthWidthRatio: (u == null ? undefined : u.selectionBounds?.height) && (u == null ? undefined : u.selectionBounds?.width) ? u.selectionBounds.height / u.selectionBounds.width : undefined,
      availableModeList: ["ai-generation", "search", "ai-edit"],
      handleCloseMenu: c,
      onPopupCancel: (e, t, i) => {
        s({
          eventName: "aippt_picture_selection_board_click",
          slideParams: {
            button_name: "cancel",
            enter_method: eE[e],
            click_from: t,
            is_suggested_content: i ? "1" : "0"
          }
        });
      },
      onPopupConfirm: (e, t, i) => {
        s({
          eventName: "aippt_picture_selection_board_click",
          slideParams: {
            button_name: "use",
            enter_method: eE[e],
            click_from: t,
            is_suggested_content: i ? "1" : "0"
          }
        });
      },
      onClickImage: (e, t, i, r, n) => {
        if (t !== i) {
          s({
            eventName: "aippt_picture_selection_board_click",
            slideParams: {
              button_name: "choose",
              enter_method: eE[e],
              click_from: r,
              is_suggested_content: n ? "1" : "0"
            }
          });
        }
      },
      onImageModeDropdownVisibleChange: async (e, t) => {
        if (e) {
          let e = await o();
          arrayObjectForeach.arrayObjectForeach(t, t => {
            s({
              eventName: "aippt_selection_tool_bar_show",
              slideParams: {
                first_bar_type_button_name: "second_bar_edit_picture",
                second_bar_type_button_name: eE[t],
                ...e
              }
            });
          });
        }
      },
      onClickImageDropdownItem: async (e, t) => {
        if (e !== t) {
          let t = await o();
          s({
            eventName: "aippt_selection_tool_bar_click",
            slideParams: {
              first_bar_type_button_name: "second_bar_edit_picture",
              second_bar_type_button_name: eE[e],
              ...t
            }
          });
        }
      },
      handleReplaceImage: e => m(e).finally(c),
      onPreviewBoardShow: (e, t, i) => {
        s({
          eventName: "aippt_picture_selection_board_show",
          slideParams: {
            show_from: t,
            is_suggested_content: i ? "1" : "0",
            enter_method: eE[e]
          }
        });
      }
    });
  };
  var samanthaInputComponent = require("samantha-input-component") /*id: 214717*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var closeIconComponent_1 = require("close-icon-component_1") /*id: 315885*/;
  let eZ = e => {
    let {
      placement: t,
      containerRef: i
    } = e;
    let r = reactCoreLibraryReexport.useRef(null);
    let {
      width: n,
      height: a
    } = resizeObserverHooks.useResizeObserverEx({
      ref: r
    });
    let [s, o] = reactCoreLibraryReexport.useState({
      width: window.innerWidth,
      height: window.innerHeight
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = debounceUtilWrapper.createDebounce(() => {
        o({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, 200);
      window.addEventListener("resize", e);
      return () => {
        window.removeEventListener("resize", e);
      };
    }, []);
    let d = reactCoreLibraryReexport.useMemo(() => {
      if (!r.current || !i.current || isUndefinedCheck.isUndefined(a) || isUndefinedCheck.isUndefined(n)) {
        return;
      }
      let e = i.current.getBoundingClientRect();
      let l = 0;
      let o = t === "top" ? -a - 4 : 52;
      if (o + e.top < 0) {
        o = 0 - e.top;
      }
      if (o + e.top + a > s.height) {
        o = s.height - a - e.top;
      }
      if (l + e.left < 0) {
        l = 0 - e.left;
      }
      if (l + e.left + n > s.width) {
        l = s.width - n - e.left;
      }
      return {
        left: l,
        top: o
      };
    }, [n, a, s, r.current, i.current]);
    return {
      contentRef: r,
      position: d
    };
  };
  var semiProgressComponent = require("semi-progress-component") /*id: 821198*/;
  var semiUploadComponent = require("semi-upload-component") /*id: 159273*/;
  var eD = {
    wrapper: "wrapper-AV2TZZ",
    "preview-area": "preview-area-tZ76LV",
    progress: "progress-q_H8p7",
    mask: "mask-dMemOw",
    "upload-area": "upload-area-m3PdBI",
    btns: "btns-xoT7xN"
  };
  let eH = e => {
    let {
      className: t,
      style: i,
      requestUploadImage: r,
      translations: n,
      handleReplace: a
    } = e;
    let [s, d] = reactCoreLibraryReexport.useState(null);
    let [c, u] = reactCoreLibraryReexport.useState(false);
    let [m, g] = reactCoreLibraryReexport.useState(0);
    let [, h] = reactCoreLibraryReexport.useState(0);
    let p = reactCoreLibraryReexport.useRef("");
    let f = reactCoreLibraryReexport.useRef("");
    let _ = async e => {
      if (e) {
        u(true);
        try {
          let t = await r(e, g);
          f.current = t;
          new Image().src = xssContentSanitizer.sanitizeUrl(t, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1doaF$6RjNZM*hSZ*1NelNtcE1Naz%yWWxoQ2RtSnRWblZr%0%xMllW-3hhRm95$lhSamJWWjNZa2RH-Wxw$E1-Z*lNMEl4WTBNNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmhXZDJKSE9Xa*FRek-z$1ZjMWJHSkRPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
          });
        } catch (e) {} finally {
          u(false);
          g(0);
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (p.current) {
        URL.revokeObjectURL(p.current);
      }
      if (s) {
        p.current = URL.createObjectURL(s);
        h(e => e + 1);
      }
      return () => {
        if (p.current) {
          URL.revokeObjectURL(p.current);
        }
      };
    }, [s]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(eD.wrapper, t),
      style: i,
      children: [s ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o(eD["preview-area"]),
        children: [reactJsxRuntimeCoreReexport.jsx("img", {
          className: o({
            [eD.mask]: c
          }),
          src: xssContentSanitizer.sanitizeUrl(p.current, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1doaF$6RjNZM*hSZ*1NelNtcE1Naz%yWWxoQ2RtSnRWblZr%0%xMllW-3hhRm95$lhSamJWWjNZa2RH-Wxw$E1-Z*lNMEl4WTBNNWFtSXlNW*RpTWpWc1ltN$Nla3d5-khSWl-y%nN%RmhXZDJKSE9Xa*FRek-z$1ZjMWJHSkRPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
          }),
          alt: ""
        }), c && reactJsxRuntimeCoreReexport.jsx(semiProgressComponent.Progress, {
          className: eD.progress,
          type: "circle",
          width: 40,
          strokeWidth: 3,
          stroke: "#fff",
          orbitStroke: "rgba(255,255,255,0.6)",
          percent: Math.ceil(m || 0)
        })]
      }) : reactJsxRuntimeCoreReexport.jsx(semiUploadComponent.UploadComponent, {
        action: "",
        accept: "image/png, image/jpeg, image/jpg, image/gif",
        onFileChange: e => {
          let t = e[0];
          d(t);
          _(t);
        },
        showUploadList: false,
        draggable: true,
        uploadTrigger: "custom",
        multiple: false,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: eD["upload-area"],
          children: n.agent_PPT_image_upload_clickDrag
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eD.btns,
        children: [s && !c && reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          type: "tertiary",
          onClick: () => d(null),
          children: n.agent_PPT_image_upload_btn_reupload
        }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          type: "primary",
          onClick: () => {
            d(null);
            if (a != null) {
              a(f.current);
            }
          },
          disabled: !s || !!c,
          children: n.agent_PPT_image_btn_replace
        })]
      })]
    });
  };
  var chevronDownIcon_1 = require("chevron-down-icon_1") /*id: 24405*/;
  var rtlSettingsIconComponent = require("rtl-settings-icon-component") /*id: 996282*/;
  var searchIconComponent_2 = require("search-icon-component_2") /*id: 773676*/;
  var canvasDocPanelIcon_1 = require("canvas-doc-panel-icon_1") /*id: 507860*/;
  let eO = e => {
    let {
      translations: t
    } = e;
    return reactCoreLibraryReexport.useMemo(() => ({
      "ai-generation": {
        icon: reactJsxRuntimeCoreReexport.jsx(rtlSettingsIconComponent.RtlSettingsIcon, {}),
        label: t.agent_PPT_image_generate
      },
      search: {
        icon: reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {}),
        label: t.agent_PPT_image_searchWeb
      },
      upload: {
        icon: reactJsxRuntimeCoreReexport.jsx(canvasDocPanelIcon_1.DocPanelOutlined, {}),
        label: t.agent_PPT_image_localUpload
      }
    }), [t]);
  };
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  let eU = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      selectedMode: i,
      onModeItemClick: r,
      translations: n,
      children: a,
      getPopupContainer: s,
      onVisibleChange: o,
      trigger: d,
      position: c,
      showTick: u,
      availableModeList: m = ["ai-generation", "search", "upload"]
    } = e;
    let [g, h] = reactCoreLibraryReexport.useState(false);
    let p = eO({
      translations: n
    });
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      setDropdownVisible: h
    }));
    reactCoreLibraryReexport.useEffect(() => () => {
      h(false);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
      showTick: u,
      position: c,
      visible: g,
      getPopupContainer: s,
      onVisibleChange: e => {
        h(e);
        if (o != null) {
          o(e);
        }
      },
      onClickOutSide: () => h(false),
      trigger: d,
      render: reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Menu, {
        children: m.map(e => reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Item, {
          icon: p[e].icon,
          onClick: () => {
            h(false);
            if (r != null) {
              r(e);
            }
          },
          active: i === e,
          className: "item-DNPNxo",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            children: p[e].label
          })
        }, e))
      }),
      children: a
    });
  });
  let eX = e => {
    let {
      mode: t,
      setMode: i,
      placement: r,
      getPopupContainer: n,
      translations: a,
      availableModeList: s,
      onImageModeDropdownVisibleChange: d,
      className: c
    } = e;
    let [u, m] = reactCoreLibraryReexport.useState(false);
    let g = reactCoreLibraryReexport.useRef(null);
    let h = eO({
      translations: a
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("mode-selector-wrapper-SpkjSR", c, {
        "active-DuG5aG": u
      }),
      children: reactJsxRuntimeCoreReexport.jsx(eU, {
        ref: g,
        selectedMode: t,
        onModeItemClick: i,
        position: r === "top" ? "topLeft" : "bottomLeft",
        getPopupContainer: n,
        translations: a,
        showTick: true,
        trigger: "custom",
        onVisibleChange: e => {
          m(e);
          if (d != null) {
            d(e, s);
          }
        },
        availableModeList: s,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "wrapper-EVfIGb",
          onClick: () => {
            var e;
            if ((e = g.current) === null || e === undefined) {
              return undefined;
            } else {
              return e.setDropdownVisible(!u);
            }
          },
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mode-icon-XN5RS_",
            children: h[t].icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mode-label-_ihgA5",
            children: h[t].label
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "arrow-icon-J9nX51",
            children: reactJsxRuntimeCoreReexport.jsx(chevronDownIcon_1.ChevronDownIcon, {
              style: u ? {
                rotate: "180deg"
              } : {},
              className: "arrow-icon-svg-NtsCfA"
            })
          })]
        })
      })
    });
  };
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var eK = {
    wrapper: "wrapper-H39JJL",
    "unexpected-wrapper": "unexpected-wrapper-CeOvsK",
    "image-list-wrapper": "image-list-wrapper-Ca0ZRf",
    "image-list": "image-list-EYkBKv",
    "image-item": "image-item-g_x5zU",
    active: "active-o2myyn",
    loading: "loading-rA3EBk",
    "actions-wrapper": "actions-wrapper-RzwPOw"
  };
  let eG = e => {
    let {
      className: t,
      style: i,
      state: r,
      mode: n,
      imageList: a,
      onCancel: s,
      onConfirm: d,
      translations: c,
      onClickImage: u
    } = e;
    let [m, g] = reactCoreLibraryReexport.useState("");
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(t, eK.wrapper),
      style: i,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: eK["image-list-wrapper"],
        children: r === "failed" ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: eK["unexpected-wrapper"],
          children: n === "ai-generation" ? c.agent_PPT_image_gen_fail_retry : c.agent_PPT_image_searchWeb_fail_retry
        }) : r === "searching" ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: eK["image-list"],
          children: Array.from({
            length: 6
          }).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
            className: o(eK["image-item"], {
              [eK.loading]: true
            }),
            style: i,
            children: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
              placeholder: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Image, {
                style: {
                  width: 152,
                  height: 152
                }
              }),
              loading: true,
              active: true
            })
          }, t))
        }) : a.length === 0 ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: eK["unexpected-wrapper"],
          children: n === "ai-generation" ? c.agent_PPT_image_gen_fail_retry : c.agent_PPT_image_searchWeb_noResult
        }) : reactJsxRuntimeCoreReexport.jsx("div", {
          className: eK["image-list"],
          children: a.map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
            className: o(eK["image-item"], {
              [eK.active]: e === m
            }),
            style: {
              backgroundImage: `url(${e})`
            },
            onClick: () => {
              if (u != null) {
                u(m, e);
              }
              g(e);
            }
          }, `${t}-${e}`))
        })
      }), a.length > 0 && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eK["actions-wrapper"],
        children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          type: "tertiary",
          onClick: s,
          children: c.agent_PPT_image_btn_cancel
        }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          type: "primary",
          onClick: () => d == null ? undefined : d(m),
          disabled: !m,
          children: c.agent_PPT_image_btn_replace
        })]
      })]
    });
  };
  var eQ = {
    "image-menu-wrapper": "image-menu-wrapper-M94k3z",
    "image-menu-dropdown": "image-menu-dropdown-XnKl69",
    split: "split-zPyWSo",
    "input-wrapper": "input-wrapper-P1Bf98",
    "send-btn": "send-btn-psE5iq",
    disabled: "disabled-MDOilT",
    "close-btn": "close-btn-VUEKOW",
    "close-icon": "close-icon-ZCqIIJ"
  };
  let eY = e => {
    let {
      className: t,
      style: i,
      placement: r,
      getPopupContainer: n,
      requestSearchImage: a,
      requestUploadImage: s,
      translations: d,
      handleCloseMenu: c,
      handleReplaceImage: u,
      defaultMode: m,
      availableModeList: g = ["ai-generation", "search", "upload"],
      onPopupCancel: h,
      onPopupConfirm: p,
      onClickImage: f,
      onImageModeDropdownVisibleChange: _,
      onClickImageDropdownItem: v,
      disableCancelButton: b = false,
      imageModeSelectorClassName: w
    } = e;
    let [S, y] = reactCoreLibraryReexport.useState(m ?? "ai-generation");
    let [R, P] = reactCoreLibraryReexport.useState("");
    let [C, $] = reactCoreLibraryReexport.useState("idle");
    let [j, E] = reactCoreLibraryReexport.useState([]);
    let [T, N] = reactCoreLibraryReexport.useState(false);
    let I = reactCoreLibraryReexport.useRef(null);
    let M = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => () => {
      N(false);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (S === "upload") {
        setTimeout(() => {
          N(true);
        }, 0);
      } else {
        setTimeout(() => {
          var e;
          if ((e = I.current) !== null && e !== undefined) {
            e.focus();
          }
        }, 0);
        N(false);
      }
    }, [S]);
    let W = async () => {
      if (R && S !== "upload") {
        $("searching");
        N(true);
        try {
          let e = await a(R, S);
          E(e);
          $("idle");
        } catch {
          E([]);
          $("failed");
        }
      }
    };
    let {
      contentRef: Z,
      position: F
    } = eZ({
      placement: r,
      containerRef: M
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(t, eQ["image-menu-wrapper"]),
      style: {
        ...i,
        height: 48
      },
      ref: M,
      children: [T && reactJsxRuntimeCoreReexport.jsx("div", {
        className: eQ["image-menu-dropdown"],
        ref: Z,
        style: F ? {
          ...F,
          opacity: 1
        } : {
          opacity: 0
        },
        children: S === "upload" ? reactJsxRuntimeCoreReexport.jsx(eH, {
          requestUploadImage: s,
          translations: d,
          handleReplace: u
        }) : reactJsxRuntimeCoreReexport.jsx(eG, {
          mode: S,
          translations: d,
          imageList: j,
          state: C,
          onCancel: () => {
            N(false);
            if (h != null) {
              h(S);
            }
          },
          onConfirm: e => {
            N(false);
            if (u != null) {
              u(e);
            }
            if (p != null) {
              p(S);
            }
          },
          onClickImage: (e, t) => {
            if (f != null) {
              f(S, e, t);
            }
          }
        })
      }), reactJsxRuntimeCoreReexport.jsx(eX, {
        className: w,
        mode: S,
        setMode: e => {
          y(e);
          if (v != null) {
            v(e, S);
          }
        },
        placement: r,
        getPopupContainer: n,
        translations: d,
        availableModeList: g,
        onImageModeDropdownVisibleChange: _
      }), S !== "upload" && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: eQ.split
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: eQ["input-wrapper"],
          children: reactJsxRuntimeCoreReexport.jsx(samanthaInputComponent.SamanthaInput, {
            ref: I,
            placeholder: S === "ai-generation" ? d.agent_PPT_image_generate_placeholder : d.agent_PPT_image_searchWeb_desc,
            value: R,
            onChange: P,
            onEnterPress: W,
            autoFocus: true
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: o(eQ["send-btn"], {
            [eQ.disabled]: !R
          }),
          onClick: W,
          children: reactJsxRuntimeCoreReexport.jsx(rtlBackArrowIcon.rtlBackArrowIcon, {})
        }), !b && reactJsxRuntimeCoreReexport.jsx("div", {
          className: eQ.split
        })]
      }), !b && reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        icon: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1.CloseIcon, {
          className: eQ["close-icon"]
        }),
        onClick: c,
        className: eQ["close-btn"],
        type: "quartary"
      })]
    });
  };
  let e0 = e => {
    let {
      getPopupContainer: t,
      placement: i,
      config: r,
      trackSlidesEvent: n,
      getElementReportParams: a,
      t: l
    } = e;
    let {
      reset: s,
      selection: o
    } = selectionStoreHook.useSelectionStore();
    let {
      handleReplaceImage: d,
      requestSearchImages: c,
      requestAiGenImages: u
    } = r;
    return reactJsxRuntimeCoreReexport.jsx(eY, {
      placement: i,
      getPopupContainer: t,
      defaultMode: (o == null ? undefined : o.imageReplaceMode) === "ai-edit" ? "search" : o == null ? undefined : o.imageReplaceMode,
      disableCancelButton: true,
      translations: {
        agent_PPT_image_searchWeb: l("slides_toolbar_replaceImage_search"),
        agent_PPT_image_searchWeb_desc: l("slides_searchImage_placeholder"),
        agent_PPT_image_btn_replace: l("slides_image_btn_replace"),
        agent_PPT_image_btn_cancel: l("slides_genImage_btn_cancel"),
        agent_PPT_image_generate: l("slides_toolbar_replaceImage_gen"),
        agent_PPT_image_generate_placeholder: l("slides_genImage_placeholder"),
        agent_PPT_image_localUpload: l("slides_toolbar_replaceImage_upload"),
        agent_PPT_image_upload_clickDrag: l("slides_uploadImage_clickDrag"),
        agent_PPT_image_upload_btn_reupload: l("slides_uploadImage_btn_reupload"),
        agent_PPT_image_gen_fail_retry: l("slides_genImage_genFail"),
        agent_PPT_image_searchWeb_fail_retry: l("slides_searchImage_searchFail"),
        agent_PPT_image_searchWeb_noResult: l("slides_searchImage_noResult")
      },
      requestSearchImage: (e, t) => {
        n({
          eventName: "aippt_picture_query_send",
          slideParams: {
            enter_method: eE[t]
          }
        });
        if (t === "search") {
          return c(e);
        }
        let {
          selectionBounds: i
        } = selectionStoreHook.useSelectionStore.getState().selection || {};
        return u(e, (i == null ? undefined : i.width) && (i == null ? undefined : i.height) ? ek(i.width, i.height) : undefined);
      },
      requestUploadImage: eT,
      availableModeList: ["ai-generation", "search"],
      handleCloseMenu: s,
      onPopupCancel: e => {
        n({
          eventName: "aippt_picture_selection_board_click",
          slideParams: {
            button_name: "cancel",
            enter_method: eE[e]
          }
        });
      },
      onPopupConfirm: e => {
        n({
          eventName: "aippt_picture_selection_board_click",
          slideParams: {
            button_name: "use",
            enter_method: eE[e]
          }
        });
      },
      onClickImage: (e, t, i) => {
        if (t !== i) {
          n({
            eventName: "aippt_picture_selection_board_click",
            slideParams: {
              button_name: "choose",
              enter_method: eE[e]
            }
          });
        }
      },
      onImageModeDropdownVisibleChange: async (e, t) => {
        if (e) {
          let e = await a();
          arrayObjectForeach.arrayObjectForeach(t, t => {
            n({
              eventName: "aippt_selection_tool_bar_show",
              slideParams: {
                first_bar_type_button_name: "second_bar_edit_picture",
                second_bar_type_button_name: eE[t],
                ...e
              }
            });
          });
        }
      },
      onClickImageDropdownItem: async (e, t) => {
        if (e !== t) {
          let t = await a();
          n({
            eventName: "aippt_selection_tool_bar_click",
            slideParams: {
              first_bar_type_button_name: "second_bar_edit_picture",
              second_bar_type_button_name: eE[e],
              ...t
            }
          });
        }
      },
      handleReplaceImage: e => d(e).finally(s)
    });
  };
  let e1 = e => {
    let {
      type: t,
      selectionBounds: i,
      getPopupContainer: r,
      slidesToken: n,
      config: a
    } = e;
    let {
      trackSlidesEvent: s,
      imageReplace: o,
      intelligentEdit: d,
      clearForceHideToolbox: c,
      forceHideToolbox: u
    } = a;
    let {
      reset: m,
      notResetSelectionClassName: g
    } = selectionStoreHook.useSelectionStore();
    let h = reactCoreLibraryReexport.useRef(null);
    let p = reactCoreLibraryReexport.useRef(null);
    j([p.current, h.current], () => {
      m();
    }, "mouseup");
    let {
      width: f,
      height: _
    } = resizeObserverHooks.useResizeObserverEx({
      ref: p
    });
    let b = $({
      contentHeight: _,
      contentWidth: f,
      selectionBounds: i,
      getPopupContainer: r
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (u != null) {
        u();
      }
      return () => {
        if (c != null) {
          c();
        }
        m();
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: g,
        ref: p,
        style: {
          position: "absolute",
          zIndex: 9999999,
          maxWidth: "calc(100% - 30px)",
          ...(b ? {
            top: b.top,
            left: b.left
          } : {
            top: 0,
            left: 0
          })
        },
        children: (() => {
          switch (t) {
            case selectionStoreHook.ImageEditTypes.ImageV2:
              if (o) {
                return reactJsxRuntimeCoreReexport.jsx(eN, {
                  getPopupContainer: () => h.current || document.body,
                  placement: b.isSelectBarOnTop ? "bottom" : "top",
                  slidesToken: n,
                  config: o,
                  trackSlidesEvent: s,
                  getElementReportParams: a.getElementReportParams,
                  t: a.t
                });
              } else {
                return null;
              }
            case selectionStoreHook.ImageEditTypes.Image:
              if (o) {
                return reactJsxRuntimeCoreReexport.jsx(e0, {
                  getPopupContainer: () => h.current || document.body,
                  placement: b.isSelectBarOnTop ? "bottom" : "top",
                  config: o,
                  trackSlidesEvent: s,
                  getElementReportParams: a.getElementReportParams,
                  t: a.t
                });
              } else {
                return null;
              }
            case selectionStoreHook.ImageEditTypes.IntelligentEdit:
              if (d) {
                return reactJsxRuntimeCoreReexport.jsx(M, {
                  sendIntelligentEditMessage: d.sendIntelligentEditMessage,
                  t: a.t
                });
              } else {
                return null;
              }
            default:
              return null;
          }
        })()
      }), reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx("div", {
        ref: h,
        className: g,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          zIndex: 99999999
        }
      }), document.body)]
    });
  };
  let e2 = e => {
    let {
      containerRef: t,
      slidesToken: i,
      config: r
    } = e;
    let {
      selection: n,
      reset: a
    } = selectionStoreHook.useSelectionStore();
    let {
      clearForceHideToolbox: s
    } = r;
    reactCoreLibraryReexport.useEffect(() => () => {
      a();
      s();
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!n) {
        s();
      }
    }, [n, s]);
    if (n == null ? undefined : n.selectionBounds) {
      return reactJsxRuntimeCoreReexport.jsx(e1, {
        type: n.type,
        selectionBounds: n.selectionBounds,
        getPopupContainer: () => {
          return t.current ?? document.body;
        },
        slidesToken: i,
        config: r
      });
    } else {
      return null;
    }
  };
  var aiPptMemoryPerformanceMetricsLogger = require("ai-ppt-memory-performance-metrics-logger") /*id: 9774*/;
  var aiPptMetricsConstants = require("ai-ppt-metrics-constants") /*id: 533090*/;
  var useThreadLoginIgnore = require("use-thread-login-ignore") /*id: 246636*/;
  function e8(e, t) {
    var i;
    if ((i = e.contentWindow) !== null && i !== undefined) {
      i.postMessage({
        type: "SLIDES_SET_FOCUS_STATE",
        focus: t
      }, "*");
    }
  }
  var getterSetterModule = require("getter-setter-module") /*id: 686512*/;
  var aiPptIframeManager = require("ai-ppt-iframe-manager") /*id: 788603*/;
  class e7 extends MouseEvent {
    constructor(...e) {
      var t;
      var i;
      super(...e);
      if ((t = typeof (i = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var i = e[Symbol.toPrimitive];
        if (i !== undefined) {
          var r = i.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(t = "isAiPPTEvent", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: true,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = true;
      }
    }
  }
  var flowAiPptIframeConstants = require("flow-ai-ppt-iframe-constants") /*id: 625035*/;
  let tt = e => {
    let {
      bizDeps: t
    } = e;
    let i = reactCoreLibraryReexport.useMemo(() => {
      let e = document.createElement("iframe");
      return new aiPptIframeManager.AiPptIframeManager({
        bizDeps: t,
        iframe: e
      });
    }, []);
    let r = i.getIframe();
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        let e = new e7("mousedown", {
          bubbles: true,
          cancelable: true,
          view: window
        });
        r.dispatchEvent(e);
      };
      i.on(flowAiPptIframeConstants.uiEventNames.onMouseDownOutside, e);
      let t = () => {
        let e = new e7("mouseup", {
          bubbles: true,
          cancelable: true,
          view: window
        });
        r.dispatchEvent(e);
      };
      i.on(flowAiPptIframeConstants.uiEventNames.onMouseUpOutside, t);
      let n = e => {
        if (!e.isAiPPTEvent) {
          i.emitToChild(flowAiPptIframeConstants.uiEventNames.onMouseDownOutside, null);
        }
      };
      document.documentElement.addEventListener("mousedown", n, {
        capture: true
      });
      return () => {
        document.documentElement.removeEventListener("mousedown", n, {
          capture: true
        });
        i.off(flowAiPptIframeConstants.uiEventNames.onMouseDownOutside, e);
        i.off(flowAiPptIframeConstants.uiEventNames.onMouseUpOutside, t);
        i.destroy();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        i.updateBizDeps(t);
      }
    }, [t, i]);
    reactCoreLibraryReexport.useEffect(() => {
      getterSetterModule.setValue(i);
      let e = themeDetectionUtility.observeThemeChange(r, e => {
        i.emitToChild(flowAiPptIframeConstants.uiEventNames.onThemeChange, e);
      });
      let t = function (e) {
        let t;
        if (!e) {
          return;
        }
        let i = false;
        let r = i => {
          let r = i.target === e;
          if (r !== t) {
            e8(e, t = r);
          }
        };
        document.body.addEventListener("mousedown", r, {
          capture: true
        });
        let n = () => {
          let r = document.activeElement === e;
          if (r !== t) {
            e8(e, t = r);
          }
          if (!i) {
            setTimeout(n, 1000);
          }
        };
        n();
        return () => {
          document.body.removeEventListener("mousedown", r);
          i = true;
        };
      }(r);
      return () => {
        getterSetterModule.setValue();
        if (e != null) {
          e();
        }
        if (t != null) {
          t();
        }
      };
    }, []);
    return i;
  };
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  let tn = {
    start: "",
    center: "justify-center",
    end: "justify-end"
  };
  let ta = e => {
    let {
      classNames: t,
      title: i,
      description: r,
      footer: n,
      image: a,
      verticalAlign: l = "center",
      secondaryButtonProps: s,
      primaryButtonProps: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: classNamesMergeUtil.mergeClassNames("flex h-full w-full max-w-[480px] flex-col items-center", tn[l], t == null ? undefined : t.wrapper),
      children: [typeof a == "string" ? reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(a, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFWbFl%bXhNTWxKcFp$TXhN$0Z%T1hwamJ$MTJaRmRyZ*xwSFNq%k1WM$owWTBo%05$d3lWblJq%0ZJM$RHN$Nlb$ZI%m5s-%0xWj-"
        }),
        alt: "",
        className: classNamesMergeUtil.mergeClassNames("mb-16", t == null ? undefined : t.image)
      }) : a || null, i ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames(`
              mb-4 text-center
              [font-size:16px]
              leading-24
              [font-weight:500]
              text-dbx-text-primary
            `, t == null ? undefined : t.title),
        children: i
      }) : null, r ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames(`
              [font-size:14px]
              leading-22
              [font-weight:400]
              whitespace-pre-line text-dbx-text-tertiary
            `, t == null ? undefined : t.description),
        children: r
      }) : null, n || reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "mt-16 flex",
        children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          ...s,
          className: classNamesMergeUtil.mergeClassNames("mr-12", s == null ? undefined : s.className),
          color: "grey-outline",
          size: "md",
          variant: "rectangle"
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          ...o,
          color: "brand-filled",
          size: "md",
          variant: "rectangle"
        })]
      })]
    });
  };
  var tl = require.p + "static/image/pic-empty-no-permission.65da2b03.png";
  var ts = require.p + "static/image/pic-empty-no-doc.024a1975.png";
  var to = require.p + "static/image/pic-empty-error.dd417e55.png";
  let td = e => {
    let {
      status: t,
      afterRender: i
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let n = reactCoreLibraryReexport.useRef({
      func: undefined
    });
    n.current.func = i;
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      var i;
      if ((e = (i = n.current).func) !== null && e !== undefined) {
        e.call(i);
      }
      aiPptMemoryPerformanceMetricsLogger.logPerformanceMetric(aiPptMetricsConstants.aiPptAppEvents.SlidesAppRenderComplete, 0, {
        renderStatus: t
      });
    }, []);
    if (t === accessStatusConstants.AccessStatus.Public) {
      return null;
    }
    let a = {
      [accessStatusConstants.AccessStatus.NoAccess]: {
        image: tl,
        title: r("slides_share_noAccess")
      },
      [accessStatusConstants.AccessStatus.Deleted]: {
        image: ts,
        title: r("slides_share_deleted")
      },
      [accessStatusConstants.AccessStatus.Error]: {
        image: to,
        title: r("slides_share_loadError")
      },
      [accessStatusConstants.AccessStatus.NotCompatible]: {
        image: to,
        title: r("slides_msg_featureNA_updateBrowser")
      }
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": `ai-ppt-fallback-${t}`,
      className: "size-full",
      children: reactJsxRuntimeCoreReexport.jsx(ta, {
        classNames: {
          wrapper: "m-auto gap-16",
          title: "mb-0"
        },
        image: reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(a[t].image, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1doaF$6RjNZM*hSZ*1NelNtcE1Naz%yWWxoQ2RtSnRWblZr%0%xMll6SjRjRnBI$m5wT$-xc*9Za2Q0-$ZsWFRuSk1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
          }),
          className: "size-120",
          "data-testid": "ai-ppt-page-fallback-image"
        }),
        title: a[t].title,
        footer: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {})
      })
    });
  };
  let tc = e => {
    let {
      status: t,
      afterRender: i,
      children: r
    } = e;
    if (t !== accessStatusConstants.AccessStatus.Public) {
      return reactJsxRuntimeCoreReexport.jsx(td, {
        status: t,
        afterRender: i
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: r
      });
    }
  };
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  var slideToastManager = require("slide-toast-manager") /*id: 842073*/;
  let tg = () => {
    reactCoreLibraryReexport.useEffect(() => {
      slideToastManager.slideToastManager.init();
      return () => {
        slideToastManager.slideToastManager.destroy();
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(dbxSonnerToasterWrapper.DbxToaster, {
      id: slideToastManager.slideToastManager.toastContainerId
    });
  };
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let tf = e => {
    try {
      return new URLSearchParams(e).get("version");
    } catch {
      return;
    }
  };
  function t_() {
    return {
      ttv: 0,
      hitSSRFG: false
    };
  }
  let tv = new class {
    get() {
      return this.info;
    }
    set(e) {
      let {
        ttv: t,
        hitSSRFG: i
      } = e;
      if (t) {
        this.info.ttv = t;
      }
      if (i) {
        this.info.hitSSRFG = i;
      }
    }
    clear() {
      this.info = t_();
    }
    constructor() {
      var e;
      var t;
      var i;
      e = "info";
      t = t_();
      if ((e = typeof (i = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var i = e[Symbol.toPrimitive];
        if (i !== undefined) {
          var r = i.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }();
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  let tx = (e, t) => e.source === t.contentWindow;
  let tS = (e, t, i, r) => {
    var n;
    if ((n = e.contentWindow) !== null && n !== undefined) {
      n.postMessage({
        type: t,
        payload: i,
        context: r
      }, "*");
    }
  };
  function ty(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class tR {
    init() {
      window.addEventListener("message", this.handleMessage);
    }
    destroy() {
      this._listeners = [];
      this._requestPool.clear();
      window.removeEventListener("message", this.handleMessage);
    }
    constructor(e) {
      ty(this, "$frame", undefined);
      ty(this, "_listeners", []);
      ty(this, "_requestPool", new Map());
      ty(this, "handleMessage", e => {
        if (!tx(e, this.$frame)) {
          return;
        }
        let {
          type: t,
          payload: i,
          context: r
        } = e.data;
        let n = [];
        this._listeners.forEach(e => {
          if (e.type === t) {
            if (e.opts?.once) {
              n.push(e);
            }
            try {
              e.callback(i, r);
            } catch (e) {}
          }
        });
        n.forEach(e => {
          this._listeners = this._listeners.filter(t => t !== e);
        });
        if (r == null ? undefined : r._request_id_) {
          let e = this._requestPool.get(r._request_id_);
          if (e) {
            clearTimeout(e.timeoutId);
            e.resolve(i);
            this._requestPool.delete(r._request_id_);
          }
        }
      });
      ty(this, "request", (e, t, i) => {
        let r = uuidGeneratorUtil.generateUuid();
        return new Promise((n, a) => {
          let s = setTimeout(() => {
            this._requestPool.delete(r);
            a(Error("request timeout"));
          }, (i == null ? undefined : i.timeout) ?? 3000);
          this._requestPool.set(r, {
            resolve: n,
            reject: a,
            timeoutId: s
          });
          tS(this.$frame, e, t, {
            _request_id_: r
          });
        });
      });
      ty(this, "sendCommand", (e, t) => {
        tS(this.$frame, e, t);
      });
      ty(this, "addEventListener", (e, t, i) => {
        this._listeners.push({
          type: e,
          callback: t,
          opts: i
        });
        return () => {
          this._listeners = this._listeners.filter(e => e.callback !== t);
        };
      });
      ty(this, "removeEventListener", (e, t) => {
        this._listeners = this._listeners.filter(i => i.type !== e || i.callback !== t);
      });
      this.$frame = e;
      this.init();
    }
  }
  function tP(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class tC extends eventEmitterWrapper_1.eventEmitter {
    constructor(e) {
      super();
      tP(this, "communication", undefined);
      tP(this, "$frame", undefined);
      tP(this, "init", () => {
        this.bind();
      });
      tP(this, "handleSlideSDKReady", e => {
        this.emit("load", e);
      });
      tP(this, "handleSlideSandboxReady", () => {
        this.emit("sandbox-ready");
      });
      tP(this, "handleInitSDKError", e => {
        this.emit("error", e);
      });
      tP(this, "bind", () => {
        this.communication.addEventListener("sandbox-ready", this.handleSlideSandboxReady, {
          once: true
        });
        this.communication.addEventListener("load", this.handleSlideSDKReady, {
          once: true
        });
        this.communication.addEventListener("error", this.handleInitSDKError);
      });
      tP(this, "unbind", () => {
        this.communication.removeEventListener("sandbox-ready", this.handleSlideSandboxReady);
        this.communication.removeEventListener("load", this.handleSlideSDKReady);
        this.communication.removeEventListener("error", this.handleInitSDKError);
      });
      tP(this, "destroy", () => {
        this.communication.destroy();
        this.removeAllListeners();
        this.unbind();
      });
      this.$frame = e;
      this.communication = new tR(e);
      this.init();
    }
  }
  var globalEventEmitter_1 = require("global-event-emitter_1") /*id: 87667*/;
  let tj = e => {
    let {
      iframeSrc: t,
      slidesLoading: i,
      onStartLoad: r,
      setSlidesLoading: n,
      setSlidesError: a,
      slidesNotCompatible: s,
      slideAppRef: o,
      resetFunc: d,
      parentRpcClient: c,
      onInit: u,
      onReady: m,
      scene: g,
      perfStartTime: h,
      driveClickTime: p,
      openCanvasTime: f,
      getSlideMsgCommonParams: _,
      onDestroy: v,
      containerRef: b
    } = e;
    let w = c.getIframe();
    let S = reactCoreLibraryReexport.useRef(_);
    S.current = _;
    let y = reactCoreLibraryReexport.useRef({});
    let R = reactCoreLibraryReexport.useCallback((e, t) => {
      y.current[e] = t || Date.now();
    }, [y]);
    reactCoreLibraryReexport.useEffect(() => {
      R("iframeDomDidMount");
      if (r != null) {
        r();
      }
      n(true);
      if (s) {
        a(true);
        return;
      }
      a(false);
      let e = performance.now();
      let i = aiPptMemoryPerformanceMetricsLogger.getMemoryUsage();
      let l = null;
      let _ = new tC(w);
      o.current = _;
      _.on("sandbox-ready", () => {
        aiPptMemoryPerformanceMetricsLogger.logPerformanceMetric(aiPptMetricsConstants.aiPptAppEvents.SandBoxReady, performance.now() - e);
        R("sandboxReady");
      });
      _.on("load", r => {
        var s;
        var o;
        let _ = false;
        R("hostReceiveLoad");
        aiPptMemoryPerformanceMetricsLogger.logPerformanceMetric(aiPptMetricsConstants.aiPptAppEvents.AppReady, performance.now() - e);
        d();
        aiPptMemoryPerformanceMetricsLogger.logPerformanceMetric(aiPptMetricsConstants.aiPptAppEvents.SlidesAppRenderComplete, 0, {
          renderStatus: "appReady"
        });
        aiPptMemoryPerformanceMetricsLogger.logMemoryUsage(aiPptMetricsConstants.aiPptAppEvents.AppReady, i);
        if (u != null) {
          u({
            client: c
          });
        }
        if (m != null) {
          m({
            iframeElm: w
          });
        }
        let {
          ttv: v,
          hitSSRFG: b
        } = tv.get();
        if (v > 0) {
          R("ttv", v);
          _ = true;
        } else {
          R("ttv");
        }
        n(false);
        R("afterHideLoading");
        globalEventEmitter_1.globalEmitter.emit("slide-app-ready", {
          client: c
        });
        let x = r == null ? undefined : r.perfMetrics;
        if (x && ((s = performance) === null || s === undefined ? undefined : s.timing?.navigationStart) && g && h) {
          let e = [tE.SHARE_LANDING_PAGE, tE.URL_ACTION_OPEN_CHAT].includes(g) ? performance.timing.navigationStart : h;
          let i = (t, i) => {
            t[i] = t[i] - e;
          };
          let r = y.current.afterHideLoading;
          Object.keys(x).forEach(e => i(x, e));
          Object.keys(y.current).forEach(e => i(y.current, e));
          if (g === tE.URL_ACTION_OPEN_CHAT && f) {
            if (p) {
              R("driveClickToUrl", e - p);
            }
            R("urlToOpenCanvas", f - e);
            R("openCanvasToAfterHideLoading", r - f);
          }
          let n = tf(t);
          loggerServiceCore.defaultLogger.persist.log({
            eventName: "ai-ppt-slide-perf-stage",
            meta: {
              scene: g,
              isVersion: !!n && !!(Number(n) > 0),
              hitSSRFG: b,
              hasSSR: _,
              ...x,
              ...y.current,
              ...(((o = S.current) === null || o === undefined ? undefined : o.call(S)) || {})
            }
          });
        }
        l = setTimeout(() => {
          aiPptMemoryPerformanceMetricsLogger.logMemoryUsage(aiPptMetricsConstants.aiPptAppEvents.AppReady30S, i);
        }, 30000);
      });
      _.on("error", e => {
        n(false);
        if (m != null) {
          m({
            iframeElm: null
          });
        }
        if (!e.isTimeout) {
          a(true);
        }
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "ai-ppt-slide-init-failed",
          error: e,
          meta: {
            reportJsError: true,
            errorBoundaryName: "ai-ppt-slide-init-failed"
          }
        });
      });
      _.communication.addEventListener("tea", e => {
        if (!window.location.pathname.includes("/share")) {
          var t;
          let i = ((t = S.current) === null || t === undefined ? undefined : t.call(S)) || {};
          if (e.eventName !== "output_preview_click") {
            i = throttledOmitPathStringify.omitPathStringify(i, ["enter_method"]);
          }
          if (!["download", "right_click_copy"].includes(e.eventName)) {
            i = throttledOmitPathStringify.omitPathStringify(i, ["section_id"]);
          }
          teaAnalyticsEventTracker.trackEvent(e.eventName, {
            ...i,
            ...e.slideParams
          });
        }
      });
      return () => {
        globalEventEmitter_1.globalEmitter.emit("slide-app-destroy");
        if (v != null) {
          v();
        }
        if (_ != null) {
          _.destroy();
        }
        if (l) {
          clearTimeout(l);
        }
      };
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      w.setAttribute("class", "bg-s-color-bg-content-base");
      w.setAttribute("style", "border:none; overflow:hidden");
      w.setAttribute("allow", "clipboard-read; clipboard-write; fullscreen;");
      w.setAttribute("src", xssContentSanitizer.sanitizeUrl(t, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1doaF$6RjNZM*hSZ*1NelNtcE1Naz%yWWxoQ2RtSnRWblZr%0%xMl$r-z$N$mx0%m5a$k1uaHdXa2RX%W1OS$F-WlpNamwwWTBjNWRWcFhO$EJqZ$RsNllrZHNhMXB%T$doalNFRjBZekpHZFZwSFNuWmxRemx3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
      }));
      if (!/^\w+:\/\//.test(t) || t.startsWith(location.origin)) {
        w.setAttribute("sandbox", "allow-scripts allow-popups allow-forms allow-downloads allow-same-origin");
      }
      if ((e = b.current) !== null && e !== undefined) {
        e.prepend(w);
      }
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      w.setAttribute("data-testid", `ai-ppt-doubao-slides-app${i ? "-loading" : ""}`);
    }, [i]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
  };
  (a = {}).CONVERSATION_CHAT = "conversation_chat";
  a.CONVERSATION_SHARE = "conversation_share";
  a.SHARE_LANDING_PAGE = "share_landing_page";
  a.URL_ACTION_OPEN_CHAT = "url_action_open_chat";
  let tE = a;
  let tT = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      scene: i,
      perfStartTime: n,
      driveClickTime: a,
      openCanvasTime: s,
      className: d,
      disableLoadingSkeleton: c = false,
      keepShowLoadingSkeleton: u = false,
      pptStatus: m = accessStatusConstants.AccessStatus.Public,
      docToken: g,
      bizDeps: h,
      version: p,
      onStartLoad: _,
      onInit: v,
      onReady: b,
      onDestroy: w,
      getSlideMsgCommonParams: S,
      selectBarConfig: P
    } = e;
    let C = reactCoreLibraryReexport.useRef(null);
    let $ = reactCoreLibraryReexport.useRef();
    let [j, T] = reactCoreLibraryReexport.useState(true);
    let [k, N] = reactCoreLibraryReexport.useState(false);
    let I = !function () {
      if (r !== undefined) {
        return r;
      }
      try {
        Function("return {}?.a");
        r = true;
      } catch {
        r = false;
      }
      return r;
    }();
    let M = tt({
      bizDeps: h
    });
    useThreadLoginIgnore.useIgnoreLogin();
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      exportPDF: () => M.exportPDF(),
      exportPPTX: () => M.exportPPTX(),
      getSlidesTitle: () => M.getSlidesTitle(),
      openFindReplacePanel: () => M.openFindReplacePanel(),
      openFontReplacePanel: () => M.openFontReplacePanel(),
      openHistoryList: () => M.openHistoryList(),
      presentationFromBeginning: () => M.presentationFromBeginning(),
      presentationFromCurrentPage: () => M.startPlayFromCurrentPage(),
      revertHistory: (e, t) => M.revertHistory(e, t)
    }));
    let W = f({
      selectBarConfig: P,
      docToken: g,
      version: p
    });
    let Z = reactCoreLibraryReexport.useMemo(() => {
      let e = m;
      if (I) {
        e = accessStatusConstants.AccessStatus.NotCompatible;
      } else if (k) {
        e = accessStatusConstants.AccessStatus.Error;
      }
      return e;
    }, [m, I, k]);
    let F = function (e, t) {
      let i = t !== accessStatusConstants.AccessStatus.Public;
      let r = reactCoreLibraryReexport.useRef({
        id: null
      });
      let n = reactCoreLibraryReexport.useCallback(() => {
        if (r.current.id !== null) {
          clearTimeout(r.current.id);
        }
      }, []);
      reactCoreLibraryReexport.useEffect(() => {
        n();
        aiPptMemoryPerformanceMetricsLogger.logPerformanceMetric(aiPptMetricsConstants.aiPptAppEvents.DoubaoSlideApp, 0);
        r.current.id = setTimeout(() => {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "ai-ppt-slide-init-failed",
            error: Error("doubao-slide-app-render-timeout 20s"),
            meta: {
              reportJsError: true,
              errorBoundaryName: "doubao-slide-app-render-timeout"
            }
          });
        }, 20000);
        return () => {
          r.current.id = null;
        };
      }, [e, i]);
      return n;
    }(W, Z);
    return reactJsxRuntimeCoreReexport.jsx(tc, {
      status: Z,
      afterRender: F,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o("wrapper-ov2vzu", d),
        ref: C,
        children: [reactJsxRuntimeCoreReexport.jsx(tg, {}), reactJsxRuntimeCoreReexport.jsx(tj, {
          containerRef: C,
          iframeSrc: W,
          slidesLoading: j,
          onStartLoad: _,
          setSlidesLoading: T,
          setSlidesError: N,
          slidesNotCompatible: I,
          slideAppRef: $,
          resetFunc: F,
          parentRpcClient: M,
          onInit: v,
          scene: i,
          perfStartTime: n,
          driveClickTime: a,
          openCanvasTime: s,
          getSlideMsgCommonParams: S,
          onDestroy: w,
          onReady: b
        }), !c && (j || u) ? reactJsxRuntimeCoreReexport.jsx(y, {}) : null, P && reactJsxRuntimeCoreReexport.jsx(e2, {
          containerRef: C,
          slidesToken: g,
          config: P
        })]
      })
    });
  });
  require.d(exports, {
    slideSceneTypes: function () {
      return tE;
    },
    AiPptSlidesApp: function () {
      return tT;
    }
  });
}