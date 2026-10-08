// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'minuteMeetingPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.bea024bf.js
         * chunkId: 83145
         * moduleId: 901750
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  let i = {
    matcher: e => e === aiActionConstants.aiActionConstants.AISpace_MinuteMettingOpen,
    handler: e => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("ai-space-minutemetting-url-parse-plugin") /*id: 22712*/]).then(require.bind(require, "ai-space-meeting-url-parse-plugin") /*id: 686159*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("ai-space-minutes-metting-parse-pre-plugin") /*id: 12775*/]).then(require.bind(require, "meeting-parse-pre-plugin") /*id: 904894*/).then(t => t.default(e))
  };
  require.d(exports, {
    minuteMeetingPlugin: function () {
      return i;
    }
  });
}