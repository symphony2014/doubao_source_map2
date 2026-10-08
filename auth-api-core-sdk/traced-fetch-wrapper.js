// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'sendTracedRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 87525
         */
module.exports = function (module, exports, require) {
  var urlParamAppender = require("url-param-appender") /*id: 163706*/;
  var serviceBlockLocaleUtils = require("service-block-locale-utils") /*id: 913121*/;
  var authEventEmitter = require("auth-event-emitter") /*id: 60885*/;
  var webCoreLoggerManager = require("web-core-logger-manager") /*id: 101534*/;
  let s = "x-request-id";
  async function c(e) {
    var t;
    let r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    let {
      headers: c,
      data: u,
      method: l,
      logger: f = webCoreLoggerManager.coreLoggerInstance,
      signal: d
    } = e;
    let {
      url: h,
      name: p
    } = e;
    let g = new URL(h);
    p ||= `${g.host}${g.pathname}`;
    let v = f.startSpan(p, {
      parent: f.manager.tracer.createSpanContext({
        traceId: c && c[s]
      }),
      attributes: {
        protocol: g.protocol,
        host: g.host,
        method: l
      }
    });
    let m = function (e, t) {
      let r = t || {};
      r[s] = e.span.context.spanId;
      return r;
    }(v, c);
    let y = serviceBlockLocaleUtils.getConfig("getExtraHeaders");
    if (typeof y == "function") {
      try {
        let e = await y({
          url: h,
          method: l
        });
        Object.assign(m, e);
      } catch (e) {
        v.error("getExtraHeaders error", e);
      }
    }
    let b = {
      method: l,
      headers: m,
      mode: "cors",
      credentials: e.credentials ? e.credentials : "include",
      signal: d
    };
    if (u) {
      switch (l) {
        case "GET":
          h = urlParamAppender.appendUrlParams(h, u);
          break;
        case "POST":
          b.body = u;
      }
    }
    let _ = await fetch(h, b);
    v.endSpan({
      status: (t = _.status) >= 200 && t < 400 ? webCoreLoggerManager.CanonicalCode.OK : t >= 400 && t < 500 ? webCoreLoggerManager.CanonicalCode.INVALID_ARGUMENT : t >= 500 ? webCoreLoggerManager.CanonicalCode.INTERNAL : webCoreLoggerManager.CanonicalCode.OK,
      data: {
        status: _.status,
        logId: _.headers.get("x-tt-logid"),
        traceTag: _.headers.get("x-tt-trace-tag")
      }
    });
    if (_.status === 401 && r) {
      authEventEmitter.authEventEmitter.emit(authEventEmitter.AuthStatus.Unauthorized);
    }
    return _;
  }
  require.d(exports, {
    sendTracedRequest: function () {
      return c;
    }
  });
}