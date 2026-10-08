// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'yP' to 'CanonicalCode'
// - Renamed export 'y$' to 'generateTraceId'
// - Renamed export 'pM' to 'LoggerManager'
// - Renamed export 'tw' to 'LogType'
// - Renamed export 'ZP' to 'defaultLoggerManager'
// - Renamed export 'Dx' to 'StatusCode'
// - Renamed export 'J' to 'ConsoleExporter'
// - Renamed export 'in' to 'LogLevel'
// - Renamed export 'rh' to 'TraceFlags'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 711568
         */
module.exports = function (module, exports, require) {
  (o = c ||= {})[o.SUCCESS = 0] = "SUCCESS";
  o[o.FAILED_NOT_RETRYABLE = 1] = "FAILED_NOT_RETRYABLE";
  o[o.FAILED_RETRYABLE = 2] = "FAILED_RETRYABLE";
  (i = u ||= {}).Event = "event";
  i.Log = "log";
  i.Metric = "metric";
  i.Tracing = "tracing";
  (a = s ||= {})[a.Debug = 0] = "Debug";
  a[a.Info = 1] = "Info";
  a[a.Warn = 2] = "Warn";
  a[a.Error = 3] = "Error";
  a[a.Fatal = 4] = "Fatal";
  var r;
  var o;
  var i;
  var a;
  var c;
  var u;
  var s;
  var l;
  var traceFlagsEnum = require("trace-flags-enum") /*id: 38780*/;
  var traceSpanKindEnum = require("trace-span-kind-enum") /*id: 215784*/;
  var canonicalStatusCodes = require("canonical-status-codes") /*id: 593870*/;
  function _(e) {
    var t;
    if (e && Array.isArray(t = e) && t.length === 2) {
      return e[0] * 1000 + e[1] / 1000000;
    } else {
      return e;
    }
  }
  class p {
    constructor() {
      this.attributes = {
        lib: "@lark/acelogger@0.9.2",
        logger: "acelogger",
        spanKind: traceSpanKindEnum.SpanKind.INTERNAL,
        spanName: "unknown"
      };
    }
    setAttributes(e) {
      Object.assign(this.attributes, e);
    }
    getAttributes() {
      return this.attributes;
    }
    debug(e, t) {
      this.innerLog(Object.assign({}, t, {
        level: s.Debug,
        message: e,
        name: "log.debug",
        type: u.Log
      }));
    }
    info(e, t) {
      this.innerLog(Object.assign({}, t, {
        level: s.Info,
        message: e,
        name: "log.info",
        type: u.Log
      }));
    }
    warn(e, t) {
      this.innerLog(Object.assign({}, t, {
        level: s.Warn,
        message: e,
        name: "log.warn",
        type: u.Log
      }));
    }
    error(e, t) {
      let n = "";
      let r = "";
      if (e instanceof Error) {
        n = e.message;
        r = e.stack;
      } else {
        n = e;
      }
      this.innerLog(Object.assign({}, t, {
        level: s.Error,
        message: n,
        name: "log.error",
        stack: r,
        type: u.Log
      }));
    }
    fatal(e, t) {
      let n = "";
      let r = "";
      if (e instanceof Error) {
        n = e.message;
        r = e.stack;
      } else {
        n = e;
      }
      this.innerLog(Object.assign({}, t, {
        level: s.Fatal,
        message: n,
        name: "log.fatal",
        stack: r,
        type: u.Log
      }));
    }
    storeMetrics(e) {
      let t = e.message ? `, ${e.message}` : "";
      this.innerLog(Object.assign({}, e, {
        level: e.level || s.Debug,
        message: `store ${JSON.stringify(e.metrics)}${t}`,
        name: "metric.store",
        type: u.Metric
      }));
    }
    event(e, t) {
      let n = Object.assign({}, t, {
        level: s.Info,
        message: t && t.message || `log event: ${e}`,
        name: e,
        type: u.Event
      });
      this.innerLog(n);
    }
    startSpan(e, t) {
      let n = this.span ? Object.assign({}, t, {
        parent: this.span.context
      }) : t;
      let r = this.manager.tracer.createSpan(e, n);
      let o = new p();
      o.span = r;
      o.manager = this.manager;
      o.setAttributes(Object.assign({}, this.attributes, r.attributes, {
        spanKind: r.kind,
        spanName: r.name
      }));
      if (n && n.logStart === true) {
        o.innerLog({
          data: n && n.data,
          level: s.Info,
          message: `${r.name}.start`,
          metrics: {
            [`${r.name}.start.latency`]: r.startTime - r.userStartTime
          },
          name: `${r.name}.start`,
          type: u.Tracing
        });
      }
      return o;
    }
    endSpan(e) {
      if (!this.span) {
        this.error(Error("logger.endSpan must call after logger.startSpan"));
        return;
      }
      let t = Object.assign({}, e, {
        name: `${this.span.name}.end`,
        type: u.Tracing
      });
      t.level = t.level || s.Info;
      this.span.endTime = _(t.time) || this.manager.timer.now();
      let n = this.span.endTime - this.span.startTime;
      t.metrics = Object.assign({}, {
        [`${this.span.name}.duration`]: n
      }, t.metrics);
      let r = t.message ? `, ${t.message}` : "";
      t.message = `${this.span.name} end with ${n}ms${r}`;
      this.innerLog(t);
    }
    flush(e) {
      this.manager.flush(e);
    }
    innerLog(e) {
      let t = e.traceFlags || traceFlagsEnum.TraceFlags.NONE;
      let n = Object.assign({}, {
        spanId: "0",
        traceId: "0"
      }, e.data);
      let r = Object.assign({}, this.attributes, e.attributes);
      if (this.span) {
        if (e.traceFlags === undefined || e.traceFlags === null) {
          t = this.span.context.traceFlags;
        }
        n.spanId = this.span.context.spanId;
        n.traceId = this.span.context.traceId;
        r.spanName = this.span.name;
        r.spanKind = this.span.kind;
      }
      let o = e.status || canonicalStatusCodes.CanonicalCode.OK;
      let i = Math.max(function (e) {
        switch (e) {
          case canonicalStatusCodes.CanonicalCode.OK:
            return s.Debug;
          case canonicalStatusCodes.CanonicalCode.INTERNAL:
          case canonicalStatusCodes.CanonicalCode.RESOURCE_EXHAUSTED:
          case canonicalStatusCodes.CanonicalCode.UNAVAILABLE:
            return s.Error;
          default:
            return s.Warn;
        }
      }(o), e.level);
      let a = e.time || this.manager.timer.now();
      let c = typeof e.samplingRate == "number" ? e.samplingRate : 1;
      this.manager.addEvent({
        attributes: r,
        data: n,
        level: i,
        message: e.message,
        metrics: e.metrics,
        name: e.name,
        samplingRate: c,
        stack: e.stack,
        status: o,
        time: a,
        traceFlags: t,
        type: e.type
      });
    }
  }
  let E = {
    $rootSpan: 0
  };
  function C() {
    return Math.random().toString(32).substring(2, 8) + Math.random().toString(32).substring(2, 8);
  }
  class h {
    constructor() {
      this.data = {
        startTime: Date.now()
      };
    }
    toJSON() {
      return this.data;
    }
    createSpanContext(e) {
      var t;
      let n;
      let r = Object.assign({}, e);
      let o = r.traceId || C();
      return {
        isRemote: r.isRemote,
        spanId: (n = (t = r.spanId) ? E[t] ? E[t] = E[t] + 1 : E[t] = 1 : E.$rootSpan = E.$rootSpan + 1, t ? `${t}.${n}` : `${o}-${n}`),
        traceFlags: r.traceFlags || traceFlagsEnum.TraceFlags.NONE,
        traceId: o,
        traceState: r.traceState
      };
    }
    createSpan(e, t) {
      let n = t || {};
      let r = this.manager.timer.now();
      let o = _(n.startTime) || r;
      return {
        attributes: n.attributes,
        context: this.createSpanContext(n.parent),
        endTime: 0,
        kind: n.kind || traceSpanKindEnum.SpanKind.INTERNAL,
        name: e,
        parentContext: n.parent,
        startTime: r,
        userStartTime: o
      };
    }
    start(e) {
      this.data.startTime = _(e) || this.manager.timer.now();
    }
    end(e) {
      this.data.endTime = _(e) || this.manager.timer.now();
    }
  }
  let v = {
    now: () => Date.now()
  };
  (r = l ||= {}).Logger = "logger";
  r.Tracer = "tracer";
  r.Timer = "timer";
  class R {
    constructor(e) {
      this.eventBuffer = new Map();
      this.registries = new Map();
      this.exporterMap = new Map();
      this.bufferCount = 0;
      this.bufferSize = 10;
      this.flushDelay = 0;
      this.defaultLogger = new p();
      this.defaultLogger.manager = this;
      this.defaultTracer = new h();
      this.defaultTracer.manager = this;
      if (e && e.flushDelay) {
        this.flushDelay = e && e.flushDelay;
      }
    }
    setLogger(e) {
      this.registries.set("logger", e);
      if (e) {
        e.manager = this;
      }
    }
    get logger() {
      return this.registries.get(l.Logger) || this.defaultLogger;
    }
    setTracer(e) {
      this.registries.set("tracer", e);
      if (e) {
        e.manager = this;
      }
    }
    get tracer() {
      return this.registries.get(l.Tracer) || this.defaultTracer;
    }
    setTimer(e) {
      this.registries.set(l.Timer, e);
    }
    get timer() {
      return this.registries.get(l.Timer) || v;
    }
    setBufferSize(e) {
      this.bufferSize = e;
    }
    setExporter(e, t) {
      Object.keys(s).forEach(n => {
        let r = s[n];
        if (typeof r == "number" && r >= e) {
          let e = this.exporterMap.get(r) || [];
          e.push(t);
          this.exporterMap.set(r, e);
        }
      });
      return this;
    }
    addEvent(e) {
      let t = this.eventBuffer.get(e.level) || [];
      t.push(e);
      this.bufferCount++;
      this.eventBuffer.set(e.level, t);
      if (this.bufferCount >= this.bufferSize) {
        this.flush();
      }
      return this;
    }
    flush(e) {
      if (!this.flushTimer) {
        this.flushTimer = setTimeout(() => {
          this.eventBuffer.forEach((e, t) => {
            this.export(t, e);
          });
          this.eventBuffer = new Map();
          this.bufferCount = 0;
          this.flushTimer = null;
          if (e) {
            e();
          }
        }, this.flushDelay);
      }
    }
    get flushing() {
      return !!this.flushTimer;
    }
    export(e, t) {
      try {
        let n = this.exporterMap.get(e);
        if (n) {
          n.forEach(e => {
            e.export(t, e => {
              c.SUCCESS;
            });
          });
        }
      } catch (e) {}
    }
  }
  let T = {
    [s.Debug]: "DEBUG",
    [s.Info]: "INFO",
    [s.Warn]: "WARN",
    [s.Error]: "ERROR"
  };
  function g(e) {
    let t = (window.__ace_debug || "").split(",");
    if (t.includes(e.attributes.spanName) || t.includes("*") || e.level >= s.Warn) {
      (function (e, t) {
        if (!(e.level >= s.Error)) {
          switch (e.level) {
            case s.Debug:
            case s.Info:
            case s.Warn:
          }
        }
      })(e, 0);
    }
  }
  class N {
    constructor() {
      this.stoped = false;
    }
    export(e, t) {
      if (!this.stoped) {
        e.forEach(g);
        if (t) {
          t(c.SUCCESS);
        }
      }
    }
    shutdown() {
      this.stoped = true;
    }
  }
  require("process-browser-shim") /*id: 488992*/;
  var A = new R();
  require.d(exports, {
    CanonicalCode: function () {
      return canonicalStatusCodes.CanonicalCode;
    },
    generateTraceId: function () {
      return C;
    },
    LoggerManager: function () {
      return R;
    },
    LogType: function () {
      return u;
    },
    defaultLoggerManager: function () {
      return A;
    },
    StatusCode: function () {
      return c;
    },
    ConsoleExporter: function () {
      return N;
    },
    LogLevel: function () {
      return s;
    },
    TraceFlags: function () {
      return traceFlagsEnum.TraceFlags;
    }
  });
}