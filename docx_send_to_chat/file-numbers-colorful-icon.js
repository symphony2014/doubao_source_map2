// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FileNumbersColorfulIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 696692
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
        c3: 0.9,
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
      d: "M12.659 9.368a.25.25 0 0 0-.25.25v7.136c0 .139.112.25.25.25h1.136a.25.25 0 0 0 .25-.25V9.619a.25.25 0 0 0-.25-.25H12.66Zm2.455 1.909a.25.25 0 0 0-.25.25v5.228c0 .138.111.25.25.25h1.136a.25.25 0 0 0 .25-.25v-5.228a.25.25 0 0 0-.25-.25h-1.136Zm-5.16 2.159a.25.25 0 0 1 .25-.25h1.137a.25.25 0 0 1 .25.25v3.319a.25.25 0 0 1-.25.25h-1.136a.25.25 0 0 1-.25-.25v-3.319ZM7.75 15.095a.25.25 0 0 0-.25.25v1.41c0 .138.112.25.25.25h1.136a.25.25 0 0 0 .25-.25v-1.41a.25.25 0 0 0-.25-.25H7.75Zm-.66 2.978a.25.25 0 0 1 .25-.25h9.319a.25.25 0 0 1 .25.25v.045a.25.25 0 0 1-.25.25H7.341a.25.25 0 0 1-.25-.25v-.045Z",
      fill: "#fff"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "FileNumbersColorful"
      }
    }));
  });
  require.d(exports, {
    FileNumbersColorfulIcon: function () {
      return s;
    }
  });
}