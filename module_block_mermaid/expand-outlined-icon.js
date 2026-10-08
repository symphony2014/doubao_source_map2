// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ExpandOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 784996
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
      d: "M6.4 19H9a1 1 0 1 1 0 2H4a.997.997 0 0 1-1-1v-5a1 1 0 1 1 2 0v2.571l4.486-4.486a.979.979 0 0 1 1.389 0c.393.396.4 1.04.005 1.435L6.4 19ZM18.985 6.5l-4.428 4.429a.993.993 0 0 1-1.405 0 1.006 1.006 0 0 1-.003-1.421L17.657 5h-2.672a1 1 0 1 1 0-2h5a.997.997 0 0 1 1 1v5a1 1 0 1 1-2 0V6.5Z",
      fill: "currentColor"
    }));
  }
  var d = reactCoreLibraryReexport.forwardRef(function (e, i) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: c
    }, e, {
      ref: i,
      svgProps: {
        "data-icon": "ExpandOutlined"
      }
    }));
  });
  require.d(exports, {
    ExpandOutlinedIcon: function () {
      return d;
    }
  });
}