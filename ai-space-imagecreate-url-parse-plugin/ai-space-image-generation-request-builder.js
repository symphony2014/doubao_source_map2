// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'buildImageGenerationRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 419450
         */
module.exports = function (module, exports, require) {
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var checkConversationValid = require("check-conversation-valid") /*id: 131485*/;
  var aiSpaceFileUrlResolver = require("ai-space-file-url-resolver") /*id: 550880*/;
  let d = async e => {
    let t;
    let {
      payload: a,
      shareId: d,
      isSpaceNext: _
    } = e;
    let {
      images: u
    } = a;
    let p = u[0];
    if (!p) {
      return;
    }
    let {
      uri: m,
      nodeId: f,
      conversationId: h
    } = p;
    if (h) {
      let [e, a] = await Promise.all([aiSpaceFileUrlResolver.resolveFileUrls([f], d), checkConversationValid.isConversationValid(p.conversationId)]);
      if (a) {
        return null;
      }
      t = e == null ? undefined : e[f];
    }
    let v = {
      skill_id: chatAppEnums.SkillType.ImageGeneration.toString(),
      skill_type: chatAppEnums.SkillType.ImageGeneration,
      variables: {
        template_type: "placeholder"
      }
    };
    let y = {
      ref_images: [{
        image_token: m,
        refer_types: "overall",
        identifier: "",
        url: t
      }]
    };
    let S = {
      input_skill: JSON.stringify(v),
      answer_with_suggest: "0",
      samantha_context: JSON.stringify({
        query_context: y
      })
    };
    let g = _ ? {
      type: "mix_ai_space",
      value: JSON.stringify({
        obj_token: f,
        obj_type: 12,
        use_time: String(Math.floor(Date.now() / 1000))
      })
    } : {
      type: "ai_space",
      value: JSON.stringify({
        node_id: f,
        share_id: d
      })
    };
    S.samantha_onboarding = JSON.stringify(g);
    return [{
      localConversationId: chatConversationUtils_1.generateLocalId(),
      text: i18nTranslationUtils.i18nextTranslate("aispace_generate_similar_image"),
      reportParams: {
        scene: "ai_space",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_DRIVE,
        entrance_from: "ai_space_ask_doubao"
      },
      extraExt: S,
      botType: "Main",
      conversationType: chatCoreConstants.BotTypes.CocoSub
    }];
  };
  require.d(exports, {
    buildImageGenerationRequest: function () {
      return d;
    }
  });
}