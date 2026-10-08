// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'useOpenAiSpaceShareLogin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 837937
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatSidebarStateManager = require("chat-sidebar-state-manager") /*id: 496970*/;
  var chatLoginModalManager = require("chat-login-modal-manager") /*id: 516605*/;
  var asyncBusinessLayoutConstants = require("async-business-layout-constants") /*id: 649420*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  function l() {
    let {
      openLoginModal: e
    } = chatLoginModalManager.loginModalManager();
    return reactCoreLibraryReexport.useCallback(() => {
      e({
        landing: {
          type: asyncBusinessLayoutConstants.layoutActionTypes.AI_SPACE_SHARE
        },
        trackInfo: {
          source: trackingEventConstants.trackingEvents.AI_SPACE_SAVE
        },
        onSuccess: chatSidebarStateManager.openSidebarIfDid
      });
    }, []);
  }
  require.d(exports, {
    useOpenAiSpaceShareLogin: function () {
      return l;
    }
  });
}