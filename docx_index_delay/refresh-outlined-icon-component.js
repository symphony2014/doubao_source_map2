// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'RefreshOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 480319
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function s(e) {
    e.prefixId;
    var r = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, r), reactCoreLibraryReexport.createElement("path", {
      d: "M9.93 4.273a8 8 0 0 1 8.683 3.224h-3.11a1 1 0 0 0 0 2h5.496a1 1 0 0 0 1.001-1V3a1 1 0 1 0-2 0v3a10 10 0 1 0 .66 11 1 1 0 0 0-1.732-1A8 8 0 1 1 9.93 4.273Z",
      fill: "currentColor"
    }));
  }
  var d = reactCoreLibraryReexport.forwardRef(function (e, r) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: s
    }, e, {
      ref: r,
      svgProps: {
        "data-icon": "RefreshOutlined"
      }
    }));
  });
  require.d(exports, {
    RefreshOutlinedIcon: function () {
      return d;
    }
  });
}