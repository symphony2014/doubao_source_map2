// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cn' to 'mergeClassNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50161.8780fb41.js
         * chunkId: 50161
         * moduleId: 975716
         */
module.exports = function (module, exports, require) {
  var classNameMerger = require("class-name-merger") /*id: 323366*/;
  var classNamesUtil = require("class-names-util") /*id: 953283*/;
  function a() {
    var e = arguments.length;
    var t = Array(e);
    var i = 0;
    for (; i < e; i++) {
      t[i] = arguments[i];
    }
    return classNameMerger.mergeClassNames(classNamesUtil.classNames(t));
  }
  require.d(exports, {
    mergeClassNames: function () {
      return a;
    }
  });
}