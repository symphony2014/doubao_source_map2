// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ShareOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: history.95e09a2f.js
         * chunkId: 17374
         * moduleId: 40742
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var M = ["prefixId"];
  function I(e) {
    e.prefixId;
    var i = objectOmitHelper_1.omitWithSymbols(e, M);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, i), reactCoreLibraryReexport.createElement("path", {
      d: "M17.828 8c-2.984.007-5.348.553-7.332 1.634a10.628 10.628 0 0 0-4.392 4.471c-.163.311-.314.631-.452.96-.06.146-.138.348-.232.606a.5.5 0 0 1-.47.329H3.89a.5.5 0 0 1-.475-.655l.053-.16a14.46 14.46 0 0 1 .874-2.023 12.613 12.613 0 0 1 5.21-5.292c2.232-1.213 4.897-1.862 8.277-1.87l-2.537-2.537a.998.998 0 0 1 .004-1.41.998.998 0 0 1 1.41-.004l4.598 4.597a.5.5 0 0 1 0 .708l-4.601 4.601a.993.993 0 0 1-1.402-.012.993.993 0 0 1-.013-1.402l2.541-2.54ZM20 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v1h14v-1a1 1 0 0 1 1-1Z",
      fill: "currentColor"
    }));
  }
  var n = reactCoreLibraryReexport.forwardRef(function (e, i) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: I
    }, e, {
      ref: i,
      svgProps: {
        "data-icon": "ShareOutlined"
      }
    }));
  });
  require.d(exports, {
    ShareOutlinedIcon: function () {
      return n;
    }
  });
}