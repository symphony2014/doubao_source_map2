// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ImagePreviewAdapter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 350570
         */
module.exports = function (module, exports, require) {
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var uiFocusNavigation = require("ui-focus-navigation") /*id: 152428*/;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var keyboardKeyCodes_3 = require("keyboard-key-codes_3") /*id: 174510*/;
  let l = (e, t) => {
    let n = e == null ? undefined : e.composedPath();
    if (n == null) {
      return undefined;
    } else {
      return n.slice(0, n.length - 4).some(e => !!e.className && typeof e.className == "string" && t.some(t => e.className.includes(t)));
    }
  };
  let c = (e, t) => {
    let n = new Image();
    n.src = e;
    n.crossOrigin = "anonymous";
    n.onload = i => {
      let r = document.createElement("a");
      r.download = t;
      r.style.display = "none";
      r.download = t;
      r.href = e;
      let o = document.createElement("canvas");
      o.width = n.width;
      o.height = n.height;
      o.getContext("2d").drawImage(n, 0, 0, n.width, n.height);
      r.href = o.toDataURL("image/jpeg");
      document.body.appendChild(r);
      r.click();
      document.body.removeChild(r);
    };
  };
  let d = function (e = [], t = []) {
    let n = [];
    let i = e.length;
    let r = t.length;
    Array(i <= r ? i : r).fill(0).forEach((i, r) => {
      n.push(t[r]);
      n.push(e[r]);
    });
    if (i > r) {
      n = n.concat(e.slice(r, i));
    } else if (i < r) {
      n = n.concat(t.slice(i, r));
    }
    return n;
  };
  let u = (e, t, n, i) => {
    let r = t - n;
    let o = t + n;
    let a = e.length;
    let s = [];
    let l = [];
    if (n >= Math.floor(a / 2)) {
      if (i) {
        s = e.concat(e).slice(r + a < 0 ? 0 : r + a, t + a);
        l = e.concat(e).slice(t + 1, o + 1 < a * 2 ? o + 1 : a * 2);
      } else {
        s = e.slice(0, t);
        l = e.slice(t + 1, a);
      }
    } else if (i) {
      s = e.concat(e).slice(r + a, t + a);
      l = e.concat(e).slice(t + 1, o + 1);
    } else if (r >= 0 && o < a) {
      s = e.slice(r, t);
      l = e.slice(t + 1, o + 1);
    } else if (r < 0) {
      s = e.slice(0, t);
      l = e.slice(t + 1, n * 2 + 1);
    } else {
      l = e.slice(t + 1, a);
      s = e.slice(a - n * 2 - 1, t);
    }
    return Array.from(new Set(d(s.reverse(), l)));
  };
  let h = ["icon", "footer"];
  class f extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      var t;
      super(Object.assign({}, e));
      t = this;
      this._timer = null;
      this._startMouseDown = {
        x: 0,
        y: 0
      };
      this.handleViewVisibleChange = () => {
        let {
          viewerVisible: e
        } = this.getStates();
        if (e) {
          this.setState({
            viewerVisible: false
          });
          this.clearTimer();
        }
      };
      this.handleMouseMove = e => {
        this._persistEvent(e);
        this.mouseMoveHandler(e);
      };
      this.mouseMoveHandler = debounceUtilWrapper.createDebounce(e => {
        let {
          viewerVisible: t
        } = this.getStates();
        if (this._adapter.isValidTarget(e)) {
          if (!t) {
            this.setState({
              viewerVisible: true
            });
          }
          this.updateTimer();
        } else {
          this.clearTimer();
        }
      }, 50);
      this.updateTimer = () => {
        let {
          viewerVisibleDelay: e
        } = this.getProps();
        this.clearTimer();
        this._timer = setTimeout(this.handleViewVisibleChange, e);
      };
      this.clearTimer = () => {
        if (this._timer) {
          clearTimeout(this._timer);
          this._timer = null;
        }
      };
      this.handleWheel = e => {
        this.onWheel(e);
        uiFocusNavigation.suppressEvent(e);
      };
      this.onWheel = e => {
        let t;
        let {
          zoomStep: n,
          maxZoom: i,
          minZoom: o
        } = this.getProps();
        let {
          zoom: a
        } = this.getStates();
        if (e.deltaY < 0) {
          if (a + n <= i) {
            t = Number((a + n).toFixed(2));
          }
        } else if (e.deltaY > 0 && a - n >= o) {
          t = Number((a - n).toFixed(2));
        }
        if (!isUndefinedCheck.isUndefined(t)) {
          this.handleZoomImage(t);
        }
      };
      this.handleMouseUp = e => {
        let {
          maskClosable: t
        } = this.getProps();
        let n = !l(e, h);
        let {
          clientX: i,
          clientY: r
        } = e;
        let {
          x: o,
          y: a
        } = this._startMouseDown;
        if (Math.abs(i - o) > 5 || Math.abs(a - r) > 5) {
          n = false;
        }
        if (n && t) {
          this._adapter.notifyVisibleChange(false);
        }
      };
      this.handleMouseDown = e => {
        let {
          clientX: t,
          clientY: n
        } = e;
        this._startMouseDown = {
          x: t,
          y: n
        };
      };
      this.handleKeyDown = e => {
        let {
          closeOnEsc: t
        } = this.getProps();
        if (t && e.keyCode === keyboardKeyCodes_3.keyCodeMap.ESC) {
          e.stopPropagation();
          this._adapter.notifyVisibleChange(false);
          this._adapter.notifyClose();
          return;
        }
      };
      this.handleSwitchImage = e => {
        let t = e === "prev" ? -1 : 1;
        let {
          imgSrc: n,
          currentIndex: i
        } = this.getStates();
        let r = n.length;
        let o = (i + t + r) % r;
        if ("currentIndex" in this.getProps()) {
          if (this._adapter.getIsInGroup()) {
            this._adapter.getContext("setCurrentIndex")(o);
          }
        } else {
          this.setState({
            currentIndex: o
          });
        }
        this._adapter.notifyChange(o, e);
        this.setState({
          direction: e,
          rotation: 0
        });
      };
      this.handleDownload = () => {
        let {
          currentIndex: e,
          imgSrc: t
        } = this.getStates();
        let n = this._adapter.getSetDownloadFunc();
        let i = t[e];
        let r = n ? n(i) : i.slice(i.lastIndexOf("/") + 1).split("?")[0];
        c(i, r);
        this._adapter.notifyDownload(i, e);
      };
      this.handlePreviewClose = e => {
        this._adapter.notifyVisibleChange(false);
        this._adapter.notifyClose();
        uiFocusNavigation.suppressEvent(e);
      };
      this.handleAdjustRatio = e => {
        this.setState({
          ratio: e
        });
        this._adapter.notifyRatioChange(e);
      };
      this.handleRotateImage = e => {
        let {
          rotation: t
        } = this.getStates();
        let n = t + (e === "left" ? 90 : -90);
        this.setState({
          rotation: n
        });
        this._adapter.notifyRotateChange(n);
      };
      this.handleZoomImage = function (e) {
        let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let {
          zoom: i
        } = t.getStates();
        if (i !== e) {
          if (n) {
            t._adapter.notifyZoom(e, e > i);
          }
          t.setState({
            zoom: e
          });
        }
      };
      this.preloadGapImage = () => {
        let {
          preLoad: e,
          preLoadGap: t,
          infinite: n,
          currentIndex: i
        } = this.getProps();
        let {
          imgSrc: r
        } = this.getStates();
        if (!e || typeof t != "number" || t < 1) {
          return;
        }
        let o = u(r, i, t, n);
        if (o.length === 0) {
          return;
        }
        let a = new Image();
        let s = 0;
        function l(e) {
          if (++s < o.length) {
            a.src = o[s];
          }
        }
        a.onload = e => {
          this.setLoadSuccessStatus(a.src);
          l(e);
        };
        a.onerror = l;
        a.src = o[0];
      };
      this.preloadSingleImage = () => {
        let {
          preLoad: e,
          preLoadGap: t,
          infinite: n
        } = this.getProps();
        let {
          imgSrc: i,
          currentIndex: r,
          direction: o,
          imgLoadStatus: a
        } = this.getStates();
        if (!e || typeof t != "number" || t < 1) {
          return;
        }
        let s = r + (o === "prev" ? -1 : 1) * t;
        if (s < 0 || s >= i.length) {
          if (!n) {
            return;
          }
          s = (s + i.length) % i.length;
        }
        if (!a[s]) {
          let e = new Image();
          e.onload = e => {
            this.setLoadSuccessStatus(i[s]);
          };
          e.src = i[s];
        }
      };
      this.setLoadSuccessStatus = e => {
        let {
          imgLoadStatus: t
        } = this.getStates();
        let n = Object.assign({}, t);
        n[e] = true;
        this.setState({
          imgLoadStatus: n
        });
      };
      this.onImageLoad = e => {
        let {
          preloadAfterVisibleChange: t
        } = this.getStates();
        this.setLoadSuccessStatus(e);
        if (t) {
          this.preloadGapImage();
          this.setState({
            preloadAfterVisibleChange: false
          });
        } else {
          this.preloadSingleImage();
        }
      };
    }
    beforeShow() {
      this._adapter.registerKeyDownListener();
      this._adapter.disabledBodyScroll();
      this.updateTimer();
    }
    afterHide() {
      this._adapter.unregisterKeyDownListener();
      this._adapter.enabledBodyScroll();
      this.clearTimer();
    }
  }
  require.d(exports, {
    ImagePreviewAdapter: function () {
      return f;
    }
  });
}