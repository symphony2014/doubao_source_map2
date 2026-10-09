// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SheetTableOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 870127
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
      d: "M4 2a2 2 0 0 0-2 2v13a5 5 0 0 0 5 5h13a2 2 0 0 0 2-2V7a5 5 0 0 0-5-5H4Zm7 2v7H4V4h7Zm2 0h4a3 3 0 0 1 3 3v4h-7V4Zm-2 9v7H7a3 3 0 0 1-3-3v-4h7Zm2 7v-7h7v7h-7Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "SheetTableOutlined"
      }
    }));
  });
  require.d(exports, {
    SheetTableOutlinedIcon: function () {
      return s;
    }
  });
}