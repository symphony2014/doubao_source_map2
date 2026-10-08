// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isArrayLikeCheck'
// - Resolved require(685204) to 'is-array-like-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 478675
         */
module.exports = function (module, exports, require) {
  var isArrayLikeCheck = require("is-array-like-check") /*id: 685204*/;
  var r = Array.prototype.concat;
  var o = Array.prototype.slice;
  var a = module.exports = function (t) {
    var e = [];
    var n = 0;
    var a = t.length;
    for (; n < a; n++) {
      var s = t[n];
      if (isArrayLikeCheck(s)) {
        e = r.call(e, o.call(s));
      } else {
        e.push(s);
      }
    }
    return e;
  };
  a.wrap = function (t) {
    return function () {
      return t(a(arguments));
    };
  };
}