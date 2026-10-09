// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'parseExcelCodeInterpreterUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-excelcodeinter-url-parse-plugin.ba48918d.js
         * chunkId: 15537
         * moduleId: 806208
         */
module.exports = function (module, exports, require) {
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  let _ = async e => {
    let {
      payload: n,
      isSpaceNext: t
    } = e;
    let {
      files: _,
      prompt: d,
      shareId: c
    } = n;
    let u = _[0];
    if (!u) {
      return;
    }
    let {
      uri: v,
      name: p,
      size: m,
      nodeId: y,
      conversationId: h
    } = u;
    if (h && (await checkConversationValid.isConversationValid(h))) {
      return null;
    }
    let b = {
      input_skill: JSON.stringify({
        skill_id: chatAppEnums.SkillType.CodeInterpreter.toString(),
        skill_type: chatAppEnums.SkillType.CodeInterpreter
      })
    };
    let g = t ? {
      type: "mix_ai_space",
      value: JSON.stringify({
        obj_token: y,
        obj_type: 12,
        use_time: String(Math.floor(Date.now() / 1000))
      })
    } : {
      type: "ai_space",
      value: JSON.stringify({
        node_id: y,
        share_id: c
      })
    };
    b.samantha_onboarding = JSON.stringify(g);
    return [{
      text: d,
      localConversationId: chatConversationUtils_1.generateLocalId(),
      nestedItems: [{
        type: contentTypeEnums.resourceType.File,
        fileType: contentTypeEnums.mediaType.File,
        fileKey: v,
        fileName: p,
        size: m || 0,
        identifier: ""
      }],
      reportParams: {
        scene: "ai_space",
        entrance_from: "ai_space_ask_doubao",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_DRIVE
      },
      botType: "Main",
      conversationType: chatCoreConstants.BotTypes.CocoSub,
      extraExt: b
    }];
  };
  require.d(exports, {
    parseExcelCodeInterpreterUrl: function () {
      return _;
    }
  });
}