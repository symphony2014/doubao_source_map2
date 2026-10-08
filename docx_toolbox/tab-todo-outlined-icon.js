// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TabTodoOutlined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 578791
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
      d: "M20.2 3.63a1 1 0 0 0-1.415 0l-9.214 9.215H9.57l-4.243 4.242.705.705c.05.049.102.092.158.129l2.688 2.688a1 1 0 0 0 1.414 0L23.028 7.873a1 1 0 0 0 0-1.414l-2.829-2.828ZM8.17 17.074l11.321-11.32 1.414 1.413-11.32 11.322-1.415-1.415Zm-3.48-9.11 3.466 3.466-1.415 1.414-2.758-2.758L2.569 11.5l2.758 2.758-1.414 1.415-3.466-3.466a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 0Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "TabTodoOutlined"
      }
    }));
  });
  require.d(exports, {
    TabTodoOutlined: function () {
      return s;
    }
  });
}