// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ExtractKeywordsOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 291976
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var s = ["prefixId"];
  function u(e) {
    e.prefixId;
    var t = objectOmitHelper_1.omitWithSymbols(e, s);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t), reactCoreLibraryReexport.createElement("path", {
      d: "M16.473 17.887A9.46 9.46 0 0 1 10.5 20a9.5 9.5 0 1 1 9.5-9.5 9.46 9.46 0 0 1-2.113 5.973l3.773 3.773a.996.996 0 0 1-.007 1.407.996.996 0 0 1-1.407.007l-3.773-3.773ZM18 10.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "m8.367 8.305.208-1.246a.687.687 0 0 1 .688-.559c.428 0 .755.364.688.766l-.173 1.039h2.185l.207-1.246a.687.687 0 0 1 .689-.559c.428 0 .755.364.688.766l-.173 1.039h.929c.428 0 .755.364.688.766a.687.687 0 0 1-.688.559h-1.15l-.294 1.767h.929c.428 0 .755.364.688.766a.687.687 0 0 1-.688.56h-1.15l-.203 1.218a.687.687 0 0 1-.688.559c-.429 0-.756-.364-.689-.766l.169-1.012H9.043l-.203 1.219a.687.687 0 0 1-.689.559c-.428 0-.755-.364-.688-.766l.168-1.012h-.934c-.428 0-.755-.364-.688-.766a.687.687 0 0 1 .688-.559h1.155l.294-1.767h-.934c-.428 0-.755-.364-.688-.766a.687.687 0 0 1 .688-.56h1.155Zm3.08 3.092.295-1.767H9.558l-.295 1.767h2.185Z",
      fill: "currentColor"
    }));
  }
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "ExtractKeywordsOutlined"
      }
    }));
  });
  require.d(exports, {
    ExtractKeywordsOutlinedIcon: function () {
      return l;
    }
  });
}