// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FileUnknowColorful'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 905930
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
        c0: {
          opacity: 0.9
        },
        c1: "#8F959E",
        c3: 0.6,
        c4: "#646A73"
      },
      dark: {
        c0: {},
        c1: "#757575",
        c3: 0.7,
        c4: "#5F5F5F"
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
      d: "M14.288 9.864c-.546-.517-1.262-.773-2.153-.773-1 0-1.784.32-2.353.974-.48.562-.74 1.1-.777 1.948l-.003.1a.248.248 0 0 0 .25.25h.59a.252.252 0 0 0 .252-.248l.002-.096c.03-.586.182-.893.455-1.234.344-.46.85-.685 1.543-.685.62 0 1.084.158 1.404.478.305.318.465.751.465 1.295 0 .37-.135.724-.408 1.075-.087.109-.213.238-.616.642-.638.557-1.032 1.011-1.24 1.457a2.55 2.55 0 0 0-.258 1.148v.282c0 .138.112.25.25.25h.605a.25.25 0 0 0 .25-.25v-.282c0-.354.087-.671.267-.98.136-.23.31-.411.612-.676.607-.55.944-.877 1.095-1.069a2.638 2.638 0 0 0 .547-1.625c0-.827-.26-1.49-.779-1.98Zm-2.583 7.954a.25.25 0 0 0-.25.25v.591c0 .138.112.25.25.25h.59a.25.25 0 0 0 .25-.25v-.59a.25.25 0 0 0-.25-.25h-.59Z",
      fill: "#fff"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "FileUnknowColorful"
      }
    }));
  });
  require.d(exports, {
    FileUnknowColorful: function () {
      return s;
    }
  });
}