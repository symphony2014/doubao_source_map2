// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'useRpcIframeClick'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx-export-popover.ab82113b.js
         * chunkId: 65132
         * moduleId: 723840
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  let i = (e, n) => {
    reactCoreLibraryReexport.useEffect(() => {
      let o;
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (t && e) {
        if (t.isClientConnected(e)) {
          o = t.on(e, "domService.clickIframe", n);
        } else {
          t.onConnection(e => {
            if (e == e) {
              o = t.on(e, "domService.clickIframe", n);
            }
          });
        }
        return () => {
          if (o != null) {
            o();
          }
        };
      }
    }, [e]);
  };
  require.d(exports, {
    useRpcIframeClick: function () {
      return i;
    }
  });
}