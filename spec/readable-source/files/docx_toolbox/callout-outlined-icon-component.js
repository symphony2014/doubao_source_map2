// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CalloutOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 248514
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
      d: "M4 2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm16 2v6H4V4h16ZM3 16a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H4Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "CalloutOutlined"
      }
    }));
  });
  require.d(exports, {
    CalloutOutlinedIcon: function () {
      return s;
    }
  });
}