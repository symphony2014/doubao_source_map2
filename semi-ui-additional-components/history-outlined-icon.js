// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'HistoryOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 414792
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
      d: "M22.4 12c0 5.523-4.477 10-10 10a9.982 9.982 0 0 1-7.845-3.797l1.59-1.215a8 8 0 1 0-1.634-6.32H5.5a.532.532 0 0 1 .444.828L3.99 14a.533.533 0 0 1-.888 0l-2.046-2.505a.533.533 0 0 1 .444-.83h.988C3.14 5.775 7.33 2 12.4 2c5.523 0 10 4.477 10 10Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M13.5 11V8a1 1 0 1 0-2 0v4.467c0 .294.239.533.533.533h3.3a1 1 0 1 0 0-2H13.5Z",
      fill: "currentColor"
    }));
  }
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "HistoryOutlined"
      }
    }));
  });
  require.d(exports, {
    HistoryOutlinedIcon: function () {
      return l;
    }
  });
}