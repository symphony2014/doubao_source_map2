// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'aI' to 'finishReasons'
// - Renamed export 'l' to 'asyncTaskStatus'
// - Renamed export 'tw' to 'messageTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 444681
         */
module.exports = function (module, exports, require) {
  var i = {
    Unknown: 0,
    HEARTBEAT: 1,
    CMPL: 2001,
    ACK: 2002,
    FIN: 2003,
    CMD: 2004,
    ERR: 2005,
    VUI_CMPL: 2006,
    OAPI_CMPL: 2007,
    VERBOSE: 2010,
    VERSION: 2011,
    BLOCKLIST: 2022
  };
  var r = {
    FinReasonDefault: 0,
    FinReasonAsyncTask: 1
  };
  var o = {
    AsyncTaskStatusUnknown: 0,
    AsyncTaskStatusProcessing: 1,
    AsyncTaskStatusSucceed: 2,
    AsyncTaskStatusFailed: 3,
    AsyncTaskStatusCanceled: 4
  };
  require.d(exports, {
    finishReasons: function () {
      return r;
    },
    asyncTaskStatus: function () {
      return o;
    },
    messageTypes: function () {
      return i;
    }
  });
}