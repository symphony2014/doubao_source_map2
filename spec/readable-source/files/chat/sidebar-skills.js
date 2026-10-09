// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'SidebarSkills'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 164486
         */
module.exports = function (module, exports, require) {
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let r = e => {
    let {
      children: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mb-22 flex w-full flex-col gap-3",
        "data-testid": "sidebar-skills",
        children: t
      })
    });
  };
  require.d(exports, {
    SidebarSkills: function () {
      return r;
    }
  });
}