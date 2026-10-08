// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IO' to 'ChatNetworkIO'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 650574
         */
module.exports = function (module, exports, require) {
  let n;
  var i;
  var s;
  var o;
  var a;
  var c;
  var l;
  var h;
  var u;
  var f;
  var p;
  var d;
  var genericReduceUtil = require("generic-reduce-util") /*id: 900464*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var incrementalCounterUtil = require("incremental-counter-util") /*id: 767112*/;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var networkUtilHelpers = require("network-util-helpers") /*id: 374407*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  function A(e, t, r) {
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
  class C {
    reset() {
      this.callbacks = [];
    }
    triggerNotify(...e) {
      this.callbacks.forEach(t => {
        t(...e);
      });
    }
    addListener(e) {
      this.callbacks.push(e);
    }
    removeListener(e) {
      this.callbacks = this.callbacks.filter(t => t !== e);
    }
    constructor() {
      A(this, "callbacks", []);
      this.reset();
    }
  }
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  function N(e) {
    return Object.keys(e).map(t => `${t}=${e[t]}`).join(";");
  }
  var observableIntervalFactory = require("observable-interval-factory") /*id: 98037*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var observableSafeSubject = require("observable-safe-subject") /*id: 943446*/;
  function $(e, t, r, n, i, s, o) {
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
  function L(e) {
    return function () {
      var t = this;
      var r = arguments;
      return new Promise(function (n, i) {
        var s = e.apply(t, r);
        function o(e) {
          $(s, n, i, o, a, "next", e);
        }
        function a(e) {
          $(s, n, i, o, a, "throw", e);
        }
        o(undefined);
      });
    };
  }
  function B(e, t, r) {
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
  class F {
    getInitialTicketExpireAt() {
      if (this.options.initTicket) {
        return Date.now() + this.options.expireAfter;
      } else {
        return 0;
      }
    }
    loadTicket() {
      if (this.ticket == null || this.isTicketExpired()) {
        this.ticket = null;
        if (this.loadTicketPromise === null) {
          this.loadTicketPromise = this.loadTicketAndSave();
        }
        return this.loadTicketPromise;
      } else {
        return Promise.resolve({
          ticket: this.ticket,
          isFromCache: true
        });
      }
    }
    markTicketAsExpired() {
      this.ticketExpireAt = Date.now();
    }
    loadTicketAndSave() {
      var e = this;
      return L(function* () {
        yield e.rxOp.toPromise(e.randomSleepFor(10000));
        let t = null;
        try {
          t = yield e.rxOp.toPromise(e.options.loadTicketImpl());
        } catch (e) {}
        if (t) {
          e.ticket = t;
          e.updateTicketExpireAt();
          e.ticket$.next(t);
        } else {
          t = null;
        }
        e.loadTicketPromise = null;
        return {
          ticket: t,
          isFromCache: false
        };
      })();
    }
    isTicketExpired() {
      return Date.now() >= this.ticketExpireAt;
    }
    updateTicketExpireAt() {
      this.ticketExpireAt = Date.now() + this.options.expireAfter;
    }
    randomSleepFor(e) {
      return observableIntervalFactory.createInterval(Math.floor(Math.random() * e));
    }
    destroy() {
      this.rxOp.destroy();
      this.ticket$.complete();
      this.loadTicketPromise = null;
    }
    constructor(e) {
      B(this, "options", undefined);
      B(this, "rxOp", undefined);
      B(this, "ticket", undefined);
      B(this, "ticket$", undefined);
      B(this, "ticketExpireAt", undefined);
      B(this, "loadTicketPromise", undefined);
      this.options = e;
      this.rxOp = new observableSafeSubject.SafeObservable();
      this.ticket = this.options.initTicket;
      this.ticket$ = new observableSubjectClass.Subject();
      this.ticketExpireAt = this.getInitialTicketExpireAt();
      this.loadTicketPromise = null;
    }
  }
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var observableSafeLiftUtil = require("observable-safe-lift-util") /*id: 161214*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  function q() {
    return observableSafeLiftUtil.createSafeOperator(function (e, t) {
      var r;
      var n = false;
      e.subscribe(safeSubscriber.safeSubscriber(t, function (e) {
        var i = r;
        r = e;
        if (n) {
          t.next([i, e]);
        }
        n = true;
      }));
    });
  }
  function U(e, t, r) {
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
    e.http = "http";
    e.socket = "socket";
  })(i ||= {});
  (function (e) {
    e.online = "online";
    e.offline = "offline";
    e.weakline = "weakline";
  })(s ||= {});
  (function (e) {
    e.OFFLINE = "OFFLINE";
    e.ONLINE = "ONLINE";
    e.POOR_CONNECTION = "POOR_CONNECTION";
    e.GOOD_CONNECTION = "GOOD_CONNECTION";
  })(o ||= {});
  (function (e) {
    e[e.ACTIVE = 0] = "ACTIVE";
    e[e.INACTIVE = 1] = "INACTIVE";
  })(a ||= {});
  (function (e) {
    e.ONE_MIN = "ONE_MIN";
    e.TWO_MIN = "TWO_MIN";
    e.THREE_MIN = "THREE_MIN";
    e.FOUR_MIN = "FOUR_MIN";
    e.FIVE_MIN = "FIVE_MIN";
  })(c ||= {});
  class J {
    get state() {
      return this.state$.getValue();
    }
    getState() {
      return this.state;
    }
    is(e) {
      return this.state === e;
    }
    getStats() {
      let {
        sendSuccessTimes: e,
        sendFailureTimes: t,
        receiveTimes: r
      } = this;
      return {
        sendSuccessTimes: e,
        sendFailureTimes: t,
        receiveTimes: r
      };
    }
    browserOnline() {
      this.sendFailureTimes = 0;
      this.receiveTimes = 0;
      this.state$.next(o.ONLINE);
    }
    browserOffline() {
      this.state$.next(o.OFFLINE);
    }
    sendMessageSuccess() {
      switch (this.state) {
        case o.ONLINE:
          this.sendSuccessTimes += 1;
          this.state$.next(o.GOOD_CONNECTION);
          return;
        case o.POOR_CONNECTION:
          if (this.sendFailureTimes === 0) {
            this.sendSuccessTimes += 1;
            this.state$.next(o.GOOD_CONNECTION);
          } else {
            this.sendSuccessTimes += 1;
            this.sendFailureTimes = 0;
          }
          return;
        case o.GOOD_CONNECTION:
          this.sendSuccessTimes += 1;
          return;
        case o.OFFLINE:
          return;
      }
    }
    intoPoorConnection() {
      this.sendSuccessTimes = 0;
      this.sendFailureTimes = 0;
      this.receiveTimes = 0;
      this.state$.next(o.POOR_CONNECTION);
    }
    sendMessageFailure() {
      switch (this.state) {
        case o.ONLINE:
          this.intoPoorConnection();
          return;
        case o.POOR_CONNECTION:
          this.sendFailureTimes += 1;
          return;
        case o.GOOD_CONNECTION:
          if (this.sendFailureTimes === 0) {
            this.sendFailureTimes += 1;
          } else {
            this.intoPoorConnection();
          }
          return;
        case o.OFFLINE:
          return;
      }
    }
    receivedBroadcastMessage() {
      switch (this.state) {
        case o.ONLINE:
        case o.POOR_CONNECTION:
        case o.GOOD_CONNECTION:
          this.receiveTimes += 1;
          return;
        case o.OFFLINE:
          return;
      }
    }
    destroy() {
      this.state$.complete();
      this.rxOp.destroy();
    }
    constructor() {
      U(this, "rxOp", new observableSafeSubject.SafeObservable());
      U(this, "state$", new behaviorSubjectClass.BehaviorSubject(o.ONLINE));
      U(this, "newState$", this.state$.pipe(q(), this.rxOp.takeUntil()));
      U(this, "sendSuccessTimes", 0);
      U(this, "sendFailureTimes", 0);
      U(this, "receiveTimes", 0);
    }
  }
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
    setExtension(e, t) {
      this.extensions[e] = t;
    }
    removeExtension(e) {
      delete this.extensions[e];
    }
    getExtension(e) {
      return this.extensions[e];
    }
    getExtensions() {
      return this.extensions;
    }
    init(e = {}) {
      arrayObjectForeach.arrayObjectForeach(e, (e, t) => this.setExtension(t, e));
    }
    constructor() {
      Z(this, "extensions", {});
    }
  }
  var z = new V();
  function W(e, t, r, n, i, s, o) {
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
  function G(e) {
    return function () {
      var t = this;
      var r = arguments;
      return new Promise(function (n, i) {
        var s = e.apply(t, r);
        function o(e) {
          W(s, n, i, o, a, "next", e);
        }
        function a(e) {
          W(s, n, i, o, a, "throw", e);
        }
        o(undefined);
      });
    };
  }
  function K(e, t, r) {
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
  let X = "hearbeat_server_time";
  let Q = "hearbeat_client_time";
  let Y = "last_server_push_time";
  let ee = "last_client_offline_time";
  class et {
    setHeartbeatTime(e) {
      let t = Date.now();
      this.storage.setItem(en(X), e);
      this.storage.setItem(en(Q), t);
    }
    setSocketPushTime(e) {
      this.storage.setItem(en(Y), e);
    }
    setOfflineTime() {
      var e = this;
      return G(function* () {
        let t = yield e.storage.getItem(en(X));
        let r = yield e.storage.getItem(en(Q));
        let n = +t + (Date.now() - +r);
        e.storage.setItem(en(ee), n);
      })();
    }
    getOfflineTime() {
      var e = this;
      return G(function* () {
        return {
          offlineTime: yield e.storage.getItem(en(ee)),
          pushTime: yield e.storage.getItem(en(Y))
        };
      })();
    }
    constructor() {
      K(this, "storage", undefined);
      this.storage = z.getExtensions() && z.getExtensions().Storage || er;
    }
  }
  let er = {
    storage: {},
    setItem: function (e, t) {
      er.storage[e] = t;
    },
    getItem: function (e) {
      return er.storage[e];
    }
  };
  function en(e) {
    let t = z.getExtensions && z.getExtensions().Suite && z.getExtensions().Suite.getToken;
    let r = t && t() || n;
    if (!r) {
      n ||= networkUtilHelpers.generateHashId(new Date().valueOf());
      r = n;
    }
    return `${e}.${r}`;
  }
  var ei = new et();
  function es(e, t, r) {
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
  let eo = -666666;
  class ea extends Error {
    constructor() {
      super("OverloadProtectionTriggered");
      es(this, "code", undefined);
      this.code = eo;
    }
  }
  function ec({
    interval: e,
    maxCount: t,
    onLimit: r
  }) {
    let n = 10;
    let i = false;
    let s = false;
    let o = 0;
    let a = 0;
    let c = () => {
      let r = Date.now();
      if (++o >= t) {
        i = true;
        return;
      }
      if (a === 0) {
        a = r;
        return;
      }
      if (r - a < e) {
        return;
      }
      let s = Math.floor((r - a) / 1000 * n);
      if (o > s) {
        o -= s;
      } else {
        o = 0;
      }
      a = r;
    };
    return function (e) {
      return function (...t) {
        if (i) {
          if (typeof r == "function" && !s) {
            r();
            s = true;
          }
          return Promise.reject(new ea());
        } else {
          c();
          return e.apply(undefined, t);
        }
      };
    };
  }
  function el() {
    return z.getExtensions() && z.getExtensions().FeatureGate && z.getExtensions().FeatureGate[l.REQUEST_MELTDOWN_AJAX_ENABLE];
  }
  (function (e) {
    e.REQUEST_MELTDOWN_AJAX_ENABLE = "request_meltdown_ajax_enable";
  })(l ||= {});
  var encodingFormatUtils = require("encoding-format-utils") /*id: 934354*/;
  var encodingConstants = require("encoding-constants") /*id: 328371*/;
  (function (e) {
    e.GET_TICKET = "/api/pandora_ws/ws_ticket/";
    e.POST_RCE_MESSAGE = "/api/rce/messages";
    e.POST_RCE_HEARTBEAT = "/sync/heartbeat";
    e.POST_ROOM_WATCH = "/sync/watch";
    e.POST_ROOM_UNWATCH = "/sync/unwatch";
  })(h ||= {});
  let ef = {
    "x-command": "api.rce.pandora"
  };
  (function (e) {
    e.TOKEN = "token";
    e.LOCAL = "local";
  })(u ||= {});
  (function (e) {
    e.CONNECT_ERROR = "-8";
    e.TIMEOUT = "ECONNABORTED";
    e[e.LOGIN_REQUIRED = 5] = "LOGIN_REQUIRED";
    e[e.SERVICE_ERROR = 1015] = "SERVICE_ERROR";
    e[e.SERVER_BUSY = 9998] = "SERVER_BUSY";
  })(f ||= {});
  let ep = [1015, 9998];
  function ed(e, t, r, n, i, s, o) {
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
  function ey(e) {
    return function () {
      var t = this;
      var r = arguments;
      return new Promise(function (n, i) {
        var s = e.apply(t, r);
        function o(e) {
          ed(s, n, i, o, a, "next", e);
        }
        function a(e) {
          ed(s, n, i, o, a, "throw", e);
        }
        o(undefined);
      });
    };
  }
  function eg(e, t, r) {
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
  function ev(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      var n = Object.keys(r);
      if (typeof Object.getOwnPropertySymbols == "function") {
        n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }));
      }
      n.forEach(function (t) {
        eg(e, t, r[t]);
      });
    }
    return e;
  }
  function em(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function eb(e, t) {
    t = t ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(t));
    } else {
      em(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  let eO = 1;
  let ew = "2";
  let ek = 2;
  class eE {
    getTimeout(e) {
      return e.timeout || this.timeout;
    }
    fetchBaseInfo() {
      var e = this;
      return ey(function* () {
        e.fetchBaseInfoPromise = apiServicesCollection.OtterCoreApiService.AgwGenAccessInfo();
        let {
          data: t
        } = yield e.fetchBaseInfoPromise;
        let {
          access_key: r,
          member_id: n
        } = t || {};
        if (r && n) {
          e.baseInfo = {
            access_key: r,
            member_id: n
          };
          return e.baseInfo;
        } else {
          return Promise.reject(Error("fetchBaseInfo: invalid response"));
        }
      })();
    }
    ensureBaseInfoExist() {
      var e = this;
      return ey(function* () {
        if (!e.fetchBaseInfoPromise) {
          return yield e.fetchBaseInfo();
        }
        try {
          yield e.fetchBaseInfoPromise;
        } catch (t) {
          return yield e.fetchBaseInfo();
        }
        return e.baseInfo;
      })();
    }
    loadFrontierClient() {
      return ey(function* () {
        return new Promise((e, t) => {
          t("need FrontierClient.");
        });
      })();
    }
    setupFrontierClient() {
      var e = this;
      return ey(function* () {
        e.frontierClientStatus = "loading";
        let t = [e.loadFrontierClient(), e.ensureBaseInfoExist()];
        let [r, n] = yield Promise.all(t);
        let i = e.makeFrontierConfig(n);
        e.frontierClient = new r(e.ticketManager, e.webSocketOptions, e.wsManagerOptions, i, e.pingPongOptions, e.logger);
        e.bindSocketEvent(e.frontierClient);
        e.frontierClientStatus = "done";
        if (e.frontierClientResolves.length) {
          let t = e.frontierClientResolves;
          e.frontierClientResolves = [];
          t.forEach(e => e());
        }
      })();
    }
    ensureFrontierClient() {
      var e = this;
      return ey(function* () {
        if (e.frontierClientStatus === "init") {
          yield e.setupFrontierClient();
        } else if (e.frontierClientStatus === "loading") {
          yield new Promise(t => {
            e.frontierClientResolves.push(t);
          });
        }
        return e.frontierClient;
      })();
    }
    makeFrontierConfig(e) {
      let {
        member_id: t,
        access_key: r
      } = e;
      let {
        fpid: n,
        aid: i,
        serviceId: s = 2
      } = this.config;
      return {
        fpid: n,
        aid: i,
        member_id: t,
        access_key: r,
        serviceId: s
      };
    }
    loadTicketImpl() {
      return ey(function* () {
        return Promise.resolve("mock_123");
      })();
    }
    resetRecvCount() {
      this._recvCount ^= this._recvCount;
    }
    addRecvCount() {
      this._recvCount++;
      if (eO < this._recvCount) {
        this.state = s.online;
        this._recvCount ^= this._recvCount;
      }
    }
    intoWeakOnline() {
      this._recvCount ^= this._recvCount;
      this.state = s.weakline;
    }
    get netState() {
      return this.state;
    }
    reset() {
      this.reqId = 1;
      this.requests = {};
    }
    getMemberId() {
      return this.baseInfo?.member_id || 0;
    }
    getTicket() {
      return this.ticket;
    }
    connectSocket(e = false) {
      if (this.state === s.online && !this.config.disableSocket) {
        return this._connectSocket(e).catch(e => {
          this.logger.moiraeTeaLog({
            event: "connect_error",
            msg: e.toString()
          });
        });
      }
    }
    _connectSocket(e = false) {
      var t = this;
      return ey(function* () {
        let r = yield t.ensureFrontierClient();
        t.closeSocket();
        t.logger.moiraeTeaLog({
          event: "connect_start"
        });
        let n = Date.now();
        let i = yield r.connect();
        t.logger.moiraeTeaLog({
          event: "connect_success",
          cost_time: Date.now() - n
        });
        if (e) {
          t.fireEvent("firstConnectSuccess");
        }
        return i;
      })();
    }
    request(e, t = {}) {
      if (el()) {
        return ec({
          interval: 1000,
          maxCount: 100,
          onLimit: () => {
            this.logger.moiraeTeaLog({
              key: "request_meltdown"
            });
          }
        })(() => this.normalRequest(e, t))();
      } else {
        return this.normalRequest(e, t);
      }
    }
    normalRequest(e, t = {}) {
      if (this.state === s.offline) {
        let t = Promise.reject(Error("offline"));
        t.reqId = e.req_id || NaN;
        return t;
      }
      let r = this.adapter.generateRequestContext();
      e = eb(ev({}, e), {
        version: e.version || ek,
        data: ev({}, this.baseInfo, e.data),
        req_id: e.req_id || this.reqId++,
        context: r
      });
      let n = t.channel || this.channel;
      let o = this.getHeaders(e, t, r);
      if (n === i.socket && !networkUtilHelpers.checkByteLength(JSON.stringify(e), this.maxSize)) {
        let r = Object.assign(t, {
          headers: o
        });
        return this.requestBySocket(e, r);
      }
      if (t.channel && t.channel !== i.socket) {
        this.logger.moiraeInfo(`not using socket as options.channel is ${t.channel}`);
      } else if (n === i.socket && (this.logger.moiraeInfo(`not using socket as payload size is over ${this.maxSize}`), t.timeoutRetry === 0)) {
        let t = Promise.reject(Error(`not using socket as payload size is over ${this.maxSize}`));
        t.reqId = e.req_id || NaN;
        return t;
      }
      return this.requestByHttp(e, t);
    }
    getHeaders(e, t = {}, r) {
      let n = this.adapter.getCommonHeader && this.adapter.getCommonHeader();
      return ev({
        req_id: String(e.req_id || this.reqId++),
        context: N(r),
        user_agent: navigator.userAgent
      }, t.headers || {}, n || {});
    }
    mount() {
      if (!this.hasListener) {
        window.addEventListener("online", this.handleOnline);
        window.addEventListener("offline", this.handleOffline);
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
        window.addEventListener("unload", this.handleUnload);
        this.hasListener = true;
      }
    }
    unmount(e = false) {
      window.removeEventListener("online", this.handleOnline);
      window.removeEventListener("offline", this.handleOffline);
      document.removeEventListener("visibilitychange", this.handleVisibilityChange);
      if (e) {
        window.removeEventListener("unload", this.handleUnload);
        this.hasListener = false;
      }
    }
    closeSocket() {
      if (this.frontierClient) {
        this.frontierClient.reset();
      }
    }
    bindSocketEvent(e) {
      e.newActiveConnection$.subscribe(e => {
        if (e === null) {
          this.logSocketError("lost active connection");
          this.handleNoActiveConnection();
        } else {
          this.handleActiveConnection();
        }
      });
      e.close$.subscribe(() => {
        this.refreshIfNotOffline("closed");
      });
      e.error$.subscribe(() => {
        this.refreshIfNotOffline("error");
      });
      e.message$.subscribe(e => {
        this.handleMessage(e);
      });
      e.pongTimeout$.subscribe(() => {
        this.refreshIfNotOffline("pong timed out");
      });
    }
    refreshIfNotOffline(e) {
      this.logSocketError(e);
      if (this.state !== s.offline && this.frontierClient) {
        this.frontierClient.refresh();
      }
    }
    handleActiveConnection() {
      let {
        channel: e,
        state: t
      } = this;
      this.logger.moiraeTeaLog({
        event: "socket_enabled",
        prevChannel: e,
        prevState: t
      });
      this.channel = i.socket;
      this.state = s.online;
      this.socketSendTimeoutTimes = 0;
      this.fireEvent("enabled", this.state, this.channel);
    }
    handleNoActiveConnection() {
      if (this.channel !== i.http) {
        this.channel = i.http;
        if (this.state !== s.offline) {
          this.fireEvent("disabled", this.state, this.channel);
        }
      }
    }
    logSocketError(e) {
      let {
        channel: t,
        state: r
      } = this;
      this.logger.moiraeTeaLog({
        event: "socket_error",
        type: e,
        prevChannel: t,
        prevState: r
      });
    }
    fireEvent(e, ...t) {
      try {
        let r = this.events[e];
        if (r) {
          r(...t);
        }
      } catch (e) {
        this.logger.logException(e);
      }
    }
    requestByHttp(e, t) {
      var r = this;
      return ey(function* () {
        let n = e.data && e.data.type || t.url;
        let i = e.req_id;
        let a = e.context && e.context.request_id || i;
        if (objectPathGetDefault.getObjectPathDefault(t, ["headers", encodingConstants.upstreamEncKey]) === encodingConstants.encodingFormats.PB) {
          safeObjectSetWrapper.safeObjectSet(e, "data.payload", encodingFormatUtils.bytesToBase64(objectPathGetDefault.getObjectPathDefault(e, "data.payload")));
          safeObjectSetWrapper.safeObjectSet(t, ["headers", encodingConstants.upstreamEncKey], encodingConstants.encodingFormats.JSON);
        }
        r.logger.moiraeInfo(`send req(${a}) ${n} by http`);
        try {
          if (Math.random() * 10 < 1) {
            r.logger.moiraeTeaLog({
              key: "client_sheet_client_suit_request_http"
            });
          }
        } catch (e) {
          r.logger.logException(e);
        }
        let {
          path: c
        } = t.headers || {};
        let {
          host: l = ""
        } = t;
        let {
          member_id: u
        } = yield r.ensureBaseInfoExist();
        let p = {
          url: t.url || (c ? l + c : h.POST_RCE_MESSAGE),
          method: "post",
          params: {
            member_id: u
          },
          data: e,
          timeout: r.getTimeout(t),
          headers: ev({}, ef, t.headers),
          noStore: t.noStore === undefined || t.noStore
        };
        let d = r.adapter.sendMessageByAxios(p).then(e => {
          let t = e && e.data;
          if (t && t.type === "ERROR" && ep.includes(t.code)) {
            r.logger.moiraeInfo(`RESOLVE req(${a}) for error code ${t.code}`);
          }
          if (r.state === s.weakline) {
            r.addRecvCount();
          }
          r.logger.moiraeInfo(`req(${a}) ${n} by http is resolved`);
          r.stateMachine.sendMessageSuccess();
          return e;
        }).catch(i => {
          if (r.state === s.weakline) {
            r.resetRecvCount();
          }
          if (r.stateMachine.is(o.POOR_CONNECTION) && Math.random() * 5 < 1) {
            let e = JSON.stringify(r.stateMachine.getStats());
            r.logger.moiraeTeaLog({
              event: "http_failure_weakly_connected",
              stats: e
            });
          }
          r.stateMachine.sendMessageFailure();
          let c = i && (i.code === f.CONNECT_ERROR || i.code === f.TIMEOUT);
          if (t.timeoutRetry && c && r.state !== s.offline) {
            r.logger.moiraeInfo(`RESEND req(${a}) by http for error ${networkUtilHelpers.safeStringify(i)}`);
            return r.requestByHttp(e, eb(ev({}, t), {
              timeoutRetry: Math.max(0, t.timeoutRetry - 1)
            }));
          } else {
            r.logger.moiraeInfo(`req(${a}) ${n} by http is rejected for error ${networkUtilHelpers.safeStringify(i)}`);
            r.logger.moiraeCount("ee.docs.doc.client_io_rejected");
            return Promise.reject(i);
          }
        });
        d.reqId = e.req_id;
        return d;
      })();
    }
    requestBySocket(e, t) {
      let r = e.data && e.data.type;
      let n = e.req_id;
      let i = e.context && e.context.request_id || n;
      let o = new Promise((o, a) => {
        this.requests[n] = {
          payload: e,
          options: t,
          resolve: o,
          reject: a,
          resendByHttp: () => {
            this.logger.moiraeInfo(`RESEND req(${i}) ${r} by http`);
            this.requestByHttp(e, t).then(o, a);
            delete this.requests[n];
          }
        };
        this.logger.moiraeInfo(`send req(${i}) ${r} by socket`);
        let c = !!this.frontierClient && this.frontierClient.send(e, t);
        let l = () => {
          if (this.requests[n]) {
            if (this.requests[n].options.timeoutRetry === 0) {
              this.requests[n].reject(Error(`req(${i}) ${r} by socket timeout`));
              return;
            }
            if (this.state === s.weakline) {
              this.resetRecvCount();
            }
            this.logger.moiraeInfo(`req(${i}) ${r} by socket timeout, #${this.socketSendTimeoutTimes}`);
            this.socketSendTimeoutTimes += 1;
            if (this.socketSendTimeoutTimes === 2) {
              this.refreshIfNotOffline("socket send timed out");
            }
            this.requests[n].resendByHttp();
          }
        };
        if (c) {
          setTimeout(l, this.getTimeout(t), "socket timeout");
        } else {
          this.logger.moiraeInfo(`req(${i}) ${r} by socket send failure`);
          this.requests[n].resendByHttp();
        }
      });
      o.reqId = n;
      try {
        if (Math.random() * 10 < 1) {
          this.logger.moiraeTeaLog({
            key: "client_sheet_client_suit_request_socket"
          });
        }
      } catch (e) {
        this.logger.logException(e);
      }
      return o;
    }
    handleMessage(e) {
      let t;
      let {
        payload: r,
        headers: n = []
      } = e;
      let {
        request_id: i,
        data: o
      } = r;
      let a = n.filter(({
        key: e
      }) => e === "req_id")[0];
      let c = n.filter(({
        key: e
      }) => e === "X-TT-LOGID")[0];
      if (a) {
        t = a.value;
      }
      if (c) {
        r.log_id = c.value;
      }
      let l = r.req_id || t;
      let {
        code: h,
        type: u,
        over_size: p
      } = o || {};
      let {
        requests: d
      } = this;
      if (this.state === s.weakline) {
        this.addRecvCount();
      }
      if (h === f.LOGIN_REQUIRED) {
        this.logger.moiraeTeaLog({
          event: "ws_ticket_expired",
          requestType: u
        });
        this.stateMachine.sendMessageFailure();
        this.ticketManager.markTicketAsExpired();
        this.ticketManager.loadTicket().then(e => {
          if (e.ticket === null) {
            this.logger.moiraeInfo(`ABORT req(${i}) ${u} due to failure to reload ticket`);
            if (l && d[l]) {
              d[l].reject(Error("failed to reload ticket"));
            }
            return;
          }
          if (l && d[l]) {
            this.logger.moiraeInfo(`RESEND req(${i}) ${u} by http after reloading ticket`);
            d[l].resendByHttp();
          }
        });
        this.refreshIfNotOffline("ticket expired");
        return;
      }
      if (l && d[l]) {
        this.stateMachine.sendMessageSuccess();
        this.socketSendTimeoutTimes = 0;
        if (p === 1) {
          this.logger.moiraeInfo(`req(${i}) ${u} by socket is oversize`);
          d[l].resendByHttp();
          return;
        }
        this.logger.moiraeInfo(`req(${i}) ${u} by socket is resolved`);
        d[l].resolve(r);
        delete d[l];
        return;
      }
      this.logger.moiraeInfo(`message(${i}) ${u} is received by socket`);
      this.logger.logOnPassiveMessageData(e);
      this.stateMachine.receivedBroadcastMessage();
      this.fireEvent("broadcast", e);
    }
    getLogMessage(e) {
      return `IO: memberId(${this.getMemberId()}): ${e}`;
    }
    on(e, t) {
      this.events[e] = t;
    }
    isNewProtocol() {
      return !!this.config.businessType;
    }
    getHost() {
      return this.config.host;
    }
    constructor(e) {
      var r = this;
      eg(this, "adapter", undefined);
      eg(this, "channel", undefined);
      eg(this, "state", undefined);
      eg(this, "config", undefined);
      eg(this, "webSocketOptions", undefined);
      eg(this, "wsManagerOptions", undefined);
      eg(this, "pingPongOptions", undefined);
      eg(this, "ticketManager", undefined);
      eg(this, "logger", undefined);
      eg(this, "stateMachine", undefined);
      eg(this, "reqId", undefined);
      eg(this, "requests", undefined);
      eg(this, "timeout", undefined);
      eg(this, "maxSize", undefined);
      eg(this, "ticket", undefined);
      eg(this, "baseInfo", undefined);
      eg(this, "fetchBaseInfoPromise", undefined);
      eg(this, "hasListener", undefined);
      eg(this, "events", undefined);
      eg(this, "_recvCount", undefined);
      eg(this, "socketSendTimeoutTimes", undefined);
      eg(this, "socketPushAcks", undefined);
      eg(this, "routeType", undefined);
      eg(this, "frontierClient", undefined);
      eg(this, "frontierClientStatus", undefined);
      eg(this, "frontierClientResolves", undefined);
      eg(this, "handleOnline", undefined);
      eg(this, "handleOffline", undefined);
      eg(this, "handleVisibilityChange", undefined);
      eg(this, "handleUnload", undefined);
      this.adapter = e;
      this.channel = i.http;
      this.state = s.online;
      this.config = ev({}, eE.DEFAULT_IO_CONFIG, this.adapter.getStaticConfig());
      this.webSocketOptions = {
        protocols: "pbbp2",
        binaryType: "arraybuffer",
        connectTimeout: 5000
      };
      this.wsManagerOptions = {
        endPoints: this.config.endPoints
      };
      this.pingPongOptions = {
        message: ew,
        pingInterval: 15000,
        pongTimeout: 45000
      };
      this.logger = this.adapter.createIOLogger(this);
      this.stateMachine = new J();
      this.reqId = 1;
      this.requests = {};
      this.baseInfo = null;
      this.fetchBaseInfoPromise = null;
      this.hasListener = false;
      this.events = {};
      this._recvCount = 0;
      this.socketSendTimeoutTimes = 0;
      this.socketPushAcks = {};
      this.routeType = u.TOKEN;
      this.frontierClientStatus = "init";
      this.frontierClientResolves = [];
      this.handleOnline = ey(function* () {
        r.logger.moiraeInfo("online");
        r.stateMachine.browserOnline();
        r.channel = i.http;
        r.state = s.online;
        r.fireEvent("online", r.channel);
        yield r.connectSocket();
      });
      this.handleOffline = () => {
        this.logger.moiraeInfo("offline");
        this.stateMachine.browserOffline();
        this.closeSocket();
        this.state = s.offline;
        this.channel = i.http;
        arrayObjectForeach.arrayObjectForeach(this.requests, e => e.reject(Error("network offline")));
        this.requests = {};
        this.fireEvent("offline", this.channel);
        ei.setOfflineTime();
      };
      this.handleVisibilityChange = () => {
        this.fireEvent("visibilitychange");
      };
      this.handleUnload = () => {
        if (this.events.unload) {
          this.events.unload();
        }
        if (this.frontierClient) {
          this.frontierClient.destroy();
        }
        this.ticketManager.destroy();
        this.stateMachine.destroy();
      };
      this.timeout = this.config.timeout;
      this.maxSize = this.config.maxSize;
      this.routeType = this.config.routeType;
      this.ticket = this.config.initialTicket || "";
      this.ticketManager = new F({
        initTicket: this.config.initialTicket,
        loadTicketImpl: () => this.loadTicketImpl(),
        expireAfter: 90000000000000
      });
      this.fetchBaseInfo();
      if (this.config.autoConnect) {
        this.connectSocket(true);
      }
      this.mount();
      this.stateMachine.newState$.subscribe(([e, t]) => {
        this.logger.moiraeTeaLog({
          event: "state_machine",
          prevState: e,
          newState: t
        });
      });
      if (this.logger.logIOInit) {
        this.logger.logIOInit(this.baseInfo?.member_id || 0);
      }
    }
  }
  eg(eE, "DEFAULT_IO_CONFIG", {
    timeout: 15000,
    maxSize: 6000,
    memberId: undefined,
    autoConnect: true,
    initialTicket: undefined,
    host: "",
    routeType: u.TOKEN,
    disableSocket: false
  });
  (function (e) {
    e.CONNECT_SOCKET = "CONNECT_SOCKET";
    e.TRIGGER_ACTIVE_TAB = "TRIGGER_ACTIVE_TAB";
    e.TRIGGER_INACTIVE_TAB = "TRIGGER_INACTIVE_TAB";
    e.TRIGGER_ONLINE = "TRIGGER_ONLINE";
    e.TRIGGER_VISIBLE = "TRIGGER_VISIBLE";
    e.SCHEDULE = "SCHEDULE";
    e.BUSINESS_CALL = "BUSINESS_CALL";
    e.DEFAULT = "DEFAULT";
  })(p ||= {});
  let eS = () => true;
  function eI(e, t, r, n, i, s, o) {
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
  function eT(e) {
    return function () {
      var t = this;
      var r = arguments;
      return new Promise(function (n, i) {
        var s = e.apply(t, r);
        function o(e) {
          eI(s, n, i, o, a, "next", e);
        }
        function a(e) {
          eI(s, n, i, o, a, "throw", e);
        }
        o(undefined);
      });
    };
  }
  function ex(e, t, r) {
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
  function eA(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      var n = Object.keys(r);
      if (typeof Object.getOwnPropertySymbols == "function") {
        n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }));
      }
      n.forEach(function (t) {
        ex(e, t, r[t]);
      });
    }
    return e;
  }
  function eC(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function e_(e, t) {
    t = t ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(t));
    } else {
      eC(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  (function (e) {
    e[e.Page = 1] = "Page";
  })(d ||= {});
  class eN extends eE {
    getServerAndClientIntervalTime() {}
    calcHeartbeatInterval() {
      if (this.externalTabInactive) {
        return this.heartbeatIntervalForInactive;
      } else if (document.visibilityState === "hidden") {
        if (eS()) {
          return this.heartbeatIntervalForInactive;
        } else {
          return this.heartbeatIntervalForSocket * 2;
        }
      } else if (this.channel === i.socket) {
        return this.heartbeatIntervalForSocket;
      } else {
        return this.heartbeatIntervalForHttp;
      }
    }
    static keyOf(e) {
      return `${e.type}:${e.token}`;
    }
    static isEntityEqual(e, t) {
      return eN.keyOf(e) === eN.keyOf(t);
    }
    triggerHeartbeatStabilityChange(e) {
      arrayObjectForeach.arrayObjectForeach(this.entities, t => {
        if (!t) {
          return;
        }
        try {
          if (t.heartbeatStabilityChangeHandler) {
            t.heartbeatStabilityChangeHandler(e);
          }
        } catch (e) {
          this.logger.consoleError("entity.heartbeatStabilityChangeHandler error", e);
          this.logger.moiraeError("entity.heartbeatStabilityChangeHandler error", networkUtilHelpers.safeStringify(e));
        }
        let r = this.entityObservers.get(eN.keyOf(t.entity));
        if (r) {
          r.forEach((t, r) => {
            try {
              if (t.heartbeatStabilityChangeHandler) {
                t.heartbeatStabilityChangeHandler(e);
              }
            } catch (e) {
              this.logger.consoleError("entityObserver.heartbeatStabilityChangeHandler error", r, e);
              this.logger.moiraeError("entityObserver.heartbeatStabilityChangeHandler error", r, networkUtilHelpers.safeStringify(e));
            }
          });
        }
      });
    }
    reset() {
      this.counter = 0;
      this.newProtocolCounter = 0;
      super.reset();
      this.channelStateCallbacker.reset();
      if (this.scheduleHB) {
        this.logger.moiraeTeaLog({
          event: "schedule_HB_reset"
        });
        clearTimeout(this.scheduleHB);
        this.scheduleHB = null;
      }
      this.entities = {};
      this.externalEntityInfoMap.clear();
    }
    registerChannelState(e) {
      this.channelStateCallbacker.addListener(e);
    }
    unregisterChannelState(e) {
      this.channelStateCallbacker.removeListener(e);
    }
    closeChannel() {
      this.logger.moiraeTeaLog({
        event: "schedule_HB_closeChannel"
      });
      if (this.scheduleHB) {
        clearTimeout(this.scheduleHB);
      }
      this.closeSocket();
      this.unmount(false);
    }
    switchHeartbeatInactive(e) {
      this.externalTabInactive = true;
      if (!eS()) {
        if (!e) {
          this.heartbeatIntervalForInactive = this.defaultInactiveInterval;
          return;
        }
        this.heartbeatIntervalForInactive = this.heartbeatIntervalMap[e] || this.defaultInactiveInterval;
      }
      if (!e) {
        this.heartbeatIntervalForInactive = this.heartbeatIntervalInactiveFromServer || this.defaultInactiveInterval;
        return;
      }
      this.heartbeatIntervalForInactive = this.heartbeatIntervalMap[e] || this.heartbeatIntervalInactiveFromServer || this.defaultInactiveInterval;
    }
    switchHeartbeatActive() {
      this.externalTabInactive = false;
      if (!eS()) {
        this.heartbeatIntervalForInactive = this.defaultInactiveInterval;
      }
      this.heartbeatIntervalForInactive = this.heartbeatIntervalInactiveFromServer || this.defaultInactiveInterval;
    }
    setEntityExternalInfo(e = [], t) {
      if (!e) {
        return;
      }
      let r = false;
      e.forEach(e => {
        let t = eN.keyOf(e.entity);
        this.externalEntityInfoMap.set(t, e);
        if (e.inactive === 0) {
          r = true;
        }
      });
      if (!r && eS() || this.checkLastRequestIsActive()) {
        return;
      }
      let n = t || (r ? p.TRIGGER_ACTIVE_TAB : p.TRIGGER_INACTIVE_TAB);
      this.schedule(true, n);
    }
    sendHeartbeats(e, t, r) {
      if (r && r.isNewHeartbeatsProtocol) {
        this.newProtocolCounter++;
      } else {
        this.counter++;
      }
      if (!r || !r.triggerTime) {
        r = e_(eA({}, r), {
          triggerTime: p.BUSINESS_CALL
        });
      }
      this.sendHeartbeatsInternal(e, t, r);
    }
    sendHeartbeatsInternal(e, t, r = {}) {
      var n = this;
      return eT(function* () {
        let {
          isNewHeartbeatsProtocol: i = false,
          isFromIO: o = false,
          isForceSend: a = false,
          triggerTime: c = p.DEFAULT
        } = r;
        let l = {
          isNewHeartbeatsProtocol: `${i}`,
          isFromIO: `${o}`
        };
        let h = Object.values(n.entities).filter(e => !!e.isNewHeartbeatsProtocol == !!i);
        let u = h.map(e => e.entity.type).join(";");
        if (h.length <= 0) {
          n.logger.moiraeTeaLog(eA({
            event: "entities_empty"
          }, l));
          if (e) {
            e();
          }
          return;
        }
        let f = i ? n.isNewHeartbeatRequestSending : n.isHeartbeatRequestSending;
        let d = i ? n.isLatestNewHeartbeatFromIO : n.isLatestHeartbeatFromIO;
        if (f && !a) {
          n.logger.moiraeTeaLog(e_(eA({
            event: "is_sending_heartbeat"
          }, l), {
            entitiesTypes: u,
            isLatestFromIO: `${d}`
          }));
          if (o && e) {
            e();
          }
          return;
        }
        n.setHeartbeatsSendingStatus(true, i);
        let y = [];
        let g = [];
        let v = i ? n.newProtocolCounter : n.counter;
        arrayObjectForeach.arrayObjectForeach(h, e => {
          let t = eN.keyOf(e.entity);
          if (!n.watchEntitys.some(e => t === eN.keyOf(e))) {
            return;
          }
          let r = e_(eA({}, e.entity), {
            modules: []
          });
          let i = (e, t) => {
            if (v >= e.counter + e.interval) {
              g.push(e);
              r.modules.push(t);
            }
          };
          arrayObjectForeach.arrayObjectForeach(e.heartbeats, i);
          let s = n.entityObservers.get(t);
          if (s) {
            s.forEach(e => {
              arrayObjectForeach.arrayObjectForeach(e.heartbeats, i);
            });
          }
          let {
            version: o
          } = e.heartbeats.engine_channel || {};
          if (typeof o == "number") {
            r.revisions = {
              engine_channel: o
            };
          }
          let a = n.externalEntityInfoMap.get(t);
          if (a) {
            r.inactive = a.inactive;
          }
          y.push(r);
        });
        if (y.length <= 0) {
          n.logger.moiraeTeaLog(e_(eA({
            event: "channels_empty"
          }, l), {
            entitiesTypes: u
          }));
          n.setHeartbeatsSendingStatus(false, i);
          if (e) {
            e();
          }
          return;
        }
        window.__HEARTBEAT_STATUS__ = true;
        n.setLatestHeartbeatIsFromIO(i, o);
        let {
          member_id: b
        } = yield n.ensureBaseInfoExist();
        apiServicesCollection.OtterCoreApiService.AgwHeartbeat({
          member_id: Number(b),
          trigger_time: c,
          inactive: +!n.isActive,
          last_interval_inactive: n.heartbeatIntervalInactiveFromServer / 1000,
          channels: y
        }).then(t => {
          window.__HEARTBEAT_STATUS__ = false;
          n.setHeartbeatsSendingStatus(false, i);
          try {
            if (n.netState === s.offline) {
              n.logger.moiraeCount("ee.docs.sheet.client_suit_hearbeat_resume");
              n.logger.moiraeTeaLog({
                key: "client_sheet_client_suit_hearbeat_resume"
              });
            }
            let e = t == null ? undefined : t.data?.channel_info;
            arrayObjectForeach.arrayObjectForeach(g, e => {
              e.counter = v;
            });
            arrayObjectForeach.arrayObjectForeach(e, e => {
              let t = eN.keyOf(e);
              let r = n.entities[t];
              if (!isEmptyUtil.isEmpty(r)) {
                arrayObjectForeach.arrayObjectForeach(e.modules, e => {
                  let {
                    name: i,
                    version: s
                  } = e;
                  if (!i || !s) {
                    return;
                  }
                  let o = parseInt(String(s), 10);
                  let a = r.heartbeats[i];
                  let {
                    extra: c = ""
                  } = e;
                  let l = safeJsonUtils.safeParse(c, undefined);
                  if (!isEmptyUtil.isEmpty(a)) {
                    try {
                      n.checkHeartbeat(o, a, r, l);
                    } catch (e) {
                      n.logger.moiraeInfo(`module handle heartbeat failed, module: ${i}, heartbeatVerson: ${o}`);
                    }
                  }
                  let h = n.entityObservers.get(t);
                  if (h) {
                    h.forEach(e => {
                      try {
                        let t = e.heartbeats[i];
                        if (t) {
                          n.checkHeartbeat(o, t, r);
                        }
                      } catch (e) {
                        n.logger.moiraeInfo(`entityObservers handle heartbeat failed, module: ${i}, heartbeatVerson: ${o}`);
                      }
                    });
                  }
                });
              }
            });
          } catch (e) {
            n.logger.moiraeInfo(`heartbeat set interval_http time error, error: ${networkUtilHelpers.safeStringify(e)}`);
          }
          n.logger.moiraeTeaLog(e_(eA({
            event: "send_heartbeat_end"
          }, l), {
            entitiesTypes: u,
            intervalInactiveSocket: eS() ? n.heartbeatIntervalInactiveFromServer : null,
            inactive: !n.isActive
          }));
          n.hbErrorCount = 0;
          n.hbSuccessCount += 1;
          if (n.hbSuccessCount === 2) {
            n.triggerHeartbeatStabilityChange(true);
          }
          if (e) {
            e();
          }
        }).catch(e => {
          window.__HEARTBEAT_STATUS__ = false;
          n.setHeartbeatsSendingStatus(false, i);
          n.hbErrorCount += 1;
          n.hbSuccessCount = 0;
          if (n.hbErrorCount === 2) {
            n.intoWeakOnline();
            n.channelStateCallbacker.triggerNotify(n.netState, n.channel);
            n.triggerHeartbeatStabilityChange(false);
          }
          if (t) {
            t(e);
          }
        });
      })();
    }
    setHeartbeatsSendingStatus(e, t) {
      if (t) {
        this.isNewHeartbeatRequestSending = e;
      } else {
        this.isHeartbeatRequestSending = e;
      }
    }
    setLatestHeartbeatIsFromIO(e, t) {
      if (e) {
        this.isLatestNewHeartbeatFromIO = t;
      } else {
        this.isLatestHeartbeatFromIO = t;
      }
    }
    watchEntities(e, t = 0, r = {}) {
      var n = this;
      return eT(function* () {
        let i = e.filter(e => e.type === "DOCX");
        if (!i.length) {
          return Promise.resolve();
        }
        let s = e.map(e => e.type).join(";");
        n.logger.moiraeTeaLog({
          event: "send_watch",
          entitiesTypes: s
        });
        let o = e.map(e => {
          let {
            token: t
          } = e;
          return {
            type: 1,
            token: t
          };
        });
        let {
          member_id: a
        } = yield n.ensureBaseInfoExist();
        return apiServicesCollection.OtterCoreApiService.AgwWatch({
          member_id: a + "",
          room_meta_list: o
        }).then(e => {
          let o = (e == null ? undefined : e.data?.result) || [];
          let a = [];
          i.forEach(t => {
            let r = eN.keyOf(t);
            let i = o.find(e => {
              if (!e.room_meta) {
                return false;
              }
              let {
                token: t
              } = e.room_meta;
              return r === eN.keyOf({
                token: t,
                type: "DOCX"
              });
            });
            if (!i || i.code !== 0) {
              n.logger.logWatchEntityFailure(t);
              a.push(eA({}, t));
              return;
            }
            let s = n.entities[r];
            if (s && s.acceptWatchHandler) {
              s.acceptWatchHandler(e);
            }
          });
          if (a.length !== 0) {
            if (t >= 3) {
              throw Error("failed to watch entities");
            }
            return n.watchEntities(a, t + 1, r);
          }
        });
      })();
    }
    unWatchEnities(e, t) {
      var r = this;
      return eT(function* () {
        if (!e.filter(e => e.type === "DOCX").length) {
          return Promise.resolve();
        }
        let t = e.map(e => e.type).join(";");
        r.logger.moiraeTeaLog({
          event: "send_unwatch",
          entitiesTypes: t
        });
        let n = e.map(e => {
          let {
            token: t
          } = e;
          return {
            type: 1,
            token: t
          };
        });
        let {
          member_id: i
        } = yield r.ensureBaseInfoExist();
        apiServicesCollection.OtterCoreApiService.AgwUnWatch({
          member_id: i + "",
          room_meta_list: n
        }).then(e => {
          if (e.code !== 0) {
            throw Error("unwatch entities failed!");
          }
          return e;
        });
      })();
    }
    schedule(e = false, t) {
      this.scheduleHeartbeart(e);
      this.scheduleNewProtocolHeartbeart(e, t);
    }
    scheduleHeartbeart(e = false) {
      if (this.scheduleHB) {
        clearTimeout(this.scheduleHB);
      }
      let t = e ? 0 : this.calcHeartbeatInterval();
      this.scheduleHB = window.setTimeout(() => {
        if (this.netState === s.offline) {
          this.scheduleHeartbeart();
          return;
        }
        this.counter++;
        this.logger.moiraeInfo(`send heartbeat, interval: ${t}`);
        this.sendHeartbeatsInternal(this.scheduleFinallyCb.bind(null, false), this.scheduleCatchCb.bind(null, false), {
          isNewHeartbeatsProtocol: false,
          isFromIO: true
        });
      }, t);
    }
    scheduleNewProtocolHeartbeart(e = false, t = p.SCHEDULE) {
      if (this.scheduleNewProtocolHB) {
        clearTimeout(this.scheduleNewProtocolHB);
      }
      let r = e ? 0 : this.calcHeartbeatInterval();
      this.scheduleNewProtocolHB = window.setTimeout(() => {
        if (this.netState === s.offline) {
          this.scheduleNewProtocolHeartbeart();
          return;
        }
        this.newProtocolCounter++;
        this.logger.moiraeInfo(`send new protocol heartbeat, interval: ${r}`);
        this.sendHeartbeatsInternal(this.scheduleFinallyCb.bind(null, true), this.scheduleCatchCb.bind(null, true), {
          isNewHeartbeatsProtocol: true,
          isFromIO: true,
          triggerTime: t
        });
      }, r);
    }
    checkHeartbeat(e, t, r, n) {
      let {
        version: i,
        callback: s
      } = t;
      if (!(e < i)) {
        t.version = e;
        if (s) {
          s(e, i, r, n);
        }
      }
    }
    constructor(e) {
      super(e);
      ex(this, "isActive", undefined);
      ex(this, "checkLastRequestIsActive", () => !!isBooleanUtil.isBoolean(this.isActive) && !!eS() && this.isActive);
      ex(this, "defaultInactiveInterval", 300000);
      ex(this, "heartbeatIntervalForInactive", this.defaultInactiveInterval);
      ex(this, "heartbeatIntervalInactiveFromServer", this.defaultInactiveInterval);
      ex(this, "heartbeatIntervalMap", {
        ONE_MIN: 60000,
        TWO_MIN: 120000,
        THREE_MIN: 180000,
        FOUR_MIN: 240000,
        FIVE_MIN: 300000
      });
      ex(this, "heartbeatIntervalForSocket", 60000);
      ex(this, "heartbeatIntervalForHttp", 60000);
      ex(this, "channelStateCallbacker", undefined);
      ex(this, "scheduleHB", null);
      ex(this, "scheduleNewProtocolHB", null);
      ex(this, "hbErrorCount", 0);
      ex(this, "hbSuccessCount", 0);
      ex(this, "isHeartbeatRequestSending", false);
      ex(this, "isNewHeartbeatRequestSending", false);
      ex(this, "counter", 0);
      ex(this, "newProtocolCounter", 0);
      ex(this, "externalTabInactive", false);
      ex(this, "isLatestHeartbeatFromIO", false);
      ex(this, "isLatestNewHeartbeatFromIO", false);
      ex(this, "watchEntitys", []);
      ex(this, "entities", {});
      ex(this, "entityObservers", new Map());
      ex(this, "externalEntityInfoMap", undefined);
      ex(this, "firstConnectSuccessHandle", () => {
        this.sendHeartbeats(undefined, undefined, {
          isFromIO: true
        });
        this.sendHeartbeats(undefined, undefined, {
          isNewHeartbeatsProtocol: true,
          isFromIO: true,
          triggerTime: p.CONNECT_SOCKET
        });
      });
      ex(this, "onlineStateHandle", e => {
        this.schedule(true, p.TRIGGER_ONLINE);
        this.channelStateCallbacker.triggerNotify(this.netState, e);
      });
      ex(this, "offlineStateHandle", e => {
        this.channelStateCallbacker.triggerNotify(this.netState, e);
      });
      ex(this, "enabledHandle", (e, t) => {
        this.channelStateCallbacker.triggerNotify(e, t);
      });
      ex(this, "disabledHandle", (e, t) => {
        this.channelStateCallbacker.triggerNotify(e, t);
      });
      ex(this, "broadcastHandle", e => {
        let {
          payload: t,
          headers: r = []
        } = e;
        let n = {
          type: "",
          token: ""
        };
        r.forEach(({
          key: e,
          value: r
        }) => {
          if (e === "topic_type") {
            n.type = r;
            t.topicType = r;
          } else if (e === "topic_token") {
            n.token = r;
            t.topicToken = r;
          }
        });
        arrayObjectForeach.arrayObjectForeach(this.entities, e => {
          if (!e) {
            return;
          }
          let {
            messages: r,
            entity: i
          } = e;
          arrayObjectForeach.arrayObjectForeach(Object.values(r || {}), e => {
            let {
              handler: r,
              filter: s
            } = e || {};
            if (eN.keyOf(n) === eN.keyOf(i)) {
              if (r) {
                r(t);
              }
            } else if ((!isFunctionUtil_1.isFunction(s) && isEmptyUtil.isEmpty(s) || isFunctionUtil_1.isFunction(s) && s(t) || isObjectOrFunction_1_1.isObjectOrFunction(s) && eN.keyOf(s) === eN.keyOf({
              type: t.type,
              token: objectPathGetDefault.getObjectPathDefault(t, "data.token")
            })) && r) {
              r(t);
            }
          });
          let s = this.entityObservers.get(eN.keyOf(e.entity));
          if (s) {
            s.forEach((e, r) => {
              try {
                e.messageHandler(t);
              } catch (e) {
                this.logger.moiraeError(`entityObserver handle message error: ${r}`, e);
              }
            });
          }
        });
      });
      ex(this, "visibilityChangeHandle", () => {
        if (!this.checkLastRequestIsActive() && document.visibilityState === "visible") {
          this.schedule(true, p.TRIGGER_VISIBLE);
        }
      });
      ex(this, "scheduleFinallyCb", (e = false) => {
        if (e) {
          this.scheduleNewProtocolHeartbeart();
        } else {
          this.scheduleHeartbeart();
        }
      });
      ex(this, "scheduleCatchCb", (e = false, t) => {
        if (this.hbErrorCount % 3 == 0) {
          this.logger.moiraeTeaLog({
            key: "client_sheet_client_suit_hearbeat_error"
          });
        }
        this.logger.moiraeError(`heartbeat error: ${networkUtilHelpers.safeStringify(t)}`);
        if (e) {
          this.scheduleNewProtocolHeartbeart();
        } else {
          this.scheduleHeartbeart();
        }
        this.logger.consoleError("\b心跳异常:", t.message, t);
      });
      this.externalEntityInfoMap = new Map();
      this.channelStateCallbacker = new C();
      this.on("online", this.onlineStateHandle);
      this.on("offline", this.offlineStateHandle);
      this.on("enabled", this.enabledHandle);
      this.on("disabled", this.disabledHandle);
      this.on("broadcast", this.broadcastHandle);
      this.on("visibilitychange", this.visibilityChangeHandle);
      this.on("firstConnectSuccess", this.firstConnectSuccessHandle);
      this.schedule();
    }
  }
  function ej(e, t, r) {
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
  function eP(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      var n = Object.keys(r);
      if (typeof Object.getOwnPropertySymbols == "function") {
        n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }));
      }
      n.forEach(function (t) {
        ej(e, t, r[t]);
      });
    }
    return e;
  }
  function eR(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function e$(e, t) {
    t = t ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(t));
    } else {
      eR(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function eL(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = eB(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (n = 0; n < s.length; n++) {
        r = s[n];
        if (!(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r)) {
          i[r] = e[r];
        }
      }
    }
    return i;
  }
  function eB(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var i = {};
    var s = Object.keys(e);
    for (n = 0; n < s.length; n++) {
      r = s[n];
      if (!(t.indexOf(r) >= 0)) {
        i[r] = e[r];
      }
    }
    return i;
  }
  let eF = "DEFAULT_MESSAGE";
  class eM extends eN {
    static initHeartbeat(e) {
      return eP({
        interval: 1,
        version: 0,
        counter: 0
      }, e);
    }
    static beats(e) {
      return genericReduceUtil.genericReduce(e, (e, t, r) => {
        e[r] = eM.initHeartbeat(t);
        return e;
      }, {});
    }
    unloadHandle() {
      let e = objectValuesHelper.getObjectValues(this.entities).map(e => e.entity);
      this.unRegister(e);
    }
    registerEntityObserver(e, t) {
      let r = eN.keyOf(e);
      let n = incrementalCounterUtil.incrementalCounter();
      let i = this.entityObservers.get(r);
      let s = {
        heartbeats: eM.beats(t.heartbeats),
        messageHandler: t.messageHandler,
        acceptWatchHandler: t.acceptWatchHandler,
        heartbeatStabilityChangeHandler: t.heartbeatStabilityChangeHandler
      };
      if (i) {
        i.set(n, s);
      } else {
        let e = new Map();
        e.set(n, s);
        this.entityObservers.set(r, e);
      }
      return n;
    }
    updateEntityObserver(e, t, r) {
      let n = eN.keyOf(e);
      let i = this.entityObservers.get(n);
      if (!i) {
        throw Error(`no observers found: ${{
          key: n
        }}`);
      }
      let s = i.get(t);
      if (!s) {
        throw Error(`no observer found: ${{
          key: n
        }} ${t}`);
      }
      let {
        heartbeats: o
      } = r;
      let a = eL(r, ["heartbeats"]);
      let c = s.heartbeats;
      if (o) {
        arrayObjectForeach.arrayObjectForeach(o, (e, t) => {
          c[t] = eM.initHeartbeat(e);
        });
      }
      i.set(t, e$(eP({}, s, a), {
        heartbeats: c
      }));
    }
    unregisterEntityObserver(e, t) {
      let r = eN.keyOf(e);
      let n = this.entityObservers.get(r);
      if (n) {
        n.delete(t);
      }
    }
    register(e, t) {
      let r = eN.keyOf(e);
      this.entities[r] = {
        entity: e,
        messages: {
          [eF]: t.message
        },
        heartbeats: eM.beats(t.heartbeats),
        isNewHeartbeatsProtocol: t.isNewHeartbeatsProtocol,
        acceptWatchHandler: t.acceptWatchHandler,
        heartbeatStabilityChangeHandler: t.heartbeatStabilityChangeHandler
      };
      this.mount();
      this.logger.moiraeTeaLog({
        event: "register_entity",
        isNewHeartbeatsProtocol: t.isNewHeartbeatsProtocol,
        entityType: e.type
      });
    }
    unRegister(e) {
      e = arrayIsArrayUtil.isArray(e) ? e : [e];
      let t = [];
      let r = [];
      e.forEach(e => {
        let n = eN.keyOf(e);
        let i = this.watchEntitys.some(e => n === eN.keyOf(e) && e.isNewProtocol);
        delete this.entities[n];
        this.externalEntityInfoMap.delete(n);
        if (i) {
          r.push(e);
        } else {
          t.push(e);
        }
      });
      let n = [];
      if (t.length > 0) {
        let e = this.unWatchEnities(t, {
          isNewProtocol: false
        });
        n.push(e);
      }
      if (r.length > 0) {
        let e = this.unWatchEnities(r, {
          isNewProtocol: true
        });
        n.push(e);
      }
      if (!this.watchEntitys.length) {
        this.unmount(true);
      }
      this.logger.moiraeTeaLog({
        event: "unregister_entity",
        hasNewProtocol: r.length > 0,
        entitiesTypes: e.map(e => e.type).join(";")
      });
      return Promise.all(n);
    }
    watch(e, t) {
      let r = Object.assign({
        isNewProtocol: !!t && t.isNewProtocol
      }, e);
      this.watchEntitys.push(r);
      return this.watchEntities([e], 0, t);
    }
    watches(e, t) {
      let r = e.map(e => Object.assign({
        isNewProtocol: !!t && t.isNewProtocol
      }, e));
      this.watchEntitys = this.watchEntitys.concat(r);
      return this.watchEntities(e, 0, t);
    }
    unWatch(e, t) {
      return this.unWatchEnities([e], t);
    }
    unWatches(e, t) {
      return this.unWatchEnities(e, t);
    }
    addHeartbeat(e, t, r) {
      let n = eN.keyOf(e);
      let i = this.entities[n];
      if (!i) {
        this.logger.consoleWarn("fail to add heartbeat because entity is not registered: ", {
          key: n
        });
        return;
      }
      i.heartbeats[t] = eM.initHeartbeat(r);
    }
    removeHeartbeat(e, t) {
      let r = eN.keyOf(e);
      let n = this.entities[r];
      if (!n) {
        this.logger.consoleWarn("fail to remove heartbeat because entity is not registered: ", {
          key: r
        });
        return;
      }
      delete n.heartbeats[t];
    }
    setHeartbeatVersion(e, t, r) {
      let n = eN.keyOf(e);
      let i = this.entities[n];
      let s = i && i.heartbeats && i.heartbeats[t];
      if (s) {
        s.version = r;
      }
      let o = this.entityObservers.get(n);
      if (o) {
        o.forEach(e => {
          try {
            let n = e.heartbeats[t];
            if (n) {
              n.version = r;
            }
          } catch (e) {
            this.logger.consoleError("entityObservers handle heartbeat failed", t, r, e);
            this.logger.moiraeError("entityObservers handle heartbeat failed", t, r, networkUtilHelpers.safeStringify(e));
          }
        });
      }
    }
    getHeartbeatInfo(e, t) {
      let r = eN.keyOf({
        type: e,
        token: t
      });
      let n = this.entities[r];
      if (n && n.heartbeats) {
        return eP({}, n.heartbeats);
      } else {
        return null;
      }
    }
    removeMessage(e, t) {
      let r = eN.keyOf(e);
      let n = this.entities[r];
      if (!n) {
        this.logger.consoleWarn("fail to remove heartbeat because entity is not registered: ", {
          key: r
        });
        return;
      }
      delete n.messages[t];
    }
    addMessage(e, t, r) {
      let n = eN.keyOf(e);
      let i = this.entities[n];
      if (!i) {
        this.logger.consoleWarn("fail to add message because entity is not registered: ", {
          key: n
        });
        return;
      }
      i.messages[t] = r;
    }
    isEntityRegistered(e) {
      let t = eN.keyOf(e);
      if (!this.entities[t]) {
        return false;
      }
      let {
        messages: r,
        heartbeats: n
      } = this.entities[t];
      return !!Object.keys(r || {}).length || !!Object.keys(n || {}).length;
    }
    getChannelState() {
      return this.channel;
    }
    constructor(e) {
      super(e);
      if (e.getExternalExtensions) {
        z.init(e.getExternalExtensions());
      }
      this.unloadHandle = this.unloadHandle.bind(this);
      this.on("unload", this.unloadHandle);
    }
  }
  var websocketConnectionManager = require("websocket-connection-manager") /*id: 935199*/;
  class eD extends eM {
    loadFrontierClient() {
      return Promise.resolve(websocketConnectionManager.WebSocketClient);
    }
    constructor(e) {
      super(e);
    }
  }
  require.d(exports, {
    ChatNetworkIO: function () {
      return eD;
    }
  });
}