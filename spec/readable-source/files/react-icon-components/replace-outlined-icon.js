// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ReplaceOutlined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 351256
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function s(e) {
    e.prefixId;
    var r = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, r), reactCoreLibraryReexport.createElement("path", {
      d: "M17.074 18.185A8 8 0 0 1 4.091 10.79l.941.557a.5.5 0 0 0 .743-.536l-.718-3.345a.5.5 0 0 0-.633-.374l-3.277.982a.5.5 0 0 0-.111.91l1.228.725A10.03 10.03 0 0 0 2 12c0 5.523 4.477 10 10 10a9.966 9.966 0 0 0 6.9-2.761l-1.826-1.054ZM7.233 5.575a8 8 0 0 1 12.724 7.264l-1.097-.624a.5.5 0 0 0-.735.547l.776 3.333a.5.5 0 0 0 .638.363l3.26-1.036a.5.5 0 0 0 .096-.911l-1.075-.612c.118-.615.18-1.25.18-1.899 0-5.523-4.477-10-10-10a9.962 9.962 0 0 0-6.62 2.505l1.853 1.07Z",
      fill: "currentColor"
    }));
  }
  var d = reactCoreLibraryReexport.forwardRef(function (e, r) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: s
    }, e, {
      ref: r,
      svgProps: {
        "data-icon": "ReplaceOutlined"
      }
    }));
  });
  require.d(exports, {
    ReplaceOutlined: function () {
      return d;
    }
  });
}