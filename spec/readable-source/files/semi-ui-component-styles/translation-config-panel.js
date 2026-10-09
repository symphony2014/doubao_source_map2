// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'TranslationPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 326800
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var switchAdapterComponent = require("switch-adapter-component") /*id: 962937*/;
  var semiDividerComponent = require("semi-divider-component") /*id: 384623*/;
  var translateServiceSelector = require("translate-service-selector") /*id: 512967*/;
  var languageCodeEnumUtils = require("language-code-enum-utils") /*id: 964571*/;
  var browserLanguageConstants = require("browser-language-constants") /*id: 259969*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var floatingUiPopover = require("floating-ui-popover") /*id: 275531*/;
  var useControlledStateHook = require("use-controlled-state-hook") /*id: 263107*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var f = {
    container: "container-lli4mM",
    "theme-primary": "theme-primary-mOKU3M",
    themePrimary: "theme-primary-mOKU3M",
    "theme-rounded": "theme-rounded-KpW7xh",
    themeRounded: "theme-rounded-KpW7xh",
    "selection-content": "selection-content-TX9ytK",
    selectionContent: "selection-content-TX9ytK",
    scrollable: "scrollable-P_BIAV",
    "select-title": "select-title-ipibDV",
    selectTitle: "select-title-ipibDV",
    text: "text-I6jLcP",
    "top-divider": "top-divider-EAy70F",
    topDivider: "top-divider-EAy70F",
    "option-item": "option-item-h6t3Sk",
    optionItem: "option-item-h6t3Sk",
    loading: "loading-Q5v7RP",
    icon: "icon-aWMkiB",
    content: "content-iLAoKr",
    title: "title-SlWX5l",
    desc: "desc-ZT8wV6",
    "selected-icon": "selected-icon-z7oeco",
    selectedIcon: "selected-icon-z7oeco",
    disabled: "disabled-hd2ptv",
    selected: "selected-Inq3R0"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function k(e) {
    let {
      popoverContentRef: t,
      className: a,
      style: r,
      contentClassName: i,
      contentStyle: o,
      itemClassName: s,
      children: c,
      content: d,
      disabled: u = false,
      title: k,
      options: b,
      defaultValue: x,
      value: C,
      onChange: y,
      visible: S,
      onVisibleChange: A,
      position: E = "bottom",
      spacing: R = 0,
      theme: N = "primary",
      selectable: T = true,
      bottom: j,
      scrollable: I = true,
      ...M
    } = e;
    let [P, F] = useControlledStateHook.useControlledState({
      defaultValue: x,
      value: C,
      onChange: y
    });
    let [L, Z] = useControlledStateHook.useControlledState({
      defaultValue: false,
      value: S,
      onChange: A
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (u) {
        Z(false);
      }
    }, [u]);
    let B = reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      className: l(f["selection-content"], i, "flow-scrollbar", {
        [f.scrollable]: I
      }),
      style: o,
      children: [isStringTypeCheck.isString(k) ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: f["select-title"],
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: f.text,
          children: k
        })
      }) : k, b.map(e => {
        let {
          label: t,
          subLabel: a,
          value: r,
          disabled: i = false,
          checked: o = false,
          loading: c = false,
          topDivider: d = false,
          waitForPromise: u = false,
          visible: p = true,
          icon: m,
          subOptions: v = [],
          onClick: h
        } = e;
        let k = o || P === r;
        return p && reactJsxRuntimeCoreReexport.jsxs(reactCoreLibraryReexport.Fragment, {
          children: [d && reactJsxRuntimeCoreReexport.jsx("div", {
            className: f["top-divider"]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: l(f["option-item"], s, {
              [f.selected]: k,
              [f.disabled]: i,
              [f.loading]: c
            }),
            onClick: async e => {
              if (!i) {
                e.stopPropagation();
                if (u) {
                  if ((await (h == null ? undefined : h())) === false) {
                    return;
                  }
                } else if ((h == null ? undefined : h()) === false) {
                  return;
                }
                if (T) {
                  F(r);
                }
                Z(false);
              }
            },
            children: [m && reactJsxRuntimeCoreReexport.jsx("div", {
              className: f.icon,
              children: m
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: f.content,
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: f.title,
                children: t
              }), a && reactJsxRuntimeCoreReexport.jsx("div", {
                className: f.desc,
                children: a
              })]
            }), !c && k && reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
              className: f["selected-icon"]
            }), c && reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
              wrapperClassName: f.loading
            })]
          })]
        }, r);
      }), j]
    });
    let W = {
      setVisible: Z,
      value: P,
      option: b.find(e => e.value === P)
    };
    let D = isFunctionUtil_1.isFunction(d) ? d(W) : d;
    return reactJsxRuntimeCoreReexport.jsx(floatingUiPopover.Popover, {
      trigger: "custom",
      position: E,
      content: D || B,
      spacing: R,
      className: l(f.container, a, f[`theme-${N}`]),
      style: r,
      visible: L,
      onVisibleChange: Z,
      onClickOutSide: () => {
        Z(false);
      },
      ...M,
      children: isFunctionUtil_1.isFunction(c) ? c(W) : c
    });
  }
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  let C = e => {
    let {
      popoverContentRef: t,
      className: a,
      style: r,
      defaultValue: i,
      value: o,
      pdfLanguageNativeName: s,
      onChange: c,
      showAutoDetectOption: p = false,
      showBrowserLanguageOption: m = false,
      visible: v,
      onVisibleChange: _
    } = e;
    let g = translationContextProvider.useTranslation();
    let f = () => i || (p ? languageCodeEnumUtils.LanguageCodeEnum.UNSPECIFIED : m ? browserLanguageConstants.languageConstants.BrowserLanguage : languageCodeEnumUtils.LanguageCodeEnum.EN);
    let [C, y] = useControlledStateHook.useControlledState({
      defaultValue: f(),
      value: o,
      onChange: c
    });
    let [S, A] = useControlledStateHook.useControlledState({
      defaultValue: false,
      value: v,
      onChange: _
    });
    let E = reactCoreLibraryReexport.useMemo(() => {
      if (C === browserLanguageConstants.languageConstants.BrowserLanguage) {
        return g("translate_browser_language");
      }
      if (C === languageCodeEnumUtils.LanguageCodeEnum.UNSPECIFIED) {
        return g("translate_auto_detect");
      }
      let e = languageCodeEnumUtils.languageCodeMap[C];
      let t = languageCodeEnumUtils.getPreferredLanguages().find(t => t.code === e);
      if (t) {
        return t.native;
      } else {
        return "-";
      }
    }, [C]);
    let R = reactCoreLibraryReexport.useMemo(() => {
      let e = [];
      if (p) {
        e.push({
          label: g("translate_auto_detect"),
          ...(s ? {
            subLabel: s
          } : {}),
          value: languageCodeEnumUtils.LanguageCodeEnum.UNSPECIFIED
        });
      }
      if (m) {
        e.push({
          label: g("translate_browser_language"),
          value: browserLanguageConstants.languageConstants.BrowserLanguage
        });
      }
      let t = languageCodeEnumUtils.getPreferredLanguages();
      let a = [];
      for (let {
        name: e,
        native: n,
        code: r
      } of t) {
        if (r in languageCodeEnumUtils.languageToEnumMap) {
          a.push({
            label: n,
            subLabel: e,
            value: languageCodeEnumUtils.languageToEnumMap[r]
          });
        }
      }
      return [...e, ...a];
    }, [p, m]);
    return reactJsxRuntimeCoreReexport.jsx(k, {
      popoverContentRef: t,
      defaultValue: f(),
      value: C,
      onChange: y,
      options: R,
      visible: S,
      onVisibleChange: A,
      position: "rightTop",
      spacing: 12,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l("container-dK2C_Z", a),
        style: r,
        onClick: () => {
          A(true);
        },
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "title-WjeErJ",
          children: E
        }), reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
          className: "icon-YTMAed"
        })]
      })
    });
  };
  var y = {
    container: "container-o5k6BS",
    "option-item-wrapper": "option-item-wrapper-EIztra",
    title: "title-iTvGwG",
    "option-item": "option-item-fjjG3D",
    "show-orginal-wrapper": "show-orginal-wrapper-RUu24V"
  };
  let S = {
    showOriginalText: true,
    translateService: translateServiceSelector.translateServiceEnum.LLM,
    showTranslateImage: true,
    sourceLanguage: languageCodeEnumUtils.LanguageCodeEnum.UNSPECIFIED,
    targetLanguage: browserLanguageConstants.languageConstants.BrowserLanguage
  };
  let A = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      value: a,
      defaultValue: i = S,
      pdfLanguageNativeName: d,
      onChange: u,
      onSubPanelVisibleChange: p,
      onWrapperClick: m,
      onWrapperMouseDown: v,
      refs: h,
      disableTranslateServiceSelect: _
    } = e;
    let g = translationContextProvider.useTranslation();
    let [f, k] = reactCoreLibraryReexport.useState(i);
    let b = isUndefinedCheck.isUndefined(a) ? f : a;
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      getFormValues: () => b
    }), [b]);
    let A = !isUndefinedCheck.isUndefined(b.showOriginalText);
    let E = !isUndefinedCheck.isUndefined(b.translateService);
    let R = !isUndefinedCheck.isUndefined(b.showTranslateImage);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: h == null ? undefined : h.configPanelRef,
      className: y.container,
      onClick: m,
      onMouseDown: v,
      children: [A && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: l(y["show-orginal-wrapper"], "mb-2"),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: y.title,
            children: g("translate_show_raw_article")
          }), reactJsxRuntimeCoreReexport.jsx(switchAdapterComponent.SwitchComponent, {
            "data-testid": "translate_show_raw_article_switch",
            onChange: e => {
              let t = {
                ...b,
                showOriginalText: e
              };
              k(t);
              if (u != null) {
                u(t, {
                  type: "showOriginalText"
                });
              }
            },
            checked: b.showOriginalText
          })]
        }), reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
          margin: "4px"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l(y["option-item-wrapper"]),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: y.title,
          children: g("translate_source_language")
        }), reactJsxRuntimeCoreReexport.jsx(C, {
          "data-testid": "translate_source_language_select",
          popoverContentRef: h == null ? undefined : h.sourceLanguageSelectPanelRef,
          className: y["option-item"],
          showAutoDetectOption: true,
          onVisibleChange: p,
          value: b.sourceLanguage,
          onChange: e => {
            let t = {
              ...b,
              sourceLanguage: e
            };
            k(t);
            if (u != null) {
              u(t, {
                type: "sourceLanguage"
              });
            }
          },
          pdfLanguageNativeName: d
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l(y["option-item-wrapper"], "mb-8"),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: y.title,
          children: g("translate_target_language")
        }), reactJsxRuntimeCoreReexport.jsx(C, {
          "data-testid": "translate_target_language_select",
          popoverContentRef: h == null ? undefined : h.targetSelectPanelRef,
          className: y["option-item"],
          showBrowserLanguageOption: true,
          onVisibleChange: p,
          value: b.targetLanguage,
          onChange: e => {
            let t = {
              ...b,
              targetLanguage: e
            };
            k(t);
            if (u != null) {
              u(t, {
                type: "targetLanguage"
              });
            }
          }
        })]
      }), E || R ? reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
        margin: "4px"
      }) : null, !_ && E ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "px-8",
          children: reactJsxRuntimeCoreReexport.jsx(translateServiceSelector.TranslateServiceSelector, {
            "data-testid": "translate_service_select",
            defaultValue: b.translateService,
            onVisibleChange: p,
            onChange: e => {
              let t = {
                ...b,
                translateService: e
              };
              k(t);
              if (u != null) {
                u(t, {
                  type: "translateService"
                });
              }
            }
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mb-2 px-8 text-s-color-text-tertiary s-font-xxs",
          children: g("translate_service_tips")
        })]
      }) : null, R ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l(y["show-orginal-wrapper"]),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: y.title,
          children: g("translate_text_inside_image")
        }), reactJsxRuntimeCoreReexport.jsx(switchAdapterComponent.SwitchComponent, {
          "data-testid": "translate_text_inside_image_switch",
          onChange: e => {
            let t = {
              ...b,
              showTranslateImage: e
            };
            k(t);
            if (u != null) {
              u(t, {
                type: "showTranslateImage"
              });
            }
          },
          checked: b.showTranslateImage
        })]
      }) : null]
    });
  });
  require.d(exports, {
    TranslationPanel: function () {
      return A;
    }
  });
}