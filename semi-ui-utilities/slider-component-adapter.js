// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SliderComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 938680
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let h = {
    PREFIX: `${semiIdentifier.semiIdentifier}-slider`,
    DISABLED: `${semiIdentifier.semiIdentifier}-slider-disabled`,
    VERTICAL: `${semiIdentifier.semiIdentifier}-slider-vertical`,
    TRACK: `${semiIdentifier.semiIdentifier}-slider-track`,
    DOTS: `${semiIdentifier.semiIdentifier}-slider-dots`,
    MARKS: `${semiIdentifier.semiIdentifier}-slider-marks`,
    HANDLE: `${semiIdentifier.semiIdentifier}-slider-handle`,
    HANDLE_DOT: `${semiIdentifier.semiIdentifier}-slider-handle-dot`
  };
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  var v = (e, t) => {
    if (globalThis.Touch && e instanceof Touch) {
      ["stopPropagation", "preventDefault"].forEach(n => {
        let i = t[n];
        if (i) {
          if (typeof i == "function") {
            i = function () {
              return t[n](...arguments);
            };
          }
          if (e[n]) {
            pageNoopHandler.noopHandler(true, `"The key ${n}" exist in Touch.`);
          } else {
            e[n] = i;
          }
        }
      });
    }
    return e;
  };
  var uiFocusNavigation = require("ui-focus-navigation") /*id: 152428*/;
  class _ extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      var t;
      super(Object.assign(Object.assign({}, _.defaultAdapter), e));
      t = this;
      this.getMinAndMaxPercent = e => {
        let {
          range: t,
          min: n,
          max: i
        } = this._adapter.getProps();
        let r = t ? (e[0] - n) / (i - n) : (e - n) / (i - n);
        let o = t ? (e[1] - n) / (i - n) : 1;
        return {
          min: this._checkValidity(r),
          max: this._checkValidity(o)
        };
      };
      this._checkValidity = function (e, t = 0, n = 1) {
        if (e > n) {
          return n;
        } else if (e < t) {
          return t;
        } else {
          return e;
        }
      };
      this.computeHandleVisibleVal = (e, t, n) => {
        let i;
        let {
          focusPos: r,
          currentValue: o
        } = this._adapter.getStates();
        let a = {
          min: false,
          max: false
        };
        i = t ? {
          min: t(n ? this.outPutValue(o[0]) : this.outPutValue(o)),
          max: n ? t(this.outPutValue(o[1])) : null
        } : {
          min: n ? this.outPutValue(o[0]) : this.outPutValue(o),
          max: n ? this.outPutValue(o[1]) : null
        };
        if (e) {
          a.min = true;
          a.max = true;
        } else if (e === undefined && t) {
          if (r === "min") {
            a.min = true;
          } else if (r === "max") {
            a.max = true;
          }
        }
        return {
          tipVisible: a,
          tipChildren: i
        };
      };
      this.valueFormatIsCorrect = e => Array.isArray(e) ? typeof e[0] == "number" && typeof e[0] == "number" : typeof e == "number";
      this.handleMousePos = (e, t) => {
        let n = this._adapter.getParentRect();
        let i = this._adapter.getScrollParentVal();
        let r = n ? n.left : 0;
        let o = n ? n.top : 0;
        return {
          x: e - r + i.scrollLeft,
          y: t - o + i.scrollTop
        };
      };
      this.getScrollParent = e => {
        let t = /(auto|scroll)/;
        let n = (e, t) => window.getComputedStyle(e, null).getPropertyValue(t);
        let i = e => t.test(n(e, "overflow") + n(e, "overflow-y") + n(e, "overflow-x"));
        let r = e => e && e !== document.body && e instanceof Element ? i(e) ? e : r(e.parentNode) : document.body;
        return r(e);
      };
      this.checkMeetMinMax = e => {
        let t;
        let n;
        let {
          vertical: i,
          verticalReverse: r,
          range: o
        } = this._adapter.getProps();
        let a = this._adapter.getState("currentValue");
        this.transValueToPos(a);
        let {
          sliderX: s,
          sliderY: l,
          sliderWidth: c,
          sliderHeight: d
        } = this._adapter.getSliderLengths();
        let {
          chooseMovePos: u,
          isDrag: h
        } = this._adapter.getStates();
        t = i && r ? l + (i ? d : c) : i ? l : s;
        n = i && r ? l : i ? l + d : s + c;
        if (i && r) {
          if (e >= t) {
            e = t;
          } else if (e <= n) {
            e = n;
          }
        } else if (e <= t) {
          e = t;
        } else if (e >= n) {
          e = n;
        }
        return e;
      };
      this.transPosToValue = (e, t) => {
        let n;
        let i;
        let r = this.checkMeetMinMax(e);
        let {
          min: o,
          max: a,
          currentValue: s
        } = this._adapter.getStates();
        let {
          range: l,
          vertical: c,
          step: d,
          verticalReverse: u
        } = this._adapter.getProps();
        let {
          sliderX: h,
          sliderY: f,
          sliderWidth: p,
          sliderHeight: m
        } = this._adapter.getSliderLengths();
        let v = c ? f : h;
        let g = c ? m : p;
        n = c && u ? (v + g - r) / g * (a - o) + o : (r - v) / g * (a - o) + o;
        i = l ? t ? s[0] : s[1] : s;
        if (d !== 1) {
          n = Math.round(n / d) * d;
        }
        if (l && n !== i) {
          if (t) {
            return [n, s[1]];
          } else {
            return [s[0], n];
          }
        } else {
          return !l && n !== i && n;
        }
      };
      this.transValueToPos = e => {
        let {
          min: t,
          max: n
        } = this._adapter.getStates();
        let {
          vertical: i,
          range: r,
          verticalReverse: o
        } = this._adapter.getProps();
        let {
          sliderX: a,
          sliderY: s,
          sliderWidth: l,
          sliderHeight: c
        } = this._adapter.getSliderLengths();
        let d = i ? s : a;
        let u = i ? c : l;
        if (r) {
          return [(e[0] - t) * u / (n - t) + d, (e[1] - t) * u / (n - t) + d];
        } else {
          return (e - t) * u / (n - t) + d;
        }
      };
      this.isMarkActive = e => {
        let {
          min: t,
          max: n,
          range: i,
          included: r
        } = this._adapter.getProps();
        let o = this._adapter.getState("currentValue");
        return typeof (e / 1) == "number" && e >= t && e <= n && (i ? (e > o[1] || e < o[0]) && r ? "unActive" : "active" : e <= o && r ? "active" : "unActive");
      };
      this.outPutValue = e => {
        let t = e => {
          var n;
          if (/^\d+(\.\d+)?$/.test(String(e)) && (n = e.toString().split(".")[1]?.length) !== null && n !== undefined) {
            return n;
          } else {
            return 0;
          }
        };
        let n = this._adapter.getProp("step");
        let i = (() => {
          let e = Math.pow(10, t(n));
          return t => Math.round(t * e) / e;
        })();
        if (Array.isArray(e)) {
          return [i(e[0]), i(e[1])];
        } else {
          return i(e);
        }
      };
      this.handleDisabledChange = e => {
        this._adapter.updateDisabled(e);
      };
      this.checkAndUpdateIsInRenderTreeState = () => this._adapter.checkAndUpdateIsInRenderTreeState();
      this.calculateOutputValue = (e, t) => {
        let n = this.transPosToValue(e, t);
        if (n !== false) {
          return this.outPutValue(n);
        }
      };
      this.handleValueChange = (e, t) => {
        let {
          min: n,
          max: i
        } = this._adapter.getStates();
        let r = null;
        let o = {};
        if (this.valueFormatIsCorrect(t)) {
          if (Array.isArray(e) && Array.isArray(t)) {
            r = Object.assign(o, {
              currentValue: t = [t[0] < n ? n : t[0], t[1] > i ? i : t[1]]
            });
          }
          if (typeof e == "number" && typeof t == "number") {
            r = Object.assign(o, {
              currentValue: t = t > i ? i : t < n ? n : t
            });
          }
        } else {
          r = o;
        }
        if (r) {
          this._adapter.transNewPropsToState(r);
        }
      };
      this.onHandleDown = (e, t) => {
        this._adapter.onHandleDown(e);
        let n = this._adapter.getState("disabled");
        let {
          vertical: i
        } = this._adapter.getProps();
        let {
          dragging: r
        } = this._adapter.getOverallVars();
        if (n) {
          return false;
        }
        this._adapter.setStateVal("isDrag", true);
        this._adapter.setStateVal("chooseMovePos", t);
        if (t === "min") {
          this._adapter.setDragging([true, r[1]]);
        } else {
          this._adapter.setDragging([r[0], true]);
        }
        let o = this.handleMousePos(e.clientX, e.clientY);
        let a = i ? o.y : o.x;
        if (this._adapter.isEventFromHandle(e)) {
          let t = this._getHandleCenterPosition(i, e.target);
          this._dragOffset = a - t;
          a = t;
        } else {
          this._dragOffset = 0;
        }
        return true;
      };
      this.onHandleMove = e => {
        this._adapter.setEventDefault(e);
        let {
          disabled: t,
          chooseMovePos: n
        } = this._adapter.getStates();
        let {
          vertical: i
        } = this._adapter.getProps();
        let {
          dragging: r
        } = this._adapter.getOverallVars();
        if (t) {
          return false;
        }
        this.onHandleEnter(n);
        let o = this.handleMousePos(e.clientX, e.clientY);
        let a = i ? o.y : o.x;
        a -= this._dragOffset;
        if (n === "min" && r[0] || n === "max" && r[1]) {
          let e = this.calculateOutputValue(a, n === "min");
          if (e === undefined) {
            return false;
          }
          this._adapter.notifyChange(e);
          this._adapter.onHandleMove(a, n === "min", undefined, false, e);
        }
        return true;
      };
      this.onHandleTouchStart = (e, t) => {
        let n = this._adapter.getMinHandleEl();
        let i = this._adapter.getMaxHandleEl();
        if (e.target === n || e.target === i) {
          uiFocusNavigation.suppressEvent(e);
          let n = v(e.touches[0], e);
          this.onHandleDown(n, t);
        }
      };
      this.onHandleTouchMove = e => {
        let t = this._adapter.getMinHandleEl();
        let n = this._adapter.getMaxHandleEl();
        if (e.target === t || e.target === n) {
          let t = v(e.touches[0], e);
          this.onHandleMove(t);
        }
      };
      this.onHandleEnter = e => {
        let {
          disabled: t,
          focusPos: n
        } = this._adapter.getStates();
        if (!t && !n && e !== n) {
          this._adapter.onHandleEnter(e);
        }
      };
      this.onHandleLeave = () => {
        if (!this._adapter.getState("disabled") && this.getStates().focusPos === "") {
          this._adapter.onHandleLeave();
        }
      };
      this.onHandleUp = e => {
        this._adapter.onHandleUpBefore(e);
        let {
          disabled: t,
          chooseMovePos: n
        } = this._adapter.getStates();
        let {
          dragging: i
        } = this._adapter.getOverallVars();
        return !t && (n === "min" ? this._adapter.setDragging([false, i[1]]) : this._adapter.setDragging([i[0], false]), this._adapter.setStateVal("isDrag", false), this._adapter.onHandleLeave(), this._adapter.onHandleUpAfter(), true);
      };
      this._handleValueDecreaseWithKeyBoard = (e, t) => {
        let {
          min: n,
          currentValue: i
        } = this.getStates();
        let {
          range: r
        } = this.getProps();
        if (t === "min") {
          if (r) {
            let t = i[0] - e;
            return [t = t < n ? n : t, i[1]];
          }
          {
            let t = i - e;
            if (t < n) {
              return n;
            } else {
              return t;
            }
          }
        }
        {
          let t = i[1] - e;
          t = t < i[0] ? i[0] : t;
          return [i[0], t];
        }
      };
      this._handleValueIncreaseWithKeyBoard = (e, t) => {
        let {
          max: n,
          currentValue: i
        } = this.getStates();
        let {
          range: r
        } = this.getProps();
        if (t === "min") {
          if (r) {
            let t = i[0] + e;
            return [t = t > i[1] ? i[1] : t, i[1]];
          }
          {
            let t = i + e;
            if (t > n) {
              return n;
            } else {
              return t;
            }
          }
        }
        {
          let t = i[1] + e;
          t = t > n ? n : t;
          return [i[0], t];
        }
      };
      this._handleHomeKey = e => {
        let {
          min: t,
          currentValue: n
        } = this.getStates();
        let {
          range: i
        } = this.getProps();
        if (e !== "min") {
          return [n[0], n[0]];
        } else if (i) {
          return [t, n[1]];
        } else {
          return t;
        }
      };
      this._handleEndKey = e => {
        let {
          max: t,
          currentValue: n
        } = this.getStates();
        let {
          range: i
        } = this.getProps();
        if (e !== "min") {
          return [n[0], t];
        } else if (i) {
          return [n[1], n[1]];
        } else {
          return t;
        }
      };
      this.handleKeyDown = (e, t) => {
        let n;
        let {
          min: i,
          max: r,
          currentValue: o
        } = this.getStates();
        let {
          step: a,
          range: s
        } = this.getProps();
        switch (e.key) {
          case "ArrowLeft":
          case "ArrowDown":
            n = this._handleValueDecreaseWithKeyBoard(a, t);
            break;
          case "ArrowRight":
          case "ArrowUp":
            n = this._handleValueIncreaseWithKeyBoard(a, t);
            break;
          case "PageUp":
            n = this._handleValueIncreaseWithKeyBoard(a * 10, t);
            break;
          case "PageDown":
            n = this._handleValueDecreaseWithKeyBoard(a * 10, t);
            break;
          case "Home":
            n = this._handleHomeKey(t);
            break;
          case "End":
            n = this._handleEndKey(t);
        }
        if (["ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp", "PageUp", "PageDown", "Home", "End"].includes(e.key)) {
          let t = true;
          if (Array.isArray(o) ? o[0] !== n[0] || o[1] !== n[1] : o !== n) {
            this._adapter.updateCurrentValue(n);
            this._adapter.notifyChange(n);
          }
          uiFocusNavigation.suppressEvent(e);
        }
      };
      this.onFocus = (e, t) => {
        uiFocusNavigation.suppressEvent(e);
        let {
          target: n
        } = e;
        try {
          if (n.matches(":focus-visible")) {
            if (t === "min") {
              this._adapter.setStateVal("firstDotFocusVisible", true);
            } else {
              this._adapter.setStateVal("secondDotFocusVisible", true);
            }
          }
        } catch (e) {
          pageNoopHandler.noopHandler(true, "Warning: [Semi Slider] The current browser does not support the focus-visible");
        }
      };
      this.onBlur = (e, t) => {
        let {
          firstDotFocusVisible: n,
          secondDotFocusVisible: i
        } = this.getStates();
        if (t === "min") {
          if (n) {
            this._adapter.setStateVal("firstDotFocusVisible", false);
          }
        } else if (i) {
          this._adapter.setStateVal("secondDotFocusVisible", false);
        }
      };
      this.handleWrapClick = e => {
        let {
          disabled: t,
          isDrag: n
        } = this._adapter.getStates();
        if (n || t || this._adapter.isEventFromHandle(e)) {
          return;
        }
        let {
          vertical: i
        } = this.getProps();
        let r = this.handleMousePos(e.clientX, e.clientY);
        let o = i ? r.y : r.x;
        let a = this.checkWhichHandle(o);
        let s = this.calculateOutputValue(o, a);
        if (s !== undefined) {
          this._adapter.notifyChange(s);
          if (!this._isControlledComponent()) {
            this.setHandlePos(o, a, true, s);
          }
        }
      };
      this.setHandlePos = function (e, n, i = false, r) {
        t._adapter.onHandleMove(e, n, () => t._adapter.onHandleUpAfter(), i, r);
      };
      this.checkWhichHandle = e => {
        let {
          vertical: t,
          verticalReverse: n
        } = this.getProps();
        let {
          currentValue: i
        } = this._adapter.getStates();
        let r = this.transValueToPos(i);
        let o = true;
        if (Array.isArray(r) && (e > r[1] || Math.abs(e - r[0]) > Math.abs(e - r[1]))) {
          o = false;
        }
        if (t && n) {
          o = !o;
        }
        return o;
      };
      this.handleWrapperEnter = () => {
        this._adapter.setStateVal("showBoundary", true);
      };
      this.handleWrapperLeave = () => {
        this._adapter.setStateVal("showBoundary", false);
      };
    }
    init() {
      this._checkCurrentValue();
      this._dragOffset = 0;
    }
    _checkCurrentValue() {
      let e;
      let {
        currentValue: t,
        min: n,
        max: i
      } = this.getStates();
      if (Array.isArray(t)) {
        (e = [])[0] = this._checkValidity(t[0], n, i);
        e[1] = this._checkValidity(t[1], n, i);
      } else {
        e = this._checkValidity(t, n, i);
      }
      this._adapter.updateCurrentValue(e);
    }
    destroy() {
      this._adapter.unSubscribeEventListener();
    }
    _getHandleCenterPosition(e, t) {
      let n = t.getBoundingClientRect();
      let {
        x: i,
        y: r
      } = this.handleMousePos(n.left + n.width * 0.5, n.top + n.height * 0.5);
      if (e) {
        return r;
      } else {
        return i;
      }
    }
  }
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  function y(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; r < i.length; r++) {
        if (t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) {
          n[i[r]] = e[i[r]];
        }
      }
    }
    return n;
  }
  let w = h.PREFIX;
  class S extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.renderHandle = () => {
        let {
          vertical: c,
          range: u,
          tooltipVisible: f,
          tipFormatter: p,
          "aria-label": m,
          "aria-labelledby": v,
          "aria-valuetext": g,
          getAriaValueText: _,
          disabled: y
        } = this.props;
        let {
          chooseMovePos: w,
          isDrag: S,
          isInRenderTree: x,
          firstDotFocusVisible: C,
          secondDotFocusVisible: k
        } = this.state;
        let T = c ? "top" : "left";
        let E = this.foundation.getMinAndMaxPercent(this.state.currentValue);
        let I = E.min;
        let j = E.max;
        let {
          tipVisible: R,
          tipChildren: N
        } = this.foundation.computeHandleVisibleVal(f && x, p, u);
        let $ = d(h.HANDLE, {
          [`${h.HANDLE}-clicked`]: w === "min" && S
        });
        let M = d(h.HANDLE, {
          [`${h.HANDLE}-clicked`]: w === "max" && S
        });
        let {
          min: P,
          max: L,
          currentValue: D
        } = this.state;
        let O = {
          "aria-label": m ?? (y ? "Disabled Slider" : undefined),
          "aria-labelledby": v,
          "aria-disabled": y
        };
        if (c) {
          Object.assign(O, {
            "aria-orientation": "vertical"
          });
        }
        if (u) {
          return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, {
            content: N.min,
            position: "top",
            trigger: "custom",
            rePosKey: I,
            visible: x && (R.min || C),
            className: `${h.HANDLE}-tooltip`
          }, reactCoreLibraryReexport.createElement("span", Object.assign({
            ref: this.minHanleEl,
            className: $,
            style: {
              [T]: `${I * 100}%`,
              zIndex: w === "min" ? 2 : 1
            },
            onMouseDown: e => {
              this.foundation.onHandleDown(e, "min");
            },
            onMouseEnter: () => {
              this.foundation.onHandleEnter("min");
            },
            onTouchStart: e => {
              this.foundation.onHandleTouchStart(e, "min");
            },
            onMouseLeave: () => {
              this.foundation.onHandleLeave();
            },
            onMouseUp: e => {
              this.foundation.onHandleUp(e);
            },
            onKeyUp: e => {
              this.foundation.onHandleUp(e);
            },
            onTouchEnd: e => {
              this.foundation.onHandleUp(e);
            },
            onKeyDown: e => {
              this.foundation.handleKeyDown(e, "min");
            },
            onFocus: e => {
              this.foundation.onFocus(e, "min");
            },
            onBlur: e => {
              this.foundation.onBlur(e, "min");
            },
            role: "slider",
            tabIndex: y ? -1 : 0
          }, O, {
            "aria-valuetext": _ ? _(D[0], 0) : g,
            "aria-valuenow": D[0],
            "aria-valuemax": D[1],
            "aria-valuemin": P
          }), this.props.handleDot?.[0] && reactCoreLibraryReexport.createElement("div", {
            className: h.HANDLE_DOT,
            style: Object.assign(Object.assign({}, this.props.handleDot[0]?.size ? {
              width: this.props.handleDot[0].size,
              height: this.props.handleDot[0].size
            } : {}), this.props.handleDot[0]?.color ? {
              backgroundColor: this.props.handleDot[0].color
            } : {})
          }))), reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, {
            content: N.max,
            position: "top",
            trigger: "custom",
            rePosKey: j,
            visible: x && (R.max || k),
            className: `${h.HANDLE}-tooltip`
          }, reactCoreLibraryReexport.createElement("span", Object.assign({
            ref: this.maxHanleEl,
            className: M,
            style: {
              [T]: `${j * 100}%`,
              zIndex: w === "max" ? 2 : 1
            },
            onMouseDown: e => {
              this.foundation.onHandleDown(e, "max");
            },
            onMouseEnter: () => {
              this.foundation.onHandleEnter("max");
            },
            onMouseLeave: () => {
              this.foundation.onHandleLeave();
            },
            onMouseUp: e => {
              this.foundation.onHandleUp(e);
            },
            onKeyUp: e => {
              this.foundation.onHandleUp(e);
            },
            onTouchStart: e => {
              this.foundation.onHandleTouchStart(e, "max");
            },
            onTouchEnd: e => {
              this.foundation.onHandleUp(e);
            },
            onKeyDown: e => {
              this.foundation.handleKeyDown(e, "max");
            },
            onFocus: e => {
              this.foundation.onFocus(e, "max");
            },
            onBlur: e => {
              this.foundation.onBlur(e, "max");
            },
            role: "slider",
            tabIndex: y ? -1 : 0
          }, O, {
            "aria-valuetext": _ ? _(D[1], 1) : g,
            "aria-valuenow": D[1],
            "aria-valuemax": L,
            "aria-valuemin": D[0]
          }), this.props.handleDot?.[1] && reactCoreLibraryReexport.createElement("div", {
            className: h.HANDLE_DOT,
            style: Object.assign(Object.assign({}, this.props.handleDot[1]?.size ? {
              width: this.props.handleDot[1].size,
              height: this.props.handleDot[1].size
            } : {}), this.props.handleDot[1]?.color ? {
              backgroundColor: this.props.handleDot[1].color
            } : {})
          }))));
        } else {
          return reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, {
            content: N.min,
            showArrow: this.props.showArrow,
            position: "top",
            trigger: "custom",
            rePosKey: I,
            visible: x && (R.min || C),
            className: `${h.HANDLE}-tooltip`
          }, reactCoreLibraryReexport.createElement("span", Object.assign({
            onMouseOver: this.foundation.checkAndUpdateIsInRenderTreeState,
            ref: this.minHanleEl,
            className: $,
            style: {
              [T]: `${I * 100}%`,
              zIndex: w === "min" && S ? 2 : 1
            },
            onMouseDown: e => {
              this.foundation.onHandleDown(e, "min");
            },
            onMouseEnter: () => {
              this.foundation.onHandleEnter("min");
            },
            onTouchStart: e => {
              this.foundation.onHandleTouchStart(e, "min");
            },
            onMouseLeave: () => {
              this.foundation.onHandleLeave();
            },
            onMouseUp: e => {
              this.foundation.onHandleUp(e);
            },
            onKeyUp: e => {
              this.foundation.onHandleUp(e);
            },
            onTouchEnd: e => {
              this.foundation.onHandleUp(e);
            },
            onKeyDown: e => {
              this.foundation.handleKeyDown(e, "min");
            },
            onFocus: e => {
              this.foundation.onFocus(e, "min");
            },
            onBlur: e => {
              this.foundation.onBlur(e, "min");
            },
            role: "slider",
            "aria-valuetext": _ ? _(D, 0) : g,
            tabIndex: y ? -1 : 0
          }, O, {
            "aria-valuenow": D,
            "aria-valuemax": L,
            "aria-valuemin": P
          }), this.props.handleDot && reactCoreLibraryReexport.createElement("div", {
            className: h.HANDLE_DOT,
            style: Object.assign(Object.assign({}, this.props.handleDot?.size ? {
              width: this.props.handleDot.size,
              height: this.props.handleDot.size
            } : {}), this.props.handleDot?.color ? {
              backgroundColor: this.props.handleDot.color
            } : {})
          })));
        }
      };
      this.renderTrack = () => {
        let {
          range: e,
          included: t,
          vertical: n
        } = this.props;
        let i = this.foundation.getMinAndMaxPercent(this.state.currentValue);
        let r = i.min;
        let a = i.max;
        let s = n ? {
          height: e ? `${(a - r) * 100}%` : `${r * 100}%`,
          top: e ? `${r * 100}%` : 0
        } : {
          width: e ? `${(a - r) * 100}%` : `${r * 100}%`,
          left: e ? `${r * 100}%` : 0
        };
        s = t ? s : {};
        return reactCoreLibraryReexport.createElement("div", {
          className: h.TRACK,
          style: s,
          onClick: this.foundation.handleWrapClick
        });
      };
      this.renderStepDot = () => {
        let {
          min: e,
          max: t,
          vertical: n,
          marks: i
        } = this.props;
        let r = n ? "top" : "left";
        if (i && Object.keys(i).length > 0) {
          return reactCoreLibraryReexport.createElement("div", {
            className: h.DOTS
          }, Object.keys(i).map(n => {
            let a = this.foundation.isMarkActive(Number(n));
            let s = d(`${w}-dot`, {
              [`${w}-dot-active`]: this.foundation.isMarkActive(Number(n)) === "active"
            });
            let l = (Number(n) - e) / (t - e);
            let c = reactCoreLibraryReexport.createElement("span", {
              key: n,
              onClick: this.foundation.handleWrapClick,
              className: s,
              style: {
                [r]: `calc(${l * 100}% - 2px)`
              }
            });
            if (a) {
              if (this.props.tooltipOnMark) {
                return reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, {
                  content: i[n]
                }, c);
              } else {
                return c;
              }
            } else {
              return null;
            }
          }));
        } else {
          return null;
        }
      };
      this.renderLabel = () => {
        if (!this.props.showMarkLabel) {
          return null;
        }
        let {
          min: e,
          max: t,
          vertical: n,
          marks: i,
          verticalReverse: r
        } = this.props;
        let a = n ? "top" : "left";
        if (i && Object.keys(i).length > 0) {
          return reactCoreLibraryReexport.createElement("div", {
            className: h.MARKS + (n && r ? "-reverse" : "")
          }, Object.keys(i).map(s => {
            let l = this.foundation.isMarkActive(Number(s));
            let c = (Number(s) - e) / (t - e);
            if (l) {
              return reactCoreLibraryReexport.createElement("span", {
                key: s,
                className: d(`${w}-mark${n && r ? "-reverse" : ""}`),
                style: {
                  [a]: `${c * 100}%`
                },
                onClick: this.foundation.handleWrapClick
              }, i[s]);
            } else {
              return null;
            }
          }));
        } else {
          return null;
        }
      };
      this._getAriaValueText = (e, t) => {
        let {
          getAriaValueText: n
        } = this.props;
        if (n) {
          return n(e, t);
        } else {
          return e;
        }
      };
      let {
        value: t
      } = this.props;
      t ||= this.props.defaultValue;
      this.state = {
        currentValue: t || (this.props.range ? [0, 0] : 0),
        min: this.props.min || 0,
        max: this.props.max || 0,
        focusPos: "",
        onChange: this.props.onChange,
        disabled: this.props.disabled || false,
        chooseMovePos: "",
        isDrag: false,
        clickValue: 0,
        showBoundary: false,
        isInRenderTree: true,
        firstDotFocusVisible: false,
        secondDotFocusVisible: false
      };
      this.sliderEl = reactCoreLibraryReexport.createRef();
      this.minHanleEl = reactCoreLibraryReexport.createRef();
      this.maxHanleEl = reactCoreLibraryReexport.createRef();
      this.dragging = [false, false];
      this.foundation = new _(this.adapter);
      this.eventListenerSet = new Set();
    }
    get adapter() {
      var e = this;
      return Object.assign(Object.assign({}, super.adapter), {
        getSliderLengths: () => {
          if (this.sliderEl && this.sliderEl.current) {
            let e = this.sliderEl.current.getBoundingClientRect();
            let t = {
              x: this.sliderEl.current.offsetLeft,
              y: this.sliderEl.current.offsetTop
            };
            return {
              sliderX: t.x,
              sliderY: t.y,
              sliderWidth: e.width,
              sliderHeight: e.height
            };
          }
          return {
            sliderX: 0,
            sliderY: 0,
            sliderWidth: 0,
            sliderHeight: 0
          };
        },
        getParentRect: () => {
          let e = this.sliderEl && this.sliderEl.current && this.sliderEl.current.offsetParent;
          if (e) {
            return e.getBoundingClientRect();
          }
        },
        getScrollParentVal: () => {
          let e = this.foundation.getScrollParent(this.sliderEl.current);
          return {
            scrollTop: e.scrollTop,
            scrollLeft: e.scrollLeft
          };
        },
        isEventFromHandle: e => {
          let t = [this.minHanleEl, this.maxHanleEl];
          let n = false;
          t.forEach(t => {
            if (!t) {
              return;
            }
            let i = t && t.current;
            let r = reactDomEntryWrapper.findDOMNode(i);
            if (r && r.contains(e.target)) {
              n = true;
            }
          });
          return n;
        },
        getOverallVars: () => ({
          dragging: this.dragging
        }),
        updateDisabled: e => {
          this.setState({
            disabled: e
          });
        },
        transNewPropsToState(e, t = emptyExportFunction.emptyFunction) {
          this.setState(e, t);
        },
        notifyChange: e => this.props.onChange(e),
        setDragging: e => {
          this.dragging = e;
        },
        updateCurrentValue: e => {
          let {
            currentValue: t
          } = this.state;
          if (e !== t) {
            this.setState({
              currentValue: e
            });
          }
        },
        setOverallVars: (e, t) => {
          this[e] = t;
        },
        getMinHandleEl: () => this.minHanleEl.current,
        getMaxHandleEl: () => this.maxHanleEl.current,
        onHandleDown: e => {
          this._addEventListener(document.body, "mousemove", this.foundation.onHandleMove, false);
          this._addEventListener(window, "mouseup", this.foundation.onHandleUp, false);
          this._addEventListener(document.body, "touchmove", this.foundation.onHandleTouchMove, false);
        },
        onHandleMove: function (t, n, o = emptyExportFunction.emptyFunction, a = false, s) {
          if (!e.foundation.checkAndUpdateIsInRenderTreeState()) {
            return;
          }
          let {
            value: l
          } = e.props;
          let c = s;
          if (c === undefined) {
            let i = e.foundation.transPosToValue(t, n);
            if (i === false) {
              return;
            }
            c = e.foundation.outPutValue(i);
          }
          let {
            currentValue: d
          } = e.state;
          if (!deepEqualUtil_1.deepEqual(e.foundation.outPutValue(d), c)) {
            if (!a && e.foundation.valueFormatIsCorrect(l)) {
              return false;
            }
            e.setState({
              currentValue: c
            }, o);
          }
        },
        setEventDefault: e => {
          e.stopPropagation();
          e.preventDefault();
        },
        setStateVal: (e, t) => {
          this.setState({
            [e]: t
          });
        },
        checkAndUpdateIsInRenderTreeState: () => {
          var e;
          let t = !!(e = this.sliderEl.current) && (!!e.offsetWidth || !!e.offsetHeight || !!e.getClientRects().length);
          if (t !== this.state.isInRenderTree) {
            this.setState({
              isInRenderTree: t
            });
          }
          return t;
        },
        onHandleEnter: e => {
          this.setState({
            focusPos: e
          });
        },
        onHandleLeave: () => {
          this.setState({
            focusPos: ""
          });
        },
        onHandleUpBefore: e => {
          var t;
          var n;
          if ((n = (t = this.props).onMouseUp) !== null && n !== undefined) {
            n.call(t, e);
          }
          e.stopPropagation();
          e.preventDefault();
          document.body.removeEventListener("mousemove", this.foundation.onHandleMove, false);
          document.body.removeEventListener("mouseup", this.foundation.onHandleUp, false);
        },
        onHandleUpAfter: () => {
          let {
            currentValue: e
          } = this.state;
          let t = this.foundation.outPutValue(e);
          this.props.onAfterChange(t);
        },
        unSubscribeEventListener: () => {
          Array.from(this.eventListenerSet).forEach(e => e());
        }
      });
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentDidUpdate(e, t) {
      let n = !deepEqualUtil_1.deepEqual(this.props.value, e.value);
      if (this.props.disabled !== e.disabled) {
        this.foundation.handleDisabledChange(this.props.disabled);
      }
      if (n) {
        let e = this.props.value;
        let t = this.state.currentValue;
        this.foundation.handleValueChange(t, e);
        this.props.onAfterChange(this.props.value);
      }
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    render() {
      let {
        disabled: e,
        currentValue: t,
        min: n,
        max: i
      } = this.state;
      let r = this.props;
      let {
        vertical: a,
        verticalReverse: s,
        style: l,
        railStyle: c,
        range: u,
        className: f
      } = r;
      let p = y(r, ["vertical", "verticalReverse", "style", "railStyle", "range", "className"]);
      let m = d(`${w}-wrapper`, {
        [`${w}-disabled`]: e,
        [`${h.VERTICAL}-wrapper`]: a,
        [`${w}-reverse`]: a && s
      }, f);
      let v = d(`${w}-boundary`, {
        [`${w}-boundary-show`]: this.props.showBoundary && this.state.showBoundary
      });
      let g = d({
        [`${w}`]: !a,
        [h.VERTICAL]: a
      });
      let _ = u ? `Range: ${this._getAriaValueText(t[0], 0)} to ${this._getAriaValueText(t[1], 1)}` : undefined;
      let b = reactCoreLibraryReexport.createElement("div", Object.assign({
        className: m,
        style: l,
        ref: this.sliderEl,
        "aria-label": _,
        onMouseEnter: () => this.foundation.handleWrapperEnter(),
        onMouseLeave: () => this.foundation.handleWrapperLeave()
      }, this.getDataAttr(p)), reactCoreLibraryReexport.createElement("div", {
        className: `${w}-rail`,
        onClick: this.foundation.handleWrapClick,
        style: c
      }), this.renderTrack(), this.renderStepDot(), reactCoreLibraryReexport.createElement("div", null, this.renderHandle()), this.renderLabel(), reactCoreLibraryReexport.createElement("div", {
        className: v
      }, reactCoreLibraryReexport.createElement("span", {
        className: `${w}-boundary-min`
      }, n), reactCoreLibraryReexport.createElement("span", {
        className: `${w}-boundary-max`
      }, i)));
      if (a) {
        return b;
      } else {
        return reactCoreLibraryReexport.createElement("div", {
          className: g
        }, b);
      }
    }
    _addEventListener(e, t, n) {
      if (!e.addEventListener) {
        return emptyExportFunction.emptyFunction;
      }
      {
        var r = arguments.length;
        var o = Array(r > 3 ? r - 3 : 0);
        var a = 3;
        for (; a < r; a++) {
          o[a - 3] = arguments[a];
        }
        e.addEventListener(t, n, ...o);
        let i = () => {
          if (e != null) {
            e.removeEventListener(t, n);
          }
          Promise.resolve().then(() => {
            this.eventListenerSet.delete(i);
          });
        };
        this.eventListenerSet.add(i);
        return i;
      }
    }
  }
  S.propTypes = {
    defaultValue: l.oneOfType([l.number, l.array]),
    disabled: l.bool,
    showMarkLabel: l.bool,
    included: l.bool,
    marks: l.object,
    max: l.number,
    min: l.number,
    range: l.bool,
    step: l.number,
    tipFormatter: l.func,
    value: l.oneOfType([l.number, l.array]),
    vertical: l.bool,
    onAfterChange: l.func,
    onChange: l.func,
    onMouseUp: l.func,
    tooltipOnMark: l.bool,
    tooltipVisible: l.bool,
    showArrow: l.bool,
    style: l.object,
    className: l.string,
    showBoundary: l.bool,
    railStyle: l.object,
    verticalReverse: l.bool,
    getAriaValueText: l.func,
    handleDot: l.oneOfType([l.shape({
      size: l.string,
      color: l.string
    }), l.arrayOf(l.shape({
      size: l.string,
      color: l.string
    }))])
  };
  S.defaultProps = {
    disabled: false,
    showMarkLabel: true,
    tooltipOnMark: false,
    included: true,
    max: 100,
    min: 0,
    range: false,
    showArrow: true,
    step: 1,
    tipFormatter: e => e,
    vertical: false,
    showBoundary: false,
    onAfterChange: e => {},
    onChange: e => {},
    verticalReverse: false
  };
  require.d(exports, {
    SliderComponent: function () {
      return S;
    }
  });
}