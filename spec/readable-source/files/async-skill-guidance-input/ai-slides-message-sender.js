// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qd' to 'createAiSlidesMessageSender'
// - Renamed export 'E7' to 'buildTemplateReferenceBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 833134
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var aiPptTemplateStore = require("ai-ppt-template-store") /*id: 603769*/;
  var asyncBusinessInputEngineSubmit_1 = require("async-business-input-engine-submit_1") /*id: 581606*/;
  let k = e => {
    let {
      chatId: t,
      skill: i,
      closeEvent: n,
      reportParams: r,
      onAfterSendMessage: l,
      onBeforeSendMessage: o,
      activeFrom: v
    } = e;
    let S = (i == null ? undefined : i.skill_type) || chatAppEnums.SkillType.AIPPTSlides;
    return async e => {
      if ((await (o == null ? undefined : o())) === false) {
        return;
      }
      let {
        inputValue: i,
        attachmentBlock: m,
        refContents: k,
        userTemplates: T
      } = e || {};
      let E = inputToolConverter.extractText(i.data);
      let w = chatTextBlockFactory.createTextBlock(E);
      let P = referenceBlockTransformer.transformReferences(k || []);
      let I = conversationMessageUtils.assembleContentBlocks({
        attachmentBlock: m,
        textBlock: w,
        referenceBlocks: P
      });
      let N = R(i, T);
      if (N) {
        I = [N, ...I];
      }
      let A = await attachmentUploadStoreHooks.usePreGeneratedMessageId({
        chatId: t ?? "",
        skillType: S
      });
      let x = await b(i, T, k);
      let C = conversationMessageUtils.serializeAbilityData(S, JSON.stringify(x));
      let O = conversationMessageUtils.createMessageObject({
        conversation: conversationMessageUtils.parseConversationId(t ?? ""),
        message: {
          content_blocks_v2: I,
          unique_id: A,
          ext: {
            chat_ability: C
          }
        }
      });
      let L = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
      let {
        selectedTemplateItem: M,
        enableTemplate: D
      } = aiPptTemplateStore_1.aiPptTemplateStore.getState();
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "ai-slides-skill-send",
        meta: {
          showFreeTag: "0"
        }
      });
      if (L != null) {
        L.sendMessage({
          message: O,
          session: {
            reportParams: {
              scene: "chat_action_bar",
              sec_scene: skillTypeMappings.getSkillActionClass(S),
              entrance_from: v === chatStatusActionTypes.chatActionTypes.AISpace ? "ai_space_ai_ppt" : undefined,
              ...r,
              ...(() => {
                var t;
                var i;
                var n;
                let r = (N == null ? undefined : (n = N.content) === null || n === undefined ? undefined : (i = n.reference_block) === null || i === undefined ? undefined : (t = i.ppt_template) === null || t === undefined ? undefined : t.template?.id) || "";
                if (r) {
                  return {
                    aippt_template_id: r
                  };
                } else {
                  return {};
                }
              })(),
              ...(m ? {
                upload_from: "upload_pinbutton"
              } : {}),
              ...(D ? (T == null ? undefined : T.length) ? {
                aippt_template_type: "self_design"
              } : M && !aiPptTemplateStore.isAutoRecCard(M) ? {
                aippt_template_type: "official_template"
              } : {
                aippt_template_type: "auto_match"
              } : {})
            }
          }
        });
      }
      if (n != null) {
        n();
      }
      if (l != null) {
        l({
          exitSkill: false
        });
      }
      let {
        selectTemplateItem: F
      } = aiPptTemplateStore_1.aiPptTemplateStore.getState();
      F(D ? aiPptTemplateStore.autoRecCardItem : undefined);
    };
  };
  function T(e) {
    return e.type === chatFieldTypes.getFieldTypes.Select;
  }
  function E(e) {
    let {
      pageConfigs: t
    } = aiPptTemplateStore_1.aiPptTemplateStore.getState();
    let i = e.data.find(T);
    if (i) {
      let {
        value: e
      } = i;
      let n = t.find(t => t.name === e);
      if (n) {
        return {
          id: n.id,
          name: n.name
        };
      }
    }
  }
  async function b(e, t, i) {
    let n = {
      action: 0
    };
    let {
      selectedTemplateItem: l
    } = aiPptTemplateStore_1.aiPptTemplateStore.getState();
    let a = E(e);
    if (a) {
      Object.assign(n, {
        config: {
          ...objectPathGetDefault.getObjectPathDefault(n, "config", {}),
          page_size: a
        }
      });
    }
    if (l && !aiPptTemplateStore.isAutoRecCard(l)) {
      Object.assign(n, {
        config: {
          ...objectPathGetDefault.getObjectPathDefault(n, "config", {}),
          template_id: l.id
        }
      });
    }
    if (t == null ? undefined : t.length) {
      Object.assign(n, {
        config: {
          ...objectPathGetDefault.getObjectPathDefault(n, "config", {}),
          user_templates: t
        }
      });
    }
    let o = await asyncBusinessInputEngineSubmit_1.getAiEditActionContext({
      refContents: i
    });
    if (o) {
      Object.assign(n, {
        context: o
      });
    }
    return n;
  }
  function R(e, t) {
    let i = E(e);
    let {
      selectedTemplateItem: r
    } = aiPptTemplateStore_1.aiPptTemplateStore.getState();
    let a = r && !aiPptTemplateStore.isAutoRecCard(r);
    if (!i && !a && !(t == null ? undefined : t.length)) {
      return;
    }
    let u = r ? {
      id: r.id || "",
      name: r.title || "",
      image: {
        uri: r.cover_url || ""
      }
    } : undefined;
    let s = {
      type: attachmentConstants.ReferenceType.ReferenceTypePPTTemplate,
      ppt_template: {
        page_size: i,
        template: u,
        user_templates: (t == null ? undefined : t.length) ? t : undefined
      }
    };
    return {
      block_type: chatConstantsEnum.messageContentType.BLOCK_REFERENCE,
      content: {
        reference_block: s,
        pc_event_block: ""
      },
      block_id: uuidGeneratorUtil.generateUuid(),
      parent_id: "",
      meta_info: [],
      append_fields: []
    };
  }
  require.d(exports, {
    createAiSlidesMessageSender: function () {
      return k;
    },
    buildTemplateReferenceBlock: function () {
      return R;
    }
  });
}