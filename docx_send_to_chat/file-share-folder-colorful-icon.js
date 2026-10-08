// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FileShareFolderIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 876040
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
        c1: "#25B0E7",
        c3: "#1295CA"
      },
      dark: {
        c1: "#0D9ACE",
        c3: "#1A7FAB"
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
      d: "M8.94 10.478c.101-.595.56-.978 1.125-.978.564 0 1.009.447 1.123.978a3.76 3.76 0 0 1 0 1.53c-.047.239-.255.674-.255.674s-.22.5-.129.842c.067.253.208.332.533.514.114.063.25.14.414.24.367.226.65.447.841.62.142-.09.31-.185.502-.275.687-.322.726-.524.751-.654l.002-.008c.025-.13-.001-.353-.127-.615a2.97 2.97 0 0 1-.191-.54s-.115-.748-.028-1.224c.086-.475.475-.782.952-.782s.854.358.95.782a2.84 2.84 0 0 1 0 1.224c-.04.191-.216.54-.216.54s-.185.4-.108.673c.056.203.175.266.45.411.097.051.212.112.35.193.534.31.858.61.941.724l.023.03c.08.106.173.23.153.394-.022.18-.26.229-.26.229h-9.44c-.1 0-.23-.01-.286-.286-.056-.276.179-.53.179-.53s.443-.496 1.27-.906c.811-.402.858-.655.888-.817l.002-.01c.03-.162-.002-.44-.15-.769-.15-.328-.226-.674-.226-.674s-.136-.936-.034-1.53Z",
      fill: "#fff"
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
        "data-icon": "FileSharefolderColorful"
      }
    }));
  });
  require.d(exports, {
    FileShareFolderIcon: function () {
      return s;
    }
  });
}