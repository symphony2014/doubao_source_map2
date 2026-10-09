// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'AsrOverlayTab'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 155113
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var chatStatusConstants = require("chat-status-constants") /*id: 680777*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M17.0859 4.08594C17.867 3.30489 19.133 3.30489 19.9141 4.08594C20.6951 4.86699 20.6951 6.13302 19.9141 6.91406L14.8281 12L19.9141 17.0859L20.0518 17.2373C20.6926 18.0229 20.6463 19.1818 19.9141 19.9141C19.1818 20.6463 18.0229 20.6926 17.2373 20.0518L17.0859 19.9141L12 14.8281L6.91406 19.9141C6.13302 20.6951 4.86699 20.6951 4.08594 19.9141C3.30489 19.133 3.30489 17.867 4.08594 17.0859L9.17188 12L4.08594 6.91406C3.30489 6.13302 3.30489 4.86699 4.08594 4.08594C4.86699 3.30489 6.13302 3.30489 6.91406 4.08594L12 9.17188L17.0859 4.08594Z",
      fill: "currentColor"
    })
  });
  let d = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    fill: "none",
    viewBox: "0 0 32 32",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0m.968 8.91a1.355 1.355 0 0 0-1.94 0L10.2 13.824a.707.707 0 0 0 0 .988l.48.489a.677.677 0 0 0 .97 0l3.192-3.25v10.75c0 .386.307.698.685.698h.68a.69.69 0 0 0 .686-.697V11.784l3.455 3.518a.677.677 0 0 0 .97 0l.48-.49a.707.707 0 0 0 0-.987z"
    })
  });
  let h = e => {
    let t = Array(e).fill(1);
    if (e >= 5) {
      t[0] = 0.1;
      t[e - 1] = 0.1;
      t[1] = 0.3;
      t[e - 2] = 0.3;
      t[2] = 0.5;
      t[e - 3] = 0.5;
      if (e >= 9) {
        t[3] = 0.7;
        t[e - 4] = 0.7;
        t[4] = 0.9;
        t[e - 5] = 0.9;
      }
    }
    return t;
  };
  let m = (e, t) => {
    if (e.startsWith("#")) {
      let n = parseInt(e.slice(1, 3), 16);
      let i = parseInt(e.slice(3, 5), 16);
      let r = parseInt(e.slice(5, 7), 16);
      return `rgba(${n}, ${i}, ${r}, ${t})`;
    }
    if (e.startsWith("rgb")) {
      return e.replace("rgb", "rgba").replace(")", `, ${t})`);
    } else {
      return e;
    }
  };
  let g = (e, t, n) => Math.max(t, Math.min(n, e));
  let f = (e, t) => e + Math.random() * (t - e);
  let p = (e, t) => {
    let n = [e - 1, e, e + 1].filter(e => !t.has(e));
    if (n.length === 0) {
      return e;
    }
    let i = Math.floor(Math.random() * n.length);
    return n[i];
  };
  function _(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  class v {
    updateTarget(e) {
      this.value = 0;
      this.offset = e / this.end;
      this.position = 0;
      this.orientation = 1;
    }
    updateValue() {
      if (this.orientation > 0) {
        this.value += this.offset;
        this.position += 1;
      } else {
        if (!(this.orientation < 0)) {
          return;
        }
        this.value -= this.offset;
        this.position -= 1;
      }
      if (this.position === this.end) {
        this.orientation = -1;
      } else if (this.position === 0) {
        this.orientation = 0;
        this.value = 0;
      }
    }
    constructor(e) {
      _(this, "value", 0);
      _(this, "offset", 0);
      _(this, "orientation", 0);
      _(this, "position", 0);
      _(this, "end", undefined);
      this.end = Math.floor(e / 2);
    }
  }
  class b {
    get values() {
      return this.meters.map(e => e.value);
    }
    updateTarget(e) {
      let t = this.meters.length;
      let n = t % 2 == 0 ? t / 2 - 1 : Math.floor(t / 2);
      this.peakIndex = p(n, new Set([0, t - 1]));
      this.targetValue = e;
      this.frameCount = 0;
    }
    updateMeterTarget(e) {
      if (e < 0 || e >= this.meters.length) {
        return;
      }
      let t = 1;
      t = e === this.peakIndex ? 1 : e === this.peakIndex - 1 || e === this.peakIndex + 1 ? 0.7 : 0.5;
      this.meters[e].updateTarget(this.targetValue * t);
    }
    updateValue() {
      switch (this.frameCount) {
        case 0:
          this.updateMeterTarget(this.peakIndex);
          break;
        case this.framesPerSpread:
          this.updateMeterTarget(this.peakIndex - 1);
          this.updateMeterTarget(this.peakIndex + 1);
          break;
        case this.framesPerSpread * 2:
          for (let e = 0; e < this.peakIndex - 1; e++) {
            this.updateMeterTarget(e);
          }
          for (let e = this.peakIndex + 2; e < this.meters.length; e++) {
            this.updateMeterTarget(e);
          }
      }
      this.meters.forEach(e => e.updateValue());
      this.frameCount += 1;
    }
    constructor(e, t, n) {
      _(this, "meters", undefined);
      _(this, "peakIndex", 0);
      _(this, "targetValue", 0);
      _(this, "frameCount", 0);
      _(this, "framesPerSpread", undefined);
      this.meters = Array.from({
        length: e
      }, () => new v(t));
      this.framesPerSpread = n;
      this.updateTarget(0);
    }
  }
  class S {
    updateTarget(e) {
      let t = this.groups.length;
      let n = t % 2 == 0 ? t / 2 - 1 : Math.floor(t / 2);
      let i = new Set([this.peakIndex, 0, t - 1]);
      this.peakIndex = p(n, i);
      this.targetValue = e;
      this.frameCount = 0;
    }
    updateGroupTarget(e) {
      if (e < 0 || e >= this.groups.length) {
        return;
      }
      let t = 1;
      t = e === this.peakIndex ? 1 : e === 0 || e === this.groups.length - 1 ? f(0.4, 0.5) : f(0.6, 0.8);
      this.groups[e].updateTarget(this.targetValue * t);
    }
    updateValue() {
      switch (this.frameCount) {
        case 0:
          this.updateGroupTarget(this.peakIndex);
          break;
        case S.framesPerSpread:
          this.updateGroupTarget(this.peakIndex - 1);
          this.updateGroupTarget(this.peakIndex + 1);
          break;
        case S.framesPerSpread * 2:
          for (let e = 1; e < this.peakIndex - 1; e++) {
            this.updateGroupTarget(e);
          }
          for (let e = this.peakIndex + 2; e < this.groups.length - 1; e++) {
            this.updateGroupTarget(e);
          }
          break;
        case S.framesPerSpread * 3:
          if (this.peakIndex - 1 != 0) {
            this.updateGroupTarget(0);
          }
          if (this.peakIndex + 1 !== this.groups.length - 1) {
            this.updateGroupTarget(this.groups.length - 1);
          }
      }
      this.groups.forEach(e => e.updateValue());
      this.frameCount += 1;
    }
    cleanDelaySample() {
      this.maxSample = 0;
    }
    generate(e, t) {
      this.maxSample = 0;
      this.cancel();
      this.timerId = window.setInterval(() => {
        let n = e();
        n = n > 0.5 ? 1 : n;
        this.maxSample = Math.max(this.maxSample, n);
        if (this.frameCount === S.framesPerSample) {
          let e = g(this.maxSample * this.config.scaleFactor, 0, 1);
          this.updateTarget(e);
          this.maxSample = 0;
        }
        this.updateValue();
        let i = [];
        for (let e of this.groups) {
          i.push(...e.values);
        }
        t(i);
      }, S.frameIntervalMs);
    }
    cancel() {
      if (this.timerId !== null) {
        window.clearInterval(this.timerId);
        this.timerId = null;
      }
    }
    constructor(e) {
      _(this, "config", undefined);
      _(this, "groups", undefined);
      _(this, "peakIndex", 0);
      _(this, "targetValue", 0);
      _(this, "frameCount", 0);
      _(this, "maxSample", 0);
      _(this, "timerId", null);
      if (e.meterGroupNum < 3 || e.meterPerGroup < 3) {
        throw Error("invalid group config");
      }
      this.config = e;
      this.groups = Array.from({
        length: e.meterGroupNum
      }, () => new b(e.meterPerGroup, S.framesPerSample, S.framesPerSpread));
      this.updateTarget(0);
    }
  }
  _(S, "frameIntervalMs", 20);
  _(S, "framesPerSample", 20);
  _(S, "framesPerSpread", 2);
  let P = e => {
    let {
      meters: t,
      meterWidth: n = 3,
      meterHeight: r = 28,
      meterPadding: o = 2,
      meterColors: a = ["#FFFFFF", "#FFFFFF"],
      alphaOfMeters: l,
      ignoreAlpha: s = false
    } = e;
    let c = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      let e = c.current;
      if (!e || t.length === 0) {
        return;
      }
      let i = window.devicePixelRatio || 1;
      let u = t.length;
      let d = (n + o) * u - o;
      e.style.width = `${d}px`;
      e.style.height = `${r}px`;
      e.width = Math.floor(d * i);
      e.height = Math.floor(r * i);
      let h = e.getContext("2d");
      if (!h) {
        return;
      }
      h.scale(i, i);
      h.clearRect(0, 0, d, r);
      let g = 0;
      for (let e = 0; e < u; e++) {
        let i = s ? 1 : (l == null ? undefined : l[e]) ?? 1;
        let u = m(a[0], i);
        let c = m(a[1], i);
        let d = h.createLinearGradient(g, 0, g, r);
        d.addColorStop(0, u);
        d.addColorStop(1, c);
        let p = Math.max(Math.max(0.2, Math.min(1, t[e])) * r, n);
        let _ = (r - p) / 2;
        let v = n / 2;
        h.beginPath();
        h.moveTo(g + v, _);
        h.lineTo(g + n - v, _);
        h.arc(g + n - v, _ + v, v, -Math.PI / 2, 0);
        h.lineTo(g + n, _ + p - v);
        h.arc(g + n - v, _ + p - v, v, 0, Math.PI / 2);
        h.lineTo(g + v, _ + p);
        h.arc(g + v, _ + p - v, v, Math.PI / 2, Math.PI);
        h.lineTo(g, _ + v);
        h.arc(g + v, _ + v, v, Math.PI, Math.PI * 3 / 2);
        h.closePath();
        h.fillStyle = d;
        h.fill();
        g += n + o;
      }
    }, [t, n, r, o, a, l, s]);
    return reactJsxRuntimeCoreReexport.jsx("canvas", {
      ref: c
    });
  };
  let C = e => {
    let {
      asrVolume: t,
      config: n = {
        meterGroupNum: 9,
        meterPerGroup: 4,
        minHeight: 0.3,
        maxHeight: 1,
        scaleFactor: 8
      },
      sphericalStyle: r
    } = e;
    let {
      meterGroupNum: o = 0,
      meterPerGroup: a = 0
    } = n || {};
    let [l, s] = reactCoreLibraryReexport.useState(() => Array.from({
      length: o * a
    }, () => 0));
    let c = reactCoreLibraryReexport.useRef(null);
    let d = reactCoreLibraryReexport.useRef(0);
    let m = reactCoreLibraryReexport.useMemo(() => r ? h(l.length) : Array(l.length).fill(1), [l.length, r]);
    reactCoreLibraryReexport.useEffect(() => {
      d.current = Math.max(0, Math.min(1, t));
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = new S(n);
      c.current = e;
      e.generate(() => d.current, e => s(e));
      return () => {
        e.cancel();
        c.current = null;
      };
    }, [n]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      style: {
        display: "inline-flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
        zIndex: 10000
      },
      children: reactJsxRuntimeCoreReexport.jsx(P, {
        meters: l,
        meterWidth: 3,
        meterPadding: 2,
        meterHeight: 28,
        meterColors: ["#FFFFFF", "#FFFFFF"],
        alphaOfMeters: m,
        ignoreAlpha: !r
      })
    });
  };
  var chatAsrStoreHook = require("chat-asr-store-hook") /*id: 176317*/;
  var E = {
    "asr-overlay-tab": "asr-overlay-tab-KXQOhU",
    "asr-overlay-tab-bg": "asr-overlay-tab-bg-Zt3byr",
    "asr-overlay-tab-bg-ball": "asr-overlay-tab-bg-ball-T8JspC",
    "asr-overlay-tab-bg-ballInner": "asr-overlay-tab-bg-ballInner-cbdOSG",
    "asr-overlay-tab-content": "asr-overlay-tab-content-jS7suv",
    "asr-overlay-tab-content-desc": "asr-overlay-tab-content-desc-wtWY1j",
    "asr-overlay-tab-content-visualizer": "asr-overlay-tab-content-visualizer-KEcaBe"
  };
  let x = e => {
    let {
      leftCenterPos: n,
      tabWidth: r,
      asrVolume: h,
      asrStartMethod: m = "click",
      asrStatus: g
    } = e;
    let f = reactCoreLibraryReexport.useMemo(() => 1 + Math.sin(h * Math.PI / 2) * 0.1, [h]);
    let p = reactCoreLibraryReexport.useMemo(() => ({
      meterGroupNum: 9,
      meterPerGroup: 4,
      minHeight: 0.3,
      maxHeight: 1,
      scaleFactor: 8
    }), []);
    let _ = i18nTranslationUtils.useTranslationWithFallback();
    let v = chatAsrStoreHook.useChatAsrStore.getState().asrBtnController?.stopAsr;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: E["asr-overlay-tab"],
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: E["asr-overlay-tab-bg"],
        style: {
          left: n,
          width: r
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: E["asr-overlay-tab-bg-ball"],
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: E["asr-overlay-tab-bg-ballInner"],
            style: {
              transform: `scale(${f})`
            }
          })
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: E["asr-overlay-tab-content"],
        style: {
          bottom: m === "click" ? 28 : 22,
          left: n
        },
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: o(E["asr-overlay-tab-content-visualizer"], m === "longPress" ? "justify-center" : "justify-between"),
          children: [m === "click" && reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
            content: _("voiceInput_speaking_tooltip_cancel"),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              onClick: () => v == null ? undefined : v({
                isCancel: true,
                reason: "interrupt",
                isInWave: true
              }),
              className: o("size-32 rounded-32 bg-dbx-neutral-00-20 hover:bg-dbx-neutral-00-30", "flex items-center justify-center", "cursor-pointer"),
              children: reactJsxRuntimeCoreReexport.jsx(c, {
                className: o("size-15 text-dbx-neutral-00-90")
              })
            })
          }), reactJsxRuntimeCoreReexport.jsx(C, {
            asrVolume: g === chatStatusConstants.ChatStatus.LOADING ? 0 : h,
            config: p,
            sphericalStyle: true
          }), m === "click" && reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
            content: _("voiceInput_speaking_tooltip_send"),
            children: reactJsxRuntimeCoreReexport.jsx(d, {
              onClick: () => v == null ? undefined : v({
                sendMethod: "speak_wave_send",
                isInWave: true
              }),
              className: o("size-32 text-dbx-neutral-00-80 hover:text-dbx-neutral-00-90", "cursor-pointer")
            })
          })]
        }), (g === chatStatusConstants.ChatStatus.LOADING || m === "longPress") && reactJsxRuntimeCoreReexport.jsx("div", {
          className: o(E["asr-overlay-tab-content-desc"], "text-dbx-text-static-white-tertiary"),
          children: _(g === chatStatusConstants.ChatStatus.LOADING ? "voiceInput_status_connecting" : "voiceInput_holdSpace_instruct_releaseCancel")
        })]
      })]
    });
  };
  require.d(exports, {
    AsrOverlayTab: function () {
      return x;
    }
  });
}