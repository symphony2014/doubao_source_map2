// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'useDebouncedFn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 759.d4297f73.js
         * chunkId: 759
         * moduleId: 532201
         */
module.exports = function (module, exports, require) {
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  let n = function (e, t = {}) {
    let {
      wait: l = 500,
      leading: n = true,
      trailing: a = false
    } = t;
    let {
      run: o
    } = useDebouncedCallbackHook_1.useDebouncedCallback(e, {
      wait: l,
      leading: n,
      trailing: a
    });
    return o;
  };
  require.d(exports, {
    useDebouncedFn: function () {
      return n;
    }
  });
}