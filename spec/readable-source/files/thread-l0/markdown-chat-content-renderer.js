// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'MarkdownChatRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 637813
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var markdownRendererComponentWrapper = require("markdown-renderer-component-wrapper") /*id: 880688*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useInViewHook = require("use-in-view-hook") /*id: 387169*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var safariSelectionHighlightHook = require("safari-selection-highlight-hook") /*id: 885774*/;
  var chatPluginContentRenderer = require("chat-plugin-content-renderer") /*id: 797443*/;
  var reactContextHelper = require("react-context-helper") /*id: 229399*/;
  var markdownPairedSymbolStrongFallbackPlugin = require("markdown-paired-symbol-strong-fallback-plugin") /*id: 419814*/;
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var markdownMetaRenderTypes = require("markdown-meta-render-types") /*id: 912092*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = (e, t, n, l) => {
    let {
      Content: i,
      getRange: r
    } = l;
    return t.map(t => ({
      range: r({
        text: e,
        metaInfo: t.data,
        context: n
      }),
      render: e => reactJsxRuntimeCoreReexport.jsx(i, {
        metaInfoData: t.data,
        text: e,
        ...n
      })
    }));
  };
  let h = (e, t, n, l) => {
    let {
      Content: i,
      getRange: r
    } = l;
    let o = [];
    let a = t.map(t => ({
      ...t,
      index: r({
        text: e,
        metaInfo: t.data,
        context: n
      })
    }));
    for (let [e, t] of Object.entries(collectionArrayGrouper.groupValuesToArray(a, e => e.index))) {
      o.push({
        range: Number(e),
        render: l => reactJsxRuntimeCoreReexport.jsx(i, {
          groupMetaInfo: {
            index: Number(e),
            metaInfoList: t
          },
          allMetaInfoList: a,
          text: l,
          ...n
        })
      });
    }
    return o;
  };
  let g = (e, t, n, l) => {
    let {
      Content: i,
      getRange: r,
      matcher: o
    } = l;
    if (o({
      context: n
    })) {
      return [{
        range: r({
          text: e,
          metaInfo: undefined,
          context: n
        }),
        render: () => reactJsxRuntimeCoreReexport.jsx(i, {
          ...n
        })
      }];
    } else {
      return [];
    }
  };
  let y = (e, t, n, i) => {
    let [r, o] = reactCoreLibraryReexport.useState([]);
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        if (!i) {
          o([]);
          return;
        }
        let l = await Promise.all(Object.values(i).map(e => typeof e == "function" ? e() : e));
        let r = [];
        for (let i of l) {
          let l = t.filter(e => String(e.type) === String(i.metaType));
          if (i.strategy === markdownMetaRenderTypes.MetaRenderTypes.RANGE) {
            r.push(...m(e, l, n, i));
          }
          if (i.strategy === markdownMetaRenderTypes.MetaRenderTypes.GROUP_RANGE) {
            r.push(...h(e, l, n, i));
          }
          if (i.strategy === markdownMetaRenderTypes.MetaRenderTypes.ARTIFACT) {
            r.push(...g(e, l, n, i));
          }
        }
        o(r);
      })();
    }, [t, i]);
    return r;
  };
  let k = e => {
    let {
      pluginConfig: n,
      events: l,
      uriToUrlMap: i,
      ...r
    } = e;
    let {
      Content: o
    } = (n == null ? undefined : n.default) ?? {};
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx(o, {
        ...r,
        events: l,
        uriToUrlMap: i
      });
    } else {
      return null;
    }
  };
  let b = e => {
    let {
      pluginConfig: n,
      events: l,
      uriToUrlMap: i,
      ...r
    } = e;
    let {
      Content: o
    } = (n == null ? undefined : n.default) ?? {};
    if (o) {
      return reactJsxRuntimeCoreReexport.jsx(o, {
        ...r,
        events: l,
        uriToUrlMap: i
      });
    } else {
      return null;
    }
  };
  var idRegistryContext = require("id-registry-context") /*id: 683140*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let S = e => {
    let {
      plugin: t,
      params: n
    } = e;
    return !!t && (!t.extraMatcher || t.extraMatcher(n));
  };
  let w = () => null;
  let T = e => {
    let {
      pluginConfig: l,
      language: i,
      context: r,
      pluginProps: o,
      ...a
    } = e;
    let u = objectPathGetDefault.getObjectPathDefault(o, i ?? "") ?? {};
    let s = i ? l == null ? undefined : l[i] : undefined;
    if (!S({
      plugin: s,
      params: {
        language: i,
        ...a
      }
    })) {
      let e = {
        ...a,
        language: i,
        context: r,
        pluginProps: (o == null ? undefined : o.codeblock) ? {
          codeblock: o.codeblock
        } : undefined
      };
      let {
        Content: t = w
      } = (l == null ? undefined : l.default) ?? {};
      return reactJsxRuntimeCoreReexport.jsx(t, {
        ...e,
        language: i
      });
    }
    s.slotType;
    let {
      Content: c
    } = s;
    let d = {
      ...a,
      language: i,
      context: r,
      pluginProps: u && i ? {
        [i]: u
      } : undefined
    };
    return reactJsxRuntimeCoreReexport.jsx(c, {
      ...d,
      language: i
    });
  };
  function R(e) {
    let {
      markDown: t,
      mode: n,
      showIndicator: f,
      showEllipsis: p,
      autoFixSyntax: m,
      onHop: h,
      inView: g,
      imageOptions: C,
      eventCallbacks: S,
      smooth: w,
      codeBarConfig: R,
      slotsPluginConfig: I,
      metaInfos: N,
      metaContext: E,
      metaPluginConfig: L,
      theme: P,
      messageId: j
    } = e;
    let A = i18nTranslationUtils.useTranslationWithFallback();
    let D = reactCoreLibraryReexport.useRef(null);
    let O = idRegistryContext.useIdRegistered(j ?? "", g != null && g);
    let M = markdownPairedSymbolStrongFallbackPlugin.usePairedSymbolStrongFallback();
    let {
      inView: $
    } = useInViewHook.useInView({
      ref: () => {
        var e;
        return ((e = D.current) === null || e === undefined ? undefined : e.getRootElement()) ?? null;
      }
    });
    let {
      LinkContext: F,
      Link: Z,
      ImageContext: W,
      Image: B,
      CodeBlock: z,
      CodeBlockContext: K,
      Table: U,
      TableContext: V
    } = I ?? {};
    safariSelectionHighlightHook.useSafariHighlight(D, g);
    let H = reactCoreLibraryReexport.useCallback(e => {
      let t = {
        ...e,
        ...K
      };
      return reactJsxRuntimeCoreReexport.jsx(T, {
        ...t,
        pluginConfig: z
      });
    }, [K == null ? undefined : K.messageId]);
    let G = reactCoreLibraryReexport.useCallback(e => {
      let t = {
        ...e,
        ...F
      };
      return reactJsxRuntimeCoreReexport.jsx(k, {
        ...t,
        pluginConfig: Z
      });
    }, [F == null ? undefined : F.messageId]);
    let X = reactCoreLibraryReexport.useCallback(e => {
      let t = {
        ...e,
        ...W
      };
      return reactJsxRuntimeCoreReexport.jsx(b, {
        ...t,
        pluginConfig: B
      });
    }, [W == null ? undefined : W.messageId]);
    let J = reactCoreLibraryReexport.useCallback(e => {
      let t = {
        ...e,
        ...V
      };
      return reactJsxRuntimeCoreReexport.jsx(chatPluginContentRenderer.ChatPluginRenderer, {
        ...t,
        pluginConfig: U
      });
    }, [V == null ? undefined : V.messageId]);
    let q = y(t, N ?? [], {
      ...E,
      mdBoxRef: D
    }, L);
    return reactJsxRuntimeCoreReexport.jsx(reactContextHelper.ContextInstance.Provider, {
      value: f != null && f,
      children: reactJsxRuntimeCoreReexport.jsx(markdownRendererComponentWrapper.MdBoxLazy, {
        ref: D,
        theme: P,
        mode: n,
        imageOptions: {
          forceHttps: true,
          ...(C ?? {
            responsiveNaturalSize: {
              maxWidth: Infinity,
              maxHeight: 600
            }
          })
        },
        markDown: t,
        translate: {
          copyTitle: A("message_long_press_copy"),
          codeBarLoadingText: A("code_block_compute_switch_button_generating"),
          codeBarExpandedFinishedText: A("code_block_switch_button_hide_details"),
          codeBarUnExpandFinishedText: A("code_block_switch_button_show_details")
        },
        eventCallbacks: S,
        showIndicator: f,
        showEllipsis: p,
        autoFixSyntax: (O || $) && m,
        smooth: w,
        autoFitRTL: localeDirectionCheck.isRtlLanguage(),
        onHop: h,
        forceBrInterSpacing: true,
        enhancedCopy: true,
        customLink: e => !urlParamUtils.isSpecialProtocol(e),
        footnote: false,
        enabledHtmlTags: ["doubaocanvas"],
        renderHtml: e => {
          let {
            tagName: t,
            children: n
          } = e;
          if (t === "doubaocanvas") {
            return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: n
            });
          }
        },
        "data-testid": "message_text_content",
        slots: {
          Link: G,
          Image: X,
          CodeBlock: H,
          Table: J
        },
        codeBarConfig: R,
        insertedElements: q,
        ...M
      })
    });
  }
  require.d(exports, {
    MarkdownChatRenderer: function () {
      return R;
    }
  });
}