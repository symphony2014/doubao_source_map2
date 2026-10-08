// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'getFingerprint'
// - Renamed export 'i' to 'initSecuritySdk'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 279207
         */
module.exports = function (module, exports, require) {
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let r = null;
  let o = async () => await asyncRetryUtils.retryWithFallback({
    fn: async () => await require.e("sec_sdk_build") /*id: 48606*/.then(require.bind(require, "security-verify-sdk") /*id: 932273*/)
  });
  let s = async () => {
    if (r) {
      return r;
    }
    let e = await o();
    return r = await e.getFp();
  };
  require.d(exports, {
    getFingerprint: function () {
      return s;
    },
    initSecuritySdk: function () {
      return o;
    }
  });
}