// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WikiVideoIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 411314
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
      d: "M15 1.483a.2.2 0 0 1 .341-.142l5.318 5.317a.2.2 0 0 1-.142.342H17a2 2 0 0 1-2-2V1.483Z",
      fill: u.c3
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M7 10.75a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 .75.75v.89l1.132-.636a.75.75 0 0 1 1.118.653v3.436a.75.75 0 0 1-1.118.653l-1.132-.637V16a.75.75 0 0 1-.75.75H7.75A.75.75 0 0 1 7 16v-5.25ZM9.25 13a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      fill: "#fff"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "WikiVideoColorful"
      }
    }));
  });
  require.d(exports, {
    WikiVideoIcon: function () {
      return s;
    }
  });
}