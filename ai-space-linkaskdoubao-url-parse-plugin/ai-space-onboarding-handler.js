// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'getSpaceOnboardingMsg'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 348011
         */
module.exports = function (module, exports, require) {
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  let s = async e => {
    let {
      payload: t,
      isSpaceNext: a
    } = e;
    let {
      links: s,
      shareId: l
    } = t;
    let c = s[0];
    if (!c) {
      return;
    }
    let {
      url: d,
      nodeId: _,
      conversationId: u
    } = c;
    if (u && (await checkConversationValid.isConversationValid(u))) {
      return null;
    }
    let p = {};
    let m = a ? {
      type: "mix_ai_space",
      value: JSON.stringify({
        obj_token: _,
        obj_type: 124,
        use_time: String(Math.floor(Date.now() / 1000))
      })
    } : {
      type: "ai_space",
      value: JSON.stringify({
        node_id: _,
        share_id: l
      })
    };
    p.samantha_onboarding = JSON.stringify(m);
    return [{
      localConversationId: chatConversationUtils_1.generateLocalId(),
      compositeContent: {
        text: "",
        links: [d]
      },
      reportParams: {
        scene: "ai_space",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_DRIVE,
        entrance_from: "ai_space_ask_doubao"
      },
      extraExt: p,
      botType: "Main",
      conversationType: chatCoreConstants.BotTypes.CocoSub
    }];
  };
  require.d(exports, {
    getSpaceOnboardingMsg: function () {
      return s;
    }
  });
}