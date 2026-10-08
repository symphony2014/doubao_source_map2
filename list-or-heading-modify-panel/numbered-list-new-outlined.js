// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'NumberedListIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: list-or-heading-modify-panel.840ddcd1.js
         * chunkId: 87195
         * moduleId: 848992
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function l(e) {
    e.prefixId;
    var r = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, r), reactCoreLibraryReexport.createElement("path", {
      d: "M3.1 7.5V3.824l-.58.41a.9.9 0 1 1-1.04-1.469l1.528-1.08a1.2 1.2 0 0 1 1.892.98V7.5a.9.9 0 0 1-1.8 0Zm.9 3.586a1 1 0 0 0-1 1V17H1.37a.5.5 0 0 0-.431.752l2.63 4.508a.5.5 0 0 0 .863 0l2.63-4.508A.5.5 0 0 0 6.63 17H5v-4.914a1 1 0 0 0-1-1Zm6 8a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H10Zm-1-7a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H10a1 1 0 0 1-1-1ZM10 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H10Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, r) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: l
    }, e, {
      ref: r,
      svgProps: {
        "data-icon": "NumberedListNewOutlined"
      }
    }));
  });
  require.d(exports, {
    NumberedListIcon: function () {
      return s;
    }
  });
}