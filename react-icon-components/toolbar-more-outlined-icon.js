// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ToolbarMoreOutlined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 903123
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
      d: "M13.086 7.814a2 2 0 0 1 0-2.828l3.04-3.04a2 2 0 0 1 2.829 0l3.04 3.04a2 2 0 0 1 0 2.828l-3.04 3.04a2 2 0 0 1-2.829 0l-3.04-3.04Zm2.828-2.828L14.5 6.4l1.414 1.414.212.212 1.415 1.414 1.414-1.414.212-.212L20.58 6.4l-1.414-1.414-.212-.212-1.414-1.415-1.415 1.415-.212.212ZM4.2 2.199a2 2 0 0 0-2 2v4.5a2 2 0 0 0 2 2h4.5a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2H4.2Zm0 2h4.5v4.5H4.2v-4.5Zm0 9.101a2 2 0 0 0-2 2v4.5a2 2 0 0 0 2 2h4.5a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2H4.2Zm0 2h4.5v4.5H4.2v-4.5Zm11.1-2a2 2 0 0 0-2 2v4.501a2 2 0 0 0 2 2h4.5a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2h-4.5Zm0 2h4.5v4.501h-4.5v-4.5Z",
      fill: "currentColor"
    }));
  }
  var d = reactCoreLibraryReexport.forwardRef(function (e, r) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: s
    }, e, {
      ref: r,
      svgProps: {
        "data-icon": "ToolbarMoreOutlined"
      }
    }));
  });
  require.d(exports, {
    ToolbarMoreOutlined: function () {
      return d;
    }
  });
}