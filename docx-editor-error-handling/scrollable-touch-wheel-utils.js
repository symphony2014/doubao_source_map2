// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZW' to 'isTableBlock'
// - Renamed export 'cQ' to 'ScrollableTouchHandler'
// - Renamed export 'YH' to 'createToggleState'
// - Renamed export 'TZ' to 'createThrottledHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 863817
         */
module.exports = function (module, exports, require) {
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var touchInteractionUtil = require("touch-interaction-util") /*id: 593236*/;
  let c = (e, i) => {
    let {
      clientX: r,
      clientY: n,
      radiusX: o,
      radiusY: l
    } = touchInteractionUtil.normalizeEvent(i);
    let {
      left: s,
      top: c,
      width: d,
      height: u
    } = e;
    let h = l || 10;
    let f = o || 10;
    return r < s + d + f && r > s - f && n < c + u + h && n > c - h;
  };
  let d = (e, i, r) => {
    let n = document.createRange();
    n.setStart(e, i);
    n.setEnd(e, r);
    return n.getBoundingClientRect();
  };
  var u = e => {
    try {
      let i = document.getSelection();
      if (!i || i.rangeCount < 1 || i.isCollapsed) {
        return false;
      }
      let {
        startContainer: r,
        startOffset: n,
        endContainer: o,
        endOffset: l
      } = i.getRangeAt(0);
      let s = d(r, n, n);
      let a = d(o, l, l);
      let u = d(o, l - 1, l);
      if (a.top !== u.top) {
        a = {
          left: u.left + u.width,
          top: u.top,
          width: 0,
          height: u.height
        };
      }
      return c(s, e) || c(a, e);
    } catch (e) {
      return false;
    }
  };
  var elementClassChecker = require("element-class-checker") /*id: 89187*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var normalizeTouchEvent = require("normalize-touch-event") /*id: 64930*/;
  var docxLayoutConstants_1 = require("docx-layout-constants_1") /*id: 700786*/;
  function v(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let b = debugLoggerFactory.createLogger("scrollable:scrollManage:utils");
  class y {
    constructor(e) {
      var i = this;
      this.scrollableOptions = e;
      v(this, "getDeltaX", e => e.shiftKey ? e.deltaX || e.deltaY || 0 : e.deltaX || 0);
      v(this, "checkIfHorizontalLeft", e => e < 0);
      v(this, "checkIfMainlyVertical", e => Math.abs(e.deltaY) > Math.abs(e.deltaX));
      v(this, "isEventIgnored", e => {
        var i;
        let {
          target: r
        } = e;
        return r instanceof Element && (((i = this.scrollableOptions.nestedScrollClasses) === null || i === undefined ? undefined : i.some(e => {
          let i = r.closest(`.${e}`);
          return i && i.scrollWidth > i.clientWidth;
        })) || elementClassChecker.hasAnyClass(r, this.scrollableOptions.ignoreScrollClasses));
      });
      v(this, "addWheel", function (e, r) {
        let n;
        let o;
        let a;
        let c = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        let d = r => {
          var c;
          if (((c = r.target) === null || c === undefined ? undefined : c.closest(`.${docxScrollableConstants.scrollableContainer}`)) !== e) {
            return;
          }
          let d = i.isEventIgnored(r);
          b("onStart(%s.%s), ignored=%s", r.type, r.eventPhase, d);
          if (d) {
            return;
          }
          if ((browserEnvironmentDetectionUtils.browserDetector.isIOS || browserEnvironmentDetectionUtils.browserDetector.isIPadBrowser) && u(r)) {
            b("onstart returned: because touch selection grabber");
            return;
          }
          let h = normalizeTouchEvent.normalizeEvent(r);
          n = h;
          o = h;
          a = uuidGeneratorUtil.generateUuid();
        };
        let h = e => {
          if (!n || !o || !a) {
            return;
          }
          let l = normalizeTouchEvent.normalizeEvent(e);
          let s = o.pageX - l.pageX;
          let c = o.pageY - l.pageY;
          let d = n.pageX - l.pageX;
          let u = Math.abs(n.pageY - l.pageY) / Math.abs(d);
          o = l;
          if (!s || !(u < 1)) {
            return;
          }
          let h = Object.assign(e, l, {
            deltaX: i.formatDeltaValue(s),
            deltaY: i.formatDeltaValue(c),
            isTouchEvent: true,
            touchEventId: a
          });
          b("touchmove, deltaX=%d(%d), deltaY=%d(%d)", h.deltaX, s, h.deltaY, c);
          r(h);
        };
        let f = () => {
          n = undefined;
          o = undefined;
          a = undefined;
        };
        let m = {
          capture: c,
          passive: true
        };
        let v = {
          capture: c,
          passive: browserEnvironmentDetectionUtils.browserEnv.isIPadBrowser
        };
        e.addEventListener("touchstart", d, m);
        document.addEventListener("touchmove", h, v);
        document.addEventListener("touchend", f, c);
        e.addEventListener("wheel", r, c);
        return () => {
          e.removeEventListener("touchstart", d, m);
          document.removeEventListener("touchmove", h, v);
          document.removeEventListener("touchend", f, c);
          e.removeEventListener("wheel", r, c);
        };
      });
      v(this, "formatDeltaValue", e => {
        if (!e) {
          return 0;
        }
        let i = numberClampUtil.clampNumber(Math.abs(e), 0, 50);
        if (e < 0) {
          return -i;
        } else {
          return i;
        }
      });
    }
  }
  let S = function (e) {
    let i;
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    let n = e;
    return {
      getValue: () => n,
      setValue(e) {
        n = e;
      },
      resetValue(e) {
        n = e;
        clearTimeout(i);
        i = setTimeout(() => {
          n = !e;
        }, r);
      }
    };
  };
  let k = window.requestAnimationFrame || window.webkitRequestAnimationFrame || (e => setTimeout(e, 1000 / 60));
  let E = e => {
    let i = [];
    let r = false;
    let n = o => {
      let l = i.reduce((e, i) => e + i, 0);
      i = [];
      if (l) {
        r = true;
        e(l, o);
        k(() => n(o));
      } else {
        r = false;
      }
    };
    return (l, s) => {
      if (isNumberUtil.isNumber(l)) {
        i.push(l);
        if (!r) {
          n(s);
        }
      } else {
        i = [];
        e(l, s);
      }
    };
  };
  let C = e => {
    var i;
    let r = e == null ? undefined : (i = e.closest(".block.docx-table-block")) === null || i === undefined ? undefined : i.getAttribute("class");
    return !!(r == null ? undefined : r.includes(docxLayoutConstants_1.fsBlockClass)) || !!(r == null ? undefined : r.includes(docxLayoutConstants_1.hsBlockClass));
  };
  require.d(exports, {
    isTableBlock: function () {
      return C;
    },
    ScrollableTouchHandler: function () {
      return y;
    },
    createToggleState: function () {
      return S;
    },
    createThrottledHandler: function () {
      return E;
    }
  });
}