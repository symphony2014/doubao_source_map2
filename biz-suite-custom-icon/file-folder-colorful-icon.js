// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FileFolderColorfulIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 479559
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
        c1: "#FFC60A",
        c3: "#FF9D4C"
      },
      dark: {
        c1: "#F0B622",
        c3: "#B85E1A"
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
      d: "M1 6h22v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6Z",
      fill: u.c1
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M1 4a2 2 0 0 1 2-2h5.275a4 4 0 0 1 1.404.255l2.642.99a4 4 0 0 0 1.404.255H21a2 2 0 0 1 2 2V6H1V4Z",
      fill: u.c3
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "FileFolderColorful"
      }
    }));
  });
  require.d(exports, {
    FileFolderColorfulIcon: function () {
      return s;
    }
  });
}