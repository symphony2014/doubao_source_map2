// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'useCleanupOnUnmount'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29592.0fe385c7.js
         * chunkId: 29592
         * moduleId: 942235
         */
module.exports = function (module, exports, require) {
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  let a = e => {
    let {
      resetFn: t
    } = e;
    let n = useLatestRef_1.useLatestRef(t);
    useOnUnmountHook.useOnUnmount(() => {
      n.current();
    });
  };
  require.d(exports, {
    useCleanupOnUnmount: function () {
      return a;
    }
  });
}