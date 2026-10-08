// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'pptAutoCanvasViewAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.bea024bf.js
         * chunkId: 83145
         * moduleId: 836436
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  let i = {
    matcher: e => e === aiActionConstants.aiActionConstants.PPT_AutoCanvasView,
    handler: e => Promise.all([require.e("ui-animation-components") /*id: 86189*/, require.e("react-ui-components-modals") /*id: 34965*/, require.e("api-client-services") /*id: 26176*/, require.e("ai-ppt-slide-editor") /*id: 58943*/, require.e("ppt-url-action-plugin") /*id: 79068*/]).then(require.bind(require, "ppt-url-action-handler_1") /*id: 139266*/).then(t => {
      t.default(e);
    })
  };
  require.d(exports, {
    pptAutoCanvasViewAction: function () {
      return i;
    }
  });
}