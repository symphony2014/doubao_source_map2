// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'useMediaAsr'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 8104
         */
module.exports = function (module, exports, require) {
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var useParamsResolver = require("use-params-resolver") /*id: 790576*/;
  var aiSpaceStoreManager = require("ai-space-store-manager") /*id: 798389*/;
  var driveAiShareOverviewStore = require("drive-ai-share-overview-store") /*id: 262375*/;
  var fileEntityConstants = require("file-entity-constants") /*id: 745880*/;
  let c = () => {
    let {
      token: e
    } = useParamsResolver.useParamsResolver();
    let i = e ? driveAiShareOverviewStore.shareOverviewStore : aiSpaceStoreManager.useAiSpaceStore;
    return {
      handleTriggerMediaASR: async e => {
        let {
          nodeId: t
        } = e;
        let {
          nodeInfoMap: r
        } = i.getState();
        let o = r[t];
        let s = (o == null ? undefined : o.nodeType) === businessLayoutConstants.ItemType.Video;
        await apiServicesCollection.SamanthaApiService.GetMediaSummary({
          key: o == null ? undefined : o.key,
          media_type: s ? "video" : "audio"
        });
        i.getState().batchUpdateNodeAISkillStatus([{
          nodeId: t,
          aiSkillStatus: businessLayoutConstants.ProcessState.Processing
        }]);
        let c = new CustomEvent(fileEntityConstants.checkMediaAction);
        if (typeof window != "undefined") {
          setTimeout(() => {
            window.dispatchEvent(c);
          }, 200);
        }
      }
    };
  };
  require.d(exports, {
    useMediaAsr: function () {
      return c;
    }
  });
}