// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'UndoOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: help_siderbar.5d9568bb.js
         * chunkId: 3249
         * moduleId: 521454
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var l = ["prefixId"];
  function d(e) {
    e.prefixId;
    var n = objectOmitHelper_1.omitWithSymbols(e, l);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n), reactCoreLibraryReexport.createElement("path", {
      d: "M8.707 2.293a1 1 0 0 1 0 1.414L5.414 7H14.5a7.5 7.5 0 0 1 0 15H11a1 1 0 1 1 0-2h3.5a5.5 5.5 0 1 0 0-11H5.414l3.293 3.293a1 1 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: d
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "UndoOutlined"
      }
    }));
  });
  require.d(exports, {
    UndoOutlinedIcon: function () {
      return s;
    }
  });
}