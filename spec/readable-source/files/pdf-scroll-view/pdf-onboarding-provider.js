// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'PdfOnboardingProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 693656
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var floatingUiPositioningHook = require("floating-ui-positioning-hook") /*id: 965218*/;
  var guidedTourStepComponent = require("guided-tour-step-component") /*id: 487040*/;
  var overflowList = require("overflow-list") /*id: 395871*/;
  var searchIconComponent_2 = require("search-icon-component_2") /*id: 773676*/;
  var codeCanvasPopoverIcon = require("code-canvas-popover-icon") /*id: 170765*/;
  var chatRtlIconComponent_1_1 = require("chat-rtl-icon-component_1_1") /*id: 846597*/;
  var aiGuidanceRtlIcon = require("ai-guidance-rtl-icon") /*id: 682496*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      children: t
    } = e;
    let n = translationContextProvider.useTranslation();
    let r = "text-10 mr-3 ml-8";
    let a = "whitespace-nowrap text-10 leading-[15px]";
    let i = [{
      key: "search",
      content: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {
          className: l(r, "!ml-0")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a,
          children: n("hover_toolbar_ai_search")
        })]
      })
    }, {
      key: "explain",
      content: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(codeCanvasPopoverIcon.CodeCanvasPopoverIcon, {
          className: r
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a,
          children: n("hover_toolbar_explain")
        })]
      })
    }, {
      key: "translate",
      content: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1_1.ChatRtlIcon, {
          className: r
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a,
          children: n("hover_toolbar_translate")
        })]
      })
    }, {
      key: "ask_ai",
      content: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(aiGuidanceRtlIcon.AiGuidanceRtlIcon, {
          className: r
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: a,
          children: n("hover_toolbar_ask_ai")
        })]
      })
    }];
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "h-92 rounded-s-radius-xxss bg-[linear-gradient(88deg,_#E6F0F8_12.33%,_#FFF6F4_102.89%)] rouned-8 flex flex-col items-center justify-center",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mock-toolbar max-w-230 flex justify-between bg-s-color-bg-body rounded-6 py-4 px-8 s-font-xxxxs border-solid border-[0.5px] border-s-color-border-tertiary s-shadow-level1",
          children: reactJsxRuntimeCoreReexport.jsx(overflowList.OverflowList, {
            className: "w-full items-center",
            items: i,
            visibleItemRenderer: e => {
              let {
                content: t,
                key: n
              } = e;
              return reactJsxRuntimeCoreReexport.jsx("div", {
                className: "flex items-center",
                children: t
              }, n);
            },
            overflowRenderer: e => e.length > 0 ? reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {
              className: r
            }) : null,
            minVisibleItems: 2
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mock-text text-s-color-text-tertiary text-10 leading-[16px] mt-4 rounded-2 bg-[rgba(135,_175,_236,_0.40)] px-2",
          children: "Artificial Intelligence"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "content mt-8",
        children: t
      })]
    });
  };
  var reactContextDefinition_2 = require("react-context-definition_2") /*id: 364030*/;
  var localStoragePersistedStateHook = require("local-storage-persisted-state-hook") /*id: 429278*/;
  let b = function (e = "pdf_scroll_view_pdf_onboarding_shown") {
    let [t, n] = localStoragePersistedStateHook.useLocalStorageState(e, {
      defaultValue: false
    });
    return {
      pdfOnboardingShown: t,
      setPdfOnboardingShown: n
    };
  };
  var reactContextProviderHook = require("react-context-provider-hook") /*id: 719110*/;
  var y = {
    "animate-fade-in": "animate-fade-in-uN1yiO",
    "on-boarding": "on-boarding-XQM1Gw"
  };
  let S = e => {
    let {
      children: t
    } = e;
    let n = translationContextProvider.useTranslation();
    let a = reactContextProviderHook.useContextValue();
    let {
      pdfOnboardingShown: s,
      setPdfOnboardingShown: c
    } = b();
    let [u, d] = reactCoreLibraryReexport.useState(!s);
    let h = reactCoreLibraryReexport.useRef(null);
    let p = [{
      selector: "[data-onboarding-id=\"header_control_bar\"]",
      title: n("onboarding_highlight_title"),
      content: reactJsxRuntimeCoreReexport.jsx(m, {
        children: n("onboarding_highlight_desc")
      }),
      enableArrow: false,
      floatingOptions: {
        placement: "bottom-end",
        middleware: [floatingUiPositioningHook.offsetMiddleware({
          mainAxis: 16,
          crossAxis: -16
        })]
      }
    }, {
      selector: "[data-onboarding-id=\"translate_all_btn\"]",
      title: n("onboarding_translate_title"),
      content: n("onboarding_translate_desc")
    }, {
      selector: "[data-onboarding-id=\"crop_btn\"]",
      title: n("onboarding_screenshot_title"),
      content: n("onboarding_screenshot_desc")
    }];
    reactCoreLibraryReexport.useEffect(() => {
      if (u) {
        var e;
        if ((e = a.onShowOnboarding) !== null && e !== undefined) {
          e.call(a);
        }
        c(true);
      }
    }, []);
    let x = reactCoreLibraryReexport.useMemo(() => ({
      ref: h,
      isOnboardingVisible: u
    }), [u]);
    return reactJsxRuntimeCoreReexport.jsxs(reactContextDefinition_2.Provider, {
      value: x,
      children: [t, u ? reactJsxRuntimeCoreReexport.jsx(guidedTourStepComponent.GuidedTourStep, {
        onClose: () => {
          var e;
          if ((e = a.onClickOnboarding) !== null && e !== undefined) {
            e.call(a, {
              button_name: "close"
            });
          }
          d(false);
        },
        onFinish: () => d(false),
        onNextButtonClick: e => {
          var t;
          if ((t = a.onClickOnboarding) !== null && t !== undefined) {
            t.call(a, {
              button_name: e + 1 === p.length ? "got_it" : "next"
            });
          }
        },
        ref: h,
        steps: p,
        nextBtnText: n("onboarding_next"),
        finishBtnText: n("onboarding_done"),
        className: l(y["on-boarding"], y["animate-fade-in"])
      }) : null]
    });
  };
  require.d(exports, {
    PdfOnboardingProvider: function () {
      return S;
    }
  });
}