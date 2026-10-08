// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LaserOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 274222
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
      d: "M15.304 16.631a2.1 2.1 0 0 1 1.328-1.328l3.953-1.318-10.89-4.29 4.29 10.89 1.319-3.954ZM9.359 7.413l13.24 5.216c1.304.514 1.254 2.376-.076 2.819L17.264 17.2a.1.1 0 0 0-.063.063l-1.753 5.26c-.443 1.329-2.305 1.378-2.819.075L7.414 9.359c-.481-1.22.725-2.426 1.945-1.946Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "m10.825 6.015 2.425.943a5.501 5.501 0 1 0-6.299 6.275l-.947-2.437a3.5 3.5 0 1 1 4.821-4.781Z",
      fill: "currentColor"
    }));
  }
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "LaserOutlined"
      }
    }));
  });
  require.d(exports, {
    LaserOutlinedIcon: function () {
      return l;
    }
  });
}