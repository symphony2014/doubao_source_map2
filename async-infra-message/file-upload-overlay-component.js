// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'UploadStatusEnum'
// - Renamed export 'J' to 'FileOverlayComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 148138
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var i;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var semiProgressComponent = require("semi-progress-component") /*id: 821198*/;
  var baseIconClass = require("base-icon-class") /*id: 181746*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 30,
    height: 30,
    fill: "none",
    viewBox: "0 0 30 30",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      d: "M6.789 16.179q0-1.701.634-3.191a8.2 8.2 0 0 1 4.359-4.368 8 8 0 0 1 3.89-.607q.34.037.652.101l-2.225-2.197a1 1 0 0 1-.184-.276.9.9 0 0 1-.064-.331.9.9 0 0 1 .248-.644.85.85 0 0 1 .634-.267q.387 0 .635.258l3.77 3.844a.89.89 0 0 1 .211 1.011.9.9 0 0 1-.211.313l-3.77 3.807q-.24.248-.635.248a.85.85 0 0 1-.625-.258.86.86 0 0 1-.258-.634q0-.175.065-.322.073-.157.193-.285l2.501-2.474a7 7 0 0 0-.763-.11 8 8 0 0 0-.864-.046q-1.344 0-2.502.497-1.149.495-2.023 1.379a6.4 6.4 0 0 0-1.37 2.041 6.5 6.5 0 0 0-.487 2.51q0 1.334.497 2.502a6.6 6.6 0 0 0 1.37 2.05 6.5 6.5 0 0 0 2.041 1.38 6.4 6.4 0 0 0 2.501.487q1.324 0 2.483-.487a6.3 6.3 0 0 0 2.041-1.38 6.6 6.6 0 0 0 1.38-2.05 6.3 6.3 0 0 0 .496-2.501q0-.414.24-.671a.85.85 0 0 1 .643-.258q.413 0 .662.258.257.257.257.67 0 1.71-.634 3.21a8.1 8.1 0 0 1-1.757 2.62 8.1 8.1 0 0 1-2.62 1.757 8.1 8.1 0 0 1-3.19.634 8.15 8.15 0 0 1-5.821-2.39 8.4 8.4 0 0 1-1.766-2.621 8.15 8.15 0 0 1-.634-3.21"
    })
  });
  (i = {}).Uploading = "Uploading";
  i.Retry = "Retry";
  i.Normal = "Normal";
  let c = i;
  let d = e => {
    let {
      status: t,
      progressPercent: n,
      className: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s("file-overlay-YL7KdT", i),
      children: t === c.Retry ? reactJsxRuntimeCoreReexport.jsx(baseIconClass.ZPm, {
        svg: reactJsxRuntimeCoreReexport.jsx(u, {})
      }) : reactJsxRuntimeCoreReexport.jsx(semiProgressComponent.Progress, {
        type: "circle",
        width: 18,
        strokeWidth: 2,
        stroke: "#fff",
        orbitStroke: "rgba(255,255,255,0.6)",
        percent: Math.ceil(n || 0)
      })
    });
  };
  require.d(exports, {
    UploadStatusEnum: function () {
      return c;
    },
    FileOverlayComponent: function () {
      return d;
    }
  });
}