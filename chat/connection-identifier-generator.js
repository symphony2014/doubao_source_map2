// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getConnectionContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 496075
         */
module.exports = function (module, exports, require) {
  let i = require("uuid-generator-util") /*id: 641535*/.generateUuid();
  let r = function (e = "http") {
    if (e === "http") {
      return {
        web_tab_id: i
      };
    } else if (e === "websocket") {
      return {
        conn_tag: i
      };
    } else {
      return {
        web_tab_id: i
      };
    }
  };
  require.d(exports, {
    getConnectionContext: function () {
      return r;
    }
  });
}