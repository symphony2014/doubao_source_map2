// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'Input'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 66784.0c351d11.js
         * chunkId: 66784
         * moduleId: 361273
         */
module.exports = function (module, exports, require) {
  var r;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var magicStringConstant = require("magic-string-constant") /*id: 787170*/;
  var udPickerPanelCssHash = require("ud-picker-panel-css-hash") /*id: 144895*/;
  var moduleIdConstant_1 = require("module-id-constant_1") /*id: 820850*/;
  var constantStringExport_3 = require("constant-string-export_3") /*id: 942742*/;
  var udPickerPanelConstant = require("ud-picker-panel-constant") /*id: 224175*/;
  var staticStringIdentifier = require("static-string-identifier") /*id: 176934*/;
  var udPickerPanelConstant_2 = require("ud-picker-panel-constant_2") /*id: 580197*/;
  var moduleConstantString = require("module-constant-string") /*id: 379211*/;
  var udPickerPanelIdentifier = require("ud-picker-panel-identifier") /*id: 67383*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var emptyFilledIconComponent = require("empty-filled-icon-component") /*id: 264973*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var textStyleConfig = require("text-style-config") /*id: 454094*/;
  var sizeConvertUtils = require("size-convert-utils") /*id: 293585*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var focusDomElementUtil = require("focus-dom-element-util") /*id: 59854*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var nativeInputComponent = require("native-input-component") /*id: 256053*/;
  var docxUiTagComponent = require("docx-ui-tag-component") /*id: 840665*/;
  function T(e) {
    var t = e.showCount;
    var n = e.count;
    var r = e.maxLength;
    var o = e.disabled;
    var i = e.tagSize;
    var a = uiConfigContextHooks.useClassName("input");
    if (t) {
      return reactCoreLibraryReexport.createElement(docxUiTagComponent.DocxTag, {
        size: i === undefined ? "extra-small" : i,
        className: a("__count"),
        color: o ? "neutral-option" : "neutral-solid",
        disabled: o,
        style: e.style
      }, reactCoreLibraryReexport.createElement("span", {
        className: conditionalClassnames.default(n && r && r < n && a("__count-exceed"), n && a("__count-current"))
      }, n), r && reactCoreLibraryReexport.createElement("span", null, "/", r));
    } else {
      return null;
    }
  }
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var useControlledStateHook_1 = require("use-controlled-state-hook_1") /*id: 837560*/;
  function k(e, t, n, r) {
    if (n) {
      var o = t;
      if (t.type === "click") {
        var i = e.cloneNode(true);
        o = Object.create(t, {
          target: {
            value: i
          },
          currentTarget: {
            value: i
          }
        });
        i.value = "";
        n(o);
      } else {
        o = Object.create(t, {
          target: {
            value: e
          },
          currentTarget: {
            value: e
          }
        });
        if (e.value !== r) {
          e.value = r;
        }
        n(o);
      }
    }
  }
  function I(e) {
    if (typeof e == "string") {
      return e;
    } else if (isNullishCheck.isNil(e)) {
      return "";
    } else {
      return String(e);
    }
  }
  function O(e) {
    var t;
    var n;
    var r;
    var o;
    var a;
    var c;
    var l;
    var s;
    var f;
    var d;
    var p = e.value;
    var m = e.onChange;
    var v = e.defaultValue;
    var h = e.inputRef;
    var g = e.slicer;
    var Z = e.counter;
    var w = e.truncateExcessWords;
    var y = e.showCount;
    var E = e.onCompositionStart;
    var b = e.onCompositionEnd;
    var C = e.maxLength;
    var L = e.focused;
    var S = reactCoreLibraryReexport.useRef(false);
    t = reactCoreLibraryReexport.useRef({
      beforeText: null,
      afterText: null
    });
    var _ = [function () {
      var e = h.current;
      if (e) {
        try {
          var n = e.selectionEnd;
          var r = e.selectionStart;
          if (L && n === r && r !== null) {
            t.current = {
              beforeText: e.value.slice(0, r),
              afterText: e.value.slice(r)
            };
          } else {
            t.current = {
              beforeText: null,
              afterText: null
            };
          }
        } catch (e) {}
      }
    }, function () {
      var e = h.current;
      if (e && t.current.beforeText !== null && L) {
        var n = e.value;
        var r = t.current;
        var o = r.beforeText;
        var i = r.afterText;
        var a = n.length;
        if (o && n.startsWith(o)) {
          a = o.length;
        } else if (i && n.endsWith(i)) {
          a = n.length - i.length;
        }
        e.setSelectionRange(a, a);
        t.current = {
          beforeText: null,
          afterText: null
        };
      }
    }];
    var R = iterableToArrayUtil_1_1.iterableToArray(_, 2);
    var A = R[0];
    var T = R[1];
    reactCoreLibraryReexport.useEffect(function () {
      T();
    }, [T]);
    r = (n = {
      slicer: g,
      showCount: y,
      truncateExcessWords: w,
      counter: Z,
      maxLength: C
    }).showCount;
    o = n.maxLength;
    a = n.slicer;
    c = n.counter;
    l = n.truncateExcessWords;
    s = (r === undefined || !r) && !c && !a;
    f = o !== undefined && (s || l);
    d = function (e) {
      if (c) {
        return c(e);
      } else if (s) {
        return e.length;
      } else {
        return arrayIterableSliceUtil.sliceArrayIterable(e).length;
      }
    };
    var z = {
      valueFormatter: function (e) {
        if (e) {
          if (!f || d(e) <= o) {
            return e;
          } else if (a) {
            return a(e, o);
          } else if (s) {
            return e.slice(0, o);
          } else {
            return arrayIterableSliceUtil.sliceArrayIterable(e).slice(0, o).join("");
          }
        } else {
          return "";
        }
      },
      nativeMaxLength: s ? o : undefined,
      counter: d,
      maxLength: o
    };
    var O = z.nativeMaxLength;
    var M = z.counter;
    var P = z.maxLength;
    var V = z.valueFormatter;
    var W = reactCoreLibraryReexport.useCallback(function (e) {
      if (S.current) {
        return e;
      } else {
        return V(e);
      }
    }, [V]);
    var j = "value" in e;
    var D = useControlledStateHook_1.useControlledState(W(I(v)), W(I(p)), {
      isControlledOverride: j
    });
    var F = iterableToArrayUtil_1_1.iterableToArray(D, 2);
    var B = F[0];
    var q = F[1];
    var J = reactCoreLibraryReexport.useCallback(function (e) {
      if (E != null) {
        E(e);
      }
      S.current = true;
    }, [E]);
    var K = reactCoreLibraryReexport.useCallback(function (e) {
      S.current = false;
      var t = W(e.currentTarget.value);
      if (!j) {
        q(t);
      }
      if (B !== t) {
        A();
        k(e.currentTarget, e, m, t);
      }
      if (b != null) {
        b(e);
      }
    }, [m, b, A, q, B, W, j]);
    return {
      value: B,
      setValue: q,
      internalOnChange: function (e) {
        var t = W(e.target.value);
        if (!j) {
          q(t);
        }
        A();
        k(e.currentTarget, e, m, t);
      },
      nativeMaxLength: O,
      count: M(B),
      maxLength: P,
      valueFormatter: W,
      onCompositionStart: J,
      onCompositionEnd: K
    };
  }
  var reactCssTransitionFactory = require("react-css-transition-factory") /*id: 697870*/;
  var cubicBezierEase = require("cubic-bezier-ease") /*id: 855968*/;
  var V = reactCssTransitionFactory.createCssTransition({
    name: "fade",
    styles: {
      appear: "opacity: 0;",
      enter: "opacity: 0;",
      exitDone: "opacity: 0;",
      appearActive: "opacity: 1;",
      enterActive: "opacity: 1;",
      appearDone: "opacity: 1;",
      enterDone: "opacity: 1;",
      exit: "opacity: 1;",
      exitActive: "opacity: 0;"
    },
    transitions: {
      appearActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEase.cubicBezierEase}`;
      },
      enterActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEase.cubicBezierEase}`;
      },
      exitActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEase.cubicBezierEase}`;
      }
    }
  });
  var useMouseHover = require("use-mouse-hover") /*id: 665747*/;
  var domElementUtils_1 = require("dom-element-utils_1") /*id: 846713*/;
  var textOverflowPopperSidecarHook_1 = require("text-overflow-popper-sidecar-hook_1") /*id: 479931*/;
  var sxEnhancedReactCreateElement_1 = require("sx-enhanced-react-create-element_1") /*id: 606167*/;
  require("empty-module-export_4") /*id: 530821*/;
  var B = ["style", "prefixCls", "className", "readOnly", "placeholder", "disabled", "size", "prefix", "suffix", "addonBefore", "addonAfter", "defaultValue", "value", "allowClear", "type", "error", "onChange", "onKeyDown", "onPressEnter", "onClear", "counter", "slicer", "maxLength", "showCount", "truncateExcessWords", "onCompositionStart", "onCompositionEnd", "sx"];
  var q = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var r;
    var A;
    var z = e.style;
    var N = e.prefixCls;
    var I = e.className;
    var M = e.readOnly;
    var P = e.placeholder;
    var q = e.disabled;
    var J = e.size;
    var K = e.prefix;
    var H = e.suffix;
    var U = e.addonBefore;
    var G = e.addonAfter;
    var Y = e.defaultValue;
    var $ = e.value;
    var X = e.allowClear;
    var Q = e.type;
    var ee = e.error;
    var et = e.onChange;
    var en = e.onKeyDown;
    var er = e.onPressEnter;
    var eo = e.onClear;
    var ei = e.counter;
    var ea = e.slicer;
    var ec = e.maxLength;
    var eu = e.showCount;
    var el = e.truncateExcessWords;
    var es = e.onCompositionStart;
    var ef = e.onCompositionEnd;
    var ed = e.sx;
    var ep = objectOmitHelper_1.omitWithSymbols(e, B);
    var em = uiConfigContextHooks.useClassName("input");
    var ev = uiConfigContextHooks.useComponentSize();
    var eh = uiConfigContextHooks.useSizeContext();
    var eg = reactCoreLibraryReexport.useState(false);
    var eZ = iterableToArrayUtil_1_1.iterableToArray(eg, 2);
    var ex = eZ[0];
    var ew = eZ[1];
    var ey = reactCoreLibraryReexport.useRef(null);
    var eE = reactCoreLibraryReexport.useRef();
    var eb = useMouseHover.useMouseHover();
    var eC = eb.isMouseOver;
    var eL = eb.handleMouseEnter;
    var eS = eb.handleMouseLeave;
    var e_ = sizeConvertUtils.getSizeCode(J || eh || ev);
    var eR = e_ === "lg" ? "medium" : "small";
    var eA = O(objectPropertyAssign.assignObject({
      maxLength: ec,
      showCount: eu,
      truncateExcessWords: el,
      counter: ei,
      slicer: ea,
      defaultValue: Y === undefined ? "" : Y,
      inputRef: ey,
      onChange: et,
      onCompositionStart: es,
      onCompositionEnd: ef,
      focused: ex
    }, "value" in e ? {
      value: $
    } : {}));
    var eT = eA.nativeMaxLength;
    var ez = eA.value;
    var eN = eA.setValue;
    var ek = eA.count;
    var eI = eA.onCompositionEnd;
    var eO = eA.onCompositionStart;
    var eM = eA.internalOnChange;
    var eP = reactCoreLibraryReexport.useRef(null);
    var eV = reactCoreLibraryReexport.useCallback(function () {
      if (eE.current) {
        clearTimeout(eE.current);
      }
    }, []);
    var eW = reactCoreLibraryReexport.useCallback(function () {
      if (eE.current) {
        clearTimeout(eE.current);
      }
      eE.current = setTimeout(function () {
        if (ey.current && ey.current.getAttribute("type") === "password" && ey.current.getAttribute("value")) {
          ey.current.removeAttribute("value");
        }
      }, 13);
    }, []);
    reactCoreLibraryReexport.useEffect(function () {
      eV();
      eW();
      return function () {
        return eV();
      };
    }, [ez, eW, eV, Q]);
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return ey.current;
    });
    var ej = reactCoreLibraryReexport.useCallback(function (e) {
      eV();
      eW();
      ew(e);
    }, [eW, eV]);
    function eD(t) {
      var n;
      if (!("value" in e)) {
        eN("");
      }
      if (ey.current) {
        k(ey.current, t, et, "");
      }
      if ((n = ey.current) !== null && n !== undefined) {
        n.focus();
      }
      if (domTypeUtils_1.isFunction(eo)) {
        eo();
      }
    }
    var eF = textOverflowPopperSidecarHook_1.useTextOverflowPopperSidecar();
    var eB = !ez && !!P;
    var eq = reactCoreLibraryReexport.useState(false);
    var eJ = iterableToArrayUtil_1_1.iterableToArray(eq, 2);
    var eK = eJ[0];
    var eH = eJ[1];
    r = N || em();
    A = conditionalClassnames.default((n = {}, objectPropertySetter.setObjectProperty(n, r, true), objectPropertySetter.setObjectProperty(n, `${r}--error`, ee), objectPropertySetter.setObjectProperty(n, `${r}-addon`, G || U), objectPropertySetter.setObjectProperty(n, `${r}--focused`, ex), objectPropertySetter.setObjectProperty(n, `${r}--disabled`, q), objectPropertySetter.setObjectProperty(n, `${r}--size-${e_}`, e_), n), I, composeClassNamesUtil.composeClassNames.apply(undefined, [{
      props: {
        width: udPickerPanelIdentifier.panelIdentifier
      }
    }].concat(arrayIterableSliceUtil.sliceArrayIterable(ed ?? []))));
    return sxEnhancedReactCreateElement_1.createElementWithSx("div", {
      style: z,
      className: A
    }, U ? sxEnhancedReactCreateElement_1.createElementWithSx("span", {
      className: `${r}__addon-before`
    }, U) : null, sxEnhancedReactCreateElement_1.createElementWithSx("label", {
      className: `${r}-input-wrap`,
      onMouseEnter: eL,
      onMouseLeave: eS,
      onMouseDown: function (e) {
        if (e.target !== ey.current && domElementUtils_1.isEventTargetWithin(e.currentTarget, e.nativeEvent)) {
          e.preventDefault();
          focusDomElementUtil.focusElement(ey, {
            selectTextIfInput: false
          });
        }
      },
      onClick: function (e) {
        if (domElementUtils_1.isEventTargetWithin(e.currentTarget, e.nativeEvent)) {
          e.preventDefault();
        }
      }
    }, K ? sxEnhancedReactCreateElement_1.createElementWithSx("span", {
      className: `${r}__prefix`
    }, K) : null, sxEnhancedReactCreateElement_1.createElementWithSx(eF, {
      title: sxEnhancedReactCreateElement_1.createElementWithSx(reactCoreLibraryReexport.Fragment, null, P),
      disabled: q,
      checkOverflow: function () {
        return !!eP.current && domElementUtils_1.hasScrollbar(eP.current);
      },
      visible: eK && eB,
      onVisibleChange: function (e) {
        eH(e);
      }
    }, sxEnhancedReactCreateElement_1.createElementWithSx("div", {
      className: conditionalClassnames.default(`${r}-input__placeholder__wrapper`, composeClassNamesUtil.composeClassNames({
        props: {
          position: udPickerPanelConstant.pickerPanelId,
          flexGrow: "u1j001gk",
          minWidth: staticStringIdentifier.staticStringId,
          display: udPickerPanelConstant_2.pickerPanelId,
          alignItems: moduleConstantString.constantString
        }
      })),
      onMouseLeave: function () {
        eH(false);
      }
    }, sxEnhancedReactCreateElement_1.createElementWithSx("div", {
      ref: eP,
      className: conditionalClassnames.default(`${r}-input__placeholder`, composeClassNamesUtil.composeClassNames(textStyleConfig.textStyleConfig, {
        props: {
          position: magicStringConstant.magicString,
          left: "u80fcee",
          top: udPickerPanelCssHash.cssHash,
          bottom: moduleIdConstant_1.moduleId,
          maxWidth: constantStringExport_3.constantString,
          visibility: "u18iufkw"
        }
      }))
    }, P), sxEnhancedReactCreateElement_1.createElementWithSx(nativeInputComponent.NativeInput, objectAssignUtil.objectAssign({}, ep, {
      type: Q,
      ref: ey,
      readOnly: M,
      disabled: q,
      value: ez,
      onChange: eM,
      onKeyDown: function (e) {
        if (e.keyCode === 13 && er) {
          er(e);
        }
        if (en) {
          en(e);
        }
      },
      onFocusChange: ej,
      maxLength: eT,
      onCompositionEnd: eI,
      onCompositionStart: eO,
      placeholder: P,
      sx: [{
        props: {
          width: udPickerPanelIdentifier.panelIdentifier,
          minWidth: "u78gxlw"
        }
      }]
    })))), function (e) {
      if (X && !q) {
        var t;
        var n = eC && !!ez;
        var r = conditionalClassnames.default((t = {}, objectPropertySetter.setObjectProperty(t, `${e}__clear-icon`, true), objectPropertySetter.setObjectProperty(t, `${e}__clear-icon-show`, n), t));
        return sxEnhancedReactCreateElement_1.createElementWithSx(V, {
          in: n,
          timeout: 400
        }, sxEnhancedReactCreateElement_1.createElementWithSx("span", {
          className: r,
          onClick: eD
        }, sxEnhancedReactCreateElement_1.createElementWithSx(emptyFilledIconComponent.EmptyFilledIcon, null)));
      }
      return null;
    }(r), H || eu ? sxEnhancedReactCreateElement_1.createElementWithSx("span", {
      className: `${r}__suffix`
    }, H, sxEnhancedReactCreateElement_1.createElementWithSx(T, {
      style: {
        marginLeft: !!H * 8
      },
      showCount: eu,
      count: ek,
      maxLength: ec,
      tagSize: eR
    })) : null), G ? sxEnhancedReactCreateElement_1.createElementWithSx("span", {
      className: `${r}__addon-after`
    }, G) : null);
  });
  var sizeContextProvider = require("size-context-provider") /*id: 415555*/;
  var searchOutlinedIconComponent_2 = require("search-outlined-icon-component_2") /*id: 812230*/;
  var H = ["shape", "size", "placeholder", "className"];
  var U = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var r = uiConfigContextHooks.useLocale().global.search;
    var i = e.shape;
    var c = i === undefined ? "round" : i;
    var u = e.size;
    var s = e.placeholder;
    var f = e.className;
    var d = objectOmitHelper_1.omitWithSymbols(e, H);
    var p = uiConfigContextHooks.useClassName("search");
    var m = uiConfigContextHooks.useComponentSize();
    var v = uiConfigContextHooks.useSizeContext();
    var h = u || v || m;
    var g = sizeConvertUtils.getSizeCode(h);
    var Z = conditionalClassnames.default(p(), (n = {}, objectPropertySetter.setObjectProperty(n, p(`--size-${g}`), g), objectPropertySetter.setObjectProperty(n, p(`--shape-${c}`), c), n), f);
    return reactCoreLibraryReexport.createElement(q, objectAssignUtil.objectAssign({
      ref: t,
      className: Z,
      size: h,
      placeholder: s === undefined ? r : s,
      prefix: reactCoreLibraryReexport.createElement(searchOutlinedIconComponent_2.SearchOutlinedIcon, null)
    }, d));
  });
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var typographyBodyStyleConfig = require("typography-body-style-config") /*id: 607187*/;
  var useResizeObserverHook_2 = require("use-resize-observer-hook_2") /*id: 824097*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var Q = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];
  var ee = {};
  var keyboardKeyCodes_1 = require("keyboard-key-codes_1") /*id: 768343*/;
  var en = ["allowClear", "autoSize", "showCount", "maxLength", "value", "defaultValue", "style", "error", "className", "onKeyDown", "onPressEnter", "onChange", "onClear", "suffix", "truncateExcessWords", "counter", "slicer", "onCompositionEnd", "onCompositionStart", "autoFocus", "resize"];
  var er = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var i = e.allowClear;
    var s = e.autoSize;
    var f = e.showCount;
    var d = e.maxLength;
    var p = e.value;
    var m = e.defaultValue;
    var v = e.style;
    var h = e.error;
    var g = e.className;
    var Z = e.onKeyDown;
    var b = e.onPressEnter;
    var C = e.onChange;
    var S = e.onClear;
    var A = e.suffix;
    var z = e.truncateExcessWords;
    var N = e.counter;
    var k = e.slicer;
    var I = e.onCompositionEnd;
    var M = e.onCompositionStart;
    var P = e.autoFocus;
    var V = e.resize;
    var W = objectOmitHelper_1.omitWithSymbols(e, en);
    var j = uiConfigContextHooks.usePrefixCls();
    var D = uiConfigContextHooks.useClassName("textarea");
    var F = reactCoreLibraryReexport.useState(false);
    var B = iterableToArrayUtil_1_1.iterableToArray(F, 2);
    var q = B[0];
    var J = B[1];
    var K = useResizeObserverHook_2.useResizeObserver(function (e) {
      if (e.target.style.height) {
        J(true);
      }
    }, {
      disabled: !!s
    });
    var H = reactCoreLibraryReexport.useState({});
    var U = iterableToArrayUtil_1_1.iterableToArray(H, 2);
    var er = U[0];
    var eo = U[1];
    var ei = reactCoreLibraryReexport.useState(false);
    var ea = iterableToArrayUtil_1_1.iterableToArray(ei, 2);
    var ec = ea[0];
    var eu = ea[1];
    var el = O(objectPropertyAssign.assignObject({
      maxLength: d,
      showCount: f,
      truncateExcessWords: z !== undefined && z,
      counter: N,
      slicer: k,
      defaultValue: m,
      inputRef: K,
      onChange: C,
      onCompositionStart: M,
      onCompositionEnd: I,
      focused: ec
    }, "value" in e ? {
      value: p
    } : {}));
    var es = el.nativeMaxLength;
    var ef = el.value;
    var ed = el.setValue;
    var ep = el.count;
    var em = el.onCompositionEnd;
    var ev = el.onCompositionStart;
    var eh = el.internalOnChange;
    var eg = el.maxLength;
    nativeInputComponent.useInputFocus({
      inputRef: K,
      onFocusChange: function (e) {
        return eu(e);
      },
      autoFocus: !!P
    });
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return K.current;
    });
    var eZ = reactCoreLibraryReexport.useCallback(function () {
      if (s && K.current) {
        var e = {
          minRows: undefined,
          maxRows: undefined
        };
        if (typeofHelper.getType(s) === "object") {
          e.minRows = s.minRows;
          e.maxRows = s.maxRows;
        }
        var t = function (e) {
          var t;
          var n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
          var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          if (!r) {
            (r = document.createElement("textarea")).setAttribute("tab-index", "-1");
            r.setAttribute("aria-hidden", "true");
            document.body.appendChild(r);
          }
          if (e.getAttribute("wrap")) {
            r.setAttribute("wrap", e.getAttribute("wrap"));
          } else {
            r.removeAttribute("wrap");
          }
          var a = function (e, t = false) {
            var n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
            if (t && ee[n]) {
              return ee[n];
            }
            var r = window.getComputedStyle(e);
            var o = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing");
            var i = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top"));
            var a = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width"));
            var c = {
              sizingStyle: Q.map(function (e) {
                return `${e}:${r.getPropertyValue(e)}`;
              }).join(";"),
              paddingSize: i,
              borderSize: a,
              boxSizing: o
            };
            if (t && n) {
              ee[n] = c;
            }
            return c;
          }(e, n);
          var c = a.paddingSize;
          var u = a.borderSize;
          var l = a.boxSizing;
          var s = a.sizingStyle;
          r.setAttribute("style", `${s};
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`);
          r.value = e.value || e.placeholder || "";
          var f = Number.MIN_SAFE_INTEGER;
          var d = Number.MAX_SAFE_INTEGER;
          var p = r.scrollHeight;
          if (l === "border-box") {
            p += u;
          } else if (l === "content-box") {
            p -= c;
          }
          if (o !== null || i !== null) {
            r.value = " ";
            var m = r.scrollHeight - c;
            if (o !== null) {
              f = m * o;
              if (l === "border-box") {
                f = f + c + u;
              }
              p = Math.max(f, p);
            }
            if (i !== null) {
              d = m * i;
              if (l === "border-box") {
                d = d + c + u;
              }
              t = p > d ? "" : "hidden";
              p = Math.min(d, p);
            }
          }
          return {
            height: p,
            minHeight: f,
            maxHeight: d,
            overflowY: t
          };
        }(K.current, false, e.minRows, e.maxRows);
        if (t) {
          eo(t);
        }
      } else {
        eo({});
      }
    }, [s, K]);
    var ex = useResizeObserverHook_2.useResizeObserver(eZ);
    reactRefEffectUtils.useLayoutEffect(eZ, [eZ, ef]);
    var ew = i && !e.disabled && ef;
    var ey = h || domTypeUtils_1.isDefined(eg) && ep > eg;
    var eE = conditionalClassnames.default((n = {}, objectPropertySetter.setObjectProperty(n, D(), true), objectPropertySetter.setObjectProperty(n, D("--error"), ey), objectPropertySetter.setObjectProperty(n, D("--show-count"), f), objectPropertySetter.setObjectProperty(n, D("--show-clear"), ew), objectPropertySetter.setObjectProperty(n, D("--disabled"), e.disabled), n), g);
    return reactCoreLibraryReexport.createElement("div", {
      className: eE,
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, v), q ? {
        height: "auto"
      } : {}),
      ref: ex
    }, ew ? reactCoreLibraryReexport.createElement("span", {
      className: D("__clear-icon"),
      onClick: function (t) {
        var n;
        if (!("value" in e)) {
          ed("");
        }
        if (domTypeUtils_1.isFunction(C) && K.current) {
          var r = Object.create(t);
          r.target = K.current;
          r.currentTarget = K.current;
          var o = K.current.value;
          K.current.value = "";
          C(r);
          K.current.value = o;
        }
        if ((n = K.current) !== null && n !== undefined) {
          n.focus();
        }
        if (domTypeUtils_1.isFunction(S)) {
          S();
        }
      }
    }, reactCoreLibraryReexport.createElement(emptyFilledIconComponent.EmptyFilledIcon, null)) : null, reactCoreLibraryReexport.createElement("textarea", objectAssignUtil.objectAssign({}, W, {
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, er), {}, {
        resize: V
      }),
      ref: K,
      className: conditionalClassnames.default(`${j}-scrollbar`, composeClassNamesUtil.composeClassNames(typographyBodyStyleConfig.typographyBodyStyle)),
      onChange: eh,
      onKeyDown: function (e) {
        if (e.keyCode === keyboardKeyCodes_1.keyCodes.ENTER && domTypeUtils_1.isFunction(b)) {
          b(e);
        }
        if (domTypeUtils_1.isFunction(Z)) {
          Z(e);
        }
      },
      onCompositionEnd: em,
      onCompositionStart: ev,
      value: ef,
      maxLength: es
    })), reactCoreLibraryReexport.createElement("span", {
      className: D("-suffix")
    }, A && reactCoreLibraryReexport.createElement("span", {
      className: D("-suffix-slot")
    }, A), reactCoreLibraryReexport.createElement(T, {
      showCount: !!f,
      count: ep,
      disabled: e.disabled,
      maxLength: d
    })));
  });
  var visibleOutlinedIconComponent = require("visible-outlined-icon-component") /*id: 623102*/;
  var visibleLockOutlinedIcon_1 = require("visible-lock-outlined-icon_1") /*id: 968464*/;
  var objectOmitUtil = require("object-omit-util") /*id: 379788*/;
  var unifiedButtonComponent = require("unified-button-component") /*id: 488299*/;
  var eu = ["action", "size", "visibilityToggle", "iconRender"];
  var el = {
    click: "onClick",
    hover: "onMouseOver"
  };
  var es = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var r;
    var i;
    var s;
    var f = e.action;
    var d = e.size;
    var p = e.visibilityToggle;
    var m = e.iconRender;
    var v = m === undefined ? function (e) {
      if (e) {
        return reactCoreLibraryReexport.createElement(unifiedButtonComponent.UnifiedButton, {
          type: "icon",
          size: "small",
          icon: reactCoreLibraryReexport.createElement(visibleOutlinedIconComponent.VisibleOutlinedIcon, null)
        });
      } else {
        return reactCoreLibraryReexport.createElement(unifiedButtonComponent.UnifiedButton, {
          type: "icon",
          size: "small",
          icon: reactCoreLibraryReexport.createElement(visibleLockOutlinedIcon_1.VisibleLockOutlinedIcon, null)
        });
      }
    } : m;
    var h = objectOmitHelper_1.omitWithSymbols(e, eu);
    var g = reactCoreLibraryReexport.useState(false);
    var Z = iterableToArrayUtil_1_1.iterableToArray(g, 2);
    var w = Z[0];
    var y = Z[1];
    var E = uiConfigContextHooks.useClassName("input-password")();
    function b(e) {
      return e.preventDefault();
    }
    var C = (p === undefined || p) && (r = el[f === undefined ? "click" : f], i = v(w), n = {}, objectPropertySetter.setObjectProperty(n, r, function () {
      if (!e.disabled) {
        y(!w);
      }
    }), objectPropertySetter.setObjectProperty(n, "key", "passwordIcon"), objectPropertySetter.setObjectProperty(n, "onMouseDown", function (e) {
      return b(e);
    }), objectPropertySetter.setObjectProperty(n, "onMouseUp", function (e) {
      return b(e);
    }), s = n, reactCoreLibraryReexport.cloneElement(reactCoreLibraryReexport.isValidElement(i) ? i : reactCoreLibraryReexport.createElement("span", null, i), s));
    var L = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, objectOmitUtil.omitObjectKeys(h, ["suffix"])), {}, {
      type: w ? "text" : "password",
      prefixCls: E,
      suffix: C
    });
    return reactCoreLibraryReexport.createElement(q, objectAssignUtil.objectAssign({
      ref: t
    }, L, {
      size: d
    }));
  });
  q.Group = function (e) {
    var t;
    var n = e.style;
    var r = e.className;
    var o = e.size;
    var i = o === undefined ? "medium" : o;
    var c = e.compact;
    var u = e.children;
    var l = e.onMouseEnter;
    var s = e.onMouseLeave;
    var f = e.onFocus;
    var d = e.onBlur;
    var p = uiConfigContextHooks.useClassName("input-group");
    var m = sizeConvertUtils.getSizeCode(i, "medium");
    var v = conditionalClassnames.default(p(), (t = {}, objectPropertySetter.setObjectProperty(t, p(`--size-${m}`), m), objectPropertySetter.setObjectProperty(t, p("--compact"), c), t), r);
    return reactCoreLibraryReexport.createElement(sizeContextProvider.SizeProvider, {
      size: i
    }, reactCoreLibraryReexport.createElement("span", {
      className: v,
      style: n,
      onMouseEnter: l,
      onMouseLeave: s,
      onFocus: f,
      onBlur: d
    }, u));
  };
  q.TextArea = er;
  q.Password = es;
  q.Search = U;
  var ef = q;
  require.d(exports, {
    Input: function () {
      return ef;
    }
  });
}