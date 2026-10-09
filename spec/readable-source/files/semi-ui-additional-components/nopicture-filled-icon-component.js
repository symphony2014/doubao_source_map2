// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'NopictureFilledIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 448030
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
      d: "M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm16 2v10l-2.146-2.146a.5.5 0 0 0-.708 0l-2.792 2.793a.5.5 0 0 1-.708 0l-5.292-5.293a.5.5 0 0 0-.708 0L4 14V5h16Zm-4 2.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H16Z",
      fill: "currentColor"
    }));
  }
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "NopictureFilled"
      }
    }));
  });
  require.d(exports, {
    NopictureFilledIcon: function () {
      return l;
    }
  });
}