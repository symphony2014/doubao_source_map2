// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'QT' to 'useFetchedNexPulseCandidate'
// - Renamed export 'Sh' to 'useFetchedNexPulseRecommendationId'
// - Renamed export 'mL' to 'useChatLayoutLoaderData'
// - Renamed export 'wH' to 'filterValidCandidates'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 970651
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var routeLoaderDataResolver = require("route-loader-data-resolver") /*id: 131455*/;
  let o = () => routeLoaderDataResolver.useRouteLoaderData("chat_layout");
  let a = e => {
    let n = e == null ? undefined : e.conf?.expire_time;
    if (!(e == null ? undefined : e.candidate_list) || n && typeof n == "number" && Date.now() > n * 1000) {
      return [];
    } else {
      return e.candidate_list.filter(e => !(e == null ? undefined : e.expire_time) || typeof (e == null ? undefined : e.expire_time) != "number" || !((e == null ? undefined : e.expire_time) * 1000 < Date.now()));
    }
  };
  let l = () => chatStoreManager.useStoreSelector("chatGuidanceStore", e => e.fetchedNexPulseCandidate) || [];
  let s = () => chatStoreManager.useStoreSelector("chatGuidanceStore", e => e.fetchedNexPulseRecommendationId) || "";
  require.d(exports, {
    useFetchedNexPulseCandidate: function () {
      return l;
    },
    useFetchedNexPulseRecommendationId: function () {
      return s;
    },
    useChatLayoutLoaderData: function () {
      return o;
    },
    filterValidCandidates: function () {
      return a;
    }
  });
}