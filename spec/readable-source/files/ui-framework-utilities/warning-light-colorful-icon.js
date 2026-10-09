// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WarningLightIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 665192
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var themeContextProvider = require("theme-context-provider") /*id: 274284*/;
  var c = ["prefixId"];
  function l(e) {
    e.prefixId;
    var n = objectOmitHelper_1.omitWithSymbols(e, c);
    var t = themeContextProvider.useTheme();
    var a = {
      light: {
        c1: "#F80"
      },
      dark: {
        c1: "#FF9E2E"
      }
    };
    var l = a[t] || a.light;
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n), reactCoreLibraryReexport.createElement("path", {
      d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Z",
      fill: l.c1
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M11.5 7a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1Zm0 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z",
      fill: "#fff"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: l
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "WarningLightColorful"
      }
    }));
  });
  require.d(exports, {
    WarningLightIcon: function () {
      return s;
    }
  });
}