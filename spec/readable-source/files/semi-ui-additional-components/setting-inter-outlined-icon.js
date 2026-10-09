// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SettingInterOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 335892
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
      d: "M8.073 21.445a4 4 0 1 1-5.656-5.658l2.429-2.429a9.002 9.002 0 0 1 2.167-9.237 9 9 0 0 1 9.242-2.166c.201.068.443.168.725.299a.948.948 0 0 1 .27 1.53l-2.812 2.811a2 2 0 0 0 2.828 2.829l2.758-2.757a1 1 0 0 1 1.616.291c.128.279.224.519.29.72a8.999 8.999 0 0 1-2.189 9.17 9.001 9.001 0 0 1-9.238 2.168l-2.43 2.429Zm.354-15.91a6.999 6.999 0 0 0-1.685 7.187l.395 1.175-3.306 3.305a2 2 0 1 0 2.828 2.828l3.306-3.305 1.175.395a6.999 6.999 0 0 0 8.916-4.54 7.006 7.006 0 0 0 .213-3.33c-3.02 3.019-5.223 3.611-7.246 1.588C11 8.815 11.621 6.584 14.612 3.593a7.005 7.005 0 0 0-6.185 1.942Z",
      fill: "currentColor"
    }));
  }
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "SettingInterOutlined"
      }
    }));
  });
  require.d(exports, {
    SettingInterOutlinedIcon: function () {
      return l;
    }
  });
}