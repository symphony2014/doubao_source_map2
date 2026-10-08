// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'UpBoldOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-pdf-viewer.a091068e.js
         * chunkId: 55505
         * moduleId: 276704
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
      d: "m20.385 16.914.707-.707a1 1 0 0 0 0-1.414l-7.778-7.778a2 2 0 0 0-2.829 0l-7.778 7.778a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414 0l7.071-7.07 7.071 7.07a1 1 0 0 0 1.415 0Z",
      fill: "currentColor"
    }));
  }
  var c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: l
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "UpBoldOutlined"
      }
    }));
  });
  require.d(exports, {
    UpBoldOutlinedIcon: function () {
      return c;
    }
  });
}