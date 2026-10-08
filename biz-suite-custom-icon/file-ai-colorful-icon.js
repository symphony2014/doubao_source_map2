// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FileAiColorfulIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 311907
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
        c3: 0.5,
        c4: "#C25705"
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
      d: "m8.061 17.956.755-2.047h3.057l.754 2.046c.03.082.106.136.19.136h.858a.2.2 0 0 0 .075-.015.21.21 0 0 0 .116-.27l-2.858-7.491a.204.204 0 0 0-.19-.133H9.88a.204.204 0 0 0-.19.133l-2.858 7.491a.212.212 0 0 0-.014.076c0 .115.092.209.205.209h.847a.204.204 0 0 0 .191-.136Zm3.436-3.138H9.192l1.161-3 1.144 3Zm3.917-1.954a.5.5 0 0 1 .5-.5h.228a.5.5 0 0 1 .5.5v.227a.5.5 0 0 1-.5.5h-.228a.5.5 0 0 1-.5-.5v-.227Zm.5 1.409a.5.5 0 0 0-.5.5v2.818a.5.5 0 0 0 .5.5h.228a.5.5 0 0 0 .5-.5v-2.819a.5.5 0 0 0-.5-.5h-.228Z",
      fill: "#fff"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "FileAiColorful"
      }
    }));
  });
  require.d(exports, {
    FileAiColorfulIcon: function () {
      return s;
    }
  });
}