// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BG' to 'capturePointer'
// - Renamed export 'Y_' to 'persistEvent'
// - Renamed export 'iP' to 'getNativeEvent'
// - Renamed export 'nW' to 'createTouchHandler'
// - Renamed export 'q$' to 'isValidTouchEvent'
// - Renamed export 'x' to 'normalizeEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 593236
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var eventTypeConstants = require("event-type-constants") /*id: 561150*/;
  function c(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  function u(e) {
    return !!e && typeof e.target == "string" && !!eventTypeConstants.touchEvents[e.type] && !!eventTypeConstants.phaseStates[e.target];
  }
  function a(e) {
    return !!e && !!e.type.startsWith("touch") && e instanceof TouchEvent;
  }
  let s = function (e, n = 0) {
    if (u(e) || e instanceof MouseEvent) ;else if (a(e)) {
      return e.changedTouches[n];
    } else if (e.nativeEvent) {
      return s(e.nativeEvent, n);
    } else if (e.originalEvent) {
      return s(e.originalEvent, n);
    }
    return e;
  };
  function d(e) {
    if (e instanceof MouseEvent || a(e)) {
      return e;
    } else {
      return e.nativeEvent;
    }
  }
  function f(e) {
    if ("persist" in e) {
      e.persist();
    }
    return e;
  }
  function h(e) {
    if (e.target instanceof Element) {
      e.target.setPointerCapture(e.pointerId);
    }
  }
  class _ {
    constructor(e) {
      this.props = e;
      c(this, "touchStartTime", 0);
      c(this, "touchEndTime", 0);
      c(this, "contextMenuTime", 0);
      c(this, "startX", 0);
      c(this, "startY", 0);
      c(this, "newX", 0);
      c(this, "newY", 0);
      c(this, "movingDistanceX", 0);
      c(this, "movingDistanceY", 0);
      c(this, "firstTouchStartTime", 0);
      c(this, "firstTouchStartX", 0);
      c(this, "firstTouchStartY", 0);
      c(this, "longPressId", 0);
      c(this, "lastTouchEvent", null);
      c(this, "clickCount", 0);
      c(this, "clickTimeoutId", 0);
      c(this, "handleTouch", (e, n) => {
        let {
          type: r
        } = e;
        let o = {
          touchstart: this.touchEventWrapper(this.handleTouchstart),
          touchmove: this.touchEventWrapper(this.handleTouchmove),
          touchend: this.touchEventWrapper(this.handleTouchend),
          mousedown: this.mouseEventWrapper(this.handleTouchstart),
          mousemove: this.mouseEventWrapper(this.handleTouchmove),
          mouseup: this.mouseEventWrapper(this.handleTouchend),
          contextmenu: this.mouseEventWrapper(this.handleContextMenu)
        }[r];
        if (o) {
          o(e, n);
        }
      });
      c(this, "onTouch", this.handleTouch);
      c(this, "touchEventWrapper", e => (n, r) => {
        this.recordLastTouchEvent(n);
        return e(n, r);
      });
      c(this, "mouseEventWrapper", e => (n, r) => {
        if (!this.isSyntheticEvent(n)) {
          return e(n, r);
        }
      });
      c(this, "isSyntheticEvent", e => {
        if (this.lastTouchEvent && e.timeStamp - this.lastTouchEvent.timeStamp <= 200) {
          let {
            clientX: n,
            clientY: r
          } = s(this.lastTouchEvent);
          let {
            clientX: o,
            clientY: i
          } = s(e);
          if (Math.abs(n - o) <= 25 && Math.abs(r - i) <= 25) {
            return true;
          }
        }
        return false;
      });
      c(this, "handleTouchstart", (e, n) => {
        this.recordFirstTouch(e);
        this.touchStartTime = e.timeStamp;
        let r = s(e);
        this.startX = r.clientX;
        this.newX = r.clientX;
        this.startY = r.clientY;
        this.newY = r.clientY;
        this.movingDistanceX = 0;
        this.movingDistanceY = 0;
        if (this.clickCount === 0) {
          this.handleLongPress(e, n);
        }
      });
      c(this, "handleTouchmove", (e, n) => {
        this.recordMovingDistance(e);
      });
      c(this, "handleTouchend", (e, n) => {
        clearTimeout(this.longPressId);
        let {
          onClick: r,
          onDoubleClick: i
        } = this.props;
        if (r || i) {
          this.touchEndTime = e.timeStamp;
          this.recordMovingDistance(e);
          if (i && this.isValidDoubleClickDuration() && this.isValidDoubleClickMove() && this.clickCount === 1) {
            clearTimeout(this.clickTimeoutId);
            i(e, n);
            this.firstTouchStartTime = 0;
            this.firstTouchStartX = 0;
            this.firstTouchStartY = 0;
            this.clickCount = 0;
            return;
          }
          if (r && this.isValidClickDuration() && this.isValidMove() && this.clickCount === 0) {
            let l = true;
            if (isFunctionUtil_1.isFunction(this.props.needDelay)) {
              l = this.props.needDelay(e);
            }
            if (l && i) {
              f(e);
              clearTimeout(this.clickTimeoutId);
              this.clickTimeoutId = window.setTimeout(() => {
                r(e, n);
              }, this.props.doubleClickDuration || _.DEFAULT_DURATION);
            } else {
              r(e, n);
            }
          }
        }
        this.clickCount++;
        this.clearClickCount();
      });
      c(this, "handleLongPress", (e, n) => {
        let {
          onLongPress: r,
          longPressDuration: o = _.DEFAULT_DURATION
        } = this.props;
        if (r) {
          window.clearTimeout(this.longPressId);
          f(e);
          this.longPressId = window.setTimeout(() => {
            if (this.isValidMove()) {
              r(e, n);
            }
          }, o);
        }
      });
      c(this, "handleContextMenu", (e, n) => {
        this.contextMenuTime = e.timeStamp;
        let {
          onContextMenu: r
        } = this.props;
        if (r != null) {
          r(e, n);
        }
      });
      c(this, "recordFirstTouch", e => {
        let {
          doubleClickDuration: n = _.DEFAULT_DURATION,
          onDoubleClick: r
        } = this.props;
        if (r && e.timeStamp - this.touchStartTime < n) {
          this.firstTouchStartTime = this.touchStartTime;
          this.firstTouchStartX = this.startX;
          this.firstTouchStartY = this.startY;
        }
      });
      c(this, "recordLastTouchEvent", e => {
        if (e.type.startsWith("touch")) {
          this.lastTouchEvent = e;
        }
      });
      c(this, "recordMovingDistance", e => {
        let n = s(e);
        this.movingDistanceX += Math.abs(n.clientX - this.newX);
        this.movingDistanceY += Math.abs(n.clientY - this.newY);
        this.newX = n.clientX;
        this.newY = n.clientY;
      });
      c(this, "isValidMove", () => {
        let {
          movingDistance: e = _.DEFAULT_MOVING_DELTA
        } = this.props;
        return this.movingDistanceX <= e && this.movingDistanceY <= e;
      });
      c(this, "isValidDoubleClickMove", () => {
        let {
          movingDistance: e = _.DEFAULT_MOVING_DELTA
        } = this.props;
        return Math.abs(this.firstTouchStartX - this.startX) <= e && Math.abs(this.firstTouchStartY - this.startY) <= e;
      });
      c(this, "isValidClickDuration", () => {
        let {
          clickDuration: e = _.DEFAULT_DURATION
        } = this.props;
        return this.touchEndTime - this.touchStartTime <= e && !(this.touchEndTime - this.contextMenuTime <= e);
      });
      c(this, "isValidDoubleClickDuration", () => {
        let {
          doubleClickDuration: e = _.DEFAULT_DURATION
        } = this.props;
        return this.touchEndTime - this.firstTouchStartTime <= e;
      });
      c(this, "clearClickCount", debounceUtil_1_1.debounce(() => {
        this.clickCount = 0;
      }, (this.props.doubleClickDuration || _.DEFAULT_DURATION) + 30));
    }
  }
  c(_, "DEFAULT_MOVING_DELTA", 30);
  c(_, "DEFAULT_DURATION", 300);
  let p = e => new _(e).onTouch;
  require.d(exports, {
    capturePointer: function () {
      return h;
    },
    persistEvent: function () {
      return f;
    },
    getNativeEvent: function () {
      return d;
    },
    createTouchHandler: function () {
      return p;
    },
    isValidTouchEvent: function () {
      return u;
    },
    normalizeEvent: function () {
      return s;
    }
  });
}