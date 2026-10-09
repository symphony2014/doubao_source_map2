// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ed' to 'useHopDetection'
// - Renamed export 'AC' to 'hasValue'
// - Renamed export 'Un' to 'messageType'
// - Renamed export 'dO' to 'serializeAstToHtml'
// - Renamed export 'SC' to 'useLanguageDetection'
// - Renamed export 'eL' to 'parseMarkdown'
// - Renamed export 'Xy' to 'isHeadingNode'
// - Renamed export 'bI' to 'MdBoxComponent'
// - Renamed export 'v2' to 'useMdBoxSlots'
// - Renamed export 'jO' to 'hasChildren'
// - Renamed export 'FU' to 'useSmoothText'
// - Renamed export 'QJ' to 'conditionalHtmlEncode'
// - Renamed export 'XS' to 'AstPlugin'
// - Renamed export 'f' to 'extractTagName'
// - Renamed export 'mB' to 'extractText'
// - Renamed export 'A9' to 'useMarkdownProcessor'
// - Renamed export 'Zl' to 'isClosingTag'
// - Renamed export 'UY' to 'hasNodeChildren'
// - Renamed export 'jH' to 'useSmoothText_1'
// - Renamed export 'wj' to 'processMarkdown'
// - Renamed export 'U$' to 'serializeAst'
// - Renamed export 'oh' to 'HookPhase'
// - Renamed export 'C_' to 'isRootNode'
// - Renamed export 'Xd' to 'isNodeType'
// - Renamed export 'zj' to 'serializeMarkdown'
// - Renamed export 'zu' to 'statusType'
// - Renamed export 'MP' to 'PluginBase'
// - Renamed export 'Or' to 'isImageNode'
// - Renamed export 'C5' to 'retryWithDelay'
// - Renamed export 'vj' to 'iconType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51369.a0f1843b.js
         * chunkId: 51369
         * moduleId: 4463
         */
module.exports = function (module, exports, require) {
  let n;
  var l;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  let d = e => {
    let {
      type: t,
      error: r
    } = e;
    reactCoreLibraryReexport.useEffect(() => {}, []);
    return null;
  };
  var c = {
    container: "container-P2rR72",
    active: "active-NynLFr",
    blink: "blink-vIbMiD",
    "no-list": "no-list-SdOki6",
    noList: "no-list-SdOki6",
    frame: "frame-nrAx9R",
    "align-center": "align-center-YScpMT",
    alignCenter: "align-center-YScpMT",
    "align-right": "align-right-QiMYPY",
    alignRight: "align-right-QiMYPY",
    "float-left": "float-left-ycz4cJ",
    floatLeft: "float-left-ycz4cJ",
    "float-right": "float-right-nvj6N4",
    floatRight: "float-right-nvj6N4",
    enabled: "enabled-ZtMR91",
    "theme-samantha": "theme-samantha-uDexJL",
    themeSamantha: "theme-samantha-uDexJL",
    cursorAnimation: "cursorAnimation-YJVvGp"
  };
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = () => {
    let e = reactCoreLibraryReexport.useRef(null);
    let t = reactCoreLibraryReexport.useRef(null);
    let r = reactCoreLibraryReexport.useCallback(() => {
      let r = e.current;
      let n = t.current;
      if (!r || !n) {
        return;
      }
      let {
        scrollLeft: l
      } = r;
      let i = r.scrollWidth - r.clientWidth - l;
      let {
        paddingLeft: a,
        paddingRight: o
      } = getComputedStyle(r);
      let s = parseFloat(a);
      let u = parseFloat(o);
      let d = Math.abs(r.scrollWidth - r.clientWidth) > 1;
      let c = Math.abs(l) < 1;
      let h = Math.abs(i) < 1;
      n.setAttribute("data-scroll-inline-overflow", d ? "true" : "false");
      n.setAttribute("data-scroll-inline-at-start", c ? "true" : "false");
      n.setAttribute("data-scroll-inline-start-overflow", l - s > 1 ? "true" : "false");
      n.setAttribute("data-scroll-inline-at-end", h ? "true" : "false");
      n.setAttribute("data-scroll-inline-end-overflow", i - u > 1 ? "true" : "false");
    }, [e, t]);
    let n = reactCoreLibraryReexport.useCallback(debounceUtilWrapper.createDebounce(r, 50, {
      leading: true,
      trailing: true
    }), [r]);
    reactCoreLibraryReexport.useEffect(() => () => {
      n.cancel();
    }, [n]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      r();
    }, [r]);
    let l = reactCoreLibraryReexport.useRef(null);
    let a = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      let t = e.current;
      let n = t == null ? undefined : t.querySelector(":scope > table");
      if (!t || !n) {
        return;
      }
      let i = new ResizeObserver(r);
      l.current = i;
      i.observe(t);
      let o = new ResizeObserver(r);
      a.current = o;
      o.observe(n);
      return () => {
        i.disconnect();
        o.disconnect();
      };
    }, [r]);
    return {
      tableRootRef: t,
      scrollContainerRef: e,
      handleScroll: n
    };
  };
  let g = e => {
    let {
      children: t,
      className: r,
      raw: n,
      parents: l,
      ...i
    } = e;
    let {
      tableRootRef: a,
      scrollContainerRef: o,
      handleScroll: s
    } = m();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: a,
      className: u(r, "mdbox-table-root", "table-container-cYf_5N"),
      ...i,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        ref: o,
        onScroll: s,
        className: u("table-scroll-container-Gyf4hQ", "mdbox-table-scroll-container"),
        children: reactJsxRuntimeCoreReexport.jsx("table", {
          children: t
        })
      })
    });
  };
  let p = e => {
    let {
      className: t,
      style: r,
      children: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("strong", {
      className: t,
      style: r,
      children: n
    });
  };
  var isEqualUtil_1 = require("is-equal-util_1") /*id: 999658*/;
  var reactMemoHooks = require("react-memo-hooks") /*id: 573742*/;
  let w = e => {
    let t = e.Provider;
    return e => {
      let {
        value: r,
        afterMemoedProcess: n,
        children: l
      } = e;
      let a = reactMemoHooks.useCachedValue(r, isEqualUtil_1.isEqual);
      let o = reactCoreLibraryReexport.useMemo(() => n ? n(a) : a, [a]);
      return reactJsxRuntimeCoreReexport.jsx(t, {
        value: o,
        children: l
      });
    };
  };
  let b = reactCoreLibraryReexport.createContext(null);
  w(b);
  let j = e => {
    let {
      children: t,
      className: r,
      forceBrInterSpacing: n = false,
      raw: l,
      parents: a,
      ...o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: u(r, "paragraph-pP9ZLC", "paragraph-element", {
        "br-paragraph-space": n
      }),
      ...o,
      children: reactCoreLibraryReexport.isValidElement(t) ? reactCoreLibraryReexport.cloneElement(t, {
        key: "0"
      }) : t
    });
  };
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var htmlToReactUtils = require("html-to-react-utils") /*id: 544589*/;
  var reactErrorBoundary = require("react-error-boundary") /*id: 528804*/;
  var themeConfigContext = require("theme-config-context") /*id: 82938*/;
  let S = reactCoreLibraryReexport.createContext(null);
  let L = w(S);
  let _ = () => {
    let e = reactCoreLibraryReexport.useContext(S);
    if (!e) {
      throw Error("[MdBox Internal Error] MdBoxSlotsInnerContext Required");
    }
    return e;
  };
  let E = (e, t) => {
    let r = r => {
      let l = _();
      let {
        catchSlotsError: i
      } = themeConfigContext.useThemeConfig();
      let a = l[e] ?? t;
      let {
        SlotsErrorFallback: o,
        SlotsWrapper: s
      } = l;
      if (!a) {
        return null;
      }
      let u = reactJsxRuntimeCoreReexport.jsx(a, {
        ...r
      });
      if (i) {
        return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundary.ErrorBoundary, {
          fallbackRender: t => {
            let {
              error: n,
              resetErrorBoundary: l
            } = t;
            if (o) {
              return reactJsxRuntimeCoreReexport.jsx(o, {
                type: e,
                props: r,
                error: n,
                onReset: l
              });
            } else {
              return null;
            }
          },
          children: s ? reactJsxRuntimeCoreReexport.jsx(s, {
            type: e,
            props: r,
            children: u
          }) : u
        });
      } else {
        return u;
      }
    };
    r.displayName = e;
    return r;
  };
  let M = "auto-hide-last-sibling-br";
  let R = e => {
    let {
      node: r,
      renderRest: n,
      style: l,
      className: a,
      children: o
    } = e;
    let {
      BreakLine: s
    } = _();
    let {
      style: d,
      className: c,
      ...h
    } = htmlToReactUtils.attributesToProps((r == null ? undefined : r.attribs) ?? {});
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [r && reactCoreLibraryReexport.createElement(r.name, {
        ...h,
        style: {
          ...d,
          ...l
        },
        className: u(c, a, M)
      }, ...r.children.map((e, t) => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
        children: n == null ? undefined : n(e)
      }, t))), isFunctionUtil_1.isFunction(o) ? o({
        className: u(M)
      }) : o, s && reactJsxRuntimeCoreReexport.jsx(s, {})]
    });
  };
  let B = e => {
    let {
      className: t,
      style: r,
      node: n,
      children: l,
      renderRest: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(R, {
      className: t,
      style: r,
      node: n,
      renderRest: i,
      children: l
    });
  };
  var linkComponentHandler = require("link-component-handler") /*id: 94706*/;
  var mathInlineComponent = require("math-inline-component") /*id: 762075*/;
  var codeBlockComponent_1 = require("code-block-component_1") /*id: 822392*/;
  var flashingIndicatorComponent = require("flashing-indicator-component") /*id: 552709*/;
  var reactOptimizedImageWrapper = require("react-optimized-image-wrapper") /*id: 784484*/;
  let D = e => {
    let {
      className: t,
      style: r,
      node: n,
      children: l,
      renderRest: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(R, {
      className: t,
      style: r,
      node: n,
      renderRest: i,
      children: l
    });
  };
  let O = e => {
    let {
      className: t,
      style: r,
      children: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("em", {
      className: t,
      style: r,
      children: n
    });
  };
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var H = clipboardCopyHelper;
  let $ = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M4.797 16.856a8.28 8.28 0 0 0 6.27 2.87h.008A8.28 8.28 0 0 0 14.372 3.84a11.6 11.6 0 0 1-1.658 7.714 11.62 11.62 0 0 1-7.917 5.303M13.415 1.43a10.28 10.28 0 0 1-2.348 20.296 10.28 10.28 0 0 1-8.883-5.103c-.397-.74.155-1.605.912-1.609a9.617 9.617 0 0 0 9.011-12.258 1.093 1.093 0 0 1 1.308-1.326",
      clipRule: "evenodd"
    })
  });
  let U = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M9.227 16.127 19.953 5.4a1.214 1.214 0 0 1 1.717 1.717L10.085 18.702a1.214 1.214 0 0 1-1.716 0l-6.007-6.007a1.214 1.214 0 0 1 1.716-1.717z"
    })
  });
  let P = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M12 .5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10",
      clipRule: "evenodd"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M13 21.5a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0zM23.5 12a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M2.5 13a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM20.132 5.282l-.707.707a1 1 0 0 1-1.415-1.414l.707-.707a1 1 0 1 1 1.415 1.414M5.282 20.132l.708-.708a1 1 0 1 0-1.415-1.414l-.707.707a1 1 0 1 0 1.414 1.415M18.718 20.132l-.708-.707a1 1 0 0 1 1.415-1.414l.707.707a1 1 0 0 1-1.415 1.414M4.575 5.99A1 1 0 1 0 5.99 4.576l-.708-.707a1 1 0 0 0-1.414 1.414z"
    })]
  });
  let q = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M21.5 3.5V17a2 2 0 0 1-2 2h-2v2c0 1.105-.96 2-2.143 2H4.643C3.459 23 2.5 22.105 2.5 21V7.5c0-1.105.96-2 2.143-2H6.5v-2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2m-13 2h6.857c1.184 0 2.143.895 2.143 2V17h2V3.5h-11zm6.857 2H4.643V21h10.714z",
      clipRule: "evenodd"
    })
  });
  let W = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M7 9v6H5.2V9zm0-1v8H5c-.552 0-1-.299-1-.667V8.667C4 8.298 4.448 8 5 8z",
      clipRule: "evenodd"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      stroke: "currentColor",
      strokeLinejoin: "bevel",
      d: "m8.5 10 3 2-3 2M15.5 15h-4"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M17 9v6h1.8V9zm0-1v8h2c.552 0 1-.299 1-.667V8.667C20 8.298 19.552 8 19 8z",
      clipRule: "evenodd"
    })]
  });
  var uiConstantsModule = require("ui-constants-module") /*id: 631020*/;
  var X = {
    container: "container-wTN3kK",
    text: "text-lf94w4",
    icon: "icon-gK2KPZ",
    actions: "actions-zc5Zq7",
    item: "item-IhLri7",
    img: "img-jpmP4Z",
    hoverable: "hoverable-P8TAkg"
  };
  let G = e => {
    let {
      actions: t,
      code: r,
      language: n,
      defaultDark: l = false,
      left: a,
      onCopyCode: o,
      onDarkChange: s
    } = e;
    let [d, c] = reactCoreLibraryReexport.useState(l);
    let [h, m] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (s != null) {
        s(d);
      }
    }, [d]);
    let g = [{
      key: uiConstantsModule.iconType.Copy,
      target: reactJsxRuntimeCoreReexport.jsx("div", {
        className: u(X.icon, X.hoverable),
        "data-testid": "code_block_copy",
        onClick: () => {
          if (!h) {
            H(r);
            if (o != null) {
              o(r, n);
            }
            m(true);
            setTimeout(() => {
              m(false);
            }, 3000);
          }
        },
        children: h ? reactJsxRuntimeCoreReexport.jsx(U, {
          className: X.img
        }) : reactJsxRuntimeCoreReexport.jsx(q, {
          className: X.img
        })
      })
    }, {
      key: uiConstantsModule.iconType.DarkSwitch,
      target: reactJsxRuntimeCoreReexport.jsx("div", {
        className: u(X.icon, X.hoverable),
        "data-testid": "code_block_mode_switch",
        onClick: () => {
          c(!d);
        },
        children: d ? reactJsxRuntimeCoreReexport.jsx(P, {
          className: X.img
        }) : reactJsxRuntimeCoreReexport.jsx($, {
          className: X.img
        })
      })
    }];
    let p = reactMemoHooks.invokeCallback(() => {
      let e = g.slice();
      if (isFunctionUtil_1.isFunction(t)) {
        return t(e);
      } else if (t) {
        return [...e, ...t];
      } else {
        return e;
      }
    });
    let v = e => isFunctionUtil_1.isFunction(e) ? reactCoreLibraryReexport.createElement(e) : e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: X.container,
      children: [a ?? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: X.text,
        children: [reactJsxRuntimeCoreReexport.jsx(W, {
          className: X.icon
        }), n]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: X.actions,
        children: p.map(e => reactJsxRuntimeCoreReexport.jsx("div", {
          className: X.item,
          children: v(e.target)
        }, e.key))
      })]
    });
  };
  let V = e => {};
  let J = "plaintext";
  let Q = function (e, t = J) {
    let [r, n] = reactCoreLibraryReexport.useState(t);
    let l = async () => {
      if (r === J) {
        let t = await V(e);
        if (t) {
          n(t);
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      n(t);
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      l();
    }, [e, r]);
    return r;
  };
  var K = {
    container: "container-UFrJHY",
    dark: "dark-uCb3xb",
    "code-area": "code-area-bQbIXv",
    codeArea: "code-area-bQbIXv",
    content: "content-oKkWTK",
    "light-scrollbar": "light-scrollbar-rf7zzt",
    lightScrollbar: "light-scrollbar-rf7zzt"
  };
  let ee = e => {
    let {
      className: t,
      style: r,
      code: n,
      language: l,
      meta: a,
      loading: o,
      onCopyCode: s,
      showHeader: d = true,
      raw: c,
      parents: h,
      children: m,
      showDarkSwitch: g = true,
      dark: p,
      onDarkChange: v
    } = e;
    let {
      mode: x
    } = themeConfigContext.useThemeConfig();
    let w = p ?? x === "dark";
    let [b, j] = reactCoreLibraryReexport.useState(w);
    let k = w || b;
    let {
      CodeBlockHighlighter: y,
      CodeBlockHeader: N
    } = _();
    let S = Q(n, l);
    reactCoreLibraryReexport.useEffect(() => {
      j(w);
    }, [x]);
    reactCoreLibraryReexport.useEffect(() => {
      if (v != null) {
        v(k);
      }
    }, [k]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "code_block",
      className: u(K.container, t, "hide-indicator", {
        [K.dark]: k
      }),
      style: r,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: u(K["code-area"]),
        dir: "ltr",
        children: [d && N && reactJsxRuntimeCoreReexport.jsx(N, {
          language: S,
          code: n,
          meta: a,
          defaultDark: w,
          onCopyCode: s,
          loading: o,
          onDarkChange: j,
          actions: e => {
            let t = e;
            if (!g || w) {
              t = t.filter(e => e.key !== uiConstantsModule.iconType.DarkSwitch);
            }
            return t;
          }
        }), m || reactJsxRuntimeCoreReexport.jsx("div", {
          className: u(K.content, K[`content--${S.toLowerCase()}`]),
          children: y && reactJsxRuntimeCoreReexport.jsx(y, {
            code: n,
            language: l,
            raw: c,
            parents: h,
            dark: k
          })
        })]
      })
    });
  };
  let et = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsxs("g", {
      fill: "#000",
      fillOpacity: 0.85,
      children: [reactJsxRuntimeCoreReexport.jsx("rect", {
        width: 4,
        height: 4,
        x: 4,
        y: 10,
        rx: 2
      }), reactJsxRuntimeCoreReexport.jsx("rect", {
        width: 4,
        height: 4,
        x: 13,
        y: 5,
        rx: 2
      }), reactJsxRuntimeCoreReexport.jsx("rect", {
        width: 4,
        height: 4,
        x: 16,
        y: 10,
        rx: 2
      }), reactJsxRuntimeCoreReexport.jsx("rect", {
        width: 4,
        height: 4,
        x: 13,
        y: 15,
        rx: 2
      }), reactJsxRuntimeCoreReexport.jsx("rect", {
        width: 4,
        height: 4,
        x: 7,
        y: 15,
        rx: 2
      }), reactJsxRuntimeCoreReexport.jsx("rect", {
        width: 4,
        height: 4,
        x: 7,
        y: 5,
        rx: 2
      })]
    })
  });
  let er = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M21.707 7.293a1 1 0 0 0-1.414 0L12 15.586 3.707 7.293a1 1 0 0 0-1.414 1.414L10.586 17a2 2 0 0 0 2.828 0l8.293-8.293a1 1 0 0 0 0-1.414"
    })
  });
  let en = {
    copyTitle: "Copy",
    codeBarLoadingText: "Running",
    codeBarExpandedFinishedText: "Hide Detail",
    codeBarUnExpandFinishedText: "Show Detail"
  };
  var memoizedContextProvider = require("memoized-context-provider") /*id: 143858*/;
  var jsUtilFunctions = require("js-util-functions") /*id: 266643*/;
  let ea = reactCoreLibraryReexport.createContext(null);
  let eo = memoizedContextProvider.createMemoProvider(ea);
  let es = () => {
    let e = reactCoreLibraryReexport.useContext(ea);
    let t = jsUtilFunctions.invoke(() => e ? objectDefaultsUtil.defaults({
      ...e
    }, en) : en);
    return e => t[e];
  };
  var eu = {
    container: "container-VGN7xE",
    dark: "dark-DcqLg5",
    button: "button-L3npDO",
    icon: "icon-DXPPKY",
    reverse: "reverse-abUTge",
    title: "title-Z4XsWO",
    loading: "loading-kDPu9d",
    "loading-name": "loading-name-VUMxrS",
    loadingName: "loading-name-VUMxrS",
    rotating: "rotating-stS424",
    hoverable: "hoverable-eUDEYr"
  };
  let ed = e => {
    let t = es();
    let {
      mode: r
    } = themeConfigContext.useThemeConfig();
    let {
      loading: n,
      defaultExpand: l = false,
      showBar: a = true,
      children: o,
      expandedFinishedText: s = t("codeBarExpandedFinishedText"),
      unExpandFinishedText: d = t("codeBarUnExpandFinishedText"),
      codeBarLoadingText: c = t("codeBarLoadingText"),
      className: h,
      style: m,
      onCodeBarExpandChange: g,
      onCodeBarMounted: p
    } = e;
    let [v, x] = reactCoreLibraryReexport.useState(l);
    reactCoreLibraryReexport.useEffect(() => {
      x(l);
    }, [l]);
    reactCoreLibraryReexport.useEffect(() => {
      if (p != null) {
        p();
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [a && reactJsxRuntimeCoreReexport.jsx("div", {
        className: u(eu.container, eu[r]),
        children: n ? reactJsxRuntimeCoreReexport.jsxs("div", {
          className: u(eu.loading, h),
          onClick: () => x(e => !e),
          style: m,
          children: [reactJsxRuntimeCoreReexport.jsx(et, {
            className: u(eu.icon, eu.rotating)
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: eu.loadingName,
            children: c
          })]
        }) : reactJsxRuntimeCoreReexport.jsxs("div", {
          className: u(eu.button, eu.hoverable, h),
          "data-testid": "code-bar",
          onClick: () => {
            let e = !v;
            if (g != null) {
              g(e);
            }
            x(e);
          },
          style: m,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: eu.title,
            children: v ? s : d
          }), reactJsxRuntimeCoreReexport.jsx(er, {
            className: u(eu.icon, {
              [eu.reverse]: v
            })
          })]
        })
      }), o == null ? undefined : o(v)]
    });
  };
  var ec = {
    wrapper: "wrapper-GYqxgQ"
  };
  var eh = {
    container: "container-Uxvbjy"
  };
  let ef = e => {
    let {
      className: t,
      style: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: u(eh.container, "md-box-line-break", t),
      style: r
    });
  };
  let em = e => function (t) {
    let {
      className: r,
      ...l
    } = t;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: e && reactJsxRuntimeCoreReexport.jsx(e, {
        className: u(ec.wrapper, r, {
          [eh["non-select"]]: typeof navigator == "undefined" || !(n === undefined && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), n)
        }),
        ...l
      })
    });
  };
  let eg = e => {
    let {
      className: t,
      style: r,
      node: n,
      children: l,
      renderRest: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(R, {
      className: t,
      style: r,
      node: n,
      renderRest: i,
      children: l
    });
  };
  var useSmoothTextHook = require("use-smooth-text-hook") /*id: 899617*/;
  var markdownAutofixPlugins = require("markdown-autofix-plugins") /*id: 172658*/;
  var languageDetectionHook = require("language-detection-hook") /*id: 759514*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var assertErrorUtility = require("assert-error-utility") /*id: 27936*/;
  let ek = e => typeof HTMLElement == "undefined" ? e.nodeType === Node.ELEMENT_NODE : e instanceof HTMLElement;
  let ey = e => {
    for (let t of e.childNodes) {
      ey(t);
    }
    if (!ek(e)) {
      return;
    }
    let {
      customCopyText: t
    } = e.dataset;
    if (!isUndefinedCheck.isUndefined(t)) {
      e.textContent = t;
      return;
    }
    if (e.tagName.toLowerCase() === "br") {
      let t = document.createElement("span");
      t.textContent = "\n";
      if (e.parentElement) {
        e.parentElement.replaceChild(t, e);
      }
      return;
    }
  };
  let eN = e => !!e.querySelector("[data-custom-copy-text]");
  let eC = () => typeof navigator != "undefined" && !isUndefinedCheck.isUndefined(navigator.clipboard) && !isUndefinedCheck.isUndefined(navigator.clipboard.read) && !isUndefinedCheck.isUndefined(navigator.clipboard.write) && typeof ClipboardItem != "undefined";
  let eS = e => {
    let t = document.createDocumentFragment();
    let r = document.createElement("div");
    r.innerHTML = e;
    t.append(...r.childNodes);
    return t;
  };
  let eL = () => async () => {
    try {
      let t = window.getSelection();
      if (!(t == null ? undefined : t.rangeCount)) {
        return;
      }
      let r = t.getRangeAt(0).cloneContents();
      if (!eN(r) || !eC()) {
        return;
      }
      let n = await navigator.clipboard.read();
      let l = arrayFirstElement.getFirstElement(n);
      assertErrorUtility.assert(l);
      if (!l.types.includes("text/html")) {
        return;
      }
      let i = await l.getType("text/html");
      let a = await i.text();
      let o = eS(a);
      ey(o);
      let s = o.textContent ?? "";
      let u = new XMLSerializer().serializeToString(o);
      await navigator.clipboard.write([new ClipboardItem({
        "text/html": new Blob([u], {
          type: "text/html"
        }),
        "text/plain": new Blob([s], {
          type: "text/plain"
        })
      })]);
    } catch (e) {}
  };
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var markdownParserSerializer = require("markdown-parser-serializer") /*id: 512638*/;
  let eR = (e, t) => {
    if (e.type !== t.type) {
      if (markdownParserSerializer.hasChildren(e) && markdownParserSerializer.hasChildren(t)) {
        return {
          prevEndNode: e,
          endNode: t
        };
      } else {
        return null;
      }
    }
    if (!deepEqualUtil_1.deepEqual(e.children.map(e => e.type), t.children.map(e => e.type))) {
      return {
        prevEndNode: jsUtilFunctions.getProperty(e.children, e.children.length - 1),
        endNode: jsUtilFunctions.getProperty(t.children, t.children.length - 1)
      };
    }
    for (let r = 0; r < e.children.length; r++) {
      let n = e.children[r];
      let l = t.children[r];
      if (markdownParserSerializer.hasNodeChildren(n) && markdownParserSerializer.hasNodeChildren(l)) {
        let e = eR(n, l);
        if (e) {
          return e;
        }
      } else if (markdownParserSerializer.hasNodeChildren(n) || markdownParserSerializer.hasNodeChildren(l)) {
        return {
          prevEndNode: n,
          endNode: l
        };
      } else if (n.type !== l.type) {
        return {
          prevEndNode: n,
          endNode: l
        };
      }
    }
    return null;
  };
  (l = {}).Thematic = "thematic";
  l.Heading = "heading";
  l.CodeBlock = "code_block";
  l.Html = "html";
  l.LinkDefRef = "link_def_ref";
  l.Paragraph = "paragraph";
  l.Table = "table";
  l.BlockQuote = "block_quote";
  l.List = "list";
  l.ListItem = "list_item";
  l.InlineCode = "inline_code";
  l.Emphasis = "emphasis";
  l.Strong = "strong";
  l.Link = "link";
  l.Image = "image";
  l.StrikeThrough = "strike_through";
  l.Text = "text";
  l.MathBlock = "math_block";
  l.InlineMath = "inline_math";
  l.Empty = "empty";
  l.Unknown = "unknown";
  let eB = l;
  let eT = {
    thematicBreak: eB.Thematic,
    heading: eB.Heading,
    code: eB.CodeBlock,
    html: eB.Html,
    linkReference: eB.LinkDefRef,
    paragraph: eB.Paragraph,
    table: eB.Table,
    blockquote: eB.BlockQuote,
    list: eB.List,
    listItem: eB.ListItem,
    inlineCode: eB.InlineCode,
    emphasis: eB.Emphasis,
    strong: eB.Strong,
    link: eB.Link,
    image: eB.Image,
    delete: eB.StrikeThrough,
    text: eB.Text,
    math: eB.MathBlock,
    inlineMath: eB.InlineMath
  };
  let eZ = e => {
    if (e) {
      return eT[e] ?? eB.Unknown;
    } else {
      return eB.Empty;
    }
  };
  let ez = e => {
    let {
      onHop: t,
      ast: r,
      text: n,
      getRenderedText: l
    } = e;
    let a = reactCoreLibraryReexport.useRef("");
    let o = usePreviousHook.usePrevious(n);
    let s = usePreviousHook.usePrevious(r);
    reactCoreLibraryReexport.useEffect(() => {
      let e = a.current;
      let i = l().trim();
      if (!isUndefinedCheck.isUndefined(e) && !isUndefinedCheck.isUndefined(o) && !isUndefinedCheck.isUndefined(s) && !isUndefinedCheck.isUndefined(r) && t && n.length > o.length && i.length < e.length) {
        let n = eR(s, r);
        if (n) {
          let {
            prevEndNode: l,
            endNode: a
          } = n;
          t({
            renderedText: i,
            prevRenderedText: e,
            ast: r,
            prevAst: s,
            prevEndNode: l,
            endNode: a,
            prevEndNodeType: eZ(l == null ? undefined : l.type),
            endNodeType: eZ(a == null ? undefined : a.type)
          });
        }
      }
      a.current = i;
    }, [n]);
  };
  var smartTypographyPlugin = require("smart-typography-plugin") /*id: 241455*/;
  var markdownMailtoObfuscator = require("markdown-mailto-obfuscator") /*id: 268250*/;
  var markdownFootnotePlugin = require("markdown-footnote-plugin") /*id: 888031*/;
  var markedMarkdownParser = require("marked-markdown-parser") /*id: 483950*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  let e$ = /^(~~)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/;
  class eU extends markedMarkdownParser.Tokenizer {
    autolink(e) {}
    del(e) {
      let t = e$.exec(e);
      if (t) {
        return {
          type: "del",
          raw: t[0],
          text: t[2],
          tokens: this.lexer.inlineTokens(t[2])
        };
      }
    }
    url() {}
  }
  let eP = /[&<>"']/;
  let eq = RegExp(eP.source, "g");
  let eW = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
  let eY = RegExp(eW.source, "g");
  let eX = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  };
  let eG = function (e, t = false) {
    let r = e => eX[e];
    if (t) {
      if (eP.test(e)) {
        return e.replace(eq, r);
      }
    } else if (eW.test(e)) {
      return e.replace(eY, r);
    }
    return e;
  };
  var htmlTagEntityUtil = require("html-tag-entity-util") /*id: 966395*/;
  let eJ = function (e = {}) {
    let {
      enabledHtmlTags: t
    } = e;
    class r extends markedMarkdownParser.Renderer {
      html(e) {
        let {
          text: r
        } = e;
        return htmlTagEntityUtil.conditionalHtmlEncode(r, t);
      }
      code(e) {
        let {
          text: t,
          lang: r = "",
          escaped: n
        } = e;
        let l = r.match(/^\s*(?<language>\S+)\s*(?<meta>[\S\s]*?)\s*$/);
        let i = `${t.replace(/\n$/, "")}
`;
        if (!l) {
          return `<pre><code>${n ? i : eG(i, true)}</code></pre>
`;
        }
        let {
          groups: a = {}
        } = l;
        let {
          language: o,
          meta: s
        } = a;
        return `<pre><code type="test" class="language-${eG(o)}"${s ? ` data-meta="${eG(s)}"` : ""}>${n ? i : eG(i, true)}</code></pre>
`;
      }
    }
    return new r(e);
  };
  var safeTextInsertionUtil = require("safe-text-insertion-util") /*id: 348428*/;
  let eK = "insert_element_extension";
  let e0 = () => ({
    name: eK,
    level: "inline",
    start: e => safeTextInsertionUtil.findMarkerIndex(e),
    tokenizer(e) {
      let t = safeTextInsertionUtil.matchMarkerStart(e);
      if (t) {
        return {
          type: eK,
          raw: t
        };
      }
    },
    renderer(e) {
      let {
        raw: t
      } = e;
      if (!t) {
        return false;
      }
      let r = safeTextInsertionUtil.parseMarkerData(t);
      if (!r) {
        return false;
      }
      let {
        index: n,
        b64Text: l
      } = r;
      return `<span data-index="${n}" data-raw="${l}" data-type="${eK}"></span>`;
    }
  });
  var katexMathParserUtils = require("katex-math-parser-utils") /*id: 109482*/;
  var mathEncodingUtil = require("math-encoding-util") /*id: 833504*/;
  let e4 = () => ({
    name: "inlineTex",
    level: "inline",
    start(e) {
      return /\$([^\$]|$)/.exec(e)?.index;
    },
    tokenizer(e) {
      let t = katexMathParserUtils.parseMathDelimiters(e);
      if (!t) {
        return;
      }
      let {
        type: r,
        endIndex: n,
        mathText: l
      } = t;
      if (r === "inline") {
        return {
          type: "inlineTex",
          raw: e.slice(0, n),
          mathText: l
        };
      }
    },
    renderer: e => mathEncodingUtil.encodeInlineMath(e.mathText)
  });
  let e3 = () => ({
    name: "displayTex",
    level: "block",
    start(e) {
      return /\$\$[^\$]+\$\$/.exec(e)?.index;
    },
    tokenizer(e) {
      let t = katexMathParserUtils.parseMathDelimiters(e);
      if (!t) {
        return;
      }
      let {
        type: r,
        endIndex: n,
        mathText: l
      } = t;
      if (r === "block") {
        return {
          type: "displayTex",
          raw: e.slice(0, n),
          mathText: l
        };
      }
    },
    renderer: e => mathEncodingUtil.encodeBlockMath(e.mathText)
  });
  var isRegexpCheck = require("is-regexp-check") /*id: 600396*/;
  let e5 = e => e.type === "text";
  let e6 = e => e5(e) && /^\n+$/.test(e9(e));
  let e8 = function (e) {
    var t = arguments.length;
    var r = Array(t > 1 ? t - 1 : 0);
    var n = 1;
    for (; n < t; n++) {
      r[n - 1] = arguments[n];
    }
    return "attribs" in e && typeof e.attribs == "object" && e.type === "tag" && (!(r == null ? undefined : r.length) || r.some(t => isRegexpCheck.isRegExp(t) ? t.test(e.name) : t === e.name));
  };
  let e9 = e => e5(e) ? e.data : e8(e) ? e.children.map(e9).join("") : "";
  let te = e => /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FD5\uF900-\uFA6D\uFA70-\uFAD9]/.test(e);
  let tt = e => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
    children: htmlToReactUtils.domToReact([e])
  });
  let tr = (e, t, r) => t.className === "markdown-root" ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
    children: r
  }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
    children: reactCoreLibraryReexport.createElement(e, t, (r == null ? undefined : r.length) ? r : undefined)
  });
  let tn = E("Table");
  let tl = (e, t) => {
    let {
      renderRest: r,
      parents: n
    } = t;
    if (!e8(e, "table")) {
      return;
    }
    let {
      className: l,
      ...i
    } = htmlToReactUtils.attributesToProps(e.attribs);
    return reactJsxRuntimeCoreReexport.jsx(R, {
      children: t => {
        let {
          className: a
        } = t;
        return reactJsxRuntimeCoreReexport.jsx(tn, {
          ...i,
          raw: e,
          parents: n,
          className: u(l, a),
          children: htmlToReactUtils.domToReact(e.children, {
            replace: r
          })
        });
      }
    });
  };
  let ti = E("Strong");
  let ta = (e, t) => {
    let {
      renderRest: r,
      parents: n
    } = t;
    if (e8(e, "strong")) {
      return reactJsxRuntimeCoreReexport.jsx(ti, {
        node: e,
        raw: e,
        parents: n,
        children: htmlToReactUtils.domToReact(e.children, {
          replace: r
        })
      });
    }
  };
  var htmlEntityCodec = require("html-entity-codec") /*id: 384132*/;
  var ts = htmlEntityCodec;
  var genericUtilFunctions = require("generic-util-functions") /*id: 165378*/;
  let td = E("BreakLine");
  let tc = E("Blockquote");
  let th = (e, t) => {
    let r;
    let {
      renderRest: n,
      renderHtml: l,
      renderDataSlot: a,
      parents: o
    } = t;
    if (!e8(e)) {
      return;
    }
    let s = e.name.toLowerCase();
    let u = htmlToReactUtils.attributesToProps(e.attribs);
    let d = e.children.length ? e.children.map((e, t) => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
      children: n(e)
    }, t)) : undefined;
    if (a && ["data-inline", "data-block"].includes(s)) {
      let {
        type: e,
        value: t,
        alt: r
      } = u;
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: a({
          display: s === "data-inline" ? "inline" : "block",
          type: e,
          value: genericUtilFunctions.safeJsonParse(ts.decode(t, {
            strict: false
          })),
          alt: r,
          children: d
        }) ?? r
      });
    }
    if (l) {
      r = l == null ? undefined : l({
        tagName: s,
        props: u,
        children: d,
        node: e,
        currentHTML: htmlTagEntityUtil.serializeAstToHtml(e),
        childrenHTML: htmlTagEntityUtil.serializeAstToHtml(e.childNodes)
      });
    }
    if (!isUndefinedCheck.isUndefined(r)) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: r
      });
    }
    if (s === "br") {
      return reactJsxRuntimeCoreReexport.jsx(td, {
        raw: e,
        parents: o
      });
    }
    if (s === "blockquote") {
      return reactJsxRuntimeCoreReexport.jsx(tc, {
        raw: e,
        node: e,
        parents: o,
        renderRest: n
      });
    }
    if (s === "hr") {
      return reactJsxRuntimeCoreReexport.jsx(R, {
        node: e,
        renderRest: n
      });
    }
    if (e.children.length === 1) {
      let t = e.children[0];
      if (e5(t) && !t.data.trim()) {
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
      }
    }
    return tr(s, u, d);
  };
  let tf = E("Paragraph");
  let tm = (e, t) => {
    let {
      renderRest: r,
      forceBrInterSpacing: n,
      parents: l
    } = t;
    if (!e8(e, "p")) {
      return;
    }
    let {
      className: i,
      ...a
    } = htmlToReactUtils.attributesToProps(e.attribs);
    return reactJsxRuntimeCoreReexport.jsx(R, {
      children: t => {
        let {
          className: o
        } = t;
        return reactJsxRuntimeCoreReexport.jsx(tf, {
          ...a,
          raw: e,
          parents: l,
          className: u(i, o),
          forceBrInterSpacing: n,
          children: htmlToReactUtils.domToReact(e.children, {
            replace: r
          })
        });
      }
    });
  };
  var bufferImplementation = require("buffer-implementation") /*id: 659459*/;
  let tp = E("Tex");
  let tv = function (e, t = {}) {
    let {
      parents: r
    } = t;
    if (!e8(e, "span")) {
      return;
    }
    let n = e.attribs["data-type"];
    let l = e.attribs["data-value"];
    if (l) {
      try {
        let t = bufferImplementation.Buffer.from(l, "base64").toString("utf8").trim();
        if (n === mathEncodingUtil.blockMathType) {
          return reactJsxRuntimeCoreReexport.jsx(tp, {
            raw: e,
            parents: r,
            tex: t,
            mode: "display"
          });
        }
        if (n === mathEncodingUtil.inlineMathType) {
          return reactJsxRuntimeCoreReexport.jsx(tp, {
            raw: e,
            parents: r,
            tex: t,
            mode: "inline"
          });
        }
      } catch (e) {
        return;
      }
    }
  };
  let tx = E("List");
  let tw = (e, t) => {
    let {
      renderRest: r,
      parents: n
    } = t;
    if (!e8(e, "ol", "ul")) {
      return;
    }
    let l = e.children.every(e => e5(e) || e8(e, "li") && !isUndefinedCheck.isUndefined(e.children[0]) && e8(e.children[0], "input") && e.children[0].attribs.type === "checkbox") ? "tasklist" : undefined;
    return reactJsxRuntimeCoreReexport.jsx(tx, {
      className: l,
      node: e,
      raw: e,
      parents: n,
      renderRest: r
    });
  };
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  let tj = E("Link");
  let tk = (e, t) => {
    let {
      renderRest: r,
      customLink: n,
      callbacks: l = {},
      parents: i
    } = t;
    if (!e8(e, "a")) {
      return;
    }
    let {
      href: a,
      title: o,
      ...s
    } = e.attribs;
    let u = o === "autolink";
    return reactJsxRuntimeCoreReexport.jsx(tj, {
      ...htmlToReactUtils.attributesToProps(s),
      raw: e,
      parents: i,
      href: a,
      customLink: n,
      type: u ? "autolink" : "markdown",
      title: u ? undefined : o,
      ...throttledPathFilterStringify.throttledPathStr(l, "onLinkRender", "onLinkClick", "onSendMessage"),
      children: htmlToReactUtils.domToReact(e.children, {
        replace: r
      })
    });
  };
  let ty = (e, t) => {
    var r;
    let {
      insertedElements: n = []
    } = t;
    if (!e8(e, "span") || e.attribs["data-type"] !== eK) {
      return;
    }
    let l = e.attribs["data-index"];
    let i = e.attribs["data-raw"];
    if (isUndefinedCheck.isUndefined(l)) {
      return;
    }
    let a = parseInt(l);
    if (!(a > n.length)) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: (r = n[a]) === null || r === undefined ? undefined : r.render(i && bufferImplementation.Buffer.from(i, "base64").toString("utf-8"))
      });
    }
  };
  let tN = E("Indicator");
  let tC = function (e) {
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let {
      parents: n
    } = r;
    if (e8(e, "span") && e.attribs?.class === "indicator") {
      return reactJsxRuntimeCoreReexport.jsx(tN, {
        raw: e,
        parents: n
      });
    }
  };
  var urlValidationUtils = require("url-validation-utils") /*id: 209486*/;
  let tL = E("Image");
  let t_ = function (e, t = {}) {
    let {
      regardSiblingBrAsText: r = true
    } = t;
    let n = {
      hasLeftText: false,
      hasRightText: false
    };
    if (!e.parent) {
      return n;
    }
    let {
      children: l
    } = e.parent;
    let i = l.indexOf(e);
    if (i < 0) {
      return n;
    }
    let a = e => e < l.length && e >= 0 && (e5(l[e]) || !!r && e8(l[e], "br"));
    return {
      hasLeftText: a(i - 1),
      hasRightText: a(i + 1)
    };
  };
  let tE = function (e, t = {}) {
    let {
      callbacks: r = {},
      imageOptions: n,
      marginWithSiblingBr: l = true,
      parents: i
    } = t;
    let {
      onImageRender: a,
      onImageClick: o
    } = r;
    if (!e8(e, "img")) {
      return;
    }
    let {
      src: s = "",
      alt: u,
      width: d,
      height: c
    } = e.attribs;
    let h = Number(d);
    let m = Number(c);
    let {
      hasLeftText: g,
      hasRightText: p
    } = t_(e, {
      regardSiblingBrAsText: l
    });
    return reactJsxRuntimeCoreReexport.jsx(tL, {
      ...htmlToReactUtils.attributesToProps(e.attribs),
      raw: e,
      parents: i,
      src: urlValidationUtils.isValidUrlOrPath(s) ? s : null,
      onImageClick: o,
      onImageRender: a,
      imageOptions: {
        alt: u,
        objectFit: "cover",
        objectPosition: "center",
        height: isNaN(m) ? 256 : m,
        width: isNaN(h) ? 400 : h,
        ...n
      },
      style: {
        borderRadius: 12,
        overflow: "hidden"
      },
      wrapperStyle: {
        marginTop: g ? 12 : undefined,
        marginBottom: p ? 12 : undefined
      },
      ...r
    });
  };
  let tM = E("Header");
  let tR = (e, t) => {
    let {
      renderRest: r,
      parents: n
    } = t;
    if (e8(e, /^h[0-9]+$/)) {
      return reactJsxRuntimeCoreReexport.jsx(tM, {
        className: "header-iWP5WJ",
        node: e,
        raw: e,
        parents: n,
        renderRest: r
      });
    }
  };
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  let tT = E("Emphasis");
  let tZ = (e, t) => {
    let {
      renderRest: l,
      spacingAfterChineseEm: i,
      parents: a
    } = t;
    if (!e8(e, "em")) {
      return;
    }
    let o = i !== undefined && i !== false && te(e9(e).slice(-1) ?? "") && !isNullCheck.isNull(e.nextSibling) && (e8(e.nextSibling) || e5(e.nextSibling)) && te(e9(e.nextSibling).slice(0, 1) ?? "");
    return reactJsxRuntimeCoreReexport.jsx(tT, {
      style: {
        marginRight: o ? typeof i == "boolean" ? 2 : i : undefined
      },
      node: e,
      raw: e,
      parents: a,
      children: htmlToReactUtils.domToReact(e.children, {
        replace: l
      })
    });
  };
  let tz = e => {
    if (e.type !== "tag" && e.type !== "text" && e.type !== "root") {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
    }
  };
  var astTextExtractor = require("ast-text-extractor") /*id: 914641*/;
  let tA = e => e8(e, "code") ? e : e8(e, "pre") ? e.childNodes.find(e => e8(e, "code")) : undefined;
  let tD = function (e, t = "plaintext") {
    let r = tA(e);
    if (r) {
      var l;
      var i;
      return ((i = r.attribs) === null || i === undefined ? undefined : (l = i.class) === null || l === undefined ? undefined : l.match(/language-(.*)/)?.[1]) || t;
    }
    return t;
  };
  let tO = function (e) {
    let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let r = tA(e);
    let n = r == null ? undefined : r.attribs["data-meta"];
    if (n) {
      if (t) {
        return n.split(/\s+/).filter(e => !e.match(/^__[^_].*/)).join(" ") || undefined;
      } else {
        return n;
      }
    } else {
      return undefined;
    }
  };
  let tI = e => {
    let r = tO(e, false);
    if (!r) {
      return 0;
    }
    let n = r.match(/(\s|^)__indent=(?<indent>[0-9]+)(\s|$)/);
    if (!n) {
      return 0;
    }
    let l = Number(n.groups?.indent);
    if (isNaN(l)) {
      return 0;
    } else {
      return l;
    }
  };
  let tH = ["result", "stderr", "stdout"];
  var t$ = {
    "code-group-item--begin": "code-group-item--begin-oMXECE",
    codeGroupItemBegin: "code-group-item--begin-oMXECE",
    "code-group-item--center": "code-group-item--center-IM2uJd",
    codeGroupItemCenter: "code-group-item--center-IM2uJd",
    "code-group-item--end": "code-group-item--end-fLfKz2",
    codeGroupItemEnd: "code-group-item--end-fLfKz2"
  };
  let tU = E("CodeBar");
  let tP = E("CodeBlock");
  let tq = e => {
    if (!e8(e, "pre")) {
      return false;
    }
    let {
      childNodes: t
    } = e;
    return !!t.find(e => e8(e, "code"));
  };
  let tW = e => {
    let {
      children: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t()
    });
  };
  let tY = (e, t) => {
    let {
      autoHideCodeHeaderLanguage: r = tH,
      renderRest: n,
      parents: l,
      compact: i,
      callbacks: a = {},
      indentTabs: o = 0,
      loading: s
    } = t;
    let {
      onCopyCodeBlock: u,
      onCodeBlockPreview: d,
      onCodeBlockShowEvent: c
    } = a;
    let h = Array.isArray(r) ? r : [r];
    let m = i ? tW : R;
    return reactJsxRuntimeCoreReexport.jsx(i ? R : tW, {
      children: function ({
        className: t
      } = {
        className: ""
      }) {
        return e.map((r, a) => {
          let {
            target: p
          } = r;
          if (!tq(p)) {
            return null;
          }
          let v = t$[`code-group-item--${e.length <= 1 || !i ? "normal" : {
            0: "begin",
            [e.length - 1]: "end"
          }[a] ?? "center"}`];
          let {
            childNodes: x = []
          } = p;
          return x.map((e, r) => reactJsxRuntimeCoreReexport.jsx(m, {
            children: () => {
              if (e8(e, "code")) {
                let t = tD(e);
                let n = tO(e);
                return reactJsxRuntimeCoreReexport.jsx(tP, {
                  parents: l,
                  code: e9(e),
                  language: t,
                  meta: n,
                  showHeader: !h.includes(t.toLowerCase()),
                  className: v,
                  onCopyCode: u,
                  onPreview: e => d == null ? undefined : d(e, t),
                  onShow: c,
                  style: {
                    marginLeft: o ? `${o * 18}px` : undefined
                  },
                  loading: s
                }, r);
              }
              if (e8(e)) {
                return reactJsxRuntimeCoreReexport.jsx("pre", {
                  className: t,
                  children: n(e)
                }, r);
              } else {
                return reactJsxRuntimeCoreReexport.jsx("pre", {
                  className: t,
                  children: htmlToReactUtils.domToReact([e])
                }, r);
              }
            }
          }, r));
        });
      }
    });
  };
  let tX = e => {
    let {
      children: t,
      adjacentCodeAsGroup: r = true
    } = e;
    let n = [];
    let l = null;
    for (let e of t) {
      if (tq(e)) {
        let t = jsUtilFunctions.getProperty(n, n.length - 1);
        let l = tD(e, "");
        let i = {
          target: e,
          language: l,
          code: astTextExtractor.extractAstText(e)
        };
        if ((t == null ? undefined : t.isCodeBlockGroup) && r) {
          t.codeBlocks.push(i);
        } else {
          n.push({
            isCodeBlockGroup: true,
            codeBlocks: [i]
          });
        }
        continue;
      }
      if (e6(e)) {
        l = e;
        continue;
      }
      if (l) {
        n.push({
          isCodeBlockGroup: false,
          target: l,
          code: astTextExtractor.extractAstText(l)
        });
        l = null;
      }
      n.push({
        isCodeBlockGroup: false,
        target: e,
        code: e8(e) || e5(e) ? astTextExtractor.extractAstText(e) : ""
      });
    }
    return n;
  };
  let tG = (e, t) => {
    let {
      renderRest: r,
      codeBarConfig: n,
      adjacentCodeAsGroup: l,
      callbacks: a = {},
      parents: o
    } = t;
    if (!e8(e)) {
      return;
    }
    let {
      childNodes: s
    } = e;
    if (s.every(e => !tq(e))) {
      return;
    }
    let u = tX({
      children: s,
      adjacentCodeAsGroup: l
    });
    let {
      onCodeBarExpandChange: d,
      onCodeBarMounted: c
    } = a;
    return tr(e.name, htmlToReactUtils.attributesToProps(e.attribs), u.map((t, l) => {
      if (!t.isCodeBlockGroup) {
        return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
          children: r(t.target)
        }, l);
      }
      {
        let {
          codeBlocks: i
        } = t;
        let s = l === u.length - 1;
        let {
          finished: h,
          compact: m = false,
          showCodeBar: g,
          autoHideCodeHeaderLanguage: p,
          ...v
        } = (isFunctionUtil_1.isFunction(n) ? n({
          codeBlocks: i
        }) : n) || {};
        let x = g ?? !!n;
        let w = Math.min(8, ...i.map(e => Math.floor(tI(e.target) / 2)));
        let b = s && !h;
        return reactJsxRuntimeCoreReexport.jsx(tU, {
          raw: e,
          parents: o,
          showBar: x,
          loading: b,
          onCodeBarExpandChange: e => {
            if (d == null) {
              return undefined;
            } else {
              return d(e, i == null ? undefined : i.at(0)?.language, l);
            }
          },
          onCodeBarMounted: () => c == null ? undefined : c(l),
          style: {
            marginLeft: w ? `${w * 18}px` : undefined
          },
          codeBlocks: i,
          ...v,
          children: e => (!x || e) && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: tY(i, {
              renderRest: r,
              autoHideCodeHeaderLanguage: p,
              compact: m,
              callbacks: a,
              indentTabs: w,
              loading: b
            })
          })
        }, l);
      }
    }));
  };
  let tV = function (e) {
    let p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let {
      parents: v = [],
      callbacks: x = {},
      insertedElements: w,
      imageOptions: b,
      codeBarConfig: j,
      adjacentCodeAsGroup: k,
      forceBrInterSpacing: N,
      spacingAfterChineseEm: C,
      customLink: S,
      renderHtml: L,
      renderRawHtml: _,
      renderDataSlot: E
    } = p;
    let M = t => tV(t, {
      ...p,
      parents: [e, ...v]
    });
    let R = e8(e) ? e.name.toLowerCase() : "";
    let B = e8(e) ? htmlToReactUtils.attributesToProps(e.attribs) : {};
    return (() => {
      if (_ && e8(e)) {
        return _({
          tagName: R,
          props: B,
          parents: v,
          renderRest: M,
          node: e,
          currentHTML: htmlTagEntityUtil.serializeAstToHtml(e),
          childrenHTML: htmlTagEntityUtil.serializeAstToHtml(e.children)
        });
      }
    })() ?? tv(e, {
      parents: v
    }) ?? (w && ty(e, {
      insertedElements: w
    })) ?? tz(e) ?? tk(e, {
      callbacks: x,
      customLink: S,
      parents: v,
      renderRest: M
    }) ?? tE(e, {
      callbacks: x,
      imageOptions: b,
      marginWithSiblingBr: !N,
      parents: v
    }) ?? tG(e, {
      codeBarConfig: j,
      adjacentCodeAsGroup: k,
      callbacks: x,
      parents: v,
      renderRest: M
    }) ?? tC(e, {
      parents: v
    }) ?? tm(e, {
      forceBrInterSpacing: N,
      parents: v,
      renderRest: M
    }) ?? tl(e, {
      parents: v,
      renderRest: M
    }) ?? tw(e, {
      parents: v,
      renderRest: M
    }) ?? tR(e, {
      parents: v,
      renderRest: M
    }) ?? tZ(e, {
      parents: v,
      renderRest: M,
      spacingAfterChineseEm: C
    }) ?? ta(e, {
      parents: v,
      renderRest: M
    }) ?? th(e, {
      parents: v,
      renderRest: M,
      renderDataSlot: E,
      renderHtml: L
    }) ?? tt(e);
  };
  var dompurifySanitizerWrapper = require("dompurify-sanitizer-wrapper") /*id: 37494*/;
  let tQ = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"];
  let tK = e => e.replace(/<([\w\-]+)([^>/]*)\/\s*>/g, (e, t, r) => tQ.includes(t.toLowerCase()) ? e : `<${t}${r}></${t}>`);
  let t0 = e => `<div class="markdown-root">${e}</div>`;
  let t1 = {
    description: ""
  };
  let t2 = e => {
    let {
      markDown: t,
      smartypants: r = false,
      enabledHtmlTags: n,
      purifyHtml: l = true,
      purifyHtmlConfig: a,
      footnote: s,
      markedExtensions: u = [],
      dollarMath: d = true,
      modifyHtmlNode: c,
      ...h
    } = e;
    let m = reactCoreLibraryReexport.useMemo(() => new eU(), []);
    let g = reactMemoHooks.useCachedMemo(() => eJ({
      enabledHtmlTags: n
    }), [n]);
    let p = reactMemoHooks.useCachedMemo(() => {
      let e = [e0(), ...u];
      if (d) {
        e.push(e4(), e3());
      }
      let t = new markedMarkdownParser.Marked({
        extensions: e
      });
      t.setOptions({
        gfm: true,
        silent: true,
        breaks: true
      });
      t.use({
        extensions: e
      });
      if (s) {
        let e = isBooleanUtil.isBoolean(s) ? t1 : {
          ...t1,
          ...s
        };
        t.use(markdownFootnotePlugin.footnoteExtension(e));
      }
      t.use(markdownMailtoObfuscator.createMailtoPlugin());
      if (r) {
        t.use(smartTypographyPlugin.createTextProcessor());
      }
      return t;
    }, [r, d, u.length, s]);
    let v = () => {
      let e = arrayIsArrayUtil.isArray(n) ? n : undefined;
      let t = {
        ALLOW_UNKNOWN_PROTOCOLS: true,
        RETURN_DOM: false
      };
      if (e) {
        t.ADD_TAGS = e;
      }
      let r = isFunctionUtil_1.isFunction(a) ? a(t) : a;
      if (r) {
        let {
          ALLOW_UNKNOWN_PROTOCOLS: e,
          RETURN_DOM: n,
          ...l
        } = r;
        if (!isUndefinedCheck.isUndefined(e)) {
          t.ALLOW_UNKNOWN_PROTOCOLS = e;
        }
        if (!isUndefinedCheck.isUndefined(n)) {
          t.RETURN_DOM = n;
        }
        safePropertyAssignUtil.safePropertyAssign(t, l);
      }
      return t;
    };
    let w = jsUtilFunctions.createPipe(e => p.parse(e, {
      tokenizer: m,
      renderer: g
    }), tK, e => {
      let t = v();
      if (isFunctionUtil_1.isFunction(l)) {
        return l(e, t);
      } else if (l) {
        return dompurifySanitizerWrapper.sanitizeContent(e, t);
      } else {
        return e;
      }
    }, t0);
    let b = reactCoreLibraryReexport.useMemo(() => w(t), [t, g, p, l]);
    let j = reactCoreLibraryReexport.useMemo(() => {
      let t = htmlToReactUtils.htmlToDom(b);
      return (c == null ? undefined : c(t)) ?? t;
    }, [b]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: htmlToReactUtils.domToReact(j, {
        replace: e => tV(e, h)
      })
    });
  };
  var hookPhaseEnum = require("hook-phase-enum") /*id: 385853*/;
  var markdownAstPluginEngine = require("markdown-ast-plugin-engine") /*id: 66280*/;
  var pluginPipelineProcessor = require("plugin-pipeline-processor") /*id: 934336*/;
  let t5 = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: r,
      style: n,
      theme: l = "default",
      mode: s = "light",
      markDown: h,
      eventCallbacks: m,
      showIndicator: v = false,
      autoFixSyntax: x = true,
      smooth: w = false,
      insertedElements: k = [],
      showEllipsis: y = false,
      imageOptions: N,
      autoFitRTL: S = false,
      codeBarConfig: _,
      adjacentCodeAsGroup: E = true,
      forceBrInterSpacing: M,
      spacingAfterChineseEm: R = 2,
      indentFencedCode: I,
      indentedCode: H,
      smartypants: $,
      enhancedCopy: U = false,
      autolink: P,
      customLink: q,
      autoSpacing: W,
      slots: Y = {},
      translate: X = {},
      enabledHtmlTags: V,
      purifyHtml: J,
      purifyHtmlConfig: Q,
      footnote: K = true,
      dollarMath: et = true,
      latexMath: er = true,
      catchSlotsError: en = true,
      astPlugins: el,
      sourcePlugins: ei,
      markedExtensions: ea,
      modifyHtmlNode: es,
      renderHtml: eu,
      renderRawHtml: ec,
      renderDataSlot: eh,
      onAstChange: ew,
      onHop: eb,
      ...ej
    } = e;
    let ek = reactCoreLibraryReexport.useContext(b);
    let ey = objectDefaultsUtil.defaults({
      ...Y
    }, {
      ...ek
    }, {
      SlotsErrorFallback: d,
      BreakLine: ef,
      Tex: mathInlineComponent.MathInlineDisplay,
      CodeBlockHighlighter: codeBlockComponent_1.CodeBlock,
      CodeBlock: ee,
      CodeBlockHeader: G,
      CodeBar: ed,
      Table: g,
      Image: reactOptimizedImageWrapper.Image,
      Indicator: flashingIndicatorComponent.FlashingIndicator,
      Paragraph: j,
      Link: linkComponentHandler.Link,
      Emphasis: O,
      Header: D,
      List: B,
      Strong: p,
      Blockquote: eg,
      SlotsWrapper: null
    });
    let {
      Indicator: eN
    } = ey;
    let {
      text: eC,
      flushCursor: eS
    } = useSmoothTextHook.useSmoothText(h, w);
    let {
      katex: e_,
      autoFixEnding: eE,
      imageEmphasisTitle: eM
    } = objectDefaultsUtil.defaults(isBooleanUtil.isBoolean(x) ? {} : x, {
      autoFixEnding: false
    });
    let eR = reactCoreLibraryReexport.useMemo(() => eh && V !== true ? [...(V || []), "data-block", "data-inline"] : V, [V, !!eh]);
    let {
      source: eB,
      ast: eT
    } = markdownAutofixPlugins.useMarkdownProcessor({
      source: eC,
      processAst: !!x,
      showEllipsis: y,
      showIndicator: v,
      imageEmphasisTitle: eM,
      indentFencedCode: I,
      indentedCode: H,
      insertedElements: k,
      autolink: P,
      autoSpacing: W,
      astPlugins: el,
      sourcePlugins: ei,
      fixEnding: eE,
      enabledHtmlTags: eR,
      looseTruncateDataSlot: !!eh,
      enableFootnote: !!K,
      dollarMath: et,
      latexMath: er,
      katex: e_
    });
    let eZ = languageDetectionHook.useLanguageDetection(S ? eT : undefined);
    let eF = eL();
    let eA = reactCoreLibraryReexport.useRef(null);
    ez({
      onHop: eb,
      ast: eT,
      text: eC,
      getRenderedText: () => {
        return eA.current?.textContent ?? "";
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (ew != null) {
        ew(eT);
      }
    }, [eT]);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      getRootElement: () => eA.current,
      flushSmoothCursor: eS
    }), []);
    if (eB.trim()) {
      return reactJsxRuntimeCoreReexport.jsx(themeConfigContext.ThemeConfigProvider, {
        value: {
          theme: l,
          mode: s,
          catchSlotsError: en
        },
        children: reactJsxRuntimeCoreReexport.jsx(L, {
          value: ey,
          afterMemoedProcess: e => e ? {
            ...e,
            BreakLine: em(e.BreakLine)
          } : e,
          children: reactJsxRuntimeCoreReexport.jsx(eo, {
            value: X,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              ...ej,
              ref: eA,
              "theme-mode": s,
              className: u(c.container, "flow-markdown-body", c[`theme-${l}`], r, {
                "mdbox-theme-next": l === "samantha"
              }),
              style: n,
              dir: eZ ? "rtl" : "ltr",
              "data-show-indicator": v,
              onCopy: U ? eF : undefined,
              children: reactJsxRuntimeCoreReexport.jsx(t2, {
                markDown: eB,
                callbacks: m,
                insertedElements: k,
                imageOptions: N,
                codeBarConfig: _,
                adjacentCodeAsGroup: E,
                forceBrInterSpacing: M,
                spacingAfterChineseEm: R,
                smartypants: $,
                customLink: q,
                enabledHtmlTags: eR,
                purifyHtml: J,
                purifyHtmlConfig: Q,
                footnote: K,
                dollarMath: et,
                modifyHtmlNode: es,
                markedExtensions: ea,
                renderHtml: eu,
                renderRawHtml: ec,
                renderDataSlot: eh
              })
            })
          })
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [y && "...", v && eN && reactJsxRuntimeCoreReexport.jsx(eN, {})]
      });
    }
  });
  require.d(exports, {
    useHopDetection: function () {
      return ez;
    },
    hasValue: function () {
      return markdownParserSerializer.hasValue;
    },
    messageType: function () {
      return uiConstantsModule.messageType;
    },
    serializeAstToHtml: function () {
      return htmlTagEntityUtil.serializeAstToHtml;
    },
    useLanguageDetection: function () {
      return languageDetectionHook.useLanguageDetection;
    },
    parseMarkdown: function () {
      return markdownParserSerializer.parseMarkdown;
    },
    isHeadingNode: function () {
      return markdownParserSerializer.isHeadingNode;
    },
    MdBoxComponent: function () {
      return t5;
    },
    useMdBoxSlots: function () {
      return _;
    },
    hasChildren: function () {
      return markdownParserSerializer.hasChildren;
    },
    useSmoothText: function () {
      return eL;
    },
    conditionalHtmlEncode: function () {
      return htmlTagEntityUtil.conditionalHtmlEncode;
    },
    AstPlugin: function () {
      return markdownAstPluginEngine.AstPlugin;
    },
    extractTagName: function () {
      return htmlTagEntityUtil.extractTagName;
    },
    extractText: function () {
      return markdownParserSerializer.extractText;
    },
    useMarkdownProcessor: function () {
      return markdownAutofixPlugins.useMarkdownProcessor;
    },
    isClosingTag: function () {
      return htmlTagEntityUtil.isClosingTag;
    },
    hasNodeChildren: function () {
      return markdownParserSerializer.hasNodeChildren;
    },
    useSmoothText_1: function () {
      return useSmoothTextHook.useSmoothText;
    },
    processMarkdown: function () {
      return markdownAutofixPlugins.processMarkdown;
    },
    serializeAst: function () {
      return markdownParserSerializer.serializeAst;
    },
    HookPhase: function () {
      return hookPhaseEnum.HookPhase;
    },
    isRootNode: function () {
      return markdownParserSerializer.isRootNode;
    },
    isNodeType: function () {
      return markdownParserSerializer.isNodeType;
    },
    serializeMarkdown: function () {
      return markdownParserSerializer.serializeMarkdown;
    },
    statusType: function () {
      return uiConstantsModule.statusType;
    },
    PluginBase: function () {
      return pluginPipelineProcessor.PluginBase;
    },
    isImageNode: function () {
      return markdownParserSerializer.isImageNode;
    },
    retryWithDelay: function () {
      return languageDetectionHook.retryWithDelay;
    },
    iconType: function () {
      return uiConstantsModule.iconType;
    }
  });
}