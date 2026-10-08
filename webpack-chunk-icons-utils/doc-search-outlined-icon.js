// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocSearchOutlined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 329310
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var s = ["prefixId"];
  function c(e) {
    e.prefixId;
    var t = objectOmitHelper_1.omitWithSymbols(e, s);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t), reactCoreLibraryReexport.createElement("path", {
      d: "M3 3a2 2 0 0 1 2-2h9.672a2 2 0 0 1 1.414.586l4.328 4.328A2 2 0 0 1 21 7.328V11h-2V7.5h-3.5a1 1 0 0 1-1-1V3H5v18h4v2H5a2 2 0 0 1-2-2V3Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M20 16a4.978 4.978 0 0 1-1.061 3.08l1.685 1.939a1 1 0 1 1-1.51 1.312l-1.697-1.953A5 5 0 1 1 20 16Zm-2 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z",
      fill: "currentColor"
    }));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: c
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "DocSearchOutlined"
      }
    }));
  });
  require.d(exports, {
    DocSearchOutlined: function () {
      return u;
    }
  });
}