// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'getObjectEntries'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 155854
         */
module.exports = function (module, exports, require) {
  var iteratorHelpers = require("iterator-helpers") /*id: 369701*/;
  function i(t) {
    var e;
    var n;
    var i = [];
    try {
      var o = iteratorHelpers.createIterator(Object.entries(t));
      var a = o.next();
      for (; !a.done; a = o.next()) {
        var s = iteratorHelpers.iterableToArray(a.value, 2);
        var l = s[0];
        var u = s[1];
        i.push([l, u]);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (a && !a.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    return i;
  }
  require.d(exports, {
    getObjectEntries: function () {
      return i;
    }
  });
}