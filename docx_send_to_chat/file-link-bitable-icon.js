// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FileLinkBitableIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 968947
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function s(e) {
    e.prefixId;
    var n = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n), reactCoreLibraryReexport.createElement("path", {
      d: "M16.595 3H4v14.823c0 .814.337 1.613.966 2.216a3.53 3.53 0 0 0 2.44.961H20V6.176a3.07 3.07 0 0 0-.966-2.215A3.53 3.53 0 0 0 16.593 3ZM2 2a1 1 0 0 1 1-1h13.595a5.53 5.53 0 0 1 3.822 1.516A5.068 5.068 0 0 1 22 6.176V22a1 1 0 0 1-1 1H7.405a5.529 5.529 0 0 1-3.822-1.516A5.068 5.068 0 0 1 2 17.824V2Zm13.74 10L12 8.26l2.275-1.76L17.5 9.725 15.74 12ZM12 15.735 15.74 12l1.76 2.275-3.225 3.225L12 15.735ZM8.26 12 6.5 9.725 9.725 6.5 12 8.26 8.26 12Zm0 0L6.5 14.275 9.725 17.5 12 15.735 8.26 12Z",
      fill: "currentColor"
    }));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: s
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "FileLinkBitableOutlined"
      }
    }));
  });
  require.d(exports, {
    FileLinkBitableIcon: function () {
      return u;
    }
  });
}