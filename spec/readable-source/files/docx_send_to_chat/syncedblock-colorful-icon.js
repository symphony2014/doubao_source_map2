// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SyncedblockIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 987781
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var o = ["prefixId"];
  function f(e) {
    var a = e.prefixId;
    var n = objectOmitHelper_1.omitWithSymbols(e, o);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n), reactCoreLibraryReexport.createElement("path", {
      d: "M1.5 9.5c0-3.771 0-5.657 1.172-6.828C3.843 1.5 5.729 1.5 9.5 1.5h5c3.771 0 5.657 0 6.828 1.172C22.5 3.843 22.5 5.729 22.5 9.5v5c0 3.771 0 5.657-1.172 6.828C20.157 22.5 18.271 22.5 14.5 22.5h-5c-3.771 0-5.657 0-6.828-1.172C1.5 20.157 1.5 18.271 1.5 14.5v-5Z",
      fill: `url(#${a}__icon_syncedblock_colorful__a)`
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M13.166 7.917H6.75v4.666H8.5v1.167H6.75a1.167 1.167 0 0 1-1.167-1.167V7.917c0-.645.522-1.167 1.167-1.167h6.416c.645 0 1.167.522 1.167 1.167v4.666c0 .645-.522 1.167-1.167 1.167H12v-1.167h1.166V7.917Z",
      fill: "#fff"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M10.833 10.25H12v1.167h-1.167v4.666h6.417v-4.666H15.5V10.25h1.75c.644 0 1.166.522 1.166 1.167v4.666c0 .645-.522 1.167-1.166 1.167h-6.417a1.167 1.167 0 0 1-1.167-1.167v-4.666c0-.645.523-1.167 1.167-1.167Z",
      fill: "#fff"
    }), reactCoreLibraryReexport.createElement("defs", null, reactCoreLibraryReexport.createElement("linearGradient", {
      id: `${a}__icon_syncedblock_colorful__a`,
      x1: 2,
      y1: 2,
      x2: 24.76,
      y2: 18.505,
      gradientUnits: "userSpaceOnUse"
    }, reactCoreLibraryReexport.createElement("stop", {
      stopColor: "#1456F0"
    }), reactCoreLibraryReexport.createElement("stop", {
      offset: 0.547,
      stopColor: "#5083FB"
    }), reactCoreLibraryReexport.createElement("stop", {
      offset: 1,
      stopColor: "#3EC3F7"
    }))));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, a) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: f
    }, e, {
      ref: a,
      svgProps: {
        "data-icon": "SyncedblockColorful"
      }
    }));
  });
  require.d(exports, {
    SyncedblockIcon: function () {
      return u;
    }
  });
}