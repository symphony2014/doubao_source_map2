// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'processTaskPayload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 651299
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var imageSkillTemplateManager = require("image-skill-template-manager") /*id: 384089*/;
  var chatConstants = require("chat-constants") /*id: 777970*/;
  var getTaskModeByConversationId = require("get-task-mode-by-conversation-id") /*id: 712994*/;
  var internalEnvCheck = require("internal-env-check") /*id: 30256*/;
  let c = () => Promise.resolve("");
  var pptTemplateManager = require("ppt-template-manager") /*id: 477087*/;
  let p = async e => {
    if (e) {
      let t = aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask;
      let n = getTaskModeByConversationId.getTaskModeByConvId();
      let a = await c();
      e.extraExt = {
        ...function () {
          let {
            currentChatViewConfig: e
          } = chatStoreManager.getStore("chatViewCoreStore").getState();
          let t = (e == null ? undefined : e.chatId) || "";
          if (!pptTemplateManager.pptTemplateManager.hasTemplateSettingInfo(t)) {
            return {};
          }
          let n = {};
          let r = pptTemplateManager.pptTemplateManager.getContentTypeId(t);
          let a = pptTemplateManager.pptTemplateManager.getTemplateId(t);
          let o = pptTemplateManager.pptTemplateManager.getVersion(t);
          let l = pptTemplateManager.pptTemplateManager.getCardId(t);
          let s = pptTemplateManager.pptTemplateManager.getPrecedingMessageId(t) || "";
          let u = pptTemplateManager.pptTemplateManager.isAutoComfirm(t);
          pptTemplateManager.pptTemplateManager.updatePrecedingMessageId(t, "");
          if (r !== undefined) {
            Object.assign(n, {
              page_num_opt_type: r
            });
          }
          if (a !== undefined) {
            Object.assign(n, {
              ppt_style_opt_id: a
            });
          }
          if (o !== undefined) {
            Object.assign(n, {
              version: o
            });
          }
          if (l !== undefined) {
            Object.assign(n, {
              card_id: l
            });
          }
          let c = {
            ppt_tpl_opts: JSON.stringify(n),
            message_send_type: +!!u
          };
          if (s) {
            c.preceding_msg_id = s;
          }
          return c;
        }(),
        ...(e.extraExt || {}),
        answer_with_suggest: "0",
        input_skill: JSON.stringify({
          skill_id: t.toString(),
          skill_type: t
        }),
        supertask_task_type: (n ?? chatConstants.complexityLevels.Simple).toString(),
        client_tool_key: a
      };
      let p = imageSkillTemplateManager.templateInfoManager().getTemplateInfo();
      e.reportParams = {
        ...e.reportParams,
        preset_prompt_type: undefined,
        super_task_mode: n === chatConstants.complexityLevels.Simple ? "search_task" : "complex_task",
        super_task_template_genre: p == null ? undefined : p.genre,
        super_task_template_id: p == null ? undefined : p.id
      };
      imageSkillTemplateManager.templateInfoManager().clearTemplateInfo();
      if (internalEnvCheck.isInternalEnv()) {
        let t = {
          params: window.localStorage.getItem("__DEBUG_AB_PARAMS") || "",
          enabled: !!window.localStorage.getItem("__DEBUG_AB_PARAMS_ENABLED")
        };
        e.extraExt = {
          ...e.extraExt,
          web_ab_params: t.enabled ? t.params : ""
        };
      }
    } else {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "super-task-message-life-cycle",
        meta: {
          status: "plugin-null-payload"
        }
      });
    }
    return e;
  };
  require.d(exports, {
    processTaskPayload: function () {
      return p;
    }
  });
}