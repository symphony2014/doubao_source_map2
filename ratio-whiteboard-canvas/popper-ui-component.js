// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'PopperComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47996.8a642cb0.js
         * chunkId: 47996
         * moduleId: 372005
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useControlledStateHook_1 = require("use-controlled-state-hook_1") /*id: 837560*/;
  var mergeReactRefs = require("merge-react-refs") /*id: 686702*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var floatingUiPositionMiddleware = require("floating-ui-position-middleware") /*id: 491393*/;
  var domLayoutUtils = require("dom-layout-utils") /*id: 229971*/;
  var floatingUiPlatformUtils = require("floating-ui-platform-utils") /*id: 541179*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var emptyObservableInstance = require("empty-observable-instance") /*id: 724888*/;
  var observableFromSource = require("observable-from-source") /*id: 564103*/;
  var safeObservableSwitchUtil = require("safe-observable-switch-util") /*id: 37820*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var domElementUtils_1 = require("dom-element-utils_1") /*id: 846713*/;
  var useCachedValueHook = require("use-cached-value-hook") /*id: 881417*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var useCallbackRefHook = require("use-callback-ref-hook") /*id: 373105*/;
  var useImmerHooks = require("use-immer-hooks") /*id: 771813*/;
  var w = reactCoreLibraryReexport.createContext(null);
  var E = w.Provider;
  var domElementEventUtils = require("dom-element-event-utils") /*id: 791124*/;
  var Z = reactCoreLibraryReexport.createContext(null);
  var resizeObserverManager = require("resize-observer-manager") /*id: 332136*/;
  var contextHookCreator = require("context-hook-creator") /*id: 46755*/;
  var R = contextHookCreator.createContextHook("PopperContext", {
    strict: true
  });
  var S = R.Provider;
  var O = R.useContext;
  var useEffectCallback = require("use-effect-callback") /*id: 873700*/;
  var P = {
    middleware: []
  };
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  var keyboardKeys = require("keyboard-keys") /*id: 756097*/;
  var popupTriggerComponent_1 = require("popup-trigger-component_1") /*id: 505752*/;
  var z = {
    click: "click",
    contextMenu: "contextMenu",
    mouseEnter: "mouseEnter",
    mouseLeave: "mouseLeave"
  };
  var F = Symbol.for("keydown.esc.flag");
  function H(e) {
    if ("domEvent" in e) {
      return e.domEvent;
    } else {
      return e;
    }
  }
  var availabilityFlag = require("availability-flag") /*id: 138756*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var V = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n;
    var o;
    var i;
    var s;
    var d;
    var _;
    var f;
    var p;
    var m;
    var C;
    var v;
    var b;
    var I;
    var w;
    var E;
    var Z;
    var x;
    var L;
    var R;
    var O;
    var A;
    var P;
    var V;
    var K;
    var $;
    var J;
    var q;
    var Y;
    var X;
    var G;
    var Q;
    var ee;
    var et;
    var en;
    var eo;
    var er = e.visible;
    var ei = e.checkOverflow;
    var ea = ei !== undefined && ei;
    var ec = e.defaultVisible;
    var eu = e.children;
    var es = e.trigger;
    var el = e.showAction;
    var ed = e.hideAction;
    var e_ = e.mouseEnterDelay;
    var ef = e.mouseLeaveDelay;
    var ep = e.onVisibleChange;
    var em = e.udTriggerRef;
    var eC = e.disabled;
    var ev = e.prefixCls;
    e.modifiers;
    var eb = e.__screenshotAlwaysOpenEnabled;
    var eh = uiConfigContextHooks.useClassName("popper", ev)("");
    var eg = useControlledStateHook_1.useControlledState(ec !== undefined && ec, er, {
      onChange: ep
    });
    var eM = iterableToArrayUtil_1_1.iterableToArray(eg, 2);
    var ey = eM[0];
    var ek = eM[1];
    var eI = reactCoreLibraryReexport.useRef({
      x: 0,
      y: 0
    });
    o = (n = useCachedValueHook.useCachedValue(function () {
      return {
        updateByReference: undefined,
        update: undefined,
        resetPlacement: undefined
      };
    })).updateByReference;
    i = reactCoreLibraryReexport.useState(null);
    d = (s = iterableToArrayUtil_1_1.iterableToArray(i, 2))[0];
    _ = s[1];
    f = reactCoreLibraryReexport.useRef(null);
    var ew = {
      referenceRef: useCallbackRefHook.useCallbackRef(null, function (e) {
        if (e) {
          f.current = domElementEventUtils.resolveDomElement(e);
        } else {
          f.current = null;
        }
        _(e ? f.current : null);
        if (o != null) {
          o(e);
        }
      }),
      referenceElementRef: f,
      referenceElement: d,
      popperLatestValues: n
    };
    var eE = ew.referenceRef;
    var eT = ew.referenceElementRef;
    var eZ = ew.referenceElement;
    var ex = ew.popperLatestValues;
    var eL = reactCoreLibraryReexport.useCallback(function (e) {
      if (e && ea) {
        var t = typeof ea == "function" ? ea : domElementUtils_1.hasScrollbar;
        var n = eT.current;
        if (!n || !t(n)) {
          ek(false);
          return;
        }
      }
      ek(e);
    }, [ea, ek, eT]);
    if (availabilityFlag.isAvailable && eb !== undefined && eb) {
      reactCoreLibraryReexport.useLayoutEffect(function () {
        eL(true);
      });
    }
    p = {
      trigger: es,
      showAction: el,
      hideAction: ed,
      mouseEnterDelay: e_,
      mouseLeaveDelay: ef
    };
    m = {
      visible: ey,
      setVisible: eL,
      referenceRef: eE,
      referenceElementRef: eT,
      inlineElementMousePositionRef: eI
    };
    C = p.showAction;
    v = p.hideAction;
    b = p.trigger;
    w = (I = p.mouseEnterDelay) === undefined ? popupTriggerComponent_1.triggerDefaults.mouseEnterDelay : I;
    Z = (E = p.mouseLeaveDelay) === undefined ? popupTriggerComponent_1.triggerDefaults.mouseLeaveDelay : E;
    x = p.alignPoint;
    L = m.visible;
    R = m.setVisible;
    O = m.referenceRef;
    A = m.referenceElementRef;
    P = m.inlineElementMousePositionRef;
    V = function () {
      var e;
      var t = new Set(C ?? []);
      var n = new Set(v ?? []);
      var o = iteratorAdapterUtil.createIterator(typeof b == "string" ? [b] : b ?? []);
      try {
        for (o.s(); !(e = o.n()).done;) {
          var r = e.value;
          if (r === "hover") {
            t.add("mouseEnter");
            n.add("mouseLeave");
            continue;
          }
          if (r === "click") {
            t.add("click");
            n.add("click");
            continue;
          }
          if (r === "contextMenu") {
            t.add("contextMenu");
            n.add("click");
            continue;
          }
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
      return [arrayIterableSliceUtil.sliceArrayIterable(t).join("_"), arrayIterableSliceUtil.sliceArrayIterable(n).join("_")];
    }();
    $ = (K = iterableToArrayUtil_1_1.iterableToArray(V, 2))[0];
    J = K[1];
    q = domTypeUtils_1.isDefined(x) ? x : $.includes(z.contextMenu);
    Y = reactCoreLibraryReexport.useRef();
    X = reactRefEffectUtils.useEventCallback(function () {
      if (Y.current !== undefined) {
        window.clearTimeout(Y.current);
        Y.current = undefined;
      }
    });
    G = [reactRefEffectUtils.useEventCallback(function (e, t) {
      X();
      Y.current = window.setTimeout(function () {
        R.apply(undefined, arrayIterableSliceUtil.sliceArrayIterable(e));
      }, t);
    }), X];
    ee = (Q = iterableToArrayUtil_1_1.iterableToArray(G, 2))[0];
    et = Q[1];
    en = reactRefEffectUtils.useEventCallback(function () {
      et();
      return R.apply(undefined, arguments);
    });
    eo = reactRefEffectUtils.useEventCallback(function (e) {
      if (q) {
        var t = e.currentTarget;
        var n = new DOMRect(e.clientX, e.clientY, 0, 0);
        var o = t.getBoundingClientRect();
        reactRefEffectUtils.setRefValue(O, {
          getBoundingClientRect: function () {
            var e = t.getBoundingClientRect();
            return new DOMRect(e.x - o.x + n.x, e.y - o.y + n.y, 0, 0);
          },
          contextElement: t
        });
      }
    });
    var eR = {
      handleReferenceClick: reactRefEffectUtils.useEventCallback(function (e) {
        var t = H(e);
        if (t.isDefaultPrevented()) {
          return undefined;
        } else if (L && J.includes(z.click)) {
          return en(false);
        } else if (!L && $.includes(z.click)) {
          eo(t);
          return en(true);
        } else {
          return undefined;
        }
      }),
      handleContextMenu: reactRefEffectUtils.useEventCallback(function (e) {
        var t = H(e);
        if (!!$.includes(z.contextMenu) && !t.isDefaultPrevented()) {
          t.preventDefault();
          eo(t);
          en(true);
        }
      }),
      handleMouseEnter: reactRefEffectUtils.useEventCallback(function (e) {
        var t = H(e);
        P.current = {
          x: t.clientX,
          y: t.clientY
        };
        if (!t.isDefaultPrevented() && A.current && (t.currentTarget !== A.current || $.includes(z.mouseEnter) || L)) {
          ee([true], w);
        }
      }),
      handleMouseLeave: reactRefEffectUtils.useEventCallback(function (e) {
        var t = H(e);
        if (!!J.includes(z.mouseLeave) && !t.isDefaultPrevented()) {
          ee([false], Z);
        }
      }),
      handleKeyDown: reactRefEffectUtils.useEventCallback(function (e) {
        var t = H(e);
        if (!t.isDefaultPrevented() && !(F in t.nativeEvent) && t.key === keyboardKeys.keyboardKeys.Escape) {
          en(false);
          if (L) {
            Object.assign(t.nativeEvent, objectPropertySetter.setObjectProperty({}, F, true));
          }
        }
      }),
      handleReferenceFocus: reactRefEffectUtils.useEventCallback(function () {}),
      showAction: $,
      hideAction: J,
      alignPoint: q,
      setVisible: en,
      setVisibleDelay: ee,
      mouseLeaveDelay: Z
    };
    var eS = eR.handleReferenceClick;
    var eO = eR.handleContextMenu;
    var eA = eR.handleMouseEnter;
    var eP = eR.handleMouseLeave;
    var eB = eR.handleKeyDown;
    var ej = eR.handleReferenceFocus;
    var eD = eR.setVisible;
    var eN = eR.showAction;
    var ez = eR.hideAction;
    var eF = eR.alignPoint;
    var eH = eR.mouseLeaveDelay;
    var eW = eR.setVisibleDelay;
    var eU = reactCoreLibraryReexport.useMemo(function () {
      return mergeReactRefs.mergeRefs(em, t);
    }, [t, em]);
    reactCoreLibraryReexport.useImperativeHandle(eU, function () {
      return {
        visible: ey,
        setVisible: eD,
        forcePopupAlign: function () {
          var e;
          if ((e = ex.update) === null || e === undefined) {
            return undefined;
          } else {
            return e.call(ex);
          }
        }
      };
    }, [ex, eD, ey]);
    return reactCoreLibraryReexport.createElement(S, {
      value: {
        showAction: eN,
        hideAction: ez,
        alignPoint: eF,
        visible: ey,
        handleReferenceClick: eS,
        handleContextMenu: eO,
        handleMouseEnter: eA,
        handleMouseLeave: eP,
        handleKeyDown: eB,
        handleReferenceFocus: ej,
        setVisible: eD,
        setVisibleDelay: eW,
        referenceRef: eE,
        referenceElement: eZ,
        referenceElementRef: eT,
        popperLatestValues: ex,
        disabled: eC !== undefined && eC,
        rootPrefixCls: eh,
        mouseLeaveDelay: eH,
        inlineElementMousePositionRef: eI
      }
    }, eu);
  });
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactPortalWrapper = require("react-portal-wrapper") /*id: 518899*/;
  var reactCssTransitionFactory = require("react-css-transition-factory") /*id: 697870*/;
  var cubicBezierEase = require("cubic-bezier-ease") /*id: 855968*/;
  var Y = reactCssTransitionFactory.createCssTransition({
    name: "zoom",
    styles: {
      appear: "opacity: 0;transform: scale(.7);",
      enter: "opacity: 0;transform: scale(.7);",
      exitDone: "opacity: 0;transform: scale(.7);",
      appearActive: "opacity: 1;transform: scale(1);",
      enterActive: "opacity: 1;transform: scale(1);",
      appearDone: "opacity: 1;transform: scale(1);",
      enterDone: "opacity: 1;transform: scale(1);",
      exit: "opacity: 1;transform: scale(1);",
      exitActive: "opacity: 0;transform: scale(0.7);"
    },
    transitions: {
      appearActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEase.cubicBezierEase}, transform ${e}ms ${cubicBezierEase.cubicBezierEase}`;
      },
      enterActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEase.cubicBezierEase}, transform ${e}ms ${cubicBezierEase.cubicBezierEase}`;
      },
      exitActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEase.cubicBezierEase}, transform ${e}ms ${cubicBezierEase.cubicBezierEase}`;
      }
    }
  });
  var splitterHandleIcon = require("splitter-handle-icon") /*id: 830584*/;
  var reactFocusLockWrapper = require("react-focus-lock-wrapper") /*id: 343751*/;
  var Q = contextHookCreator.createContextHook("PopperPopupContext", {
    strict: true
  });
  var ee = Q.Provider;
  var et = Q.useContext;
  var en = {
    appear: 0,
    enter: 0,
    exit: 0
  };
  var eo = {
    timeout: availabilityFlag.isAvailable ? en : {
      appear: 300,
      enter: 300,
      exit: 200
    }
  };
  var er = ["children", "Transition", "timeout", "arrow", "popupPortalContainer", "getPopupContainer", "popupClassName", "popupStyle", "initialFocus", "enableFocusLock", "enableRestoreFocus", "inline", "transitionStatus"];
  function ei(e) {
    var t = e.hasStroke;
    var n = O().rootPrefixCls;
    var o = et().placement;
    var r = o ? o.startsWith("right") || o.startsWith("left") ? "vertical" : o.startsWith("top") || o.startsWith("bottom") ? "horizontal" : undefined : undefined;
    return reactCoreLibraryReexport.createElement(splitterHandleIcon.SplitterHandle, {
      direction: r,
      className: `${n}__arrow__streamline`,
      hasStroke: t,
      style: {
        display: "flex",
        transform: o ? o.startsWith("right") ? `translate(${t ? "calc(1px - 100%)" : "-100%"}, -50%) rotate(180deg)` : o.startsWith("left") ? `translate(${t ? "-1px" : "0"}, -50%)` : o.startsWith("top") ? `translate(-50%, ${t ? "-1px" : "0"})` : o.startsWith("bottom") ? `translate(-50%, ${t ? "calc(1px - 100%)" : "-100%"}) rotate(180deg)` : undefined : undefined,
        zIndex: "inherit",
        position: "absolute"
      }
    });
  }
  function ea(e) {
    var t;
    var n;
    var o;
    var c;
    var u;
    var L;
    var R;
    var S;
    var B;
    var j = e.children;
    var D = e.Transition;
    var N = e.timeout;
    var F = N === undefined ? eo.timeout : N;
    var W = e.arrow;
    var V = e.popupPortalContainer;
    var J = e.getPopupContainer;
    var q = e.popupClassName;
    var X = e.popupStyle;
    var Q = e.initialFocus;
    var et = e.enableFocusLock;
    var en = et !== undefined && et;
    var ei = e.enableRestoreFocus;
    var ea = ei === undefined || ei;
    var ec = e.inline;
    var eu = e.transitionStatus;
    var es = objectOmitHelper_1.omitWithSymbols(e, er);
    var el = O();
    var ed = el.handleMouseEnter;
    var e_ = el.handleMouseLeave;
    var ef = el.handleKeyDown;
    var ep = el.visible;
    var em = el.referenceElementRef;
    var eC = el.rootPrefixCls;
    var ev = el.showAction;
    var eb = el.mouseLeaveDelay;
    var eh = el.disabled;
    var eg = el.setVisibleDelay;
    var eM = el.inlineElementMousePositionRef;
    var ey = function (e, t = {}) {
      var n = t.skipped;
      var o = n !== undefined && n;
      var i = reactCoreLibraryReexport.useContext(Z);
      var c = e.placement;
      var u = c === undefined ? "bottom" : c;
      var E = e.offset;
      var T = E === undefined ? 0 : E;
      var L = e.eventListeners;
      var R = L === undefined ? {} : L;
      var S = e.shift;
      var B = S === undefined || S;
      var j = e.rootBoundary;
      var D = j === undefined ? "viewport" : j;
      var N = e.boundary;
      var z = N === undefined ? i ?? "clippingAncestors" : N;
      var F = e.boundaryPadding;
      var H = F === undefined ? 16 : F;
      var W = e.arrowPadding;
      var U = W === undefined ? 0 : W;
      var V = e.middlewares;
      var K = V === undefined ? P.middleware : V;
      var $ = e.matchReferenceWidth;
      var J = $ !== undefined && $;
      var q = e.flip;
      var Y = q === undefined || q;
      var X = e.enableMaxHeight;
      var G = X === undefined || X;
      var Q = e.enableAutoHide;
      var ee = Q === undefined || Q;
      var et = e.onPositioned;
      var en = e.inline;
      var eo = R.scroll;
      var er = eo === undefined || eo;
      var ei = R.resize;
      var ea = ei === undefined || ei;
      var ec = R.resizeObserver;
      var eu = ec === undefined || ec;
      var es = O();
      var el = es.referenceElement;
      var ed = es.referenceRef;
      var e_ = es.referenceElementRef;
      var ef = es.popperLatestValues;
      var ep = reactRefEffectUtils.useEventCallback(et);
      var em = reactCoreLibraryReexport.useContext(w);
      var eC = reactRefEffectUtils.useEventCallback(function () {
        var t = (em == null ? undefined : em.getScrollParents()) ?? [];
        var n = [e_.current, ek.current].filter(domElementUtils_1.isElementNode);
        if (!n.length) {
          return t;
        }
        var o = dataProcessor.processData(n.map(function (e) {
          return domLayoutUtils.getScrollParents(e);
        }).flat());
        return dataProcessor.processData([].concat(arrayIterableSliceUtil.sliceArrayIterable(o), arrayIterableSliceUtil.sliceArrayIterable(t)));
      });
      var ev = reactCoreLibraryReexport.useRef(null);
      function eb() {
        if (ev.current) {
          ev.current();
        }
      }
      function eh() {
        var e = ek.current;
        if (!o && eu && e) {
          ev.current = resizeObserverManager.resizeObserverManager.subscribe(e, eA);
        }
      }
      var eg = reactCoreLibraryReexport.useRef(null);
      function eM() {
        if (eg.current) {
          eg.current();
        }
      }
      function ey() {
        if (!o && er) {
          var e = eC();
          if (e.length) {
            e.forEach(function (e) {
              e.addEventListener("scroll", eA);
            });
            eg.current = function () {
              e.forEach(function (e) {
                e.removeEventListener("scroll", eA);
              });
            };
          }
        }
      }
      useEffectCallback.useEffectCallback(function () {
        eb();
        eM();
      });
      var ek = reactCoreLibraryReexport.useRef(null);
      var eI = useCallbackRefHook.useCallbackRef(null, function (e) {
        ek.current = e;
        eO({
          reference: ed.current,
          floating: e
        });
        eb();
        eh();
        eM();
        ey();
      });
      var ew = reactCoreLibraryReexport.useRef(null);
      var eE = useImmerHooks.useImmer(function () {
        return {
          placement: null,
          referenceHidden: false
        };
      });
      var eT = iterableToArrayUtil_1_1.iterableToArray(eE, 2);
      var eZ = eT[0];
      var ex = eT[1];
      var eL = reactCoreLibraryReexport.useMemo(function () {
        var e = {
          boundary: z,
          padding: H,
          rootBoundary: D
        };
        var t = Y ? objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({
          fallbackStrategy: "bestFit"
        }, e), Y === true ? {} : Y) : {};
        var n = B ? objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
          crossAxis: true
        }, B === true ? {} : B) : {};
        return [en ? floatingUiPositionMiddleware.inlineMiddleware(en) : undefined, J ? {
          name: "matchReferenceWidth",
          fn: function (e) {
            var t = e.placement;
            var n = e.rects;
            var o = e.elements.floating;
            if (["top", "bottom"].includes(t.split("-")[0])) {
              n.floating.width = n.reference.width;
              o.style.width = `${n.reference.width}px`;
            }
            return {};
          }
        } : undefined, floatingUiPositionMiddleware.offsetMiddleware(T), ee ? floatingUiPositionMiddleware.hideMiddleware(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
          padding: 0
        })) : undefined, Y ? floatingUiPositionMiddleware.flipMiddleware(t) : undefined, B ? floatingUiPositionMiddleware.shiftMiddleware(n) : undefined, G && !en ? floatingUiPositionMiddleware.sizeMiddleware(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
          apply: function (e) {
            var t = e.availableHeight;
            var n = eI.current;
            if (n) {
              Object.assign(n.style, {
                maxHeight: `${t}px`
              });
            }
          }
        })) : undefined, {
          name: "arrow",
          fn: function (e) {
            if (ew.current !== null) {
              return floatingUiPositionMiddleware.arrowMiddleware({
                element: ew.current,
                padding: U
              }).fn(e);
            } else {
              return {};
            }
          }
        }, {
          name: "transformOrigin",
          fn: function (e) {
            var t = e.placement;
            var n = e.rects;
            var o = e.middlewareData.arrow;
            if (!o) {
              return {};
            }
            var r = o.x;
            var i = o.y;
            var a = n.floating;
            var c = a.width;
            var u = a.height;
            var s = "";
            if (t.startsWith("right")) {
              s = `0 ${(i ?? 0) / u * 100}%`;
            }
            if (t.startsWith("left")) {
              s = `100% ${(i ?? 0) / u * 100}%`;
            }
            if (t.startsWith("top")) {
              s = `${(r ?? 0) / c * 100}% 100%`;
            }
            if (t.startsWith("bottom")) {
              s = `${(r ?? 0) / c * 100}% 0`;
            }
            return {
              data: {
                transformOrigin: s
              }
            };
          }
        }];
      }, [U, ee, z, H, Y, eI, en, J, G, T, D, B]);
      var eR = useCachedValueHook.useCachedValue(function () {
        return new behaviorSubjectClass.BehaviorSubject({
          reference: null,
          floating: null,
          placement: u,
          middleware: []
        });
      });
      var eS = useCachedValueHook.useCachedValue(function () {
        return eR.pipe(safeObservableSwitchUtil.createSafeSwitchMap(function (e) {
          var t = e.reference;
          var n = e.floating;
          var o = e.placement;
          var r = e.middleware;
          if (t && n) {
            return observableFromSource.fromAnySource(floatingUiPlatformUtils.computePosition(t, n, {
              middleware: r,
              placement: o,
              strategy: "absolute"
            }).then(function (e) {
              return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
                floating: n
              });
            }));
          } else {
            return emptyObservableInstance.emptyObservable;
          }
        }));
      });
      reactCoreLibraryReexport.useEffect(function () {
        var e = eS.subscribe({
          next: function (e) {
            var t;
            var n = e.x;
            var o = e.y;
            var r = e.placement;
            var i = e.middlewareData;
            var a = i.hide;
            var c = (a === undefined ? {} : a).referenceHidden;
            var u = c !== undefined && c;
            var s = i.arrow;
            var l = s === undefined ? {} : s;
            var d = l.x;
            var _ = l.y;
            var f = i.transformOrigin;
            var p = e.floating;
            ex(function (t) {
              t.placement = e.placement;
              t.referenceHidden = u;
            });
            p.dataset.popperPlacement = r;
            p.style.top = "0px";
            p.style.left = "0px";
            p.style.transform = `translate3d(${Math.round(n)}px, ${Math.round(o)}px, 0)`;
            (function () {
              var e = ew.current;
              if (e) {
                e.style.top = "";
                e.style.left = "";
                e.style.bottom = "";
                e.style.right = "";
                var t = function () {
                  switch (r.split("-")[0]) {
                    case "top":
                      return "bottom";
                    case "right":
                      return "left";
                    case "bottom":
                      return "top";
                    case "left":
                      return "right";
                    default:
                      throw Error("Placement main side is not valid.");
                  }
                }();
                e.style.left = domTypeUtils_1.isDefined(d) ? `${d}px` : "";
                e.style.top = domTypeUtils_1.isDefined(_) ? `${_}px` : "";
                e.style[t] = "0px";
              }
            })();
            if (t = p.querySelector("[data-popper-animated]")) {
              Object.assign(t.style, f);
            }
            if (domTypeUtils_1.isFunction(ep)) {
              ep(e);
            }
          },
          error: function (e) {}
        });
        return function () {
          e.unsubscribe();
        };
      }, [eS, ep, ex]);
      var eO = reactCoreLibraryReexport.useCallback(function (e) {
        var t = e.reference;
        var n = e.floating;
        eR.next({
          reference: t,
          floating: n,
          placement: u,
          middleware: [].concat(arrayIterableSliceUtil.sliceArrayIterable(eL), arrayIterableSliceUtil.sliceArrayIterable(K)).filter(domTypeUtils_1.isDefined)
        });
      }, [eR, u, eL, K]);
      var eA = reactCoreLibraryReexport.useCallback(function () {
        eO({
          reference: ed.current,
          floating: eI.current
        });
      }, [eO, eI, ed]);
      ef.update = eA;
      ef.updateByReference = reactRefEffectUtils.useEventCallback(function (e) {
        eO({
          reference: e,
          floating: eI.current
        });
      });
      ef.resetPlacement = reactCoreLibraryReexport.useCallback(function () {
        ex(function (e) {
          e.placement = null;
        });
      }, [ex]);
      reactCoreLibraryReexport.useEffect(function () {
        if (!o && ea) {
          var e = domTypeUtils_1.getWindow(el);
          e.addEventListener("resize", eA);
          return function () {
            e.removeEventListener("resize", eA);
          };
        }
      }, [el, ea, o, eA]);
      reactCoreLibraryReexport.useEffect(function () {
        if (!o && eu && el) {
          return resizeObserverManager.resizeObserverManager.subscribe(el, eA);
        }
      }, [el, eu, o, eA]);
      reactRefEffectUtils.useLayoutEffect(eA, [eA]);
      return {
        placement: eZ.placement,
        referenceHidden: (em == null ? undefined : em.referenceHidden) || eZ.referenceHidden,
        floatingRef: eI,
        arrowRef: ew,
        getScrollParents: eC
      };
    }(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, es), {}, {
      inline: ec !== undefined && ec ? {
        get x() {
          return eM.current.x;
        },
        get y() {
          return eM.current.y;
        }
      } : undefined
    }), {
      skipped: eh || !ep
    });
    var ek = ey.floatingRef;
    var eI = ey.arrowRef;
    var ew = ey.placement;
    var eE = ey.getScrollParents;
    var eT = ey.referenceHidden;
    n = (t = {
      referenceElementRef: em,
      floatingRef: ek,
      visible: ep,
      setVisibleDelay: eg
    }).visible;
    o = t.setVisibleDelay;
    c = t.floatingRef;
    u = t.referenceElementRef;
    L = reactCoreLibraryReexport.useRef({
      mousedown: null
    });
    R = function (e, t, n) {
      if (!domElementUtils_1.containsNode(t, n)) {
        L.current[e] = n;
      }
    };
    S = reactRefEffectUtils.useEventCallback(function () {});
    B = reactRefEffectUtils.useEventCallback(function (e) {
      var t = H(e);
      R("mousedown", t.currentTarget, t.target);
    });
    domElementEventUtils.useOutsideListener("mousedown", {
      listener: reactCoreLibraryReexport.useCallback(function () {
        o([false], 0);
      }, [o]),
      elements: reactCoreLibraryReexport.useMemo(function () {
        return [c, u, function () {
          return L.current.mousedown;
        }];
      }, [c, u]),
      skipped: !n
    });
    var eZ = {
      handlePopupFocus: S,
      handlePopperMouseDownCapture: B
    };
    var ex = eZ.handlePopupFocus;
    var eL = eZ.handlePopperMouseDownCapture;
    var eR = reactCoreLibraryReexport.useRef(null);
    var eS = useCachedValueHook.useCachedValue(function () {
      return [ek, em];
    });
    var eO = uiConfigContextHooks.usePopupContainer();
    var eA = reactCoreLibraryReexport.useMemo(function () {
      return V !== false && (V === null ? null : function () {
        if (domTypeUtils_1.isFunction(V)) {
          return V(em.current);
        } else if (V) {
          return V.current;
        } else if (em.current) {
          return (J ?? eO)(em.current);
        } else {
          return null;
        }
      });
    }, [eO, J, V, em]);
    var eP = Q === null ? null : Q ?? eR;
    var eB = eT != null && eT;
    var ej = eb === 0;
    var eD = {
      "data-popper-animated": true,
      style: {
        display: "flex",
        flexDirection: "column",
        flex: "auto",
        minWidth: 0,
        minHeight: 0,
        outline: "none"
      },
      tabIndex: -1,
      role: "dialog",
      onMouseEnter: ed,
      onMouseLeave: e_,
      onMouseDownCapture: eL,
      onKeyDown: ef
    };
    return reactCoreLibraryReexport.createElement(E, {
      value: {
        getScrollParents: eE,
        referenceHidden: eT
      }
    }, reactCoreLibraryReexport.createElement(ee, {
      value: {
        placement: ew
      }
    }, reactCoreLibraryReexport.createElement(reactPortalWrapper.PortalWrapper, {
      container: eA
    }, reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(eC, q),
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({
        position: "absolute",
        display: "flex",
        flexDirection: "column"
      }, eB || eu === "exited" ? {
        visibility: "hidden",
        opacity: 0
      } : {}), eB || ej || !ep ? {
        pointerEvents: "none"
      } : {}), X),
      ref: ek,
      onFocus: ex
    }, reactCoreLibraryReexport.createElement(D === undefined ? Y : D, {
      nodeRef: eR,
      timeout: F,
      appear: true,
      in: ep && ew !== null,
      mountOnEnter: false,
      unmountOnExit: false,
      extraProps: {
        placement: ew ?? "left"
      }
    }, function (e) {
      return reactCoreLibraryReexport.createElement(reactFocusLockWrapper.FocusLockWrapper, {
        ref: eR,
        initialFocusRef: eP,
        restoreFocus: !ev.includes(z.mouseEnter) && ea,
        enableFocusLock: en,
        shards: eS,
        isDisabled: eB || !ep || ej,
        as: "section",
        className: `${eC}__content`,
        lockProps: e === "exited" ? objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, eD), {}, {
          style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, eD.style), {}, {
            opacity: 0
          })
        }) : eD
      }, j, reactCoreLibraryReexport.createElement("div", {
        className: `${eC}__arrow`,
        style: {
          position: "absolute",
          lineHeight: 0
        },
        ref: eI
      }, W));
    })))));
  }
  var reactChildRefHandler = require("react-child-ref-handler") /*id: 955736*/;
  function eu() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return function (e) {
      for (var n = 0; n < t.length; n++) {
        var o;
        var r = t[n];
        if (domTypeUtils_1.isDefined(r)) {
          r(e);
        }
        if (e != null && (o = e.isDefaultPrevented) !== null && o !== undefined && o.call(e)) {
          return;
        }
      }
    };
  }
  function es(e) {
    var t = O();
    var n = t.rootPrefixCls;
    var o = t.referenceRef;
    var r = t.handleReferenceClick;
    var i = t.handleMouseEnter;
    var c = t.handleMouseLeave;
    var u = t.handleContextMenu;
    var l = t.handleKeyDown;
    var d = t.handleReferenceFocus;
    var _ = t.alignPoint;
    var f = t.disabled;
    var p = t.visible;
    var m = e.children;
    var C = e.className;
    var v = e.style;
    var b = e.openClassName;
    var g = e.domOnly;
    var M = domTypeUtils_1.isFunction(m) ? m({
      visible: p
    }) : m;
    var k = conditionalClassnames.default(M.props.className, C, p && (b === undefined ? `${n}-open` : b));
    var I = {
      onClick: reactRefEffectUtils.useEventCallback(eu(M.props.onClick, e.onClick, r)),
      onMouseEnter: reactRefEffectUtils.useEventCallback(eu(M.props.onMouseEnter, e.onMouseEnter, i)),
      onMouseLeave: reactRefEffectUtils.useEventCallback(eu(M.props.onMouseLeave, e.onMouseLeave, c)),
      onFocus: reactRefEffectUtils.useEventCallback(eu(M.props.onFocus, e.onFocus, d)),
      onContextMenu: reactRefEffectUtils.useEventCallback(eu(M.props.onContextMenu, e.onContextMenu, u)),
      onKeyDown: reactRefEffectUtils.useEventCallback(eu(M.props.onKeyDown, e.onKeyDown, l))
    };
    M = reactCoreLibraryReexport.cloneElement(M, objectPropertyAssign.assignObject(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, k ? {
      className: k
    } : {}), {}, {
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, v), M.props.style)
    }, p && !domTypeUtils_1.isDefined(M.props["aria-expanded"]) ? {
      "aria-expanded": p
    } : {}), f ? {} : I));
    return M = reactChildRefHandler.createRefWrapper({
      children: M,
      ref: o
    }, {
      skipped: _ || f,
      domOnly: g === undefined || g
    });
  }
  var reactTransitionComponent = require("react-transition-component") /*id: 888866*/;
  var transitionGroupHookHelper = require("transition-group-hook-helper") /*id: 355911*/;
  function e_(e) {
    var t = e.timeout;
    var n = t === undefined ? eo.timeout : t;
    var o = e.forceRender;
    var r = e.destroyOnHide;
    var i = e.onAfterClose;
    var c = e.onAfterOpen;
    var u = e.children;
    var s = O();
    var l = s.visible;
    var d = s.popperLatestValues;
    var _ = transitionGroupHookHelper.useNoopRef();
    return reactCoreLibraryReexport.createElement(reactTransitionComponent.Transition, {
      nodeRef: _,
      timeout: n,
      appear: true,
      in: l,
      mountOnEnter: o === undefined || !o,
      unmountOnExit: r === undefined || r,
      onEnter: function () {
        var e;
        if ((e = d.update) !== null && e !== undefined) {
          e.call(d);
        }
      },
      onEntered: function () {
        if (domTypeUtils_1.isFunction(c)) {
          c();
        }
      },
      onExited: function () {
        var e;
        if (domTypeUtils_1.isFunction(i)) {
          i();
        }
        if ((e = d.resetPlacement) !== null && e !== undefined) {
          e.call(d);
        }
      }
    }, u);
  }
  var ef = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.children;
    var r = e.popup;
    return reactCoreLibraryReexport.createElement(V, objectAssignUtil.objectAssign({
      ref: t
    }, e), reactCoreLibraryReexport.createElement(es, e, n), reactCoreLibraryReexport.createElement(e_, e, function (t) {
      return reactCoreLibraryReexport.createElement(ea, objectAssignUtil.objectAssign({}, e, {
        transitionStatus: t
      }), r);
    }));
  });
  function ep(e) {
    switch (e) {
      case "top":
      case "topCenter":
        return "top";
      case "right":
      case "rightCenter":
        return "right";
      case "bottom":
      case "bottomCenter":
        return "bottom";
      case "left":
      case "leftCenter":
        return "left";
      case "bottomLeft":
        return "bottom-start";
      case "bottomRight":
        return "bottom-end";
      case "topLeft":
        return "top-start";
      case "topRight":
        return "top-end";
      case "leftTop":
        return "left-start";
      case "leftBottom":
        return "left-end";
      case "rightTop":
        return "right-start";
      case "rightBottom":
        return "right-end";
      default:
        throw Error(`Placement \`${e}\` is invalid.`);
    }
  }
  var dimensionConfig = require("dimension-config") /*id: 446374*/;
  var reducedMotionConfig = require("reduced-motion-config") /*id: 108612*/;
  var ev = ["action", "popupPlacement", "showArrow", "arrowHasStroke", "popupMotion", "defaultMainAxisOffsetWithoutArrow", "prefixCls", "enableAnimation", "popupAlign", "offset", "flip", "shift"];
  var eb = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var s = e.action;
    var l = e.popupPlacement;
    var d = e.showArrow;
    var _ = e.arrowHasStroke;
    e.popupMotion;
    var f = e.defaultMainAxisOffsetWithoutArrow;
    var p = e.prefixCls;
    var m = e.enableAnimation;
    var C = e.popupAlign;
    var v = e.offset;
    var b = e.flip;
    var g = e.shift;
    var M = objectOmitHelper_1.omitWithSymbols(e, ev);
    var y = C ?? {};
    var k = y == null ? undefined : y.offset;
    var I = y == null ? undefined : y.points;
    var w = y == null ? undefined : y.overflow?.adjustX;
    var E = y == null ? undefined : y.overflow?.adjustY;
    var T = y == null ? undefined : y.overflow?.alwaysByViewport;
    var Z = function () {
      if (domTypeUtils_1.isDefined(I)) {
        var e = iterableToArrayUtil_1_1.iterableToArray(I, 2);
        var t = e[0];
        var n = e[1];
        if (t === "tr" && n === "tl") {
          return "left-start";
        }
        if (t === "cr" && n === "cl") {
          return "left";
        }
        if (t === "br" && n === "bl") {
          return "left-end";
        }
        if (t === "tl" && n === "tr") {
          return "right-start";
        }
        if (t === "cl" && n === "cr") {
          return "right";
        }
        if (t === "bl" && n === "br") {
          return "right-end";
        }
        if (t === "bl" && n === "tl") {
          return "top-start";
        }
        if (t === "bc" && n === "tc") {
          return "top";
        }
        if (t === "br" && n === "tr") {
          return "top-end";
        }
        if (t === "tl" && n === "bl") {
          return "bottom-start";
        }
        if (t === "tc" && n === "bc") {
          return "bottom";
        }
        if (t === "tr" && n === "br") {
          return "bottom-end";
        }
      }
      return ep(l);
    }();
    var x = Z.startsWith("top");
    var L = Z.startsWith("bottom");
    var R = x || L;
    var S = reactCoreLibraryReexport.useMemo(function () {
      if (domTypeUtils_1.isDefined(b)) {
        return b;
      } else if (domTypeUtils_1.isDefined(w) || domTypeUtils_1.isDefined(E)) {
        if (R) {
          return {
            mainAxis: E === undefined || !!E,
            crossAxis: w === undefined || !!w
          };
        } else {
          return {
            mainAxis: w === undefined || !!w,
            crossAxis: E === undefined || !!E
          };
        }
      } else {
        return undefined;
      }
    }, [w, E, b, R]);
    var O = reactCoreLibraryReexport.useMemo(function () {
      if (domTypeUtils_1.isDefined(g)) {
        return g;
      } else if (domTypeUtils_1.isDefined(w) || domTypeUtils_1.isDefined(E)) {
        if (R) {
          return {
            mainAxis: w === undefined || !!w
          };
        } else {
          return {
            mainAxis: E === undefined || !!E
          };
        }
      } else {
        return undefined;
      }
    }, [w, E, R, g]);
    var A = reactCoreLibraryReexport.useMemo(function () {
      if (domTypeUtils_1.isDefined(k)) {
        var e = iterableToArrayUtil_1_1.iterableToArray(k, 2);
        var t = e[0];
        var n = e[1];
        if (Z.startsWith("right")) {
          return {
            mainAxis: t,
            crossAxis: n
          };
        }
        if (Z.startsWith("left")) {
          return {
            mainAxis: -t,
            crossAxis: n
          };
        }
        if (Z.startsWith("bottom")) {
          return {
            mainAxis: n,
            crossAxis: t
          };
        }
        if (Z.startsWith("top")) {
          return {
            mainAxis: -n,
            crossAxis: t
          };
        }
      }
      if (domTypeUtils_1.isDefined(v)) {
        return v;
      } else {
        return (d ? dimensionConfig.dimensions.y : 0) + f;
      }
    }, [k, f, v, Z, d]);
    var P = !reducedMotionConfig.useReducedMotion(domTypeUtils_1.isDefined(m) ? !m : undefined);
    return reactCoreLibraryReexport.createElement(ef, objectAssignUtil.objectAssign({
      ref: t,
      prefixCls: p,
      placement: Z,
      trigger: s,
      arrow: d ? reactCoreLibraryReexport.createElement(ei, {
        hasStroke: _
      }) : null,
      timeout: P ? undefined : en,
      offset: A,
      arrowPadding: d ? dimensionConfig.defaultCount + dimensionConfig.dimensions.x : 0,
      flip: S,
      shift: O,
      rootBoundary: T === false ? "document" : undefined
    }, M));
  });
  require.d(exports, {
    PopperComponent: function () {
      return eb;
    }
  });
}