// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SpaceOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 893512
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function u(e) {
    e.prefixId;
    var n = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n), reactCoreLibraryReexport.createElement("path", {
      d: "M19 3H4v18h3.84c.19.741.537 1.42 1.001 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v9.87a6.124 6.124 0 0 0-2-1.38V3Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M6 7a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 3.5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7Zm9.587 2.5a4.146 4.146 0 0 0-4.072 3.37 3.334 3.334 0 0 0 .49 6.63h6.646a3.263 3.263 0 0 0 1.052-6.351C20.463 14.643 18.758 13 16.587 13Zm-3.78 5.348 1.408-.208.265-1.399a2.146 2.146 0 0 1 4.238.145l.15 1.25 1.19.406A1.263 1.263 0 0 1 19.652 21h-6.646a1.333 1.333 0 0 1-.199-2.652Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "SpaceOutlined"
      }
    }));
  });
  require.d(exports, {
    SpaceOutlinedIcon: function () {
      return s;
    }
  });
}