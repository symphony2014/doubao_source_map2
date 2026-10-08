// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LanguageOutlined'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 285685
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function s(e) {
    e.prefixId;
    var r = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, r), reactCoreLibraryReexport.createElement("path", {
      d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM8.66 3.64A9.009 9.009 0 0 0 3.054 11h3.964c.015-3.2.981-6 1.64-7.36ZM20.944 11a9.009 9.009 0 0 0-5.604-7.36C16 5 16.966 8.2 16.98 11h3.964ZM12 3c-1.5 0-3 4.5-2.98 8h5.96C15 7.5 13.5 3 12 3Zm3.34 17.36A9.009 9.009 0 0 0 20.946 13h-3.964c-.015 3.2-.981 6-1.64 7.36ZM3.056 13a9.009 9.009 0 0 0 5.604 7.36C8 19 7.034 15.8 7.02 13H3.055ZM12 21c1.5 0 3-4.5 2.98-8H9.02C9 16.5 10.5 21 12 21Z",
      fill: "currentColor"
    }));
  }
  var d = reactCoreLibraryReexport.forwardRef(function (e, r) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: s
    }, e, {
      ref: r,
      svgProps: {
        "data-icon": "LanguageOutlined"
      }
    }));
  });
  require.d(exports, {
    LanguageOutlined: function () {
      return d;
    }
  });
}