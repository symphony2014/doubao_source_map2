// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C$' to 'getServerTimestamp'
// - Renamed export 'bF' to 'retryCount'
// - Renamed export 'bJ' to 'tokenGeneratorId'
// - Renamed export 'sq' to 'requestTimeout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17574.32d72dbf.js
         * chunkId: 17574
         * moduleId: 688751
         */
module.exports = function (module, exports, require) {
  var chatInputLogger = require("chat-input-logger") /*id: 225602*/;
  var r = (e, t, n) => new Promise((o, r) => {
    var a = e => {
      try {
        s(n.next(e));
      } catch (e) {
        r(e);
      }
    };
    var i = e => {
      try {
        s(n.throw(e));
      } catch (e) {
        r(e);
      }
    };
    var s = e => e.done ? o(e.value) : Promise.resolve(e.value).then(a, i);
    s((n = n.apply(e, t)).next());
  });
  let a = 5;
  let i = 2000;
  let s = "passport-dpop-token-generator";
  let l = () => r(undefined, null, function* () {
    var e;
    chatInputLogger.traceLogger.info("[DEFAULT_GET_SERVER_TIMESTAMP] getServerTimestamp start");
    try {
      let t = yield fetch("https://accounts.feishu.cn/accounts/status/heartbeat", {
        method: "POST"
      });
      let n = yield t.json();
      let r = (e = n == null ? undefined : n.data) == null ? undefined : e.now;
      chatInputLogger.traceLogger.info("[DEFAULT_GET_SERVER_TIMESTAMP] getServerTimestamp end, raw response body:", JSON.stringify(n), "server time:", r, "local time:", Date.now() / 1000);
      let a = Math.floor(Number(r || Date.now() / 1000) || 0);
      chatInputLogger.traceLogger.info("[DEFAULT_GET_SERVER_TIMESTAMP] getServerTimestamp end, finalTimestamp:", a);
      return a;
    } catch (e) {
      chatInputLogger.traceLogger.error("[DEFAULT_GET_SERVER_TIMESTAMP] getServerTimestamp error,use local time:", e);
      return Math.floor(Date.now() / 1000);
    }
  });
  require.d(exports, {
    getServerTimestamp: function () {
      return l;
    },
    retryCount: function () {
      return a;
    },
    tokenGeneratorId: function () {
      return s;
    },
    requestTimeout: function () {
      return i;
    }
  });
}