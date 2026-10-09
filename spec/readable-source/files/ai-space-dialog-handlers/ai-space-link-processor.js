// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'handleLinkPayload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 265447
         */
module.exports = function (module, exports, require) {
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  let l = async e => {
    let {
      payload: t,
      isSpaceNext: a
    } = e;
    let {
      links: l,
      prompt: c,
      shareId: d
    } = t;
    let _ = l[0];
    if (!_) {
      return;
    }
    let {
      url: u,
      nodeId: p,
      conversationId: m
    } = _;
    if (m && (await checkConversationValid.isConversationValid(m))) {
      return null;
    }
    let f = {
      input_skill: JSON.stringify({
        skill_id: chatAppEnums.SkillType.ReadPDF.toString(),
        skill_type: chatAppEnums.SkillType.ReadPDF
      })
    };
    let h = a ? {
      type: "mix_ai_space",
      value: JSON.stringify({
        obj_token: p,
        obj_type: 124,
        use_time: String(Math.floor(Date.now() / 1000))
      })
    } : {
      type: "ai_space",
      value: JSON.stringify({
        node_id: p,
        share_id: d
      })
    };
    f.samantha_onboarding = JSON.stringify(h);
    return [{
      localConversationId: chatConversationUtils_1.generateLocalId(),
      compositeContent: {
        text: c,
        links: [u]
      },
      reportParams: {
        scene: "ai_space",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_DRIVE,
        entrance_from: "ai_space_ask_doubao"
      },
      extraExt: f,
      botType: "Main",
      conversationType: chatCoreConstants.BotTypes.CocoSub
    }];
  };
  require.d(exports, {
    handleLinkPayload: function () {
      return l;
    }
  });
}