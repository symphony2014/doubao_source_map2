// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cn' to 'mergeClassNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 67381
         */
module.exports = function (module, exports, require) {
  var classNamesUtil = require("class-names-util") /*id: 953283*/;
  var classNameMerger = require("class-name-merger") /*id: 323366*/;
  function o() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return classNameMerger.mergeClassNames(classNamesUtil.classNames(t));
  }
  require.d(exports, {
    mergeClassNames: function () {
      return o;
    }
  });
}