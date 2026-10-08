// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'MessageTraceManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 341265
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  function n(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  let r = Number.MAX_SAFE_INTEGER;
  class a {
    isValid() {
      return this.high !== "0" || this.low !== "0";
    }
    constructor(e, t) {
      n(this, "high", undefined);
      n(this, "low", undefined);
      this.high = `${e}`;
      this.low = `${t}`;
    }
  }
  let o = (e, t) => {
    let s = `${t}`;
    let i = e - s.length;
    if (i <= 0) {
      return s;
    }
    while (i) {
      s = `0${s}`;
      i--;
    }
    return s;
  };
  function l(e) {
    return Number(e).toString(16);
  }
  function c(e) {
    return parseInt(e, 16);
  }
  let u = () => Math.floor(Math.random() * r + 1);
  class d {
    genId() {
      let e = this.addAndGet();
      if (e >= this.maxId) {
        this.seed = this.randomNumber();
        return this.genId();
      } else {
        return e;
      }
    }
    addAndGet() {
      this.seed += this.delta;
      return this.seed;
    }
    constructor(e) {
      n(this, "seed", undefined);
      n(this, "delta", undefined);
      n(this, "maxId", undefined);
      n(this, "randomNumber", undefined);
      this.randomNumber = e.randomNumber;
      this.seed = e.randomNumber();
      this.maxId = e.maxId;
      this.delta = e.delta;
    }
  }
  let v = {
    toStringW3C(e) {
      let t = o(2, e.version);
      let s = this.traceIdToString(e.traceId);
      let {
        spanId: i
      } = e;
      let n = o(2, e.flags);
      return `${t}-${s}-${i}-${n}`;
    },
    inject(e) {
      let t = {
        "x-flow-trace": this.toStringW3C(e)
      };
      if (e.baggage.size > 0) {
        t["x-flow-baggage"] = this.encodeBaggage(e.baggage);
      }
      return t;
    },
    spanIdToString: e => o(16, l(e)),
    traceIdToString(e) {
      let t = l(e.high);
      let s = l(e.low);
      return o(16, t) + o(16, s);
    },
    parseCommaSeparatedMap(e, t) {
      try {
        e = decodeURIComponent(e);
      } catch (e) {
        return t;
      }
      let s = e.split(",");
      for (let e = 0; e < s.length; e++) {
        let i = s[e].split("=");
        if (i.length === 2 && t.get(i[0]) === undefined) {
          t.set(i[0], i[1]);
        }
      }
      return t;
    },
    encodeBaggage(e) {
      let t = "";
      for (let [s, i] of e) {
        if (s.includes("=") || s.includes(",") || i.includes("=") || i.includes(",")) {
          return "";
        }
        let e = encodeURIComponent(i || "");
        t += t ? `,${s}=${e}` : `${s}=${e}`;
      }
      return t;
    }
  };
  let g = e => {
    let t = e.getContext();
    let s = e.tags.reduce((e, t) => ({
      ...e,
      [t[0]]: t[1]
    }), {});
    return {
      trace_log_id: e.logId,
      trace_id: v.traceIdToString(t.traceId),
      trace_span_duration: e.duration,
      trace_parent_id: t.parentId,
      trace_span_id: e.spanId,
      trace_span_name: e.name,
      trace_span_scene: e.scene,
      trace_span_start_timestamp: e.startTime,
      trace_status: 0,
      ...s
    };
  };
  let _ = e => {
    let t = g(e);
    teaAnalyticsEventTracker.trackEvent("flow_telemetry_web", t);
  };
  let m = () => Date.now() * 1000;
  function h(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  class f {
    getBaggageItem(e) {
      if (typeof e != "string" || e === "") {
        return "";
      } else {
        return this.baggage.get(e) || "";
      }
    }
    isValid() {
      var e;
      return this.debugInfo !== undefined || ((e = this.traceId) === null || e === undefined ? undefined : e.isValid());
    }
    constructor() {
      h(this, "version", 4);
      h(this, "spanId", undefined);
      h(this, "parentId", undefined);
      h(this, "flags", undefined);
      h(this, "debugInfo", undefined);
      h(this, "traceId", undefined);
      h(this, "baggage", undefined);
      this.spanId = "0";
      this.parentId = "0";
      this.flags = 1;
      this.debugInfo = "";
      this.traceId = new a(0, 0);
      this.baggage = new Map();
    }
  }
  function p(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  class S {
    setTag(e, t) {
      if (!this._ended) {
        this.tags.push([e, t]);
      }
    }
    setParentSpanId(e) {
      this.parentSpanId = e;
    }
    setTraceId(e) {
      let t = e.slice(0, 16);
      let s = e.slice(16);
      this.traceId = new a(c(t), c(s));
    }
    setTags(e) {
      if (!this._ended) {
        for (let t of Object.entries(e)) {
          this.tags.push(t);
        }
      }
    }
    setBaggageItem(e, t) {
      this.baggage.set(e, t);
      return this;
    }
    elapse() {
      return (m() - this.startTime) / 1000;
    }
    get duration() {
      return this._duration;
    }
    get ended() {
      return this._ended;
    }
    get scene() {
      return this._scene;
    }
    set scene(e) {
      this._scene = e;
    }
    init(e) {
      this.baggage = e;
    }
    start() {
      this.startTime = m();
    }
    finish() {
      this._ended = true;
      this.endTime = m();
      this._duration = this.endTime - this.startTime;
    }
    isRecording() {
      return !this._ended;
    }
    toCarrier() {
      return this.trace.toCarrier(this.getContext());
    }
    abort() {
      this._ended = true;
      this.startTime = 0;
    }
    getContext() {
      let e = new f();
      e.traceId = this.traceId;
      e.spanId = this.spanId;
      e.parentId = this.parentSpanId;
      e.baggage = this.baggage;
      return e;
    }
    constructor(e, t, s, i) {
      p(this, "startTime", 0);
      p(this, "endTime", 0);
      p(this, "_duration", 0);
      p(this, "_ended", false);
      p(this, "name", undefined);
      p(this, "isRootSpan", true);
      p(this, "_scene", "");
      p(this, "parentSpanId", undefined);
      p(this, "spanId", undefined);
      p(this, "logId", undefined);
      p(this, "traceId", undefined);
      p(this, "trace", undefined);
      p(this, "tags", undefined);
      p(this, "baggage", undefined);
      p(this, "now", m);
      this.name = e;
      this.trace = t;
      this.traceId = s;
      this.parentSpanId = i || "0";
      this.baggage = new Map();
      this.spanId = "";
      this.tags = [];
    }
  }
  function y(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  class M {
    static create(e) {
      return new M(e);
    }
    getSpan(e) {
      return this.spans.get(e);
    }
    startSpan(e) {
      let t;
      let s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (s.context) {
        let {
          spanId: i,
          baggage: n,
          traceId: r
        } = s.context;
        (t = new S(e, this, r, i)).baggage = n;
      } else {
        (t = new S(e, this, this.genTraceId())).spanId = this.genSpanId();
      }
      t.start();
      return t;
    }
    enableSampling() {
      return false;
    }
    genTraceId() {
      return new a(u(), u());
    }
    genSpanId() {
      return v.spanIdToString(this.spanIdGenerator.genId());
    }
    toCarrier(e) {
      return v.inject(e);
    }
    constructor(e) {
      y(this, "name", undefined);
      y(this, "spans", undefined);
      y(this, "spanIdGenerator", undefined);
      this.name = e;
      this.spans = new Map();
      this.spanIdGenerator = new d({
        randomNumber: u,
        maxId: Number.MAX_SAFE_INTEGER,
        delta: 1
      });
    }
  }
  var promiseDelayUtil = require("promise-delay-util") /*id: 937669*/;
  function b(e, t, s) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var s = e[Symbol.toPrimitive];
      if (s !== undefined) {
        var i = s.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = s;
    }
    return e;
  }
  class I {
    static getInstance(e = "default") {
      I.traceInstances[e] ||= new I();
      return I.traceInstances[e];
    }
    static moveInstance(e = "default", t = "default") {
      let s = I.traceInstances[e];
      I.traceInstances[t] = s;
      delete I.traceInstances[e];
    }
    startSpan(e) {
      var t;
      let s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if ((t = this.rootSpan) === null || t === undefined ? undefined : t.isRecording()) {
        this.rootSpan.finish();
      }
      this.rootSpan = this.tracer.startSpan(e, s);
      this.rootSpan.scene = "samantha_send_message";
      return this.rootSpan;
    }
    addWaiter(e) {
      this.waiters.set(e, new Promise(t => this.resolvers.set(e, t)));
    }
    resolveWaiter(e) {
      var t;
      if ((t = this.resolvers.get(e)) !== null && t !== undefined) {
        t();
      }
    }
    async wait() {
      return Promise.race([Promise.all(this.waiters.values()), promiseDelayUtil.delayPromise(5000)]);
    }
    resetWaiter() {
      this.waiters = new Map();
      this.resolvers = new Map();
    }
    report() {
      if (this.rootSpan) {
        _(this.rootSpan);
      }
      this.rootSpan = undefined;
    }
    async reportAfterWaiters() {
      if (this.waiters.size) {
        await this.wait();
        this.resetWaiter();
      }
      return this.report();
    }
    async finishAndReport() {
      if (this.rootSpan?.isRecording) {
        this.rootSpan.finish();
        await this.reportAfterWaiters();
      }
    }
    constructor() {
      b(this, "rootSpan", undefined);
      b(this, "tracer", undefined);
      b(this, "waiters", new Map());
      b(this, "resolvers", new Map());
      this.tracer = new M("message-tracer");
    }
  }
  b(I, "traceInstances", {});
  require.d(exports, {
    MessageTraceManager: function () {
      return I;
    }
  });
}