// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DM' to 'regionRestrictedPaths'
// - Renamed export 'nt' to 'securityEventTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 223264
         */
module.exports = function (module, exports, require) {
  let i = {
    REGION_RESTRICTED: "/security/region-restricted",
    DOUBAO_REGION_BAN: "/security/doubao-region-ban"
  };
  let r = {
    SECURITY_LOGOUT: "security_logout",
    COUNTRY_RESTRICTED: "country_restricted",
    SHARK_BLOCKED: "shark_blocked"
  };
  require.d(exports, {
    regionRestrictedPaths: function () {
      return i;
    },
    securityEventTypes: function () {
      return r;
    }
  });
}