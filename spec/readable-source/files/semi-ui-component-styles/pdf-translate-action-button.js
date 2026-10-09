// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'useTranslateAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 569780
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var useLocalStorageHook = require("use-local-storage-hook") /*id: 296239*/;
  var useControlledStateHook = require("use-controlled-state-hook") /*id: 263107*/;
  var reactUseChangeTracker = require("react-use-change-tracker") /*id: 203550*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var f = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M5.545 2.066a.916.916 0 0 1 1.282-.183l1.587 1.19h3.357a.916.916 0 1 1 0 1.832h-1.027c-.414 1.037-1.185 2.342-2.194 3.53.847.714 1.746 1.27 2.595 1.552a.916.916 0 1 1-.58 1.737c-1.157-.386-2.293-1.112-3.298-1.976-1.277 1.125-2.875 2.023-4.652 2.023a.916.916 0 1 1 0-1.83c1.13 0 2.28-.57 3.337-1.475-1.03-1.135-1.876-2.412-2.313-3.561H2.615a.916.916 0 0 1 0-1.832h2.87a.92.92 0 0 1 .06-1.007m2.573 2.839h.614a12.5 12.5 0 0 1-1.497 2.25c-.674-.755-1.222-1.542-1.59-2.25h2.473m6.4-2.29c0-.505.41-.915.915-.915h3.662c1.012 0 1.831.82 1.831 1.831v4.12a.916.916 0 0 1-1.83 0v-4.12h-3.663a.916.916 0 0 1-.915-.915m-6.41 17.396c0 .506-.41.916-.915.916H3.531A1.83 1.83 0 0 1 1.7 19.096v-4.12a.916.916 0 0 1 1.83 0v4.12h3.663c.506 0 .916.41.916.915m10.53 2.29a3.662 3.662 0 1 0 0-7.325 3.662 3.662 0 0 0 0 7.324m2.173-4.732a.458.458 0 1 0-.685-.609l-2.099 2.362-.879-.988a.458.458 0 0 0-.684.608l1.221 1.373a.46.46 0 0 0 .684 0zm-4.462-4.624.576 1.446a4.6 4.6 0 0 1 1.84-.33l-1.48-3.715c-.337-.846-1.535-.846-1.871 0l-3.807 9.553a.915.915 0 1 0 1.701.678l.752-1.887v-.052c0-1.238.491-2.362 1.29-3.186z",
      clipRule: "evenodd"
    })
  }), {}));
  var chatRtlIconComponent_1_1 = require("chat-rtl-icon-component_1_1") /*id: 846597*/;
  var rtlChevronUpIcon = require("rtl-chevron-up-icon") /*id: 102393*/;
  var rtlChevronIcon = require("rtl-chevron-icon") /*id: 90045*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let C = e => {
    let {
      translateEnabled: t,
      pdfLanguageCode: a,
      targetLanguageCode: r,
      isButtonPopoverOpen: i
    } = e;
    let [l, o] = reactCoreLibraryReexport.useState(false);
    let [s, c] = reactCoreLibraryReexport.useState(false);
    let [d, p] = reactCoreLibraryReexport.useState();
    reactUseChangeTracker.useChangeTracker(e => {
      if (e == null ? undefined : e.includes(0)) {
        if (t && a && a === r) {
          o(true);
          setTimeout(() => {
            o(false);
          }, 5000);
        } else {
          o(false);
        }
      }
    }, [t, a, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (d && t && a && a === r) {
        let e = () => {
          c(true);
        };
        let t = () => {
          c(false);
        };
        d.addEventListener("mouseenter", e);
        d.addEventListener("mousemove", e);
        d.addEventListener("mouseleave", t);
        return () => {
          c(false);
          d.removeEventListener("mouseenter", e);
          d.removeEventListener("mousemove", e);
          d.removeEventListener("mouseleave", t);
        };
      }
    }, [d, t, a, r]);
    return {
      setHoverTriggerEle: p,
      showLanguageSameTooltip: !i && (l || s)
    };
  };
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var S = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M5.422 6.972a6.609 6.609 0 0 1 13.156 0l.512 5.293c.154 1.593 1.702 2.93 2.636 4.116A1 1 0 0 1 20.94 18H3.06a1 1 0 0 1-.786-1.619c.934-1.186 2.482-2.523 2.636-4.116zm10.03 13.525c.053-.271-.176-.497-.452-.497H9c-.276 0-.505.226-.452.497.644 3.31 6.26 3.31 6.904 0"
    })
  }), {}));
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  let E = e => {
    let {
      visible: t,
      children: a
    } = e;
    let n = translationContextProvider.useTranslation();
    return reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
      trigger: "custom",
      visible: t,
      spacing: 12,
      position: "bottomRight",
      className: "tooltip-lG8h4a",
      content: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "content-WVK7wh",
        children: [reactJsxRuntimeCoreReexport.jsx(S, {
          className: "icon-wrpv05"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "text-FW3eyy",
          children: n("translate_translate_language_same_tooltip")
        })]
      }),
      children: a
    });
  };
  var semiButtonWrapperComponentExport = require("semi-button-wrapper-component-export") /*id: 659091*/;
  let N = e => {
    let {
      onClickConfigButton: t,
      onClickStartButton: a,
      targetLanguageName: n
    } = e;
    let r = translationContextProvider.useTranslation();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "recommend-translate-popover-content-e2SnLI",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "body-OEtyli",
        children: r("translate_if_need_translate").replace("%s", ` ${n}`)
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "footer-LjASNA",
        children: [reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponentExport.SemiButtonWrapperComponent, {
          className: "config-button-rNUacp",
          onClick: t,
          children: r("translate_settings")
        }), reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponentExport.SemiButtonWrapperComponent, {
          className: "start-button-bZpYVU",
          onClick: a,
          type: "primary",
          children: r("translate_start")
        })]
      })]
    });
  };
  var containerComponent = require("container-component") /*id: 237250*/;
  var translateServiceSelector = require("translate-service-selector") /*id: 512967*/;
  var translationConfigPanel = require("translation-config-panel") /*id: 326800*/;
  var textToolContext = require("text-tool-context") /*id: 533002*/;
  var languageCodeEnumUtils = require("language-code-enum-utils") /*id: 964571*/;
  var browserLanguageConstants = require("browser-language-constants") /*id: 259969*/;
  var browserLanguageResolver = require("browser-language-resolver") /*id: 922449*/;
  var reactContextProviderHook = require("react-context-provider-hook") /*id: 719110*/;
  var B = {
    container: "container-rhSCbT",
    "popover-open": "popover-open-lF_bBD",
    "translate-icon": "translate-icon-AByj6Z",
    active: "active-wywzUR",
    spin: "spin-lINTzr",
    "icon-wrapper": "icon-wrapper-o79R4p",
    icon: "icon-GjlN1t",
    title: "title-_ETiYX",
    disabled: "disabled-qhPA3M",
    popover: "popover-WMtKtt"
  };
  let W = {
    showOriginalText: true,
    translateService: translateServiceSelector.translateServiceEnum.LLM,
    showTranslateImage: true,
    sourceLanguage: languageCodeEnumUtils.LanguageCodeEnum.UNSPECIFIED,
    targetLanguage: browserLanguageConstants.languageConstants.BrowserLanguage,
    enabled: false
  };
  let D = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      disabled: o,
      loading: _,
      hideTitle: y = false,
      defaultValue: S = W,
      value: R,
      pdfLanguageCode: j,
      pdfLanguageNativeName: F,
      onChange: D,
      beforeTranslate: $,
      disableTranslateServiceSelect: z
    } = e;
    let H = translationContextProvider.useTranslation();
    let U = reactContextProviderHook.useContextValue();
    let O = textToolContext.useToolContext();
    let [K, Q] = useLocalStorageHook.useLocalStorage("pdf_translate_everShowRecommendPopover", false);
    let [J, V] = reactCoreLibraryReexport.useState(false);
    let [G, X] = reactCoreLibraryReexport.useState(false);
    let [q, Y] = reactCoreLibraryReexport.useState(false);
    let [ee, et] = useControlledStateHook.useControlledState({
      defaultValue: S,
      value: R,
      onChange: D,
      isEqual: deepEqualUtil_1.deepEqual
    });
    let ea = browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.targetLanguage)) || browserLanguageResolver.getPreferredLanguageInfo(languageCodeEnumUtils.LanguageCodeEnum.ZH);
    let en = ea == null ? undefined : ea.code;
    let er = ea == null ? undefined : ea.native;
    let ei = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      if (G) {
        Q(true);
      }
    }, [G]);
    reactCoreLibraryReexport.useEffect(() => {
      if (ee.enabled) {
        ei.current = Date.now();
      }
    }, [ee.enabled]);
    let el = reactCoreLibraryReexport.useDeferredValue(ee.enabled);
    reactCoreLibraryReexport.useEffect(() => {
      if (J) {
        var e;
        if ((e = U.onShowTranslateMoreList) !== null && e !== undefined) {
          e.call(U);
        }
      }
    }, [J]);
    reactUseChangeTracker.useChangeTracker((e, t, a) => {
      if (e != null && !!e.includes(0) && o === false && j !== undefined && j !== en && !K && !(O == null ? undefined : O.isOnboardingVisible)) {
        X(true);
      }
    }, [o, j, en]);
    let eo = J ? reactJsxRuntimeCoreReexport.jsx(translationConfigPanel.TranslationPanel, {
      value: {
        showOriginalText: ee.showOriginalText,
        translateService: ee.translateService,
        showTranslateImage: ee.showTranslateImage,
        sourceLanguage: ee.sourceLanguage,
        targetLanguage: ee.targetLanguage
      },
      pdfLanguageNativeName: F,
      onWrapperClick: e => {
        e.stopPropagation();
      },
      onChange: (e, t) => {
        var r;
        let {
          showOriginalText: o,
          sourceLanguage: s,
          targetLanguage: c,
          translateService: d,
          showTranslateImage: u
        } = e;
        let {
          type: p
        } = t;
        et(immerCoreImplementation.produce(e => {
          if (!isUndefinedCheck.isUndefined(o)) {
            e.showOriginalText = o;
          }
          if (!isUndefinedCheck.isUndefined(d)) {
            e.translateService = d;
          }
          if (!isUndefinedCheck.isUndefined(u)) {
            e.showTranslateImage = u;
          }
          e.sourceLanguage = s;
          e.targetLanguage = c;
        }));
        if ((r = U.onClickTranslateMoreList) !== null && r !== undefined) {
          r.call(U, {
            button: {
              showOriginalText: "show_original_text",
              sourceLanguage: "original_language",
              targetLanguage: "translated_language",
              showTranslateImage: "show_translate_image",
              translateService: "translate_service"
            }[p] || "original_language",
            fromLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.sourceLanguage))?.code,
            toLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.targetLanguage))?.code,
            showOriginalText: o,
            showTranslateImage: u,
            translateService: d
          });
        }
      },
      onSubPanelVisibleChange: Y,
      disableTranslateServiceSelect: z
    }) : G ? reactJsxRuntimeCoreReexport.jsx(N, {
      targetLanguageName: er,
      onClickConfigButton: () => {
        if (!o && !_) {
          V(true);
          X(false);
        }
      },
      onClickStartButton: () => {
        var a;
        if (!o && !_) {
          if ((a = U.onClickTranslate) !== null && a !== undefined) {
            a.call(U, {
              button: "on",
              fromLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.sourceLanguage))?.code,
              toLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.targetLanguage))?.code,
              startTranslateTimestamp: ei.current
            });
          }
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "read_canvas_click_translate_start",
            meta: {
              fromLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.sourceLanguage))?.code,
              toLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.targetLanguage))?.code,
              translateService: ee.translateService
            }
          });
          et(immerCoreImplementation.produce(e => {
            e.enabled = !e.enabled;
          }));
          if (G) {
            X(false);
          }
        }
      }
    }) : null;
    let es = (J || G) && !!eo;
    let {
      showLanguageSameTooltip: ec,
      setHoverTriggerEle: ed
    } = C({
      translateEnabled: ee.enabled,
      targetLanguageCode: en,
      pdfLanguageCode: j,
      isButtonPopoverOpen: es
    });
    let eu = reactFunctionMemoHook.useMemoizedCallback(async () => {
      var e;
      var t;
      var r;
      if (!o && !_) {
        if (O != null && (t = O.ref) !== null && t !== undefined && (e = t.current) !== null && e !== undefined) {
          e.next(textToolContext.ToolMode.TRANSLATE_ALL);
        }
        if ((r = U.onClickTranslate) !== null && r !== undefined) {
          r.call(U, {
            button: ee.enabled ? "off" : "on",
            fromLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.sourceLanguage))?.code,
            toLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.targetLanguage))?.code,
            startTranslateTimestamp: ei.current
          });
        }
        loggerServiceCore.defaultLogger.persist.info({
          eventName: ee.enabled ? "read_canvas_click_translate_end" : "read_canvas_click_translate_start",
          meta: {
            fromLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.sourceLanguage))?.code,
            toLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.targetLanguage))?.code,
            translateService: ee.translateService
          }
        });
        if (!$ || (await $())) {
          et(immerCoreImplementation.produce(e => {
            e.enabled = !e.enabled;
          }));
          if (G) {
            X(false);
          }
          browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.sourceLanguage));
        }
      }
    });
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      toggleConfigPopover: V
    }));
    return reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
      className: B.popover,
      visible: es,
      onVisibleChange: e => {
        if (J) {
          V(e);
        } else {
          X(e);
        }
      },
      trigger: "custom",
      content: eo,
      onClickOutSide: () => {
        if (!q) {
          V(false);
          X(false);
        }
      },
      position: "bottom",
      children: reactJsxRuntimeCoreReexport.jsxs(containerComponent.Container, {
        ref: e => {
          ed(e);
        },
        className: s(B.container, a, {
          [B.disabled]: o || _,
          [B["popover-open"]]: es
        }),
        disabled: o,
        onClick: eu,
        "data-testid": "container_inner_translate_btn",
        "data-onboarding-id": "translate_all_btn",
        children: [!o && _ ? reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
          wrapperClassName: B.spin,
          size: "small"
        }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: ee.enabled ? reactJsxRuntimeCoreReexport.jsx(f, {
            className: s(B["translate-icon"], B.active)
          }) : reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1_1.ChatRtlIcon, {
            className: B["translate-icon"]
          })
        }), !y && reactJsxRuntimeCoreReexport.jsx("div", {
          className: B.title,
          children: H(el && !_ ? "translate_switch_off" : "translate_all_article")
        }), reactJsxRuntimeCoreReexport.jsx(E, {
          visible: ec,
          children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
            className: B["icon-wrapper"],
            disabled: o || _,
            onClick: e => {
              var n;
              if (!o && !_) {
                e.stopPropagation();
                if (G) {
                  X(false);
                } else {
                  V(!J);
                }
                if ((n = U.onClickTranslate) !== null && n !== undefined) {
                  n.call(U, {
                    button: "more",
                    fromLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.sourceLanguage))?.code,
                    toLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.targetLanguage))?.code
                  });
                }
                loggerServiceCore.defaultLogger.persist.info({
                  eventName: "read_canvas_click_translate_more",
                  meta: {
                    fromLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.sourceLanguage))?.code,
                    toLanguage: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(ee.targetLanguage))?.code,
                    translateService: ee.translateService
                  }
                });
              }
            },
            children: es ? reactJsxRuntimeCoreReexport.jsx(rtlChevronUpIcon.ChevronUpIcon, {
              className: B.icon
            }) : reactJsxRuntimeCoreReexport.jsx(rtlChevronIcon.RtlChevronIcon, {
              className: B.icon
            })
          })
        })]
      })
    });
  });
  let $ = e => {
    let {
      translateConfig: t,
      isNarrowWidth: a,
      disabled: r
    } = e;
    let i = translationContextProvider.useTranslation();
    return {
      tooltip: reactCoreLibraryReexport.useMemo(() => {
        if (t == null ? undefined : t.disabled) {
          return i("translate_disabled_tooltip");
        }
      }, [t == null ? undefined : t.disabled]),
      renderButton: reactCoreLibraryReexport.useCallback(() => {
        if (!t) {
          return null;
        }
        let {
          defaultValue: e,
          value: n,
          onChange: i,
          disabled: l,
          loading: o,
          pdfLanguage: s,
          pdfLanguageNativeName: c,
          beforeTranslate: d,
          translateConfigButtonRef: u,
          disableTranslateServiceSelect: p
        } = t;
        return reactJsxRuntimeCoreReexport.jsx(D, {
          defaultValue: e,
          value: n,
          onChange: i,
          loading: o,
          hideTitle: a,
          disabled: r || l,
          pdfLanguageCode: s,
          pdfLanguageNativeName: c,
          beforeTranslate: d,
          ref: u,
          disableTranslateServiceSelect: p
        });
      }, [t, r, a])
    };
  };
  require.d(exports, {
    useTranslateAction: function () {
      return $;
    }
  });
}