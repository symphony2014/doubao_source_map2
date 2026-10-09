// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WikiZipColorfulIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 110724
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var themeContextProvider = require("theme-context-provider") /*id: 274284*/;
  var f = ["prefixId"];
  function u(e) {
    e.prefixId;
    var a = objectOmitHelper_1.omitWithSymbols(e, f);
    var n = themeContextProvider.useTheme();
    var l = {
      light: {
        c1: "#336DF4",
        c3: "#0442D2"
      },
      dark: {
        c1: "#4C88FF",
        c3: "#2662D9"
      }
    };
    var u = l[n] || l.light;
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, a), reactCoreLibraryReexport.createElement("path", {
      d: "M3 3a2 2 0 0 1 2-2h9.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3Z",
      fill: u.c1
    }), reactCoreLibraryReexport.createElement("path", {
      opacity: 0.7,
      d: "M15 1.483a.2.2 0 0 1 .341-.142L20.66 6.66a.2.2 0 0 1-.142.341H17a2 2 0 0 1-2-2V1.483Z",
      fill: u.c3
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M15.429 9.5c.315 0 .571.252.571.563v7.874a.567.567 0 0 1-.571.563H8.57a.567.567 0 0 1-.57-.563v-7.875c0-.31.256-.562.571-.562h6.858Zm-2.286 6.188h-2.286v1.968h2.286v-1.968Zm-.572.562v.65H11.43v-.65h1.142Zm.598-4.5H12v1.125h-1.143V14H12v1.125h1.17V14h-1.144v-1.125h1.143V11.75ZM12 10.625h-1.143v1.125H12v-1.125Z",
      fill: "#fff"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "WikiZipColorful"
      }
    }));
  });
  require.d(exports, {
    WikiZipColorfulIcon: function () {
      return s;
    }
  });
}