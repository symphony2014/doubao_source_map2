// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'reactSvgIconComponent'
// - Resolved require(977677) to 'react-svg-icon-component'
// - Renamed variable 'i' to 'reactSvgIcon'
// - Resolved require(193084) to 'react-svg-icon'
// - Renamed variable 'a' to 'illustrationThemeProvider'
// - Resolved require(633715) to 'illustration-theme-provider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46126.e68e9438.js
         * chunkId: 46126
         * moduleId: 183258
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSvgIconComponent = require("react-svg-icon-component") /*id: 977677*/;
  var reactSvgIcon = require("react-svg-icon") /*id: 193084*/;
  var illustrationThemeProvider = require("illustration-theme-provider") /*id: 633715*/;
  var c = function (e) {
    if (e && e.__esModule) {
      return e;
    }
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (t) {
        if (t !== "default") {
          var r = Object.getOwnPropertyDescriptor(e, t);
          Object.defineProperty(n, t, r.get ? r : {
            enumerable: true,
            get: function () {
              return e[t];
            }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }(reactCoreLibraryReexport);
  exports.default = function (e) {
    if (illustrationThemeProvider.useIllustrationTheme() === "light") {
      return c.createElement(reactSvgIconComponent.default, {
        ...e
      });
    } else {
      return c.createElement(reactSvgIcon.default, {
        ...e
      });
    }
  };
}