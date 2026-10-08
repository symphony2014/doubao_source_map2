// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'asrServiceManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 773565
         */
module.exports = function (module, exports, require) {
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let r = {
    asrService: null,
    asrServiceInitOptions: {
      useAudioWorklet: true
    },
    setAsrServiceInitOptions: e => {
      r.asrServiceInitOptions = e;
    },
    getAsrService: async () => {
      if (!r.asrService) {
        let {
          ChatAsrService: e
        } = await asyncRetryUtils.retryWithFallback({
          fn: () => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("async-infra-input") /*id: 38227*/]).then(require.bind(require, "chat-asr-service") /*id: 189045*/)
        });
        r.asrService = new e(r.asrServiceInitOptions);
      }
      return r.asrService;
    }
  };
  require.d(exports, {
    asrServiceManager: function () {
      return r;
    }
  });
}