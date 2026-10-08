// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'createPdfReadConversation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 364938
         */
module.exports = function (module, exports, require) {
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
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
      conversationId: v
    } = u;
    if (v && (await checkConversationValid.isConversationValid(u.conversationId))) {
      return null;
    }
    let y = {
      input_skill: JSON.stringify({
        skill_id: chatAppEnums.SkillType.ReadPDF.toString(),
        skill_type: chatAppEnums.SkillType.ReadPDF
      })
    };
    let S = a ? {
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
    y.samantha_onboarding = JSON.stringify(S);
    return [{
      text: d,
      localConversationId: chatConversationUtils_1.generateLocalId(),
      nestedItems: [{
        type: contentTypeEnums.resourceType.File,
        fileType: contentTypeEnums.mediaType.File,
        fileKey: p,
        fileName: m,
        size: f || 0,
        identifier: ""
      }],
      reportParams: {
        scene: "ai_space",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_DRIVE,
        entrance_from: "ai_space_ask_doubao"
      },
      botType: "Main",
      conversationType: chatCoreConstants.BotTypes.CocoSub,
      extraExt: y
    }];
  };
  require.d(exports, {
    createPdfReadConversation: function () {
      return c;
    }
  });
}