// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'AddexpandOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 848497
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
      d: "M2 3c0-.552.497-1 1.111-1H20.89c.613 0 1.11.448 1.11 1s-.497 1-1.111 1H3.11C2.497 4 2 3.552 2 3Zm0 6c0-.552.497-1 1.111-1H20.89c.613 0 1.11.448 1.11 1s-.497 1-1.111 1H3.11C2.497 10 2 9.552 2 9Zm0 6c0-.552.497-1 1.111-1H20.89c.614 0 1.111.448 1.111 1s-.497 1-1.111 1H3.11C2.497 16 2 15.552 2 15Zm0 6c0-.552.497-1 1.111-1H13c.614 0 1.111.448 1.111 1s-.497 1-1.111 1H3.111C2.497 22 2 21.552 2 21Z",
      fill: "currentColor"
    }));
  }
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "AddexpandOutlined"
      }
    }));
  });
  require.d(exports, {
    AddexpandOutlinedIcon: function () {
      return l;
    }
  });
}