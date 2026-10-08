// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WikiSubpageIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2621.5f8fa129.js
         * chunkId: 2621
         * moduleId: 923883
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function M(e) {
    e.prefixId;
    var a = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, a), reactCoreLibraryReexport.createElement("path", {
      d: "M9.5 7A1.25 1.25 0 1 1 7 7a1.25 1.25 0 0 1 2.5 0Zm1 0a1 1 0 0 1 1-1H16a1 1 0 1 1 0 2h-4.5a1 1 0 0 1-1-1Zm-1 5A1.25 1.25 0 1 1 7 12a1.25 1.25 0 0 1 2.5 0Zm1 0a1 1 0 0 1 1-1H16a1 1 0 1 1 0 2h-4.5a1 1 0 0 1-1-1Zm-1 5A1.25 1.25 0 1 1 7 17a1.25 1.25 0 0 1 2.5 0Zm1 0a1 1 0 0 1 1-1H16a1 1 0 1 1 0 2h-4.5a1 1 0 0 1-1-1Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M5 1a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H5Zm0 20V3h14v18H5Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: M
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "WikiSubpageOutlined"
      }
    }));
  });
  require.d(exports, {
    WikiSubpageIcon: function () {
      return s;
    }
  });
}