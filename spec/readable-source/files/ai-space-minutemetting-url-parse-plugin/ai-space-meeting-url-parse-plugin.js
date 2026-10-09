// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'r' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable '_' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'l' to 'checkConversationValid'
// - Resolved require(131485) to 'check-conversation-valid'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'R' to 'isConversationValid' (module 131485)
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-minutemetting-url-parse-plugin.42b58ddc.js
         * chunkId: 22712
         * moduleId: 686159
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  async function d(e) {
    let {
      payload: n,
      navigate: t,
      phase3EndTime: d,
      chatViewService: c,
      prehandlerData: s = {}
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "UrlAction_AISpaceFileAIReadHandlerStart"
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - d,
        plugin: aiActionConstants.aiActionConstants.AISpace_WordFileAIRead
      }
    });
    let u = Date.now();
    let {
      artifactId: v,
      nodeId: m
    } = n;
    let {
      conversationId: p
    } = s;
    let y = p;
    if (p) {
      checkConversationValid.isConversationValid(p).then(e => {
        if (!e) {
          samanthaToastFactory.toastInstance.warning(i18nTranslationUtils.i18nextTranslate("access_writing_doc_failure_for_chat_deletion_toast"));
          t("/chat/", {
            replace: true
          });
          c.closeCanvasPanel();
        }
      });
    } else {
      var f;
      let e = await apiServicesCollection.SamanthaApiService.ThreadCreate({
        bot_id: "7338286299411103781",
        samantha_onboarding: {
          type: "ai_space",
          value: JSON.stringify({
            node_id: m
          })
        }
      });
      if (e == null ? undefined : (f = e.data) === null || f === undefined ? undefined : f.thread_info?.thread_id) {
        y = String(e.data.thread_info.conversation?.conversation_id);
      }
    }
    try {
      let {
        data: e
      } = await apiServicesCollection.SamanthaApiService.SummaryMeetingPack({
        meeting_id: v
      });
      if (!e) {
        return;
      }
      c.openCanvasPanel({
        conversationId: p,
        messageId: "",
        artifactId: v,
        autoRefresh: true,
        intention: "meeting_minutes",
        createTime: e.create_time,
        artifactInfo: {
          artifactId: e.artifact_id,
          artifactKey: e.artifact_key,
          ...e
        }
      });
    } catch (e) {}
    if (y) {
      t(`/chat/${y}`, {
        replace: true
      });
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - u,
        plugin: aiActionConstants.aiActionConstants.AISpace_WordFileAIRead
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return d;
    }
  });
}