// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FileLinkSheetIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 420059
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
      d: "M4 3h12.595c.93 0 1.806.355 2.439.96A3.07 3.07 0 0 1 20 6.176V21H7.405a3.53 3.53 0 0 1-2.439-.96A3.068 3.068 0 0 1 4 17.823V3ZM3 1a1 1 0 0 0-1 1v15.823c0 1.373.57 2.69 1.583 3.66A5.529 5.529 0 0 0 7.405 23H21a1 1 0 0 0 1-1V6.176a5.07 5.07 0 0 0-1.583-3.66A5.53 5.53 0 0 0 16.595 1H3Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M6.5 6.5h8.9c1.16 0 2.1.94 2.1 2.1v8.9H8.6a2.1 2.1 0 0 1-2.1-2.1V6.5Zm2 2v2.6h2.6V8.5H8.5Zm4.4 0v2.6h2.6V8.6a.1.1 0 0 0-.1-.1h-2.5Zm-1.8 4.4H8.5v2.5a.1.1 0 0 0 .1.1h2.5v-2.6Zm1.8 2.6h2.6v-2.6h-2.6v2.6Z",
      fill: "currentColor"
    }));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: s
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "FileLinkSheetOutlined"
      }
    }));
  });
  require.d(exports, {
    FileLinkSheetIcon: function () {
      return u;
    }
  });
}