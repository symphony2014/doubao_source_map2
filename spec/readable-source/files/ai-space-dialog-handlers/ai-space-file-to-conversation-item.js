// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'convertAiSpaceFileToConversationItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 618729
         */
module.exports = function (module, exports, require) {
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  let l = async e => {
    let {
      payload: t,
      isSpaceNext: a
    } = e;
    let {
      files: l,
      shareId: c
    } = t;
    let d = l[0];
    if (!d) {
      return;
    }
    let {
      uri: _,
      name: u,
      size: p,
      nodeId: m,
      conversationId: f
    } = d;
    if (f && (await checkConversationValid.isConversationValid(f))) {
      return null;
    }
    let h = {};
    let v = a ? {
      type: "mix_ai_space",
      value: JSON.stringify({
        obj_token: m,
        obj_type: 12,
        use_time: String(Math.floor(Date.now() / 1000))
      })
    } : {
      type: "ai_space",
      value: JSON.stringify({
        node_id: m,
        share_id: c
      })
    };
    h.samantha_onboarding = JSON.stringify(v);
    let y = chatConversationUtils_1.generateLocalId();
    return [{
      nestedItems: [{
        type: contentTypeEnums.resourceType.File,
        fileType: contentTypeEnums.mediaType.File,
        fileKey: _,
        fileName: u,
        size: p || 0,
        identifier: ""
      }],
      reportParams: {
        scene: "ai_space",
        entrance_from: "ai_space_ask_doubao",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_DRIVE
      },
      extraExt: h,
      botType: "Main",
      conversationType: chatCoreConstants.BotTypes.CocoSub,
      localConversationId: y
    }];
  };
  require.d(exports, {
    convertAiSpaceFileToConversationItem: function () {
      return l;
    }
  });
}