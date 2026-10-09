// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LinkRecordOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 282354
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function u(e) {
    e.prefixId;
    var n = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n), reactCoreLibraryReexport.createElement("path", {
      d: "M14 5H3v8h3v2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2v-2h2V5Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M10 9h2v2h-2v8h11v-8h-3V9h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "LinkRecordOutlined"
      }
    }));
  });
  require.d(exports, {
    LinkRecordOutlinedIcon: function () {
      return s;
    }
  });
}