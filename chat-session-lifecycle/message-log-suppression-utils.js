// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FZ' to 'shouldSkipSendingEnd'
// - Renamed export 'iD' to 'updateMessageRecord'
// - Renamed export 'mZ' to 'shouldSkipRecvUpdate'
// - Renamed export 'nE' to 'shouldSkipBatchRecv'
// - Renamed export 'uz' to 'shouldSkipSessionEnd'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 545406
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let n = e => {
    var s;
    return (e == null ? undefined : (s = e.records) === null || s === undefined ? undefined : s.onMessageSessionEnd?.count) === 1 && (loggerServiceCore.defaultLogger.persist.info("message session end, skip report log"), true);
  };
  let r = e => {
    var s;
    return (e == null ? undefined : (s = e.records) === null || s === undefined ? undefined : s.onMessageSendingEnd?.count) === 1 && (loggerServiceCore.defaultLogger.persist.info("message sending end has reported, skip report log"), true);
  };
  let a = (e, t) => {
    var s;
    var n;
    return e != null && (n = e.records) !== null && n !== undefined && (s = n.onMessageReceivingUpdate[t]) !== null && s !== undefined && !!s.done && (loggerServiceCore.defaultLogger.persist.info(`message id: [${t}] receiving end has reported, skip report log`), true);
  };
  let o = e => {
    var s;
    var r;
    return ((e == null ? undefined : (s = e.records) === null || s === undefined ? undefined : s.onBatchMessageReceivingStart?.count) !== 1 || (e == null ? undefined : (r = e.records) === null || r === undefined ? undefined : r.onBatchMessageReceivingEnd?.count) === 1) && (loggerServiceCore.defaultLogger.persist.info("message batch receiving end has reported, skip report log"), true);
  };
  let l = (e, t) => {
    if (!e || !t) {
      return;
    }
    let s = e.records[t];
    if ((s == null ? undefined : s.count) !== undefined) {
      s.count += 1;
    }
    if ((s == null ? undefined : s.timestamp) === undefined) {
      s.timestamp = performance.now();
    }
  };
  require.d(exports, {
    shouldSkipSendingEnd: function () {
      return r;
    },
    updateMessageRecord: function () {
      return l;
    },
    shouldSkipRecvUpdate: function () {
      return a;
    },
    shouldSkipBatchRecv: function () {
      return o;
    },
    shouldSkipSessionEnd: function () {
      return n;
    }
  });
}