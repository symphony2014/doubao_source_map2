// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DownloadIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 593570
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var a = ["prefixId"];
  function c(e) {
    e.prefixId;
    var i = objectOmitHelper_1.omitWithSymbols(e, a);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, i), reactCoreLibraryReexport.createElement("path", {
      d: "M20 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v1h14v-1a1 1 0 0 1 1-1Zm-7-3.964 2.657-2.657a1 1 0 0 1 1.414 1.414c-1.414 1.415-2.828 2.83-4.244 4.244a1 1 0 0 1-1.412 0c-1.417-1.415-2.833-2.833-4.249-4.25a.993.993 0 0 1 .013-1.401.992.992 0 0 1 1.401-.013l2.42 2.42V3.5a1 1 0 1 1 2 0v10.536Z",
      fill: "currentColor"
    }));
  }
  var d = reactCoreLibraryReexport.forwardRef(function (e, i) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: c
    }, e, {
      ref: i,
      svgProps: {
        "data-icon": "DownloadOutlined"
      }
    }));
  });
  require.d(exports, {
    DownloadIcon: function () {
      return d;
    }
  });
}