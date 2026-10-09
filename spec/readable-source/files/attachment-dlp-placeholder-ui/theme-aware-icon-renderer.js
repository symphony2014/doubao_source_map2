// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'svgIconComponent'
// - Resolved require(445488) to 'svg-icon-component'
// - Renamed variable 'l' to 'reactSvgIcon_1'
// - Resolved require(81145) to 'react-svg-icon_1'
// - Renamed variable 'r' to 'illustrationThemeProvider'
// - Resolved require(633715) to 'illustration-theme-provider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89490.4bb32914.js
         * chunkId: 89490
         * moduleId: 240962
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var svgIconComponent = require("svg-icon-component") /*id: 445488*/;
  var reactSvgIcon_1 = require("react-svg-icon_1") /*id: 81145*/;
  var illustrationThemeProvider = require("illustration-theme-provider") /*id: 633715*/;
  var i = function (e) {
    if (e && e.__esModule) {
      return e;
    }
    var t = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (c) {
        if (c !== "default") {
          var n = Object.getOwnPropertyDescriptor(e, c);
          Object.defineProperty(t, c, n.get ? n : {
            enumerable: true,
            get: function () {
              return e[c];
            }
          });
        }
      });
    }
    t.default = e;
    return Object.freeze(t);
  }(reactCoreLibraryReexport);
  exports.default = function (e) {
    if (illustrationThemeProvider.useIllustrationTheme() === "light") {
      return i.createElement(svgIconComponent.default, {
        ...e
      });
    } else {
      return i.createElement(reactSvgIcon_1.default, {
        ...e
      });
    }
  };
}