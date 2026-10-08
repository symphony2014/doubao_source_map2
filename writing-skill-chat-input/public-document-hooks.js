// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dn' to 'usePublicPageData'
// - Renamed export 'OG' to 'useIsNewDocRoute'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 345997
         */
module.exports = function (module, exports, require) {
  var conversationPageConstants = require("conversation-page-constants") /*id: 130052*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var flowDocumentManagementService = require("flow-document-management-service") /*id: 588256*/;
  let o = () => useLocationWrapper.useLocationWrapper().pathname.startsWith(conversationPageConstants.newDocRoute);
  let s = e => {
    let {
      token: t
    } = e;
    return useRequestHook.useRequest(async () => await flowDocumentManagementService.getInternetPublicPage({
      token: t
    }), {
      refreshDeps: [t],
      ready: !!t
    });
  };
  require.d(exports, {
    usePublicPageData: function () {
      return s;
    },
    useIsNewDocRoute: function () {
      return o;
    }
  });
}