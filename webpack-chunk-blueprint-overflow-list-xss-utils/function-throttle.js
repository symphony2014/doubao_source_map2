// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 738638
         */
module.exports = function (module, exports, require) {
  var n = Date.now;
  exports.throttle = function (e) {
    var t = 0;
    var r = 0;
    return function () {
      var i = n();
      var o = 16 - (i - r);
      r = i;
      if (o > 0) {
        if (++t >= 800) {
          return arguments[0];
        }
      } else {
        t = 0;
      }
      return e.apply(undefined, arguments);
    };
  };
}