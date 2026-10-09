// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'SpinnerWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 354073
         */
module.exports = function (module, exports, require) {
  var spinnerLoadingExport = require("spinner-loading-export") /*id: 372882*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = e => {
    let {
      children: t,
      style: a,
      childStyle: i,
      className: l,
      spinning: o,
      ...s
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        relative
        ${l || ""}
      `,
      style: a,
      children: [t ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
            ${o ? "opacity-[0.5]" : ""}
            h-full w-full
          `,
        style: i,
        children: t
      }) : null, o ? reactJsxRuntimeCoreReexport.jsx(spinnerLoadingExport.Spinner, {
        color: "brand",
        ...s,
        className: `
            absolute top-[50%] left-[50%] z-1 transform-[translate(-50%_-50%)]
          `
      }) : null]
    });
  };
  require.d(exports, {
    SpinnerWrapper: function () {
      return i;
    }
  });
}