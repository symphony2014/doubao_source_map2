// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IO' to 'FlowDocIoClient'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 257963
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var chatNetworkIoManager = require("chat-network-io-manager") /*id: 650574*/;
  let s = {
    Suite: {
      getToken: require("doc-token-manager") /*id: 632370*/.getDocToken
    }
  };
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let u = "FlowDocIO";
  class d {
    moiraeInfo(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_info`,
        meta: {
          message: e
        }
      });
    }
    moiraeError() {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      loggerServiceCore.defaultLogger.persist.error({
        eventName: `${u}_Error`,
        meta: {
          msg: safeJsonUtils.safeStringify(t)
        },
        error: Error(`${u}_Error`)
      });
    }
    moiraeCount(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_Count`,
        meta: {
          msg: e
        }
      });
    }
    moiraeTeaLog(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_TeaLog`,
        meta: {
          msg: safeJsonUtils.safeStringify(e)
        }
      });
    }
    consoleError() {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
    }
    consoleWarn() {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
    }
    logIOInit(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_Init`,
        meta: {
          memberId: String(e)
        }
      });
    }
    logException(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_Exception`,
        meta: {
          msg: safeJsonUtils.safeStringify(e)
        }
      });
    }
    logWatchEntityFailure(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_WatchEntityFailure`,
        meta: {
          msg: safeJsonUtils.safeStringify(e)
        }
      });
    }
    logOnMessageData(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_OnMessageData`,
        meta: {
          msg: safeJsonUtils.safeStringify(e)
        }
      });
    }
    logOnPassiveMessageData(e) {}
    logPingSuccess(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_PingSuccess`,
        meta: {
          pingCount: e
        }
      });
    }
    logPingFailure() {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_PingFailure`
      });
    }
    logPong() {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_PongReceived`
      });
    }
    logPingPongTime(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_PingPongTime`,
        meta: {
          pingPongTime: e
        }
      });
    }
    logBeforeConnectTo(e, t) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_BeforeConnectTo`,
        meta: {
          connectionId: e,
          endPoint: t
        }
      });
    }
    logConnecting(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_Connecting`,
        meta: {
          connectionId: e
        }
      });
    }
    logConnectResult(e, t, n) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_ConnectResult`,
        meta: {
          connectionId: e,
          result: safeJsonUtils.safeStringify(t),
          readyState: n
        }
      });
    }
    logConnectTime(e, t) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_ConnectTime`,
        meta: {
          connectionId: e,
          connectTime: t
        }
      });
    }
    logConnectionSend(e, t, n) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_ConnectionSend`,
        meta: {
          connectionId: e,
          readyState: t,
          payloadType: n
        }
      });
    }
    logConnectionDestroy(e, t) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_ConnectionDestroy`,
        meta: {
          connectionId: e,
          hasWebSocketInstance: t
        }
      });
    }
    logBeforeSwitch(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_BeforeSwitch`,
        meta: {
          endPointsCount: e
        }
      });
    }
    logAfterSwitch(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_AfterSwitch`,
        meta: {
          success: e
        }
      });
    }
    logBeforeSwitchingToEndPoint(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_BeforeSwitchingToEndPoint`,
        meta: {
          endPoint: e
        }
      });
    }
    logAfterSwitchingToEndPoint(e, t) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_AfterSwitchingToEndPoint`,
        meta: {
          endPoint: e,
          success: t
        }
      });
    }
    logBeforeRace() {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_BeforeRace`
      });
    }
    logAfterRace() {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_AfterRace`
      });
    }
    logBeforeLoadingTicket() {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_BeforeLoadingTicket`
      });
    }
    logAfterLoadingTicket(e, t) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_AfterLoadingTicket`,
        meta: {
          success: e,
          isFromCache: t
        }
      });
    }
    logConnectionDestroyedByStopOp(e) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: `${u}_ConnectionDestroyedByStopOp`,
        meta: {
          connectionId: e
        }
      });
    }
    constructor(e) {
      this.props = e;
    }
  }
  var axiosInstanceConfig = require("axios-instance-config") /*id: 941094*/;
  class f {
    getExternalExtensions() {
      return this.config.externalExtensions;
    }
    getStaticConfig() {
      return {
        fpid: 1442,
        aid: 717794,
        endPoints: ["wss100-normal.doubao.com"].map(e => `wss://${e}/ws/v2`)
      };
    }
    generateRequestContext() {
      return {
        os: "test_mock",
        app_version: "test_mock",
        os_version: "test_mock",
        platform: "test_mock",
        request_id: uuidV1Generator.generateUuid()
      };
    }
    createIOLogger(e) {
      return new d(e);
    }
    sendMessageByAxios(e) {
      return axiosInstanceConfig.axiosInstance.request({
        ...e,
        headers: {
          "Content-Type": "application/json",
          ...e.headers
        }
      });
    }
    getCommonHeader() {
      return {
        "doc-biz": "test_mock",
        "doc-os": "test_mock",
        "doc-platform": "test_mock"
      };
    }
    constructor(e) {
      this.config = e;
    }
  }
  async function m() {
    let {
      FrontierClient: e
    } = await require.e("x_io_frontier") /*id: 30877*/.then(require.bind(require, "frontier-client-export") /*id: 831684*/);
    return e;
  }
  class v extends chatNetworkIoManager.ChatNetworkIO {
    static getInstance(e = {}) {
      if (v.ioInstance) {
        return v.ioInstance;
      }
      let t = new v({
        ...e,
        externalExtensions: s,
        disableSocket: false
      });
      v.ioInstance = t;
      return v.ioInstance;
    }
    loadFrontierClient() {
      return m();
    }
    constructor(e = {}) {
      super(new f(e));
    }
  }
  if ((r = typeof (i = function (e, t) {
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
  }(r = "ioInstance", "string")) == "symbol" ? i : i + "") in v) {
    Object.defineProperty(v, r, {
      value: null,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    v[r] = null;
  }
  require.d(exports, {
    FlowDocIoClient: function () {
      return v;
    }
  });
}