// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27853.58336ad4.js
         * chunkId: 27853
         * moduleId: 668785
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function i(t, e, r) {
    var n;
    if ((e = typeof (n = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var r = t[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(t, e || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? n : n + "") in t) {
      Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = r;
    }
    return t;
  }
  class a {
    static getInstance() {
      if (this.monitorInstance === null) {
        this.monitorInstance = new a();
      }
      return this.monitorInstance;
    }
    init() {
      document.addEventListener("click", t => {
        let e = t.target;
        this.startMonitoring({
          target: e,
          type: "click"
        });
      }, true);
      document.addEventListener("copy", t => {
        let e = t.target;
        this.startMonitoring({
          target: e,
          type: "copy"
        });
      }, true);
      document.addEventListener("unload", this.destroy.bind(this));
    }
    getTrackElementKey(t) {
      try {
        let e = t.tagName || "";
        let r = (t.className || "").toString().trim().replace(/\s+/g, "_");
        let n = t.getAttribute("data-click-telemetry") || "";
        let i = t.getAttribute("data-copy-telemetry") || "";
        return `${e}_${r}_${n || i}`;
      } catch (t) {
        return "";
      }
    }
    reportError(t) {
      let {
        type: e,
        errorType: r,
        eventName: i,
        expected: a,
        target: s
      } = t;
      let o = JSON.stringify({
        dataset: a == null ? undefined : a.el.dataset,
        className: a == null ? undefined : a.el.className
      });
      let l = JSON.stringify({
        dataset: s == null ? undefined : s.dataset,
        className: s == null ? undefined : s.className
      });
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "l1_tea_track_event_error",
        error: Error(`[telemetry]:${r}:[${e}] ${i}`),
        meta: {
          eventName: i,
          expectedInfo: o,
          targetInfo: l
        }
      });
    }
    markTracked(t) {
      if (t && this.monitorEventNames.has(t)) {
        if (this.trackEvents.size > 100) {
          this.trackEvents.clear();
        }
        this.trackEvents.add({
          [t]: Date.now()
        });
      }
    }
    markTrackedElement(t) {
      if (t) {
        if (this.trackElements.size > 100) {
          this.trackElements.clear();
        }
        this.trackElements.add({
          [t]: Date.now()
        });
      }
    }
    findExpectedEventName(t, e) {
      let r = [];
      let n = t;
      while (n) {
        var i;
        let t = (i = n.getAttribute) === null || i === undefined ? undefined : i.call(n, `data-${e}-telemetry`);
        if (t && typeof t == "string" && t.trim()) {
          let i = t.trim();
          r.push({
            el: n,
            name: i
          });
          this.monitorEventNames.add(i);
          if (e === "copy") {
            break;
          }
        }
        n = n.parentElement;
      }
      return r;
    }
    getTrackedEventCount(t, e, r) {
      let a = [...this.trackEvents].filter(r => r[t] && r[t] >= e)?.length || 0;
      if (r === "copy" && !a) {
        a = [...this.trackEvents].filter(t => t.copy && t.copy >= e)?.length || 0;
      }
      return a;
    }
    expectTelemetry(t) {
      let {
        type: e,
        start: r,
        expected: i,
        target: a
      } = t;
      let s = i.name;
      let o = this.getTrackElementKey(i.el);
      this.markTrackedElement(o);
      setTimeout(() => {
        try {
          let l = this.getTrackedEventCount(s, r, e);
          let c = [...this.trackElements].filter(t => t[o] && t[o] >= r)?.length || 0;
          if (!l) {
            this.reportError({
              type: e,
              errorType: "missing_telemetry",
              eventName: s,
              expected: i,
              target: a
            });
          }
          if (l > c) {
            this.reportError({
              type: e,
              errorType: "multiple_telemetry",
              eventName: s,
              expected: i,
              target: a
            });
          }
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "l1_tea_track_event_count",
            meta: {
              type: e,
              eventName: s,
              trackElementKey: o
            }
          });
        } catch (t) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "l1_tea_moniter_js_error",
            error: t
          });
          return;
        }
      }, 200);
    }
    startMonitoring(t) {
      let {
        target: e,
        type: r = "click"
      } = t;
      try {
        if (!e) {
          return;
        }
        let t = this.findExpectedEventName(e, r);
        if (t.length === 0) {
          return;
        }
        let n = Date.now();
        t.forEach(t => {
          this.expectTelemetry({
            target: e,
            type: r,
            start: n,
            expected: t
          });
        });
      } catch (t) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "l1_tea_moniter_js_error",
          error: t
        });
        return;
      }
    }
    destroy() {
      this.trackElements.clear();
      this.trackEvents.clear();
    }
    constructor() {
      i(this, "trackElements", undefined);
      i(this, "trackEvents", undefined);
      i(this, "monitorEventNames", undefined);
      this.trackElements = new Set();
      this.trackEvents = new Set();
      this.monitorEventNames = new Set();
      this.init();
    }
  }
  i(a, "monitorInstance", null);
  require.d(exports, {
    TrackMonitor: function () {
      return a;
    }
  });
}