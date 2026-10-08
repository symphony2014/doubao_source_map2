// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ViewVideoOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-paste-panel.dec4e4b1.js
         * chunkId: 42590
         * moduleId: 934101
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
      d: "M3 7.5h18c.552 0 1 .424 1 .948v7.104c0 .524-.448.948-1 .948H3c-.552 0-1-.424-1-.947V8.447c0-.524.448-.948 1-.948Zm1 2v5h16v-5H4ZM2.5 19h19c.275 0 .5.225.5.5v1c0 .275-.225.5-.5.5h-19a.501.501 0 0 1-.5-.5v-1c0-.275.225-.5.5-.5Zm0-16h19c.275 0 .5.225.5.5v1c0 .275-.225.5-.5.5h-19a.501.501 0 0 1-.5-.5v-1c0-.275.225-.5.5-.5Z",
      fill: "currentColor"
    }));
  }
  var u = reactCoreLibraryReexport.forwardRef(function (e, r) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: s
    }, e, {
      ref: r,
      svgProps: {
        "data-icon": "ViewVideoOutlined"
      }
    }));
  });
  require.d(exports, {
    ViewVideoOutlinedIcon: function () {
      return u;
    }
  });
}