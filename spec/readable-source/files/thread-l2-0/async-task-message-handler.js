// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L7' to 'addFreeChatSkill'
// - Renamed export 'mO' to 'handleAsyncTask'
// - Renamed export 'wu' to 'isEditSourceMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 661707
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let d = e => {
    return e.ext?.source === "edit" && e.conversation_id && messageContentTypeAndStatusChecker.fjb(e);
  };
  let u = e => {
    if (e) {
      let {
        message: t
      } = conversationMessageUtils_1.processMessageList(chatMessageStoreFactory.createMessageStore.getState(), e, e => {
        let {
          getMessage: t
        } = e;
        let n = t();
        return !chatMessageStatusCheck.isMessageFinished(n) && !messageContentTypeAndStatusChecker.vlk(n) && !!messageContentTypeAndStatusChecker.Yi0(n);
      });
      return t;
    }
    return null;
  };
  let p = e => {
    let t = {
      skill_id: `${aiAssistantSkillTypes.SkillTypes.SkillFreeChat}`,
      skill_type: aiAssistantSkillTypes.SkillTypes.SkillFreeChat,
      skill_type_no_default: null,
      skill_id_no_default: null
    };
    e.skill = t;
    e.ext = {
      ...(e.ext || {}),
      input_skill: JSON.stringify(t)
    };
    return e;
  };
  let m = async (e, t, n) => {
    var l;
    let {
      cancelTask: r,
      waitTerminate: o,
      taskId: a
    } = t || {};
    let d = a || ((l = u(e)) === null || l === undefined ? undefined : l.async_task?.id);
    if (d) {
      if (n != null) {
        n(d);
      }
      if (r) {
        await Promise.race([chatPluginIocManager.chatProtocolLoader("SamanthaChat").then(e => {
          var t;
          if (e != null && (t = e.cancelAsyncTask) !== null && t !== undefined) {
            t.call(e, d);
          }
        }), new Promise(e => {
          setTimeout(() => e(undefined), 1000);
        })]);
      }
      if (o) {
        await apiServicesCollection.SamanthaApiService.TerminateSuperTask({
          task_id: d
        });
      } else {
        apiServicesCollection.SamanthaApiService.TerminateSuperTask({
          task_id: d
        });
      }
    }
  };
  require.d(exports, {
    addFreeChatSkill: function () {
      return p;
    },
    handleAsyncTask: function () {
      return m;
    },
    isEditSourceMessage: function () {
      return d;
    }
  });
}