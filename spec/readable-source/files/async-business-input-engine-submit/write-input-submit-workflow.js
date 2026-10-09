// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'deepThinkingModeHandler'
// - Resolved require(349989) to 'deep-thinking-mode-handler'
// - Renamed variable 'r' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'l' to 'chatAttachmentProcessor_1'
// - Resolved require(670926) to 'chat-attachment-processor_1'
// - Renamed variable 'a' to 'writeConfigManager'
// - Resolved require(336456) to 'write-config-manager'
// - Renamed variable 'o' to 'writingTaskConstants'
// - Resolved require(147584) to 'writing-task-constants'
// - Renamed variable 'u' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 's' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'c' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'd' to 'chatFieldTypes'
// - Resolved require(660462) to 'chat-field-types'
// - Renamed variable 'p' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Updated imported property 'Fd' to 'getEditorValue' (module 411117)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'Sn' to 'processChatAttachments' (module 670926)
// - Updated imported property 'Z6' to 'extractText' (module 352793)
// - Updated imported property 'f' to 'getFieldTypes' (module 660462)
// - Updated imported property 'lx' to 'getSkillActionClass' (module 361602)
// - Updated imported property 'p' to 'WriteConfigManager' (module 336456)
// - Updated imported property 'Us' to 'writingTasks' (module 147584)
// - Updated imported property 'J' to 'deepThinkingHandler' (module 349989)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 763169
         */
module.exports = function (module, exports, require) {
  var deepThinkingModeHandler = require("deep-thinking-mode-handler") /*id: 349989*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatAttachmentProcessor_1 = require("chat-attachment-processor_1") /*id: 670926*/;
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var writingTaskConstants = require("writing-task-constants") /*id: 147584*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let _ = e => {
    let {
      attachments: t = [],
      attachmentKeys: i = [],
      attachmentStates: n = [],
      reportParams: a
    } = e.content;
    let o = chatInputStoreHelpers.getEditorValue();
    if (!isEmptyUtil.isEmpty(t) && !isEmptyUtil.isEmpty(i) && !isEmptyUtil.isEmpty(n)) {
      return chatAttachmentProcessor_1.processChatAttachments({
        attachments: t,
        attachmentKeys: i,
        attachmentStates: n,
        text: inputToolConverter.extractText(o.data),
        reportParams: a
      });
    }
  };
  let f = e => {
    var t;
    let {
      attachmentPayload: n
    } = e;
    let r = (t = chatInputStoreHelpers.getEditorValue().data) === null || t === undefined ? undefined : t.find(e => e.type === chatFieldTypes.getFieldTypes.Placeholder && e.key === "longForm_wordCount");
    return {
      ...((n == null ? undefined : n.reportParams) ?? {}),
      sec_scene: skillTypeMappings.getSkillActionClass(chatAppEnums.SkillType.WriteAssistant),
      is_by_step_writing: "no_step",
      writing_word_count: r && "text" in r ? r.text : undefined
    };
  };
  let v = e => {
    let {
      context: t
    } = e;
    let {
      attachmentStates: i = []
    } = t.content;
    let n = isEmptyUtil.isEmpty(i) ? "" : JSON.stringify({
      attachments: i.map(e => ({
        title: e.fileName,
        key: e.fileKey
      }))
    });
    let l = {
      action: "artifact"
    };
    if (!isEmptyUtil.isEmpty(n)) {
      l.attachments_context = n;
    }
    return l;
  };
  let m = {
    id: "biz-write:input-submit-workflow",
    submitNodes: [{
      id: "write-generation:input-skill-node",
      execute: async e => {
        let t = chatInputStoreHelpers.getEditorValue();
        let {
          abilityType: i,
          extra: n,
          reportParams: r
        } = e.content;
        let l = await writeConfigManager.WriteConfigManager.isNewDoc();
        let s = {
          skill_id: i == null ? undefined : i.toString(),
          skill_type: i,
          is_long_content: "0",
          variables: {
            action: "artifact",
            ...v({
              context: e
            })
          }
        };
        let d = _(e);
        let p = f({
          attachmentPayload: d
        });
        e.content = {
          ...e.content,
          ...d,
          text: inputToolConverter.extractText(t.data),
          extra: {
            ...n,
            ...(l ? {
              doc_action: `${writingTaskConstants.writingTasks.DIRECT_INPUT}`
            } : {}),
            input_skill: JSON.stringify(s),
            answer_with_suggest: "0"
          },
          reportParams: {
            scene: "chat_action_bar",
            ...p,
            ...r
          }
        };
        return Promise.resolve(e);
      }
    }, deepThinkingModeHandler.deepThinkingHandler],
    afterSubmitNodes: []
  };
  require.r(exports);
  require.d(exports, {
    InputSubmitPipeline: function () {
      return m;
    }
  });
}