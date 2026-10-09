// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 859920
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var s = ["prefixId"];
  function c(e) {
    e.prefixId;
    var t = objectOmitHelper_1.omitWithSymbols(e, s);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t), reactCoreLibraryReexport.createElement("path", {
      d: "M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M3 2.993C3 1.888 3.895 1 5 1h9.257a2 2 0 0 1 1.414.586l4.743 4.744A2 2 0 0 1 21 7.744V21c0 1.105-.894 2-1.998 2H4.996A1.99 1.99 0 0 1 3 21.009V2.993ZM14 3H5v18h14V8.02c-.48 0-2.69-.01-4.005-.016a1 1 0 0 1-.995-1V3Z",
      fill: "currentColor"
    }));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: c
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "DocOutlined"
      }
    }));
  });
  require.d(exports, {
    DocOutlinedIcon: function () {
      return u;
    }
  });
}