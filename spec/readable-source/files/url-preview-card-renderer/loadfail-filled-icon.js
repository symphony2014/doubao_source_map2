// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LoadfailFilled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 741199
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var a = ["prefixId"];
  function E(e) {
    e.prefixId;
    var t = objectOmitHelper_1.omitWithSymbols(e, a);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t), reactCoreLibraryReexport.createElement("path", {
      d: "M13.538 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2.986l3.206-8.808-1.838-1.838a.5.5 0 0 0-.708 0L4 14V5h8.81l.728-2Zm-1.099 11.44 1.207 1.207a.5.5 0 0 0 .708 0l2.792-2.793a.5.5 0 0 1 .708 0L20 15V5h-4.125l.728-2H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-9.949l2.388-6.56ZM15.5 8a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H16a.5.5 0 0 1-.5-.5V8Z",
      fill: "currentColor"
    }));
  }
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: E
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "LoadfailFilled"
      }
    }));
  });
  require.d(exports, {
    LoadfailFilled: function () {
      return l;
    }
  });
}