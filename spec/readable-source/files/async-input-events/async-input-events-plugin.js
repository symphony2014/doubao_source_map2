// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 's' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'a' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'l' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'u' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Updated imported property 'Sv' to 'getAvailableMessage' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'ue' to 'AgentSupertaskApiService' (module 147875)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-events.8e129d94.js
         * chunkId: 25182
         * moduleId: 645919
         */
module.exports = function (module, exports, require) {
  var r;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  (r = {})[r.SuperTask = 1] = "SuperTask";
  r[r.PPT = 2] = "PPT";
  let c = r;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  class d {
    onBeforeBreakMessage(e) {
      return function (e) {
        let {
          chatId: r
        } = e;
        if (!r) {
          return true;
        }
        let d = conversationMessageUtils_1.getAvailableMessage(chatMessageStoreFactory.createMessageStore.getState(), r);
        if (!d || !messageContentTypeAndStatusChecker.DPh(d) || chatMessageStatusCheck.isMessageFinished(d)) {
          return true;
        }
        let p = safeJsonUtils.safeParse(d.ext?.async_job, {})?.job_id;
        if (p) {
          try {
            apiServicesCollection.AgentSupertaskApiService.AGWSuperTaskCancel({
              task_type: c.PPT,
              task_id: p
            });
          } catch (e) {}
        }
        return true;
      }(e);
    }
  }
  require.r(exports);
  require.d(exports, {
    Plugin: function () {
      return d;
    }
  });
}