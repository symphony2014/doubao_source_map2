// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'IncreaseIndentIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 637008
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
      d: "M21 3a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0V3Zm-1.911 9.651a.8.8 0 0 0 0-1.302l-4.824-3.445a.8.8 0 0 0-1.265.65V11H2a1 1 0 1 0 0 2h11v2.445a.8.8 0 0 0 1.265.651l4.824-3.445Z",
      fill: "currentColor"
    }));
  }
  var d = reactCoreLibraryReexport.forwardRef(function (e, r) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: s
    }, e, {
      ref: r,
      svgProps: {
        "data-icon": "IncreaseIndentationOutlined"
      }
    }));
  });
  require.d(exports, {
    IncreaseIndentIcon: function () {
      return d;
    }
  });
}