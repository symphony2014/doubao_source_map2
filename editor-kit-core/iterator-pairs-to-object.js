// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'iteratorToObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 708592
         */
module.exports = function (module, exports, require) {
  var iteratorHelpers = require("iterator-helpers") /*id: 369701*/;
  function o(t) {
    var e;
    var r;
    var o = {};
    try {
      var i = iteratorHelpers.createIterator(t);
      var u = i.next();
      for (; !u.done; u = i.next()) {
        var a = u.value;
        o[a[0]] = a[1];
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (u && !u.done && (r = i.return)) {
          r.call(i);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    return o;
  }
  require.d(exports, {
    iteratorToObject: function () {
      return o;
    }
  });
}