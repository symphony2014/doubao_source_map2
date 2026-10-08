// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'HelpdeskOutlined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 641839
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var s = ["prefixId"];
  function l(e) {
    e.prefixId;
    var t = objectOmitHelper_1.omitWithSymbols(e, s);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t), reactCoreLibraryReexport.createElement("path", {
      d: "M6 9a6 6 0 1 1 12 0v6.5a5.502 5.502 0 0 1-4.155 5.334A1.5 1.5 0 0 0 12.5 20h-2a1.5 1.5 0 0 0 0 3h2a7.5 7.5 0 0 0 7.5-7.5v.5h.5a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H20A8 8 0 1 0 4 9h-.5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2H6V9Z",
      fill: "currentColor"
    }));
  }
  var c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: l
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "HelpdeskOutlined"
      }
    }));
  });
  require.d(exports, {
    HelpdeskOutlined: function () {
      return c;
    }
  });
}