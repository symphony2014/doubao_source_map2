// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'sendSkillGuidanceMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 423077
         */
module.exports = function (module, exports, require) {
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var attachmentToMessageBlockTransformer = require("attachment-to-message-block-transformer") /*id: 324654*/;
  let s = e => {
    let {
      attachmentStates: t = [],
      attachments: n,
      referenceBlocks: i = [],
      query: r,
      attachmentBlock: s
    } = e;
    let u = s || attachmentToMessageBlockTransformer.transformAttachmentsToMessageBlock({
      attachments: n,
      attachmentKeys: t.map(e => e.fileKey || e.localKey),
      attachmentStates: t
    });
    let d = chatTextBlockFactory.createTextBlock(r || "");
    return conversationMessageUtils.assembleContentBlocks({
      attachmentBlock: u,
      textBlock: d,
      referenceBlocks: i
    });
  };
  let u = e => {
    let {
      chatId: t,
      extraExt: n,
      referenceBlocks: i,
      query: r,
      attachmentStates: a = [],
      attachments: o = [],
      abilityParams: u,
      ability_type: d,
      blockSkillType: c
    } = e;
    let {
      style: p,
      ratio: f,
      model: m
    } = u || {};
    let v = s({
      referenceBlocks: i,
      query: r,
      attachments: o,
      attachmentStates: a
    });
    let h = {
      chat_ability: conversationMessageUtils.serializeAbilityData(c, JSON.stringify({
        ability_type: d,
        ability_param: {
          style: p,
          ratio: f,
          model: m
        }
      }))
    };
    return conversationMessageUtils.createMessageObject({
      conversation: conversationMessageUtils.parseConversationId(t || ""),
      message: {
        content_blocks_v2: v,
        ext: {
          ...h,
          ...n
        }
      }
    });
  };
  let d = async e => {
    var t;
    let {
      reportParams: n
    } = e;
    let i = u(e);
    let l = {
      ...n
    };
    if ((t = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService")) === null || t === undefined) {
      return undefined;
    } else {
      return t.sendMessage({
        message: i,
        session: {
          reportParams: l
        }
      });
    }
  };
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var imageConfigConstants = require("image-config-constants") /*id: 362452*/;
  let f = async (e, t) => {
    let {
      reportParams: n,
      abilityParams: i,
      skillId: r,
      skillType: l,
      query: a,
      editImgCtx: o,
      attachmentStates: s,
      extraExt: u
    } = e;
    let {
      style: d,
      ratio: f,
      model: m,
      template_type: v,
      camera_movement: h
    } = i || {};
    let _ = {
      skill_id: r == null ? undefined : r.toString(),
      skill_type: l,
      variables: {
        style: d,
        ratio: f,
        model: m,
        template_type: v,
        camera_movement: h
      }
    };
    let g = {
      ...o
    };
    delete g.thumb_image_url;
    if (s == null ? undefined : s.length) {
      safePropertyAssignUtil.safePropertyAssign(g, {
        ref_images: s.map(e => {
          return {
            image_token: e.fileKey || e.localKey,
            refer_types: imageConfigConstants.styleKeys.overall,
            identifier: (e == null ? undefined : e.localKey) ?? ""
          };
        })
      });
    }
    let y = {
      text: a,
      reportParams: n || {},
      extraExt: {
        ...u,
        input_skill: JSON.stringify(_),
        samantha_context: JSON.stringify({
          query_context: g
        })
      }
    };
    return await t([y]);
  };
  var creationSkillChatFlag = require("creation-skill-chat-flag") /*id: 734713*/;
  let v = e => useLatestCallbackHook_1.useLatestCallback(async t => {
    let {
      forceNova: n
    } = t;
    if (!n && creationSkillChatFlag.isCreationSkillNext()) {
      return await d(t);
    } else {
      return f(t, e);
    }
  });
  require.d(exports, {
    sendSkillGuidanceMessage: function () {
      return v;
    }
  });
}