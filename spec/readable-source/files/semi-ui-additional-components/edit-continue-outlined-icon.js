// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'EditContinueOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 226096
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var s = ["prefixId"];
  function u(e) {
    e.prefixId;
    var t = objectOmitHelper_1.omitWithSymbols(e, s);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t), reactCoreLibraryReexport.createElement("path", {
      d: "M9.314 18.004H5.5a1 1 0 0 1-1-1V13.19L15.108 2.5l-.003-.003.705-.705a1 1 0 0 1 1.414 0l3.436 3.454a1 1 0 0 1-.002 1.413L9.315 18.004Zm9.197-12.082-2.025-2.036-1.704 1.736 2.015 2.015 1.714-1.715Zm-3.127 3.13L13.381 7.05l-6.85 6.984 1.935 1.938h.003l6.913-6.92ZM5.5 21a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
      fill: "currentColor"
    }));
  }
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "EditContinueOutlined"
      }
    }));
  });
  require.d(exports, {
    EditContinueOutlinedIcon: function () {
      return l;
    }
  });
}