// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WikiSlidesColorfulIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 356436
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var o = ["prefixId"];
  function f(e) {
    e.prefixId;
    var a = objectOmitHelper_1.omitWithSymbols(e, o);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, a), reactCoreLibraryReexport.createElement("path", {
      d: "M2.5 2.498c0-.552.446-.998.998-.998h12.865c1.365 0 2.669.516 3.632 1.444A4.86 4.86 0 0 1 21.5 6.437v15.065a.997.997 0 0 1-.998.998H7.637a5.227 5.227 0 0 1-3.632-1.444A4.861 4.861 0 0 1 2.5 17.563V2.498Z",
      fill: "#ED6D0C"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M11.88 12.28h4.278l-.009-.01h1.05c.254 0 .464.22.438.473a5.24 5.24 0 0 1-.184.928 5.767 5.767 0 0 1-6.606 4.05c-2.31-.42-4.165-2.292-4.576-4.601a5.755 5.755 0 0 1 4.217-6.615c.307-.079.613-.14.937-.167a.432.432 0 0 1 .455.438v5.504Zm-4.095.778a4.22 4.22 0 0 0 3.263 3.273l.01.008c2.178.447 4.129-.805 4.829-2.66h-4.961a.439.439 0 0 1-.438-.437V8.22c-1.872.682-3.15 2.642-2.703 4.838Z",
      fill: "#fff"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M14.093 6.417a6.272 6.272 0 0 1 3.509 3.666.441.441 0 0 1-.411.595h-3.71V6.82a.44.44 0 0 1 .612-.403Z",
      fill: "#fff"
    }));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: f
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "WikiSlidesColorful"
      }
    }));
  });
  require.d(exports, {
    WikiSlidesColorfulIcon: function () {
      return u;
    }
  });
}