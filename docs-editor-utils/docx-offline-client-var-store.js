// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'getDocxVarStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 104010
         */
module.exports = function (module, exports, require) {
  var docxOfflineService = require("docx-offline-service") /*id: 170752*/;
  var blockActionConstants = require("block-action-constants") /*id: 699900*/;
  let l = e => {
    let n;
    switch (e) {
      case blockActionConstants.clientVarTypes.CLIENT_VARS:
        n = docxOfflineService.offlineService.getDocxClientVarsOfflineStore(window.User.id);
        break;
      case blockActionConstants.clientVarTypes.LOCAL_CLIENT_VARS:
        break;
      case blockActionConstants.clientVarTypes.CLIENT_VARS_OP:
        n = docxOfflineService.offlineService.getDocxClientVarsOpOfflineStore(window.User.id);
        break;
      default:
        throw Error("invalid DBType");
    }
    return {
      setItem: e => e.data ? n.setItem(e.token, e) : n.deleteItem(e.token),
      getItem: e => n.getItem(e.token)
    };
  };
  require.d(exports, {
    getDocxVarStore: function () {
      return l;
    }
  });
}