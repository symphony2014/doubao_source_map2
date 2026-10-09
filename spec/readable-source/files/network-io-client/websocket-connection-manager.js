// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'WebSocketClient'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 935199
         */
module.exports = function (module, exports, require) {
  var n;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  var observableSafeSubject = require("observable-safe-subject") /*id: 943446*/;
  var observableIntervalFactory = require("observable-interval-factory") /*id: 98037*/;
  var observableSafeLiftUtil_1 = require("observable-safe-lift-util_1") /*id: 149656*/;
  function l(e, t, r, n, i, s, o) {
    try {
      var a = e[s](o);
      var c = a.value;
    } catch (e) {
      r(e);
      return;
    }
    if (a.done) {
      t(c);
    } else {
      Promise.resolve(c).then(n, i);
    }
  }
  function h(e) {
    return function () {
      var t = this;
      var r = arguments;
      return new Promise(function (n, i) {
        var s = e.apply(t, r);
        function o(e) {
          l(s, n, i, o, a, "next", e);
        }
        function a(e) {
          l(s, n, i, o, a, "throw", e);
        }
        o(undefined);
      });
    };
  }
  function u(e, t, r) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class f {
    getPingCount() {
      return this.pingCount;
    }
    reset(e) {
      this.reset$.next(e);
    }
    resetImpl(e) {
      this.pingCount = 0;
      if (e) {
        this.pingLoop();
      }
    }
    pingLoop() {
      var e = this;
      return h(function* () {
        for (e.firstPingAt = Date.now();;) {
          if (e.isReceivedPong) {
            e.firstPingAt = Date.now();
          }
          if (e.pingable.ping()) {
            e.pingCount += 1;
            e.isReceivedPong = false;
          }
          if (e.isPongTimedOut()) {
            e.pongTimedOut$.next();
          }
          let t = observableIntervalFactory.createInterval(e.options.pingInterval).pipe(observableSafeLiftUtil_1.createSafeOperator(e.reset$));
          yield e.rxOp.toPromise(t);
        }
      })();
    }
    isPongTimedOut() {
      return Date.now() - this.firstPingAt > this.options.pongTimeout;
    }
    onPongMessage() {
      this.lastPongAt = Date.now();
      this.isReceivedPong = true;
      this.logger.logPingPongTime(this.lastPongAt - this.firstPingAt);
    }
    destroy() {
      this.reset$.complete();
      this.pongTimedOut$.complete();
      this.rxOp.destroy();
    }
    constructor(e, t, r) {
      u(this, "pingable", undefined);
      u(this, "options", undefined);
      u(this, "logger", undefined);
      u(this, "rxOp", undefined);
      u(this, "reset$", undefined);
      u(this, "pongTimedOut$", undefined);
      u(this, "pingCount", undefined);
      u(this, "lastPongAt", undefined);
      u(this, "firstPingAt", undefined);
      u(this, "isReceivedPong", undefined);
      this.pingable = e;
      this.options = t;
      this.logger = r;
      this.rxOp = new observableSafeSubject.SafeObservable();
      this.reset$ = new observableSubjectClass.Subject();
      this.pongTimedOut$ = new observableSubjectClass.Subject();
      this.pingCount = 0;
      this.lastPongAt = 0;
      this.firstPingAt = 0;
      this.isReceivedPong = false;
      this.reset$.pipe(this.rxOp.takeUntil()).subscribe(e => this.resetImpl(e));
    }
  }
  var observableMergeOperator = require("observable-merge-operator") /*id: 746368*/;
  var observableFromEventUtil = require("observable-from-event-util") /*id: 704650*/;
  var observableSafeMapFactory = require("observable-safe-map-factory") /*id: 574000*/;
  var observableTakeOperator = require("observable-take-operator") /*id: 731916*/;
  var observableShareReplayOperator = require("observable-share-replay-operator") /*id: 669027*/;
  function m(e, t, r, n, i, s, o) {
    try {
      var a = e[s](o);
      var c = a.value;
    } catch (e) {
      r(e);
      return;
    }
    if (a.done) {
      t(c);
    } else {
      Promise.resolve(c).then(n, i);
    }
  }
  function b(e) {
    return function () {
      var t = this;
      var r = arguments;
      return new Promise(function (n, i) {
        var s = e.apply(t, r);
        function o(e) {
          m(s, n, i, o, a, "next", e);
        }
        function a(e) {
          m(s, n, i, o, a, "throw", e);
        }
        o(undefined);
      });
    };
  }
  function O(e, t, r) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  (function (e) {
    e.OPEN = "OPEN";
    e.TIMEOUT = "TIMEOUT";
    e.ERROR = "ERROR";
  })(n ||= {});
  class w {
    static genNextConnectionId() {
      let e = this.nextConnectionId;
      this.nextConnectionId += 1;
      return e;
    }
    getIsDestroyed() {
      return this.rxOp.destroy$.isStopped;
    }
    getReadyState() {
      if (this.ws) {
        return this.ws.readyState;
      } else {
        return null;
      }
    }
    getEndPoint() {
      return this.options.endPoint;
    }
    getDeviceId() {
      return this.options.deviceId;
    }
    connect() {
      var e = this;
      return b(function* () {
        e.logger.logBeforeConnectTo(e.connectionId, e.options.endPoint);
        let t = Date.now();
        let r = new WebSocket(e.options.url, e.options.protocols);
        r.binaryType = e.options.binaryType;
        let i = observableMergeOperator.mergeObservable(observableFromEventUtil.fromEvent(r, "open").pipe(observableSafeMapFactory.createSafeMapOp(n.OPEN)), observableIntervalFactory.createInterval(e.options.connectTimeout).pipe(observableSafeMapFactory.createSafeMapOp(n.TIMEOUT)), observableFromEventUtil.fromEvent(r, "error").pipe(observableSafeMapFactory.createSafeMapOp(n.ERROR))).pipe(observableTakeOperator.takeOperator(1), observableShareReplayOperator.shareReplayWithConfig());
        e.logger.logConnecting(e.connectionId);
        i.subscribe(n => {
          e.logConnectTime(n, t);
          if (e.getIsDestroyed()) {
            e.closeWebSocket(r);
          }
        });
        let s = yield e.rxOp.toPromise(i);
        e.logger.logConnectResult(e.connectionId, s, r.readyState);
        if (s === n.OPEN) {
          e.ws = r;
          e.registerWebSocketEvents(r);
        }
        return s;
      })();
    }
    logConnectTime(e, t) {
      let r = Date.now();
      if (e === n.OPEN) {
        let e = r - t;
        this.logger.logConnectTime(this.connectionId, e);
      }
    }
    registerWebSocketEvents(e) {
      observableFromEventUtil.fromEvent(e, "message").pipe(this.rxOp.takeUntil()).subscribe(this.message$);
      observableFromEventUtil.fromEvent(e, "close").pipe(this.rxOp.takeUntil()).subscribe(this.close$);
      observableFromEventUtil.fromEvent(e, "error").pipe(this.rxOp.takeUntil()).subscribe(this.error$);
    }
    send(e) {
      return !!this.canSend(this.ws) && (this.ws.send(e), true);
    }
    canSend(e) {
      return e !== null && e.readyState === WebSocket.OPEN;
    }
    destroy() {
      this.logger.logConnectionDestroy(this.connectionId, this.ws !== null);
      this.message$.complete();
      this.close$.complete();
      this.error$.complete();
      this.rxOp.destroy();
      this.closeWebSocket(this.ws);
      this.ws = null;
    }
    closeWebSocket(e) {
      if (e !== null) {
        e.close();
      }
    }
    constructor(e, t) {
      O(this, "options", undefined);
      O(this, "logger", undefined);
      O(this, "connectionId", undefined);
      O(this, "rxOp", undefined);
      O(this, "ws", undefined);
      O(this, "message$", undefined);
      O(this, "close$", undefined);
      O(this, "error$", undefined);
      this.options = e;
      this.logger = t;
      this.connectionId = w.genNextConnectionId();
      this.rxOp = new observableSafeSubject.SafeObservable();
      this.ws = null;
      this.message$ = new observableSubjectClass.Subject();
      this.close$ = new observableSubjectClass.Subject();
      this.error$ = new observableSubjectClass.Subject();
    }
  }
  O(w, "nextConnectionId", 0);
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var safeMergeMapOperator = require("safe-merge-map-operator") /*id: 396704*/;
  var observableSafeGteFilter = require("observable-safe-gte-filter") /*id: 470010*/;
  function I(e, t, r, n, i, s, o) {
    try {
      var a = e[s](o);
      var c = a.value;
    } catch (e) {
      r(e);
      return;
    }
    if (a.done) {
      t(c);
    } else {
      Promise.resolve(c).then(n, i);
    }
  }
  function T(e) {
    return function () {
      var t = this;
      var r = arguments;
      return new Promise(function (n, i) {
        var s = e.apply(t, r);
        function o(e) {
          I(s, n, i, o, a, "next", e);
        }
        function a(e) {
          I(s, n, i, o, a, "throw", e);
        }
        o(undefined);
      });
    };
  }
  function x(e, t, r) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class A {
    getActiveConnection() {
      return this.activeConnection$.getValue();
    }
    switch() {
      var e = this;
      return T(function* () {
        e.logger.logBeforeSwitch(e.options.endPoints.length);
        if (e.options.endPoints.length <= 1) {
          return null;
        }
        e.stopRaceAndSwitch();
        let t = yield e.switchImpl();
        e.logger.logAfterSwitch(t !== null);
        e.stopRaceAndSwitch();
        if (t !== null) {
          e.setNewActiveConnection(t);
        }
        return t;
      })();
    }
    switchImpl() {
      var e = this;
      return T(function* () {
        let t = e.options.endPoints.filter(t => t !== e.lastEndPoint);
        if (e.lastEndPoint !== null) {
          t.unshift(e.lastEndPoint);
        }
        for (let r of t) {
          let t = e.factory.createSwitchRetryController();
          e.logger.logBeforeSwitchingToEndPoint(r);
          let n = yield e.tryCreatingConnectionWithRetry(r, t, e.stopSwitchOp);
          e.logger.logAfterSwitchingToEndPoint(r, n !== null);
          if (n !== null) {
            return n;
          }
        }
        return null;
      })();
    }
    race() {
      var e = this;
      return T(function* () {
        e.logger.logBeforeRace();
        e.stopRaceAndSwitch();
        let t = yield e.raceImpl();
        e.logger.logAfterRace();
        e.stopRaceAndSwitch();
        e.setNewActiveConnection(t);
        return t;
      })();
    }
    raceImpl() {
      var e = this;
      return T(function* () {
        let t = e.stopRaceOp.from(e.options.endPoints).pipe(safeMergeMapOperator.createSafeMergeMap(t => {
          let r = e.factory.createRaceRetryController();
          return e.tryCreatingConnectionWithRetry(t, r, e.stopRaceOp);
        }), observableSafeSubject.createSafeTakeOne(e => e !== null));
        return e.stopRaceOp.toPromise(t);
      })();
    }
    tryCreatingConnectionWithRetry(e, t, r) {
      var n = this;
      return T(function* () {
        for (r.destroy$.pipe(observableTakeOperator.takeOperator(1)).subscribe(() => t.destroy()); t.canRetry();) {
          yield r.toPromise(t.timeout());
          n.logger.logBeforeLoadingTicket();
          let {
            ticket: i,
            isFromCache: s
          } = yield r.toPromise(n.ticketManager.loadTicket());
          n.logger.logAfterLoadingTicket(i !== null, s);
          if (i === null) {
            continue;
          }
          if (!s) {
            t.reset();
          }
          let o = yield r.toPromise(n.tryCreatingConnection(e, i, r));
          if (o !== null) {
            return o;
          }
        }
        return null;
      })();
    }
    tryCreatingConnection(e, t, r) {
      var i = this;
      return T(function* () {
        let s = i.factory.createWebSocketConnection(e, t);
        let o = r.destroy$.pipe(observableSafeMapFactory.createSafeMapOp(null));
        let a = yield observableMergeOperator.mergeObservable(s.connect(), o).pipe(observableTakeOperator.takeOperator(1)).toPromise();
        if (a === n.OPEN) {
          return s;
        } else {
          if (a === null) {
            i.logger.logConnectionDestroyedByStopOp(s.connectionId);
          }
          s.destroy();
          return null;
        }
      })();
    }
    refresh() {
      var e = this;
      return T(function* () {
        e.destroyActiveConnection();
        if ((yield e.switch()) === null) {
          yield e.race();
        }
      })();
    }
    destroyActiveConnection() {
      let e = this.getActiveConnection();
      if (e !== null) {
        e.destroy();
        this.activeConnection$.next(null);
      }
    }
    setNewActiveConnection(e) {
      let t = this.getActiveConnection();
      if (t !== null) {
        t.destroy();
      }
      this.activeConnection$.next(e);
      this.lastEndPoint = e.getEndPoint();
      e.message$.pipe(observableSafeLiftUtil_1.createSafeOperator(this.newActiveConnection$)).subscribe(e => this.message$.next(e));
      e.error$.pipe(observableSafeLiftUtil_1.createSafeOperator(this.newActiveConnection$)).subscribe(e => this.error$.next(e));
      e.close$.pipe(observableSafeLiftUtil_1.createSafeOperator(this.newActiveConnection$)).subscribe(e => {
        this.destroyActiveConnection();
        this.close$.next(e);
      });
    }
    stopRaceAndSwitch() {
      this.stopRaceOp.destroy$.next();
      this.stopSwitchOp.destroy$.next();
    }
    reset() {
      this.destroyActiveConnection();
      this.stopRaceAndSwitch();
    }
    destroy() {
      this.destroyActiveConnection();
      this.activeConnection$.complete();
      this.message$.complete();
      this.close$.complete();
      this.error$.complete();
      this.stopRaceOp.destroy();
      this.stopSwitchOp.destroy();
    }
    constructor(e, t, r) {
      x(this, "factory", undefined);
      x(this, "options", undefined);
      x(this, "logger", undefined);
      x(this, "stopRaceOp", undefined);
      x(this, "stopSwitchOp", undefined);
      x(this, "activeConnection$", undefined);
      x(this, "newActiveConnection$", undefined);
      x(this, "ticketManager", undefined);
      x(this, "lastEndPoint", undefined);
      x(this, "message$", undefined);
      x(this, "close$", undefined);
      x(this, "error$", undefined);
      this.factory = e;
      this.options = t;
      this.logger = r;
      this.stopRaceOp = new observableSafeSubject.SafeObservable();
      this.stopSwitchOp = new observableSafeSubject.SafeObservable();
      this.activeConnection$ = new behaviorSubjectClass.BehaviorSubject(null);
      this.newActiveConnection$ = this.activeConnection$.asObservable().pipe(observableSafeGteFilter.createSafeGteFilter(1), observableShareReplayOperator.shareReplayWithConfig());
      this.ticketManager = this.factory.getTicketManager();
      this.lastEndPoint = null;
      this.message$ = new observableSubjectClass.Subject();
      this.close$ = new observableSubjectClass.Subject();
      this.error$ = new observableSubjectClass.Subject();
    }
  }
  function C(e, t, r, n, i, s, o) {
    try {
      var a = e[s](o);
      var c = a.value;
    } catch (e) {
      r(e);
      return;
    }
    if (a.done) {
      t(c);
    } else {
      Promise.resolve(c).then(n, i);
    }
  }
  function _(e) {
    return function () {
      var t = this;
      var r = arguments;
      return new Promise(function (n, i) {
        var s = e.apply(t, r);
        function o(e) {
          C(s, n, i, o, a, "next", e);
        }
        function a(e) {
          C(s, n, i, o, a, "throw", e);
        }
        o(undefined);
      });
    };
  }
  function N(e, t, r) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class j {
    canRetry() {
      return this.retryIndex < this.strategy.maxRetryTimes;
    }
    timeout() {
      var e = this;
      return _(function* () {
        let t = e.strategy.getRetryInterval(e.retryIndex);
        if (e.retryIndex >= e.strategy.maxRetryTimes || t === null) {
          e.retryIndex = e.strategy.maxRetryTimes;
          return;
        }
        if (e.timeoutPromise === null) {
          e.timeoutPromise = e.timeoutImpl(t);
        }
        return e.timeoutPromise;
      })();
    }
    timeoutImpl(e) {
      var t = this;
      return _(function* () {
        yield t.rxOp.toPromise(observableIntervalFactory.createInterval(e));
        t.timeoutPromise = null;
        t.retryIndex = (t.retryIndex + 1) % t.strategy.maxRetryTimes;
      })();
    }
    reset() {
      this.rxOp.destroy$.next();
      if (this.retryIndex !== -1) {
        this.retryIndex = 0;
      }
      this.timeoutPromise = null;
    }
    destroy() {
      this.reset();
      this.rxOp.destroy();
    }
    constructor(e) {
      N(this, "strategy", undefined);
      N(this, "rxOp", undefined);
      N(this, "retryIndex", undefined);
      N(this, "timeoutPromise", undefined);
      this.strategy = e;
      this.rxOp = new observableSafeSubject.SafeObservable();
      this.retryIndex = -1;
      this.timeoutPromise = null;
    }
  }
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var base64EncodingUtils = require("base64-encoding-utils") /*id: 825153*/;
  var chatSharePluginList = require("chat-share-plugin-list") /*id: 256649*/;
  var B = {
    nested: {
      protocol: {
        nested: {
          Frame: {
            fields: {
              seqid: {
                rule: "required",
                type: "uint64",
                id: 1
              },
              logid: {
                rule: "required",
                type: "uint64",
                id: 2
              },
              service: {
                rule: "required",
                type: "int32",
                id: 3
              },
              method: {
                rule: "required",
                type: "int32",
                id: 4
              },
              headers: {
                rule: "repeated",
                type: "ExtendedEntry",
                id: 5
              },
              payloadEncoding: {
                type: "string",
                id: 6
              },
              payloadType: {
                type: "string",
                id: 7
              },
              payload: {
                type: "bytes",
                id: 8
              },
              LogIDNew: {
                type: "string",
                id: 9
              }
            },
            nested: {
              ExtendedEntry: {
                fields: {
                  key: {
                    rule: "required",
                    type: "string",
                    id: 1
                  },
                  value: {
                    rule: "required",
                    type: "string",
                    id: 2
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  function F(e, t, r) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class M {
    encode(e) {
      let t = this.getPackage();
      let r = t.verify(e);
      if (r) {
        throw Error(r);
      }
      let n = t.create(e);
      return t.encode(n).finish();
    }
    decode(e, t) {
      let r = this.getPackage();
      let n = r.decode(new chatSharePluginList.util.Array(e));
      return r.toObject(n, t);
    }
    getServiceId() {
      return this.config.serviceId;
    }
    formatMessage(e, t = {}, r = "") {
      return {
        seqid: 1,
        logid: 1,
        service: this.getServiceId(),
        method: 1,
        payloadType: "json",
        headers: Object.keys(t).map(e => ({
          key: e,
          value: t[e]
        })),
        LogIDNew: r,
        payload: e
      };
    }
    getPackage() {
      let {
        lookupType: e
      } = this;
      this.package ||= chatSharePluginList.Root.fromJSON(B).root.lookupType(e);
      return this.package;
    }
    constructor(e) {
      F(this, "config", undefined);
      F(this, "package", undefined);
      F(this, "lookupType", undefined);
      this.config = e;
      this.package = null;
      this.lookupType = "protocol.Frame";
    }
  }
  class H extends M {
    pack(e, t) {
      let r = this.formatMessage(JSON.stringify(e), t.headers, t.LogIDNew);
      let n = this.parseBytesFields(r, e => base64EncodingUtils.Base64.encode(String(e)));
      return this.encode(n);
    }
    unpack(e) {
      let t = this.decode(e, {
        longs: String,
        enums: String,
        bytes: String
      });
      return this.parseBytesFields(t, e => {
        let t = base64EncodingUtils.Base64.decode(String(e));
        try {
          return JSON.parse(t);
        } catch (e) {
          return t;
        }
      });
    }
    parseBytesFields(e, t) {
      let {
        fields: r
      } = this.getPackage();
      let n = {};
      for (let i in r) {
        if (r[i].bytes === true) {
          n[i] = t(e[i]);
        } else {
          n[i] = e[i];
        }
      }
      return n;
    }
    constructor(e) {
      super(e);
    }
  }
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  class q extends M {
    pack(e, t) {
      let r = this.formatMessage(objectPathGetDefault.getObjectPathDefault(e, "data.payload"), t.headers, t.LogIDNew);
      return this.encode(r);
    }
    handlePayload(e) {
      return {
        code: 0,
        type: "",
        data: e.payload,
        headers: e.headers
      };
    }
    unpack(e) {
      let t = this.decode(e, {
        longs: String,
        enums: String
      });
      safeObjectSetWrapper.safeObjectSet(t, "payload", this.handlePayload(t));
      return t;
    }
    constructor(e) {
      super(e);
    }
  }
  var encodingConstants = require("encoding-constants") /*id: 328371*/;
  var encodingFormatUtils = require("encoding-format-utils") /*id: 934354*/;
  function Z(e, t, r) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class V {
    getPackage(e) {
      if (e === encodingConstants.encodingFormats.PB) {
        return this.pbDataPackager;
      } else {
        return this.commonDataPackager;
      }
    }
    pack(e, t) {
      let r = encodingFormatUtils.getEncodingFormat(objectPathGetDefault.getObjectPathDefault(t, ["headers", encodingConstants.upstreamEncKey], ""));
      return this.getPackage(r).pack(e, t);
    }
    unpack(e) {
      let t = this.commonDataPackager.unpack(e);
      let r = "";
      arrayObjectForeach.arrayObjectForeach(objectPathGetDefault.getObjectPathDefault(t, "headers"), e => {
        if (e.key === encodingConstants.downstreamEncKey) {
          r = e.value;
          return false;
        }
      });
      if (encodingFormatUtils.getEncodingFormat(r) === encodingConstants.encodingFormats.PB) {
        return this.pbDataPackager.unpack(e);
      } else {
        return t;
      }
    }
    constructor(e) {
      Z(this, "commonDataPackager", undefined);
      Z(this, "pbDataPackager", undefined);
      this.commonDataPackager = new H(e);
      this.pbDataPackager = new q(e);
    }
  }
  var networkUtilHelpers = require("network-util-helpers") /*id: 374407*/;
  function W(e, t, r) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class G {
    getRetryInterval(e) {
      if (e === -1) {
        if (this.retryIntervalAfterLastRetry) {
          return 0;
        } else {
          return Math.floor(Math.random() * 40000);
        }
      } else if (this.isFirstRetry || e !== 0) {
        this.isFirstRetry = false;
        return Math.floor(Math.random() * 10000) + e * 5000;
      } else {
        return this.retryIntervalAfterLastRetry;
      }
    }
    constructor(e) {
      W(this, "retryIntervalAfterLastRetry", undefined);
      W(this, "isFirstRetry", undefined);
      W(this, "maxRetryTimes", undefined);
      this.retryIntervalAfterLastRetry = e;
      this.isFirstRetry = true;
      this.maxRetryTimes = 3;
    }
  }
  class K {
    createWebSocketConnection(e) {
      return new w(this.makeWebSocketOptions(e), this.logger);
    }
    getTicketManager() {
      return this.ticketManager;
    }
    createRaceRetryController() {
      return new j(new G(120000));
    }
    createSwitchRetryController() {
      return new j(new G(null));
    }
    makeWebSocketOptions(e) {
      let t = this.makeFrontierQuery(this.frontierConfig);
      let r = networkUtilHelpers.buildWebSocketUrl({
        url: e,
        query: t
      });
      let n = t.device_id;
      let {
        protocols: i,
        binaryType: s,
        connectTimeout: o
      } = this.webSocketConfig;
      return {
        url: r,
        deviceId: n,
        endPoint: e,
        protocols: i,
        binaryType: s,
        connectTimeout: o
      };
    }
    makeFrontierQuery(e) {
      let {
        fpid: t,
        aid: r,
        member_id: n,
        access_key: i
      } = e;
      return {
        aid: String(r),
        fpid: t,
        device_id: n,
        access_key: i
      };
    }
    constructor(e, t, r, n) {
      W(this, "ticketManager", undefined);
      W(this, "webSocketConfig", undefined);
      W(this, "frontierConfig", undefined);
      W(this, "logger", undefined);
      this.ticketManager = e;
      this.webSocketConfig = t;
      this.frontierConfig = r;
      this.logger = n;
    }
  }
  class X {
    handleMessageData(e) {
      if (this.isPongMessage(e)) {
        this.pingPongCtrl.onPongMessage();
        return;
      }
      let t = this.packager.unpack(e);
      this.logger.logOnMessageData(t);
      this.sendMessageAck(t);
      if (t && typeof t != "string") {
        this.message$.next(t);
      }
    }
    isPongMessage(e) {
      return e === this.pingPongOptions.message;
    }
    sendMessageAck(e) {
      if (e.headers && e.headers.find(e => e.key === "need_ack" && e.value === "1")) {
        this.send({}, {
          headers: {
            is_ack: "1",
            ack_code: "0"
          },
          LogIDNew: e.LogIDNew || ""
        });
      }
    }
    ping() {
      let e = this.wsManager.getActiveConnection();
      if (e === null) {
        return false;
      }
      let t = e.send(this.pingPongOptions.message);
      if (t) {
        let e = this.pingPongCtrl.getPingCount();
        this.logger.logPingSuccess(e + 1);
      } else {
        this.logger.logPingFailure();
      }
      return t;
    }
    send(e, t) {
      let r = this.wsManager.getActiveConnection();
      return r !== null && r.send(this.packager.pack(e, t));
    }
    connect() {
      return this.wsManager.race();
    }
    refresh() {
      this.wsManager.refresh();
    }
    reset() {
      this.wsManager.reset();
    }
    destroy() {
      this.message$.complete();
      this.wsManager.destroy();
      this.pingPongCtrl.destroy();
      this.rxOp.destroy();
    }
    constructor(e, t, r, n, a, c) {
      W(this, "ticketManager", undefined);
      W(this, "webSocketConfig", undefined);
      W(this, "wsManagerOptions", undefined);
      W(this, "frontierConfig", undefined);
      W(this, "pingPongOptions", undefined);
      W(this, "logger", undefined);
      W(this, "rxOp", undefined);
      W(this, "wsManager", undefined);
      W(this, "message$", undefined);
      W(this, "close$", undefined);
      W(this, "error$", undefined);
      W(this, "newActiveConnection$", undefined);
      W(this, "pingPongCtrl", undefined);
      W(this, "pongTimeout$", undefined);
      W(this, "packager", undefined);
      this.ticketManager = e;
      this.webSocketConfig = t;
      this.wsManagerOptions = r;
      this.frontierConfig = n;
      this.pingPongOptions = a;
      this.logger = c;
      this.rxOp = new observableSafeSubject.SafeObservable();
      this.wsManager = new A(new K(this.ticketManager, this.webSocketConfig, this.frontierConfig, this.logger), this.wsManagerOptions, this.logger);
      this.message$ = new observableSubjectClass.Subject();
      this.close$ = this.wsManager.close$.asObservable();
      this.error$ = this.wsManager.error$.asObservable();
      this.newActiveConnection$ = this.wsManager.newActiveConnection$;
      this.pingPongCtrl = new f(this, this.pingPongOptions, this.logger);
      this.pongTimeout$ = this.pingPongCtrl.pongTimedOut$.asObservable();
      this.packager = new V(this.frontierConfig);
      this.wsManager.message$.pipe(observableSafeMapOperator.createSafeMapOperator(e => e.data), this.rxOp.takeUntil()).subscribe(e => this.handleMessageData(e));
      this.wsManager.newActiveConnection$.pipe(observableSafeMapOperator.createSafeMapOperator(e => e !== null), this.rxOp.takeUntil()).subscribe(e => this.pingPongCtrl.reset(e));
    }
  }
  require.d(exports, {
    WebSocketClient: function () {
      return X;
    }
  });
}