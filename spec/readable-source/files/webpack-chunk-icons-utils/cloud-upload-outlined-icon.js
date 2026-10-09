// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CloudUploadOutlined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 935078
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
      d: "M20.984 10.521h2.003A9 9 0 0 0 5.444 8.204 6 6 0 0 0 7 20c2.438 0 7.327-.006 7.327-.006L12.41 18H7a4 4 0 0 1-1.04-7.864l1.048-.28.336-1.031a7 7 0 0 1 13.64 1.696Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "m21.143 16.557-1.164-1.164v5.671a1 1 0 1 1-2 0v-5.586L16.9 16.557a1 1 0 0 1-1.414-1.414l2.828-2.829a1 1 0 0 1 1.415 0l2.828 2.829a1 1 0 1 1-1.414 1.414Z",
      fill: "currentColor"
    }));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: c
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "CloudUploadOutlined"
      }
    }));
  });
  require.d(exports, {
    CloudUploadOutlined: function () {
      return u;
    }
  });
}