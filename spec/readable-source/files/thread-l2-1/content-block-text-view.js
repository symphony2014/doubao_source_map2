// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'ContentBlockText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 957763
         */
module.exports = function (module, exports, require) {
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      contentBlock: n
    } = e;
    let {
      text: l
    } = (n == null ? undefined : n.content_obj) ?? {};
    if (l) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "text-ImA09x",
        children: l
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    ContentBlockText: function () {
      return l;
    }
  });
}