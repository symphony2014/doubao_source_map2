// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ThumbsUpOutlined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 376095
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
      d: "M12.014 3.015a.88.88 0 0 0-.88.869A10.4 10.4 0 0 1 9.29 9.659l-1.13 1.637v9.688h10.29a1 1 0 0 0 1-.85l1.38-9a1.001 1.001 0 0 0-1-1.15h-5.671a1 1 0 0 1-1-1V4.03c0-.56-.454-1.014-1.014-1.014h-.131Zm-5.855 17.97v-9h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2Zm.475-11 1.011-1.463a8.4 8.4 0 0 0 1.49-4.665 2.88 2.88 0 0 1 2.88-2.842h.13A3.013 3.013 0 0 1 15.16 4.03v3.955h4.655a3 3 0 0 1 2.993 3.45l-1.38 9a3.002 3.002 0 0 1-2.994 2.55H4.16a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h2.475Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "ThumbsupOutlined"
      }
    }));
  });
  require.d(exports, {
    ThumbsUpOutlined: function () {
      return s;
    }
  });
}