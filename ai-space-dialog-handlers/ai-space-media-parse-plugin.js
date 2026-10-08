// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'processMediaPayload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 509039
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  let c = async e => {
    let {
      payload: t,
      isSpaceNext: a
    } = e;
    let {
      files: c,
      prompt: d,
      shareId: _
    } = t;
    let u = c[0];
    if (!u) {
      return;
    }
    let {
      uri: p,
      name: m,
      size: f,
      nodeId: h,
      mediaType: v,
      conversationId: y
    } = u;
    let S = ["video_ask_doubao", "video_summary", "video_mind_map"].includes(v);
    if (y && (await checkConversationValid.isConversationValid(y))) {
      return null;
    }
    let g = {
      input_skill: JSON.stringify({
        skill_id: aiAssistantSkillTypes.SkillTypes.SkillTypeMediaUnderstandingByAsr.toString(),
        skill_type: aiAssistantSkillTypes.SkillTypes.SkillTypeMediaUnderstandingByAsr
      })
    };
    let b = a ? {
      type: "mix_ai_space",
      value: JSON.stringify({
        obj_token: h,
        obj_type: 12,
        use_time: String(Math.floor(Date.now() / 1000))
      })
    } : {
      type: "ai_space",
      value: JSON.stringify({
        node_id: h,
        share_id: _
      })
    };
    g.samantha_onboarding = JSON.stringify(b);
    return [{
      localConversationId: chatConversationUtils_1.generateLocalId(),
      text: d,
      nestedItems: [{
        type: contentTypeEnums.resourceType.File,
        fileType: S ? contentTypeEnums.mediaType.Video : contentTypeEnums.mediaType.Audio,
        fileKey: p,
        fileName: m,
        size: f || 0,
        identifier: ""
      }],
      reportParams: {
        entrance_from: "ai_space_ask_doubao",
        scene: "ai_space",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_DRIVE
      },
      extraExt: g,
      botType: "Main",
      conversationType: chatCoreConstants.BotTypes.CocoSub
    }];
  };
  require.d(exports, {
    processMediaPayload: function () {
      return c;
    }
  });
}