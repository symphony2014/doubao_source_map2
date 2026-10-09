// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WikiSheetColorfulIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 628234
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
        c1: "#35BD4B"
      },
      dark: {
        c1: "#419E34"
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
      d: "M2.5 2.5a1 1 0 0 1 1-1h12.865a5.24 5.24 0 0 1 3.631 1.447A4.848 4.848 0 0 1 21.5 6.441V21.5a1 1 0 0 1-1 1H7.635a5.24 5.24 0 0 1-3.63-1.447A4.849 4.849 0 0 1 2.5 17.559V2.5Z",
      fill: u.c1
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M6.75 6.75h8.114a2.386 2.386 0 0 1 2.386 2.386v8.114H9.136a2.386 2.386 0 0 1-2.386-2.386V6.75Zm5.927 1.432v3.102h3.141V9.136a.955.955 0 0 0-.954-.954h-2.187Zm-1.432 0H8.182v3.102h3.063V8.182Zm-3.063 4.534v2.148c0 .527.427.954.954.954h2.109v-3.102H8.182Zm4.495 3.102h3.141v-3.102h-3.141v3.102Z",
      fill: "#fff"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "WikiSheetColorful"
      }
    }));
  });
  require.d(exports, {
    WikiSheetColorfulIcon: function () {
      return s;
    }
  });
}