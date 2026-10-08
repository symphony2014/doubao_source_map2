// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ChatOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 466277
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var c = ["prefixId"];
  function u(e) {
    e.prefixId;
    var n = objectOmitHelper_1.omitWithSymbols(e, c);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, n), reactCoreLibraryReexport.createElement("path", {
      d: "M9 9h7a1.001 1.001 0 0 1 0 2H9.02C8.398 11 8 10.5 8 10a1 1 0 0 1 1-1Zm0 4h3.988A1.001 1.001 0 1 1 13 15H9a1 1 0 0 1-1-1 1 1 0 0 1 1-1Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "m3.391 20.732 1.055-1.508c-1.703-1.75-2.791-4.071-2.93-6.637-.01-.194-.016-.39-.016-.587 0-5.799 4.837-10.5 10.803-10.5a11.477 11.477 0 0 1 .197 0c2.611 0 5 .953 6.836 2.53A10.513 10.513 0 0 1 22.5 8.525c.022.06.5 2.042.5 3.475 0 5.375-4.038 9.806-9.246 10.426h-.002c-.41.049-.828.074-1.252.074h-.203c-.203 0-.475-.002-.53 0H4.353c-.934 0-1.488-1.016-.963-1.768Zm8.37-.233h.317l.422.001A8.5 8.5 0 0 0 21 12c0-.537-.094-1.251-.21-1.9a20.2 20.2 0 0 0-.202-.98 8.52 8.52 0 0 0-2.533-3.554l-.01-.01-.011-.008A8.46 8.46 0 0 0 12.42 3.5h-.118C7.387 3.5 3.5 7.359 3.5 12c0 .16.005.317.013.474v.006c.111 2.057.983 3.927 2.366 5.349l1.153 1.185L5.994 20.5h5.768Zm8.812-11.44.001.004a.624.624 0 0 1-.001-.004Z",
      fill: "currentColor"
    }));
  }
  var s = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: n,
      svgProps: {
        "data-icon": "ChatOutlined"
      }
    }));
  });
  require.d(exports, {
    ChatOutlinedIcon: function () {
      return s;
    }
  });
}