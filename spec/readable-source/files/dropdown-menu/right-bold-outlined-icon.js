// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'RightBoldOutlined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 971784
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var a = ["prefixId"];
  function l(e) {
    e.prefixId;
    var t = objectOmitHelper_1.omitWithSymbols(e, a);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t), reactCoreLibraryReexport.createElement("path", {
      d: "m7.586 20.486.707.707a1 1 0 0 0 1.414 0l7.778-7.778a2 2 0 0 0 0-2.829L9.707 2.808a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 0 1.414l7.07 7.072-7.07 7.07a1 1 0 0 0 0 1.415Z",
      fill: "currentColor"
    }));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: l
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "RightBoldOutlined"
      }
    }));
  });
  require.d(exports, {
    RightBoldOutlined: function () {
      return u;
    }
  });
}