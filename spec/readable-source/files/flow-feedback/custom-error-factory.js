// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'createErrorClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 205452
         */
module.exports = function (module, exports, require) {
  function i(e) {
    var t = e(function (e) {
      Error.call(e);
      e.stack = Error().stack;
    });
    t.prototype = Object.create(Error.prototype);
    t.prototype.constructor = t;
    return t;
  }
  require.d(exports, {
    createErrorClass: function () {
      return i;
    }
  });
}