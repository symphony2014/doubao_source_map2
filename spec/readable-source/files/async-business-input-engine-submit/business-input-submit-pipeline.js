// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'deepThinkingModeHandler'
// - Resolved require(349989) to 'deep-thinking-mode-handler'
// - Renamed variable 'r' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'l' to 'chatAiConstants'
// - Resolved require(447912) to 'chat-ai-constants'
// - Renamed variable 'a' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'contentTypeEnums'
// - Resolved require(153202) to 'content-type-enums'
// - Renamed variable 'u' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 's' to 'messageBoxTypeCheckers'
// - Resolved require(117360) to 'message-box-type-checkers'
// - Renamed variable 'c' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'd' to 'aiSpaceQuoteUtils'
// - Resolved require(577173) to 'ai-space-quote-utils'
// - Renamed variable 'p' to 'getObjectPathString'
// - Resolved require(965758) to 'get-object-path-string'
// - Updated imported property 'lx' to 'getSkillActionClass' (module 361602)
// - Updated imported property 'u$' to 'isLinkType' (module 117360)
// - Updated imported property '_c' to 'filterEnabledRefs' (module 117360)
// - Updated imported property 'Ux' to 'UploadSource' (module 791429)
// - Updated imported property 'mF' to 'DeepThinkingMode' (module 791429)
// - Updated imported property 'N' to 'formatQuoteInfo' (module 577173)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'U3' to 'resourceType' (module 153202)
// - Updated imported property 'bQ' to 'mediaType' (module 153202)
// - Updated imported property 'G' to 'getObjectPathString' (module 965758)
// - Updated imported property 'J' to 'deepThinkingHandler' (module 349989)
// - Updated imported property 'ES' to 'deepThinkMode' (module 447912)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 296881
         */
module.exports = function (module, exports, require) {
  var deepThinkingModeHandler = require("deep-thinking-mode-handler") /*id: 349989*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var aiSpaceQuoteUtils = require("ai-space-quote-utils") /*id: 577173*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  let _ = e => {
    let {
      text: t,
      attachments: i,
      refContents: n,
      preGeneratedLocalMessageId: l,
      presetPromptType: a,
      skillId: o,
      skillType: u,
      reportParams: p,
      extraExt: _ = {}
    } = e;
    let v = {
      preGeneratedLocalMessageId: l,
      extraExt: {
        ..._,
        input_skill: JSON.stringify({
          skill_id: o,
          skill_type: u
        })
      },
      reportParams: {
        from: "",
        sec_scene: skillTypeMappings.getSkillActionClass(u),
        scene: "chat_action_bar",
        preset_prompt_type: a,
        ...p
      }
    };
    if (i == null ? undefined : i.length) {
      if (i.length === 1 && messageBoxTypeCheckers.isLinkType(i[0])) {
        v.compositeContent = {
          text: t,
          links: [i[0].url]
        };
        v.reportParams = {
          ...v.reportParams,
          uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_CI_UPLOAD
        };
      } else {
        v.text = t;
        v.nestedItems = f({
          attachments: i
        });
        v.reportParams = {
          ...v.reportParams,
          upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON
        };
      }
    } else {
      v.text = t;
    }
    let m = (n == null ? undefined : n.length) ? messageBoxTypeCheckers.filterEnabledRefs(n) : n;
    if (m == null ? undefined : m.length) {
      v.extraExt = {
        ...v.extraExt,
        ...(m.length ? {
          reference_content: JSON.stringify(m)
        } : {})
      };
      let e = {
        ...aiSpaceQuoteUtils.formatQuoteInfo(n == null ? undefined : n[0])
      };
      v.reportParams = {
        ...v.reportParams,
        ...e
      };
    }
    return v;
  };
  let f = e => {
    let {
      attachments: t
    } = e;
    return t.map(e => {
      if (e.type === "link" || e.type === "remote") {
        return;
      }
      let t = chatStoreManager.getStore("attachmentUploadStore").getState().preprocessTaskMap[e.localKey];
      if (t) {
        return {
          type: contentTypeEnums.resourceType.File,
          fileKey: t.key || t.localKey,
          fileName: getObjectPathString.getObjectPathString("name")(t.file),
          size: t.file.size,
          identifier: t.localKey,
          parseState: t.parseState,
          reviewState: t.reviewState,
          md5: t.md5,
          localKey: e.localKey,
          type: contentTypeEnums.resourceType.File,
          fileType: contentTypeEnums.mediaType.File
        };
      }
    }).filter(Boolean);
  };
  let v = {
    id: "biz-ci:input-submit-workflow",
    submitNodes: [deepThinkingModeHandler.deepThinkingHandler, {
      id: "ci:input-skill-node",
      execute: e => {
        let {
          text: t,
          chatId: i,
          localMessageId: n
        } = e.content;
        let {
          modeSelectValue: o
        } = e.content;
        let u = {};
        let s = e.content.reportParams;
        if (o) {
          if (o === String(chatAiConstants.deepThinkMode.ProModel)) {
            u = {
              ...u,
              use_deep_think: String(chatAiConstants.deepThinkMode.DeepThinkOn)
            };
            s = {
              ...s,
              whether_use_deep_thinking: skillConstantsEnum.DeepThinkingMode.WHETHER_USE_DEEP_THINKING_YES
            };
          } else {
            u = {
              ...u,
              use_deep_think: o
            };
          }
        }
        let c = e.content.abilityType || chatAppEnums.SkillType.CodeInterpreter;
        let d = c.toString();
        e.payload = [{
          ..._({
            text: t || "",
            preGeneratedLocalMessageId: n,
            attachments: e.content.attachments,
            refContents: e.content.refContents,
            skillId: d,
            skillType: c,
            reportParams: s,
            extraExt: u
          }),
          conversationId: i
        }];
        return Promise.resolve(e);
      }
    }],
    afterSubmitNodes: []
  };
  require.r(exports);
  require.d(exports, {
    InputSubmitPipeline: function () {
      return v;
    }
  });
}