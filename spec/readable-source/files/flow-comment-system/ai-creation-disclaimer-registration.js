// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerAiCreationDisclaimer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 280941
         */
module.exports = function (module, exports, require) {
  var docxEditorCoreReexports = require("docx-editor-core-reexports") /*id: 719301*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var useFeatureFlagEffect = require("use-feature-flag-effect") /*id: 806314*/;
  var reactReduxExports = require("react-redux-exports") /*id: 426907*/;
  var flowPermissionHooks = require("flow-permission-hooks") /*id: 930373*/;
  var docxSelectorsExport = require("docx-selectors-export") /*id: 254026*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = e => {
    let {
      rightWidth: n = 0
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let r = reactCoreLibraryReexport.useRef(null);
    let [a, c] = reactCoreLibraryReexport.useState(false);
    let {
      ref: m,
      inView: v
    } = reactIntersectionObserver_1.useInView({
      onChange: () => {
        c(true);
      }
    });
    let {
      width: f = 0
    } = useElementSizeHook_2.useElementSize(r) ?? {};
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "placeholder-dlO4AH",
        ref: e => {
          m(e);
          r.current = e;
        },
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: d("container-Lhqgt6", {
            "sticky-bottom-FlOXww": v,
            "ready-CreZHj": a
          }),
          style: {
            width: f,
            paddingRight: n
          },
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            children: o("doc_base_doubao_doc_title_suffix")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "divider-qDCjf7"
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            children: o("doc_content_may_be_ai_generate")
          })]
        })
      })
    });
  };
  let y = e => {
    let {
      scroller: i,
      layout: n
    } = e;
    let {
      isOwner: o
    } = flowPermissionHooks.usePermissions();
    let [r, a] = reactCoreLibraryReexport.useState(false);
    useFeatureFlagEffect.useFeatureFlagEffect(() => {
      if (i && i instanceof HTMLElement) {
        let e = new IntersectionObserver(e => {
          if (e[0].isIntersecting) {
            a(true);
          }
        }, {
          rootMargin: "0px 0px 0px 0px",
          threshold: 0.1
        });
        e.observe(i);
        return () => {
          e.disconnect();
        };
      }
    });
    let s = reactReduxExports.useSelector(docxSelectorsExport.isCommentPanelShown);
    let c = reactReduxExports.useSelector(docxSelectorsExport.isHelpPanelShown);
    let d = reactReduxExports.useSelector(docxSelectorsExport.isSuggestionSidebarShown);
    let h = reactCoreLibraryReexport.useMemo(() => {
      if (!n) {
        return 0;
      }
      let i = s && n.comment.getHostRectCache()?.width || 0;
      return Math.max(i, c ? docxEditorConstantsConfig.minPanelWidth : 0, d ? docxEditorConstantsConfig.maxBlockWidth : 0);
    }, [s, c, d, n]);
    if (o || !r) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(k, {
        rightWidth: h
      });
    }
  };
  class C extends editorContextFacade.EditorContextFacade {
    constructor(...e) {
      var i;
      var n;
      var o;
      super(...e);
      i = "getWrapper";
      n = e => i => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(e, {
          ...i
        }), this.scroller instanceof HTMLElement ? reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(y, {
          scroller: this.scroller,
          layout: this.editorContext.layout
        }), this.scroller) : null]
      });
      if ((i = typeof (o = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, i || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i, "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, i, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = n;
      }
    }
  }
  var getAiCreationDisclaimerProviderName = require("get-ai-creation-disclaimer-provider-name") /*id: 108982*/;
  function I() {
    docxEditorCoreReexports.registerViewExt(getAiCreationDisclaimerProviderName.getProviderName, C);
    docxEditorCoreReexports.updateGlobalExts([getAiCreationDisclaimerProviderName.getProviderName]);
  }
  require.d(exports, {
    registerAiCreationDisclaimer: function () {
      return I;
    }
  });
}