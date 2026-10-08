// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'objectToString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 194580
         */
module.exports = function (module, exports, require) {
  var n = Object.prototype.toString;
  function o(t) {
    if (t == null) {
      if (t === undefined) {
        return "[object Undefined]";
      } else {
        return "[object Null]";
      }
    } else {
      return n.call(t);
    }
  }
  require.d(exports, {
    objectToString: function () {
      return o;
    }
  });
}