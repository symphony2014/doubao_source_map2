// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'si' to 'ViewerControlBar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 171255
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var controlBarLayout = require("control-bar-layout") /*id: 23865*/;
  var rtlChevronLeftIcon = require("rtl-chevron-left-icon") /*id: 400992*/;
  var pdfTranslateActionButton = require("pdf-translate-action-button") /*id: 569780*/;
  var assetListSwitcherHook = require("asset-list-switcher-hook") /*id: 223604*/;
  var viewerConstants = require("viewer-constants") /*id: 636769*/;
  var outlineSelectorComponent = require("outline-selector-component") /*id: 46185*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var m = classnamesUtils;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var useControlledStateHook = require("use-controlled-state-hook") /*id: 263107*/;
  var useDebouncedValueHook = require("use-debounced-value-hook") /*id: 510920*/;
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  var lengthCalculatorStyles = require("length-calculator-styles") /*id: 66934*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      value: t,
      min: a,
      max: n
    } = e;
    if (isNumberUtil.isNumber(t)) {
      if (!isUndefinedCheck.isUndefined(a) && t < a) {
        return a;
      } else if (!isUndefinedCheck.isUndefined(n) && t > n) {
        return n;
      } else {
        return t;
      }
    } else {
      return t;
    }
  };
  let x = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      style: r,
      inputClassName: l,
      defaultValue: o,
      value: s,
      onChange: c,
      min: d,
      max: u,
      disabled: p = false
    } = e;
    let [v, h] = useControlledStateHook.useControlledState({
      defaultValue: b({
        value: o,
        min: d,
        max: u
      }),
      value: b({
        value: s,
        min: d,
        max: u
      }),
      onChange: c
    });
    let [x, C] = reactCoreLibraryReexport.useState(String(v));
    let y = useDebouncedValueHook.useDebouncedValue(x, {
      leading: false,
      trailing: true,
      wait: 100
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (y) {
        h(parseInt(y));
      }
    }, [y]);
    reactCoreLibraryReexport.useEffect(() => {
      C(String(v));
    }, [v]);
    let {
      ref: S,
      width: A
    } = resizeObserverHooks.useResizeObserverEx();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: m(lengthCalculatorStyles.componentStyles.container, a),
      style: r,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: S,
        className: lengthCalculatorStyles.componentStyles["length-calculator"],
        children: x
      }), reactJsxRuntimeCoreReexport.jsx(semiInputComponent.InputComponent, {
        "data-testid": "container_inner_page_input",
        ref: t,
        className: m(lengthCalculatorStyles.componentStyles.input, {
          [lengthCalculatorStyles.componentStyles.disabled]: p
        }, l),
        disabled: p,
        value: x,
        onBlur: () => {
          if (!x) {
            C(String(o));
          }
        },
        onChange: e => {
          if (!e) {
            C(e);
            return;
          }
          if (!(e.length > 5) && /^[0-9]+$/.test(e)) {
            C(String(b({
              value: parseInt(e),
              min: d,
              max: u
            })));
          }
        },
        size: "small",
        style: {
          width: A ?? 10
        }
      })]
    });
  });
  var reactContextProviderHook = require("react-context-provider-hook") /*id: 719110*/;
  let y = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      style: r,
      disabled: i = false,
      totalPage: l,
      defaultValue: o = 1,
      value: s,
      onChange: c,
      inputContainerClassName: d,
      inputClassName: u
    } = e;
    let p = reactContextProviderHook.useContextValue();
    let h = reactCoreLibraryReexport.useRef(null);
    let _ = reactFunctionMemoHook.useMemoizedCallback(e => {
      var t;
      if (c != null) {
        c(e);
      }
      if ((t = p.onPageSwitch) !== null && t !== undefined) {
        t.call(p);
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      className: m("container-UFHQA6", a, {
        "container-disabled-cjpg4k": i
      }),
      style: r,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: m("current-page-FmSJQz", {
          "disabled-hXj0Sz": i
        }, d),
        onClick: () => {
          var e;
          var t;
          if ((e = h.current) !== null && e !== undefined) {
            e.focus();
          }
          if ((t = p.onClickPageInput) !== null && t !== undefined) {
            t.call(p);
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(x, {
          ref: h,
          defaultValue: o,
          value: s,
          min: 1,
          max: l,
          onChange: _,
          disabled: i,
          inputClassName: u
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        children: "/"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        children: l ?? "-"
      })]
    });
  });
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var rtlSearchIcon_1 = require("rtl-search-icon_1") /*id: 547696*/;
  var addCircleIcon_1 = require("add-circle-icon_1") /*id: 5067*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var N = {
    container: "container-RJf94s",
    "current-scale": "current-scale-QLSKDT",
    disabled: "disabled-UWr4MO",
    precentage: "precentage-HTQEUQ"
  };
  let T = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      iconWrapClassName: r,
      disabled: i,
      defaultValue: l = 100,
      value: o,
      showInput: s = true,
      onChange: c,
      min: d = 10,
      max: u = 500,
      step: p = 10
    } = e;
    let v = translationContextProvider.useTranslation();
    let h = reactContextProviderHook.useContextValue();
    let g = reactCoreLibraryReexport.useRef(null);
    let [f, w] = useControlledStateHook.useControlledState({
      defaultValue: l,
      value: o,
      onChange: c
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: m(N.container, a),
      ref: t,
      children: [reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        "data-testid": "zoom_out_btn",
        tooltip: v("zoom_out_tooltip"),
        disabled: i,
        onClick: () => {
          var e;
          w(Math.max(d, f - p));
          if ((e = h.onZoomOut) !== null && e !== undefined) {
            e.call(h);
          }
        },
        className: r,
        children: reactJsxRuntimeCoreReexport.jsx(rtlSearchIcon_1.SearchRtlIcon, {
          className: "p-2 !text-16"
        })
      }), s && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: m(N["current-scale"], {
          [N.disabled]: i
        }),
        onClick: () => {
          var e;
          var t;
          if ((e = g.current) !== null && e !== undefined) {
            e.focus();
          }
          if ((t = h.onClickZoomInput) !== null && t !== undefined) {
            t.call(h);
          }
        },
        children: [reactJsxRuntimeCoreReexport.jsx(x, {
          ref: g,
          defaultValue: l,
          value: f,
          min: d,
          max: u,
          onChange: w,
          disabled: i
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: N.precentage,
          children: "%"
        })]
      }), reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        "data-testid": "zoom_in_btn",
        tooltip: v("zoom_in_tooltip"),
        disabled: i,
        onClick: () => {
          var e;
          w(Math.min(u, f + p));
          if ((e = h.onZoomIn) !== null && e !== undefined) {
            e.call(h);
          }
        },
        className: r,
        children: reactJsxRuntimeCoreReexport.jsx(addCircleIcon_1.AddCircleIcon, {
          className: "p-2 !text-16"
        })
      })]
    });
  });
  var cropActionButton = require("crop-action-button") /*id: 135834*/;
  var aiReadingDownloadDropdown = require("ai-reading-download-dropdown") /*id: 962266*/;
  let M = e => {
    let {
      className: t,
      style: a,
      disabled: p = false,
      pageConfig: m,
      scaleConfig: v,
      outlineConfig: h,
      translateConfig: _,
      cropConfig: g,
      assetListConfig: f,
      totalPage: w,
      onDownload: b,
      onDownloadTranslation: x,
      onClose: C,
      moreActions: S = [],
      disableActions: A
    } = e;
    let E = translationContextProvider.useTranslation();
    let N = reactCoreLibraryReexport.useRef(null);
    let {
      width: M
    } = resizeObserverHooks.useResizeObserverEx({
      ref: N
    });
    let P = e => !isUndefinedCheck.isUndefined(M) && M >= e;
    let F = !P(540);
    let L = e => S.filter(t => t.position === e).map(e => {
      let {
        position: t,
        ...a
      } = e;
      return {
        ...a
      };
    });
    let {
      iconVisible: Z,
      renderIcon: B
    } = assetListSwitcherHook.useAssetListSwitcher({
      isInCanvas: false,
      assetListConfig: f
    });
    let {
      tooltip: W,
      renderButton: D
    } = pdfTranslateActionButton.useTranslateAction({
      translateConfig: _,
      isNarrowWidth: F,
      disabled: p
    });
    return reactJsxRuntimeCoreReexport.jsx(controlBarLayout.ControlBarLayout, {
      ref: N,
      className: t,
      style: a,
      left: [...L("left-starting"), ...(C ? [{
        type: "icon",
        tooltip: E("exit_immersive_reading_tooltip"),
        icon: reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {
          className: "p-2 !text-16"
        }),
        onClick: C
      }, {
        type: "divider"
      }] : []), ...(Z ? [{
        type: "custom",
        element: B()
      }] : []), {
        type: "custom",
        element: h && (e => {
          let {
            defaultValue: t,
            value: a,
            onChange: n,
            disabledOption: r,
            loadingOption: i
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(outlineSelectorComponent.OutlineSelector, {
            disabled: p,
            defaultValue: t,
            value: a,
            onChange: n,
            disabledOption: r,
            loadingOption: i
          });
        })(h)
      }, ...L("left-ending")],
      center: [...L("center-starting"), {
        type: "custom",
        tooltip: W,
        element: D()
      }, ...((A == null ? undefined : A.includes(viewerConstants.UiActions.crop)) ? [] : [{
        type: "divider"
      }, {
        type: "custom",
        tooltip: (g == null ? undefined : g.disable) ? E("screencapture_disable_tooltip") : undefined,
        element: g && reactJsxRuntimeCoreReexport.jsx(cropActionButton.CropButton, {
          disabled: g.disable || p,
          hideTitle: !P(540),
          onClick: g.onStartCropping,
          iconClassName: "!text-16 p-2"
        })
      }]), ...L("center-ending")],
      right: [...L("right-starting"), ...(!p && P(710) && m ? [{
        type: "custom",
        element: (e => {
          let {
            totalPage: t,
            defaultValue: a,
            value: n,
            onChange: r
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(y, {
            totalPage: t,
            defaultValue: a,
            value: n,
            onChange: r,
            disabled: p
          });
        })(m)
      }, {
        type: "divider"
      }] : []), ...(v ? [{
        type: "custom",
        element: (e => {
          let {
            defaultValue: t,
            value: a,
            showInput: n,
            onChange: r
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(T, {
            defaultValue: t,
            value: a,
            showInput: n,
            onChange: r,
            disabled: p
          });
        })({
          ...v,
          showInput: P(815)
        })
      }, {
        type: "divider"
      }] : []), {
        type: "custom",
        element: reactJsxRuntimeCoreReexport.jsx(aiReadingDownloadDropdown.AiReadingDownload, {
          onDownloadOriginal: b,
          onDownloadTranslation: x,
          totalPage: w
        })
      }, ...L("right-ending")]
    });
  };
  require.d(exports, {
    ViewerControlBar: function () {
      return M;
    }
  });
}