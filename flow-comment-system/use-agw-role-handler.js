// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useAgwRoleHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 400367
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var flowPermissionHandlers = require("flow-permission-handlers") /*id: 158405*/;
  function l(e) {
    let {
      token: i
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        flowPermissionHandlers.flowPermissionActions.handleAGWGetRole(i);
      }
    }, [i]);
  }
  require.d(exports, {
    useAgwRoleHandler: function () {
      return l;
    }
  });
}