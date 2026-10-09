// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'ThinkQuotaCollapseBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 353510
         */
module.exports = function (module, exports, require) {
  var reactTransitionComponent = require("react-transition-component") /*id: 888866*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var markdownRendererComponentWrapper = require("markdown-renderer-component-wrapper") /*id: 880688*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var chevronDownIconComponent = require("chevron-down-icon-component") /*id: 634936*/;
  var flowingLightWrapper = require("flowing-light-wrapper") /*id: 759491*/;
  var collapseComponent = require("collapse-component") /*id: 542405*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var markdownPairedSymbolStrongFallbackPlugin = require("markdown-paired-symbol-strong-fallback-plugin") /*id: 419814*/;
  var chatCanvasModeHook = require("chat-canvas-mode-hook") /*id: 269582*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      defaultExpand: n = false,
      loading: o,
      loadingNode: r,
      insertedElements: i,
      isSelectMode: s = false,
      contentStr: d = "",
      isFinished: c = false,
      collapseButtonText: u = "",
      onCollapseButtonClick: m,
      onQuotaBlockTextCopy: g
    } = e;
    let {
      isCanvasNotNarrowMode: x
    } = chatCanvasModeHook.useChatCanvasMode();
    let k = i18nTranslationUtils.useTranslationWithFallback();
    let w = reactCoreLibraryReexport.useRef(null);
    let b = markdownPairedSymbolStrongFallbackPlugin.usePairedSymbolStrongFallback();
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      let n = ((e = w.current) === null || e === undefined ? undefined : e.getRootElement()) ?? null;
      if (g) {
        if (n != null) {
          n.addEventListener("copy", g);
        }
      }
      return () => {
        if (g) {
          if (n != null) {
            n.removeEventListener("copy", g);
          }
        }
      };
    }, [g]);
    return reactJsxRuntimeCoreReexport.jsxs(collapseComponent.Collapse, {
      ref: t,
      isCanvasMode: x,
      defaultExpand: n,
      isSelectMode: s,
      isFinished: c,
      collapseheaderTitleCls: "think-block-title-ahYpB4",
      collapseButtonText: u,
      onCollapseButtonClick: m,
      tooltip: {
        expand: k("web_deepResearch_tooltip_expand"),
        collapse: k("web_deepResearch_tooltip_collapse")
      },
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "think-quota-block-mdbox-u7bvPk",
        children: reactJsxRuntimeCoreReexport.jsx(markdownRendererComponentWrapper.MdBoxLazy, {
          ref: w,
          markDown: d,
          insertedElements: i,
          theme: "samantha",
          smooth: {
            enable: !c,
            maxFirstTextSmoothSize: 10
          },
          ...b
        })
      }), o && r]
    });
  });
  var x = {
    "think-collapse-block": "think-collapse-block-XvJz0W",
    thinkCollapseBlock: "think-collapse-block-XvJz0W",
    "think-collapse-button": "think-collapse-button-aL7U_9",
    thinkCollapseButton: "think-collapse-button-aL7U_9",
    "think-collapse-button-icon": "think-collapse-button-icon-Dmj54d",
    thinkCollapseButtonIcon: "think-collapse-button-icon-Dmj54d",
    "icon-open": "icon-open-WCogFN",
    iconOpen: "icon-open-WCogFN",
    "icon-close": "icon-close-LjsZmA",
    iconClose: "icon-close-LjsZmA",
    "quote-block-wrapper": "quote-block-wrapper-oV6uTr",
    quoteBlockWrapper: "quote-block-wrapper-oV6uTr",
    "top-wrapper": "top-wrapper-FK8bLZ",
    topWrapper: "top-wrapper-FK8bLZ",
    "top-wrapper-canvas-expand": "top-wrapper-canvas-expand-RM7ZRj",
    topWrapperCanvasExpand: "top-wrapper-canvas-expand-RM7ZRj",
    "bottom-wrapper": "bottom-wrapper-N1Qnia",
    bottomWrapper: "bottom-wrapper-N1Qnia",
    "bottom-wrapper-canvas-expand": "bottom-wrapper-canvas-expand-ZOpdDz",
    bottomWrapperCanvasExpand: "bottom-wrapper-canvas-expand-ZOpdDz",
    "quote-block-wrapper-expand": "quote-block-wrapper-expand-hu3O1m",
    quoteBlockWrapperExpand: "quote-block-wrapper-expand-hu3O1m",
    "think-quota-block": "think-quota-block-NA1IPa",
    thinkQuotaBlock: "think-quota-block-NA1IPa",
    "think-quota-block-mdbox": "think-quota-block-mdbox-MyB2bR",
    thinkQuotaBlockMdbox: "think-quota-block-mdbox-MyB2bR",
    "think-quota-block-inner": "think-quota-block-inner-xjzINf",
    thinkQuotaBlockInner: "think-quota-block-inner-xjzINf",
    "think-quota-block-inner-default-expand": "think-quota-block-inner-default-expand-lACKRL",
    thinkQuotaBlockInnerDefaultExpand: "think-quota-block-inner-default-expand-lACKRL",
    "think-quota-block-inner-default-collapsed": "think-quota-block-inner-default-collapsed-uLNNg1",
    thinkQuotaBlockInnerDefaultCollapsed: "think-quota-block-inner-default-collapsed-uLNNg1"
  };
  let k = e => {
    let {
      isExpand: t,
      onClick: n,
      isFinished: o,
      text: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: x["think-collapse-button"],
      "data-testid": "think_collapse_button",
      onClick: n,
      children: [o ? l : reactJsxRuntimeCoreReexport.jsx(flowingLightWrapper.FlowingLight, {
        children: l
      }), reactJsxRuntimeCoreReexport.jsx(chevronDownIconComponent.ChevronDownIcon, {
        className: i(x["think-collapse-button-icon"], x[t ? "icon-open" : "icon-close"])
      })]
    });
  };
  let w = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      children: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: t,
      className: x["think-collapse-block"],
      children: n
    });
  });
  let b = e => {
    let {
      loadingNode: t,
      loading: n,
      contentStr: r = "",
      isExpand: s = false,
      insertedElements: u = [],
      defaultExpand: m,
      enableSmooth: h,
      quotaBlockClassName: _,
      hasquotaBlockWrapper: v = false,
      onCopy: g,
      onMessageRender: k
    } = e;
    let w = reactCoreLibraryReexport.useRef(null);
    let b = markdownPairedSymbolStrongFallbackPlugin.usePairedSymbolStrongFallback();
    let y = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isExpand);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      let n = ((e = w.current) === null || e === undefined ? undefined : e.getRootElement()) ?? null;
      if (g) {
        if (n != null) {
          n.addEventListener("copy", g);
        }
      }
      return () => {
        if (g) {
          if (n != null) {
            n.removeEventListener("copy", g);
          }
        }
      };
    }, [g]);
    reactCoreLibraryReexport.useEffect(() => {
      if (k != null) {
        k();
      }
    }, [k]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "relative h-fit",
      children: [reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
        className: i(v && x["quote-block-wrapper"], v && s && x["quote-block-wrapper-expand"]),
        bottomAttaching: true,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: i(x["think-quota-block"], _, s && "mb-15"),
          "data-testid": "think_quota_block",
          children: reactJsxRuntimeCoreReexport.jsx(reactTransitionComponent.Transition, {
            in: s,
            addEndListener: (e, t) => {
              e.addEventListener("transitionend", t, false);
            },
            onEnter: e => {
              e.style.height = "0";
              e.style.display = "block";
            },
            onEntering: e => {
              e.style.height = `${e.scrollHeight}px`;
            },
            onEntered: e => {
              e.style.height = "auto";
            },
            onExit: e => {
              e.style.display = "block";
              e.style.height = `${e.offsetHeight}px`;
              e.offsetHeight;
            },
            onExiting: e => {
              e.style.height = "0";
            },
            onExited: e => {
              e.style.display = "none";
              e.style.height = "auto";
            },
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: i([x["think-quota-block-inner"], m ? x["think-quota-block-inner-default-expand"] : x["think-quota-block-inner-default-collapsed"]]),
              children: [reactJsxRuntimeCoreReexport.jsx(markdownRendererComponentWrapper.MdBoxLazy, {
                ref: w,
                className: x["think-quota-block-mdbox"],
                markDown: r,
                insertedElements: u,
                theme: "samantha",
                smooth: {
                  enable: h,
                  maxFirstTextSmoothSize: 10
                },
                ...b
              }), n && t]
            })
          })
        })
      }), v && s && reactJsxRuntimeCoreReexport.jsx("div", {
        className: i(x["top-wrapper"], {
          [x["top-wrapper-canvas-expand"]]: y
        })
      }), v && s && reactJsxRuntimeCoreReexport.jsx("div", {
        className: i(x["bottom-wrapper"], {
          [x["bottom-wrapper-canvas-expand"]]: y
        })
      })]
    });
  };
  let y = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      defaultExpand: n = false,
      loading: o,
      loadingNode: r,
      insertedElements: i,
      contentStr: a = "",
      isFinished: d = false,
      collapseButtonText: c = "",
      enableThinkContainer: u = true,
      quotaBlockClassName: m,
      hasquotaBlockWrapper: h,
      onCollapseButtonClick: _,
      onQuotaBlockTextCopy: p,
      onMessageRender: v
    } = e;
    let [x, y] = reactCoreLibraryReexport.useState(n);
    let {
      isSelectMode: C
    } = chatMessageShareSelectStore.chatMessageShareSelectStore();
    reactCoreLibraryReexport.useEffect(() => {
      if (n !== x) {
        y(n);
      }
    }, [n]);
    if (u) {
      return reactJsxRuntimeCoreReexport.jsx(g, {
        isSelectMode: C,
        isFinished: d,
        defaultExpand: x,
        contentStr: a,
        collapseButtonText: c,
        loading: o,
        loadingNode: r,
        insertedElements: i,
        onCollapseButtonClick: _,
        onQuotaBlockTextCopy: p
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(w, {
        ref: t,
        children: [reactJsxRuntimeCoreReexport.jsx(k, {
          isFinished: d,
          isExpand: x,
          text: c,
          onClick: () => {
            y(!x);
            if (_ != null) {
              _(!x);
            }
          }
        }), reactJsxRuntimeCoreReexport.jsx(b, {
          onCopy: p,
          contentStr: a,
          isExpand: x,
          defaultExpand: n,
          enableSmooth: !d,
          loading: o,
          loadingNode: r,
          insertedElements: i,
          quotaBlockClassName: m,
          hasquotaBlockWrapper: h,
          onMessageRender: v
        })]
      });
    }
  });
  require.d(exports, {
    ThinkQuotaCollapseBlock: function () {
      return y;
    }
  });
}