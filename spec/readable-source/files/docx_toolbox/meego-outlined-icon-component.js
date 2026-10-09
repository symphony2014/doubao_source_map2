// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'MeegoOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 265198
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function u(e) {
    e.prefixId;
    var n = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n), reactCoreLibraryReexport.createElement("path", {
      d: "M12.362 6H21v2.442c0 .015-.025.093-.14.093h-8.498l-1.297-1.268L12.362 6ZM11.2 4.34l-.017.016-2.979 2.911 2.974 2.908c.247.24.566.36.892.36h8.79c1.183 0 2.14-.937 2.14-2.093V4H12.07c-.31 0-.623.12-.87.34ZM4.34 6.285l1.004.982-1.005.982-1.004-.982 1.004-.982Zm.89-1.925a1.291 1.291 0 0 0-1.77-.01l-.009.008-2.084 2.038a1.221 1.221 0 0 0-.012 1.732l.008.01 2.085 2.037a1.291 1.291 0 0 0 1.772.012l.009-.008 2.976-2.91L5.231 4.36Zm7.132 11.103-1.297 1.267 1.297 1.267h8.497c.116 0 .141-.077.141-.093v-2.441h-8.638Zm-1.162-1.66c.247-.22.56-.34.87-.34H23v4.441c0 1.157-.957 2.093-2.14 2.093h-8.79c-.325 0-.645-.119-.892-.36L8.204 16.73l2.979-2.912.017-.015Zm-6.86 1.945 1.004.982-1.005.982-1.004-.982 1.004-.982Zm.891-1.925a1.291 1.291 0 0 0-1.772-.012l-.009.009-2.084 2.038c-.472.46-.5 1.23-.012 1.732l.008.009 2.085 2.038a1.291 1.291 0 0 0 1.772.012l.009-.009 2.976-2.91-2.973-2.907Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "MeegoOutlined"
      }
    }));
  });
  require.d(exports, {
    MeegoOutlinedIcon: function () {
      return s;
    }
  });
}