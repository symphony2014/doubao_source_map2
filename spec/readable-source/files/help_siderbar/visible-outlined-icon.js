// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'VisibleOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 698909
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var a = ["prefixId"];
  function c(e) {
    e.prefixId;
    var i = objectOmitHelper_1.omitWithSymbols(e, a);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, i), reactCoreLibraryReexport.createElement("path", {
      d: "M11.985 18.5c3.238 0 6.236-2.06 9.015-6.513C18.292 7.55 15.3 5.5 11.985 5.5 8.67 5.5 5.689 7.549 3 11.987c2.76 4.454 5.748 6.513 8.985 6.513ZM1.502 12.89a1.782 1.782 0 0 1 .023-1.838C4.428 6.017 7.915 3.5 11.984 3.5c4.086 0 7.594 2.538 10.523 7.614l.028.048c.296.519.294 1.16-.01 1.675-3.006 5.108-6.52 7.663-10.541 7.663-4.007 0-7.501-2.537-10.482-7.61ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      fill: "currentColor"
    }));
  }
  var d = reactCoreLibraryReexport.forwardRef(function (e, i) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: c
    }, e, {
      ref: i,
      svgProps: {
        "data-icon": "VisibleOutlined"
      }
    }));
  });
  require.d(exports, {
    VisibleOutlinedIcon: function () {
      return d;
    }
  });
}