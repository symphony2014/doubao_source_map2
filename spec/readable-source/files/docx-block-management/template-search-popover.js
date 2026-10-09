// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SearchPopover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: template_search_popover.30dbc5de.js
         * chunkId: 75647
         * moduleId: 523597
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var selectionEventDriverAndManager = require("selection-event-driver-and-manager") /*id: 282246*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var stubBooleanFunctions = require("stub-boolean-functions") /*id: 871839*/;
  var overlayUiConstants = require("overlay-ui-constants") /*id: 645442*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var emptyObjectFactories = require("empty-object-factories") /*id: 176701*/;
  var uiLayoutPositionUtils = require("ui-layout-position-utils") /*id: 274647*/;
  let p = Object.assign({
    [uiLayoutPositionEnums.positionAlignTypes.None]: () => ({
      width: 0,
      height: 0
    }),
    [uiLayoutPositionEnums.positionAlignTypes.LeftTextCenter]: (t, e, n) => ({
      width: t.x - e.x - n[uiLayoutPositionEnums.positionAlignTypes.LeftTextCenter][0],
      height: e.height - n[uiLayoutPositionEnums.positionAlignTypes.LeftTextCenter][1]
    }),
    [uiLayoutPositionEnums.positionAlignTypes.LeftCenter]: (t, e, n) => ({
      width: t.x - e.x - n[uiLayoutPositionEnums.positionAlignTypes.LeftCenter][0],
      height: e.height - n[uiLayoutPositionEnums.positionAlignTypes.LeftCenter][1]
    }),
    [uiLayoutPositionEnums.positionAlignTypes.RightTextCenter]: (t, e, n) => ({
      width: e.x + e.width - t.x - t.width - n[uiLayoutPositionEnums.positionAlignTypes.RightTextCenter][0],
      height: e.height - n[uiLayoutPositionEnums.positionAlignTypes.RightTextCenter][1]
    }),
    [uiLayoutPositionEnums.positionAlignTypes.RightCenter]: (t, e, n) => ({
      width: e.x + e.width - t.x - t.width - n[uiLayoutPositionEnums.positionAlignTypes.RightCenter][0],
      height: e.height - n[uiLayoutPositionEnums.positionAlignTypes.RightCenter][1]
    }),
    [uiLayoutPositionEnums.positionAlignTypes.TopLeft]: (t, e, n) => ({
      width: e.x + e.width - t.x - n[uiLayoutPositionEnums.positionAlignTypes.TopLeft][0],
      height: t.y - e.y - n[uiLayoutPositionEnums.positionAlignTypes.TopLeft][1]
    }),
    [uiLayoutPositionEnums.positionAlignTypes.BottomLeft]: (t, e, n) => ({
      width: e.x + e.width - t.x - n[uiLayoutPositionEnums.positionAlignTypes.BottomLeft][0],
      height: e.y + e.height - t.y - t.height - n[uiLayoutPositionEnums.positionAlignTypes.BottomLeft][1]
    }),
    [uiLayoutPositionEnums.positionAlignTypes.TopRight]: (t, e, n) => ({
      width: t.x + t.width - e.x - n[uiLayoutPositionEnums.positionAlignTypes.TopRight][0],
      height: t.y - e.y - n[uiLayoutPositionEnums.positionAlignTypes.TopRight][1]
    }),
    [uiLayoutPositionEnums.positionAlignTypes.BottomRight]: (t, e, n) => ({
      width: t.x + t.width - e.x - n[uiLayoutPositionEnums.positionAlignTypes.BottomRight][0],
      height: e.y + e.height - t.y - t.height - n[uiLayoutPositionEnums.positionAlignTypes.BottomRight][1]
    }),
    [uiLayoutPositionEnums.positionAlignTypes.TopCenter]: (t, e, n) => ({
      width: e.width - n[uiLayoutPositionEnums.positionAlignTypes.TopCenter][0],
      height: t.y - e.y - n[uiLayoutPositionEnums.positionAlignTypes.TopCenter][1]
    }),
    [uiLayoutPositionEnums.positionAlignTypes.BottomCenter]: (t, e, n) => ({
      width: e.width - n[uiLayoutPositionEnums.positionAlignTypes.BottomCenter][0],
      height: e.y + e.height - t.y - t.height - n[uiLayoutPositionEnums.positionAlignTypes.BottomCenter][1]
    })
  }, emptyObjectFactories.createEmptyObject3());
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxGuideConstants = require("docx-guide-constants") /*id: 98296*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var docxOverlayPositionSync = require("docx-overlay-position-sync") /*id: 662835*/;
  var useDocumentDimensions = require("use-document-dimensions") /*id: 692822*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let M = reactCoreLibraryReexport.forwardRef((t, e) => {
    let {
      visible: n,
      hidden: r,
      domRef: o,
      positionInfo: s,
      className: u,
      animationName: c = "",
      transition: h = false,
      style: m,
      children: v
    } = t;
    let p = reactCoreLibraryReexport.useRef(null);
    let [g, b] = reactCoreLibraryReexport.useState({});
    let [_, y] = reactCoreLibraryReexport.useState(false);
    let [w, E] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      b(t => {
        let e = {
          position: "fixed",
          ...m,
          ...s
        };
        if (deepEqualUtil_1.deepEqual(t, e)) {
          return t;
        } else {
          y(true);
          return e;
        }
      });
    }, [s, m]);
    let N = reactCoreLibraryReexport.useCallback(() => {
      y(false);
    }, []);
    reactCoreLibraryReexport.useImperativeHandle(e, () => ({
      elementRef: p
    }), []);
    let O = reactCoreLibraryReexport.useMemo(() => r || Object.keys(s).length === 0, [r, s]);
    let M = reactCoreLibraryReexport.useMemo(() => a(overlayUiConstants.overlayClass, u, {
      "overlay-hidden": O,
      "overlay-transition": !O && _ && w && h
    }, c ? {
      [c]: !O && !w
    } : undefined), [u, O, _, c, w, h]);
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: M,
        style: g,
        onAnimationEnd: () => {
          E(c !== uiLayoutPositionEnums.animationSlideTypes.None);
        },
        onTransitionEnd: N,
        ref: o,
        children: v
      });
    } else {
      return null;
    }
  });
  var L = t => {
    var e;
    let {
      targetRect: n,
      boundaryRect: r,
      mask: o,
      calcDirectionOnce: s,
      calcDirection: m,
      zIndex: L,
      children: C,
      visible: R,
      className: T,
      blockManager: A,
      setOverlayRef: S,
      hideWhenOverflow: k = false,
      hidden: z = false,
      sticky: B = [true, false],
      calcPosition: D = uiLayoutPositionUtils.calcAlignPosition,
      animation: j = uiLayoutPositionEnums.animationEffectTypes.Slide,
      transition: Z,
      onClose: W,
      ignoreContainerFocusNode: P,
      ignoreTriggerTargetClass: I,
      bubbleForbidden: H = false,
      getStickyPosInfo: F = uiLayoutPositionUtils.adjustStickyPosition,
      hiddenOnDemand: V,
      identifier: G
    } = t;
    let [q, K] = reactCoreLibraryReexport.useState(null);
    let U = docxOverlayPositionSync.useOverlayPosition(q, A, R);
    let $ = reactCoreLibraryReexport.useCallback(t => {
      if (H) {
        t.stopPropagation();
        t.nativeEvent.stopImmediatePropagation();
      }
    }, [H]);
    let Q = reactCoreLibraryReexport.useCallback(t => {
      K(t);
      if (S != null) {
        S(t);
      }
    }, [S]);
    (function (t) {
      let {
        contentEle: e,
        onClose: n,
        ignoreContainerFocusNode: r,
        ignoreTriggerTargetClass: o
      } = t;
      let s = reactCoreLibraryReexport.useCallback(t => {
        if (t.target instanceof Element && e && e.contains(t.target) || t.target instanceof Element && t.target.closest(".meego-block-by-selection-creator-container") || t.target instanceof Element && t.target.closest(".xgplayer-video-container") || t.target instanceof Element && t.target.closest(".guide-panel-help-link") || t.target instanceof Element && t.target.closest(`.${docxGuideConstants.docxGuidePopoverId}`) || e && e.classList.contains("block-toolbar__overlay") && t.target instanceof Element && t.target.closest(`.${docBlockTypeConstants.agendaItemBlock}`) || t.target instanceof Element && t.target.closest(".resizable-container") || o && t.target instanceof Element && t.target.closest(`.${o}`)) {
          return;
        }
        let s = window.getSelection()?.focusNode;
        if (!!r || !s || !(t.target instanceof Element) || !t.target.contains(s)) {
          if (n != null) {
            n(t);
          }
        }
      }, [e, o, r, n]);
      reactCoreLibraryReexport.useEffect(() => {
        document.addEventListener("pointerdown", s, true);
        return () => {
          document.removeEventListener("pointerdown", s, true);
        };
      }, [s]);
    })({
      contentEle: q,
      onClose: W,
      ignoreContainerFocusNode: P,
      ignoreTriggerTargetClass: I
    });
    let [X, Y] = reactCoreLibraryReexport.useState(uiLayoutPositionEnums.positionAlignTypes.None);
    let J = reactCoreLibraryReexport.useMemo(() => Array.isArray(t.allowDirections) ? t.allowDirections : [t.allowDirections], [t.allowDirections]);
    e = t.offset;
    let tt = reactCoreLibraryReexport.useMemo(() => J.reduce((t, n) => {
      let i = e ?? 0;
      if (isNumberUtil.isNumber(i)) {
        t[n] = [i, i];
      } else if (Array.isArray(i)) {
        t[n] = i;
      } else if (i[n]) {
        t[n] = i[n];
      } else {
        t[n] = [0, 0];
      }
      return t;
    }, {
      [uiLayoutPositionEnums.positionAlignTypes.None]: [0, 0]
    }), [e, J]);
    let te = function (t, e, n, r) {
      let [o, s] = reactCoreLibraryReexport.useState({});
      reactCoreLibraryReexport.useEffect(() => {
        s(i => {
          if (uiLayoutPositionUtils.isEmptyRect(t) || uiLayoutPositionUtils.isEmptyRect(e)) {
            return {};
          }
          let o = r.reduce((i, r) => {
            i[r] = p[r](t, e, n);
            return i;
          }, {});
          if (Object.keys(o).length !== Object.keys(i).length || Object.keys(i).some(t => !deepEqualUtil_1.deepEqual(i[t], o[t]))) {
            return o;
          } else {
            return i;
          }
        });
      }, [t, e, n, r]);
      return o;
    }(n, r, tt, J);
    let tn = useDocumentDimensions.useDocumentDimensions(R);
    let [ti, tr] = reactCoreLibraryReexport.useState(overlayUiConstants.defaultRect);
    (function (t, e) {
      let n = reactCoreLibraryReexport.useMemo(() => window.visualViewport ? function (t) {
        let e = 0;
        let n = 0;
        let i = () => {
          let i = document.body.getBoundingClientRect().toJSON();
          if (window.visualViewport) {
            let {
              pageTop: t,
              offsetTop: e
            } = window.visualViewport;
            i.top += t - e;
          }
          if (e !== i.top || n !== i.left) {
            e = i.top;
            n = i.left;
            t(i);
          }
        };
        return {
          run: () => {
            i();
            window.visualViewport.addEventListener("resize", i);
            window.visualViewport.addEventListener("scroll", i);
            docxEditorEventConstantsAndManager.globalEventEmitter.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.KEYBOARD_CHANGED, i);
          },
          cancel: () => {
            window.visualViewport.removeEventListener("resize", i);
            window.visualViewport.removeEventListener("scroll", i);
            docxEditorEventConstantsAndManager.globalEventEmitter.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.KEYBOARD_CHANGED, i);
          }
        };
      }(t) : function (t) {
        let e = 0;
        let n = 0;
        let i = debounceUtil_1_1.debounce(() => {
          let i = document.body.getBoundingClientRect();
          if (e !== i.top || n !== i.left) {
            e = i.top;
            n = i.left;
            t(i);
          }
        }, 100);
        return {
          run: () => {
            i();
            window.addEventListener("scroll", i);
          },
          cancel: () => {
            i.cancel();
            window.removeEventListener("scroll", i);
          }
        };
      }(t), [t]);
      reactCoreLibraryReexport.useEffect(() => {
        if (e && (browserEnvironmentDetectionUtils.browserDetector.isIOS || browserEnvironmentDetectionUtils.browserDetector.isWebKit) && !browserEnvironmentDetectionUtils.browserDetector.isAndroid) {
          n.run();
          return n.cancel;
        }
      }, [e, n]);
    })(reactCoreLibraryReexport.useCallback(t => {
      tr(t);
    }, []), R);
    let [to, ts] = reactCoreLibraryReexport.useState({});
    let [ta, tu] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if ((!uiLayoutPositionUtils.hasNonZeroRect(U) || !uiLayoutPositionUtils.hasNonZeroRect(n) || !tt[X]) && R) {
        ts(t => isEmptyUtil.isEmpty(t) ? t : {});
        return;
      }
      let t = D({
        targetRect: n,
        contentRect: U,
        direction: X,
        offsetInfo: tt[X],
        viewportInfo: tn,
        bodyRect: ti,
        boundaryRect: r
      });
      let e = arrayIsArrayUtil.isArray(B) ? B : [B, B];
      if (e[1] && e[1] !== "bottom") {
        tu(uiLayoutPositionUtils.calcOverflowAdjustment({
          positionInfo: t,
          boundaryRect: r,
          contentRect: U,
          viewportInfo: tn,
          bodyRect: ti
        }).top > 0);
      } else {
        tu(false);
      }
      ts(e => {
        let n = B ? F({
          positionInfo: t,
          sticky: B,
          boundaryRect: r,
          contentRect: U,
          viewportInfo: tn,
          bodyRect: ti
        }) : t;
        if (deepEqualUtil_1.deepEqual(e, n)) {
          return e;
        } else {
          return n;
        }
      });
    }, [R, X, n, tt, tn, U, D, B, r, ti]);
    let tc = reactCoreLibraryReexport.useMemo(() => {
      if (!k) {
        return false;
      }
      if (!uiLayoutPositionUtils.hasNonZeroRect(U) || X === uiLayoutPositionEnums.positionAlignTypes.None || uiLayoutPositionUtils.isEmptyRect(n)) {
        return true;
      }
      let t = uiLayoutPositionUtils.calcOverflowAdjustment({
        positionInfo: to,
        contentRect: U,
        viewportInfo: tn,
        bodyRect: ti,
        boundaryRect: n
      });
      return X.startsWith("bottom") && t.top > 0 || X.startsWith("top") && t.bottom > 0 || X.startsWith("left") && t.right > 0 || X.startsWith("right") && t.left > 0;
    }, [to, U, tn, ti, n, X]);
    let tl = reactCoreLibraryReexport.useMemo(() => !!V && V(), [n, V]);
    let th = reactCoreLibraryReexport.useMemo(() => z || tc || !uiLayoutPositionUtils.hasNonZeroRect(U) || X === uiLayoutPositionEnums.positionAlignTypes.None || tl || uiLayoutPositionUtils.isEmptyRect(n), [z, tc, U.height, X, n, tl]);
    let tf = reactCoreLibraryReexport.useCallback(() => {
      if (R && uiLayoutPositionUtils.hasNonZeroRect(U)) {
        Y(t => {
          if (J.length === 0 || J.some(t => !te[t])) {
            return uiLayoutPositionEnums.positionAlignTypes.None;
          }
          if (!s || t === uiLayoutPositionEnums.positionAlignTypes.None) {
            return (m == null ? undefined : m({
              adaptiveSize: te,
              contentRect: U,
              allowDirections: J,
              currentDirection: t
            })) ?? J[0];
          }
          return t;
        });
      }
    }, [R, s, J, m, te, U]);
    let td = reactCoreLibraryReexport.useCallback(() => {
      Y(uiLayoutPositionEnums.positionAlignTypes.None);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      tf();
    }, [tf]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (!R) {
        td();
      }
    }, [R, td]);
    let tm = reactCoreLibraryReexport.useMemo(() => ({
      zIndex: L
    }), [L]);
    let tv = reactCoreLibraryReexport.useMemo(() => {
      if (j === false || j === uiLayoutPositionEnums.animationEffectTypes.None) {
        return uiLayoutPositionEnums.animationSlideTypes.None;
      }
      if (j) {
        if (j === uiLayoutPositionEnums.animationEffectTypes.Slide) {
          if (X.indexOf("left") > -1) {
            return uiLayoutPositionEnums.animationSlideTypes.SlideLeft;
          }
          if (X.indexOf("right") > -1) {
            return uiLayoutPositionEnums.animationSlideTypes.SlideRight;
          }
          if (X.indexOf("top") > -1) {
            return uiLayoutPositionEnums.animationSlideTypes.SlideTop;
          } else if (X.indexOf("bottom") > -1) {
            return uiLayoutPositionEnums.animationSlideTypes.SlideBottom;
          }
        } else if (j === uiLayoutPositionEnums.animationEffectTypes.Fade) {
          return uiLayoutPositionEnums.animationSlideTypes.Fade;
        }
      }
    }, [X, j]);
    let tp = reactCoreLibraryReexport.useMemo(() => a(T, {
      "stick-top": ta
    }), [T, ta]);
    let tg = reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(M, {
        domRef: Q,
        visible: R,
        hidden: th,
        style: tm,
        positionInfo: to,
        animationName: tv,
        transition: Z,
        className: tp,
        children: C
      }), o && R && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "overlay-mask"
      })]
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "overlay-wrapper",
      onMouseEnter: $,
      onMouseMove: $,
      onMouseOver: $,
      children: stubBooleanFunctions.alwaysFalseCheck(G) ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "overlay-ipad-scroll-container",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "overlay-ipad-scroll-item"
          }), tg]
        })
      }) : tg
    });
  };
  function C(t, e, n) {
    var i;
    if ((e = typeof (i = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var n = t[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(t, e || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? i : i + "") in t) {
      Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = n;
    }
    return t;
  }
  class R extends reactCoreLibraryReexport.PureComponent {
    componentWillUnmount() {
      if (this.unmountCallback) {
        this.unmountCallback();
      }
      this.container.removeChild(this.mountpoint);
      this.props.selectionAPI.unregister(selectionEventDriverAndManager.EventDriverEvents.startTargetFilter, this.selectionFilter);
    }
    render() {
      return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(L, {
        ...this.props
      }), this.mountpoint);
    }
    constructor(t) {
      var e;
      var n;
      super(t);
      C(this, "mountpoint", document.createElement("div"));
      C(this, "unmountCallback", undefined);
      C(this, "container", undefined);
      C(this, "state", {
        key: 0
      });
      C(this, "selectionFilter", t => !this.mountpoint.contains(t));
      this.mountpoint.classList.add("overlay-root");
      this.container = ((e = (n = this.props).getContainer) === null || e === undefined ? undefined : e.call(n)) ?? document.body;
      this.container.appendChild(this.mountpoint);
      this.props.selectionAPI.register(selectionEventDriverAndManager.EventDriverEvents.startTargetFilter, this.selectionFilter);
    }
  }
  var T = t => t.visible ? reactJsxRuntimeCoreReexport.jsx(R, {
    ...t
  }) : null;
  require.d(exports, {
    SearchPopover: function () {
      return T;
    }
  });
}