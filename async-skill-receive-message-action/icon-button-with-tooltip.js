// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'IconButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 158007
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      children: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t
    });
  };
  let c = e => {
    let {
      tooltipContent: t,
      disabled: n,
      onClick: i,
      prefix: c,
      suffix: d,
      children: u,
      className: p,
      ...m
    } = e;
    let v = reactJsxRuntimeCoreReexport.jsxs(buttonComponentExport.Button, {
      disabled: n,
      variant: "icon",
      onClick: () => {
        if (i != null) {
          i();
        }
      },
      className: l("text-dbx-text-secondary", p),
      ...m,
      children: [c || null, u || null, d || null]
    });
    let f = n || !t ? s : tooltipComponentExports.DbxTooltip;
    return reactJsxRuntimeCoreReexport.jsx(f, {
      content: t,
      children: v
    });
  };
  require.d(exports, {
    IconButton: function () {
      return c;
    }
  });
}