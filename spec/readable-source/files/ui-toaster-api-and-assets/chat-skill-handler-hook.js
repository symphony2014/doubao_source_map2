// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'useChatSkillHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 8286
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useParamsResolver = require("use-params-resolver") /*id: 790576*/;
  var openAiSpaceShareLoginModal = require("open-ai-space-share-login-modal") /*id: 837937*/;
  var aiSpaceFileActionHandler = require("ai-space-file-action-handler") /*id: 90817*/;
  var aiSpaceStoreManager = require("ai-space-store-manager") /*id: 798389*/;
  var driveAiShareOverviewStore = require("drive-ai-share-overview-store") /*id: 262375*/;
  var fileStateUtils = require("file-state-utils") /*id: 88691*/;
  let p = () => {
    let e = openAiSpaceShareLoginModal.useOpenAiSpaceShareLogin();
    let i = driveAiShareOverviewStore.shareOverviewStore();
    let {
      token: t
    } = useParamsResolver.useParamsResolver();
    let p = t ? driveAiShareOverviewStore.shareOverviewStore : aiSpaceStoreManager.useAiSpaceStore;
    return {
      handleChatSkill: (o, s) => {
        let c = userInfoStatusSelectors.isUserInfoFailed();
        let {
          guestCanCreateThread: d,
          guestCanSendMessage: m
        } = i;
        if (c && (!d || !m)) {
          if (e != null) {
            e();
          }
          return;
        }
        let _ = s.nodeType === businessLayoutConstants.ItemType.Video;
        teaAnalyticsEventTracker.trackEvent("file_function_click", {
          show_from: "player",
          button_name: "ask_doubao",
          type: _ ? "video" : "audio",
          folder_type: fileStateUtils.getSourceCategory(p),
          ...fileStateUtils.getFolderTabInfo(p)
        });
        aiSpaceFileActionHandler.handleFileAction(o, s, {
          needBindConversation: !t,
          shareId: t
        });
      }
    };
  };
  require.d(exports, {
    useChatSkillHandler: function () {
      return p;
    }
  });
}