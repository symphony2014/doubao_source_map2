// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'oauthConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 419408
         */
module.exports = function (module, exports, require) {
  let i = typeof window == "undefined" ? "" : `https://${location.host}`;
  let r = "/auth/callback";
  let o = {
    google: undefined,
    apple: undefined,
    aweme_v2: {
      clientId: "aw4293rjg7ggbx9m",
      platformId: 8949,
      callbackUrl: `${i}${r}`
    },
    line: {
      clientId: "2002351850",
      platformId: 2200,
      callbackUrl: `${i}${r}`,
      extraParams: {
        redirect_uri: `${i}${r}`
      }
    },
    facebook: {
      clientId: "1819912395072617",
      platformId: 2204,
      callbackUrl: `${i}${r}`
    }
  };
  require.d(exports, {
    oauthConfig: function () {
      return o;
    }
  });
}