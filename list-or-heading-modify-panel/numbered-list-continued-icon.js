// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ListContinuedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: list-or-heading-modify-panel.840ddcd1.js
         * chunkId: 87195
         * moduleId: 497705
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function l(e) {
    e.prefixId;
    var r = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, r), reactCoreLibraryReexport.createElement("path", {
      d: "M3.6 8.5V3.59l-1.137.682a.9.9 0 1 1-.926-1.544l2.046-1.227A1.2 1.2 0 0 1 5.4 2.53V8.5a.9.9 0 1 1-1.8 0Zm5.14-3.932a.5.5 0 0 0 0 .864l4.508 2.63A.5.5 0 0 0 14 7.628V6h5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8a1 1 0 1 0 0 2h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-5V2.37a.5.5 0 0 0-.752-.431L8.74 4.568ZM2.177 15.494c1.935-2.258 5.58-.279 4.741 2.573a1.568 1.568 0 0 1-.472.738L4.396 20.6H6.5a.9.9 0 0 1 0 1.8H2.193c-.898 0-1.316-1.113-.64-1.704l3.655-3.199c.222-.957-1.006-1.6-1.664-.832l-.36.42a.9.9 0 0 1-1.367-1.17l.36-.421Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, r) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: l
    }, e, {
      ref: r,
      svgProps: {
        "data-icon": "NumberedListContinuedOutlined"
      }
    }));
  });
  require.d(exports, {
    ListContinuedIcon: function () {
      return s;
    }
  });
}