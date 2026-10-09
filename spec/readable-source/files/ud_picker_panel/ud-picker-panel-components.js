// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'eventEmitterWrapper_1'
// - Resolved require(740547) to 'event-emitter-wrapper_1'
// - Renamed variable 'c' to 'resizeObserverPolyfill'
// - Resolved require(412454) to 'resize-observer-polyfill'
// - Renamed variable 'u' to 'debounceUtilWrapper'
// - Resolved require(213804) to 'debounce-util-wrapper'
// - Renamed variable 's' to 'closeOutlinedIconComponent'
// - Resolved require(426699) to 'close-outlined-icon-component'
// - Renamed variable 'l' to 'iconButtonComponent'
// - Resolved require(259693) to 'icon-button-component'
// - Renamed variable 'f' to 'unifiedButtonComponent'
// - Resolved require(488299) to 'unified-button-component'
// - Renamed variable 'd' to 'localeContextHocWrappers'
// - Resolved require(945449) to 'locale-context-hoc-wrappers'
// - Renamed variable 'm' to 'udPickerConfig'
// - Resolved require(177642) to 'ud-picker-config'
// - Renamed variable '_' to 'larkLoggerTracingUtils'
// - Resolved require(944519) to 'lark-logger-tracing-utils'
// - Renamed variable 'p' to 'udPickerPanelConfig_1'
// - Resolved require(887471) to 'ud-picker-panel-config_1'
// - Renamed variable 'E' to 'optionalFunctionCall'
// - Resolved require(698252) to 'optional-function-call'
// - Renamed variable 'h' to 'udPickerPanelConfig'
// - Resolved require(400544) to 'ud-picker-panel-config'
// - Renamed variable 'v' to 'platformDetect'
// - Resolved require(602082) to 'platform-detect'
// - Renamed variable 'T' to 'uiModalComponent'
// - Resolved require(173302) to 'ui-modal-component'
// - Renamed variable 'g' to 'udPickerPanelConstants_1'
// - Resolved require(167506) to 'ud-picker-panel-constants_1'
// - Updated imported property 'xE' to 'basicPanelClass' (module 887471)
// - Updated imported property 'EH' to 'PanelPosition' (module 887471)
// - Updated imported property 'hj' to 'pickerPanelClass' (module 887471)
// - Updated imported property 'Ge' to 'PickerContext' (module 887471)
// - Updated imported property 'G3' to 'panelDialogClass' (module 887471)
// - Updated imported property 'Rh' to 'withLocaleConfig' (module 945449)
// - Updated imported property 'ZT' to 'noopFunction' (module 177642)
// - Updated imported property 'Rr' to 'startSpan' (module 944519)
// - Updated imported property 'Z' to 'createDebounce' (module 213804)
// - Updated imported property 'Z' to 'ResizeObserver' (module 412454)
// - Updated imported property 'h' to 'IconButton' (module 259693)
// - Updated imported property 'Z' to 'CloseOutlinedIcon' (module 426699)
// - Updated imported property 'zx' to 'UnifiedButton' (module 488299)
// - Updated imported property 'Z' to 'callIfFunction' (module 698252)
// - Updated imported property 'Z' to 'eventEmitter' (module 740547)
// - Updated imported property 'IJ' to 'isLinux' (module 602082)
// - Updated imported property 'ED' to 'isWindows' (module 602082)
// - Updated imported property 'V5' to 'isMac' (module 602082)
// - Updated imported property 'PG' to 'selectedChangeEvent' (module 400544)
// - Updated imported property 'Vq' to 'ModalComponent' (module 173302)
// - Updated imported property 'lL' to 'PickerContext' (module 167506)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 335750
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var closeOutlinedIconComponent = require("close-outlined-icon-component") /*id: 426699*/;
  var iconButtonComponent = require("icon-button-component") /*id: 259693*/;
  var unifiedButtonComponent = require("unified-button-component") /*id: 488299*/;
  var localeContextHocWrappers = require("locale-context-hoc-wrappers") /*id: 945449*/;
  var udPickerConfig = require("ud-picker-config") /*id: 177642*/;
  var larkLoggerTracingUtils = require("lark-logger-tracing-utils") /*id: 944519*/;
  var udPickerPanelConfig_1 = require("ud-picker-panel-config_1") /*id: 887471*/;
  var optionalFunctionCall = require("optional-function-call") /*id: 698252*/;
  var C = localeContextHocWrappers.withLocaleConfig(e => {
    let {
      title: t,
      subtitle: n,
      headerSlot: o,
      hideHeader: a,
      contentSlot: d,
      contentWrapperClassName: C,
      contentWrapperStyle: h,
      footerSlot: v,
      primaryButton: R,
      hideFooter: T,
      isResponsiveSize: g,
      className: N,
      onActionClose: A = udPickerConfig.noopFunction,
      config: O
    } = e;
    let L = reactCoreLibraryReexport.useRef(larkLoggerTracingUtils.startSpan(udPickerPanelConfig_1.basicPanelClass));
    let b = reactCoreLibraryReexport.useRef(null);
    let [y, k] = reactCoreLibraryReexport.useState(udPickerPanelConfig_1.PanelPosition.None);
    let {
      onClick: P,
      text: S,
      isLoading: I,
      isDisabled: D
    } = R || {};
    let Z = debounceUtilWrapper.createDebounce(() => {
      if (b.current) {
        if (b.current.scrollHeight === b.current.clientHeight) {
          k(udPickerPanelConfig_1.PanelPosition.None);
          return;
        }
        if (b.current.scrollTop === 0) {
          k(udPickerPanelConfig_1.PanelPosition.Top);
          return;
        }
        if (Math.ceil(b.current.scrollTop) + b.current.clientHeight >= b.current.scrollHeight) {
          k(udPickerPanelConfig_1.PanelPosition.Bottom);
          return;
        }
        k(udPickerPanelConfig_1.PanelPosition.Midlle);
      }
    }, 100);
    reactCoreLibraryReexport.useEffect(() => {
      if (!b.current) {
        return;
      }
      let e = new resizeObserverPolyfill.ResizeObserver(Z);
      e.observe(b.current);
      return () => {
        e.disconnect();
      };
    }, [Z]);
    let x = reactCoreLibraryReexport.useCallback(async () => {
      if (P) {
        try {
          await P();
          A();
        } catch (e) {
          L.current.error(e, {
            attributes: {
              name: `${udPickerPanelConfig_1.basicPanelClass}.confirm.err`
            }
          });
          throw e;
        }
      }
    }, [P, A]);
    let U = i(udPickerPanelConfig_1.basicPanelClass, {
      [`${udPickerPanelConfig_1.basicPanelClass}--responsive`]: g
    }, N);
    let w = i(`${udPickerPanelConfig_1.basicPanelClass}__header`, {
      [`${udPickerPanelConfig_1.basicPanelClass}__header--with-bottom-divider`]: y === udPickerPanelConfig_1.PanelPosition.Bottom || y === udPickerPanelConfig_1.PanelPosition.Midlle
    });
    let M = i(`${udPickerPanelConfig_1.basicPanelClass}__top`, {
      [`${udPickerPanelConfig_1.basicPanelClass}__top--follow-with-subtitle`]: !!n
    });
    let H = i(`${udPickerPanelConfig_1.basicPanelClass}__body`, C);
    let B = i(`${udPickerPanelConfig_1.basicPanelClass}__footer`, {
      [`${udPickerPanelConfig_1.basicPanelClass}__footer--with-top-divider`]: y === udPickerPanelConfig_1.PanelPosition.Top || y === udPickerPanelConfig_1.PanelPosition.Midlle
    });
    return reactCoreLibraryReexport.createElement("div", {
      className: U
    }, !a && reactCoreLibraryReexport.createElement("div", {
      className: w
    }, reactCoreLibraryReexport.createElement("div", {
      className: M
    }, reactCoreLibraryReexport.createElement("div", {
      className: `${udPickerPanelConfig_1.basicPanelClass}__title`
    }, t), reactCoreLibraryReexport.createElement("div", {
      className: `${udPickerPanelConfig_1.basicPanelClass}__header-slot`
    }, o ?? reactCoreLibraryReexport.createElement(iconButtonComponent.IconButton, {
      className: `${udPickerPanelConfig_1.basicPanelClass}__close`,
      icon: reactCoreLibraryReexport.createElement(closeOutlinedIconComponent.CloseOutlinedIcon, null),
      size: "small",
      onClick: A
    }))), n && reactCoreLibraryReexport.createElement("div", {
      className: `${udPickerPanelConfig_1.basicPanelClass}__subtitle`
    }, n)), reactCoreLibraryReexport.createElement("div", {
      className: H,
      style: h,
      ref: b,
      onScroll: Z
    }, d), !T && reactCoreLibraryReexport.createElement("div", {
      className: B
    }, reactCoreLibraryReexport.createElement("div", {
      className: `${udPickerPanelConfig_1.basicPanelClass}__footer-slot`
    }, v), reactCoreLibraryReexport.createElement("div", {
      className: `${udPickerPanelConfig_1.basicPanelClass}__buttons`
    }, reactCoreLibraryReexport.createElement(unifiedButtonComponent.UnifiedButton, {
      className: `${udPickerPanelConfig_1.basicPanelClass}__secondary-button`,
      onClick: A
    }, optionalFunctionCall.callIfFunction(O.lang.PickerPanel.Lark_Universe_React_Picker_Cancel)), reactCoreLibraryReexport.createElement(unifiedButtonComponent.UnifiedButton, {
      type: "primary",
      onClick: x,
      disabled: D,
      loading: I,
      className: `${udPickerPanelConfig_1.basicPanelClass}__primary-button`
    }, S || optionalFunctionCall.callIfFunction(O.lang.PickerPanel.Lark_Universe_React_Picker_Confirm)))));
  });
  var udPickerPanelConfig = require("ud-picker-panel-config") /*id: 400544*/;
  var platformDetect = require("platform-detect") /*id: 602082*/;
  var R = localeContextHocWrappers.withLocaleConfig(e => {
    let {
      title: t,
      subtitle: n,
      headerSlot: o,
      hideHeader: c,
      leadingSlot: u,
      picker: s,
      trailingSlot: l,
      contentWrapperClassName: f,
      contentWrapperStyle: d,
      footerSlot: R,
      primaryButton: T,
      isResponsiveSize: g,
      className: N,
      onActionClose: A = udPickerConfig.noopFunction,
      config: O
    } = e;
    let L = reactCoreLibraryReexport.useRef(larkLoggerTracingUtils.startSpan(udPickerPanelConfig_1.pickerPanelClass));
    let [b, y] = reactCoreLibraryReexport.useState([]);
    let k = reactCoreLibraryReexport.useRef({
      eventBus: new eventEmitterWrapper_1.eventEmitter()
    });
    let {
      onClick: P,
      text: S,
      isLoading: I
    } = T;
    let D = !b.length;
    let Z = reactCoreLibraryReexport.useCallback(e => {
      y(e);
    }, []);
    let x = reactCoreLibraryReexport.useCallback(async () => {
      try {
        await P(b);
        A();
      } catch (e) {
        L.current.error(e, {
          attributes: {
            name: `${udPickerPanelConfig_1.pickerPanelClass}.confirm.err`
          }
        });
        throw e;
      }
    }, [A, P, b]);
    let U = reactCoreLibraryReexport.useCallback(async e => {
      if (D) {
        return;
      }
      let t = platformDetect.isLinux || platformDetect.isWindows ? "ctrlKey" : "metaKey";
      if (e.code === "Enter" && e[t]) {
        e.stopPropagation();
        await x();
      }
    }, [x, D]);
    reactCoreLibraryReexport.useEffect(() => {
      window.addEventListener("keydown", U);
      return () => {
        window.removeEventListener("keydown", U);
      };
    }, [U]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = k.current.eventBus;
      e.on(udPickerPanelConfig.selectedChangeEvent.selectedDataChange, Z);
      return () => {
        e.off(udPickerPanelConfig.selectedChangeEvent.selectedDataChange, Z);
      };
    }, [Z]);
    let w = {
      onClick: x,
      text: (() => {
        let e = S || optionalFunctionCall.callIfFunction(O.lang.PickerPanel.Lark_Universe_React_Picker_Confirm);
        let t = platformDetect.isMac ? optionalFunctionCall.callIfFunction(O.lang.PickerPanel.Lark_Universe_React_Picker_ConfirmKeyMac) : optionalFunctionCall.callIfFunction(O.lang.PickerPanel.Lark_Universe_React_Picker_ConfirmKeyWindows);
        return reactCoreLibraryReexport.createElement("div", {
          className: `${udPickerPanelConfig_1.pickerPanelClass}__primary-button-text`
        }, reactCoreLibraryReexport.createElement("div", {
          className: `${udPickerPanelConfig_1.pickerPanelClass}__primary-button-action-text`
        }, e), reactCoreLibraryReexport.createElement("div", {
          className: `${udPickerPanelConfig_1.pickerPanelClass}__primary-button-hot-key-text`
        }, t));
      })(),
      isLoading: I,
      isDisabled: D
    };
    let M = i(`${udPickerPanelConfig_1.pickerPanelClass}__content-slot-wrapper`, f);
    return reactCoreLibraryReexport.createElement(udPickerPanelConfig_1.PickerContext.Provider, {
      value: k.current
    }, reactCoreLibraryReexport.createElement(C, {
      title: t,
      subtitle: n,
      headerSlot: o,
      hideHeader: c,
      contentSlot: reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, u && reactCoreLibraryReexport.createElement("div", {
        className: `${udPickerPanelConfig_1.pickerPanelClass}__leading-slot`
      }, u), reactCoreLibraryReexport.createElement("div", {
        className: `${udPickerPanelConfig_1.pickerPanelClass}__picker`
      }, s), l && reactCoreLibraryReexport.createElement("div", {
        className: `${udPickerPanelConfig_1.pickerPanelClass}__trailing-slot`
      }, l)),
      contentWrapperClassName: M,
      contentWrapperStyle: d,
      footerSlot: R,
      primaryButton: w,
      isResponsiveSize: g,
      className: N,
      onActionClose: A
    }));
  });
  var uiModalComponent = require("ui-modal-component") /*id: 173302*/;
  var udPickerPanelConstants_1 = require("ud-picker-panel-constants_1") /*id: 167506*/;
  function N(e, t) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var o = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; o < r.length; o++) {
        if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
          n[r[o]] = e[r[o]];
        }
      }
    }
    return n;
  }
  var A = e => {
    let {
      visible: t,
      dialogClassName: n,
      onActionClose: o
    } = e;
    let a = N(e, ["visible", "dialogClassName", "onActionClose"]);
    let c = reactCoreLibraryReexport.useRef(null);
    return reactCoreLibraryReexport.createElement(uiModalComponent.ModalComponent, {
      visible: t,
      header: null,
      footer: null,
      destroyOnClose: true,
      className: i(udPickerPanelConfig_1.panelDialogClass, n),
      onClose: o,
      initialFocusRef: c,
      bodyStyle: {
        minHeight: 450
      },
      bodyHeightResponsiveMode: "stretch",
      maxHeight: 900,
      minWidth: 600,
      maxWidth: 840
    }, reactCoreLibraryReexport.createElement(udPickerPanelConstants_1.PickerContext.Provider, {
      value: c
    }, reactCoreLibraryReexport.createElement(R, Object.assign({
      onActionClose: o
    }, a))));
  };
  function O(e, t) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var o = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; o < r.length; o++) {
        if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
          n[r[o]] = e[r[o]];
        }
      }
    }
    return n;
  }
  var L = e => {
    let {
      visible: t,
      dialogClassName: n,
      onActionClose: o
    } = e;
    let a = O(e, ["visible", "dialogClassName", "onActionClose"]);
    let c = reactCoreLibraryReexport.useRef(null);
    return reactCoreLibraryReexport.createElement(uiModalComponent.ModalComponent, {
      visible: t,
      header: null,
      footer: null,
      destroyOnClose: true,
      className: i(udPickerPanelConfig_1.panelDialogClass, n),
      onClose: o,
      initialFocusRef: c,
      bodyStyle: {
        minHeight: 450
      },
      bodyHeightResponsiveMode: "stretch",
      maxHeight: 900,
      minWidth: 600,
      maxWidth: 840
    }, reactCoreLibraryReexport.createElement(udPickerPanelConstants_1.PickerContext.Provider, {
      value: c
    }, reactCoreLibraryReexport.createElement(C, Object.assign({
      onActionClose: o
    }, a))));
  };
  require.r(exports);
  require.d(exports, {
    PickerPanelDialog: function () {
      return A;
    },
    prefixForBasicPanel: function () {
      return udPickerPanelConfig_1.basicPanelClass;
    },
    BasicPanel: function () {
      return C;
    },
    BodyScrollState: function () {
      return udPickerPanelConfig_1.PanelPosition;
    },
    default: function () {
      return R;
    },
    BasicPanelDialog: function () {
      return L;
    },
    prefixForPickerPanel: function () {
      return udPickerPanelConfig_1.pickerPanelClass;
    },
    PickerPanelContext: function () {
      return udPickerPanelConfig_1.PickerContext;
    },
    prefixForPanelDialog: function () {
      return udPickerPanelConfig_1.panelDialogClass;
    }
  });
}