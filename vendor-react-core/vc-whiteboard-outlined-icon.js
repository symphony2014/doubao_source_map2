// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'VcWhiteboardOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 838577
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function s(e) {
    e.prefixId;
    var n = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n), reactCoreLibraryReexport.createElement("path", {
      d: "M13.728 18.56h1.914c.376 0 .736-.146 1.002-.406l5.601-5.48a2.357 2.357 0 0 0 0-3.379 2.472 2.472 0 0 0-3.447 0l-5.6 5.48c-.265.26-.415.614-.415.982v1.877c0 .512.423.926.945.926Zm-4.612-.35c.043.471-.094.959-.27 1.4a3.27 3.27 0 0 0-.026.068c.196-.028.438-.082.715-.165a9.1 9.1 0 0 0 1.183-.456 1.184 1.184 0 0 1 1.565.544 1.14 1.14 0 0 1-.555 1.534c-.808.377-2.13.875-3.21.865-.53-.005-1.393-.142-1.87-.93-.316-.522-.318-1.105-.194-1.649-1.014.504-2.183 1.31-2.549 1.586a1.19 1.19 0 0 1-1.646-.209 1.136 1.136 0 0 1 .214-1.613c.455-.344 1.986-1.407 3.294-1.994.332-.149.69-.286 1.04-.367.31-.073.8-.147 1.285.03a1.55 1.55 0 0 1 1.024 1.356ZM2 5.513a3.374 3.374 0 0 1 3.374-3.375h14.087a3.374 3.374 0 0 1 3.374 3.375v.294a1 1 0 1 1-2 0v-.294c0-.76-.615-1.375-1.374-1.375H5.374C4.615 4.138 4 4.754 4 5.513V15.5a1 1 0 1 1-2 0V5.513Z",
      fill: "currentColor"
    }));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: s
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "VcWhiteboardOutlined"
      }
    }));
  });
  require.d(exports, {
    VcWhiteboardOutlinedIcon: function () {
      return u;
    }
  });
}