// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'SelectionHoverToolbar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 74626
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var floatingUiPopover = require("floating-ui-popover") /*id: 275531*/;
  var useClickOutsideHook_1 = require("use-click-outside-hook_1") /*id: 861825*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var chevronDownIconComponent = require("chevron-down-icon-component") /*id: 634936*/;
  var iconChevronDown = require("icon-chevron-down") /*id: 521832*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var searchIconComponent_2 = require("search-icon-component_2") /*id: 773676*/;
  var codeCanvasPopoverIcon = require("code-canvas-popover-icon") /*id: 170765*/;
  var chatRtlIconComponent_1_1 = require("chat-rtl-icon-component_1_1") /*id: 846597*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var x = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M8 3a1 1 0 0 0-1-1H4c-1.1 0-2 .9-2 2v3a1 1 0 0 0 2 0V4h3a1 1 0 0 0 1-1M22 7a1 1 0 1 1-2 0V4h-3a1 1 0 0 1 0-2h3c1.1 0 2 .9 2 2zM17 22a1 1 0 1 1 0-2h3v-3a1 1 0 1 1 2 0v3c0 1.1-.9 2-2 2zM2 17a1 1 0 0 1 2 0v3h3a1 1 0 1 1 0 2H4c-1.1 0-2-.9-2-2zM17.502 7.75a1 1 0 0 1-1 1H7.3a1 1 0 1 1 0-2h9.202a1 1 0 0 1 1 1M16.502 13.25a1 1 0 0 0 0-2H7.3a1 1 0 1 0 0 2zM12.3 16.75a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1"
    })
  }), {}));
  var addCircleIcon_1 = require("add-circle-icon_1") /*id: 5067*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var aiGuidanceRtlIcon = require("ai-guidance-rtl-icon") /*id: 682496*/;
  var documentSettingsIcon = require("document-settings-icon") /*id: 918852*/;
  var translationConfigPanel = require("translation-config-panel") /*id: 326800*/;
  var languageCodeEnumUtils = require("language-code-enum-utils") /*id: 964571*/;
  var browserLanguageConstants = require("browser-language-constants") /*id: 259969*/;
  var pdfScrollViewStore = require("pdf-scroll-view-store") /*id: 234902*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var reactContextProviderHook = require("react-context-provider-hook") /*id: 719110*/;
  var $ = {
    popover: "popover-y2_Sws",
    divider: "divider-JEXAgi",
    content: "content-bYMOlz",
    item: "item-HFrQd9",
    "icon-wrapper": "icon-wrapper-MYYBvR",
    icon: "icon-rl0u4X",
    "arrow-icon": "arrow-icon-eT2Guf",
    title: "title-oQgEN1",
    "translate-btn": "translate-btn-HUkZuH",
    "translate-arrow-popover": "translate-arrow-popover-JI1mR7"
  };
  let k = {
    sourceLanguage: languageCodeEnumUtils.LanguageCodeEnum.UNSPECIFIED,
    targetLanguage: browserLanguageConstants.languageConstants.BrowserLanguage
  };
  function P(e) {
    let {
      refs: t,
      className: n,
      pdfLanguageNativeName: a,
      onPopoverVisibleChange: o,
      onTranslate: s
    } = e;
    let [h, p] = reactCoreLibraryReexport.useState(false);
    let f = reactCoreLibraryReexport.useCallback(e => {
      let {
        sourceLanguage: t,
        targetLanguage: n
      } = e;
      if (s != null) {
        s(t, n);
      }
    }, [s]);
    return reactJsxRuntimeCoreReexport.jsx(floatingUiPopover.Popover, {
      className: l($["translate-arrow-popover"], n),
      visible: h,
      onVisibleChange: e => {
        p(e);
        if (o != null) {
          o(e);
        }
        pdfScrollViewStore.scrollStore.getState().setIsStopHandleMouseMove(e);
      },
      trigger: "custom",
      content: reactJsxRuntimeCoreReexport.jsx(translationConfigPanel.TranslationPanel, {
        refs: t,
        defaultValue: k,
        pdfLanguageNativeName: a,
        onChange: f,
        onWrapperClick: e => {
          e.stopPropagation();
        }
      }),
      position: "bottom",
      children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        className: $["icon-wrapper"],
        onClick: e => {
          e.stopPropagation();
          p(!h);
          pdfScrollViewStore.scrollStore.getState().setIsStopHandleMouseMove(!h);
        },
        children: h ? reactJsxRuntimeCoreReexport.jsx(chevronDownIconComponent.ChevronDownIcon, {
          className: $["arrow-icon"]
        }) : reactJsxRuntimeCoreReexport.jsx(iconChevronDown.ChevronDownIcon, {
          className: $["arrow-icon"]
        })
      })
    });
  }
  let Z = e => {
    let {
      className: t,
      style: n,
      children: a,
      visible: c,
      onVisibleChange: u,
      onClickOutSide: d,
      position: m = "bottom",
      spacing: C = 4,
      showArrow: T,
      popoverContentRef: _,
      popupPortalContainer: j,
      boundary: k,
      customContent: Z,
      pdfLanguageNativeName: M,
      onClose: L,
      onSearch: F,
      onExplain: I,
      onTranslate: A,
      onExtract: W,
      onCopy: O,
      onCopyImage: B,
      onViewImage: z,
      onAskAI: H,
      onMouseMove: D,
      onSolveProblem: V
    } = e;
    let X = translationContextProvider.useTranslation();
    let [U, q] = reactCoreLibraryReexport.useState(false);
    let Q = reactCoreLibraryReexport.useRef(null);
    let Y = reactCoreLibraryReexport.useRef(null);
    let G = reactCoreLibraryReexport.useRef(null);
    let J = reactCoreLibraryReexport.useRef(null);
    _ = _ || Q;
    useClickOutsideHook_1.useClickOutside({
      getTargets: () => [_, Y, G, J].filter(infraUtilFunctions.isDefined).map(e => e.current),
      cb: () => {
        if (d != null) {
          d();
        }
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (U) {
        setTimeout(() => {
          q(false);
        }, 2000);
      }
    }, [U]);
    let K = reactContextProviderHook.useContextValue();
    reactCoreLibraryReexport.useEffect(() => {
      if (c) {
        var e;
        if ((e = K.onShowPopoverToolbar) !== null && e !== undefined) {
          e.call(K);
        }
      }
    }, [c]);
    let ee = reactJsxRuntimeCoreReexport.jsx("div", {
      ref: _,
      className: $.content,
      onClick: e => {
        e.stopPropagation();
      },
      onMouseMove: D,
      "data-testid": "container_popover_content",
      children: Z || reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [L && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: $.item,
            onClick: L,
            children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
              className: $.icon
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: $.divider
          })]
        }), F && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: $.item,
          onClick: F,
          "data-testid": "popover_search_btn",
          children: [reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {
            className: $.icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: $.title,
            children: X("hover_toolbar_ai_search")
          })]
        }), I && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: $.item,
          onClick: I,
          "data-testid": "popover_explain_btn",
          children: [reactJsxRuntimeCoreReexport.jsx(codeCanvasPopoverIcon.CodeCanvasPopoverIcon, {
            className: $.icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: $.title,
            children: X("hover_toolbar_explain")
          })]
        }), A && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: $.item,
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: $["translate-btn"],
            onClick: () => {
              A();
            },
            "data-testid": "popover_translate_btn",
            children: [reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1_1.ChatRtlIcon, {
              className: $.icon
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: $.title,
              children: X("hover_toolbar_translate")
            })]
          }), reactJsxRuntimeCoreReexport.jsx(P, {
            refs: {
              configPanelRef: Y,
              sourceLanguageSelectPanelRef: G,
              targetSelectPanelRef: J
            },
            onTranslate: A,
            pdfLanguageNativeName: M
          })]
        }), W && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: $.item,
          onClick: W,
          children: [reactJsxRuntimeCoreReexport.jsx(x, {
            className: $.icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: $.title,
            children: X("hover_toolbar_extract")
          })]
        }), z && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: $.item,
          onClick: z,
          children: [reactJsxRuntimeCoreReexport.jsx(addCircleIcon_1.AddCircleIcon, {
            className: $.icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: $.title,
            children: X("hover_toolbar_viewpic")
          })]
        }), B && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: $.item,
          onClick: B,
          children: [reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {
            className: $.icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: $.title,
            children: X("hover_toolbar_copy")
          })]
        }), O && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: l($.item),
          onClick: () => {
            O();
            q(true);
          },
          "data-testid": "popover_copy_btn",
          children: [U ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
            className: $.icon
          }) : reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {
            className: $.icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: $.title,
            children: X("hover_toolbar_copy")
          })]
        }), H && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: $.item,
          onClick: H,
          "data-testid": "popover_ask_ai_btn",
          children: [reactJsxRuntimeCoreReexport.jsx(aiGuidanceRtlIcon.AiGuidanceRtlIcon, {
            className: $.icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: $.title,
            children: X("hover_toolbar_ask_ai")
          })]
        }), V && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: $.item,
          onClick: V,
          children: [reactJsxRuntimeCoreReexport.jsx(documentSettingsIcon.DocumentSettingsIcon, {
            className: $.icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: $.title,
            children: X("hover_toolbar_solve_problem")
          })]
        })]
      })
    });
    return reactJsxRuntimeCoreReexport.jsx(floatingUiPopover.Popover, {
      className: l(t, $.popover),
      style: n,
      trigger: "custom",
      visible: c,
      onVisibleChange: u,
      position: m,
      spacing: C,
      content: ee,
      showArrow: T,
      boundary: k ?? undefined,
      popupPortalContainer: j,
      children: a
    });
  };
  require.d(exports, {
    SelectionHoverToolbar: function () {
      return Z;
    }
  });
}