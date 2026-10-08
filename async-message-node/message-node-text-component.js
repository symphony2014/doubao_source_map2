// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'MessageTextNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 806563
         */
module.exports = function (module, exports, require) {
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = e => {
    let {
      text: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "text-16 leading-24 font-[400] text-(--s-color-text-quaternary)",
        children: t
      })
    });
  };
  require.d(exports, {
    MessageTextNode: function () {
      return i;
    }
  });
}