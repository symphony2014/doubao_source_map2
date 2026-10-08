// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ChangeTodoOutlined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 157925
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
      d: "M14.5 4.198a.8.8 0 0 1 0 1.302l-3.235 3.151A.8.8 0 0 1 10 8.001V6H2a1 1 0 0 1 0-2h8V2a.8.8 0 0 1 1.265-.652L14.5 4.2Zm4.285 2.432a1 1 0 0 1 1.414 0l2.829 2.83a1 1 0 0 1 0 1.413L10.292 23.61a1 1 0 0 1-1.414 0L6.19 20.92a1.008 1.008 0 0 1-.158-.13l-.705-.704 4.243-4.243v.001l9.215-9.214Zm.707 2.122L8.171 20.073l1.414 1.415 11.321-11.322-1.414-1.414ZM8.156 14.43 4.69 10.964a1 1 0 0 0-1.414 0L.447 13.793a1 1 0 0 0 0 1.414l3.466 3.466 1.414-1.414-2.758-2.76 1.414-1.413 2.758 2.758 1.415-1.414Z",
      fill: "currentColor"
    }));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: s
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "ChangeTodoOutlined"
      }
    }));
  });
  require.d(exports, {
    ChangeTodoOutlined: function () {
      return u;
    }
  });
}