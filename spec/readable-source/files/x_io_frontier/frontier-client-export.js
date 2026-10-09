// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'websocketConnectionManager'
// - Resolved require(935199) to 'websocket-connection-manager'
// - Updated imported property 'ZP' to 'WebSocketClient' (module 935199)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: x_io_frontier.f52e59d9.js
         * chunkId: 30877
         * moduleId: 831684
         */
module.exports = function (module, exports, require) {
  var websocketConnectionManager = require("websocket-connection-manager") /*id: 935199*/;
  require.d(exports, {
    FrontierClient: function () {
      return websocketConnectionManager.WebSocketClient;
    }
  });
}