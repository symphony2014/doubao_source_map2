// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'EfficiencyColorfulIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 819305
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var s = ["prefixId"];
  function u(e) {
    e.prefixId;
    var t = objectOmitHelper_1.omitWithSymbols(e, s);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t), reactCoreLibraryReexport.createElement("path", {
      d: "M9 22.5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z",
      fill: "#FF811A"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M21 10c0 2.945-2.226 6.12-4.578 7.309a1.121 1.121 0 0 0-.57.633c-.16.483-.29.874-.397 1.192A1.998 1.998 0 0 1 13.56 20.5h-3.117c-.861 0-1.625-.55-1.897-1.366l-.398-1.192c-.093-.28-.306-.5-.569-.633C5.226 16.12 3 12.945 3 10a9 9 0 0 1 18 0Z",
      fill: "#FFC60A"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M12.179 4.583a1.25 1.25 0 0 1-.762 1.595A4.767 4.767 0 0 0 8.52 9.074a1.25 1.25 0 1 1-2.357-.833 7.267 7.267 0 0 1 4.42-4.42 1.25 1.25 0 0 1 1.596.762Z",
      fill: "#fff"
    }));
  }
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "EfficiencyColorful"
      }
    }));
  });
  require.d(exports, {
    EfficiencyColorfulIcon: function () {
      return l;
    }
  });
}