// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'createMemoProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42489.04b85baf.js
         * chunkId: 42489
         * moduleId: 143858
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEqualUtil_1 = require("is-equal-util_1") /*id: 999658*/;
  var reactMemoHooks = require("react-memo-hooks") /*id: 573742*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let t = e.Provider;
    return e => {
      let {
        value: n,
        afterMemoedProcess: s,
        children: l
      } = e;
      let c = reactMemoHooks.useCachedValue(n, isEqualUtil_1.isEqual);
      let u = reactCoreLibraryReexport.useMemo(() => s ? s(c) : c, [c]);
      return reactJsxRuntimeCoreReexport.jsx(t, {
        value: u,
        children: l
      });
    };
  };
  require.d(exports, {
    createMemoProvider: function () {
      return s;
    }
  });
}