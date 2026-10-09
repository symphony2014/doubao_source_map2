// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'createAiEditAction'
// - Renamed export 'i' to 'createSlideMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 329004
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var chatInputModes = require("chat-input-modes") /*id: 141122*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let d = e => {
    let {
      selectedPositions: t,
      structureVersion: i,
      presentationId: n,
      artifactVersionId: l,
      hasRefContent: a = true
    } = e;
    return {
      action: chatInputModes.inputModes.AIEdit,
      context: {
        artifact_version_id: l,
        presentation_id: n,
        structure_version: i,
        select_positions: t,
        ref_positions: a ? t : undefined
      }
    };
  };
  let p = async e => {
    let {
      conversationId: t,
      inputValue: i,
      artifactVersionId: r,
      presentationId: p,
      selectedPositions: _,
      structureVersion: f
    } = e;
    let v = chatAppEnums.SkillType.AIPPTSlides;
    let m = await attachmentUploadStoreHooks.usePreGeneratedMessageId({
      chatId: t ?? "",
      skillType: v
    });
    let g = conversationMessageUtils.serializeAbilityData(v, JSON.stringify(d({
      artifactVersionId: r,
      presentationId: p,
      selectedPositions: _,
      structureVersion: f
    })));
    let y = chatTextBlockFactory.createTextBlock(i);
    let h = conversationMessageUtils.assembleContentBlocks({
      textBlock: y,
      referenceBlocks: [{
        block_type: chatConstantsEnum.messageContentType.BLOCK_REFERENCE,
        content: {
          reference_block: {
            type: attachmentConstants.ReferenceType.ReferenceTypeText,
            text: {
              text: "",
              message_id: "",
              starling_key: "slides_chat_quotedContent"
            }
          },
          pc_event_block: ""
        },
        block_id: uuidGeneratorUtil.generateUuid(),
        append_fields: [],
        parent_id: "",
        meta_info: []
      }]
    });
    return conversationMessageUtils.createMessageObject({
      conversation: conversationMessageUtils.parseConversationId(t ?? ""),
      message: {
        content_blocks_v2: h,
        unique_id: m,
        ext: {
          chat_ability: g
        }
      }
    });
  };
  require.d(exports, {
    createAiEditAction: function () {
      return d;
    },
    createSlideMessage: function () {
      return p;
    }
  });
}