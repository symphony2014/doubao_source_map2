// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'PopperComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 564146
         */
module.exports = function (module, exports, require) {
  var r;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useControlledState = require("use-controlled-state") /*id: 80507*/;
  var mergeRefsUtil = require("merge-refs-util") /*id: 590380*/;
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
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var domElementUtils = require("dom-element-utils") /*id: 431931*/;
  var useRefCacheHook = require("use-ref-cache-hook") /*id: 683563*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var reactRefMemoizedSetter = require("react-ref-memoized-setter") /*id: 458675*/;
  var useImmerHooks = require("use-immer-hooks") /*id: 771813*/;
  var A = reactCoreLibraryReexport.createContext(null);
  var M = A.Provider;
  var documentOutsideClickHandler = require("document-outside-click-handler") /*id: 780877*/;
  var P = reactCoreLibraryReexport.createContext(null);
  var resizeObserverManager_1 = require("resize-observer-manager_1") /*id: 722166*/;
  var createContextWithSelector = require("create-context-with-selector") /*id: 603139*/;
  var S = createContextWithSelector.createContextWithSelector("PopperContext", {
    strict: true
  });
  var _ = S.Provider;
  var F = S.useContext;
  var reactEffectHook = require("react-effect-hook") /*id: 608203*/;
  var W = {
    middleware: []
  };
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  (r = {}).Escape = "Escape";
  r.Tab = "Tab";
  r.Shift = "Shift";
  r.Backspace = "Backspace";
  r.Delete = "Delete";
  r.Enter = "Enter";
  r.ArrowDown = "ArrowDown";
  r.ArrowLeft = "ArrowLeft";
  r.ArrowRight = "ArrowRight";
  r.ArrowUp = "ArrowUp";
  r.Down = "Down";
  r.Left = "Left";
  r.Right = "Right";
  r.Up = "Up";
  r.MouseEnter = "MouseEnter";
  r.MouseLeave = "MouseLeave";
  var T = r;
  var popupTriggerComponent = require("popup-trigger-component") /*id: 493746*/;
  var B = {
    click: "click",
    contextMenu: "contextMenu",
    mouseEnter: "mouseEnter",
    mouseLeave: "mouseLeave"
  };
  var V = Symbol.for("keydown.esc.flag");
  function z(e) {
    if ("domEvent" in e) {
      return e.domEvent;
    } else {
      return e;
    }
  }
  var featureFlagBooleanExport = require("feature-flag-boolean-export") /*id: 233678*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var K = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var t;
    var r;
    var o;
    var a;
    var s;
    var d;
    var p;
    var v;
    var m;
    var h;
    var y;
    var Z;
    var g;
    var R;
    var A;
    var M;
    var P;
    var D;
    var L;
    var S;
    var F;
    var O;
    var W;
    var K;
    var U;
    var q;
    var J;
    var G;
    var Y;
    var X;
    var Q;
    var ee;
    var en;
    var et;
    var er;
    var eo = e.visible;
    var ei = e.checkOverflow;
    var ea = ei !== undefined && ei;
    var eu = e.defaultVisible;
    var ec = e.children;
    var el = e.trigger;
    var es = e.showAction;
    var ef = e.hideAction;
    var ed = e.mouseEnterDelay;
    var ep = e.mouseLeaveDelay;
    var ev = e.onVisibleChange;
    var em = e.udTriggerRef;
    var eh = e.disabled;
    var ey = e.prefixCls;
    e.modifiers;
    var eZ = e.__screenshotAlwaysOpenEnabled;
    var eg = reactContextUtilsHooks.useComponentClass("popper", ey)("");
    var ex = useControlledState.useControlledState(eu !== undefined && eu, eo, {
      onChange: ev
    });
    var eE = iterableToArrayUtil_1_1.iterableToArray(ex, 2);
    var eb = eE[0];
    var ew = eE[1];
    var eC = reactCoreLibraryReexport.useRef({
      x: 0,
      y: 0
    });
    r = (t = useRefCacheHook.useRefCache(function () {
      return {
        updateByReference: undefined,
        update: undefined,
        resetPlacement: undefined
      };
    })).updateByReference;
    o = reactCoreLibraryReexport.useState(null);
    s = (a = iterableToArrayUtil_1_1.iterableToArray(o, 2))[0];
    d = a[1];
    p = reactCoreLibraryReexport.useRef(null);
    var eR = {
      referenceRef: reactRefMemoizedSetter.useMemoizedRefSetter(null, function (e) {
        if (e) {
          p.current = documentOutsideClickHandler.getContextElement(e);
        } else {
          p.current = null;
        }
        d(e ? p.current : null);
        if (r != null) {
          r(e);
        }
      }),
      referenceElementRef: p,
      referenceElement: s,
      popperLatestValues: t
    };
    var eA = eR.referenceRef;
    var eM = eR.referenceElementRef;
    var ek = eR.referenceElement;
    var eP = eR.popperLatestValues;
    var eD = reactCoreLibraryReexport.useCallback(function (e) {
      if (e && ea) {
        var n = typeof ea == "function" ? ea : domElementUtils.hasScroll;
        var t = eM.current;
        if (!t || !n(t)) {
          ew(false);
          return;
        }
      }
      ew(e);
    }, [ea, ew, eM]);
    if (featureFlagBooleanExport.isFeatureEnabled && eZ !== undefined && eZ) {
      reactCoreLibraryReexport.useLayoutEffect(function () {
        eD(true);
      });
    }
    v = {
      trigger: el,
      showAction: es,
      hideAction: ef,
      mouseEnterDelay: ed,
      mouseLeaveDelay: ep
    };
    m = {
      visible: eb,
      setVisible: eD,
      referenceRef: eA,
      referenceElementRef: eM,
      inlineElementMousePositionRef: eC
    };
    h = v.showAction;
    y = v.hideAction;
    Z = v.trigger;
    R = (g = v.mouseEnterDelay) === undefined ? popupTriggerComponent.triggerDefaults.mouseEnterDelay : g;
    M = (A = v.mouseLeaveDelay) === undefined ? popupTriggerComponent.triggerDefaults.mouseLeaveDelay : A;
    P = v.alignPoint;
    D = m.visible;
    L = m.setVisible;
    S = m.referenceRef;
    F = m.referenceElementRef;
    O = m.inlineElementMousePositionRef;
    W = function () {
      var e;
      var n = new Set(h ?? []);
      var t = new Set(y ?? []);
      var r = iteratorAdapterUtil.createIterator(typeof Z == "string" ? [Z] : Z ?? []);
      try {
        for (r.s(); !(e = r.n()).done;) {
          var o = e.value;
          if (o === "hover") {
            n.add("mouseEnter");
            t.add("mouseLeave");
            continue;
          }
          if (o === "click") {
            n.add("click");
            t.add("click");
            continue;
          }
          if (o === "contextMenu") {
            n.add("contextMenu");
            t.add("click");
            continue;
          }
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
      return [arrayIterableSliceUtil.sliceArrayIterable(n).join("_"), arrayIterableSliceUtil.sliceArrayIterable(t).join("_")];
    }();
    U = (K = iterableToArrayUtil_1_1.iterableToArray(W, 2))[0];
    q = K[1];
    J = domElementWindowUtils.isNotNullOrUndefined(P) ? P : U.includes(B.contextMenu);
    G = reactCoreLibraryReexport.useRef();
    Y = reactRefEffectUtils.useEventCallback(function () {
      if (G.current !== undefined) {
        window.clearTimeout(G.current);
        G.current = undefined;
      }
    });
    X = [reactRefEffectUtils.useEventCallback(function (e, n) {
      Y();
      G.current = window.setTimeout(function () {
        L.apply(undefined, arrayIterableSliceUtil.sliceArrayIterable(e));
      }, n);
    }), Y];
    ee = (Q = iterableToArrayUtil_1_1.iterableToArray(X, 2))[0];
    en = Q[1];
    et = reactRefEffectUtils.useEventCallback(function () {
      en();
      return L.apply(undefined, arguments);
    });
    er = reactRefEffectUtils.useEventCallback(function (e) {
      if (J) {
        var n = e.currentTarget;
        var t = new DOMRect(e.clientX, e.clientY, 0, 0);
        var r = n.getBoundingClientRect();
        reactRefEffectUtils.setRefValue(S, {
          getBoundingClientRect: function () {
            var e = n.getBoundingClientRect();
            return new DOMRect(e.x - r.x + t.x, e.y - r.y + t.y, 0, 0);
          },
          contextElement: n
        });
      }
    });
    var eL = {
      handleReferenceClick: reactRefEffectUtils.useEventCallback(function (e) {
        var n = z(e);
        if (n.isDefaultPrevented()) {
          return undefined;
        } else if (D && q.includes(B.click)) {
          return et(false);
        } else if (!D && U.includes(B.click)) {
          er(n);
          return et(true);
        } else {
          return undefined;
        }
      }),
      handleContextMenu: reactRefEffectUtils.useEventCallback(function (e) {
        var n = z(e);
        if (!!U.includes(B.contextMenu) && !n.isDefaultPrevented()) {
          n.preventDefault();
          er(n);
          et(true);
        }
      }),
      handleMouseEnter: reactRefEffectUtils.useEventCallback(function (e) {
        var n = z(e);
        O.current = {
          x: n.clientX,
          y: n.clientY
        };
        if (!n.isDefaultPrevented() && F.current && (n.currentTarget !== F.current || U.includes(B.mouseEnter) || D)) {
          ee([true], R);
        }
      }),
      handleMouseLeave: reactRefEffectUtils.useEventCallback(function (e) {
        var n = z(e);
        if (!!q.includes(B.mouseLeave) && !n.isDefaultPrevented()) {
          ee([false], M);
        }
      }),
      handleKeyDown: reactRefEffectUtils.useEventCallback(function (e) {
        var n = z(e);
        if (!n.isDefaultPrevented() && !(V in n.nativeEvent) && n.key === T.Escape) {
          et(false);
          if (D) {
            Object.assign(n.nativeEvent, objectPropertySetter.setObjectProperty({}, V, true));
          }
        }
      }),
      handleReferenceFocus: reactRefEffectUtils.useEventCallback(function () {}),
      showAction: U,
      hideAction: q,
      alignPoint: J,
      setVisible: et,
      setVisibleDelay: ee,
      mouseLeaveDelay: M
    };
    var eS = eL.handleReferenceClick;
    var e_ = eL.handleContextMenu;
    var eF = eL.handleMouseEnter;
    var eO = eL.handleMouseLeave;
    var eW = eL.handleKeyDown;
    var eH = eL.handleReferenceFocus;
    var eN = eL.setVisible;
    var eT = eL.showAction;
    var e$ = eL.hideAction;
    var eB = eL.alignPoint;
    var eV = eL.mouseLeaveDelay;
    var ez = eL.setVisibleDelay;
    var ej = reactCoreLibraryReexport.useMemo(function () {
      return mergeRefsUtil.mergeRefs(em, n);
    }, [n, em]);
    reactCoreLibraryReexport.useImperativeHandle(ej, function () {
      return {
        visible: eb,
        setVisible: eN,
        forcePopupAlign: function () {
          var e;
          if ((e = eP.update) === null || e === undefined) {
            return undefined;
          } else {
            return e.call(eP);
          }
        }
      };
    }, [eP, eN, eb]);
    return reactCoreLibraryReexport.createElement(_, {
      value: {
        showAction: eT,
        hideAction: e$,
        alignPoint: eB,
        visible: eb,
        handleReferenceClick: eS,
        handleContextMenu: e_,
        handleMouseEnter: eF,
        handleMouseLeave: eO,
        handleKeyDown: eW,
        handleReferenceFocus: eH,
        setVisible: eN,
        setVisibleDelay: ez,
        referenceRef: eA,
        referenceElement: ek,
        referenceElementRef: eM,
        popperLatestValues: eP,
        disabled: eh !== undefined && eh,
        rootPrefixCls: eg,
        mouseLeaveDelay: eV,
        inlineElementMousePositionRef: eC
      }
    }, ec);
  });
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactPortalWrapperComponent = require("react-portal-wrapper-component") /*id: 925365*/;
  var emotionTransitionFactory = require("emotion-transition-factory") /*id: 592980*/;
  var cubicBezierEasingConstant = require("cubic-bezier-easing-constant") /*id: 598912*/;
  var Y = emotionTransitionFactory.styledTransition({
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
        return `opacity ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}, transform ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}`;
      },
      enterActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}, transform ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}`;
      },
      exitActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}, transform ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}`;
      }
    }
  });
  var directionAwareSvgArrow = require("direction-aware-svg-arrow") /*id: 559377*/;
  var focusLockWrapper = require("focus-lock-wrapper") /*id: 422052*/;
  var ee = createContextWithSelector.createContextWithSelector("PopperPopupContext", {
    strict: true
  });
  var en = ee.Provider;
  var et = ee.useContext;
  var er = {
    appear: 0,
    enter: 0,
    exit: 0
  };
  var eo = {
    timeout: featureFlagBooleanExport.isFeatureEnabled ? er : {
      appear: 300,
      enter: 300,
      exit: 200
    }
  };
  var ei = ["children", "Transition", "timeout", "arrow", "popupPortalContainer", "getPopupContainer", "popupClassName", "popupStyle", "initialFocus", "enableFocusLock", "enableRestoreFocus", "inline", "transitionStatus"];
  function ea(e) {
    var n = e.hasStroke;
    var t = F().rootPrefixCls;
    var r = et().placement;
    var o = r ? r.startsWith("right") || r.startsWith("left") ? "vertical" : r.startsWith("top") || r.startsWith("bottom") ? "horizontal" : undefined : undefined;
    return reactCoreLibraryReexport.createElement(directionAwareSvgArrow.createDirectionalArrow, {
      direction: o,
      className: `${t}__arrow__streamline`,
      hasStroke: n,
      style: {
        display: "flex",
        transform: r ? r.startsWith("right") ? `translate(${n ? "calc(1px - 100%)" : "-100%"}, -50%) rotate(180deg)` : r.startsWith("left") ? `translate(${n ? "-1px" : "0"}, -50%)` : r.startsWith("top") ? `translate(-50%, ${n ? "-1px" : "0"})` : r.startsWith("bottom") ? `translate(-50%, ${n ? "calc(1px - 100%)" : "-100%"}) rotate(180deg)` : undefined : undefined,
        zIndex: "inherit",
        position: "absolute"
      }
    });
  }
  function eu(e) {
    var n;
    var t;
    var r;
    var o;
    var c;
    var l;
    var L;
    var S;
    var _;
    var H = e.children;
    var N = e.Transition;
    var T = e.timeout;
    var $ = T === undefined ? eo.timeout : T;
    var V = e.arrow;
    var j = e.popupPortalContainer;
    var K = e.getPopupContainer;
    var J = e.popupClassName;
    var G = e.popupStyle;
    var X = e.initialFocus;
    var ee = e.enableFocusLock;
    var et = ee !== undefined && ee;
    var er = e.enableRestoreFocus;
    var ea = er === undefined || er;
    var eu = e.inline;
    var ec = e.transitionStatus;
    var el = objectOmitHelper_1.omitWithSymbols(e, ei);
    var es = F();
    var ef = es.handleMouseEnter;
    var ed = es.handleMouseLeave;
    var ep = es.handleKeyDown;
    var ev = es.visible;
    var em = es.referenceElementRef;
    var eh = es.rootPrefixCls;
    var ey = es.showAction;
    var eZ = es.mouseLeaveDelay;
    var eg = es.disabled;
    var ex = es.setVisibleDelay;
    var eE = es.inlineElementMousePositionRef;
    var eb = function (e, n = {}) {
      var t = n.skipped;
      var r = t !== undefined && t;
      var o = reactCoreLibraryReexport.useContext(P);
      var a = e.placement;
      var c = a === undefined ? "bottom" : a;
      var l = e.offset;
      var M = l === undefined ? 0 : l;
      var k = e.eventListeners;
      var L = k === undefined ? {} : k;
      var S = e.shift;
      var _ = S === undefined || S;
      var H = e.rootBoundary;
      var N = H === undefined ? "viewport" : H;
      var T = e.boundary;
      var $ = T === undefined ? o ?? "clippingAncestors" : T;
      var B = e.boundaryPadding;
      var V = B === undefined ? 16 : B;
      var z = e.arrowPadding;
      var j = z === undefined ? 0 : z;
      var I = e.middlewares;
      var K = I === undefined ? W.middleware : I;
      var U = e.matchReferenceWidth;
      var q = U !== undefined && U;
      var J = e.flip;
      var G = J === undefined || J;
      var Y = e.enableMaxHeight;
      var X = Y === undefined || Y;
      var Q = e.enableAutoHide;
      var ee = Q === undefined || Q;
      var en = e.onPositioned;
      var et = e.inline;
      var er = L.scroll;
      var eo = er === undefined || er;
      var ei = L.resize;
      var ea = ei === undefined || ei;
      var eu = L.resizeObserver;
      var ec = eu === undefined || eu;
      var el = F();
      var es = el.referenceElement;
      var ef = el.referenceRef;
      var ed = el.referenceElementRef;
      var ep = el.popperLatestValues;
      var ev = reactRefEffectUtils.useEventCallback(en);
      var em = reactCoreLibraryReexport.useContext(A);
      var eh = reactRefEffectUtils.useEventCallback(function () {
        var n = (em == null ? undefined : em.getScrollParents()) ?? [];
        var t = [ed.current, ew.current].filter(domElementUtils.isElementNode);
        if (!t.length) {
          return n;
        }
        var r = dataProcessor.processData(t.map(function (e) {
          return domLayoutUtils.getScrollParents(e);
        }).flat());
        return dataProcessor.processData([].concat(arrayIterableSliceUtil.sliceArrayIterable(r), arrayIterableSliceUtil.sliceArrayIterable(n)));
      });
      var ey = reactCoreLibraryReexport.useRef(null);
      function eZ() {
        if (ey.current) {
          ey.current();
        }
      }
      function eg() {
        var e = ew.current;
        if (!r && ec && e) {
          ey.current = resizeObserverManager_1.ResizeObserver.subscribe(e, eF);
        }
      }
      var ex = reactCoreLibraryReexport.useRef(null);
      function eE() {
        if (ex.current) {
          ex.current();
        }
      }
      function eb() {
        if (!r && eo) {
          var e = eh();
          if (e.length) {
            e.forEach(function (e) {
              e.addEventListener("scroll", eF);
            });
            ex.current = function () {
              e.forEach(function (e) {
                e.removeEventListener("scroll", eF);
              });
            };
          }
        }
      }
      reactEffectHook.useEffectHook(function () {
        eZ();
        eE();
      });
      var ew = reactCoreLibraryReexport.useRef(null);
      var eC = reactRefMemoizedSetter.useMemoizedRefSetter(null, function (e) {
        ew.current = e;
        e_({
          reference: ef.current,
          floating: e
        });
        eZ();
        eg();
        eE();
        eb();
      });
      var eR = reactCoreLibraryReexport.useRef(null);
      var eA = useImmerHooks.useImmer(function () {
        return {
          placement: null,
          referenceHidden: false
        };
      });
      var eM = iterableToArrayUtil_1_1.iterableToArray(eA, 2);
      var ek = eM[0];
      var eP = eM[1];
      var eD = reactCoreLibraryReexport.useMemo(function () {
        var e = {
          boundary: $,
          padding: V,
          rootBoundary: N
        };
        var n = G ? objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({
          fallbackStrategy: "bestFit"
        }, e), G === true ? {} : G) : {};
        var t = _ ? objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
          crossAxis: true
        }, _ === true ? {} : _) : {};
        return [et ? floatingUiPositionMiddleware.inlineMiddleware(et) : undefined, q ? {
          name: "matchReferenceWidth",
          fn: function (e) {
            var n = e.placement;
            var t = e.rects;
            var r = e.elements.floating;
            if (["top", "bottom"].includes(n.split("-")[0])) {
              t.floating.width = t.reference.width;
              r.style.width = `${t.reference.width}px`;
            }
            return {};
          }
        } : undefined, floatingUiPositionMiddleware.offsetMiddleware(M), ee ? floatingUiPositionMiddleware.hideMiddleware(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
          padding: 0
        })) : undefined, G ? floatingUiPositionMiddleware.flipMiddleware(n) : undefined, _ ? floatingUiPositionMiddleware.shiftMiddleware(t) : undefined, X && !et ? floatingUiPositionMiddleware.sizeMiddleware(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
          apply: function (e) {
            var n = e.availableHeight;
            var t = eC.current;
            if (t) {
              Object.assign(t.style, {
                maxHeight: `${n}px`
              });
            }
          }
        })) : undefined, {
          name: "arrow",
          fn: function (e) {
            if (eR.current !== null) {
              return floatingUiPositionMiddleware.arrowMiddleware({
                element: eR.current,
                padding: j
              }).fn(e);
            } else {
              return {};
            }
          }
        }, {
          name: "transformOrigin",
          fn: function (e) {
            var n = e.placement;
            var t = e.rects;
            var r = e.middlewareData.arrow;
            if (!r) {
              return {};
            }
            var o = r.x;
            var i = r.y;
            var a = t.floating;
            var u = a.width;
            var c = a.height;
            var l = "";
            if (n.startsWith("right")) {
              l = `0 ${(i ?? 0) / c * 100}%`;
            }
            if (n.startsWith("left")) {
              l = `100% ${(i ?? 0) / c * 100}%`;
            }
            if (n.startsWith("top")) {
              l = `${(o ?? 0) / u * 100}% 100%`;
            }
            if (n.startsWith("bottom")) {
              l = `${(o ?? 0) / u * 100}% 0`;
            }
            return {
              data: {
                transformOrigin: l
              }
            };
          }
        }];
      }, [j, ee, $, V, G, eC, et, q, X, M, N, _]);
      var eL = useRefCacheHook.useRefCache(function () {
        return new behaviorSubjectClass.BehaviorSubject({
          reference: null,
          floating: null,
          placement: c,
          middleware: []
        });
      });
      var eS = useRefCacheHook.useRefCache(function () {
        return eL.pipe(safeObservableSwitchUtil.createSafeSwitchMap(function (e) {
          var n = e.reference;
          var t = e.floating;
          var r = e.placement;
          var o = e.middleware;
          if (n && t) {
            return observableFromSource.fromAnySource(floatingUiPlatformUtils.computePosition(n, t, {
              middleware: o,
              placement: r,
              strategy: "absolute"
            }).then(function (e) {
              return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, e), {}, {
                floating: t
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
            var n;
            var t = e.x;
            var r = e.y;
            var o = e.placement;
            var i = e.middlewareData;
            var a = i.hide;
            var u = (a === undefined ? {} : a).referenceHidden;
            var c = u !== undefined && u;
            var l = i.arrow;
            var s = l === undefined ? {} : l;
            var f = s.x;
            var d = s.y;
            var p = i.transformOrigin;
            var v = e.floating;
            eP(function (n) {
              n.placement = e.placement;
              n.referenceHidden = c;
            });
            v.dataset.popperPlacement = o;
            v.style.top = "0px";
            v.style.left = "0px";
            v.style.transform = `translate3d(${Math.round(t)}px, ${Math.round(r)}px, 0)`;
            (function () {
              var e = eR.current;
              if (e) {
                e.style.top = "";
                e.style.left = "";
                e.style.bottom = "";
                e.style.right = "";
                var n = function () {
                  switch (o.split("-")[0]) {
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
                e.style.left = domElementWindowUtils.isNotNullOrUndefined(f) ? `${f}px` : "";
                e.style.top = domElementWindowUtils.isNotNullOrUndefined(d) ? `${d}px` : "";
                e.style[n] = "0px";
              }
            })();
            if (n = v.querySelector("[data-popper-animated]")) {
              Object.assign(n.style, p);
            }
            if (domElementWindowUtils.isFunction(ev)) {
              ev(e);
            }
          },
          error: function (e) {}
        });
        return function () {
          e.unsubscribe();
        };
      }, [eS, ev, eP]);
      var e_ = reactCoreLibraryReexport.useCallback(function (e) {
        var n = e.reference;
        var t = e.floating;
        eL.next({
          reference: n,
          floating: t,
          placement: c,
          middleware: [].concat(arrayIterableSliceUtil.sliceArrayIterable(eD), arrayIterableSliceUtil.sliceArrayIterable(K)).filter(domElementWindowUtils.isNotNullOrUndefined)
        });
      }, [eL, c, eD, K]);
      var eF = reactCoreLibraryReexport.useCallback(function () {
        e_({
          reference: ef.current,
          floating: eC.current
        });
      }, [e_, eC, ef]);
      ep.update = eF;
      ep.updateByReference = reactRefEffectUtils.useEventCallback(function (e) {
        e_({
          reference: e,
          floating: eC.current
        });
      });
      ep.resetPlacement = reactCoreLibraryReexport.useCallback(function () {
        eP(function (e) {
          e.placement = null;
        });
      }, [eP]);
      reactCoreLibraryReexport.useEffect(function () {
        if (!r && ea) {
          var e = domElementWindowUtils.getWindowFromElement(es);
          e.addEventListener("resize", eF);
          return function () {
            e.removeEventListener("resize", eF);
          };
        }
      }, [es, ea, r, eF]);
      reactCoreLibraryReexport.useEffect(function () {
        if (!r && ec && es) {
          return resizeObserverManager_1.ResizeObserver.subscribe(es, eF);
        }
      }, [es, ec, r, eF]);
      reactRefEffectUtils.useLayoutEffect(eF, [eF]);
      return {
        placement: ek.placement,
        referenceHidden: (em == null ? undefined : em.referenceHidden) || ek.referenceHidden,
        floatingRef: eC,
        arrowRef: eR,
        getScrollParents: eh
      };
    }(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, el), {}, {
      inline: eu !== undefined && eu ? {
        get x() {
          return eE.current.x;
        },
        get y() {
          return eE.current.y;
        }
      } : undefined
    }), {
      skipped: eg || !ev
    });
    var ew = eb.floatingRef;
    var eC = eb.arrowRef;
    var eR = eb.placement;
    var eA = eb.getScrollParents;
    var eM = eb.referenceHidden;
    t = (n = {
      referenceElementRef: em,
      floatingRef: ew,
      visible: ev,
      setVisibleDelay: ex
    }).visible;
    r = n.setVisibleDelay;
    o = n.floatingRef;
    c = n.referenceElementRef;
    l = reactCoreLibraryReexport.useRef({
      mousedown: null
    });
    L = function (e, n, t) {
      if (!domElementUtils.containsElement(n, t)) {
        l.current[e] = t;
      }
    };
    S = reactRefEffectUtils.useEventCallback(function () {});
    _ = reactRefEffectUtils.useEventCallback(function (e) {
      var n = z(e);
      L("mousedown", n.currentTarget, n.target);
    });
    documentOutsideClickHandler.useOutsideClickHandler("mousedown", {
      listener: reactCoreLibraryReexport.useCallback(function () {
        r([false], 0);
      }, [r]),
      elements: reactCoreLibraryReexport.useMemo(function () {
        return [o, c, function () {
          return l.current.mousedown;
        }];
      }, [o, c]),
      skipped: !t
    });
    var ek = {
      handlePopupFocus: S,
      handlePopperMouseDownCapture: _
    };
    var eP = ek.handlePopupFocus;
    var eD = ek.handlePopperMouseDownCapture;
    var eL = reactCoreLibraryReexport.useRef(null);
    var eS = useRefCacheHook.useRefCache(function () {
      return [ew, em];
    });
    var e_ = reactContextUtilsHooks.usePopupContainer();
    var eF = reactCoreLibraryReexport.useMemo(function () {
      return j !== false && (j === null ? null : function () {
        if (domElementWindowUtils.isFunction(j)) {
          return j(em.current);
        } else if (j) {
          return j.current;
        } else if (em.current) {
          return (K ?? e_)(em.current);
        } else {
          return null;
        }
      });
    }, [e_, K, j, em]);
    var eO = X === null ? null : X ?? eL;
    var eW = eM != null && eM;
    var eH = eZ === 0;
    var eN = {
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
      onMouseEnter: ef,
      onMouseLeave: ed,
      onMouseDownCapture: eD,
      onKeyDown: ep
    };
    return reactCoreLibraryReexport.createElement(M, {
      value: {
        getScrollParents: eA,
        referenceHidden: eM
      }
    }, reactCoreLibraryReexport.createElement(en, {
      value: {
        placement: eR
      }
    }, reactCoreLibraryReexport.createElement(reactPortalWrapperComponent.PortalWrapper, {
      container: eF
    }, reactCoreLibraryReexport.createElement("div", {
      className: conditionalClassnames.default(eh, J),
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({
        position: "absolute",
        display: "flex",
        flexDirection: "column"
      }, eW || ec === "exited" ? {
        visibility: "hidden",
        opacity: 0
      } : {}), eW || eH || !ev ? {
        pointerEvents: "none"
      } : {}), G),
      ref: ew,
      onFocus: eP
    }, reactCoreLibraryReexport.createElement(N === undefined ? Y : N, {
      nodeRef: eL,
      timeout: $,
      appear: true,
      in: ev && eR !== null,
      mountOnEnter: false,
      unmountOnExit: false,
      extraProps: {
        placement: eR ?? "left"
      }
    }, function (e) {
      return reactCoreLibraryReexport.createElement(focusLockWrapper.FocusLockWrapper, {
        ref: eL,
        initialFocusRef: eO,
        restoreFocus: !ey.includes(B.mouseEnter) && ea,
        enableFocusLock: et,
        shards: eS,
        isDisabled: eW || !ev || eH,
        as: "section",
        className: `${eh}__content`,
        lockProps: e === "exited" ? objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, eN), {}, {
          style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, eN.style), {}, {
            opacity: 0
          })
        }) : eN
      }, H, reactCoreLibraryReexport.createElement("div", {
        className: `${eh}__arrow`,
        style: {
          position: "absolute",
          lineHeight: 0
        },
        ref: eC
      }, V));
    })))));
  }
  var reactRefDomHandler = require("react-ref-dom-handler") /*id: 908742*/;
  function el() {
    var e = arguments.length;
    var n = Array(e);
    var t = 0;
    for (; t < e; t++) {
      n[t] = arguments[t];
    }
    return function (e) {
      for (var t = 0; t < n.length; t++) {
        var r;
        var o = n[t];
        if (domElementWindowUtils.isNotNullOrUndefined(o)) {
          o(e);
        }
        if (e != null && (r = e.isDefaultPrevented) !== null && r !== undefined && r.call(e)) {
          return;
        }
      }
    };
  }
  function es(e) {
    var n = F();
    var t = n.rootPrefixCls;
    var r = n.referenceRef;
    var o = n.handleReferenceClick;
    var i = n.handleMouseEnter;
    var a = n.handleMouseLeave;
    var c = n.handleContextMenu;
    var l = n.handleKeyDown;
    var f = n.handleReferenceFocus;
    var d = n.alignPoint;
    var p = n.disabled;
    var v = n.visible;
    var m = e.children;
    var h = e.className;
    var y = e.style;
    var Z = e.openClassName;
    var g = e.domOnly;
    var E = domElementWindowUtils.isFunction(m) ? m({
      visible: v
    }) : m;
    var b = conditionalClassnames.default(E.props.className, h, v && (Z === undefined ? `${t}-open` : Z));
    var C = {
      onClick: reactRefEffectUtils.useEventCallback(el(E.props.onClick, e.onClick, o)),
      onMouseEnter: reactRefEffectUtils.useEventCallback(el(E.props.onMouseEnter, e.onMouseEnter, i)),
      onMouseLeave: reactRefEffectUtils.useEventCallback(el(E.props.onMouseLeave, e.onMouseLeave, a)),
      onFocus: reactRefEffectUtils.useEventCallback(el(E.props.onFocus, e.onFocus, f)),
      onContextMenu: reactRefEffectUtils.useEventCallback(el(E.props.onContextMenu, e.onContextMenu, c)),
      onKeyDown: reactRefEffectUtils.useEventCallback(el(E.props.onKeyDown, e.onKeyDown, l))
    };
    E = reactCoreLibraryReexport.cloneElement(E, objectPropertyAssign.assignObject(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, b ? {
      className: b
    } : {}), {}, {
      style: objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, y), E.props.style)
    }, v && !domElementWindowUtils.isNotNullOrUndefined(E.props["aria-expanded"]) ? {
      "aria-expanded": v
    } : {}), p ? {} : C));
    return E = reactRefDomHandler.RefDomWrapper({
      children: E,
      ref: r
    }, {
      skipped: d || p,
      domOnly: g === undefined || g
    });
  }
  var reactTransitionComponent = require("react-transition-component") /*id: 888866*/;
  var useVisibilityTransition = require("use-visibility-transition") /*id: 107130*/;
  function ep(e) {
    var n = e.timeout;
    var t = n === undefined ? eo.timeout : n;
    var r = e.forceRender;
    var o = e.destroyOnHide;
    var i = e.onAfterClose;
    var a = e.onAfterOpen;
    var c = e.children;
    var l = F();
    var s = l.visible;
    var f = l.popperLatestValues;
    var d = useVisibilityTransition.useEmptyRef();
    return reactCoreLibraryReexport.createElement(reactTransitionComponent.Transition, {
      nodeRef: d,
      timeout: t,
      appear: true,
      in: s,
      mountOnEnter: r === undefined || !r,
      unmountOnExit: o === undefined || o,
      onEnter: function () {
        var e;
        if ((e = f.update) !== null && e !== undefined) {
          e.call(f);
        }
      },
      onEntered: function () {
        if (domElementWindowUtils.isFunction(a)) {
          a();
        }
      },
      onExited: function () {
        var e;
        if (domElementWindowUtils.isFunction(i)) {
          i();
        }
        if ((e = f.resetPlacement) !== null && e !== undefined) {
          e.call(f);
        }
      }
    }, c);
  }
  var ev = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var t = e.children;
    var r = e.popup;
    return reactCoreLibraryReexport.createElement(K, objectAssignUtil.objectAssign({
      ref: n
    }, e), reactCoreLibraryReexport.createElement(es, e, t), reactCoreLibraryReexport.createElement(ep, e, function (n) {
      return reactCoreLibraryReexport.createElement(eu, objectAssignUtil.objectAssign({}, e, {
        transitionStatus: n
      }), r);
    }));
  });
  function em(e) {
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
  var constantsGeometryCoordinates = require("constants-geometry-coordinates") /*id: 57731*/;
  var reducedMotionConfigContext = require("reduced-motion-config-context") /*id: 898006*/;
  var eZ = ["action", "popupPlacement", "showArrow", "arrowHasStroke", "popupMotion", "defaultMainAxisOffsetWithoutArrow", "prefixCls", "enableAnimation", "popupAlign", "offset", "flip", "shift"];
  var eg = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var l = e.action;
    var s = e.popupPlacement;
    var f = e.showArrow;
    var d = e.arrowHasStroke;
    e.popupMotion;
    var p = e.defaultMainAxisOffsetWithoutArrow;
    var v = e.prefixCls;
    var m = e.enableAnimation;
    var h = e.popupAlign;
    var y = e.offset;
    var Z = e.flip;
    var g = e.shift;
    var E = objectOmitHelper_1.omitWithSymbols(e, eZ);
    var b = h ?? {};
    var w = b == null ? undefined : b.offset;
    var C = b == null ? undefined : b.points;
    var R = b == null ? undefined : b.overflow?.adjustX;
    var A = b == null ? undefined : b.overflow?.adjustY;
    var M = b == null ? undefined : b.overflow?.alwaysByViewport;
    var k = function () {
      if (domElementWindowUtils.isNotNullOrUndefined(C)) {
        var e = iterableToArrayUtil_1_1.iterableToArray(C, 2);
        var n = e[0];
        var t = e[1];
        if (n === "tr" && t === "tl") {
          return "left-start";
        }
        if (n === "cr" && t === "cl") {
          return "left";
        }
        if (n === "br" && t === "bl") {
          return "left-end";
        }
        if (n === "tl" && t === "tr") {
          return "right-start";
        }
        if (n === "cl" && t === "cr") {
          return "right";
        }
        if (n === "bl" && t === "br") {
          return "right-end";
        }
        if (n === "bl" && t === "tl") {
          return "top-start";
        }
        if (n === "bc" && t === "tc") {
          return "top";
        }
        if (n === "br" && t === "tr") {
          return "top-end";
        }
        if (n === "tl" && t === "bl") {
          return "bottom-start";
        }
        if (n === "tc" && t === "bc") {
          return "bottom";
        }
        if (n === "tr" && t === "br") {
          return "bottom-end";
        }
      }
      return em(s);
    }();
    var P = k.startsWith("top");
    var D = k.startsWith("bottom");
    var L = P || D;
    var S = reactCoreLibraryReexport.useMemo(function () {
      if (domElementWindowUtils.isNotNullOrUndefined(Z)) {
        return Z;
      } else if (domElementWindowUtils.isNotNullOrUndefined(R) || domElementWindowUtils.isNotNullOrUndefined(A)) {
        if (L) {
          return {
            mainAxis: A === undefined || !!A,
            crossAxis: R === undefined || !!R
          };
        } else {
          return {
            mainAxis: R === undefined || !!R,
            crossAxis: A === undefined || !!A
          };
        }
      } else {
        return undefined;
      }
    }, [R, A, Z, L]);
    var _ = reactCoreLibraryReexport.useMemo(function () {
      if (domElementWindowUtils.isNotNullOrUndefined(g)) {
        return g;
      } else if (domElementWindowUtils.isNotNullOrUndefined(R) || domElementWindowUtils.isNotNullOrUndefined(A)) {
        if (L) {
          return {
            mainAxis: R === undefined || !!R
          };
        } else {
          return {
            mainAxis: A === undefined || !!A
          };
        }
      } else {
        return undefined;
      }
    }, [R, A, L, g]);
    var F = reactCoreLibraryReexport.useMemo(function () {
      if (domElementWindowUtils.isNotNullOrUndefined(w)) {
        var e = iterableToArrayUtil_1_1.iterableToArray(w, 2);
        var n = e[0];
        var t = e[1];
        if (k.startsWith("right")) {
          return {
            mainAxis: n,
            crossAxis: t
          };
        }
        if (k.startsWith("left")) {
          return {
            mainAxis: -n,
            crossAxis: t
          };
        }
        if (k.startsWith("bottom")) {
          return {
            mainAxis: t,
            crossAxis: n
          };
        }
        if (k.startsWith("top")) {
          return {
            mainAxis: -t,
            crossAxis: n
          };
        }
      }
      if (domElementWindowUtils.isNotNullOrUndefined(y)) {
        return y;
      } else {
        return (f ? constantsGeometryCoordinates.Coordinates.y : 0) + p;
      }
    }, [w, p, y, k, f]);
    var O = !reducedMotionConfigContext.useReducedMotionConfig(domElementWindowUtils.isNotNullOrUndefined(m) ? !m : undefined);
    return reactCoreLibraryReexport.createElement(ev, objectAssignUtil.objectAssign({
      ref: n,
      prefixCls: v,
      placement: k,
      trigger: l,
      arrow: f ? reactCoreLibraryReexport.createElement(ea, {
        hasStroke: d
      }) : null,
      timeout: O ? undefined : er,
      offset: F,
      arrowPadding: f ? constantsGeometryCoordinates.gridSize + constantsGeometryCoordinates.Coordinates.x : 0,
      flip: S,
      shift: _,
      rootBoundary: M === false ? "document" : undefined
    }, E));
  });
  require.d(exports, {
    PopperComponent: function () {
      return eg;
    }
  });
}