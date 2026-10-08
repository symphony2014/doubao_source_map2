// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PolishOutlinedIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 101785
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
      d: "M10.003 3.26c.802-1.68 3.192-1.68 3.994 0l1.84 3.857 4.237.558c1.635.216 2.4 2.024 1.616 3.325h-3.097l1.192-1.131-4.237-.559a2.212 2.212 0 0 1-1.707-1.24L12 4.211 10.16 8.07a2.212 2.212 0 0 1-1.709 1.24l-4.237.559 3.1 2.942c.543.515.788 1.27.652 2.007l-.779 4.203L10 17.495v2.517l-1.756.953c-1.636.887-3.57-.518-3.23-2.347l.777-4.203-3.1-2.942c-1.349-1.281-.61-3.555 1.235-3.798l4.237-.558 1.84-3.857Zm12.447 9.79a1.5 1.5 0 0 0-2.121 0l-1.061 1.06 2.121 2.122 1.06-1.06a1.5 1.5 0 0 0 0-2.122Zm-7.103 9.225 4.982-4.982-2.122-2.121-4.993 4.993c-.202.202-.337.46-.387.741l-.336 1.882a.17.17 0 0 0 .195.197l1.891-.314c.292-.049.56-.187.77-.396Z",
      fill: "currentColor"
    }));
  }
  var l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: u
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "PolishOutlined"
      }
    }));
  });
  require.d(exports, {
    PolishOutlinedIcon: function () {
      return l;
    }
  });
}