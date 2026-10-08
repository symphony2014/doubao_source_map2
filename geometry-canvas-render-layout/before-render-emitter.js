// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'lk' to 'onBeforeRender'
// - Renamed export 'ZP' to 'beforeRenderEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 64749
         */
module.exports = function (module, exports, require) {
  var i = new (require("event-emitter_1") /*id: 697754*/.EventEmitter)();
  function r(t) {
    i.on("beforerender", t);
  }
  exports.beforeRenderEmitter = i;
  require.d(exports, {
    onBeforeRender: function () {
      return r;
    }
  });
}