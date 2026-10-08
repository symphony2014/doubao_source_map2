// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ph' to 'Select'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 408721
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var _;
  var a;
  var E;
  var l;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var uiDefaultContextProvider = require("ui-default-context-provider") /*id: 792028*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var translateOutlinedIcon_1 = require("translate-outlined-icon_1") /*id: 977617*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useToggleHook = require("use-toggle-hook") /*id: 952335*/;
  var reactChildrenFlatten = require("react-children-flatten") /*id: 96569*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var escapeRegexpUtil = require("escape-regexp-util") /*id: 711152*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  function M() {
    return uiConfigContextHooks.useClassName("select__list");
  }
  var f = "UD_SELECT_OPTION";
  var O = "UD_SELECT_OPTION_GROUP";
  function R(e, t) {
    var n = typeof t.label == "string" ? t.label : String(t.value);
    return !e || RegExp(escapeRegexpUtil.escapeRegExp(e), "gi").test(n);
  }
  function D(e, t, n) {
    return t.get(e) ?? n.get(e) ?? {
      value: e
    };
  }
  function P(e) {
    if (typeof e == "boolean") {
      return String(`${e}-bool`);
    } else {
      return e;
    }
  }
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var emptyFilledIconComponent = require("empty-filled-icon-component") /*id: 264973*/;
  var iconDownBoldOutlined = require("icon-down-bold-outlined") /*id: 851606*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  (r = {})[r.Blur = 0] = "Blur";
  r[r.Input = 1] = "Input";
  r[r.AutoClear = 2] = "AutoClear";
  var G = r;
  (i = {})[i.ArrowUp = 0] = "ArrowUp";
  i[i.ArrowDown = 1] = "ArrowDown";
  i[i.MouseMove = 2] = "MouseMove";
  i[i.Manual = 3] = "Manual";
  i[i.AfterSearch = 4] = "AfterSearch";
  var w = i;
  (o = {}).Select = "Select";
  o.DeSelect = "DeSelect";
  o.Clear = "Clear";
  o.Set = "Set";
  o.Toggle = "Toggle";
  o.Checked = "Checked";
  o.UnChecked = "UnChecked";
  o.SelectAll = "SelectAll";
  o.DeSelectAll = "DeSelectAll";
  var k = o;
  var useCachedValueHook = require("use-cached-value-hook") /*id: 881417*/;
  var useControlledStateHook_1 = require("use-controlled-state-hook_1") /*id: 837560*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  function B(e) {
    if (Array.isArray(e)) {
      return e;
    } else if (isNullishCheck.isNil(e)) {
      return [];
    } else {
      return [e];
    }
  }
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var arrayUtilityHelper = require("array-utility-helper") /*id: 39392*/;
  var iterableToArrayUtil_1 = require("iterable-to-array-util_1") /*id: 935740*/;
  var sliceIterableUtil = require("slice-iterable-util") /*id: 681006*/;
  var destructuringErrorHelper = require("destructuring-error-helper") /*id: 239839*/;
  var keyboardKeys = require("keyboard-keys") /*id: 756097*/;
  var docxUiTagComponent = require("docx-ui-tag-component") /*id: 840665*/;
  var Z = reactCoreLibraryReexport.createContext({});
  var archiveBoxPopover = require("archive-box-popover") /*id: 102490*/;
  var spaceLayoutComponent_1 = require("space-layout-component_1") /*id: 286545*/;
  function $(e) {
    var t = e.value;
    var n = e.title;
    var r = e.closable;
    var i = e.disabled;
    var o = e.onClose;
    var _ = e.children;
    var a = reactCoreLibraryReexport.useContext(Z);
    var E = a.selectorCssScope;
    var l = a.size;
    var c = conditionalClassnames.default(E("__tag"));
    return reactCoreLibraryReexport.createElement(docxUiTagComponent.DocxTag, {
      key: t,
      title: n,
      className: c,
      color: "neutral-option",
      size: l,
      closable: r,
      visible: true,
      onClose: o,
      disabled: i
    }, _);
  }
  function q(e) {
    return reactCoreLibraryReexport.createElement($, e);
  }
  function ee(e) {
    var t = e.disabled;
    var n = e.tags;
    var r = reactCoreLibraryReexport.useContext(Z);
    var i = r.selectorCssScope;
    var o = r.size;
    var _ = r.tagRenderer;
    var a = conditionalClassnames.default(i("__tag"));
    var E = reactCoreLibraryReexport.createElement(docxUiTagComponent.DocxTag, {
      className: a,
      style: {
        justifyContent: "center"
      },
      color: "neutral-option",
      size: o,
      disabled: t
    }, `+${n.length}`);
    return reactCoreLibraryReexport.createElement(archiveBoxPopover.archiveBoxPopover, {
      mode: "pure",
      overlayClassName: i("__overlay"),
      content: reactCoreLibraryReexport.createElement("div", {
        className: i("__overlay-scrollArea")
      }, reactCoreLibraryReexport.createElement(spaceLayoutComponent_1.SpaceLayout, {
        size: 4,
        wrap: true,
        inline: false,
        shouldItemConfinedToContainer: true,
        itemKey: function (e) {
          return n[e].value;
        }
      }, n.map(function (e) {
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, {
          key: e.value
        }, _(e));
      }))),
      visible: n.length !== 0 && undefined,
      disabled: n.length === 0
    }, E);
  }
  function et(e, t) {
    return reactCoreLibraryReexport.createElement(ee, objectAssignUtil.objectAssign({}, e, {
      tags: t
    }));
  }
  var reactIntervalStateHook = require("react-interval-state-hook") /*id: 69782*/;
  function er(e, t) {
    return t || !!e.disabled;
  }
  var boxPreviewPdfViewerId = require("box-preview-pdf-viewer-id") /*id: 658336*/;
  var boxPreviewPdfViewerConstant = require("box-preview-pdf-viewer-constant") /*id: 958963*/;
  var udPickerPanelId_8 = require("ud-picker-panel-id_8") /*id: 831703*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var sizeConvertUtils = require("size-convert-utils") /*id: 293585*/;
  var responsiveOverflowListComponent = require("responsive-overflow-list-component") /*id: 971996*/;
  var ec = require("context-hook-creator") /*id: 46755*/.createContextHook("MultipleSelectorContext", {
    strict: true
  });
  var eT = ec.Provider;
  var eI = ec.useContext;
  var nativeInputComponent = require("native-input-component") /*id: 256053*/;
  var typographyTextExport = require("typography-text-export") /*id: 607446*/;
  var useMouseHover = require("use-mouse-hover") /*id: 665747*/;
  var uiInlineLayoutComponents = require("ui-inline-layout-components") /*id: 135614*/;
  var textOverflowPopperSidecarHook_1 = require("text-overflow-popper-sidecar-hook_1") /*id: 479931*/;
  var textStyleConfig = require("text-style-config") /*id: 454094*/;
  var domElementUtils_1 = require("dom-element-utils_1") /*id: 846713*/;
  var typographyComponent_2 = require("typography-component_2") /*id: 728302*/;
  var eL = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = reactCoreLibraryReexport.useContext(Z);
    var r = n.id;
    var i = n.inputRef;
    var o = n.selectorCssScope;
    var _ = n.inputValue;
    var a = n.disabled;
    var E = n.onInputChange;
    var l = n.onInputCompositionStart;
    var c = n.onInputCompositionEnd;
    var T = n.onInputPaste;
    var I = n.showSearch;
    var A = n.tabIndex;
    var s = n.inputting;
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return i.current;
    });
    return reactCoreLibraryReexport.createElement(nativeInputComponent.NativeInput, {
      id: r,
      tabIndex: A,
      role: "combobox",
      autoComplete: "off",
      disabled: a,
      type: "search",
      readOnly: !I,
      ref: i,
      className: conditionalClassnames.default(o("__search__input"), s && o("__search__input-inputting")),
      value: _,
      onChange: E,
      onPaste: T,
      onCompositionStart: l,
      onCompositionEnd: c
    });
  });
  function ep() {
    var e = reactCoreLibraryReexport.useContext(Z);
    var t = e.selectorCssScope;
    var n = e.inputValue;
    var r = reactCoreLibraryReexport.useRef(null);
    var i = reactCoreLibraryReexport.useState(0);
    var o = iterableToArrayUtil_1_1.iterableToArray(i, 2);
    var _ = o[0];
    var a = o[1];
    reactRefEffectUtils.useLayoutEffect(function () {
      if (r.current) {
        a(r.current.offsetWidth);
      }
    }, [n]);
    return reactCoreLibraryReexport.createElement("span", {
      className: t("__search__input_container"),
      style: {
        width: _ + 2
      }
    }, reactCoreLibraryReexport.createElement(eL, null), reactCoreLibraryReexport.createElement("span", {
      ref: r,
      className: t("__search__measure"),
      "aria-hidden": true
    }, n, "\xA0"));
  }
  function eM(e) {
    var t = e.maxTagCount;
    var n = e.maxTagRenderer;
    var r = reactCoreLibraryReexport.useContext(Z);
    var i = r.valueSet;
    var o = r.getOption;
    var _ = r.deselect;
    var a = r.disabled;
    var E = r.selectorCssScope;
    var l = r.selectorLabelRenderer;
    var c = r.tagRenderer;
    var T = reactCoreLibraryReexport.useMemo(function () {
      return reactCoreLibraryReexport.createElement(ep, null);
    }, []);
    return reactCoreLibraryReexport.createElement(responsiveOverflowListComponent.ResponsiveOverflowList, {
      className: conditionalClassnames.default(E("__search")),
      maxCount: t,
      suffixClassName: E("__search__suffix"),
      suffixWrap: false,
      keys: arrayIterableSliceUtil.sliceArrayIterable(i).map(P),
      itemRenderer: function (e) {
        var t = o(e);
        var n = er(t, a);
        return c({
          title: t.htmlTitle,
          value: t.value,
          disabled: n,
          closable: !n,
          onClose: function () {
            _(e);
          },
          children: l(e)
        });
      },
      restRenderer: function (e) {
        return n({
          disabled: a
        }, e.map(function (e) {
          var t = o(e);
          var n = er(t, a);
          return {
            value: t.value,
            disabled: n,
            closable: !n,
            onClose: function () {
              _(e);
            },
            children: l(e)
          };
        }));
      },
      suffixRenderer: function () {
        return T;
      }
    });
  }
  function ef() {
    var e = reactCoreLibraryReexport.useContext(Z).selectorCssScope;
    return reactCoreLibraryReexport.createElement("div", {
      className: e("__search")
    }, reactCoreLibraryReexport.createElement(eL, null));
  }
  var eO = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var r = e.size;
    var i = e.placeholder;
    var o = e.bordered;
    var _ = e.error;
    var a = e.maxTagCount;
    var E = e.allowClear;
    var l = e.showArrow;
    var c = e.maxTagRenderer;
    var T = e.clearIcon;
    var I = e.suffixIcon;
    var A = reactCoreLibraryReexport.useContext(Z);
    var s = A.multiple;
    var u = A.focusState;
    var d = A.overlayVisible;
    var N = A.clear;
    var S = A.valueSet;
    var C = A.inputValue;
    var L = A.disabled;
    var p = A.selectorCssScope;
    var M = A.selectorLabelRenderer;
    var f = A.setOverlayVisible;
    var O = A.inputRef;
    var R = A.inputting;
    var D = A.showSearch;
    var P = eI().maxHeight;
    var b = useMouseHover.useMouseHover();
    var v = b.isMouseOver;
    var y = b.handleMouseEnter;
    var h = b.handleMouseLeave;
    var G = textOverflowPopperSidecarHook_1.useTextOverflowPopperSidecar();
    var w = reactCoreLibraryReexport.useRef(null);
    var k = reactCoreLibraryReexport.useState(false);
    var H = iterableToArrayUtil_1_1.iterableToArray(k, 2);
    var x = H[0];
    var j = H[1];
    n = s ? reactCoreLibraryReexport.createElement(eM, {
      maxTagCount: a,
      maxTagRenderer: c
    }) : reactCoreLibraryReexport.createElement(ef, null);
    var B = !S.size;
    var z = {
      small: "body2",
      medium: "body0",
      large: "title5"
    }[r];
    var V = B && !!i && !C;
    var F = reactCoreLibraryReexport.createElement(typographyComponent_2.Typography, {
      key: "placeholder",
      as: "div",
      variant: z,
      className: conditionalClassnames.default(p("__placeholder"), composeClassNamesUtil.composeClassNames(textStyleConfig.textStyleConfig)),
      ref: w
    }, i);
    if (C) {
      F = s && !B ? null : reactCoreLibraryReexport.createElement("span", {
        className: p("__placeholder")
      });
    } else if (!B) {
      if (s) {
        F = null;
      } else {
        var Y = S.keys().next().value;
        F = reactCoreLibraryReexport.createElement(typographyTextExport.TypographyText, {
          key: "selectItem",
          as: "div",
          className: conditionalClassnames.default(p("__selectItem"), R && p("__selectItem-inputting")),
          lineClamp: 1,
          variant: z,
          disabled: L
        }, M(Y));
      }
    }
    var K = !B && !L && E;
    return reactCoreLibraryReexport.createElement("div", {
      ref: t,
      onMouseEnter: y,
      onMouseLeave: h,
      className: conditionalClassnames.default(p(), p(`-${sizeConvertUtils.convertSize(r)}`), u && p("-focus"), d && p("-open"), !D && p("-readOnly"), p(`-border-${o === true ? "normal" : o === false ? "noborder" : o}`), !B && p("-not-empty"), K && p("-allowClear"), s && p("-multiple"), L && p("-disabled"), _ && p("-error"), !l && p("-hide-arrow")),
      onClick: function (e) {
        var t;
        if (e.target !== O.current) {
          if ((t = O.current) !== null && t !== undefined) {
            t.focus();
          }
        }
        f();
      },
      style: {
        maxHeight: s ? P : undefined
      }
    }, reactCoreLibraryReexport.createElement(uiInlineLayoutComponents.EmptyInlineElement, {
      sx: [{
        small: {
          props: {
            lineHeight: udPickerPanelId_8.pickerPanelId
          }
        },
        medium: {
          props: {
            lineHeight: boxPreviewPdfViewerConstant.viewerConstant
          }
        },
        large: {
          props: {
            lineHeight: boxPreviewPdfViewerId.boxPreviewId
          }
        }
      }[r]]
    }), reactCoreLibraryReexport.createElement(G, {
      title: reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, i),
      checkOverflow: function () {
        return !!w.current && domElementUtils_1.hasScrollbar(w.current);
      },
      visible: V && x,
      onVisibleChange: function (e) {
        j(e);
      }
    }, reactCoreLibraryReexport.createElement("div", {
      className: p("__content"),
      onMouseLeave: function () {
        j(false);
      }
    }, F, n)), K ? reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(p("__clear"), composeClassNamesUtil.composeClassNames(v ? {
        props: {
          opacity: "ultmtaz"
        }
      } : {
        props: {
          opacity: "u51k5wp"
        }
      })),
      onMouseDown: function (e) {
        e.stopPropagation();
        N();
      },
      onClick: function (e) {
        e.stopPropagation();
      }
    }, T) : null, l ? reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(p("__arrow"))
    }, I) : null);
  });
  var useElementRectHook = require("use-element-rect-hook") /*id: 176756*/;
  var popperSidecarWrapper = require("popper-sidecar-wrapper") /*id: 225893*/;
  var domElementEventUtils = require("dom-element-event-utils") /*id: 791124*/;
  var mergeReactRefs = require("merge-react-refs") /*id: 686702*/;
  var slideUpDownTransitionFactory = require("slide-up-down-transition-factory") /*id: 450064*/;
  require("empty-module-export_4") /*id: 530821*/;
  require("empty-module-shim") /*id: 582176*/;
  require("empty-module-export_7") /*id: 707042*/;
  require("empty-module-export_6") /*id: 84522*/;
  require("empty-module-export_8") /*id: 903391*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var ey = classnamesUtils;
  var reactResizeObserver = require("react-resize-observer") /*id: 248893*/;
  function eG(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      n.push.apply(n, r);
    }
    return n;
  }
  function ew(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] ?? {};
      if (t % 2) {
        eG(Object(n), true).forEach(function (t) {
          ek(e, t, n[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        eG(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
    return e;
  }
  function ek(e, t, n) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  var eH = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.height;
    var r = e.offset;
    var i = e.children;
    var o = e.prefixCls;
    var _ = e.onInnerResize;
    var a = {};
    var E = {
      display: "flex",
      flexDirection: "column"
    };
    if (r !== undefined) {
      a = {
        height: n,
        position: "relative",
        overflow: "hidden"
      };
      E = ew(ew({}, E), {}, {
        transform: `translateY(${r}px)`,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0
      });
    }
    return reactCoreLibraryReexport.createElement("div", {
      style: a
    }, reactCoreLibraryReexport.createElement(reactResizeObserver.ResizeObserver, {
      onResize: function (e) {
        if (e.offsetHeight && _) {
          _();
        }
      }
    }, reactCoreLibraryReexport.createElement("div", {
      style: E,
      className: ey(ek({}, `${o}-holder-inner`, o)),
      ref: t
    }, i)));
  });
  eH.displayName = "Filler";
  var frameDelayScheduler = require("frame-delay-scheduler") /*id: 967206*/;
  function ej(e) {
    return (ej = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  function eB(e, t) {
    return (eB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  function ez(e) {
    return (ez = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function eV(e) {
    if ("touches" in e) {
      return e.touches[0].pageY;
    } else {
      return e.pageY;
    }
  }
  var eF = function (e) {
    (function (e, t) {
      if (typeof t != "function" && t !== null) {
        throw TypeError("Super expression must either be null or a function");
      }
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(e, "prototype", {
        writable: false
      });
      if (t) {
        eB(e, t);
      }
    })(i, e);
    var t;
    var n;
    t = function () {
      if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy == "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }();
    function r() {
      var e;
      var n = ez(i);
      e = t ? Reflect.construct(n, arguments, ez(this).constructor) : n.apply(this, arguments);
      return function (e, t) {
        if (t && (ej(t) === "object" || typeof t == "function")) {
          return t;
        }
        if (t !== undefined) {
          throw TypeError("Derived constructors may only return object or undefined");
        }
        return function (e) {
          if (e === undefined) {
            throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return e;
        }(e);
      }(this, e);
    }
    function i() {
      var e;
      (function (e, t) {
        if (!(e instanceof t)) {
          throw TypeError("Cannot call a class as a function");
        }
      })(this, i);
      var t = arguments.length;
      var n = Array(t);
      var o = 0;
      for (; o < t; o++) {
        n[o] = arguments[o];
      }
      (e = r.call.apply(r, [this].concat(n))).moveRaf = null;
      e.scrollbarRef = reactCoreLibraryReexport.createRef();
      e.thumbRef = reactCoreLibraryReexport.createRef();
      e.visibleTimeout = null;
      e.state = {
        dragging: false,
        pageY: null,
        startTop: null,
        visible: false
      };
      e.delayHidden = function () {
        clearTimeout(e.visibleTimeout);
        e.setState({
          visible: true
        });
        e.visibleTimeout = setTimeout(function () {
          e.setState({
            visible: false
          });
        }, 2000);
      };
      e.onScrollbarTouchStart = function (e) {
        e.preventDefault();
      };
      e.onContainerMouseDown = function (e) {
        e.stopPropagation();
        e.preventDefault();
      };
      e.patchEvents = function () {
        window.addEventListener("mousemove", e.onMouseMove);
        window.addEventListener("mouseup", e.onMouseUp);
        e.thumbRef.current.addEventListener("touchmove", e.onMouseMove);
        e.thumbRef.current.addEventListener("touchend", e.onMouseUp);
      };
      e.removeEvents = function () {
        window.removeEventListener("mousemove", e.onMouseMove);
        window.removeEventListener("mouseup", e.onMouseUp);
        e.scrollbarRef.current.removeEventListener("touchstart", e.onScrollbarTouchStart);
        e.thumbRef.current.removeEventListener("touchstart", e.onMouseDown);
        e.thumbRef.current.removeEventListener("touchmove", e.onMouseMove);
        e.thumbRef.current.removeEventListener("touchend", e.onMouseUp);
        frameDelayScheduler.scheduleDelayed.cancel(e.moveRaf);
      };
      e.onMouseDown = function (t) {
        var n = e.props.onStartMove;
        e.setState({
          dragging: true,
          pageY: eV(t),
          startTop: e.getTop()
        });
        n();
        e.patchEvents();
        t.stopPropagation();
        t.preventDefault();
      };
      e.onMouseMove = function (t) {
        var n = e.state;
        var r = n.dragging;
        var i = n.pageY;
        var o = n.startTop;
        var _ = e.props.onScroll;
        frameDelayScheduler.scheduleDelayed.cancel(e.moveRaf);
        if (r) {
          var a = eV(t) - i;
          var E = e.getEnableScrollRange();
          var l = e.getEnableHeightRange();
          var c = Math.ceil((l ? (o + a) / l : 0) * E);
          e.moveRaf = frameDelayScheduler.scheduleDelayed(function () {
            _(c);
          });
        }
      };
      e.onMouseUp = function () {
        var t = e.props.onStopMove;
        e.setState({
          dragging: false
        });
        t();
        e.removeEvents();
      };
      e.getSpinHeight = function () {
        var t = e.props;
        var n = t.height;
        var r = n / t.count * 10;
        return Math.floor(r = Math.min(r = Math.max(r, 20), n / 2));
      };
      e.getEnableScrollRange = function () {
        var t = e.props;
        return t.scrollHeight - t.height || 0;
      };
      e.getEnableHeightRange = function () {
        return e.props.height - e.getSpinHeight() || 0;
      };
      e.getTop = function () {
        var t = e.props.scrollTop;
        var n = e.getEnableScrollRange();
        var r = e.getEnableHeightRange();
        if (t === 0 || n === 0) {
          return 0;
        } else {
          return t / n * r;
        }
      };
      e.getVisible = function () {
        var t = e.state.visible;
        var n = e.props;
        return !(n.height >= n.scrollHeight) && t;
      };
      return e;
    }
    n = [{
      key: "componentDidMount",
      value: function () {
        this.scrollbarRef.current.addEventListener("touchstart", this.onScrollbarTouchStart);
        this.thumbRef.current.addEventListener("touchstart", this.onMouseDown);
      }
    }, {
      key: "componentDidUpdate",
      value: function (e) {
        if (e.scrollTop !== this.props.scrollTop) {
          this.delayHidden();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.removeEvents();
        clearTimeout(this.visibleTimeout);
      }
    }, {
      key: "render",
      value: function () {
        var e;
        var t;
        var n = this.state.dragging;
        var r = this.props.prefixCls;
        var i = this.getSpinHeight();
        var o = this.getTop();
        var _ = this.getVisible();
        return reactCoreLibraryReexport.createElement("div", {
          ref: this.scrollbarRef,
          className: `${r}-scrollbar`,
          style: {
            width: 8,
            top: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: _ ? null : "none"
          },
          onMouseDown: this.onContainerMouseDown,
          onMouseMove: this.delayHidden
        }, reactCoreLibraryReexport.createElement("div", {
          ref: this.thumbRef,
          className: ey(`${r}-scrollbar-thumb`, (e = {}, (t = `${r}-scrollbar-thumb-moving`) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n, e)),
          style: {
            width: "100%",
            height: i,
            top: o,
            left: 0,
            position: "absolute",
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: 99,
            cursor: "pointer",
            userSelect: "none"
          },
          onMouseDown: this.onMouseDown
        }));
      }
    }];
    (function (e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
          r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
      }
    })(i.prototype, n);
    Object.defineProperty(i, "prototype", {
      writable: false
    });
    return i;
  }(reactCoreLibraryReexport.Component);
  function eY(e) {
    var t = e.children;
    var n = e.setRef;
    var r = reactCoreLibraryReexport.useCallback(function (e) {
      n(e);
    }, []);
    return reactCoreLibraryReexport.cloneElement(t, {
      ref: r
    });
  }
  var getDomNodeUtil = require("get-dom-node-util") /*id: 285330*/;
  var eW = function () {
    var e;
    function t() {
      (function (e, t) {
        if (!(e instanceof t)) {
          throw TypeError("Cannot call a class as a function");
        }
      })(this, t);
      this.maps = undefined;
      this.maps = {};
      this.maps.prototype = null;
    }
    e = [{
      key: "set",
      value: function (e, t) {
        this.maps[e] = t;
      }
    }, {
      key: "get",
      value: function (e) {
        return this.maps[e];
      }
    }];
    (function (e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
          r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
      }
    })(t.prototype, e);
    Object.defineProperty(t, "prototype", {
      writable: false
    });
    return t;
  }();
  function eQ(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    var n = 0;
    var r = Array(t);
    for (; n < t; n++) {
      r[n] = e[n];
    }
    return r;
  }
  function eZ(e) {
    return (eZ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  function eX(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var n;
      var r;
      var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (i != null) {
        var o = [];
        var _ = true;
        var a = false;
        try {
          for (i = i.call(e); !(_ = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); _ = true);
        } catch (e) {
          a = true;
          r = e;
        } finally {
          try {
            if (!_ && i.return != null) {
              i.return();
            }
          } finally {
            if (a) {
              throw r;
            }
          }
        }
        return o;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return eJ(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return eJ(e, t);
        }
      }
    }(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function eJ(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    var n = 0;
    var r = Array(t);
    for (; n < t; n++) {
      r[n] = e[n];
    }
    return r;
  }
  function e$(e) {
    return (e$ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  var eq = (typeof navigator == "undefined" ? "undefined" : e$(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
  function e0(e, t) {
    var n = reactCoreLibraryReexport.useRef(false);
    var r = reactCoreLibraryReexport.useRef(null);
    var i = reactCoreLibraryReexport.useRef({
      top: e,
      bottom: t
    });
    i.current.top = e;
    i.current.bottom = t;
    return function (e, t = false) {
      var o = e < 0 && i.current.top || e > 0 && i.current.bottom;
      if (t && o) {
        clearTimeout(r.current);
        n.current = false;
      } else if (!o || n.current) {
        clearTimeout(r.current);
        n.current = true;
        r.current = setTimeout(function () {
          n.current = false;
        }, 50);
      }
      return !n.current && o;
    };
  }
  var e1 = 14 / 15;
  var e2 = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll"];
  function e5() {
    return (e5 = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function e3(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      n.push.apply(n, r);
    }
    return n;
  }
  function e4(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] ?? {};
      if (t % 2) {
        e3(Object(n), true).forEach(function (t) {
          e8(e, t, n[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        e3(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
    return e;
  }
  function e8(e, t, n) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  function e9(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var n;
      var r;
      var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (i != null) {
        var o = [];
        var _ = true;
        var a = false;
        try {
          for (i = i.call(e); !(_ = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); _ = true);
        } catch (e) {
          a = true;
          r = e;
        } finally {
          try {
            if (!_ && i.return != null) {
              i.return();
            }
          } finally {
            if (a) {
              throw r;
            }
          }
        }
        return o;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return e6(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return e6(e, t);
        }
      }
    }(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function e6(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    var n = 0;
    var r = Array(t);
    for (; n < t; n++) {
      r[n] = e[n];
    }
    return r;
  }
  var e7 = [];
  var te = {
    overflowY: "auto",
    overflowAnchor: "none"
  };
  var tt = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var r;
    var i;
    var o;
    var _;
    var a;
    var E;
    var l;
    var c;
    var T;
    var I;
    var A;
    var s;
    var u;
    var d;
    var N;
    var S;
    var C;
    var L;
    var p;
    var M;
    var f;
    var O;
    var R = e.prefixCls;
    var D = R === undefined ? "rc-virtual-list" : R;
    var P = e.className;
    var m = e.height;
    var U = e.itemHeight;
    var b = e.fullHeight;
    var v = e.style;
    var y = e.data;
    var h = e.children;
    var G = e.itemKey;
    var w = e.virtual;
    var k = e.component;
    var H = e.onScroll;
    var x = function (e, t) {
      if (e == null) {
        return {};
      }
      var n;
      var r;
      var i = function (e, t) {
        if (e == null) {
          return {};
        }
        var n;
        var r;
        var i = {};
        var o = Object.keys(e);
        for (r = 0; r < o.length; r++) {
          n = o[r];
          if (!(t.indexOf(n) >= 0)) {
            i[n] = e[n];
          }
        }
        return i;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) {
          n = o[r];
          if (!(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n)) {
            i[n] = e[n];
          }
        }
      }
      return i;
    }(e, e2);
    var j = w !== false && !!m && !!U;
    var B = j && y && U * y.length > m;
    var z = e9(reactCoreLibraryReexport.useState(0), 2);
    var V = z[0];
    var F = z[1];
    var Y = e9(reactCoreLibraryReexport.useState(false), 2);
    var K = Y[0];
    var W = Y[1];
    var Q = ey(D, P);
    var Z = y || e7;
    var X = reactCoreLibraryReexport.useRef();
    var J = reactCoreLibraryReexport.useRef();
    var $ = reactCoreLibraryReexport.useRef();
    var q = reactCoreLibraryReexport.useCallback(function (e) {
      if (typeof G == "function") {
        return G(e);
      } else if (e == null) {
        return undefined;
      } else {
        return e[G];
      }
    }, [G]);
    function ee(e) {
      F(function (t) {
        var n;
        var r;
        n = typeof e == "function" ? e(t) : e;
        if (!Number.isNaN(eu.current)) {
          n = Math.min(n, eu.current);
        }
        var i = n = Math.max(n, 0);
        X.current.scrollTop = i;
        return i;
      });
    }
    var et = reactCoreLibraryReexport.useRef({
      start: 0,
      end: Z.length
    });
    var en = reactCoreLibraryReexport.useRef();
    var er = e9((r = (n = eX(reactCoreLibraryReexport.useState(Z), 2))[0], i = n[1], _ = (o = eX(reactCoreLibraryReexport.useState(null), 2))[0], a = o[1], reactCoreLibraryReexport.useEffect(function () {
      var e = function (e, t, n) {
        var r;
        var i;
        var o = e.length;
        var _ = t.length;
        if (o === 0 && _ === 0) {
          return null;
        }
        if (o < _) {
          r = e;
          i = t;
        } else {
          r = t;
          i = e;
        }
        var a = {
          __EMPTY_ITEM__: true
        };
        function E(e) {
          if (e !== undefined) {
            return n(e);
          } else {
            return a;
          }
        }
        var l = null;
        var c = Math.abs(o - _) !== 1;
        var T = 0;
        for (; T < i.length; T += 1) {
          var I = E(r[T]);
          if (I !== E(i[T])) {
            l = T;
            c = c || I !== E(i[T + 1]);
            break;
          }
        }
        if (l === null) {
          return null;
        } else {
          return {
            index: l,
            multiple: c
          };
        }
      }(r || [], Z || [], q);
      if ((e == null ? undefined : e.index) !== undefined) {
        a(Z[e.index]);
      }
      i(Z);
    }, [Z]), [_]), 1)[0];
    en.current = er;
    var ei = e9(function (e, t, n) {
      var r;
      var i = function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(r = reactCoreLibraryReexport.useState(0)) || function (e, t) {
        var n;
        var r;
        var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (i != null) {
          var o = [];
          var _ = true;
          var a = false;
          try {
            for (i = i.call(e); !(_ = (n = i.next()).done) && (o.push(n.value), o.length !== t); _ = true);
          } catch (e) {
            a = true;
            r = e;
          } finally {
            try {
              if (!_ && i.return != null) {
                i.return();
              }
            } finally {
              if (a) {
                throw r;
              }
            }
          }
          return o;
        }
      }(r, 2) || function (e, t) {
        if (e) {
          if (typeof e == "string") {
            return eQ(e, 2);
          }
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (n === "Object" && e.constructor) {
            n = e.constructor.name;
          }
          if (n === "Map" || n === "Set") {
            return Array.from(e);
          }
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
            return eQ(e, t);
          }
        }
      }(r, 2) || function () {
        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
      var o = i[0];
      var _ = i[1];
      var a = reactCoreLibraryReexport.useRef(new Map());
      var E = reactCoreLibraryReexport.useRef(new eW());
      var l = reactCoreLibraryReexport.useRef(0);
      function c() {
        l.current += 1;
        var e = l.current;
        Promise.resolve().then(function () {
          if (e === l.current) {
            a.current.forEach(function (e, t) {
              if (e && e.offsetParent) {
                var n = getDomNodeUtil.getDOMNode(e);
                var r = n.offsetHeight;
                if (E.current.get(t) !== r) {
                  E.current.set(t, n.offsetHeight);
                }
              }
            });
            _(function (e) {
              return e + 1;
            });
          }
        });
      }
      return [function (t, n) {
        var r = e(t);
        a.current.get(r);
        if (n) {
          a.current.set(r, n);
          c();
        } else {
          a.current.delete(r);
        }
      }, c, E.current, o];
    }(q, 0, 0), 4);
    var eo = ei[0];
    var e_ = ei[1];
    var ea = ei[2];
    var eE = ei[3];
    var el = reactCoreLibraryReexport.useMemo(function () {
      if (!j) {
        return {
          scrollHeight: undefined,
          start: 0,
          end: Z.length - 1,
          offset: undefined
        };
      }
      if (!B) {
        return {
          scrollHeight: J.current?.offsetHeight || 0,
          start: 0,
          end: Z.length - 1,
          offset: undefined
        };
      }
      var t;
      var n;
      var r;
      var i = 0;
      var o = Z.length;
      var _ = 0;
      for (; _ < o; _ += 1) {
        var a = q(Z[_]);
        var E = ea.get(a);
        var l = i + (E === undefined ? U : E);
        if (l >= V && t === undefined) {
          t = _;
          n = i;
        }
        if (l > V + m && r === undefined) {
          r = _;
        }
        i = l;
      }
      if (t === undefined) {
        t = 0;
        n = 0;
      }
      if (r === undefined) {
        r = Z.length - 1;
      }
      return {
        scrollHeight: i,
        start: t,
        end: r = Math.min(r + 1, Z.length),
        offset: n
      };
    }, [B, j, V, Z, eE, m]);
    var ec = el.scrollHeight;
    var eT = el.start;
    var eI = el.end;
    var eA = el.offset;
    et.current.start = eT;
    et.current.end = eI;
    var es = ec - m;
    var eu = reactCoreLibraryReexport.useRef(es);
    eu.current = es;
    var ed = V <= 0;
    var eg = V >= es;
    var eN = e0(ed, eg);
    var eS = e9((E = function (e) {
      ee(function (t) {
        return t + e;
      });
    }, l = reactCoreLibraryReexport.useRef(0), c = reactCoreLibraryReexport.useRef(null), T = reactCoreLibraryReexport.useRef(null), I = reactCoreLibraryReexport.useRef(false), A = e0(ed, eg), [function (e) {
      if (j) {
        frameDelayScheduler.scheduleDelayed.cancel(c.current);
        var t = e.deltaY;
        l.current += t;
        T.current = t;
        if (!A(t)) {
          if (!eq) {
            e.preventDefault();
          }
          c.current = frameDelayScheduler.scheduleDelayed(function () {
            var e = I.current ? 10 : 1;
            E(l.current * e);
            l.current = 0;
          });
        }
      }
    }, function (e) {
      if (j) {
        I.current = e.detail === T.current;
      }
    }]), 2);
    var eC = eS[0];
    var eL = eS[1];
    s = function (e, t) {
      return !eN(e, t) && (eC({
        preventDefault: function () {},
        deltaY: e
      }), true);
    };
    d = reactCoreLibraryReexport.useRef(false);
    N = reactCoreLibraryReexport.useRef(0);
    S = reactCoreLibraryReexport.useRef(null);
    C = reactCoreLibraryReexport.useRef(null);
    L = function (e) {
      if (d.current) {
        var t = Math.ceil(e.touches[0].pageY);
        var n = N.current - t;
        N.current = t;
        if (s(n)) {
          e.preventDefault();
        }
        clearInterval(C.current);
        C.current = setInterval(function () {
          if (!s(n *= e1, true) || Math.abs(n) <= 0.1) {
            clearInterval(C.current);
          }
        }, 16);
      }
    };
    p = function () {
      d.current = false;
      u();
    };
    M = function (e) {
      u();
      if (e.touches.length === 1 && !d.current) {
        d.current = true;
        N.current = Math.ceil(e.touches[0].pageY);
        S.current = e.target;
        S.current.addEventListener("touchmove", L);
        S.current.addEventListener("touchend", p);
      }
    };
    u = function () {
      if (S.current) {
        S.current.removeEventListener("touchmove", L);
        S.current.removeEventListener("touchend", p);
      }
    };
    reactCoreLibraryReexport.useLayoutEffect(function () {
      if (j) {
        X.current.addEventListener("touchstart", M);
      }
      return function () {
        X.current.removeEventListener("touchstart", M);
        u();
        clearInterval(C.current);
      };
    }, [j]);
    reactCoreLibraryReexport.useLayoutEffect(function () {
      function e(e) {
        if (j) {
          e.preventDefault();
        }
      }
      X.current.addEventListener("wheel", eC);
      X.current.addEventListener("DOMMouseScroll", eL);
      X.current.addEventListener("MozMousePixelScroll", e);
      return function () {
        X.current.removeEventListener("wheel", eC);
        X.current.removeEventListener("DOMMouseScroll", eL);
        X.current.removeEventListener("MozMousePixelScroll", e);
      };
    }, [j]);
    f = function () {
      var e;
      if ((e = $.current) !== null && e !== undefined) {
        e.delayHidden();
      }
    };
    O = reactCoreLibraryReexport.useRef();
    function ep(e) {
      if (e == null) {
        f();
        return;
      }
      frameDelayScheduler.scheduleDelayed.cancel(O.current);
      if (typeof e == "number") {
        ee(e);
      } else if (e && eZ(e) === "object") {
        var t;
        var n = e.align;
        t = "index" in e ? e.index : Z.findIndex(function (t) {
          return q(t) === e.key;
        });
        var r = e.offset;
        var i = r === undefined ? 0 : r;
        (function e(r, o) {
          if (!(r < 0) && X.current) {
            var _ = X.current.clientHeight;
            var a = false;
            var E = o;
            if (_) {
              var l = 0;
              var c = 0;
              var T = 0;
              var I = Math.min(Z.length, t);
              var A = 0;
              for (; A <= I; A += 1) {
                var s = q(Z[A]);
                c = l;
                var u = ea.get(s);
                l = T = c + (u === undefined ? U : u);
                if (A === t && u === undefined) {
                  a = true;
                }
              }
              var d = null;
              switch (o || n) {
                case "top":
                  d = c - i;
                  break;
                case "bottom":
                  d = T - _ + i;
                  break;
                default:
                  var g = X.current.scrollTop;
                  if (c < g) {
                    E = "top";
                  } else if (T > g + _) {
                    E = "bottom";
                  }
              }
              if (d !== null && d !== X.current.scrollTop) {
                ee(d);
              }
            }
            O.current = frameDelayScheduler.scheduleDelayed(function () {
              if (a) {
                e_();
              }
              e(r - 1, E);
            });
          }
        })(3);
      }
    }
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return {
        scrollTo: ep
      };
    });
    var eM = Z.slice(eT, eI + 1).map(function (e, t) {
      var n = h(e, eT + t, {});
      var r = q(e);
      return reactCoreLibraryReexport.createElement(eY, {
        key: r,
        setRef: function (t) {
          return eo(e, t);
        }
      }, n);
    });
    var ef = null;
    if (m) {
      ef = e4(e8({}, b === undefined || b ? "height" : "maxHeight", m), te);
      if (j) {
        ef.overflowY = "hidden";
        if (K) {
          ef.pointerEvents = "none";
        }
      }
    }
    return reactCoreLibraryReexport.createElement("div", e5({
      style: e4(e4({}, v), {}, {
        position: "relative"
      }),
      className: Q
    }, x), reactCoreLibraryReexport.createElement(k === undefined ? "div" : k, {
      className: `${D}-holder`,
      style: ef,
      ref: X,
      onScroll: function (e) {
        var t = e.currentTarget.scrollTop;
        if (t !== V) {
          ee(t);
        }
        if (H != null) {
          H(e);
        }
      }
    }, reactCoreLibraryReexport.createElement(eH, {
      prefixCls: D,
      height: ec,
      offset: eA,
      onInnerResize: e_,
      ref: J
    }, eM)), j && reactCoreLibraryReexport.createElement(eF, {
      ref: $,
      prefixCls: D,
      scrollTop: V,
      height: m,
      scrollHeight: ec,
      count: Z.length,
      onScroll: function (e) {
        ee(e);
      },
      onStartMove: function () {
        W(true);
      },
      onStopMove: function () {
        W(false);
      }
    }));
  });
  tt.displayName = "List";
  var staticStringIdentifier = require("static-string-identifier") /*id: 176934*/;
  var textHighlightChunks = require("text-highlight-chunks") /*id: 468009*/;
  var ti = require("react-context-selector") /*id: 65860*/.createContext({
    disabled: false
  });
  function to(e) {
    return reactCoreLibraryReexport.createElement("span", null, e);
  }
  function t_(e) {
    return reactCoreLibraryReexport.createElement("mark", null, e);
  }
  function ta(e) {
    var t = e.autoEscape;
    var n = e.caseSensitive;
    var r = e.findChunks;
    var i = e.sanitize;
    var o = e.searchWords;
    var _ = e.textToHighlight;
    var a = e.markRenderer;
    var E = a === undefined ? t_ : a;
    var l = e.textRenderer;
    var c = l === undefined ? to : l;
    var T = textHighlightChunks.findAll({
      autoEscape: t === undefined || t,
      caseSensitive: n !== undefined && n,
      findChunks: r,
      sanitize: i,
      searchWords: o,
      textToHighlight: _
    });
    return reactCoreLibraryReexport.createElement("span", null, T.map(function (e, t) {
      var n = _.substr(e.start, e.end - e.start);
      if (e.highlight) {
        var r = E(n);
        if (reactCoreLibraryReexport.isValidElement(r)) {
          return reactCoreLibraryReexport.cloneElement(r, {
            key: t
          });
        } else {
          return reactCoreLibraryReexport.cloneElement(t_(n), {
            key: t
          });
        }
      }
      var i = c(n);
      if (reactCoreLibraryReexport.isValidElement(i)) {
        return reactCoreLibraryReexport.cloneElement(i, {
          key: t
        });
      } else {
        return reactCoreLibraryReexport.cloneElement(to(n), {
          key: t
        });
      }
    }));
  }
  ti.Provider;
  var composeTypographyHeadlineClass = require("compose-typography-headline-class") /*id: 932304*/;
  var tl = ["value", "label", "labelRenderer", "disabled", "menuItemSelectedIcon", "title", "active", "className", "children"];
  function tc() {
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null);
  }
  Object.assign(tc, (E = {}, objectPropertySetter.setObjectProperty(E, f, true), objectPropertySetter.setObjectProperty(E, uiDefaultContextProvider.moduleVersion, "3.5.2-hotfix.0"), E));
  var tT = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var r = e.value;
    var i = e.label;
    var o = e.labelRenderer;
    var _ = e.disabled;
    var a = _ !== undefined && _;
    var E = e.menuItemSelectedIcon;
    var l = e.title;
    var c = e.active;
    var T = e.className;
    e.children;
    var A = objectOmitHelper_1.omitWithSymbols(e, tl);
    var s = uiConfigContextHooks.useClassName("select__list__item");
    var d = reactCoreLibraryReexport.useContext(Z);
    var N = d.valueSet;
    var S = d.toggle;
    var C = d.inputValue;
    var L = d.textOverflow;
    function M(e) {
      return reactCoreLibraryReexport.createElement(ta, {
        searchWords: [C],
        textToHighlight: e,
        markRenderer: function (e) {
          return reactCoreLibraryReexport.createElement("span", {
            className: conditionalClassnames.default(!a && s("__content-highlight"))
          }, e);
        }
      });
    }
    var f = N.has(r);
    if (o) {
      n = o(C);
    } else if (i) {
      n = i;
      if (typeof i == "string") {
        n = M(i);
      }
    } else {
      n = M(String(r));
    }
    return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      ref: t,
      className: conditionalClassnames.default(T, s(), f && s("-selected"), c && s("-active"), a && s("-disabled")),
      onClick: function () {
        S(r);
      },
      title: l
    }, A), reactCoreLibraryReexport.createElement(typographyComponent_2.Typography, {
      as: "div",
      className: s("__content"),
      lineClamp: L ? 1 : undefined,
      sx: [{
        props: {
          minWidth: staticStringIdentifier.staticStringId
        }
      }]
    }, n), reactCoreLibraryReexport.createElement("div", {
      className: s("__check")
    }, f ? E : null));
  });
  function tI() {
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null);
  }
  Object.assign(tI, (l = {}, objectPropertySetter.setObjectProperty(l, O, true), objectPropertySetter.setObjectProperty(l, uiDefaultContextProvider.moduleVersion, "3.5.2-hotfix.0"), l));
  var tA = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.isFirst;
    var r = e.label;
    var i = e.children;
    var o = uiConfigContextHooks.useClassName("select__list__group");
    return reactCoreLibraryReexport.createElement("div", {
      ref: t,
      className: conditionalClassnames.default(o(), n && o("-first"))
    }, reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(o("__title"), composeClassNamesUtil.composeClassNames(composeTypographyHeadlineClass.typographyHeadlineClass))
    }, r), i);
  });
  var udPickerPanelClassnameComposer = require("ud-picker-panel-classname-composer") /*id: 492869*/;
  var typographyBodyStyleConfig = require("typography-body-style-config") /*id: 607187*/;
  var td = ["className"];
  var tg = ["className", "fluid", "marginBlock"];
  var tN = composeClassNamesUtil.composeClassNames.compose(udPickerPanelClassnameComposer.pickerPanelClassName, typographyBodyStyleConfig.typographyBodyStyle);
  var tS = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.className;
    var r = objectOmitHelper_1.omitWithSymbols(e, td);
    var i = uiConfigContextHooks.useClassName("list__itemLike");
    return reactCoreLibraryReexport.createElement("div", objectAssignUtil.objectAssign({
      ref: t,
      className: conditionalClassnames.default(i(), composeClassNamesUtil.composeClassNames(tN), n)
    }, r));
  });
  var tC = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.className;
    var r = e.fluid;
    var i = e.marginBlock;
    var o = objectOmitHelper_1.omitWithSymbols(e, tg);
    var _ = uiConfigContextHooks.useClassName("list__divider");
    return reactCoreLibraryReexport.createElement("hr", objectAssignUtil.objectAssign({
      ref: t,
      className: conditionalClassnames.default(_(), n, r !== undefined && r && _("--fluid"), _(`--margin-${i === undefined ? "both" : i}`))
    }, o));
  });
  var reactCheckboxComponent = require("react-checkbox-component") /*id: 529491*/;
  var svgSpinLoadingIcon = require("svg-spin-loading-icon") /*id: 705191*/;
  function tM(e) {
    var t = e.className;
    var n = e.optionsLength;
    var r = e.filteredOptionsLength;
    var i = e.menu;
    var o = reactCoreLibraryReexport.useContext(Z);
    var _ = o.loading;
    var a = o.noOptionsContent;
    var E = o.notFoundContent;
    var l = o.dropdownRender;
    var c = o.inputValue;
    var T = M();
    var I = conditionalClassnames.default(T(), t);
    if (_) {
      return reactCoreLibraryReexport.createElement("div", {
        className: I
      }, reactCoreLibraryReexport.createElement("div", {
        className: T("__loading-container")
      }, reactCoreLibraryReexport.createElement(svgSpinLoadingIcon.SpinLoadingIcon, null)));
    } else if (n) {
      if (r) {
        if (domTypeUtils_1.isFunction(l)) {
          return reactCoreLibraryReexport.createElement("div", {
            className: I
          }, l(i));
        } else {
          return reactCoreLibraryReexport.createElement("div", {
            className: I
          }, i);
        }
      } else if (E !== null && c) {
        return reactCoreLibraryReexport.createElement("div", {
          className: I
        }, reactCoreLibraryReexport.createElement("div", {
          className: T("__empty")
        }, E));
      } else {
        return null;
      }
    } else if (a === null) {
      return null;
    } else {
      return reactCoreLibraryReexport.createElement("div", {
        className: I
      }, reactCoreLibraryReexport.createElement("div", {
        className: T("__empty")
      }, a));
    }
  }
  function tf(e) {
    return !e.group;
  }
  function tO(e) {
    var t;
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
      return true;
    };
    var r = iteratorAdapterUtil.createIterator(e);
    try {
      for (r.s(); !(t = r.n()).done;) {
        var i = t.value;
        if (tf(i) && !i.option.disabled && n(i)) {
          return i.option;
        }
      }
    } catch (e) {
      r.e(e);
    } finally {
      r.f();
    }
  }
  var tR = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var r;
    var i;
    var o;
    var _;
    var a;
    var E;
    var l;
    var c;
    var T;
    var u;
    var d;
    var N;
    var S;
    var L;
    var f;
    var O;
    var D;
    var U;
    var b;
    var v;
    var h;
    var G;
    var H;
    var x;
    var j;
    var B;
    var V;
    var F;
    var Y;
    var K;
    var Q;
    var X;
    var J;
    var $;
    var q;
    var ee;
    var et;
    var er;
    var ei;
    var eo;
    var e_;
    var ea;
    var eE;
    var el;
    var ec;
    var eT;
    var eI;
    var eA;
    var es = e.options;
    var eu = e.filterOption;
    var ed = e.defaultActiveFirstOption;
    var eg = e.menuItemSelectedIcon;
    var eN = e.listHeight;
    var eS = e.onPopupScroll;
    var eC = e.itemHeight;
    var eL = e.virtual;
    var ep = e.onMouseEnter;
    var eM = e.filterSort;
    var ef = e.debounceTime;
    var eO = e.showSelectAll;
    var eR = e.onActiveOptionChange;
    var eD = M();
    n = {
      ref: t,
      options: es,
      filterOption: eu,
      defaultActiveFirstOption: ed,
      filterSort: eM,
      debounceTime: ef === undefined ? 0 : ef,
      onActiveOptionChange: eR
    };
    i = (r = reactCoreLibraryReexport.useContext(Z)).inputValue;
    o = r.overlayVisible;
    _ = r.valueSet;
    a = r.toggle;
    E = r.listRef;
    l = r.compositionStatusRef;
    c = r.set;
    T = r.disabled;
    d = (u = n.defaultActiveFirstOption) === undefined || u;
    N = n.options;
    S = n.filterOption;
    L = n.filterSort;
    f = n.debounceTime;
    O = n.onActiveOptionChange;
    D = reactIntervalStateHook.useIntervalState(i, f);
    U = iterableToArrayUtil_1_1.iterableToArray(D, 1)[0];
    b = reactCoreLibraryReexport.useMemo(function () {
      function e(e, t) {
        if (S === true) {
          return R(e, t);
        } else {
          return S === false || S(e, t);
        }
      }
      var t = L && U;
      var n = N.map(function (n) {
        if (!("options" in n) && !e(U, n)) {
          return null;
        }
        if ("options" in n) {
          var r = n.options.filter(function (t) {
            return e(U, t);
          });
          if (r.length) {
            return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, n), {}, {
              options: t ? r.sort(L) : r
            });
          } else {
            return null;
          }
        }
        return n;
      }).filter(domTypeUtils_1.isDefined);
      if (t) {
        n.sort(L);
      }
      var r;
      var i = [];
      var o = iteratorAdapterUtil.createIterator(n);
      try {
        for (o.s(); !(r = o.n()).done;) {
          var _ = r.value;
          if ("options" in _) {
            i.push({
              group: true,
              option: _
            });
            var a;
            var E = iteratorAdapterUtil.createIterator(_.options);
            try {
              for (E.s(); !(a = E.n()).done;) {
                var l = a.value;
                i.push({
                  group: false,
                  option: l
                });
              }
            } catch (e) {
              E.e(e);
            } finally {
              E.f();
            }
          } else {
            i.push({
              group: false,
              option: _
            });
          }
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
      return i;
    }, [S, L, U, N]);
    v = reactRefEffectUtils.useUpdatedRef(b);
    X = (G = (h = {
      set: c,
      flattenOptions: b,
      valueSet: _
    }).flattenOptions, H = h.valueSet, x = h.set, j = G.filter(function (e) {
      return !e.group;
    }).map(function (e) {
      return e.option;
    }), V = (B = reactCoreLibraryReexport.useMemo(function () {
      if (!j.length) {
        return {
          isSelectAllDisabled: true,
          selectAllCount: 0,
          hasSelectedAll: false
        };
      }
      var e = 0;
      var t = 0;
      var n = false;
      var r = true;
      j.forEach(function (i) {
        if (!i.disabled) {
          r = false;
        }
        var o = H.has(i.value);
        if (o) {
          t++;
        }
        if (o || !i.disabled) {
          e++;
        }
        if (!o && !i.disabled) {
          n = true;
        }
      });
      return {
        isSelectAllDisabled: r,
        selectAllCount: e,
        hasSelectedAll: !n && t > 0
      };
    }, [j, H])).isSelectAllDisabled, F = B.selectAllCount, Y = B.hasSelectedAll, K = reactCoreLibraryReexport.useCallback(function () {
      var e;
      var t = new Set(H);
      var n = j.filter(function (e) {
        return !e.disabled;
      }).map(function (e) {
        return e.value;
      });
      var r = iteratorAdapterUtil.createIterator(n);
      try {
        for (r.s(); !(e = r.n()).done;) {
          var i = e.value;
          if (Y) {
            t.delete(i);
          } else {
            t.add(i);
          }
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
      var o = {
        type: Y ? k.DeSelectAll : k.SelectAll,
        payload: n
      };
      x(arrayIterableSliceUtil.sliceArrayIterable(t), {
        action: o
      });
    }, [Y, j, H, x]), Q = {
      hasSelectedAll: Y,
      onToggleSelectAll: K,
      isSelectAllDisabled: V,
      selectAllCount: F
    }).onToggleSelectAll;
    J = Q.hasSelectedAll;
    $ = Q.isSelectAllDisabled;
    q = Q.selectAllCount;
    ee = reactCoreLibraryReexport.useRef(null);
    et = function (e, t) {
      var n = ee.current;
      if (n) {
        var r = -1;
        if (typeof e == "number") {
          r = e;
        } else if (e.type === "option") {
          r = b.findIndex(function (t) {
            return !t.group && t.option.value === e.value;
          });
        } else if (e.type === "group") {
          r = b.findIndex(function (t) {
            return t.group && t.option.key === e.key;
          });
        }
        if (r !== -1) {
          n.scrollTo(objectPropertyAssign.assignObject({
            index: r
          }, t));
        }
      }
    };
    er = reactCoreLibraryReexport.useMemo(function () {
      return tO(b);
    }, [b]);
    ei = reactRefEffectUtils.useUpdatedRef(er);
    eo = reactCoreLibraryReexport.useMemo(function () {
      return tO(b, function (e) {
        return _.has(e.option.value);
      });
    }, [b, _]);
    e_ = reactCoreLibraryReexport.useMemo(function () {
      if (d) {
        return eo ?? er;
      }
    }, [d, er, eo]);
    ea = reactCoreLibraryReexport.useState(e_);
    el = (eE = iterableToArrayUtil_1_1.iterableToArray(ea, 2))[0];
    ec = eE[1];
    eT = reactCoreLibraryReexport.useCallback(function (e) {
      if (O) {
        O(e.option?.value, e);
      }
      ec(e.option);
    }, [O]);
    eI = reactRefEffectUtils.useEventCallback(eT);
    reactRefEffectUtils.useEffectOnce(function () {
      et(b.findIndex(function (e) {
        return tf(e) && e.option.value === (el == null ? undefined : el.value);
      }));
    });
    reactCoreLibraryReexport.useImperativeHandle(mergeReactRefs.mergeRefs(E, n.ref), function () {
      return {
        onKeyDown: function (e) {
          var t;
          if (!e.isDefaultPrevented()) {
            switch (e.key) {
              case keyboardKeys.keyboardKeys.Down:
              case keyboardKeys.keyboardKeys.ArrowDown:
                t = false;
                n();
                break;
              case keyboardKeys.keyboardKeys.Up:
              case keyboardKeys.keyboardKeys.ArrowUp:
                t = true;
                n();
                break;
              case keyboardKeys.keyboardKeys.Enter:
                if (el && o && !l.current) {
                  e.preventDefault();
                  a(el.value);
                }
            }
          }
          function n() {
            var e = function (e, t, n) {
              var r = t.findIndex(function (t) {
                return tf(t) && !t.option.disabled && t.option.value === (e == null ? undefined : e.value);
              });
              if (r === -1) {
                if (n) {
                  return tO(t);
                } else {
                  return function (e) {
                    var t = e.filter(tf).filter(function (e) {
                      return !e.option.disabled;
                    }).pop();
                    if (t) {
                      return t.option;
                    }
                  }(t);
                }
              }
              var i = r;
              var o = 0;
              for (; o < t.length; o += 1, i = n ? i + 1 > t.length - 1 ? 0 : i + 1 : i - 1 < 0 ? t.length - 1 : i - 1) {
                if (i !== r) {
                  var _ = t[i];
                  if (tf(_) && !_.option.disabled) {
                    return _.option;
                  }
                }
              }
            }(el, b, !t);
            if (e) {
              eT({
                option: e,
                action: t ? w.ArrowUp : w.ArrowDown
              });
              et(b.findIndex(function (t) {
                return tf(t) && t.option.value === e.value;
              }));
            }
          }
        },
        onKeyUp: emptyExportFunction.emptyFunction,
        scrollTo: et,
        scrollIntoView: et,
        setActiveOption: function (e) {
          eT({
            option: b.filter(tf).find(function (t) {
              return t.option.value === e;
            })?.option,
            action: w.Manual
          });
        }
      };
    });
    eA = reactCoreLibraryReexport.useRef(true);
    reactCoreLibraryReexport.useEffect(function () {
      if (eA.current) {
        eA.current = false;
        return;
      }
      eI({
        option: tO(v.current, function (e) {
          return e.option.value === ei.current?.value;
        }),
        action: w.AfterSearch
      });
    }, [ei, v, U, eI]);
    var eP = {
      activeOption: el,
      setActiveOption: eT,
      rcVirtualListRef: ee,
      flattenOptions: b,
      onToggleSelectAll: X,
      hasSelectedAll: J,
      isSelectAllDisabled: $,
      selectAllCount: q,
      disabled: T
    };
    var eU = eP.activeOption;
    var ev = eP.setActiveOption;
    var ey = eP.rcVirtualListRef;
    var eh = eP.flattenOptions;
    var eG = eP.hasSelectedAll;
    var ew = eP.onToggleSelectAll;
    var ek = eP.isSelectAllDisabled;
    var eH = eP.selectAllCount;
    var ex = eP.disabled;
    var ej = uiConfigContextHooks.useLocale();
    var eB = reactCoreLibraryReexport.createElement("div", {
      className: eD("__menu")
    }, reactCoreLibraryReexport.createElement(tt, {
      itemKey: function (e) {
        if (e.group) {
          return `group-${e.option.key}`;
        } else {
          return P(e.option.value);
        }
      },
      ref: ey,
      data: eh,
      height: eN - 6 - 2,
      itemHeight: eC,
      fullHeight: false,
      onScroll: eS,
      virtual: eL,
      onMouseEnter: ep
    }, function (e, t) {
      if (e.group) {
        return reactCoreLibraryReexport.createElement(tA, objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e.option), {}, {
          isFirst: t === 0
        }));
      }
      var n = e.option;
      return reactCoreLibraryReexport.createElement("div", null, reactCoreLibraryReexport.createElement(tT, objectAssignUtil.objectAssign({
        active: n.value === (eU == null ? undefined : eU.value),
        key: P(n.value),
        menuItemSelectedIcon: eg
      }, n, {
        onMouseMove: function () {
          return ev({
            option: n,
            action: w.MouseMove
          });
        }
      })));
    }), eO && reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(tC, {
      fluid: true
    }), reactCoreLibraryReexport.createElement(tS, null, reactCoreLibraryReexport.createElement(reactCheckboxComponent.Checkbox, {
      disabled: ex || ek,
      checked: eG,
      onChange: ew
    }, ej.global.selectAll, " (", eH, ")"))));
    return reactCoreLibraryReexport.createElement(tM, {
      optionsLength: es.length,
      filteredOptionsLength: eh.length,
      menu: eB
    });
  });
  var tD = ["children"];
  var tP = ["children"];
  var tm = ["options", "filterOption", "defaultActiveFirstOption", "menuItemSelectedIcon", "listHeight", "onPopupScroll", "virtual", "itemHeight", "filterSort", "debounceTime", "showSelectAll", "onActiveOptionChange"];
  _ = {
    selectorCssScope: "select",
    dropdownCssScope: "select",
    defaultOptionLabelProp: function (e) {
      var r;
      return ((r = e.labelRenderer) === null || r === undefined ? undefined : r.call(e, "")) ?? e.label ?? e.value;
    }
  };
  var tU = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = uiConfigContextHooks.useLocale();
    var r = uiConfigContextHooks.useComponentSize();
    var i = uiConfigContextHooks.useSizeContext();
    var o = uiConfigContextHooks.usePopupContainer();
    var a = e.placeholder;
    var E = a === undefined ? n.global.placeholder : a;
    var l = e.allowClear;
    var T = e.style;
    var I = e.className;
    var u = e.size;
    var d = u === undefined ? i || r : u;
    var N = e.bordered;
    var S = e.dropdownMatchSelectWidth;
    var L = S !== undefined && S;
    var M = e.error;
    var f = e.maxTagCount;
    var O = e.overlayNode;
    var R = e.getPopupContainer;
    var P = e.showArrow;
    var w = e.maxTagRenderer;
    var j = e.clearIcon;
    var Q = j === undefined ? reactCoreLibraryReexport.createElement(emptyFilledIconComponent.EmptyFilledIcon, null) : j;
    var X = e.suffixIcon;
    var J = X === undefined ? reactCoreLibraryReexport.createElement(iconDownBoldOutlined.DownBoldOutlined, null) : X;
    var $ = e.dropdownClassName;
    var ee = e.dropdownStyle;
    var ei = e.triggerElement;
    var eo = e.onMouseEnter;
    var e_ = e.onMouseLeave;
    var ea = e.multipleSelectorMaxHeight;
    var eE = ea === undefined ? 188 : ea;
    e.optionFilterProp;
    e.removeIcon;
    var el = e.placement;
    var ec = el === undefined ? "bottom" : el;
    var eI = e.forceRender;
    var eA = e.destroyOnHide;
    var es = domTypeUtils_1.isDefined(ei);
    var eu = reactCoreLibraryReexport.useState(null);
    var ed = iterableToArrayUtil_1_1.iterableToArray(eu, 2);
    var eg = ed[0];
    var eN = ed[1];
    var eS = useElementRectHook.useElementRect();
    var eC = iterableToArrayUtil_1_1.iterableToArray(eS, 2);
    var eL = eC[0];
    var ep = eC[1].width;
    var eM = reactCoreLibraryReexport.useState(null);
    var ef = iterableToArrayUtil_1_1.iterableToArray(eM, 2);
    var eb = ef[0];
    var ev = ef[1];
    var ey = function (e) {
      var t;
      var n;
      var r;
      var i;
      var o;
      var _;
      var a;
      var E;
      var l;
      var c;
      var T;
      var I;
      var u;
      var d;
      var N;
      var S;
      var L;
      var M;
      var f;
      var O;
      var R;
      var P;
      var U;
      var b;
      var v;
      var w;
      var j;
      var Q;
      var Z;
      var X;
      var J;
      var $;
      var ee;
      var et;
      var ei;
      var eo;
      var e_;
      var ea;
      var eE;
      var el;
      var ec;
      var eT;
      var eI;
      var eA;
      var es;
      var eu;
      var ed;
      var eg;
      var eN;
      var eS;
      var eC;
      var eL;
      var ep;
      var eM;
      var ef;
      var eO;
      var eR;
      var eD;
      var eP;
      var em;
      var eU;
      var eb;
      var ev;
      var ey;
      var eh;
      var eG;
      var ew;
      var ek;
      var eH;
      var ex;
      var ej;
      var eB;
      var ez;
      var eF = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        dropdownCssScope: "select",
        selectorCssScope: "select"
      };
      var eY = uiConfigContextHooks.useLocale();
      var eK = e.open;
      var eW = e.onDropdownVisibleChange;
      var eQ = e.value;
      var eZ = e.defaultValue;
      var eX = e.onClear;
      var eJ = e.onSelect;
      var e$ = e.onDeselect;
      var eq = e.onSearch;
      var e0 = e.onFocus;
      var e1 = e.onBlur;
      var e2 = e.searchValue;
      var e5 = e.tokenSeparators;
      var e3 = e.tabIndex;
      var e4 = e.disabled;
      var e8 = e4 !== undefined && e4;
      var e9 = e.autoFocus;
      var e6 = e.defaultOpen;
      var e7 = e.autoClearSearchValue;
      var te = e7 === undefined || e7;
      var tt = e.options;
      var tn = e.onKeyDown;
      var tr = e.onKeyUp;
      var ti = e.size;
      var to = e.tagRender;
      var t_ = e.tagRenderer;
      var ta = e.id;
      var tE = e.notFoundContent;
      var tl = tE === undefined ? eY.global.notFoundContent : tE;
      var tc = e.dropdownRender;
      var tT = tc === undefined ? identityFunctionUtil_1.identity : tc;
      var tI = e.loading;
      var tA = e.dropdownMatchSelectWidth;
      var ts = e.mode === "multiple";
      var tu = e.showSearch;
      var td = tu === undefined ? ts : tu;
      var tg = e.noOptionsContent;
      var tN = tg === undefined ? td ? null : eY.global.noOptions : tg;
      n = (t = {
        value: eQ,
        defaultValue: eZ,
        options: tt,
        valueInProps: "value" in e
      }).defaultValue;
      r = t.value;
      i = t.options;
      o = t.valueInProps;
      _ = useCachedValueHook.useCachedValue(function () {
        return new Map();
      });
      a = reactCoreLibraryReexport.useMemo(function () {
        return i.reduce(function (e, t) {
          var n = e.optionMap;
          n.set(t.value, t);
          return {
            optionMap: n
          };
        }, {
          optionMap: new Map()
        });
      }, [i]).optionMap;
      E = reactCoreLibraryReexport.useCallback(function (e) {
        var t;
        var n = iteratorAdapterUtil.createIterator(e);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var r = t.value;
            _.set(r, D(r, a, _));
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
      }, [a, _]);
      l = useControlledStateHook_1.useControlledState(new Set(B(n)), new Set(B(r)), {
        onChange: E,
        isControlledOverride: o
      });
      T = (c = iterableToArrayUtil_1_1.iterableToArray(l, 2))[0];
      I = c[1];
      reactCoreLibraryReexport.useMemo(function () {
        E(T);
      }, [E, T]);
      var tS = reactCoreLibraryReexport.useMemo(function () {
        return {
          valueSet: T,
          setValueSet: I,
          optionMap: a,
          getOption: function (e) {
            return D(e, a, _);
          }
        };
      }, [a, _, I, T]);
      var tC = tS.valueSet;
      var tL = tS.setValueSet;
      var tp = tS.optionMap;
      var tM = tS.getOption;
      d = (u = {
        searchValue: e2,
        onSearch: eq
      }).searchValue;
      N = u.onSearch;
      S = useControlledStateHook_1.useControlledState("", d);
      M = (L = iterableToArrayUtil_1_1.iterableToArray(S, 2))[0];
      f = L[1];
      var tf = {
        inputValue: M,
        setInputValue: reactRefEffectUtils.useEventCallback(function (e, t = {
          action: G.Input
        }) {
          f(e, function (e) {
            if (domTypeUtils_1.isFunction(N)) {
              N(e, t);
            }
          });
        })
      };
      var tO = tf.inputValue;
      var tR = tf.setInputValue;
      var tD = reactCoreLibraryReexport.useRef(null);
      var tP = reactCoreLibraryReexport.useState(false);
      var tm = iterableToArrayUtil_1_1.iterableToArray(tP, 2);
      var tU = tm[0];
      var tb = tm[1];
      R = (O = {
        disabled: e8,
        defaultOpen: e6 !== undefined && e6,
        open: eK,
        onDropdownVisibleChange: eW,
        setInputting: tb
      }).disabled;
      P = O.defaultOpen;
      U = O.open;
      b = O.onDropdownVisibleChange;
      v = O.setInputting;
      w = reactRefEffectUtils.useEventCallback(function (e) {
        if (domTypeUtils_1.isFunction(b)) {
          b(e);
        }
      });
      j = useControlledStateHook_1.useControlledState(P, U, {
        onChange: w
      });
      Z = (Q = iterableToArrayUtil_1_1.iterableToArray(j, 2))[0];
      X = Q[1];
      J = reactCoreLibraryReexport.useCallback(function (e) {
        if (!R) {
          if (e !== undefined) {
            X(e);
          } else {
            X(function (e) {
              return !e;
            });
          }
        }
      }, [X, R]);
      $ = reactCoreLibraryReexport.useState();
      et = (ee = iterableToArrayUtil_1_1.iterableToArray($, 2))[0];
      ei = ee[1];
      if (Z !== et) {
        v(Z);
        ei(Z);
      }
      var tv = {
        overlayVisible: Z,
        setOverlayVisible: J
      };
      var ty = tv.overlayVisible;
      var th = tv.setOverlayVisible;
      e_ = (eo = {
        autoFocus: e9 !== undefined && e9,
        onBlur: e1,
        onFocus: e0,
        disabled: e8,
        overlayVisible: ty,
        setOverlayVisible: th,
        setInputValue: tR
      }).disabled;
      ea = eo.autoFocus;
      eE = eo.onFocus;
      el = eo.onBlur;
      ec = eo.setOverlayVisible;
      eT = eo.overlayVisible;
      eI = eo.setInputValue;
      eA = reactRefEffectUtils.useEventCallback(ec);
      es = reactRefEffectUtils.useEventCallback(el);
      eu = reactCoreLibraryReexport.useRef(null);
      ed = reactCoreLibraryReexport.useRef(false);
      eg = reactCoreLibraryReexport.useState(false);
      eS = (eN = iterableToArrayUtil_1_1.iterableToArray(eg, 2))[0];
      eC = eN[1];
      ep = (eL = useCachedValueHook.useCachedValue(function () {
        return function (e, t = 250) {
          var n = null;
          function r() {
            if (n !== null) {
              window.clearTimeout(n);
              n = null;
            }
          }
          return {
            call: function () {
              var i = arguments.length;
              var o = Array(i);
              var _ = 0;
              for (; _ < i; _++) {
                o[_] = arguments[_];
              }
              r();
              n = window.setTimeout(function () {
                return e.apply(undefined, o);
              }, t);
            },
            cancel: r
          };
        }(function (e) {
          if (domTypeUtils_1.isFunction(es)) {
            es(e);
          }
          eA(false);
          eI("", {
            action: G.Blur
          });
        });
      })).call;
      eM = eL.cancel;
      ef = reactCoreLibraryReexport.useCallback(function (e) {
        eM();
        if (domTypeUtils_1.isFunction(eE) && !ed.current && e) {
          eE(e);
        }
        eC(true);
        ed.current = true;
      }, [eE, eM]);
      eO = reactCoreLibraryReexport.useCallback(function (e) {
        eC(false);
        ed.current = false;
        if (e.target === eu.current) {
          ep(e);
        }
      }, [ep]);
      reactRefEffectUtils.useEffectOnce(function () {
        if (ea || eT) {
          var e;
          eC(true);
          if ((e = eu.current) !== null && e !== undefined) {
            e.focus();
          }
        }
      });
      var tG = {
        focus: reactCoreLibraryReexport.useCallback(function (e) {
          var t;
          if (!e_) {
            if ((t = eu.current) !== null && t !== undefined) {
              t.focus(e);
            }
          }
        }, [e_]),
        blur: reactCoreLibraryReexport.useCallback(function () {
          var e;
          if (!e_) {
            if ((e = eu.current) !== null && e !== undefined) {
              e.blur();
            }
          }
        }, [e_]),
        focusState: eS,
        inputRef: eu,
        focusRef: ed,
        onContainerFocus: ef,
        onContainerBlur: eO,
        cancelDelayCloseOverlay: eM
      };
      var tw = tG.focusState;
      var tk = tG.inputRef;
      var tH = tG.onContainerFocus;
      var tx = tG.onContainerBlur;
      var tj = tG.focus;
      var tB = tG.blur;
      var tz = tG.cancelDelayCloseOverlay;
      var tV = reactIntervalStateHook.useIntervalState(tw, 0);
      var tF = iterableToArrayUtil_1_1.iterableToArray(tV, 1)[0];
      var tY = reactCoreLibraryReexport.useCallback(function () {
        if (!ts || te) {
          tR("", {
            action: G.AutoClear
          });
        }
      }, [te, tR, ts]);
      var tK = reactCoreLibraryReexport.useCallback(function (e) {
        tY();
        if (e.type === k.Select) {
          if (domTypeUtils_1.isFunction(eJ)) {
            eJ(e.payload, {
              option: tM(e.payload)
            });
          }
        } else if (e.type === k.DeSelect && domTypeUtils_1.isFunction(e$)) {
          e$(e.payload, {
            option: tM(e.payload)
          });
        }
      }, [tY, tM, e$, eJ]);
      var tW = reactRefEffectUtils.useEventCallback(function (t, n) {
        tY();
        if (domTypeUtils_1.isFunction(e.onChange)) {
          if (e.mode === "multiple") {
            var r = {
              option: t.map(function (e) {
                return tM(e);
              }),
              action: n
            };
            e.onChange(t, r);
            return;
          }
          var i = t.map(function (e) {
            return tM(e);
          })[0];
          e.onChange(i == null ? undefined : i.value, {
            option: i,
            action: n
          });
        }
      });
      var tQ = reactCoreLibraryReexport.useCallback(function (e, t = {}) {
        if ([e].filter(function (e) {
          var t = tp.get(e);
          if (t) {
            return !er(t, e8);
          } else {
            return !e8;
          }
        }).length) {
          var n = {
            type: k.Toggle,
            payload: undefined
          };
          tL(function (r) {
            if ("closeOverlay" in t) {
              if (t.closeOverlay) {
                th(false);
              }
            } else if (!ts) {
              th(false);
            }
            setTimeout(function () {
              var e;
              if ((e = tk.current) !== null && e !== undefined) {
                e.focus();
              }
            });
            if (tC.has(e) && ts) {
              var i;
              tK(n = {
                type: k.DeSelect,
                payload: e
              });
              return ((i = new Set(r)).delete(e), {
                nextState: i
              }).nextState;
            }
            if (tp.get(e)) {
              tK(n = {
                type: k.Select,
                payload: e
              });
              return function (e, t, n) {
                if (!e || n.has(e.value)) {
                  return {
                    nextState: n
                  };
                }
                if (t) {
                  var r = new Set(n);
                  r.add(e.value);
                  return {
                    nextState: r
                  };
                }
                return {
                  nextState: new Set([e.value])
                };
              }(tp.get(e), ts, r).nextState;
            } else {
              return r;
            }
          }, function (e) {
            tW(arrayIterableSliceUtil.sliceArrayIterable(e.keys()), n);
          });
        }
      }, [tW, e8, tK, tk, ts, tp, th, tL, tC]);
      var tZ = reactCoreLibraryReexport.useCallback(function (e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!ts && e.length > 1) {
          throw Error("Selection in single mode can not set _value which length gt 1");
        }
        if ("closeOverlay" in n) {
          if (n.closeOverlay) {
            th(false);
          }
        } else if (!ts) {
          th(false);
        }
        setTimeout(function () {
          var e;
          if ((e = tk.current) !== null && e !== undefined) {
            e.focus();
          }
        });
        if (!ts && n.action?.type === k.DeSelect) {
          if (n.action) {
            tK(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, n.action), {}, {
              type: k.Select
            }));
          }
          return;
        }
        tL(function () {
          return e.reduce(function (e, t) {
            if (tM(t)) {
              e.add(t);
            }
            return e;
          }, new Set());
        }, function (e) {
          if (n.action) {
            tK(n.action);
          }
          tW(arrayIterableSliceUtil.sliceArrayIterable(e.keys()), n.action ?? {
            type: k.Set,
            payload: undefined
          });
        });
      }, [tW, tM, tK, tk, ts, th, tL]);
      var tX = reactCoreLibraryReexport.useCallback(function () {
        tL(function () {
          return new Set();
        }, function (e) {
          th(false);
          setTimeout(function () {
            var e;
            if ((e = tk.current) !== null && e !== undefined) {
              e.focus();
            }
          });
          if (eX != null) {
            eX();
          }
          tW(arrayIterableSliceUtil.sliceArrayIterable(e.keys()), {
            type: k.Clear,
            payload: undefined
          });
        });
      }, [tW, tk, eX, th, tL]);
      var tJ = reactCoreLibraryReexport.useCallback(function () {
        var e = arrayIterableSliceUtil.sliceArrayIterable(tC.keys());
        var t = e[e.length - 1];
        if (t) {
          tQ(t);
        }
      }, [tQ, tC]);
      eD = (eR = {
        multiple: ts,
        tokenSeparators: e5,
        inputValue: tO,
        setInputValue: tR,
        set: tZ,
        deselectLast: tJ,
        overlayVisible: ty,
        setOverlayVisible: th,
        onKeyDown: tn,
        onKeyUp: tr,
        listRef: tD,
        setInputting: tb,
        getOption: tM
      }).multiple;
      eP = eR.tokenSeparators;
      em = eR.inputValue;
      eU = eR.setInputValue;
      eb = eR.set;
      ev = eR.deselectLast;
      ey = eR.setOverlayVisible;
      eh = eR.listRef;
      eG = eR.onKeyDown;
      ew = eR.onKeyUp;
      ek = eR.overlayVisible;
      eH = eR.setInputting;
      ex = eR.getOption;
      ej = reactCoreLibraryReexport.useRef(null);
      eB = reactCoreLibraryReexport.useRef(false);
      ez = reactCoreLibraryReexport.useMemo(function () {
        return (eP || []).some(function (e) {
          return ["\n", "\r\n"].includes(e);
        });
      }, [eP]);
      var t$ = {
        inputValue: em,
        onInputChange: function (e) {
          var t = e.target.value;
          if (ez && ej.current && /[\r\n]/.test(ej.current)) {
            var n = ej.current.replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
            t = t.replace(n, ej.current);
          }
          ej.current = null;
          var r = eB.current ? null : function (e, t) {
            if (!t || !t.length) {
              return null;
            }
            var n = false;
            var r = function e(t, r) {
              var i = arrayUtilityHelper.returnArray(r) || iterableToArrayUtil_1.iterableToArray(r) || sliceIterableUtil.sliceIterable(r) || destructuringErrorHelper.throwNonIterableError();
              var o = i[0];
              var _ = i.slice(1);
              if (!o) {
                return [t];
              }
              var a = t.split(o);
              n = n || a.length > 1;
              return a.reduce(function (t, n) {
                return [].concat(arrayIterableSliceUtil.sliceArrayIterable(t), arrayIterableSliceUtil.sliceArrayIterable(e(n, _)));
              }, []).filter(function (e) {
                return e;
              });
            }(e, t);
            if (n) {
              return r;
            } else {
              return null;
            }
          }(t, eP);
          if (eD && r) {
            t = "";
            eb(r.map(function (e) {
              var t = ex(e);
              if (t == null) {
                return undefined;
              } else {
                return t.value;
              }
            }).filter(domTypeUtils_1.isDefined));
            return;
          }
          eU(t, {
            action: G.Input
          });
        },
        onInputCompositionStart: function () {
          eB.current = true;
        },
        onInputCompositionEnd: function () {
          eB.current = false;
        },
        onInputPaste: function (e) {
          var t = e.clipboardData.getData("text");
          ej.current = t;
        },
        onInternalKeyDown: function (e) {
          if (domTypeUtils_1.isFunction(eG)) {
            eG(e);
          }
          if (ek && eh.current) {
            eh.current.onKeyDown(e);
          }
          if (!e.defaultPrevented) {
            eH(true);
            if (eD && e.key === keyboardKeys.keyboardKeys.Backspace && em === "") {
              ev();
            }
            if ([keyboardKeys.keyboardKeys.Up, keyboardKeys.keyboardKeys.Down, keyboardKeys.keyboardKeys.ArrowUp, keyboardKeys.keyboardKeys.ArrowDown, keyboardKeys.keyboardKeys.Enter].includes(e.key)) {
              e.preventDefault();
            }
            if (e.key === keyboardKeys.keyboardKeys.Escape) {
              ey(false);
              return;
            }
            if (![keyboardKeys.keyboardKeys.Shift, keyboardKeys.keyboardKeys.Tab, keyboardKeys.keyboardKeys.Escape].includes(e.key)) {
              ey(true);
            }
          }
        },
        onInternalKeyUp: function (e) {
          if (domTypeUtils_1.isFunction(ew)) {
            ew(e);
          }
          if (ek && eh.current) {
            eh.current.onKeyUp(e);
          }
        },
        compositionStatusRef: eB
      };
      var tq = t$.onInputChange;
      var t0 = t$.onInputCompositionEnd;
      var t1 = t$.onInputCompositionStart;
      var t2 = t$.onInputPaste;
      var t5 = t$.onInternalKeyUp;
      var t3 = t$.onInternalKeyDown;
      var t4 = t$.compositionStatusRef;
      var t8 = uiConfigContextHooks.useClassName(`${eF.selectorCssScope}`);
      var t9 = uiConfigContextHooks.useClassName(`${eF.dropdownCssScope}__dropdown`);
      var t6 = uiConfigContextHooks.useClassName(`${eF.selectorCssScope}__selector`);
      var t7 = e.optionLabelProp;
      if (t7 === "children" || t7 === undefined) {
        t7 = eF.defaultOptionLabelProp;
      }
      var ne = reactCoreLibraryReexport.useCallback(function (e) {
        var n = tM(e);
        if (domTypeUtils_1.isFunction(t7)) {
          return t7(n);
        } else {
          return n[t7 ?? "label"];
        }
      }, [tM, t7]);
      return {
        focusState: tw,
        disabled: e8,
        blur: tB,
        focus: tj,
        inputRef: tk,
        listRef: tD,
        inputValue: tO,
        overlayVisible: ty,
        multiple: ts,
        valueSet: tC,
        getOption: tM,
        set: tZ,
        select: tQ,
        deselect: tQ,
        toggle: tQ,
        clear: tX,
        deselectLast: tJ,
        setInputValue: tR,
        setOverlayVisible: th,
        selectorCssScope: t6,
        dropdownCssScope: t9,
        onContainerFocus: tH,
        onContainerBlur: tx,
        onInputChange: tq,
        onInputCompositionEnd: t0,
        onInputCompositionStart: t1,
        onInputPaste: t2,
        onInternalKeyDown: t3,
        onInternalKeyUp: t5,
        compositionStatusRef: t4,
        showSearch: td,
        tabIndex: e3,
        selectorLabelRenderer: ne,
        cssScope: t8,
        size: ti,
        cancelDelayCloseOverlay: tz,
        tagRenderer: to ?? t_ ?? q,
        id: ta,
        inputting: td && tF && tU,
        setInputting: tb,
        noOptionsContent: tN,
        notFoundContent: tl,
        dropdownRender: tT,
        loading: tI !== undefined && tI,
        textOverflow: tA === true
      };
    }(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
      size: d
    }), _);
    var eh = ey.focusState;
    var eG = ey.overlayVisible;
    var ew = ey.focus;
    var ek = ey.blur;
    var eH = ey.setOverlayVisible;
    var ex = ey.dropdownCssScope;
    var ej = ey.cssScope;
    var eB = ey.inputRef;
    var ez = ey.cancelDelayCloseOverlay;
    var eV = ey.setInputting;
    domElementEventUtils.useOutsideListener("mousedown", {
      listener: reactCoreLibraryReexport.useCallback(function () {
        eH(false);
        ek();
      }, [ek, eH]),
      elements: reactCoreLibraryReexport.useMemo(function () {
        return [eg, eb];
      }, [eg, eb]),
      skipped: !eG
    });
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return {
        focus: ew,
        blur: ek,
        get input() {
          return eB.current;
        }
      };
    }, [ek, ew, eB]);
    var eF = objectPropertyAssign.assignObject({
      minWidth: ep
    }, ee ?? {});
    if (typeof L == "number") {
      eF.width = L;
    } else if (L) {
      eF.width = ep;
    }
    var eY = conditionalClassnames.default(ej(), I, objectPropertySetter.setObjectProperty({}, ej("--focus"), eh));
    var eK = uiConfigContextHooks.useDirection();
    var eW = popperSidecarWrapper.usePopperSidecar();
    var eQ = reactCoreLibraryReexport.createElement(eO, {
      showArrow: P === undefined || P,
      allowClear: l === undefined || l,
      maxTagCount: f,
      bordered: N === undefined ? "normal" : N,
      size: d,
      placeholder: E,
      error: M !== undefined && M,
      maxTagRenderer: w === undefined ? et : w,
      clearIcon: Q,
      suffixIcon: J
    });
    if (es) {
      eQ = domTypeUtils_1.isFunction(ei) ? ei(ey) : ei ?? reactCoreLibraryReexport.createElement("div", null);
    }
    var eZ = reactCoreLibraryReexport.useRef([]);
    reactCoreLibraryReexport.useEffect(function () {
      return function () {
        var e = eZ.current;
        e.forEach(function (e) {
          return clearTimeout(e);
        });
        e.splice(0, e.length);
      };
    }, []);
    var eX = reactCoreLibraryReexport.useMemo(function () {
      if (["top", "bottom"].includes(ec)) {
        if (eK === "rtl") {
          return `${ec}Right`;
        } else {
          return `${ec}Left`;
        }
      }
      throw Error(`Placement ${ec} is not defined.`);
    }, [eK, ec]);
    return reactCoreLibraryReexport.createElement("div", {
      ref: mergeReactRefs.mergeRefs(eL, ev),
      className: eY,
      style: T,
      onMouseEnter: eo,
      onMouseLeave: e_,
      onKeyDown: ey.onInternalKeyDown,
      onKeyUp: ey.onInternalKeyUp,
      onBlur: ey.onContainerBlur,
      onFocus: ey.onContainerFocus,
      onMouseDown: function (e) {
        eV(true);
        var t = eZ.current;
        var n = e.target;
        if (eg && eg.contains(n)) {
          var r = window.setTimeout(function () {
            var e;
            var n = t.indexOf(r);
            if (n !== -1) {
              t.splice(n, 1);
            }
            ez();
            if (!eg.contains(document.activeElement) && (e = eB.current) !== null && e !== undefined) {
              e.focus();
            }
          });
          t.push(r);
        }
      }
    }, reactCoreLibraryReexport.createElement(eT, {
      value: reactCoreLibraryReexport.useMemo(function () {
        return {
          maxHeight: eE
        };
      }, [eE])
    }, reactCoreLibraryReexport.createElement(Z.Provider, {
      value: ey
    }, reactCoreLibraryReexport.createElement(eW, {
      getPopupContainer: R === undefined ? o : R,
      forceRender: eI,
      destroyOnHide: eA !== undefined && eA,
      action: undefined,
      showAction: [],
      hideAction: [],
      popupPlacement: eX,
      popupMotion: "slide-up",
      prefixCls: ex(),
      popupClassName: $,
      visible: eG,
      popupStyle: eF,
      popup: reactCoreLibraryReexport.createElement("div", {
        ref: eN
      }, O),
      enableRestoreFocus: false,
      initialFocus: null,
      showArrow: false,
      arrowHasStroke: false,
      Transition: slideUpDownTransitionFactory.slideUpDownTransition,
      enableMaxHeight: false,
      defaultMainAxisOffsetWithoutArrow: 4
    }, eQ))));
  });
  var tb = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.options;
    var r = n === undefined ? function e(t) {
      return reactChildrenFlatten.flattenChildren(t).map(function (t, n) {
        if (t == null ? undefined : t.type?.[f]) {
          var _ = t.key;
          var a = t.props;
          var E = a.children;
          var l = objectOmitHelper_1.omitWithSymbols(a, tD);
          return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, l), {}, {
            label: E,
            key: _ ?? l.value ?? `select-option-key-${n}`
          });
        }
        if (t == null ? undefined : t.type?.[O]) {
          var c = t.key;
          var T = t.props;
          var I = T.children;
          var A = objectOmitHelper_1.omitWithSymbols(T, tP);
          return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, A), {}, {
            key: c || `select-optgroup-key-${n}`,
            options: e(I)
          });
        }
        return null;
      }).filter(domTypeUtils_1.isDefined);
    }(e.children) : n;
    var i = e.filterOption;
    var o = e.defaultActiveFirstOption;
    var _ = e.menuItemSelectedIcon;
    var a = _ === undefined ? reactCoreLibraryReexport.createElement(translateOutlinedIcon_1.TranslateOutlinedIcon, null) : _;
    var E = e.listHeight;
    var l = e.onPopupScroll;
    var c = e.virtual;
    var T = e.itemHeight;
    var L = e.filterSort;
    var p = e.debounceTime;
    var M = e.showSelectAll;
    var R = e.onActiveOptionChange;
    var D = objectOmitHelper_1.omitWithSymbols(e, tm);
    var P = reactCoreLibraryReexport.useMemo(function () {
      return r.reduce(function (e, t) {
        if ("options" in t) {
          var n;
          var r = iteratorAdapterUtil.createIterator(t.options);
          try {
            for (r.s(); !(n = r.n()).done;) {
              var i = n.value;
              e.push(Object.assign({}, i, {
                htmlTitle: i.title
              }));
            }
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
        } else {
          e.push(Object.assign({}, t, {
            htmlTitle: t.title
          }));
        }
        return e;
      }, []);
    }, [r]);
    var m = useToggleHook.useToggle();
    var U = reactCoreLibraryReexport.useRef(null);
    var b = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useImperativeHandle(t, function () {
      return {
        get input() {
          return U.current?.input;
        },
        focus: function () {
          var e;
          if ((e = U.current) === null || e === undefined) {
            return undefined;
          } else {
            return e.focus();
          }
        },
        blur: function () {
          var e;
          if ((e = U.current) === null || e === undefined) {
            return undefined;
          } else {
            return e.blur();
          }
        },
        scrollTo: function () {
          var e;
          var t = arguments.length;
          var n = Array(t);
          var r = 0;
          for (; r < t; r++) {
            n[r] = arguments[r];
          }
          if ((e = b.current) === null || e === undefined) {
            return undefined;
          } else {
            return e.scrollIntoView.apply(e, n);
          }
        },
        scrollIntoView: function () {
          var e;
          var t = arguments.length;
          var n = Array(t);
          var r = 0;
          for (; r < t; r++) {
            n[r] = arguments[r];
          }
          if ((e = b.current) === null || e === undefined) {
            return undefined;
          } else {
            return e.scrollIntoView.apply(e, n);
          }
        },
        setActiveOption: function (e) {
          var t;
          if ((t = b.current) === null || t === undefined) {
            return undefined;
          } else {
            return t.setActiveOption(e);
          }
        }
      };
    }, []);
    return reactCoreLibraryReexport.createElement(tU, objectAssignUtil.objectAssign({}, D, {
      ref: U,
      options: P,
      overlayNode: reactCoreLibraryReexport.createElement(tR, {
        ref: b,
        filterSort: L,
        defaultActiveFirstOption: o === undefined || o,
        options: r,
        filterOption: i === undefined || i,
        menuItemSelectedIcon: a,
        listHeight: E === undefined ? 248 : E,
        onPopupScroll: l,
        virtual: c === undefined || c,
        itemHeight: T === undefined ? 32 : T,
        onMouseEnter: function () {
          m();
        },
        onActiveOptionChange: R,
        debounceTime: p,
        showSelectAll: M
      })
    }));
  });
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var observableIntervalFactory = require("observable-interval-factory") /*id: 98037*/;
  var observableOfUtility = require("observable-of-utility") /*id: 972100*/;
  var observableTypeCheck = require("observable-type-check") /*id: 279182*/;
  var observableFromSource = require("observable-from-source") /*id: 564103*/;
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var isFunctionUtil = require("is-function-util") /*id: 693638*/;
  var safeLiftSwitchOperator = require("safe-lift-switch-operator") /*id: 740615*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  var identityUtil = require("identity-util") /*id: 885053*/;
  var aiSpaceOldStub = require("ai-space-old-stub") /*id: 771039*/;
  var arrayPopUtils = require("array-pop-utils") /*id: 451401*/;
  var observableSafeOperatorUtil = require("observable-safe-operator-util") /*id: 179988*/;
  var safeObservableSwitchUtil = require("safe-observable-switch-util") /*id: 37820*/;
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  var safeObservableOperator = require("safe-observable-operator") /*id: 15361*/;
  var useIsMountedHook = require("use-is-mounted-hook") /*id: 799618*/;
  var loadingDelayHook = require("loading-delay-hook") /*id: 242703*/;
  var t0 = ["defaultOptions", "loadOptions", "onSearch", "debounceTime", "loadingDelay", "onBeforeLoadOptions", "onLoadOptionsError", "onLoadOptionsSuccess", "options", "filterOption", "loading"];
  (a = t1 || {})[a.StartFetching = 0] = "StartFetching";
  a[a.GotOptionsSuccessfully = 1] = "GotOptionsSuccessfully";
  a[a.GotOptionsFailed = 2] = "GotOptionsFailed";
  var t1 = a;
  var t2 = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var r;
    var i;
    var o;
    var _;
    var a;
    var E;
    var l;
    var c;
    var T;
    var A;
    var d;
    var N;
    var S;
    var L;
    var p;
    var M;
    var f;
    var O;
    var R;
    var D;
    var P;
    var U;
    r = (n = e.defaultOptions) === undefined ? [] : n;
    i = e.loadOptions;
    o = e.onSearch;
    a = (_ = e.debounceTime) === undefined ? 800 : _;
    E = e.loadingDelay;
    l = e.onBeforeLoadOptions;
    c = e.onLoadOptionsError;
    T = e.onLoadOptionsSuccess;
    e.options;
    e.filterOption;
    e.loading;
    A = objectOmitHelper_1.omitWithSymbols(e, t0);
    d = useCachedValueHook.useCachedValue(function () {
      return {
        loading: false,
        options: Array.isArray(r) ? r : [],
        searchValue: A.searchValue ?? ""
      };
    });
    N = reactCoreLibraryReexport.useReducer(function (e, t) {
      switch (t.type) {
        case t1.StartFetching:
          if (domTypeUtils_1.isFunction(l)) {
            l();
          }
          return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
            loading: true
          });
        case t1.GotOptionsSuccessfully:
          if (domTypeUtils_1.isFunction(T)) {
            T(t.payload);
          }
          return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
            options: t.payload,
            loading: false
          });
        case t1.GotOptionsFailed:
          if (domTypeUtils_1.isFunction(c)) {
            c(t.payload);
          }
          return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
            loading: false,
            error: t.payload
          });
        default:
          throw Error("Action type not found");
      }
    }, d);
    L = (S = iterableToArrayUtil_1_1.iterableToArray(N, 2))[0];
    p = S[1];
    M = loadingDelayHook.useLoadingDelay({
      loading: L.loading,
      delay: E === undefined ? 200 : E
    });
    f = iterableToArrayUtil_1_1.iterableToArray(M, 1)[0];
    O = useIsMountedHook.useIsMounted();
    R = useCachedValueHook.useCachedValue(function () {
      return new observableSubjectClass.Subject();
    });
    D = useCachedValueHook.useCachedValue(function () {
      return new behaviorSubjectClass.BehaviorSubject(d);
    });
    reactCoreLibraryReexport.useEffect(function () {
      var e = R.pipe(safeLiftSwitchOperator.safeSwitchSource(function (e) {
        if (e.delay) {
          return observableIntervalFactory.createInterval(e.delay);
        } else {
          return observableOfUtility.observableOf(e);
        }
      }), function () {
        var e = [];
        var t = 0;
        for (; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        var n = arrayPopUtils.popFunction(e);
        return observableSafeLiftUtil.createSafeOperator(function (t, r) {
          var i = e.length;
          var o = Array(i);
          var _ = e.map(function () {
            return false;
          });
          var a = false;
          function E(t) {
            observableFromAnySource.fromAnySource(e[t]).subscribe(safeSubscriber.safeSubscriber(r, function (e) {
              o[t] = e;
              if (!a && !_[t]) {
                _[t] = true;
                if (a = _.every(identityUtil.identity)) {
                  _ = null;
                }
              }
            }, aiSpaceOldStub.AiSpaceStub));
          }
          var l = 0;
          for (; l < i; l++) {
            E(l);
          }
          t.subscribe(safeSubscriber.safeSubscriber(r, function (e) {
            if (a) {
              var t = typescriptRuntimeHelpers.arraySpread([e], typescriptRuntimeHelpers.spreadArray(o));
              r.next(n ? n.apply(undefined, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(t))) : t);
            }
          }));
        });
      }(D), observableSafeOperatorUtil.createSafeOperator(function (e) {
        var t = iterableToArrayUtil_1_1.iterableToArray(e, 1)[0];
        if (O() && t.showLoading) {
          p({
            type: t1.StartFetching
          });
        }
      }), safeObservableSwitchUtil.createSafeSwitchMap(function (e) {
        var t;
        var n;
        var r = iterableToArrayUtil_1_1.iterableToArray(e, 2);
        var o = r[0];
        var _ = r[1];
        if (!domTypeUtils_1.isFunction(i)) {
          return observableOfUtility.observableOf(_);
        }
        try {
          var a = i(o.searchValue, _.options);
          var E = observableSafeMapOperator.createSafeMapOperator(function (e) {
            return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, _), {}, {
              options: e
            });
          });
          return (observableTypeCheck.isObservable(a) ? a : domTypeUtils_1.isThenable(a) ? observableFromSource.fromAnySource(a) : observableOfUtility.observableOf(a)).pipe(E, safeObservableOperator.createSafeOperator(function (e) {
            if (O()) {
              p({
                type: t1.GotOptionsFailed,
                payload: e
              });
            }
            return observableOfUtility.observableOf(_);
          }));
        } catch (e) {
          t = isFunctionUtil.isFunction(e) ? e : function () {
            return e;
          };
          n = function (e) {
            return e.error(t());
          };
          return new observableCoreClass.Observable(n);
        }
      })).subscribe(function (e) {
        if (O()) {
          D.next(e);
          p({
            type: t1.GotOptionsSuccessfully,
            payload: e.options
          });
        }
      }, function (e) {});
      return function () {
        e.unsubscribe();
      };
    }, [R, O, i, D]);
    reactRefEffectUtils.useEffectOnce(function () {
      if (r !== false && !Array.isArray(r)) {
        if (domTypeUtils_1.isFunction(i)) {
          R.next({
            searchValue: d.searchValue,
            delay: 0,
            showLoading: false
          });
        }
        return function () {
          D.complete();
          R.complete();
        };
      }
    });
    P = reactCoreLibraryReexport.useCallback(function (e, t) {
      R.next({
        searchValue: e,
        delay: a,
        showLoading: true
      });
      if (domTypeUtils_1.isFunction(o)) {
        o(e, t);
      }
    }, [a, R, o]);
    U = {
      loading: f,
      options: L.options,
      onSearch: P,
      filterOption: false
    };
    var b = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, U), A);
    return reactCoreLibraryReexport.createElement(tb, objectAssignUtil.objectAssign({
      ref: t
    }, b));
  });
  var t5 = Object.assign(tb, objectPropertySetter.setObjectProperty({
    Option: tc,
    OptGroup: tI,
    Async: t2
  }, uiDefaultContextProvider.moduleVersion, "3.5.2-hotfix.0"));
  require.d(exports, {
    Select: function () {
      return t5;
    }
  });
}