// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'findObjectKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 284647
         */
module.exports = function (module, exports, require) {
  function r(e, n, i) {
    var r;
    i(e, function (e, i, o) {
      if (n(e, i, o)) {
        r = i;
        return false;
      }
    });
    return r;
  }
  var objectForeachHelper = require("object-foreach-helper") /*id: 629345*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  function l(e, n) {
    return r(e, objectMatcherFactory.createMatcher(n, 3), objectForeachHelper.createObjectForEach);
  }
  require.d(exports, {
    findObjectKey: function () {
      return l;
    }
  });
}