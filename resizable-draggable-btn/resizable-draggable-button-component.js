// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 'c' to 'touchInteractionUtil'
// - Resolved require(593236) to 'touch-interaction-util'
// - Renamed variable 'a' to 'numberRoundUtils'
// - Resolved require(198874) to 'number-round-utils'
// - Renamed variable 'u' to 'pointerEventAdapterUtils'
// - Resolved require(364859) to 'pointer-event-adapter-utils'
// - Renamed variable 'h' to 'layoutResizableConstants'
// - Resolved require(216694) to 'layout-resizable-constants'
// - Renamed variable 'd' to 'layoutConstants'
// - Resolved require(773631) to 'layout-constants'
// - Renamed variable 'p' to 'isMousePointerEvent'
// - Resolved require(985083) to 'is-mouse-pointer-event'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'A' to 'isMousePointerEvent' (module 985083)
// - Updated imported property 'KR' to 'verticalAnchorPoints' (module 216694)
// - Updated imported property 'mu' to 'leftEdgeAnchorPoints' (module 216694)
// - Updated imported property 'Sl' to 'horizontalAnchorPoints' (module 216694)
// - Updated imported property 'TW' to 'topEdgeAnchorPoints' (module 216694)
// - Updated imported property 'Y' to 'resizableDragging' (module 216694)
// - Updated imported property 'ak' to 'draggableBtn' (module 216694)
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'BG' to 'capturePointer' (module 593236)
// - Updated imported property 'nx' to 'domEventNames' (module 364859)
// - Updated imported property 'Cj' to 'reactEventNames' (module 364859)
// - Updated imported property 'h_' to 'shouldUsePointerEvents' (module 364859)
// - Updated imported property 'l' to 'roundToFixed' (module 198874)
// - Updated imported property 'N' to 'scaleModes' (module 773631)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: resizable-draggable-btn.afecdf2f.js
         * chunkId: 43606
         * moduleId: 993403
         */
module.exports = function (module, exports, require) {
  var o;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var touchInteractionUtil = require("touch-interaction-util") /*id: 593236*/;
  var numberRoundUtils = require("number-round-utils") /*id: 198874*/;
  var pointerEventAdapterUtils = require("pointer-event-adapter-utils") /*id: 364859*/;
  var layoutResizableConstants = require("layout-resizable-constants") /*id: 216694*/;
  var layoutConstants = require("layout-constants") /*id: 773631*/;
  var isMousePointerEvent = require("is-mouse-pointer-event") /*id: 985083*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function g(e, t, i) {
    var o;
    if ((t = typeof (o = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var o = i.call(e, t || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  (o = {}).Left = "left-horizontal";
  o.Right = "right-horizontal";
  o.Top = "top-vertical";
  o.Bottom = "bottom-vertical";
  o.LeftTop = "left-top";
  o.LeftBottom = "left-bottom";
  o.RightTop = "right-top";
  o.RightBottom = "right-bottom";
  let f = o;
  class m extends reactCoreLibraryReexport.Component {
    get selectionAPI() {
      return this.props.selectionAPI;
    }
    isOutOfViewPortTop(e) {
      return !!e && !!(e < 0);
    }
    isOutOfViewPortBottom(e) {
      return !!e && !!(e > window.innerHeight);
    }
    handleMouseDown(e, t) {
      var i;
      var o;
      let n;
      let s;
      if (isMousePointerEvent.isMousePointerEvent(e.nativeEvent)) {
        n = e.nativeEvent.clientX;
        s = e.nativeEvent.clientY;
      } else {
        n = e.nativeEvent.targetTouches[0].clientX;
        s = e.nativeEvent.targetTouches[0].clientY;
      }
      this.initDraggingInfo = {
        startX: n,
        startY: s,
        directionX: layoutResizableConstants.verticalAnchorPoints.includes(t) ? 0 : layoutResizableConstants.leftEdgeAnchorPoints.includes(t) ? -1 : 1,
        directionY: layoutResizableConstants.horizontalAnchorPoints.includes(t) ? 0 : layoutResizableConstants.topEdgeAnchorPoints.includes(t) ? -1 : 1
      };
      let r = document.querySelector(".bear-web-x-container");
      this.lastScrollTop = (r == null ? undefined : r.scrollTop) || 0;
      this.lastDraggingInfo = {
        clientX: n,
        clientY: s
      };
      if (browserEnvironmentDetectionUtils.browserDetector.isInChatTab && e.pointerId) {
        touchInteractionUtil.capturePointer(e);
      }
      this.startDrag();
      if ((i = (o = this.props).onResizeStart) !== null && i !== undefined) {
        i.call(o, this.initDraggingInfo, e);
      }
      if (this.props.scrollResizable) {
        this.selectionAPI.setPreventScroll(false);
      }
    }
    componentDidMount() {
      let {
        enableMouseKeyboard: e
      } = this.props;
      if (e) {
        document.addEventListener("keydown", this.handleKeydown);
        document.addEventListener("keyup", this.handleKeyUp);
      }
    }
    componentWillUnmount() {
      let {
        enableMouseKeyboard: e
      } = this.props;
      if (e) {
        document.removeEventListener("keydown", this.handleKeydown);
        document.removeEventListener("keyup", this.handleKeyUp);
      }
    }
    startDrag() {
      document.body.classList.add(layoutResizableConstants.resizableDragging);
      document.addEventListener(pointerEventAdapterUtils.domEventNames.mousemove, this.handleMouseMove);
      document.addEventListener("touchmove", this.handleMouseMove);
      document.addEventListener(pointerEventAdapterUtils.domEventNames.mouseup, this.handleMouseUp);
      document.addEventListener("touchend", this.handleMouseUp);
      let i = document.querySelector(".bear-web-x-container");
      if (this.props.scrollResizable) {
        if (i != null) {
          i.addEventListener("scroll", this.handleContainerScroll);
        }
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isIPad) {
        document.body.addEventListener("mouseleave", this.handleMouseLeave);
      }
      if (this.props.scrollResizable) {
        this.selectionAPI.setForceScrollSpeed(undefined, 1);
      }
      if (this.props.scrollResizable) {
        this.selectionAPI.setForceScrollThresholdOfBoundary(this.props.scrollThreshold?.top, this.props.scrollThreshold?.bottom);
      }
    }
    endDrag() {
      document.body.classList.remove(layoutResizableConstants.resizableDragging);
      document.removeEventListener(pointerEventAdapterUtils.domEventNames.mousemove, this.handleMouseMove);
      document.removeEventListener("touchmove", this.handleMouseMove);
      document.removeEventListener(pointerEventAdapterUtils.domEventNames.mouseup, this.handleMouseUp);
      document.removeEventListener("touchend", this.handleMouseUp);
      let e = document.querySelector(".bear-web-x-container");
      if (this.props.scrollResizable) {
        if (e != null) {
          e.removeEventListener("scroll", this.handleContainerScroll);
        }
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isIPad) {
        document.body.removeEventListener("mouseleave", this.handleMouseLeave);
      }
      if (this.props.scrollResizable) {
        this.selectionAPI.setForceScrollSpeed(undefined, undefined);
      }
      if (this.props.scrollResizable) {
        this.selectionAPI.setForceScrollThresholdOfBoundary(undefined, undefined);
      }
      if (this.props.scrollResizable) {
        this.selectionAPI.setPreventScroll(false);
      }
    }
    calcDragDiffFromInit(e, t) {
      let {
        clientX: i,
        clientY: o
      } = t;
      return {
        diffX: parseInt(((i - e.startX) * this.sensitivity).toFixed(0)) * e.directionX,
        diffY: parseInt(((o - e.startY) * this.sensitivity).toFixed(0)) * e.directionY
      };
    }
    calcDragDiffFromRelative(e, t, i) {
      let {
        clientX: o,
        clientY: n
      } = e;
      let {
        clientX: s,
        clientY: r
      } = t;
      let {
        directionX: l,
        directionY: c
      } = i;
      return {
        lastDiffX: numberRoundUtils.roundToFixed((s - o) * this.sensitivity, 0) * l,
        lastDiffY: numberRoundUtils.roundToFixed((r - n) * this.sensitivity, 0) * c
      };
    }
    render() {
      let {
        cursorType: e,
        direction: t,
        hiddenIconDirection: i,
        renderBtnInnerContent: o
      } = this.props;
      let n = s(`${layoutResizableConstants.draggableBtn} ${t.replace("-", " ")}`, {
        "hide-btn": i == null ? undefined : i.includes(t)
      });
      let r = {
        [pointerEventAdapterUtils.reactEventNames.mousedown]: e => this.handleMouseDown(e, t),
        onTouchStart: e => {
          e.preventDefault();
          this.handleMouseDown(e, t);
        }
      };
      let l = pointerEventAdapterUtils.shouldUsePointerEvents() ? "none" : "auto";
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: n,
        contentEditable: false,
        suppressContentEditableWarning: true,
        style: {
          cursor: `${e}-resize`,
          touchAction: l,
          userSelect: "none"
        },
        ref: this.btnRef,
        ...r,
        children: o && o(t)
      });
    }
    constructor(...e) {
      super(...e);
      g(this, "initDraggingInfo", null);
      g(this, "lastDraggingInfo", null);
      g(this, "lastScrollTop", 0);
      g(this, "btnRef", reactCoreLibraryReexport.createRef());
      g(this, "isClickKeyboardKey", false);
      g(this, "sensitivity", this.props.sensitivity && this.props.sensitivity >= 0 ? this.props.sensitivity : 1);
      g(this, "handleMouseMove", e => {
        if (this.initDraggingInfo) {
          var t;
          var i;
          let o;
          let n;
          e.preventDefault();
          if (isMousePointerEvent.isMousePointerEvent(e)) {
            o = e.clientX;
            n = e.clientY;
          } else {
            if (!e.targetTouches[0]) {
              return;
            }
            o = e.targetTouches[0].clientX;
            n = e.targetTouches[0].clientY;
          }
          if (this.props.scrollResizable && this.isOutOfViewPortTop(n) && this.isOutOfViewPortBottom(n)) {
            this.initDraggingInfo = null;
            this.endDrag();
            if (this.props.scrollResizable) {
              this.selectionAPI.setPreventScroll(true);
            }
            return;
          }
          let s = {
            clientX: o,
            clientY: n
          };
          let {
            directionX: r,
            directionY: l
          } = this.initDraggingInfo;
          let c = this.calcDragDiffFromInit(this.initDraggingInfo, s);
          let a = this.calcDragDiffFromRelative(this.lastDraggingInfo, s, {
            directionX: r,
            directionY: l
          });
          if ((t = (i = this.props).onResizeUpdate) !== null && t !== undefined) {
            t.call(i, {
              ...c,
              ...a
            }, this.props.direction, this.isClickKeyboardKey, n);
          }
          this.lastDraggingInfo = s;
        }
      });
      g(this, "handleContainerScroll", () => {
        if (this.initDraggingInfo) {
          var n;
          var s;
          let r = document.querySelector(".bear-web-x-container");
          let l = {
            clientX: this.lastDraggingInfo?.clientX || 0,
            clientY: this.lastDraggingInfo?.clientY || 0
          };
          let {
            directionX: c,
            directionY: a
          } = this.initDraggingInfo;
          let u = this.calcDragDiffFromInit(this.initDraggingInfo, l);
          let h = this.calcDragDiffFromRelative(this.lastDraggingInfo, {
            ...l,
            clientY: (this.lastDraggingInfo?.clientY || 0) + ((r == null ? undefined : r.scrollTop) || 0) - this.lastScrollTop
          }, {
            directionX: c,
            directionY: a
          });
          this.lastScrollTop = (r == null ? undefined : r.scrollTop) || 0;
          if ((n = (s = this.props).onResizeUpdate) !== null && n !== undefined) {
            n.call(s, {
              ...u,
              ...h
            }, this.props.direction, this.isClickKeyboardKey, this.lastDraggingInfo?.clientY);
          }
          this.lastDraggingInfo = l;
        }
      });
      g(this, "handleMouseUp", e => {
        if (this.initDraggingInfo) {
          var t;
          var i;
          let o;
          let n;
          if (isMousePointerEvent.isMousePointerEvent(e)) {
            o = e.clientX;
            n = e.clientY;
          } else {
            if (!e.changedTouches[0]) {
              return;
            }
            o = e.changedTouches[0].clientX;
            n = e.changedTouches[0].clientY;
          }
          this.endDrag();
          if ((t = (i = this.props).onResizeEnd) !== null && t !== undefined) {
            t.call(i, this.calcDragDiffFromInit(this.initDraggingInfo, {
              clientX: o,
              clientY: n
            }), this.props.direction);
          }
          this.initDraggingInfo = null;
          this.lastDraggingInfo = null;
        }
      });
      g(this, "handleMouseLeave", this.handleMouseUp);
      g(this, "handleKeydown", e => {
        let {
          key: t
        } = e;
        let {
          keyboardKey: i
        } = this.props;
        if (t === i) {
          this.isClickKeyboardKey = true;
        }
      });
      g(this, "handleKeyUp", e => {
        let {
          key: t
        } = e;
        let {
          keyboardKey: i
        } = this.props;
        if (t === i) {
          this.isClickKeyboardKey = false;
        }
      });
    }
  }
  class b extends reactCoreLibraryReexport.Component {
    render() {
      let {
        type: e,
        ...t
      } = this.props;
      let i = reactJsxRuntimeCoreReexport.jsx(m, {
        scrollResizable: t.scrollResizable,
        selectionAPI: t.selectionAPI,
        cursorType: "ew",
        direction: f.Left,
        ...t
      });
      let o = reactJsxRuntimeCoreReexport.jsx(m, {
        scrollResizable: t.scrollResizable,
        selectionAPI: t.selectionAPI,
        cursorType: "ew",
        direction: f.Right,
        ...t
      });
      let n = reactJsxRuntimeCoreReexport.jsx(m, {
        scrollResizable: t.scrollResizable,
        selectionAPI: t.selectionAPI,
        cursorType: "ns",
        direction: f.Top,
        ...t
      });
      let s = reactJsxRuntimeCoreReexport.jsx(m, {
        scrollResizable: t.scrollResizable,
        selectionAPI: t.selectionAPI,
        cursorType: "ns",
        direction: f.Bottom,
        ...t
      });
      let r = reactJsxRuntimeCoreReexport.jsx(m, {
        scrollResizable: t.scrollResizable,
        selectionAPI: t.selectionAPI,
        cursorType: "nwse",
        direction: f.LeftTop,
        ...t
      });
      let l = reactJsxRuntimeCoreReexport.jsx(m, {
        scrollResizable: t.scrollResizable,
        selectionAPI: t.selectionAPI,
        cursorType: "nesw",
        direction: f.LeftBottom,
        ...t
      });
      let c = reactJsxRuntimeCoreReexport.jsx(m, {
        scrollResizable: t.scrollResizable,
        selectionAPI: t.selectionAPI,
        cursorType: "nesw",
        direction: f.RightTop,
        ...t
      });
      let a = reactJsxRuntimeCoreReexport.jsx(m, {
        scrollResizable: t.scrollResizable,
        selectionAPI: t.selectionAPI,
        cursorType: "nwse",
        direction: f.RightBottom,
        ...t
      });
      switch (e) {
        case layoutConstants.scaleModes.Free:
          return [i, o, n, s, r, l, c, a];
        case layoutConstants.scaleModes.Proportional:
          return [r, l, c, a];
        case layoutConstants.scaleModes.Horizontal:
          return [i, o];
        case layoutConstants.scaleModes.Vertical:
          return [n, s];
        default:
          return null;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    DragDirection: function () {
      return f;
    },
    default: function () {
      return b;
    }
  });
}