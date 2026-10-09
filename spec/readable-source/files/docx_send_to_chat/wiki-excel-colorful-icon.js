// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WikiExcelColorfulIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 569662
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
        c1: "#35BD4B",
        c3: 0.8,
        c4: "#32A645"
      },
      dark: {
        c1: "#419E34",
        c3: 0.7,
        c4: "#2F7526"
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
      opacity: u.c3,
      d: "M15 1.483a.2.2 0 0 1 .341-.142L20.66 6.66a.2.2 0 0 1-.142.341H17a2 2 0 0 1-2-2V1.483Z",
      fill: u.c4
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M8.547 9.91h1.091c.049 0 .094.023.122.063l2.098 3.041 2.11-3.041a.147.147 0 0 1 .121-.064h1.092a.147.147 0 0 1 .12.233l-2.733 3.834 2.95 4.155a.147.147 0 0 1-.12.233h-1.092a.147.147 0 0 1-.121-.064l-2.327-3.363L9.543 18.3a.147.147 0 0 1-.122.064H8.33a.147.147 0 0 1-.12-.232l2.928-4.156-2.71-3.835a.147.147 0 0 1 .12-.232Z",
      fill: "#fff"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "WikiExcelColorful"
      }
    }));
  });
  require.d(exports, {
    WikiExcelColorfulIcon: function () {
      return s;
    }
  });
}