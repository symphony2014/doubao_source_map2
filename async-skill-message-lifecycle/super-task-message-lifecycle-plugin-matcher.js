// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'l' to 'chatConversationSelectors_2'
// - Resolved require(390347) to 'chat-conversation-selectors_2'
// - Renamed variable 's' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'c' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'd' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'u' to 'superTaskStore'
// - Resolved require(654619) to 'super-task-store'
// - Renamed variable 'h' to 'docPageChecker'
// - Resolved require(912796) to 'doc-page-checker'
// - Renamed variable 'p' to 'superTaskLifecyclePluginId'
// - Resolved require(471036) to 'super-task-lifecycle-plugin-id'
// - Updated imported property 'rw' to 'getSuperTaskStore' (module 654619)
// - Updated imported property 't' to 'isDocPage' (module 912796)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'jo' to 'getConversation' (module 390347)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'Zn' to 'getGuidanceGenericInputMode' (module 317711)
// - Updated imported property 'd' to 'superTaskLifecycleId' (module 471036)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 769650
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var docPageChecker = require("doc-page-checker") /*id: 912796*/;
  var superTaskLifecyclePluginId = require("super-task-lifecycle-plugin-id") /*id: 471036*/;
  let m = e => {
    let m = superTaskStore.getSuperTaskStore().getState();
    if (!m.taskAbConfig?.enable || docPageChecker.isDocPage()) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "super-task-message-life-cycle",
        meta: {
          status: "not-in-ab",
          pathname: location.pathname
        }
      });
      return false;
    }
    let {
      currentChatViewConfig: v
    } = chatStoreManager.getStore("chatViewCoreStore").getState();
    if (m.isSidebarModeEnable() || m.isSkillBarModeEnable()) {
      let {
        skill_type: t
      } = safeJsonUtils.safeParse(e == null ? undefined : e.extraExt?.input_skill, {});
      if (`${t}` == `${aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask}`) {
        return true;
      }
      if (e.reportParams?.scene === "suggested_prompts") {
        let e = chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), (v == null ? undefined : v.chatId) || "");
        return safeJsonUtils.safeParse(e == null ? undefined : e.extra, {}).flowpc_supertask_sidebar_complex_task === "1";
      }
      return false;
    }
    if (!superTaskStore.getSuperTaskStore().getState().isSuperTaskEnableByConvId(v == null ? undefined : v.chatId)) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "super-task-message-life-cycle",
        meta: {
          status: "switch-off"
        }
      });
      return false;
    }
    if (chatLauncherConfigHooks.getGuidanceGenericInputMode(chatStoreManager.getStore("launcherRawSettingStore").getState().settingData)) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "super-task-message-life-cycle",
        meta: {
          status: "switch-on-but-no-entry"
        }
      });
      return false;
    }
    let {
      skill_type: f,
      template_key: g
    } = safeJsonUtils.safeParse(e == null ? undefined : e.extraExt?.input_skill, {});
    let _ = f === aiAssistantSkillTypes.SkillTypes.SkillRead && g === "query_with_reference";
    if ([aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask, aiAssistantSkillTypes.SkillTypes.SkillFreeChat].includes(f) || _ || !f) {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "super-task-message-life-cycle",
        meta: {
          status: "matched",
          chatId: v == null ? undefined : v.chatId,
          skill_type: f
        }
      });
      return true;
    } else {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "super-task-message-life-cycle",
        meta: {
          status: "not-match-by-skill",
          skill_type: f
        }
      });
      return false;
    }
  };
  let v = {
    pluginIdentifier: superTaskLifecyclePluginId.superTaskLifecycleId,
    matchPluginWithPayload: e => m(e[0]),
    matchPlugin: e => messageContentTypeAndStatusChecker.fjb(e)
  };
  require.r(exports);
  require.d(exports, {
    superTaskMessageLifecyclePluginMatcher: function () {
      return v;
    }
  });
}