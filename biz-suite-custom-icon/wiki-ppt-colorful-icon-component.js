// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WikiPptColorfulIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 641261
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
        c1: "#FF811A",
        c3: 0.8,
        c4: "#ED6D0C"
      },
      dark: {
        c1: "#F3871B",
        c3: 0.7,
        c4: "#B85E1A"
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
      d: "M10.383 18.495V14.91h1.702c.409 0 .816-.036 1.22-.108a3.484 3.484 0 0 0 1.11-.386 2.3 2.3 0 0 0 .814-.77c.212-.329.316-.742.316-1.236a3.3 3.3 0 0 0-.132-.937 1.95 1.95 0 0 0-.478-.815c-.23-.236-.538-.42-.923-.552-.381-.131-.86-.196-1.435-.196H9.414a.141.141 0 0 0-.142.141v8.445c0 .078.064.142.142.142h.828a.141.141 0 0 0 .14-.142Zm2.735-4.622a6.67 6.67 0 0 1-1.01.069h-1.725v-3.066h1.966c.746 0 1.282.13 1.608.38.318.245.478.605.478 1.094 0 .339-.054.608-.158.809-.104.2-.25.355-.44.47-.194.119-.433.2-.719.244Z",
      fill: "#fff"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "WikiPptColorful"
      }
    }));
  });
  require.d(exports, {
    WikiPptColorfulIcon: function () {
      return s;
    }
  });
}