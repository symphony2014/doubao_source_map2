// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WY' to 'sendLarkApiCommand'
// - Renamed export 't6' to 'FrontierManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 97734
         */
module.exports = function (module, exports, require) {
  var r;
  var n;
  var s;
  var o;
  var a;
  var l;
  var u;
  var d;
  var c;
  var p;
  var h;
  var f;
  var y;
  var g;
  var v;
  var m;
  var serviceBlockLocaleUtils = require("service-block-locale-utils") /*id: 913121*/;
  var webLoggerManager = require("web-logger-manager") /*id: 400425*/;
  function S() {
    let e = serviceBlockLocaleUtils.getConfig("domains") || {};
    if (e[serviceBlockLocaleUtils.serviceBlockConst.API]) {
      return {
        api: (e[serviceBlockLocaleUtils.serviceBlockConst.API] || [""])[0],
        long: (e[serviceBlockLocaleUtils.serviceBlockConst.LONG] || [])[0]
      };
    }
    throw "APINotProvided";
  }
  webLoggerManager.loggerManager.getLogger("Net");
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  var protobufDescriptorRootExport = require("protobuf-descriptor-root-export") /*id: 717712*/;
  let T = {
    ErrorType: {
      values: {
        UNKNOWN_TYPE: 0,
        STOPPED_FEATURE: 1,
        SESSION_ERROR: 2,
        PERMISSION_ERROR: 3,
        PARAM_ERROR: 4,
        CONTENT_ERROR: 5,
        NOT_SUFFICIENT_FUNDS: 6
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("errors").addJSON(T);
  T.ErrorType.values;
  let w = protobufCodecHelper.createProtobufCodec("errors", "LarkError", {
    fields: {
      message: {
        type: "string",
        id: 1
      },
      code: {
        type: "int32",
        id: 2
      },
      type: {
        type: "ErrorType",
        id: 3
      },
      userErrMessage: {
        type: "string",
        id: 4
      },
      userErrTitle: {
        type: "string",
        id: 5
      },
      requestId: {
        type: "string",
        id: 6
      },
      extra: {
        type: "bytes",
        id: 7
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("errors", "LarkError", undefined, true);
  let k = {
    PayloadType: {
      values: {
        TYPE_UNKNOWN: 0,
        PB2: 1,
        JSON: 2
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("improto").addJSON(k);
  k.PayloadType.values;
  protobufCodecHelper.createProtobufCodec("improto", "PipeEntity", {
    fields: {
      type: {
        rule: "required",
        type: "string",
        id: 1
      },
      id: {
        type: "int64",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("improto", "PipeEntity", undefined, true);
  protobufCodecHelper.createProtobufCodec("improto", "VersionRange", {
    fields: {
      start: {
        rule: "required",
        type: "string",
        id: 1
      },
      end: {
        rule: "required",
        type: "string",
        id: 2
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("improto", "VersionRange", undefined, true);
  let R = protobufCodecHelper.createProtobufCodec("improto", "Packet", {
    fields: {
      sid: {
        type: "string",
        id: 1
      },
      payloadType: {
        rule: "required",
        type: "PayloadType",
        id: 2,
        options: {
          default: "PB2"
        }
      },
      cmd: {
        rule: "required",
        type: "int32",
        id: 3
      },
      status: {
        type: "uint32",
        id: 4,
        options: {
          default: 200
        }
      },
      payload: {
        type: "bytes",
        id: 5
      },
      cid: {
        type: "string",
        id: 6
      },
      pipeEntity: {
        type: "PipeEntity",
        id: 7
      },
      versionPayloads: {
        rule: "repeated",
        type: "VersionPayload",
        id: 8
      },
      pipeEntities: {
        rule: "repeated",
        type: "PipeEntity",
        id: 9
      },
      waitRetryInterval: {
        type: "uint32",
        id: 10
      },
      command: {
        type: "int32",
        id: 11
      },
      cursor: {
        type: "uint64",
        id: 12
      },
      compactedSids: {
        rule: "repeated",
        type: "int64",
        id: 13,
        options: {
          packed: false
        }
      }
    },
    nested: {
      VersionPayload: {
        fields: {
          versionRange: {
            rule: "required",
            type: "VersionRange",
            id: 1
          },
          payload: {
            rule: "required",
            type: "bytes",
            id: 2
          }
        }
      }
    }
  });
  function A(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  protobufCodecHelper.createProtobufCodec("improto", "Packet", undefined, true);
  class P extends Error {
    constructor(e, t, i) {
      super(t);
      A(this, "code", undefined);
      A(this, "message", undefined);
      A(this, "displayMessage", undefined);
      this.code = e;
      this.displayMessage = i || t;
      this.message = t;
    }
  }
  var tracedFetchWrapper = require("traced-fetch-wrapper") /*id: 87525*/;
  (r = c ||= {})[r.Offline = 1] = "Offline";
  r[r.Online2G = 2] = "Online2G";
  r[r.Online3G = 3] = "Online3G";
  r[r.Online4G = 4] = "Online4G";
  r[r.OnlineWifi = 5] = "OnlineWifi";
  r[r.OnlineWired = 6] = "OnlineWired";
  (n = p ||= {})[n.Opening = 1] = "Opening";
  n[n.Success = 2] = "Success";
  n[n.Closed = 3] = "Closed";
  (s = h ||= {})[s.Lark = 1] = "Lark";
  s[s.InitLastSid = 9000] = "InitLastSid";
  (o = f ||= {})[o.Default = 1] = "Default";
  o[o.InitLastSid = 3] = "InitLastSid";
  let N = {
    77: "3.20.0",
    7600: "3.15.0",
    7601: "3.15.0",
    5080: "3.15.0",
    5018: "3.15.0"
  };
  var uuidV4Generator = require("uuid-v4-generator") /*id: 466890*/;
  var webCoreLoggerManager = require("web-core-logger-manager") /*id: 101534*/;
  function L(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  (a = y ||= {})[a.PB = 1] = "PB";
  a[a.JSON = 2] = "JSON";
  class M {
    isClientErr() {
      return !!this.code && this.code >= 400 && this.code < 500;
    }
    isUnauthorized() {
      return this.code === 401;
    }
    constructor() {
      L(this, "isError", undefined);
      L(this, "error", undefined);
      L(this, "code", undefined);
      L(this, "data", undefined);
      L(this, "reqId", undefined);
      L(this, "logId", undefined);
      L(this, "unwrap", () => {
        if (this.isError) {
          throw this.error;
        }
        return this.data;
      });
      L(this, "expect", e => {
        if (this.isError) {
          e(this.error);
          throw this.error;
        }
        return this.data;
      });
      L(this, "result", () => {
        let e = this.isError ? this.error : undefined;
        return {
          data: this.data,
          err: e
        };
      });
    }
  }
  async function D(e, t) {
    if (!e.ok) {
      if (![400, 403, 900].includes(e.status)) {
        let t = await e.text();
        return new P(e.code, t);
      }
      if (t === y.PB) {
        let t = new Uint8Array(await e.arrayBuffer());
        let i = w.decode(t);
        return new P(i.code, i.message, i.userErrMessage);
      }
      if (t !== y.JSON) {
        return e.error;
      }
      {
        let t = (await e.json()) || {};
        return new P(t.code, t.message);
      }
    }
  }
  async function H(e) {
    let t;
    let i = new M();
    i.isError = true;
    try {
      let r = e.commandVersion || "2.7.0";
      if (N[e.cmd]) {
        r = N[e.cmd];
      }
      let n = function (e) {
        e.cid ||= uuidV4Generator.generateUuid();
        let t = {
          cmd: e.cmd,
          payloadType: 1,
          payload: e.payload,
          cid: e.cid
        };
        if (Object.prototype.hasOwnProperty.call(e, "payloadType")) {
          t.payloadType = e.payloadType;
        }
        return R.encode(t);
      }(e);
      let {
        appId: s,
        appVersion: o
      } = e.options || function () {
        let {
          appId: e,
          appVersion: t
        } = serviceBlockLocaleUtils.getConfigs(["appId", "appVersion"]);
        return {
          appId: e,
          appVersion: t
        };
      }();
      if (!e.url && !S().api) {
        throw Error("Must provide url or init default url.");
      }
      let a = await tracedFetchWrapper.sendTracedRequest({
        name: `http-lark-api-cmd-${e.cmd}`,
        url: e.url || `https://${S().api}/im/gateway/`,
        method: "POST",
        data: n,
        logger: e.logger,
        headers: {
          "content-type": "application/x-protobuf",
          "x-Source": "web",
          "x-command": e.cmd.toString(),
          "x-web-version": o,
          "x-command-version": r,
          "X-AppID": (s || 0).toString(),
          locale: e.locale || function () {
            let e = serviceBlockLocaleUtils.getConfig("locale") || serviceBlockLocaleUtils.localeCodes.ZhCn;
            if (e) {
              return e;
            }
            throw "LocaleNotProvided";
          }(),
          ...(e.headers || {})
        },
        credentials: e.credentials,
        signal: e.signal
      });
      i.code = a.status;
      t = a.headers.get("x-tt-logid");
      if (a.ok) {
        let e = await a.arrayBuffer();
        let t = R.decode(new Uint8Array(e));
        i.data = t;
        i.isError = false;
      } else {
        let r = await D(a, y.PB);
        i.error = r;
        let n = "";
        if (r) {
          n = `, message=${r.displayMessage}:${r.code}:${r.message}`;
        }
        e.logger.error("send packet response error:", {
          attributes: {
            logId: t,
            errMsg: n,
            cmd: e.cmd,
            status: a.status
          }
        });
      }
    } catch (r) {
      i.error ||= new P(0, r && r.message || r);
      i.code ||= 422;
      e.logger.error("send packet error:", {
        attributes: {
          logId: t,
          cmd: e.cmd,
          errMsg: r,
          status: i.code
        }
      });
    }
    i.reqId = e.cid || "";
    i.logId = t || "";
    return i;
  }
  async function B(e) {
    let t;
    let {
      cmd: i,
      requestCodec: r,
      responseCodec: n,
      cid: s,
      logger: o = webCoreLoggerManager.coreLoggerInstance
    } = e;
    let a = o.startSpan(`lark-api-cmd-${i}`, {
      parent: o.manager.tracer.createSpanContext({
        traceId: s
      }),
      attributes: {
        cmd: i
      }
    });
    e.cid = a.span.context.spanId;
    let l = e.payloadType !== 2 ? r.encode(e.payload) : new TextEncoder().encode(JSON.stringify(e.payload));
    let u = await H({
      ...e,
      payload: l,
      logger: a
    });
    if (u.isError) {
      a.endSpan({
        status: webCoreLoggerManager.CanonicalCode.UNKNOWN
      });
      return u;
    }
    let {
      data: d
    } = u;
    if (d && d.payload) {
      t = d.payloadType !== 2 ? n.decode(d.payload) : JSON.parse(new TextDecoder("utf-8").decode(d.payload));
    }
    a.endSpan({
      status: webCoreLoggerManager.CanonicalCode.OK
    });
    u.data = t;
    return u;
  }
  var eventEmitterPolyfill = require("event-emitter-polyfill") /*id: 361873*/;
  var longIntegerUtil = require("long-integer-util") /*id: 972883*/;
  var F = longIntegerUtil;
  let W = protobufCodecHelper.createProtobufCodec("frame", "Frame", {
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
  });
  protobufCodecHelper.createProtobufCodec("frame", "Frame", undefined, true);
  protobufCodecHelper.createProtobufCodec("improto", "PullPacketsBySeqIdRequest", {
    fields: {
      sid: {
        rule: "required",
        type: "string",
        id: 1,
        options: {
          default: ""
        }
      },
      count: {
        rule: "required",
        type: "uint32",
        id: 2,
        options: {
          default: 20
        }
      },
      version: {
        type: "uint32",
        id: 3
      },
      frontierDowngrade: {
        type: "bool",
        id: 4,
        options: {
          default: false
        }
      },
      batchUniqId: {
        type: "string",
        id: 5
      },
      batchIndex: {
        type: "int64",
        id: 6
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("improto", "PullPacketsBySeqIdRequest", undefined, true);
  protobufCodecHelper.createProtobufCodec("improto", "PullPacketsBySeqIdResponse", {
    fields: {
      hasMore: {
        rule: "required",
        type: "bool",
        id: 1,
        options: {
          default: false
        }
      },
      packets: {
        rule: "repeated",
        type: "Packet",
        id: 2
      },
      lastPacketCreateTime: {
        type: "int64",
        id: 3
      },
      lastSid: {
        type: "string",
        id: 4
      },
      responseTime: {
        type: "int64",
        id: 5
      },
      maxBatchIndex: {
        type: "int64",
        id: 6
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("improto", "PullPacketsBySeqIdResponse", undefined, true);
  let z = protobufCodecHelper.createProtobufCodec("improto", "PullPacketsBySidsRequest", {
    fields: {
      sids: {
        rule: "repeated",
        type: "string",
        id: 1
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("improto", "PullPacketsBySidsRequest", undefined, true);
  let q = protobufCodecHelper.createProtobufCodec("improto", "PullPacketsBySidsResponse", {
    fields: {
      packets: {
        keyType: "string",
        type: "Packet",
        id: 1
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("improto", "PullPacketsBySidsResponse", undefined, true);
  (l = g ||= {})[l.Low = 0] = "Low";
  l[l.Middle = 1] = "Middle";
  l[l.High = 2] = "High";
  var cryptoHashUtils = require("crypto-hash-utils") /*id: 333934*/;
  var urlParamAppender = require("url-param-appender") /*id: 163706*/;
  let J = {
    saas: "5f45da0e6c7a17dcba80494ef0ab9b21",
    ka31: "29cd5e7f9de36d4620dee45299e6d088",
    kastaging: "0036e93a4fc4e5af8acafd200e538391",
    kami: "0036e93a4fc4e5af8acafd200e538391",
    kap: "0036e93a4fc4e5af8acafd200e538391",
    kacrc: "82e450f4f5cdcbae7647dbb82a7fdfef"
  };
  let G = "web_did";
  let K = new Set([2102, 2210, 2306, 2215, 89343, 89344, 6, 41, 30002, 30003]);
  var idbStoreManagerFactory = require("idb-store-manager-factory") /*id: 297530*/;
  var domainConfigManager = require("domain-config-manager") /*id: 318593*/;
  let X = idbStoreManagerFactory.getIdbStoreManager("lark_web_core_frontier");
  async function Q() {
    let e = (await X.getItem(G)) || "";
    let t = await domainConfigManager.getDomainConfig(domainConfigManager.domainKeyMap.PASSPORT);
    let i = `https://${t}/suite/passport/frontier_ticket/`;
    let r = await tracedFetchWrapper.sendTracedRequest({
      method: "GET",
      url: urlParamAppender.appendUrlParams(i, {
        local_device_id: e
      })
    }, false);
    let {
      device_id: n,
      ticket: s
    } = await r.json();
    if (n) {
      X.setItem(G, n);
    }
    return {
      deviceId: n,
      ticket: s
    };
  }
  var authProfileInitializer = require("auth-profile-initializer") /*id: 767286*/;
  var authEventEmitter = require("auth-event-emitter") /*id: 60885*/;
  async function ei() {
    let {
      userId: e
    } = await authProfileInitializer.setupUserProfile();
    let t = !!e;
    if (!t) {
      authEventEmitter.authEventEmitter.emit(authEventEmitter.AuthStatus.Unauthorized);
    }
    return t;
  }
  function er(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let en = webLoggerManager.loggerManager.getLogger("Socket");
  class es {
    close() {
      if (this.ws && this.ws.readyState !== WebSocket.CLOSING) {
        this.ws.close();
      }
    }
    send(e) {
      if (!this.ws) {
        en.info("socket not created");
        this.sendMessageCache.push(e);
        return;
      }
      switch (this.ws.readyState) {
        case WebSocket.OPEN:
          this.ws.send(e);
          break;
        case WebSocket.CONNECTING:
          this.sendMessageCache.push(e);
          break;
        case WebSocket.CLOSING:
        case WebSocket.CLOSED:
          en.info("socket has been closed, drop the message");
      }
    }
    addEventListener(e, t) {
      this.wsListeners[e].push(t);
    }
    async connect() {
      en.info("connect to socket");
      if (!this.ws) {
        en.info("first connect");
        await this.buildSocketURL();
        this.createNewSocket();
        this.startNetDetector();
        return;
      }
      let {
        readyState: e
      } = this.ws;
      if (e === WebSocket.OPEN || e === WebSocket.CONNECTING) {
        en.info("socket already connect");
        return;
      }
      if (e === WebSocket.CLOSED) {
        en.info("socket closed, create new socket");
        this.createNewSocket();
        return;
      }
    }
    onNetStatusChange(e) {
      if (e !== this.netStatus) {
        en.info(`net status changed from ${this.netStatus} to ${e}`);
        this.netStatus = e;
        if (e === v.Online) {
          this.createNewSocket();
        }
      }
    }
    startNetDetector() {
      self.addEventListener("online", () => {
        this.onNetStatusChange(v.Online);
        en.debug("online");
      });
      self.addEventListener("offline", () => {
        this.onNetStatusChange(v.Offline);
        en.debug("offline");
      });
    }
    buildAccessKey(e) {
      let t = serviceBlockLocaleUtils.getConfig("channel");
      let i = serviceBlockLocaleUtils.getConfig("appKey");
      if (!t && !i) {
        throw "Either channel or appKey should be provided";
      }
      i = i || t && J[t] || J.saas;
      let r = `2${i}${e}f8a69f1719916z`;
      return cryptoHashUtils.md5Hash(r);
    }
    async buildSocketURL() {
      this.host = this.host || (await this.getWSHost());
      let {
        deviceId: e,
        ticket: t
      } = await Q();
      let i = {
        access_key: this.buildAccessKey(e),
        aid: 1,
        ticket: t,
        device_id: e,
        fpid: 2,
        accept_encoding: "gzip",
        request_id: uuidV4Generator.generateUuid()
      };
      let r = `${this.protocol}//${this.host}${this.path}`;
      this.wsURL = urlParamAppender.appendUrlParams(r, i);
    }
    resetRetryState() {
      this.retryCount = 0;
      if (this.retryTimer) {
        clearTimeout(this.retryTimer);
      }
      this.retryTimer = null;
    }
    retry() {
      return !!this.autoRetry && (this.netStatus === v.Offline ? (this.resetRetryState(), false) : this.retryTimer ? (en.info("auto retry drop, there is a retry request queued"), true) : (this.retryCount += 1, this.retryCount > this.retryLimit) ? (en.info(`auto retry exceed limit, stop retry, count=${this.retryCount}, limit=${this.retryLimit}`), this.resetRetryState(), false) : (this.retryTimer = setTimeout(() => {
        en.info(`auto retry start, count=${this.retryCount}`);
        this.createNewSocket();
        this.retryTimer = null;
      }), true));
    }
    async createNewSocket() {
      en.info("create new socket");
      if (this.ws) {
        this.ws.removeEventListener("open", this.onSocketOpen);
        this.ws.removeEventListener("close", this.onSocketClose);
        this.ws.removeEventListener("error", this.onSocketError);
        this.ws.close();
      }
      this.ws = new WebSocket(this.wsURL);
      this.ws.binaryType = "arraybuffer";
      this.ws.addEventListener("open", this.onSocketOpen);
      this.ws.addEventListener("close", this.onSocketClose);
      this.ws.addEventListener("error", this.onSocketError);
      this.ws.addEventListener("open", e => this.wsListeners.open.forEach(t => t(e)));
      this.ws.addEventListener("close", e => this.wsListeners.close.forEach(t => t(e)));
      this.ws.addEventListener("error", e => this.wsListeners.error.forEach(t => t(e)));
      this.ws.addEventListener("message", e => this.wsListeners.message.forEach(t => t(e)));
    }
    reconnect() {
      setTimeout(() => this.connect(), 30000);
    }
    getWSHost() {
      return domainConfigManager.getDomainConfig(domainConfigManager.domainKeyMap.LONG);
    }
    constructor(e) {
      er(this, "netStatus", v.Online);
      er(this, "ws", undefined);
      er(this, "autoRetry", true);
      er(this, "retryLimit", 3);
      er(this, "retryCount", 0);
      er(this, "retryTimer", null);
      er(this, "protocol", "wss:");
      er(this, "host", undefined);
      er(this, "path", "/ws/v2");
      er(this, "wsURL", undefined);
      er(this, "wsListeners", {
        open: [],
        close: [],
        error: [],
        message: []
      });
      er(this, "sendMessageCache", []);
      er(this, "onSocketOpen", () => {
        en.info("socket open");
        this.resetRetryState();
        this.sendMessageCache.forEach(e => {
          this.ws.send(e);
        });
        this.sendMessageCache = [];
      });
      er(this, "onSocketClose", e => {
        en.info(`socket close, code=${e.code}, reason=${e.reason}`);
        switch (e.code) {
          case 4301:
          case 4302:
          case 4303:
            en.error(`Session expired, code is: ${e.code}, reason is ${e.reason}`);
            authEventEmitter.authEventEmitter.emit(authEventEmitter.AuthStatus.Unauthorized);
          case 4304:
            this.buildSocketURL();
            if (!this.retry()) {
              en.error(`Ticket invalid, code is: ${e.code}, reason is ${e.reason}`);
              authEventEmitter.authEventEmitter.emit(authEventEmitter.AuthStatus.Unauthorized);
            }
            break;
          default:
            if (!this.retry()) {
              ei().then(e => e && this.reconnect(), () => this.reconnect());
            }
        }
      });
      er(this, "onSocketError", () => {
        en.warn("socket error.");
      });
      e = e || {};
      this.host = e.host || this.host;
      this.protocol = e.protocol || this.protocol;
      this.path = e.path || this.path;
      this.autoRetry = "autoRetry" in e ? !!e.autoRetry : this.autoRetry;
      this.retryLimit = e.retryLimit || this.retryLimit;
      this.connect();
    }
  }
  (u = v ||= {})[u.Online = 0] = "Online";
  u[u.Offline = 1] = "Offline";
  let eo = protobufCodecHelper.createProtobufCodec("multipipe", "PullMultiPipePacketsRequest", {
    fields: {
      pipeInfos: {
        rule: "repeated",
        type: "Info",
        id: 1
      }
    },
    nested: {
      Info: {
        fields: {
          pipeEntity: {
            rule: "required",
            type: "improto.PipeEntity",
            id: 1
          },
          cursorSid: {
            rule: "required",
            type: "int64",
            id: 2
          }
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("multipipe", "PullMultiPipePacketsRequest", undefined, true);
  let ea = {
    fields: {
      pipePackets: {
        rule: "repeated",
        type: "Packets",
        id: 1
      }
    },
    nested: {
      Packets: {
        fields: {
          pipeEntity: {
            rule: "required",
            type: "improto.PipeEntity",
            id: 1
          },
          packets: {
            rule: "repeated",
            type: "improto.Packet",
            id: 2
          },
          hasMore: {
            rule: "required",
            type: "bool",
            id: 3,
            options: {
              default: false
            }
          },
          lastSid: {
            type: "int64",
            id: 4
          },
          sidIsTimeOut: {
            type: "bool",
            id: 5,
            options: {
              default: false
            }
          }
        }
      }
    }
  };
  let el = protobufCodecHelper.createProtobufCodec("multipipe", "PullMultiPipePacketsResponse", ea);
  protobufCodecHelper.createProtobufCodec("multipipe", "PullMultiPipePacketsResponse", undefined, true);
  protobufCodecHelper.createProtobufCodec("multipipe", "ChangeListIdentity", {
    fields: {
      changeListType: {
        type: "string",
        id: 1
      },
      belongType: {
        type: "string",
        id: 2
      },
      belongId: {
        type: "int64",
        id: 3
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("multipipe", "ChangeListIdentity", undefined, true);
  let eu = protobufCodecHelper.createProtobufCodec("multipipe", "PullChangeListsRequest", {
    fields: {
      infos: {
        rule: "repeated",
        type: "ChangeListInfo",
        id: 1
      },
      isInitialScene: {
        type: "bool",
        id: 2
      }
    },
    nested: {
      ChangeListInfo: {
        fields: {
          changeListIdentity: {
            type: "ChangeListIdentity",
            id: 1
          },
          cursor: {
            type: "int64",
            id: 2
          }
        }
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("multipipe", "PullChangeListsRequest", undefined, true);
  let ed = {
    fields: {
      changeLists: {
        rule: "repeated",
        type: "ChangeList",
        id: 1
      }
    },
    nested: {
      SubChangeList: {
        fields: {
          subChangeListIdentity: {
            type: "ChangeListIdentity",
            id: 1
          },
          subListLastCursor: {
            type: "int64",
            id: 2
          }
        }
      },
      ChangeList: {
        fields: {
          changeListIdentity: {
            type: "ChangeListIdentity",
            id: 1
          },
          lastCursor: {
            type: "int64",
            id: 2
          },
          hasMore: {
            type: "bool",
            id: 3
          },
          pipeLastSid: {
            keyType: "int64",
            type: "int64",
            id: 4
          },
          subChangeListLastCursor: {
            rule: "repeated",
            type: "SubChangeList",
            id: 5
          },
          sidIsTimeOut: {
            type: "bool",
            id: 6,
            options: {
              default: false
            }
          },
          initLocalSid: {
            type: "int64",
            id: 7
          }
        }
      }
    }
  };
  let ec = protobufCodecHelper.createProtobufCodec("multipipe", "PullChangeListsResponse", ed);
  protobufCodecHelper.createProtobufCodec("multipipe", "PullChangeListsResponse", undefined, true);
  let ep = protobufCodecHelper.createProtobufCodec("multipipe", "PullUnsupportPipeTypeInfosRequest", {
    fields: {
      supportTypes: {
        rule: "repeated",
        type: "string",
        id: 1
      }
    }
  });
  protobufCodecHelper.createProtobufCodec("multipipe", "PullUnsupportPipeTypeInfosRequest", undefined, true);
  let eh = protobufCodecHelper.createProtobufCodec("multipipe", "PullUnsupportPipeTypeInfosResponse", {
    fields: {
      infos: {
        rule: "repeated",
        type: "Info",
        id: 1
      }
    },
    nested: {
      Info: {
        fields: {
          pipeType: {
            rule: "required",
            type: "string",
            id: 1
          },
          lastSid: {
            rule: "required",
            type: "int64",
            id: 2
          }
        }
      }
    }
  });
  async function ef(e) {
    return B({
      cmd: 70006,
      requestCodec: eo,
      responseCodec: el,
      payload: {
        pipeInfos: e
      }
    });
  }
  function ey(e) {
    return B({
      cmd: 70007,
      requestCodec: eu,
      responseCodec: ec,
      payload: {
        infos: e
      }
    });
  }
  function eg(e) {
    return B({
      cmd: 70003,
      requestCodec: ep,
      responseCodec: eh,
      payload: {
        supportTypes: e
      }
    });
  }
  protobufCodecHelper.createProtobufCodec("multipipe", "PullUnsupportPipeTypeInfosResponse", undefined, true);
  var lruCacheImplementation = require("lru-cache-implementation") /*id: 317510*/;
  var em = lruCacheImplementation;
  let eb = new em(1000);
  let eE = new em(1000);
  let eS = new Map();
  function eO(e, t = "0") {
    eS.set(e, t || "0");
  }
  function e_(e, t = 3, i) {
    let r = t;
    let n = async function () {
      var s = arguments.length;
      var o = Array(s);
      var a = 0;
      for (; a < s; a++) {
        o[a] = arguments[a];
      }
      let l = await e(...o);
      if (l.isError) {
        if (--r >= 0) {
          return l;
        } else {
          if (i) {
            i(l, t - r);
          }
          return n(...o);
        }
      } else {
        r = 0;
        return l;
      }
    };
    return n;
  }
  function eT(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let ew = webLoggerManager.loggerManager.getLogger("Pipeline");
  let ek = e => (t, i) => {
    let r = t.error ? t.error.message : "";
    ew.warn(`${e} failed, current retry number: ${i}, message: ${r}`);
  };
  let eR = "MESSAGE";
  let eA = "CHAT";
  let eP = new class {
    setPacketHandler(e) {
      this.handlePacket = e;
    }
    async syncPipes() {
      let e;
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      let i = [...new Set([...t, "USER"])];
      ew.debug("Start to sync pipes");
      if (!this.firstSyncSuccessed) {
        return this.syncFirst(i);
      }
      if (this.syncState === 0) {
        ew.debug("doesn't sync for it is syncing: cur_cursor={}", this.lastChangelistCursor);
        return;
      }
      this.syncState = 0;
      if (t.includes(eA)) {
        e = this.doPullChangeList([{
          cursor: F.fromString(this.lastChangelistCursor),
          changeListIdentity: {
            changeListType: "CHAT"
          }
        }], t);
      }
      let r = this.doPullPipeline([...eS.entries()].map(e => {
        let [t, i] = e;
        return {
          pipeEntity: {
            type: t
          },
          cursorSid: F.fromString(i)
        };
      }), t);
      await Promise.all([e, r]);
      this.syncState = 1;
    }
    getSyncState() {
      return this.syncState;
    }
    isSyncing() {
      return this.syncState === 0;
    }
    useChangeLists(e = []) {
      return e.includes(eA) || e.includes(eR);
    }
    async syncFirst(e) {
      if (this.firstSyncSuccessed) {
        return;
      }
      let t = [];
      if (this.useChangeLists()) {
        t.push(this.retryPullChangeLists([{
          cursor: F.fromString(this.lastChangelistCursor),
          changeListIdentity: {
            changeListType: eA
          }
        }]).then(e => {
          if (!e.isError && e.data && e.data.changeLists) {
            let {
              changeLists: t
            } = e.data;
            let {
              lastCursor: i
            } = t[t.length - 1];
            if (i) {
              this.lastChangelistCursor = i.toString();
            }
            return true;
          }
          return false;
        }));
      }
      t.push(this.retryPullAllUnsupportedPipe([]).then(t => {
        if (!t.isError && t.data && t.data.infos) {
          let i = new Map(t.data.infos.map(e => [e.pipeType, e.lastSid.toString()]));
          e.forEach(e => {
            eO(e, i.get(e));
          });
          return true;
        }
        return false;
      }));
      if ((await Promise.all(t)).every(e => e === true)) {
        this.firstSyncSuccessed = true;
      }
    }
    async doPullChangeList(e, t) {
      let i;
      let r = await this.retryPullChangeLists(e);
      let {
        lastChangelistCursor: n
      } = this;
      if (r.isError) {
        ew.warn("doPullChangeList error");
        return n;
      }
      let s = r.data && r.data.changeLists;
      if (!s) {
        ew.warn("doPullChangeList no data");
        return n;
      }
      let o = e[0] ? e[0].cursor : n;
      let a = Promise.all(s.map(e => {
        let i;
        let r;
        o = e.lastCursor;
        let s = (e.subChangeListLastCursor || []).filter(e => !e.subChangeListIdentity || !t.includes(e.subChangeListIdentity.changeListType || "")).map(e => ({
          cursor: F.fromString(n),
          changeListIdentity: e.subChangeListIdentity
        }));
        if (s.length) {
          i = this.doPullChangeList(s, t);
        }
        if (e.changeListIdentity && e.changeListIdentity.changeListType && t.includes(e.changeListIdentity.changeListType)) {
          let {
            changeListIdentity: i
          } = e;
          let n = Object.keys(e.pipeLastSid || {}).map(e => {
            let t;
            if (i.changeListType === eR) {
              t = eb.get(e);
            }
            if (i.changeListType === eA) {
              t = eE.get(e) || "0";
            }
            if (t !== undefined) {
              return {
                pipeEntity: {
                  type: i.changeListType,
                  id: F.fromString(e)
                },
                cursorSid: F.fromString(t)
              };
            }
          }).filter(e => e);
          if (n.length) {
            r = this.doPullPipeline(n, t);
          }
        }
        return Promise.all([i, r]);
      }));
      let l = s.filter(e => e.hasMore).map(e => ({
        cursor: e.lastCursor,
        changeListIdentity: e.changeListIdentity
      }));
      if (l.length) {
        i = this.doPullChangeList(l, t);
      }
      await Promise.all([a, i]);
      if (o) {
        return o.toString();
      } else {
        return n;
      }
    }
    async doPullPipeline(e, t) {
      let i = e.filter(e => {
        var i;
        var r;
        if (e.pipeEntity.type === eR) {
          let t = F.fromValue(e.cursorSid);
          i = String(e.pipeEntity.id);
          let r = eb.get(i);
          return r !== undefined && !t.equals(r);
        }
        if (e.pipeEntity.type === eA) {
          let t = F.fromValue(e.cursorSid);
          r = String(e.pipeEntity.id);
          let i = eE.get(r);
          return i === undefined || !t.equals(i);
        }
        return t.includes(e.pipeEntity.type);
      });
      if (!i.length) {
        return;
      }
      let r = await this.retryPullMultiPipePackets(i);
      if (r.isError || !r.data || !r.data.pipePackets) {
        return;
      }
      let n = [];
      let s = [];
      r.data.pipePackets.forEach(e => {
        if (e.pipeEntity.type === eR && e.pipeEntity.id) {
          n.push({
            id: e.pipeEntity.id.toString(),
            sid: e.lastSid ? e.lastSid.toString() : undefined
          });
        } else if (e.pipeEntity.type === eA && e.pipeEntity.id) {
          s.push({
            id: e.pipeEntity.id.toString(),
            sid: e.lastSid ? e.lastSid.toString() : undefined
          });
        } else {
          eO(e.pipeEntity.type, e.lastSid && e.lastSid.toString());
        }
        (e.packets || []).forEach(e => {
          ew.debug("handle packet", e.cid, e.cmd);
          this.handlePacket(e);
        });
      });
      (function (e) {
        e.forEach(e => eb.set(e.id, e.messagePipeVersion || e.sid || "0"));
      })(n);
      (function (e) {
        e.forEach(e => eE.set(e.id, e.sid || "0"));
      })(s);
      let o = r.data.pipePackets.filter(e => e.hasMore).map(e => ({
        pipeEntity: e.pipeEntity,
        cursorSid: e.lastSid
      }));
      if (o.length) {
        this.doPullPipeline(o, t);
      }
    }
    constructor() {
      eT(this, "firstSyncSuccessed", false);
      eT(this, "lastChangelistCursor", `${Date.now() - 1000}000000`);
      eT(this, "syncState", 1);
      eT(this, "handlePacket", undefined);
      eT(this, "retryPullChangeLists", e_(ey, 3, ek("pullChangeLists")));
      eT(this, "retryPullAllUnsupportedPipe", e_(eg, 3, ek("pullAllUnsupportedPipe")));
      eT(this, "retryPullMultiPipePackets", e_(ef, 3, ek("pullMultiPipePackets")));
    }
  }();
  let eI = "lark_web_core_frontier__last_sid";
  let eN = localStorage.getItem(eI) || "";
  function ex(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class eC {
    live() {
      this.living = true;
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
    destroy() {
      if (this.interTimer) {
        clearInterval(this.interTimer);
      }
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
    detect() {
      this.beat();
      this.timer = setTimeout(() => {
        if (this.living) {
          this.dead();
          this.living = false;
        }
        if (this.timer) {
          clearTimeout(this.timer);
        }
      }, this.timeout);
    }
    constructor({
      beat: e,
      dead: t,
      interval: i,
      timeout: r
    }) {
      ex(this, "beat", undefined);
      ex(this, "dead", undefined);
      ex(this, "interval", 30000);
      ex(this, "timeout", 10000);
      ex(this, "living", true);
      ex(this, "timer", undefined);
      ex(this, "interTimer", undefined);
      this.beat = e;
      this.dead = t;
      if (i) {
        this.interval = i;
      }
      if (r) {
        this.timeout = r;
      }
      this.interTimer = setInterval(() => this.detect(), this.interval);
    }
  }
  function eL(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let eM = webLoggerManager.loggerManager.getLogger("Frontier");
  (d = m ||= {})[d.WS = 1] = "WS";
  d[d.PIPE = 2] = "PIPE";
  let eD = new class {
    startup(e = {}) {
      let {
        socket: t,
        pipeTypes: i
      } = e;
      if (i) {
        this.pipeTypes = i;
      }
      if (!t || !(t instanceof WebSocket)) {
        this.createSocket();
        this.heartBeat = new eC({
          beat: () => this.send({
            cmd: 4
          }),
          dead: () => {
            this.socket.close();
          }
        });
      }
      this.socket.addEventListener("message", this.handleWSMessage);
    }
    shutdown() {
      this.socket.close();
      this.emitter.removeAllListeners();
      this.listenersMap.clear();
      this.emittedSids.clear();
      this.cachedPushPackets = [];
      if (this.heartBeat) {
        this.heartBeat.destroy();
      }
    }
    send(e) {
      if (!this.socket) {
        throw "SocketNotProvided";
      }
      if (typeof e == "object" && typeof e.cmd == "number") {
        let {
          cmd: t,
          codec: i,
          payload: r,
          sid: n
        } = e;
        let s = i && r && i.encode(r);
        let o = function (e, t, i, r = {}) {
          let n = F.fromNumber(Date.now());
          let s = t === 3;
          return W.encode({
            seqid: n,
            logid: n,
            service: e,
            method: t,
            headers: [...(s ? [] : [{
              key: "x-request-time",
              value: n.multiply(1000).toString()
            }]), ...Object.entries(r).map(e => {
              let [t, i] = e;
              return {
                key: t,
                value: i
              };
            })],
            ...(s ? {} : {
              payloadType: "pb",
              payload: i
            })
          });
        }(1, 1, R.encode({
          cmd: t,
          payloadType: 1,
          payload: s,
          sid: n
        }));
        this.socket.send(o);
      } else {
        this.socket.send(e);
      }
    }
    on(e, t, i) {
      if (typeof this.listenersMap.get(t) == "function") {
        eM.warn(`duplicated listener for cmd ${e}: `, t);
        return () => this.off(e, t);
      }
      let {
        codec: r
      } = i || {};
      if (!r) {
        throw "CodecNotProvided";
      }
      let n = e => {
        let {
          data: i,
          source: n
        } = e;
        t(r.decode(i), n);
      };
      this.emitter.on(String(e), n);
      this.listenersMap.set(t, n);
      return () => this.off(e, t);
    }
    off(e, t) {
      let i = this.listenersMap.get(t);
      if (i && typeof i == "function") {
        this.emitter.off(String(e), i);
        this.listenersMap.delete(t);
      }
    }
    getDeviceId() {
      return Q().then(e => e.deviceId);
    }
    constructor() {
      var e = this;
      eL(this, "socket", undefined);
      eL(this, "pipeTypes", []);
      eL(this, "emitter", new eventEmitterPolyfill.EventEmitter());
      eL(this, "listenersMap", new Map());
      eL(this, "cachedPushPackets", []);
      eL(this, "emittedSids", new Set());
      eL(this, "heartBeat", undefined);
      eL(this, "createSocket", () => {
        let e = S().long;
        this.socket = new es({
          host: e
        });
        eP.setPacketHandler(e => this.handlePacket(e, m.PIPE));
        this.socket.addEventListener("open", async () => {
          await eP.syncPipes(this.pipeTypes);
          this.flushMessages();
        });
      });
      eL(this, "flushMessages", () => {
        if (this.cachedPushPackets.length > 0) {
          let {
            cachedPushPackets: e
          } = this;
          this.cachedPushPackets = [];
          e.forEach(e => this.handlePacket(e, m.WS));
        }
      });
      eL(this, "handleWSMessage", e => {
        let t;
        if (this.heartBeat) {
          this.heartBeat.live();
        }
        try {
          t = function (e) {
            let t = W.decode(e);
            return R.decode(t.payload);
          }(new Uint8Array(e.data));
        } catch (e) {
          eM.warn("WS message is not a pb packet");
          return;
        }
        this.send({
          cmd: 1,
          sid: t.sid
        });
        let {
          sid: i
        } = t;
        if (!i) {
          eM.warn("received empty sid");
          return;
        }
        eM.debug("receive ws packet, sid is ", i);
        if (eP.isSyncing()) {
          if (K.has(t.cmd)) {
            this.handlePacket(t, m.WS);
          } else {
            this.cachedPushPackets.push(t);
          }
          return;
        }
        this.flushMessages();
        this.handlePacket(t, m.WS);
      });
      eL(this, "handlePushSid", e => {
        let {
          sid: t
        } = e;
        if (!t) {
          eM.warn("receive push sid empty");
          return;
        }
        eM.debug("receive push sid, start pull, sid=", t);
        B({
          cmd: 12001,
          requestCodec: z,
          responseCodec: q,
          payload: {
            sids: [t]
          }
        }).then(e => {
          let {
            packets: t
          } = e.data || {};
          Object.values(t || {}).forEach(e => {
            eM.debug(`handle packet than pull by sid, cmd=${e.cmd}, status=${e.status}, sid=${e.sid}, cid=${e.cid}`);
            this.handlePacket(e, m.WS, false);
          });
        });
      });
      eL(this, "handlePacket", function (t, i) {
        let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        let {
          sid: n
        } = t;
        if (!n) {
          eM.warn("received empty sid");
          return;
        }
        if (r) {
          (function (e) {
            let t = eN = localStorage.getItem(eI) || eN;
            let i = F.fromString(e);
            if (!t || F.fromString(t).lessThan(i)) {
              eN = e;
              localStorage.setItem(eI, e);
            }
          })(n);
        }
        if (t.cmd === 6000) {
          e.handlePushSid(t);
          return;
        }
        if (e.emittedSids.has(n)) {
          eM.debug("sid already emitted: ", n);
          return;
        }
        if (e.emitter.emit(String(t.cmd), {
          data: t.payload,
          source: i
        })) {
          eM.debug(`emit packet: source=${i} cmd=${t.cmd} sid=${n}`);
        }
        e.emittedSids.add(n);
      });
    }
  }();
  require.d(exports, {
    sendLarkApiCommand: function () {
      return B;
    },
    FrontierManager: function () {
      return eD;
    }
  });
}