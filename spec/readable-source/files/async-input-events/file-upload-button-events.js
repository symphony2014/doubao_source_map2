// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(814180) to 'listener-manager'
// - Updated imported property 'a' to 'ListenerManager' (module 814180)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-events.8e129d94.js
         * chunkId: 25182
         * moduleId: 493703
         */
module.exports = function (module, exports, require) {
  let r = new (require("listener-manager") /*id: 814180*/.ListenerManager)();
  class i {
    async onEmptySlash(e) {
      for (let t of r.listeners.onEmptySlash || []) {
        await t(e);
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    GenericFileUploadButtonEventsPlugin: function () {
      return i;
    }
  });
}