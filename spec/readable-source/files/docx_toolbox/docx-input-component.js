// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'InputComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 173351
         */
module.exports = function (module, exports, require) {
  var o;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var constantIdentifier_1 = require("constant-identifier_1") /*id: 457601*/;
  var docxToolboxConstant_5 = require("docx-toolbox-constant_5") /*id: 777369*/;
  var constantIdentifierModule = require("constant-identifier-module") /*id: 712724*/;
  var uniqueIdConstant_1 = require("unique-id-constant_1") /*id: 676402*/;
  var docxToolboxId_2 = require("docx-toolbox-id_2") /*id: 842356*/;
  var docxToolboxModule = require("docx-toolbox-module") /*id: 228920*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var emptyFilledIconComponent = require("empty-filled-icon-component") /*id: 264973*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var docxTextStyleConfig = require("docx-text-style-config") /*id: 495569*/;
  var sizeAbbrevUtils = require("size-abbrev-utils") /*id: 464464*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var focusDomElementWithOptions = require("focus-dom-element-with-options") /*id: 110652*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var mergeRefsUtil = require("merge-refs-util") /*id: 590380*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var sxEnhancedReactCreateElement = require("sx-enhanced-react-create-element") /*id: 636291*/;
  var M = ["className", "onFocusChange", "autoFocus"];
  function R(e) {
    var n = e.inputRef;
    var r = e.onFocusChange;
    var o = e.autoFocus;
    reactCoreLibraryReexport.useEffect(function () {
      var e = n.current;
      if (e) {
        function o(e) {
          if (r != null) {
            r(false, e);
          }
        }
        function i(e) {
          if (r != null) {
            r(true, e);
          }
        }
        e.addEventListener("focus", i);
        e.addEventListener("blur", o);
        return function () {
          e.removeEventListener("focus", i);
          e.removeEventListener("blur", o);
        };
      }
    }, [n, r]);
    reactRefEffectUtils.useEffectOnce(function () {
      if (o) {
        var e;
        if ((e = n.current) !== null && e !== undefined) {
          e.focus();
        }
      }
    });
  }
  var O = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var r = e.className;
    var o = e.onFocusChange;
    var l = e.autoFocus;
    var a = objectOmitHelper_1.omitWithSymbols(e, M);
    var c = conditionalClassnames.default(r, reactContextUtilsHooks.useComponentClass("native-input")());
    var u = reactCoreLibraryReexport.useRef(null);
    var d = reactCoreLibraryReexport.useMemo(function () {
      return mergeRefsUtil.mergeRefs(n, u);
    }, [n]);
    R({
      inputRef: u,
      onFocusChange: o,
      autoFocus: !!l
    });
    return sxEnhancedReactCreateElement.createElementWithSX("input", objectAssignUtil.objectAssign({
      ref: d,
      className: c
    }, a));
  });
  var tagComponent = require("tag-component") /*id: 332146*/;
  function Z(e) {
    var n = e.showCount;
    var r = e.count;
    var o = e.maxLength;
    var i = e.disabled;
    var l = e.tagSize;
    var a = reactContextUtilsHooks.useComponentClass("input");
    if (n) {
      return reactCoreLibraryReexport.createElement(tagComponent.TagComponent, {
        size: l === undefined ? "extra-small" : l,
        className: a("__count"),
        color: i ? "neutral-option" : "neutral-solid",
        disabled: i,
        style: e.style
      }, reactCoreLibraryReexport.createElement("span", {
        className: conditionalClassnames.default(r && o && o < r && a("__count-exceed"), r && a("__count-current"))
      }, r), o && reactCoreLibraryReexport.createElement("span", null, "/", o));
    } else {
      return null;
    }
  }
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var useControlledState = require("use-controlled-state") /*id: 80507*/;
  function N(e, n, r, o) {
    if (r) {
      var i = n;
      if (n.type === "click") {
        var l = e.cloneNode(true);
        i = Object.create(n, {
          target: {
            value: l
          },
          currentTarget: {
            value: l
          }
        });
        l.value = "";
        r(i);
      } else {
        i = Object.create(n, {
          target: {
            value: e
          },
          currentTarget: {
            value: e
          }
        });
        if (e.value !== o) {
          e.value = o;
        }
        r(i);
      }
    }
  }
  function P(e) {
    if (typeof e == "string") {
      return e;
    } else if (isNullishCheck.isNil(e)) {
      return "";
    } else {
      return String(e);
    }
  }
  function D(e) {
    var n;
    var r;
    var o;
    var i;
    var a;
    var c;
    var s;
    var d;
    var h;
    var f;
    var p = e.value;
    var g = e.onChange;
    var m = e.defaultValue;
    var b = e.inputRef;
    var y = e.slicer;
    var _ = e.counter;
    var E = e.truncateExcessWords;
    var C = e.showCount;
    var k = e.onCompositionStart;
    var w = e.onCompositionEnd;
    var I = e.maxLength;
    var S = e.focused;
    var T = reactCoreLibraryReexport.useRef(false);
    n = reactCoreLibraryReexport.useRef({
      beforeText: null,
      afterText: null
    });
    var B = [function () {
      var e = b.current;
      if (e) {
        try {
          var r = e.selectionEnd;
          var o = e.selectionStart;
          if (S && r === o && o !== null) {
            n.current = {
              beforeText: e.value.slice(0, o),
              afterText: e.value.slice(o)
            };
          } else {
            n.current = {
              beforeText: null,
              afterText: null
            };
          }
        } catch (e) {}
      }
    }, function () {
      var e = b.current;
      if (e && n.current.beforeText !== null && S) {
        var r = e.value;
        var o = n.current;
        var i = o.beforeText;
        var l = o.afterText;
        var a = r.length;
        if (i && r.startsWith(i)) {
          a = i.length;
        } else if (l && r.endsWith(l)) {
          a = r.length - l.length;
        }
        e.setSelectionRange(a, a);
        n.current = {
          beforeText: null,
          afterText: null
        };
      }
    }];
    var M = iterableToArrayUtil_1_1.iterableToArray(B, 2);
    var R = M[0];
    var O = M[1];
    reactCoreLibraryReexport.useEffect(function () {
      O();
    }, [O]);
    o = (r = {
      slicer: y,
      showCount: C,
      truncateExcessWords: E,
      counter: _,
      maxLength: I
    }).showCount;
    i = r.maxLength;
    a = r.slicer;
    c = r.counter;
    s = r.truncateExcessWords;
    d = (o === undefined || !o) && !c && !a;
    h = i !== undefined && (d || s);
    f = function (e) {
      if (c) {
        return c(e);
      } else if (d) {
        return e.length;
      } else {
        return arrayIterableSliceUtil.sliceArrayIterable(e).length;
      }
    };
    var A = {
      valueFormatter: function (e) {
        if (e) {
          if (!h || f(e) <= i) {
            return e;
          } else if (a) {
            return a(e, i);
          } else if (d) {
            return e.slice(0, i);
          } else {
            return arrayIterableSliceUtil.sliceArrayIterable(e).slice(0, i).join("");
          }
        } else {
          return "";
        }
      },
      nativeMaxLength: d ? i : undefined,
      counter: f,
      maxLength: i
    };
    var Z = A.nativeMaxLength;
    var L = A.counter;
    var D = A.maxLength;
    var H = A.valueFormatter;
    var K = reactCoreLibraryReexport.useCallback(function (e) {
      if (T.current) {
        return e;
      } else {
        return H(e);
      }
    }, [H]);
    var U = "value" in e;
    var j = useControlledState.useControlledState(K(P(m)), K(P(p)), {
      isControlledOverride: U
    });
    var F = iterableToArrayUtil_1_1.iterableToArray(j, 2);
    var z = F[0];
    var V = F[1];
    var G = reactCoreLibraryReexport.useCallback(function (e) {
      if (k != null) {
        k(e);
      }
      T.current = true;
    }, [k]);
    var W = reactCoreLibraryReexport.useCallback(function (e) {
      T.current = false;
      var n = K(e.currentTarget.value);
      if (!U) {
        V(n);
      }
      if (z !== n) {
        R();
        N(e.currentTarget, e, g, n);
      }
      if (w != null) {
        w(e);
      }
    }, [g, w, R, V, z, K, U]);
    return {
      value: z,
      setValue: V,
      internalOnChange: function (e) {
        var n = K(e.target.value);
        if (!U) {
          V(n);
        }
        R();
        N(e.currentTarget, e, g, n);
      },
      nativeMaxLength: Z,
      count: L(z),
      maxLength: D,
      valueFormatter: K,
      onCompositionStart: G,
      onCompositionEnd: W
    };
  }
  var fadeCssTransition = require("fade-css-transition") /*id: 593415*/;
  var domElementUtils = require("dom-element-utils") /*id: 431931*/;
  var textOverflowPopperSidecarHook = require("text-overflow-popper-sidecar-hook") /*id: 438136*/;
  require("module-no-op") /*id: 116324*/;
  var j = ["style", "prefixCls", "className", "readOnly", "placeholder", "disabled", "size", "prefix", "suffix", "addonBefore", "addonAfter", "defaultValue", "value", "allowClear", "type", "error", "onChange", "onKeyDown", "onPressEnter", "onClear", "counter", "slicer", "maxLength", "showCount", "truncateExcessWords", "onCompositionStart", "onCompositionEnd", "sx"];
  var F = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var r;
    var o;
    var S;
    var T;
    var M;
    var R;
    var A;
    var L;
    var x;
    var P;
    var F = e.style;
    var z = e.prefixCls;
    var V = e.className;
    var G = e.readOnly;
    var W = e.placeholder;
    var X = e.disabled;
    var $ = e.size;
    var q = e.prefix;
    var Y = e.suffix;
    var Q = e.addonBefore;
    var J = e.addonAfter;
    var ee = e.defaultValue;
    var et = e.value;
    var en = e.allowClear;
    var er = e.type;
    var eo = e.error;
    var ei = e.onChange;
    var el = e.onKeyDown;
    var ea = e.onPressEnter;
    var ec = e.onClear;
    var eu = e.counter;
    var es = e.slicer;
    var ed = e.maxLength;
    var eh = e.showCount;
    var ef = e.truncateExcessWords;
    var ep = e.onCompositionStart;
    var eg = e.onCompositionEnd;
    var em = e.sx;
    var ev = objectOmitHelper_1.omitWithSymbols(e, j);
    var eb = reactContextUtilsHooks.useComponentClass("input");
    var ey = reactContextUtilsHooks.useComponentSize();
    var e_ = reactContextUtilsHooks.useSizeContext();
    var eE = reactCoreLibraryReexport.useState(false);
    var eC = iterableToArrayUtil_1_1.iterableToArray(eE, 2);
    var ek = eC[0];
    var ew = eC[1];
    var eI = reactCoreLibraryReexport.useRef(null);
    var eS = reactCoreLibraryReexport.useRef();
    r = reactCoreLibraryReexport.useState(false);
    S = (o = iterableToArrayUtil_1_1.iterableToArray(r, 2))[0];
    T = o[1];
    R = (M = {}).onMouseEnter;
    A = M.onMouseLeave;
    var eT = {
      isMouseOver: S,
      handleMouseEnter: reactCoreLibraryReexport.useCallback(function (e) {
        T(true);
        if (R != null) {
          R(e);
        }
      }, [R]),
      handleMouseLeave: reactCoreLibraryReexport.useCallback(function (e) {
        T(false);
        if (A != null) {
          A(e);
        }
      }, [A])
    };
    var eB = eT.isMouseOver;
    var eM = eT.handleMouseEnter;
    var eR = eT.handleMouseLeave;
    var eO = sizeAbbrevUtils.getStandardAbbrev($ || e_ || ey);
    var eA = eO === "lg" ? "medium" : "small";
    var eZ = D(objectPropertyAssign.assignObject({
      maxLength: ed,
      showCount: eh,
      truncateExcessWords: ef,
      counter: eu,
      slicer: es,
      defaultValue: ee === undefined ? "" : ee,
      inputRef: eI,
      onChange: ei,
      onCompositionStart: ep,
      onCompositionEnd: eg,
      focused: ek
    }, "value" in e ? {
      value: et
    } : {}));
    var eL = eZ.nativeMaxLength;
    var ex = eZ.value;
    var eN = eZ.setValue;
    var eP = eZ.count;
    var eD = eZ.onCompositionEnd;
    var eH = eZ.onCompositionStart;
    var eK = eZ.internalOnChange;
    var eU = reactCoreLibraryReexport.useRef(null);
    var ej = reactCoreLibraryReexport.useCallback(function () {
      if (eS.current) {
        clearTimeout(eS.current);
      }
    }, []);
    var eF = reactCoreLibraryReexport.useCallback(function () {
      if (eS.current) {
        clearTimeout(eS.current);
      }
      eS.current = setTimeout(function () {
        if (eI.current && eI.current.getAttribute("type") === "password" && eI.current.getAttribute("value")) {
          eI.current.removeAttribute("value");
        }
      }, 13);
    }, []);
    reactCoreLibraryReexport.useEffect(function () {
      ej();
      eF();
      return function () {
        return ej();
      };
    }, [ex, eF, ej, er]);
    reactCoreLibraryReexport.useImperativeHandle(n, function () {
      return eI.current;
    });
    var ez = reactCoreLibraryReexport.useCallback(function (e) {
      ej();
      eF();
      ew(e);
    }, [eF, ej]);
    function eV(n) {
      var r;
      if (!("value" in e)) {
        eN("");
      }
      if (eI.current) {
        N(eI.current, n, ei, "");
      }
      if ((r = eI.current) !== null && r !== undefined) {
        r.focus();
      }
      if (domElementWindowUtils.isFunction(ec)) {
        ec();
      }
    }
    var eG = textOverflowPopperSidecarHook.useTextOverflowPopperSidecar();
    var eW = !ex && !!W;
    var eX = reactCoreLibraryReexport.useState(false);
    var e$ = iterableToArrayUtil_1_1.iterableToArray(eX, 2);
    var eq = e$[0];
    var eY = e$[1];
    x = z || eb();
    P = conditionalClassnames.default((L = {}, objectPropertySetter.setObjectProperty(L, x, true), objectPropertySetter.setObjectProperty(L, `${x}--error`, eo), objectPropertySetter.setObjectProperty(L, `${x}-addon`, J || Q), objectPropertySetter.setObjectProperty(L, `${x}--focused`, ek), objectPropertySetter.setObjectProperty(L, `${x}--disabled`, X), objectPropertySetter.setObjectProperty(L, `${x}--size-${eO}`, eO), L), V, composeClassNamesUtil.composeClassNames.apply(undefined, [{
      props: {
        width: docxToolboxModule.moduleKey
      }
    }].concat(arrayIterableSliceUtil.sliceArrayIterable(em ?? []))));
    return sxEnhancedReactCreateElement.createElementWithSX("div", {
      style: F,
      className: P
    }, Q ? sxEnhancedReactCreateElement.createElementWithSX("span", {
      className: `${x}__addon-before`
    }, Q) : null, sxEnhancedReactCreateElement.createElementWithSX("label", {
      className: `${x}-input-wrap`,
      onMouseEnter: eM,
      onMouseLeave: eR,
      onMouseDown: function (e) {
        if (e.target !== eI.current && domElementUtils.isEventInElement(e.currentTarget, e.nativeEvent)) {
          e.preventDefault();
          focusDomElementWithOptions.focusElement(eI, {
            selectTextIfInput: false
          });
        }
      },
      onClick: function (e) {
        if (domElementUtils.isEventInElement(e.currentTarget, e.nativeEvent)) {
          e.preventDefault();
        }
      }
    }, q ? sxEnhancedReactCreateElement.createElementWithSX("span", {
      className: `${x}__prefix`
    }, q) : null, sxEnhancedReactCreateElement.createElementWithSX(eG, {
      title: sxEnhancedReactCreateElement.createElementWithSX(reactCoreLibraryReexport.Fragment, null, W),
      disabled: X,
      checkOverflow: function () {
        return !!eU.current && domElementUtils.hasScroll(eU.current);
      },
      visible: eq && eW,
      onVisibleChange: function (e) {
        eY(e);
      }
    }, sxEnhancedReactCreateElement.createElementWithSX("div", {
      className: conditionalClassnames.default(`${x}-input__placeholder__wrapper`, composeClassNamesUtil.composeClassNames({
        props: {
          position: constantIdentifierModule.constantIdentifier,
          flexGrow: "u1j001gk",
          minWidth: "u1kas33f",
          display: uniqueIdConstant_1.constantId,
          alignItems: docxToolboxId_2.docxToolboxId
        }
      })),
      onMouseLeave: function () {
        eY(false);
      }
    }, sxEnhancedReactCreateElement.createElementWithSX("div", {
      ref: eU,
      className: conditionalClassnames.default(`${x}-input__placeholder`, composeClassNamesUtil.composeClassNames(docxTextStyleConfig.getTextStyleConfig, {
        props: {
          position: "un3lvue",
          left: "u80fcee",
          top: constantIdentifier_1.constantIdentifier,
          bottom: "ua19y5w",
          maxWidth: docxToolboxConstant_5.docxToolboxId,
          visibility: "u18iufkw"
        }
      }))
    }, W), sxEnhancedReactCreateElement.createElementWithSX(O, objectAssignUtil.objectAssign({}, ev, {
      type: er,
      ref: eI,
      readOnly: G,
      disabled: X,
      value: ex,
      onChange: eK,
      onKeyDown: function (e) {
        if (e.keyCode === 13 && ea) {
          ea(e);
        }
        if (el) {
          el(e);
        }
      },
      onFocusChange: ez,
      maxLength: eL,
      onCompositionEnd: eD,
      onCompositionStart: eH,
      placeholder: W,
      sx: [{
        props: {
          width: docxToolboxModule.moduleKey,
          minWidth: "u78gxlw"
        }
      }]
    })))), function (e) {
      if (en && !X) {
        var n;
        var r = eB && !!ex;
        var o = conditionalClassnames.default((n = {}, objectPropertySetter.setObjectProperty(n, `${e}__clear-icon`, true), objectPropertySetter.setObjectProperty(n, `${e}__clear-icon-show`, r), n));
        return sxEnhancedReactCreateElement.createElementWithSX(fadeCssTransition.fadeTransition, {
          in: r,
          timeout: 400
        }, sxEnhancedReactCreateElement.createElementWithSX("span", {
          className: o,
          onClick: eV
        }, sxEnhancedReactCreateElement.createElementWithSX(emptyFilledIconComponent.EmptyFilledIcon, null)));
      }
      return null;
    }(x), Y || eh ? sxEnhancedReactCreateElement.createElementWithSX("span", {
      className: `${x}__suffix`
    }, Y, sxEnhancedReactCreateElement.createElementWithSX(Z, {
      style: {
        marginLeft: !!Y * 8
      },
      showCount: eh,
      count: eP,
      maxLength: ed,
      tagSize: eA
    })) : null), J ? sxEnhancedReactCreateElement.createElementWithSX("span", {
      className: `${x}__addon-after`
    }, J) : null);
  });
  var sizeContextProvider_1 = require("size-context-provider_1") /*id: 686769*/;
  var searchOutlinedIconComponent_2 = require("search-outlined-icon-component_2") /*id: 812230*/;
  var G = ["shape", "size", "placeholder", "className"];
  var W = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var r;
    var o = reactContextUtilsHooks.useLocale().global.search;
    var l = e.shape;
    var c = l === undefined ? "round" : l;
    var u = e.size;
    var d = e.placeholder;
    var h = e.className;
    var f = objectOmitHelper_1.omitWithSymbols(e, G);
    var p = reactContextUtilsHooks.useComponentClass("search");
    var g = reactContextUtilsHooks.useComponentSize();
    var m = reactContextUtilsHooks.useSizeContext();
    var y = u || m || g;
    var _ = sizeAbbrevUtils.getStandardAbbrev(y);
    var E = conditionalClassnames.default(p(), (r = {}, objectPropertySetter.setObjectProperty(r, p(`--size-${_}`), _), objectPropertySetter.setObjectProperty(r, p(`--shape-${c}`), c), r), h);
    return reactCoreLibraryReexport.createElement(F, objectAssignUtil.objectAssign({
      ref: n,
      className: E,
      size: y,
      placeholder: d === undefined ? o : d,
      prefix: reactCoreLibraryReexport.createElement(searchOutlinedIconComponent_2.SearchOutlinedIcon, null)
    }, f));
  });
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var udTypographyBody0Style = require("ud-typography-body-0-style") /*id: 307052*/;
  var useResizeObserverHook_1 = require("use-resize-observer-hook_1") /*id: 727379*/;
  var Y = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];
  var Q = {};
  var keyboardKeyCodes_2 = require("keyboard-key-codes_2") /*id: 922339*/;
  var ee = ["allowClear", "autoSize", "showCount", "maxLength", "value", "defaultValue", "style", "error", "className", "onKeyDown", "onPressEnter", "onChange", "onClear", "suffix", "truncateExcessWords", "counter", "slicer", "onCompositionEnd", "onCompositionStart", "autoFocus", "resize"];
  var et = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var r;
    var l = e.allowClear;
    var d = e.autoSize;
    var h = e.showCount;
    var f = e.maxLength;
    var p = e.value;
    var g = e.defaultValue;
    var m = e.style;
    var E = e.error;
    var C = e.className;
    var w = e.onKeyDown;
    var S = e.onPressEnter;
    var B = e.onChange;
    var M = e.onClear;
    var O = e.suffix;
    var A = e.truncateExcessWords;
    var L = e.counter;
    var x = e.slicer;
    var N = e.onCompositionEnd;
    var P = e.onCompositionStart;
    var H = e.autoFocus;
    var K = e.resize;
    var U = objectOmitHelper_1.omitWithSymbols(e, ee);
    var j = reactContextUtilsHooks.useRootPrefixCls();
    var F = reactContextUtilsHooks.useComponentClass("textarea");
    var z = reactCoreLibraryReexport.useState(false);
    var V = iterableToArrayUtil_1_1.iterableToArray(z, 2);
    var G = V[0];
    var W = V[1];
    var et = useResizeObserverHook_1.useResizeObserver(function (e) {
      if (e.target.style.height) {
        W(true);
      }
    }, {
      disabled: !!d
    });
    var en = reactCoreLibraryReexport.useState({});
    var er = iterableToArrayUtil_1_1.iterableToArray(en, 2);
    var eo = er[0];
    var ei = er[1];
    var el = reactCoreLibraryReexport.useState(false);
    var ea = iterableToArrayUtil_1_1.iterableToArray(el, 2);
    var ec = ea[0];
    var eu = ea[1];
    var es = D(objectPropertyAssign.assignObject({
      maxLength: f,
      showCount: h,
      truncateExcessWords: A !== undefined && A,
      counter: L,
      slicer: x,
      defaultValue: g,
      inputRef: et,
      onChange: B,
      onCompositionStart: P,
      onCompositionEnd: N,
      focused: ec
    }, "value" in e ? {
      value: p
    } : {}));
    var ed = es.nativeMaxLength;
    var eh = es.value;
    var ef = es.setValue;
    var ep = es.count;
    var eg = es.onCompositionEnd;
    var em = es.onCompositionStart;
    var ev = es.internalOnChange;
    var eb = es.maxLength;
    R({
      inputRef: et,
      onFocusChange: function (e) {
        return eu(e);
      },
      autoFocus: !!H
    });
    reactCoreLibraryReexport.useImperativeHandle(n, function () {
      return et.current;
    });
    var ey = reactCoreLibraryReexport.useCallback(function () {
      if (d && et.current) {
        var e = {
          minRows: undefined,
          maxRows: undefined
        };
        if (typeofHelper.getType(d) === "object") {
          e.minRows = d.minRows;
          e.maxRows = d.maxRows;
        }
        var n = function (e) {
          var n;
          var r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var l = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          if (!o) {
            (o = document.createElement("textarea")).setAttribute("tab-index", "-1");
            o.setAttribute("aria-hidden", "true");
            document.body.appendChild(o);
          }
          if (e.getAttribute("wrap")) {
            o.setAttribute("wrap", e.getAttribute("wrap"));
          } else {
            o.removeAttribute("wrap");
          }
          var a = function (e, n = false) {
            var r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
            if (n && Q[r]) {
              return Q[r];
            }
            var o = window.getComputedStyle(e);
            var i = o.getPropertyValue("box-sizing") || o.getPropertyValue("-moz-box-sizing") || o.getPropertyValue("-webkit-box-sizing");
            var l = parseFloat(o.getPropertyValue("padding-bottom")) + parseFloat(o.getPropertyValue("padding-top"));
            var a = parseFloat(o.getPropertyValue("border-bottom-width")) + parseFloat(o.getPropertyValue("border-top-width"));
            var c = {
              sizingStyle: Y.map(function (e) {
                return `${e}:${o.getPropertyValue(e)}`;
              }).join(";"),
              paddingSize: l,
              borderSize: a,
              boxSizing: i
            };
            if (n && r) {
              Q[r] = c;
            }
            return c;
          }(e, r);
          var c = a.paddingSize;
          var u = a.borderSize;
          var s = a.boxSizing;
          var d = a.sizingStyle;
          o.setAttribute("style", `${d};
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
          o.value = e.value || e.placeholder || "";
          var h = Number.MIN_SAFE_INTEGER;
          var f = Number.MAX_SAFE_INTEGER;
          var p = o.scrollHeight;
          if (s === "border-box") {
            p += u;
          } else if (s === "content-box") {
            p -= c;
          }
          if (i !== null || l !== null) {
            o.value = " ";
            var g = o.scrollHeight - c;
            if (i !== null) {
              h = g * i;
              if (s === "border-box") {
                h = h + c + u;
              }
              p = Math.max(h, p);
            }
            if (l !== null) {
              f = g * l;
              if (s === "border-box") {
                f = f + c + u;
              }
              n = p > f ? "" : "hidden";
              p = Math.min(f, p);
            }
          }
          return {
            height: p,
            minHeight: h,
            maxHeight: f,
            overflowY: n
          };
        }(et.current, false, e.minRows, e.maxRows);
        if (n) {
          ei(n);
        }
      } else {
        ei({});
      }
    }, [d, et]);
    var e_ = useResizeObserverHook_1.useResizeObserver(ey);
    reactRefEffectUtils.useLayoutEffect(ey, [ey, eh]);
    var eE = l && !e.disabled && eh;
    var eC = E || domElementWindowUtils.isNotNullOrUndefined(eb) && ep > eb;
    var ek = conditionalClassnames.default((r = {}, objectPropertySetter.setObjectProperty(r, F(), true), objectPropertySetter.setObjectProperty(r, F("--error"), eC), objectPropertySetter.setObjectProperty(r, F("--show-count"), h), objectPropertySetter.setObjectProperty(r, F("--show-clear"), eE), objectPropertySetter.setObjectProperty(r, F("--disabled"), e.disabled), r), C);
    return reactCoreLibraryReexport.createElement("div", {
      className: ek,
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, m), G ? {
        height: "auto"
      } : {}),
      ref: e_
    }, eE ? reactCoreLibraryReexport.createElement("span", {
      className: F("__clear-icon"),
      onClick: function (n) {
        var r;
        if (!("value" in e)) {
          ef("");
        }
        if (domElementWindowUtils.isFunction(B) && et.current) {
          var o = Object.create(n);
          o.target = et.current;
          o.currentTarget = et.current;
          var i = et.current.value;
          et.current.value = "";
          B(o);
          et.current.value = i;
        }
        if ((r = et.current) !== null && r !== undefined) {
          r.focus();
        }
        if (domElementWindowUtils.isFunction(M)) {
          M();
        }
      }
    }, reactCoreLibraryReexport.createElement(emptyFilledIconComponent.EmptyFilledIcon, null)) : null, reactCoreLibraryReexport.createElement("textarea", objectAssignUtil.objectAssign({}, U, {
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, eo), {}, {
        resize: K
      }),
      ref: et,
      className: conditionalClassnames.default(`${j}-scrollbar`, composeClassNamesUtil.composeClassNames(udTypographyBody0Style.udTypographyBody0)),
      onChange: ev,
      onKeyDown: function (e) {
        if (e.keyCode === keyboardKeyCodes_2.keyCodes.ENTER && domElementWindowUtils.isFunction(S)) {
          S(e);
        }
        if (domElementWindowUtils.isFunction(w)) {
          w(e);
        }
      },
      onCompositionEnd: eg,
      onCompositionStart: em,
      value: eh,
      maxLength: ed
    })), reactCoreLibraryReexport.createElement("span", {
      className: F("-suffix")
    }, O && reactCoreLibraryReexport.createElement("span", {
      className: F("-suffix-slot")
    }, O), reactCoreLibraryReexport.createElement(Z, {
      showCount: !!h,
      count: ep,
      disabled: e.disabled,
      maxLength: f
    })));
  });
  var visibleOutlinedIconComponent = require("visible-outlined-icon-component") /*id: 623102*/;
  var visibleLockOutlinedIcon_1 = require("visible-lock-outlined-icon_1") /*id: 968464*/;
  var objectOmitUtil_2 = require("object-omit-util_2") /*id: 644631*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var el = ["action", "size", "visibilityToggle", "iconRender"];
  var ea = {
    click: "onClick",
    hover: "onMouseOver"
  };
  var ec = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var r;
    var o;
    var l;
    var d;
    var h = e.action;
    var f = e.size;
    var p = e.visibilityToggle;
    var g = e.iconRender;
    var m = g === undefined ? function (e) {
      if (e) {
        return reactCoreLibraryReexport.createElement(universalButtonWrapper.UniversalButton, {
          type: "icon",
          size: "small",
          icon: reactCoreLibraryReexport.createElement(visibleOutlinedIconComponent.VisibleOutlinedIcon, null)
        });
      } else {
        return reactCoreLibraryReexport.createElement(universalButtonWrapper.UniversalButton, {
          type: "icon",
          size: "small",
          icon: reactCoreLibraryReexport.createElement(visibleLockOutlinedIcon_1.VisibleLockOutlinedIcon, null)
        });
      }
    } : g;
    var b = objectOmitHelper_1.omitWithSymbols(e, el);
    var y = reactCoreLibraryReexport.useState(false);
    var _ = iterableToArrayUtil_1_1.iterableToArray(y, 2);
    var E = _[0];
    var C = _[1];
    var k = reactContextUtilsHooks.useComponentClass("input-password")();
    function w(e) {
      return e.preventDefault();
    }
    var S = (p === undefined || p) && (o = ea[h === undefined ? "click" : h], l = m(E), r = {}, objectPropertySetter.setObjectProperty(r, o, function () {
      if (!e.disabled) {
        C(!E);
      }
    }), objectPropertySetter.setObjectProperty(r, "key", "passwordIcon"), objectPropertySetter.setObjectProperty(r, "onMouseDown", function (e) {
      return w(e);
    }), objectPropertySetter.setObjectProperty(r, "onMouseUp", function (e) {
      return w(e);
    }), d = r, reactCoreLibraryReexport.cloneElement(reactCoreLibraryReexport.isValidElement(l) ? l : reactCoreLibraryReexport.createElement("span", null, l), d));
    var T = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, objectOmitUtil_2.omitProps(b, ["suffix"])), {}, {
      type: E ? "text" : "password",
      prefixCls: k,
      suffix: S
    });
    return reactCoreLibraryReexport.createElement(F, objectAssignUtil.objectAssign({
      ref: n
    }, T, {
      size: f
    }));
  });
  F.Group = function (e) {
    var n;
    var r = e.style;
    var o = e.className;
    var i = e.size;
    var l = i === undefined ? "medium" : i;
    var c = e.compact;
    var u = e.children;
    var s = e.onMouseEnter;
    var d = e.onMouseLeave;
    var h = e.onFocus;
    var f = e.onBlur;
    var p = reactContextUtilsHooks.useComponentClass("input-group");
    var g = sizeAbbrevUtils.getStandardAbbrev(l, "medium");
    var m = conditionalClassnames.default(p(), (n = {}, objectPropertySetter.setObjectProperty(n, p(`--size-${g}`), g), objectPropertySetter.setObjectProperty(n, p("--compact"), c), n), o);
    return reactCoreLibraryReexport.createElement(sizeContextProvider_1.SizeProvider, {
      size: l
    }, reactCoreLibraryReexport.createElement("span", {
      className: m,
      style: r,
      onMouseEnter: s,
      onMouseLeave: d,
      onFocus: h,
      onBlur: f
    }, u));
  };
  F.TextArea = et;
  F.Password = ec;
  F.Search = W;
  var eu = F;
  require.d(exports, {
    InputComponent: function () {
      return eu;
    }
  });
}