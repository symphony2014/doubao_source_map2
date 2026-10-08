// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TemplateOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 94487
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
      d: "M19.482 14.763a1.99 1.99 0 0 0 .627-.998l2.07-7.727a2 2 0 0 0-1.414-2.45l-7.727-2.07a2 2 0 0 0-2.45 1.414L9.421 7.289a6.5 6.5 0 1 0-1.62 12.705C7.799 21.038 8.635 22 9.804 22h10.392c1.54 0 2.502-1.667 1.732-3l-2.446-4.237Zm.766-9.243-1.935 7.219L16.733 10c-.77-1.333-2.695-1.333-3.465 0l-.966 1.673-1.852-.496 2.07-7.728 7.728 2.071ZM8.75 17.824A4.505 4.505 0 0 1 3 13.5a4.5 4.5 0 0 1 5.903-4.277l-.385 1.436a2 2 0 0 0 1.414 2.45l1.335.357-2.516 4.358ZM15 11l5.196 9H9.804L15 11Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "TemplateOutlined"
      }
    }));
  });
  require.d(exports, {
    TemplateOutlinedIcon: function () {
      return s;
    }
  });
}