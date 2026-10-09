// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getProcessStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 308885
         */
module.exports = function (module, exports, require) {
  var statusConstants = require("status-constants") /*id: 356183*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let o = e => ({
    [messagingConstants.parseState.ParseState_Default]: statusConstants.processStatus.Processing,
    [messagingConstants.parseState.ParseState_Processing]: statusConstants.processStatus.Processing,
    [messagingConstants.parseState.ParseState_Success]: statusConstants.processStatus.Success,
    [messagingConstants.parseState.ParseState_Failed]: statusConstants.processStatus.Failed
  })[e];
  require.d(exports, {
    getProcessStatus: function () {
      return o;
    }
  });
}