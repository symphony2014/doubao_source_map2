// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'promiseAsyncUtilities'
// - Resolved require(592307) to 'promise-async-utilities'
// - Updated imported property 'GR' to 'createDelayedPromise' (module 592307)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-coding-open-canvas-repo-pre-plugin.27d1a06b.js
         * chunkId: 35117
         * moduleId: 331203
         */
module.exports = function (module, exports, require) {
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  async function e(_) {
    let {
      payload: n,
      preSendConversationId: t
    } = _;
    if (!(n == null ? undefined : n.query)) {
      await promiseAsyncUtilities.createDelayedPromise(2000);
    }
    return {
      payload: n,
      preSendConversationId: t
    };
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return e;
    }
  });
}