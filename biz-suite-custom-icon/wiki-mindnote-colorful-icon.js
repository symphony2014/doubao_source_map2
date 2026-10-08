// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WikiMindnoteIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 625619
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
        c1: "#25B0E7"
      },
      dark: {
        c1: "#0D9ACE"
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
      d: "M12.49 15.568a2.3 2.3 0 0 1-1.993-1.153l-1.598-2.78a.7.7 0 0 0-.607-.35H6.8a.7.7 0 1 0 0 1.4h1.087l1.396 2.428a3.7 3.7 0 0 0 3.208 1.855h3.764a.7.7 0 1 0 0-1.4H12.49Z",
      fill: "#fff"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M12.49 8.4a2.3 2.3 0 0 0-1.993 1.153l-1.598 2.78a.7.7 0 0 1-.607.35l-1.492.001a.7.7 0 1 1 0-1.4h1.087l1.396-2.429A3.7 3.7 0 0 1 12.491 7h3.764a.7.7 0 1 1 0 1.4H12.49Zm-.537 3.584a.7.7 0 0 1 .7-.7h3.6a.7.7 0 1 1 0 1.4h-3.6a.7.7 0 0 1-.7-.7Z",
      fill: "#fff"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "WikiMindnoteColorful"
      }
    }));
  });
  require.d(exports, {
    WikiMindnoteIcon: function () {
      return s;
    }
  });
}