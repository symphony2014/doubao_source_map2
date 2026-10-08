// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'EffectsOutlined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 578204
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
      d: "m13.107 20.848 1.991-5.176a1 1 0 0 1 .574-.574l5.175-1.991a1 1 0 0 0 .271-1.71l-4.306-3.493a1 1 0 0 1-.369-.724l-.295-5.537a1 1 0 0 0-1.542-.786L9.953 3.873A1 1 0 0 1 9.15 4L3.794 2.57a1 1 0 0 0-1.225 1.224L4 9.15a1 1 0 0 1-.127.802L.857 14.606a1 1 0 0 0 .786 1.543l5.537.294a1 1 0 0 1 .724.369l3.493 4.306a1 1 0 0 0 1.71-.27Zm1.34-13.561a3 3 0 0 0 1.105 2.17l2.964 2.404-3.562 1.37a3 3 0 0 0-1.722 1.723l-1.371 3.562-2.404-2.964a3 3 0 0 0-2.17-1.106l-3.811-.203 2.075-3.202a3 3 0 0 0 .381-2.406l-.984-3.687 3.687.985a3 3 0 0 0 2.406-.381l3.202-2.076.203 3.81Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "m16.714 16.74-.378 1.036 4.27 4.27a1 1 0 0 0 1.414-1.414l-4.27-4.27-1.036.378Z",
      fill: "currentColor"
    }));
  }
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "EffectsOutlined"
      }
    }));
  });
  require.d(exports, {
    EffectsOutlined: function () {
      return l;
    }
  });
}