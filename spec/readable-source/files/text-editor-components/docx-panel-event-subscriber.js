// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'docxPanelSubscriber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 521653
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  var docxPanelEventConstKeys = require("docx-panel-event-const-keys") /*id: 212120*/;
  let l = {
    subscribeScrollPosition(e, n) {
      let o = rpcHostManager.RpcHostManager.getInstance();
      if (e && o) {
        return o.on(e, docxPanelEventConstKeys.scroll, n);
      } else {
        return emptyExportFunction.emptyFunction;
      }
    },
    subscribeTitleInViewChange(e, n) {
      let o = rpcHostManager.RpcHostManager.getInstance();
      if (e && o) {
        return o.on(e, docxPanelEventConstKeys.titleInviewChange, n);
      } else {
        return emptyExportFunction.emptyFunction;
      }
    }
  };
  require.d(exports, {
    docxPanelSubscriber: function () {
      return l;
    }
  });
}