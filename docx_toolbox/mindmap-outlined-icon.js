// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'MindmapOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 507144
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
      d: "M3 8a5 5 0 0 1 5-5 1 1 0 0 1 0 2 3 3 0 0 0-3 3v3h3a1 1 0 1 1 0 2H5v3a3 3 0 0 0 3 3 1 1 0 1 1 0 2 5 5 0 0 1-5-5v-3H1.5a1 1 0 1 1 0-2H3V8Zm9.5-5a1 1 0 1 0 0 2H22a1 1 0 1 0 0-2h-9.5Zm-1 9a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-9.5a1 1 0 0 1-1-1Zm1 7a1 1 0 1 0 0 2H22a1 1 0 1 0 0-2h-9.5Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "MindmapOutlined"
      }
    }));
  });
  require.d(exports, {
    MindmapOutlinedIcon: function () {
      return s;
    }
  });
}